# Changed — Bundle Modifications Report (Part 008 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `8 / 50` (**286** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 17. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L193-L195` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L114-L117) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L193-L195)

```diff
-       if (!Number.isFinite(qq)) return qq;
-       const Eq = qq - lq * Math.floor(qq / lq);
-       return Eq < lq ? Eq : 0
+       var zC, ZC, QC, wC, fC, oC, qC;
+       const FC = [...Object.values(null !== (zC = CC.textureOverrides) && void 0 !== zC ? zC : {}), ...Object.values(null !== (ZC = CC.modelOverrides) && void 0 !== ZC ? ZC : {})],
+         WC = [...Object.values(null !== (QC = null === (wC = CC.customCss) || void 0 === wC ? void 0 : wC.fontFaces) && void 0 !== QC ? QC : {}), ...Object.values(null !== (fC = null === (oC = CC.customCss) || void 0 === oC ? void 0 : oC.classStyles) && void 0 !== fC ? fC : {})]. … [truncated]
+       return !FC.every(bC) || !Object.values(null !== (qC = CC.skyBoxes) && void 0 !== qC ? qC : {}).every(nC) || WC.some((CC => "string" === typeof CC && MC(CC)))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L199` → after: `L121-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L121-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L121-L137) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L199)

```diff
-       return qq + xq(qq, Eq)
+       if (null === CC || "player" === zC || !gC(CC)) return CC;
+       const ZC = {
+         ...CC
+       };
+       return CC.textureOverrides && (ZC.textureOverrides = PC(CC.textureOverrides, bC, "texture")), CC.modelOverrides && (ZC.modelOverrides = PC(CC.modelOverrides, bC, "model")), CC.skyBoxes && (ZC.skyBoxes = PC(CC.skyBoxes, nC, "sky")), CC.customCss && (ZC.customCss = function(C … [truncated]
+         const zC = CC => PC(CC, (CC => "string" === typeof CC && !MC(CC)), "CSS"),
+           {
+             fontFaces: ZC,
+             classStyles: QC
+           } = pC(CC) ? CC : {},
+           wC = {};
+         for (const [bC, nC] of Object.entries(pC(QC) ? QC : {})) wC[bC] = zC(nC);
+         return {
+           fontFaces: (Array.isArray(ZC) ? ZC : []).map(zC),
+           classStyles: wC
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L203-L217` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L141) · [Before (L203-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L203-L217)

```diff
-       return Math.max(-Yq, Math.min(Yq, qq))
-     }
- 
-     function Wq(qq, Eq, gq) {
-       const Yq = Math.cos(Eq);
-       return gq[0] = Yq * Math.sin(qq), gq[1] = -Math.sin(Eq), gq[2] = Yq * Math.cos(qq), gq
-     }
- 
-     function Nq(qq, Eq, gq, Yq) {
-       const lq = Math.sqrt(qq * qq + gq * gq);
-       return lq < Oq && Math.abs(Eq) < Oq || (lq >= Oq && (Yq.heading = Math.atan2(qq, gq)), Yq.pitch = Bq(Math.atan2(-Eq, lq) + 0)), Yq
-     }
- 
-     function aq(qq, Eq) {
-       return Nq(qq[0], qq[1], qq[2], Eq)
+       return "object" === typeof CC && null !== CC && !Array.isArray(CC)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L221-L239` → after: `L145-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L145-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L145-L155) · [Before (L221-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L221-L239)

```diff
-       return Nq(Eq[0] - qq[0], Eq[1] - qq[1], Eq[2] - qq[2], gq)
-     }
-   },
-   39147: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Oq,
-       f: () => lq
-     });
-     var Yq = gq(39118);
- 
-     function lq(qq) {
-       var Eq;
-       const gq = "default" === qq.mode ? "movement" : null !== (Eq = qq.playerFacing) && void 0 !== Eq ? Eq : "movement";
-       return "cursor" === gq ? {
-         facing: gq,
-         mouseTurns: null
- ... (3 more removed lines; see GitHub link above)
+       const QC = Object.entries(pC(CC) ? CC : {}),
+         wC = QC.filter((CC => {
+           let [, ZC] = CC;
+           return !zC(ZC)
+         }));
+       if (wC.length > 0) {
+         const CC = wC.map((CC => {
+           let [zC] = CC;
+           return zC
+         }));
+         console.warn(`Ignoring a custom game texture pack's ${ZC} files that name another site: ${CC.join(", ")}`)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L241-L244` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L157-L160) · [Before (L241-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L241-L244)

```diff
-     }
- 
-     function Oq(qq, Eq, gq, lq, Oq, mq) {
-       return mq.VJ = 0, mq.dJ = 0, mq.pointedAt = void 0, void 0 !== lq ? Oq ? (mq.pointedAt = lq, qq) : (0, Yq.v)(lq.heading) : Oq ? (mq.VJ = Eq, mq.dJ = gq, qq) : (0, Yq.v)(qq + Eq)
+       return Object.fromEntries(QC.filter((CC => {
+         let [, ZC] = CC;
+         return zC(ZC)
+       })))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L247` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L163) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L247)

```diff
-   39129: (qq, Eq, gq) => {
+   50746: (CC, zC, ZC) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L249` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L165-L167) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L249)

```diff
-       b: () => Rq
+       b: () => gC,
+       f: () => RC,
+       g: () => GC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L251-L409` → after: `L169-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L169-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L169-L182) · [Before (L251-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L251-L409)

```diff
-     var Yq = gq(39138),
-       lq = gq(39118),
-       Oq = gq(37042);
- 
-     function mq(qq, Eq, gq, Yq) {
-       if (!(Yq > 0)) return Eq;
-       const lq = Eq > qq ? Math.min(Eq, qq + gq / Yq) : Math.max(Eq, qq - gq / Yq);
-       return Math.abs(Eq - lq) < 1e-9 ? Eq : lq
-     }
-     class xq {
-       constructor() {
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
-           colour: Yq.h,
-           alpha: 0
-         }
-       }
- ... (143 more removed lines; see GitHub link above)
+     var QC = ZC(970),
+       wC = ZC(2063),
+       bC = ZC(3229),
+       nC = ZC(3242),
+       fC = ZC(34214),
+       oC = ZC(34210),
+       qC = ZC(50739),
+       FC = ZC(40820),
+       WC = ZC(40798),
+       NC = ZC(5021);
+     const MC = {
+       pack: null,
+       gameSource: null
+     };
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L412` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L185) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L412)

```diff
-         this.limits = qq, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
+         this.host = CC, this.ready = void 0, this.state = MC, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L414-L415` → after: `L187-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L187-L190) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L414-L415)

