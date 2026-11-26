# Changed — Bundle Modifications Report (Part 028 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `28 / 115` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (167 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 106. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L946` → after: `L2568-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2568-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2568-L2612) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L946)

```diff
-       }(UU)
+       }
+       static cache(HH) {
+         let BH = jB.cachedContexts.get(HH);
+         return BH || (BH = new jB(HH), jB.cachedContexts.set(HH, BH)), BH
+       }
+       constructor(HH) {
+         HH && this.discoverTypes(HH)
+       }
+       has(HH) {
+         return this.schemas.has(HH)
+       }
+       get(HH) {
+         return this.types[HH]
+       }
+       add(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
+ ... (29 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L950-L956` → after: `L2616-L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2616-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2616-L2622) · [Before (L950-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L950-L956)

```diff
-       return {
-         type: bU(UU),
-         progressBar: hU(UU),
-         timedClick: XX(UU),
-         gravityBar: zX(UU),
-         precisionBar: cX(UU),
-         rhythmClick: QX(UU)
+       const BH = DB(HH);
+       return BH ? {
+         complexTypeKlass: PB[BH],
+         childType: HH[BH]
+       } : {
+         complexTypeKlass: !1,
+         childType: HH
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L959` → after: `L2625-L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2625-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2625-L2632) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L959)

