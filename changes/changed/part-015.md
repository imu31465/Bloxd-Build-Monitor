# Changed — Bundle Modifications Report (Part 015 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `15 / 56` (**255** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 29. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L693-L696` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L135-L136) · [Before (L693-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L693-L696)

```diff
-     }
-     class kQ extends LQ {
-       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
-         super(QQ, 3, WQ), this.limit = XQ, this.result = wQ, this.from = qQ, this.to = TQ
+       sizeInterpolateFunction(MM, rM, iM) {
+         return nM.d.Lerp(MM, rM, iM)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L698-L699` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L138-L139) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L698-L699)

```diff
-       hasResult() {
-         return !0
+       color3InterpolateFunction(MM, rM, iM) {
+         return SM.d.Lerp(MM, rM, iM)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L701-L715` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L141-L142) · [Before (L701-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L701-L715)

```diff
-       updateFor(QQ, WQ) {
-         var XQ;
-         if (!(3 & WQ)) return this.map(QQ.changes);
-         let wQ = this.result;
-         wQ.map && !QQ.changes.empty && (wQ = wQ.map(wQ, QQ.changes));
-         let qQ = QQ.changes.mapPos(this.from),
-           TQ = QQ.changes.mapPos(this.to, 1),
-           sQ = JQ(QQ.state);
-         if (sQ > TQ || !wQ || 2 & WQ && (JQ(QQ.startState) == this.from || sQ < this.limit)) return new LQ(this.source, 4 & WQ ? 1 : 0);
-         let FQ = QQ.changes.mapPos(this.limit);
-         return function(QQ, WQ, XQ, wQ) {
-           if (!QQ) return !1;
-           let qQ = WQ.sliceDoc(XQ, wQ);
-           return "function" == typeof QQ ? QQ(qQ, XQ, wQ, WQ) : rQ(QQ, !0).test(qQ)
-         }(wQ.validFor, QQ.state, qQ, TQ) ? new kQ(this.source, this.explicit, FQ, wQ, qQ, TQ) : wQ.update && (wQ = wQ.update(wQ, qQ, TQ, new zQ(QQ.state, sQ, !1))) ? new kQ(this.source, this.explicit, FQ, wQ, wQ.from, null !== (XQ = wQ.to) && void 0 !== XQ ? XQ : JQ(QQ.state)) :  … [truncated]
+       color3InterpolateFunctionWithTangents(MM, rM, iM, OM, jM) {
+         return SM.d.Hermite(MM, rM, iM, OM, jM)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L717-L719` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L144-L145) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L717-L719)