```diff
-       continueFrom(qq) {
-         this.limits && (this.yawOffset = qq.yawOffset, this.pitchOffset = qq.pitchOffset, this.idleMs = qq.idleMs)
+       readyWithin(CC) {
+         return Promise.race([this.ready, new Promise((zC => {
+           setTimeout(zC, CC)
+         }))])
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L417-L434` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L192-L193) · [Before (L417-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L417-L434)

```diff
-       update(qq, Eq) {
-         const gq = this.limits;
-         if (!gq) return;
-         const Yq = Number.isFinite(Eq.VJ) ? Eq.VJ : 0,
-           lq = Number.isFinite(Eq.dJ) ? Eq.dJ : 0;
-         if (Eq.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: Eq.pointedAt.heading,
-           pitch: Eq.pointedAt.pitch
-         };
-         else if (0 !== Yq || 0 !== lq) this.idleMs = 0, this.yawOffset += Yq, this.pitchOffset += lq;
-         else {
-           const Eq = Math.max(0, this.idleMs + qq - 200) - Math.max(0, this.idleMs - 200);
-           if (this.idleMs += qq, void 0 !== gq.returnMs && Eq > 0) {
-             const qq = gq.returnMs > 0 ? Math.exp(-3 * Eq / gq.returnMs) : 0;
-             this.yawOffset *= qq, this.pitchOffset *= qq
-           }
- ... (2 more removed lines; see GitHub link above)
+       current() {
+         return this.state
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L436-L440` → after: `L195-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L195-L198) · [Before (L436-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L436-L440)

```diff
-       clampOffsets(qq) {
-         if (qq.maxYaw >= 180) this.yawOffset = (0, lq.z)(0, this.yawOffset);
-         else {
-           const Eq = (0, uq.j)(qq.maxYaw);
-           this.yawOffset = Math.max(-Eq, Math.min(Eq, this.yawOffset))
+       playerState() {
+         return {
+           pack: this.playerPack,
+           gameSource: null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L445-L484` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L201-L203) · [Before (L445-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L445-L484)

```diff
-       apply(qq, Eq) {
-         this.pointedAt && this.limits && (this.yawOffset = (0, lq.z)(qq.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - qq.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
-         const gq = (0, lq.k)(qq.pitch + this.pitchOffset);
-         this.pitchOffset = gq - qq.pitch, Eq.heading = (0, lq.v)(qq.heading + this.yawOffset), Eq.pitch = gq
-       }
-       unapply(qq, Eq) {
-         Eq.heading = (0, lq.v)(qq.heading - this.yawOffset), Eq.pitch = (0, lq.k)(qq.pitch - this.pitchOffset)
-       }
-     }
-     const jq = 1e-6;
- 
-     function Hq(qq) {
-       return Math.sqrt(qq[0] * qq[0] + qq[1] * qq[1] + qq[2] * qq[2])
-     }
- 
-     function oq(qq, Eq, gq, Yq, lq) {
- ... (24 more removed lines; see GitHub link above)
+       onPlayerPackChange(CC) {
+         return this.ownListeners.add(CC), () => {
+           this.ownListeners.delete(CC)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L545-L559` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L206-L207) · [Before (L545-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L545-L559)

```diff
-       sample(qq, Eq, gq) {
-         const {
-           index: Yq,
-           toIndex: Oq,
-           segmentMs: mq,
-           curved: xq
-         } = qq, Aq = this.fromAngles, cq = this.toAngles, uq = this.nodeAngles(Yq, gq.position, Eq, Aq), Bq = this.nodeAngles(Oq, gq.position, Eq, cq);
-         if (mq > 0 && "aim" !== uq && "aim" !== Bq && this.liveTangent(qq, Aq)) return gq.heading = (0, lq.v)(Aq.heading), void(gq.pitch = Aq.pitch);
-         if ("none" === uq && "none" === Bq) return;
-         !xq && mq > 0 && ("tangent" === uq && this.liveTangent(qq, Aq), "tangent" === Bq && this.liveTangent(qq, cq)), "none" === uq ? (0, lq.o)(cq, Aq) : "none" === Bq && (0, lq.o)(Aq, cq);
-         const Wq = xq && qq.beforeIndex >= 0 && "none" !== this.nodeAngles(qq.beforeIndex, gq.position, Eq, this.beforeAngles),
-           Nq = xq && qq.afterIndex >= 0 && "none" !== this.nodeAngles(qq.afterIndex, gq.position, Eq, this.afterAngles),
-           aq = (0, lq.C)(Aq.heading, cq.heading),
-           Vq = hq(qq, Wq ? (0, lq.C)(Aq.heading, this.beforeAngles.heading) : 0, Aq.heading, aq, Nq ? (0, lq.C)(aq, this.afterAngles.heading) : 0, Wq, Nq);
-         gq.heading = (0, lq.v)(Vq), gq.pitch = (0, lq.k)(hq(qq, this.beforeAngles.pitch, Aq.pitch, cq.pitch, this.afterAngles.pitch, Wq, Nq))
+       isUsingCustomGameTexturePack(CC) {
+         return (0, WC.f)(this.state, CC)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L561-L563` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L209-L210) · [Before (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L561-L563)

```diff
-       nodeAngles(qq, Eq, gq, Yq) {
-         const lq = this.rawNodeAngles(qq, Eq, gq, Yq);
-         return "none" !== lq && nq(Yq) && !this.borrowHeading(this.prevNodes[qq], Eq, gq, Yq) && this.borrowHeading(this.nextNodes[qq], Eq, gq, Yq), lq
+       setGamePackConfirm(CC) {
+         this.confirmGamePack = CC
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L565-L574` → after: `L212-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L212-L216) · [Before (L565-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L565-L574)

```diff
-       borrowHeading(qq, Eq, gq, Yq) {
-         const lq = this.borrowedAngles;
-         return !(qq < 0 || "none" === this.rawNodeAngles(qq, Eq, gq, lq) || nq(lq)) && (Yq.heading = lq.heading, !0)
-       }
-       rawNodeAngles(qq, Eq, gq, Yq) {
-         const Oq = this.nodes[qq].keyframe;
-         if (Oq.lookDirection) return (0, lq.p)(Oq.lookDirection, Yq), "aim";
-         if (void 0 !== Oq.lookAt) {
-           const qq = gq(Oq.lookAt);
-           if (qq) return (0, lq.s)(Eq, qq, Yq), "aim"
+       subscribe(CC) {
+         return this.listeners.set(CC, null), this.ready.then((() => {
+           this.deliver(CC)
+         })), () => {
+           this.listeners.delete(CC)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L606-L667` → after: `L219-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L219-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L219-L244) · [Before (L606-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L606-L667)

```diff
-     }
- 
-     function iq(qq, Eq) {
-       const gq = qq.lookDirection || Eq.lookDirection ? function(qq, Eq) {
-         if (!qq || !Eq) return qq === Eq;
-         const gq = Hq(qq),
-           Yq = Hq(Eq);
-         return Math.hypot(qq[0] / gq - Eq[0] / Yq, qq[1] / gq - Eq[1] / Yq, qq[2] / gq - Eq[2] / Yq) < jq
-       }(qq.lookDirection, Eq.lookDirection) : (Yq = qq.lookAt, lq = Eq.lookAt, "object" !== typeof Yq || "object" !== typeof lq ? Yq === lq : Qq(Yq, lq) < jq);
-       var Yq, lq;
-       return Qq(qq.position, Eq.position) < jq && qq.fov === Eq.fov && gq
-     }
-     class Zq {
-       constructor(qq, Eq, gq) {
-         if (this.smooth = Eq, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
- ... (46 more removed lines; see GitHub link above)
+       async setPlayerPack(CC) {
+         const zC = pC(CC) ? null : CC;
+         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(zC), this.change({
+           pack: zC,
+           gameSource: null
+         }, !1);
+         const ZC = await this.storePlayerPack(zC);
+         return ZC && this.announce(), ZC
+       }
+       async packForGame(CC, zC, ZC) {
+         await this.readyWithin(Math.max(0, (null !== ZC && void 0 !== ZC ? ZC : performance.now() + FC.b) - performance.now()));
+         const wC = ++this.picks,
+           bC = (0, QC.i)(CC) ? (0, QC.m)(CC) : null;
+         if (null === bC) return void this.usePlayerPack();
+         let nC;
+         const fC = function(CC) {
+ ... (10 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L669-L720` → after: `L246-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L246-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L246-L257) · [Before (L669-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L669-L720)

```diff
-             return Oq
-           }(gq >= 0 ? this.nodes[gq].position : null, qq.position, Yq >= 0 ? this.nodes[Yq].position : null, this.prevGaps[Eq], this.nextGaps[Eq], [0, 0, 0])
-         })), this.aim = new bq(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Eq)
-       }
-       sample(qq, Eq, gq, Yq) {
-         const lq = this.findSegment(this.pathTime(qq));
-         this.samplePosition(lq, Yq.position), this.aim.sample(lq, Eq, Yq);
-         const {
-           beforeIndex: Oq,
-           afterIndex: mq
-         } = lq;
-         Yq.fov = hq(lq, Oq >= 0 ? this.fovAt(Oq, gq) : 0, this.fovAt(lq.index, gq), this.fovAt(lq.toIndex, gq), mq >= 0 ? this.fovAt(mq, gq) : 0, Oq >= 0, mq >= 0)
-       }
-       pathTime(qq) {
-         const Eq = this.nodes[0].timeMs;
-         if (this.loopMs <= 0 || qq <= Eq) return qq;
- ... (36 more removed lines; see GitHub link above)
+           }
+         }(2e4);
+         try {
+           const CC = await Promise.race([zC.packKey(bC), fC.passed]);
+           if (null !== CC && this.onGamePack && this.state.gameSource === CC) return;
+           if (null !== CC && CC === this.skippedKey) return void(this.Sg || this.picks !== wC || this.usePlayerPack());
+           nC = null === CC ? null : await Promise.race([SC(bC, CC, zC), fC.passed])
+         } catch (WC) {
+           const CC = !this.Sg && this.picks === wC && this.holdsOtherGamePack(bC);
+           return this.host.warn(`the texture pack of ${bC} didn't load: ${CC?"the player's own shows":"the pack in play stays"}`, WC), void(CC && this.usePlayerPack())
+         } finally {
+           fC.clear()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L722-L803` → after: `L259-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L259-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L259-L279) · [Before (L722-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L722-L803)

```diff
-         const Yq = 0 === qq ? gq : qq;
-         return this.nodes[Yq].timeMs - this.nodes[Yq - 1].timeMs
-       }
-     }
-     class fq {
-       constructor(qq) {
-         this.kB = qq, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Eq => qq.getEntityPosition(Eq), this.readAimPoint = Eq => qq.getEntityAimPoint(Eq)
-       }
-       aimPoint(qq) {
-         return "string" !== typeof qq ? (0, Aq.q)(qq, 3) ? qq : null : this.resolve(qq, this.readAimPoint, this.lastAimPoints)
-       }
-       currentAimPoint(qq) {
-         const Eq = "string" === typeof qq ? this.kB.getEntityAimPoint(qq) : qq;
-         return Eq && (0, Aq.q)(Eq, 3) ? Eq : null
-       }
-       feetPosition(qq) {
- ... (66 more removed lines; see GitHub link above)
+         if (this.Sg || this.picks !== wC) return;
+         null !== nC && (0, qC.g)(nC.pack) && (this.host.warn(`the texture pack of ${bC} names files on other sites: the player's own shows`, null), nC = null);
+         const oC = null === nC || await this.confirmed(nC.pack, bC) ? null : nC.key;
+         this.Sg || this.picks !== wC || (null !== oC && (this.skippedKey = oC, nC = null), null === nC ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
+           pack: nC.pack,
+           gameSource: nC.key
+         }, !0)))
+       }
+       endGamePack() {
+         this.picks++, this.usePlayerPack()
+       }
+       holdsOtherGamePack(CC) {
+         return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(CC)
+       }
+       async confirmed(CC, zC) {
+         const ZC = this.confirmGamePack;
+ ... (5 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L832-L840` → after: `L282-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L282-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L282-L291) · [Before (L832-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L832-L840)

```diff
-       placeGoal(qq, Eq) {
-         const gq = this.settings.offset;
-         let Yq = gq[0],
-           lq = gq[2];
-         if ("target" === this.settings.offsetSpace) {
-           const qq = this.targets.heading(Eq),
-             Oq = Math.cos(qq),
-             mq = Math.sin(qq);
-           Yq = gq[0] * Oq + gq[2] * mq, lq = -gq[0] * mq + gq[2] * Oq
+       async readPlayerPack() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (null !== CC && this.ownAnnouncements.delete(CC)) return;
+         await this.ready;
+         const zC = this.ownChanges;
+         let ZC;
+         try {
+           ZC = await this.host.store.getItem(nC.b, !0)
+         } catch (wC) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", wC)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L842-L853` → after: `L293-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L293-L298) · [Before (L842-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L842-L853)

```diff
-         this.goal[0] = qq[0] + Yq, this.goal[1] = qq[1] + gq[1], this.goal[2] = qq[2] + lq
-       }
-     }
-     class Gq {
-       constructor(qq, Eq, gq, Yq) {
-         var lq, Oq;
-         this.settings = qq, this.kB = Eq, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = qq.keyframes.length > 0 ? new Zq(qq.keyframes, null === (lq = qq.smooth) || void 0 === lq || lq, null !== (Oq = qq.loop) && void 0  … [truncated]
-       }
-       update(qq, Eq, gq) {
-         this.elapsedMs += qq;
-         const Yq = Nq(this.settings, this.kB);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Yq, this.base) : this.base.fov = Yq, (0, Aq.g)(this.base.position, gq.position), gq.fov = this.base.fov, Eq.apply(this.base, gq)
+         if (this.Sg || this.ownChanges !== zC) return;
+         const QC = PC(ZC);
+         (0, NC.b)(QC, this.playerPack) || (this.ownChanges++, this.setOwn(QC), this.onGamePack || this.change({
+           pack: QC,
+           gameSource: null
+         }, !1))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L855-L856` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L300-L301) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L855-L856)

```diff
-       continueFrom(qq) {
-         qq instanceof Gq && (0, Yq.v)(qq.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = qq.elapsedMs, (0, Aq.e)(qq.base, this.base))
+       joinedWithout() {
+         this.picks++
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L858-L859` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L303-L304) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L858-L859)

```diff
-       reset(qq) {
-         Tq(this.base, qq), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+       dispose() {
+         this.Sg = !0, this.listeners.clear()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L861-L867` → after: `L306-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L306-L323) · [Before (L861-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L861-L867)

```diff
-     }
- 
-     function Lq(qq, Eq) {
-       return (0, Yq.y)(qq, Eq)
-     }
-     class Jq {
-       constructor(qq, Eq, gq) {
+       async readStored() {
+         const {
+           store: CC,
+           warn: zC
+         } = this.host;
+         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, oC.i)(CC, !0, (CC => {
+           zC("the custom game's texture pack wasn't removed from storage", CC)
+         })).then((CC => {
+           this.takeOneShot(CC)
+         }), (CC => {
+           zC("the custom game's texture pack didn't read: the player's own shows", CC)
+         })), CC.getItem(nC.b, !0).then((CC => {
+           this.takeStoredOwn(CC)
+         }), (CC => {
+           zC("the stored texture pack didn't read: the default pack shows", CC), this.takeStoredOwn(null)
+         }))]), this.update()
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L869-L944` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L325-L328) · [Before (L869-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L869-L944)

```diff
-         this.settings = qq, this.kB = Eq, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const lq = null !== gq && gq.settings.mode === qq.mode,
-           Oq = lq ? gq.pose : Eq.getDefaultPose();
-         this.pose = (0, Aq.e)(Oq, (0, Aq.j)()), this.lastGoodPose = (0, Aq.e)(lq ? gq.lastGoodPose : Oq, (0, Aq.j)()), this.look = new dq(qq.playerLook), this.targets = null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.targets) && void 0 !== Yq ? Yq : new fq(Eq);
-         const mq = (0, Aq.e)(Oq, (0, Aq.j)());
-         lq && gq.look.unapply(mq, mq), this.mode = function(qq, Eq, gq, Yq) {
-           switch (qq.mode) {
-             case "fixed":
-               return new Sq(qq, Eq, gq, Yq);
-             case "follow":
-               return new pq(qq, Eq, gq, Yq);
-             case "path":
-               return new Gq(qq, Eq, gq, Yq);
-             case "frame":
-               return new Vq(qq, Eq, gq, Yq)
-           }
- ... (60 more removed lines; see GitHub link above)
+         null === CC || this.Sg || this.changes > 0 || this.picks > 0 || ((0, qC.g)(CC.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
+           pack: CC.pack,
+           gameSource: null !== (zC = CC.source) && void 0 !== zC ? zC : ""
+         }))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L946-L952` → after: `L330-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L330-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L330-L349) · [Before (L946-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L946-L952)

```diff
-       update(qq, Eq) {
-         const gq = Number.isFinite(qq) && qq > 0 ? qq : 0;
-         if (this.fade.advance(gq) && null !== this.pending) {
-           const {
-             settings: qq
-           } = this.pending;
-           this.pending = null, this.show(qq, !0)
+       takeStoredOwn(CC) {
+         if (this.playerPicked || this.Sg) return;
+         if (this.ownChanges++, this.setOwn(PC(CC)), this.onGamePack) return;
+         const zC = {
+           pack: this.playerPack,
+           gameSource: null
+         };
+         0 === this.changes ? this.state = zC : this.change(zC, !1)
+       }
+       async update() {
+         const CC = this.playerPack,
+           zC = null === CC || void 0 === CC ? void 0 : CC.metaData.id;
+         if (!CC || !zC || !this.host.fetchLatest || zC === wC.c || zC === wC.q.CUSTOM) return;
+         const ZC = wC.u[zC];
+         if (void 0 === ZC || CC.metaData.version >= ZC) return;
+         let QC;
+ ... (4 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L954-L958` → after: `L351-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L351-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L351-L365) · [Before (L954-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L954-L958)

```diff
-         this.loadingPositions.length = 0;
-         const Yq = this.pending;
-         if (null !== Yq && void 0 !== Yq && Yq.shot) {
-           const qq = "path" === Yq.settings.mode ? 0 : gq;
-           this.noteLoadingPosition(Yq.shot.update(qq, Aq.b).position)
+         null === QC || this.Sg || this.playerPack !== CC || (this.ownChanges++, this.setOwn(QC), this.onGamePack || this.change({
+           pack: QC,
+           gameSource: null
+         }, !1), await this.storePlayerPack(QC) && this.announce())
+       }
+       announce() {
+         const CC = (0, fC.c)();
+         null !== CC && this.ownAnnouncements.add(CC)
+       }
+       setOwn(CC) {
+         this.playerPack = CC;
+         for (const ZC of [...this.ownListeners]) try {
+           ZC()
+         } catch (zC) {
+           this.host.warn("a texture pack listener threw", zC)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L972-L975` → after: `L368-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L368-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L368-L378) · [Before (L972-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L972-L975)

```diff
-       noteLoadingPosition(qq) {
-         if (qq.every(Number.isFinite)) {
-           const Eq = this.loadingPositions;
-           Eq.push((0, Aq.g)(qq, this.loadingSlots[Eq.length]))
+       usePlayerPack() {
+         this.onGamePack && this.change({
+           pack: this.playerPack,
+           gameSource: null
+         }, !1)
+       }
+       async storePlayerPack(CC) {
+         try {
+           return null === CC ? (await this.host.store.removeItem(nC.b), !0) : await this.host.store.setItem(nC.b, CC)
+         } catch (zC) {
+           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", zC), !1
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L978-L1184` → after: `L381-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L381-L385) · [Before (L978-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L978-L1184)

```diff
-       writeOutput(qq) {
-         const Eq = this.output;
-         (0, Aq.m)(qq) ? (0, Aq.e)(qq, Eq) : this.hasOutput || (0, Aq.e)(this.kB.getDefaultPose(), Eq), Eq.pitch = (0, lq.k)(Eq.pitch);
-         const gq = this.kB.getDefaultFov(),
-           Oq = Number.isFinite(gq) && gq > 0 && gq < 180,
-           mq = Oq ? Math.min(Yq.m.minFov, gq) : Yq.m.minFov,
-           xq = Oq ? Math.max(Yq.m.maxFov, gq) : Yq.m.maxFov;
-         return Eq.fov = Number.isFinite(Eq.fov) ? Math.min(xq, Math.max(mq, Eq.fov)) : xq, this.hasOutput = !0, Eq
-       }
-     }
-   },
-   39115: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => lq,
-       e: () => xq,
-       g: () => mq,
- ... (191 more removed lines; see GitHub link above)
+       change(CC, zC) {
+         if (!this.Sg) {
+           this.changes++, this.onGamePack = zC, this.state = CC;
+           for (const CC of [...this.listeners.keys()]) this.deliver(CC)
+         }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1186-L1250` → after: `L387-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L387-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L387-L389) · [Before (L1186-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1186-L1250)

```diff
-     }
-   },
-   38638: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => xq
-     });
-     var Yq = gq(1214);
- 
-     function lq(qq) {
-       const Eq = /(\d*\.?\d+)px/.exec(qq);
-       return Eq ? Number(Eq[1]) : null
-     }
- 
-     function Oq(qq) {
-       return qq.split(/[\s,]+/).pop()
-     }
- ... (49 more removed lines; see GitHub link above)
+       deliver(CC) {
+         if (!this.Sg && this.listeners.has(CC) && this.listeners.get(CC) !== this.state) {
+           this.listeners.set(CC, this.state);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1252-L1291` → after: `L391-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L391-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L391-L393) · [Before (L1252-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1252-L1291)

```diff
-             return qq.scale(gq, gq), {
-               height: this.drawLines(qq, Eq, Yq / gq, xq / gq, Aq / gq, cq / gq, oq).height * gq
-             }
-           } finally {
-             qq.restore()
-           }
-         }
-         return this.drawLines(qq, Eq, Yq, xq, Aq, cq, Nq)
-       },
-       drawLines: function(qq, Eq, gq, lq, Oq, mq, xq) {
-         const Aq = gq + Oq,
-           cq = lq + mq;
-         let uq, Bq = lq + mq / 2 + xq / 2;
-         "right" === this.align ? (uq = Aq, qq.textAlign = "right") : "left" === this.align ? (uq = gq, qq.textAlign = "left") : (uq = gq + Oq / 2, qq.textAlign = "center");
-         for (const Yq of Eq) {
-           qq.measureText(Yq).width >= Oq && (Eq = Eq.replace(Yq, ""))
- ... (24 more removed lines; see GitHub link above)
+             CC(this.state)
+           } catch (zC) {
+             this.host.warn("a texture pack listener threw", zC)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1366-L1389` → after: `L398-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L398-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L398-L407) · [Before (L1366-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1366-L1389)

```diff
- 
-     function Bq(qq) {
-       return uq(qq, null, "a leaderboard's rows")
-     }
- 
-     function Wq(qq, Eq) {
-       var gq, Yq;
-       return null !== Eq && void 0 !== Eq ? Eq : {
-         status: null !== (gq = qq.status) && void 0 !== gq ? gq : "loading",
-         entries: null !== (Yq = qq.entries) && void 0 !== Yq ? Yq : []
-       }
-     }
- 
-     function Nq(qq, Eq) {
-       return "number" === typeof qq && Number.isFinite(qq) && qq > 0 ? qq : Eq
-     }
- ... (8 more removed lines; see GitHub link above)
+     async function SC(CC, zC, ZC) {
+       const QC = (0, oC.e)(await ZC.fetchPack(zC));
+       if (null !== QC) return {
+         pack: QC,
+         key: zC
+       };
+       const wC = await ZC.packKey(CC);
+       if (null === wC) return null;
+       const bC = (0, oC.e)(await ZC.fetchPack(wC));
+       if (null === bC) throw new Error(`no texture pack at ${wC}`);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1391-L1396` → after: `L409-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L409-L410) · [Before (L1391-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1391-L1396)

```diff
-         width: Yq,
-         height: lq,
-         layoutWidth: Math.max(Oq, mq / xq),
-         layoutHeight: Math.max(mq, Oq * xq),
-         pixelWidth: Math.round(Aq),
-         pixelHeight: Math.round(Math.max(1, Math.min(Eq, Aq * xq)))
+         pack: bC,
+         key: wC
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1524-L1538` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L415) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1524-L1538)

```diff
-       const Eq = [""];
-       let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         lq = "";
-       const Oq = () => {
-         Eq.push(""), gq = 0, lq = ""
-       };
-       for (const mq of qq.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(mq)) Oq();
-         else if (/^\s+$/.test(mq)) lq += mq;
-       else if (mq.length > 0) {
-         const qq = Array.from(mq);
-         gq > 0 && gq + lq.length + qq.length > Yq && Oq(), Eq[Eq.length - 1] += lq, gq += lq.length, lq = "";
-         for (const lq of qq) gq >= Yq && Oq(), Eq[Eq.length - 1] += lq, gq++
-       }
-       return Eq[Eq.length - 1] += lq, Eq
+       return null === CC || CC.metaData.id === wC.c
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1550-L1556` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L419-L420) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1550-L1556)

```diff
-       if (!qq) return [...Oq];
-       try {
-         const [Eq, gq, Yq] = lq()(qq).rgb().array();
-         return [Eq / 255, gq / 255, Yq / 255]
-       } catch (Eq) {
-         return console.warn(`Invalid groundArrowPath colour "${qq}":`, Eq), [...Oq]
-       }
+       const zC = (0, oC.e)(CC);
+       return pC(zC) ? null : zC
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1558-L1675` → after: `L422-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L422-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L422-L428) · [Before (L1558-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1558-L1675)

```diff
-   },
-   34293: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq,
-       f: () => xq,
-       g: () => mq,
-       j: () => lq,
-       k: () => Yq
-     });
-     const Yq = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
- ... (102 more removed lines; see GitHub link above)
+     async function GC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bC.d;
+       if (null === CC.pack) return null;
+       const {
+         packAssets: QC
+       } = await Promise.all([ZC.e(203), ZC.e(44)]).then((() => ZC(61135)));
+       return QC(CC, zC)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L1678-L1686` → after: `L431-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L431-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L431-L437) · [Before (L1678-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L1678-L1686)

```diff
-     function xq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       if (qq === Eq || Number.isNaN(qq) && Number.isNaN(Eq)) return !0;
-       if ("object" !== typeof qq || "object" !== typeof Eq || null === qq || null === Eq || Array.isArray(qq) !== Array.isArray(Eq)) return !1;
-       const Yq = qq,
-         lq = Eq;
-       for (const Oq of new Set([...Object.keys(Yq), ...Object.keys(lq)]))
-         if (!gq.includes(Oq) && !xq(Yq[Oq], lq[Oq])) return !1;
-       return !0
+     function RC(CC) {
+       const zC = (0, nC.t)();
+       return null === zC ? () => {} : (zC.onmessage = zC => {
+         CC.readPlayerPack((0, fC.g)(zC.data))
+       }, () => {
+         zC.close()
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 1. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/202.js#L4)

```diff
-   34302: (qq, Eq, gq) => {
+   34221: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L6-L15` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/202.js#L6-L9) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/202.js#L6-L15)

```diff
-       animatedBlockTextures: () => Aq,
-       armourAtlasUrl: () => mq,
-       averageColors: () => cq,
-       blockAtlasUrls: () => Oq,
-       blockAtlasWidth: () => Yq,
-       buildHash: () => Bq,
-       builtTextureIndexFingerprint: () => uq,
-       imagesPerAtlas: () => lq,
-       outputHash: () => Wq,
-       rotatedBlockTextures: () => xq
+       packDisplayName: () => gC,
+       packModelMessage: () => SC,
+       packModelSummary: () => PC,
+       refusedPackModels: () => pC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L17-L10900` → after: `L11-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L11-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/202.js#L11-L157) · [Before (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/202.js#L17-L10900)

```diff
-     const Yq = 8,
-       lq = [256, 256, 256, 256, 256, 256, 114],
-       Oq = [gq(34305), gq(34314), gq(34317), gq(34324), gq(34330), gq(34333), gq(34336)],
-       mq = gq(34343),
-       xq = {
-         "alloy_kiln_top[rot[1": gq(34345),
-         "alloy_kiln_top[rot[2": gq(34351),
-         "alloy_kiln_top[rot[3": gq(34355),
-         "alloy_kiln_top[rot[4": gq(34364),
-         "auto_bench_top[rot[1": gq(34373),
-         "auto_bench_top[rot[2": gq(34381),
-         "auto_bench_top[rot[3": gq(34387),
-         "auto_bench_top[rot[4": gq(34390),
-         "belt_tunnel_exit_top[rot[1": gq(34394),
-         "belt_tunnel_exit_top[rot[2": gq(34401),
-         "belt_tunnel_exit_top[rot[3": gq(34407),
- ... (10868 more removed lines; see GitHub link above)
+     var QC = ZC(34223),
+       wC = ZC(34228);
+     const bC = "DRACO",
+       nC = 0,
+       fC = 1,
+       oC = 0,
+       qC = 1,
+       FC = 32768;
+ 
+     function WC(CC) {
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       let ZC = 0;
+       const QC = () => {
+           if (ZC >= CC.byteLength) throw new RangeError("past the stream");
+           return CC[ZC++]
+         },
+ ... (131 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L6)

```diff
-   36325: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       WasmTextureWorker: () => Hq
+   34223: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => mC,
+       f: () => dC,
+       j: () => YC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L8-L11` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L10-L67) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L8-L11)

```diff
-     var Yq = gq(583),
-       lq = gq(3086),
-       Oq = gq(36328),
-       mq = gq.n(Oq);
+     var QC = ZC(34228);
+     const wC = {
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
+       bC = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L13-L14` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L69-L70) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L13-L14)

```diff
-     function xq() {
-       return mq()('(()=>{var qq={d:(Eq,gq)=>{for(var Yq in gq)qq.o(gq,Yq)&&!qq.o(Eq,Yq)&&Object.defineProperty(Eq,Yq,{enumerable:!0,get:gq[Yq]})},o:(qq,Eq)=>Object.prototype.hasOwnProperty.call(qq,Eq),r:qq=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(q … [truncated]
+     function pC(CC) {
+       return CC.toLocaleString("en-US")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L22-L23` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L73-L78) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L22-L23)

```diff
-     function Nq(qq) {
-       return "" === qq ? [] : qq.split("\0")
+     function PC(CC, zC, ZC) {
+       return CC > zC ? `has ${pC(CC)} ${ZC} (the limit is ${pC(zC)})` : null
+     }
+ 
+     function GC(CC, zC) {
+       return Number.isInteger(CC) && CC >= 0 && CC < (null !== zC && void 0 !== zC ? zC : 0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L27-L28` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L82) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L27-L28)

```diff
-       if ("" !== qq)
-         for (const Eq of qq.split("\n")) console.error(Eq)
+       return Number.isInteger(CC) && CC >= 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L32-L76` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L86) · [Before (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L32-L76)

```diff
-       return async function(qq, Eq) {
-         const gq = Object.keys(qq),
-           Yq = [],
-           lq = new Map,
-           Oq = new Uint32Array(gq.length);
-         for (const [mq, xq] of gq.entries()) {
-           const {
-             url: Eq
-           } = qq[xq];
-           lq.has(Eq) || (lq.set(Eq, Yq.length), Yq.push(Eq)), Oq[mq] = lq.get(Eq)
-         }
-         return {
-           sources: await Eq(Yq),
-           names: gq.join("\0"),
-           sourceOfName: Oq
-         }
- ... (29 more removed lines; see GitHub link above)
+       return void 0 !== CC && (!Array.isArray(CC) || CC.length > zC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L80-L81` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L90) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L80-L81)

```diff
-       let gq;
-       return qq instanceof uq.m ? gq = qq : (gq = new uq.m(Eq ? uq.k.Optional : uq.k.Error, (0, Bq.c)(qq)), qq instanceof Error && (gq.stack = `${gq.name}: ${gq.message}\n${qq.stack}`)), gq.code !== uq.k.Fetch && gq.code !== uq.k.Error && (0, cq.d)(gq.message), gq
+       return "object" === typeof CC && null !== CC && Object.keys(CC).length > zC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L85` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L94-L95) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L85)

```diff
-       return qq.message ? new Error(`the texture worker failed: ${qq.message}`) : new uq.m(uq.k.Load, "the texture worker failed to start")
+       var zC;
+       return `${CC.normalized?"normalized ":""}${null!==(zC=QC.f[CC.componentType])&&void 0!==zC?zC:CC.componentType} ${CC.type}`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L87-L157` → after: `L97-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L97-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L97-L201) · [Before (L87-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L87-L157)

```diff
-     class Hq {
-       constructor(qq) {
-         this.worker = qq, this.failure = void 0, this.abandonStep = null, qq.addEventListener("error", (qq => {
-           qq.preventDefault(), this.failure ??= jq(qq)
-         }))
-       }
-       static async generateRequired(qq, Eq, gq, Oq) {
-         let mq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uq.d,
-           cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const Wq = (0, Aq.i)();
-         if (null !== Wq) throw dq(new uq.m(uq.k.Load, Wq), !1);
-         let Nq;
-         const jq = new AbortController;
-         try {
-           Nq = new Hq(function() {
-             try {
- ... (55 more removed lines; see GitHub link above)
+ 
+     function IC(CC) {
+       const zC = zC => {
+         var ZC;
+         return null !== (ZC = CC[zC]) && void 0 !== ZC ? ZC : -1
+       };
+       return 255 === zC(0) && 216 === zC(1) ? "JPEG" : 82 === zC(0) && 73 === zC(1) && 87 === zC(8) && 69 === zC(9) ? "WebP" : 171 === zC(0) && 75 === zC(1) && 84 === zC(2) && 88 === zC(3) ? "KTX2" : "non-PNG"
+     }
+ 
+     function iC(CC) {
+       return CC.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((zC, ZC) => CC[ZC] === zC)) && 73 === CC[12] && 72 === CC[13] && 68 === CC[14] && 82 === CC[15]
+     }
+ 
+     function vC(CC) {
+       return /^[aeiou]/i.test(CC) ? `an ${CC}` : `a ${CC}`
+     }
+ ... (89 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L164-L198` → after: `L204-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L204-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L204-L212) · [Before (L164-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L164-L198)

```diff
-             })(),
-             [oq, {
-               inputs: Pq,
-               sources: Qq
-             }] = await Promise.all([Wq, dq]),
-             yq = [Pq.blocks.buffer, Pq.numbers.buffer, Pq.index.buffer, Pq.armour.buffer, Qq.sourceOfName.buffer];
-           for (const qq of Qq.sources) yq.push(qq.buffer);
-           const tq = [],
-             {
-               assets: rq,
-               layerCap: vq,
-               warnings: hq
-             } = await Nq.request({
-               type: "required",
-               module: oq,
-               inputs: Pq,
- ... (19 more removed lines; see GitHub link above)
+               return !1
+             }(CC, aC)) return fC;
+           const tC = null === (ZC = CC.asset) || void 0 === ZC ? void 0 : ZC.version;
+           if ("string" !== typeof tC || !/^2\.\d+/.test(tC)) return `uses glTF version ${null!==tC&&void 0!==tC?tC:"(none)"}`;
+           const DC = null === (nC = CC.asset) || void 0 === nC ? void 0 : nC.minVersion;
+           if (void 0 !== DC && "2.0" !== DC) return `uses glTF version ${DC}`;
+           for (const QC of null !== (jC = CC.extensionsRequired) && void 0 !== jC ? jC : []) {
+             var jC;
+             if (!qC.has(QC)) return `requires the glTF extension ${QC}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L200-L228` → after: `L214-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L214-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L214-L248) · [Before (L200-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L200-L228)

```diff
-         } catch (Pq) {
-           var oq;
-           throw jq.abort(), null === (oq = Nq) || void 0 === oq || oq.terminate(), dq(Pq, !1)
-         }
-       }
-       async generateOptional() {
-         let qq;
-         try {
-           qq = await this.request({
-             type: "optional"
-           }, [])
-         } catch (Eq) {
-           throw dq(Eq, !0)
-         } finally {
-           this.terminate()
-         }
- ... (13 more removed lines; see GitHub link above)
+           if (null !== (WC = CC.animations) && void 0 !== WC && WC.length) return "has animations";
+           if (null !== (pC = CC.skins) && void 0 !== pC && pC.length) return "uses skins";
+           const yC = null !== (RC = CC.buffers) && void 0 !== RC ? RC : [];
+           for (const [QC, wC] of yC.entries()) {
+             if (void 0 !== wC.uri) return oC;
+             if (QC > 0 || !zC) return fC
+           }
+           for (const [QC, wC] of(null !== (LC = CC.bufferViews) && void 0 !== LC ? LC : []).entries()) {
+             var LC;
+             if (!hC(CC, zC, QC) || !eC(wC)) return fC
+           }
+           const UC = null !== (YC = CC.accessors) && void 0 !== YC ? YC : [];
+           for (const QC of UC) {
+             if (void 0 !== QC.sparse) return "uses sparse accessors";
+             const zC = Number.isInteger(QC.count) ? PC(QC.count, wC.accessorElements, "elements in an accessor") : null;
+             if (zC) return zC;
+ ... (19 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L230-L240` → after: `L250-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L250-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L250-L273) · [Before (L230-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L230-L240)

```diff
-             return lq
-           }(qq)
-       }
-       terminate() {
-         var qq;
-         this.worker.terminate(), null === (qq = this.abandonStep) || void 0 === qq || qq.call(this)
-       }
-       request(qq, Eq, gq) {
-         return new Promise(((Yq, lq) => {
-           if (void 0 !== this.failure) return void lq(this.failure);
-           let Oq = uq.q.None,
+           const nz = new Set,
+             fz = CC => {
+               var zC;
+               return !nz.has(CC) && (nz.add(CC), (null !== (zC = kC[CC].children) && void 0 !== zC ? zC : []).every(fz))
+             };
+           for (const QC of null !== (oz = BC[0].nodes) && void 0 !== oz ? oz : []) {
+             var oz;
+             if (!GC(QC, kC.length) || wz.has(QC) || !fz(QC)) return fC
+           }
+           for (const QC of kC) {
+             if (void 0 !== QC.matrix) return "uses node matrices";
+             if (void 0 !== QC.skin) return "uses skins";
+             if (void 0 !== QC.weights) return "uses morph targets";
+             if (void 0 !== QC.mesh && !GC(QC.mesh, VC.length)) return fC;
+             const CC = [
+               [QC.translation, 3],
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L243-L276` → after: `L276-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L276-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L276-L335) · [Before (L243-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L243-L276)

```diff
-           const Aq = () => {
-             var qq;
-             null === (qq = xq) || void 0 === qq || qq.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
-           };
-           this.abandonStep = () => {
-             Aq(), lq(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = Eq => {
-             let {
-               data: cq
-             } = Eq;
-             var Bq;
-             if ("progress" === cq.type) return Oq = cq.stage, mq = cq.wasmBytes, void(null === (Bq = xq) || void 0 === Bq || Bq.restart(Oq === uq.q.Generating ? uq.g : uq.j));
-             "sheet" === cq.type && gq ? gq(cq.sheet, cq.pixels) : (Aq(), "failed" === cq.type ? lq(cq.moduleLoad ? new uq.m(uq.k.Load, cq.reason) : function(qq, Eq) {
-               let {
-                 reason: gq,
-                 stack: Yq
- ... (18 more removed lines; see GitHub link above)
+           for (const wC of VC) {
+             if (void 0 !== wC.weights) return "uses morph targets";
+             if (0 === wC.primitives.length) return fC;
+             for (const ZC of wC.primitives) {
+               var Mz, gz;
+               const wC = null !== (Mz = ZC.mode) && void 0 !== Mz ? Mz : 4;
+               var Sz;
+               if (4 !== wC && 0 !== wC) return `uses ${null!==(Sz=gC[wC])&&void 0!==Sz?Sz:`mode ${wC}`} primitives`;
+               if (void 0 !== ZC.targets) return "uses morph targets";
+               if (void 0 !== ZC.material && !GC(ZC.material, Cz.length)) return fC;
+               const bC = aC ? null === (gz = ZC.extensions) || void 0 === gz ? void 0 : gz.KHR_draco_mesh_compression : void 0;
+               if (bC) {
+                 if (4 !== wC) return "uses Draco-compressed points";
+                 if (!hC(CC, zC, bC.bufferView) || "object" !== typeof bC.attributes) return fC
+               }
+               const nC = ZC.attributes;
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L278` → after: `L337-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L337-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L337-L379) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L278)

```diff
-         }))
+           let Pz = 0,
+             Gz = 0,
+             Rz = 0;
+           for (let QC = 0; QC < kC.length; QC++) {
+             const CC = kC[QC].mesh;
+             if (void 0 !== CC && nz.has(QC))
+               for (const zC of VC[CC].primitives) Rz++, Pz += UC[zC.attributes.POSITION].count, void 0 !== zC.indices && (Gz += UC[zC.indices].count)
+           }
+           const Az = null !== (sC = null !== (TC = PC(Pz, wC.vertices, "vertices")) && void 0 !== TC ? TC : PC(Gz, wC.indices, "indices")) && void 0 !== sC ? sC : PC(Rz, wC.primitives, "primitives");
+           if (Az) return Az;
+           for (const QC of Cz) {
+             var xz, Jz;
+             if (void 0 !== QC.emissiveTexture) return "uses an emissive texture";
+             const zC = null !== (xz = QC.alphaMode) && void 0 !== xz ? xz : "OPAQUE";
+             if ("OPAQUE" !== zC && "MASK" !== zC && "BLEND" !== zC) return fC;
+             const ZC = null === (Jz = QC.pbrMetallicRoughness) || void 0 === Jz ? void 0 : Jz.baseColorTexture;
+ ... (27 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L282-L283` → after: `L383-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L383-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L383-L395) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L282-L283)

```diff
-     function oq(qq, Eq) {
-       return Eq > 0 ? `${qq}, its module's memory ${Math.round(Eq/2**20)} MiB` : qq
+     function mC(CC) {
+       const zC = YC(CC.byteLength);
+       if (zC) return zC;
+       try {
+         const {
+           json: zC,
+           bin: ZC
+         } = (0, QC.x)(CC);
+         return dC(zC, ZC)
+       } catch (ZC) {
+         if (ZC instanceof QC.n) return ZC.reason;
+         throw ZC
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L286` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L398) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L286)

```diff
-   36350: (qq, Eq, gq) => {
+   34228: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L288-L291` → after: `L400-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L400-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L400-L409) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L288-L291)

```diff
-       d: () => Yq,
-       g: () => lq,
-       j: () => Oq,
-       k: () => mq
+       e: () => MC,
+       f: () => NC,
+       h: () => SC,
+       l: () => bC,
+       n: () => wC,
+       q: () => gC,
+       s: () => FC,
+       t: () => WC,
+       w: () => nC,
+       x: () => qC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L293-L294` → after: `L411-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L411-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L411-L421) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L293-L294)

```diff
-     const Yq = 1024,
-       lq = 1024 * Yq;
+     var QC = ZC(34237);
+     class wC extends Error {
+       constructor(CC) {
+         super(`GLB refused: it ${CC}`), this.reason = CC, this.name = "GlbRefused"
+       }
+     }
+     class bC extends Error {
+       constructor(CC) {
+         super(CC), this.name = "GlbError"
+       }
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L297` → after: `L424-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L424-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L424-L459) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L297)

```diff
-       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
+       return Reflect.get(CC, "scene")
+     }
+     const fC = 5130562,
+       oC = "is not a binary glTF 2.0 file";
+ 
+     function qC(CC) {
+       var zC;
+       const ZC = CC instanceof Uint8Array ? CC : new Uint8Array(CC),
+         bC = (0, QC.f)(ZC);
+       if (null === bC) throw new wC(oC);
+       const nC = bC.json,
+         {
+           jsonEnd: qC,
+           length: FC
+         } = bC,
+         WC = new DataView(ZC.buffer, ZC.byteOffset, ZC.byteLength);
+ ... (20 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L301` → after: `L463-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L463-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L463-L469) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L301)

```diff
-       return (qq / lq).toFixed(1)
+       const zC = CC.slice(CC.indexOf(",") + 1),
+         ZC = Uint8Array.fromBase64;
+       if (ZC) return ZC(zC).buffer;
+       const QC = atob(zC),
+         wC = new Uint8Array(QC.length);
+       for (let bC = 0; bC < QC.length; bC++) wC[bC] = QC.charCodeAt(bC);
+       return wC.buffer
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L304-L306` → after: `L515-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L515-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L515-L530) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L304-L306)

```diff
-   36328: qq => {
-     qq.exports = function(qq, Eq, gq, Yq) {
-       var lq = self || window;
+   34237: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC,
+       f: () => bC,
+       g: () => nC
+     });
+     const QC = 1179937895,
+       wC = 1313821514;
+ 
+     function bC(CC) {
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       if (CC.byteLength < 20 || zC.getUint32(0, !0) !== QC || 2 !== zC.getUint32(4, !0)) return null;
+       const ZC = Math.min(zC.getUint32(8, !0), CC.byteLength),
+         bC = zC.getUint32(12, !0);
+       if (zC.getUint32(16, !0) !== wC || 20 + bC > ZC) return null;
+       let nC;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L308-L324` → after: `L532-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/203.js#L532-L534) · [Before (L308-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/203.js#L308-L324)

```diff
-         try {
-           var Oq;
-           try {
-             Oq = new lq.Blob([qq])
-           } catch (cq) {
-             (Oq = new(lq.BlobBuilder || lq.WebKitBlobBuilder || lq.MozBlobBuilder || lq.MSBlobBuilder)).append(qq), Oq = Oq.getBlob()
-           }
-           var mq = lq.URL || lq.webkitURL,
-             xq = mq.createObjectURL(Oq),
-             Aq = new lq[Eq](xq, gq);
-           return mq.revokeObjectURL(xq), Aq
-         } catch (cq) {
-           return new lq[Eq]("data:application/javascript,".concat(encodeURIComponent(qq)), gq)
-         }
-       } catch (cq) {
-         if (!Yq) throw Error("Inline worker is not supported");
- ... (1 more removed lines; see GitHub link above)
+         nC = JSON.parse((new TextDecoder).decode(CC.subarray(20, 20 + bC)))
+       } catch {
+         return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/204.js#L4)

```diff
-   41244: (qq, Eq, gq) => {
+   34243: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L6-L7` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/204.js#L6-L15) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/204.js#L6-L7)

```diff
-       loadGlbAsset: () => oE,
-       loadGlbTree: () => HE
+       animatedBlockTextures: () => oC,
+       armourAtlasUrl: () => nC,
+       averageColors: () => qC,
+       blockAtlasUrls: () => bC,
+       blockAtlasWidth: () => QC,
+       buildHash: () => WC,
+       builtTextureIndexFingerprint: () => FC,
+       imagesPerAtlas: () => wC,
+       outputHash: () => NC,
+       rotatedBlockTextures: () => fC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L9-L456` → after: `L17-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/204.js#L17-L305) · [Before (L9-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/204.js#L9-L456)

```diff
-     var Yq = gq(37872),
-       lq = gq(41246),
-       Oq = gq(36328),
-       mq = gq.n(Oq);
- 
-     function xq() {
-       return mq()('(()=>{class qq extends Error{}function Eq(Eq,gq){const Yq=Eq._malloc(gq);if(0===Yq)throw new qq(`Draco: the decoder\'s heap refused ${gq} bytes`);return Yq}function gq(qq){return{[qq.DT_FLOAT32]:[Float32Array,5126],[qq.DT_INT8]:[Int8Array,5120],[qq.DT_INT16]:[I … [truncated]
-     }
-     var Aq = gq(96);
-     const cq = 1e3;
-     let uq = null,
-       Bq = null;
-     const Wq = [],
-       Nq = [];
-     let aq = 0;
-     const Vq = {
- ... (432 more removed lines; see GitHub link above)
+     const QC = 8,
+       wC = [256, 256, 256, 256, 256, 256, 114],
+       bC = [ZC(34249), ZC(34256), ZC(34262), ZC(34271), ZC(34273), ZC(34282), ZC(34285)],
+       nC = ZC(34290),
+       fC = {
+         "alloy_kiln_top[rot[1": ZC(34294),
+         "alloy_kiln_top[rot[2": ZC(34296),
+         "alloy_kiln_top[rot[3": ZC(34303),
+         "alloy_kiln_top[rot[4": ZC(34312),
+         "auto_bench_top[rot[1": ZC(34314),
+         "auto_bench_top[rot[2": ZC(34318),
+         "auto_bench_top[rot[3": ZC(34323),
+         "auto_bench_top[rot[4": ZC(34326),
+         "belt_tunnel_exit_top[rot[1": ZC(34334),
+         "belt_tunnel_exit_top[rot[2": ZC(34339),
+         "belt_tunnel_exit_top[rot[3": ZC(34342),
+ ... (273 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L459-L463` → after: `L308-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L308-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/204.js#L308-L521) · [Before (L459-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/204.js#L459-L463)

```diff
-         9728: 12,
-         9729: 2,
-         9984: 9,
-         9985: 11,
-         9986: 10
+         "Active Radar2": ZC(35756),
+         "Active Radar3": ZC(35759),
+         "Active Radar4": ZC(35766),
+         "Active Radar5": ZC(35769),
+         "Active Radar|meta|rot22": ZC(35756),
+         "Active Radar|meta|rot23": ZC(35759),
+         "Active Radar|meta|rot24": ZC(35766),
+         "Active Radar|meta|rot25": ZC(35769),
+         "Active Radar|meta|rot32": ZC(35756),
+         "Active Radar|meta|rot33": ZC(35759),
+         "Active Radar|meta|rot34": ZC(35766),
+         "Active Radar|meta|rot35": ZC(35769),
+         "Active Radar|meta|rot42": ZC(35756),
+         "Active Radar|meta|rot43": ZC(35759),
+         "Active Radar|meta|rot44": ZC(35766),
+         "Active Radar|meta|rot45": ZC(35769),
+ ... (198 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L466-L1089` → after: `L524-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L524-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/204.js#L524-L10900) · [Before (L466-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/204.js#L466-L1089)

```diff
-         9728: 1,
-         9729: 7,
-         9984: 4,
-         9985: 5,
-         9986: 8,
-         9987: 6
-       };
- 
-     function Uq(qq) {
-       var Eq, gq, Yq, lq;
-       const Oq = null !== (Eq = qq.minFilter) && void 0 !== Eq ? Eq : 9987;
-       return 9729 === (null !== (gq = qq.magFilter) && void 0 !== gq ? gq : 9729) ? null !== (Yq = kq[Oq]) && void 0 !== Yq ? Yq : 3 : null !== (lq = Rq[Oq]) && void 0 !== lq ? lq : 4
-     }
-     const Fq = {
-       33071: 0,
-       33648: 2
- ... (608 more removed lines; see GitHub link above)
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
+ ... (10361 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/205.js#L4)

```diff
-   41268: (qq, Eq, gq) => {
+   41295: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/205.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/205.js#L6)

```diff
-       default: () => Oq
+       loadGlbAsset: () => Rz,
+       loadGlbTree: () => Gz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L8` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/205.js#L9-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/205.js#L8)

```diff
-     var Yq = gq(36328),
+     var QC = ZC(37731),
+       wC = ZC(41298),
+       bC = ZC(36162),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L12` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/205.js#L15) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/205.js#L12)

```diff
-       return lq()('/*! For license information please see bbb6l5.procGen.worker.4fe4d14a.worker.js.LICENSE.txt */\n(()=>{var qq={54:qq=>{const Eq="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,gq=()=>Eq.now(),Yq=qq=>qq===1/0||(qq= … [truncated]
+       return nC()('(()=>{class CC extends Error{}function zC(zC,ZC){const QC=zC._malloc(ZC);if(0===QC)throw new CC(`Draco: the decoder\'s heap refused ${ZC} bytes`);return QC}function ZC(CC){return{[CC.DT_FLOAT32]:[Float32Array,5126],[CC.DT_INT8]:[Int8Array,5120],[CC.DT_INT16]:[I … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L15` → after: `L1046-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L1046-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/205.js#L1046-L1061) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/205.js#L15)

```diff
-   36328: qq => {
+   41298: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(113),
+       wC = ZC(1032);
+ 
+     function bC(CC) {
+       return (0, QC.e)() ? `https://${wC.c.discordDomain}/${CC.href}` : CC.href
+     }
+     const nC = {
+       scriptUrl: bC(new ZC.U(ZC(41302))),
+       wasmBinaryUrl: bC(new ZC.U(ZC(41310)))
+     }
+   },
+   36162: CC => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/206.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/206.js#L4)

```diff
-   41291: (qq, Eq, gq) => {
+   41314: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/206.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/206.js#L8)

```diff
-     var Yq = gq(36328),
+     var QC = ZC(36162),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/206.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/206.js#L12)

```diff
-       return lq()('(()=>{var qq={11:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_bg.567100f455f46cbfa6a7.wasm"},20:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_textures_bg.6d9847a3dd7a203a52fe.wasm"},9:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/zstdDecodeWorker. … [truncated]
+       return wC()('/*! For license information please see w4ddu.procGen.worker.0c0703f0.worker.js.LICENSE.txt */\n(()=>{var CC={49:CC=>{const zC="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ZC=()=>zC.now(),QC=CC=>CC===1/0||(CC=> … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/206.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/206.js#L15)

```diff
-   36328: qq => {
+   36162: CC => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L2)

```diff
- export const ids = [207, 208];
+ export const ids = [207];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4-L123` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L4) · [Before (L4-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L123)

```diff
-   36339: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => lq,
-       reportCappedWasmFailure: () => xq,
-       reportUncappedWasmFailure: () => mq,
-       reportWasmFailure: () => Oq
-     });
-     var Yq = gq(2853);
-     const lq = Yq.b - 4;
- 
-     function Oq(qq, Eq, gq) {
-       (0, Yq.d)(qq, Eq, gq, !1)
-     }
- 
-     function mq(qq, Eq, gq) {
-       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
- ... (104 more removed lines; see GitHub link above)
+   41345: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L125-L155` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L6) · [Before (L125-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L125-L155)

```diff
-       Su: () => lq,
-       EnvelopeKind: () => Oq,
-       pu: () => mq,
-       PhysicsEngine: () => xq,
-       Gu: () => Aq,
-       Lu: () => cq,
-       Ju: () => uq,
-       ku: () => Bq,
-       Ru: () => Wq,
-       Uu: () => Nq,
-       Fu: () => aq,
-       Xu: () => Vq,
-       wu: () => dq,
-       Ku: () => jq,
-       default: () => rE,
-       initSync: () => tE,
- ... (15 more removed lines; see GitHub link above)
+       default: () => bC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L157-L831` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L8-L9) · [Before (L157-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L157-L831)

```diff
-     class lq {
-       __destroy_into_raw() {
-         const qq = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, zq.unregister(this), qq
-       }
-       free() {
-         const qq = this.__destroy_into_raw();
-         PE.sHTK(qq, 0)
-       }
-       BB() {
-         const qq = PE.ymqN(this.__wbg_ptr);
-         if (qq[2]) throw NE(qq[1]);
-         return qq[0] >>> 0
-       }
-       WB() {
-         return PE.TjPW(this.__wbg_ptr) >>> 0
- ... (659 more removed lines; see GitHub link above)
+     var QC = ZC(36162),
+       wC = ZC.n(QC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L834-L836` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L12) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L834-L836)

```diff
-       const qq = PE.sQcU();
-       var Eq = Xq(qq[0], qq[1]).slice();
-       return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
+       return wC()('(()=>{var CC={20:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_bg.70f80f804c9e94c93b74.wasm"},22:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_textures_bg.c1374c5ae94b21c284ad.wasm"},13:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L838-L929` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L14-L17) · [Before (L838-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L838-L929)

```diff
- 
-     function aq(qq, Eq) {
-       let gq, Yq;
-       try {
-         const lq = AE(qq, PE.dZkX),
-           Oq = QE,
-           mq = WE(Eq, PE.dZkX, PE.R5cm),
-           xq = QE,
-           Aq = PE.RccR(lq, Oq, mq, xq);
-         return gq = Aq[0], Yq = Aq[1], eq(Aq[0], Aq[1])
-       } finally {
-         PE.XRNG(gq, Yq, 1)
-       }
-     }
- 
-     function Vq() {
- ... (76 more removed lines; see GitHub link above)
+   },
+   36162: CC => {
+     CC.exports = function(CC, zC, ZC, QC) {
+       var wC = self || window;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L931-L1155` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L19-L22) · [Before (L931-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L931-L1155)

```diff
-         const gq = PE.mefQ();
-         return qq = gq[0], Eq = gq[1], eq(gq[0], gq[1])
-       } finally {
-         PE.XRNG(qq, Eq, 1)
-       }
-     }
- 
-     function Mq(qq) {
-       PE.dtog(Uq(qq))
-     }
- 
-     function Tq() {
-       return {
-         __proto__: null,
-         Wwb1: {
-           __proto__: null,
- ... (209 more removed lines; see GitHub link above)
+         try {
+           var bC;
+           try {
+             bC = new wC.Blob([CC])
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L1157-L1166` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L24) · [Before (L1157-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L1157-L1166)

```diff
-             if (! function(qq) {
-                 switch (qq) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(qq.type) || "application/wasm" === qq.headers.get("Content-Type")) throw gq;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gq)
+             (bC = new(wC.BlobBuilder || wC.WebKitBlobBuilder || wC.MozBlobBuilder || wC.MSBlobBuilder)).append(CC), bC = bC.getBlob()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L1168-L1175` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L26-L31) · [Before (L1168-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L1168-L1175)

```diff
-           const Yq = await qq.arrayBuffer();
-           return await WebAssembly.instantiate(Yq, Eq)
-         } {
-           const gq = await WebAssembly.instantiate(qq, Eq);
-           return gq instanceof WebAssembly.Instance ? {
-             instance: gq,
-             module: qq
-           } : gq
+           var nC = wC.URL || wC.webkitURL,
+             fC = nC.createObjectURL(bC),
+             oC = new wC[zC](fC, ZC);
+           return nC.revokeObjectURL(fC), oC
+         } catch (qC) {
+           return new wC[zC]("data:application/javascript,".concat(encodeURIComponent(CC)), ZC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L1177-L1227` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/207.js#L33-L36) · [Before (L1177-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/207.js#L1177-L1227)

```diff
-       }(await qq, Eq);
-       return yE(gq, Yq)
-     }
-     var vE = gq(2797),
-       hE = gq(36380);
-     const nE = {
-       name: vE.e,
-       url: () => new gq.U(gq(36384)),
-       init: rE,
-       bindings: Yq
-     };
- 
-     function bE() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
-         Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nE,
-         gq = arguments.length > 2 ? arguments[2] : void 0;
- ... (35 more removed lines; see GitHub link above)
+       } catch (qC) {
+         if (!QC) throw Error("Inline worker is not supported");
+         return new wC[zC](QC, ZC)
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L2)

```diff
- export const ids = [208];
+ export const ids = [208, 209];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L4)

```diff
-   36339: (qq, Eq, gq) => {
+   36167: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CAPPED_COUNTS_VISIT_CAP: () => bC,
+       reportCappedWasmFailure: () => oC,
+       reportUncappedWasmFailure: () => fC,
+       reportWasmCrash: () => wC,
+       reportWasmFailure: () => nC
+     });
+     var QC = ZC(2927);
+ 
+     function wC(CC) {
+       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
+     }
+     const bC = QC.d - 4;
+ 
+     function nC(CC, zC, ZC) {
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L7-L9` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L34-L36) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L7-L9)

```diff
-       reportCappedWasmFailure: () => xq,
-       reportUncappedWasmFailure: () => mq,
-       reportWasmFailure: () => Oq
+       h: () => iC,
+       j: () => vC,
+       m: () => JC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L11-L12` → after: `L38-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L38-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L38-L131) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L11-L12)

```diff
-     var Yq = gq(2853);
-     const lq = Yq.b - 4;
+     var QC = ZC(36184),
+       wC = ZC(2848),
+       bC = ZC(36196),
+       nC = ZC(2856),
+       fC = ZC(36167),
+       oC = ZC(2916),
+       qC = ZC(3217),
+       FC = ZC(3208),
+       WC = ZC(36172),
+       NC = ZC(2927),
+       MC = ZC(36175),
+       gC = ZC(36180),
+       SC = ZC(3633);
+     let pC = !1;
+     const PC = 40;
+     var GC = ZC(666);
+ ... (78 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L15` → after: `L134-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L134-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L134-L1133) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L15)

```diff
-       (0, Yq.d)(qq, Eq, gq, !1)
+       var wC;
+       const nC = CC instanceof Error ? CC.name : "thrown",
+         fC = (CC instanceof Error && null !== (wC = CC.stack) && void 0 !== wC ? wC : "").split("\n").filter((CC => bC.test(CC))).slice(0, 8).map((CC => CC.trim())),
+         oC = null === zC ? "wasm memory unknown" : `wasm memory ${Math.round(zC/2**20)} MB`,
+         qC = null === ZC.panic ? "" : `, panic: ${(0,QC.m)(ZC.panic)}`,
+         FC = `${nC}: ${CC instanceof Error?CC.message:String(CC)}`;
+       return `${(0,QC.p)(ZC.kind,ZC.refusedBytes)} ${FC} (${oC})${qC}${fC.length>0?` | ${fC.join(" < ")}`:""}`
+     }
+     const oC = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
+ 
+     function qC(CC) {
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
+       if (!("detached" in ZC)) return {
+         arrayBufferDetached: "absent"
+ ... (984 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L19` → after: `L1137-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L1137-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L1137-L1307) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L19)

```diff
-       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
+       if (void 0 === ZC) {
+         const ZC = pz.encode(CC),
+           QC = zC(ZC.length, 1) >>> 0;
+         return Zz().subarray(QC, QC + ZC.length).set(ZC), Az = ZC.length, QC
+       }
+       let QC = CC.length,
+         wC = zC(QC, 1) >>> 0;
+       const bC = Zz();
+       let nC = 0;
+       for (; nC < QC; nC++) {
+         const zC = CC.charCodeAt(nC);
+         if (zC > 127) break;
+         bC[wC + nC] = zC
+       }
+       if (nC !== QC) {
+         0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
+ ... (155 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L23` → after: `L1311-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L1311-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/208.js#L1311-L1330) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/208.js#L23)

```diff
-       (0, Yq.d)(qq, Eq, gq, !1, lq)
+       const QC = function(CC) {
+         return CC instanceof WebAssembly.RuntimeError ? /unreachable/i.test(CC.message) ? "unreachable" : /out of bounds/i.test(CC.message) ? "out_of_bounds" : "runtime_error" : (CC instanceof RangeError || CC instanceof Error && "InternalError" === CC.name) && /call stack|recurs … [truncated]
+       }(CC);
+       if ("unreachable" !== QC) return {
+         kind: QC,
+         panic: null,
+         refusedBytes: 0
+       };
+       const wC = zC(),
+         bC = ZC();
+       return {
+         kind: QC,
+         panic: bC > 0 ? null : wC,
+         refusedBytes: bC
+       }
+     }
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   36389: (qq, Eq, gq) => {
+   36167: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => xq,
-       ITEM_SPRITES: () => Oq,
-       ITEM_SPRITES_WITHOUT_FILE: () => mq,
-       ITEM_SPRITE_RUNS: () => lq,
-       MAX_SPRITE_ITEM_ID: () => Yq
+       CAPPED_COUNTS_VISIT_CAP: () => bC,
+       reportCappedWasmFailure: () => oC,
+       reportUncappedWasmFailure: () => fC,
+       reportWasmCrash: () => wC,
+       reportWasmFailure: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L12-L16` → after: `L12-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L12-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/209.js#L12-L29) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/209.js#L12-L16)

```diff
-     const Yq = 10090,
-       lq = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       Oq = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       mq = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       xq = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var QC = ZC(2927);
+ 
+     function wC(CC) {
+       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
+     }
+     const bC = QC.d - 4;
+ 
+     function nC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1)
+     }
+ 
+     function fC(CC, zC, ZC) {
+       (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
+     }
+ 
+     function oC(CC, zC, ZC) {
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L21) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L6)

```diff
-   36397: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       CreateCustomLobby: () => iq
+   40652: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(CC, zC).getContext("2d", ZC);
+       const QC = document.createElement("canvas");
+       return QC.width = CC, QC.height = zC, QC.getContext("2d", ZC)
+     }
+ 
+     function wC(CC, zC) {
+       return CC.getContext("2d", zC)
+     }
+     ZC.d(zC, {
+       b: () => wC,
+       f: () => QC
+     })
+   },
+   40606: (CC, zC, ZC) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L8-L34` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L23-L26) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L8-L34)

```diff
-     gq(36406);
-     var Yq = gq(4456),
-       lq = gq(57),
-       Oq = gq(1659),
-       mq = gq(1018),
-       xq = gq.n(mq),
-       Aq = gq(3040),
-       cq = gq(1109),
-       uq = gq(1195),
-       Bq = gq(4413),
-       Wq = gq(1422),
-       Nq = gq(36415),
-       aq = gq(1183),
-       Vq = gq(1313),
-       dq = gq(1498),
-       jq = gq(24),
- ... (11 more removed lines; see GitHub link above)
+     const QC = 1 << 20,
+       wC = 1 << 21,
+       bC = 1024,
+       nC = 2048;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L36-L81` → after: `L28-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L28-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L28-L47) · [Before (L36-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L36-L81)

```diff
-     function iq(qq) {
-       var Eq, gq, mq, iq;
-       let {
-         gameNameWithVariation: Zq,
-         close: fq,
-         initialDefaultGamemode: Mq
-       } = qq;
-       const {
-         t: Tq
-       } = (0, aq.v)(), zq = (0, dq.useNavigatePreserveSearch)(), [Sq, pq] = (0, lq.useState)("Enter"), [Gq, Lq] = (0, lq.useState)(""), Jq = lq.useRef(null), kq = null === (Eq = Qq.c[Zq]) || void 0 === Eq ? void 0 : Eq.showWorldsInsteadOfCustomLobbies, Rq = kq ? 1 : null === (gq  … [truncated]
-       Mq || (Mq = "classic_creative" === Zq || "classic_creativeFlat" === Zq ? "creative" : "classic" === Zq ? "peaceful" : "survival");
-       const sq = {
-         baseOptions: {
-           gameNameWithVariation: kq ? "classic" : Zq,
-           name: "",
-           visibility: "unlisted"
- ... (30 more removed lines; see GitHub link above)
+     function fC(CC, zC, ZC) {
+       const fC = CC + QC,
+         oC = zC + bC,
+         qC = ZC + QC;
+       return fC < 0 || fC >= wC || qC < 0 || qC >= wC || oC < 0 || oC >= nC ? -1 : (fC * wC + qC) * nC + oC
+     }
+   },
+   40598: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC,
+       i: () => nC,
+       l: () => wC,
+       n: () => bC,
+       o: () => FC,
+       q: () => qC,
+       u: () => oC,
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L83-L90` → after: `L49-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L49-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L49-L126) · [Before (L83-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L83-L90)

```diff
-       function Iq(qq, Eq) {
-         wq({
-           ...Xq,
-           baseOptions: {
-             ...Xq.baseOptions,
-             [qq]: Eq
-           }
-         })
+     function QC(CC) {}
+ 
+     function wC(CC) {}
+ 
+     function bC(CC) {}
+ 
+     function nC(CC) {}
+ 
+     function fC(CC) {}
+ 
+     function oC(CC, zC, ZC) {}
+ 
+     function qC(CC) {}
+ 
+     function FC(CC) {}
+   },
+ ... (62 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L93-L99` → after: `L184-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L184-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L184-L207) · [Before (L93-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L93-L99)

```diff
-       function eq(qq, Eq) {
-         wq({
-           ...Xq,
-           listedOptions: {
-             ...Xq.listedOptions,
-             [qq]: Eq
-           }
+     function oC(CC) {
+       if (0 === CC) return fC;
+       const zC = new bC.b(QC.Tb);
+       for (let ZC = 0; ZC < QC.Tb; ZC++) zC[ZC] = CC >>> 8 * ZC & 255;
+       return zC
+     }
+     class qC {
+       constructor(CC, zC) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new nC(zC, {
+           ptr: () => CC.yW(),
+           HW: () => CC.YbC(),
+           reserve: zC => CC.TbC(zC)
+         }), this.net = new nC(zC, {
+           ptr: () => CC.ubC(),
+           HW: () => CC.cbC(),
+           reserve: zC => CC.abC(zC)
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L103-L110` → after: `L237-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L237-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L237-L260) · [Before (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L103-L110)

```diff
-       function Dq(qq, Eq) {
-         wq({
-           ...Xq,
-           worldOptions: {
-             ...Xq.worldOptions,
-             [qq]: Eq
-           }
-         })
+     function HC(CC, zC) {
+       CC.forEachWorkerOut(((ZC, wC, bC) => {
+         if ((0, QC.fe)(ZC)) try {
+           var nC;
+           null === (nC = zC.worldgen) || void 0 === nC || nC.take(ZC, bC)
+         } catch (oC) {
+           CC.crash(JC, oC)
+         } else try {
+           var fC;
+           null === (fC = zC.mesh) || void 0 === fC || fC.take(ZC, wC, bC)
+         } catch (oC) {
+           CC.crash(mC, oC)
+         }
+       }))
+     }
+     const EC = 1048576;
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L113-L127` → after: `L265-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L265-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L265-L345) · [Before (L113-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L113-L127)

```diff
-       function qE(qq) {
-         wq({
-           ...Xq,
-           mapOptions: {
-             ...Xq.mapOptions,
-             ...qq
-           }
-         })
-       }(0, lq.useEffect)((() => {
-         Bq.d.getNewStarterName().then((qq => {
-           wq((Eq => "" !== Eq.baseOptions.name ? Eq : {
-             ...Eq,
-             baseOptions: {
-               ...Eq.baseOptions,
-               name: qq
+     function cC(CC) {
+       return YC.has(CC.site) ? CC.error instanceof WebAssembly.RuntimeError || (0, wC.h)(CC.error) : !XC.has(CC.site) && CC.error instanceof Error
+     }
+     const uC = "events",
+       rC = [],
+       sC = "debugLog",
+       TC = "terrainTextures",
+       aC = "sunShadowTextures",
+       tC = new TextDecoder;
+ 
+     function DC(CC, zC) {
+       const {
+         site: ZC,
+         error: wC,
+         header: bC
+       } = CC, nC = bC ? (0, QC.$d)(bC.lastError) : "noFrame", fC = `CORE-${ZC===SC?nC:ZC}`, oC = null === wC || void 0 === wC ? "" : ` ${(0,FC.m)(wC)}`, qC = {
+ ... (65 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L130-L175` → after: `L349-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L349-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L349-L442) · [Before (L130-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L130-L175)

```diff
-         })).catch((qq => {
-           console.error("Error getting new starter name:", qq)
-         }))
-       }), []), (0, lq.useEffect)((() => {
-         "customSchematic" === Xq.mapOptions.mapType && null === Kq && (0, cq.postJsonWithMetricsCookiesAndJsonResponse)(`${uq.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
-           retries: 0,
-           minTimeout: 3e3
-         }).then((qq => {
-           Cq(qq)
-         }))
-       }), [Xq.mapOptions.mapType, Kq]);
-       const EE = {
-           tpRequests: {
-             isEnabled: () => !Xq.worldOptions.disableTpRequests,
-             hG: qq => {
-               Dq("disableTpRequests", !qq)
- ... (30 more removed lines; see GitHub link above)
+         } catch (tC) {
+           JC = {
+             error: tC
+           }
+         }
+         xC ??= null === (ZC = this.gameHost) || void 0 === ZC ? void 0 : ZC.takeFault();
+         const eC = this.stopped || null !== JC || void 0 !== xC;
+         this.rings.reset(eC ? nC.cursor : PC, eC ? oC.cursor : RC, eC ? qC.cursor : AC);
+         const hC = null === JC && void 0 === xC,
+           KC = hC && !this.stopped && pC === QC.R.Fatal && 0 === this.core.AM(),
+           YC = hC && !KC ? this.headerView() : null,
+           dC = KC ? {
+             ...null !== (mC = this.lastHeader) && void 0 !== mC ? mC : (0, QC.re)(new Uint32Array(QC.lb)),
+             status: QC.R.Fatal,
+             lastError: QC.N.CoreBusy,
+             lastErrorDetail: 0
+ ... (78 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L177-L181` → after: `L444-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L444-L447) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L177-L181)

```diff
-           },
-           dayNight: {
-             isEnabled: () => Xq.worldOptions.enableDayNight,
-             hG: qq => {
-               Dq("enableDayNight", qq)
+             of this.unsentOptions) {
+             if (!CC.writeOptions(QC, nC)) {
+               if (CC.cursor > 0) break;
+               this.optionsDropped++
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L184-L221` → after: `L451-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L451-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L451-L606) · [Before (L184-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L184-L221)

```diff
-         },
-         gE = "Enter" !== Sq,
-         YE = (0, bq.jsx)(Pq.c, {
-           className: "NameInput",
-           label: "general:name",
-           disabled: "Enter" !== Sq,
-           children: (0, bq.jsx)(Oq.b, {
-             domRef: Jq,
-             onValueChange: (qq, Eq) => {
-               const gq = (0, tq.Bb)(qq);
-               Iq("name", gq), Jq.current.value = gq
-             },
-             maxLength: tq.R,
-             defaultValue: Xq.baseOptions.name
-           })
-         });
- ... (22 more removed lines; see GitHub link above)
+           bC > 0 && this.unsentOptions.splice(0, bC)
+         } catch (zC) {
+           return this.crash(PC, zC), !1
+         }
+         return !0
+       }
+       setHoldDraws(CC) {
+         this.drawsHeld = CC
+       }
+       setUiPrefs(CC) {
+         this.unsentUiPrefs = {
+           ...CC
+         }
+       }
+       setEnvPrefs(CC) {
+         this.unsentEnvPrefs = {
+ ... (140 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L223-L468` → after: `L608-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L608-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L608-L630) · [Before (L223-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L223-L468)

```diff
-           })]
-         }), (0, bq.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, bq.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: Tq(kq ? "homePage:createWorld" : "homePage:createCustomLobby")
-           })
-         }), (0, bq.jsx)(nq.c, {
-           locked: gE,
-           children: (0, bq.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [!Uq && YE, Uq && (0, bq.jsxs)("div", {
-               className: "BloxdForm",
-               children: [(0, bq.jsx)("div", {
-                 className: "SectionTitle",
-                 children: Tq("customLobby:generalOptions")
- ... (230 more removed lines; see GitHub link above)
+           } else if (hC === QC.ab.CoreErrors) {
+             var WC, NC;
+             const CC = oC >= 4 ? KC(0) : -1;
+             if (CC < 0 || CC > QC.M.PAIRS_MAX || oC !== 4 * (QC.M.FIXED_WORDS + QC.M.PAIR_WORDS * CC)) return this.crash(uC, `CoreErrors at ${FC} of ${oC} bytes`), rC;
+             const zC = [];
+             for (let ZC = 0; ZC < CC; ZC++) zC.push({
+               code: KC(1 + 2 * ZC),
+               detail: KC(2 + 2 * ZC)
+             });
+             null === (WC = (NC = this.handlers).onCoreErrors) || void 0 === WC || WC.call(NC, zC, KC(1 + 2 * CC))
+           } else if (hC === QC.ab.RenderReload) {
+             var MC, gC;
+             if (oC !== QC.Vc.BYTES) return this.crash(uC, `RenderReload at ${FC} of ${oC} bytes`), rC;
+             null === (MC = (gC = this.handlers).onRenderReload) || void 0 === MC || MC.call(gC, KC(0), KC(1), KC(2))
+           } else if (hC === QC.ab.JoinPreloadEnded) {
+             var SC, pC;
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L470-L475` → after: `L632-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L632-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L632-L784) · [Before (L470-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L470-L475)

```diff
-           }), Gq && (0, bq.jsx)("div", {
-             className: "CreateCustomLobbyError AnimFadeInScaleUp",
-             children: Gq
-           })]
-         })]
-       })
+           } else if (hC === QC.ab.Images) {
+             var PC, GC;
+             null === (PC = (GC = this.handlers).onImages) || void 0 === PC || PC.call(GC, new Uint8Array(nC.slice(ZC + CC, ZC + CC + oC)))
+           } else if (hC === QC.ab.ModelRequests)
+             for (let ZC = 0; ZC < oC >>> 2; ZC++) {
+               var RC, AC;
+               null === (RC = (AC = this.handlers).onModelRequest) || void 0 === RC || RC.call(AC, KC(ZC))
+             } else if (hC === QC.ab.ModelTaken) {
+               var xC, JC;
+               if (oC < 4) return this.crash(uC, `ModelTaken at ${FC} of ${oC} bytes`), rC;
+               const CC = new Uint32Array((oC >>> 2) - 1);
+               for (let zC = 0; zC < CC.length; zC++) CC[zC] = KC(1 + zC);
+               null === (xC = (JC = this.handlers).onModelTaken) || void 0 === xC || xC.call(JC, KC(0), CC)
+             } else if (hC === QC.ab.TerrainTexturesWanted) {
+             var IC, iC;
+             if (0 !== oC) return this.crash(uC, `TerrainTexturesWanted at ${FC} of ${oC} bytes`), rC;
+ ... (137 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L478` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L787) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L478)

```diff
-   36428: (qq, Eq, gq) => {
+   40611: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L480` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L789-L790) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L480)

```diff
-       c: () => Aq
+       e: () => nC,
+       g: () => bC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L482-L486` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L792-L793) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L482-L486)

```diff
-     var Yq = gq(1018),
-       lq = gq.n(Yq),
-       Oq = gq(57),
-       mq = gq(4405),
-       xq = gq(1070);
+     var QC = ZC(4635);
+     let wC = null;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L489-L503` → after: `L796-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L796-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L796-L803) · [Before (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L489-L503)

```diff
-       let {
-         locked: Eq,
-         children: gq
-       } = qq;
-       const Yq = (0, Oq.useRef)(null),
-         Aq = (0, mq.c)(Yq, "y");
-       return (0, xq.jsx)("div", {
-         ref: Yq,
-         className: lq()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: Aq.before,
-           CreateCustomLobbyBodyMoreBelow: Aq.after
-         }),
-         "data-pad-ignore": Eq || void 0,
-         children: gq
-       })
+       wC = {
+         scanned: !1
+       };
+       try {
+         return CC()
+       } finally {
+         wC = null
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L506` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L841) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L506)

```diff
-   36415: (qq, Eq, gq) => {
+   36180: (CC, zC, ZC) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L509` → after: `L844-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L844-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L844-L846) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L509)

```diff
-       g: () => Wq
+       f: () => qC,
+       j: () => nC,
+       m: () => WC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L511-L517` → after: `L848-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L848-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L848-L850) · [Before (L511-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L511-L517)

```diff
-     var Yq = gq(57),
-       lq = gq(1336),
-       Oq = gq(1183),
-       mq = gq(1326),
-       xq = gq(3358),
-       Aq = gq(4764),
-       cq = gq(1070);
+     var QC = ZC(36172),
+       wC = ZC(10);
+     const bC = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L520-L553` → after: `L853-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L853-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L853-L855) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L520-L553)

```diff
-       let {
-         loading: Eq,
-         schematics: gq,
-         onSchematicPicked: Yq,
-         selectedSchematicIdList: lq = [],
-         disableAutoExport: Aq
-       } = qq;
-       const {
-         t: uq
-       } = (0, Oq.v)();
-       return (0, cq.jsxs)("div", {
-         className: "SchematicList",
-         children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
-           className: "NoSchematicsText",
-           children: uq("worldBuilder:noSavedSchematic")
-         }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
- ... (18 more removed lines; see GitHub link above)
+       if (CC instanceof WebAssembly.RuntimeError) return !0;
+       const zC = CC instanceof Error ? CC.stack : void 0;
+       return "string" === typeof zC && bC.test(zC)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L557-L595` → after: `L870-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L870-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L870-L878) · [Before (L557-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L557-L595)

```diff
-       let {
-         ownedSchematics: Eq,
-         currentWorldSchematicId: gq,
-         onClose: lq
-       } = qq;
-       const {
-         t: mq
-       } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
-       return (0, cq.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === xq && (0, cq.jsxs)(cq.Fragment, {
-           children: [(0, cq.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: mq("worldBuilder:schematicList")
-           }), (0, cq.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
- ... (23 more removed lines; see GitHub link above)
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
+       if (!("detached" in ZC)) return {
+         arrayBufferDetached: "absent"
+       };
+       return {
+         arrayBufferDetached: (0, wC.O)(null === (zC = (0, wC.K)(ZC, "detached")) || void 0 === zC ? void 0 : zC.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L599-L613` → after: `L883-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L883-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L883-L893) · [Before (L599-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L599-L613)

```diff
-       let {
-         ownedSchematics: Eq,
-         currentWorldSchematicId: gq,
-         onClose: Yq
-       } = qq;
-       lq.NotificationProvider.showCustomPopup({
-         body: qq => (0, cq.jsx)(Bq, {
-           ownedSchematics: Eq,
-           currentWorldSchematicId: gq,
-           onClose: qq
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: Yq,
-         unlockPointerKey: "schematicListPopup"
-       })
+       let zC = "[object Object]";
+       try {
+         zC = String(CC)
+       } catch {}
+       if ("[object Object]" !== zC) return zC;
+       try {
+         var ZC, QC;
+         return null !== (ZC = null === (QC = JSON.stringify(CC)) || void 0 === QC ? void 0 : QC.slice(0, FC)) && void 0 !== ZC ? ZC : zC
+       } catch {
+         return zC
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L616` → after: `L896-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L896-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L896-L902) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L616)

```diff
-   36424: (qq, Eq, gq) => {
+   40683: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   40688: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   },
+   36172: (CC, zC, ZC) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L619` → after: `L905-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L905-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L905-L908) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L619)

```diff
-       i: () => uq
+       i: () => bC,
+       m: () => oC,
+       n: () => nC,
+       p: () => wC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L621-L627` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L910) · [Before (L621-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L621-L627)

```diff
-     gq(57);
-     var Yq = gq(1018),
-       lq = gq.n(Yq),
-       Oq = gq(4456),
-       mq = gq(296),
-       xq = gq(1183),
-       Aq = gq(1070);
+     const QC = /^alloc_failed (\d+) bytes$/;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L629-L663` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L912-L913) · [Before (L629-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L629-L663)

```diff
-     function cq(qq) {
-       let {
-         value: Eq,
-         onChange: gq,
-         showAll: Yq,
-         disabled: cq = !1
-       } = qq;
-       const {
-         t: uq
-       } = (0, xq.v)();
-       return (0, Aq.jsxs)("div", {
-         className: lq()("BloxdForm GamemodeForm", {
-           BasicOptions: !Yq
-         }),
-         children: [(0, Aq.jsx)("div", {
-           className: "SectionTitle",
- ... (19 more removed lines; see GitHub link above)
+     function wC(CC, zC) {
+       return bC(CC, zC) ? `trap=alloc_failed ${zC} bytes` : `trap=${CC}`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L667-L702` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L940) · [Before (L667-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L667-L702)

```diff
-       let {
-         mapTypes: Eq,
-         value: gq,
-         onChange: Yq,
-         showAll: cq,
-         disabled: uq = !1,
-         children: Bq
-       } = qq;
-       const {
-         t: Wq
-       } = (0, xq.v)();
-       return (0, Aq.jsxs)("div", {
-         className: lq()("BloxdForm MapTypeForm", {
-           BasicOptions: !cq
-         }),
-         children: [(0, Aq.jsx)("div", {
- ... (20 more removed lines; see GitHub link above)
+       return CC.replace(/\s*\n\s*/g, " / ").slice(0, fC)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L704-L705` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/210.js#L942) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/210.js#L704-L705)

```diff
-   },
-   36406: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   36415: (qq, Eq, gq) => {
+   36369: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L6)

```diff
-       d: () => uq,
+       b: () => nC,
+       f: () => wC,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L9-L17` → after: `L10-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L10-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L10-L168) · [Before (L9-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L9-L17)

```diff
-     var Yq = gq(57),
-       lq = gq(1336),
-       Oq = gq(1183),
-       mq = gq(1326),
-       xq = gq(3358),
-       Aq = gq(4764),
-       cq = gq(1070);
- 
-     function uq(qq) {
+     var QC = ZC(1724);
+     class wC extends Error {
+       constructor(CC) {
+         super("The game server didn't answer in time"), this.leg = CC, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const bC = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+       }
+       answer() {
+         this.answers++
+       }
+ ... (143 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L19-L90` → after: `L170-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L170-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L170-L445) · [Before (L19-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L19-L90)

```diff
-         loading: Eq,
-         schematics: gq,
-         onSchematicPicked: Yq,
-         selectedSchematicIdList: lq = [],
-         disableAutoExport: Aq
-       } = qq;
-       const {
-         t: uq
-       } = (0, Oq.v)();
-       return (0, cq.jsxs)("div", {
-         className: "SchematicList",
-         children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
-           className: "NoSchematicsText",
-           children: uq("worldBuilder:noSavedSchematic")
-         }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
-           source: {
- ... (56 more removed lines; see GitHub link above)
+         footprintBytes: fC,
+         basis: qC,
+         namesLimit: FC
+       } = function(CC) {
+         const {
+           os: zC,
+           deviceMemory: ZC
+         } = CC;
+         if ("ios" === zC) switch ((0, bC.e)(CC)) {
+           case "ipad_m":
+             return {
+               footprintBytes: PC(oC.b), basis: "ipad-m", namesLimit: !1
+             };
+           case "ipad":
+             return {
+               footprintBytes: pC, basis: "ipad", namesLimit: !0
+ ... (260 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L92-L235` → after: `L447-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L447-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L447-L462) · [Before (L92-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L92-L235)

```diff
-         })]
-       })
-     }
- 
-     function Wq(qq) {
-       let {
-         ownedSchematics: Eq,
-         currentWorldSchematicId: gq,
-         onClose: Yq
-       } = qq;
-       lq.NotificationProvider.showCustomPopup({
-         body: qq => (0, cq.jsx)(Bq, {
-           ownedSchematics: Eq,
-           currentWorldSchematicId: gq,
-           onClose: qq
-         }),
- ... (128 more removed lines; see GitHub link above)
+           of this.workers.values()) nC += QC.reservesRefused, fC += QC.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, QC.h)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, QC.h)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: nC,
+           refusedAllocations: fC,
+           sheds: this.sheds,
+           ...null === (bC = this.footprint) || void 0 === bC ? void 0 : bC.snapshot()
+         }
+       }
+       workersMemoryBytes() {
+         let CC = 0;
+         for (const {
+             stats: zC,
+             gone: ZC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L237-L542` → after: `L464-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L464-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/211.js#L464-L509) · [Before (L237-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/211.js#L237-L542)

```diff
-         })]
-       })
-     }
-     var oq = gq(4764),
-       Pq = gq(1659),
-       Qq = gq(4195),
-       yq = gq(1214);
- 
-     function tq(qq) {
-       var Eq;
-       let {
-         ownedSchematics: gq,
-         onClose: Yq,
-         onChosenEdit: lq,
-         onChosenNew: Oq,
-         onChosenDownload: xq
- ... (290 more removed lines; see GitHub link above)
+           of this.workers.values()) CC += ZC ? 0 : zC.memoryBytes;
+         return CC
+       }
+       checkFootprint() {
+         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       }
+       step() {
+         this.pendingSince = null, this.call((() => this.memory.reserveAhead(qC)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+       }
+       ballastOn() {
+         return null !== this.shedding
+       }
+       takeBallast(CC) {
+         if (!this.ballastOn() || null === this.joinReserveTaken) return;
+         this.ballastCheckAt = CC + 1e3;
+         const zC = this.call((() => this.memory.takeBallast()), 0);
+ ... (30 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/212.js#L4)

```diff
-   36433: (qq, Eq, gq) => {
+   36219: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/212.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/212.js#L6)

```diff
-       default: () => rq
+       ITEM_FILES_WITHOUT_SPRITE: () => fC,
+       ITEM_SPRITES: () => bC,
+       ITEM_SPRITES_WITHOUT_FILE: () => nC,
+       ITEM_SPRITE_RUNS: () => wC,
+       MAX_SPRITE_ITEM_ID: () => QC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L8-L214` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/212.js#L12-L16) · [Before (L8-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/212.js#L8-L214)

```diff
-     var Yq = gq(1018),
-       lq = gq.n(Yq),
-       Oq = gq(1512),
-       mq = gq(1015),
-       xq = gq(729),
-       Aq = gq(1183),
-       cq = gq(1422),
-       uq = gq(1498),
-       Bq = gq(3440),
-       Wq = gq(1025),
-       Nq = gq(3358),
-       aq = gq(2506),
-       Vq = gq(1070);
-     const dq = 2;
- 
-     function jq(qq) {
- ... (191 more removed lines; see GitHub link above)
+     const QC = 10090,
+       wC = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       bC = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       nC = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       fC = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L7)

```diff
-   39024: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq,
-       c: () => mq
+   36223: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CreateCustomLobby: () => YC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L9-L14` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L8-L34) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L9-L14)

```diff
-     var Yq = gq(31);
-     let lq = !1;
- 
-     function Oq() {
-       return lq
-     }
+     ZC(36227);
+     var QC = ZC(4562),
+       wC = ZC(48),
+       bC = ZC(1593),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(3113),
+       qC = ZC(1078),
+       FC = ZC(1149),
+       WC = ZC(4525),
+       NC = ZC(1388),
+       MC = ZC(36234),
+       gC = ZC(1143),
+       SC = ZC(1284),
+       pC = ZC(1453),
+       PC = ZC(20),
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L17-L87` → after: `L37-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L37-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L37-L90) · [Before (L17-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L17-L87)

```diff
-       lq !== qq && (lq = qq, Yq.i.TV("replayViewer|videoExportChanged"))
-     }
-   },
-   36519: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Wq,
-       f: () => uq,
-       g: () => Nq,
-       i: () => Bq
-     });
-     var Yq = gq(307),
-       lq = gq(616),
-       Oq = gq(632),
-       mq = gq(38);
-     const xq = {
-         idStorageKey: "playSessionId",
- ... (55 more removed lines; see GitHub link above)
+       var zC, ZC, nC, YC;
+       let {
+         gameNameWithVariation: dC,
+         close: mC,
+         initialDefaultGamemode: HC
+       } = CC;
+       const {
+         t: EC
+       } = (0, gC.y)(), lC = (0, pC.useNavigatePreserveSearch)(), [XC, cC] = (0, wC.useState)("Enter"), [uC, rC] = (0, wC.useState)(""), sC = wC.useRef(null), TC = null === (zC = xC.d[dC]) || void 0 === zC ? void 0 : zC.showWorldsInsteadOfCustomLobbies, aC = TC ? 1 : null === (ZC  … [truncated]
+       HC || (HC = "classic_creative" === dC || "classic_creativeFlat" === dC ? "creative" : "classic" === dC ? "peaceful" : "survival");
+       const jC = {
+         baseOptions: {
+           gameNameWithVariation: TC ? "classic" : dC,
+           name: "",
+           visibility: "unlisted"
+         },
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L89-L93` → after: `L92-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L92-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L92-L100) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L89-L93)

```diff
-     }
- 
-     function mq() {
-       return null === lq ? null : {
-         ...lq
+ 
+       function kC(CC, zC) {
+         LC({
+           ...yC,
+           listedOptions: {
+             ...yC.listedOptions,
+             [CC]: zC
+           }
+         })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L95-L100` → after: `L102-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L102-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L102-L474) · [Before (L95-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L95-L100)

```diff
-     }
- 
-     function xq(qq) {
-       var Eq;
-       null !== (Eq = Yq) && void 0 !== Eq && Eq(qq) && (lq = {
-         ...qq
+ 
+       function VC(CC, zC) {
+         LC({
+           ...yC,
+           worldOptions: {
+             ...yC.worldOptions,
+             [CC]: zC
+           }
+         })
+       }
+ 
+       function Cz(CC) {
+         LC({
+           ...yC,
+           mapOptions: {
+             ...yC.mapOptions,
+ ... (357 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L104` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L478) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L104)

```diff
-   40440: (qq, Eq, gq) => {
+   36244: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L106-L107` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L480) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L106-L107)

```diff
-       c: () => lq,
-       g: () => Oq
+       c: () => oC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L109-L116` → after: `L482-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L482-L486) · [Before (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L109-L116)

```diff
-     let Yq = null;
- 
-     function lq(qq, Eq) {
-       Yq = {
-         conn: qq,
-         reason: Eq
-       }
-     }
+     var QC = ZC(1002),
+       wC = ZC.n(QC),
+       bC = ZC(48),
+       nC = ZC(4515),
+       fC = ZC(1056);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L119-L121` → after: `L489-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L489-L503) · [Before (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L119-L121)

```diff
-       var Eq;
-       const gq = (null === (Eq = Yq) || void 0 === Eq ? void 0 : Eq.conn) === qq ? Yq.reason : null;
-       return Yq = null, gq
+       let {
+         locked: zC,
+         children: ZC
+       } = CC;
+       const QC = (0, bC.useRef)(null),
+         oC = (0, nC.b)(QC, "y");
+       return (0, fC.jsx)("div", {
+         ref: QC,
+         className: wC()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: oC.before,
+           CreateCustomLobbyBodyMoreBelow: oC.after
+         }),
+         "data-pad-ignore": zC || void 0,
+         children: ZC
+       })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L124` → after: `L506-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L506-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L506-L616) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L124)

```diff
-   40415: (qq, Eq, gq) => {
+   36234: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => FC,
+       e: () => NC
+     });
+     var QC = ZC(48),
+       wC = ZC(1307),
+       bC = ZC(1143),
+       nC = ZC(1295),
+       fC = ZC(3448),
+       oC = ZC(4873),
+       qC = ZC(1056);
+ 
+     function FC(CC) {
+       let {
+         loading: zC,
+ ... (95 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L129-L132` → after: `L621-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L621-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L621-L627) · [Before (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L129-L132)

```diff
-     let Yq = {
-       fire: () => {},
-       close: () => {}
-     };
+     ZC(48);
+     var QC = ZC(1002),
+       wC = ZC.n(QC),
+       bC = ZC(4562),
+       nC = ZC(310),
+       fC = ZC(1143),
+       oC = ZC(1056);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L135` → after: `L630-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L630-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L630-L663) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L135)

```diff
-       Yq = qq
+       let {
+         value: zC,
+         onChange: ZC,
+         showAll: QC,
+         disabled: qC = !1
+       } = CC;
+       const {
+         t: FC
+       } = (0, fC.y)();
+       return (0, oC.jsxs)("div", {
+         className: wC()("BloxdForm GamemodeForm", {
+           BasicOptions: !QC
+         }),
+         children: [(0, oC.jsx)("div", {
+           className: "SectionTitle",
+           children: FC("classic:defaultGamemode")
+ ... (18 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L138-L139` → after: `L666-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L666-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L666-L702) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L138-L139)

```diff
-     function Oq() {
-       return Yq
+     function FC(CC) {
+       let {
+         mapTypes: zC,
+         value: ZC,
+         onChange: QC,
+         showAll: qC,
+         disabled: FC = !1,
+         children: WC
+       } = CC;
+       const {
+         t: NC
+       } = (0, fC.y)();
+       return (0, oC.jsxs)("div", {
+         className: wC()("BloxdForm MapTypeForm", {
+           BasicOptions: !qC
+         }),
+ ... (21 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L141` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/213.js#L704-L705) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/213.js#L141)

```diff
-   }
+   },
+   36227: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L5-L74)

```diff
-   39476: (qq, Eq, gq) => {
-     qq.exports = lq;
-     var Yq = gq(317);
- 
-     function lq(qq, Eq) {
-       if (!(this instanceof lq)) return new lq(qq, Eq);
-       var gq = Yq.create();
-       Yq.add(gq, qq, Eq), this.base = Yq.min(Yq.create(), qq, gq), this.vec = Yq.clone(Eq), this.max = Yq.max(Yq.create(), qq, gq), this.mag = Yq.length(this.vec)
-     }
-     var Oq = lq.prototype;
-     Oq.width = function() {
-       return this.vec[0]
-     }, Oq.height = function() {
-       return this.vec[1]
-     }, Oq.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   36234: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L76-L77` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L6-L7) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L76-L77)

```diff
-       c: () => xq,
-       g: () => Oq
+       d: () => FC,
+       e: () => NC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L79-L80` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L15) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L79-L80)

```diff
-     var Yq = gq(3933);
-     let lq = null;
+     var QC = ZC(48),
+       wC = ZC(1307),
+       bC = ZC(1143),
+       nC = ZC(1295),
+       fC = ZC(3448),
+       oC = ZC(4873),
+       qC = ZC(1056);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L83-L134` → after: `L18-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L18-L51) · [Before (L83-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L83-L134)

```diff
-       return null !== lq && qq === lq
-     }
- 
-     function mq() {
-       this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
-     }
-     class xq {
-       constructor(qq, Eq) {
-         this.version = "0.7.0";
-         var gq = Object.assign({}, new mq, Eq || {});
-         this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           hEq: 0,
-           nEq: 0,
-           bEq: 0
- ... (36 more removed lines; see GitHub link above)
+       let {
+         loading: zC,
+         schematics: ZC,
+         onSchematicPicked: QC,
+         selectedSchematicIdList: wC = [],
+         disableAutoExport: oC
+       } = CC;
+       const {
+         t: FC
+       } = (0, bC.y)();
+       return (0, qC.jsxs)("div", {
+         className: "SchematicList",
+         children: [zC && (0, qC.jsx)(nC.d, {}), !zC && 0 === ZC.length && (0, qC.jsx)("div", {
+           className: "NoSchematicsText",
+           children: FC("worldBuilder:noSavedSchematic")
+         }), !zC && ZC.map((CC => (0, qC.jsx)(fC.d, {
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L138` → after: `L55-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L55-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L55-L93) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L138)

```diff
-       for (var Eq in qq) qq[Eq] = 0
+       let {
+         ownedSchematics: zC,
+         currentWorldSchematicId: ZC,
+         onClose: wC
+       } = CC;
+       const {
+         t: nC
+       } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
+       return (0, qC.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === fC && (0, qC.jsxs)(qC.Fragment, {
+           children: [(0, qC.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: nC("worldBuilder:schematicList")
+           }), (0, qC.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L142-L155` → after: `L97-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L97-L111) · [Before (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L142-L155)

```diff
-       window.addEventListener("keydown", dq.bind(null, qq, !0), !1), window.addEventListener("keyup", dq.bind(null, qq, !1), !1);
-       var Eq = {
-         passive: !0
-       };
-       qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
-         passive: !1
-       }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq) … [truncated]
-     }
-     var uq = 0,
-       Bq = 0,
-       Wq = null;
- 
-     function Nq(qq, Eq) {
-       Eq.preventDefault(), aq(Eq)
+       let {
+         ownedSchematics: zC,
+         currentWorldSchematicId: ZC,
+         onClose: QC
+       } = CC;
+       wC.NotificationProvider.showCustomPopup({
+         body: CC => (0, qC.jsx)(WC, {
+           ownedSchematics: zC,
+           currentWorldSchematicId: ZC,
+           onClose: CC
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: QC,
+         unlockPointerKey: "schematicListPopup"
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L159-L276` → after: `L134-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L134-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L134-L145) · [Before (L159-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L159-L276)

```diff
-       let Eq = !1;
-       for (let gq = 0; gq < qq.touches.length; ++gq)
-         if (qq.touches[gq].identifier === Wq) {
-           Eq = !0;
-           break
-         } if (!Eq) {
-         const Eq = qq.changedTouches[0];
-         uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
-       }
-     }
- 
-     function Vq(qq, Eq) {
-       for (var gq = Eq.changedTouches, Yq = 0; Yq < gq.length; ++Yq) gq[Yq].identifier === Wq && (Wq = null)
-     }
- 
-     function dq(qq, Eq, gq) {
- ... (102 more removed lines; see GitHub link above)
+       let {
+         onFilePicked: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, gC.y)(), [QC, wC] = (0, FC.useState)(null), {
+         getRootProps: bC,
+         getInputProps: nC,
+         isDragActive: oC
+       } = (0, fC.d)({
+         onDrop: CC => {
+           CC.length > 0 && wC(CC[0])
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L278-L284` → after: `L147-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L147-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L147-L194) · [Before (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L278-L284)

```diff
-         Yq = lq;
-       lq = gq;
-       try {
-         hq(Eq, !1, qq, gq)
-       } finally {
-         lq = Yq
-       }
+         useFsAccessApi: !1
+       }), WC = QC && QC.size > 1024 * MC.Mc;
+       return (0, pC.jsxs)("div", {
+         className: "SchematicUploadContainer",
+         children: [(0, pC.jsxs)("div", {
+           ...bC({
+             className: qC()("SchematicUpload", {
+               ActiveDrag: oC
+             })
+           }),
+           children: [(0, pC.jsx)("input", {
+             ...nC({
+               accept: ".bloxdschem"
+             })
+           }), !oC && QC ? (0, pC.jsxs)(pC.Fragment, {
+             children: [(0, pC.jsx)("div", {
+ ... (32 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L287-L300` → after: `L197-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L197-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L197-L235) · [Before (L287-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L287-L300)

```diff
-     function hq(qq, Eq, gq, Yq) {
-       var lq = gq._keyBindmap[qq];
-       lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
-         (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
-           var lq = Eq ? gq.pressCount : gq.releaseCount;
-           lq[qq] = (lq[qq] || 0) + 1;
-           var Oq = gq._bindPressCount[qq] || 0;
-           (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
-           gq._bindPressCount[qq] = Oq;
-           var mq = gq.state[qq];
-           if (nq(mq, Oq)) {
-             gq.state[qq] = Oq > 0;
-             var xq = Eq ? gq.down : gq.up;
-             gq.disabled || xq.emit(qq, Yq)
+     function GC(CC) {
+       let {
+         ownedSchematics: zC,
+         onClose: ZC,
+         onChosenPreset: QC,
+         onChosenFile: wC
+       } = CC;
+       const {
+         t: bC
+       } = (0, gC.y)();
+       return (0, pC.jsxs)(pC.Fragment, {
+         children: [(0, pC.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: bC("worldBuilder:loadSchematic")
+         }), (0, pC.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+ ... (23 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L302-L303` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L237-L238) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L302-L303)

```diff
-         }(qq, Eq, gq, Yq)
-       }))), "button" in Yq || (gq.IK && !Yq.defaultPrevented && Yq.preventDefault(), gq.stopPropagation && Yq.stopPropagation()))
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L312-L486` → after: `L246-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L246-L305) · [Before (L312-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L312-L486)

```diff
-       if (qq && "object" === typeof qq) {
-         var Eq = qq.which || qq.keyCode || qq.charCode;
-         Eq && (qq = Eq)
-       }
-       if ("number" === typeof qq) return mq[qq];
-       var gq, Oq = String(qq);
-       return (gq = Yq[Oq.toLowerCase()]) ? gq : (gq = lq[Oq.toLowerCase()]) || (1 === Oq.length ? Oq.charCodeAt(0) : void 0)
-     }
-     gq.isEventKey = function(qq, Eq) {
-       if (qq && "object" === typeof qq) {
-         var gq = qq.which || qq.keyCode || qq.charCode;
-         if (null === gq || void 0 === gq) return !1;
-         if ("string" === typeof Eq) {
-           var Oq;
-           if (Oq = Yq[Eq.toLowerCase()]) return Oq === gq;
-           if (Oq = lq[Eq.toLowerCase()]) return Oq === gq
- ... (159 more removed lines; see GitHub link above)
+       var zC;
+       let {
+         ownedSchematics: ZC,
+         onClose: QC,
+         onChosenEdit: wC,
+         onChosenNew: bC,
+         onChosenDownload: fC
+       } = CC;
+       const {
+         t: oC
+       } = (0, gC.y)(), [qC, WC] = (0, FC.useState)("choose"), [MC, SC] = (0, FC.useState)(null), [PC, GC] = (0, FC.useState)(null);
+       return (0, pC.jsxs)(pC.Fragment, {
+         children: [(0, pC.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: oC("worldBuilder:saveSchematic")
+         }), "choose" === qC && (0, pC.jsxs)(pC.Fragment, {
+ ... (44 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L492-L632` → after: `L309-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L309-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L309-L323) · [Before (L492-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L492-L632)

```diff
-       for (var Eq = qq._data, gq = 1e3 / qq.bJ, Yq = Eq.nowObject.now() + mq, lq = 0; Eq.nowObject.now() >= Eq.lastTickStarted + gq && Eq.nowObject.now() < Yq && ++lq <= Oq;) qq.Wy(gq), Eq.lastTickStarted += gq;
-       var xq = 5 * (gq + 5),
-         Aq = Eq.nowObject.now();
-       if (Aq - Eq.lastTickStarted > xq)
-         for (; Aq >= Eq.lastTickStarted + gq;) Eq.lastTickStarted += gq
-     }
-   },
-   36744: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(57);
-     const lq = Yq.useLayoutEffect;
-     const Oq = function(qq) {
-       var Eq = (0, Yq.useRef)(qq);
-       return lq((function() {
- ... (125 more removed lines; see GitHub link above)
+       let {
+         type: zC,
+         prepopName: ZC,
+         ownedSchematics: QC,
+         onSubmit: wC,
+         onBack: bC
+       } = CC;
+       const {
+         t: nC
+       } = (0, gC.y)(), [fC, oC] = (0, FC.useState)(""), [WC, MC] = (0, FC.useState)(""), [SC, PC] = (0, FC.useState)(null), [GC, RC] = (0, FC.useState)(!0), IC = CC => {
+         var ZC;
+         CC = null !== (ZC = CC) && void 0 !== ZC ? ZC : fC;
+         const wC = "new" === zC ? (0, JC.G)(CC) : null,
+           bC = [...(0, JC.Hb)(CC), ...wC ? [wC] : []];
+         return bC.length > 0 ? (PC(bC.join(", ")), !1) : "new" === zC && QC.find((zC => zC.name === CC)) ? (PC(nC("worldBuilder:schematicAlreadyExists")), !1) : (PC(null), !0)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L634-L659` → after: `L325-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L325-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L325-L389) · [Before (L634-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L634-L659)

```diff
-     for (Eq = 58; Eq < 65; ++Eq) mq[Eq] = String.fromCharCode(Eq);
-     for (Eq = 48; Eq < 58; ++Eq) mq[Eq] = Eq - 48 + "";
-     for (Eq = 65; Eq < 91; ++Eq) mq[Eq] = String.fromCharCode(Eq);
-     for (Eq = 96; Eq < 106; ++Eq) mq[Eq] = "<num-" + (Eq - 96) + ">";
-     for (Eq = 112; Eq < 136; ++Eq) mq[Eq] = "F" + (Eq - 111)
-   },
-   38974: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq, Yq, lq) {
-       var Oq = {};
-       return Object.keys(Yq).forEach((function(qq) {
-         Oq[qq] = Yq[qq]
-       })), Oq.enumerable = !!Oq.enumerable, Oq.configurable = !!Oq.configurable, ("value" in Oq || Oq.initializer) && (Oq.writable = !0), Oq = gq.slice().reverse().reduce((function(gq, Yq) {
-         return Yq(qq, Eq, gq) || gq
-       }), Oq), lq && void 0 !== Oq.initializer && (Oq.value = Oq.initializer ? Oq.initializer.call(lq) : void 0, Oq.initializer = void 0), void 0 === Oq.initializer && (Object.defineProperty(qq, Eq, Oq), Oq = null), Oq
-     }
-     gq.d(Eq, {
- ... (10 more removed lines; see GitHub link above)
+       return (0, pC.jsxs)("div", {
+         className: "SaveSchematicWindow",
+         children: [(0, pC.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: nC("general:name")
+         }), (0, pC.jsx)(AC.c, {
+           className: qC()("SaveSchematicName", {
+             Error: SC
+           }),
+           forcedText: ZC,
+           onValueChange: CC => {
+             oC(CC), IC(CC)
+           },
+           placeholderText: nC("worldBuilder:schematicNamePlaceholder"),
+           maxLength: JC.xb
+         }), (0, pC.jsx)("h2", {
+ ... (49 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L662-L703` → after: `L392-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L392-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L392-L472) · [Before (L662-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L662-L703)

```diff
-     gq.d(Eq, {
-       d: () => Yq
-     })
-   },
-   38649: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq
-     });
-     var Yq = gq(38653);
-     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
-       ...qq
-     } : null : qq.clone(Eq) : null;
-     class Oq {
-       static DeepCopy(qq, Eq, gq, Oq) {
-         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xq = function(qq) {
- ... (26 more removed lines; see GitHub link above)
+     var vC = ZC(1149),
+       eC = ZC(1645),
+       hC = ZC(1078);
+ 
+     function KC(CC, zC) {
+       if ("devDownloadJson" !== CC) ! function(CC, zC) {
+         const ZC = vC.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, bC.d)().websocketUrl);
+         let fC = !1;
+         const oC = async (CC, zC) => {
+           if (fC) return;
+           fC = !0;
+           const {
+             gameNameWithVariation: QC,
+             lobbyName: nC
+           } = (0, bC.d)(), oC = {
+             gameNameWithVariation: QC,
+ ... (65 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L705-L745` → after: `L474-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L474-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L474-L515) · [Before (L705-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L705-L745)

```diff
-         }
-       }
-     }
-   },
-   38677: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => lq,
-       h: () => Oq,
-       i: () => mq,
-       k: () => xq
-     });
-     var Yq = gq(37289);
-     class lq {
-       constructor(qq, Eq, gq) {
-         this.gradient = qq, this.color1 = Eq, this.color2 = gq
-       }
- ... (25 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === CC) ! function(CC) {
+           let {
+             ownedSchematics: zC,
+             onChosenFile: ZC,
+             onChosenPreset: QC,
+             onClose: wC
+           } = CC;
+           WC.NotificationProvider.showCustomPopup({
+             body: CC => (0, pC.jsx)(GC, {
+               ownedSchematics: zC,
+               onChosenFile: ZC,
+               onChosenPreset: QC,
+               onClose: CC
+             }),
+             middleScreenPopupClassName: "SchematicPopup",
+ ... (26 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L747-L806` → after: `L517-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L517-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L517-L522) · [Before (L747-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L747-L806)

```diff
-         }
-         const Yq = Eq.length - 1;
-         gq(Eq[Yq], Eq[Yq], 1)
-       }
-     }
-   },
-   38653: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
-     });
-     class Yq {
-       static _CheckLimit(qq, Eq) {
-         let gq = Yq._LogLimitOutputs[qq];
-         return gq ? gq.current++ : (gq = {
-           limit: Eq,
-           current: 1
- ... (44 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ListSchematics" === CC)(0, nC.e)({
+           ownedSchematics: Array.isArray(zC) ? zC : zC.schematics,
+           currentWorldSchematicId: Array.isArray(zC) ? null : zC.currentWorldSchematicId,
+           onClose: () => {
+             oC("cancel", {})
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L808-L998` → after: `L524-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L524-L532) · [Before (L808-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L808-L998)

```diff
-       }
-     }
-     Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
-   },
- ... (175 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ExportWorld" === CC) {
+           var qC;
+           const CC = null !== (qC = zC.schematic) && void 0 !== qC ? qC : zC;
+           (0, RC.l)({
+             schematic: CC,
+             inSourceWorld: CC.schematicId === zC.currentWorldSchematicId,
+             onClose: () => {
+               oC("cancel", {})
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L1000-L1190` → after: `L534-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L534-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/214.js#L534-L541) · [Before (L1000-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/214.js#L1000-L1190)

```diff
-           }();
-           Eq = Oq(" "), gq = Oq(" "), Yq = Oq(" "), Eq -= Oq(qq), Eq < 0 && (Eq += 1);
-           gq -= Oq(qq), gq < 0 && (gq += 1);
-           Yq -= Oq(qq), Yq < 0 && (Yq += 1);
-           return function() {
-             const qq = 2091639 * Eq + 2.3283064365386963e-10 * lq;
-             return Eq = gq, gq = Yq, Yq = qq - (lq = 0 | qq)
-           }
-         }(qq);
-         this.p = function(qq) {
-           const Eq = new Uint8Array(256);
-           for (let gq = 0; gq < 256; gq++) Eq[gq] = gq;
-           for (let gq = 0; gq < 255; gq++) {
-             const Yq = gq + ~~(qq() * (256 - gq)),
-               lq = Eq[gq];
-             Eq[gq] = Eq[Yq], Eq[Yq] = lq
- ... (175 more removed lines; see GitHub link above)
+           })
+         } else console.error(`Unknown plugin message type ${CC}`)
+       }(CC, zC);
+       else {
+         const CC = JSON.stringify(zC.data, null, 2);
+         (0, eC.downloadBlob)(new Blob([CC], {
+           type: "application/json"
+         }), zC.filename)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L4)

```diff
-   40821: (qq, Eq, gq) => {
+   36255: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L6)

```diff
-       LobbyManageView: () => PE
+       default: () => iC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L8-L29` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L8) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L8-L29)

```diff
-     var Yq = gq(57),
-       lq = gq(1448),
-       Oq = gq(2383),
-       mq = gq(2402),
-       xq = gq(2411),
-       Aq = gq(36612);
- 
-     function cq() {
-       const [qq, Eq] = (0, Yq.useState)(new Map);
-       return {
-         get: Eq => qq.get(Eq),
-         hold: (0, Yq.useCallback)(((qq, gq, Yq) => {
-           Eq((Eq => new Map(Eq).set(qq, gq))), Yq.then((() => {
-             Eq((Eq => {
-               const gq = new Map(Eq);
-               return gq.delete(qq), gq
- ... (6 more removed lines; see GitHub link above)
+     var QC = ZC(1002),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L31-L55` → after: `L10-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L10-L21) · [Before (L31-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L31-L55)

```diff
-       Wq = gq(1183),
-       Nq = gq(1025),
-       aq = gq(1326),
-       Vq = gq(2569),
-       dq = gq(4858),
-       jq = gq(3455);
-     var Hq = gq(1942),
-       oq = gq(1422);
- 
-     function Pq(qq, Eq, gq) {
-       const Yq = qq.filter((qq => qq.name !== Eq)),
-         lq = Yq.filter((qq => "none" === qq.role)).sort(((qq, Eq) => Eq.at - qq.at)),
-         Oq = Yq.filter((qq => "none" !== qq.role)).sort(((qq, Eq) => gq.indexOf(qq.role) - gq.indexOf(Eq.role) || Eq.at - qq.at));
-       return [...qq.some((qq => qq.name === Eq)) && null !== Eq ? [Eq] : [], ...[...lq, ...Oq].map((qq => qq.name))]
-     }
- 
- ... (9 more removed lines; see GitHub link above)
+       bC = ZC(1463),
+       nC = ZC(996),
+       fC = ZC(728),
+       oC = ZC(1143),
+       qC = ZC(1388),
+       FC = ZC(1453),
+       WC = ZC(3509),
+       NC = ZC(1013),
+       MC = ZC(3448),
+       gC = ZC(2563),
+       SC = ZC(1056);
+     const pC = 2;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L57-L71` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L23-L26) · [Before (L57-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L57-L71)

```diff
-     function yq(qq, Eq) {
-       const gq = qq.here.find((qq => qq.name === Eq));
-       if (gq) return {
-         section: "here",
-         player: gq
-       };
-       const Yq = qq.banned.find((qq => qq.name === Eq));
-       if (Yq) return {
-         section: "banned",
-         bannedAt: Yq.at
-       };
-       const lq = qq.away.find((qq => qq.name === Eq));
-       return lq ? {
-         section: "away",
-         player: lq
+     function PC(CC) {
+       return "firstPartyGame" === CC.type ? {
+         type: "game",
+         gameNameWithVariation: CC.gameNameWithVariation
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L73` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L28-L29) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L73)

```diff
-         section: "gone"
+         type: "preview",
+         preview: CC.preview
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L123-L128` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L35-L37) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L123-L128)

```diff
-         names: Eq,
-         cap: gq,
-         filterFrom: lq,
-         moreLabel: Oq,
-         reveal: mq = null,
-         renderRow: xq
+         game: zC,
+         disabled: ZC,
+         showPlaceholder: QC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L130-L158` → after: `L39-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L39-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L39-L48) · [Before (L130-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L130-L158)

```diff
-       const {
-         t: Aq
-       } = (0, Wq.v)(), [cq, uq] = (0, Yq.useState)(!1), [Bq, aq] = (0, Yq.useState)(""), dq = cq || null !== mq && Eq.indexOf(mq) >= gq, jq = (dq || Eq.length <= gq) && null !== lq && Eq.length > lq, Hq = Bq.trim().toLowerCase();
-       let oq = dq ? Eq : Eq.slice(0, gq);
-       return jq && "" !== Hq && (oq = oq.filter((qq => qq.toLowerCase().includes(Hq)))), (0, Tq.jsxs)(Tq.Fragment, {
-         children: [jq && (0, Tq.jsx)(Mq.b, {
-           className: "LobbyManageFilter",
-           placeholderText: Aq("lobbyManage:findName"),
-           ariaLabel: Aq("lobbyManage:findName"),
-           onValueChange: qq => {
-             aq(qq)
-           }
-         }), oq.length > 0 && (0, Tq.jsx)("div", {
-           className: "PlayerRows",
-           children: oq.map(((qq, Eq) => xq(qq, oq.length - Eq)))
-         }), !dq && Eq.length > gq && (0, Tq.jsx)("div", {
- ... (13 more removed lines; see GitHub link above)
+       return null !== zC ? (0, SC.jsx)(MC.d, {
+         source: PC(zC),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: ZC,
+         entrySource: "customGamePlace"
+       }) : QC ? (0, SC.jsx)(MC.b, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L163-L227` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L54-L59) · [Before (L163-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L163-L227)

```diff
-         value: Eq,
-         placeholder: gq,
-         ariaLabel: lq,
-         maxLength: Oq,
-         wide: mq = !1,
-         onSave: xq
-       } = qq;
-       const Aq = (0, Yq.useRef)(null),
-         [cq, uq] = (0, Yq.useState)(0),
-         Wq = (0, Yq.useRef)(!0),
-         Nq = (0, Yq.useRef)(null),
-         aq = (0, Yq.useRef)({
-           value: Eq,
-           onSave: xq
-         });
-       aq.current = {
- ... (49 more removed lines; see GitHub link above)
+         category: ZC,
+         title: QC,
+         tintColour: wC,
+         layout: bC,
+         games: nC,
+         landscape: fC = !1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L230-L270` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L62-L64) · [Before (L230-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L230-L270)

```diff
-         t: dq,
-         selectedLanguage: jq
-       } = (0, Wq.v)(), [Hq, Pq] = (0, Yq.useState)(null), {
-         state: Qq
-       } = Bq, yq = `player:${mq}`, bq = function(qq, Eq) {
-         if ("banned" === qq.section) return {
-           ...tq,
-           unban: !0
-         };
-         if ("gone" === qq.section) return tq;
-         const {
-           player: gq
-         } = qq, Yq = "here" === qq.section, lq = Yq || "none" !== gq.role ? gq.can.roles : [];
-         return {
-           gamemode: Yq && Eq && null !== gq.gamemode && gq.can.gamemode,
-           roles: lq,
- ... (25 more removed lines; see GitHub link above)
+         followsLeader: oC
+       } = (0, gC.g)(), qC = null !== (zC = null === nC || void 0 === nC ? void 0 : nC.slice(0, bC.gameCount)) && void 0 !== zC ? zC : [], WC = {
+         "--custom-game-place-tint": wC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L490-L511` → after: `L67-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L67-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L67-L73) · [Before (L490-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L490-L511)

```diff
-         ref: aq,
-         className: "LobbyManagePage",
-         children: [tq.here.length > 0 && (0, Tq.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, Tq.jsxs)("div", {
-             className: "LobbyManageBoxHeading",
-             children: [(0, Tq.jsx)(Vq.c, {
-               label: cq("lobbyManage:here"),
-               meta: dq.here.length
-             }), hq >= 2 && !rq && (0, Tq.jsxs)(oq.L, {
-               className: "LobbyManageTitleAction SmallTextLight",
-               padDestructive: !0,
-               disabled: mq.isPending("kickAll"),
-               onClick: () => {
-                 vq(!0)
-               },
- ... (6 more removed lines; see GitHub link above)
+         className: "CustomGamePlacePanel AnimFadeIn",
+         style: WC,
+         children: [(0, SC.jsx)("h2", {
+           className: "CustomGamePlacePanelHeading",
+           children: (0, SC.jsxs)(FC.LinkPreserveSearch, {
+             to: `/custom-games/${encodeURIComponent(ZC)}`,
+             className: "CustomGamePlacePanelTitle SmallTextBold",
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L513-L536` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L75-L77) · [Before (L513-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L513-L536)

```diff
-               className: "LobbyManageConfirmText",
-               children: cq("lobbyManage:kickAllConfirm", {
-                 count: hq
-               })
-             }), (0, Tq.jsxs)("div", {
-               className: "LobbyManageButtons",
-               children: [(0, Tq.jsx)(oq.K, {
-                 className: "LobbyManageIconButton SmallTextLight",
-                 analyticsClick: {
-                   id: "lobby_manage.kick_all"
-                 },
-                 onClick: () => {
-                   vq(!1), mq.send({
-                     type: "kickAll"
-                   }, "kickAll")
-                 },
- ... (8 more removed lines; see GitHub link above)
+               children: QC
+             }), (0, SC.jsx)(NC.c, {
+               name: "arrow-up"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L734-L1111` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L80-L81) · [Before (L734-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L734-L1111)

```diff
-         })
-       };
-       return (0, Tq.jsxs)("div", {
-         className: "LobbyManageBox LobbyManageListing",
-         children: [(0, Tq.jsx)(Vq.c, {
-           label: Yq("lobbyManage:inWorldsList")
-         }), (0, Tq.jsxs)("div", {
-           className: "LobbyManageRuleRow",
-           children: [(0, Tq.jsx)("div", {
-             className: "SliderText",
-             children: Yq("lobbyManage:description")
-           }), (0, Tq.jsx)(pq, {
-             value: gq.description,
-             ariaLabel: Yq("lobbyManage:description"),
-             wide: !0,
-             onSave: qq => Oq("description", qq)
- ... (362 more removed lines; see GitHub link above)
+         }), (0, SC.jsx)("div", {
+           className: "CustomGamePlacePanelGames",
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1113` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L83) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1113)

```diff
-             "--lobby-choice-chars": jq
+             gridTemplateColumns: `repeat(${fC?bC.columnCount:pC}, ${fC?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1115-L1518` → after: `L85-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L85-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L85-L92) · [Before (L1115-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1115-L1518)

```diff
-           children: (0, Tq.jsx)(nq.d, {
-             options: dq,
-             value: String(Yq),
-             disabled: Oq,
-             onChange: qq => {
-               uq(qq.value)
-             }
-           })
-         }), ("number" === gq.kind || "text" === gq.kind) && (0, Tq.jsx)(pq, {
-           value: null === Yq ? "" : String(Yq),
-           placeholder: Vq,
-           ariaLabel: Nq,
-           onSave: qq => {
-             const Eq = qq.trim(),
-               Yq = Number(Eq);
-             return uq("number" === gq.kind && "" !== Eq && Number.isFinite(Yq) ? Yq : Eq)
- ... (388 more removed lines; see GitHub link above)
+           children: Array.from({
+             length: bC.gameCount
+           }, ((CC, zC) => {
+             var ZC;
+             return (0, SC.jsx)(GC, {
+               game: null !== (ZC = qC[zC]) && void 0 !== ZC ? ZC : null,
+               disabled: oC,
+               showPlaceholder: !nC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1534` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L101) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1534)

```diff
-         leaderboard: Eq
+         categories: zC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1696-L1702` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L104-L106) · [Before (L1696-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1696-L1702)

```diff
-     function cq(qq, Eq) {
-       var gq, mq;
-       const xq = Oq.c.getSocialState().friends.find((qq => qq.name.toLowerCase() === Eq.toLowerCase())),
-         Aq = lq.gameBridge.latest("players").byId[qq],
-         cq = void 0 !== Aq && Aq.name === Eq,
-         uq = cq && null !== (gq = Aq.cosmetics) && void 0 !== gq ? gq : void 0,
-         Bq = xq && uq ? {
+       function ZC(CC) {
+         const ZC = zC[CC];
+         return (0, SC.jsx)(RC, {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1704-L1717` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L108-L109) · [Before (L1704-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1704-L1717)

```diff
-           cosmetics: uq
-         } : xq;
-       return {
-         playerSocialPreview: null !== Bq && void 0 !== Bq ? Bq : {
-           isError: !1,
-           name: Eq,
-           ranks: cq ? [...Aq.ranks] : [],
-           cosmetics: null !== uq && void 0 !== uq ? uq : {},
-           nameColour: null !== (mq = null === uq || void 0 === uq ? void 0 : uq.nameColour) && void 0 !== mq ? mq : Yq.e,
-           location: {
-             status: "inGame"
-           }
-         },
-         isFriend: void 0 !== xq
+           landscape: !0
+         }, ZC.id)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1761-L1764` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L112) · [Before (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1761-L1764)

```diff
-         className: "PlayerNameField",
-         onKeyDown: qq => {
-           qq.target === Wq.current && "Escape" !== qq.key && qq.stopPropagation()
-         },
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1766-L1769` → after: `L114-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L114-L121) · [Before (L1766-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1766-L1769)

```diff
-           className: Oq()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Vq}`),
-           children: ["Loading" === Vq && (0, uq.jsx)(Aq.e, {}), "Success" === Vq && (0, uq.jsx)(cq.d, {
-             name: "check"
-           }), "Error" === Vq && jq]
+           className: "CustomGamePlaceUpper",
+           children: [(0, SC.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, SC.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [ZC(0), ZC(2)]
+             }), ZC(1)]
+           }), ZC(4)]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1771-L1790` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L123-L124) · [Before (L1771-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1771-L1790)

```diff
-           className: "PlayerSearch",
-           children: [(0, uq.jsx)(mq.b, {
-             className: "PlayerSearchInput",
-             domRef: Wq,
-             maxLength: 32,
-             placeholderText: lq,
-             ariaLabel: lq,
-             stopPropagation: !1,
-             onValueChange: qq => {
-               aq(qq)
-             },
-             onEnter: oq
-           }), (0, uq.jsxs)(xq.g, {
-             className: "PlayerSearchInputButton SmallTextLight",
-             disabled: "Enter" !== Vq || "" === Nq.trim(),
-             onClick: oq,
- ... (4 more removed lines; see GitHub link above)
+           className: "CustomGamePlaceRow",
+           children: [ZC(3), ZC(5)]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1794-L1888` → after: `L128-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L128-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L128-L132) · [Before (L1794-L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1794-L1888)

```diff
-   },
-   36757: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Bq
-     });
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(1183),
-       xq = gq(1025),
-       Aq = gq(1070);
-     const cq = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
- ... (79 more removed lines; see GitHub link above)
+     const xC = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       JC = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1890-L1930` → after: `L134-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L134-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L134-L155) · [Before (L1890-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1890-L1930)

```diff
-         children: (0, mq.jsx)(lq.i, {
-           ...xq,
-           opensProfileCard: !1,
-           children: (0, mq.jsxs)("div", {
-             className: "WhitelistTickRowActions",
-             onClick: qq => {
-               qq.stopPropagation()
-             },
-             children: [gq, (0, mq.jsx)("label", {
-               className: "WhitelistTickRowTick",
-               children: (0, mq.jsx)(Oq.b, {
-                 checked: Eq.on,
-                 disabled: !1,
-                 ariaLabel: Aq("worldSocial:letJoin", {
-                   playerName: xq.playerSocialPreview.name
-                 }),
- ... (25 more removed lines; see GitHub link above)
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
+         section5: {
+           gameCount: 3,
+           columnCount: 1
+         },
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1932-L1936` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L157-L158) · [Before (L1932-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1932-L1936)

```diff
-     function aq(qq) {
-       let {
-         worldCode: Eq,
-         message: gq
-       } = qq;
+     function iC() {
+       var CC;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1939-L1948` → after: `L161-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L161-L165) · [Before (L1939-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1939-L1948)

```diff
-       } = (0, lq.v)(), {
-         isTouchScreen: Vq
-       } = (0, xq.j)(["isTouchScreen"]), dq = mq.featureFlags.canUseInviteLinks, jq = (0, uq.g)(dq && null === gq), [Hq, oq] = (0, cq.i)(), Pq = (0, Yq.useRef)(null);
-       if (null !== gq) return (0, Nq.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, Nq.jsx)(Wq.d, {
-           name: "lock"
-         }), (0, Nq.jsx)("span", {
-           children: gq
-         })]
+       } = (0, oC.y)(), ZC = (0, bC.C)(), QC = (0, IC.k)(), NC = (0, WC.d)({
+         refresh: !0
+       }), MC = ZC.customGamePlace;
+       if (!(0, nC.k)(MC)) return (0, SC.jsx)(FC.NavigatePreserveSearch, {
+         to: "/"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1950-L1951` → after: `L167-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L167-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L167-L184) · [Before (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1950-L1951)

```diff
-       const Qq = dq ? jq : Eq,
-         yq = Vq && dq && (0, cq.b)();
+       const gC = fC.d[MC],
+         pC = nC.d[MC],
+         PC = null !== (CC = null === NC || void 0 === NC ? void 0 : NC[MC]) && void 0 !== CC ? CC : null,
+         GC = [];
+       for (let wC = 0; wC < pC.length; wC++) {
+         var iC;
+         const CC = xC[wC];
+         if (!CC) continue;
+         const ZC = pC[wC];
+         GC.push({
+           id: ZC.id,
+           category: ZC.category,
+           title: zC(ZC.displayTranslationKey),
+           tintColour: ZC.tintColour,
+           layout: JC[CC],
+           games: null !== (iC = null === PC || void 0 === PC ? void 0 : PC[ZC.id]) && void 0 !== iC ? iC : null
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1953-L1964` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L186-L190) · [Before (L1953-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1953-L1964)

```diff
-         className: "WorldSocialLinkRow",
-         children: [!dq && (0, Nq.jsx)("span", {
-           className: "WorldSocialCodeLabel",
-           children: aq("worldSocial:worldCode")
-         }), (0, Nq.jsx)("input", {
-           ref: Pq,
-           className: "WorldSocialLink",
-           readOnly: !0,
-           value: null !== Qq && void 0 !== Qq ? Qq : "",
-           "aria-label": aq(dq ? "worldSocial:worldLink" : "worldSocial:worldCode"),
-           onFocus: qq => {
-             qq.currentTarget.select()
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, SC.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${MC}/${gC.largePicture}.png)`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1966-L2042` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/215.js#L192-L211) · [Before (L1966-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/215.js#L1966-L2042)

```diff
-         }), (0, Nq.jsxs)(Bq.g, {
-           className: "WorldSocialCopy",
-           disabled: null === Qq,
-           onClick: () => {
-             null !== Qq && (0, cq.f)(Qq, {
-               useShareSheet: yq,
-               onOutcome: qq => {
-                 if ((0, Aq.reportAnalyticsClick)({
-                     id: "world_social.copy_link",
-                     value: "copied" !== qq || dq ? qq : "code"
-                   }), "copied" === qq) oq();
-                 else if ("failed" === qq) {
-                   var Eq;
-                   null === (Eq = Pq.current) || void 0 === Eq || Eq.focus(), Oq.g.showMessage({
-                     translationKey: "partyBar:copyFailed"
-                   })
- ... (61 more removed lines; see GitHub link above)
+         }), (0, SC.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: zC(gC.title)
+         }), (0, SC.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, SC.jsx)(qC.c, {
+             onClick: () => (0, FC.navigatePreserveSearch)("/"),
+             children: zC("homePage:backToGames")
+           })
+         }), !QC && (0, SC.jsx)(AC, {
+           categories: GC
+         }), QC && (0, SC.jsx)("div", {
+           className: wC()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: GC.map((CC => (0, SC.jsx)(RC, {
+             category: CC.category,
+             title: CC.title,
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L2)

```diff
- export const ids = [216];
+ export const ids = [216, 291];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L165` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L19) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L165)

```diff
-   36701: qq => {
-     qq.exports = {
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
- ... (146 more removed lines; see GitHub link above)
+   41095: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CharacterCustomisationUI: () => Zz
+     });
+     var QC = ZC(48),
+       wC = ZC(2997),
+       bC = ZC(1076),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(1183),
+       qC = ZC(583),
+       FC = ZC(1143),
+       WC = ZC(2166),
+       NC = ZC(1501),
+       MC = ZC(2534);
+     const gC = oC.y.filter((CC => !NC.d.includes(CC)));
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L167-L168` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L21-L22) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L167-L168)

```diff
-     function cq(qq, Eq, gq) {
-       return Math.min(Math.max(Eq, qq), gq)
+     function SC(CC, zC) {
+       return gC.includes(CC) && "string" === typeof zC && (0, MC.g)(CC, zC)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L172-L173` → after: `L26-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L26-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L26-L38) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L172-L173)

```diff
-       var Eq = Math.round(qq).toString(16).toUpperCase();
-       return Eq.length < 2 ? "0" + Eq : Eq
+       const zC = {};
+       for (const ZC of gC) {
+         const QC = CC[ZC];
+         void 0 !== QC && SC(ZC, QC) && (zC[ZC] = QC)
+       }
+       return zC
+     }
+ 
+     function PC(CC, zC) {
+       return Object.entries(CC).every((CC => {
+         let [ZC, QC] = CC;
+         return zC[ZC] === QC
+       }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L175-L185` → after: `L40-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L40-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L40-L52) · [Before (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L175-L185)

```diff
-     Aq.get = function(qq) {
-       var Eq, gq;
-       switch (qq.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           Eq = Aq.get.hsl(qq), gq = "hsl";
-           break;
-         case "hwb":
-           Eq = Aq.get.hwb(qq), gq = "hwb";
-           break;
-         default:
-           Eq = Aq.get.rgb(qq), gq = "rgb"
+     var GC = ZC(2173),
+       RC = ZC(3088),
+       AC = ZC(1877),
+       xC = ZC(1388),
+       JC = ZC(2206),
+       IC = ZC(20),
+       iC = ZC(2685),
+       vC = ZC(1439),
+       eC = ZC(1078),
+       hC = ZC(1774);
+     class KC {
+       constructor() {
+         this.slots = new Map, this.accountId = null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L187-L209` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L54-L55) · [Before (L187-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L187-L209)

```diff
-       return Eq ? {
-         model: gq,
-         value: Eq
-       } : null
-     }, Aq.get.rgb = function(qq) {
-       if (!qq) return null;
-       var Eq, gq, lq, mq = [0, 0, 0, 1];
-       if (Eq = qq.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
-         for (lq = Eq[2], Eq = Eq[1], gq = 0; gq < 3; gq++) {
-           var xq = 2 * gq;
-           mq[gq] = parseInt(Eq.slice(xq, xq + 2), 16)
-         }
-         lq && (mq[3] = parseInt(lq, 16) / 255)
-       } else if (Eq = qq.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (lq = (Eq = Eq[1])[3], gq = 0; gq < 3; gq++) mq[gq] = parseInt(Eq[gq] + Eq[gq], 16);
-         lq && (mq[3] = parseInt(lq + lq, 16) / 255)
- ... (7 more removed lines; see GitHub link above)
+       moveTo(CC) {
+         null !== CC && CC !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), this.accountId = CC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L211-L218` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L57-L58) · [Before (L211-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L211-L218)

```diff
-       for (gq = 0; gq < 3; gq++) mq[gq] = cq(mq[gq], 0, 255);
-       return mq[3] = cq(mq[3], 0, 1), mq
-     }, Aq.get.hsl = function(qq) {
-       if (!qq) return null;
-       var Eq = qq.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
-       if (Eq) {
-         var gq = parseFloat(Eq[4]);
-         return [(parseFloat(Eq[1]) % 360 + 360) % 360, cq(parseFloat(Eq[2]), 0, 100), cq(parseFloat(Eq[3]), 0, 100), cq(isNaN(gq) ? 1 : gq, 0, 1)]
+       isFor(CC) {
+         return null === this.accountId || this.accountId === CC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L220-L226` → after: `L60-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L60-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L60-L65) · [Before (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L220-L226)

```diff
-       return null
-     }, Aq.get.hwb = function(qq) {
-       if (!qq) return null;
-       var Eq = qq.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
-       if (Eq) {
-         var gq = parseFloat(Eq[4]);
-         return [(parseFloat(Eq[1]) % 360 + 360) % 360, cq(parseFloat(Eq[2]), 0, 100), cq(parseFloat(Eq[3]), 0, 100), cq(isNaN(gq) ? 1 : gq, 0, 1)]
+       overlay(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return CC.map(((CC, ZC) => {
+           var QC, wC;
+           return null !== (QC = null !== (wC = this.slots.get(ZC)) && void 0 !== wC ? wC : zC.get(ZC)) && void 0 !== QC ? QC : CC
+         }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L251-L286` → after: `L68-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L68-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L68-L76) · [Before (L251-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L251-L286)

```diff
-   },
-   36687: (qq, Eq, gq) => {
-     const Yq = gq(36692),
-       lq = gq(36713),
-       Oq = ["keyword", "gray", "hex"],
-       mq = {};
-     for (const Nq of Object.keys(lq)) mq[[...lq[Nq].labels].sort().join("")] = Nq;
-     const xq = {};
- 
-     function Aq(qq, Eq) {
-       if (!(this instanceof Aq)) return new Aq(qq, Eq);
-       if (Eq && Eq in Oq && (Eq = null), Eq && !(Eq in lq)) throw new Error("Unknown model: " + Eq);
-       let gq, cq;
-       if (null == qq) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (qq instanceof Aq) this.model = qq.model, this.color = [...qq.color], this.valpha = qq.valpha;
-       else if ("string" === typeof qq) {
- ... (20 more removed lines; see GitHub link above)
+     class YC extends iC.c {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new KC;
+         super("saved outfits", (async zC => {
+           const ZC = CC.isFor(zC.whamm),
+             QC = new Map(CC.slots),
+             wC = await vC.d.getSavedOutfits(zC);
+           return ZC ? CC.overlay(wC, QC) : wC
+         })), this.unsaved = CC, this.started = !1, this.sending = !1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L288-L458` → after: `L78-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L78-L82) · [Before (L288-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L288-L458)

```diff
-       if (xq[this.model])
-         for (cq = lq[this.model].channels, gq = 0; gq < cq; gq++) {
-           const qq = xq[this.model][gq];
-           qq && (this.color[gq] = qq(this.color[gq]))
-         }
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
-     }
-     Aq.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(qq) {
-         let Eq = this.model in Yq.to ? this : this.rgb();
- ... (155 more removed lines; see GitHub link above)
+       ensureLoaded() {
+         if (this.started) {
+           if (!this.getState().failed) return
+         } else this.started = !0, this.watchAccount();
+         this.refresh()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L460-L474` → after: `L84-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L84-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L84-L112) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L460-L474)

```diff
-     };
-     for (const Nq of Object.keys(lq)) {
-       if (Oq.includes(Nq)) continue;
-       const {
-         channels: qq
-       } = lq[Nq];
-       Aq.prototype[Nq] = function() {
-         if (this.model === Nq) return new Aq(this);
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         return Eq.length > 0 ? new Aq(Eq, Nq) : new Aq([...(Yq = lq[this.model][Nq].raw(this.color), Array.isArray(Yq) ? Yq : [Yq]), this.valpha], Nq);
-         var Yq
-       }, Aq[Nq] = function() {
-         for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
-         let lq = gq[0];
-         return "number" === typeof lq && (lq = Wq(gq, qq)), new Aq(lq, Nq)
+       save(CC, zC) {
+         this.unsaved.moveTo(this.getState().accountId), this.unsaved.slots.set(CC, zC), this.update((ZC => ZC.map(((ZC, QC) => QC === CC ? zC : ZC)))), this.sending || this.sendUnsaved()
+       }
+       async sendUnsaved() {
+         for (this.sending = !0; this.unsaved.slots.size > 0;) {
+           const zC = new Map(this.unsaved.slots);
+           try {
+             const CC = await eC.userContextManager.getCurrentUserContext();
+             if (this.unsaved.moveTo(CC.whamm), 0 === this.unsaved.slots.size) {
+               this.refresh();
+               break
+             }
+             const {
+               accountId: zC,
+               data: ZC
+             } = this.getState();
+ ... (13 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L479-L483` → after: `L132-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L132-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L132-L194) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L479-L483)

```diff
-       return function(Eq) {
-         return function(qq, Eq) {
-           return Number(qq.toFixed(Eq))
-         }(Eq, qq)
-       }
+       let {
+         wornOutfit: zC,
+         onApply: ZC,
+         onOverwrite: wC
+       } = CC;
+       const {
+         t: nC
+       } = (0, FC.y)(), {
+         accountId: oC,
+         data: qC
+       } = (0, iC.j)(dC, !1), {
+         userContext: WC
+       } = (0, bC.e)();
+       return (0, QC.useEffect)((() => {
+         dC.ensureLoaded()
+       }), []), null === qC || oC !== WC.whamm ? null : (0, tC.jsxs)("div", {
+ ... (47 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L487-L493` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L201) · [Before (L487-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L487-L493)

```diff
-       qq = Array.isArray(qq) ? qq : [qq];
-       for (const Yq of qq)(xq[Yq] || (xq[Yq] = []))[Eq] = gq;
-       return qq = qq[0],
-         function(Yq) {
-           let lq;
-           return void 0 !== Yq ? (gq && (Yq = gq(Yq)), lq = this[qq](), lq.color[Eq] = Yq, lq) : (lq = this[qq]().color[Eq], gq && (lq = gq(lq)), lq)
-         }
+       return null !== CC && !(0, yC.g)(LC.b, zC, ZC, CC.collected, CC.ownedPacks)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L497-L499` → after: `L205-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L205-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L205-L233) · [Before (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L497-L499)

```diff
-       return function(Eq) {
-         return Math.max(0, Math.min(qq, Eq))
-       }
+       let {
+         locked: zC,
+         children: ZC
+       } = CC;
+       return zC ? (0, tC.jsx)(OC, {
+         children: ZC
+       }) : ZC
+     }
+ 
+     function OC(CC) {
+       var zC;
+       let {
+         children: ZC
+       } = CC;
+       const {
+         t: QC
+ ... (13 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L503-L504` → after: `L237-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L237-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L237-L240) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L503-L504)

```diff
-       for (let gq = 0; gq < Eq; gq++) "number" !== typeof qq[gq] && (qq[gq] = 0);
-       return qq
+       return Object.entries(CC).some((CC => {
+         let [ZC, QC] = CC;
+         return kC(ZC, QC, zC)
+       }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L506-L578` → after: `L242-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L242-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L242-L250) · [Before (L506-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L506-L578)

```diff
-     qq.exports = Aq
-   },
-   36716: (qq, Eq, gq) => {
-     const Yq = gq(36723),
-       lq = {};
-     for (const mq of Object.keys(Yq)) lq[Yq[mq]] = mq;
-     const Oq = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (57 more removed lines; see GitHub link above)
+ 
+     function Cz(CC) {
+       var zC;
+       let {
+         pack: ZC,
+         ownedPacks: QC,
+         showStoreLink: wC = !1,
+         children: bC
+       } = CC;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L580-L586` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L252-L274) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L580-L586)

```diff
-         channels: qq,
-         labels: Eq
-       } = Oq[mq];
-       delete Oq[mq].channels, delete Oq[mq].labels, Object.defineProperty(Oq[mq], "channels", {
-         value: qq
-       }), Object.defineProperty(Oq[mq], "labels", {
-         value: Eq
+         t: nC
+       } = (0, FC.y)(), oC = EC.d[ZC], qC = oC.purchasable && !QC.includes(ZC) && EC.q.includes(ZC), WC = XC.g[ZC];
+       return (0, tC.jsxs)("div", {
+         className: fC()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: qC
+         }),
+         children: [WC && (0, tC.jsx)(WC, {}), (0, tC.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: [(0, tC.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: null !== (zC = oC.displayName) && void 0 !== zC ? zC : ZC
+           }), (qC || wC) && (0, tC.jsxs)(xC.C, {
+             onClick: () => {
+               qC ? (0, XC.e)(ZC) : (0, JC.n)({
+                 mode: "self",
+                 source: "characterCustomisation"
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L589-L631` → after: `L277-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L277-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L277-L299) · [Before (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L589-L631)

```diff
-     Oq.rgb.hsl = function(qq) {
-       const Eq = qq[0] / 255,
-         gq = qq[1] / 255,
-         Yq = qq[2] / 255,
-         lq = Math.min(Eq, gq, Yq),
-         Oq = Math.max(Eq, gq, Yq),
-         mq = Oq - lq;
-       let xq, Aq;
-       Oq === lq ? xq = 0 : Eq === Oq ? xq = (gq - Yq) / mq : gq === Oq ? xq = 2 + (Yq - Eq) / mq : Yq === Oq && (xq = 4 + (Eq - gq) / mq), xq = Math.min(60 * xq, 360), xq < 0 && (xq += 360);
-       const cq = (lq + Oq) / 2;
-       return Aq = Oq === lq ? 0 : cq <= .5 ? mq / (Oq + lq) : mq / (2 - Oq - lq), [xq, 100 * Aq, 100 * cq]
-     }, Oq.rgb.hsv = function(qq) {
-       let Eq, gq, Yq, lq, Oq;
-       const mq = qq[0] / 255,
-         xq = qq[1] / 255,
-         Aq = qq[2] / 255,
- ... (27 more removed lines; see GitHub link above)
+ 
+     function zz(CC) {
+       let {
+         equippedEmoteIds: zC,
+         ownedPacks: ZC,
+         canBuy: QC,
+         onUpdateLoadout: wC,
+         onEmoteSelected: bC,
+         onEquipPreviewSkin: nC
+       } = CC;
+       const {
+         t: qC
+       } = (0, FC.y)(), NC = new Set(zC), MC = new Map, gC = Object.keys(WC.f.emote).sort(((CC, zC) => {
+         var ZC, QC, wC, bC;
+         return (null !== (ZC = null === (QC = (0, WC.j)("emote", CC)) || void 0 === QC ? void 0 : QC.clientIdx) && void 0 !== ZC ? ZC : 0) - (null !== (wC = null === (bC = (0, WC.j)("emote", zC)) || void 0 === bC ? void 0 : bC.clientIdx) && void 0 !== wC ? wC : 0)
+       })).filter((CC => {
+ ... (7 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L633-L690` → after: `L301-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L301-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L301-L423) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L633-L690)

```diff
-       var mq, xq;
-       return gq
-     }, Oq.keyword.rgb = function(qq) {
-       return Yq[qq]
-     }, Oq.rgb.xyz = function(qq) {
-       let Eq = qq[0] / 255,
-         gq = qq[1] / 255,
-         Yq = qq[2] / 255;
-       Eq = Eq > .04045 ? ((Eq + .055) / 1.055) ** 2.4 : Eq / 12.92, gq = gq > .04045 ? ((gq + .055) / 1.055) ** 2.4 : gq / 12.92, Yq = Yq > .04045 ? ((Yq + .055) / 1.055) ** 2.4 : Yq / 12.92;
-       return [100 * (.4124 * Eq + .3576 * gq + .1805 * Yq), 100 * (.2126 * Eq + .7152 * gq + .0722 * Yq), 100 * (.0193 * Eq + .1192 * gq + .9505 * Yq)]
-     }, Oq.rgb.lab = function(qq) {
-       const Eq = Oq.rgb.xyz(qq);
-       let gq = Eq[0],
-         Yq = Eq[1],
-         lq = Eq[2];
-       gq /= 95.047, Yq /= 100, lq /= 108.883, gq = gq > .008856 ? gq ** (1 / 3) : 7.787 * gq + 16 / 116, Yq = Yq > .008856 ? Yq ** (1 / 3) : 7.787 * Yq + 16 / 116, lq = lq > .008856 ? lq ** (1 / 3) : 7.787 * lq + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+       const SC = Array.from(MC.keys());
+       return (0, tC.jsxs)("div", {
+         className: "CharCustomisPartSelectorWrapper",
+         children: [!1, (0, tC.jsxs)("div", {
+           className: "EmoteLoadoutSummary",
+           children: [(0, tC.jsx)("span", {
+             className: "EmoteLoadoutSummaryText SmallTextBold",
+             children: qC("emotes:equippedCount", {
+               count: zC.length,
+               max: oC.r
+             })
+           }), (0, tC.jsx)("span", {
+             className: "EmoteLoadoutSummaryHint SmallTextLight",
+             children: qC("emotes:loadoutHint")
+           })]
+         }), SC.map((CC => {
+ ... (107 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L692-L732` → after: `L425-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L425-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L425-L442) · [Before (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L692-L732)

```diff
-     }, Oq.hsv.hsl = function(qq) {
-       const Eq = qq[0],
-         gq = qq[1] / 100,
-         Yq = qq[2] / 100,
-         lq = Math.max(Yq, .01);
-       let Oq, mq;
-       mq = (2 - gq) * Yq;
-       const xq = (2 - gq) * lq;
-       return Oq = gq * lq, Oq /= xq <= 1 ? xq : 2 - xq, Oq = Oq || 0, mq /= 2, [Eq, 100 * Oq, 100 * mq]
-     }, Oq.hwb.rgb = function(qq) {
-       const Eq = qq[0] / 360;
-       let gq = qq[1] / 100,
-         Yq = qq[2] / 100;
-       const lq = gq + Yq;
-       let Oq;
-       lq > 1 && (gq /= lq, Yq /= lq);
- ... (25 more removed lines; see GitHub link above)
+ 
+       function nz(CC, zC, ZC) {
+         var QC, wC, bC;
+         LC.current = {
+           ...LC.current,
+           [CC]: zC
+         }, GC(), ZC && ((0, jC.e)(gC, [
+           [CC, zC]
+         ]), TC(null));
+         const nC = (0, WC.j)(CC, zC);
+         if (null !== nC && void 0 !== nC && nC.colourGroup && null !== (QC = EC.d[nC.cosmeticPack].colourGroups) && void 0 !== QC && null !== (wC = QC[nC.colourGroup]) && void 0 !== wC && wC.showSwatchSelector) {
+           const ZC = (0, WC.h)(zC);
+           ZC && YC((zC => ({
+             ...zC,
+             [`${nC.cosmeticPack}_${CC}_${nC.colourGroup}`]: parseInt(ZC[1])
+           })))
+ ... (2 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L734-L795` → after: `L444-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L444-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L444-L451) · [Before (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L734-L795)

```diff
-       return [255 * cq, 255 * uq, 255 * Bq]
-     }, Oq.cmyk.rgb = function(qq) {
-       const Eq = qq[0] / 100,
-         gq = qq[1] / 100,
-         Yq = qq[2] / 100,
-         lq = qq[3] / 100;
-       return [255 * (1 - Math.min(1, Eq * (1 - lq) + lq)), 255 * (1 - Math.min(1, gq * (1 - lq) + lq)), 255 * (1 - Math.min(1, Yq * (1 - lq) + lq))]
-     }, Oq.xyz.rgb = function(qq) {
-       const Eq = qq[0] / 100,
-         gq = qq[1] / 100,
-         Yq = qq[2] / 100;
-       let lq, Oq, mq;
-       return lq = 3.2406 * Eq + -1.5372 * gq + -.4986 * Yq, Oq = -.9689 * Eq + 1.8758 * gq + .0415 * Yq, mq = .0557 * Eq + -.204 * gq + 1.057 * Yq, lq = lq > .0031308 ? 1.055 * lq ** (1 / 2.4) - .055 : 12.92 * lq, Oq = Oq > .0031308 ? 1.055 * Oq ** (1 / 2.4) - .055 : 12.92 * Oq,  … [truncated]
-     }, Oq.xyz.lab = function(qq) {
-       let Eq = qq[0],
-         gq = qq[1],
- ... (46 more removed lines; see GitHub link above)
+ 
+       function fz(CC) {
+         hC((zC => {
+           const ZC = {
+             ...zC
+           };
+           return delete ZC[CC], ZC
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L797-L858` → after: `L453-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L453-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L453-L509) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L797-L858)

```diff
-       let Eq;
-       qq -= 16;
-       return [Math.floor(qq / 36) / 5 * 255, Math.floor((Eq = qq % 36) / 6) / 5 * 255, Eq % 6 / 5 * 255]
-     }, Oq.rgb.hex = function(qq) {
-       const Eq = (((255 & Math.round(qq[0])) << 16) + ((255 & Math.round(qq[1])) << 8) + (255 & Math.round(qq[2]))).toString(16).toUpperCase();
-       return "000000".substring(Eq.length) + Eq
-     }, Oq.hex.rgb = function(qq) {
-       const Eq = qq.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!Eq) return [0, 0, 0];
-       let gq = Eq[0];
-       3 === Eq[0].length && (gq = gq.split("").map((qq => qq + qq)).join(""));
-       const Yq = parseInt(gq, 16);
-       return [Yq >> 16 & 255, Yq >> 8 & 255, 255 & Yq]
-     }, Oq.rgb.hcg = function(qq) {
-       const Eq = qq[0] / 255,
-         gq = qq[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+ 
+       function oz(CC, zC) {
+         let {
+           undoable: ZC
+         } = zC;
+         Object.keys(eC).length > 0 && hC({});
+         const QC = Object.entries(CC).filter((CC => {
+           let [zC, ZC] = CC;
+           return LC.current[zC] !== ZC && !kC(zC, ZC, qz) && !UC(Fz, zC, ZC)
+         }));
+         ZC ? QC.length > 0 && TC({
+           kind: "worn",
+           outfit: pC(LC.current)
+         }) : TC(null);
+         for (const [wC, bC] of QC) nz(wC, bC, !1);
+         QC.length > 0 && (0, jC.e)(gC, QC)
+ ... (41 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L860-L901` → after: `L511-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L511-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L511-L823) · [Before (L860-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L860-L901)

```diff
-       return Aq = (1 - gq) * Yq, [255 * (gq * lq[0] + Aq), 255 * (gq * lq[1] + Aq), 255 * (gq * lq[2] + Aq)]
-     }, Oq.hcg.hsv = function(qq) {
-       const Eq = qq[1] / 100,
-         gq = Eq + qq[2] / 100 * (1 - Eq);
-       let Yq = 0;
-       return gq > 0 && (Yq = Eq / gq), [qq[0], 100 * Yq, 100 * gq]
-     }, Oq.hcg.hsl = function(qq) {
-       const Eq = qq[1] / 100,
-         gq = qq[2] / 100 * (1 - Eq) + .5 * Eq;
-       let Yq = 0;
-       return gq > 0 && gq < .5 ? Yq = Eq / (2 * gq) : gq >= .5 && gq < 1 && (Yq = Eq / (2 * (1 - gq))), [qq[0], 100 * Yq, 100 * gq]
-     }, Oq.hcg.hwb = function(qq) {
-       const Eq = qq[1] / 100,
-         gq = Eq + qq[2] / 100 * (1 - Eq);
-       return [qq[0], 100 * (gq - Eq), 100 * (1 - gq)]
-     }, Oq.hwb.hcg = function(qq) {
- ... (26 more removed lines; see GitHub link above)
+       const Sz = function(CC, zC) {
+           const ZC = new Set,
+             QC = new Set;
+           for (const [wC, bC] of Object.entries(WC.f[CC])) {
+             if (void 0 === bC.colourGroup) continue;
+             const nC = `${bC.cosmeticPack}_${bC.colourGroup}`;
+             (kC(CC, wC, zC) ? QC : ZC).add(nC)
+           }
+           return new Set([...ZC].filter((CC => QC.has(CC))))
+         }(ZC, qz),
+         pz = new Map;
+       for (const [QC, wC] of Mz) {
+         const CC = [],
+           zC = new Map;
+         for (const QC of wC) {
+           var Pz, Gz;
+ ... (297 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L903-L925` → after: `L825-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L825-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L825-L885) · [Before (L903-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L903-L925)

```diff
-   36713: (qq, Eq, gq) => {
-     const Yq = gq(36716),
-       lq = gq(36731),
-       Oq = {};
-     Object.keys(Yq).forEach((qq => {
-       Oq[qq] = {}, Object.defineProperty(Oq[qq], "channels", {
-         value: Yq[qq].channels
-       }), Object.defineProperty(Oq[qq], "labels", {
-         value: Yq[qq].labels
-       });
-       const Eq = lq(qq);
-       Object.keys(Eq).forEach((gq => {
-         const Yq = Eq[gq];
-         Oq[qq][gq] = function(qq) {
-           const Eq = function() {
-             for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
- ... (7 more removed lines; see GitHub link above)
+   41104: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CharacterPreview: () => WC
+     });
+     var QC = ZC(48),
+       wC = ZC(2734),
+       bC = ZC(1183),
+       nC = ZC(2534),
+       fC = ZC(34185),
+       oC = ZC(3569),
+       qC = ZC(1056);
+     const FC = .6 * Math.PI,
+       WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
+         let {
+           onReady: ZC,
+           onDrawn: WC,
+ ... (45 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L927-L932` → after: `L887-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L887-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L887-L955) · [Before (L927-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L927-L932)

```diff
-           return "conversion" in qq && (Eq.conversion = qq.conversion), Eq
-         }(Yq), Oq[qq][gq].raw = function(qq) {
-           const Eq = function() {
-             for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
-             const lq = gq[0];
-             return void 0 === lq || null === lq ? lq : (lq.length > 1 && (gq = lq), qq(gq))
+           return {
+             updateCosmetic: CC,
+             setAllCosmetics(zC) {
+               for (const QC of bC.y) {
+                 var ZC;
+                 CC(QC, null !== (ZC = zC[QC]) && void 0 !== ZC ? ZC : (0, nC.e)(QC))
+               }
+             },
+             isReady() {
+               var CC, zC;
+               return null !== (CC = null === (zC = xC.current) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
+             },
+             resetCamera() {
+               var CC;
+               null === (CC = xC.current) || void 0 === CC || CC.resetCamera()
+             },
+ ... (53 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L934-L948` → after: `L957-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L957-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L957-L964) · [Before (L934-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L934-L948)

```diff
-           return "conversion" in qq && (Eq.conversion = qq.conversion), Eq
-         }(Yq)
-       }))
-     })), qq.exports = Oq
-   },
-   36731: (qq, Eq, gq) => {
-     const Yq = gq(36716);
- 
-     function lq(qq) {
-       const Eq = function() {
-           const qq = {},
-             Eq = Object.keys(Yq);
-           for (let gq = Eq.length, Yq = 0; Yq < gq; Yq++) qq[Eq[Yq]] = {
-             distance: -1,
-             parent: null
+           const QC = performance.now();
+           let wC = 0;
+           const bC = nC => {
+             CC.setOrbit({
+               yaw: PC + (nC - QC) / 6e3 * 2 * Math.PI,
+               pitch: zC,
+               radius: ZC
+             }), wC = requestAnimationFrame(bC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L950-L959` → after: `L966-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L966-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L966-L983) · [Before (L950-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L950-L959)

```diff
-           return qq
-         }(),
-         gq = [qq];
-       for (Eq[qq].distance = 0; gq.length;) {
-         const qq = gq.pop(),
-           lq = Object.keys(Yq[qq]);
-         for (let Yq = lq.length, Oq = 0; Oq < Yq; Oq++) {
-           const Yq = lq[Oq],
-             mq = Eq[Yq]; - 1 === mq.distance && (mq.distance = Eq[qq].distance + 1, mq.parent = qq, gq.unshift(Yq))
-         }
+           return wC = requestAnimationFrame(bC), () => {
+             cancelAnimationFrame(wC), CC.resetCamera()
+           }
+         }), [iC, PC]), (0, qC.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: GC
+         })
+       })))
+   },
+   36271: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(1840),
+       wC = ZC(1439);
+     const bC = new class {
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L961-L966` → after: `L985-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L985-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L985-L994) · [Before (L961-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L961-L966)

```diff
-       return Eq
-     }
- 
-     function Oq(qq, Eq) {
-       return function(gq) {
-         return Eq(qq(gq))
+       save(CC, zC) {
+         CC !== this.userContext && this.sendHeld(), this.userContext = CC;
+         for (const [QC, wC] of zC) this.pending.set(QC, wC);
+         if (null !== this.timer) return;
+         const ZC = this.lastSentAt + 1100 - Date.now();
+         ZC <= 0 ? this.send(CC) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), ZC), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L968-L983` → after: `L996-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L996-L997) · [Before (L968-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L968-L983)

```diff
-     }
- 
-     function mq(qq, Eq) {
-       const gq = [Eq[qq].parent, qq];
-       let lq = Yq[Eq[qq].parent][qq],
-         mq = Eq[qq].parent;
-       for (; Eq[mq].parent;) gq.unshift(Eq[mq].parent), lq = Oq(Yq[Eq[mq].parent][mq], lq), mq = Eq[mq].parent;
-       return lq.conversion = gq, lq
-     }
-     qq.exports = function(qq) {
-       const Eq = lq(qq),
-         gq = {},
-         Yq = Object.keys(Eq);
-       for (let lq = Yq.length, Oq = 0; Oq < lq; Oq++) {
-         const qq = Yq[Oq];
-         null !== Eq[qq].parent && (gq[qq] = mq(qq, Eq))
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L985-L1153` → after: `L999-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L999-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L999-L1009) · [Before (L985-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L985-L1153)

```diff
-       return gq
-     }
-   },
-   36723: qq => {
-     qq.exports = {
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
- ... (153 more removed lines; see GitHub link above)
+       send(CC) {
+         const zC = Array.from(this.pending, (CC => {
+           let [zC, ZC] = CC;
+           return {
+             JQ: zC,
+             IQ: ZC
+           }
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), wC.d.updateCosmetics(CC, zC).catch((CC => {
+           console.error("Failed to update cosmetics", CC)
+         }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L1155-L1159` → after: `L1011-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L1011-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/216.js#L1011-L1020) · [Before (L1155-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/216.js#L1155-L1159)

```diff
-     }
-   },
-   36706: qq => {
-     qq.exports = function(qq) {
-       return !(!qq || "string" === typeof qq) && (qq instanceof Array || Array.isArray(qq) || qq.length >= 0 && (qq.splice instanceof Function || Object.getOwnPropertyDescriptor(qq, qq.length - 1) && "String" !== qq.constructor.name))
+     };
+ 
+     function nC(CC, zC) {
+       for (const [ZC, QC] of zC) CC.setPlayerCosmetics(ZC, QC);
+       if (null === QC.gameBridge.latest("connectedGame").websocketUrl) bC.save(CC, zC);
+       else
+         for (const [ZC, wC] of zC) QC.gameBridge.send("updateMyCosmetic", {
+           JQ: ZC,
+           IQ: wC
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L4)

```diff
-   36796: (qq, Eq, gq) => {
+   36291: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L6` → after: `L6-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L6-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L6-L176) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L6)

```diff
-       b: () => OE,
+       c: () => eC,
+       d: () => hC,
+       f: () => RC
+     });
+     var QC = ZC(264),
+       wC = ZC(77);
+     const bC = new(ZC(36294).d)(new URL(ZC.p + ZC.u(3), ZC.b), {
+       name: "blockIconWorker",
+       type: "module"
+     });
+     var nC = ZC(1724),
+       fC = ZC(2057);
+     const oC = 1e4,
+       qC = 3e4;
+     let FC = null,
+       WC = null,
+ ... (155 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L9-L10` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L179-L181) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L9-L10)

```diff
-       k: () => cE,
-       o: () => uE
+       h: () => nC,
+       j: () => NC,
+       k: () => qC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L66-L117` → after: `L184-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L184-L186) · [Before (L66-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L66-L117)

```diff
-         gunSemiAutomatic: Yq,
-         gunSubmachineGun: lq,
-         gunShotgun: Aq,
-         gunRifle: mq,
-         gunPistol: Oq,
-         gunMisc: xq,
-         dig: cq,
-         step: uq,
-         randomBeep: Bq,
-         randomCannon: Wq,
-         randomCash: Nq,
-         randomExp: aq,
-         randomFallsmall: Vq,
-         randomItems: dq,
-         randomFire: jq,
-         randomFirecracker: Hq,
- ... (36 more removed lines; see GitHub link above)
+         across: Math.SQRT1_2,
+         down: Math.SQRT1_2 / 2,
+         up: Math.sqrt(3) / 2
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L119-L151` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L188-L192) · [Before (L119-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L119-L151)

```diff
-       OE = new Map(["mob", "random"].map((qq => {
-         const Eq = Object.keys(lE).filter((Eq => Eq.startsWith(qq) && /^[A-Z]/.test(Eq.slice(qq.length))));
-         return [qq, Eq]
-       }))),
-       mE = {};
-     for (const NE in lE) {
-       const qq = lE[NE];
-       for (const Eq in qq.sprite) {
-         if (mE[Eq]) throw new Error(`duplicate sound name ${Eq} in ${mE[Eq]} and ${NE}`);
-         mE[Eq] = NE
-       }
-     }
-     for (const NE in lE) {
-       const qq = lE[NE];
-       for (let Eq = 0; Eq < qq.src.length; Eq++) qq.src[Eq] = YE.clientSideServerUrls.staticUrl + qq.src[Eq]
-     }
- ... (17 more removed lines; see GitHub link above)
+       wC = .6,
+       bC = {
+         width: 2 * QC.across,
+         height: 2 * QC.down + QC.up
+       };
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L154-L164` → after: `L195-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L195-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/217.js#L195-L363) · [Before (L154-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/217.js#L154-L164)

```diff
-       if (!(qq in lE)) throw new Error("Invalid spriteTrack name");
-       return Eq in lE[qq].sprite
-     }
- 
-     function BE(qq) {
-       if (!(qq in lE)) throw new Error("Invalid spritesheet name");
-       return lE[qq]
-     }
- 
-     function WE(qq) {
-       return qq[Math.floor(Math.random() * qq.length)]
+       const ZC = zC > 0 ? zC + 1 : 0,
+         nC = CC * wC - zC / QC.across;
+       return Math.max(0, Math.min(nC, (CC - 2 * ZC) / bC.height))
+     }
+     const fC = [15, 15, 15],
+       oC = {
+         top: 1,
+         left: .85,
+         right: .7
+       };
+ 
+     function qC(CC, zC, ZC, QC) {
+       const {
+         vertices: wC,
+         uvs: fC,
+         indices: oC,
+ ... (153 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L4)

```diff
-   39535: (qq, Eq, gq) => {
+   38923: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L6-L7)

```diff
-       b: () => Yq,
-       d: () => lq
+       e: () => bC,
+       g: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L61` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L9-L10) · [Before (L9-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L9-L61)

```diff
-     const Yq = "The world isn't loaded, so no blocks can be seen.",
-       lq = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39056: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
-     }
-     gq.d(Eq, {
-       d: () => Yq
-     })
-   },
-   36851: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq,
-       c: () => lq
-     });
- ... (37 more removed lines; see GitHub link above)
+     var QC = ZC(28);
+     let wC = !1;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L68-L79` → after: `L17-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L17-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L17-L87) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L68-L79)

```diff
-       const Eq = null !== Nq && Nq.key === Bq(qq.pos) ? Nq.type : null;
-       if (null === Eq) return qq;
-       let gq = null;
-       if ("Iron" === Eq) {
-         const {
-           cachedPasskey: Eq,
-           ...Yq
-         } = jq(qq.pos);
-         gq = {
-           Nu: null !== Eq && void 0 !== Eq ? Eq : [0, 0, 0, 0],
-           ...Yq
-         }
+       wC !== CC && (wC = CC, QC.o.bp("replayViewer|videoExportChanged"))
+     }
+   },
+   36346: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => NC,
+       h: () => FC,
+       j: () => MC,
+       k: () => WC
+     });
+     var QC = ZC(326),
+       wC = ZC(622),
+       bC = ZC(630),
+       nC = ZC(38);
+     const fC = {
+         idStorageKey: "playSessionId",
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L81-L84` → after: `L89-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L89-L93) · [Before (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L81-L84)

```diff
-       return {
-         ...qq,
-         type: Eq,
-         ironChest: gq
+     }
+ 
+     function nC() {
+       return null === wC ? null : {
+         ...wC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L89-L114` → after: `L98-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L98-L100) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L89-L114)

```diff
-       const Eq = uq(qq),
-         gq = null === Eq || void 0 === Eq ? void 0 : Eq.ownerDbId,
-         Yq = function(qq) {
-           var Eq;
-           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uq(qq);
-           const Yq = Bq(qq),
-             lq = Wq.get(Yq);
-           return lq ? lq.lastOpened < (null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.passkeyLastUpdated) && void 0 !== Eq ? Eq : 0) ? (Wq.delete(Yq), null) : [...lq.Nu] : null
-         }(qq, Eq);
-       return void 0 === gq ? {
-         cachedPasskey: Yq
-       } : {
-         ownerDbId: gq,
-         cachedPasskey: Yq
-       }
-     }(0, cq.l)(mq.b, (qq => {
- ... (10 more removed lines; see GitHub link above)
+       var zC;
+       null !== (zC = QC) && void 0 !== zC && zC(CC) && (wC = {
+         ...CC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L116-L190` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L102) · [Before (L116-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L116-L190)

```diff
-     })), (0, cq.d)((() => {
-       Wq.clear(), Nq = null, aq++
-     })), (0, cq.h)((() => {
-       null !== Nq && (Nq = null, aq++, Yq.i.TV("chestToggleFromServer", !1, !0))
-     }));
-     const Hq = {
-         boardEditRequested: {
-           watch: qq => (0, Yq.k)("EditBoard", (Eq => {
-             let {
-               pos: gq
-             } = Eq;
-             if (null === gq) return void qq(null);
-             const Yq = (0, Oq.e)(),
-               lq = (0, Oq.k)();
-             Yq && lq && qq(lq.readBoardToEdit(Yq.api, Yq.chunks, gq))
-           }))
- ... (59 more removed lines; see GitHub link above)
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L192` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L104) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L192)

```diff
-   40377: (qq, Eq, gq) => {
+   40756: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L194-L195` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L106) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L194-L195)

```diff
-       b: () => Aq,
-       f: () => mq,
+       d: () => wC,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L198-L200` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L109) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L198-L200)

```diff
-     var Yq = gq(40318),
-       lq = gq(4608),
-       Oq = gq(40325);
+     let QC = null;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L202-L258` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L111-L114) · [Before (L202-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L202-L258)

```diff
-     function mq() {
-       var qq;
-       const Eq = null === (qq = (0, Oq.e)()) || void 0 === qq ? void 0 : qq.api.localId;
-       return void 0 === Eq || Eq === Yq.gd ? null : String(Eq)
-     }
- 
-     function xq(qq) {
-       const Eq = (0, Oq.e)();
-       if (null !== Eq) return qq(Eq);
-       let gq = null;
-       const Yq = (0, lq.w)((() => {
-         const Eq = (0, Oq.e)();
-         null !== Eq && null === gq && (Yq(), gq = qq(Eq))
-       }));
-       return () => {
-         var qq;
- ... (41 more removed lines; see GitHub link above)
+     function wC(CC, zC) {
+       QC = {
+         conn: CC,
+         reason: zC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L263-L298` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L119-L121) · [Before (L263-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L263-L298)

```diff
-       return {
-         watch: Eq => (0, lq.h)((gq => gq.itemBridgeSources.events[qq].watch(Eq)))
-       }
-     }
-     const cq = {
-       states: {
-         inventory: xq("inventory"),
-         hotbar: xq("hotbar"),
-         crafting: xq("crafting"),
-         heldItemAim: xq("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: Aq("hotbarSlotRequested"),
-         hotbarScrolled: Aq("hotbarScrolled"),
-         numberKeyPressed: Aq("numberKeyPressed"),
-         inventoryDropRequested: Aq("inventoryDropRequested"),
- ... (20 more removed lines; see GitHub link above)
+       var zC;
+       const ZC = (null === (zC = QC) || void 0 === zC ? void 0 : zC.conn) === CC ? QC.reason : null;
+       return QC = null, ZC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L301` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L124) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L301)

```diff
-   40385: (qq, Eq, gq) => {
+   40817: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L303` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L126-L127) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L303)

```diff
-       b: () => xq
+       d: () => bC,
+       g: () => wC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L305` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/218.js#L129-L132) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/218.js#L305)

```diff
-     var Yq = gq(39535);
+     let QC = {
+       fire: () => {},
+       close: () => {}
+     };
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L5-L74) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L4)

```diff
-   36974: (qq, Eq, gq) => {
+   39388: (CC, zC, ZC) => {
+     CC.exports = wC;
+     var QC = ZC(338);
+ 
+     function wC(CC, zC) {
+       if (!(this instanceof wC)) return new wC(CC, zC);
+       var ZC = QC.create();
+       QC.add(ZC, CC, zC), this.base = QC.min(QC.create(), CC, ZC), this.vec = QC.clone(zC), this.max = QC.max(QC.create(), CC, ZC), this.mag = QC.length(this.vec)
+     }
+     var bC = wC.prototype;
+     bC.width = function() {
+       return this.vec[0]
+     }, bC.height = function() {
+       return this.vec[1]
+     }, bC.depth = function() {
+       return this.vec[2]
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L7` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L77) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L7)

```diff
-       g: () => Pq
+       d: () => bC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L9-L26` → after: `L79-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L79-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L79-L84) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L9-L26)

```diff
-     var Yq = gq(4111),
-       lq = gq(1416),
-       Oq = gq(57),
-       mq = gq(6348),
-       xq = gq(4098),
-       Aq = gq(1274),
-       cq = gq(1904),
-       uq = gq(1876),
-       Bq = gq(1422),
-       Wq = gq(1183),
-       Nq = gq(36979),
-       aq = gq(1018),
-       Vq = gq.n(aq),
-       dq = gq(1298),
-       jq = gq(1025),
-       Hq = gq(1267),
- ... (2 more removed lines; see GitHub link above)
+     var QC = ZC(4036);
+     let wC = null;
+ 
+     function bC(CC) {
+       return null !== wC && CC === wC
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L29-L31` → after: `L87-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L87-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L87-L270) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L29-L31)

```diff
-       const {
-         t: qq
-       } = (0, Wq.v)(), [Eq, gq] = (0, Oq.useState)(!1), [aq, Qq] = (0, Oq.useState)(null), [tq, rq] = (0, Oq.useState)(1), [vq, hq] = (0, Oq.useState)(!1), [nq, bq] = (0, Oq.useState)(!1), iq = (0, Oq.useRef)(0), Zq = (0, Oq.useRef)(!1), fq = (0, Oq.useRef)(!1), Mq = (0, Oq.useRe … [truncated]
+       this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
+     }
+     class fC {
+       constructor(CC, zC) {
+         this.version = "0.7.0";
+         var ZC = Object.assign({}, new nC, zC || {});
+         this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           OCC: 0,
+           kCC: 0,
+           VCC: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+ ... (168 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L33-L35` → after: `L272-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L272-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L272-L283) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L33-L35)

```diff
-       function zq() {
-         const qq = null !== aq && void 0 !== aq ? aq : "Rested Speed";
-         cq.gameBridge.send("wakeUp", nq ? qq : null), Tq.current = null, gq(!1), Qq(null), rq(1), hq(!1), bq(!1)
+     function vC(CC, zC) {
+       const ZC = {
+           code: zC,
+           preventDefault: () => {},
+           stopPropagation: () => {}
+         },
+         QC = wC;
+       wC = ZC;
+       try {
+         eC(zC, !1, CC, ZC)
+       } finally {
+         wC = QC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L38-L46` → after: `L287-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L287-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L287-L300) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L38-L46)

```diff
-       function Sq() {
-         return !vq && (zq(), !0)
-       }
-       return (0, lq.f)("PlayerPhysicsTypeUpdate", (qq => {
-         qq !== Tq.current && (Tq.current = qq, qq === mq.t.SLEEPING ? (fq.current || (iq.current = cq.gameBridge.lookup("cameraZoom", null), fq.current = !0), Zq.current = !0, cq.gameBridge.send("setCameraZoom", 3), gq(!0), rq(function() {
-           for (const qq of cq.gameBridge.lookup("blocksStandingOn", null)) {
-             if (Nq.e.leafBeds.includes(qq)) return console.log(`Found leaf bed: ${qq}`), 1;
-             if (Nq.e.woolBeds.includes(qq)) return console.log(`Found woold bed: ${qq}`), 2;
-             if (Nq.e.strongBeds.includes(qq)) return console.log(`Found strong bed ${qq}`), 3
+     function eC(CC, zC, ZC, QC) {
+       var wC = ZC._keyBindmap[CC];
+       wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
+         (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
+           var wC = zC ? ZC.pressCount : ZC.releaseCount;
+           wC[CC] = (wC[CC] || 0) + 1;
+           var bC = ZC._bindPressCount[CC] || 0;
+           (bC += zC ? 1 : -1) < 0 && (bC = 0);
+           ZC._bindPressCount[CC] = bC;
+           var nC = ZC.state[CC];
+           if (hC(nC, bC)) {
+             ZC.state[CC] = bC > 0;
+             var fC = zC ? ZC.down : ZC.up;
+             ZC.disabled || fC.emit(CC, QC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L48-L97` → after: `L302-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L302-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L302-L455) · [Before (L48-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L48-L97)

```diff
-           return 1
-         }())) : (fq.current = !1, gq(!1), Qq(null), rq(1)))
-       })), (0, Oq.useEffect)((() => () => {
-         (0, Aq.j)(Pq)
-       }), []), (0, Oq.useEffect)((() => {
-         Eq ? (0, Aq.m)(Pq) : ((0, Aq.j)(Pq), Zq.current && (cq.gameBridge.send("setCameraZoom", iq.current), Zq.current = !1))
-       }), [Eq]), (0, Hq.w)("overlay", Mq, Sq, Eq), (0, oq.jsx)(Yq.c, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
-         in: Eq,
-         timeout: 300,
-         nodeRef: Mq,
-         unmountOnExit: !0,
-         children: (0, oq.jsx)("div", {
-           ref: Mq,
-           onClick: qq => {
- ... (34 more removed lines; see GitHub link above)
+         }(CC, zC, ZC, QC)
+       }))), "button" in QC || (ZC.rD && !QC.defaultPrevented && QC.preventDefault(), ZC.stopPropagation && QC.stopPropagation()))
+     }
+ 
+     function hC(CC, zC) {
+       return CC ? !zC : zC
+     }
+   },
+   36417: (CC, zC) => {
+     function ZC(CC) {
+       if (CC && "object" === typeof CC) {
+         var zC = CC.which || CC.keyCode || CC.charCode;
+         zC && (CC = zC)
+       }
+       if ("number" === typeof CC) return nC[CC];
+       var ZC, bC = String(CC);
+ ... (138 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L99-L139` → after: `L457-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L457-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L457-L496) · [Before (L99-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L99-L139)

```diff
-                 loading: vq,
-                 children: [!nq && (0, oq.jsxs)(oq.Fragment, {
-                   children: [(0, oq.jsx)(jq.d, {
-                     name: "film"
-                   }), " ", qq("classicGame:watchAdToGetRestedPerk")]
-                 }), nq && qq("classicGame:wakeUp")]
-               }), (0, oq.jsxs)("div", {
-                 className: "SleepingOverlayPerkBottomSide",
-                 children: [(0, oq.jsx)("div", {
-                   className: Vq()("SleepingOverlayBedIcon", {
-                     SleepingOverlayBedIconActive: 1 === tq
-                   }),
-                   children: (0, oq.jsx)(uq.c, {
-                     text: [{
-                       icon: "Leaf Bed"
-                     }]
- ... (25 more removed lines; see GitHub link above)
+                 bC = CC => {
+                   !!CC !== (QC = zC === document.fullscreenElement) && (CC ? zC.requestFullscreen ? zC.requestFullscreen() : zC.webkitRequestFullscreen && zC.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && documen … [truncated]
+                 };
+               document.addEventListener("pointerlockchange", (QC => {
+                 ZC = zC === document.pointerLockElement, CC.Tl(ZC)
+               })), document.addEventListener("fullscreenchange", (ZC => {
+                 QC = zC === document.fullscreenElement, CC.onFullscreenChanged(QC)
+               })), document.addEventListener("pointerlockerror", (QC => {
+                 ZC = zC === document.pointerLockElement, CC.onPointerLockError(QC)
+               })), Object.defineProperty(CC, "rp", {
+                 get: () => ZC,
+                 set: wC
+               }), Object.defineProperty(CC, "fullscreen", {
+                 get: () => QC,
+                 set: bC
+               }), zC.addEventListener("click", (zC => {
+ ... (24 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L161` → after: `L499-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L499-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L499-L648) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L161)

```diff
-   40309: (qq, Eq, gq) => {
+   36581: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(48);
+     const wC = QC.useLayoutEffect;
+     const bC = function(CC) {
+       var zC = (0, QC.useRef)(CC);
+       return wC((function() {
+         zC.current = CC
+       })), zC
+     };
+     var nC = function(CC) {
+       var zC = bC(CC);
+       (0, QC.useEffect)((function() {
+         var CC = function(CC) {
+ ... (134 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L165-L186` → after: `L670-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L670-L673) · [Before (L165-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L165-L186)

```diff
-     var Yq = gq(24),
-       lq = gq(31),
-       Oq = gq(4135),
-       mq = gq(296),
-       xq = gq(1622),
-       Aq = gq(8073),
-       cq = gq(4144),
-       uq = gq(8646),
-       Bq = gq(8118),
-       Wq = gq(8090),
-       Nq = gq(8120),
-       aq = gq(1668),
-       Vq = gq(8123),
-       dq = gq(8594),
-       jq = gq(8773),
-       Hq = gq(8662),
- ... (6 more removed lines; see GitHub link above)
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L188-L189` → after: `L675-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L675-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L675-L705) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L188-L189)

```diff
-       constructor() {
-         this.lostAtMs = null
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+             const ZC = Object.getOwnPropertyNames(CC);
+             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
+           } while (CC = Object.getPrototypeOf(CC));
+           return zC
+         }(CC);
+         for (const qC of fC) {
+           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
+           if (qC.endsWith("Observable")) continue;
+           if (ZC && -1 !== ZC.indexOf(qC)) continue;
+           const fC = CC[qC],
+             FC = typeof fC;
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L191-L192` → after: `L707-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L707-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L707-L719) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L191-L192)

```diff
-       update(qq, Eq) {
-         return qq ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Eq, Eq - this.lostAtMs >= 250)
+     }
+   },
+   38538: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC,
+       f: () => bC,
+       g: () => nC,
+       k: () => fC
+     });
+     var QC = ZC(37142);
+     class wC {
+       constructor(CC, zC, ZC) {
+         this.gradient = CC, this.color1 = zC, this.color2 = ZC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L194-L195` → after: `L721-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L721-L722) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L194-L195)

```diff
-       reset() {
-         this.lostAtMs = null
+       getColorToRef(CC) {
+         this.color2 ? QC.g.LerpToRef(this.color1, this.color2, Math.random(), CC) : CC.Av(this.color1)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L200-L204` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L727) · [Before (L200-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L200-L204)

```diff
-         this.press = qq, this.release = Eq, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(qq, Eq, gq, Yq) {
-         if (qq && null === this.downAtMs) return this.downAtMs = gq, this.latched = Yq, void(this.token = this.press());
-         null !== this.downAtMs && (this.latched ? qq && this.end() : !Eq && gq - this.downAtMs >= 40 && this.end())
+         this.gradient = CC, this.color = zC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L206-L213` → after: `L729-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L729-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L729-L732) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L206-L213)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
-       }
-       unlatch() {
-         this.latched = !1
-       }
-       cancel() {
-         null !== this.downAtMs && this.end()
+     }
+     class nC {
+       constructor(CC, zC, ZC) {
+         this.gradient = CC, this.factor1 = zC, this.factor2 = ZC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L215-L217` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L734-L735) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L215-L217)

```diff
-       end() {
-         const qq = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(qq)
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L220-L285` → after: `L738-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L738-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L738-L745) · [Before (L220-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L220-L285)

```diff
-     const nq = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       bq = qq => {
-         let Eq = null;
-         const gq = new rq.d,
-           Yq = () => {
-             Eq && (((qq, Eq, gq) => {
-               switch (gq.kind) {
-                 case "reload":
-                   return void Eq.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void Eq.specialActionUp(gq.action);
-                 case "customButton":
-                   return void Pq.gameBridge.send("pressCustomButton", {
- ... (50 more removed lines; see GitHub link above)
+     class fC {
+       static GetCurrentGradient(CC, zC, ZC) {
+         if (zC[0].gradient > CC) return void ZC(zC[0], zC[0], 1);
+         for (let wC = 0; wC < zC.length - 1; wC++) {
+           const QC = zC[wC],
+             bC = zC[wC + 1];
+           if (CC >= QC.gradient && CC <= bC.gradient) {
+             return void ZC(QC, bC, (CC - QC.gradient) / (bC.gradient - QC.gradient))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L288-L487` → after: `L748-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L748-L749) · [Before (L288-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L288-L487)

```diff
-       };
-     var iq = gq(8057);
-     var Zq = gq(40304),
-       fq = gq(8704),
-       Mq = gq(8110),
-       Tq = gq(8823);
-     var zq = gq(40301),
-       Sq = gq(8826),
-       pq = gq(40314),
-       Gq = gq(8803),
-       Lq = gq(8709),
-       Jq = gq(8712),
-       kq = gq(8718),
-       Rq = gq(8599);
-     const Uq = () => Rq.d[(0, Wq.i)().tapHoldTime].wheelMs,
-       Fq = () => ((0, uq.c)(), new Event("controllerMenuKey")),
- ... (184 more removed lines; see GitHub link above)
+         const QC = zC.length - 1;
+         ZC(zC[QC], zC[QC], 1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L490` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L753) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L490)

```diff
-   40304: (qq, Eq, gq) => {
+   38507: (CC, zC, ZC) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L492-L494` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L755) · [Before (L492-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L492-L494)

```diff
-       b: () => aq,
-       c: () => dq,
-       d: () => Nq
+       c: () => QC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L496-L520` → after: `L757-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L757-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L757-L770) · [Before (L496-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L496-L520)

```diff
-     var Yq = gq(1274),
-       lq = gq(4135),
-       Oq = gq(8750),
-       mq = gq(36974),
-       xq = gq(1702),
-       Aq = gq(1174),
-       cq = gq(8123),
-       uq = gq(8662),
-       Bq = gq(8780);
-     const Wq = {
-         emoteWheel: Oq.e,
-         quickChatWheel: uq.d,
-         actionWheel: Bq.r
-       },
-       Nq = Object.keys(Wq),
-       aq = "dead",
- ... (9 more removed lines; see GitHub link above)
+     class QC {
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L523` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L824) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L523)

```diff
-   40301: (qq, Eq, gq) => {
+   38544: (CC, zC, ZC) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L525-L532` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L826) · [Before (L525-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L525-L532)

```diff
-       d: () => lq,
-       h: () => Aq,
-       i: () => xq,
-       l: () => uq,
-       m: () => mq,
-       o: () => Oq,
-       s: () => cq,
-       u: () => Bq
+       c: () => nC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L534` → after: `L828-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L828-L830) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L534)

```diff
-     var Yq = gq(8061);
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(38501);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L537-L632` → after: `L833-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L833-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L833-L872) · [Before (L537-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L537-L632)

```diff
-         this.fullTiltSinceMs = null
-       }
-       update(qq, Eq, gq) {
-         const lq = (0, Yq.j)(qq, Eq.lookDeadzone);
-         if (Math.hypot(lq.x, lq.y) < .9 || Math.abs(lq.x) < Math.abs(lq.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = gq);
-         const Oq = (mq = Eq.lookSensitivityX, Math.min(1, 100 / mq));
-         var mq;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (gq - this.fullTiltSinceMs - 250 * Oq) / (200 * Oq)))
-       }
-       reset() {
-         this.fullTiltSinceMs = null
-       }
-     }
-     const Oq = (qq, Eq, gq, lq, Oq) => {
-         let mq = 1;
- ... (80 more removed lines; see GitHub link above)
+         this.direction1 = new QC.r(0, 1, 0), this.direction2 = new QC.r(0, 1, 0), this.minEmitBox = new QC.r(-.5, -.5, -.5), this.maxEmitBox = new QC.r(.5, .5, .5)
+       }
+       startDirectionFunction(CC, zC, ZC, bC) {
+         const nC = (0, wC.RandomRange)(this.direction1.x, this.direction2.x),
+           fC = (0, wC.RandomRange)(this.direction1.y, this.direction2.y),
+           oC = (0, wC.RandomRange)(this.direction1.z, this.direction2.z);
+         if (bC) return zC.x = nC, zC.y = fC, void(zC.z = oC);
+         QC.r.TransformNormalFromFloatsToRef(nC, fC, oC, CC, zC)
+       }
+       startPositionFunction(CC, zC, ZC, bC) {
+         const nC = (0, wC.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
+           fC = (0, wC.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
+           oC = (0, wC.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
+         if (bC) return zC.x = nC, zC.y = fC, void(zC.z = oC);
+         QC.r.TransformCoordinatesFromFloatsToRef(nC, fC, oC, CC, zC)
+       }
+ ... (24 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L634` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L874) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L634)

```diff
-   40314: (qq, Eq, gq) => {
+   38497: (CC, zC, ZC) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L636-L637` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L876-L877) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L636-L637)

```diff
-       b: () => lq,
-       c: () => Yq
+       e: () => fC,
+       i: () => nC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L639-L662` → after: `L879-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L879-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L879-L881) · [Before (L639-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L639-L662)

```diff
-     const Yq = qq => {
-       let {
-         mode: Eq,
-         sneakHeld: gq,
-         sneakPressed: Yq,
-         sneakTogglePressed: lq,
-         descending: Oq,
-         canCrouch: mq,
-         toggled: xq
-       } = qq;
-       return mq ? Oq ? {
-         crouchHeld: gq,
-         toggled: !1
-       } : "hold" === Eq ? {
-         crouchHeld: gq,
-         toggled: lq ? !xq : xq
- ... (8 more removed lines; see GitHub link above)
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(38501);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L665-L677` → after: `L884-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L884-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L884-L965) · [Before (L665-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L665-L677)

```diff
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
-       }
-       lostToPadScreen() {
-         this.regainPending = !0
-       }
-       filter(qq, Eq) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = Eq, this.graceEndsMs = Eq + 500);
-         const gq = Eq < this.graceEndsMs;
-         return gq && (qq.sneakPressed || qq.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Eq + 300))), qq.sneakHeld ? gq && qq.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: qq.sneakHeld && !this.ignoringHeld,
-           sneakPressed: qq.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: qq.sneakTogglePressed && !gq
-         }
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = CC, this.height = zC, this.radiusRange = ZC, this.directionRandomizer = wC, this._tempVector = QC.r.Zero()
+       }
+       startDirectionFunction(CC, zC, ZC, bC, nC) {
+         ZC.position.subtractToRef(CC.getTranslation(), this._tempVector), this._tempVector.normalize(), QC.r.TransformNormalToRef(this._tempVector, nC, this._tempVector);
+         const fC = (0, wC.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
+         let oC = Math.atan2(this._tempVector.x, this._tempVector.z);
+         oC += (0, wC.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = fC, this._tempVector.x = Math.sin(oC), this._tempVector.z = Math.cos(oC), this._tempVector.normalize(), bC ? zC.Av(this._tempVector) : QC.r.TransformNormalFromFloatsToRef … [truncated]
+       }
+       startPositionFunction(CC, zC, ZC, bC) {
+         const nC = (0, wC.RandomRange)(-this.height / 2, this.height / 2),
+           fC = (0, wC.RandomRange)(0, 2 * Math.PI),
+           oC = (0, wC.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
+ ... (66 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L681-L684` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L969) · [Before (L681-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L681-L684)

```diff
-   40293: (qq, Eq, gq) => {
-     gq(8826)
-   },
-   40295: (qq, Eq, gq) => {
+   38617: (CC, zC, ZC) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L688-L755` → after: `L973-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L973-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L973-L998) · [Before (L688-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L688-L755)

```diff
-     var Yq = gq(31),
-       lq = gq(8750),
-       Oq = gq(8764),
-       mq = gq(8073),
-       xq = gq(8118),
-       Aq = gq(8090),
-       cq = gq(40301),
-       uq = gq(40304),
-       Bq = gq(8123),
-       Wq = gq(8061),
-       Nq = gq(8662),
-       aq = gq(8780);
-     const Vq = [{
-         isOpen: lq.i,
-         openButton: () => (0, mq.i)("emoteWheel"),
-         aim: qq => {
- ... (52 more removed lines; see GitHub link above)
+     const QC = .5 * (Math.sqrt(3) - 1),
+       wC = (3 - Math.sqrt(3)) / 6,
+       bC = 1 / 3,
+       nC = 1 / 6,
+       fC = (Math.sqrt(5) - 1) / 4,
+       oC = (5 - Math.sqrt(5)) / 20,
+       qC = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       FC = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const WC = class {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+         const zC = "function" == typeof CC ? CC : function(CC) {
+           let zC = 0,
+             ZC = 0,
+             QC = 0,
+             wC = 1;
+ ... (10 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L757-L772` → after: `L1000-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1000-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L1000-L1006) · [Before (L757-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L757-L772)

```diff
-           },
-           onFrame: Yq => {
-             var lq;
-             const Wq = dq();
-             if (!Wq) return;
-             if (null !== (0, Bq.c)([...uq.d, ...null !== (lq = Wq.keptOpenBy) && void 0 !== lq ? lq : []])) return void Wq.close();
-             const Nq = Wq.openButton(),
-               aq = (0, cq.i)(Yq.frame, (0, Aq.i)().swapSticks),
-               Vq = jq(Wq) ? aq.move : aq.look;
-             qq !== Wq ? (qq = Wq, Eq = !Hq(Yq, Nq) || Math.hypot(Vq.x, Vq.y) >= Oq.y, gq = !1) : gq && (gq = !1, Hq(Yq, Nq) && (Eq = !1)), Wq.aim(Vq);
-             const oq = (0, mq.i)("menuConfirm"),
-               Pq = (0, mq.i)("menuBack");
-             return Yq.wasPressed(Pq) ? (xq.c.consumeButton(Pq), void Wq.close()) : Yq.wasPressed(oq) || Yq.wasPressed(Nq) ? (xq.c.consumeButton(oq), xq.c.consumeButton(Nq), void Wq.commit(!1)) : void(Eq && Hq(Yq, Nq) && (Eq = !1, Wq.commit(!0)))
-           },
-           onDeactivate: () => {
-             gq = null !== qq && dq() === qq, gq || (qq = null, Eq = !1)
+           }();
+           zC = bC(" "), ZC = bC(" "), QC = bC(" "), zC -= bC(CC), zC < 0 && (zC += 1);
+           ZC -= bC(CC), ZC < 0 && (ZC += 1);
+           QC -= bC(CC), QC < 0 && (QC += 1);
+           return function() {
+             const CC = 2091639 * zC + 2.3283064365386963e-10 * wC;
+             return zC = ZC, ZC = QC, QC = CC - (wC = 0 | CC)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L774` → after: `L1008-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1008-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/219.js#L1008-L1190) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/219.js#L774)

```diff
-         })
+         }(CC);
+         this.p = function(CC) {
+           const zC = new Uint8Array(256);
+           for (let ZC = 0; ZC < 256; ZC++) zC[ZC] = ZC;
+           for (let ZC = 0; ZC < 255; ZC++) {
+             const QC = ZC + ~~(CC() * (256 - ZC)),
+               wC = zC[ZC];
+             zC[ZC] = zC[QC], zC[QC] = wC
+           }
+           return zC
+         }(zC), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
+         for (let ZC = 0; ZC < 512; ZC++) this.perm[ZC] = this.p[255 & ZC], this.permMod12[ZC] = this.perm[ZC] % 12
+       }
+       noise2D(CC, zC) {
+         const ZC = this.permMod12,
+           bC = this.perm;
+ ... (167 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L4-L6)

```diff
-   38455: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => aq
+   40915: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       LobbyManageView: () => Jz
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L109` → after: `L8-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L8-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L8-L211) · [Before (L8-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L8-L109)

```diff
-     var Yq = gq(190),
-       lq = gq(37656);
-     const Oq = 1.2,
-       mq = {
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
-         Am: .5,
- ... (86 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(1418),
+       bC = ZC(36882),
+       nC = ZC(2394),
+       fC = ZC(2402),
+       oC = ZC(2369),
+       qC = ZC(36447);
+ 
+     function FC() {
+       const [CC, zC] = (0, QC.useState)(new Map);
+       return {
+         get: zC => CC.get(zC),
+         hold: (0, QC.useCallback)(((CC, ZC, QC) => {
+           zC((zC => new Map(zC).set(CC, ZC))), QC.then((() => {
+             zC((zC => {
+               const ZC = new Map(zC);
+ ... (188 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L111-L221` → after: `L213-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L213-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L213-L236) · [Before (L111-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L111-L221)

```diff
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: Yq.c.ZH,
-             height: Yq.c.UH
-           },
-           hitBoxDimensions: {
-             width: Yq.c.ZH + .4,
-             height: Yq.c.UH + .6
-           },
-           eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
-           rideHeight: Yq.c.UH - .1,
-           Am: lq.g.Am,
-           wEq: !0
-         },
-         Pig: {
- ... (95 more removed lines; see GitHub link above)
+         coOwner: "lobbyManage:roleCanCoOwner",
+         mod: "lobbyManage:roleCanMod",
+         coder: "lobbyManage:roleCanCoder",
+         builder: "lobbyManage:roleCanBuilder"
+       };
+ 
+     function TC(CC) {
+       var zC, ZC, bC;
+       let {
+         name: nC,
+         place: fC,
+         openedIn: oC,
+         isYou: qC,
+         manage: WC,
+         hiddenNames: NC,
+         zIndex: SC
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L223-L446` → after: `L238-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L238-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L238-L815) · [Before (L223-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L223-L446)

```diff
-           defaultPose: "zombie"
-         },
-         "Frost Skeleton": Aq,
-         "Draugr Knight": {
-           physicsBodyDimensions: {
-             width: Yq.c.ZH,
-             height: Yq.c.UH
-           },
-           hitBoxDimensions: {
-             width: Yq.c.ZH + .4,
-             height: 2.8
-           },
-           eyeHeight: 1.9,
-           rideHeight: 1.8,
-           Am: .5,
-           wEq: !1
- ... (208 more removed lines; see GitHub link above)
+           unban: !0
+         };
+         if ("gone" === CC.section) return iC;
+         const {
+           player: ZC
+         } = CC, QC = "here" === CC.section, wC = QC || "none" !== ZC.role ? ZC.can.roles : [];
+         return {
+           gamemode: QC && zC && null !== ZC.gamemode && ZC.can.gamemode,
+           roles: wC,
+           fixedRole: 0 === wC.length && "none" !== ZC.role ? ZC.role : null,
+           kick: QC && ZC.can.kick,
+           ban: ZC.can.ban,
+           unban: !1
+         }
+       }(fC, null !== xC.gamemodes), YC = WC.statusOf(JC), HC = WC.isPending(JC), EC = FC(), cC = Date.now(), uC = CC => {
+         var zC, ZC;
+ ... (562 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L448-L451` → after: `L817-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L817-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L817-L976) · [Before (L448-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L448-L451)

```diff
-         "Glass Gremlin": {
-           physicsBodyDimensions: {
-             width: .6,
-             height: 2.5
+         onBlur: CC => {
+           qC(CC.currentTarget)
+         }
+       })
+     }
+ 
+     function Qz(CC) {
+       let {
+         manage: zC
+       } = CC;
+       const {
+         lobbyName: ZC,
+         shownLobbyName: QC
+       } = (0, RC.f)("connectedGame");
+       return zC.state.you.canSetVisibility && null !== ZC ? (0, lC.jsx)(bz, {
+         manage: zC,
+ ... (144 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L453-L455` → after: `L978-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L978-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L978-L1047) · [Before (L453-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L453-L455)

```diff
-           hitBoxDimensions: {
-             width: 1,
-             height: 2.6
+           statusOf: CC => ZC.statusOf(`whitelist:${CC.toLowerCase()}`)
+         }), "public" === (null === oC || void 0 === oC ? void 0 : oC.visibility) && null !== PC.listing && (0, lC.jsx)(zz, {
+           manage: ZC,
+           listing: PC.listing
+         })]
+       })
+     }
+ 
+     function nz(CC) {
+       var zC;
+       let {
+         manage: ZC,
+         lobbyName: QC
+       } = CC;
+       const {
+         t: bC
+ ... (54 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L457-L460` → after: `L1049-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1049-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1049-L1349) · [Before (L457-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L457-L460)

```diff
-           eyeHeight: 2.2,
-           rideHeight: 2.55,
-           Am: .5,
-           wEq: !1
+           statusOf: CC => ZC.statusOf(`whitelist:${CC.toLowerCase()}`)
+         }), "public" === nC.visibility && null !== nC.listing && (0, lC.jsx)(zz, {
+           manage: ZC,
+           listing: nC.listing
+         })]
+       })
+     }
+     var fz = ZC(4942),
+       oz = ZC(1321);
+     const qz = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
+     const Fz = (0, QC.memo)((function(CC) {
+       var zC;
+       let {
+         rule: ZC,
+         value: QC,
+         status: wC,
+ ... (285 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L462-L474` → after: `L1351-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1351-L1353) · [Before (L462-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L462-L474)

```diff
-         "Glass Bro": {
-           physicsBodyDimensions: {
-             width: .8,
-             height: 2.1
-           },
-           hitBoxDimensions: {
-             width: 1.3,
-             height: 2.2
-           },
-           eyeHeight: 1.8,
-           rideHeight: 2.1,
-           Am: .5,
-           wEq: !1
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
```