```diff
-     const FX = ["playerGone", "rateLimited"];
+ 
+     function FB(HH, BH) {
+       const LH = wB(HH),
+         AH = DB(LH),
+         rH = AH && DB(LH[AH]);
+       if (rH) throw new Error(`${BH?`${BH}: `:""}@colyseus/schema: nested collections are not supported ("${AH}" of "${rH}"). Collections can only hold primitive types or Schema classes, wrap the inner ${rH} in a Schema class.`);
+       return LH
+     }
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L962-L964` → after: `L2635-L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2635-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2635-L2977) · [Before (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L962-L964)

```diff
-       return 0 === UU.index(2) ? null : function(UU) {
-         return FX[UU.index(2)]
-       }(UU)
+       return "object" === typeof HH && null !== HH ? Object.keys(HH).find((HH => void 0 !== PB[HH])) : void 0
+     }
+ 
+     function wB(HH) {
+       if ("object" !== typeof HH || null === HH) return HH;
+       if (Array.isArray(HH)) return {
+         array: wB(HH[0])
+       };
+       const BH = function(HH) {
+         const BH = Object.keys(HH),
+           LH = BH.filter((HH => /\d+/.test(HH)));
+         if (LH.length > 0 && LH.length === BH.length / 2 && HH[HH[LH[0]]] == LH[0]) return "number";
+         if (BH.length > 0 && BH.every((BH => HH[BH] === BH))) return "string"
+       }(HH);
+       if (BH) return BH;
+       if (qB(HH)) return "string" === typeof HH.quantized.wire ? HH : {
+ ... (327 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L968` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2981) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L968)

```diff
-       return UU.float()
+       return 16843009 * ((HH = (858993459 & (HH -= HH >>> 1 & 1431655765)) + (HH >>> 2 & 858993459)) + (HH >>> 4) & 252645135) >>> 24
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L972` → after: `L2985-L2991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2985-L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2985-L2991) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L972)

```diff
-       return UU.AY(DX)
+       if (void 0 === HH) return 0;
+       let BH = 0;
+       for (let LH = 0, AH = HH.length; LH < AH; LH++) {
+         const AH = HH[LH];
+         AH < 32 && (BH |= 1 << AH)
+       }
+       return BH
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L976` → after: `L2995-L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR2995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L2995-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L2995-L3119) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L976)

```diff
-       return 0 === UU.index(2) ? null : EX(UU)
+       const BH = HH.constructor;
+       if (Object.prototype.hasOwnProperty.call(BH, OH)) return BH[OH];
+       const LH = BH[Symbol.metadata],
+         AH = aB.isValidInstance(HH),
+         rH = (LH?.[oH]?.length ?? 0) > 0,
+         SH = function(HH) {
+           const BH = [],
+             LH = [],
+             AH = [],
+             rH = [],
+             SH = HH?.[kH];
+           if (void 0 === SH) return {
+             names: BH,
+             types: LH,
+             tags: AH,
+             encoders: rH
+ ... (109 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L980` → after: `L3123-L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR3123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L3123-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L3123-L3128) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L980)

```diff
-       return 0 === UU.index(2) ? null : jU(UU)
+       const BH = HH.pendingFilterRefresh;
+       for (let LH = 0; LH < BH.length; LH++) {
+         const HH = BH[LH];
+         0 !== (HH.flags & mL) && zL(HH)
+       }
+       BH.length = 0
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L984` → after: `L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L3132) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L984)

```diff
-       return UU.long()
+       return HH._isSchema || "string" !== typeof HH.refTarget[WH]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L988-L990` → after: `L3136-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L3136-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L3136-L6663) · [Before (L988-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L988-L990)

```diff
-       return 0 === UU.index(2) ? null : function(UU) {
-         return UU.AY(IX)
-       }(UU)
+       HH.flags &= ~mL;
+       const BH = HH.root;
+       if (void 0 === BH || void 0 === HH.parentRef) return;
+       const LH = tL(HH);
+       let AH = YL(HH, HH.parentRef, HH._parentIndex, LH);
+       for (let SH = HH.extraParents; void 0 !== SH && AH !== GL; SH = SH.next) AH |= YL(HH, SH.ref, SH.index, LH);
+       if (0 === AH) return;
+       HH.isVisibilitySharedWithParent = 0 !== (AH & XL);
+       const rH = 0 === (AH & EL);
+       rH !== HH.isFiltered && (HH.isFiltered = rH, rH || HH.isFullStateOnly || (HH.forEachLiveWithCtx(HH, LL), HH.has() && BH.enqueueChangeTree(HH), HH.unreliableRecorder?.has() && BH.enqueueUnreliable(HH)), HH.forEachChildWithCtx(HH, uL))
+     }
+     const CL = 1,
+       EL = 2,
+       XL = 4,
+       GL = CL | EL | XL;
+ 
+ ... (3512 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L992-L997` → after: `L6665-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6665-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6665-L6698) · [Before (L992-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L992-L997)

```diff
- 
-     function aX(UU) {
-       return 0 === UU.index(2) ? null : function(UU) {
-         return {
-           XX: UU.str(),
-           zX: UU.long()
+     class aA {
+       context;
+       state;
+       root;
+       currentRefId = 0;
+       zN;
+       resyncVisited = null;
+       resyncDamaged = !1;
+       constructor(HH, BH) {
+         this.setState(HH), this.context = BH || new jB(HH.constructor)
+       }
+       setState(HH) {
+         this.state = HH, this.root = new dA, this.root.addRef(0, HH)
+       }
+       decode(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
+ ... (18 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L999` → after: `L6700-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6700-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6700-L6747) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L999)

```diff
-       }(UU)
+         return LH[PH]?.(), null !== this.resyncVisited && function(HH, BH) {
+           HH.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : jL(HH, HH.state, new Set, BH)
+         }(this, rH), null !== rH && this.zN?.(rH), SH.garbageCollectDeletedRefs(), rH
+       }
+       decodeResync(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
+           offset: 0
+         };
+         this.resyncVisited = new Map, this.resyncDamaged = !1;
+         try {
+           return this.decode(HH, BH)
+         } finally {
+           this.resyncVisited = null
+         }
+       }
+       skipCurrentStructure(HH, BH, LH) {
+ ... (32 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1003-L1005` → after: `L6773-L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6773-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6773-L6776) · [Before (L1003-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1003-L1005)

```diff
-       const XU = UU.index(3);
-       return 0 === XU ? null : 1 === XU ? UU.str() : SU(UU)
-     }
+       const BH = HH.root,
+         LH = BH.callbacks,
+         AH = new WeakMap;
+       let SH;
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1007-L1011` → after: `L6778-L6885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6778-L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6778-L6885) · [Before (L1007-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1007-L1011)

```diff
-     function gX(UU) {
-       return {
-         AU: UU.str(),
-         FU: UU.str(),
-         oU: UU.str()
+       function hH(HH, LH) {
+         let CH = LH.instance?.constructor[Symbol.metadata] || HH,
+           EH = LH.instance && "function" === typeof LH.instance.forEach || HH && !oA.is(HH);
+         if (CH && !EH) {
+           const HH = function(HH, rH, hH, zH) {
+             return zH && void 0 !== LH.instance[rH] && !AH.has(SH) && hH(LH.instance[rH], void 0), BH.addCallback(HH[tH], rH, hH)
+           };
+           return new Proxy({
+             listen: function(BH, rH) {
+               let hH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+               if (LH.instance) return HH(LH.instance, BH, rH, hH);
+               {
+                 let tH = () => {};
+                 return LH.onInstanceAvailable(((LH, zH) => {
+                   tH = HH(LH, BH, rH, hH && zH && !AH.has(SH))
+                 })), () => tH()
+ ... (92 more added lines; see GitHub link above)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1015-L1020` → after: `L6888-L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6888-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6888-L6891) · [Before (L1015-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1015-L1020)

```diff
-     function kX(UU) {
-       return {
-         bQ: UU.str(),
-         TQ: rU(UU),
-         hQ: rU(UU),
-         UA: nU(UU)
+       function zH(HH) {
+         return hH(void 0, {
+           instance: HH
+         })
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1024-L1025` → after: `L6939-L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6939-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6939-L6940) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1024-L1025)

```diff
-     function GX(UU) {
-       return UU.AY(kX)
+     function Hr(HH, BH) {
+       HH.zN = BH
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1027-L1033` → after: `L6942-L7044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6942-L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L6942-L7044) · [Before (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1027-L1033)

```diff
- 
-     function BX(UU) {
-       return {
-         My: UU.str(),
-         x: UU.long(),
-         y: UU.long(),
-         z: UU.long()
+     pA.encode = function(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
+         offset: 0
+       };
+       const LH = HH.context,
+         AH = new pA,
+         rH = new DA(AH),
+         SH = LH.schemas.get(HH.state.constructor);
+       SH > 0 && (AH.rootType = SH);
+       const hH = new Set,
+         tH = {},
+         zH = HH => {
+           if (void 0 === HH.extendsId || hH.has(HH.extendsId)) {
+             hH.add(HH.id), AH.types.push(HH);
+             const BH = tH[HH.id];
+             void 0 !== BH && (delete tH[HH.id], BH.forEach((HH => zH(HH))))
+ ... (87 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1035-L1046` → after: `L7046-L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7046-L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7046-L7076) · [Before (L1035-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1035-L1046)

```diff
-     }
- 
-     function ZX(UU) {
-       return UU.AY(BX)
-     }
- 
-     function RX(UU) {
-       return 0 === UU.index(2) ? null : function(UU) {
-         return {
-           EQ: UU.float(),
-           YQ: UU.long(),
-           NQ: UU.long()
+       return Object.prototype.hasOwnProperty.call(HH, OH) && delete HH[OH], HH
+     };
+     class Br {
+       GX;
+       uniqueRefIds = new Set;
+       isTriggering = !1;
+       constructor(HH) {
+         this.GX = HH, this.GX.zN = this.zN.bind(this)
+       }
+       get callbacks() {
+         return this.GX.root.callbacks
+       }
+       get state() {
+         return this.GX.state
+       }
+       addCallback(HH, BH, LH) {
+ ... (15 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1048` → after: `L7078-L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7078-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7078-L7193) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1048)

```diff
-       }(UU)
+       }
+       listen() {
+         return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(a … [truncated]
+       }
+       listenInstance(HH, BH, LH) {
+         let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         AH = AH && !1 === this.isTriggering;
+         const rH = HH[BH];
+         return AH && null !== rH && void 0 !== rH && LH(rH, void 0), this.addCallback(HH[tH], BH, LH)
+       }
+       onChange() {
+         if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
+           const HH = arguments.length <= 0 ? void 0 : arguments[0],
+             BH = arguments.length <= 1 ? void 0 : arguments[1];
+           return this.addCallback(HH[tH], rH.REPLACE, BH)
+         }
+ ... (100 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1050-L1060` → after: `L7195-L7225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7195-L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7195-L7225) · [Before (L1050-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1050-L1060)

```diff
- 
-     function PX(UU) {
-       return {
-         blockName: UU.str(),
-         zQ: UU.bool(),
-         cQ: UU.bool(),
-         yQ: UU.bool(),
-         QQ: UU.float(),
-         AQ: UU.float(),
-         FQ: UU.long(),
-         oQ: RX(UU)
+     const Lr = {
+       get(HH) {
+         if (HH instanceof aA) return new Br(HH);
+         if ("GX" in HH.Xx) return new Br(HH.Xx.GX);
+         throw new Error("Invalid room or decoder")
+       },
+       getLegacy(HH) {
+         if (HH instanceof aA) return yA(HH);
+         if ("GX" in HH.Xx) return yA(HH.Xx.GX);
+         throw new Error("Invalid room or decoder")
+       },
+       getRawChanges: (HH, BH) => Hr(HH, BH)
+     };
+     class Ar {
+       _free = [];
+       _factory;
+ ... (15 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1065-L1067` → after: `L7230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7230) · [Before (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1065-L1067)

```diff
-       return 0 === UU.index(2) ? null : function(UU) {
-         return UU.AY(PX)
-       }(UU)
+       return new Ar((() => new HH), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1070-L1073` → after: `L7289-L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7289-L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7289-L7293) · [Before (L1070-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1070-L1073)

```diff
-     function dX(UU) {
-       return {
-         Ty: UU.str(),
-         hy: WX(UU)
+     function rH(HH, BH) {
+       if ("function" !== typeof BH && null !== BH) throw new TypeError("Class extends value " + String(BH) + " is not a constructor or null");
+ 
+       function LH() {
+         this.constructor = HH
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1077-L1080` → after: `L7305-L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7305-L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7305-L7310) · [Before (L1077-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1077-L1080)

```diff
-     function LX(UU) {
-       return {
-         blockName: UU.str(),
-         frequency: UU.float()
+     function hH(HH, BH) {
+       var LH = {};
+       for (var AH in HH) Object.prototype.hasOwnProperty.call(HH, AH) && BH.indexOf(AH) < 0 && (LH[AH] = HH[AH]);
+       if (null != HH && "function" === typeof Object.getOwnPropertySymbols) {
+         var rH = 0;
+         for (AH = Object.getOwnPropertySymbols(HH); rH < AH.length; rH++) BH.indexOf(AH[rH]) < 0 && Object.prototype.propertyIsEnumerable.call(HH, AH[rH]) && (LH[AH[rH]] = HH[AH[rH]])
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1084-L1085` → after: `L7315-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7315-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7315-L7321) · [Before (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1084-L1085)

```diff
-     function eX(UU) {
-       return UU.AY(LX)
+     function tH(HH, BH, LH, AH) {
+       var rH, SH = arguments.length,
+         hH = SH < 3 ? BH : null === AH ? AH = Object.getOwnPropertyDescriptor(BH, LH) : AH;
+       if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) hH = Reflect.decorate(HH, BH, LH, AH);
+       else
+         for (var tH = HH.length - 1; tH >= 0; tH--)(rH = HH[tH]) && (hH = (SH < 3 ? rH(hH) : SH > 3 ? rH(BH, LH, hH) : rH(BH, LH)) || hH);
+       return SH > 3 && hH && Object.defineProperty(BH, LH, hH), hH
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1088-L1093` → after: `L7324-L7326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7324-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7324-L7326) · [Before (L1088-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1088-L1093)

```diff
-     function CX(UU) {
-       return {
-         aQ: UU.str(),
-         tQ: UU.str(),
-         frequency: UU.float(),
-         gQ: eX(UU)
+     function zH(HH, BH) {
+       return function(LH, AH) {
+         BH(LH, AH, HH)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1097-L1098` → after: `L7330-L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7330-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7330-L7353) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1097-L1098)

```diff
-     function wX(UU) {
-       return UU.AY(CX)
+     function CH(HH, BH, LH, AH, rH, SH) {
+       function hH(HH) {
+         if (void 0 !== HH && "function" !== typeof HH) throw new TypeError("Function expected");
+         return HH
+       }
+       for (var tH, zH = AH.kind, CH = "getter" === zH ? "get" : "setter" === zH ? "set" : "value", EH = !BH && HH ? AH.static ? HH : HH.prototype : null, XH = BH || (EH ? Object.getOwnPropertyDescriptor(EH, AH.name) : {}), GH = !1, YH = LH.length - 1; YH >= 0; YH--) {
+         var uH = {};
+         for (var QH in AH) uH[QH] = "access" === QH ? {} : AH[QH];
+         for (var QH in AH.access) uH.access[QH] = AH.access[QH];
+         uH.addInitializer = function(HH) {
+           if (GH) throw new TypeError("Cannot add initializers after decoration has completed");
+           SH.push(hH(HH || null))
+         };
+         var WH = (0, LH[YH])("accessor" === zH ? {
+           get: XH.get,
+           set: XH.set
+ ... (8 more added lines; see GitHub link above)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1101-L1109` → after: `L7356-L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7356-L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7356-L7358) · [Before (L1101-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1101-L1109)

```diff
-     function qX(UU) {
-       return {
-         blockName: UU.str(),
-         radius: UU.long(),
-         ZQ: UU.long(),
-         my: UU.long(),
-         ly: UU.long(),
-         RQ: UU.float()
-       }
+     function EH(HH, BH, LH) {
+       for (var AH = arguments.length > 2, rH = 0; rH < BH.length; rH++) LH = AH ? BH[rH].call(HH, LH) : BH[rH].call(HH);
+       return AH ? LH : void 0
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1113` → after: `L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7362) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1113)

```diff
-       return UU.AY(qX)
+       return "symbol" === typeof HH ? HH : "".concat(HH)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1116-L1125` → after: `L7365-L7369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7365-L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7365-L7369) · [Before (L1116-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1116-L1125)

```diff
-     function SX(UU) {
-       return {
-         my: UU.long(),
-         ly: UU.long(),
-         xy: UU.long(),
-         Jy: UU.bool(),
-         jy: dX(UU),
-         IQ: wX(UU),
-         GQ: OX(UU)
-       }
+     function GH(HH, BH, LH) {
+       return "symbol" === typeof BH && (BH = BH.description ? "[".concat(BH.description, "]") : ""), Object.defineProperty(HH, "name", {
+         configurable: !0,
+         value: LH ? "".concat(LH, " ", BH) : BH
+       })
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1128-L1129` → after: `L7372-L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7372-L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7372-L7373) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1128-L1129)

```diff
-     function rX(UU) {
-       return UU.AY(SX)
+     function YH(HH, BH) {
+       if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(HH, BH)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1132-L1136` → after: `L7376-L7383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7376-L7383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7376-L7383) · [Before (L1132-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1132-L1136)

```diff
-     function uX(UU) {
-       return 0 === UU.index(2) ? null : function(UU) {
-         return {
-           name: UU.str(),
-           eQ: rU(UU)
+     function uH(HH, BH, LH, AH) {
+       return new(LH || (LH = Promise))((function(rH, SH) {
+         function hH(HH) {
+           try {
+             zH(AH.next(HH))
+           } catch (BH) {
+             SH(BH)
+           }
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1141-L1145` → after: `L7386-L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7386-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7386-L7391) · [Before (L1141-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1141-L1145)

```diff
-     function fX(UU) {
-       return 0 === UU.index(2) ? null : function(UU) {
-         return {
-           terrain: uX(UU),
-           CQ: OX(UU)
+         function tH(HH) {
+           try {
+             zH(AH.throw(HH))
+           } catch (BH) {
+             SH(BH)
+           }
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1150-L1154` → after: `L7394-L7398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7394-L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7394-L7398) · [Before (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1150-L1154)

```diff
-     function iX(UU) {
-       return 0 === UU.index(2) ? null : function(UU) {
-         return {
-           layers: rX(UU),
-           WQ: fX(UU)
+         function zH(HH) {
+           var BH;
+           HH.done ? rH(HH.value) : (BH = HH.value, BH instanceof LH ? BH : new LH((function(HH) {
+             HH(BH)
+           }))).then(hH, tH)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1156` → after: `L7400-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7400-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7400-L7401) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1156)

```diff
-       }(UU)
+         zH((AH = AH.apply(HH, BH || [])).next())
+       }))
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1215-L1216` → after: `L7405-L7417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7405-L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7405-L7417) · [Before (L1215-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1215-L1216)

```diff
-       return !ArrayBuffer.isView(UU) || UU instanceof DataView ? Array.isArray(UU) ? UU.map((UU => XU(UU))) : UU : Array.from(UU, (UU => XU(UU)))
-     }
+       var LH, AH, rH, SH = {
+           label: 0,
+           sent: function() {
+             if (1 & rH[0]) throw rH[1];
+             return rH[1]
+           },
+           trys: [],
+           ops: []
+         },
+         hH = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
+       return hH.next = tH(0), hH.throw = tH(1), hH.return = tH(2), "function" === typeof Symbol && (hH[Symbol.iterator] = function() {
+         return this
+       }), hH;
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1218-L1222` → after: `L7419-L7473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7419-L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7419-L7473) · [Before (L1218-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1218-L1222)

```diff
-     function AU(UU) {
-       if ("string" !== typeof UU) return UU;
-       for (let XU = 0; XU < UU.length; XU++) {
-         const zU = UU.charCodeAt(XU);
-         if (zU >= 55296 && zU <= 57343) return oU.decode(FU.encode(UU))
+       function tH(tH) {
+         return function(zH) {
+           return function(tH) {
+             if (LH) throw new TypeError("Generator is already executing.");
+             for (; hH && (hH = 0, tH[0] && (SH = 0)), SH;) try {
+               if (LH = 1, AH && (rH = 2 & tH[0] ? AH.return : tH[0] ? AH.throw || ((rH = AH.return) && rH.call(AH), 0) : AH.next) && !(rH = rH.call(AH, tH[1])).done) return rH;
+               switch (AH = 0, rH && (tH = [2 & tH[0], rH.value]), tH[0]) {
+                 case 0:
+                 case 1:
+                   rH = tH;
+                   break;
+                 case 4:
+                   return SH.label++, {
+                     value: tH[1],
+                     done: !1
+                   };
+ ... (39 more added lines; see GitHub link above)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1226-L1227` → after: `L7476-L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7476-L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7476-L7487) · [Before (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1226-L1227)

```diff
-     const FU = new TextEncoder,
-       oU = new TextDecoder;
+     var WH = Object.create ? function(HH, BH, LH, AH) {
+       void 0 === AH && (AH = LH);
+       var rH = Object.getOwnPropertyDescriptor(BH, LH);
+       rH && !("get" in rH ? !BH.__esModule : rH.writable || rH.configurable) || (rH = {
+         enumerable: !0,
+         get: function() {
+           return BH[LH]
+         }
+       }), Object.defineProperty(HH, AH, rH)
+     } : function(HH, BH, LH, AH) {
+       void 0 === AH && (AH = LH), HH[AH] = BH[LH]
+     };
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1229-L1230` → after: `L7489-L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7489-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7489-L7490) · [Before (L1229-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1229-L1230)

```diff
-     function DU(UU) {
-       return UU
+     function MH(HH, BH) {
+       for (var LH in HH) "default" === LH || Object.prototype.hasOwnProperty.call(BH, LH) || WH(BH, HH, LH)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1235` → after: `L7494-L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7494-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7494-L7506) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1235)

```diff
-       return null === UU || "object" !== typeof UU ? UU : [AU(UU.policy), AU(UU.ZD)]
+       var BH = "function" === typeof Symbol && Symbol.iterator,
+         LH = BH && HH[BH],
+         AH = 0;
+       if (LH) return LH.call(HH);
+       if (HH && "number" === typeof HH.length) return {
+         next: function() {
+           return HH && AH >= HH.length && (HH = void 0), {
+             value: HH && HH[AH++],
+             done: !HH
+           }
+         }
+       };
+       throw new TypeError(BH ? "Object is not iterable." : "Symbol.iterator is not defined.")
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1238-L1239` → after: `L7509-L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7509-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7509-L7528) · [Before (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1238-L1239)

```diff
-     function NU(UU) {
-       return null === UU || "object" !== typeof UU ? UU : [QU(UU.jU, DU), QU(UU.uA, DU)]
+     function vH(HH, BH) {
+       var LH = "function" === typeof Symbol && HH[Symbol.iterator];
+       if (!LH) return HH;
+       var AH, rH, SH = LH.call(HH),
+         hH = [];
+       try {
+         for (;
+           (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
+       } catch (tH) {
+         rH = {
+           error: tH
+         }
+       } finally {
+         try {
+           AH && !AH.done && (LH = SH.return) && LH.call(SH)
+         } finally {
+ ... (4 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1242-L1244` → after: `L7531-L7533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7531-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7531-L7533) · [Before (L1242-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1242-L1244)

```diff
-     function IU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.TE), AU(XU.hE)];
-       var XU
+     function PH() {
+       for (var HH = [], BH = 0; BH < arguments.length; BH++) HH = HH.concat(vH(arguments[BH]));
+       return HH
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1247-L1249` → after: `L7536-L7542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7536-L7542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7536-L7542) · [Before (L1247-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1247-L1249)

```diff
-     function pU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.id, XU.KD];
-       var XU
+     function TH() {
+       for (var HH = 0, BH = 0, LH = arguments.length; BH < LH; BH++) HH += arguments[BH].length;
+       var AH = Array(HH),
+         rH = 0;
+       for (BH = 0; BH < LH; BH++)
+         for (var SH = arguments[BH], hH = 0, tH = SH.length; hH < tH; hH++, rH++) AH[rH] = SH[hH];
+       return AH
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1252-L1254` → after: `L7545-L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7545-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7545-L7548) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1252-L1254)

```diff
-     function aU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.Ey, AU(XU.Yy), XU.Ny, AU(XU.ty), XU.By, XU.Zy, XU.zD, AU(XU.cD), AU(XU.yD)];
-       var XU
+     function UH(HH, BH, LH) {
+       if (LH || 2 === arguments.length)
+         for (var AH, rH = 0, SH = BH.length; rH < SH; rH++) !AH && rH in BH || (AH || (AH = Array.prototype.slice.call(BH, 0, rH)), AH[rH] = BH[rH]);
+       return HH.concat(AH || Array.prototype.slice.call(BH))
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1258-L1259` → after: `L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7552) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1258-L1259)

```diff
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.cF, DU), XU.yF];
-       var XU
+       return this instanceof VH ? (this.v = HH, this) : new VH(HH)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1262-L1265` → after: `L7555-L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7555-L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7555-L7565) · [Before (L1262-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1262-L1265)

```diff
-     function gU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.ED, (UU => AU(UU))), AU(XU.YD), XU.ND];
-       var XU
-     }
+     function OH(HH, BH, LH) {
+       if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
+       var AH, rH = LH.apply(HH, BH || []),
+         SH = [];
+       return AH = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), hH("next"), hH("throw"), hH("return", (function(HH) {
+         return function(BH) {
+           return Promise.resolve(BH).then(HH, CH)
+         }
+       })), AH[Symbol.asyncIterator] = function() {
+         return this
+       }, AH;
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1267-L1270` → after: `L7567-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7567-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7567-L7573) · [Before (L1267-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1267-L1270)

```diff
-     function kU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.tD, DU), AU(XU.gD), XU.kD];
-       var XU
-     }
+       function hH(HH, BH) {
+         rH[HH] && (AH[HH] = function(BH) {
+           return new Promise((function(LH, AH) {
+             SH.push([HH, BH, LH, AH]) > 1 || tH(HH, BH)
+           }))
+         }, BH && (AH[HH] = BH(AH[HH])))
+       }
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1272-L1275` → after: `L7575-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7575-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7575-L7582) · [Before (L1272-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1272-L1275)

```diff
-     function GU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.FU), AU(XU.oU)];
-       var XU
-     }
+       function tH(HH, BH) {
+         try {
+           (LH = rH[HH](BH)).value instanceof VH ? Promise.resolve(LH.value.v).then(zH, CH) : EH(SH[0][2], LH)
+         } catch (AH) {
+           EH(SH[0][3], AH)
+         }
+         var LH
+       }
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1277-L1280` → after: `L7584-L7586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7584-L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7584-L7586) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1277-L1280)

```diff
-     function BU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GA)];
-       var XU
-     }
+       function zH(HH) {
+         tH("next", HH)
+       }
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1282-L1284` → after: `L7588-L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7588-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7588-L7590) · [Before (L1282-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1282-L1284)

```diff
-     function ZU(UU) {
-       return AU(UU)
-     }
+       function CH(HH) {
+         tH("throw", HH)
+       }
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1286-L1288` → after: `L7592-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7592-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7592-L7594) · [Before (L1286-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1286-L1288)

```diff
-     function RU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GD), AU(XU.BD), AU(XU.policy), AU(XU.ZD)];
-       var XU
+       function EH(HH, BH) {
+         HH(BH), SH.shift(), SH.length && tH(SH[0][0], SH[0][1])
+       }
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1292-L1293` → after: `L7598-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7598-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7598-L7603) · [Before (L1292-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1292-L1293)

```diff
-       return YU(UU)
-     }
+       var BH, LH;
+       return BH = {}, AH("next"), AH("throw", (function(HH) {
+         throw HH
+       })), AH("return"), BH[Symbol.iterator] = function() {
+         return this
+       }, BH;
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1295-L1296` → after: `L7605-L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7605-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7605-L7612) · [Before (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1295-L1296)

```diff
-     function WU(UU) {
-       return YU(UU)
+       function AH(AH, rH) {
+         BH[AH] = HH[AH] ? function(BH) {
+           return (LH = !LH) ? {
+             value: VH(HH[AH](BH)),
+             done: !1
+           } : rH ? rH(BH) : BH
+         } : rH
+       }
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1300-L1301` → after: `L7616-L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7616-L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7616-L7635) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1300-L1301)

```diff
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.bD)];
-       var XU
+       if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
+       var BH, LH = HH[Symbol.asyncIterator];
+       return LH ? LH.call(HH) : (HH = xH(HH), BH = {}, AH("next"), AH("throw"), AH("return"), BH[Symbol.asyncIterator] = function() {
+         return this
+       }, BH);
+ 
+       function AH(LH) {
+         BH[LH] = HH[LH] && function(BH) {
+           return new Promise((function(AH, rH) {
+             (function(HH, BH, LH, AH) {
+               Promise.resolve(AH).then((function(BH) {
+                 HH({
+                   value: BH,
+                   done: LH
+                 })
+               }), BH)
+ ... (4 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1304-L1305` → after: `L7638-L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7638-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7638-L7641) · [Before (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1304-L1305)

```diff
-     function LU(UU) {
-       return UU
+     function mH(HH, BH) {
+       return Object.defineProperty ? Object.defineProperty(HH, "raw", {
+         value: BH
+       }) : HH.raw = BH, HH
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1309-L1310` → after: `L7660-L7664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7660-L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7660-L7664) · [Before (L1309-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1309-L1310)

```diff
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.pA), AU(XU.aA)];
-       var XU
+       if (HH && HH.__esModule) return HH;
+       var BH = {};
+       if (null != HH)
+         for (var LH = IH(HH), AH = 0; AH < LH.length; AH++) "default" !== LH[AH] && WH(BH, HH, LH[AH]);
+       return oH(BH, HH), BH
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1314` → after: `L7668-L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7668-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7668-L7670) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1314)

```diff
-       return AU(UU)
+       return HH && HH.__esModule ? HH : {
+         default: HH
+       }
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1317-L1318` → after: `L7673-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7673-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7673-L7676) · [Before (L1317-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1317-L1318)

```diff
-     function wU(UU) {
-       return NU(UU)
+     function KH(HH, BH, LH, AH) {
+       if ("a" === LH && !AH) throw new TypeError("Private accessor was defined without a getter");
+       if ("function" === typeof BH ? HH !== BH || !AH : !BH.has(HH)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === LH ? AH : "a" === LH ? AH.call(HH) : AH ? AH.value : BH.get(HH)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1321-L1322` → after: `L7679-L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7679-L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7679-L7683) · [Before (L1321-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1321-L1322)

```diff
-     function qU(UU) {
-       return NU(UU)
+     function cH(HH, BH, LH, AH, rH) {
+       if ("m" === AH) throw new TypeError("Private method is not writable");
+       if ("a" === AH && !rH) throw new TypeError("Private accessor was defined without a setter");
+       if ("function" === typeof BH ? HH !== BH || !rH : !BH.has(HH)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === AH ? rH.call(HH, LH) : rH ? rH.value = LH : BH.set(HH, LH), LH
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1325-L1327` → after: `L7686-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7686-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7686-L7688) · [Before (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1325-L1327)

```diff
-     function OU(UU) {
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.xD)];
-       var XU
+     function eH(HH, BH) {
+       if (null === BH || "object" !== typeof BH && "function" !== typeof BH) throw new TypeError("Cannot use 'in' operator on non-object");
+       return "function" === typeof HH ? BH === HH : HH.has(BH)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1330-L1334` → after: `L7691-L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7691-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7691-L7718) · [Before (L1330-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1330-L1334)

```diff
-     function SU(UU) {
-       return (EU ??= (0, cU.d)().map((UU => UU.name)), EU).map((XU => {
-         return "string" === typeof(zU = UU[XU]) ? AU(zU) : QU(zU, DU);
-         var zU
-       }))
+     function qH(HH, BH, LH) {
+       if (null !== BH && void 0 !== BH) {
+         if ("object" !== typeof BH && "function" !== typeof BH) throw new TypeError("Object expected.");
+         var AH, rH;
+         if (LH) {
+           if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
+           AH = BH[Symbol.asyncDispose]
+         }
+         if (void 0 === AH) {
+           if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
+           AH = BH[Symbol.dispose], LH && (rH = AH)
+         }
+         if ("function" !== typeof AH) throw new TypeError("Object not disposable.");
+         rH && (AH = function() {
+           try {
+             rH.call(this)
+ ... (12 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1338-L1339` → after: `L7726-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7726-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7726-L7744) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1338-L1339)

```diff
-       return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.iA, XU.HA, XU.MA];
-       var XU
+       function BH(BH) {
+         HH.error = HH.hasError ? new gH(BH, HH.error, "An error was suppressed during disposal.") : BH, HH.hasError = !0
+       }
+       var LH, AH = 0;
+       return function rH() {
+         for (; LH = HH.stack.pop();) try {
+           if (!LH.async && 1 === AH) return AH = 0, HH.stack.push(LH), Promise.resolve().then(rH);
+           if (LH.dispose) {
+             var SH = LH.dispose.call(LH.value);
+             if (LH.async) return AH |= 2, Promise.resolve(SH).then(rH, (function(HH) {
+               return BH(HH), rH()
+             }))
+           } else AH |= 1
+         } catch (hH) {
+           BH(hH)
+         }
+ ... (3 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L1362-L1365` → after: `L7748-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L7748-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/203.js#L7748-L7784) · [Before (L1362-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/203.js#L1362-L1365)

```diff
-       let zU = AU.get(XU);
-       void 0 === zU && (zU = new Map, AU.set(XU, zU));
-       let yU = zU.get(UU);
-       return void 0 === yU && (yU = `${UU}${(0,cU.y)(XU)}`, zU.set(UU, yU)), yU
+       return "string" === typeof HH && /^\.\.?\//.test(HH) ? HH.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(HH, LH, AH, rH, SH) {
+         return LH ? BH ? ".jsx" : ".js" : !AH || rH && SH ? AH + rH + "." + SH.toLowerCase() + "js" : HH
+       })) : HH
+     }
+     const jH = {
+       __extends: rH,
+       __assign: SH,
+       __rest: hH,
+       __decorate: tH,
+       __param: zH,
+       __esDecorate: CH,
+       __runInitializers: EH,
+       __propKey: XH,
+       __setFunctionName: GH,
+       __metadata: YH,
+       __awaiter: uH,
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4-L261` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/204.js#L4) · [Before (L4-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/204.js#L4-L261)

```diff
-   39969: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU
-     });
-     class cU {
-       constructor(UU, XU) {
-         this.read = UU, this.apply = XU, this.release = null
-       }
-       turn(UU, XU) {
-         const zU = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: XU,
-           forcedCameraDirection: [UU[0], UU[1], UU[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
- ... (242 more removed lines; see GitHub link above)
+   10030: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L275-L311` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/204.js#L9-L11) · [Before (L275-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/204.js#L275-L311)

```diff
-     var cU = zU(344);
-     const yU = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta … [truncated]
-     class QU {
-       constructor(UU) {
-         this.importGame = UU, this.loads = new Map, this.loaded = new Map
-       }
-       load(UU) {
-         const XU = (0, cU.Tb)(UU);
-         if (!yU.has(XU)) return Promise.resolve(void 0);
-         let zU = this.loads.get(XU);
-         return zU || (zU = this.importGame(XU).then((UU => {
-           const zU = UU.default;
-           if ("function" !== typeof zU) throw new Error(`${XU}'s client code has no default-exported factory`);
-           return this.loaded.set(XU, zU), zU
-         })).catch((UU => {
-           throw this.loads.delete(XU), UU
- ... (21 more removed lines; see GitHub link above)
+     var AH = LH(9979);
+     const rH = "Air",
+       SH = Object.freeze(new AH.f(rH, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L313-L1564` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/204.js#L13-L14) · [Before (L313-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/204.js#L313-L1564)

```diff
-   40510: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => AU
-     });
-     var cU = zU(9894),
-       yU = zU(34884),
-       QU = zU(3660);
- 
-     function AU(UU) {
-       if (UU === cU.c) return 0;
-       const XU = (0, QU.c)(UU);
-       if (void 0 !== XU && XU <= yU.MAX_BLOCK_ID) return XU;
-       const zU = (0, QU.c)(UU.split("|")[0]);
-       if (void 0 !== zU && zU <= yU.MAX_BLOCK_ID && (0, yU.rootMetaDescOf)(zU) === UU) return zU;
-       throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
-     }
- ... (1236 more removed lines; see GitHub link above)
+   27699: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L1566-L2012` → after: `L16-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L16-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/204.js#L16-L1403) · [Before (L1566-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/204.js#L1566-L2012)

```diff
-   39481: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => aU,
-       g: () => pU,
-       j: () => NU,
-       k: () => EU,
-       l: () => YU
-     });
-     var cU = zU(4608),
-       yU = zU(344);
-     const QU = 1024,
-       AU = 1536,
-       FU = 2 * cU.j + 1,
-       oU = new Intl.NumberFormat("en", {
-         maximumSignificantDigits: 15
-       }),
- ... (431 more removed lines; see GitHub link above)
+   33986: HH => {
+     HH.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33995: HH => {
+     HH.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27703: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   27709: HH => {
+     HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAHHUlEQVR4nO3dP2vkRhgGcDX7YVxsYzfTuDl3Smdz1ZKwgnQGE8xyMTHxBULOcezjmgSTS2PwQbKBI80Rc+Ai5AO4MiFNiu2uSLmFmzBBy84yO9Y7mpFmpJHmKZ7Ca2lW0vx2RtLoTzJ+up+IDDc2a0Uuy2V56ZNdJ2Fb … [truncated]
+   },
+   34e3: HH => {
+     HH.exports = "data:model/gltf-binary;base64,Z2xURgIAAAAEVAAApDsAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   34008: HH => {
+ ... (1372 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4-L2773` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/205.js#L4-L5) · [Before (L4-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/205.js#L4-L2773)

```diff
-   34690: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       getLatestPublishedUpdateLog: () => FU,
-       updateLogsData: () => AU
-     });
-     var cU = zU(878),
-       yU = zU(320);
-     const QU = "\xa0\xa0\xa0\xa0",
-       AU = [{
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
- ... (2754 more removed lines; see GitHub link above)
+   38573: (HH, BH, LH) => {
+     var AH = LH(38577);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L2776-L2778` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/205.js#L8-L11) · [Before (L2776-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/205.js#L2776-L2778)

```diff
-       const XU = Date.now();
-       let zU = null;
-       for (const cU of AU) cU.date.getTime() > XU || UU && !UU(cU) || (!zU || cU.date.getTime() > zU.date.getTime()) && (zU = cU);
+       for (var BH, LH, rH = 0, SH = HH.length, hH = 0; hH < HH.length;) {
+         for (BH = HH[hH], LH = 0; hH < SH && HH[hH] === BH;) ++hH, ++LH;
+         rH += AH.log2(LH) / 7 | 0, rH += AH.log2(BH >>> 0) / 7 | 0, rH += 2
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L11892` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L32) · [Before (L4-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L11892)

```diff
-   34696: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(UU, XU, zU) {
-               UU.exports = zU(7588)
-             },
-             5036: function(UU, XU, zU) {
-               zU(1719), zU(5677), zU(6394), zU(5334), zU(6969), zU(2021), zU(8328), zU(2129);
-               var cU = zU(1287);
-               UU.exports = cU.Promise
-             },
-             2582: function(UU, XU, zU) {
-               zU(1646), zU(6394), zU(2004), zU(462), zU(8407), zU(2429), zU(1172), zU(8288), zU(1274), zU(8201), zU(6626), zU(3211), zU(9952), zU(15), zU(9831), zU(7521), zU(2972), zU(6956), zU(5222), zU(2257);
-               var cU = zU(1287);
- ... (11873 more removed lines; see GitHub link above)
+   41802: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       FORMER_BLOCK_IMAGE_NAMES: () => AH.b,
+       textureAnimationData: () => rH.u,
+       textureNameToIndex: () => rH.x
+     });
+     var AH = LH(39647),
+       rH = LH(9940)
+   },
+   10030: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH,
+       f: () => SH
+     });
+     var AH = LH(9979);
+     const rH = "Air",
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L2)

```diff
- export const ids = [207, 208];
+ export const ids = [207];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L7)

```diff
-   34701: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       reportJsMainStall: () => FU,
-       resetJsMainStallReport: () => oU
+   41940: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => zH,
+       f: () => tH,
+       i: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L9-L12` → after: `L10-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L10-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L10-L120) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L9-L12)

```diff
-     var cU = zU(34708),
-       yU = zU(1835),
-       QU = zU(34715);
-     let AU = !1;
+     var AH = LH(41946),
+       rH = LH(5265),
+       SH = LH(41949);
+ 
+     function hH(HH) {
+       return HH.payloadKind === rH.jc.Msgpack ? (0, AH.e)(HH.payload) : void 0
+     }
+ 
+     function tH(HH, BH) {
+       if (BH.payloadKind === rH.jc.Bytes || BH.payloadKind === rH.jc.MsgpackBin) return (0, SH.d)(HH, BH.payload)
+     }
+ 
+     function zH(HH) {
+       return null !== HH && "object" === typeof HH
+     }
+   },
+ ... (95 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L15-L19` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L123-L126) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L15-L19)

```diff
-       AU || (AU = !0, (0, yU.reportClientError)("wasm_load", (0, QU.e)(UU, XU, zU, FU, (0, QU.g)()), "JS-mainStall", !0, cU.CAPPED_COUNTS_VISIT_CAP))
-     }
- 
-     function oU() {
-       AU = !1
+       const hH = HH.queries.blockData(BH, LH, AH);
+       if (hH === rH.Qc) return;
+       const tH = HH.memoryView(Uint8Array, HH.scratch(), hH, "block_data's answer");
+       return tH ? JSON.parse(SH.decode(tH)) : void 0
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L22` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L129) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L22)

```diff
-   34715: (UU, XU, zU) => {
+   41946: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L27-L38` → after: `L134-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L134-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L134-L377) · [Before (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L27-L38)

```diff
-     var cU = zU(281),
-       yU = zU(134),
-       QU = zU(34719);
- 
-     function AU() {
-       var UU, XU, zU;
-       return null !== (UU = (0, cU.k)(null !== (XU = null === (zU = (0, yU.o)()) || void 0 === zU ? void 0 : zU.renderer) && void 0 !== XU ? XU : null, (0, yU.l)())) && void 0 !== UU ? UU : "unknown"
-     }
- 
-     function FU(UU, XU, zU, cU, yU) {
-       const AU = null === XU ? "untimed" : `${Math.round(XU)} ms`;
-       return `frames stalled, ${zU}, gpu ${(0,QU.b)(yU)}, blocking ${AU}, drawn ${Math.round(UU)} ms apart, timers ${cU.timers}, timer gap ${Math.round(cU.longestGapMs)} ms`
+     const AH = new TextDecoder;
+ 
+     function rH(HH) {
+       const BH = new SH(HH),
+         LH = BH.value();
+       if (BH.at !== HH.length) throw new Error(`msgpack: ${HH.length-BH.at} bytes after the value`);
+       return LH
+     }
+     class SH {
+       constructor(HH) {
+         this.bytes = HH, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(HH.buffer, HH.byteOffset, HH.byteLength)
+       }
+       value() {
+         const HH = this.u8();
+         if (HH <= 127) return HH;
+         if (HH >= 224) return HH - 256;
+ ... (228 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L41-L47` → after: `L380-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L380-L382) · [Before (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L41-L47)

```diff
-   34708: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       CAPPED_COUNTS_VISIT_CAP: () => QU,
-       reportCappedWasmFailure: () => oU,
-       reportUncappedWasmFailure: () => FU,
-       reportWasmCrash: () => yU,
-       reportWasmFailure: () => AU
+   41949: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L49-L71` → after: `L384-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L384-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L384-L489) · [Before (L49-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L49-L71)

```diff
-     var cU = zU(1835);
- 
-     function yU(UU) {
-       (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
-     }
-     const QU = cU.MAX_ERRORS_PER_VISIT - 4;
- 
-     function AU(UU, XU, zU, yU) {
-       (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
-         context: yU
-       })
-     }
- 
-     function FU(UU, XU, zU, yU) {
-       (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
-         context: yU
- ... (7 more removed lines; see GitHub link above)
+     var AH = LH(41933);
+     const rH = new TextDecoder("utf-8", {
+       ignoreBOM: !0
+     });
+     class SH {
+       constructor(HH) {
+         this.buf = HH, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let HH = this.u8(),
+           BH = 127 & HH,
+           LH = 128;
+         for (; 128 & HH;) {
+ ... (90 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L74-L77` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L492) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L74-L77)

```diff
-   34719: (UU, XU, zU) => {
-     function cU(UU) {
-       return String(UU).replace(/\d/g, (UU => String.fromCharCode(97 + Number(UU))))
-     }
+   41933: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L79-L80` → after: `L494-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L494-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/207.js#L494-L1366) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/207.js#L79-L80)

```diff
-       b: () => cU
-     })
+       $: () => uH,
+       C: () => mH,
+       D: () => rH,
+       F: () => tH,
+       G: () => YH,
+       K: () => bH,
+       N: () => OH,
+       R: () => UH,
+       U: () => EH,
+       V: () => XH,
+       Z: () => kH,
+       ab: () => vH,
+       d: () => TH,
+       db: () => QH,
+       e: () => WH,
+       eb: () => zH,
+ ... (857 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L10)

```diff
-   34708: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       CAPPED_COUNTS_VISIT_CAP: () => QU,
-       reportCappedWasmFailure: () => oU,
-       reportUncappedWasmFailure: () => FU,
-       reportWasmCrash: () => yU,
-       reportWasmFailure: () => AU
+   40084: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L12` → after: `L8-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L8-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L8-L319) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L12)

```diff
-     var cU = zU(1835);
+     class AH {
+       constructor(HH, BH) {
+         this.read = HH, this.apply = BH, this.release = null
+       }
+       turn(HH, BH) {
+         const LH = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: BH,
+           forcedCameraDirection: [HH[0], HH[1], HH[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+           }), BH + 100),
+           transitionMs: LH
+         }
+       }
+ ... (296 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L15` → after: `L322-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L322-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L322-L398) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L15)

```diff
-       (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
+       if (HH === AH.e) return 0;
+       const BH = (0, SH.e)(HH);
+       if (void 0 !== BH && BH <= rH.MAX_BLOCK_ID) return BH;
+       const LH = (0, SH.e)(HH.split("|")[0]);
+       if (void 0 !== LH && LH <= rH.MAX_BLOCK_ID && (0, rH.rootMetaDescOf)(LH) === HH) return LH;
+       throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+     }
+   },
+   40176: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
+     });
+     var AH = LH(15);
+     class rH {
+       constructor(HH) {
+         this.screen = HH, this.hidesHud = !1
+ ... (61 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L20-L22` → after: `L402-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L402-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L402-L430) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L20-L22)

```diff
-       (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
-         context: yU
-       })
+       const rH = Math.sqrt(HH * HH + LH * LH);
+       return rH < SH && Math.abs(BH) < SH || (rH >= SH && (AH.heading = Math.atan2(HH, LH)), AH.pitch = XH(Math.atan2(-BH, rH) + 0)), AH
+     }
+ 
+     function uH(HH, BH) {
+       return YH(HH[0], HH[1], HH[2], BH)
+     }
+ 
+     function QH(HH, BH, LH) {
+       return YH(BH[0] - HH[0], BH[1] - HH[1], BH[2] - HH[2], LH)
+     }
+   },
+   40174: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => SH,
+       f: () => rH
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L26-L28` → after: `L446-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L446-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L446-L676) · [Before (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L26-L28)

```diff
-       (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
-         context: yU
-       })
+       if (!(AH > 0)) return BH;
+       const rH = BH > HH ? Math.min(BH, HH + LH / AH) : Math.max(BH, HH - LH / AH);
+       return Math.abs(BH - rH) < 1e-9 ? BH : rH
+     }
+     class tH {
+       constructor() {
+         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
+           colour: AH.d,
+           alpha: 0
+         }
+       }
+       getScreen() {
+         return this.screen
+       }
+       fadeOut(HH) {
+         !this.isGoingOut() && this.sinceTurnMs < AH.g.minFadeTurnMs ? this.waiting = {
+ ... (215 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L32-L34` → after: `L680-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L680-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/208.js#L680-L1641) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/208.js#L32-L34)

```diff
-       (0, cU.reportClientError)(UU, XU, zU, !1, QU, {
-         context: yU
-       })
+       for (let rH = 0; rH < 3; rH++) AH[rH] = 6 * (BH[rH] - HH[rH]) - 2 * LH[rH];
+       if (xH(AH) < MH)
+         for (let rH = 0; rH < 3; rH++) AH[rH] = BH[rH] - HH[rH];
+       return AH
+     }
+ 
+     function OH(HH, BH) {
+       return [2 * BH[0] - HH[0], 2 * BH[1] - HH[1], 2 * BH[2] - HH[2]]
+     }
+ 
+     function bH(HH, BH, LH, AH, rH, SH, hH) {
+       if (!SH && !hH) return 0;
+       const tH = SH ? HH : 2 * BH - LH,
+         zH = hH ? LH : 2 * BH - HH,
+         CH = SH ? AH : rH,
+         EH = hH ? rH : AH,
+ ... (946 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/209.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/209.js#L2)

```diff
- export const ids = [208, 209];
+ export const ids = [209];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   34708: (UU, XU, zU) => {
+   34808: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L10` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L7) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => QU,
-       reportCappedWasmFailure: () => oU,
-       reportUncappedWasmFailure: () => FU,
-       reportWasmCrash: () => yU,
-       reportWasmFailure: () => AU
+       getLatestPublishedUpdateLog: () => tH,
+       updateLogsData: () => hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L12-L1336` → after: `L9-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L9-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/209.js#L9-L2773) · [Before (L12-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/209.js#L12-L1336)

```diff
-     var cU = zU(1835);
- 
-     function yU(UU) {
-       (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
-     }
-     const QU = cU.MAX_ERRORS_PER_VISIT - 4;
- 
-     function AU(UU, XU, zU, yU) {
-       (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
-         context: yU
-       })
-     }
- 
-     function FU(UU, XU, zU, yU) {
-       (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
-         context: yU
- ... (1309 more removed lines; see GitHub link above)
+     var AH = LH(816),
+       rH = LH(304);
+     const SH = "\xa0\xa0\xa0\xa0",
+       hH = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: rH.o.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (2749 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L1339` → after: `L2776-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/209.js#L2776-L2779) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/209.js#L1339)

```diff
-       return UU.replace(/\s*\n\s*/g, " / ").slice(0, FU)
+       const BH = Date.now();
+       let LH = null;
+       for (const AH of hH) AH.date.getTime() > BH || HH && !HH(AH) || (!LH || AH.date.getTime() > LH.date.getTime()) && (LH = AH);
+       return LH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L22` → after: `L4-L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L5395) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L22)

```diff
-   34748: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       ALL_DEV_TOOLS: () => AU,
-       coreDevTools: () => DU,
-       devTools: () => oU
-     });
-     var cU = zU(687),
-       yU = zU(1322),
-       QU = zU(34754);
-     const AU = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function FU() {
-       const {
-         noaDevTools: UU
-       } = await zU.e(256).then((() => zU(42167)));
-       return UU
-     }
- ... (3 more removed lines; see GitHub link above)
+   34810: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(HH, BH, LH) {
+               HH.exports = LH(7588)
+             },
+             5036: function(HH, BH, LH) {
+               LH(1719), LH(5677), LH(6394), LH(5334), LH(6969), LH(2021), LH(8328), LH(2129);
+               var AH = LH(1287);
+               HH.exports = AH.Promise
+             },
+             2582: function(HH, BH, LH) {
+               LH(1646), LH(6394), LH(2004), LH(462), LH(8407), LH(2429), LH(1172), LH(8288), LH(1274), LH(8201), LH(6626), LH(3211), LH(9952), LH(15), LH(9831), LH(7521), LH(2972), LH(6956), LH(5222), LH(2257);
+               var AH = LH(1287);
+ ... (5376 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L24-L56` → after: `L5397-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L5397-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/210.js#L5397-L11892) · [Before (L24-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/210.js#L24-L56)

```diff
-         setHost(UU) {
-           this.tools = null === UU ? AU : UU.tools, this.loadHost = null === UU ? FU : async () => UU
-         }
-         supports(UU) {
-           return this.tools.has(UU)
-         }
-         async downloadScene(UU, XU) {
-           const zU = await this.loadHost();
-           await zU.downloadScene(UU, XU)
-         }
-         async setAmbientLightIntensity(UU) {
-           const XU = await this.loadHost();
-           await XU.setAmbientLightIntensity(UU)
-         }
-         async capturePhoto(UU, XU, zU) {
-           return (await this.loadHost()).capturePhoto(UU, XU, zU)
- ... (17 more removed lines; see GitHub link above)
+         __nested_webpack_require_223763__.n = function(HH) {
+           var BH = HH && HH.__esModule ? function() {
+             return HH.default
+           } : function() {
+             return HH
+           };
+           return __nested_webpack_require_223763__.d(BH, {
+             a: BH
+           }), BH
+         }, __nested_webpack_require_223763__.d = function(HH, BH) {
+           for (var LH in BH) __nested_webpack_require_223763__.o(BH, LH) && !__nested_webpack_require_223763__.o(HH, LH) && Object.defineProperty(HH, LH, {
+             enumerable: !0,
+             get: BH[LH]
+           })
+         }, __nested_webpack_require_223763__.g = function() {
+           if ("object" == typeof globalThis) return globalThis;
+ ... (6480 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L2)

```diff
- export const ids = [211];
+ export const ids = [211, 212];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   37087: (UU, XU, zU) => {
+   34819: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L7)

```diff
-       isMoreOptionsInFooter: () => MU,
-       showOnboardingPopup: () => vU
+       reportJsMainStall: () => tH,
+       resetJsMainStallReport: () => zH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L9-L28` → after: `L9-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L9-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L9-L49) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L9-L28)

```diff
-     var cU = zU(61),
-       yU = zU(1193),
-       QU = zU(1410),
-       AU = zU(1494),
-       FU = zU(1124),
-       oU = zU(4715),
-       DU = zU(1613),
-       EU = zU(344),
-       YU = zU(1605),
-       NU = zU(2334),
-       IU = zU(1106),
-       pU = zU.n(IU),
-       aU = zU(1131),
-       tU = zU(37090),
-       gU = zU(2500),
-       kU = zU(3873),
- ... (4 more removed lines; see GitHub link above)
+     var AH = LH(34821),
+       rH = LH(1826),
+       SH = LH(34825);
+     let hH = !1;
+ 
+     function tH(HH, BH, LH, tH) {
+       hH || (hH = !0, (0, rH.reportClientError)("wasm_load", (0, SH.e)(HH, BH, LH, tH, (0, SH.h)()), "JS-mainStall", !0, AH.CAPPED_COUNTS_VISIT_CAP))
+     }
+ 
+     function zH() {
+       hH = !1
+     }
+   },
+   34825: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => tH,
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L31-L49` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L52) · [Before (L31-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L31-L49)

```diff
-       let {
-         open: XU,
-         onToggle: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, yU.I)();
-       return (0, ZU.jsxs)("button", {
-         type: "button",
-         className: "OnboardingMoreOptions",
-         "aria-expanded": XU,
-         "aria-controls": XU ? RU : void 0,
-         onClick: () => {
-           XU || (0, oU.j)("more"), zU()
-         },
-         children: [cU("homePage:onboardingMoreOptions"), (0, ZU.jsx)(BU.d, {
- ... (3 more removed lines; see GitHub link above)
+       (0, AH.reportClientError)("wasm_load", HH.message, HH.code)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L51-L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L51-L54)

```diff
-     const WU = Object.entries(DU.d).filter((UU => {
-       let [, XU] = UU;
-       return "default" === XU.cosmeticPack
-     }));
+     const SH = AH.MAX_ERRORS_PER_VISIT - 4;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L56-L125` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L56-L58) · [Before (L56-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L56-L125)

```diff
-     function dU(UU) {
-       return YU.c.default.colourGroups[UU].colours.map(((UU, XU) => {
-         let {
-           rbg: zU,
-           order: cU
-         } = UU;
-         return {
-           rbg: zU,
-           order: cU,
-           index: XU
-         }
-       })).sort(((UU, XU) => UU.order - XU.order))
-     }
-     const LU = dU("eyes"),
-       eU = dU("skin");
- 
- ... (54 more removed lines; see GitHub link above)
+     function hH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, AH.MAX_ERRORS_PER_VISIT, {
+         context: rH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L129-L460` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L62-L64) · [Before (L129-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L129-L460)

```diff
-     function OU(UU) {
-       let {
-         moreOptions: XU,
-         onToggleMoreOptions: zU,
-         moreOptionsBelowPresets: QU
-       } = UU;
-       const {
-         t: AU
-       } = (0, yU.I)(), {
-         userContext: FU,
-         isUserContextUpdating: DU
-       } = (0, GU.d)(), [, YU] = (0, cU.useReducer)((UU => UU + 1), 0), NU = (0, cU.useRef)({}), IU = (0, cU.useRef)(null), BU = (0, cU.useRef)({}), dU = (0, kU.b)(), OU = {
-         ...FU.getPlayerCosmetics(),
-         ...IU.current
-       }, SU = (0, cU.useRef)(null);
-       (0, cU.useEffect)((() => {
- ... (316 more removed lines; see GitHub link above)
+     function tH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, 1 / 0, {
+         context: rH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L464-L505` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L68-L70) · [Before (L464-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L464-L505)

```diff
-     function VU(UU) {
-       let {
-         onFinish: XU,
-         doneRef: zU
-       } = UU;
-       const {
-         t: QU
-       } = (0, yU.I)(), DU = HU(XU), EU = DU.ready && !DU.busy ? DU.submit : null;
-       (0, cU.useEffect)((() => (zU.press = EU, () => {
-         zU.press = null
-       })));
-       const [YU, NU] = (0, cU.useState)(!1), IU = (0, FU.l)(((UU, XU) => MU(XU))), pU = () => {
-         NU(!YU)
-       };
-       return (0, cU.useEffect)((() => {
-         (0, oU.p)()
- ... (26 more removed lines; see GitHub link above)
+     function zH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, SH, {
+         context: rH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L509` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L74-L77) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L509)

```diff
-   37090: (UU, XU, zU) => {
+   34828: (HH, BH, LH) => {
+     function AH(HH) {
+       return String(HH).replace(/\d/g, (HH => String.fromCharCode(97 + Number(HH))))
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L511-L640` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/211.js#L79-L80) · [Before (L511-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/211.js#L511-L640)

```diff
-       e: () => AU
-     });
-     var cU = zU(2005),
-       yU = zU(1545);
-     const QU = new class {
-       constructor() {
-         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
-       }
-       save(UU, XU) {
-         UU !== this.userContext && this.sendHeld(), this.userContext = UU;
-         for (const [cU, yU] of XU) this.pending.set(cU, yU);
-         if (null !== this.timer) return;
-         const zU = this.lastSentAt + 1100 - Date.now();
-         zU <= 0 ? this.send(UU) : (this.timer = setTimeout((() => {
-           this.sendHeld()
-         }), zU), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
- ... (114 more removed lines; see GitHub link above)
+       c: () => AH
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4-L15` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L10) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L15)

```diff
-   34798: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => lU,
-       f: () => WX,
-       i: () => PX,
-       k: () => LX,
-       l: () => DX,
-       m: () => YX,
-       q: () => NX,
-       r: () => pX,
-       u: () => dX,
-       w: () => IX
+   34821: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       CAPPED_COUNTS_VISIT_CAP: () => SH,
+       reportCappedWasmFailure: () => zH,
+       reportUncappedWasmFailure: () => tH,
+       reportWasmCrash: () => rH,
+       reportWasmFailure: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L17-L49` → after: `L12-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L12-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/212.js#L12-L22) · [Before (L17-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/212.js#L17-L49)

```diff
-     var cU = zU(281),
-       yU = zU(27),
-       QU = zU(97),
-       AU = zU(1680),
-       FU = zU(4848),
-       oU = zU(3203),
-       DU = zU(3212),
-       EU = zU(42);
-     const {
-       windows: YU,
-       target: NU,
-       stepDown: IU,
-       stepUp: pU,
-       noGain: aU
-     } = DU.b, tU = 1e3 / 60 * 1.08, gU = 1e3 / 55, kU = 1e3 / 45, GU = 1e3 / 30 * .92, BU = 1e3 / 30 * 1.08;
-     class ZU {
- ... (17 more removed lines; see GitHub link above)
+     var AH = LH(1826);
+ 
+     function rH(HH) {
+       (0, AH.reportClientError)("wasm_load", HH.message, HH.code)
+     }
+     const SH = AH.MAX_ERRORS_PER_VISIT - 4;
+ 
+     function hH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, AH.MAX_ERRORS_PER_VISIT, {
+         context: rH
+       })
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L52-L300` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/212.js#L25-L28) · [Before (L52-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/212.js#L52-L300)

```diff
-     function RU(UU, XU, zU) {
-       const {
-         fast: cU,
-         masked: yU,
-         longFrame: QU,
-         paced: AU
-       } = UU;
-       return !QU && (cU && !AU || XU) ? yU && !zU ? "hold" : "rise" : yU ? UU.dropping ? "break" : "hold" : (QU ? cU || XU : cU && !zU) ? "hold" : "break"
-     }
-     const PU = YU.windowMs,
-       WU = YU.settleMs,
-       dU = YU.graceMs,
-       LU = YU.minIntervals,
-       eU = 1e3 * LU / PU,
-       CU = Math.floor(1e4 / PU),
-       wU = aU.backoffMs,
- ... (233 more removed lines; see GitHub link above)
+     function tH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, 1 / 0, {
+         context: rH
+       })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L303-L522` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/212.js#L31-L33) · [Before (L303-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/212.js#L303-L522)

```diff
-     function vU() {
-       return (0, oU.p)(MU())
-     }
- 
-     function VU() {
-       const UU = EU.k.getItem(fU);
-       return "object" !== typeof UU || null === UU || "string" !== typeof UU.gpu ? null : UU
-     }
- 
-     function sU(UU) {
-       return {
-         untilEpochMs: Date.now() + (UU.untilMs - performance.now()),
-         backoffMs: UU.backoffMs,
-         fps: UU.fps
-       }
-     }
- ... (204 more removed lines; see GitHub link above)
+     function zH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, SH, {
+         context: rH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L2)

```diff
- export const ids = [213];
+ export const ids = [212, 213];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L4-L9` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L10) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L9)

```diff
-   37685: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => yU,
-       c: () => QU,
-       d: () => FU,
-       e: () => AU
+   34821: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       CAPPED_COUNTS_VISIT_CAP: () => SH,
+       reportCappedWasmFailure: () => zH,
+       reportUncappedWasmFailure: () => tH,
+       reportWasmCrash: () => rH,
+       reportWasmFailure: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L11-L13` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L12) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L11-L13)

```diff
-     var cU = zU(1817);
-     const yU = ".bloxdreplay",
-       QU = "application/octet-stream";
+     var AH = LH(1826);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L15-L16` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L14-L15) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L15-L16)

```diff
-     function AU() {
-       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${yU}`
+     function rH(HH) {
+       (0, AH.reportClientError)("wasm_load", HH.message, HH.code)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L19-L23` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L19-L22) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L19-L23)

```diff
-     function FU(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU();
-       return (0, cU.c)(new Blob([UU], {
-         type: QU
-       }), XU), XU
+     function hH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, AH.MAX_ERRORS_PER_VISIT, {
+         context: rH
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L42-L43` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L25-L28) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L42-L43)

```diff
-     function QU(UU) {
-       yU = UU
+     function tH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, 1 / 0, {
+         context: rH
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L46-L47` → after: `L31-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L31-L34) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L46-L47)

```diff
-     function AU() {
-       return yU
+     function zH(HH, BH, LH, rH) {
+       (0, AH.reportClientError)(HH, BH, LH, !1, SH, {
+         context: rH
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L50` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L37) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L50)

```diff
-   37674: (UU, XU, zU) => {
+   37018: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L52` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L39-L40) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L52)

```diff
-       e: () => AU,
+       d: () => UH,
+       h: () => bH,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L54` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L42) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L54)

```diff
-       l: () => oU
+       m: () => VH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L56-L150` → after: `L44-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L44-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L44-L61) · [Before (L56-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L56-L150)

```diff
-     var cU = zU(31);
-     const yU = 1500,
-       QU = 1e3,
-       AU = {
-         recordingStarted: {
-           text: "Started recording",
-           type: "Success"
-         },
-         recordingStopped: {
-           text: "Stopped recording",
-           type: "Success"
-         },
-         recordingSaved: {
-           text: "Recording saved",
-           type: "Success"
-         },
- ... (79 more removed lines; see GitHub link above)
+     var AH = LH(37044),
+       rH = LH(3168),
+       SH = LH(37069),
+       hH = LH(3171),
+       tH = LH(34821),
+       zH = LH(3228),
+       CH = LH(3585),
+       EH = LH(3583),
+       XH = LH(37023),
+       GH = LH(1826),
+       YH = LH(37030),
+       uH = LH(37037),
+       QH = LH(4074);
+     let WH = !1;
+     const MH = 40;
+     var xH = LH(3595),
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L152-L153` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L63-L64) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L152-L153)

```diff
-     function oU(UU) {
-       return UU instanceof Error && FU.has(UU.message) ? UU.message : void 0
+     function TH() {
+       return "undefined" === typeof WebAssembly
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L156-L163` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L67-L68) · [Before (L156-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L156-L163)

```diff
-     function DU(UU) {
-       var XU;
-       const zU = null !== (XU = UU.timeoutMs) && void 0 !== XU ? XU : "Error" === UU.type ? yU : QU;
-       cU.k.UY("showBottomMessage", {
-         message: UU.text,
-         timeoutLength: zU,
-         type: UU.type
-       })
+     function UH() {
+       return (0, AH.g)()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L174` → after: `L72-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L72-L77) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L174)

```diff
-       return cU
+       if (TH()) return "this browser has no WebAssembly";
+       const HH = (0, rH.q)();
+       return "compile" === HH || "instantiate" === HH ? `the core wasm didn't load here (${(0,rH.k)()})` : null
+     }
+     async function OH(HH) {
+       return await (0, xH.l)(), await (0, SH.e)(SH.d, void 0, HH)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L177-L178` → after: `L80-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L80-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L80-L120) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L177-L178)

```diff
-     function QU(UU) {
-       return cU !== UU && (cU = UU, !0)
+     function bH() {
+       TH() || (0, vH.d)((() => {
+         OH()
+       }))
+     }
+ 
+     function kH() {
+       if (TH()) return async () => ((0, zH.h)("unsupported", 0), mH("unsupported", "This browser has no WebAssembly"), !1);
+       const HH = {
+         reloadFailedDownload: !0
+       };
+       return OH(HH), async () => {
+         var BH;
+         const LH = performance.now();
+         await OH(HH);
+         const AH = (performance.now() - LH) / 1e3;
+ ... (25 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L181` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L123) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L181)

```diff
-   34824: (UU, XU, zU) => {
+   37037: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L183-L184` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L125-L128) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L183-L184)

```diff
-       e: () => QU,
-       g: () => yU
+       d: () => tH,
+       f: () => CH,
+       g: () => hH,
+       k: () => XH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L186` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L130-L132) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L186)

```diff
-     var cU = zU(27);
+     var AH = LH(37023),
+       rH = LH(10);
+     const SH = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L188-L189` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L134-L137) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L188-L189)

```diff
-     function yU(UU, XU) {
-       return UU && !XU
+     function hH(HH) {
+       if (HH instanceof WebAssembly.RuntimeError) return !0;
+       const BH = HH instanceof Error ? HH.stack : void 0;
+       return "string" === typeof BH && SH.test(BH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L192-L193` → after: `L140-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L140-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L140-L175) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L192-L193)

```diff
-     function QU() {
-       return yU(cU.e.get("isTouchScreen"), cU.e.get("clientEscMenuOptions").touchActionButtons)
+     function tH(HH, BH, LH) {
+       var rH;
+       const hH = HH instanceof Error ? HH.name : "thrown",
+         tH = (HH instanceof Error && null !== (rH = HH.stack) && void 0 !== rH ? rH : "").split("\n").filter((HH => SH.test(HH))).slice(0, 8).map((HH => HH.trim())),
+         zH = null === BH ? "wasm memory unknown" : `wasm memory ${Math.round(BH/2**20)} MB`,
+         CH = null === LH.panic ? "" : `, panic: ${(0,AH.i)(LH.panic)}`,
+         EH = `${hH}: ${HH instanceof Error?HH.message:String(HH)}`;
+       return `${(0,AH.m)(LH.kind,LH.refusedBytes)} ${EH} (${zH})${CH}${tH.length>0?` | ${tH.join(" < ")}`:""}`
+     }
+     const zH = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
+ 
+     function CH(HH) {
+       var BH;
+       let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(HH instanceof Error) || !zH.test(HH.message)) return {};
+       if (!("detached" in LH)) return {
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L196-L199` → after: `L178-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L178-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L178-L216) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L196-L199)

```diff
-   37535: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       f: () => cU
+   37087: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/bloxd_wasm_bg.d827f2f3b3de35f70008.wasm"
+   },
+   37061: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/bloxd_wasm_textures_bg.e2eb154503b56db9191d.wasm"
+   },
+   37078: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       LH: () => AH,
+       EnvelopeKind: () => rH,
+       MH: () => SH,
+       PhysicsEngine: () => hH,
+       SL: () => tH,
+       fA: () => zH,
+       Or: () => CH,
+       AS: () => EH,
+ ... (23 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L201-L206` → after: `L218-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L218-L221) · [Before (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L201-L206)

```diff
-     const cU = 3,
-       yU = {
-         recording: !1,
-         clipping: !1,
-         hasClipBuffer: !1,
-         seconds: 0
+     class AH {
+       __destroy_into_raw() {
+         const HH = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, cH.unregister(this), HH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L208-L222` → after: `L223-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L223-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L223-L274) · [Before (L208-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L208-L222)

```diff
-   },
-   37540: (UU, XU, zU) => {
-     zU.d(XU, {
-       A: () => WU,
-       B: () => PU,
-       F: () => dU,
-       c: () => DU,
-       g: () => aU,
-       i: () => BU,
-       j: () => GU,
-       m: () => RU,
-       p: () => ZU,
-       s: () => tU,
-       t: () => pU,
-       x: () => kU
+       free() {
+         const HH = this.__destroy_into_raw();
+         vB.gSgE(HH, 0)
+       }
+       dX() {
+         const HH = vB.lixC(this.__wbg_ptr);
+         if (HH[2]) throw GB(HH[1]);
+         return HH[0] >>> 0
+       }
+       aX() {
+         return vB.CO4Y(this.__wbg_ptr) >>> 0
+       }
+       constructor() {
+         const HH = vB.Xx4y();
+         return this.__wbg_ptr = HH, cH.register(this, this.__wbg_ptr, this), this
+       }
+ ... (36 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L224-L233` → after: `L276-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L276-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L276-L894) · [Before (L224-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L224-L233)

```diff
-     var cU = zU(1447),
-       yU = zU(37545),
-       QU = zU(31);
-     const AU = "clientGameCraftableMarksChanged",
-       FU = "clientGameCraftableLocksChanged",
-       oU = "clientGameCraftableOrderChanged",
-       DU = "selectCraftable";
-     let EU = new Set,
-       YU = new Map,
-       NU = new Map;
+     class SH {
+       __destroy_into_raw() {
+         const HH = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, eH.unregister(this), HH
+       }
+       free() {
+         const HH = this.__destroy_into_raw();
+         vB.fyWy(HH, 0)
+       }
+       HG(HH, BH) {
+         const LH = vB.Nl4W(this.__wbg_ptr, HH, BH);
+         if (LH[2]) throw GB(LH[1]);
+         return LH[0] >>> 0
+       }
+       BG(HH) {
+         const BH = vB.wGeX(this.__wbg_ptr, HH);
+ ... (603 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L236` → after: `L897-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L897-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L897-L899) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L236)

```diff
-       return EU
+       const HH = vB.HE49();
+       var BH = ZH(HH[0], HH[1]).slice();
+       return vB.PyZM(HH[0], 4 * HH[1], 4), BH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L239-L241` → after: `L902-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L902-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L902-L913) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L239-L241)

```diff
-     function pU(UU) {
-       const XU = new Set(UU);
-       (0, yU.e)(XU, EU) || (EU = XU, QU.k.UY(AU, EU))
+     function YH(HH, BH) {
+       let LH, AH;
+       try {
+         const rH = tB(HH, vB.Srmp),
+           SH = PB,
+           hH = XB(BH, vB.Srmp, vB.RJhM),
+           tH = PB,
+           zH = vB.YGuD(rH, SH, hH, tH);
+         return LH = zH[0], AH = zH[1], iH(zH[0], zH[1])
+       } finally {
+         vB.PyZM(LH, AH, 1)
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L245` → after: `L917-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L917-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L917-L919) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L245)

```diff
-       return YU
+       const HH = vB.ElUx();
+       var BH = ZH(HH[0], HH[1]).slice();
+       return vB.PyZM(HH[0], 4 * HH[1], 4), BH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L249` → after: `L923-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L923-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L923-L930) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L249)

```diff
-       0 === UU.size && 0 === YU.size || (YU = new Map(UU), QU.k.UY(FU, YU))
+       return 0 !== vB.ugIp(HH)
+     }
+ 
+     function WH(HH, BH) {
+       const LH = XB(HH, vB.Srmp, vB.RJhM),
+         AH = PB,
+         rH = vB.ewiP(LH, AH, BH);
+       if (rH[1]) throw GB(rH[0])
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L253` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L934) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L253)

```diff
-       return NU
+       vB.Vcru()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L256-L257` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L937-L938) · [Before (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L256-L257)

```diff
-     function kU(UU) {
-       UU.length === NU.size && UU.every(((UU, XU) => NU.get(UU) === XU)) || (NU = new Map(UU.map(((UU, XU) => [UU, XU]))), QU.k.UY(oU, NU))
+     function xH() {
+       return vB.QCfo() >>> 0
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L260-L273` → after: `L941-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L941-L942) · [Before (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L260-L273)

```diff
-     function GU(UU, XU, zU, cU) {
-       if (! function(UU, XU, zU) {
-           return UU.size > 0 || XU.size > 0 || zU.size > 0
-         }(XU, zU, cU)) return UU;
-       const yU = UU => {
-         const cU = zU.get(UU.name);
-         var yU;
-         return cU ? null !== (yU = cU.stepsAway) && void 0 !== yU ? yU : 1 : XU.has(UU.name) ? -1 : 0
-       };
-       return [...UU].sort(((UU, XU) => yU(UU) - yU(XU) || ((UU, XU) => {
-         const zU = cU.get(UU.name),
-           yU = cU.get(XU.name);
-         return void 0 === zU || void 0 === yU ? (void 0 === zU ? 1 : 0) - (void 0 === yU ? 1 : 0) : Number(XU.haveIngredients) - Number(UU.haveIngredients) || zU - yU
-       })(UU, XU)))
+     function vH(HH) {
+       return 0 !== vB.yu7d(HH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L276-L283` → after: `L945-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L945-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L945-L946) · [Before (L276-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L276-L283)

```diff
-     function BU(UU, XU, zU) {
-       const cU = [...XU.keys()].sort(((UU, zU) => XU.get(UU) - XU.get(zU)));
-       return UU.forEach(((yU, QU) => {
-         const AU = zU(yU);
-         XU.has(AU) || (cU.splice(0 === QU ? 0 : cU.indexOf(zU(UU[QU - 1])) + 1, 0, AU), XU.set(AU, -1))
-       })), cU.forEach(((UU, zU) => {
-         XU.set(UU, zU)
-       })), [...UU].sort(((UU, cU) => XU.get(zU(UU)) - XU.get(zU(cU))))
+     function PH(HH) {
+       return 0 !== vB.ycPC(HH)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L286-L291` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L949-L950) · [Before (L286-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L286-L291)

```diff
-     function ZU(UU, XU) {
-       const zU = {
-         variation: UU,
-         itemName: XU
-       };
-       QU.k.UY(DU, zU)
+     function TH(HH) {
+       vB.RFQZ(HH)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L295` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L954) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L295)

```diff
-       pU([]), tU(new Map), kU([])
+       return vB.urjs() >>> 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L299` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L958) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L299)

```diff
-       return (0, cU.c)(AU, IU)
+       return vB.eWqn() >>> 0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L303` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L962) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L303)

```diff
-       return (0, cU.c)(FU, aU)
+       return 0 !== vB.G7FQ()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L307` → after: `L966-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L966-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L966-L968) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L307)

```diff
-       return (0, cU.c)(oU, gU)
+       const HH = vB.mjue();
+       var BH = ZH(HH[0], HH[1]).slice();
+       return vB.PyZM(HH[0], 4 * HH[1], 4), BH
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L317-L318` → after: `L971-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L971-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L971-L974) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L317-L318)

```diff
-     function yU(UU) {
-       cU = UU
+     function kH() {
+       const HH = vB.xw4Y();
+       var BH = ZH(HH[0], HH[1]).slice();
+       return vB.PyZM(HH[0], 4 * HH[1], 4), BH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L321-L322` → after: `L977-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L977-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L977-L980) · [Before (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L321-L322)

```diff
-     function QU(UU, XU) {
-       return cU(UU, XU)
+     function mH() {
+       const HH = vB.ZnVX();
+       var BH = ZH(HH[0], HH[1]).slice();
+       return vB.PyZM(HH[0], 4 * HH[1], 4), BH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L338-L339` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L983-L984) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L338-L339)

```diff
-     function FU(UU) {
-       return UU instanceof Element && UU.hasAttribute(QU)
+     function oH() {
+       return vB.GmTI() >>> 0
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L343-L344` → after: `L987-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L987-L988) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L343-L344)

```diff
-     function DU(UU) {
-       oU = UU
+     function IH() {
+       vB.yQwp()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L348-L352` → after: `L992-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L992-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L992-L998) · [Before (L348-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L348-L352)

```diff
-       const UU = document.createElement("div"),
-         {
-           style: XU
-         } = UU;
-       return XU.position = "absolute", XU.left = "0", XU.right = "0", XU.pointerEvents = "none", UU
+       let HH, BH;
+       try {
+         const LH = vB.gIzZ();
+         return HH = LH[0], BH = LH[1], iH(LH[0], LH[1])
+       } finally {
+         vB.PyZM(HH, BH, 1)
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L356-L359` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1002) · [Before (L356-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L356-L359)

```diff
-       const XU = EU();
-       XU.style[UU] = "0", XU.style.height = 100 * cU.d + "%", XU.style.background = "#000000", XU.style.pointerEvents = "auto", XU.setAttribute(QU, ""), XU.addEventListener("mousedown", IU), XU.addEventListener("contextmenu", NU);
-       for (const zU of ["touchstart", "touchmove", "touchend", "touchcancel"]) XU.addEventListener(zU, NU);
-       return XU
+       vB.yBxu(FH(HH))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L362-L363` → after: `L1005-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1005-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1005-L1029) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L362-L363)

```diff
-     function NU(UU) {
-       UU.preventDefault(), UU.stopPropagation()
+     function KH() {
+       return {
+         __proto__: null,
+         ogdq: {
+           __proto__: null,
+           qxxj: function(HH, BH) {
+             return FH(Error(iH(HH, BH)))
+           },
+           LLIv: function(HH, BH) {
+             throw new Error(iH(HH, BH))
+           },
+           QSzS: function(HH) {
+             AB(HH).call()
+           },
+           Mu23: function(HH, BH) {
+             console.error(iH(HH, BH))
+ ... (9 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L367-L369` → after: `L1066-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1066-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1066-L1068) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L367-L369)

```diff
-       NU(UU);
-       const XU = document.activeElement;
-       XU instanceof HTMLElement && XU !== document.body && XU.blur()
+       SB === rB.length && rB.push(rB.length + 1);
+       const BH = SB;
+       return SB = rB[BH], rB[BH] = HH, BH
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L371-L429` → after: `L1070-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1070-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1070-L1072) · [Before (L371-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L371-L429)

```diff
-     class pU {
-       constructor(UU) {
-         this.getContainer = UU, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
-       }
-       setFade(UU, XU) {
-         var zU;
-         if (!this.elements && XU <= 0) return;
-         const {
-           fade: cU
-         } = this.getElements(), yU = null !== (zU = oU) && void 0 !== zU ? zU : this.getContainer();
-         cU.parentElement !== yU && yU.appendChild(cU);
-         const QU = this.markHost(XU > 0 ? oU : null, XU >= 1);
-         (UU !== this.colour || XU !== this.alpha || QU) && (UU !== this.colour && (cU.style.background = UU), cU.style.opacity = String(XU), cU.style.display = XU > 0 ? "" : "none", this.fadeKeeperHosts(XU), this.colour = UU, this.alpha = XU)
-       }
-       fadeKeeperHosts(UU) {
-         var XU;
- ... (43 more removed lines; see GitHub link above)
+ 
+     function DH(HH, BH) {
+       if (!(HH instanceof BH)) throw new Error(`expected instance of ${BH.name}`)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L447-L448` → after: `L1075-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1075-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1075-L1076) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L447-L448)

```diff
-     function FU(UU) {
-       return Math.min(1, Math.max(0, UU))
+     function wH(HH, BH) {
+       return HH >>>= 0, sH().subarray(HH / 8, HH / 8 + BH)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L451-L454` → after: `L1079-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1079-L1080) · [Before (L451-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L451-L454)

```diff
-     function oU(UU, XU, zU) {
-       const cU = 1 - zU,
-         yU = zU * zU;
-       return 3 * (cU * cU) * zU * UU + 3 * cU * yU * XU + yU * zU
+     function ZH(HH, BH) {
+       return HH >>>= 0, HB().subarray(HH / 4, HH / 4 + BH)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L457-L459` → after: `L1083-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1083-L1084) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L457-L459)

```diff
-     function DU(UU, XU, zU) {
-       const cU = 1 - zU;
-       return 3 * (cU * cU) * UU + 6 * cU * zU * (XU - UU) + 3 * (zU * zU) * (1 - XU)
+     function dH(HH, BH) {
+       return HH >>>= 0, LB().subarray(HH / 1, HH / 1 + BH)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L463-L492` → after: `L1094-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1094-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1094-L1100) · [Before (L463-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L463-L492)

```diff
-       const zU = FU(UU);
-       if (0 === zU || 1 === zU) return zU;
-       const cU = FU(XU[0]),
-         yU = XU[1],
-         QU = FU(XU[2]),
-         AU = XU[3];
-       if (cU === yU && QU === AU) return zU;
-       let EU = zU,
-         YU = !1;
-       for (let NU = 0; NU < 8; NU++) {
-         const UU = oU(cU, QU, EU) - zU;
-         if (Math.abs(UU) < 1e-6) {
-           YU = !0;
-           break
-         }
-         const XU = DU(cU, QU, EU);
- ... (14 more removed lines; see GitHub link above)
+       return function(HH, BH) {
+         QB += BH, QB >= uB && (YB = new TextDecoder("utf-8", {
+           ignoreBOM: !0,
+           fatal: !0
+         }), YB.decode(), QB = BH);
+         return YB.decode(LB().subarray(HH, HH + BH))
+       }(HH >>> 0, BH)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L495-L507` → after: `L1105-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1105-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1105-L1111) · [Before (L495-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L495-L507)

```diff
-     function YU(UU) {
-       switch (UU) {
-         case "linear":
-           return cU;
-         case "easeIn":
-           return yU;
-         case "easeOut":
-           return QU;
-         case "easeInOut":
-           return AU;
-         default:
-           return UU
-       }
+     function HB() {
+       return null !== yH && 0 !== yH.byteLength || (yH = new Uint32Array(vB.memory.buffer)), yH
+     }
+     let BB = null;
+ 
+     function LB() {
+       return null !== BB && 0 !== BB.byteLength || (BB = new Uint8Array(vB.memory.buffer)), BB
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L520` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1115) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L520)

```diff
-       return Math.abs(UU) > yU
+       return rB[HH]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L522-L527` → after: `L1117-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1117-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1117-L1119) · [Before (L522-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L522-L527)

```diff
-   },
-   34809: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU
-     });
-     var cU = zU(1325);
+     let rB = new Array(1024).fill(void 0);
+     rB.push(void 0, null, !0, !1);
+     let SB = rB.length;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L529-L531` → after: `L1121-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1121-L1122) · [Before (L529-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L529-L531)

```diff
-     function yU() {
-       var UU, XU;
-       return null !== (UU = null === (XU = screen.orientation) || void 0 === XU ? void 0 : XU.type) && void 0 !== UU ? UU : innerWidth > innerHeight ? "landscape" : "portrait"
+     function hB(HH) {
+       return void 0 === HH || null === HH
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L533-L568` → after: `L1124-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1124-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1124-L1127) · [Before (L533-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L533-L568)

```diff
-     const QU = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
-       isHeld() {
-         return this.holding && yU() !== this.heldOrientation && (this.holding = !1), this.holding
-       }
-       hold() {
-         this.heldOrientation = yU(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, cU.Wa)(new Error("Game view size held for 60 s"))
-         }), 6e4)
-       }
-       release() {
-         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
- ... (20 more removed lines; see GitHub link above)
+ 
+     function tB(HH, BH) {
+       const LH = BH(2 * HH.length, 2) >>> 0;
+       return (null !== pH && 0 !== pH.byteLength || (pH = new Uint16Array(vB.memory.buffer)), pH).set(HH, LH / 2), PB = HH.length, LH
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L570-L575` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1129) · [Before (L570-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L570-L575)

```diff
-   },
-   37215: (UU, XU, zU) => {
-     const cU = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
-     (0, zU(1193).e)(cU)
-   },
-   37545: (UU, XU, zU) => {
+ 
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L577` → after: `L1131-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1131-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1131-L1132) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L577)

```diff
-       return UU.size === XU.size && [...UU].every((UU => XU.has(UU)))
+       const LH = BH(4 * HH.length, 4) >>> 0;
+       return HB().set(HH, LH / 4), PB = HH.length, LH
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L617-L621` → after: `L1136-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1136-L1137) · [Before (L617-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L617-L621)

```diff
-       const {
-         numLines: zU,
-         charsPerLine: yU
-       } = cU[XU];
-       return GU(UU, zU, yU, !1)
+       const LH = BH(1 * HH.length, 1) >>> 0;
+       return LB().set(HH, LH / 1), PB = HH.length, LH
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L628-L631` → after: `L1141-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1141-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1141-L1142) · [Before (L628-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L628-L631)

```diff
-       return {
-         width: Math.min(UU, FU) - 2 * AU,
-         height: Math.min(XU, FU) - 2 * AU
-       }
+       const LH = BH(8 * HH.length, 8) >>> 0;
+       return sH().set(HH, LH / 8), PB = HH.length, LH
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L635-L642` → after: `L1146-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1146-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1146-L1149) · [Before (L635-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L635-L642)

```diff
-       const yU = oU(UU, XU),
-         {
-           numLines: AU,
-           charsPerLine: FU
-         } = cU[zU];
-       return {
-         numLines: Math.max(1, Math.floor(AU / QU * yU.height)),
-         charsPerLine: Math.max(1, Math.floor(FU * yU.width))
+       if (void 0 === LH) {
+         const LH = WB.encode(HH),
+           AH = BH(LH.length, 1) >>> 0;
+         return LB().subarray(AH, AH + LH.length).set(LH), PB = LH.length, AH
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L656` → after: `L1169-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1169-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1169-L1172) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L656)

```diff
-       return UU.slice(0, YU)
+       const BH = AB(HH);
+       return function(HH) {
+         HH < 1028 || (rB[HH] = SB, SB = HH)
+       }(HH), BH
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L658-L660` → after: `L1174-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1174-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1174-L1189) · [Before (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L658-L660)

```diff
-     const IU = 512e3,
-       pU = 64,
-       aU = IU;
+     let YB = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
+     });
+     YB.decode();
+     const uB = 2146435072;
+     let QB = 0;
+     const WB = new TextEncoder;
+     "encodeInto" in WB || (WB.encodeInto = function(HH, BH) {
+       const LH = WB.encode(HH);
+       return BH.set(LH), {
+         read: HH.length,
+         written: LH.length
+       }
+     });
+     let MB, xB, vB, PB = 0;
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L663-L665` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1192) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L663-L665)

```diff
-       const zU = Math.max(0, aU - XU),
-         cU = Math.min(IU, zU);
-       return UU.slice(0, cU)
+       return xB = HH, vB = HH.exports, MB = BH, aH = null, JH = null, pH = null, yH = null, BB = null, vB.hACG(), vB
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L685` → after: `L1195-L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1195-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1195-L1210) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L685)

```diff
-     function kU(UU, XU) {
+     function UB(HH) {
+       if (void 0 !== vB) return vB;
+       void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
+         module: HH
+       } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const BH = KH();
+       HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
+       return TB(new WebAssembly.Instance(HH, BH), HH)
+     }
+     async function VB(HH) {
+       if (void 0 !== vB) return vB;
+       void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
+         module_or_path: HH
+       } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const BH = KH();
+       ("string" === typeof HH || "function" === typeof Request && HH instanceof Request || "function" === typeof URL && HH instanceof URL) && (HH = fetch(HH));
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L687-L699` → after: `L1212-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1212-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1212-L1238) · [Before (L687-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L687-L699)

```diff
-         numLines: zU,
-         charsPerLine: cU
-       } = gU[XU];
-       return GU(UU, zU, cU, !1)
-     }
- 
-     function GU(UU, XU, zU, cU, yU) {
-       (yU || cU) && (UU = UU.slice(0, null !== yU && void 0 !== yU ? yU : XU * zU));
-       const QU = UU.split("\n");
-       if (QU.length > XU && QU.splice(XU, QU.length - XU), !cU)
-         for (let AU = 0; AU < QU.length; AU++) {
-           const UU = QU[AU];
-           UU.length > zU && (QU[AU] = UU.substring(0, zU), QU.length < XU && QU.splice(AU + 1, 0, UU.substring(zU)))
+         instance: LH,
+         module: AH
+       } = await async function(HH, BH) {
+         if ("function" === typeof Response && HH instanceof Response) {
+           if (!HH.ok) throw new Error(`failed to fetch Wasm: ${HH.status} ${HH.statusText} fetching '${HH.url}'`);
+           if ("function" === typeof WebAssembly.instantiateStreaming) try {
+             return await WebAssembly.instantiateStreaming(HH, BH)
+           } catch (LH) {
+             if (! function(HH) {
+                 switch (HH) {
+                   case "basic":
+                   case "cors":
+                   case "default":
+                     return !0
+                 }
+                 return !1
+ ... (11 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L701` → after: `L1240-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1240-L1241) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L701)

```diff
-       return QU.join("\n")
+       }(await HH, BH);
+       return TB(LH, AH)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L704` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1244) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L704)

```diff
-   34875: (UU, XU, zU) => {
+   37069: (HH, BH, LH) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L707-L711` → after: `L1247-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1247-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1247-L1248) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L707-L711)

```diff
-       g: () => NU,
-       k: () => YU,
-       o: () => AU,
-       q: () => DU,
-       s: () => oU
+       e: () => tH,
+       f: () => zH
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L713-L795` → after: `L1250-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1250-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1250-L1252) · [Before (L713-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L713-L795)

```diff
-     var cU = zU(344);
-     const yU = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       QU = {
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
+     var AH = LH(37078),
+       rH = LH(3168),
+       SH = LH(37083);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L797-L846` → after: `L1254-L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1254-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1254-L1257) · [Before (L797-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L797-L846)

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
+       name: rH.e,
+       url: () => new LH.U(LH(37087)),
+       init: AH.default,
+       bindings: AH
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L849-L850` → after: `L1260-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1260-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1260-L1264) · [Before (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L849-L850)

```diff
-     function oU(UU) {
-       return yU.includes(UU)
+     function tH() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH,
+         BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH,
+         LH = arguments.length > 2 ? arguments[2] : void 0;
+       return (0, SH.l)(HH, BH, LH)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L854-L855` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1268) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L854-L855)

```diff
-       var XU;
-       return !0 === (null === UU || void 0 === UU || null === (XU = UU.customAttributes) || void 0 === XU ? void 0 : XU.cannotEnchant)
+       return (0, rH.M)((() => HH), AH, hH)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L857` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1270-L1271) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L857)

```diff
- 
+   },
+   37053: (HH, BH, LH) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L859-L862` → after: `L1273-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1273-L1275) · [Before (L859-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L859-L862)

```diff
-       const {
-         max: zU
-       } = FU[UU].at(-1);
-       return XU <= zU
+       return new Error(`${HH}: ${BH instanceof Error?`${BH.name}: ${BH.message}`:String(BH)}`, {
+         cause: BH
+       })
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L865-L892` → after: `L1290-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1290-L1291) · [Before (L865-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L865-L892)

```diff
-     function YU(UU) {
-       const XU = Math.sin(UU / 80),
-         zU = UU => {
-           if (UU <= 0) return 0;
-           if (UU > 1) return 1;
-           let XU = 0;
-           const zU = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let cU = 0; cU < zU.length; cU++) {
-             XU += (cU % 2 === 0 ? 1 : -1) * zU[cU] * Math.pow(UU, 2 + cU) / (2 + cU)
-           }
-           return 72 * XU
-         },
-         cU = .3 - .78 * XU,
-         yU = .5 - .78 * XU,
-         QU = .6 - .7 * XU,
-         AU = .8 - .6 * XU;
- ... (12 more removed lines; see GitHub link above)
+     function hH() {
+       return new URL(new LH.U(LH(37061)).href, globalThis.location?.href).href
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L896-L899` → after: `L1312-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1312-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1312-L1329) · [Before (L896-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L896-L899)

```diff
-       const {
-         min: zU,
-         max: yU
-       } = FU[UU][XU], QU = cU.d.sampleUniformIntDistribution(zU, yU, "includeMax");
+       return SH(HH, BH) ? `trap=alloc_failed ${BH} bytes` : `trap=${HH}`
+     }
+ 
+     function SH(HH, BH) {
+       return "unreachable" === HH && BH > 0
+     }
+ 
+     function hH(HH, BH, LH) {
+       const AH = function(HH) {
+         return HH instanceof WebAssembly.RuntimeError ? /unreachable/i.test(HH.message) ? "unreachable" : /out of bounds/i.test(HH.message) ? "out_of_bounds" : "runtime_error" : (HH instanceof RangeError || HH instanceof Error && "InternalError" === HH.name) && /call stack|recurs … [truncated]
+       }(HH);
+       if ("unreachable" !== AH) return {
+         kind: AH,
+         panic: null,
+         refusedBytes: 0
+       };
+ ... (2 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L901-L902` → after: `L1331-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/213.js#L1331-L1333) · [Before (L901-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/213.js#L901-L902)

```diff
-         ...YU(QU),
-         level: QU
+         kind: AH,
+         panic: SH > 0 ? null : rH,
+         refusedBytes: SH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L7)

```diff
-   37342: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => aU,
-       g: () => RU
+   34856: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ALL_DEV_TOOLS: () => hH,
+       coreDevTools: () => CH,
+       devTools: () => zH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L9-L23` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L10-L14) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L23)

```diff
-     zU(34837);
-     var cU = zU(61),
-       yU = zU(1492),
-       QU = zU(2005),
-       AU = zU(2047),
-       FU = zU(27),
-       oU = zU(2616),
-       DU = zU(37345),
-       EU = zU(37354),
-       YU = zU(34824),
-       NU = zU(34835),
-       IU = zU(34853),
-       pU = zU(1305);
-     const aU = (0, cU.memo)((function() {
-       var UU;
+     var AH = LH(642),
+       rH = LH(1253),
+       SH = LH(34861);
+     const hH = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function tH() {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L25-L61` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L16-L18) · [Before (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L25-L61)

```diff
-         isTouchScreen: XU,
-         clientEscMenuOptions: zU,
-         scriptedCameraFacing: QU,
-         crosshairShownOverride: aU,
-         crosshairGameView: gU
-       } = (0, FU.q)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), kU = (0, oU.f)("gunshotOrigin"), GU = (0, cU.useRef)(null), BU = (0, cU.useRef)(!1), [ZU, PU] = (0, cU.useState)(tU);
-       (0, yU.f)("cameraZoomSet", PU), (0, cU.useEffect)((() => {
-         PU(tU())
-       }), []);
-       const WU = (0, AU.i)("heldItemAim"),
-         LU = WU.gun,
-         eU = (0, IU.f)(),
-         CU = (0, cU.useRef)(eU);
-       CU.current = eU;
-       const [wU, qU] = (0, cU.useState)(!1);
-       (0, cU.useEffect)((() => (0, EU.d)("crosshairAccuracy", RU)), []), (0, yU.f)("mouseState", (UU => {
- ... (21 more removed lines; see GitHub link above)
+         noaDevTools: HH
+       } = await LH.e(264).then((() => LH(42369)));
+       return HH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L63-L73` → after: `L20-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L20-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L20-L40) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L63-L73)

```diff
-     const gU = [{
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }],
-       kU = {
-         current: null
+     const zH = new class {
+         constructor() {
+           this.loadHost = tH, this.tools = hH
+         }
+         setHost(HH) {
+           this.tools = null === HH ? hH : HH.tools, this.loadHost = null === HH ? tH : async () => HH
+         }
+         supports(HH) {
+           return this.tools.has(HH)
+         }
+         async downloadScene(HH, BH) {
+           const LH = await this.loadHost();
+           await LH.downloadScene(HH, BH)
+         }
+         async setAmbientLightIntensity(HH) {
+           const BH = await this.loadHost();
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L76` → after: `L43-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L43-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L43-L52) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L76)

```diff
-         current: null
+         tools: SH.c,
+         downloadScene: async () => {
+           throw new Error("This client can't download the scene")
+         },
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
+         },
+         capturePhoto: async () => {
+           throw new Error("No game is drawing yet")
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L78-L1088` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/214.js#L54-L57) · [Before (L78-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/214.js#L78-L1088)

```diff
-     let BU = 0,
-       ZU = 0;
- 
-     function RU(UU) {
-       ZU = UU, gU[0].current || kU.current || GU.current ? WU(UU) : BU = UU
-     }
- 
-     function PU(UU) {
-       return ((0, DU.e)(UU) - (0, DU.e)(0)) * window.innerHeight / 100
-     }
- 
-     function WU(UU) {
-       var XU;
-       if (null === (XU = GU.current) || void 0 === XU || XU.call(GU, PU(UU)), gU[0].current) {
-         const XU = `${(0,DU.e)(UU)}vh`;
-         gU[0].current.style.transform = `translateX(calc(0px - ${XU}))`, gU[1].current.style.transform = `translateX(calc(0px + ${XU}))`, gU[2].current.style.transform = `translateY(calc(0px - ${XU}))`, gU[3].current.style.transform = `translateY(calc(0px + ${XU}))`
- ... (995 more removed lines; see GitHub link above)
+     AH.K && zH.setHost(CH), (0, rH.C)((() => {
+       zH.setHost(CH)
+     }))
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L4)

```diff
-   34884: (UU, XU, zU) => {
+   37257: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L6-L29` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L6-L7) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => cU,
-       armourReductionOf: () => VU,
-       clipSizeOf: () => vU,
-       creativeAltNames: () => AX,
-       creativeCategoryOf: () => TU,
-       creativeItemCategories: () => FU,
-       creativeItemCategoryIcons: () => oU,
-       creativeItemIds: () => bU,
-       descriptionOf: () => iU,
-       displayNameOf: () => fU,
-       dropsNothing: () => mU,
-       enchantmentPerksOf: () => jU,
-       gunTypeOf: () => nU,
-       harvestsNullLevelOf: () => lU,
-       isDevOnlyItem: () => zX,
-       itemIsDisabled: () => yX,
- ... (8 more removed lines; see GitHub link above)
+       isMoreOptionsInFooter: () => RH,
+       showOnboardingPopup: () => jH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L31-L51` → after: `L9-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L9-L28) · [Before (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L31-L51)

```diff
-     const cU = 8574,
-       yU = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       QU = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       AU = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       FU = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       oU = {
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
- ... (5 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1123),
+       SH = LH(1352),
+       hH = LH(1455),
+       tH = LH(1056),
+       zH = LH(4716),
+       CH = LH(1565),
+       EH = LH(317),
+       XH = LH(1556),
+       GH = LH(2339),
+       YH = LH(1038),
+       uH = LH.n(YH),
+       QH = LH(1070),
+       WH = LH(37264),
+       MH = LH(2530),
+       xH = LH(3879),
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L54-L68` → after: `L31-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L31-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L31-L49) · [Before (L54-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L54-L68)

```diff
-       let XU = null;
-       return zU => {
-         var cU;
-         return XU ??= (0, EU.y)(UU, 10114), null !== (cU = XU[zU]) && void 0 !== cU ? cU : 0
-       }
-     }
- 
-     function IU(UU, XU, zU) {
-       const cU = NU(UU);
-       let yU = null,
-         QU = [];
-       return UU => {
-         const AU = cU(UU);
-         if (0 !== AU) return null === yU && (yU = XU.split(EU.r), QU = new Array(yU.length)), QU[AU - 1] ??= zU(yU[AU - 1])
-       }
+       let {
+         open: BH,
+         onToggle: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, rH.B)();
+       return (0, TH.jsxs)("button", {
+         type: "button",
+         className: "OnboardingMoreOptions",
+         "aria-expanded": BH,
+         "aria-controls": BH ? UH : void 0,
+         onClick: () => {
+           BH || (0, zH.i)("more"), LH()
+         },
+         children: [AH("homePage:onboardingMoreOptions"), (0, TH.jsx)(PH.c, {
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L72` → after: `L57-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L57-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L57-L67) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L72)

```diff
-       return UU
+       return XH.b.default.colourGroups[HH].colours.map(((HH, BH) => {
+         let {
+           rbg: LH,
+           order: AH
+         } = HH;
+         return {
+           rbg: LH,
+           order: AH,
+           index: BH
+         }
+       })).sort(((HH, BH) => HH.order - BH.order))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L75-L76` → after: `L72-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L72-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L72-L76) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L75-L76)

```diff
-     function aU(UU) {
-       return UU === EU.g ? null : (0, EU.A)(UU)
+     function oH(HH, BH) {
+       var LH;
+       if (void 0 === BH || "default" !== (null === (LH = (0, GH.h)(HH, BH)) || void 0 === LH ? void 0 : LH.cosmeticPack)) return null;
+       const AH = (0, GH.f)(BH);
+       return AH && [AH[0], Number(AH[1])]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L85-L108` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L80) · [Before (L85-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L85-L108)

```diff
-       BU !== (0, DU.i)() && (BU = (0, DU.i)(), kU.clear(), GU.clear());
-       let cU = UU.get(XU);
-       return void 0 === cU && (cU = zU(), void 0 !== cU && UU.set(XU, cU)), cU
-     }
-     const RU = IU("_$bN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$O&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       PU = IU("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       WU = IU(".G^+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       dU = IU("&aO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$HD$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       LU = IU(">G^+#%#)$)%9$", "none|sniper", pU),
-       eU = IU("*G^+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", pU),
-       CU = NU("]%]V+#c&M.$4E2$44$44$44$49$4/$4/$4/$"),
-       wU = NU("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$V$,$"),
-       qU = IU("$TO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($]$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (UU => "" === UU ? null : Number(UU))),
-       OU = IU("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       SU = IU(",bN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($Y$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
-       rU = IU(",$#0#$-#-$&#%2#%(#$$$$'%B$##%b$&)$$#$#%A&$&#)%,$%#$#%$&%###%:#$$$$##$%)$%%#)$1).)$$#)$))%$#)$%$$&)B%&#)#&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%$$'$&#$$%%$/)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))&)$#)$%%#$,#%2%%($$$*$$#%#$#)$1)$1)$1)$1)$1)$1)$))$))$) … [truncated]
- ... (8 more removed lines; see GitHub link above)
+       return `${HH}_${BH}_${LH}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L112-L116` → after: `L84-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L84-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L84-L126) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L112-L116)

```diff
-       const XU = gU(UU);
-       return null !== XU ? XU : ZU(GU, UU, (() => {
-         var XU;
-         return null !== (XU = (0, EU.B)(fU(UU))) && void 0 !== XU ? XU : void 0
-       }))
+       let {
+         label: BH,
+         colours: LH,
+         picked: AH,
+         onPick: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, rH.B)();
+       return (0, TH.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, TH.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: BH
+         }), (0, TH.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L120` → after: `L130-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L130-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L130-L269) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L120)

```diff
-       return RU(UU)
+       let {
+         moreOptions: BH,
+         onToggleMoreOptions: LH,
+         moreOptionsBelowPresets: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, rH.B)(), {
+         userContext: tH,
+         isUserContextUpdating: CH
+       } = (0, vH.e)(), [, XH] = (0, AH.useReducer)((HH => HH + 1), 0), GH = (0, AH.useRef)({}), YH = (0, AH.useRef)(null), PH = (0, AH.useRef)({}), bH = (0, xH.c)(), lH = {
+         ...tH.getPlayerCosmetics(),
+         ...YH.current
+       }, KH = (0, AH.useRef)(null);
+       (0, AH.useEffect)((() => {
+         var HH;
+ ... (124 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L124` → after: `L278-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L278-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L278-L430) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L124)

```diff
-       return PU(UU)
+       const {
+         t: BH
+       } = (0, rH.B)(), {
+         userContext: LH,
+         isUserContextUpdating: SH
+       } = (0, vH.e)(), tH = SH ? null : LH.getPlayerName(), CH = (0, AH.useRef)(null), [EH, XH] = (0, AH.useState)((() => null === tH ? (0, KH.c)() : null)), [GH, YH] = (0, AH.useState)(null), [uH, QH] = (0, AH.useState)(!1), WH = (0, AH.useRef)("hX"), MH = (0, xH.c)(), UH = (0,  … [truncated]
+         CH.current && (CH.current.value = HH), XH(HH)
+       }, oH = (0, AH.useRef)(!1);
+       (0, AH.useEffect)((() => {
+         var HH, BH;
+         !uH && oH.current && (oH.current = !1, null === (HH = CH.current) || void 0 === HH || HH.focus(), null === (BH = CH.current) || void 0 === BH || BH.select())
+       }), [uH]);
+       const IH = (0, AH.useRef)(null);
+       (0, AH.useEffect)((() => {
+         var HH;
+         null !== GH && (null === (HH = IH.current) || void 0 === HH || HH.scrollIntoView({
+ ... (137 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L128` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L434) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L128)

```diff
-       return WU(UU)
+       return HH < 500
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L131-L132` → after: `L437-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L437-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L437-L461) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L131-L132)

```diff
-     function VU(UU) {
-       return dU(UU)
+     function jH() {
+       const HH = {
+           finished: !1
+         },
+         BH = {
+           press: null
+         };
+       return SH.NotificationProvider.showCustomPopup({
+         body: LH => (0, TH.jsx)(nH, {
+           onFinish: () => {
+             (0, zH.g)(), HH.finished = !0, LH()
+           },
+           doneRef: BH
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         disableExitButton: !0,
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L136` → after: `L465-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L465-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L465-L506) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L136)

```diff
-       return LU(UU)
+       let {
+         onFinish: BH,
+         doneRef: LH
+       } = HH;
+       const {
+         t: SH
+       } = (0, rH.B)(), CH = NH(BH), EH = CH.ready && !CH.busy ? CH.submit : null;
+       (0, AH.useEffect)((() => (LH.press = EH, () => {
+         LH.press = null
+       })));
+       const [XH, GH] = (0, AH.useState)(!1), YH = (0, tH.n)(((HH, BH) => RH(BH))), uH = () => {
+         GH(!XH)
+       };
+       return (0, AH.useEffect)((() => {
+         (0, zH.p)()
+       }), []), (0, TH.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L139-L140` → after: `L547-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L547-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L547-L554) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L139-L140)

```diff
-     function nU(UU) {
-       return eU(UU)
+     function hH(HH, BH) {
+       for (const [LH, AH] of BH) HH.setPlayerCosmetics(LH, AH);
+       if (null === AH.gameBridge.latest("connectedGame").websocketUrl) SH.save(HH, BH);
+       else
+         for (const [LH, rH] of BH) AH.gameBridge.send("updateMyCosmetic", {
+           rh: LH,
+           Sh: rH
+         })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L144` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L577) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L144)

```diff
-       return 0 !== wU(UU)
+       return zH[HH]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L148` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L581) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L148)

```diff
-       return qU(UU)
+       return (0, tH.e)(HH) ? "outdated" : HH instanceof AH.e ? 429 === HH.httpCode ? "busy" : "server" : "offline"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L151-L152` → after: `L584-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L584-L590) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L151-L152)

```diff
-     function xU(UU) {
-       return 0 !== CU(UU)
+     function XH(HH, BH, LH) {
+       return (0, hH.postJsonWithMetricsCookiesAndJsonResponse)(`${SH.clientSideServerUrls.indexUrl}${BH}`, LH, {
+         retries: 3
+       }, HH.getMetricsCookies()).catch((HH => (console.error("Bad response from the server when trying to change name:", BH, HH), {
+         outcome: "failed",
+         failure: EH(HH)
+       })))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L156-L159` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L594) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L156-L159)

```diff
-       const XU = OU(UU);
-       if (void 0 === XU || XU.startsWith(EU.q)) return null === XU || void 0 === XU ? void 0 : XU.slice(EU.q.length);
-       const zU = (0, DU.f)(UU);
-       return void 0 === zU ? void 0 : `${zU}${EU.r}${XU}`
+       return "outcome" in HH && "failed" === HH.outcome
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L163-L174` → after: `L598-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L598-L600) · [Before (L163-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L163-L174)

```diff
-       var XU;
-       return null !== (XU = SU(UU)) && void 0 !== XU ? XU : YU
-     }
-     let KU = null;
- 
-     function bU() {
-       if (null === KU) {
-         const UU = [],
-           XU = new EU.t(yU);
-         let zU = 0;
-         for (; !XU.done;) zU += (0, EU.J)(XU.next()), UU.push(zU);
-         KU = Object.freeze(UU)
+       return console.error("Error when trying to get with new name from DB", HH), {
+         outcome: "refused",
+         message: HH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L178-L185` → after: `L603-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L603-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L603-L608) · [Before (L178-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L178-L185)

```diff
- 
-     function TU(UU) {
-       return rU(UU)
-     }
- 
-     function hU(UU, XU) {
-       var zU;
-       return 0 !== ((null !== (zU = uU(UU)) && void 0 !== zU ? zU : 0) & XU)
+     async function uH(HH) {
+       const BH = await XH(HH, "/index/name/random", {});
+       return GH(BH) ? BH : "err" in BH ? YH(BH.err) : (HH.setPlayerName(BH.name), {
+         outcome: "changed",
+         name: BH.name
+       })
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L187-L189` → after: `L610-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L610-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L610-L619) · [Before (L187-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L187-L189)

```diff
- 
-     function UX(UU) {
-       return hU(UU, EU.d.OnlyInSearch)
+     async function QH(HH, BH) {
+       const LH = await XH(HH, "/index/name/update", {
+         name: BH
+       });
+       return GH(LH) ? LH : "err" in LH ? YH(LH.err) : LH.nameExists ? {
+         outcome: "taken"
+       } : (HH.setPlayerName(BH), {
+         outcome: "changed",
+         name: BH
+       })
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L192-L207` → after: `L622-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L622-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L622-L626) · [Before (L192-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L192-L207)

```diff
-     function XX(UU) {
-       return hU(UU, EU.d.OnlyInCategory)
-     }
- 
-     function zX(UU) {
-       return hU(UU, EU.d.DevOnly)
-     }
- 
-     function cX(UU) {
-       return !hU(UU, EU.d.HiddenByDefault) && void 0
-     }
- 
-     function yX(UU, XU, zU, cU) {
-       var yU;
-       const QU = null !== (yU = uU(UU)) && void 0 !== yU ? yU : 0;
-       return 0 !== (QU & EU.d.DisabledInPublicLobbies) && XU || 0 !== (QU & EU.d.DisabledInProduction) && !0 || !zU || !cU && 0 !== (QU & EU.d.DevOnly)
+     function WH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const AH = 1 === BH ? 1 : 10 ** (BH - 1),
+         SH = String(AH + Math.floor(LH() * (10 ** BH - AH)));
+       return `${HH.slice(0,rH.e-BH)}${SH}`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L209-L223` → after: `L628-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L628-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/215.js#L628-L638) · [Before (L209-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/215.js#L209-L223)

```diff
-     let QX = null;
- 
-     function AX() {
-       if (null === QX) {
-         const UU = AU.split(EU.r),
-           XU = new Map,
-           zU = new EU.t(QU);
-         let cU = 0,
-           yU = 0;
-         for (; !zU.done;) {
-           cU += (0, EU.J)(zU.next());
-           const QU = zU.next();
-           XU.set(cU, Object.freeze(UU.slice(yU, yU + QU))), yU += QU
-         }
-         QX = XU
+     const MH = [1, 2, 3, 4];
+     async function xH(HH, BH) {
+       const LH = await QH(HH, BH);
+       if ("taken" !== LH.outcome) return LH;
+       for (const AH of MH) {
+         const LH = WH(BH, AH),
+           rH = await QH(HH, LH);
+         if ("taken" !== rH.outcome) return rH
+       }
+       return {
+         outcome: "taken"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L614) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/216.js#L4)

```diff
-   44209: (UU, XU, zU) => {
+   34915: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => iH,
+       i: () => IB,
+       k: () => oB,
+       m: () => lB,
+       n: () => uB,
+       q: () => WB,
+       s: () => MB,
+       v: () => vB,
+       x: () => fB,
+       z: () => xB
+     });
+     var AH = LH(241),
+       rH = LH(15),
+       SH = LH(81),
+ ... (595 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L8-L9` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/216.js#L618-L619) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/216.js#L8-L9)

```diff
-     var cU = zU(61),
-       yU = zU(3021);
+     var AH = LH(81),
+       rH = LH(114);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L12-L76` → after: `L622-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L622-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/216.js#L622-L635) · [Before (L12-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/216.js#L12-L76)

```diff
-       const QU = (0, cU.useRef)(null),
-         {
-           width: AU,
-           height: FU
-         } = (0, yU.d)(UU);
-       (0, cU.useEffect)((() => {
-         const zU = XU(UU.current);
-         return QU.current = zU, () => {
-           zU.close(), QU.current = null
-         }
-       }), [UU, XU]), (0, cU.useEffect)((() => {
-         AU <= 0 || FU <= 0 || QU.current.resize(AU, FU)
-       }), [AU, FU]), (0, cU.useEffect)((() => {
-         QU.current.show(zU)
-       }), [zU])
-     }
- ... (49 more removed lines; see GitHub link above)
+       if ("webgpu" === HH) return LH ? ((0, AH.seedGpuVendor)(LH), {
+         vendor: LH,
+         renderer: ""
+       }) : null;
+       try {
+         const LH = "webgl" === HH ? BH.getContext("webgl2") : BH.getContext("webgl");
+         "webgl" === HH && LH && (0, rH.F)(LH);
+         const SH = null === LH || void 0 === LH ? void 0 : LH.getExtension("WEBGL_debug_renderer_info");
+         if (LH && SH) {
+           const HH = String(LH.getParameter(SH.UNMASKED_VENDOR_WEBGL)),
+             BH = String(LH.getParameter(SH.UNMASKED_RENDERER_WEBGL));
+           return (0, AH.seedGpuVendor)(HH), (0, rH.L)(HH, BH), {
+             vendor: HH,
+             renderer: BH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L79-L332` → after: `L638-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L638-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/216.js#L638-L641) · [Before (L79-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/216.js#L79-L332)

```diff
-       }
-     }
-     const FU = AU([0, 0, 0], [0, 0, 0], .07),
-       oU = (0, yU.d)((0, cU.g)(FU), "mobIdle"),
-       DU = AU([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       EU = AU([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       YU = (0, yU.d)((0, cU.g)(DU), "gunReady"),
-       NU = (0, yU.d)((0, cU.g)(EU), "gunAimed")
-   },
-   39453: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU,
-       g: () => QU
-     });
-     const cU = new WeakMap;
- 
- ... (238 more removed lines; see GitHub link above)
+         LH && (0, rH.L)(String(LH.getParameter(LH.VENDOR)), String(LH.getParameter(LH.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L4-L6)

```diff
-   44200: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       MobPreview: () => YU
+   37821: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH,
+       i: () => SH,
+       k: () => tH,
+       o: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L8-L14` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L11-L17) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L8-L14)

```diff
-     var cU = zU(61),
-       yU = zU(1106),
-       QU = zU.n(yU),
-       AU = zU(44209),
-       FU = zU(34900),
-       oU = zU(44212),
-       DU = zU(1305);
+     var AH = LH(1807);
+     const rH = ".bloxdreplay",
+       SH = "application/octet-stream";
+ 
+     function hH() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${rH}`
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L17-L36` → after: `L20-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L20-L24) · [Before (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L17-L36)

```diff
-       return FU.h.openMob(UU)
-     }
-     const YU = (0, cU.memo)((function(UU) {
-       let {
-         mobType: XU,
-         variation: zU = null,
-         animation: yU = oU.j,
-         className: FU
-       } = UU;
-       const YU = (0, cU.useRef)(null),
-         NU = (0, cU.useMemo)((() => ({
-           mobType: XU,
-           variation: zU,
-           animation: yU
-         })), [XU, zU, yU]);
-       return (0, AU.b)(YU, EU, NU), (0, DU.jsx)("div", {
- ... (4 more removed lines; see GitHub link above)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH();
+       return (0, AH.e)(new Blob([HH], {
+         type: SH
+       }), BH), BH
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L38` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L26) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L38)

```diff
-   44209: (UU, XU, zU) => {
+   37807: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L40` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L28-L29) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L40)

```diff
-       b: () => QU
+       e: () => hH,
+       h: () => SH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L42-L43` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L31-L40) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L42-L43)

```diff
-     var cU = zU(61),
-       yU = zU(3021);
+     var AH = LH(37809);
+     let rH = {
+       open: async () => {
+         throw new Error(AH.e.viewerLoadFailed.text)
+       },
+       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
+       encode: async () => null,
+       fileHandle: () => null,
+       markSaved: () => {}
+     };
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L45-L54` → after: `L42-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L42-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L42-L147) · [Before (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L45-L54)

```diff
-     function QU(UU, XU, zU) {
-       const QU = (0, cU.useRef)(null),
-         {
-           width: AU,
-           height: FU
-         } = (0, yU.d)(UU);
-       (0, cU.useEffect)((() => {
-         const zU = XU(UU.current);
-         return QU.current = zU, () => {
-           zU.close(), QU.current = null
+     function SH(HH) {
+       rH = HH
+     }
+ 
+     function hH() {
+       return rH
+     }
+   },
+   37809: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH,
+       i: () => CH,
+       j: () => zH
+     });
+     var AH = LH(18);
+     const rH = 1500,
+ ... (90 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L56-L60` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L149-L163) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L56-L60)

```diff
-       }), [UU, XU]), (0, cU.useEffect)((() => {
-         AU <= 0 || FU <= 0 || QU.current.resize(AU, FU)
-       }), [AU, FU]), (0, cU.useEffect)((() => {
-         QU.current.show(zU)
-       }), [zU])
+       },
+       tH = new Set(Object.values(hH).filter((HH => "Error" === HH.type)).map((HH => HH.text)));
+ 
+     function zH(HH) {
+       return HH instanceof Error && tH.has(HH.message) ? HH.message : void 0
+     }
+ 
+     function CH(HH) {
+       var BH;
+       const LH = null !== (BH = HH.timeoutMs) && void 0 !== BH ? BH : "Error" === HH.type ? rH : SH;
+       AH.k.AX("showBottomMessage", {
+         message: HH.text,
+         timeoutLength: LH,
+         type: HH.type
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L63` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L166) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L63)

```diff
-   44212: (UU, XU, zU) => {
+   37373: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L66-L67` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L169) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L66-L67)

```diff
-       f: () => YU,
-       j: () => oU
+       e: () => SH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L69-L70` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L171) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L69-L70)

```diff
-     var cU = zU(37876),
-       yU = zU(39453);
+     let AH = !1;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L72-L80` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L173-L174) · [Before (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L72-L80)

```diff
-     function QU(UU, XU) {
-       let [zU, cU, yU] = UU;
-       return [0, .5, 1].map((UU => ({
-         timeFraction: UU,
-         rotation: {
-           GX: "catmull-rom-spline",
-           point: [zU, cU, yU + (.5 === UU ? XU : 0)]
-         }
-       })))
+     function rH() {
+       return AH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L83-L113` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L177-L178) · [Before (L83-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L83-L113)

```diff
-     function AU(UU, XU, zU) {
-       return {
-         pX: 3200,
-         loop: !0,
-         tX: {
-           Root: {
-             timeline: [0, .5, 1].map((UU => ({
-               timeFraction: UU,
-               position: {
-                 GX: "catmull-rom-spline",
-                 point: [0, .5 === UU ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((UU => ({
- ... (15 more removed lines; see GitHub link above)
+     function SH(HH) {
+       return AH !== HH && (AH = HH, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L122` → after: `L181-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L181-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L181-L194) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L122)

```diff
-   34904: (UU, XU, zU) => {
+   37659: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH,
+       d: () => AH
+     });
+     const AH = 3,
+       rH = {
+         recording: !1,
+         clipping: !1,
+         hasClipBuffer: !1,
+         seconds: 0
+       }
+   },
+   37672: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L125-L126` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L199-L207) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L125-L126)

```diff
-       h: () => yU,
-       i: () => EU
+       g: () => vH,
+       i: () => UH,
+       m: () => TH,
+       n: () => WH,
+       p: () => uH,
+       r: () => xH,
+       v: () => OH,
+       y: () => VH,
+       z: () => bH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L128` → after: `L209-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L209-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L209-L222) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L128)

```diff
-     var cU = zU(1613);
+     var AH = LH(1396),
+       rH = LH(37678),
+       SH = LH(18);
+     const hH = "clientGameCraftableMarksChanged",
+       tH = "clientGameCraftableLocksChanged",
+       zH = "clientGameCraftableOrderChanged",
+       CH = "selectCraftable";
+     let EH = new Set,
+       XH = new Map,
+       GH = new Map;
+ 
+     function YH() {
+       return EH
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L131-L135` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L225-L226) · [Before (L131-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L131-L135)

```diff
-       var XU;
-       return {
-         ...AU.store,
-         yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
-       }
+       const BH = new Set(HH);
+       (0, rH.e)(BH, EH) || (EH = BH, SH.k.AX(hH, EH))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L137-L149` → after: `L228-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L228-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L228-L252) · [Before (L137-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L137-L149)

```diff
-     const QU = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       AU = {
-         player: QU,
-         store: {
-           ...QU,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
+ 
+     function QH() {
+       return XH
+     }
+ 
+     function WH(HH) {
+       0 === HH.size && 0 === XH.size || (XH = new Map(HH), SH.k.AX(tH, XH))
+     }
+ 
+     function MH() {
+       return GH
+     }
+ 
+     function xH(HH) {
+       HH.length === GH.size && HH.every(((HH, BH) => GH.get(HH) === BH)) || (GH = new Map(HH.map(((HH, BH) => [HH, BH]))), SH.k.AX(zH, GH))
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L153-L155` → after: `L307-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L307-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L307-L354) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L153-L155)

```diff
-       UU instanceof Promise ? UU.then(XU).catch((UU => {
-         console.error("Couldn't open the preview", UU)
-       })) : XU(UU)
+       return AH(HH, BH)
+     }
+   },
+   37442: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => hH,
+       e: () => uH,
+       i: () => rH,
+       k: () => tH,
+       m: () => CH
+     });
+     var AH = LH(37450);
+     const rH = "data-camera-fade",
+       SH = "data-letterbox-bar",
+       hH = "data-camera-fade-layer";
+ 
+ ... (32 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L159-L161` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L358) · [Before (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L159-L161)

```diff
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, FU(UU, (UU => {
-           this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
-         }))
+         this.getContainer = HH, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L163` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L360) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L163)

```diff
-       show(UU) {
+       setFade(HH, BH) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L165` → after: `L362-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L362-L368) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L165)

```diff
-         this.view = UU, null === (XU = this.opened) || void 0 === XU || XU.show(UU)
+         if (!this.elements && BH <= 0) return;
+         const {
+           fade: AH
+         } = this.getElements(), rH = null !== (LH = zH) && void 0 !== LH ? LH : this.getContainer();
+         AH.parentElement !== rH && rH.appendChild(AH);
+         const SH = this.markHost(BH > 0 ? zH : null, BH >= 1);
+         (HH !== this.colour || BH !== this.alpha || SH) && (HH !== this.colour && (AH.style.background = HH), AH.style.opacity = String(BH), AH.style.display = BH > 0 ? "" : "none", this.fadeKeeperHosts(BH), this.colour = HH, this.alpha = BH)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L167` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L370) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L167)

```diff
-       resize(UU, XU) {
+       fadeKeeperHosts(HH) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L169-L183` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L372-L374) · [Before (L169-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L169-L183)

```diff
-         this.size = {
-           width: UU,
-           height: XU
-         }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
-       }
-       close() {
-         var UU;
-         this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
-       }
-     }
-     class DU {
-       constructor(UU) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), FU(UU, (UU => {
-           this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
-         }))
+         const LH = null === (BH = this.markedHost) || void 0 === BH ? void 0 : BH.parentElement;
+         if (LH)
+           for (const AH of LH.querySelectorAll("[data-camera-keeper-host]")) AH.style.setProperty("--camera-fade-alpha", String(HH))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L185-L186` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L376-L385) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L185-L186)

```diff
-       get dev() {
-         return this.opened.dev
+       setLetterbox(HH, BH) {
+         if (HH === this.letterbox) return;
+         if (!this.elements && !HH) return;
+         const {
+           top: LH,
+           bottom: AH
+         } = this.getElements();
+         this.letterbox = HH;
+         const rH = !BH || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         LH.style.transition = rH, AH.style.transition = rH, LH.style.transform = HH ? "translateY(0)" : "translateY(-100%)", AH.style.transform = HH ? "translateY(0)" : "translateY(100%)"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L188-L194` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L387-L391) · [Before (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L188-L194)

```diff
-       isReady() {
-         var UU, XU;
-         return null !== (UU = null === (XU = this.opened) || void 0 === XU ? void 0 : XU.isReady()) && void 0 !== UU && UU
-       }
-       setCosmetic(UU, XU) {
-         var zU;
-         null === (zU = this.opened) || void 0 === zU || zU.setCosmetic(UU, XU)
+       clear() {
+         const {
+           elements: HH
+         } = this;
+         HH && (this.markHost(null, !1), HH.fade.remove(), HH.top.remove(), HH.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L196` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L393) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L196)

```diff
-       playEmote(UU) {
+       markHost(HH, BH) {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L198-L202` → after: `L395-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L395-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L395-L399) · [Before (L198-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L198-L202)

```diff
-         null === (XU = this.opened) || void 0 === XU || XU.playEmote(UU)
-       }
-       setOrbit(UU) {
-         var XU;
-         null === (XU = this.opened) || void 0 === XU || XU.setOrbit(UU)
+         const AH = HH !== this.markedHost;
+         if (!AH && BH === this.markedCovered) return !1;
+         var SH, hH;
+         AH && (null === (SH = this.markedHost) || void 0 === SH || null === (hH = SH.parentElement) || void 0 === hH || hH.removeAttribute(rH));
+         return null === HH || void 0 === HH || null === (LH = HH.parentElement) || void 0 === LH || LH.setAttribute(rH, BH ? "covered" : ""), this.markedHost = HH, this.markedCovered = BH, AH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L204-L206` → after: `L401-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L401-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L401-L413) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L204-L206)

```diff
-       resetCamera() {
-         var UU;
-         null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
+       getElements() {
+         if (this.elements) return this.elements;
+         const HH = XH("top"),
+           BH = XH("bottom");
+         HH.style.transform = "translateY(-100%)", BH.style.transform = "translateY(100%)";
+         const LH = EH();
+         LH.style.top = "0", LH.style.bottom = "0", LH.style.display = "none", LH.setAttribute(hH, "");
+         const AH = this.getContainer();
+         return AH.appendChild(HH), AH.appendChild(BH), HH.getBoundingClientRect(), this.elements = {
+           fade: LH,
+           top: HH,
+           bottom: BH
+         }, this.elements
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L208-L210` → after: `L415-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L415-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L415-L465) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L208-L210)

```diff
-       async untilDrawn(UU) {
-         var XU;
-         await this.ready, await (null === (XU = this.opened) || void 0 === XU ? void 0 : XU.untilDrawn(UU))
+     }
+   },
+   37860: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH,
+       i: () => rH,
+       k: () => SH,
+       l: () => AH,
+       n: () => EH,
+       r: () => XH,
+       t: () => zH
+     });
+     const AH = [0, 0, 1, 1],
+       rH = [.42, 0, 1, 1],
+       SH = [0, 0, .58, 1],
+       hH = [.42, 0, .58, 1];
+ ... (35 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L212-L217` → after: `L467-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L467-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L467-L475) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L212-L217)

```diff
-       resize(UU, XU) {
-         var zU;
-         this.size = {
-           width: UU,
-           height: XU
-         }, null === (zU = this.opened) || void 0 === zU || zU.resize(UU, XU)
+       if (!XH) {
+         let HH = 0,
+           BH = 1;
+         EH = LH;
+         for (let rH = 0; rH < 12; rH++) {
+           const rH = zH(AH, SH, EH);
+           if (Math.abs(rH - LH) < 1e-6) break;
+           LH > rH ? HH = EH : BH = EH, EH = (HH + BH) / 2
+         }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L219-L221` → after: `L477-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L477-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L477-L491) · [Before (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L219-L221)

```diff
-       close() {
-         var UU;
-         this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
+       return zH(rH, hH, EH)
+     }
+ 
+     function XH(HH) {
+       switch (HH) {
+         case "linear":
+           return AH;
+         case "easeIn":
+           return rH;
+         case "easeOut":
+           return SH;
+         case "easeInOut":
+           return hH;
+         default:
+           return HH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L226-L237` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L520-L521) · [Before (L226-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L226-L237)

```diff
-         this.host = null, this.makeDefault = null
-       }
-       setHost(UU) {
-         this.host = UU
-       }
-       setDefaultHost(UU) {
-         this.makeDefault = UU
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L241-L242` → after: `L524-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L524-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L524-L530) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L241-L242)

```diff
-       openMob(UU) {
-         return new oU(this.current().openMob(UU))
+       isHeld() {
+         return this.holding && rH() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = rH(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, AH.TQ)(new Error("Game view size held for 60 s"))
+         }), 6e4)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L244-L245` → after: `L532-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L532-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L532-L539) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L244-L245)

```diff
-       openPet(UU) {
-         return new oU(this.current().openPet(UU))
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const HH of this.resizers) HH()
+           }
+         }), 1e3)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L247-L248` → after: `L541-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L541-L547) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L247-L248)

```diff
-       openMobLineup(UU) {
-         return new oU(this.current().openMobLineup(UU))
+       heldSizer(HH) {
+         let BH = !1;
+         return () => {
+           if (BH && this.isHeld()) return null;
+           const LH = HH();
+           return BH ||= null !== LH, LH
+         }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L250-L251` → after: `L549-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L549-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L549-L552) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L250-L251)

```diff
-       openCharacter(UU, XU) {
-         return new DU(this.current().openCharacter(UU, XU))
+       onRelease(HH) {
+         return this.resizers.add(HH), () => {
+           this.resizers.delete(HH)
+         }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L255` → after: `L556-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L556-L568) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L255)

```diff
-   34900: (UU, XU, zU) => {
+   37384: (HH, BH, LH) => {
+     const AH = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, LH(1123).d)(AH)
+   },
+   37678: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       return HH.size === BH.size && [...HH].every((HH => BH.has(HH)))
+     }
+     LH.d(BH, {
+       e: () => AH
+     })
+   },
+   34996: (HH, BH, LH) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L257-L259` → after: `L570-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L570-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L570-L575) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L257-L259)

```diff
-       c: () => cU.e,
-       d: () => cU.h,
-       h: () => cU.i
+       d: () => EH,
+       f: () => GH,
+       h: () => XH,
+       k: () => hH,
+       o: () => CH,
+       q: () => zH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L261-L269` → after: `L577-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L577-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L577-L657) · [Before (L261-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L261-L269)

```diff
-     var cU = zU(34904);
-     class yU {
-       constructor(UU) {
-         this.load = UU, this.loaded = null, this.loading = null
-       }
-       run(UU) {
-         return null !== this.loaded ? UU(this.loaded) : (this.loading ??= this.load().then((UU => (this.loaded = UU, UU)), (UU => {
-           throw this.loading = null, UU
-         })), this.loading.then(UU))
+     var AH = LH(317);
+     const rH = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       SH = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (65 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L272-L283` → after: `L660-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L660-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L660-L755) · [Before (L272-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L272-L283)

```diff
-     class QU {
-       constructor() {
-         this.mobScene = new yU((() => Promise.all([zU.e(84), zU.e(251), zU.e(250), zU.e(277), zU.e(111), zU.e(278), zU.e(87), zU.e(275), zU.e(85), zU.e(86), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(299), zU.e(247), zU.e(265), zU.e(280), zU.e(283), zU.e(89), zU. … [truncated]
-       }
-       openMob(UU) {
-         return this.mobScene.run((XU => XU.openMobPreview(UU)))
-       }
-       openPet(UU) {
-         return this.mobScene.run((XU => XU.openPetPreview(UU)))
-       }
-       openMobLineup(UU) {
-         return this.mobScene.run((XU => XU.openMobLineupPreview(UU)))
+     const tH = {
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
+ ... (80 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L285-L286` → after: `L757-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L757-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/217.js#L757-L766) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/217.js#L285-L286)

```diff
-       openCharacter(UU, XU) {
-         return this.characterScene.run((zU => zU.openCharacterPreview(UU, XU)))
+     }
+ 
+     function GH(HH, BH) {
+       const {
+         min: LH,
+         max: rH
+       } = tH[HH][BH], SH = AH.d.sampleUniformIntDistribution(LH, rH, "includeMax");
+       return {
+         ...XH(SH),
+         level: SH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L6` → after: `L4-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L4-L71) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L4-L6)

```diff
-   37093: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => zX
+   39735: (HH, BH, LH) => {
+     var AH = {
+       "./cape_cow_cream.png": 28495,
+       "./cape_cow_normal.png": 28500,
+       "./cape_creator_level1.png": 28507,
+       "./cape_creator_level2.png": 28514,
+       "./cape_creator_level3.png": 28521,
+       "./cape_none.png": 28530,
+       "./cape_pig.png": 28532,
+       "./cape_sheep.png": 28537,
+       "./cape_super.png": 28544,
+       "./cape_super_inverted.png": 28550,
+       "./cape_youtuber.png": 28552
+     };
+ 
+     function rH(HH) {
+ ... (52 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L8-L12` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L73-L78) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L8-L12)

```diff
-     var cU = zU(61);
-     const yU = "newPlayerDeal",
-       QU = 36e5,
-       AU = [4, 12, 20, 20, 30];
-     const FU = 12 * QU;
+     var AH = LH(186);
+     const rH = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       SH = "PetRoot";
+     let hH = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       tH = rH;
+     new Map, new Map;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L15` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L81-L82) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L15)

```diff
-       return UU - FU
+       var BH;
+       return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L18-L20` → after: `L85-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L85-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L85-L144) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L18-L20)

```diff
-     function DU(UU, XU, zU) {
-       const cU = oU(zU);
-       return XU >= cU && XU < zU && (null === UU.lastShownAt || UU.lastShownAt < cU)
+     function CH(HH) {
+       var BH;
+       return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
+     }
+   },
+   40117: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH,
+       c: () => rH,
+       g: () => SH
+     });
+     class AH {
+       constructor() {
+         this.pose = {
+           pos: [0, 0, 0],
+           yaw: 0,
+ ... (44 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L24-L59` → after: `L148-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L148-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L148-L197) · [Before (L24-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L24-L59)

```diff
-       const {
-         arrival: zU,
-         now: cU,
-         endsAt: yU,
-         playedOnDevice: FU
-       } = XU;
-       return !(cU >= yU || !FU) && (!(!DU(UU, cU, yU) && 0 !== UU.shownCount && null !== UU.lastShownAt) || "open" === zU && cU - UU.lastShownAt >= (oU = UU.shownCount, AU[Math.min(Math.max(oU, 1), AU.length) - 1] * QU));
-       var oU
-     }
-     var YU = zU(320),
-       NU = zU(1521),
-       IU = zU(27),
-       pU = zU(2387),
-       aU = zU(3350),
-       tU = zU(3354),
-       gU = zU(2025),
- ... (20 more removed lines; see GitHub link above)
+       return HH.bobAmplitude * Math.sin(2 * Math.PI * HH.bobHz * BH)
+     }
+ 
+     function SH(HH, BH, LH, AH, rH) {
+       const [SH, hH, tH] = LH;
+       HH[0] = BH[0] + SH * rH + tH * AH, HH[1] = BH[1] + hH, HH[2] = BH[2] - SH * AH + tH * rH
+     }
+   },
+   40075: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => SH
+     });
+     var AH = LH(37961),
+       rH = LH(38729);
+ 
+     function SH(HH, BH) {
+ ... (34 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L62-L97` → after: `L200-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L200-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L200-L237) · [Before (L62-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L62-L97)

```diff
-       let {
-         shownView: XU,
-         close: zU
-       } = UU;
-       const {
-         t: yU
-       } = (0, OU.I)(), QU = (0, CU.M)(), {
-         purchaseUnderWay: AU,
-         notice: FU,
-         needsLogin: oU,
-         buyPack: DU
-       } = (0, iU.g)("popup", ((UU, XU) => {
-         zU(!1), (0, qU.c)(UU, XU)
-       })), EU = null === QU;
-       (0, cU.useEffect)((() => {
-         EU && zU(!1)
- ... (20 more removed lines; see GitHub link above)
+       var BH;
+       const LH = null !== (BH = EH.currentUrl.getSearchParam(HH)) && void 0 !== BH ? BH : uH.e.getItem(HH);
+       return null === LH || void 0 === LH || "" === LH ? null : "0" !== LH && "false" !== LH && !1 !== LH && 0 !== LH
+     }
+     async function vH(HH, BH) {
+       (0, SH.E)(null);
+       const LH = (0, hH.r)((0, hH.n)(BH.useWebGpu, !0));
+       (0, GH.setWebGpuRequested)("lite" === LH.requested && (0, GH.getWebGpuSupported)());
+       const tH = (0, hH.h)(LH.source);
+       null !== tH && console.info(`Renderer: ${LH.requested} from ${tH}`), null !== LH.fallbackReason && console.warn(`Renderer: ${LH.fallbackReason}`);
+       let EH = LH.fallbackReason;
+       if ("webgl2" !== LH.choice) {
+         const tH = await async function(HH, BH, LH, hH) {
+           const tH = await (0, GH.probeWebGpuAdapter)();
+           if ("usable" !== tH) return (0, GH.setWebGpuFallbackReason)(tH), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
+           if (LH && !0 === uH.e.getItem(WH.L) && !0 !== uH.e.getItem(AH.zc)) return (0, GH.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), WH.b;
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L99-L111` → after: `L239-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L239-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L239-L265) · [Before (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L99-L111)

```diff
-         }), (0, HU.jsx)(rU.h, {
-           notice: FU,
-           className: "SmallTextBold NewPlayerDealNotice"
-         }), (0, HU.jsx)(rU.b, {
-           className: "SmallTextBold NewPlayerDealNotice"
-         }), (0, HU.jsx)(SU.f, {
-           className: "NewPlayerDealNoThanks",
-           onClick: () => {
-             zU(!0)
-           },
-           children: yU("newPlayerDeal:noThanks")
-         })]
-       })
+         }(HH, BH, "setting" === LH.source, LH.choice);
+         if ("lite" === LH.choice && uH.e.setItem(WH.v, "string" === typeof tH), "string" !== typeof tH) return CH.c.followGameGpu((0, YH.i)()), (0, GH.setWebGpuFallbackReason)("none"), (0, hH.s)(LH), (0, SH.E)(tH), {
+           lite: tH
+         };
+         EH = (0, hH.d)(LH.choice, [tH]), HH.replaceWith(HH.cloneNode(!1))
+       } else "lite" === LH.requested ? (0, GH.setWebGpuFallbackReason)("load_failed") : "default" === LH.source && BH.webGpuDefaultOffReason ? (0, GH.setWebGpuFallbackReason)(BH.webGpuDefaultOffReason) : (0, GH.setWebGpuFallbackReason)("not_requested");
+       return (0, hH.s)({
+         ...LH,
+         choice: "webgl2",
+         fallbackReason: EH
+       }), CH.c.followGameGpu(null), {
+         lite: null
+       }
+     }
+ 
+     function PH() {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L115-L121` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L269) · [Before (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L115-L121)

```diff
-       let {
-         arm: XU,
-         children: zU
-       } = UU;
-       return (0, cU.useEffect)((() => {
-         (0, CU.H)(!0)
-       }), []), (0, CU.N)(XU, "popup"), zU
+       return "lite" === (0, hH.r)((0, hH.n)(HH, !1)).choice && (0, GH.getWebGpuSupported)() && !uH.e.getItem(WH.v)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L125-L141` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L273-L274) · [Before (L125-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L125-L141)

```diff
-       let XU = null;
-       BU.NotificationProvider.showCustomPopup({
-         body: zU => (0, HU.jsx)(vU, {
-           arm: UU.arm,
-           children: (0, HU.jsx)(MU, {
-             shownView: UU,
-             close: UU => {
-               XU ??= UU, zU()
-             }
-           })
-         }),
-         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
-         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
-         disableExitButton: !0,
-         unlockPointerKey: "NewPlayerDealPopup"
-       }).getResult().then((zU => {
- ... (1 more removed lines; see GitHub link above)
+       VH(HH) || UH().catch((HH => {
+         console.warn("Failed to prefetch noa's Babylon backend.", HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L150-L155` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L279-L282) · [Before (L150-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L150-L155)

```diff
-       const XU = Date.now() + lU;
-       return new Promise((zU => {
-         const cU = () => {
-           UU() ? (0, dU.f)() || BU.NotificationProvider.hasPopup() || (0, WU.l)() || (0, CU.s)() || null !== IU.e.get("openEverythingMenuName") ? Date.now() > XU ? zU(!1) : setTimeout(cU, mU) : zU(!0) : zU(!1)
-         };
-         cU()
+       (0, QH.d)((() => {
+         VH(HH) ? (0, SH.s)().load().catch((HH => {
+           console.warn("Failed to prefetch the Lite renderer.", HH)
+         })) : OH(HH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L158-L160` → after: `L285-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L285-L293) · [Before (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L158-L160)

```diff
-     const JU = "newPlayerDealPointerDeferred_";
-     let jU = !1,
-       KU = null;
+   },
+   39673: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => tH,
+       d: () => hH
+     });
+     var AH = LH(15),
+       rH = LH(34929),
+       SH = LH(3195);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L162` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L295) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L162)

```diff
-     function bU(UU, XU) {
+     function hH(HH) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L164` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L297) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L164)

```diff
-       return (null === (zU = KU) || void 0 === zU ? void 0 : zU.accountId) === XU && KU.shownCount === UU.shownCount
+       return null !== (BH = HH.parentElement) && void 0 !== BH ? BH : HH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L167-L168` → after: `L300-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L300-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L300-L304) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L167-L168)

```diff
-     function TU(UU, XU, zU) {
-       return !!bU(XU, zU) && (KU = null, (0, CU.w)(zU), VU(UU), !0)
+     function tH(HH, BH) {
+       if (HH.clientWidth <= 0 || HH.clientHeight <= 0 || rH.e.isHeld()) return null;
+       const LH = (0, SH.q)(),
+         [hH, tH] = BH.size(LH);
+       return (0, SH.v)(hH, tH, LH, AH.c.get("clientEscMenuOptions").pixelScale)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L170-L192` → after: `L306-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L306-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L306-L324) · [Before (L170-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L170-L192)

```diff
-     async function hU(UU, XU, zU, cU) {
-       if (jU) return !1;
-       let yU;
-       jU = !0;
-       try {
-         yU = await async function(UU) {
-           const {
-             newPlayerDeal: XU,
-             counted: zU
-           } = await (0, GU.postJsonWithMetricsCookiesAndJsonResponse)(`${kU.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
-             shownCount: UU
-           }, {
-             retries: 1
-           });
-           return {
-             newPlayerDeal: XU,
- ... (7 more removed lines; see GitHub link above)
+   },
+   42416: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => YH,
+       e: () => CH,
+       h: () => XH,
+       k: () => EH,
+       m: () => GH
+     });
+     var AH = LH(1168),
+       rH = LH(2339),
+       SH = LH(38041),
+       hH = LH(38378);
+     class tH {
+       constructor(HH, BH) {
+         this.pose = HH, this.nodes = void 0, this.nodes = HH.boneNames.map((HH => BH.get(HH)))
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L201-L244` → after: `L328-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L328-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L328-L343) · [Before (L201-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L201-L244)

```diff
-     function XX(UU, XU, zU, yU, QU) {
-       var AU;
-       const {
-         gameState: FU
-       } = (0, IU.q)(["gameState"]), NU = "landingPage" === FU, {
-         pointing: pU
-       } = (0, PU.g)(), aU = (0, cU.useRef)(pU);
-       aU.current = pU;
-       const tU = (0, cU.useRef)(UU);
-       tU.current = UU;
-       const kU = (0, cU.useRef)(XU);
-       kU.current = XU;
-       const GU = (0, cU.useRef)(zU);
-       GU.current = zU;
-       const [BU, WU] = (0, cU.useState)(null), dU = (0, cU.useRef)(0), LU = (0, cU.useRef)(0), eU = (0, cU.useRef)(!1), CU = (0, cU.useCallback)((UU => {
-         "open" === function(UU) {
- ... (28 more removed lines; see GitHub link above)
+     function zH(HH) {
+       HH.unfreezeWorldMatrix();
+       for (const BH of HH.getChildren()) zH(BH)
+     }
+     async function CH(HH, BH, LH, AH) {
+       let {
+         keepTransforms: rH,
+         backFaceCulling: hH
+       } = AH;
+       const tH = await (0, SH.i)(BH, HH),
+         CH = (0, SH.f)(null !== LH && void 0 !== LH ? LH : BH, HH, void 0, hH);
+       (0, SH.l)(tH, CH, {
+         keepTransforms: rH,
+         backFaceCulling: hH,
+         onProcessedMesh: BH => {
+           HH.QrH(BH, !1), BH.isVisible = !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L246-L275` → after: `L345-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L345-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L345-L481) · [Before (L246-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L246-L275)

```diff
-       }), [NU, wU, CU]);
-       const qU = null !== UU && null !== yU && null === QU;
-       (0, cU.useEffect)((() => {
-         if (null === BU || !qU || LU.current >= BU.seq) return;
-         const UU = () => dU.current === BU.seq && "landingPage" === IU.e.get("gameState"),
-           XU = setTimeout((() => {
-             const XU = tU.current,
-               zU = kU.current;
-             if (null === XU || null === zU || !UU()) return;
-             LU.current = BU.seq;
-             const cU = Date.now(),
-               QU = bU(zU, yU);
-             if (!(QU || EU(zU, {
-                 arrival: BU.kind,
-                 now: cU,
-                 endsAt: XU.endsAt,
- ... (14 more removed lines; see GitHub link above)
+       });
+       for (const SH of tH.rootNodes) zH(SH);
+       return tH
+     }
+ 
+     function EH(HH, BH) {
+       HH.isVisible = BH;
+       for (const LH of HH.getChildMeshes()) LH.isVisible = BH
+     }
+ 
+     function XH(HH) {
+       const BH = new Map;
+       for (const LH of HH.getNodes()) BH.set(LH.name, LH);
+       return BH
+     }
+ 
+ ... (121 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L277` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L483-L484) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L277)

```diff
-       }), [BU, qU, yU])
+         return BH
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L280-L293` → after: `L487-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L487-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L487-L538) · [Before (L280-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L280-L293)

```diff
-     function zX() {
-       const {
-         userContext: UU
-       } = (0, eU.d)(), XU = (0, pU.usePurchasesAllowed)(), [zU, QU] = (0, cU.useState)(wU.i);
-       (0, cU.useEffect)((() => (QU((0, wU.i)()), (0, wU.m)(QU))), []);
-       const AU = (0, CU.d)(UU);
-       ! function(UU, XU, zU) {
-         const [QU, AU] = (0, cU.useState)(0);
-         (0, cU.useEffect)((() => {
-           if (!XU || null === UU) return;
-           if (null !== zU) return void(0, CU.D)(UU, (0, wU.e)());
-           if (null !== (0, CU.i)(UU)) return;
-           let cU, QU = !1;
-           return (0, tU.getBillingClient)().getOfferings(yU).then((XU => {
+     function fH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       return new GH.lu(HH[0] * BH, HH[1] * BH, HH[2] * BH)
+     }
+     class lH {
+       constructor(HH, BH) {
+         this.NQ = HH, this.scale = BH, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
+       }
+       async setPet(HH) {
+         var BH;
+         this.petName = HH, null === (BH = this.shownPet) || void 0 === BH || BH.node.vI(!1), this.shownPet = null;
+         const LH = (0, UH.h)(HH);
+         if (!LH) return;
+         let AH;
+         try {
+           AH = await this.petNode(LH.model)
+ ... (36 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L295` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L540) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L295)

```diff
-               offering: zU
+               message: AH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L297-L303` → after: `L542-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L542-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L542-L649) · [Before (L297-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L297-L303)

```diff
-             (0, CU.D)(UU, null === zU ? [] : zU.packages.filter(aU.isPricedPackage))
-           }), (UU => {
-             console.error("New player deal: loading its prices failed", UU), QU || (cU = setTimeout((() => {
-               AU((UU => UU + 1))
-             }), nU))
-           })), () => {
-             QU = !0, clearTimeout(cU)
+             console.error(`Preview aura ${HH}'s texture failed to load: ${AH}`), BH()
+           }))
+         }))
+       }
+       writePose(HH) {
+         var BH;
+         if (!this.shownPet) return;
+         const LH = (0, UH.h)(this.petName),
+           {
+             scale: AH
+           } = this;
+         if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, LH);
+         const [rH, SH, hH] = LH.followOffset, {
+           node: tH
+         } = this.shownPet;
+         tH.position.set(rH * AH, (SH + (0, VH.c)(LH, HH) - 1) * AH, hH * AH), tH.rotation.y = LH.yawOffset, tH.bX.IHH(LH.scale * AH), null !== (BH = LH.clips) && void 0 !== BH && BH.fly && this.shownPet.play(LH.clips.fly, HH)
+ ... (92 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L305-L325` → after: `L651-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L651-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L651-L678) · [Before (L305-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L305-L325)

```diff
-         }), [UU, XU, zU, QU])
-       }(AU, null !== (0, CU.k)(UU) && (XU || null !== zU), zU);
-       const FU = (0, CU.M)();
-       return XX(FU, (0, CU.k)(UU), UU, AU, zU),
-         function() {
-           const {
-             userContext: UU
-           } = (0, eU.d)(), {
-             gameState: XU
-           } = (0, IU.q)(["gameState"]);
-           (0, cU.useEffect)((() => {
-             if ("landingPage" !== XU || !UU.isLoggedIn() && !(0, pU.guestsMayBuy)()) return;
-             const zU = (0, CU.f)(UU),
-               cU = (0, LU.x)((UU => zU.includes(UU.item)));
-             null !== cU && ((0, NU.reportAnalyticsClick)({
-               id: "store.login_resume",
- ... (5 more removed lines; see GitHub link above)
+         }, this.closed = !1, this.resetCamera();
+         const LH = HH.getBoundingClientRect();
+         pH(LH.width, LH.height), yH++, qH.stopRenderLoop(), qH.runRenderLoop((() => {
+           var HH, BH, LH;
+           null === (HH = DH) || void 0 === HH || HH.render(qH.getDeltaTime());
+           const AH = performance.now() / 1e3;
+           null === (BH = wH) || void 0 === BH || BH.writePoses(AH), null === (LH = ZH) || void 0 === LH || LH.writePose(AH), NH.render()
+         }))
+       }
+       isReady() {
+         return !!RH
+       }
+       setCosmetic(HH, BH) {
+         iH(HH, BH)
+       }
+       playEmote(HH) {
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L327-L366` → after: `L680-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L680-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L680-L739) · [Before (L327-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L327-L366)

```diff
-           }), [UU, XU])
-         }(),
-         function(UU, XU, zU) {
-           const yU = (0, cU.useRef)(null);
-           (0, cU.useEffect)((() => {
-             if (null === zU || null === UU || null === XU || yU.current === zU) return;
-             yU.current = zU;
-             const cU = UU.packs[0].pack;
-             switch (zU.show) {
-               case "popup":
-                 (0, CU.w)(XU), VU(UU);
-                 break;
-               case "store":
-                 (0, LU.l)({
-                   mode: "self",
-                   source: "newPlayerDeal"
- ... (24 more removed lines; see GitHub link above)
+           })), await sH())
+         }
+         JH[HH] && (await JH[HH], await sH()), await NH.whenReadyAsync(), await new Promise((HH => {
+           NH.onAfterRenderObservable.addOnce((() => {
+             HH()
+           }))
+         }))
+       }
+       setOrbit(HH) {
+         BB(HH)
+       }
+       resetCamera() {
+         gH.inertialAlphaOffset = 0, gH.inertialBetaOffset = 0, gH.inertialRadiusOffset = 0, BB(cH.d[this.framing])
+       }
+       resize(HH, BH) {
+         pH(HH, BH)
+ ... (44 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L369` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L742) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L369)

```diff
-   34915: (UU, XU, zU) => {
+   39726: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L371-L372` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L744) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L371-L372)

```diff
-       d: () => pU,
-       g: () => tU
+       e: () => GH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L374-L385` → after: `L746-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L746-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L746-L750) · [Before (L374-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L374-L385)

```diff
-     zU(34922);
-     var cU = zU(61),
-       yU = zU(1106),
-       QU = zU.n(yU),
-       AU = zU(1193),
-       FU = zU(1494),
-       oU = zU(2812),
-       DU = zU(1390),
-       EU = zU(2559),
-       YU = zU(3409),
-       NU = zU(2401),
-       IU = zU(1305);
+     var AH = LH(38084),
+       rH = LH(38183),
+       SH = LH(38213),
+       hH = LH(38098),
+       tH = LH(38086);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L388-L399` → after: `L753-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L753-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L753-L770) · [Before (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L388-L399)

```diff
-       let {
-         endsAt: XU,
-         className: zU
-       } = UU;
-       return (0, IU.jsxs)("span", {
-         className: QU()("NewPlayerDealClock", zU),
-         children: [(0, IU.jsx)(DU.d, {
-           name: "hourglass"
-         }), (0, IU.jsx)(oU.e, {
-           toTime: XU
-         })]
-       })
+       return `\n\t\t\t\t${(0,tH.x)(HH,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, tH.C)(HH, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, tH.C)(HH, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, tH.l)(HH, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
+     }
+ 
+     function CH(HH, BH) {
+       let LH = (0, tH.Cb)(HH, "skele" + (BH - 1));
+       for (let rH = BH - 2; rH >= 0; rH--) LH = (0, tH.pb)(HH, `boneIdx == ${rH}`, (0, tH.Cb)(HH, `skele${rH}`), LH);
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L403-L417` → after: `L774-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L774-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L774-L791) · [Before (L403-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L403-L417)

```diff
-       let {
-         offered: XU,
-         needsLogin: zU,
-         busy: cU,
-         highlight: yU,
-         onBuy: oU
-       } = UU;
-       const {
-         t: DU
-       } = (0, AU.I)(), {
-         pack: pU
-       } = XU, aU = (0, YU.g)(XU.package);
-       return (0, IU.jsxs)("div", {
-         className: QU()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: yU
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,tH.l)(HH,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+     }
+     const XH = {
+         x: 0,
+         y: 0,
+         z: 0,
+         SX(HH, BH) {
+           return this.x = HH[BH], this.y = HH[BH + 1], this.z = HH[BH + 2], this
+         }
+       },
+       GH = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (HH, BH) => ({
+           ...(0, AH.e)("CAPE"),
+ ... (2 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L419-L447` → after: `L793-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L793-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L793-L913) · [Before (L419-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L419-L447)

```diff
-         children: [(0, IU.jsxs)("div", {
-           className: "NewPlayerDealPackArt",
-           children: [(0, IU.jsx)("img", {
-             src: NU.c[XU.tier],
-             alt: "",
-             draggable: !1
-           }), (0, IU.jsx)("span", {
-             className: "NewPlayerDealTag",
-             children: DU("newPlayerDeal:tag")
-           })]
-         }), (0, IU.jsx)("div", {
-           className: "NewPlayerDealPackText",
-           children: (0, IU.jsx)(EU.c, {
-             className: "NewPlayerDealPackAmount",
-             amount: pU.gems
-           })
- ... (13 more removed lines; see GitHub link above)
+         getUniforms(HH) {
+           return (0, SH.d)(function(HH) {
+             const BH = [];
+             for (let LH = 0; LH < HH; LH++) BH.push({
+               name: `skele${LH}`,
+               type: "highp vec3"
+             });
+             return BH
+           }(this.skeleLen), "vertex", HH)
+         },
+         bind(HH) {
+           for (let BH = 0; BH < this.skeleLen; BH++) HH.updateVector3(`skele${BH}`, XH.SX(this.skele, 3 * BH))
+         },
+         uniformsVersion() {
+           return this.bonesVersion
+         },
+ ... (105 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L451-L484` → after: `L917-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L917-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L917-L929) · [Before (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L451-L484)

```diff
-       let {
-         view: XU,
-         needsLogin: zU,
-         busy: yU,
-         highlight: FU,
-         onBuy: oU
-       } = UU;
-       const {
-         t: DU
-       } = (0, AU.I)();
-       return (0, IU.jsxs)("div", {
-         className: QU()("NewPlayerDealPacks", XU.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [XU.packs.map(((UU, XU) => (0, IU.jsxs)(cU.Fragment, {
-           children: [XU > 0 && (0, IU.jsx)("div", {
-             className: "NewPlayerDealDivider",
-             "aria-hidden": !0,
- ... (18 more removed lines; see GitHub link above)
+       if (!hH) throw new Error("No SkyMaterial: WebGL2's backend installs it");
+       return new hH("sky", HH)
+     }
+ 
+     function CH(HH, BH, LH) {
+       if (!(0, AH.f)(HH)) return void HH.material.forceCompilation(HH, BH);
+       const hH = () => {
+         if (HH.mV()) return void SH.delete(HH);
+         const AH = (0, rH.V)(HH.material);
+         if (![null === AH || void 0 === AH ? void 0 : AH.diffuseTexture, null === AH || void 0 === AH ? void 0 : AH.opacityTexture, null === AH || void 0 === AH ? void 0 : AH.emissiveTexture, null === AH || void 0 === AH ? void 0 : AH.reflectionTexture].every((HH => !HH || LH.pre … [truncated]
+         SH.delete(HH), BH()
+       };
+       hH()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L487` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L932) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L487)

```diff
-   34925: (UU, XU, zU) => {
+   34929: (HH, BH, LH) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L489-L490` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L934) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L489-L490)

```diff
-       c: () => dU,
-       g: () => eU
+       e: () => SH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L492-L512` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L936) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L492-L512)

```diff
-     zU(34922);
-     var cU = zU(3403),
-       yU = zU(1521),
-       QU = zU(2387),
-       AU = zU(3390),
-       FU = zU(3374),
-       oU = zU(3395),
-       DU = zU(3354),
-       EU = zU(1193),
-       YU = zU(1410),
-       NU = zU(1129),
-       IU = zU(1494),
-       pU = zU(1390),
-       aU = zU(2559),
-       tU = zU(2916),
-       gU = zU(2787),
- ... (5 more removed lines; see GitHub link above)
+     var AH = LH(1260);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L514-L518` → after: `L938-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L938-L940) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L514-L518)

```diff
-     function PU(UU, XU) {
-       null !== UU && (0, gU.p)(UU) || ((0, yU.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${XU.pack.packageId}`
-       }), null !== UU && (0, gU.u)(UU), dU(XU.pack.gems))
+     function rH() {
+       var HH, BH;
+       return null !== (HH = null === (BH = screen.orientation) || void 0 === BH ? void 0 : BH.type) && void 0 !== HH ? HH : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L522-L538` → after: `L988-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L988-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L988-L990) · [Before (L522-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L522-L538)

```diff
-       const yU = (0, gU.d)(XU);
-       switch (UU.kind) {
-         case "completed":
-           PU(yU, zU);
-           break;
-         case "pending":
-           QU = UU.intentId, AU = () => {
-             tU.i.refresh(), PU(yU, zU)
-           }, RU || (RU = !0, ZU.listen()), ZU.follow(QU, AU);
-           break;
-         case "unknownPackage":
-           (0, gU.I)(XU, null);
-           break;
-         case "failed":
-           UU.errorKey === cU.e.newPlayerDealUnavailable && (0, gU.I)(XU, null)
-       }
- ... (1 more removed lines; see GitHub link above)
+       let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
+       const zH = Math.max(0, SH, HH) * Math.max(0, hH, BH) * tH * tH;
+       return zH > AH && (tH *= Math.sqrt(AH / zH)), [Math.max(1, Math.floor(Math.max(0, HH) * tH)), Math.max(1, Math.floor(Math.max(0, BH) * tH))]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L541-L548` → after: `L1014-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1014-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1014-L1018) · [Before (L541-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L541-L548)

```diff
-     function dU(UU) {
-       YU.NotificationProvider.showCustomPopup({
-         body: XU => (0, BU.jsx)(LU, {
-           gems: UU,
-           close: XU
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
+     function MH(HH, BH) {
+       return Object.assign((function(HH, LH, AH, rH) {
+         return BH(this.featureState, HH, LH, AH, rH)
+       }), {
+         EX: HH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L553-L576` → after: `L1023-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1023-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1023-L1049) · [Before (L553-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L553-L576)

```diff
-       let {
-         gems: XU,
-         close: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, EU.I)();
-       return (0, BU.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, BU.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, BU.jsx)(pU.d, {
-             name: "circle-check"
-           }), (0, BU.jsx)(aU.c, {
-             amount: XU
-           }), (0, BU.jsx)("span", {
- ... (8 more removed lines; see GitHub link above)
+       const BH = class extends YH.e {
+           constructor(BH, LH) {
+             const AH = (0, QH.V)(BH),
+               rH = AH && (0, QH.s)(AH, HH.name);
+             for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
+             super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return HH.className
+           }
+           isCompatible(HH) {
+             return HH === WH.c.GLSL || HH === WH.c.WGSL
+           }
+         },
+         LH = (0, uH.h)(HH);
+       for (const [AH, rH] of Object.entries(uH.d)) {
+ ... (11 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L579-L580` → after: `L1056-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1056-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1056-L1162) · [Before (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L579-L580)

```diff
-     function eU(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.c;
+     function VH(HH, BH, LH) {
+       return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
+         const {
+           width: AH
+         } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
+           var rH;
+           const SH = Math.round(HH.getSize().height / AH),
+             hH = null === BH || void 0 === BH ? void 0 : BH[LH];
+           return {
+             pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
+             layers: SH
+           }
+         })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
+           let {
+             pixels: BH,
+             layers: rH
+ ... (91 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L582-L599` → after: `L1164-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1164-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1164-L1243) · [Before (L582-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L582-L599)

```diff
-         userContext: zU
-       } = (0, NU.d)(), {
-         purchaseUnderWay: cU,
-         notice: yU,
-         buy: oU
-       } = (0, FU.b)(XU), DU = (0, kU.i)(), EU = zU.mayBuy() || (0, QU.guestsMayBuy)(), YU = null === DU ? !EU : DU.guest && !zU.isLoggedIn();
-       return {
-         purchaseUnderWay: cU,
-         notice: yU,
-         needsLogin: YU,
-         buyPack: function(cU, yU) {
-           (0, gU.B)("new_player_deal.buy", (0, GU.b)(cU.arm, UU, yU.pack.packageId)), null === DU ? oU(function(UU) {
-             return {
-               sku: UU.pack.packageId,
-               tier: UU.tier,
-               amount: UU.pack.gems,
- ... (2 more removed lines; see GitHub link above)
+         r: LH,
+         g: rH,
+         b: SH
+       } = BH.specularColor;
+       0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
+     }(0, EH.d)({
+       disableUnusedSpecularTerm: nH
+     });
+     var FH = LH(38141),
+       DH = LH(38353);
+     const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
+     class ZH extends(xH(CH.j)) {
+       constructor(HH, BH) {
+         super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
+       }
+       prewarmDitherTwins(HH) {
+ ... (64 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L601-L605` → after: `L1245-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1245-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1245-L1376) · [Before (L601-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L601-L605)

```diff
-           }(yU), null, {
-             followPending: !1
-           }).then((UU => {
-             WU(UU, zU, yU)
-           })) : YU ? XU(yU.pack.packageId, null) : PU((0, gU.d)(zU), yU)
+           })),
+           {
+             mimeType: YH,
+             bytes: uH,
+             label: QH
+           } = zH,
+           WH = {
+             noMipmap: rH,
+             invertY: !1,
+             samplingMode: tH,
+             ...EH,
+             mimeType: YH,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
+           },
+           MH = new hH.d(null, BH, WH);
+ ... (116 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L610` → after: `L1492-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L1492-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/218.js#L1492-L1506) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/218.js#L610)

```diff
-   34922: () => {}
+   39677: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       return "object" === typeof HH && null !== HH ? Object.assign(HH, {
+         startStep: BH
+       }) : HH
+     }
+ 
+     function rH(HH) {
+       return "object" === typeof HH && null !== HH && "startStep" in HH ? HH.startStep : null
+     }
+     LH.d(BH, {
+       c: () => rH,
+       e: () => AH
+     })
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L4)

```diff
-   34948: (UU, XU, zU) => {
+   37487: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L6)

```diff
-       b: () => yU,
+       c: () => QH,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L9` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L9-L58) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L9)

```diff
-     var cU = zU(3626);
+     LH(34960);
+     var AH = LH(45),
+       rH = LH(1450),
+       SH = LH(1998),
+       hH = LH(2051),
+       tH = LH(15),
+       zH = LH(2628),
+       CH = LH(37496),
+       EH = LH(37504),
+       XH = LH(34942),
+       GH = LH(34951),
+       YH = LH(34969),
+       uH = LH(1225);
+     const QH = (0, AH.memo)((function() {
+       var HH;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L12-L20` → after: `L61-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L61-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L61-L93) · [Before (L12-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L12-L20)

```diff
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const XU = new BroadcastChannel(cU.n);
-         XU.postMessage({
-           stored: UU
-         }), XU.close()
-       } catch {
-         return null
+       return SH.gameBridge.lookup("cameraZoom", null)
+     }
+     const MH = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       xH = {
+         current: null
+       },
+       vH = {
+         current: null
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L22` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L95) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L22)

```diff
-       return UU
+       xH.current && (xH.current.style.filter = `blur(${Math.round(HH/10)}px)`)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L26-L27` → after: `L99-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L99-L176) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L26-L27)

```diff
-       const XU = "object" === typeof UU && null !== UU ? UU.stored : null;
-       return "string" === typeof XU ? XU : null
+       let {
+         custom: BH,
+         touch: LH
+       } = HH;
+       const SH = (0, rH.e)("aimingOverlay", "none"),
+         hH = "1.2vh",
+         tH = "0.3vh";
+       (0, AH.useEffect)((() => {
+         PH && OH(PH)
+       }), []);
+       const zH = (0, AH.useRef)(null !== BH);
+       return (0, AH.useLayoutEffect)((() => {
+         var HH;
+         BH ? null === (HH = vH.current) || void 0 === HH || HH.call(vH, VH(TH)) : zH.current && OH(TH);
+         zH.current = null !== BH
+       }), [BH]), (0, uH.jsxs)(uH.Fragment, {
+ ... (62 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L30` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L179) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L30)

```diff
-   34945: (UU, XU, zU) => {
+   34951: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L32-L34` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L181-L182) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L32-L34)

```diff
-       c: () => AU,
-       g: () => yU,
-       i: () => QU
+       b: () => QH,
+       c: () => uH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L36-L46` → after: `L184-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L184-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L184-L301) · [Before (L36-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L36-L46)

```diff
-     var cU = zU(3626);
-     async function yU(UU, XU, zU) {
-       let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const QU = AU(await UU.getItem(cU.i, XU));
-       if (null === QU || yU()) return null;
-       const FU = await UU.getItem(cU.j, XU);
-       return yU() ? null : (await async function(UU) {
-         await Promise.all([UU.removeItem(cU.i), UU.removeItem(cU.j)])
-       }(UU).catch(zU), {
-         pack: QU,
-         source: "string" === typeof FU ? FU : null
+     LH(34960);
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(45),
+       hH = LH(34946);
+ 
+     function tH(HH, BH) {
+       return Math.max(1, Math.round(HH * BH))
+     }
+ 
+     function zH(HH, BH) {
+       const LH = BH * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+         AH = function(HH, BH) {
+           if (HH.lines) return tH(HH.lineThickness, BH) % 2;
+           if (HH.dot) return tH(HH.dotSize, BH) % 2;
+           return CH(HH, BH) % 2
+ ... (102 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L51-L53` → after: `L321-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L321-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L321-L380) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L51-L53)

```diff
-       return (0, cU.w)() ? Promise.resolve(null) : yU(UU, !1, (UU => {
-         console.error("Error removing temporary texture pack: ", UU)
-       }), cU.w)
+       let {
+         settings: BH,
+         touch: LH,
+         inPreview: AH,
+         inEditor: SH,
+         pressed: hH = !1,
+         pressRef: tH
+       } = HH;
+       return (0, GH.jsx)("div", {
+         className: rH()("Crosshair", {
+           Touch: LH,
+           CrosshairInPreview: AH,
+           CrosshairInEditor: SH || AH
+         }),
+         ref: tH,
+         style: {
+ ... (44 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L57-L59` → after: `L384-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L384-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L384-L501) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L57-L59)

```diff
-       if ("object" !== typeof UU || null === UU) return null;
-       const XU = UU.metaData;
-       return "object" !== typeof XU || null === XU || "string" !== typeof XU.id ? null : UU
+       return HH.arm ? {
+         "data-arm": HH.arm,
+         "data-x": HH.x,
+         "data-y": HH.y
+       } : {}
+     }
+ 
+     function bH(HH) {
+       let {
+         settings: BH,
+         inPreview: LH,
+         inEditor: AH,
+         pressed: tH = !1,
+         spread: CH,
+         spreadRef: EH
+       } = HH;
+ ... (102 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L62` → after: `L504-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L504-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L504-L518) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L62)

```diff
-   53774: (UU, XU, zU) => {
+   34962: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => EH,
+       f: () => WH,
+       g: () => QH
+     });
+     var AH = LH(34946);
+     const rH = "XH1-",
+       SH = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       hH = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       tH = ["color", "outlineColor"],
+       zH = 1 + 3 * tH.length + hH.length + 1,
+       CH = Math.ceil(8 * zH / Math.log2(62)),
+       EH = rH.length + CH;
+ 
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L64` → after: `L520-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L520-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L520-L537) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L64)

```diff
-       return null === UU.gameSource ? "player" : "customGame"
+       let BH = 90;
+       for (const LH of HH) BH = 31 * BH + LH & 255;
+       return BH
+     }
+     const GH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
+       YH = BigInt(GH.length);
+ 
+     function uH(HH, BH) {
+       let LH = 0n;
+       for (const rH of HH) {
+         const HH = GH.indexOf(rH);
+         if (HH < 0) return null;
+         LH = LH * YH + BigInt(HH)
+       }
+       if (LH >> BigInt(8 * BH) !== 0n) return null;
+       const AH = [];
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L69-L70` → after: `L601-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L601-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L601-L605) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L69-L70)

```diff
-       h: () => pU,
-       l: () => cU
+       e: () => CH,
+       f: () => zH,
+       i: () => EH,
+       j: () => tH,
+       k: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L72` → after: `L607-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L607-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L607-L709) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L72)

```diff
-     const yU = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;
+     const AH = {
+         opacity: {
+           min: 5,
+           max: 100,
+           step: 1
+         },
+         outline: {
+           min: 0,
+           max: 4,
+           step: .1
+         },
+         size: {
+           min: 25,
+           max: 400,
+           step: 5
+         },
+ ... (87 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L75` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L712) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L75)

```diff
-       return "" === UU || "string" === typeof UU && yU.test(UU)
+       return tH(HH, rH)
```