```diff
-       map(QQ) {
-         if (QQ.empty) return this;
-         return (this.result.map ? this.result.map(this.result, QQ) : this.result) ? new kQ(this.source, this.explicit, QQ.mapPos(this.limit), this.result, QQ.mapPos(this.from), QQ.mapPos(this.to, 1)) : new LQ(this.source, 0)
+       color4InterpolateFunction(MM, rM, iM) {
+         return SM.h.Lerp(MM, rM, iM)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L721-L722` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L147-L148) · [Before (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L721-L722)

```diff
-       touches(QQ) {
-         return QQ.changes.touchesRange(this.from, this.to)
+       color4InterpolateFunctionWithTangents(MM, rM, iM, OM, jM) {
+         return SM.h.Hermite(MM, rM, iM, OM, jM)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L724-L756` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L150-L151) · [Before (L724-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L724-L756)

```diff
-     }
-     const fQ = wQ.G.define({
-         map: (QQ, WQ) => QQ.map((QQ => QQ.map(WQ)))
-       }),
-       SQ = wQ.I.define({
-         create: () => cQ.start(),
-         update: (QQ, WQ) => QQ.update(WQ),
-         provide: QQ => [qQ.qb.from(QQ, (QQ => QQ.tooltip)), qQ.k.contentAttributes.from(QQ, (QQ => QQ.attrs))]
-       });
- 
-     function tQ(QQ, WQ) {
-       const XQ = WQ.completion.apply || WQ.completion.label;
-       let wQ = QQ.state.field(SQ).active.find((QQ => QQ.source == WQ.source));
-       return wQ instanceof kQ && ("string" == typeof XQ ? QQ.dispatch({
-         ...jQ(QQ.state, XQ, wQ.from, wQ.to),
-         annotations: IQ.of(WQ.completion)
- ... (17 more removed lines; see GitHub link above)
+       _getKeyValue(MM) {
+         return "function" === typeof MM ? MM() : MM
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L758-L764` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L153-L154) · [Before (L758-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L758-L764)

```diff
-     }
-     const nQ = QQ => !!QQ.state.field(SQ, !1) && (QQ.dispatch({
-       effects: VQ.of(!0)
-     }), !0);
-     class xQ {
-       constructor(QQ, WQ) {
-         this.active = QQ, this.context = WQ, this.time = Date.now(), this.updates = [], this.done = void 0
+       evaluate(MM) {
+         return lM.key = 0, this._interpolate(MM, lM)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L766-L857` → after: `L156-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L156-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L156-L190) · [Before (L766-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L766-L857)

```diff
-     }
-     const YQ = qQ.q.fromClass(class {
-         constructor(QQ) {
-           this.view = QQ, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
-           for (let WQ of QQ.state.field(SQ).active) WQ.isPending && this.startQuery(WQ)
-         }
-         update(QQ) {
-           let WQ = QQ.state.field(SQ),
-             XQ = QQ.state.facet(UQ);
-           if (!QQ.selectionSet && !QQ.docChanged && QQ.startState.field(SQ) == WQ) return;
-           let wQ = QQ.transactions.some((QQ => {
-             let WQ = uQ(QQ, XQ);
-             return 8 & WQ || (QQ.selection || QQ.docChanged) && !(3 & WQ)
-           }));
-           for (let sQ = 0; sQ < this.running.length; sQ++) {
-             let WQ = this.running[sQ];
- ... (76 more removed lines; see GitHub link above)
+       _interpolate(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (rM.lS === EM.ANIMATIONLOOPMODE_CONSTANT && rM.repeatCount > 0) return rM.highLimitValue.clone ? rM.highLimitValue.clone() : rM.highLimitValue;
+         const OM = this._keys;
+         let SM;
+         if (this._coreAnimation) SM = this._coreAnimation._key;
+         else {
+           const jM = OM.length;
+           for (SM = rM.key; SM >= 0 && MM < OM[SM].frame;) --SM;
+           for (; SM + 1 <= jM - 1 && MM >= OM[SM + 1].frame;) ++SM;
+           if (rM.key = SM, SM < 0) return iM ? void 0 : this._getKeyValue(OM[0].value);
+           if (SM + 1 > jM - 1) return iM ? void 0 : this._getKeyValue(OM[jM - 1].value);
+           this._key = SM
+         }
+         const jM = OM[SM],
+           aM = OM[SM + 1];
+ ... (19 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L859-L866` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L192) · [Before (L859-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L859-L866)

```diff
-           },
-           compositionstart() {
-             this.composing = 1
-           },
-           compositionend() {
-             3 == this.composing && setTimeout((() => this.view.dispatch({
-               effects: VQ.of(!1)
-             })), 20), this.composing = 0
+             break
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L868-L908` → after: `L194-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L194-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L194-L203) · [Before (L868-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L868-L908)

```diff
-         }
-       }),
-       NQ = "object" == typeof navigator && /Win/.test(navigator.platform),
-       ZQ = wQ.t.highest(qQ.k.domEventHandlers({
-         keydown(QQ, WQ) {
-           let XQ = WQ.state.field(SQ, !1);
-           if (!XQ || !XQ.open || XQ.open.disabled || XQ.open.selected < 0 || QQ.key.length > 1 || QQ.ctrlKey && (!NQ || !QQ.altKey) || QQ.metaKey) return !1;
-           let wQ = XQ.open.options[XQ.open.selected],
-             qQ = XQ.active.find((QQ => QQ.source == wQ.source)),
-             TQ = wQ.completion.commitCharacters || qQ.result.commitCharacters;
-           return TQ && TQ.indexOf(QQ.key) > -1 && tQ(WQ, wQ), !1
-         }
-       })),
-       OQ = qQ.k.baseTheme({
-         ".cm-tooltip.cm-tooltip-autocomplete": {
-           "& > ul": {
- ... (25 more removed lines; see GitHub link above)
+           case EM.ANIMATIONTYPE_QUATERNION: {
+             const MM = QM ? this.quaternionInterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.quaternionInterpolateFunction(PM, nM, LM);
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+               case EM.ANIMATIONLOOPMODE_YOYO:
+                 return MM;
+               case EM.ANIMATIONLOOPMODE_RELATIVE:
+               case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
+                 return MM.addInPlace((rM.offsetValue || mM).scale(rM.repeatCount))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L911-L1019` → after: `L207-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L207-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L207-L218) · [Before (L911-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L911-L1019)

```diff
-         },
-         "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
-           background: "#17c",
-           color: "white"
-         },
-         "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
-           background: "#777"
-         },
-         "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
-           background: "#347",
-           color: "white"
-         },
-         "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
-           background: "#444"
-         },
-         ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
- ... (93 more removed lines; see GitHub link above)
+           case EM.ANIMATIONTYPE_VECTOR3: {
+             const MM = QM ? this.vector3InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.vector3InterpolateFunction(PM, nM, LM);
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+               case EM.ANIMATIONLOOPMODE_YOYO:
+                 return MM;
+               case EM.ANIMATIONLOOPMODE_RELATIVE:
+               case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
+                 return MM.add((rM.offsetValue || HM).scale(rM.repeatCount))
+             }
+             break
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1021-L1024` → after: `L220-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L220-L231) · [Before (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1021-L1024)

```diff
-         },
-         ".cm-completionIcon-keyword": {
-           "&:after": {
-             content: "'\ud83d\udd11\ufe0e'"
+           case EM.ANIMATIONTYPE_VECTOR2: {
+             const MM = QM ? this.vector2InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.vector2InterpolateFunction(PM, nM, LM);
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+               case EM.ANIMATIONLOOPMODE_YOYO:
+                 return MM;
+               case EM.ANIMATIONLOOPMODE_RELATIVE:
+               case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
+                 return MM.add((rM.offsetValue || hM).scale(rM.repeatCount))
+             }
+             break
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1026-L1029` → after: `L233-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L233-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L233-L255) · [Before (L1026-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1026-L1029)

```diff
-         },
-         ".cm-completionIcon-namespace": {
-           "&:after": {
-             content: "'\u25a2'"
+           case EM.ANIMATIONTYPE_SIZE:
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+               case EM.ANIMATIONLOOPMODE_YOYO:
+                 return this.sizeInterpolateFunction(PM, nM, LM);
+               case EM.ANIMATIONLOOPMODE_RELATIVE:
+               case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
+                 return this.sizeInterpolateFunction(PM, nM, LM).add((rM.offsetValue || JM).scale(rM.repeatCount))
+             }
+             break;
+           case EM.ANIMATIONTYPE_COLOR3: {
+             const MM = QM ? this.color3InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.color3InterpolateFunction(PM, nM, LM);
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+ ... (7 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1031-L1036` → after: `L257-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L257-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L257-L268) · [Before (L1031-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1031-L1036)

```diff
-         },
-         ".cm-completionIcon-text": {
-           "&:after": {
-             content: "'abc'",
-             fontSize: "50%",
-             verticalAlign: "middle"
+           case EM.ANIMATIONTYPE_COLOR4: {
+             const MM = QM ? this.color4InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.color4InterpolateFunction(PM, nM, LM);
+             switch (rM.lS) {
+               case EM.ANIMATIONLOOPMODE_CYCLE:
+               case EM.ANIMATIONLOOPMODE_CONSTANT:
+               case EM.ANIMATIONLOOPMODE_YOYO:
+                 return MM;
+               case EM.ANIMATIONLOOPMODE_RELATIVE:
+               case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
+                 return MM.add((rM.offsetValue || yM).scale(rM.repeatCount))
+             }
+             break
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1039-L1057` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L281) · [Before (L1039-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1039-L1057)

```diff
-       });
-     class KQ {
-       constructor(QQ, WQ, XQ, wQ) {
-         this.field = QQ, this.line = WQ, this.from = XQ, this.to = wQ
-       }
-     }
-     class mQ {
-       constructor(QQ, WQ, XQ) {
-         this.field = QQ, this.from = WQ, this.to = XQ
-       }
-       map(QQ) {
-         let WQ = QQ.mapPos(this.from, -1, wQ.s.TrackDel),
-           XQ = QQ.mapPos(this.to, 1, wQ.s.TrackDel);
-         return null == WQ || null == XQ ? null : new mQ(this.field, WQ, XQ)
-       }
-     }
- ... (3 more removed lines; see GitHub link above)
+         return 0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1059-L1077` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L283-L284) · [Before (L1059-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1059-L1077)

```diff
-       instantiate(QQ, WQ) {
-         let XQ = [],
-           wQ = [WQ],
-           qQ = QQ.doc.lineAt(WQ),
-           zQ = /^\s*/.exec(qQ.text)[0];
-         for (let FQ of this.lines) {
-           if (XQ.length) {
-             let XQ = zQ,
-               qQ = /^\t*/.exec(FQ)[0].length;
-             for (let WQ = 0; WQ < qQ; WQ++) XQ += QQ.facet(TQ.V);
-             wQ.push(WQ + XQ.length - qQ), FQ = XQ + FQ.slice(qQ)
-           }
-           XQ.push(FQ), WQ += FQ.length + 1
-         }
-         let sQ = this.fieldPositions.map((QQ => new mQ(QQ.field, wQ[QQ.line] + QQ.from, wQ[QQ.line] + QQ.to)));
-         return {
- ... (3 more removed lines; see GitHub link above)
+       matrixInterpolateFunction(MM, rM, iM, SM) {
+         return EM.AllowMatrixDecomposeForInterpolation ? SM ? (OM.d.DecomposeLerpToRef(MM, rM, iM, SM), SM) : OM.d.DecomposeLerp(MM, rM, iM) : SM ? (OM.d.LerpToRef(MM, rM, iM, SM), SM) : OM.d.Lerp(MM, rM, iM)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1079-L1103` → after: `L286-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L286-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L286-L293) · [Before (L1079-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1079-L1103)

```diff
-       static parse(QQ) {
-         let WQ, XQ = [],
-           wQ = [],
-           qQ = [];
-         for (let TQ of QQ.split(/\r\n?|\n/)) {
-           for (; WQ = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(TQ);) {
-             let QQ = WQ[1] ? +WQ[1] : null,
-               zQ = WQ[2] || WQ[3] || "",
-               sQ = -1,
-               FQ = zQ.replace(/\\[{}]/g, (QQ => QQ[1]));
-             for (let WQ = 0; WQ < XQ.length; WQ++)(null != QQ ? XQ[WQ].seq == QQ : FQ && XQ[WQ].name == FQ) && (sQ = WQ);
-             if (sQ < 0) {
-               let WQ = 0;
-               for (; WQ < XQ.length && (null == QQ || null != XQ[WQ].seq && XQ[WQ].seq < QQ);) WQ++;
-               XQ.splice(WQ, 0, {
-                 seq: QQ,
- ... (9 more removed lines; see GitHub link above)
+       clone() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = new EM(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.lS);
+         if (rM.enableBlending = this.enableBlending, rM.blendingSpeed = this.blendingSpeed, this._keys && rM.setKeys(this._keys, !1, MM), this._ranges) {
+           rM._ranges = {};
+           for (const MM in this._ranges) {
+             const iM = this._ranges[MM];
+             iM && (rM._ranges[MM] = iM.clone())
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1110` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L296) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1110)

```diff
-         return new MQ(wQ, qQ)
+         return rM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1112-L1120` → after: `L298-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L298-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L298-L343) · [Before (L1112-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1112-L1120)

```diff
-     }
-     let QW = qQ.e.widget({
-         widget: new class extends qQ.u {
-           toDOM() {
-             let QQ = document.createElement("span");
-             return QQ.className = "cm-snippetFieldPosition", QQ
-           }
-           ignoreEvent() {
-             return !1
+       setKeys(MM) {
+         let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = MM;
+         else if (this._keys = MM.slice(0), rM)
+           for (let iM = 0; iM < this._keys.length; iM++) {
+             const MM = this._keys[iM];
+             this._keys[iM] = {
+               frame: MM.frame,
+               value: MM.value.clone ? MM.value.clone() : MM.value,
+               inTangent: MM.inTangent && MM.inTangent.clone ? MM.inTangent.clone() : MM.inTangent,
+               outTangent: MM.outTangent && MM.outTangent.clone ? MM.outTangent.clone() : MM.outTangent,
+               interpolation: MM.interpolation,
+               lockedTangent: MM.lockedTangent,
+               easingFunction: MM.easingFunction
+             }
+           }
+ ... (30 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1123-L1136` → after: `L347-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L347-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L347-L352) · [Before (L1123-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1123-L1136)

```diff
-       }),
-       WW = qQ.e.mark({
-         class: "cm-snippetField"
-       });
-     class XW {
-       constructor(QQ, WQ) {
-         this.Qy = QQ, this.active = WQ, this.deco = qQ.e.set(QQ.map((QQ => (QQ.from == QQ.to ? QW : WW).range(QQ.from, QQ.to))), !0)
-       }
-       map(QQ) {
-         let WQ = [];
-         for (let XQ of this.Qy) {
-           let wQ = XQ.map(QQ);
-           if (!wQ) return null;
-           WQ.push(wQ)
+         MM.Ld = [];
+         for (const OM in this._ranges) {
+           const rM = this._ranges[OM];
+           if (!rM) continue;
+           const iM = {};
+           iM.name = OM, iM.from = rM.from, iM.to = rM.to, MM.Ld.push(iM)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1138` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L354) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1138)

```diff
-         return new XW(WQ, this.active)
+         return MM
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1140-L1141` → after: `L356-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L356-L358) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1140-L1141)

```diff
-       selectionInsideField(QQ) {
-         return QQ.Qy.every((QQ => this.Qy.some((WQ => WQ.field == this.active && WQ.from <= QQ.from && WQ.to >= QQ.to))))
+       static _UniversalLerp(MM, rM, iM) {
+         const OM = MM.constructor;
+         return OM.Lerp ? OM.Lerp(MM, rM, iM) : OM.Slerp ? OM.Slerp(MM, rM, iM) : MM.toFixed ? MM * (1 - iM) + iM * rM : rM
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1164-L1179` → after: `L362-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L362-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L362-L386) · [Before (L1164-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1164-L1179)

```diff
-     function sW(QQ) {
-       let WQ = MQ.parse(QQ);
-       return (QQ, XQ, qQ, TQ) => {
-         let {
-           text: zQ,
-           Qy: sQ
-         } = WQ.instantiate(QQ.state, qQ), {
-           main: FQ
-         } = QQ.state.selection, PQ = {
-           changes: {
-             from: qQ,
-             to: TQ == FQ.from ? FQ.to : TQ,
-             insert: wQ.M.of(zQ)
-           },
-           scrollIntoView: !0,
-           annotations: XQ ? [IQ.of(XQ), wQ.O.userEvent.of("input.complete")] : void 0
+     function UM(MM, rM, iM) {
+       let SM;
+       SM = "object" === typeof rM ? rM : {
+         referenceFrame: rM ?? 0,
+         range: iM,
+         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
+       };
+       let jM = MM;
+       SM.cloneOriginalAnimation && (jM = MM.clone(), jM.name = SM.clonedAnimationName || jM.name);
+       const aM = jM.getKeys();
+       if (!aM.length) return jM;
+       const PM = SM.referenceFrame && SM.referenceFrame >= 0 ? SM.referenceFrame : 0;
+       let nM = 0;
+       const QM = aM[0];
+       let zM = aM.length - 1;
+ ... (9 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1181-L1184` → after: `L388-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L388-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L388-L440) · [Before (L1181-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1181-L1184)

```diff
-         if (sQ.length && (PQ.selection = zW(sQ, 0)), sQ.some((QQ => QQ.field > 0))) {
-           let WQ = new XW(sQ, 0),
-             XQ = PQ.effects = [wW.of(WQ)];
-           void 0 === QQ.state.field(TW, !1) && XQ.push(wQ.G.appendConfig.of([TW, JW, IW, OQ]))
+       let HM = QM.frame,
+         hM = LM.frame;
+       if (SM.range) {
+         const MM = jM.getRange(SM.range);
+         MM && (HM = MM.from, hM = MM.to)
+       } else HM = SM.fromFrame ?? HM, hM = SM.toFrame ?? hM;
+       HM !== QM.frame && (nM = jM.createKeyForFrame(HM)), hM !== LM.frame && (zM = jM.createKeyForFrame(hM));
+       const JM = jM.getKeys();
+       if (1 === JM.length) {
+         const MM = jM._getKeyValue(JM[0].value);
+         mM.referenceValue = MM.clone ? MM.clone() : MM
+       } else if (PM <= QM.frame) {
+         const MM = jM._getKeyValue(QM.value);
+         mM.referenceValue = MM.clone ? MM.clone() : MM
+       } else if (PM >= LM.frame) {
+         const MM = jM._getKeyValue(LM.value);
+ ... (37 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1227-L1231` → after: `L446-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L446-L448) · [Before (L1227-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1227-L1231)

```diff
-     function rW(QQ, WQ) {
-       return {
-         ...WQ,
-         apply: sW(QQ)
-       }
+     function GM(MM, rM, iM, OM) {
+       const SM = new EM(MM + "Animation", MM, iM, rM, EM.ANIMATIONLOOPMODE_CONSTANT);
+       return SM.setEasingFunction(OM), SM
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1277-L1278` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L451-L453) · [Before (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1277-L1278)

```diff
-     function DW() {
-       return [vW, VW]
+     function CM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
+       const LM = EM._PrepareAnimation(MM, iM, OM, SM, jM, aM, PM, nM);
+       return LM ? (rM.Hk && (zM = rM.Hk()), zM ? zM.beginDirectAnimation(rM, [LM], 0, SM, LM.lS !== EM.ANIMATIONLOOPMODE_CONSTANT, 1, QM) : null) : null
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1282-L1285` → after: `L456-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L456-L459) · [Before (L1282-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1282-L1285)

```diff
-     function GW(QQ) {
-       for (let WQ = 0; WQ < 16; WQ += 2)
-         if (pW.charCodeAt(WQ) == QQ) return pW.charAt(WQ + 1);
-       return (0, wQ.Z)(QQ < 128 ? QQ : QQ + 1)
+     function eM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
+       const LM = EM._PrepareAnimation(MM, OM, SM, jM, aM, PM, nM, QM);
+       if (!LM) return null;
+       return rM.Hk().beginDirectHierarchyAnimation(rM, iM, [LM], 0, jM, 1 === LM.lS, 1, zM)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1288-L1289` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L462-L464) · [Before (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1288-L1289)

```diff
-     function UW(QQ, WQ) {
-       return QQ.languageDataAt("closeBrackets", WQ)[0] || jW
+     function bM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
+       const zM = EM._PrepareAnimation(MM, iM, OM, SM, jM, aM, PM, nM);
+       return zM ? (rM.animations.push(zM), rM.Hk().beginAnimation(rM, 0, SM, 1 === zM.lS, 1, QM)) : null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1344-L1348` → after: `L467-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L467-L480) · [Before (L1344-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1344-L1348)

```diff
-     function HW(QQ, WQ) {
-       let XQ = !1;
-       return QQ.field(VW).between(0, QQ.doc.length, (QQ => {
-         QQ == WQ && (XQ = !0)
-       })), XQ
+     function wM(MM, rM, iM, OM, SM, jM, aM) {
+       let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+         nM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+         QM = arguments.length > 9 ? arguments[9] : void 0;
+       if (aM <= 0) return iM[MM] = rM, PM && PM(), null;
+       const zM = SM * (aM / 1e3);
+       jM.setKeys(QM ?? [{
+         frame: 0,
+         value: iM[MM].clone ? iM[MM].clone() : iM[MM]
+       }, {
+         frame: zM,
+         value: rM
+       }]), iM.animations || (iM.animations = []), iM.animations.push(jM);
+       return OM.beginAnimation(iM, 0, zM, !1, 1, PM ?? void 0, void 0, nM)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1352-L1353` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L484) · [Before (L1352-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L1352-L1353)

```diff
-       let XQ = QQ.sliceString(WQ, WQ + 2);
-       return XQ.slice(0, (0, wQ.Q)((0, wQ.P)(XQ, 0)))
+       zM.b.AppendSerializedAnimations(MM, rM)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16046-L16066` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L488-L489) · [Before (L16046-L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16046-L16066)

```diff
-       let WQ = [],
-         XQ = -1;
-       for (let wQ of QQ.selection.Qy) {
-         let qQ = QQ.doc.lineAt(wQ.from),
-           TQ = QQ.doc.lineAt(wQ.to);
-         if (wQ.empty || wQ.to != TQ.from || (TQ = QQ.doc.lineAt(wQ.to - 1)), XQ >= qQ.number) {
-           let QQ = WQ[WQ.length - 1];
-           QQ.to = TQ.to, QQ.Qy.push(wQ)
-         } else WQ.push({
-           from: qQ.from,
-           to: TQ.to,
-           Qy: [wQ]
-         });
-         XQ = TQ.number + 1
-       }
-       return WQ
- ... (5 more removed lines; see GitHub link above)
+       const rM = new EM(MM.name, MM.property, MM.framePerSecond, MM.dataType, MM.loopBehavior),
+         iM = MM.dataType,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16068-L16845` → after: `L491-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L491-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L491-L502) · [Before (L16068-L16845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16068-L16845)

```diff
-       for (let TQ of AW(QQ)) {
-         if (XQ ? TQ.to == QQ.doc.length : 0 == TQ.from) continue;
-         let WQ = QQ.doc.lineAt(XQ ? TQ.to + 1 : TQ.from - 1),
-           sQ = WQ.length + 1;
-         if (XQ) {
-           wQ.push({
-             from: TQ.to,
-             to: WQ.to
-           }, {
-             from: TQ.from,
-             insert: WQ.text + QQ.lineBreak
-           });
-           for (let WQ of TQ.Qy) qQ.push(zQ.k.range(Math.min(QQ.doc.length, WQ.anchor + sQ), Math.min(QQ.doc.length, WQ.head + sQ)))
-         } else {
-           wQ.push({
-             from: WQ.from,
- ... (762 more removed lines; see GitHub link above)
+       let aM, PM;
+       for (MM.enableBlending && (rM.enableBlending = MM.enableBlending), MM.blendingSpeed && (rM.blendingSpeed = MM.blendingSpeed), PM = 0; PM < MM.keys.length; PM++) {
+         const rM = MM.keys[PM];
+         let nM, QM, zM;
+         switch (iM) {
+           case EM.ANIMATIONTYPE_FLOAT:
+             aM = rM.values[0], rM.values.length >= 2 && (nM = rM.values[1]), rM.values.length >= 3 && (QM = rM.values[2]), rM.values.length >= 4 && (zM = rM.values[3]);
+             break;
+           case EM.ANIMATIONTYPE_QUATERNION:
+             if (aM = OM.h.FromArray(rM.values), rM.values.length >= 8) {
+               const MM = OM.h.FromArray(rM.values.slice(4, 8));
+               MM.equals(OM.h.Zero()) || (nM = MM)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16847-L16930` → after: `L504-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L504-L506) · [Before (L16847-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16847-L16930)

```diff
-           }))
-         }
-       }
-       cancel() {
-         this.isCancelled = !0, this.callbacks.length = 0
-       }
-       reset() {
-         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
-       }
-       get isDone() {
-         return this.isCancelled || this.isTimeExhausted
-       }
-     }
-     class BX {
-       constructor() {
-         this.interval = null, this.latches = new Set
- ... (68 more removed lines; see GitHub link above)
+             if (rM.values.length >= 12) {
+               const MM = OM.h.FromArray(rM.values.slice(8, 12));
+               MM.equals(OM.h.Zero()) || (QM = MM)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16932-L16963` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L508-L511) · [Before (L16932-L16963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16932-L16963)

```diff
-             RQ.current = null
-           }), 200), ("undefined" === typeof window ? new BX : (yX || (yX = new BX), yX)).add(RQ.current));
-           var WQ = QQ.state.doc.toString();
-           wQ(WQ, QQ)
-         }
-         qQ && qQ((QQ => ({
-           line: QQ.state.doc.lineAt(QQ.state.selection.main.from),
-           lineCount: QQ.state.doc.lines,
-           lineBreak: QQ.state.lineBreak,
-           length: QQ.state.doc.length,
-           readOnly: QQ.state.readOnly,
-           tabSize: QQ.state.tabSize,
-           selection: QQ.state.selection,
-           selectionAsSingle: QQ.state.selection.asSingle().main,
-           Qy: QQ.state.selection.Qy,
-           selectionCode: QQ.state.sliceDoc(QQ.state.selection.main.from, QQ.state.selection.main.to),
- ... (16 more removed lines; see GitHub link above)
+             rM.values.length >= 13 && (zM = rM.values[12]);
+             break;
+           case EM.ANIMATIONTYPE_MATRIX:
+             aM = OM.d.FromArray(rM.values), rM.values.length >= 17 && (zM = rM.values[16]);
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16965-L16966` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L513-L514) · [Before (L16965-L16966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16965-L16966)

```diff
-           case "dark":
-             PQ.push(rX);
+           case EM.ANIMATIONTYPE_COLOR3:
+             aM = SM.d.FromArray(rM.values), rM.values[3] && (nM = SM.d.FromArray(rM.values[3])), rM.values[4] && (QM = SM.d.FromArray(rM.values[4])), rM.values[5] && (zM = rM.values[5]);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16968` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L516-L517) · [Before (L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16968)

```diff
-           case "none":
+           case EM.ANIMATIONTYPE_COLOR4:
+             aM = SM.h.FromArray(rM.values), rM.values[4] && (nM = SM.h.FromArray(rM.values[4])), rM.values[5] && (QM = SM.h.FromArray(rM.values[5])), rM.values[6] && (zM = rM.values[6]);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16971` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L521) · [Before (L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16971)

```diff
-             PQ.push(qQ)
+             aM = OM.q.FromArray(rM.values), rM.values[3] && (nM = OM.q.FromArray(rM.values[3])), rM.values[4] && (QM = OM.q.FromArray(rM.values[4])), rM.values[5] && (zM = rM.values[5])
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L16973-L17123` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L523-L524) · [Before (L16973-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L16973-L17123)

```diff
-         return !1 === XQ && PQ.push(sQ.k.editable.of(!1)), wQ && PQ.push(zQ.l.readOnly.of(!0)), [...PQ]
-       }({
-         theme: rQ,
-         editable: GQ,
-         readOnly: UQ,
-         placeholder: pQ,
-         indentWithTab: bQ,
-         basicSetup: vQ
-       }), kQ = [uQ, CQ, ...LQ];
-       return PQ && "function" === typeof PQ && kQ.push(sQ.k.updateListener.of(PQ)), kQ = kQ.concat(gQ), (0, TQ.useLayoutEffect)((() => {
-         if (aQ && !cQ) {
-           var QQ = {
-               doc: WQ,
-               selection: XQ,
-               extensions: kQ
-             },
- ... (135 more removed lines; see GitHub link above)
+         const LM = {};
+         LM.frame = rM.frame, LM.value = aM, void 0 != nM && (LM.inTangent = nM), void 0 != QM && (LM.outTangent = QM), void 0 != zM && (LM.interpolation = zM), jM.push(LM)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17125` → after: `L526-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L526-L527) · [Before (L17125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17125)

```diff
-       for (; WQ < arguments.length; WQ++) qQ(QQ, arguments[WQ]);
+       if (rM.setKeys(jM), MM.Ld)
+         for (PM = 0; PM < MM.Ld.length; PM++) aM = MM.Ld[PM], rM.createRange(aM.name, aM.from, aM.to);
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17129-L17136` → after: `L577-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L577-L578) · [Before (L17129-L17136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17129-L17136)

```diff
-     function qQ(QQ, WQ) {
-       if ("string" == typeof WQ) QQ.appendChild(document.createTextNode(WQ));
-       else if (null == WQ);
-       else if (null != WQ.nodeType) QQ.appendChild(WQ);
-       else {
-         if (!Array.isArray(WQ)) throw new RangeError("Unsupported child node: " + WQ);
-         for (var XQ = 0; XQ < WQ.length; XQ++) qQ(QQ, WQ[XQ])
-       }
+     function sM() {
+       WM || (WM = !0, EM.Parse = gM, EM.ParseFromFileAsync = uM, EM.ParseFromSnippetAsync = RM, EM.CreateFromSnippetAsync = pM, EM.CreateAnimation = GM, EM.CreateAndStartAnimation = CM, EM.CreateAndStartHierarchyAnimation = eM, EM.CreateMergeAndStartAnimation = bM, EM.MakeAnimati … [truncated]
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17142` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L581) · [Before (L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17142)

```diff
-   41558: (QQ, WQ, XQ) => {
+   42208: (MM, rM, iM) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17144` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L583) · [Before (L17144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17144)

```diff
-       b: () => zQ
+       d: () => OM
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17191-L17223` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L586-L587) · [Before (L17191-L17223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17191-L17223)

```diff
-       constructor(QQ, WQ) {
-         let XQ = QQ.ownerDocument || QQ,
-           wQ = XQ.defaultView;
-         if (!QQ.head && QQ.adoptedStyleSheets && wQ.CSSStyleSheet) {
-           let WQ = sQ.get(XQ);
-           if (WQ) return QQ[qQ] = WQ;
-           this.sheet = new wQ.CSSStyleSheet, sQ.set(XQ, this)
-         } else this.styleTag = XQ.createElement("style"), WQ && this.styleTag.setAttribute("nonce", WQ);
-         this.modules = [], QQ[qQ] = this
-       }
-       mount(QQ, WQ) {
-         let XQ = this.sheet,
-           wQ = 0,
-           qQ = 0;
-         for (let TQ = 0; TQ < QQ.length; TQ++) {
-           let WQ = QQ[TQ],
- ... (17 more removed lines; see GitHub link above)
+       constructor(MM, rM, iM) {
+         this.name = MM, this.from = rM, this.to = iM
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L17225-L17226` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L589-L590) · [Before (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L17225-L17226)

```diff
-       setNonce(QQ) {
-         this.styleTag && this.styleTag.getAttribute("nonce") != QQ && this.styleTag.setAttribute("nonce", QQ)
+       clone() {
+         return new OM(this.name, this.from, this.to)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L2146)

```diff
-   41550: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => DW,
-       d: () => AQ,
-       ChangeSet: () => RQ,
-       g: () => iW,
-       k: () => tQ,
-       l: () => EW,
-       o: () => nQ,
-       s: () => cQ,
-       t: () => qW,
-       A: () => tW,
-       x: () => oW,
-       C: () => uW,
-       G: () => UW,
-       I: () => mQ,
- ... (2127 more removed lines; see GitHub link above)
+   42300: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/304.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/304.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L4284` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/304.js#L4-L6) · [Before (L4-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/304.js#L4-L4284)

```diff
-   41627: QQ => {
-     function WQ(QQ) {
-       var WQ = new Error("Cannot find module '" + QQ + "'");
-       throw WQ.code = "MODULE_NOT_FOUND", WQ
-     }
-     WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 41627, QQ.exports = WQ
-   },
-   41694: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => wQ,
-       i: () => qQ
-     });
-     const wQ = "Sends one question to the AI",
-       qQ = {
-         title: wQ,
-         "data-asks-ai": !0
- ... (4265 more removed lines; see GitHub link above)
+   42307: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/305.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/305.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L7360` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L5) · [Before (L4-L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L7360)

```diff
-   41613: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => wQ
-     });
-     const wQ = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
- ... (7341 more removed lines; see GitHub link above)
+   42309: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/306.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/306.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L230` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L5) · [Before (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L230)

```diff
-   41615: (QQ, WQ, XQ) => {
-     function wQ() {
-       return wQ = Object.assign ? Object.assign.bind() : function(QQ) {
-         for (var WQ = 1; WQ < arguments.length; WQ++) {
-           var XQ = arguments[WQ];
-           for (var wQ in XQ)({}).hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
-         }
-         return QQ
-       }, wQ.apply(null, arguments)
-     }
-     XQ.d(WQ, {
-       c: () => rQ,
-       g: () => sQ
-     });
-     var qQ = !1;
-     try {
- ... (211 more removed lines; see GitHub link above)
+   42315: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/307.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/307.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710)

#### 1. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L125586` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L5) · [Before (L4-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L125586)

```diff
-   41631: (QQ, WQ, XQ) => {
-     var wQ = "/index.js",
-       qQ = {};
-     (QQ => {
-       var WQ = Object.defineProperty,
-         qQ = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (QQ, XQ) => {
-           for (var wQ in XQ) WQ(QQ, wQ, {
-             get: XQ[wQ],
-             enumerable: !0
-           })
-         }),
-         TQ = {};
-       qQ(TQ, {
-         ANONYMOUS: () => Z3,
-         AccessFlags: () => sT,
-         AssertionLevel: () => pX,
- ... (125567 more removed lines; see GitHub link above)
+   42318: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/308.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/308.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L79` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L6) · [Before (L4-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L79)

```diff
-   41718: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       collectImportedWorldCodePluginNames: () => PQ
-     });
-     var wQ = XQ(2531),
-       qQ = XQ(37158),
-       TQ = XQ(41631),
-       zQ = XQ.n(TQ);
- 
-     function sQ(QQ) {
-       return zQ().isImportDeclaration(QQ) && zQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
-         const WQ = QQ.importClause;
-         if (!WQ) return !0;
-         if (WQ.isTypeOnly) return !1;
-         const XQ = WQ.namedBindings;
-         return !(XQ && !zQ().isNamespaceImport(XQ)) || !!WQ.name || XQ.elements.some((QQ => !QQ.isTypeOnly))
- ... (60 more removed lines; see GitHub link above)
+   42326: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/309.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/309.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L413` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L5) · [Before (L4-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L413)

```diff
-   41701: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => bQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(5071),
-       TQ = XQ(1739),
-       zQ = XQ(1081),
-       sQ = XQ.n(zQ),
-       FQ = XQ(1507),
-       PQ = XQ(1226),
-       gQ = XQ(5036),
-       JQ = XQ(5049),
-       rQ = XQ(5057),
-       IQ = XQ(1145);
- 
- ... (394 more removed lines; see GitHub link above)
+   42332: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/310.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/310.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L108` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/310.js#L4-L5) · [Before (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/310.js#L4-L108)

```diff
-   41724: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       ensureLocalBloxdTypes: () => VQ
-     });
-     var wQ = XQ(5085),
-       qQ = XQ(41613),
-       TQ = XQ(41611),
-       zQ = XQ(37152),
-       sQ = XQ(37158),
-       FQ = XQ(37165);
-     const PQ = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
- 
-     function gQ(QQ) {
- ... (89 more removed lines; see GitHub link above)
+   42339: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/311.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/311.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L72` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/311.js#L4-L5) · [Before (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/311.js#L4-L72)

```diff
-   41786: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       installImageBitmapTextureLoader: () => PQ
-     });
-     var wQ = XQ(40150),
-       qQ = XQ(41791),
-       TQ = XQ(3480);
- 
-     function zQ(QQ, WQ) {
-       if ("string" === typeof QQ) {
-         const XQ = (0, TQ.i)(QQ);
-         return XQ ? new Blob([(0, TQ.e)(XQ.base64)], {
-           type: XQ.mimeType || WQ
-         }) : null
-       }
-       return QQ instanceof Blob ? QQ : new Blob([QQ], {
- ... (53 more removed lines; see GitHub link above)
+   42341: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/312.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/312.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L4405` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/312.js#L4-L5) · [Before (L4-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/312.js#L4-L4405)

```diff
-   41855: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(40371),
-       qQ = XQ(41858);
-     class TQ {
-       constructor(QQ, WQ) {
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = XQ, this.twQ = [], this._maxBlockCapacity = WQ || 64, this._selectionContent = new wQ.d(1024), this._creationFunc = QQ
-       }
-       update(QQ, WQ, XQ) {
-         qQ.b._CreateBlocks(QQ, WQ, XQ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       hwQ(QQ) {
-         for (let WQ = 0; WQ < this.blocks.length; WQ++) {
- ... (4386 more removed lines; see GitHub link above)
+   42344: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 1. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L1379` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L5) · [Before (L4-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L1379)

```diff
-   41957: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => TQ
-     });
-     var wQ = XQ(41945),
-       qQ = XQ(41963);
- 
-     function TQ(QQ) {
-       (0, qQ.e)(QQ), (0, wQ.p)(QQ);
-       const WQ = QQ._surfaces;
-       for (const XQ of WQ) XQ._renderingContexts.length = 0, XQ._ro?.disconnect(), XQ._context.unconfigure();
-       WQ.length = 0;
-       try {
-         QQ._disposeManagedResources?.(), QQ._disposeStorageBuffers?.()
-       } finally {
-         QQ._device.destroy()
- ... (1360 more removed lines; see GitHub link above)
+   42353: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/314.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/314.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L27` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L5) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L27)

```diff
-   41991: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       parseShaderPack: () => wQ
-     });
- 
-     function wQ(QQ) {
-       var WQ, XQ;
-       const wQ = QQ.get("shaderPackUrl"),
-         qQ = null !== (WQ = QQ.get("shaderPackMode")) && void 0 !== WQ ? WQ : "strict";
-       if (null === wQ) {
-         if (QQ.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
-       }
-       if ("lite" !== QQ.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(QQ) {
-           return "strict" === QQ || "allow" === QQ
- ... (8 more removed lines; see GitHub link above)
+   42360: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/315.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/315.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L429` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L5) · [Before (L4-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L429)

```diff
-   42014: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => PQ
-     });
-     var wQ = XQ(37370),
-       qQ = XQ(37404),
-       TQ = XQ(40250),
-       zQ = XQ(37374),
-       sQ = XQ(37546);
-     class FQ {
-       constructor(QQ, WQ, XQ, wQ) {
-         this.name = QQ, this.worldAxisForNormal = WQ, this.worldAxisForFileX = XQ, this.worldAxisForFileY = wQ
-       }
-     }
-     class PQ {
-       static _NearestPow2Floor(QQ) {
- ... (410 more removed lines; see GitHub link above)
+   42367: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/316.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/316.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/316.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/316.js#L2)

```diff
- export const ids = [315, 316];
+ export const ids = [316];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L468` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/316.js#L4-L5) · [Before (L4-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/316.js#L4-L468)

```diff
-   42025: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _DDSTextureLoader: () => TQ
-     });
-     var wQ = XQ(40250),
-       qQ = XQ(42012);
-     class TQ {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(QQ, WQ, XQ, TQ) {
-         const zQ = WQ.Uj();
-         let sQ, FQ = !1,
-           PQ = 1e3;
-         if (Array.isArray(QQ))
-           for (let wQ = 0; wQ < QQ.length; wQ++) {
- ... (449 more removed lines; see GitHub link above)
+   42371: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/317.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/317.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691)

#### 1. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L463` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L5) · [Before (L4-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L463)

```diff
-   42034: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _ENVTextureLoader: () => HQ
-     });
-     var wQ = XQ(40206),
-       qQ = XQ(37370),
-       TQ = XQ(37404),
-       zQ = XQ(40250),
-       sQ = XQ(40103),
-       FQ = XQ(40253),
-       PQ = (XQ(40355), XQ(42041)),
-       gQ = XQ(38956),
-       JQ = (XQ(42055), XQ(42076), XQ(40331));
-     const rQ = "image/png",
-       IQ = [134, 22, 135, 150, 246, 214, 150, 54];
- 
- ... (444 more removed lines; see GitHub link above)
+   42377: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/318.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/318.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/318.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/318.js#L4-L101)

```diff
-   42021: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _IESTextureLoader: () => sQ
-     });
-     var wQ = XQ(37404);
- 
-     function qQ(QQ) {
-       return QQ.split(" ").filter((QQ => "" !== QQ)).map((QQ => parseFloat(QQ)))
-     }
- 
-     function TQ(QQ, WQ, XQ) {
-       for (; XQ.length !== WQ;) {
-         const WQ = qQ(QQ.lines[QQ.index++]);
-         XQ.push(...WQ)
-       }
-     }
- ... (82 more removed lines; see GitHub link above)
+   42380: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/319.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/319.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L285` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/319.js#L4-L5) · [Before (L4-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/319.js#L4-L285)

```diff
-   42032: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _BasisTextureLoader: () => DQ
-     });
-     var wQ, qQ = XQ(40357),
-       TQ = XQ(38956),
-       zQ = XQ(40724),
-       sQ = XQ(40103);
- 
-     function FQ() {
-       const QQ = 0,
-         WQ = 1,
-         XQ = 2,
-         wQ = 3,
-         qQ = 6,
-         TQ = 8,
- ... (266 more removed lines; see GitHub link above)
+   42383: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/320.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/320.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68)

#### 1. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L2020` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L5) · [Before (L4-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L2020)

```diff
-   42064: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => VQ
-     });
-     var wQ = XQ(37399),
-       qQ = XQ(37370),
-       TQ = XQ(40724),
-       zQ = XQ(40406),
-       sQ = XQ(40206),
-       FQ = XQ(38956),
-       PQ = XQ(40400),
-       gQ = XQ(40422),
-       JQ = XQ(37379),
-       rQ = XQ(40164),
-       IQ = XQ(40371),
-       jQ = XQ(40470);
- ... (2001 more removed lines; see GitHub link above)
+   42389: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/321.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/321.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L172` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/321.js#L4-L5) · [Before (L4-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/321.js#L4-L172)

```diff
-   42086: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _HDRTextureLoader: () => gQ
-     });
-     var wQ = XQ(37370);
-     class qQ {
-       static ConvertPanoramaToCubemap(QQ, WQ, XQ, wQ) {
-         let qQ, TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!QQ) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (QQ.length != WQ * XQ * 3) {
-           if (QQ.length != WQ * XQ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           qQ = 4
-         } else qQ = 3;
-         return {
-           front: this.CreateCubemapTexture(wQ, this.FACE_FRONT, QQ, WQ, XQ, TQ, zQ, qQ),
- ... (153 more removed lines; see GitHub link above)
+   42397: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/322.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/322.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L458` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/322.js#L4-L5) · [Before (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/322.js#L4-L458)

```diff
-   42092: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _KTXTextureLoader: () => jQ
-     });
-     var wQ = XQ(38956);
-     class qQ {
-       constructor(QQ, WQ) {
-         if (this.data = QQ, this.isInvalid = !1, !qQ.IsValid(QQ)) return this.isInvalid = !0, void wQ.b.Error("texture missing KTX identifier");
-         const XQ = Uint32Array.BYTES_PER_ELEMENT,
-           TQ = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * XQ),
-           zQ = 67305985 === TQ.getUint32(0, !0);
-         return this.glType = TQ.getUint32(1 * XQ, zQ), this.glTypeSize = TQ.getUint32(2 * XQ, zQ), this.glFormat = TQ.getUint32(3 * XQ, zQ), this.glInternalFormat = TQ.getUint32(4 * XQ, zQ), this.glBaseInternalFormat = TQ.getUint32(5 * XQ, zQ), this.pixelWidth = TQ.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(QQ, WQ) {
-         switch (this.loadType) {
-           case qQ.COMPRESSED_2D:
- ... (439 more removed lines; see GitHub link above)
+   42404: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/323.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/323.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L172` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/323.js#L4-L5) · [Before (L4-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/323.js#L4-L172)

```diff
-   42105: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       _TGATextureLoader: () => sQ
-     });
-     var wQ = XQ(38956);
- 
-     function qQ(QQ) {
-       let WQ = 0;
-       return {
-         id_length: QQ[WQ++],
-         colormap_type: QQ[WQ++],
-         image_type: QQ[WQ++],
-         colormap_index: QQ[WQ++] | QQ[WQ++] << 8,
-         colormap_length: QQ[WQ++] | QQ[WQ++] << 8,
-         colormap_size: QQ[WQ++],
-         origin: [QQ[WQ++] | QQ[WQ++] << 8, QQ[WQ++] | QQ[WQ++] << 8],
- ... (153 more removed lines; see GitHub link above)
+   42409: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/324.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/324.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L772` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/324.js#L4-L5) · [Before (L4-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/324.js#L4-L772)

```diff
-   42114: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       ReadExrDataAsync: () => JW,
-       _ExrTextureLoader: () => gW
-     });
-     var wQ = XQ(38956),
-       qQ = XQ(37404),
-       TQ = XQ(40337);
-     const zQ = 4,
-       sQ = 4,
-       FQ = 1,
-       PQ = 2,
-       gQ = 8,
-       JQ = 65536,
-       rQ = JQ >> 3,
-       IQ = 14,
- ... (753 more removed lines; see GitHub link above)
+   42412: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/325.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/325.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02)

#### 1. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L105` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/325.js#L4-L5) · [Before (L4-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/325.js#L4-L105)

```diff
-   42294: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpVertex",
-       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42193: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (86 more removed lines; see GitHub link above)
+   42421: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/326.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/326.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea)

#### 1. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L4-L405` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/326.js#L4-L5) · [Before (L4-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/326.js#L4-L405)

```diff
-   42270: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42164: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
- ... (386 more removed lines; see GitHub link above)
+   42426: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/327.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/327.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L4-L184` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/327.js#L4-L5) · [Before (L4-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/327.js#L4-L184)

```diff
-   42328: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "decalFragmentDeclaration",
-       TQ = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42460: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (165 more removed lines; see GitHub link above)
+   42431: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/328.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/328.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L291` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/328.js#L4-L5) · [Before (L4-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/328.js#L4-L291)

```diff
-   42447: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpFragment",
-       TQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42421: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (272 more removed lines; see GitHub link above)
+   42433: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/329.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/329.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L241` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/329.js#L4-L5) · [Before (L4-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/329.js#L4-L241)

```diff
-   42270: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42164: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
- ... (222 more removed lines; see GitHub link above)
+   42442: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/330.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/330.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L91` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadcaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ea02a4763f7f262c50bb32007273b2f3e1432387e1483799d960f1a8a25dadca) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/330.js#L4-L5) · [Before (L4-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/330.js#L4-L91)

```diff
-   42148: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     XQ(42137), XQ(42143);
-     const qQ = "defaultUboDeclaration",
-       TQ = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42325: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
- ... (72 more removed lines; see GitHub link above)
+   42445: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/331.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/331.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824)

#### 1. `bundles/preprod.bloxd.io/chunks/js/331.js` (Changed code · before: `L4-L146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9fdf07b7a98d8a3372f0df0da430d876017ea71ba623f9ba496cce6cbdf58824) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/331.js#L4-L5) · [Before (L4-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/331.js#L4-L146)

```diff
-   42439: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42425: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (127 more removed lines; see GitHub link above)
+   42453: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/332.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/332.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782)

#### 1. `bundles/preprod.bloxd.io/chunks/js/332.js` (Changed code · before: `L4-L122` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f7e590a68af4f0e0865b2f4227d811e3ecac76dd2ff977090e9261891ba45782) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/332.js#L4-L5) · [Before (L4-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/332.js#L4-L122)

```diff
-   42439: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42425: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (103 more removed lines; see GitHub link above)
+   42461: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/333.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/333.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/333.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a87760de83c7145690a7d4bfd010d95353ce54b816fa9a6ebf01546dd0098c8a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/333.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/333.js#L4-L31)

```diff
-   42158: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "helperFunctions",
-       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61663: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       rgbdDecodePixelShader: () => FQ
- ... (12 more removed lines; see GitHub link above)
+   42468: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/334.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/334.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/334.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1c8e2895090360fd578b5a4e73ed718ccd68256e4dd844867179aa87a14c04ae) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/334.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/334.js#L4-L31)

```diff
-   42158: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "helperFunctions",
-       TQ = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61673: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       rgbdEncodePixelShader: () => FQ
- ... (12 more removed lines; see GitHub link above)
+   42476: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/335.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/335.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/335.js` (Changed code · before: `L4-L171` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-33f8e056e154c3c17a241e6f5fec775e11bcfb9a3c849faad03bf098b9c8acdc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/335.js#L4-L5) · [Before (L4-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/335.js#L4-L171)

```diff
-   42270: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42164: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
- ... (152 more removed lines; see GitHub link above)
+   42483: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/336.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/336.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L45` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43db237545a4c352269e9d573308dff97b645a1b4de239e4f0b6eac3444957e4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/336.js#L4-L5) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/336.js#L4-L45)

```diff
-   42169: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "instancesDeclaration",
-       TQ = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42257: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (26 more removed lines; see GitHub link above)
+   42491: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/337.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/337.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L126` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-174b685d8fd1ad7dd110a21ae7044cd1246e235aa312ddf52d671bb11018afbb) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/337.js#L4-L5) · [Before (L4-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/337.js#L4-L126)

```diff
-   42294: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpVertex",
-       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42193: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (107 more removed lines; see GitHub link above)
+   42499: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/338.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/338.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65fbf971d53d8465a1f8347902511411689b7b4c305257b3f11955aa3c29ba31) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/338.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/338.js#L4-L101)

```diff
-   42299: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneVertex",
-       TQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42199: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (82 more removed lines; see GitHub link above)
+   42508: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/339.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/339.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1ec1746f091e7aafd1ccab38f1450546b83d70ce053b2b821a7acf566cdab53f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/339.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/339.js#L4-L101)

```diff
-   42299: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneVertex",
-       TQ = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42199: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (82 more removed lines; see GitHub link above)
+   42516: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/340.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/340.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L81` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1018ac8fb998298af1c9ab80fa551ac7e9f327cd5f9ff2d518c2d98a351814a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/340.js#L4-L5) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/340.js#L4-L81)

```diff
-   42447: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpFragment",
-       TQ = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42421: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (62 more removed lines; see GitHub link above)
+   42518: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/341.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/341.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c662c0ed2c173a7ef050b9377c76d6605ac48c9feedf84725f14016205d4f07b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/341.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/341.js#L4-L73)

```diff
-   42439: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42425: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (54 more removed lines; see GitHub link above)
+   42525: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/342.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/342.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L124` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9d4d173c8b4971a27d1a35670a7f74ac2e2fceb714648b5809b0923f72d10ab1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/342.js#L4-L5) · [Before (L4-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/342.js#L4-L124)

```diff
-   42651: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpVertex",
-       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42566: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (105 more removed lines; see GitHub link above)
+   42527: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/343.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392)

#### 1. `bundles/preprod.bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fffe035b5d4bdff81ca00eb92e5f9a0df39458033b935d0561a784b094bf7392) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/343.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/343.js#L4-L73)

```diff
-   42539: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "instancesDeclaration",
-       TQ = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42626: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (54 more removed lines; see GitHub link above)
+   42529: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/344.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L116` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-265805c56a9f0838a49e0e5fd3bb801320a32e5a11ba56155a1a07d7dfb67a14) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/344.js#L4-L5) · [Before (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/344.js#L4-L116)

```diff
-   42511: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     XQ(42500), XQ(42509);
-     const qQ = "defaultUboDeclaration",
-       TQ = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42523: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
- ... (97 more removed lines; see GitHub link above)
+   42532: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/345.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/345.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L41` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-01c4d426ae7437ed2410681830ced804ba47f653bf34b972b8d254adbfb9365e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/345.js#L4-L41)

```diff
-   42523: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "helperFunctions",
-       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61912: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (22 more removed lines; see GitHub link above)
+   42535: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/346.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/346.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/346.js` (Changed code · before: `L4-L227` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d57de951928b5b14ba6d1d1c1f88b06691ff96a7e06e2d5a3a77e700b4e508ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/346.js#L4-L5) · [Before (L4-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/346.js#L4-L227)

```diff
-   42635: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42534: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (208 more removed lines; see GitHub link above)
+   42540: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/347.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84)

#### 1. `bundles/preprod.bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L379` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6fcc510fef0e71b626dbd5d11e4d41f1d43e50479af14d93c4ccae22518d8f84) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/347.js#L4-L5) · [Before (L4-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/347.js#L4-L379)

```diff
-   42635: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42534: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (360 more removed lines; see GitHub link above)
+   42542: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/348.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/348.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934)

#### 1. `bundles/preprod.bloxd.io/chunks/js/348.js` (Changed code · before: `L4-L302` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c6ad60b922c421629adbe62bcd8080a5dcdfa3feeb7f31f11ade25895763934) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/348.js#L4-L5) · [Before (L4-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/348.js#L4-L302)

```diff
-   42782: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42774: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (283 more removed lines; see GitHub link above)
+   42546: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/349.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/349.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L193` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7666b3576282823a51974559024107ff1e23f03f47cc5b81d0c1d7e4e08bc0ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/349.js#L4-L5) · [Before (L4-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/349.js#L4-L193)

```diff
-   42782: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42774: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (174 more removed lines; see GitHub link above)
+   42548: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/350.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/350.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L122` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/350.js#L4-L5) · [Before (L4-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/350.js#L4-L122)

```diff
-   42782: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42774: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (103 more removed lines; see GitHub link above)
+   42551: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/351.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/351.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L31)

```diff
-   42523: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "helperFunctions",
-       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61658: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       rgbdDecodePixelShaderWGSL: () => FQ
- ... (12 more removed lines; see GitHub link above)
+   42556: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/352.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/352.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L31` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L31)

```diff
-   42523: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "helperFunctions",
-       TQ = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61677: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       rgbdEncodePixelShaderWGSL: () => FQ
- ... (12 more removed lines; see GitHub link above)
+   42560: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/353.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575)

#### 1. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L171` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L5) · [Before (L4-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L171)

```diff
-   42635: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bakedVertexAnimation",
-       TQ = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42534: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (152 more removed lines; see GitHub link above)
+   42565: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/354.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L106` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L5) · [Before (L4-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L106)

```diff
-   42651: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpVertex",
-       TQ = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42566: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (87 more removed lines; see GitHub link above)
+   42569: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/355.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/355.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/355.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/355.js#L4-L101)

```diff
-   42659: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneVertex",
-       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42570: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (82 more removed lines; see GitHub link above)
+   42577: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/356.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/356.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L101)

```diff
-   42659: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneVertex",
-       TQ = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42570: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (82 more removed lines; see GitHub link above)
+   42582: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/357.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L231` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L5) · [Before (L4-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L231)

```diff
-   42785: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpFragment",
-       TQ = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42767: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (212 more removed lines; see GitHub link above)
+   42589: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/358.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/358.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872)

#### 1. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L68` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/358.js#L4-L5) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/358.js#L4-L68)

```diff
-   42785: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "bumpFragment",
-       TQ = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42767: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (49 more removed lines; see GitHub link above)
+   42596: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/359.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/359.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122)

#### 1. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L73` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L5) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L73)

```diff
-   42782: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "clipPlaneFragment",
-       TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   42774: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (54 more removed lines; see GitHub link above)
+   42600: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/360.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L64` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L5) · [Before (L4-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L64)

```diff
-   42831: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return Math.floor(QQ / 8)
-     }
- 
-     function qQ(QQ) {
-       return 1 << QQ % 8
-     }
-     XQ.d(WQ, {
-       OptimizeIndices: () => zQ
-     });
-     class TQ {
-       constructor(QQ) {
-         this.size = QQ, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(QQ) {
- ... (45 more removed lines; see GitHub link above)
+   42602: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/361.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L11` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L5) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L11)

```diff
-   61534: (QQ, WQ, XQ) => {
-     var wQ;
-     XQ.r(WQ), XQ.d(WQ, {
-         ShaderLanguage: () => wQ
-       }),
-       function(QQ) {
-         QQ[QQ.GLSL = 0] = "GLSL", QQ[QQ.WGSL = 1] = "WGSL"
-       }(wQ || (wQ = {}))
+   42604: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/362.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/362.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L15)

```diff
-   61542: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       postprocessVertexShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "postprocessVertexShader",
-       TQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42613: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/363.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/363.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede)

#### 1. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L26` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L5) · [Before (L4-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L26)

```diff
-   61556: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       WorldCodeAiOutOfUsage: () => TQ
-     });
-     var wQ = XQ(1507),
-       qQ = XQ(1145);
- 
-     function TQ(QQ) {
-       let {
-         onGetSuperRank: WQ
-       } = QQ;
-       return (0, qQ.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, qQ.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
- ... (7 more removed lines; see GitHub link above)
+   42619: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/364.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582)

#### 1. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L35` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/364.js#L4-L5) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/364.js#L4-L35)

```diff
-   61580: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       particlesPixelShader: () => UQ
-     });
-     var wQ = XQ(40126),
-       qQ = XQ(42335),
-       TQ = XQ(42341),
-       zQ = XQ(42425),
-       sQ = XQ(42396),
-       FQ = XQ(42237),
-       PQ = XQ(42158),
-       gQ = XQ(42402),
-       JQ = XQ(42433),
-       rQ = XQ(42439),
-       IQ = XQ(42469),
-       jQ = XQ(42473);
- ... (16 more removed lines; see GitHub link above)
+   42627: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/365.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/365.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L13` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/365.js#L4-L5) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/365.js#L4-L13)

```diff
-   61610: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       allocateF64Mat4: () => qQ
-     });
-     var wQ = XQ(41975);
- 
-     function qQ() {
-       return new wQ.f(16)
-     }
-     qQ["@@MAT4_STORAGE_F64@@"] = !0
+   42635: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/366.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/366.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L58` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L5) · [Before (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L58)

```diff
-   61618: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       applyLightFoOffset: () => zQ,
-       getFloatingOriginOffset: () => qQ,
-       lightFoVersion: () => TQ,
-       wrapRenderableForFO: () => sQ
-     });
-     var wQ = XQ(41977);
- 
-     function qQ(QQ) {
-       const WQ = QQ.camera;
-       if (!WQ) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
- ... (39 more removed lines; see GitHub link above)
+   42637: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/367.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/367.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L23` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/367.js#L4-L5) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/367.js#L4-L23)

```diff
-   61627: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-       const sQ = WQ,
-         FQ = wQ,
-         PQ = XQ;
-       QQ[PQ + 0] = sQ[FQ + 0], QQ[PQ + 1] = sQ[FQ + 1], QQ[PQ + 2] = sQ[FQ + 2], QQ[PQ + 3] = sQ[FQ + 3], QQ[PQ + 4] = sQ[FQ + 4], QQ[PQ + 5] = sQ[FQ + 5], QQ[PQ + 6] = sQ[FQ + 6], QQ[PQ + 7] = sQ[FQ + 7], QQ[PQ + 8] = sQ[FQ + 8], QQ[PQ + 9] = sQ[FQ + 9], QQ[PQ + 10] = sQ[FQ + 10 … [truncated]
-     }
- 
-     function qQ(QQ) {
-       return (WQ, XQ, qQ, TQ) => {
-         const zQ = QQ.camera;
-         if (!zQ) return void wQ(WQ, XQ, qQ, TQ, 0, 0, 0);
-         const sQ = zQ.worldMatrix;
-         wQ(WQ, XQ, qQ, TQ, sQ[12], sQ[13], sQ[14])
-       }
-     }
- ... (4 more removed lines; see GitHub link above)
+   42645: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/368.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/368.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L4-L84` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/368.js#L4-L5) · [Before (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/368.js#L4-L84)

```diff
-   61631: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return QQ.features.has("timestamp-query")
-     }
- 
-     function qQ(QQ) {
-       return wQ(QQ) ? {
-         device: QQ,
-         markerPipeline: QQ.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: QQ.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
- ... (65 more removed lines; see GitHub link above)
+   42654: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/369.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/369.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L4-L25` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/369.js#L4-L5) · [Before (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/369.js#L4-L25)

```diff
-   61633: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ) {
-       for (const XQ of QQ._frameGraph._tasks)
-         if (XQ?._config && XQ._colorAttachment && (XQ._config.rt === WQ.scRT || XQ._config.rst === WQ.scRT)) return XQ
-     }
- 
-     function qQ(QQ, WQ) {
-       const XQ = QQ._renderingContexts[QQ._renderingContexts.length - 1];
-       if (!XQ?._frameGraph) return;
-       const qQ = wQ(WQ, QQ);
-       if (!qQ) return;
-       if (1 === QQ.msaaSamples) return void(qQ._config.clr = !1);
-       const TQ = qQ.enabled;
-       qQ._config.clr = !0, qQ.enabled = !1, WQ._beforeRender.unshift((() => {
-         const WQ = wQ(XQ, QQ),
-           zQ = WQ?._config.rst === QQ.scRT && WQ._config.rt._colorView;
- ... (6 more removed lines; see GitHub link above)
+   42661: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/370.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/370.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87)

#### 1. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L75` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/370.js#L4-L5) · [Before (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/370.js#L4-L75)

```diff
-   61636: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       createShadowTask: () => TQ
-     });
-     var wQ = null;
- 
-     function qQ(QQ) {
-       return wQ?.get(QQ)
-     }
- 
-     function TQ(QQ, WQ) {
-       const XQ = new Set;
-       0;
-       const wQ = {
-         name: "YI",
-         engine: QQ,
- ... (56 more removed lines; see GitHub link above)
+   42668: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/371.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/371.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L289` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/371.js#L4-L5) · [Before (L4-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/371.js#L4-L289)

```diff
-   61644: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       A: () => PQ,
-       B: () => JQ,
-       C: () => gQ,
-       X: () => rQ
-     });
-     var wQ = XQ(41963),
-       qQ = (QQ, WQ) => QQ.order - WQ.order;
- 
-     function TQ(QQ, WQ, XQ) {
-       QQ.pendingDisposers.set(WQ, XQ)
-     }
- 
-     function zQ(QQ, WQ, XQ) {
-       XQ && QQ.pendingDisposers.get(WQ) === XQ && QQ.pendingDisposers.delete(WQ)
- ... (270 more removed lines; see GitHub link above)
+   42670: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/372.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/372.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659)

#### 1. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/372.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/372.js#L4-L15)

```diff
-   61666: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       postprocessVertexShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "postprocessVertexShader",
-       TQ = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42675: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/373.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/373.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35)

#### 1. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/373.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/373.js#L4-L15)

```diff
-   61680: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lod3DPixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lod3DPixelShader",
-       TQ = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42684: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/374.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/374.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936)

#### 1. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/374.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/374.js#L4-L15)

```diff
-   61689: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lodCubePixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lodCubePixelShader",
-       TQ = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42686: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/375.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/375.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/375.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/375.js#L4-L15)

```diff
-   61698: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lodPixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lodPixelShader",
-       TQ = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42692: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/376.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/376.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/376.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/376.js#L4-L15)

```diff
-   61705: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lod3DPixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lod3DPixelShader",
-       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42694: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/377.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/377.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/377.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/377.js#L4-L15)

```diff
-   61707: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lodCubePixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lodCubePixelShader",
-       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42700: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/378.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/378.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/378.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/378.js#L4-L15)

```diff
-   61710: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       lodPixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "lodPixelShader",
-       TQ = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42709: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/379.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/379.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21)

#### 1. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/379.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/379.js#L4-L15)

```diff
-   61713: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       passPixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "passPixelShader",
-       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42712: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/380.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L15)

```diff
-   61717: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       passPixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "passPixelShader",
-       TQ = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42716: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/381.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/381.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/381.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/381.js#L4-L15)

```diff
-   61726: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       passCubePixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "passCubePixelShader",
-       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42722: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/382.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/382.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/382.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/382.js#L4-L15)

```diff
-   61733: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       passCubePixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "passCubePixelShader",
-       TQ = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42731: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/383.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08)

#### 1. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L15)

```diff
-   61776: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       fxaaPixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "fxaaPixelShader",
-       TQ = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42739: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/384.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/384.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/384.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/384.js#L4-L15)

```diff
-   61784: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       fxaaVertexShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "fxaaVertexShader",
-       TQ = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42746: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/385.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/385.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/385.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/385.js#L4-L15)

```diff
-   61788: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       fxaaPixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "fxaaPixelShader",
-       TQ = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42752: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/386.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/386.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L15)

```diff
-   61792: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       fxaaVertexShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "fxaaVertexShader",
-       TQ = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42755: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/387.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358)

#### 1. `bundles/preprod.bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L246` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/387.js#L4-L5) · [Before (L4-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/387.js#L4-L246)

```diff
-   61805: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     XQ(42137), XQ(42143);
-     const qQ = "pbrUboDeclaration",
-       TQ = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61823: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
- ... (227 more removed lines; see GitHub link above)
+   42758: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/388.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/388.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L4-L199` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/388.js#L4-L5) · [Before (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/388.js#L4-L199)

```diff
-   61816: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "harmonicsFunctions",
-       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61865: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
- ... (180 more removed lines; see GitHub link above)
+   42761: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/389.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/389.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L4-L119` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/389.js#L4-L5) · [Before (L4-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/389.js#L4-L119)

```diff
-   61816: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "harmonicsFunctions",
-       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   62018: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (100 more removed lines; see GitHub link above)
+   42763: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/390.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/390.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L4-L226` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/390.js#L4-L5) · [Before (L4-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/390.js#L4-L226)

```diff
-   61903: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(40126);
-     XQ(42500), XQ(42509);
-     const qQ = "pbrUboDeclaration",
-       TQ = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61922: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
- ... (207 more removed lines; see GitHub link above)
+   42768: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/391.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L214` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/391.js#L4-L5) · [Before (L4-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/391.js#L4-L214)

```diff
-   61920: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "harmonicsFunctions",
-       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   61968: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (195 more removed lines; see GitHub link above)
+   42774: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/392.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/392.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610)

#### 1. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L4-L92` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/392.js#L4-L5) · [Before (L4-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/392.js#L4-L92)

```diff
-   61920: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "harmonicsFunctions",
-       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   62058: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (73 more removed lines; see GitHub link above)
+   42777: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/393.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/393.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L4-L289` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/393.js#L4-L5) · [Before (L4-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/393.js#L4-L289)

```diff
-   62028: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "openpbrDielectricReflectance",
-       TQ = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   62035: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
- ... (270 more removed lines; see GitHub link above)
+   42779: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/394.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/394.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50)

#### 1. `bundles/preprod.bloxd.io/chunks/js/394.js` (Changed code · before: `L4-L270` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/394.js#L4-L5) · [Before (L4-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/394.js#L4-L270)

```diff
-   62071: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "openpbrDielectricReflectance",
-       TQ = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
-   },
-   62080: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
- ... (251 more removed lines; see GitHub link above)
+   42788: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/395.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/395.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/395.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/395.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/395.js#L4-L15)

```diff
-   62127: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       textureMergerPixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "textureMergerPixelShader",
-       TQ = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42793: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/396.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/396.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/396.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/396.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/396.js#L4-L15)

```diff
-   62136: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       textureMergerPixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "textureMergerPixelShader",
-       TQ = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42802: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/397.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/397.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/397.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/397.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/397.js#L4-L15)

```diff
-   62139: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       proceduralVertexShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "proceduralVertexShader",
-       TQ = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42806: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/398.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/398.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43358a5aa616ead3c8fbce767411413c26e01f0147e90af22858fe9620d74384)

#### 1. `bundles/preprod.bloxd.io/chunks/js/398.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43358a5aa616ead3c8fbce767411413c26e01f0147e90af22858fe9620d74384R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-43358a5aa616ead3c8fbce767411413c26e01f0147e90af22858fe9620d74384) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/398.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/398.js#L4-L15)

```diff
-   62144: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       proceduralVertexShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "proceduralVertexShader",
-       TQ = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42811: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/399.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/399.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4da7f698d792f5db8fff21c7a9c0f8769fc61ae88240e598c5b03de6fbd00bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/399.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4da7f698d792f5db8fff21c7a9c0f8769fc61ae88240e598c5b03de6fbd00bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4da7f698d792f5db8fff21c7a9c0f8769fc61ae88240e598c5b03de6fbd00bfd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/399.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/399.js#L4-L15)

```diff
-   62158: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       greasedLinePixelShaderWGSL: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "greasedLinePixelShader",
-       TQ = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
-     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42817: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/400.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/400.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cff6ee0479f08fe164d51ddce6a89658c125a4ef39d17ceb80ae30333132ed92)

#### 1. `bundles/preprod.bloxd.io/chunks/js/400.js` (Changed code · before: `L4-L15` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cff6ee0479f08fe164d51ddce6a89658c125a4ef39d17ceb80ae30333132ed92R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cff6ee0479f08fe164d51ddce6a89658c125a4ef39d17ceb80ae30333132ed92) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/400.js#L4-L5) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/400.js#L4-L15)

```diff
-   62166: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       greasedLinePixelShader: () => zQ
-     });
-     var wQ = XQ(40126);
-     const qQ = "greasedLinePixelShader",
-       TQ = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
-     const zQ = {
-       name: qQ,
-       shader: TQ
-     }
+   42821: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/401.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/401.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-345f8ec425f00901c3da4e5222817e93795bd75b798671c7a09730de12c53bc7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/401.js` (Changed code · before: `L4-L193` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-345f8ec425f00901c3da4e5222817e93795bd75b798671c7a09730de12c53bc7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-345f8ec425f00901c3da4e5222817e93795bd75b798671c7a09730de12c53bc7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/401.js#L4-L5) · [Before (L4-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/401.js#L4-L193)

```diff
-   62170: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       rebuildScenePbrPipelines: () => sQ,
-       rebuildSceneRenderables: () => FQ
-     });
-     var wQ = XQ(41963),
-       qQ = (QQ, WQ) => QQ.order - WQ.order,
-       TQ = 8,
-       zQ = QQ => FQ(QQ);
-     async function sQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await PQ(QQ, "pbr", WQ)
-     }
-     async function FQ(QQ) {
-       await PQ(QQ, void 0, !1)
-     }
- ... (174 more removed lines; see GitHub link above)
+   42825: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4` → after: `L4-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L14643) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L4)

```diff
-   5062: (QQ, WQ, XQ) => {
+   9825: (MM, rM) => {
+     rM.e = 8, rM.m = function(MM, rM, iM, OM) {
+       if (!Array.isArray(MM)) return !!MM;
+       rM -= Math.floor(rM), iM -= Math.floor(iM), OM -= Math.floor(OM);
+       for (var SM = 0; SM < MM.length; SM += 6)
+         if (rM >= MM[SM] && rM < MM[SM + 3] && iM >= MM[SM + 1] && iM < MM[SM + 4] && OM >= MM[SM + 2] && OM < MM[SM + 5]) return !0;
+       return !1
+     }, rM.i = function(MM) {
+       for (var rM = [], iM = 0; iM < MM.length; iM++) {
+         var OM = MM[iM];
+         if (2 !== OM.length || 3 !== OM[0].length || 3 !== OM[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var SM = 0; SM < 3; SM++) {
+           var jM = OM[0][SM],
+             aM = OM[1][SM];
+           if (!Number.isInteger(jM) || !Number.isInteger(aM) || jM < 0 || aM > 8 || jM >= aM) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           rM[6 * iM + SM] = jM / 8, rM[6 * iM + SM + 3] = aM / 8
+ ... (14624 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L8` → after: `L14646-L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R14646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L14646-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L14646-L14748) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L8)

```diff
-       g: () => zQ,
+       f: () => zM,
+       h: () => LM,
+       i: () => HM,
+       l: () => yM,
+       p: () => hM,
+       r: () => mM
+     });
+     var OM = iM(9825),
+       SM = iM(9839),
+       jM = iM(9884),
+       aM = iM(9890),
+       PM = iM(9895);
+     const nM = [1, 1, 0, 2, 1, 1],
+       QM = (0, OM.i)([
+         [
+           [0, 0, 0],
+ ... (87 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L11` → after: `L15088-L15272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15088-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15088-L15272) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L11)

```diff
-       m: () => sQ,
+       o: () => LM,
+       p: () => zM,
+       r: () => SM,
+       u: () => JM,
+       w: () => hM,
+       x: () => mM,
+       z: () => PM
+     });
+     var OM = iM(9839);
+     const SM = [
+         [1, 1, 2, 6, 0, 7],
+         [0, 7, 3, 6, 1, 1],
+         [1, 1, 4, 6, 7, 0],
+         [7, 0, 5, 6, 1, 1]
+       ],
+       jM = [
+ ... (169 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L15` → after: `L15275-L15276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15275-L15276) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L15)

```diff
-       x: () => IQ
+       u: () => EM,
+       y: () => Qr
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L17` → after: `L15278-L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15278-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15278-L15409) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L17)

```diff
-     const wQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+     var OM = iM(9839),
+       SM = iM(9832),
+       jM = iM(9835),
+       aM = iM(9884),
+       PM = iM(9890);
+     const nM = {
+       uniform: !0,
+       underside: "pump_bottom"
+     };
+ 
+     function QM(MM) {
+       return {
+         front: "output",
+         underside: `${MM}_bottom`,
+         mirroredSides: !0,
+         backRuns: !0
+ ... (116 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L20-L23` → after: `L15412-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15412-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15412-L15419) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L20-L23)

```diff
-       try {
-         return decodeURIComponent(QQ.slice(1))
-       } catch {
-         return QQ.slice(1)
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_running",
+         OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 250;
+       return {
+         animTextures: Array.from({
+           length: rM
+         }, ((rM, OM) => `${MM}${iM}${OM}`)),
+         animationInterval: OM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L28` → after: `L15428-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15428-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15428-L15445) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L28)

```diff
-       return QQ.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+       return [1, 2, 3, 4].map((rM => `${MM}[rot[${rM}`))
+     }
+ 
+     function fM(MM, rM) {
+       return {
+         displayName: {
+           translationKey: `item:${MM}`
+         },
+         description: {
+           translationKey: `item:${MM}Description`
+         },
+         ttb: 1500,
+         textureInfo: rM,
+         harvestType: "rock",
+         harvestLevel: 0,
+         showInCreativeInven: !1,
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L30` → after: `L15447-L15461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15447-L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15447-L15461) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L30)

```diff
-     const zQ = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${wQ.source}`, "g");
+     const YM = {
+         transTex: !0,
+         soundType: {
+           break: "glass",
+           place: "stone"
+         }
+       },
+       NM = {
+         ...YM,
+         altActionable: !0
+       },
+       AM = {
+         ttb: 5e11,
+         drops: null
+       };
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L32-L33` → after: `L15463-L15470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15463-L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15463-L15470) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L32-L33)

```diff
-     function sQ(QQ, WQ) {
-       return 2 === QQ.length ? WQ.replace(/^ (.*) $/, "$1") : WQ
+     function xM(MM, rM, iM, OM) {
+       return {
+         [MM]: rM,
+         [`${MM}|meta|rot1|${iM}`]: {
+           ...rM,
+           ...OM
+         }
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L36-L37` → after: `L15473-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15473-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15473-L15477) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L36-L37)

```diff
-     function FQ(QQ) {
-       return "" === QQ.trim()
+     function vM(MM, rM, iM) {
+       return (0, OM.Lb)(MM, {
+         ...rM,
+         rootMetaDesc: `${MM}|meta|rot1`
+       }, iM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L40-L43` → after: `L15480-L15487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15480-L15487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15480-L15487) · [Before (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L40-L43)

```diff
-     function PQ(QQ) {
-       const WQ = [];
-       for (const XQ of QQ.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) WQ.length > 0 && WQ[WQ.length - 1].endsWith("\\") ? WQ[WQ.length - 1] += `|${XQ}` : WQ.push(XQ);
-       return WQ.map((QQ => QQ.trim().replaceAll("\\|", "|")))
+     function FM(MM, rM, iM, OM) {
+       const SM = {};
+       return OM.forEach(((OM, jM) => {
+         SM[`${MM}|meta|rot${jM+1}|${rM}`] = {
+           ...iM,
+           texturePerSide: OM
+         }
+       })), SM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L47-L69` → after: `L15490-L15497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15490-L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15490-L15497) · [Before (L47-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L47-L69)

```diff
-     function JQ(QQ) {
-       const WQ = [],
-         XQ = [{
-           indent: -1,
-           items: WQ
-         }];
-       let wQ = null;
-       for (const qQ of QQ) {
-         const QQ = qQ.match(gQ);
-         if (!QQ) {
-           wQ && (wQ.text += ` ${qQ.trim()}`);
-           continue
-         }
-         const WQ = QQ[1].replace(/\t/g, "  ").length;
-         for (; WQ <= XQ[XQ.length - 1].indent;) XQ.pop();
-         wQ = {
- ... (7 more removed lines; see GitHub link above)
+     function BM(MM, rM, iM, OM) {
+       const SM = {};
+       for (let aM = 1; aM <= 4; aM++) SM[`${MM}|meta|rot${aM}|${iM}`] = {
+         ...(0, jM.h)(rM, OM),
+         texturePerSide: jM.d,
+         surfaceVelocity: (0, jM.r)(aM, jM.f),
+         drops: MM
+       };
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L73-L140` → after: `L15501-L15518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15501-L15518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15501-L15518) · [Before (L73-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L73-L140)

```diff
-     function rQ(QQ) {
-       const WQ = QQ.replace(/\r\n/g, "\n").split("\n"),
-         XQ = [];
-       let wQ = 0;
-       for (; wQ < WQ.length;) {
-         const QQ = WQ[wQ];
-         if (FQ(QQ)) {
-           wQ++;
-           continue
-         }
-         const qQ = QQ.match(/^\s*```\s*(\w*)\s*$/);
-         if (qQ) {
-           const QQ = [];
-           for (wQ++; wQ < WQ.length && !/^\s*```\s*$/.test(WQ[wQ]);) QQ.push(WQ[wQ]), wQ++;
-           wQ++, XQ.push({
-             kind: "code",
- ... (52 more removed lines; see GitHub link above)
+     function XM() {
+       const MM = "Reactor Controller",
+         rM = [wM, wM, wM, wM],
+         iM = (MM, rM) => fM("reactorFrame", [MM], {
+           drops: "Reactor Frame",
+           ...rM ? {
+             Ch: rM
+           } : {}
+         });
+       let OM = vM(MM, iM(pM), rM);
+       for (const [SM, jM] of Object.entries(RM)) {
+         const aM = {
+           animTextures: [`${jM.texture}0`, `${jM.texture}1`],
+           animationInterval: jM.ms
+         };
+         OM = {
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L152-L187` → after: `L15524-L15532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15524-L15532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15524-L15532) · [Before (L152-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L152-L187)

```diff
-     function IQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const XQ = rQ(QQ);
-       let wQ = "";
-       const qQ = [],
-         TQ = [],
-         zQ = new Map;
-       for (const PQ of XQ) {
-         if ("heading" === PQ.kind) {
-           var sQ;
-           const QQ = (null !== (sQ = zQ.get(PQ.anchor)) && void 0 !== sQ ? sQ : 0) + 1;
-           zQ.set(PQ.anchor, QQ), QQ > 1 && (PQ.anchor = `${PQ.anchor}-${QQ}`)
-         }
-         if ("heading" === PQ.kind && 1 === PQ.level && !wQ) {
-           wQ = PQ.text;
-           continue
- ... (20 more removed lines; see GitHub link above)
+     function IM() {
+       const MM = "Battery Controller",
+         rM = fM("batteryController", ["battery_controller_front", "battery_casing"], {
+           altActionable: !0
+         }),
+         iM = fM("batteryController", [kM("battery_controller_front"), "battery_casing"], {
+           altActionable: !0,
+           Ch: aM.h
+         });
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L189-L191` → after: `L15534-L15535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15534-L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15534-L15535) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L189-L191)

```diff
-         title: wQ,
-         intro: qQ,
-         sections: TQ
+         ...vM(MM, rM, bM),
+         ...FM(MM, "Running", iM, bM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L196-L202` → after: `L15546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15546) · [Before (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L196-L202)

```diff
-       return [{
-         heading: null,
-         blocks: QQ.intro
-       }, ...QQ.sections.map((QQ => ({
-         heading: QQ.heading,
-         blocks: QQ.blocks
-       })))]
+       return MM ? kM("collider_side", qM, "_running", TM) : KM
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L206` → after: `L15550-L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15550-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15550-L15551) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L206)

```diff
-       return QQ.flatMap((QQ => "code" === QQ.kind ? [QQ] : "quote" === QQ.kind ? BQ(QQ.blocks) : []))
+       const rM = rr(MM);
+       return ["output", rM, ...VM, rM]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L210-L225` → after: `L15555-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15555-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15555-L15560) · [Before (L210-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L210-L225)

```diff
-       switch (QQ.kind) {
-         case "heading":
-         case "paragraph":
-           return QQ.text;
-         case "code":
-           return QQ.code;
-         case "table":
-           return [QQ.header, ...QQ.rows].map((QQ => QQ.join(" "))).join(" ");
-         case "list": {
-           const WQ = QQ => QQ.map((QQ => `${QQ.text} ${WQ(QQ.children)}`)).join(" ");
-           return WQ(QQ.items)
-         }
-         case "quote":
-           return QQ.blocks.map(yQ).join(" ");
-         case "rule":
-           return ""
+       return MM ? {
+         textureInfo: [KM, rr(!0), cM, "collider_bottom"],
+         texturePerSide: [1, 1, 2, 3, 1, 1]
+       } : {
+         textureInfo: [KM, cM, "collider_bottom"],
+         texturePerSide: Mr
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L241-L242` → after: `L15564-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15564-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15564-L15580) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L241-L242)

```diff
-     function sQ(QQ, WQ) {
-       return QQ === WQ ? QQ : `${QQ} (${WQ})`
+     function Sr() {
+       const MM = Or(!1),
+         rM = [MM.texturePerSide, MM.texturePerSide, MM.texturePerSide, MM.texturePerSide];
+       return {
+         ...vM("Collider", fM("collider", ir(!1), {
+           altActionable: !0,
+           drops: null
+         }), aM.r),
+         ...vM("_Collider Focus", fM("collider", MM.textureInfo, {
+           altActionable: !0,
+           drops: null
+         }), rM),
+         ...vM("_Collider Output", fM("collider", MM.textureInfo, {
+           altActionable: !0,
+           drops: null
+         }), rM)
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L245-L271` → after: `L15584-L15609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15584-L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15584-L15609) · [Before (L245-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L245-L271)

```diff
-     function FQ(QQ) {
-       const WQ = [];
-       let XQ = 0;
-       for (const wQ of QQ.matchAll(zQ)) {
-         wQ.index > XQ && WQ.push(QQ.slice(XQ, wQ.index));
-         const [, qQ, zQ, FQ, PQ, gQ, JQ] = wQ;
-         void 0 !== qQ ? WQ.push(sQ(qQ, zQ)) : void 0 !== FQ || void 0 !== PQ ? WQ.push((0, TQ.jsx)("strong", {
-           children: null !== FQ && void 0 !== FQ ? FQ : PQ
-         }, wQ.index)) : void 0 !== gQ ? WQ.push((0, TQ.jsx)("em", {
-           children: gQ
-         }, wQ.index)) : WQ.push((0, TQ.jsx)("code", {
-           children: JQ
-         }, wQ.index)), XQ = wQ.index + wQ[0].length
-       }
-       return XQ < QQ.length && WQ.push(QQ.slice(XQ)), WQ
-     }
- ... (11 more removed lines; see GitHub link above)
+     function ar() {
+       const {
+         textureInfo: MM,
+         texturePerSide: rM
+       } = Or(!0);
+       return FM("_Collider Focus", "Running", fM("collider", MM, {
+         altActionable: !0,
+         drops: null,
+         Ch: [8, 3, 8]
+       }), [rM, rM, rM, rM])
+     }
+ 
+     function Pr() {
+       const MM = "wireless_terminal_top[rot[1";
+       return vM("Wireless Terminal", fM("wirelessTerminal", ["wireless_terminal_front", MM, ...oM("wireless_terminal_top"), "wireless_terminal_bottom", MM], {
+         altActionable: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L275-L318` → after: `L15613-L15781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15613-L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15613-L15781) · [Before (L275-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L275-L318)

```diff
-     function gQ(QQ, WQ) {
-       switch (QQ.kind) {
-         case "heading":
-           return QQ.level <= 2 ? (0, TQ.jsx)("h3", {
-             children: FQ(QQ.text)
-           }, WQ) : (0, TQ.jsx)("h4", {
-             children: FQ(QQ.text)
-           }, WQ);
-         case "paragraph":
-           return (0, TQ.jsx)("p", {
-             children: FQ(QQ.text)
-           }, WQ);
-         case "list":
-           return (0, TQ.jsx)(wQ.Fragment, {
-             children: PQ(QQ.items, QQ.ordered)
-           }, WQ);
- ... (28 more removed lines; see GitHub link above)
+     function Qr() {
+       return {
+         "Uranium Ore": fM("uraniumOre", "uranium_ore", {
+           ttb: 5400,
+           harvestLevel: 3,
+           drops: "Raw Uranium",
+           Ch: [5, 8, 1]
+         }),
+         ...(0, SM.d)("Uranium Deposit", "uraniumDeposit", "uranium_deposit", [5, 8, 1], 36e3),
+         "Sky Spring": {
+           ...(0, SM.d)("Sky Spring", "skySpring", "stone")["Sky Spring"],
+           textureInfo: [{
+             animTextures: ["sky_spring0", "sky_spring1", "sky_spring2", "sky_spring3"],
+             animationInterval: 800
+           }, "stone"],
+           texturePerSide: [1, 1, 0, 1, 1, 1]
+ ... (153 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L322-L334` → after: `L15785-L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15785-L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15785-L15789) · [Before (L322-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L322-L334)

```diff
-     function JQ(QQ) {
-       let {
-         markdown: WQ
-       } = QQ, XQ = 0;
-       return (0, TQ.jsx)("div", {
-         className: "StudioAiAnswerText",
-         children: (0, qQ.B)(WQ).map(((QQ, WQ) => {
-           if ("list" !== QQ.kind || !QQ.ordered) return XQ = 0, gQ(QQ, WQ);
-           const qQ = XQ + 1;
-           return XQ += QQ.items.length, (0, TQ.jsx)(wQ.Fragment, {
-             children: PQ(QQ.items, !0, qQ)
-           }, WQ)
-         }))
+     function zr(MM, rM) {
+       return fM(MM, [`${rM}_side`, `${rM}_top`], {
+         ttb: 50,
+         texturePerSide: [0, 0, 1, 0, 0, 0],
+         harvestType: "cuttable"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L338` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15798) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L338)

```diff
-   6886: (QQ, WQ, XQ) => {
+   9852: (MM, rM, iM) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L343` → after: `L15806-L15810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15806-L15810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15806-L15810) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L343)

```diff
-       o: () => jQ
+       l: () => aM,
+       p: () => lM,
+       t: () => zM,
+       w: () => GM,
+       z: () => yM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L345-L369` → after: `L15812-L15827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15812-L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15812-L15827) · [Before (L345-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L345-L369)

```diff
-     var wQ = XQ(1243),
-       qQ = XQ(6840),
-       TQ = XQ(5223);
-     const zQ = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;
- 
-     function sQ(QQ) {
-       return (0, TQ.h)(QQ, zQ, (WQ => !/^my/i.test(WQ[0]) || !/follow $/i.test(QQ.slice(0, WQ.index)))).length > 0
-     }
-     const FQ = /\byou(?:r|'re|'ll)?\b/i,
-       PQ = /^(?:[-*]\s+|\d+\.\s+)?(actually,|wait[,.!]|hmm\b|let me (think|re-?read|re-?check|reconsider)\b|let's (assume|think|re-?read|reconsider|go with)\b|i will\b|i'll (suggest|go with|pick)\b|i need to\b|i should\b|i don't have\b|since i (can|cannot|can't|don't)\b|okay,? so … [truncated]
-       gQ = 2;
- 
-     function JQ(QQ) {
-       return function(QQ) {
-         const WQ = [];
-         let XQ = !1;
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(9855);
+     const SM = {
+         root: "Noticeboard",
+         blockModelPrefix: "noticeboard_wall",
+         faceOffset: -.25
+       },
+       jM = {
+         root: "Standing Noticeboard",
+         blockModelPrefix: "noticeboard_standing",
+         faceOffset: .125
+       },
+       aM = [SM, jM],
+       PM = aM.map((MM => {
+         let {
+           root: rM
+         } = MM;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L371-L413` → after: `L15829-L15868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15829-L15868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15829-L15868) · [Before (L371-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L371-L413)

```diff
-       }(QQ).filter((QQ => sQ(QQ) || PQ.test(QQ) && !FQ.test(QQ)))
-     }
-     const rQ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       IQ = [{
-         name: "Qwen3.6-27B",
-         temperature: .7,
-         reasoningEffort: "none"
-       }, {
-         name: "Qwen3.5-397B-A17B",
-         temperature: .7,
-         reasoningEffort: "none"
-       }, {
-         name: "Mistral-Small-3.2-24B-Instruct-2506",
-         temperature: .15
-       }];
- 
- ... (27 more removed lines; see GitHub link above)
+       })),
+       nM = SM.root,
+       QM = jM.root,
+       zM = nM,
+       LM = ["l", "r", "u", "d"],
+       [mM, HM, hM, JM] = LM.map(((MM, rM) => 1 << rM)),
+       dM = Array.from({
+         length: 1 << LM.length
+       }, ((MM, rM) => rM)),
+       yM = {
+         0: "_single",
+         [mM]: "_horizontal_right",
+         [HM]: "_horizontal_left",
+         [mM | HM]: "_horizontal",
+         [hM]: "_vertical_bottom",
+         [JM]: "_vertical_top",
+ ... (24 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L416-L457` → after: `L15871-L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15871-L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15871-L15872) · [Before (L416-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L416-L457)

```diff
-       return new Promise(((qQ, TQ) => {
-         const zQ = new AbortController,
-           sQ = () => {
-             zQ.abort(), TQ((0, wQ.i)(XQ))
-           };
-         if (null !== XQ && void 0 !== XQ && XQ.aborted) return void sQ();
-         null === XQ || void 0 === XQ || XQ.addEventListener("abort", sQ, {
-           once: !0
-         });
-         const FQ = IQ.map((() => !1));
-         let PQ = null;
-         const gQ = IQ.map((() => !1)),
-           JQ = IQ.map((() => !1));
-         IQ.forEach(((wQ, rQ) => {
-           const jQ = DQ(yQ, zQ.signal);
-           bQ(wQ, [{
- ... (26 more removed lines; see GitHub link above)
+       const OM = LM.filter(((MM, rM) => iM & 1 << rM)).join("");
+       return "" === OM ? 1 === rM ? MM : `${MM}|meta|rot${rM}` : `${MM}|meta|rot${rM}|${OM}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L461-L510` → after: `L15876-L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15876-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15876-L15881) · [Before (L461-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L461-L510)

```diff
-       var WQ, XQ;
-       return "length" === (null === QQ || void 0 === QQ || null === (WQ = QQ.choices) || void 0 === WQ || null === (XQ = WQ[0]) || void 0 === XQ ? void 0 : XQ.finish_reason)
-     }
-     async function UQ(QQ, WQ, XQ) {
-       const wQ = IQ.find((WQ => WQ.name === QQ));
-       if (void 0 === wQ) return "failed";
-       const qQ = DQ(yQ, XQ);
-       try {
-         const QQ = await bQ(wQ, WQ, qQ.signal);
-         return null !== QQ && "object" === typeof QQ ? QQ.isCutOff ? (console.warn(`Studio AI: ${wQ.name}'s answer was cut off at the token limit`), null) : {
-           text: QQ.text
-         } : QQ
-       } finally {
-         qQ.clear()
-       }
-     }
- ... (34 more removed lines; see GitHub link above)
+       var rM;
+       const iM = null !== (rM = MM.split("|")[2]) && void 0 !== rM ? rM : "";
+       let OM = 0;
+       return LM.forEach(((MM, rM) => {
+         iM.includes(MM) && (OM |= 1 << rM)
+       })), OM
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L513` → after: `L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15884) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L513)

```diff
-   6840: (QQ, WQ, XQ) => {
+   9866: (MM, rM, iM) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L515-L522` → after: `L15886-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15886-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15886-L15888) · [Before (L515-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L515-L522)

```diff
-       A: () => pQ,
-       E: () => UQ,
-       G: () => DQ,
-       H: () => JQ,
-       K: () => PQ,
-       M: () => IQ,
-       c: () => jQ,
-       e: () => sQ,
+       B: () => aM,
+       b: () => jM,
+       f: () => PM,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L524-L525` → after: `L15890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15890) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L524-L525)

```diff
-       h: () => BQ,
-       l: () => rQ,
+       j: () => LM,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L529-L531` → after: `L15895-L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15895-L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15895-L15896) · [Before (L529-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L529-L531)

```diff
-       v: () => GQ,
-       x: () => bQ,
-       y: () => yQ
+       t: () => hM,
+       x: () => JM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L533-L535` → after: `L15898-L15920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15898-L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15898-L15920) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L533-L535)

```diff
-     var wQ = XQ(5223);
-     const qQ = 2e3,
-       TQ = 2e4;
+     var OM = iM(9825);
+     const SM = [{
+         letter: "n",
+         name: "North",
+         dx: 0,
+         dz: -1
+       }, {
+         letter: "e",
+         name: "East",
+         dx: 1,
+         dz: 0
+       }, {
+         letter: "s",
+         name: "South",
+         dx: 0,
+         dz: 1
+ ... (7 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L538` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15923) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L538)

```diff
-       return QQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
+       return jM.includes(MM.model)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L542` → after: `L15932-L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15932-L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15932-L15937) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L542)

```diff
-       return QQ.replace(/\$/g, "\\$")
+       return SM.filter(((rM, iM) => MM & 1 << iM)).map((MM => {
+         let {
+           letter: rM
+         } = MM;
+         return rM
+       })).join("")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L547-L549` → after: `L15941-L15942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15941-L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15941-L15942) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L547-L549)

```diff
-       FQ.lastIndex = WQ;
-       const XQ = FQ.exec(QQ);
-       return XQ.index + XQ[0].length
+       const iM = [zM(rM), rM & nM ? QM : ""].filter(Boolean);
+       return iM.length ? `${MM}|meta|${iM.join("|")}` : MM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L553` → after: `L15946-L15955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15946-L15955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15946-L15955) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L553)

```diff
-       return (0, wQ.y)(QQ, /\s+/g, (0, wQ.u)(".!?")).flatMap((QQ => QQ.split("\n")))
+       var rM;
+       const iM = MM.split("|").slice(1),
+         OM = null !== (rM = iM.find((MM => MM !== QM))) && void 0 !== rM ? rM : "";
+       let jM = iM.includes(QM) ? nM : 0;
+       return SM.forEach(((MM, rM) => {
+         let {
+           letter: iM
+         } = MM;
+         OM.includes(iM) && (jM |= 1 << rM)
+       })), jM
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L556-L561` → after: `L15958-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15958-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15958-L15978) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L556-L561)

```diff
-     function JQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ;
-       const wQ = [...QQ.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((QQ => QQ.index)),
-         qQ = wQ.filter((QQ => QQ < WQ)),
-         TQ = wQ.find((QQ => QQ >= XQ));
-       return [0 === qQ.length ? 0 : qQ.at(-1) + 1, void 0 === TQ ? QQ.length : TQ + 1]
+     function HM(MM) {
+       return PM.map((rM => (0, OM.i)(function(MM, rM) {
+         let {
+           post: iM,
+           northArm: OM
+         } = MM;
+         const jM = [iM];
+         let aM = OM;
+         return SM.forEach(((MM, iM) => {
+           rM & 1 << iM && jM.push(aM), aM = function(MM) {
+             let [rM, iM, OM, SM, jM, aM] = MM;
+             return [8 - aM, iM, rM, 8 - OM, jM, SM]
+           }(aM)
+         })), jM
+       }(MM, rM).map((MM => {
+         let [rM, iM, OM, SM, jM, aM] = MM;
+ ... (5 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L565-L566` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L15996) · [Before (L565-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L565-L566)

```diff
-       const XQ = QQ.charCodeAt(WQ - 1);
-       return QQ.slice(0, WQ > 0 && WQ < QQ.length && XQ >= 55296 && XQ <= 56319 ? WQ - 1 : WQ)
+       return `${MM}${null===rM?"Post":SM[rM].name}`
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L569-L570` → after: `L16011-L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16011-L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16011-L16012) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L569-L570)

```diff
-     function IQ(QQ, WQ) {
-       return `${WQ}${QQ.replace(/\\/g,"\\\\").split(WQ).join(`\\${WQ}`)}${WQ}`
+     function aM(MM, rM, iM) {
+       return `${MM}|meta|rot${rM}|${iM}`
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L573-L574` → after: `L16015-L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16015-L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16015-L16017) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L573-L574)

```diff
-     function jQ(QQ) {
-       return QQ.charAt(0).toUpperCase() + QQ.slice(1)
+     function PM(MM, rM) {
+       var iM;
+       return MM !== SM ? null : null !== (iM = jM.find((MM => rM.endsWith(`|${MM}`)))) && void 0 !== iM ? iM : null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L577-L578` → after: `L16024-L16026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16024-L16026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16024-L16026) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L577-L578)

```diff
-     function BQ(QQ) {
-       return Math.round(QQ).toLocaleString("en-US")
+     function QM(MM, rM) {
+       const [iM, SM] = OM.c[MM];
+       return "left" === rM ? [-iM, -SM] : [iM, SM]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L582` → after: `L16046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16046) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L582)

```diff
-       return QQ.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((QQ => "" !== QQ))
+       return (null === MM || void 0 === MM ? void 0 : MM.model) === SM
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L586-L587` → after: `L16049-L16050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16049-L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16049-L16050) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L586-L587)

```diff
-     function DQ(QQ, WQ) {
-       return yQ(QQ).filter((QQ => QQ.length >= VQ && !/\d/.test(QQ))).map((QQ => `${QQ} ${WQ}`))
+     function aM(MM) {
+       return jM(MM) && void 0 !== MM.attachedTop
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L591` → after: `L16067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16067) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L591)

```diff
-       return QQ.split(/[\s:_]+/).filter((QQ => "" !== QQ)).map(zQ).join("[`:_\\s]+")
+       return MM % 2 === 1
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L594-L595` → after: `L16070-L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16070-L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16070-L16074) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L594-L595)

```diff
-     function GQ(QQ) {
-       return yQ(QQ.split(".").pop())
+     function QM(MM, rM, iM) {
+       const OM = function(MM) {
+         return PM[(MM - 1) % 4]
+       }(MM);
+       return OM.dx * rM + OM.dz * iM > 0 ? (MM + 1) % 4 + 1 : MM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L598-L599` → after: `L16078-L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16078-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16078-L16089) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L598-L599)

```diff
-     function UQ(QQ) {
-       return QQ.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
+     function LM(MM, rM, iM) {
+       const SM = `${MM}|${rM}|${iM}`;
+       return zM.has(SM) || zM.set(SM, (0, OM.c)(function(MM, rM, iM) {
+         return (0, OM.k)(function(MM, rM) {
+           return rM ? [
+             [0, 0, 0, 1, MM, 5],
+             [7, 0, 0, 8, MM, 5]
+           ] : [
+             [0, 0, 3, 8, MM, 5]
+           ]
+         }(MM ? 4 : 8, iM), rM - 1)
+       }(MM, rM, iM))), zM.get(SM)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L602-L608` → after: `L16096-L16102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16096-L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16096-L16102) · [Before (L602-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L602-L608)

```diff
-     function bQ(QQ) {
-       let WQ = null;
-       return () => {
-         const XQ = WQ ??= QQ();
-         return XQ.catch((() => {
-           WQ === XQ && (WQ = null)
-         })), XQ
+     function HM(MM, rM, iM) {
+       return 1 !== rM || iM ? `${MM}|meta|rot${rM}|${iM?"open":"closed"}` : MM
+     }
+     const hM = "FenceGate",
+       JM = {
+         bottom: ["BottomLeft", "BottomRight"],
+         top: ["TopLeft", "TopRight"]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L612` → after: `L16128-L16143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16128-L16143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16128-L16143) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L612)

```diff
-   5223: (QQ, WQ, XQ) => {
+   9925: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM,
+       e: () => jM
+     });
+     const OM = iM(9932).e.map((MM => ({
+         wood: MM,
+         block: "Maple" === MM ? "Showcase" : `${MM} Item Pedestal`
+       }))),
+       SM = new Set(OM.map((MM => {
+         let {
+           block: rM
+         } = MM;
+         return rM
+       })));
+ 
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L614-L616` → after: `L16145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16145) · [Before (L614-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L614-L616)

```diff
-       return {
-         notAfter: QQ
-       }
+       return SM.has(MM)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L619` → after: `L16150-L16152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16150-L16152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16150-L16152) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L619)

```diff
-       e: () => FQ,
+       c: () => PM,
+       d: () => oM,
+       f: () => hM,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L621` → after: `L16154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16154) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L621)

```diff
-       l: () => sQ,
+       k: () => aM,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L623-L624` → after: `L16156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16156) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L623-L624)

```diff
-       p: () => qQ,
-       q: () => TQ,
+       r: () => dM,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L626-L627` → after: `L16158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16158) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L626-L627)

```diff
-       v: () => gQ,
-       y: () => JQ
+       x: () => yM
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L629-L630` → after: `L16160-L16162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16160-L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16160-L16162) · [Before (L629-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L629-L630)

```diff
-     const qQ = wQ("\\w$."),
-       TQ = wQ("\\w.,");
+     var OM = iM(9825),
+       SM = iM(9863),
+       jM = iM(9852);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L632-L633` → after: `L16164-L16170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16164-L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16164-L16170) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L632-L633)

```diff
-     function zQ(QQ) {
-       return WQ => FQ(WQ, QQ)
+     function aM(MM, rM) {
+       let iM = [...MM];
+       for (let OM = 0; OM < rM; OM++) iM = iM.map((MM => {
+         let [rM, iM, OM, SM, jM, aM] = MM;
+         return [OM, iM, 8 - SM, aM, jM, 8 - rM]
+       }));
+       return iM
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L637` → after: `L16174-L16180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16174-L16180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16174-L16180) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L637)

```diff
-       return WQ => !QQ.test(WQ.input.slice(0, WQ.index))
+       return (0, OM.i)(MM.map((MM => {
+         let [rM, iM, OM, SM, jM, aM] = MM;
+         return [
+           [rM, iM, OM],
+           [SM, jM, aM]
+         ]
+       })))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L640-L641` → after: `L16183-L16185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16183-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16183-L16185) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L640-L641)

```diff
-     function FQ(QQ, WQ) {
-       return QQ.index > 0 && new RegExp(`[${WQ}]`).test(QQ.input[QQ.index - 1])
+     function nM() {
+       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+       return [0, 1, 2, 3].map((MM => PM(aM(rM, MM))))
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L644-L675` → after: `L16188-L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16188-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16188-L16192) · [Before (L644-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L644-L675)

```diff
-     function PQ(QQ, WQ, XQ) {
-       return function(QQ) {
-         return void 0 !== QQ && "function" !== typeof QQ
-       }(XQ) ? function(QQ, WQ, XQ) {
-         const wQ = WQ.flags.replace(/[gy]/g, ""),
-           qQ = new RegExp(`[^${XQ}](?:${WQ.source})`, `${wQ}g`),
-           TQ = [],
-           zQ = XQ => {
-             const wQ = XQ.index + XQ[0].length;
-             return ("" === XQ[0] ? rQ(QQ, WQ, wQ) : wQ) - 1
-           },
-           sQ = new RegExp(`(?:${WQ.source})`, `${wQ}y`).exec(QQ);
-         if (sQ) {
-           if (TQ.push(sQ), !WQ.global) return TQ;
-           qQ.lastIndex = zQ(sQ)
-         }
- ... (16 more removed lines; see GitHub link above)
+     function QM(MM) {
+       return MM.map((MM => {
+         let [rM, iM, OM, SM, jM, aM] = MM;
+         return [rM, 8 - jM, OM, SM, 8 - iM, aM]
+       }))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L678-L682` → after: `L16203-L16204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16203-L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16203-L16204) · [Before (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L678-L682)

```diff
-     function gQ(QQ, WQ, XQ, wQ) {
-       let qQ = "",
-         TQ = 0;
-       for (const zQ of PQ(QQ, WQ, XQ)) qQ += QQ.slice(TQ, zQ.index) + wQ(zQ), TQ = zQ.index + zQ[0].length;
-       return qQ + QQ.slice(TQ)
+     function JM(MM) {
+       return Object.fromEntries(SM.m.map((rM => [rM, MM(rM)])))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L685-L689` → after: `L16256-L16286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16256-L16286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16256-L16286) · [Before (L685-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L685-L689)

```diff
-     function JQ(QQ, WQ, XQ) {
-       const wQ = [];
-       let qQ = 0;
-       for (const TQ of PQ(QQ, WQ, XQ)) wQ.push(QQ.slice(qQ, TQ.index)), qQ = TQ.index + TQ[0].length;
-       return [...wQ, QQ.slice(qQ)]
+     function oM(MM, rM) {
+       var iM, OM, SM, aM;
+       let PM = ZM[MM.meta.rootName];
+       const nM = null !== (iM = null !== (OM = MM.blockModel) && void 0 !== OM ? OM : rM.blockModel) && void 0 !== iM ? iM : "";
+       "noticeboard_standing_leg" === nM ? PM = pM : nM.startsWith("noticeboard_standing") ? PM = uM : nM.startsWith("noticeboard_wall") ? PM = RM : MM.meta.rootName.endsWith(" Directional Arrow") ? PM = UM : MM.meta.rootName.endsWith(" Ladder") ? PM = gM : MM.meta.rootName.endsWi … [truncated]
+       const QM = jM.h.includes(MM.meta.rootName) ? 2 : 0;
+       return null === (SM = PM) || void 0 === SM ? void 0 : SM[((null !== (aM = MM.meta.rot) && void 0 !== aM ? aM : 1) - 1 + QM) % 4]
+     }
+   },
+   9932: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     const OM = ["Maple", "Pine", "Plum", "Cedar", "Aspen", "Jungle", "Palm", "Pear", "Cherry", "Spectral", "Mango"]
+   },
+   9863: (MM, rM, iM) => {
+ ... (15 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L692-L694` → after: `L16290-L16291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16290-L16291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16290-L16291) · [Before (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L692-L694)

```diff
-     function rQ(QQ, WQ, XQ) {
-       var wQ;
-       return XQ + (WQ.unicode && (null !== (wQ = QQ.codePointAt(XQ)) && void 0 !== wQ ? wQ : 0) > 65535 ? 2 : 1)
+     function aM(MM, rM) {
+       rM.meta = PM(rM.name, rM.id, (rM => MM[rM].id), rM.rootMetaDesc)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L696-L697` → after: `L16293-L16326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R16293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L16293-L16326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/84.js#L16293-L16326) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/84.js#L696-L697)

```diff
-   },
-   6888: () => {}
+ 
+     function PM(MM, rM, iM, aM) {
+       const PM = null !== aM && void 0 !== aM ? aM : MM;
+       if (PM.split("|").length > 1 || PM.startsWith("Caught Mob")) {
+         var nM;
+         const MM = PM.split("|")[0],
+           rM = PM.split("|").slice(1).join("|"),
+           aM = rM.includes("rot") ? parseInt(rM.split("rot")[1][0]) : null;
+         let QM = !!rM.includes("open") || null;
+         rM.includes("closed") && (QM = !1);
+         let zM = rM.includes("bot") ? OM.bot : null;
+         rM.includes("top") ? zM = OM.top : rM.includes("side") && (zM = OM.side);
+         const LM = !!rM.includes("Growing") || null,
+           mM = !!rM.includes("TreeBase") || null,
+           HM = !!rM.includes("TreeCanopy") || null,
+           hM = rM.includes("books") ? parseInt(rM.split("books")[1][0]) : null,
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/85.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/85.js#L4)

```diff
-   5071: (QQ, WQ, XQ) => {
+   37981: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/85.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/85.js#L6)

```diff
-       e: () => BQ
+       d: () => OM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8-L17` → after: `L8-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/85.js#L8-L580) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/85.js#L8-L17)

```diff
-     const wQ = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       qQ = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       TQ = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       zQ = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       sQ = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       FQ = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var PQ = XQ(5075),
-       gQ = XQ(5083);
-     const JQ = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       rQ = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+     const OM = {
+       "AK-47": {
+         gunType: "semi_automatic",
+         scopeType: "none",
+         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
+         muzzleFlashScale: 1.5,
+         autoFireWithMouse: !0,
+         fireRate: 600,
+         cadenceMs: 75,
+         equipDelay: 24,
+         damage: 20,
+         reloadTime: 2300,
+         clipSize: 30,
+         tagSpeedMult: .8,
+         subsequentTagSpeedReductionScalar: .55,
+         inaccuracyStanding: 10,
+ ... (557 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L20` → after: `L583-L9831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L583-L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/85.js#L583-L9831) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/85.js#L20)

```diff
-       return QQ.split("\n").filter((QQ => QQ.startsWith("## "))).map((QQ => QQ.replace(/^## (.+)$/gm, "$1").trim()))
+       return {
+         translationKey: `item:${(0,OM.me)(MM)}`
+       }
+     }
+     const HM = {
+         name: "decorativeArmour",
+         materials: jM.c,
+         kinds: SM.b,
+         inheritsFrom: MM => ({
+           material: "Diamond",
+           kind: MM
+         }),
+         displayName: mM
+       },
+       hM = {
+         name: "keys",
+ ... (9233 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L24-L112` → after: `L9835-L10107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L9835-L10107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/85.js#L9835-L10107) · [Before (L24-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/85.js#L24-L112)

```diff
-       return QQ.split("\n").map(((QQ, WQ) => 0 === WQ ? QQ.trim() : QQ.trim().replace(/^# ?/gm, " "))).join("\n\n")
-     }
-     const BQ = [{
-       id: "readme",
-       title: "Getting started",
-       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
-     }, {
-       id: "snippets",
-       title: "Snippets",
-       content: rQ,
-       subsections: IQ(rQ)
-     }, {
-       id: "changelog",
-       title: "Changelog",
-       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 24th November 2026\n- A `"follow"` [`gameCamera`](#clientOptions-gameCamera) takes `anchor: "eye"`, to watch another player through their eyes: it sits at their eye and looks where they loo … [truncated]
-     }, {
- ... (73 more removed lines; see GitHub link above)
+       return MM.split(" ")[0]
+     }
+     const GM = .0018;
+     let CM = Object.values(aM.k).reduce(((MM, rM) => Math.max(MM, rM.id)), 0) + 1;
+     for (const uM in hM) hM[uM].id = CM, hM[uM].name = uM, hM[CM] = hM[uM], (0, SM.f)(hM, hM[uM]), ++CM;
+     const eM = {};
+     for (const uM in hM) {
+       var bM;
+       const MM = hM[uM];
+       eM[uM] = null !== (bM = eM[MM.id]) && void 0 !== bM ? bM : new jM.h(MM)
+     }
+     const wM = {},
+       tM = [aM.k, eM].flatMap(Object.entries);
+     for (const [uM, RM] of tM) wM[uM] = RM, wM[RM.id] = RM;
+     for (const uM of zM.e) {
+       const MM = uM;
+ ... (257 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/86.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/86.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L4-L5` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/86.js#L4-L10) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/86.js#L4-L5)

```diff
-   5075: QQ => {
-     QQ.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
+   37988: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM,
+       g: () => SM
+     });
+     const OM = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       SM = 45 == iM.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L4-L5` → after: `L4-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L4-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L340) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L5)

```diff
-   5083: QQ => {
-     QQ.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   37996: (MM, rM, iM) => {
+     if (iM.d(rM, {
+         d: () => nM,
+         h: () => SM,
+         k: () => aM,
+         l: () => jM,
+         m: () => GM,
+         q: () => yM
+       }), 45 == iM.j) var OM = iM(38005);
+     const SM = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       jM = ["Blade", "Guard", "Handle"],
+       aM = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (321 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L488) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/88.js#L4)

```diff
-   5085: (QQ, WQ, XQ) => {
+   38136: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Atlas.png": 27689,
+       "./67/67_Model.glb": 33840,
+       "./67/67_Reconstructed.glb": 33842,
+       "./67/variations/0_67_default.png": 27694,
+       "./Armour Collector/Armour Collector_Atlas.png": 27701,
+       "./Armour Collector/Armour Collector_Model.glb": 33844,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33853,
+       "./Armour Collector/variations/0_armour collector_default.png": 27708,
+       "./Bear/BearSaddle_Atlas.png": 27710,
+       "./Bear/Bear_Atlas.png": 27712,
+       "./Bear/Bear_Model.glb": 33860,
+       "./Bear/variations/0_bear_default.png": 27720,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27723,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33865,
+ ... (469 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L8-L4501` → after: `L492-L39404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L492-L39404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/88.js#L492-L39404) · [Before (L8-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/88.js#L8-L4501)

```diff
-     const wQ = String.raw`export interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
-  * @param entityId
-  */
- getPosition(entityId: EntityId): Pos
- /**
- ... (4478 more removed lines; see GitHub link above)
+     var OM = iM(39271),
+       SM = iM.n(OM);
+ 
+     function jM(MM) {
+       var rM = [],
+         iM = [],
+         OM = null;
+ 
+       function jM(iM, SM) {
+         var jM = OM[iM],
+           PM = OM[SM];
+         jM && PM && (function(MM, rM, iM, OM) {
+           if (MM.VaM) return rM.VaM ? function(MM, rM) {
+             var iM = (MM[3] - MM[0]) / 2,
+               OM = (rM[3] - rM[0]) / 2,
+               SM = MM[0] + iM - (rM[0] + OM),
+ ... (38897 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L4)

```diff
-   36831: (QQ, WQ, XQ) => {
+   5069: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L6-L114` → after: `L6-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L6-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L6-L45) · [Before (L6-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L6-L114)

```diff
-       d: () => SQ,
-       f: () => kQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(2003),
-       TQ = XQ(36833),
-       zQ = XQ.n(TQ),
-       sQ = XQ(4863),
-       FQ = XQ(1975),
-       PQ = XQ(1498),
-       gQ = XQ(105),
-       JQ = XQ(129),
-       rQ = XQ(402),
-       IQ = XQ(1081),
-       jQ = XQ.n(IQ),
-       BQ = XQ(26),
- ... (93 more removed lines; see GitHub link above)
+       e: () => Ar,
+       i: () => Li,
+       l: () => Tr,
+       p: () => ri,
+       r: () => Ir,
+       v: () => Vr,
+       x: () => or,
+       z: () => Fr,
+       A: () => ur,
+       B: () => zi,
+       F: () => Qi,
+       J: () => Br,
+       L: () => Zr
+     });
+     var OM = iM(3185);
+     const SM = Function.prototype.toString,
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L117-L123` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L58-L64) · [Before (L117-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L117-L123)

```diff
-       function PW(QQ, WQ) {
-         0 === oQ.current && (eQ.current = WW.current.value);
-         const XQ = (0, dQ.j)(oQ.current + QQ, WQ);
-         oQ.current = XQ.stepsBack, WW.current.value = 0 === XQ.stepsBack ? eQ.current : XQ.text, setTimeout((() => {
-           WW.current && WW.current.setSelectionRange(-1, -1)
-         }), 0)
-       }
+     function tM(MM, rM) {
+       return MM === `function ${rM}() { [native code] }` || MM === `function ${rM}() {\n    [native code]\n}`
+     }
+     const gM = 0,
+       uM = 1,
+       RM = 2;
+     let pM = gM;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L125-L208` → after: `L66-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L66-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L66-L85) · [Before (L125-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L125-L208)

```diff
-       function gW() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         nQ.current && (!QQ && KQ.current || (nQ.current.scrollTop = 1e5))
-       }
-       return (0, sQ.c)(!0, TQ, "ChatComponent"), (0, wQ.useEffect)((() => (LQ = TQ, () => {
-           LQ = !1
-         })), [TQ]), (0, PQ.f)("appManagerUpdated|openEverythingMenuName", (() => {
-           (0, VQ.t)() && IQ(!1)
-         })), (0, wQ.useEffect)((() => {
-           WW.current.addEventListener("blur", (QQ => {
-             if (null === WW.current) return;
-             Array.from(document.querySelectorAll(":hover")).some((QQ => QQ.classList.contains("ChatInputChannel") || QQ.classList.contains("ChatMsgSelectWrapper"))) || ((0, gQ.isMobile)() && GQ.current && "" !== WW.current.value && wW.current(), IQ(!1))
-           }));
-           const QQ = QQ => {
-             UQ.current.contains(QQ.target) || (0, pQ.m)(QQ.target) || IQ(!1)
-           };
- ... (68 more removed lines; see GitHub link above)
+     function WM(MM, rM, iM) {
+       if (pM === RM && eM === EM && ! function() {
+           const MM = CM;
+           return wM >= yM && (bM(HM, mM, [MM]), wM = 0), MM[wM++] < 256 / dM
+         }()) return function(MM, rM, iM) {
+         return bM(MM, rM, iM ?? 0)
+       }(...arguments);
+       if (pM === gM || eM === UM) return aM(MM, rM, iM);
+       let OM;
+       pM = gM;
+       try {
+         eM === lM && (eM = GM, eM = function() {
+           const MM = aM(SM, aM, []);
+           if (tM(MM, "apply")) return UM;
+           if (null === aM(jM, /\(\.\.\.arguments\)/, [MM]) && null === aM(jM, /^function\s*\(\.\.\.[\w$]+\)/, [MM])) return UM;
+           if ("function" !== typeof JM || "function" !== typeof PM || "function" !== typeof nM || "function" !== typeof QM || "function" !== typeof zM || "function" !== typeof HM || "function" !== typeof LM || !tM(aM(SM, PM, []), "call") || !tM(aM(SM, nM, []), "apply") || !tM(aM( … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L210-L241` → after: `L87-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L87-L92) · [Before (L210-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L210-L241)

```diff
-           QW.current = rQ;
-           const jQ = new MutationObserver(rQ);
-           return jQ.observe(FQ, {
-             childList: !0,
-             subtree: !0
-           }), () => {
-             document.removeEventListener("keydown", sQ, {
-               capture: !0
-             }), document.removeEventListener("touchstart", QQ, {
-               capture: !0
-             }), document.removeEventListener("mousedown", WQ, {
-               capture: !0
-             }), document.removeEventListener("pointerlockchange", TQ), QW.current = null, jQ.disconnect(), JQ.disconnect(), clearTimeout(mQ.current)
-           }
-         }), []), (0, pQ.r)(WW, {
-           open: () => {
- ... (16 more removed lines; see GitHub link above)
+           try {
+             if (!0 !== rM(OM, iM, [iM])) return UM;
+             const MM = new LM(yM);
+             rM(HM, mM, [MM]), CM = MM
+           } catch {
+             return UM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L243-L357` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L94-L97) · [Before (L243-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L243-L357)

```diff
-         }), (0, wQ.useEffect)((() => {
-           var QQ;
-           (GQ.current = TQ, WW.current) && (TQ ? (oQ.current = 0, WW.current.focus()) : (WW.current.blur(), null === (QQ = QW.current) || void 0 === QQ || QQ.call(QW)))
-         }), [TQ]),
-         function(QQ, WQ) {
-           (0, wQ.useLayoutEffect)((() => {
-             if (!WQ) return;
-             AQ.c.hold();
-             const XQ = QQ.current.closest(".InGameHeaderAndChat"),
-               wQ = (0, RQ.c)((QQ => {
-                 let {
-                   top: WQ,
-                   height: wQ
-                 } = QQ;
-                 XQ.style.setProperty("--keyboard-top", `${WQ+wQ}px`)
-               }));
- ... (99 more removed lines; see GitHub link above)
+           return bM = rM, EM
+         }()), OM = aM(MM, rM, iM)
+       } catch (hM) {
+         throw eM = UM, hM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L359-L360` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L99) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L359-L360)

```diff
-       var WQ;
-       return ""
+       return pM = RM, OM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L363-L373` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L103-L104) · [Before (L363-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L363-L373)

```diff
-     function HQ(QQ) {
-       let {
-         messages: WQ,
-         reportedPlayers: XQ
-       } = QQ;
-       return (0, vQ.jsx)(vQ.Fragment, {
-         children: WQ.map((QQ => (0, vQ.jsx)(aQ, {
-           message: QQ,
-           reportedPlayers: XQ
-         }, QQ.clientChatMsgId)))
-       })
+     function DM() {
+       return (sM === aM ? 0 : 3) + pM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L503-L506` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L108-L109) · [Before (L503-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L503-L506)

```diff
-       var QQ;
-       return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
-         children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
-       })
+       const MM = DM();
+       return sM = aM, MM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L510-L523` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L113) · [Before (L510-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L510-L523)

```diff
-       var WQ;
-       let {
-         show: XQ
-       } = QQ;
-       (0, sQ.j)(qQ.c, (0, qQ.s)());
-       const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
-       return (0, FQ.useEffect)((() => {
-         var QQ;
-         XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
-       }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
-         showing: XQ,
-         globallyUniqueKey: "clientGameMenu",
-         children: null === PQ || void 0 === PQ ? void 0 : PQ.content
-       })
+       sM = MM >= 3 ? WM : aM, pM = MM % 3
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L527-L535` → after: `L132-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L132-L138) · [Before (L527-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L527-L535)

```diff
-       let {
-         placement: WQ = "bottom"
-       } = QQ;
-       return (0, gQ.jsx)("div", {
-         id: `clientGameHud-${WQ}`,
-         style: {
-           display: "contents"
-         }
-       })
+       if ("function" !== typeof MM) return "#a0.0";
+       const rM = sM(FM, VM, [MM]);
+       if (void 0 !== rM) return rM;
+       const iM = sM(oM, MM, []),
+         OM = iM.length > qM ? qM : iM.length,
+         SM = `#${function(MM,rM){const iM=sM(NM,XM,[rM]);if(null===iM)return"s";const OM=iM[1];if("ProxyObject"===OM)return"p";if(""!==OM)return sM(xM,OM,["bound "])?"b":"n";try{const rM=fM(MM,"name"),iM=void 0!==rM&&sM(YM,rM,["value"])?rM.value:void 0;return"string"===typeof iM& … [truncated]
+       return sM(BM, VM, [MM, SM]), SM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L539-L546` → after: `L142-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L142-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L142-L164) · [Before (L539-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L539-L546)

```diff
-       let {
-         children: WQ,
-         placement: XQ = "bottom"
-       } = QQ;
-       const [wQ, qQ] = (0, FQ.useState)(null);
-       return (0, FQ.useEffect)((() => {
-         qQ(document.getElementById(`clientGameHud-${XQ}`))
-       }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
+       const rM = sM(NM, TM, [MM]);
+       return null === rM ? MM : rM[1]
+     }
+     var rr = iM(3205);
+     const ir = Function.prototype.toString,
+       Or = Object.getOwnPropertyDescriptor,
+       Sr = RegExp.prototype.exec,
+       jr = Object.prototype.hasOwnProperty,
+       ar = Set.prototype.has,
+       Pr = WeakMap.prototype.get,
+       nr = WeakMap.prototype.set,
+       Qr = Reflect.get,
+       zr = Object.getPrototypeOf,
+       Lr = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;
+ 
+     function mr(MM, rM, iM) {
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L563` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L168) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L563)

```diff
-       return window.matchMedia("(max-width: 900px)").matches
+       return Lr
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L566-L626` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L173-L174) · [Before (L566-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L566-L626)

```diff
-     function JQ(QQ) {
-       let {
-         side: WQ,
-         defaultSize: XQ,
-         covers: qQ,
-         onClose: gQ,
-         children: JQ
-       } = QQ;
-       const rQ = (0, wQ.useRef)(null),
-         [IQ, jQ] = (0, wQ.useState)(null),
-         [BQ, yQ] = (0, wQ.useState)(XQ);
-       BQ !== XQ && (yQ(XQ), jQ(null));
-       const VQ = (0, wQ.useRef)(null),
-         DQ = "top" === WQ,
-         pQ = QQ => DQ ? QQ.clientY : QQ.clientX,
-         GQ = () => {
- ... (45 more removed lines; see GitHub link above)
+     function dr() {
+       return Jr
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L628-L651` → after: `L176-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L176-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L176-L242) · [Before (L628-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L628-L651)

```diff
-   },
-   37194: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       A: () => UQ,
-       D: () => dQ,
-       F: () => qQ,
-       G: () => vQ,
-       c: () => pQ,
-       g: () => yQ,
-       i: () => jQ,
-       m: () => IQ,
-       p: () => DQ,
-       t: () => HQ,
-       w: () => GQ,
-       z: () => bQ
-     });
- ... (8 more removed lines; see GitHub link above)
+     let yr, lr;
+     try {
+       const MM = globalThis.crypto,
+         rM = MM?.subtle;
+       yr = MM ? zr(MM) : void 0, lr = rM ? zr(rM) : void 0
+     } catch {}
+ 
+     function Er(MM, rM) {
+       for (let iM = MM; void 0 !== iM && null !== iM; iM = zr(iM)) {
+         const MM = Or(iM, rM);
+         if (MM) return MM
+       }
+     }
+     const Ur = [mr("in", Hr, "instantiate", {
+       tier: "weighted",
+       onNamespace: !0
+ ... (51 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L654-L655` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L245-L250) · [Before (L654-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L654-L655)

```diff
-       sQ = QQ;
-       for (const WQ of gQ) WQ()
+       let rM;
+       try {
+         const iM = Qr(globalThis, MM);
+         rM = "function" === typeof iM ? iM.prototype : void 0
+       } catch {}
+       return () => rM
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L658-L665` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L253-L254) · [Before (L658-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L658-L665)

```diff
-     function rQ() {
-       if (!sQ || void 0 !== sQ.endedAt) return;
-       null !== FQ && (clearTimeout(FQ), FQ = null), JQ({
-         ...sQ,
-         endedAt: Date.now()
-       });
-       const QQ = PQ;
-       PQ = null, null === QQ || void 0 === QQ || QQ()
+     function Cr(MM, rM, iM) {
+       return iM.map((iM => mr(MM, rM, iM)))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L669-L677` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L267-L272) · [Before (L669-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L669-L677)

```diff
-       let {
-         submit: XQ,
-         reopen: wQ
-       } = WQ;
-       null !== FQ && clearTimeout(FQ), PQ = wQ, JQ({
-         ...QQ,
-         startedAt: Date.now(),
-         errors: []
-       }), FQ = setTimeout(rQ, zQ), XQ()
+       const iM = kM();
+       try {
+         sM(nr, gr, [MM, rM])
+       } finally {
+         ZM(iM)
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L680-L684` → after: `L275-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L275-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L275-L282) · [Before (L680-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L680-L684)

```diff
-     function jQ() {
-       sQ && void 0 === sQ.endedAt && void 0 === sQ.ranAt && (null !== FQ && clearTimeout(FQ), JQ({
-         ...sQ,
-         ranAt: Date.now()
-       }), FQ = setTimeout(rQ, qQ))
+     function Rr(MM) {
+       try {
+         const rM = Pi(MM),
+           iM = sM(Pr, gr, [rM]);
+         return Mi(iM, MM) ? pr(MM, !0) : `${pr(MM,!1)}${cM(iM??rM)}`
+       } catch {
+         return `${pr(MM,!1)}${cM(void 0)}`
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L688-L694` → after: `L285-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L285-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L285-L290) · [Before (L688-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L688-L694)

```diff
-     function yQ(QQ) {
-       if (!sQ || void 0 === sQ.ranAt || void 0 !== sQ.endedAt || sQ.errors.includes(QQ) || sQ.errors.length >= BQ) return;
-       const WQ = 0 === sQ.errors.length;
-       JQ({
-         ...sQ,
-         errors: [...sQ.errors, QQ]
-       }), WQ && (null !== FQ && clearTimeout(FQ), FQ = setTimeout(rQ, TQ))
+     function pr(MM, rM) {
+       let {
+         code: iM,
+         key: OM
+       } = MM;
+       return `wh:${iM}${rM?"-dbg":""}:${OM}`
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L698-L699` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L294) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L698-L699)

```diff
-       var WQ;
-       return (null === (WQ = sQ) || void 0 === WQ ? void 0 : WQ.chatKey) === QQ ? sQ : null
+       return Object.values(wr).flatMap((rM => rM.map((rM => pr(rM, MM)))))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L703-L704` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L301) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L703-L704)

```diff
-       const WQ = VQ(QQ);
-       return WQ && void 0 !== WQ.endedAt ? (JQ(null), WQ) : null
+       tr = wr[MM]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L708-L709` → after: `L305-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L305-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L305-L310) · [Before (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L708-L709)

```diff
-       var WQ;
-       (null === (WQ = sQ) || void 0 === WQ ? void 0 : WQ.chatKey) === QQ && (null !== FQ && (clearTimeout(FQ), FQ = null), PQ = null, JQ(null))
+       const rM = kM();
+       try {
+         return fr(MM) || fr(Mr(MM))
+       } finally {
+         ZM(rM)
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L714-L715` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L314) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L714-L715)

```diff
-       const WQ = [...new Set(QQ)].slice(0, BQ);
-       return `Fix this in your change: when it ran, the world showed ${1===WQ.length?"this error":"these errors"}: ${WQ.join(" ")}`
+       return sM(ar, Dr, [MM])
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L719` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L318) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L719)

```diff
-       return `Your change didn't go in, because the code wouldn't run at all: ${QQ.join(" ")} Send the whole change again with that fixed.`
+       return new Set(Ur.filter((rM => rM.tier === MM)).map((MM => `wh:${MM.code}`)))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L723` → after: `L326-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L326-L331) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L723)

```diff
-       return `Fix this in your change: ${QQ.join(" ")}`
+       const rM = kM();
+       try {
+         return Xr(Mr(MM))
+       } finally {
+         ZM(rM)
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L727-L739` → after: `L335-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L335-L339) · [Before (L727-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L727-L739)

```diff
-       var WQ;
-       if (void 0 === QQ.ranAt) return {
-         title: "Couldn't test it",
-         text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
-       };
-       const XQ = Math.max(1, Math.round(((null !== (WQ = QQ.endedAt) && void 0 !== WQ ? WQ : QQ.ranAt) - QQ.ranAt) / 1e3)),
-         wQ = `Your change ran in your world for ${XQ} ${1===XQ?"second":"seconds"}`;
-       return 0 === QQ.errors.length ? {
-         title: "Tested: no errors",
-         text: `${wQ} without an error.`
-       } : {
-         title: 1 === QQ.errors.length ? "Tested: it showed an error" : `Tested: it showed ${QQ.errors.length} errors`,
-         text: `${wQ} and showed: ${QQ.errors.join(" ")}`
+       const rM = kM();
+       try {
+         return Mr(MM)
+       } finally {
+         ZM(rM)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L744-L752` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L344) · [Before (L744-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L744-L752)

```diff
-       const [WQ, XQ] = (0, wQ.useState)((() => VQ(QQ)));
-       return (0, wQ.useEffect)((() => {
-         const WQ = () => {
-           XQ(VQ(QQ))
-         };
-         return WQ(), gQ.add(WQ), () => {
-           gQ.delete(WQ)
-         }
-       }), [QQ]), WQ
+       return sM(ar, vr, [MM])
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L766-L772` → after: `L347-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L347-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L347-L352) · [Before (L766-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L766-L772)

```diff
-     function qQ(QQ, WQ, XQ) {
-       return {
-         key: QQ,
-         label: `Code block at ${WQ.join(", ")}`,
-         codeBlock: !0,
-         pos: WQ,
-         canChangePos: XQ
+     function Ir(MM) {
+       const rM = kM();
+       try {
+         return Kr(MM)
+       } finally {
+         ZM(rM)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L787` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L357) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L787)

```diff
-       return QQ.trim().toLowerCase().startsWith(qQ.toLowerCase())
+       return sM(ar, xr, [MM])
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L791` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L361) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L791)

```diff
-       return QQ.trim().slice(qQ.length).replace(/^\.?\//, "")
+       return "wb" === MM || sM(ar, Nr, [MM])
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L793-L822` → after: `L363-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L363-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L363-L369) · [Before (L793-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L793-L822)

```diff
-   },
-   37167: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => FQ,
-       c: () => PQ,
-       e: () => sQ,
-       g: () => gQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(43),
-       TQ = XQ(105);
-     class zQ {
-       constructor(QQ, WQ) {
-         let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         this.storageKey = QQ, this.defaultValue = WQ, this.canChange = XQ, this.value = null, this.listeners = new Set, this.get = () => {
-           if (!this.canChange) return this.defaultValue;
- ... (14 more removed lines; see GitHub link above)
+ 
+     function Tr(MM) {
+       const rM = kM();
+       try {
+         return qr(MM) || Kr(MM)
+       } finally {
+         ZM(rM)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L830-L834` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L374-L379) · [Before (L830-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L830-L834)

```diff
-       const [WQ, XQ] = (0, wQ.useState)(QQ.get);
-       return (0, wQ.useEffect)((() => {
-         const WQ = QQ.subscribe(XQ);
-         return XQ(QQ.get()), WQ
-       }), [QQ]), [WQ, QQ.set]
+       const rM = kM();
+       try {
+         return "wb" === MM || Ar && qr(MM)
+       } finally {
+         ZM(rM)
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L863` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L383-L387) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L863)

```diff
-       return `${QQ}::${WQ}`
+       let {
+         isGetter: iM
+       } = rM;
+       const OM = Or(MM, iM ? "get" : "value");
+       return void 0 === OM ? void 0 : OM.value
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L867-L868` → after: `L390-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L390-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L390-L395) · [Before (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L867-L868)

```diff
-     function gQ() {
-       return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
+     function Mi(MM, rM) {
+       let {
+         isConstructor: iM,
+         native: OM
+       } = rM;
+       return "function" === typeof MM && (!(!iM && sM(jr, MM, ["prototype"])) && null !== sM(Sr, OM, [sM(ir, MM, [])]))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L871-L899` → after: `L398-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L398-L401) · [Before (L871-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L871-L899)

```diff
-     function JQ() {
-       return new Promise(((QQ, WQ) => {
-         const XQ = indexedDB.open(TQ, 1);
-         XQ.onupgradeneeded = () => {
-           const QQ = XQ.result;
-           QQ.objectStoreNames.contains(zQ) || QQ.createObjectStore(zQ)
-         }, XQ.onsuccess = () => {
-           QQ(XQ.result)
-         }, XQ.onerror = () => {
-           var QQ;
-           WQ(null !== (QQ = XQ.error) && void 0 !== QQ ? QQ : new Error("Failed to open directory sync IndexedDB"))
-         }
-       }))
-     }
-     async function rQ(QQ, WQ) {
-       const XQ = await JQ();
- ... (13 more removed lines; see GitHub link above)
+     function ri(MM, rM) {
+       return Mi(MM, mr("", (() => {}), rM, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
+         isConstructor: !0
+       } : {}))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L901-L902` → after: `L403-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L403-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L403-L406) · [Before (L901-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L901-L902)

```diff
-     async function IQ(QQ) {
-       const WQ = await JQ();
+     let ii = null,
+       Oi = !1;
+ 
+     function Si() {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L904-L915` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L408-L410) · [Before (L904-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L904-L915)

```diff
-         return await new Promise(((XQ, wQ) => {
-           const qQ = WQ.transaction(zQ, "readonly").objectStore(zQ).get(QQ);
-           qQ.onsuccess = () => {
-             var QQ;
-             XQ(null !== (QQ = qQ.result) && void 0 !== QQ ? QQ : null)
-           }, qQ.onerror = () => {
-             var QQ;
-             wQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("Failed to load directory handle"))
-           }
-         }))
-       } finally {
-         WQ.close()
+         return globalThis.WebAssembly === Lr
+       } catch {
+         return !1
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L918-L919` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/89.js#L413-L414) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/89.js#L918-L919)

```diff
-     async function jQ(QQ) {
-       const WQ = await JQ();
+ 
+     function ji(MM) {
```
