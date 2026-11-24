# Changed — Bundle Modifications Report (Part 021 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `21 / 65` (**326** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (869 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 349. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8889-L8902` → after: `L7900-L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7900-L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7900-L7919) · [Before (L8889-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8889-L8902)

```diff
-           reScanSlashToken: function(zD) {
-             if (44 === gD || 69 === gD) {
-               const wD = cD + 1;
-               KD = wD;
-               let pD = !1,
-                 LD = !1,
-                 fD = !1;
-               for (;;) {
-                 const DD = ED(KD);
-                 if (-1 === DD || Ac(DD)) {
-                   AD |= 4;
-                   break
-                 }
-                 if (pD) pD = !1;
+           leave: pp => {
+             pp.isLine() ? Op.length && (Op.length = op = 0) : pp instanceof uc && (Op.shift(), op = Math.min(op, Op.length))
+           },
+           break: () => {
+             this.builder.addBreak(), this.openWidget = !1
+           }
+         }), this.text.skip(pp)
+       }
+       emit(pp, ip) {
+         let cp = null,
+           op = this.builder,
+           Ip = 0,
+           Sp = Op.A.spans(this.uO, pp, ip, {
+             point: (pp, ip, Op, Sp, xp, Lp) => {
+               if (Op instanceof Bp) {
+                 if (this.disallowBlockEffectsFor[Lp]) {
+ ... (4 more added lines; see GitHub link above)
```

#### 350. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8904-L8907` → after: `L7921-L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7921-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7921-L7947) · [Before (L8904-L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8904-L8907)

```diff
-                   if (47 === DD && !fD) break;
-                   91 === DD ? fD = !0 : 92 === DD ? pD = !0 : 93 === DD ? fD = !1 : fD || 40 !== DD || 63 !== ED(KD + 1) || 60 !== ED(KD + 2) || 61 === ED(KD + 3) || 33 === ED(KD + 3) || (LD = !0)
-                 }
-                 KD++
+                   let Ip = Op.widget || (Op.block ? Nc.block : Nc.inline),
+                     Lp = function(pp) {
+                       let ip = pp.isReplace ? (pp.startSide < 0 ? 64 : 0) | (pp.endSide > 0 ? 128 : 0) : pp.startSide > 0 ? 32 : 16;
+                       pp.block && (ip |= 256);
+                       return ip
+                     }(Op),
+                     Yp = this.cache.findWidget(Ip, ip - pp, Lp) || kc.of(Ip, this.view, ip - pp, Lp);
+                   Op.block ? (Op.startSide > 0 && op.addLineStartIfNotCovered(cp), op.addBlockWidget(Yp)) : (op.ensureLine(cp), op.addInlineWidget(Yp, Sp, xp))
+                 }
+                 cp = null
+               } else cp = function(pp, ip) {
+                 let cp = ip.spec.attributes,
+                   Op = ip.spec.class;
+                 if (!cp && !Op) return pp;
+                 pp || (pp = {
+                   class: "cm-line"
+ ... (11 more added lines; see GitHub link above)
```

#### 351. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9456-L9571` → after: `L7950-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7950-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7950-L7966) · [Before (L9456-L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9456-L9571)

```diff
-             return gD
-           },
-           reScanTemplateToken: function(DD) {
-             return KD = cD, gD = jD(!DD)
-           },
-           reScanTemplateHeadOrNoSubstitutionTemplate: function() {
-             return KD = cD, gD = jD(!0)
-           },
-           scanJsxIdentifier: function() {
-             if (bL(gD)) {
-               for (; KD < rD;) {
-                 if (45 === JD(KD)) {
-                   RD += "-", KD++;
-                   continue
-                 }
-                 const DD = KD;
- ... (100 more removed lines; see GitHub link above)
+           });
+         op.addLineStartIfNotCovered(cp), this.openWidget = Sp > Ip, this.openMarks = Sp
+       }
+       forward(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         ip - pp <= 10 ? this.old.advance(ip - pp, cp, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ip - pp - 10, -1), this.old.advance(5, cp, this.reuseWalker))
+       }
+       getCompositionContext(pp) {
+         let ip = [],
+           cp = null;
+         for (let Op = pp.parentNode;; Op = Op.parentNode) {
+           let pp = Uc.get(Op);
+           if (Op == this.view.contentDOM) break;
+           pp instanceof uc ? ip.push(pp) : (null === pp || void 0 === pp ? void 0 : pp.isLine()) ? cp = pp : pp instanceof Hc || ("DIV" != Op.nodeName || cp || Op == this.view.contentDOM ? cp || ip.push(uc.of(new Qp({
+             tagName: Op.nodeName.toLowerCase(),
+             attributes: Cp(Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 352. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9573-L9578` → after: `L7968-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7968-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7968-L7970) · [Before (L9573-L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9573-L9578)

```diff
- 
-         function QD(DD) {
-           if (pD) {
-             const zD = KD;
-             KD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KD, pD(DD, (arguments.length > 2 ? arguments[2] : void 0) || 0, arguments.length > 3 ? arguments[3] : void 0), KD = zD
-           }
+         return {
+           line: cp,
+           marks: ip
```

#### 353. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9581-L9591` → after: `L7975-L8055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7975-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7975-L8055) · [Before (L9581-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9581-L9591)

```diff
-         function XD() {
-           let DD = KD,
-             zD = !1,
-             wD = !1,
-             pD = "";
-           for (;;) {
-             const sD = JD(KD);
-             if (95 !== sD) {
-               if (!Uc(sD)) break;
-               zD = !0, wD = !1, KD++
-             } else AD |= 512, zD ? (zD = !1, wD = !0, pD += ID.substring(DD, KD)) : (AD |= 16384, QD(wD ? TL.Multiple_consecutive_numeric_separators_are_not_permitted : TL.Numeric_separators_are_not_allowed_here, KD, 1)), DD = ++KD
+     function Qc(pp, ip) {
+       let cp = pp => {
+         for (let Op of pp.children)
+           if ((ip ? Op.isText() : Op.length) || cp(Op)) return !0;
+         return !1
+       };
+       return cp(pp)
+     }
+     const Jc = {
+       class: "cm-line"
+     };
+ 
+     function Bc(pp) {
+       let ip = Uc.get(pp);
+       return ip && ip.setDOM(pp.cloneNode()), pp
+     }
+ ... (65 more added lines; see GitHub link above)
```

#### 354. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9593` → after: `L8057-L8123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8057-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8057-L8123) · [Before (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9593)

```diff
-           return 95 === JD(KD - 1) && (AD |= 16384, QD(TL.Numeric_separators_are_not_allowed_here, KD - 1, 1)), pD + ID.substring(DD, KD)
+         }(this.view, pp.changes, op) : null;
+         if (this.domChanged = null, this.hasComposition) {
+           let {
+             from: ip,
+             to: Op
+           } = this.hasComposition;
+           cp = new Pc(ip, Op, pp.changes.mapPos(ip, -1), pp.changes.mapPos(Op, 1)).addToSet(cp.slice())
+         }
+         this.hasComposition = Ip ? {
+           from: Ip.range.fromB,
+           to: Ip.range.toB
+         } : null, (kp.ie || kp.chrome) && !Ip && pp && pp.state.doc.lines != pp.startState.doc.lines && (this.forceSelection = !0);
+         let Sp = this.uO,
+           xp = this.blockWrappers;
+         this.updateDeco();
+         let Lp = function(pp, ip, cp) {
+ ... (51 more added lines; see GitHub link above)
```

#### 355. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9595-L9605` → after: `L8125-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8125-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8125-L8196) · [Before (L9595-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9595-L9605)

```diff
- 
-         function VD() {
-           let DD, zD, wD, pD = KD;
-           if (48 === JD(KD))
-             if (95 === JD(++KD)) AD |= 16896, QD(TL.Numeric_separators_are_not_allowed_here, KD, 1), KD--, DD = XD();
-             else if (CD()) {
-             if (RD) {
-               RD = "" + parseInt(RD, 8), AD |= 32;
-               const DD = 41 === gD,
-                 zD = (DD ? "-" : "") + "0o" + (+RD).toString(8);
-               return DD && pD--, QD(TL.Octal_literals_are_not_allowed_Use_the_syntax_0, pD, KD - pD, zD), 9
+         var Yp;
+         let Dp = this.view.observer.selectionRange;
+         !Ip && Dp.focusNode && (Fp(Sp.node, Sp.offset, Dp.anchorNode, Dp.anchorOffset) && Fp(xp.node, xp.offset, Dp.focusNode, Dp.focusOffset) || this.suppressWidgetCursorChange(Dp, Lp)) || (this.view.observer.ignore((() => {
+           kp.android && kp.chrome && ip.contains(Dp.focusNode) && function(pp, ip) {
+             for (let cp = pp; cp && cp != ip; cp = cp.assignedSlot || cp.parentNode)
+               if (1 == cp.nodeType && "false" == cp.contentEditable) return !0;
+             return !1
+           }(Dp.focusNode, ip) && (ip.blur(), ip.focus({
+             preventScroll: !0
+           }));
+           let pp = bp(this.view.root);
+           if (pp)
+             if (Lp.empty) {
+               if (kp.gecko) {
+                 let pp = (Op = Sp.node, Ip = Sp.offset, 1 != Op.nodeType ? 0 : (Ip && "false" == Op.childNodes[Ip - 1].contentEditable ? 1 : 0) | (Ip < Op.childNodes.length && "false" == Op.childNodes[Ip].contentEditable ? 2 : 0));
+                 if (pp && 3 != pp) {
+ ... (56 more added lines; see GitHub link above)
```

#### 356. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9607-L9616` → after: `L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8198) · [Before (L9607-L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9607-L9616)

```diff
-             DD = "0"
-           } else AD |= 8192, DD = "" + +RD;
-           else DD = XD();
-           46 === JD(KD) && (KD++, zD = XD());
-           let sD, rD = KD;
-           if (69 === JD(KD) || 101 === JD(KD)) {
-             KD++, AD |= 16, 43 !== JD(KD) && 45 !== JD(KD) || KD++;
-             const DD = KD,
-               zD = XD();
-             zD ? (wD = ID.substring(rD, DD) + zD, rD = KD) : QD(TL.Digit_expected)
+             op = Op < 0 ? pp : pp.nextSibling
```

#### 357. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9618-L9623` → after: `L8200-L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8200-L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8200-L8206) · [Before (L9618-L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9618-L9623)

```diff
-           if (512 & AD ? (sD = DD, zD && (sD += "." + zD), wD && (sD += wD)) : sD = ID.substring(pD, rD), 8192 & AD) return QD(TL.Decimals_with_leading_zeros_are_not_allowed, pD, rD - pD), RD = "" + +sD, 9;
-           if (void 0 !== zD || 16 & AD) return PD(pD, void 0 === zD && !!(16 & AD)), RD = "" + +sD, 9;
-           {
-             RD = sD;
-             const DD = yD();
-             return PD(pD), DD
+           if (op == cp.dom.firstChild) return Op;
+           for (; op && !Uc.get(op);) op = op.nextSibling;
+           if (!op) return Op + cp.length;
+           for (let pp = 0, ip = Op;; pp++) {
+             let Op = cp.children[pp];
+             if (Op.dom == op) return ip;
+             ip += Op.length + Op.breakAfter
```

#### 358. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9626-L9658` → after: `L8209-L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8209-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8209-L8228) · [Before (L9626-L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9626-L9658)

```diff
- 
-         function PD(zD, wD) {
-           if (!ic(MD(KD), DD)) return;
-           const pD = KD,
-             {
-               length: sD
-             } = WD();
-           1 === sD && "n" === ID[pD] ? QD(wD ? TL.A_bigint_literal_cannot_use_exponential_notation : TL.A_bigint_literal_must_be_an_integer, zD, pD - zD + 1) : (QD(TL.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal, pD, sD), KD = pD)
-         }
- 
-         function CD() {
-           const DD = KD;
-           let zD = !0;
-           for (; Uc(ED(KD));) Gc(JD(KD)) || (zD = !1), KD++;
-           return RD = ID.substring(DD, KD), zD
-         }
- ... (17 more removed lines; see GitHub link above)
+       }
+       domAtPos(pp, ip) {
+         let {
+           tile: cp,
+           offset: Op
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isWidget() ? cp.domPosFor(pp, ip) : cp.domIn(Op, ip)
+       }
+       inlineDOMNearPos(pp, ip) {
+         let cp, Op, op = -1,
+           Ip = !1,
+           Sp = -1,
+           xp = !1;
+         return this.tile.blockTiles(((ip, Lp) => {
+           if (ip.isWidget()) {
+             if (32 & ip.flags && Lp >= pp) return !0;
+ ... (4 more added lines; see GitHub link above)
```

#### 359. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9660-L9681` → after: `L8230-L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8230-L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8230-L8256) · [Before (L9660-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9660-L9681)

```diff
-           return pD.length < DD && (pD = []), 95 === JD(KD - 1) && QD(TL.Numeric_separators_are_not_allowed_here, KD - 1, 1), String.fromCharCode(...pD)
-         }
- 
-         function bD() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const zD = JD(KD);
-           let wD = "",
-             pD = ++KD;
-           for (;;) {
-             if (KD >= rD) {
-               wD += ID.substring(pD, KD), AD |= 4, QD(TL.Unterminated_string_literal);
-               break
-             }
-             const sD = JD(KD);
-             if (sD === zD) {
-               wD += ID.substring(pD, KD), KD++;
- ... (6 more removed lines; see GitHub link above)
+         })), cp || Op ? (Ip && Op ? cp = null : xp && cp && (Op = null), cp && ip < 0 || !Op ? cp.domIn(op, ip) : Op.domIn(Sp, ip)) : this.domAtPos(pp, ip)
+       }
+       coordsAt(pp, ip) {
+         let {
+           tile: cp,
+           offset: Op
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isWidget() ? cp.widget instanceof Fc ? null : cp.coordsInWidget(Op, ip, !0) : cp.coordsIn(Op, ip)
+       }
+       lineAt(pp, ip) {
+         let {
+           tile: cp
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isLine() ? cp : null
+       }
+       coordsForChar(pp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 360. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9683-L9696` → after: `L8258-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8258-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8258-L8299) · [Before (L9683-L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9683-L9696)

```diff
-               KD++
-             } else wD += ID.substring(pD, KD), wD += dD(3), pD = KD
-           }
-           return wD
-         }
- 
-         function jD(DD) {
-           const zD = 96 === JD(KD);
-           let wD, pD = ++KD,
-             sD = "";
-           for (;;) {
-             if (KD >= rD) {
-               sD += ID.substring(pD, KD), AD |= 4, QD(TL.Unterminated_template_literal), wD = zD ? 15 : 18;
-               break
+               if ((cp -= Op.length) < 0) break
+             } else if (ip.isText() && cp < ip.length) {
+               let pp = (0, Op.S)(ip.text, cp);
+               if (pp == cp) return null;
+               let op = Ii(ip.dom, cp, pp).getClientRects();
+               for (let ip = 0; ip < op.length; ip++) {
+                 let pp = op[ip];
+                 if (ip == op.length - 1 || pp.top < pp.bottom && pp.left < pp.right) return pp
+               }
+             } return null
+         }(ip, cp)
+       }
+       measureVisibleLineHeights(pp) {
+         let ip = [],
+           {
+             from: cp,
+ ... (26 more added lines; see GitHub link above)
```

#### 361. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9698-L9701` → after: `L8301-L8318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8301-L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8301-L8318) · [Before (L9698-L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9698-L9701)

```diff
-             const LD = JD(KD);
-             if (96 === LD) {
-               sD += ID.substring(pD, KD), KD++, wD = zD ? 15 : 18;
-               break
+           };
+         return Yp(this.tile, 0, null), ip
+       }
+       textDirectionAt(pp) {
+         let {
+           tile: ip
+         } = this.tile.resolveBlock(pp, 1);
+         return "rtl" == getComputedStyle(ip.dom).direction ? Ai.RTL : Ai.LTR
+       }
+       measureTextSize() {
+         let pp = this.tile.blockTiles((pp => {
+           if (pp.isLine() && pp.children.length && pp.length <= 20) {
+             let ip, cp = 0;
+             for (let Op of pp.children) {
+               if (!Op.isText() || /[^ -~]/.test(Op.text)) return;
+               let pp = np(Op.dom);
+ ... (2 more added lines; see GitHub link above)
```

#### 362. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9703-L9705` → after: `L8320-L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8320-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8320-L8323) · [Before (L9703-L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9703-L9705)

```diff
-             if (36 === LD && KD + 1 < rD && 123 === JD(KD + 1)) {
-               sD += ID.substring(pD, KD), KD += 2, wD = zD ? 16 : 17;
-               break
+             if (cp) return {
+               lineHeight: pp.dom.getBoundingClientRect().height,
+               charWidth: cp / pp.length,
+               textHeight: ip
```

#### 363. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9709` → after: `L8326-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8326-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8326-L8336) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9709)

```diff
-           return np.assert(void 0 !== wD), RD = sD, wD
+         }));
+         if (pp) return pp;
+         let ip, cp, Op, op = document.createElement("div");
+         return op.className = "cm-line", op.style.width = "99999px", op.style.position = "absolute", op.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
+           this.tile.dom.appendChild(op);
+           let pp = np(op.firstChild)[0];
+           ip = op.getBoundingClientRect().height, cp = pp && pp.width ? pp.width / 27 : 7, Op = pp && pp.height ? pp.height : ip, op.remove()
+         })), {
+           lineHeight: ip,
+           charWidth: cp,
+           textHeight: Op
```

#### 364. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9711-L9782` → after: `L8338-L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8338-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8338-L8352) · [Before (L9711-L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9711-L9782)

```diff
- 
-         function dD(zD) {
-           const wD = KD;
-           if (++KD >= rD) return QD(TL.Unexpected_end_of_text), "";
-           const pD = JD(KD);
-           switch (KD++, pD) {
-             case 48:
-               if (KD >= rD || !Uc(JD(KD))) return "\0";
-             case 49:
-             case 50:
-             case 51:
-               KD < rD && Gc(JD(KD)) && KD++;
-             case 52:
-             case 53:
-             case 54:
-             case 55:
- ... (56 more removed lines; see GitHub link above)
+       }
+       computeBlockGapDeco() {
+         let pp = [],
+           ip = this.view.viewState;
+         for (let cp = 0, Op = 0;; Op++) {
+           let op = Op == ip.viewports.length ? null : ip.viewports[Op],
+             Ip = op ? op.from - 1 : this.view.state.doc.length;
+           if (Ip > cp) {
+             let Op = (ip.lineBlockAt(Ip).bottom - ip.lineBlockAt(cp).top) / this.view.scaleY;
+             pp.push(lp.replace({
+               widget: new Fc(Op),
+               block: !0,
+               inclusive: !0,
+               isBlockGap: !0
+             }).range(cp, Ip))
```

#### 365. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9785-L9792` → after: `L8357-L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8357-L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8357-L8374) · [Before (L9785-L9792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9785-L9792)

```diff
- 
-         function SD(DD) {
-           const zD = KD,
-             wD = KD += 3,
-             pD = xD(1, !1),
-             sD = pD ? parseInt(pD, 16) : -1;
-           let LD = !1;
-           return sD < 0 ? (DD && QD(TL.Hexadecimal_digit_expected), LD = !0) : sD > 1114111 && (DD && QD(TL.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive, wD, KD - wD), LD = !0), KD >= rD ? (DD && QD(TL.Unexpected_end_of_text), LD = !0) : 125 === JD( … [truncated]
+         return lp.set(pp)
+       }
+       updateDeco() {
+         let pp = 1,
+           ip = this.view.state.facet(Oc).map((ip => (this.dynamicDecorationMap[pp++] = "function" == typeof ip) ? ip(this.view) : ip)),
+           cp = !1,
+           op = this.view.state.facet(Ic).map(((pp, ip) => {
+             let Op = "function" == typeof pp;
+             return Op && (cp = !0), Op ? pp(this.view) : pp
+           }));
+         for (op.length && (this.dynamicDecorationMap[pp++] = cp, ip.push(Op.A.join(op))), this.uO = [this.editContextFormatting, ...ip, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; pp < this.uO.length;) this.dynamicDecorationMap[pp++] = !1;
+         this.blockWrappers = this.view.state.facet(oc).map((pp => "function" == typeof pp ? pp(this.view) : pp))
+       }
+       scrollIntoView(pp) {
+         var ip;
+         if (pp.isSnapshot) {
+ ... (2 more added lines; see GitHub link above)
```

#### 366. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9794-L9861` → after: `L8376-L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8376-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8376-L8379) · [Before (L9794-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9794-L9861)

```diff
- 
-         function iD() {
-           if (KD + 5 < rD && 117 === JD(KD + 1)) {
-             const DD = KD;
-             KD += 2;
-             const zD = function(DD, zD) {
-               const wD = TD(DD, !1, zD);
-               return wD ? parseInt(wD, 16) : -1
-             }(4, !1);
-             return KD = DD, zD
-           }
-           return -1
-         }
- 
-         function lD() {
-           if (117 === MD(KD + 1) && 123 === MD(KD + 2)) {
- ... (52 more removed lines; see GitHub link above)
+         for (let Dp of this.view.state.facet(Fi)) try {
+           if (Dp(this.view, pp.range, pp)) return !0
+         } catch (Yp) {
+           Zi(this.view.state, Yp, "scroll handler")
```

#### 367. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9863-L9865` → after: `L8381-L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8381-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8381-L8398) · [Before (L9863-L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9863-L9865)

```diff
- 
-         function yD() {
-           if (110 === JD(KD)) return RD += "n", 384 & AD && (RD = QP(RD) + "n"), KD++, 10;
+         let cp, {
+             range: Op
+           } = pp,
+           op = this.coordsAt(Op.head, null !== (ip = Op.assoc) && void 0 !== ip ? ip : Op.empty ? 0 : Op.head > Op.anchor ? -1 : 1);
+         if (!op) return;
+         !Op.empty && (cp = this.coordsAt(Op.anchor, Op.anchor > Op.head ? -1 : 1)) && (op = {
+           left: Math.min(op.left, cp.left),
+           top: Math.min(op.top, cp.top),
+           right: Math.max(op.right, cp.right),
+           bottom: Math.max(op.bottom, cp.bottom)
+         });
+         let Ip = Dc(this.view),
+           Sp = {
+             left: op.left - Ip.left,
+             top: op.top - Ip.top,
+             right: op.right + Ip.right,
+ ... (2 more added lines; see GitHub link above)
```

#### 368. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L9867-L9963` → after: `L8400-L8425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8400-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8400-L8425) · [Before (L9867-L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L9867-L9963)

```diff
-             const DD = 128 & AD ? parseInt(RD.slice(2), 2) : 256 & AD ? parseInt(RD.slice(2), 8) : +RD;
-             return RD = "" + DD, 9
-           }
-         }
- 
-         function kD() {
-           for (LD = KD, AD = 0;;) {
-             if (cD = KD, KD >= rD) return gD = 1;
-             const pD = MD(KD);
-             if (0 === KD && 35 === pD && Qc(ID, KD)) {
-               if (KD = Xc(ID, KD), zD) continue;
-               return gD = 6
-             }
-             switch (pD) {
-               case 10:
-               case 13:
- ... (81 more removed lines; see GitHub link above)
+             offsetWidth: xp,
+             offsetHeight: Lp
+           } = this.view.scrollDOM;
+         if (function(pp, ip, cp, Op, op, Ip, Sp, xp) {
+             let Lp = pp.ownerDocument,
+               Yp = Lp.defaultView || window;
+             for (let Dp = pp, Ap = !1; Dp && !Ap;)
+               if (1 == Dp.nodeType) {
+                 let pp, Pp = Dp == Lp.body,
+                   Wp = 1,
+                   yp = 1;
+                 if (Pp) pp = sp(Yp);
+                 else {
+                   if (/^(fixed|sticky)$/.test(getComputedStyle(Dp).position) && (Ap = !0), Dp.scrollHeight <= Dp.clientHeight && Dp.scrollWidth <= Dp.clientWidth) {
+                     Dp = Dp.assignedSlot || Dp.parentNode;
+                     continue
+ ... (10 more added lines; see GitHub link above)
```

#### 369. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10053-L10055` → after: `L8428-L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8428-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8428-L8434) · [Before (L10053-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10053-L10055)

```diff
-                 if (Ac(pD)) {
-                   AD |= 1, KD += yc(pD);
-                   continue
+                 let Up = 0,
+                   wp = 0;
+                 if ("nearest" == op) ip.top < pp.top + Sp ? (wp = ip.top - (pp.top + Sp), cp > 0 && ip.bottom > pp.bottom + wp && (wp = ip.bottom - pp.bottom + Sp)) : ip.bottom > pp.bottom - Sp && (wp = ip.bottom - pp.bottom + Sp, cp < 0 && ip.top - wp < pp.top && (wp = ip.top -  … [truncated]
+                 else {
+                   let Op = ip.bottom - ip.top,
+                     Ip = pp.bottom - pp.top;
+                   wp = ("center" == op && Op <= Ip ? ip.top + Op / 2 - Ip / 2 : "start" == op || "center" == op && cp < 0 ? ip.top - Sp : ip.bottom - Ip + Sp) - pp.top
```

#### 370. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10057-L10103` → after: `L8436-L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8436-L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8436-L8469) · [Before (L10057-L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10057-L10103)

```diff
-                 const hD = yc(pD);
-                 return QD(TL.Invalid_character, KD, hD), KD += hD, gD = 0
-             }
-           }
-         }
- 
-         function mD() {
-           switch (hD) {
-             case 0:
-               return !0;
-             case 1:
-               return !1
-           }
-           return 3 !== GD && 4 !== GD || 3 !== hD && oL.test(ID.slice(LD, KD))
-         }
- 
- ... (31 more removed lines; see GitHub link above)
+                 if ("nearest" == Op ? ip.left < pp.left + Ip ? (Up = ip.left - (pp.left + Ip), cp > 0 && ip.right > pp.right + Up && (Up = ip.right - pp.right + Ip)) : ip.right > pp.right - Ip && (Up = ip.right - pp.right + Ip, cp < 0 && ip.left < pp.left + Up && (Up = ip.left -  … [truncated]
+                   if (Pp) Yp.scrollBy(Up, wp);
+                   else {
+                     let pp = 0,
+                       cp = 0;
+                     if (wp) {
+                       let pp = Dp.scrollTop;
+                       Dp.scrollTop += wp / yp, cp = (Dp.scrollTop - pp) * yp
+                     }
+                     if (Up) {
+                       let ip = Dp.scrollLeft;
+                       Dp.scrollLeft += Up / Wp, pp = (Dp.scrollLeft - ip) * Wp
+                     }
+                     ip = {
+                       left: ip.left - pp,
+                       top: ip.top - cp,
+ ... (18 more added lines; see GitHub link above)
```

#### 371. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10231-L10247` → after: `L8473-L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8473-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8473-L8475) · [Before (L10231-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10231-L10247)

```diff
- 
-       function Zc(DD, zD) {
-         return DD.codePointAt(zD)
-       }
- 
-       function yc(DD) {
-         return DD >= 65536 ? 2 : -1 === DD ? 0 : 1
-       }
-       var kc = String.fromCodePoint ? DD => String.fromCodePoint(DD) : function(DD) {
-         if (np.assert(0 <= DD && DD <= 1114111), DD <= 65535) return String.fromCharCode(DD);
-         const zD = Math.floor((DD - 65536) / 1024) + 55296,
-           wD = (DD - 65536) % 1024 + 56320;
-         return String.fromCharCode(zD, wD)
-       };
- 
-       function mc(DD) {
- ... (1 more removed lines; see GitHub link above)
+       lineHasWidget(pp) {
+         let ip = pp => pp.isWidget() || pp.children.some(ip);
+         return ip(this.tile.resolveBlock(pp, 1).tile)
```

#### 372. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10249-L10266` → after: `L8477-L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8477-L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8477-L8478) · [Before (L10249-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10249-L10266)

```diff
-       var ec = new Map(Object.entries({
-           General_Category: "General_Category",
-           gc: "General_Category",
-           Script: "Script",
-           sc: "Script",
-           Script_Extensions: "Script_Extensions",
-           scx: "Script_Extensions"
-         })),
-         oc = new Set(["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased … [truncated]
-         ac = new Set(["Basic_Emoji", "Emoji_Keycap_Sequence", "RGI_Emoji_Modifier_Sequence", "RGI_Emoji_Flag_Sequence", "RGI_Emoji_Tag_Sequence", "RGI_Emoji_ZWJ_Sequence", "RGI_Emoji"]),
-         uc = {
-           General_Category: new Set(["C", "Other", "Cc", "Control", "cntrl", "Cf", "Format", "Cn", "Unassigned", "Co", "Private_Use", "Cs", "Surrogate", "L", "Letter", "LC", "Cased_Letter", "Ll", "Lowercase_Letter", "Lm", "Modifier_Letter", "Lo", "Other_Letter", "Lt", "Titlecase_ … [truncated]
-           Script: new Set(["Adlm", "Adlam", "Aghb", "Caucasian_Albanian", "Ahom", "Arab", "Arabic", "Armi", "Imperial_Aramaic", "Armn", "Armenian", "Avst", "Avestan", "Bali", "Balinese", "Bamu", "Bamum", "Bass", "Bassa_Vah", "Batk", "Batak", "Beng", "Bengali", "Bhks", "Bhaiksuki" … [truncated]
-           Script_Extensions: void 0
-         };
- 
- ... (2 more removed lines; see GitHub link above)
+       destroy() {
+         bc(this.tile)
```

#### 373. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10269-L10270` → after: `L8482-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8482-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8482-L8486) · [Before (L10269-L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10269-L10270)

```diff
-       function tc(DD) {
-         return pz(DD, rX, RX)
+     function bc(pp, ip) {
+       let cp = null === ip || void 0 === ip ? void 0 : ip.get(pp);
+       if (1 != cp) {
+         null == cp && pp.destroy();
+         for (let cp of pp.children) bc(cp, ip)
```

#### 374. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10272-L10285` → after: `L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8488) · [Before (L10272-L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10272-L10285)

```diff
-       uc.Script_Extensions = uc.Script;
-       var Fc = new Map([
-         [99, "lib.esnext.full.d.ts"],
-         [11, "lib.es2024.full.d.ts"],
-         [10, "lib.es2023.full.d.ts"],
-         [9, "lib.es2022.full.d.ts"],
-         [8, "lib.es2021.full.d.ts"],
-         [7, "lib.es2020.full.d.ts"],
-         [6, "lib.es2019.full.d.ts"],
-         [5, "lib.es2018.full.d.ts"],
-         [4, "lib.es2017.full.d.ts"],
-         [3, "lib.es2016.full.d.ts"],
-         [2, "lib.es6.d.ts"]
-       ]);
+     }
```

#### 375. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10287-L10303` → after: `L8490-L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8490-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8490-L8501) · [Before (L10287-L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10287-L10303)

```diff
-       function Yc(DD) {
-         const zD = EX(DD);
-         switch (zD) {
-           case 99:
-           case 11:
-           case 10:
-           case 9:
-           case 8:
-           case 7:
-           case 6:
-           case 5:
-           case 4:
-           case 3:
-           case 2:
-             return Fc.get(zD);
-           default:
- ... (1 more removed lines; see GitHub link above)
+     function hc(pp, ip) {
+       let cp = pp.observer.selectionRange;
+       if (!cp.focusNode) return null;
+       let Op = Li(cp.focusNode, cp.focusOffset),
+         op = Yi(cp.focusNode, cp.focusOffset),
+         Ip = Op || op;
+       if (op && Op && op.node != Op.node) {
+         let ip = Uc.get(op.node);
+         if (!ip || ip.isText() && ip.text != op.node.nodeValue) Ip = op;
+         else if (pp.docView.lastCompositionAfterCursor) {
+           let pp = Uc.get(Op.node);
+           !pp || pp.isText() && pp.text != Op.node.nodeValue || (Ip = op)
```

#### 376. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10306-L10308` → after: `L8504-L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8504-L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8504-L8509) · [Before (L10306-L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10306-L10308)

```diff
- 
-       function Hc(DD) {
-         return DD.start + DD.length
+       if (pp.docView.lastCompositionAfterCursor = Ip != Op, !Ip) return null;
+       let Sp = ip - Ip.offset;
+       return {
+         from: Sp,
+         to: Sp + Ip.node.nodeValue.length,
+         node: Ip.node
```

#### 377. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10310-L10312` → after: `L8511-L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8511-L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8511-L8514) · [Before (L10310-L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10310-L10312)

```diff
- 
-       function qc(DD) {
-         return 0 === DD.length
+     }
+     let ac = class {
+       constructor() {
+         this.changes = []
```

#### 378. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10314-L10316` → after: `L8516-L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8516-L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8516-L8517) · [Before (L10314-L10316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10314-L10316)

```diff
- 
-       function Dg(DD, zD) {
-         return zD >= DD.start && zD < Hc(DD)
+       compareRange(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 379. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10318-L10320` → after: `L8519-L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8519-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8519-L8520) · [Before (L10318-L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10318-L10320)

```diff
- 
-       function zg(DD, zD) {
-         return zD >= DD.pos && zD <= DD.end
+       comparePoint(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 380. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10322-L10324` → after: `L8522-L8523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8522-L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8522-L8523) · [Before (L10322-L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10322-L10324)

```diff
- 
-       function wg(DD, zD) {
-         return zD.start >= DD.start && Hc(zD) <= Hc(DD)
+       boundChange(pp) {
+         Tp(pp, pp, this.changes)
```

#### 381. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10326-L10328` → after: `L8525-L8528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8525-L8528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8525-L8528) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10326-L10328)

```diff
- 
-       function pg(DD, zD) {
-         return zD.pos >= DD.start && zD.end <= Hc(DD)
+     };
+     class nc {
+       constructor() {
+         this.changes = []
```

#### 382. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10330-L10332` → after: `L8530-L8531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8530-L8531) · [Before (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10330-L10332)

```diff
- 
-       function sg(DD, zD) {
-         return zD.start >= DD.pos && Hc(zD) <= DD.end
+       compareRange(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 383. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10334-L10336` → after: `L8533-L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8533-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8533-L8535) · [Before (L10334-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10334-L10336)

```diff
- 
-       function Kg(DD, zD) {
-         return void 0 !== rg(DD, zD)
+       comparePoint() {}
+       boundChange(pp) {
+         Tp(pp, pp, this.changes)
```

#### 384. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10338-L10341` → after: `L8537-L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8537-L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8537-L8540) · [Before (L10338-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10338-L10341)

```diff
- 
-       function rg(DD, zD) {
-         const wD = Ug(DD, zD);
-         return wD && 0 === wD.length ? void 0 : wD
+     }
+     class Fc extends Ep {
+       constructor(pp) {
+         super(), this.height = pp
```

#### 385. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10343-L10345` → after: `L8542-L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8542-L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8542-L8544) · [Before (L10343-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10343-L10345)

```diff
- 
-       function Lg(DD, zD) {
-         return gg(DD.start, DD.length, zD.start, zD.length)
+       toDOM() {
+         let pp = document.createElement("div");
+         return pp.className = "cm-gap", this.updateDOM(pp), pp
```

#### 386. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10347-L10349` → after: `L8546-L8547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8546-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8546-L8547) · [Before (L10347-L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10347-L10349)

```diff
- 
-       function cg(DD, zD, wD) {
-         return gg(DD.start, DD.length, zD, wD)
+       eq(pp) {
+         return pp.height == this.height
```

#### 387. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10351-L10353` → after: `L8549-L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8549-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8549-L8550) · [Before (L10351-L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10351-L10353)

```diff
- 
-       function gg(DD, zD, wD, pD) {
-         return wD <= DD + zD && wD + pD >= DD
+       updateDOM(pp) {
+         return pp.style.height = this.height + "px", !0
```

#### 388. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10355-L10357` → after: `L8552-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8552-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8552-L8553) · [Before (L10355-L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10355-L10357)

```diff
- 
-       function Rg(DD, zD) {
-         return zD <= Hc(DD) && zD >= DD.start
+       get editable() {
+         return !0
```

#### 389. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10359-L10361` → after: `L8555-L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8555-L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8555-L8556) · [Before (L10359-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10359-L10361)

```diff
- 
-       function Ag(DD, zD) {
-         return cg(zD, DD.pos, DD.end - DD.pos)
+       get estimatedHeight() {
+         return this.height
```

#### 390. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10363-L10367` → after: `L8558-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8558-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8558-L8559) · [Before (L10363-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10363-L10367)

```diff
- 
-       function Ug(DD, zD) {
-         const wD = Math.max(DD.start, zD.start),
-           pD = Math.min(Hc(DD), Hc(zD));
-         return wD <= pD ? Bg(wD, pD) : void 0
+       ignoreEvent() {
+         return !1
```

#### 391. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10370-L10378` → after: `L8563-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8563-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8563-L8571) · [Before (L10370-L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10370-L10378)

```diff
-       function fg(DD) {
-         DD = DD.filter((DD => DD.length > 0)).sort(((DD, zD) => DD.start !== zD.start ? DD.start - zD.start : DD.length - zD.length));
-         const zD = [];
-         let wD = 0;
-         for (; wD < DD.length;) {
-           let pD = DD[wD],
-             sD = wD + 1;
-           for (; sD < DD.length && Lg(pD, DD[sD]);) {
-             pD = Bg(Math.min(pD.start, DD[sD].start), Math.max(Hc(pD), Hc(DD[sD]))), sD++
+     function gc(pp, ip, cp) {
+       let Op = pp.lineBlockAt(ip);
+       if (Array.isArray(Op.type)) {
+         let pp;
+         for (let op of Op.type) {
+           if (op.from > ip) break;
+           if (!(op.to < ip)) {
+             if (op.from < ip && op.to > ip) return op;
+             pp && (op.type != Xp.Text || pp.type == op.type && !(cp < 0 ? op.from < ip : op.to > ip)) || (pp = op)
```

#### 392. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10382` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8574) · [Before (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10382)

```diff
-         return zD
+         return pp || Op
```

#### 393. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10385-L10390` → after: `L8579-L8588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8579-L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8579-L8588) · [Before (L10385-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10385-L10390)

```diff
-       function Ig(DD, zD) {
-         if (DD < 0) throw new Error("start < 0");
-         if (zD < 0) throw new Error("length < 0");
-         return {
-           start: DD,
-           length: zD
+     function Gc(pp, ip, cp, Op) {
+       let op = pp.state.doc.lineAt(ip.head),
+         Ip = pp.bidiSpans(op),
+         Sp = pp.textDirectionAt(op.from);
+       for (let xp = ip, Lp = null;;) {
+         let ip = Ci(op, Ip, Sp, xp, cp),
+           Yp = Mi;
+         if (!ip) {
+           if (op.number == (cp ? pp.state.doc.lines : 1)) return xp;
+           Yp = "\n", op = pp.state.doc.line(op.number + (cp ? 1 : -1)), Ip = pp.bidiSpans(op), ip = pp.visualLineSide(op, !cp)
```

#### 394. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10392-L10410` → after: `L8590-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8590-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8590-L8594) · [Before (L10392-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10392-L10410)

```diff
-       }
- 
-       function Bg(DD, zD) {
-         return Ig(DD, zD - DD)
-       }
- 
-       function Gg(DD) {
-         return Ig(DD.span.start, DD.newLength)
-       }
- 
-       function hg(DD) {
-         return qc(DD.span) && 0 === DD.newLength
-       }
- 
-       function ng(DD, zD) {
-         if (zD < 0) throw new Error("newLength < 0");
- ... (3 more removed lines; see GitHub link above)
+         if (Lp) {
+           if (!Lp(Yp)) return xp
+         } else {
+           if (!Op) return ip;
+           Lp = Op(Yp)
```

#### 395. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10413` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8598) · [Before (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10413)

```diff
-       var Mg = ng(Ig(0, 0), 0);
+     }
```

#### 396. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10415-L10430` → after: `L8600-L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8600-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8600-L8624) · [Before (L10415-L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10415-L10430)

```diff
-       function Og(DD) {
-         if (0 === DD.length) return Mg;
-         if (1 === DD.length) return DD[0];
-         const zD = DD[0];
-         let wD = zD.span.start,
-           pD = Hc(zD.span),
-           sD = wD + zD.newLength;
-         for (let KD = 1; KD < DD.length; KD++) {
-           const zD = DD[KD],
-             rD = wD,
-             LD = pD,
-             cD = sD,
-             gD = zD.span.start,
-             RD = Hc(zD.span),
-             AD = gD + zD.newLength;
-           wD = Math.min(rD, gD), pD = Math.max(LD, LD + (RD - cD)), sD = Math.max(AD, AD + (cD - RD))
+     function rc(pp, ip, cp) {
+       for (;;) {
+         let Op = 0;
+         for (let op of pp) op.between(ip - 1, ip + 1, ((pp, op, Ip) => {
+           if (ip > pp && ip < op) {
+             let Ip = Op || cp || (ip - pp < op - ip ? -1 : 1);
+             ip = Ip < 0 ? pp : op, Op = Ip
+           }
+         }));
+         if (!Op) return ip
+       }
+     }
+ 
+     function Zc(pp, ip) {
+       let cp = null;
+       for (let op = 0; op < ip.By.length; op++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 397. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10432-L10438` → after: `L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8626) · [Before (L10432-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10432-L10438)

```diff
-         return ng(Bg(wD, pD), sD - wD)
-       }
- 
-       function Jg(DD) {
-         if (DD && 169 === DD.kind)
-           for (let zD = DD; zD; zD = zD.parent)
-             if (bA(zD) || ZA(zD) || 265 === zD.kind) return zD
+         Sp && (cp || (cp = ip.By.slice()), cp[op] = Sp)
```

#### 398. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10441-L10446` → after: `L8631-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8631-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8631-L8637) · [Before (L10441-L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10441-L10446)

```diff
-       function Eg(DD, zD) {
-         return kb(DD) && VJ(DD, 31) && 177 === zD.kind
-       }
- 
-       function Qg(DD) {
-         return !!YA(DD) && MD(DD.elements, Xg)
+     function zc(pp, ip, cp) {
+       let op = rc(pp.state.facet(Sc).map((ip => ip(pp))), cp.from, ip.head > cp.from ? -1 : 1);
+       return op == cp.from ? cp : Op.l.cursor(op, op < cp.from ? 1 : -1)
+     }
+     class sc {
+       constructor(pp, ip) {
+         this.pos = pp, this.assoc = ip
```

#### 399. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10449-L10450` → after: `L8641-L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8641-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8641-L8674) · [Before (L10449-L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10449-L10450)

```diff
-       function Xg(DD) {
-         return !!qj(DD) || Qg(DD.name)
+     function Kc(pp, ip, cp, op) {
+       let Ip, Sp = pp.contentDOM.getBoundingClientRect(),
+         xp = Sp.top + pp.viewState.paddingTop,
+         {
+           x: Lp,
+           y: Yp
+         } = ip,
+         Dp = Yp - xp;
+       for (;;) {
+         if (Dp < 0) return new sc(0, 1);
+         if (Dp > pp.viewState.docHeight) return new sc(pp.state.doc.length, -1);
+         if (Ip = pp.elementAtHeight(Dp), null == op) break;
+         if (Ip.type == Xp.Text) {
+           if (op < 0 ? Ip.to < pp.viewport.from : Ip.from > pp.viewport.to) break;
+           let ip = pp.docView.coordsAt(op < 0 ? Ip.from : Ip.to, op > 0 ? -1 : 1);
+           if (ip && (op < 0 ? ip.top <= Dp + xp : ip.bottom >= Dp + xp)) break
+ ... (18 more added lines; see GitHub link above)
```

#### 400. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10452-L10456` → after: `L8676-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8676-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8676-L8682) · [Before (L10452-L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10452-L10456)

```diff
- 
-       function Vg(DD) {
-         let zD = DD.parent;
-         for (; Cj(zD.parent);) zD = zD.parent.parent;
-         return zD.parent
+       if (Ip.type != Xp.Text) return Dp < (Ip.top + Ip.bottom) / 2 ? new sc(Ip.from, 1) : new sc(Ip.to, -1);
+       let Ap = pp.docView.lineAt(Ip.from, 2);
+       return Ap && Ap.length == Ip.length || (Ap = pp.docView.lineAt(Ip.from, -2)), new Vc(pp, Lp, Yp, pp.textDirectionAt(Ip.from)).scanTile(Ap, Ip.from)
+     }
+     class Vc {
+       constructor(pp, ip, cp, Op) {
+         this.view = pp, this.x = ip, this.y = cp, this.baseDir = Op, this.line = null, this.spans = null
```

#### 401. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10458-L10462` → after: `L8684-L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8684-L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8684-L8685) · [Before (L10458-L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10458-L10462)

```diff
- 
-       function Pg(DD, zD) {
-         Cj(DD) && (DD = Vg(DD));
-         let wD = zD(DD);
-         return 261 === DD.kind && (DD = DD.parent), DD && 262 === DD.kind && (wD |= zD(DD), DD = DD.parent), DD && 244 === DD.kind && (wD |= zD(DD)), wD
+       bidiSpansAt(pp) {
+         return (!this.line || this.line.from > pp || this.line.to < pp) && (this.line = this.view.state.doc.lineAt(pp), this.spans = this.view.bidiSpans(this.line)), this
```

#### 402. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10464-L10466` → after: `L8687-L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8687-L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8687-L8692) · [Before (L10464-L10466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10464-L10466)

```diff
- 
-       function Cg(DD) {
-         return Pg(DD, NJ)
+       baseDirAt(pp, ip) {
+         let {
+           line: cp,
+           spans: Op
+         } = this.bidiSpansAt(pp);
+         return Op[ei.find(Op, pp - cp.from, -1, ip)].level == this.baseDir
```

#### 403. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10468-L10470` → after: `L8694-L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8694-L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8694-L8699) · [Before (L10468-L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10468-L10470)

```diff
- 
-       function xg(DD) {
-         return Pg(DD, ZJ)
+       dirAt(pp, ip) {
+         let {
+           line: cp,
+           spans: Op
+         } = this.bidiSpansAt(pp);
+         return Op[ei.find(Op, pp - cp.from, -1, ip)].dir
```

#### 404. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10472-L10474` → after: `L8701-L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8701-L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8701-L8706) · [Before (L10472-L10474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10472-L10474)

```diff
- 
-       function Tg(DD) {
-         return Pg(DD, bg)
+       bidiIn(pp, ip) {
+         let {
+           spans: cp,
+           line: Op
+         } = this.bidiSpansAt(pp);
+         return cp.length > 1 || cp.length && (cp[0].level != this.baseDir || cp[0].to + Op.from < ip)
```

#### 405. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10476-L10478` → after: `L8708-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8708-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8708-L8757) · [Before (L10476-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10476-L10478)

```diff
- 
-       function bg(DD) {
-         return DD.flags
+       scan(pp, ip) {
+         let cp, Op, op, Ip = 0,
+           Sp = pp.length - 1,
+           xp = new Set,
+           Lp = this.bidiIn(pp[0], pp[Sp]),
+           Yp = -1,
+           Dp = 1e9;
+         pp: for (; Ip < Sp;) {
+           let Ap = Sp - Ip,
+             Pp = Ip + Sp >> 1;
+           ip: if (xp.has(Pp)) {
+             let pp = Ip + Math.floor(Math.random() * Ap);
+             for (let ip = 0; ip < Ap; ip++) {
+               if (!xp.has(pp)) {
+                 Pp = pp;
+                 break ip
+ ... (34 more added lines; see GitHub link above)
```

#### 406. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10480-L10501` → after: `L8759-L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8759-L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8759-L8810) · [Before (L10480-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10480-L10501)

```diff
-       var jg = ["cs", "de", "es", "fr", "it", "ja", "ko", "pl", "pt-br", "ru", "tr", "zh-cn", "zh-tw"];
- 
-       function dg(DD, zD, wD) {
-         const pD = DD.toLowerCase(),
-           sD = /^([a-z]+)(?:[_-]([a-z]+))?$/.exec(pD);
-         if (!sD) return void(wD && wD.push(zX(TL.Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1, "en", "ja-jp")));
-         const KD = sD[1],
-           rD = sD[2];
- 
-         function LD(DD, wD, pD) {
-           let sD = zL(ur(KL(zD.getExecutingFilePath())), DD);
-           if (wD && (sD = sD + "-" + wD), sD = zD.resolvePath(zL(sD, "diagnosticMessages.generated.json")), !zD.fileExists(sD)) return !1;
-           let KD = "";
-           try {
-             KD = zD.readFile(sD)
-           } catch {
- ... (6 more removed lines; see GitHub link above)
+       scanText(pp, ip) {
+         let cp = [];
+         for (let Ip = 0; Ip < pp.length; Ip = (0, Op.S)(pp.text, Ip)) cp.push(ip + Ip);
+         cp.push(ip + pp.length);
+         let op = this.scan(cp, (Op => {
+           let op = cp[Op] - ip,
+             Ip = cp[Op + 1] - ip;
+           return Ii(pp.dom, op, Ip).getClientRects()
+         }));
+         return op.after ? new sc(cp[op.i + 1], -1) : new sc(cp[op.i], 1)
+       }
+       scanTile(pp, ip) {
+         if (!pp.length) return new sc(ip, 1);
+         if (1 == pp.children.length) {
+           let cp = pp.children[0];
+           if (cp.isText()) return this.scanText(cp, ip);
+ ... (36 more added lines; see GitHub link above)
```

#### 407. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10503` → after: `L8812-L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8812-L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8812-L8813) · [Before (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10503)

```diff
-           return !0
+           let Sp = Uc.get(Ip);
+           (op && Sp ? op.breakAfter : (op ? op.breakAfter : Gp(Op)) || Gp(Ip) && ("BR" != Op.nodeName || (null === op || void 0 === op ? void 0 : op.isWidget())) && this.text.length > pp) && !OO(Ip, ip) && this.lineBreak(), Op = Ip
```

#### 408. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10505-L10511` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8815) · [Before (L10505-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10505-L10511)

```diff
-         XD(jg, pD) && !LD(KD, rD, wD) && LD(KD, void 0, wD), Nw(DD)
-       }
- 
-       function Sg(DD, zD) {
-         if (DD)
-           for (; void 0 !== DD.original;) DD = DD.original;
-         return DD && zD ? zD(DD) ? DD : void 0 : DD
+         return this.findPointBefore(cp, ip), this
```

#### 409. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10513-L10519` → after: `L8817-L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8817-L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8817-L8826) · [Before (L10513-L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10513-L10519)

```diff
- 
-       function ig(DD, zD) {
-         for (; DD;) {
-           const wD = zD(DD);
-           if ("quit" === wD) return;
-           if (wD) return DD;
-           DD = DD.parent
+       readTextNode(pp) {
+         let ip = pp.nodeValue;
+         for (let cp of this.points) cp.node == pp && (cp.pos = this.text.length + Math.min(cp.offset, ip.length));
+         for (let cp = 0, Op = this.lineSeparator ? null : /\r\n?|\n/g;;) {
+           let op, Ip = -1,
+             Sp = 1;
+           if (this.lineSeparator ? (Ip = ip.indexOf(this.lineSeparator, cp), Sp = this.lineSeparator.length) : (op = Op.exec(ip)) && (Ip = op.index, Sp = op[0].length), this.append(ip.slice(cp, Ip < 0 ? ip.length : Ip)), Ip < 0) break;
+           if (this.lineBreak(), Sp > 1)
+             for (let ip of this.points) ip.node == pp && ip.pos > this.text.length && (ip.pos -= Sp - 1);
+           cp = Ip + Sp
```

#### 410. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10522-L10524` → after: `L8829-L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8829-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8829-L8835) · [Before (L10522-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10522-L10524)

```diff
- 
-       function lg(DD) {
-         return 0 === (16 & DD.flags)
+       readNode(pp) {
+         let ip = Uc.get(pp),
+           cp = ip && ip.overrideDOMText;
+         if (null != cp) {
+           this.findPointInside(pp, cp.length);
+           for (let pp = cp.iter(); !pp.next().done;) pp.lineBreak ? this.lineBreak() : this.append(pp.value)
+         } else 3 == pp.nodeType ? this.readTextNode(pp) : "BR" == pp.nodeName ? pp.nextSibling && this.lineBreak() : 1 == pp.nodeType && this.readRange(pp.firstChild, null)
```

#### 411. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10526-L10532` → after: `L8837-L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8837-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8837-L8838) · [Before (L10526-L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10526-L10532)

```diff
- 
-       function Wg(DD, zD) {
-         if (void 0 === DD || lg(DD)) return DD;
-         for (DD = DD.original; DD;) {
-           if (lg(DD)) return !zD || zD(DD) ? DD : void 0;
-           DD = DD.original
-         }
+       findPointBefore(pp, ip) {
+         for (let cp of this.points) cp.node == pp && pp.childNodes[cp.offset] == ip && (cp.pos = this.text.length)
```

#### 412. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10534-L10536` → after: `L8840-L8841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8840-L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8840-L8841) · [Before (L10534-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10534-L10536)

```diff
- 
-       function Ng(DD) {
-         return DD.length >= 2 && 95 === DD.charCodeAt(0) && 95 === DD.charCodeAt(1) ? "_" + DD : DD
+       findPointInside(pp, ip) {
+         for (let cp of this.points)(3 == pp.nodeType ? cp.node == pp : pp.contains(cp.node)) && (cp.pos = this.text.length + (cO(pp, cp.node, cp.offset) ? ip : 0))
```

#### 413. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10539-L10541` → after: `L8845-L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8845-L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8845-L8849) · [Before (L10539-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10539-L10541)

```diff
-       function Zg(DD) {
-         const zD = DD;
-         return zD.length >= 3 && 95 === zD.charCodeAt(0) && 95 === zD.charCodeAt(1) && 95 === zD.charCodeAt(2) ? zD.substr(1) : zD
+     function cO(pp, ip, cp) {
+       for (;;) {
+         if (!ip || cp < Zp(ip)) return !1;
+         if (ip == pp) return !0;
+         cp = gp(ip) + 1, ip = ip.parentNode
```

#### 414. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10544-L10545` → after: `L8853-L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8853-L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8853-L8858) · [Before (L10544-L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10544-L10545)

```diff
-       function yg(DD) {
-         return Zg(DD.escapedText)
+     function OO(pp, ip) {
+       let cp;
+       for (; pp != ip && pp; pp = pp.nextSibling) {
+         let ip = Uc.get(pp);
+         if (!(null === ip || void 0 === ip ? void 0 : ip.isWidget())) return !1;
+         ip && (cp || (cp = [])).push(ip)
```

#### 415. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10547-L10550` → after: `L8860-L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8860-L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8860-L8918) · [Before (L10547-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10547-L10550)

```diff
- 
-       function kg(DD) {
-         const zD = YL(DD.escapedText);
-         return zD ? rw(zD, nM) : void 0
+       if (cp)
+         for (let Op of cp) {
+           let pp = Op.overrideDOMText;
+           if (null === pp || void 0 === pp ? void 0 : pp.length) return !1
+         }
+       return !0
+     }
+     class oO {
+       constructor(pp, ip) {
+         this.node = pp, this.offset = ip, this.pos = -1
+       }
+     }
+     class IO {
+       constructor(pp, ip, cp, op) {
+         this.typeOver = op, this.bounds = null, this.text = "", this.domChanged = ip > -1;
+         let {
+ ... (43 more added lines; see GitHub link above)
```

#### 416. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10553-L10554` → after: `L8922-L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8922-L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L8922-L9122) · [Before (L10553-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10553-L10554)

```diff
-       function mg(DD) {
-         return DD.valueDeclaration && JA(DD.valueDeclaration) ? yg(DD.valueDeclaration.name) : Zg(DD.escapedName)
+     function SO(pp, ip, cp, Op) {
+       if (pp.isComposite()) {
+         let op = -1,
+           Ip = -1,
+           Sp = -1,
+           xp = -1;
+         for (let Lp = 0, Yp = Op, Dp = Op; Lp < pp.children.length; Lp++) {
+           let Op = pp.children[Lp],
+             Ap = Yp + Op.length;
+           if (Yp < ip && Ap > cp) return SO(Op, ip, cp, Yp);
+           if (Ap >= ip && -1 == op && (op = Lp, Ip = Yp), Yp > cp && Op.dom.parentNode == pp.dom) {
+             Sp = Lp, xp = Dp;
+             break
+           }
+           Dp = Ap, Yp = Ap + Op.breakAfter
+         }
+ ... (185 more added lines; see GitHub link above)
```

#### 417. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10556-L10558` → after: `L9124-L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9124-L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9124-L9125) · [Before (L10556-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10556-L10558)

```diff
- 
-       function eg(DD) {
-         const zD = DD.parent.parent;
+       runHandlers(pp, ip) {
+         let cp = this.handlers[pp];
```

#### 418. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10560-L10578` → after: `L9127-L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9127-L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9127-L9133) · [Before (L10560-L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10560-L10578)

```diff
-           if (yU(zD)) return og(zD);
-           switch (zD.kind) {
-             case 244:
-               if (zD.declarationList && zD.declarationList.declarations[0]) return og(zD.declarationList.declarations[0]);
-               break;
-             case 245:
-               let DD = zD.expression;
-               switch (227 === DD.kind && 64 === DD.operatorToken.kind && (DD = DD.left), DD.kind) {
-                 case 212:
-                   return DD.name;
-                 case 213:
-                   const zD = DD.argumentExpression;
-                   if (Eb(zD)) return zD
-               }
-               break;
-             case 218:
- ... (3 more removed lines; see GitHub link above)
+           for (let pp of cp.observers) pp(this.view, ip);
+           for (let pp of cp.handlers) {
+             if (ip.defaultPrevented) break;
+             if (pp(this.view, ip)) {
+               ip.preventDefault();
+               break
+             }
```

#### 419. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10582-L10585` → after: `L9137-L9149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9137-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9137-L9149) · [Before (L10582-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10582-L10585)

```diff
- 
-       function og(DD) {
-         const zD = Fg(DD);
-         return zD && Eb(zD) ? zD : void 0
+       ensureHandlers(pp) {
+         let ip = WO(pp),
+           cp = this.handlers,
+           Op = this.view.contentDOM;
+         for (let op in ip)
+           if ("scroll" != op) {
+             let pp = !ip[op].handlers.length,
+               Ip = cp[op];
+             Ip && pp != !Ip.handlers.length && (Op.removeEventListener(op, this.handleEvent), Ip = null), Ip || Op.addEventListener(op, this.handleEvent, {
+               passive: pp
+             })
+           } for (let op in cp) "scroll" == op || ip[op] || Op.removeEventListener(op, this.handleEvent);
+         this.handlers = ip
```

#### 420. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10587-L10589` → after: `L9151-L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9151-L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9151-L9155) · [Before (L10587-L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10587-L10589)

```diff
- 
-       function ag(DD, zD) {
-         return !(!vg(DD) || !Eb(DD.name) || yg(DD.name) !== yg(zD)) || !(!Ad(DD) || !vD(DD.declarationList.declarations, (DD => ag(DD, zD))))
+       keydown(pp) {
+         if (this.lastKeyCode = pp.keyCode, this.lastKeyTime = Date.now(), 9 == pp.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
+         if (this.tabFocusMode > 0 && 27 != pp.keyCode && wO.indexOf(pp.keyCode) < 0 && (this.tabFocusMode = -1), kp.android && kp.chrome && !pp.synthetic && (13 == pp.keyCode || 8 == pp.keyCode)) return this.view.observer.delayAndroidKey(pp.key, pp.keyCode), !0;
+         let ip;
+         return !kp.ios || pp.synthetic || pp.altKey || pp.metaKey || pp.shiftKey || !((ip = yO.find((ip => ip.keyCode == pp.keyCode))) && !pp.ctrlKey || UO.indexOf(pp.key) > -1 && pp.ctrlKey) ? (229 != pp.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ip  … [truncated]
```

#### 421. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10591-L10593` → after: `L9157-L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9157-L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9157-L9159) · [Before (L10591-L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10591-L10593)

```diff
- 
-       function ug(DD) {
-         return DD.name || eg(DD)
+       flushIOSKey(pp) {
+         let ip = this.pendingIOSKey;
+         return !!ip && (!("Enter" == ip.key && pp && pp.from < pp.to && /^\S+$/.test(pp.insert.toString())) && (this.pendingIOSKey = void 0, Si(this.view.contentDOM, ip.key, ip.keyCode, ip instanceof KeyboardEvent ? ip : void 0)))
```

#### 422. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10595-L10597` → after: `L9161-L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9161-L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9161-L9162) · [Before (L10595-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10595-L10597)

```diff
- 
-       function vg(DD) {
-         return !!DD.name
+       ignoreDuringComposition(pp) {
+         return !(!/^key/.test(pp.type) || pp.synthetic) && (this.composing > 0 || !!(kp.safari && !kp.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
```

#### 423. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10599-L10643` → after: `L9164-L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9164-L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9164-L9165) · [Before (L10599-L10643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10599-L10643)

```diff
- 
-       function tg(DD) {
-         switch (DD.kind) {
-           case 80:
-             return DD;
-           case 349:
-           case 342: {
-             const {
-               name: zD
-             } = DD;
-             if (167 === zD.kind) return zD.right;
-             break
-           }
-           case 214:
-           case 227: {
-             const zD = DD;
- ... (29 more removed lines; see GitHub link above)
+       startMouseSelection(pp) {
+         this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = pp
```

#### 424. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10645-L10647` → after: `L9167-L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9167-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9167-L9171) · [Before (L10645-L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10645-L10647)

```diff
- 
-       function Fg(DD) {
-         if (void 0 !== DD) return tg(DD) || (Nj(DD) || Zj(DD) || Hj(DD) ? Yg(DD) : void 0)
+       update(pp) {
+         this.view.observer.update(pp), this.mouseSelection && this.mouseSelection.update(pp), this.draggedContent && pp.docChanged && (this.draggedContent = this.draggedContent.map(pp.changes)), pp.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
+       }
+       destroy() {
+         this.mouseSelection && this.mouseSelection.destroy()
```

#### 425. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10650-L10656` → after: `L9175-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9175-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9175-L9180) · [Before (L10650-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10650-L10656)

```diff
-       function Yg(DD) {
-         if (DD.parent) {
-           if (PS(DD.parent) || Cj(DD.parent)) return DD.parent.name;
-           if (uj(DD.parent) && DD === DD.parent.right) {
-             if (Eb(DD.parent.left)) return DD.parent.left;
-             if (VQ(DD.parent.left)) return Yh(DD.parent.left)
-           } else if (Td(DD.parent) && Eb(DD.parent.name)) return DD.parent.name
+     function PO(pp, ip) {
+       return (cp, Op) => {
+         try {
+           return ip.call(pp, Op, cp)
+         } catch (op) {
+           Zi(cp.state, op)
```

#### 426. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10660-L10662` → after: `L9185-L9186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9185-L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9185-L9186) · [Before (L10660-L10662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10660-L10662)

```diff
-       function Hg(DD) {
-         if (SJ(DD)) return CD(DD.modifiers, mb)
-       }
+     function WO(pp) {
+       let ip = Object.create(null);
```

#### 427. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10665` → after: `L9189-L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9189-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9189-L9192) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10665)

```diff
-         if (VJ(DD, 98303)) return CD(DD.modifiers, PA)
+         return ip[pp] || (ip[pp] = {
+           observers: [],
+           handlers: []
+         })
```

#### 428. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10667-L10677` → after: `L9194-L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9194-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9194-L9350) · [Before (L10667-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10667-L10677)

```diff
- 
-       function DR(DD, zD) {
-         if (DD.name) {
-           if (Eb(DD.name)) {
-             const wD = DD.name.escapedText;
-             return TR(DD.parent, zD).filter((DD => Ai(DD) && Eb(DD.name) && DD.name.escapedText === wD))
-           } {
-             const wD = DD.parent.parameters.indexOf(DD);
-             np.assert(wD > -1, "Parameters should always be in their parents' parameter list");
-             const pD = TR(DD.parent, zD).filter(Ai);
-             if (wD < pD.length) return [pD[wD]]
+       for (let Op of pp) {
+         let pp = Op.spec,
+           ip = pp && pp.plugin.domEventHandlers,
+           op = pp && pp.plugin.domEventObservers;
+         if (ip)
+           for (let Ip in ip) {
+             let pp = ip[Ip];
+             pp && cp(Ip).handlers.push(PO(Op.value, pp))
+           }
+         if (op)
+           for (let Ip in op) {
+             let pp = op[Ip];
+             pp && cp(Ip).observers.push(PO(Op.value, pp))
+           }
+       }
+       for (let Op in HO) cp(Op).handlers.push(HO[Op]);
+ ... (141 more added lines; see GitHub link above)
```

#### 429. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10682-L10684` → after: `L9659-L9665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9659-L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9659-L9665) · [Before (L10682-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10682-L10684)

```diff
- 
-       function zR(DD) {
-         return DR(DD, !1)
+       let op;
+       if (kp.chrome && kp.android && (op = yO.find((pp => pp.inputType == ip.inputType))) && (pp.observer.delayAndroidKey(op.key, op.keyCode), "Backspace" == op.key || "Delete" == op.key)) {
+         let ip = (null === (Op = window.visualViewport) || void 0 === Op ? void 0 : Op.height) || 0;
+         setTimeout((() => {
+           var cp;
+           ((null === (cp = window.visualViewport) || void 0 === cp ? void 0 : cp.height) || 0) > ip + 10 && pp.hasFocus && (pp.contentDOM.blur(), pp.focus())
+         }), 100)
```

#### 430. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10687-L10688` → after: `L9673-L9678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9673-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9673-L9678) · [Before (L10687-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10687-L10688)

```diff
-       function wR(DD) {
-         return DR(DD, !0)
+     function fO() {
+       TO = !1
+     }
+     class bO {
+       constructor(pp) {
+         this.lineWrapping = pp, this.doc = Op.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
```

#### 431. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10690-L10693` → after: `L9680-L9682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9680-L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9680-L9682) · [Before (L10690-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10690-L10693)

```diff
- 
-       function pR(DD, zD) {
-         const wD = DD.name.escapedText;
-         return TR(DD.parent, zD).filter((DD => Bi(DD) && DD.typeParameters.some((DD => DD.name.escapedText === wD))))
+       heightForGap(pp, ip) {
+         let cp = this.doc.lineAt(ip).number - this.doc.lineAt(pp).number + 1;
+         return this.lineWrapping && (cp += Math.max(0, Math.ceil((ip - pp - cp * this.lineLength * .5) / this.lineLength))), this.lineHeight * cp
```

#### 432. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10695-L10697` → after: `L9684-L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9684-L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9684-L9686) · [Before (L10695-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10695-L10697)

```diff
- 
-       function sR(DD) {
-         return pR(DD, !1)
+       heightForLine(pp) {
+         if (!this.lineWrapping) return this.lineHeight;
+         return (1 + Math.max(0, Math.ceil((pp - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
```

#### 433. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10699-L10701` → after: `L9688-L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9688-L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9688-L9689) · [Before (L10699-L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10699-L10701)

```diff
- 
-       function KR(DD) {
-         return pR(DD, !0)
+       setDoc(pp) {
+         return this.doc = pp, this
```

#### 434. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10703-L10705` → after: `L9691-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9691-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9691-L9692) · [Before (L10703-L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10703-L10705)

```diff
- 
-       function rR(DD) {
-         return !!jR(DD, Ai)
+       mustRefreshForWrapping(pp) {
+         return NO.indexOf(pp) > -1 != this.lineWrapping
```

#### 435. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10707-L10709` → after: `L9694-L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9694-L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9694-L9700) · [Before (L10707-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10707-L10709)

```diff
- 
-       function LR(DD) {
-         return jR(DD, YS)
+       mustRefreshForHeights(pp) {
+         let ip = !1;
+         for (let cp = 0; cp < pp.length; cp++) {
+           let Op = pp[cp];
+           Op < 0 ? cp++ : this.heightSamples[Math.floor(10 * Op)] || (ip = !0, this.heightSamples[Math.floor(10 * Op)] = !0)
+         }
+         return ip
```

#### 436. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10711-L10713` → after: `L9702-L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9702-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9702-L9712) · [Before (L10711-L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10711-L10713)

```diff
- 
-       function cR(DD) {
-         return dR(DD, Oi)
+       refresh(pp, ip, cp, Op, op, Ip) {
+         let Sp = NO.indexOf(pp) > -1,
+           xp = Math.abs(ip - this.lineHeight) > .3 || this.lineWrapping != Sp || Math.abs(cp - this.charWidth) > .1;
+         if (this.lineWrapping = Sp, this.lineHeight = ip, this.charWidth = cp, this.textHeight = Op, this.lineLength = op, xp) {
+           this.heightSamples = {};
+           for (let pp = 0; pp < Ip.length; pp++) {
+             let ip = Ip[pp];
+             ip < 0 ? pp++ : this.heightSamples[Math.floor(10 * ip)] = !0
+           }
+         }
+         return xp
```

#### 437. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10715-L10717` → after: `L9714-L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9714-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9714-L9717) · [Before (L10715-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10715-L10717)

```diff
- 
-       function gR(DD) {
-         return jR(DD, qS)
+     }
+     class hO {
+       constructor(pp, ip) {
+         this.from = pp, this.heights = ip, this.index = 0
```

#### 438. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10719-L10721` → after: `L9719-L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9719-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9719-L9720) · [Before (L10719-L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10719-L10721)

```diff
- 
-       function RR(DD) {
-         return jR(DD, zi)
+       get more() {
+         return this.index < this.heights.length
```

#### 439. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10723-L10725` → after: `L9722-L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9722-L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9722-L9725) · [Before (L10723-L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10723-L10725)

```diff
- 
-       function AR(DD) {
-         return jR(DD, zi, !0)
+     }
+     class aO {
+       constructor(pp, ip, cp, Op, op) {
+         this.from = pp, this.length = ip, this.top = cp, this.height = Op, this._content = op
```

#### 440. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10727-L10729` → after: `L9727-L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9727-L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9727-L9728) · [Before (L10727-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10727-L10729)

```diff
- 
-       function UR(DD) {
-         return jR(DD, wi)
+       get type() {
+         return "number" == typeof this._content ? Xp.Text : Array.isArray(this._content) ? this._content : this._content.type
```

#### 441. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10731-L10733` → after: `L9730-L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9730-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9730-L9731) · [Before (L10731-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10731-L10733)

```diff
- 
-       function fR(DD) {
-         return jR(DD, wi, !0)
+       get to() {
+         return this.from + this.length
```

#### 442. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10735-L10737` → after: `L9733-L9734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9733-L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9733-L9734) · [Before (L10735-L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10735-L10737)

```diff
- 
-       function IR(DD) {
-         return jR(DD, si)
+       get bottom() {
+         return this.top + this.height
```

#### 443. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10739-L10741` → after: `L9736-L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9736-L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9736-L9737) · [Before (L10739-L10741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10739-L10741)

```diff
- 
-       function BR(DD) {
-         return jR(DD, si, !0)
+       get widget() {
+         return this._content instanceof Bp ? this._content.widget : null
```

#### 444. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10743-L10745` → after: `L9739-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9739-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9739-L9740) · [Before (L10743-L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10743-L10745)

```diff
- 
-       function GR(DD) {
-         return jR(DD, Ki)
+       get widgetLineBreaks() {
+         return "number" == typeof this._content ? this._content : 0
```

#### 445. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10747-L10749` → after: `L9742-L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9742-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9742-L9744) · [Before (L10747-L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10747-L10749)

```diff
- 
-       function hR(DD) {
-         return jR(DD, Ki, !0)
+       join(pp) {
+         let ip = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(pp._content) ? pp._content : [pp]);
+         return new aO(this.from, this.length + pp.length, this.top, this.height + pp.height, ip)
```

#### 446. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10751-L10753` → after: `L9746-L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9746-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9746-L9754) · [Before (L10751-L10753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10751-L10753)

```diff
- 
-       function nR(DD) {
-         return jR(DD, ri, !0)
+     }
+     var nO = function(pp) {
+       return pp[pp.ByPos = 0] = "ByPos", pp[pp.ByHeight = 1] = "ByHeight", pp[pp.ByPosNoHeight = 2] = "ByPosNoHeight", pp
+     }(nO || (nO = {}));
+     const FO = .001;
+     class gO {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.length = pp, this.height = ip, this.flags = cp
```

#### 447. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10755-L10757` → after: `L9756-L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9756-L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9756-L9757) · [Before (L10755-L10757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10755-L10757)

```diff
- 
-       function MR(DD) {
-         return jR(DD, ci)
+       get outdated() {
+         return (2 & this.flags) > 0
```

#### 448. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10759-L10761` → after: `L9759-L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9759-L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9759-L9760) · [Before (L10759-L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10759-L10761)

```diff
- 
-       function OR(DD) {
-         return jR(DD, ci, !0)
+       set outdated(pp) {
+         this.flags = (pp ? 2 : 0) | -3 & this.flags
```

#### 449. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10763-L10765` → after: `L9762-L9763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9762-L9763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9762-L9763) · [Before (L10763-L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10763-L10765)

```diff
- 
-       function JR(DD) {
-         return jR(DD, Ri)
+       setHeight(pp) {
+         this.height != pp && (Math.abs(this.height - pp) > FO && (TO = !0), this.height = pp)
```

#### 450. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10767-L10777` → after: `L9765-L9766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9765-L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9765-L9766) · [Before (L10767-L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10767-L10777)

```diff
- 
-       function ER(DD) {
-         return jR(DD, fi)
-       }
- 
-       function QR(DD) {
-         return jR(DD, Ui)
-       }
- 
-       function XR(DD) {
-         return jR(DD, Bi)
+       replace(pp, ip, cp) {
+         return gO.of(cp)
```

#### 451. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10779-L10791` → after: `L9768-L9769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9768-L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9768-L9769) · [Before (L10779-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10779-L10791)

```diff
- 
-       function VR(DD) {
-         return jR(DD, Ji)
-       }
- 
-       function PR(DD) {
-         const zD = jR(DD, Ii);
-         if (zD && zD.typeExpression && zD.typeExpression.type) return zD
-       }
- 
-       function CR(DD) {
-         let zD = jR(DD, Ii);
-         return !zD && kb(DD) && (zD = OD(zR(DD), (DD => !!DD.typeExpression))), zD && zD.typeExpression && zD.typeExpression.type
+       decomposeLeft(pp, ip) {
+         ip.push(this)
```

#### 452. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10793-L10805` → after: `L9771-L9772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9771-L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9771-L9772) · [Before (L10793-L10805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10793-L10805)

```diff
- 
-       function xR(DD) {
-         const zD = QR(DD);
-         if (zD && zD.typeExpression) return zD.typeExpression.type;
-         const wD = PR(DD);
-         if (wD && wD.typeExpression) {
-           const DD = wD.typeExpression.type;
-           if (rj(DD)) {
-             const zD = OD(DD.members, Hb);
-             return zD && zD.type
-           }
-           if (pj(DD) || oS(DD)) return DD.type
-         }
+       decomposeRight(pp, ip) {
+         ip.push(this)
```

#### 453. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10807-L10814` → after: `L9774-L9817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9774-L9817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9774-L9817) · [Before (L10807-L10814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10807-L10814)

```diff
- 
-       function TR(DD, zD) {
-         var wD;
-         if (!Qn(DD)) return gD;
-         let pD = null == (wD = DD.jsDoc) ? void 0 : wD.jsDocCache;
-         if (void 0 === pD || zD) {
-           const wD = Xn(DD, zD);
-           np.assert(wD.length < 2 || wD[0] !== wD[1]), pD = iD(wD, (DD => vS(DD) ? DD.tags : DD)), zD || (DD.jsDoc ?? (DD.jsDoc = []), DD.jsDoc.jsDocCache = pD)
+       applyChanges(pp, ip, cp, Op) {
+         let op = this,
+           Ip = cp.doc;
+         for (let Sp = Op.length - 1; Sp >= 0; Sp--) {
+           let {
+             fromA: xp,
+             toA: Lp,
+             fromB: Yp,
+             toB: Dp
+           } = Op[Sp], Ap = op.lineAt(xp, nO.ByPosNoHeight, cp.setDoc(ip), 0, 0), Pp = Ap.to >= Lp ? Ap : op.lineAt(Lp, nO.ByPosNoHeight, cp, 0, 0);
+           for (Dp += Pp.to - Lp, Lp = Pp.to; Sp > 0 && Ap.from <= Op[Sp - 1].toA;) xp = Op[Sp - 1].fromA, Yp = Op[Sp - 1].fromB, Sp--, xp < Ap.from && (Ap = op.lineAt(xp, nO.ByPosNoHeight, cp, 0, 0));
+           Yp += Ap.from - xp, xp = Ap.from;
+           let Wp = po.build(cp.setDoc(Ip), pp, Yp, Dp);
+           op = GO(op, op.replace(xp, Lp, Wp))
+         }
+         return op.updateHeight(cp, 0)
+ ... (28 more added lines; see GitHub link above)
```

#### 454. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10816-L10820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9819-L9820) · [Before (L10816-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10816-L10820)

```diff
-         return pD
-       }
- 
-       function bR(DD) {
-         return TR(DD, !1)
+         let Ip = 0;
+         return null == pp[ip - 1] ? (Ip = 1, ip--) : null == pp[ip] && (Ip = 1, cp++), new KO(gO.of(pp.slice(0, ip)), Ip, gO.of(pp.slice(cp)))
```

#### 455. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10823-L10824` → after: `L9824-L9831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9824-L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9824-L9831) · [Before (L10823-L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10823-L10824)

```diff
-       function jR(DD, zD, wD) {
-         return OD(TR(DD, wD), zD)
+     function GO(pp, ip) {
+       return pp == ip ? pp : (pp.constructor != ip.constructor && (TO = !0), ip)
+     }
+     gO.prototype.size = 1;
+     const rO = lp.replace({});
+     class ZO extends gO {
+       constructor(pp, ip, cp) {
+         super(pp, ip), this.deco = cp, this.spaceAbove = 0
```

#### 456. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10826-L10828` → after: `L9833-L9834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9833-L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9833-L9834) · [Before (L10826-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10826-L10828)

```diff
- 
-       function dR(DD, zD) {
-         return bR(DD).filter(zD)
+       mainBlock(pp, ip) {
+         return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
```

#### 457. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10830-L10832` → after: `L9836-L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9836-L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9836-L9837) · [Before (L10830-L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10830-L10832)

```diff
- 
-       function SR(DD, zD) {
-         return bR(DD).filter((DD => DD.kind === zD))
+       blockAt(pp, ip, cp, Op) {
+         return this.spaceAbove && pp < cp + this.spaceAbove ? new aO(Op, 0, cp, this.spaceAbove, rO) : this.mainBlock(cp, Op)
```

#### 458. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10834-L10841` → after: `L9839-L9841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9839-L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9839-L9841) · [Before (L10834-L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10834-L10841)

```diff
- 
-       function iR(DD) {
-         return "string" === typeof DD ? DD : null == DD ? void 0 : DD.map((DD => 322 === DD.kind ? DD.text : function(DD) {
-           const zD = 325 === DD.kind ? "link" : 326 === DD.kind ? "linkcode" : "linkplain",
-             wD = DD.name ? OB(DD.name) : "",
-             pD = DD.name && ("" === DD.text || DD.text.startsWith("://")) ? "" : " ";
-           return `{@${zD} ${wD}${pD}${DD.text}}`
-         }(DD))).join("")
+       lineAt(pp, ip, cp, Op, op) {
+         let Ip = this.mainBlock(Op, op);
+         return this.spaceAbove ? this.blockAt(0, cp, Op, op).join(Ip) : Ip
```

#### 459. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10843-L10861` → after: `L9843-L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9843-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9843-L9844) · [Before (L10843-L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10843-L10861)

```diff
- 
-       function lR(DD) {
-         if (FS(DD)) {
-           if (Li(DD.parent)) {
-             const zD = Sn(DD.parent);
-             if (zD && AD(zD.tags)) return iD(zD.tags, (DD => Bi(DD) ? DD.typeParameters : void 0))
-           }
-           return gD
-         }
-         if (Gn(DD)) return np.assert(321 === DD.parent.kind), iD(DD.parent.tags, (DD => Bi(DD) ? DD.typeParameters : void 0));
-         if (DD.typeParameters) return DD.typeParameters;
-         if (Ol(DD) && DD.typeParameters) return DD.typeParameters;
-         if (Gh(DD)) {
-           const zD = IJ(DD);
-           if (zD.length) return zD;
-           const wD = CR(DD);
- ... (3 more removed lines; see GitHub link above)
+       forEachLine(pp, ip, cp, Op, op, Ip) {
+         pp <= op + this.length && ip >= op && Ip(this.lineAt(0, nO.ByPos, cp, Op, op))
```

#### 460. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10863-L10865` → after: `L9846-L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9846-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9846-L9848) · [Before (L10863-L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10863-L10865)

```diff
- 
-       function WR(DD) {
-         return DD.constraint ? DD.constraint : Bi(DD.parent) && DD === DD.parent.typeParameters[0] ? DD.parent.constraint : void 0
+       setMeasuredHeight(pp) {
+         let ip = pp.heights[pp.index++];
+         ip < 0 ? (this.spaceAbove = -ip, ip = pp.heights[pp.index++]) : this.spaceAbove = 0, this.setHeight(ip)
```

#### 461. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10867-L10869` → after: `L9850-L9853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9850-L9853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9850-L9853) · [Before (L10867-L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10867-L10869)

```diff
- 
-       function NR(DD) {
-         return 80 === DD.kind || 81 === DD.kind
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 3 ? arguments[3] : void 0;
+         return cp && cp.from <= ip && cp.more && this.setMeasuredHeight(cp), this.outdated = !1, this
```

#### 462. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10871-L10873` → after: `L9855-L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9855-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9855-L9856) · [Before (L10871-L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10871-L10873)

```diff
- 
-       function ZR(DD) {
-         return 179 === DD.kind || 178 === DD.kind
+       toString() {
+         return `block(${this.length})`
```

#### 463. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10875-L10877` → after: `L9858-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9858-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9858-L9861) · [Before (L10875-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10875-L10877)

```diff
- 
-       function yR(DD) {
-         return bj(DD) && !!(64 & DD.flags)
+     }
+     class zO extends ZO {
+       constructor(pp, ip, cp) {
+         super(pp, ip, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = cp
```

#### 464. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10879-L10881` → after: `L9863-L9864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9863-L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9863-L9864) · [Before (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10879-L10881)

```diff
- 
-       function kR(DD) {
-         return jj(DD) && !!(64 & DD.flags)
+       mainBlock(pp, ip) {
+         return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
```

#### 465. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10883-L10885` → after: `L9866-L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9866-L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9866-L9868) · [Before (L10883-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10883-L10885)

```diff
- 
-       function mR(DD) {
-         return dj(DD) && !!(64 & DD.flags)
+       replace(pp, ip, cp) {
+         let Op = cp[0];
+         return 1 == cp.length && (Op instanceof zO || Op instanceof sO && 4 & Op.flags) && Math.abs(this.length - Op.length) < 10 ? (Op instanceof sO ? Op = new zO(Op.length, this.height, this.spaceAbove) : Op.height = this.height, this.outdated || (Op.outdated = !1), Op) : gO.of … [truncated]
```

#### 466. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10887-L10890` → after: `L9870-L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9870-L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9870-L9874) · [Before (L10887-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10887-L10890)

```diff
- 
-       function eR(DD) {
-         const zD = DD.kind;
-         return !!(64 & DD.flags) && (212 === zD || 213 === zD || 214 === zD || 236 === zD)
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0;
+         return Op && Op.from <= ip && Op.more ? this.setMeasuredHeight(Op) : (cp || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, pp.heightForLine(this.length - this.collapsed)) + this.breaks * pp.lineHeight)), this.outdated = !1, this
```

#### 467. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10892-L10894` → after: `L9876-L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9876-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9876-L9877) · [Before (L10892-L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10892-L10894)

```diff
- 
-       function oR(DD) {
-         return eR(DD) && !pd(DD) && !!DD.questionDotToken
+       toString() {
+         return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
```

#### 468. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10896-L10898` → after: `L9879-L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9879-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9879-L9882) · [Before (L10896-L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10896-L10898)

```diff
- 
-       function aR(DD) {
-         return oR(DD.parent) && DD.parent.expression === DD
+     }
+     class sO extends gO {
+       constructor(pp) {
+         super(pp, 0)
```

#### 469. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10900-L10902` → after: `L9884-L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9884-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9884-L9898) · [Before (L10900-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10900-L10902)

```diff
- 
-       function uR(DD) {
-         return !eR(DD.parent) || oR(DD.parent) || DD !== DD.parent.expression
+       heightMetrics(pp, ip) {
+         let cp, Op = pp.doc.lineAt(ip).number,
+           op = pp.doc.lineAt(ip + this.length).number,
+           Ip = op - Op + 1,
+           Sp = 0;
+         if (pp.lineWrapping) {
+           let ip = Math.min(this.height, pp.lineHeight * Ip);
+           cp = ip / Ip, this.length > Ip + 1 && (Sp = (this.height - ip) / (this.length - Ip - 1))
+         } else cp = this.height / Ip;
+         return {
+           firstLine: Op,
+           lastLine: op,
+           perLine: cp,
+           perChar: Sp
+         }
```

#### 470. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10904-L10906` → after: `L9900-L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9900-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9900-L9920) · [Before (L10904-L10906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10904-L10906)

```diff
- 
-       function vR(DD) {
-         return 227 === DD.kind && 61 === DD.operatorToken.kind
+       blockAt(pp, ip, cp, Op) {
+         let {
+           firstLine: op,
+           lastLine: Ip,
+           perLine: Sp,
+           perChar: xp
+         } = this.heightMetrics(ip, Op);
+         if (ip.lineWrapping) {
+           let op = Op + (pp < ip.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (pp - cp) / this.height)) * this.length)),
+             Ip = ip.doc.lineAt(op),
+             Lp = Sp + Ip.length * xp,
+             Yp = Math.max(cp, pp - Lp / 2);
+           return new aO(Ip.from, Ip.length, Yp, Lp, 0)
+         } {
+           let Op = Math.max(0, Math.min(Ip - op, Math.floor((pp - cp) / Sp))),
+             {
+ ... (5 more added lines; see GitHub link above)
```

#### 471. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10908-L10910` → after: `L9922-L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9922-L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9922-L9965) · [Before (L10908-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10908-L10910)

```diff
- 
-       function tR(DD) {
-         return wj(DD) && Eb(DD.typeName) && "const" === DD.typeName.escapedText && !DD.typeArguments
+       lineAt(pp, ip, cp, Op, op) {
+         if (ip == nO.ByHeight) return this.blockAt(pp, cp, Op, op);
+         if (ip == nO.ByPosNoHeight) {
+           let {
+             from: ip,
+             to: Op
+           } = cp.doc.lineAt(pp);
+           return new aO(ip, Op - ip, 0, 0, 0)
+         }
+         let {
+           firstLine: Ip,
+           perLine: Sp,
+           perChar: xp
+         } = this.heightMetrics(cp, op), Lp = cp.doc.lineAt(pp), Yp = Sp + Lp.length * xp, Dp = Lp.number - Ip, Ap = Op + Sp * Dp + xp * (Lp.from - op - Dp);
+         return new aO(Lp.from, Lp.length, Math.max(Op, Math.min(Ap, Op + this.height - Yp)), Yp, 0)
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 472. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10912-L10914` → after: `L9967-L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9967-L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9967-L9968) · [Before (L10912-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10912-L10914)

```diff
- 
-       function FR(DD) {
-         return wl(DD, 8)
+       decomposeLeft(pp, ip) {
+         ip.push(new sO(pp - 1), null)
```

#### 473. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10916-L10918` → after: `L9970-L9971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9970-L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9970-L9971) · [Before (L10916-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10916-L10918)

```diff
- 
-       function YR(DD) {
-         return pd(DD) && !!(64 & DD.flags)
+       decomposeRight(pp, ip) {
+         ip.push(null, new sO(this.length - pp - 1))
```

#### 474. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10920-L10922` → after: `L9973-L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L9973-L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L9973-L10028) · [Before (L10920-L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10920-L10922)

```diff
- 
-       function HR(DD) {
-         return 253 === DD.kind || 252 === DD.kind
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0,
+           op = ip + this.length;
+         if (Op && Op.from <= ip + this.length && Op.more) {
+           let cp = [],
+             Ip = Math.max(ip, Op.from),
+             Sp = -1;
+           for (Op.from > ip && cp.push(new sO(Op.from - ip - 1).updateHeight(pp, ip)); Ip <= op && Op.more;) {
+             let ip = pp.doc.lineAt(Ip).length;
+             cp.length && cp.push(null);
+             let op = Op.heights[Op.index++],
+               xp = 0;
+             op < 0 && (xp = -op, op = Op.heights[Op.index++]), -1 == Sp ? Sp = op : Math.abs(op - Sp) >= FO && (Sp = -2);
+             let Lp = new zO(ip, op, xp);
+ ... (40 more added lines; see GitHub link above)
```

#### 475. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10924-L10926` → after: `L10030-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10030-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10030-L10042) · [Before (L10924-L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10924-L10926)

```diff
- 
-       function qR(DD) {
-         return 281 === DD.kind || 280 === DD.kind
+       replace(pp, ip, cp) {
+         let Op = this.left.length + this.break;
+         if (ip < Op) return this.balanced(this.left.replace(pp, ip, cp), this.right);
+         if (pp > this.left.length) return this.balanced(this.left, this.right.replace(pp - Op, ip - Op, cp));
+         let op = [];
+         pp > 0 && this.decomposeLeft(pp, op);
+         let Ip = op.length;
+         for (let Sp of cp) op.push(Sp);
+         if (pp > 0 && VO(op, Ip - 1), ip < this.length) {
+           let pp = op.length;
+           this.decomposeRight(ip, op), VO(op, pp)
+         }
+         return gO.of(op)
```

#### 476. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10928-L10930` → after: `L10044-L10047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10044-L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10044-L10047) · [Before (L10928-L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10928-L10930)

```diff
- 
-       function DA(DD) {
-         return 349 === DD.kind || 342 === DD.kind
+       decomposeLeft(pp, ip) {
+         let cp = this.left.length;
+         if (pp <= cp) return this.left.decomposeLeft(pp, ip);
+         ip.push(this.left), this.break && (cp++, pp >= cp && ip.push(null)), pp > cp && this.right.decomposeLeft(pp - cp, ip)
```

#### 477. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10932-L10934` → after: `L10049-L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10049-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10049-L10053) · [Before (L10932-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10932-L10934)

```diff
- 
-       function zA(DD) {
-         return DD >= 167
+       decomposeRight(pp, ip) {
+         let cp = this.left.length,
+           Op = cp + this.break;
+         if (pp >= Op) return this.right.decomposeRight(pp - Op, ip);
+         pp < cp && this.left.decomposeRight(pp, ip), this.break && pp < Op && ip.push(null), ip.push(this.right)
```

#### 478. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10936-L10938` → after: `L10055-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10055-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10055-L10056) · [Before (L10936-L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10936-L10938)

```diff
- 
-       function wA(DD) {
-         return DD >= 0 && DD <= 166
+       balanced(pp, ip) {
+         return pp.size > 2 * ip.size || ip.size > 2 * pp.size ? gO.of(this.break ? [pp, null, ip] : [pp, ip]) : (this.left = GO(this.left, pp), this.right = GO(this.right, ip), this.setHeight(pp.height + ip.height), this.outdated = pp.outdated || ip.outdated, this.size = pp.size  … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10940-L10942` → after: `L10058-L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10058-L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10058-L10202) · [Before (L10940-L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10940-L10942)

```diff
- 
-       function pA(DD) {
-         return wA(DD.kind)
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0,
+           {
+             left: op,
+             right: Ip
+           } = this,
+           Sp = ip + op.length + this.break,
+           xp = null;
+         return Op && Op.from <= ip + op.length && Op.more ? xp = op = op.updateHeight(pp, ip, cp, Op) : op.updateHeight(pp, ip, cp), Op && Op.from <= Sp + Ip.length && Op.more ? xp = Ip = Ip.updateHeight(pp, Sp, cp, Op) : Ip.updateHeight(pp, Sp, cp), xp ? this.balanced(op, Ip) :  … [truncated]
+       }
+       toString() {
+         return this.left + (this.break ? " " : "-") + this.right
+       }
+     }
+ ... (129 more added lines; see GitHub link above)
```

#### 480. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10944-L10946` → after: `L10204-L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10204-L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10204-L10259) · [Before (L10944-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10944-L10946)

```diff
- 
-       function sA(DD) {
-         return jz(DD, "pos") && jz(DD, "end")
+       draw(pp, ip) {
+         return lp.replace({
+           widget: new Io(this.displaySize * (ip ? pp.scaleY : pp.scaleX), ip)
+         }).range(this.from, this.to)
+       }
+     }
+     class Io extends Ep {
+       constructor(pp, ip) {
+         super(), this.size = pp, this.vertical = ip
+       }
+       eq(pp) {
+         return pp.size == this.size && pp.vertical == this.vertical
+       }
+       toDOM() {
+         let pp = document.createElement("div");
+         return this.vertical ? pp.style.height = this.size + "px" : (pp.style.width = this.size + "px", pp.style.height = "2px", pp.style.display = "inline-block"), pp
+ ... (40 more added lines; see GitHub link above)
```

#### 481. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10948-L10950` → after: `L10261-L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10261-L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10261-L10263) · [Before (L10948-L10950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10948-L10950)

```diff
- 
-       function KA(DD) {
-         return 9 <= DD && DD <= 15
+       updateScaler() {
+         let pp = this.scaler;
+         return this.scaler = this.heightMap.height <= 7e6 ? Do : new Po(this.heightOracle, this.heightMap, this.viewports), pp.eq(this.scaler) ? 0 : 2
```

#### 482. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10952-L10954` → after: `L10265-L10268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10265-L10268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10265-L10268) · [Before (L10952-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10952-L10954)

```diff
- 
-       function rA(DD) {
-         return KA(DD.kind)
+       updateViewportLines() {
+         this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (pp => {
+           this.viewportLines.push(Wo(pp, this.scaler))
+         }))
```

#### 483. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10956-L10964` → after: `L10270-L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10270-L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10270-L10339) · [Before (L10956-L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10956-L10964)

```diff
- 
-       function LA(DD) {
-         switch (DD.kind) {
-           case 211:
-           case 210:
-           case 14:
-           case 219:
-           case 232:
-             return !0
+       update(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         this.state = pp.state;
+         let cp = this.stateDeco;
+         this.stateDeco = Ao(this.state);
+         let op = pp.changedRanges,
+           Ip = Pc.extendWithRanges(op, function(pp, ip, cp) {
+             let op = new io;
+             return Op.A.compare(pp, ip, cp, op, 0), op.changes
+           }(cp, this.stateDeco, pp ? pp.changes : Op.ChangeSet.empty(this.state.doc.length))),
+           Sp = this.heightMap.height,
+           xp = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
+         fO(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, pp.startState.doc, this.heightOracle.setDoc(this.state.doc), Ip), (this.heightMap.height != Sp || TO) && (pp.flags |= 2), xp ? (this.scrollAnchorPos = pp.changes.mapPos(xp.from, -1), this.scrollAnchorHeigh … [truncated]
+         let Lp = Ip.length ? this.mapViewport(this.viewport, pp.changes) : this.viewport;
+         (ip && (ip.range.head < Lp.from || ip.range.head > Lp.to) || !this.viewportIsAppropriate(Lp)) && (Lp = this.getViewport(0, ip));
+         let Yp = Lp.from != this.viewport.from || Lp.to != this.viewport.to;
+ ... (54 more added lines; see GitHub link above)
```

#### 484. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10966-L10974` → after: `L10341-L10342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10341-L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10341-L10342) · [Before (L10966-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10966-L10974)

```diff
-         return !1
-       }
- 
-       function cA(DD) {
-         return 15 <= DD && DD <= 18
-       }
- 
-       function gA(DD) {
-         return cA(DD.kind)
+         let dp = !this.viewportIsAppropriate(this.viewport, Dp) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
+         return dp && (2 & Yp && (Yp |= this.updateScaler()), this.viewport = this.getViewport(Dp, this.scrollTarget), Yp |= this.updateForViewport()), (2 & Yp || dp) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updat … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10976-L10979` → after: `L10344-L10345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10344-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10344-L10345) · [Before (L10976-L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10976-L10979)

```diff
- 
-       function RA(DD) {
-         const zD = DD.kind;
-         return 17 === zD || 18 === zD
+       get visibleTop() {
+         return this.scaler.fromDOM(this.pixelViewport.top)
```

#### 486. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10981-L10983` → after: `L10347-L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10347-L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10347-L10348) · [Before (L10981-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10981-L10983)

```diff
- 
-       function AA(DD) {
-         return DS(DD) || sS(DD)
+       get visibleBottom() {
+         return this.scaler.fromDOM(this.pixelViewport.bottom)
```

#### 487. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10985-L10995` → after: `L10350-L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10350-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10350-L10367) · [Before (L10985-L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10985-L10995)

```diff
- 
-       function UA(DD) {
-         switch (DD.kind) {
-           case 277:
-             return DD.isTypeOnly || 156 === DD.parent.parent.phaseModifier;
-           case 275:
-             return 156 === DD.parent.phaseModifier;
-           case 274:
-             return 156 === DD.phaseModifier;
-           case 272:
-             return DD.isTypeOnly
+       getViewport(pp, ip) {
+         let cp = .5 - Math.max(-.5, Math.min(.5, pp / 1e3 / 2)),
+           Op = this.heightMap,
+           op = this.heightOracle,
+           {
+             visibleTop: Ip,
+             visibleBottom: Sp
+           } = this,
+           xp = new xo(Op.lineAt(Ip - 1e3 * cp, nO.ByHeight, op, 0, 0).from, Op.lineAt(Sp + 1e3 * (1 - cp), nO.ByHeight, op, 0, 0).to);
+         if (ip) {
+           let {
+             head: pp
+           } = ip.range;
+           if (pp < xp.from || pp > xp.to) {
+             let cp, Ip = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
+               Sp = Op.lineAt(pp, nO.ByPos, op, 0, 0);
+ ... (2 more added lines; see GitHub link above)
```

#### 488. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10997` → after: `L10369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10369) · [Before (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10997)

```diff
-         return !1
+         return xp
```

#### 489. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10999-L11009` → after: `L10371-L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10371-L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10371-L10374) · [Before (L10999-L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L10999-L11009)

```diff
- 
-       function fA(DD) {
-         switch (DD.kind) {
-           case 282:
-             return DD.isTypeOnly || DD.parent.parent.isTypeOnly;
-           case 279:
-             return DD.isTypeOnly && !!DD.moduleSpecifier && !DD.exportClause;
-           case 281:
-             return DD.parent.isTypeOnly
-         }
-         return !1
+       mapViewport(pp, ip) {
+         let cp = ip.mapPos(pp.from, -1),
+           Op = ip.mapPos(pp.to, 1);
+         return new xo(this.heightMap.lineAt(cp, nO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Op, nO.ByPos, this.heightOracle, 0, 0).to)
```

#### 490. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11011-L11013` → after: `L10376-L10396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10376-L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10376-L10396) · [Before (L11011-L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11011-L11013)

```diff
- 
-       function IA(DD) {
-         return UA(DD) || fA(DD)
+       viewportIsAppropriate(pp) {
+         let {
+           from: ip,
+           to: cp
+         } = pp, Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (!this.inView) return !0;
+         let {
+           top: op
+         } = this.heightMap.lineAt(ip, nO.ByPos, this.heightOracle, 0, 0), {
+           bottom: Ip
+         } = this.heightMap.lineAt(cp, nO.ByPos, this.heightOracle, 0, 0), {
+           visibleTop: Sp,
+           visibleBottom: xp
+         } = this;
+         return (0 == ip || op <= Sp - Math.max(10, Math.min(-Op, 250))) && (cp == this.state.doc.length || Ip >= xp + Math.max(10, Math.min(Op, 250))) && op > Sp - 2e3 && Ip < xp + 2e3
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 491. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11015-L11017` → after: `L10398-L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10398-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10398-L10478) · [Before (L11015-L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11015-L11017)

```diff
- 
-       function BA(DD) {
-         return void 0 !== ig(DD, IA)
+       ensureLineGaps(pp, ip) {
+         let cp = this.heightOracle.lineWrapping,
+           op = cp ? 1e4 : 2e3,
+           Ip = op >> 1,
+           Sp = op << 1;
+         if (this.defaultTextDirection != Ai.LTR && !cp) return [];
+         let xp = [],
+           Lp = (op, Sp, Yp, Dp) => {
+             if (Sp - op < Ip) return;
+             let Ap = this.state.selection.main,
+               Pp = [Ap.from];
+             Ap.empty || Pp.push(Ap.to);
+             for (let pp of Pp)
+               if (pp > op && pp < Sp) return Lp(op, pp - 10, Yp, Dp), void Lp(pp + 10, Sp, Yp, Dp);
+             let Wp = function(pp, ip) {
+               for (let cp of pp)
+ ... (65 more added lines; see GitHub link above)
```

#### 492. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11019-L11021` → after: `L10480-L10482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10480-L10482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10480-L10482) · [Before (L11019-L11021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11019-L11021)

```diff
- 
-       function GA(DD) {
-         return 11 === DD.kind || cA(DD.kind)
+       gapSize(pp, ip, cp, Op) {
+         let op = Yo(Op, cp) - Yo(Op, ip);
+         return this.heightOracle.lineWrapping ? pp.height * op : Op.total * this.heightOracle.charWidth * op
```

#### 493. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11023-L11025` → after: `L10484-L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10484-L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10484-L10485) · [Before (L11023-L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11023-L11025)

```diff
- 
-       function hA(DD) {
-         return Kb(DD) || Eb(DD)
+       updateLineGaps(pp) {
+         oo.same(pp, this.lineGaps) || (this.lineGaps = pp, this.lineGapDeco = lp.set(pp.map((pp => pp.draw(this, this.heightOracle.lineWrapping)))))
```

#### 494. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11027-L11030` → after: `L10487-L10508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10487-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10487-L10508) · [Before (L11027-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11027-L11030)

```diff
- 
-       function nA(DD) {
-         var zD;
-         return Eb(DD) && void 0 !== (null == (zD = DD.emitNode) ? void 0 : zD.autoGenerate)
+       computeVisibleRanges(pp) {
+         let ip = this.stateDeco;
+         this.lineGaps.length && (ip = ip.concat(this.lineGapDeco));
+         let cp = [];
+         Op.A.spans(ip, this.viewport.from, this.viewport.to, {
+           span(pp, ip) {
+             cp.push({
+               from: pp,
+               to: ip
+             })
+           },
+           point() {}
+         }, 20);
+         let op = 0;
+         if (cp.length != this.Z2.length) op = 12;
+         else
+ ... (6 more added lines; see GitHub link above)
```

#### 495. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11032-L11035` → after: `L10510-L10511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10510-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10510-L10511) · [Before (L11032-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11032-L11035)

```diff
- 
-       function MA(DD) {
-         var zD;
-         return Qb(DD) && void 0 !== (null == (zD = DD.emitNode) ? void 0 : zD.autoGenerate)
+       lineBlockAt(pp) {
+         return pp >= this.viewport.from && pp <= this.viewport.to && this.viewportLines.find((ip => ip.from <= pp && ip.to >= pp)) || Wo(this.heightMap.lineAt(pp, nO.ByPos, this.heightOracle, 0, 0), this.scaler)
```

#### 496. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11037-L11040` → after: `L10513-L10514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10513-L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10513-L10514) · [Before (L11037-L11040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11037-L11040)

```diff
- 
-       function OA(DD) {
-         const zD = DD.emitNode.autoGenerate.flags;
-         return !!(32 & zD) && !!(16 & zD) && !!(8 & zD)
+       lineBlockAtHeight(pp) {
+         return pp >= this.viewportLines[0].top && pp <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ip => ip.top <= pp && ip.bottom >= pp)) || Wo(this.heightMap.lineAt(this.scaler.fromDOM(pp), nO.ByHeight, this.heightOracle, 0, 0), this.sc … [truncated]
```

#### 497. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11042-L11044` → after: `L10516-L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10516-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10516-L10517) · [Before (L11042-L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11042-L11044)

```diff
- 
-       function JA(DD) {
-         return (ob(DD) || eA(DD)) && Qb(DD.name)
+       getScrollOffset() {
+         return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
```

#### 498. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11046-L11048` → after: `L10519-L10521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10519-L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10519-L10521) · [Before (L11046-L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11046-L11048)

```diff
- 
-       function EA(DD) {
-         return bj(DD) && Qb(DD.name)
+       scrollAnchorAt(pp) {
+         let ip = this.lineBlockAtHeight(pp + 8);
+         return ip.from >= this.viewport.from || this.viewportLines[0].top - pp > 200 ? ip : this.viewportLines[0]
```

#### 499. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11050-L11070` → after: `L10523-L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10523-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10523-L10524) · [Before (L11050-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11050-L11070)

```diff
- 
-       function QA(DD) {
-         switch (DD) {
-           case 128:
-           case 129:
-           case 134:
-           case 87:
-           case 138:
-           case 90:
-           case 95:
-           case 103:
-           case 125:
-           case 123:
-           case 124:
-           case 148:
-           case 126:
- ... (5 more removed lines; see GitHub link above)
+       elementAtHeight(pp) {
+         return Wo(this.heightMap.blockAt(this.scaler.fromDOM(pp), this.heightOracle, 0, 0), this.scaler)
```

#### 500. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11072-L11074` → after: `L10526-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10526-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10526-L10527) · [Before (L11072-L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11072-L11074)

```diff
- 
-       function XA(DD) {
-         return !!(31 & uJ(DD))
+       get docHeight() {
+         return this.scaler.toDOM(this.heightMap.height)
```

#### 501. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11076-L11078` → after: `L10529-L10530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10529-L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10529-L10530) · [Before (L11076-L11078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11076-L11078)

```diff
- 
-       function VA(DD) {
-         return XA(DD) || 126 === DD || 164 === DD || 129 === DD
+       get contentHeight() {
+         return this.docHeight + this.paddingTop + this.paddingBottom
```

#### 502. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11080-L11082` → after: `L10532-L10535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10532-L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10532-L10535) · [Before (L11080-L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11080-L11082)

```diff
- 
-       function PA(DD) {
-         return QA(DD.kind)
+     }
+     class xo {
+       constructor(pp, ip) {
+         this.from = pp, this.to = ip
```

#### 503. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11085-L11088` → after: `L10539-L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10539-L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10539-L10646) · [Before (L11085-L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11085-L11088)

```diff
-       function CA(DD) {
-         const zD = DD.kind;
-         return 167 === zD || 80 === zD
-       }
+     function Lo(pp, ip) {
+       let {
+         total: cp,
+         By: Op
+       } = pp;
+       if (ip <= 0) return Op[0].from;
+       if (ip >= 1) return Op[Op.length - 1].to;
+       let op = Math.floor(cp * ip);
+       for (let Ip = 0;; Ip++) {
+         let {
+           from: pp,
+           to: ip
+         } = Op[Ip], cp = ip - pp;
+         if (op <= cp) return pp + op;
+         op -= cp
+       }
+ ... (92 more added lines; see GitHub link above)
```

#### 504. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11090-L11101` → after: `L10648-L10994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10648-L10994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10648-L10994) · [Before (L11090-L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11090-L11101)

```diff
-       function xA(DD) {
-         const zD = DD.kind;
-         return 80 === zD || 81 === zD || 11 === zD || 9 === zD || 168 === zD
-       }
- 
-       function TA(DD) {
-         const zD = DD.kind;
-         return 80 === zD || 207 === zD || 208 === zD
-       }
- 
-       function bA(DD) {
-         return !!DD && lA(DD.kind)
+     function eo(pp, ip, cp) {
+       return new op.b(ip, {
+         finish: ip => /&/.test(ip) ? ip.replace(/&\w*/, (ip => {
+           if ("&" == ip) return pp;
+           if (!cp || !cp[ip]) throw new RangeError(`Unsupported selector: ${ip}`);
+           return cp[ip]
+         })) : pp + " " + ip
+       })
+     }
+     const uo = eo("." + wo, {
+         "&": {
+           position: "relative !important",
+           boxSizing: "border-box",
+           "&.cm-focused": {
+             outline: "1px dotted #212121"
+           },
+ ... (331 more added lines; see GitHub link above)
```

#### 505. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11103-L11105` → after: `L10996-L10997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10996-L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10996-L10997) · [Before (L11103-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11103-L11105)

```diff
- 
-       function jA(DD) {
-         return !!DD && (lA(DD.kind) || vb(DD))
+       onScrollChanged(pp) {
+         this.view.inputState.runHandlers("scroll", pp), this.intersecting && this.view.measure()
```

#### 506. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11107-L11109` → after: `L10999-L11000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L10999-L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L10999-L11000) · [Before (L11107-L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11107-L11109)

```diff
- 
-       function dA(DD) {
-         return DD && iA(DD.kind)
+       onScroll(pp) {
+         this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(pp)
```

#### 507. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11111-L11113` → after: `L11002-L11005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11002-L11005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11002-L11005) · [Before (L11111-L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11111-L11113)

```diff
- 
-       function SA(DD) {
-         return 112 === DD.kind || 97 === DD.kind
+       mH() {
+         this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
+           this.resizeTimeout = -1, this.view.requestMeasure()
+         }), 50))
```

#### 508. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11115-L11128` → after: `L11007-L11010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11007-L11010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11007-L11010) · [Before (L11115-L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11115-L11128)

```diff
- 
-       function iA(DD) {
-         switch (DD) {
-           case 263:
-           case 175:
-           case 177:
-           case 178:
-           case 179:
-           case 219:
-           case 220:
-             return !0;
-           default:
-             return !1
-         }
+       onPrint(pp) {
+         ("change" != pp.type && pp.type || pp.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
+           this.view.viewState.printing = !1, this.view.requestMeasure()
+         }), 500))
```

#### 509. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11130-L11143` → after: `L11012-L11016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11012-L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11012-L11016) · [Before (L11130-L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11130-L11143)

```diff
- 
-       function lA(DD) {
-         switch (DD) {
-           case 174:
-           case 180:
-           case 324:
-           case 181:
-           case 182:
-           case 185:
-           case 318:
-           case 186:
-             return !0;
-           default:
-             return iA(DD)
+       updateGaps(pp) {
+         if (this.gapIntersection && (pp.length != this.gaps.length || this.gaps.some(((ip, cp) => ip != pp[cp])))) {
+           this.gapIntersection.disconnect();
+           for (let ip of pp) this.gapIntersection.observe(ip);
+           this.gaps = pp
```

#### 510. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11146-L11157` → after: `L11019-L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11019-L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11019-L11027) · [Before (L11146-L11157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11146-L11157)

```diff
- 
-       function WA(DD) {
-         return bS(DD) || Zd(DD) || Rd(DD) && bA(DD.parent)
-       }
- 
-       function NA(DD) {
-         const zD = DD.kind;
-         return 177 === zD || 173 === zD || 175 === zD || 178 === zD || 179 === zD || 182 === zD || 176 === zD || 241 === zD
-       }
- 
-       function ZA(DD) {
-         return DD && (264 === DD.kind || 232 === DD.kind)
+       onSelectionChange(pp) {
+         let ip = this.selectionChanged;
+         if (!this.readSelectionRange() || this.delayedAndroidKey) return;
+         let {
+           view: cp
+         } = this, Op = this.selectionRange;
+         if (cp.state.facet(zi) ? cp.root.activeElement != this.dom : !ap(this.dom, Op)) return;
+         let op = Op.anchorNode && cp.docView.tile.nearest(Op.anchorNode);
+         op && op.isWidget() && op.widget.ignoreEvent(pp) ? ip || (this.selectionChanged = !1) : (kp.ie && kp.ie_version <= 11 || kp.android && kp.chrome) && !cp.state.selection.main.empty && Op.focusNode && Fp(Op.focusNode, Op.focusOffset, Op.anchorNode, Op.anchorOffset) ? this.f … [truncated]
```

#### 511. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11160-L11161` → after: `L11041-L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11041-L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11041-L11061) · [Before (L11160-L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11160-L11161)

```diff
-       function yA(DD) {
-         return DD && (178 === DD.kind || 179 === DD.kind)
+           function Op(pp) {
+             pp.preventDefault(), pp.stopImmediatePropagation(), cp = pp.getTargetRanges()[0]
+           }
+           return pp.contentDOM.addEventListener("beforeinput", Op, !0), pp.dom.ownerDocument.execCommand("indent"), pp.contentDOM.removeEventListener("beforeinput", Op, !0), cp ? qo(pp, cp) : null
+         }(this.view, ip) || ip;
+         if (!cp || this.selectionRange.eq(cp)) return !1;
+         let Op = ap(this.dom, cp);
+         return Op && !this.selectionChanged && pp.inputState.lastFocusTime > Date.now() - 200 && pp.inputState.lastTouchTime < Date.now() - 300 && function(pp, ip) {
+           let cp = ip.focusNode,
+             Op = ip.focusOffset;
+           if (!cp || ip.anchorNode != cp || ip.anchorOffset != Op) return !1;
+           for (Op = Math.min(Op, Zp(cp));;)
+             if (Op) {
+               if (1 != cp.nodeType) return !1;
+               let pp = cp.childNodes[Op - 1];
+               "false" == pp.contentEditable ? Op-- : (cp = pp, Op = Zp(cp))
+ ... (5 more added lines; see GitHub link above)
```

#### 512. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11163-L11165` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11063-L11064) · [Before (L11163-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11163-L11165)

```diff
- 
-       function kA(DD) {
-         return ob(DD) && jJ(DD)
+       setSelectionRange(pp, ip) {
+         this.selectionRange.set(pp.node, pp.offset, ip.node, ip.offset), this.selectionChanged = !1
```

#### 513. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11167-L11169` → after: `L11066-L11067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11066-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11066-L11067) · [Before (L11167-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11167-L11169)

```diff
- 
-       function mA(DD) {
-         return Gh(DD) && MC(DD) ? (!uh(DD) || !AE(DD.expression)) && !th(DD, !0) : DD.parent && ZA(DD.parent) && ob(DD) && !jJ(DD)
+       clearSelectionRange() {
+         this.selectionRange.set(null, 0, null, 0)
```

#### 514. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11171-L11179` → after: `L11069-L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11069-L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11069-L11080) · [Before (L11171-L11179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11171-L11179)

```diff
- 
-       function eA(DD) {
-         switch (DD.kind) {
-           case 175:
-           case 178:
-           case 179:
-             return !0;
-           default:
-             return !1
+       listenForScroll() {
+         this.parentCheck = -1;
+         let pp = 0,
+           ip = null;
+         for (let cp = this.dom; cp;)
+           if (1 == cp.nodeType) !ip && pp < this.scrollTargets.length && this.scrollTargets[pp] == cp ? pp++ : ip || (ip = this.scrollTargets.slice(0, pp)), ip && ip.push(cp), cp = cp.assignedSlot || cp.parentNode;
+           else {
+             if (11 != cp.nodeType) break;
+             cp = cp.host
+           } if (pp < this.scrollTargets.length && !ip && (ip = this.scrollTargets.slice(0, pp)), ip) {
+           for (let pp of this.scrollTargets) pp.removeEventListener("scroll", this.onScroll);
+           for (let pp of this.scrollTargets = ip) pp.addEventListener("scroll", this.onScroll)
```

#### 515. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11182-L11209` → after: `L11083-L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11083-L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11083-L11088) · [Before (L11182-L11209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11182-L11209)

```diff
- 
-       function oA(DD) {
-         return PA(DD) || mb(DD)
-       }
- 
-       function aA(DD) {
-         const zD = DD.kind;
-         return 181 === zD || 180 === zD || 172 === zD || 174 === zD || 182 === zD || 178 === zD || 179 === zD || 355 === zD
-       }
- 
-       function uA(DD) {
-         return aA(DD) || NA(DD)
-       }
- 
-       function vA(DD) {
-         const zD = DD.kind;
- ... (12 more removed lines; see GitHub link above)
+       ignore(pp) {
+         if (!this.active) return pp();
+         try {
+           return this.stop(), pp()
+         } finally {
+           this.start(), this.clear()
```

#### 516. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11213-L11219` → after: `L11091-L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11091-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11091-L11092) · [Before (L11213-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11213-L11219)

```diff
- 
-       function YA(DD) {
-         if (DD) {
-           const zD = DD.kind;
-           return 208 === zD || 207 === zD
-         }
-         return !1
+       start() {
+         this.active || (this.observer.observe(this.dom, jo), ko && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
```

#### 517. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11221-L11224` → after: `L11094-L11095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11094-L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11094-L11095) · [Before (L11221-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11221-L11224)

```diff
- 
-       function HA(DD) {
-         const zD = DD.kind;
-         return 210 === zD || 211 === zD
+       stop() {
+         this.active && (this.active = !1, this.observer.disconnect(), ko && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
```

#### 518. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11226-L11229` → after: `L11097-L11098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11097-L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11097-L11098) · [Before (L11226-L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11226-L11229)

```diff
- 
-       function qA(DD) {
-         const zD = DD.kind;
-         return 209 === zD || 233 === zD
+       clear() {
+         this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
```

#### 519. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11231-L11237` → after: `L11100-L11109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11100-L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11100-L11109) · [Before (L11231-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11231-L11237)

```diff
- 
-       function DU(DD) {
-         switch (DD.kind) {
-           case 261:
-           case 170:
-           case 209:
-             return !0
+       delayAndroidKey(pp, ip) {
+         var cp;
+         if (!this.delayedAndroidKey) {
+           let pp = () => {
+             let pp = this.delayedAndroidKey;
+             if (pp) {
+               this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = pp.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && pp.force && Si(this.dom, pp.key, pp.keyCode)
+             }
+           };
+           this.flushingAndroidKey = this.view.win.requestAnimationFrame(pp)
```

#### 520. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11239` → after: `L11111-L11115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11111-L11115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11111-L11115) · [Before (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11239)

```diff
-         return !1
+         this.delayedAndroidKey && "Enter" != pp || (this.delayedAndroidKey = {
+           key: pp,
+           keyCode: ip,
+           force: this.lastChange < Date.now() - 50 || !!(null === (cp = this.delayedAndroidKey) || void 0 === cp ? void 0 : cp.force)
+         })
```

#### 521. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11241-L11243` → after: `L11117-L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11117-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11117-L11118) · [Before (L11241-L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11241-L11243)

```diff
- 
-       function zU(DD) {
-         return Td(DD) || kb(DD) || sU(DD) || rU(DD)
+       clearDelayedAndroidKey() {
+         this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
```

#### 522. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11245-L11247` → after: `L11120-L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11120-L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11120-L11123) · [Before (L11245-L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11245-L11247)

```diff
- 
-       function wU(DD) {
-         return pU(DD) || KU(DD)
+       flushSoon() {
+         this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame((() => {
+           this.delayedFlush = -1, this.flush()
+         })))
```

#### 523. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11249-L11256` → after: `L11125-L11126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11125-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11125-L11126) · [Before (L11249-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11249-L11256)

```diff
- 
-       function pU(DD) {
-         switch (DD.kind) {
-           case 207:
-           case 211:
-             return !0
-         }
-         return !1
+       forceFlush() {
+         this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
```

#### 524. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11258-L11267` → after: `L11128-L11130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11128-L11130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11128-L11130) · [Before (L11258-L11267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11258-L11267)

```diff
- 
-       function sU(DD) {
-         switch (DD.kind) {
-           case 209:
-           case 304:
-           case 305:
-           case 306:
-             return !0
-         }
-         return !1
+       pendingRecords() {
+         for (let pp of this.observer.takeRecords()) this.queue.push(pp);
+         return this.queue
```

#### 525. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11269-L11274` → after: `L11132-L11143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11132-L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11132-L11143) · [Before (L11269-L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11269-L11274)

```diff
- 
-       function KU(DD) {
-         switch (DD.kind) {
-           case 208:
-           case 210:
-             return !0
+       processRecords() {
+         let pp = this.pendingRecords();
+         pp.length && (this.queue = []);
+         let ip = -1,
+           cp = -1,
+           Op = !1;
+         for (let op of pp) {
+           let pp = this.readMutation(op);
+           pp && (pp.typeOver && (Op = !0), -1 == ip ? ({
+             from: ip,
+             to: cp
+           } = pp) : (ip = Math.min(pp.from, ip), cp = Math.max(pp.to, cp)))
```

#### 526. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11276-L11289` → after: `L11145-L11148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11145-L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11145-L11148) · [Before (L11276-L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11276-L11289)

```diff
-         return !1
-       }
- 
-       function rU(DD) {
-         switch (DD.kind) {
-           case 209:
-           case 233:
-           case 231:
-           case 210:
-           case 211:
-           case 80:
-           case 212:
-           case 213:
-             return !0
+         return {
+           from: ip,
+           to: cp,
+           typeOver: Op
```

#### 527. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11293-L11296` → after: `L11151-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11151-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11151-L11162) · [Before (L11293-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11293-L11296)

```diff
- 
-       function LU(DD) {
-         const zD = DD.kind;
-         return 212 === zD || 167 === zD || 206 === zD
+       readChange() {
+         let {
+           from: pp,
+           to: ip,
+           typeOver: cp
+         } = this.processRecords(), Op = this.selectionChanged && ap(this.dom, this.selectionRange);
+         if (pp < 0 && !Op) return null;
+         pp > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
+         let op = new IO(this.view, pp, ip, cp);
+         return this.view.docView.domChanged = {
+           newSel: op.newSel ? op.newSel.main : null
+         }, op
```

#### 528. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11298-L11301` → after: `L11164-L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11164-L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11164-L11190) · [Before (L11298-L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11298-L11301)

```diff
- 
-       function cU(DD) {
-         const zD = DD.kind;
-         return 212 === zD || 167 === zD
+       flush() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
+         pp && this.readSelectionRange();
+         let ip = this.readChange();
+         if (!ip) return this.view.requestMeasure(), !1;
+         let cp = this.view.state,
+           Op = xO(this.view, ip);
+         return this.view.state == cp && (ip.domChanged || ip.newSel && !DO(this.view.state.selection, ip.newSel.main)) && this.view.update([]), Op
+       }
+       readMutation(pp) {
+         let ip = this.view.docView.tile.nearest(pp.target);
+         if (!ip || ip.isWidget()) return null;
+         if (ip.markDirty("attributes" == pp.type), "childList" == pp.type) {
+           let cp = Ro(ip, pp.previousSibling || pp.target.previousSibling, -1),
+             Op = Ro(ip, pp.nextSibling || pp.target.nextSibling, 1);
+ ... (11 more added lines; see GitHub link above)
```

#### 529. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11303-L11305` → after: `L11192-L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11192-L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11192-L11193) · [Before (L11303-L11305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11303-L11305)

```diff
- 
-       function gU(DD) {
-         return RU(DD) || vP(DD)
+       setWindow(pp) {
+         pp != this.win && (this.removeWindowListeners(this.win), this.win = pp, this.addWindowListeners(this.win))
```

#### 530. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11307-L11322` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11195-L11196) · [Before (L11307-L11322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11307-L11322)

```diff
- 
-       function RU(DD) {
-         switch (DD.kind) {
-           case 214:
-           case 215:
-           case 216:
-           case 171:
-           case 287:
-           case 286:
-           case 290:
-             return !0;
-           case 227:
-             return 104 === DD.operatorToken.kind;
-           default:
-             return !1
-         }
+       addWindowListeners(pp) {
+         pp.addEventListener("resize", this.mH), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : pp.addEventListener("beforeprint", this.onPrint), pp.addEventListener("scrol … [truncated]
```

#### 531. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11324-L11326` → after: `L11198-L11199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11198-L11199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11198-L11199) · [Before (L11324-L11326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11324-L11326)

```diff
- 
-       function AU(DD) {
-         return 214 === DD.kind || 215 === DD.kind
+       removeWindowListeners(pp) {
+         pp.removeEventListener("scroll", this.onScroll), pp.removeEventListener("resize", this.mH), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : pp.removeEventL … [truncated]
```

#### 532. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11328-L11331` → after: `L11201-L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11201-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11201-L11202) · [Before (L11328-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11328-L11331)

```diff
- 
-       function UU(DD) {
-         const zD = DD.kind;
-         return 229 === zD || 15 === zD
+       update(pp) {
+         this.editContext && (this.editContext.update(pp), pp.startState.facet(zi) != pp.state.facet(zi) && (pp.view.contentDOM.editContext = pp.state.facet(zi) ? this.editContext.editContext : null))
```

#### 533. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11333-L11335` → after: `L11204-L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11204-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11204-L11208) · [Before (L11333-L11335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11333-L11335)

```diff
- 
-       function fU(DD) {
-         return IU(FR(DD).kind)
+       destroy() {
+         var pp, ip, cp;
+         this.stop(), null === (pp = this.intersection) || void 0 === pp || pp.disconnect(), null === (ip = this.gapIntersection) || void 0 === ip || ip.disconnect(), null === (cp = this.resizeScroll) || void 0 === cp || cp.disconnect();
+         for (let Op of this.scrollTargets) Op.removeEventListener("scroll", this.onScroll);
+         this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null,  … [truncated]
```

#### 534. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11338-L11373` → after: `L11212-L11325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11212-L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11212-L11325) · [Before (L11338-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11338-L11373)

```diff
-       function IU(DD) {
-         switch (DD) {
-           case 212:
-           case 213:
-           case 215:
-           case 214:
-           case 285:
-           case 286:
-           case 289:
-           case 216:
-           case 210:
-           case 218:
-           case 211:
-           case 232:
-           case 219:
-           case 80:
- ... (20 more removed lines; see GitHub link above)
+     function Ro(pp, ip, cp) {
+       for (; ip;) {
+         let Op = Uc.get(ip);
+         if (Op && Op.parent == pp) return Op;
+         let op = ip.parentNode;
+         ip = op != pp.dom ? op : cp > 0 ? ip.nextSibling : ip.previousSibling
+       }
+       return null
+     }
+ 
+     function qo(pp, ip) {
+       let cp = ip.startContainer,
+         Op = ip.startOffset,
+         op = ip.endContainer,
+         Ip = ip.endOffset,
+         Sp = pp.docView.domAtPos(pp.state.selection.main.anchor, 1);
+ ... (98 more added lines; see GitHub link above)
```

#### 535. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11376-L11378` → after: `L11328-L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11328-L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11328-L11345) · [Before (L11376-L11378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11376-L11378)

```diff
- 
-       function BU(DD) {
-         return GU(FR(DD).kind)
+       applyEdits(pp) {
+         let ip = 0,
+           cp = !1,
+           Op = this.pendingContextChange;
+         return pp.changes.iterChanges(((op, Ip, Sp, xp, Lp) => {
+           if (cp) return;
+           let Yp = Lp.length - (Ip - op);
+           if (Op && Ip >= Op.to) {
+             if (Op.from == op && Op.to == Ip && Op.insert.eq(Lp)) return Op = this.pendingContextChange = null, ip += Yp, void(this.to += Yp);
+             Op = null, this.revertPending(pp.state)
+           }
+           if (op += ip, (Ip += ip) <= this.from) this.from += Yp, this.to += Yp;
+           else if (op < this.to) {
+             if (op < this.from || Ip > this.to || this.to - this.from + Lp.length > 3e4) return void(cp = !0);
+             this.editContext.updateText(this.toContextPos(op), this.toContextPos(Ip), Lp.toString()), this.to += Yp
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 536. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11380-L11393` → after: `L11347-L11350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11347-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11347-L11350) · [Before (L11380-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11380-L11393)

```diff
- 
-       function GU(DD) {
-         switch (DD) {
-           case 225:
-           case 226:
-           case 221:
-           case 222:
-           case 223:
-           case 224:
-           case 217:
-             return !0;
-           default:
-             return IU(DD)
-         }
+       update(pp) {
+         let ip = this.pendingContextChange,
+           cp = pp.startState.selection.main;
+         this.composing && (this.composing.drifted || !pp.changes.touchesRange(cp.from, cp.to) && pp.transactions.some((pp => !pp.isUserEvent("input.type") && pp.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = pp.changes.mapP … [truncated]
```

#### 537. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11395-L11404` → after: `L11352-L11356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11352-L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11352-L11356) · [Before (L11395-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11395-L11404)

```diff
- 
-       function hU(DD) {
-         switch (DD.kind) {
-           case 226:
-             return !0;
-           case 225:
-             return 46 === DD.operator || 47 === DD.operator;
-           default:
-             return !1
-         }
+       resetRange(pp) {
+         let {
+           head: ip
+         } = pp.selection.main;
+         this.from = Math.max(0, ip - 1e4), this.to = Math.min(pp.doc.length, ip + 1e4)
```

#### 538. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11406-L11416` → after: `L11358-L11359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11358-L11359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11358-L11359) · [Before (L11406-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11406-L11416)

```diff
- 
-       function nU(DD) {
-         switch (DD.kind) {
-           case 106:
-           case 112:
-           case 97:
-           case 225:
-             return !0;
-           default:
-             return rA(DD)
-         }
+       reset(pp) {
+         this.resetRange(pp), this.editContext.updateText(0, this.editContext.text.length, pp.doc.sliceString(this.from, this.to)), this.setSelection(pp)
```

#### 539. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11418-L11436` → after: `L11361-L11363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11361-L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11361-L11363) · [Before (L11418-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11418-L11436)

```diff
- 
-       function MU(DD) {
-         return function(DD) {
-           switch (DD) {
-             case 228:
-             case 230:
-             case 220:
-             case 227:
-             case 231:
-             case 235:
-             case 233:
-             case 357:
-             case 356:
-             case 239:
-               return !0;
-             default:
- ... (3 more removed lines; see GitHub link above)
+       revertPending(pp) {
+         let ip = this.pendingContextChange;
+         this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ip.from), this.toContextPos(ip.from + ip.insert.length), pp.doc.sliceString(ip.from, ip.to))
```

#### 540. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11438-L11441` → after: `L11365-L11369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11365-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11365-L11369) · [Before (L11438-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11438-L11441)

```diff
- 
-       function OU(DD) {
-         const zD = DD.kind;
-         return 217 === zD || 235 === zD
+       setSelection(pp) {
+         let {
+           main: ip
+         } = pp.selection, cp = this.toContextPos(Math.max(this.from, Math.min(this.to, ip.anchor))), Op = this.toContextPos(ip.head);
+         this.editContext.selectionStart == cp && this.editContext.selectionEnd == Op || this.editContext.updateSelection(cp, Op)
```

#### 541. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11443-L11455` → after: `L11371-L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11371-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11371-L11375) · [Before (L11443-L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11443-L11455)

```diff
- 
-       function JU(DD, zD) {
-         switch (DD.kind) {
-           case 249:
-           case 250:
-           case 251:
-           case 247:
-           case 248:
-             return !0;
-           case 257:
-             return zD && JU(DD.statement, zD)
-         }
-         return !1
+       rangeIsValid(pp) {
+         let {
+           head: ip
+         } = pp.selection.main;
+         return !(this.from > 0 && ip - this.from < 500 || this.to < pp.doc.length && this.to - ip < 500 || this.to - this.from > 3e4)
```

#### 542. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11457-L11459` → after: `L11377-L11381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11377-L11381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11377-L11381) · [Before (L11457-L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11457-L11459)

```diff
- 
-       function EU(DD) {
-         return zS(DD) || wS(DD)
+       toEditorPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
+         pp = Math.min(pp, ip);
+         let cp = this.composing;
+         return cp && cp.drifted ? cp.editorBase + (pp - cp.contextBase) : pp + this.from
```

#### 543. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11461-L11463` → after: `L11383-L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11383-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11383-L11385) · [Before (L11461-L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11461-L11463)

```diff
- 
-       function QU(DD) {
-         return vD(DD, EU)
+       toContextPos(pp) {
+         let ip = this.composing;
+         return ip && ip.drifted ? ip.contextBase + (pp - ip.editorBase) : pp - this.from
```

#### 544. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11465-L11467` → after: `L11387-L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11387-L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11387-L11388) · [Before (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11465-L11467)

```diff
- 
-       function XU(DD) {
-         return !AB(DD) && !zS(DD) && !VJ(DD, 32) && !oI(DD)
+       destroy() {
+         for (let pp in this.handlers) this.editContext.removeEventListener(pp, this.handlers[pp])
```

#### 545. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11469-L11471` → after: `L11390-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11390-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11390-L11393) · [Before (L11469-L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11469-L11471)

```diff
- 
-       function VU(DD) {
-         return AB(DD) || zS(DD) || VJ(DD, 32)
+     }
+     class Co {
+       get state() {
+         return this.viewState.state
```

#### 546. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11473-L11475` → after: `L11395-L11396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11395-L11396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11395-L11396) · [Before (L11473-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11473-L11475)

```diff
- 
-       function PU(DD) {
-         return 250 === DD.kind || 251 === DD.kind
+       get viewport() {
+         return this.viewState.viewport
```

#### 547. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11477-L11479` → after: `L11398-L11399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11398-L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11398-L11399) · [Before (L11477-L11479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11477-L11479)

```diff
- 
-       function CU(DD) {
-         return Rd(DD) || MU(DD)
+       get Z2() {
+         return this.viewState.Z2
```

#### 548. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11481-L11483` → after: `L11401-L11402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11401-L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11401-L11402) · [Before (L11481-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11481-L11483)

```diff
- 
-       function xU(DD) {
-         return Rd(DD)
+       get inView() {
+         return this.viewState.inView
```

#### 549. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11485-L11487` → after: `L11404-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11404-L11405) · [Before (L11485-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11485-L11487)

```diff
- 
-       function TU(DD) {
-         return bd(DD) || MU(DD)
+       get composing() {
+         return !!this.inputState && this.inputState.composing > 0
```

#### 550. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11489-L11492` → after: `L11407-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11407-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11407-L11408) · [Before (L11489-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11489-L11492)

```diff
- 
-       function bU(DD) {
-         const zD = DD.kind;
-         return 269 === zD || 268 === zD || 80 === zD
+       get compositionStarted() {
+         return !!this.inputState && this.inputState.composing >= 0
```

#### 551. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11494-L11497` → after: `L11410-L11411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11410-L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11410-L11411) · [Before (L11494-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11494-L11497)

```diff
- 
-       function jU(DD) {
-         const zD = DD.kind;
-         return 269 === zD || 268 === zD
+       get root() {
+         return this._root
```

#### 552. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11499-L11502` → after: `L11413-L11414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11413-L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11413-L11414) · [Before (L11499-L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11499-L11502)

```diff
- 
-       function dU(DD) {
-         const zD = DD.kind;
-         return 80 === zD || 268 === zD
+       get win() {
+         return this.dom.ownerDocument.defaultView || window
```

#### 553. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11504-L11507` → after: `L11416-L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11416-L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11416-L11433) · [Before (L11504-L11507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11504-L11507)

```diff
- 
-       function SU(DD) {
-         const zD = DD.kind;
-         return 276 === zD || 275 === zD
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         var ip;
+         this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollD … [truncated]
+         let {
+           dispatch: cp
+         } = pp;
+         this.dispatchTransactions = pp.dispatchTransactions || cp && (pp => pp.forEach((pp => cp(pp, this)))) || (pp => this.update(pp)), this.dispatch = this.dispatch.bind(this), this._root = pp.root || function(pp) {
+           for (; pp;) {
+             if (pp && (9 == pp.nodeType || 11 == pp.nodeType && pp.host)) return pp;
+             pp = pp.assignedSlot || pp.parentNode
+           }
+           return null
+         }(pp.parent) || document, this.viewState = new So(this, pp.state || Op.n.create(pp)), pp.scrollTo && pp.scrollTo.is(Gi) && (this.viewState.scrollTarget = pp.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ki).map((pp => new pc(pp)));
+         for (let Op of this.plugins) Op.update(this);
+         this.observer = new mo(this), this.inputState = new AO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new fc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ip = document.fonts) || void 0 === ip ? … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 554. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11509-L11511` → after: `L11435-L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11435-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11435-L11438) · [Before (L11509-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11509-L11511)

```diff
- 
-       function iU(DD) {
-         return 268 === DD.kind || 267 === DD.kind
+       dispatch() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         let op = 1 == ip.length && ip[0] instanceof Op.I ? ip : 1 == ip.length && Array.isArray(ip[0]) ? ip[0] : [this.state.update(...ip)];
+         this.dispatchTransactions(op, this)
```

#### 555. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11513-L11582` → after: `L11440-L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11440-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11440-L11475) · [Before (L11513-L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11513-L11582)

```diff
- 
-       function lU(DD) {
-         switch (DD.kind) {
-           case 220:
-           case 227:
-           case 209:
-           case 214:
-           case 180:
-           case 264:
-           case 232:
-           case 176:
-           case 177:
-           case 186:
-           case 181:
-           case 213:
-           case 267:
- ... (54 more removed lines; see GitHub link above)
+       update(pp) {
+         if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
+         let ip, cp = !1,
+           op = !1,
+           Ip = this.state;
+         for (let Op of pp) {
+           if (Op.startState != Ip) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
+           Ip = Op.state
+         }
+         if (this.destroyed) return void(this.viewState.state = Ip);
+         let Sp = this.hasFocus,
+           xp = 0,
+           Lp = null;
+         pp.some((pp => pp.annotation(lO))) ? (this.inputState.notifiedFocused = Sp, xp = 1) : Sp != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Sp, Lp = QO(Ip, Sp), Lp || (xp = 1));
+         let Yp = this.observer.delayedAndroidKey,
+           Dp = null;
+ ... (20 more added lines; see GitHub link above)
```

#### 556. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11585-L11620` → after: `L11486-L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11486-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11486-L11497) · [Before (L11585-L11620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11585-L11620)

```diff
- 
-       function WU(DD) {
-         switch (DD.kind) {
-           case 220:
-           case 242:
-           case 180:
-           case 270:
-           case 300:
-           case 176:
-           case 195:
-           case 177:
-           case 186:
-           case 181:
-           case 249:
-           case 250:
-           case 251:
- ... (20 more removed lines; see GitHub link above)
+       setState(pp) {
+         if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
+         if (this.destroyed) return void(this.viewState.state = pp);
+         this.updateState = 2;
+         let ip = this.hasFocus;
+         try {
+           for (let pp of this.plugins) pp.destroy(this);
+           this.viewState = new So(this, pp), this.plugins = pp.facet(Ki).map((pp => new pc(pp))), this.pluginMap.clear();
+           for (let pp of this.plugins) pp.update(this);
+           this.docView.destroy(), this.docView = new fc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
+         } finally {
+           this.updateState = 0
```

#### 557. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11623-L11625` → after: `L11501-L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11501-L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11501-L11529) · [Before (L11623-L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11623-L11625)

```diff
- 
-       function NU(DD) {
-         return 263 === DD || 283 === DD || 264 === DD || 265 === DD || 266 === DD || 267 === DD || 268 === DD || 273 === DD || 272 === DD || 279 === DD || 278 === DD || 271 === DD
+       updatePlugins(pp) {
+         let ip = pp.startState.facet(Ki),
+           cp = pp.state.facet(Ki);
+         if (ip != cp) {
+           let Op = [];
+           for (let op of cp) {
+             let cp = ip.indexOf(op);
+             if (cp < 0) Op.push(new pc(op));
+             else {
+               let ip = this.plugins[cp];
+               ip.mustUpdate = pp, Op.push(ip)
+             }
+           }
+           for (let ip of this.plugins) ip.mustUpdate != pp && ip.destroy(this);
+           this.plugins = Op, this.pluginMap.clear()
+         } else
+ ... (13 more added lines; see GitHub link above)
```

#### 558. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11627-L11629` → after: `L11531-L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11531-L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11531-L11597) · [Before (L11627-L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11627-L11629)

```diff
- 
-       function ZU(DD) {
-         return 253 === DD || 252 === DD || 260 === DD || 247 === DD || 245 === DD || 243 === DD || 250 === DD || 251 === DD || 249 === DD || 246 === DD || 257 === DD || 254 === DD || 256 === DD || 258 === DD || 259 === DD || 244 === DD || 248 === DD || 255 === DD || 354 === DD
+       measure() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         if (this.destroyed) return;
+         if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
+         this.measureScheduled = 0, pp && this.observer.forceFlush();
+         let ip = null,
+           cp = this.viewState.scrollParent,
+           Op = this.viewState.getScrollOffset(),
+           {
+             scrollAnchorPos: op,
+             scrollAnchorHeight: Ip
+           } = this.viewState;
+         Math.abs(Op - this.viewState.scrollOffset) > 1 && (Ip = -1), this.viewState.scrollAnchorHeight = -1;
+         try {
+           for (let pp = 0;; pp++) {
+             if (Ip < 0)
+ ... (51 more added lines; see GitHub link above)
```

#### 559. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11631-L11634` → after: `L11599-L11600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11599-L11600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11599-L11600) · [Before (L11631-L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11631-L11634)

```diff
- 
-       function yU(DD) {
-         return 169 === DD.kind ? DD.parent && 346 !== DD.parent.kind || Gh(DD) : 220 === (zD = DD.kind) || 209 === zD || 264 === zD || 232 === zD || 176 === zD || 177 === zD || 267 === zD || 307 === zD || 282 === zD || 263 === zD || 219 === zD || 178 === zD || 274 === zD || 272 = … [truncated]
-         var zD
+       get themeClasses() {
+         return wo + " " + (this.state.facet(Uo) ? to : vo) + " " + this.state.facet(yo)
```

#### 560. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11636-L11638` → after: `L11602-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11602-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11602-L11624) · [Before (L11636-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11636-L11638)

```diff
- 
-       function kU(DD) {
-         return NU(DD.kind)
+       updateAttrs() {
+         let pp = Jo(this, ic, {
+             class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
+           }),
+           ip = {
+             spellcheck: "false",
+             autocorrect: "off",
+             autocapitalize: "off",
+             writingsuggestions: "false",
+             translate: "no",
+             contenteditable: this.state.facet(zi) ? "true" : "false",
+             class: "cm-content",
+             style: `${kp.tabSize}: ${this.state.tabSize}`,
+             role: "textbox",
+             "aria-multiline": "true"
+           };
+ ... (7 more added lines; see GitHub link above)
```

#### 561. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11640-L11642` → after: `L11626-L11632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11626-L11632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11626-L11632) · [Before (L11640-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11640-L11642)

```diff
- 
-       function mU(DD) {
-         return ZU(DD.kind)
+       showAnnouncements(pp) {
+         let ip = !0;
+         for (let cp of pp)
+           for (let pp of cp.effects)
+             if (pp.is(Co.announce)) {
+               ip && (this.announceDOM.textContent = ""), ip = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = pp.value
+             }
```

#### 562. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11644-L11651` → after: `L11634-L11639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11634-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11634-L11639) · [Before (L11644-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11644-L11651)

```diff
- 
-       function eU(DD) {
-         const zD = DD.kind;
-         return ZU(zD) || NU(zD) || function(DD) {
-           if (242 !== DD.kind) return !1;
-           if (void 0 !== DD.parent && (259 === DD.parent.kind || 300 === DD.parent.kind)) return !1;
-           return !QG(DD)
-         }(DD)
+       mountStyles() {
+         this.styleModules = this.state.facet(Ac);
+         let pp = this.state.facet(Co.cspNonce);
+         op.b.mount(this.root, this.styleModules.concat(uo).reverse(), pp ? {
+           nonce: pp
+         } : void 0)
```

#### 563. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11653-L11656` → after: `L11641-L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11641-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11641-L11643) · [Before (L11653-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11653-L11656)

```diff
- 
-       function oU(DD) {
-         const zD = DD.kind;
-         return ZU(zD) || NU(zD) || 242 === zD
+       readMeasured() {
+         if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
+         0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
```

#### 564. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11658-L11661` → after: `L11645-L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11645-L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11645-L11652) · [Before (L11658-L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11658-L11661)

```diff
- 
-       function aU(DD) {
-         const zD = DD.kind;
-         return 284 === zD || 167 === zD || 80 === zD
+       requestMeasure(pp) {
+         if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), pp) {
+           if (this.measureRequests.indexOf(pp) > -1) return;
+           if (null != pp.key)
+             for (let ip = 0; ip < this.measureRequests.length; ip++)
+               if (this.measureRequests[ip].key === pp.key) return void(this.measureRequests[ip] = pp);
+           this.measureRequests.push(pp)
+         }
```

#### 565. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11663-L11666` → after: `L11654-L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11654-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11654-L11656) · [Before (L11663-L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11663-L11666)

```diff
- 
-       function uU(DD) {
-         const zD = DD.kind;
-         return 110 === zD || 80 === zD || 212 === zD || 296 === zD
+       plugin(pp) {
+         let ip = this.pluginMap.get(pp);
+         return (void 0 === ip || ip && ip.plugin != pp) && this.pluginMap.set(pp, ip = this.plugins.find((ip => ip.plugin == pp)) || null), ip && ip.update(this).value
```

#### 566. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11668-L11671` → after: `L11658-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11658-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11658-L11659) · [Before (L11668-L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11668-L11671)

```diff
- 
-       function vU(DD) {
-         const zD = DD.kind;
-         return 285 === zD || 295 === zD || 286 === zD || 12 === zD || 289 === zD
+       get documentTop() {
+         return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
```

#### 567. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11673-L11676` → after: `L11661-L11665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11661-L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11661-L11665) · [Before (L11673-L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11673-L11676)

```diff
- 
-       function tU(DD) {
-         const zD = DD.kind;
-         return 292 === zD || 294 === zD
+       get documentPadding() {
+         return {
+           top: this.viewState.paddingTop,
+           bottom: this.viewState.paddingBottom
+         }
```

#### 568. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11678-L11681` → after: `L11667-L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11667-L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11667-L11668) · [Before (L11678-L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11678-L11681)

```diff
- 
-       function FU(DD) {
-         const zD = DD.kind;
-         return 11 === zD || 295 === zD
+       get scaleX() {
+         return this.viewState.scaleX
```

#### 569. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11683-L11686` → after: `L11670-L11671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11670-L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11670-L11671) · [Before (L11683-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11683-L11686)

```diff
- 
-       function YU(DD) {
-         const zD = DD.kind;
-         return 287 === zD || 286 === zD
+       get scaleY() {
+         return this.viewState.scaleY
```

#### 570. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11688-L11691` → after: `L11673-L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11673-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11673-L11674) · [Before (L11688-L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11688-L11691)

```diff
- 
-       function HU(DD) {
-         const zD = DD.kind;
-         return 287 === zD || 286 === zD || 290 === zD
+       elementAtHeight(pp) {
+         return this.readMeasured(), this.viewState.elementAtHeight(pp)
```

#### 571. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11693-L11696` → after: `L11676-L11677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11676-L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11676-L11677) · [Before (L11693-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11693-L11696)

```diff
- 
-       function qU(DD) {
-         const zD = DD.kind;
-         return 297 === zD || 298 === zD
+       lineBlockAtHeight(pp) {
+         return this.readMeasured(), this.viewState.lineBlockAtHeight(pp)
```

#### 572. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11698-L11700` → after: `L11679-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11679-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11679-L11680) · [Before (L11698-L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11698-L11700)

```diff
- 
-       function Df(DD) {
-         return DD.kind >= 310 && DD.kind <= 352
+       get viewportLineBlocks() {
+         return this.viewState.viewportLines
```

#### 573. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11702-L11704` → after: `L11682-L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11682-L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11682-L11683) · [Before (L11702-L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11702-L11704)

```diff
- 
-       function zf(DD) {
-         return 321 === DD.kind || 320 === DD.kind || 322 === DD.kind || Bf(DD) || wf(DD) || tS(DD) || FS(DD)
+       lineBlockAt(pp) {
+         return this.viewState.lineBlockAt(pp)
```

#### 574. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11706-L11708` → after: `L11685-L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11685-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11685-L11686) · [Before (L11706-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11706-L11708)

```diff
- 
-       function wf(DD) {
-         return DD.kind >= 328 && DD.kind <= 352
+       get contentHeight() {
+         return this.viewState.contentHeight
```

#### 575. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11710-L11712` → after: `L11688-L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11688-L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11688-L11689) · [Before (L11710-L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11710-L11712)

```diff
- 
-       function pf(DD) {
-         return 179 === DD.kind
+       moveByChar(pp, ip, cp) {
+         return zc(this, pp, Gc(this, pp, ip, cp))
```

#### 576. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11714-L11716` → after: `L11691-L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11691-L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11691-L11699) · [Before (L11714-L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11714-L11716)

```diff
- 
-       function sf(DD) {
-         return 178 === DD.kind
+       moveByGroup(pp, ip) {
+         return zc(this, pp, Gc(this, pp, ip, (ip => function(pp, ip, cp) {
+           let op = pp.state.charCategorizer(ip),
+             Ip = op(cp);
+           return pp => {
+             let ip = op(pp);
+             return Ip == Op.i.Space && (Ip = ip), Ip == ip
+           }
+         }(this, pp.head, ip))))
```

#### 577. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11718-L11724` → after: `L11701-L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11701-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11701-L11705) · [Before (L11718-L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11718-L11724)

```diff
- 
-       function Kf(DD) {
-         if (!Qn(DD)) return !1;
-         const {
-           jsDoc: zD
-         } = DD;
-         return !!zD && zD.length > 0
+       visualLineSide(pp, ip) {
+         let cp = this.bidiSpans(pp),
+           op = this.textDirectionAt(pp.from),
+           Ip = cp[ip ? cp.length - 1 : 0];
+         return Op.l.cursor(Ip.side(ip, op) + pp.from, Ip.forward(!ip, op) ? 1 : -1)
```

#### 578. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11726-L11728` → after: `L11707-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11707-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11707-L11751) · [Before (L11726-L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11726-L11728)

```diff
- 
-       function rf(DD) {
-         return !!DD.type
+       moveToLineBoundary(pp, ip) {
+         return function(pp, ip, cp, op) {
+           let Ip = gc(pp, ip.head, ip.assoc || -1),
+             Sp = op && Ip.type == Xp.Text && (pp.lineWrapping || Ip.widgetLineBreaks) ? pp.coordsAtPos(ip.assoc < 0 && ip.head > Ip.from ? ip.head - 1 : ip.head) : null;
+           if (Sp) {
+             let ip = pp.dom.getBoundingClientRect(),
+               op = pp.textDirectionAt(Ip.from),
+               xp = pp.posAtCoords({
+                 x: cp == (op == Ai.LTR) ? ip.right - 1 : ip.left + 1,
+                 y: (Sp.top + Sp.bottom) / 2
+               });
+             if (null != xp) return Op.l.cursor(xp, cp ? -1 : 1)
+           }
+           return Op.l.cursor(cp ? Ip.to : Ip.from, cp ? -1 : 1)
+         }(this, pp, ip, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
+       }
+ ... (29 more added lines; see GitHub link above)
```

#### 579. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11730-L11732` → after: `L11753-L11755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11753-L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11753-L11755) · [Before (L11730-L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11730-L11732)

```diff
- 
-       function Lf(DD) {
-         return !!DD.initializer
+       domAtPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return this.docView.domAtPos(pp, ip)
```

#### 580. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11734-L11746` → after: `L11757-L11759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11757-L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11757-L11759) · [Before (L11734-L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11734-L11746)

```diff
- 
-       function gf(DD) {
-         switch (DD.kind) {
-           case 261:
-           case 170:
-           case 209:
-           case 173:
-           case 304:
-           case 307:
-             return !0;
-           default:
-             return !1
-         }
+       posAtDOM(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.docView.posFromDOM(pp, ip)
```

#### 581. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11748-L11750` → after: `L11761-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11761-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11761-L11765) · [Before (L11748-L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11748-L11750)

```diff
- 
-       function Rf(DD) {
-         return 292 === DD.kind || 294 === DD.kind || vA(DD)
+       posAtCoords(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this.readMeasured();
+         let cp = Kc(this, pp, ip);
+         return cp && cp.pos
```

#### 582. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11752-L11754` → after: `L11767-L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11767-L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11767-L11769) · [Before (L11752-L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11752-L11754)

```diff
- 
-       function Af(DD) {
-         return 184 === DD.kind || 234 === DD.kind
+       posAndSideAtCoords(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         return this.readMeasured(), Kc(this, pp, ip)
```

#### 583. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11756-L11766` → after: `L11771-L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11771-L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11771-L11778) · [Before (L11756-L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11756-L11766)

```diff
-       var Uf = 1073741823;
- 
-       function ff(DD) {
-         let zD = Uf;
-         for (const wD of DD) {
-           if (!wD.length) continue;
-           let DD = 0;
-           for (; DD < wD.length && DD < zD && gc(wD.charCodeAt(DD)); DD++);
-           if (DD < zD && (zD = DD), 0 === zD) return 0
-         }
-         return zD === Uf ? void 0 : zD
+       coordsAtPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         this.readMeasured();
+         let cp = this.docView.coordsAt(pp, ip);
+         if (!cp || cp.left == cp.right) return cp;
+         let Op = this.state.doc.lineAt(pp),
+           op = this.bidiSpans(Op);
+         return zp(cp, op[ei.find(op, pp - Op.from, -1, ip)].dir == Ai.LTR == ip > 0)
```

#### 584. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11768-L11770` → after: `L11780-L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11780-L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11780-L11781) · [Before (L11768-L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11768-L11770)

```diff
- 
-       function If(DD) {
-         return 11 === DD.kind || 15 === DD.kind
+       coordsForChar(pp) {
+         return this.readMeasured(), this.docView.coordsForChar(pp)
```

#### 585. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11772-L11774` → after: `L11783-L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11783-L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11783-L11784) · [Before (L11772-L11774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11772-L11774)

```diff
- 
-       function Bf(DD) {
-         return 325 === DD.kind || 326 === DD.kind || 327 === DD.kind
+       get defaultCharacterWidth() {
+         return this.viewState.heightOracle.charWidth
```

#### 586. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11776-L11779` → after: `L11786-L11787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11786-L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11786-L11787) · [Before (L11776-L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11776-L11779)

```diff
- 
-       function Gf(DD) {
-         const zD = Jz(DD.parameters);
-         return !!zD && hf(zD)
+       get defaultLineHeight() {
+         return this.viewState.heightOracle.lineHeight
```

#### 587. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11781-L11784` → after: `L11789-L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11789-L11790) · [Before (L11781-L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11781-L11784)

```diff
- 
-       function hf(DD) {
-         const zD = Ai(DD) ? DD.typeExpression && DD.typeExpression.type : DD.type;
-         return void 0 !== DD.dotDotDotToken || !!zD && 319 === zD.kind
+       get textDirection() {
+         return this.viewState.defaultTextDirection
```

#### 588. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11786-L11788` → after: `L11792-L11793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11792-L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11792-L11793) · [Before (L11786-L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11786-L11788)

```diff
- 
-       function nf(DD, zD) {
-         return zD.text.substring(DD.pos, DD.end).includes("@internal")
+       textDirectionAt(pp) {
+         return !this.state.facet(ai) || pp < this.viewport.from || pp > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(pp))
```

#### 589. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11790-L11801` → after: `L11795-L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11795-L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11795-L11796) · [Before (L11790-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11790-L11801)

```diff
- 
-       function Mf(DD, zD) {
-         zD ?? (zD = DI(DD));
-         const wD = Wg(DD);
-         if (wD && 170 === wD.kind) {
-           const pD = wD.parent.parameters.indexOf(wD),
-             sD = pD > 0 ? wD.parent.parameters[pD - 1] : void 0,
-             KD = zD.text,
-             rD = sD ? FD(dc(KD, nc(KD, sD.end + 1, !1, !0)), jc(KD, DD.pos)) : dc(KD, nc(KD, DD.pos, !1, !0));
-           return vD(rD) && nf(Ez(rD), zD)
-         }
-         return !!UD(wD && wG(wD, zD), (DD => nf(DD, zD)))
+       get lineWrapping() {
+         return this.viewState.heightOracle.lineWrapping
```

#### 590. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11803-L11813` → after: `L11798-L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11798-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11798-L11805) · [Before (L11803-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11803-L11813)

```diff
-       var Of = [],
-         Jf = "tslib",
-         Ef = 160,
-         Qf = 1e6,
-         Xf = 500;
- 
-       function Vf(DD, zD) {
-         const wD = DD.declarations;
-         if (wD)
-           for (const pD of wD)
-             if (pD.kind === zD) return pD
+       bidiSpans(pp) {
+         if (pp.length > Eo) return qi(pp.length);
+         let ip, cp = this.textDirectionAt(pp.from);
+         for (let op of this.bidiCache)
+           if (op.from == pp.from && op.dir == cp && (op.fresh || ui(op.isolates, ip = Lc(this, pp)))) return op.order;
+         ip || (ip = Lc(this, pp));
+         let Op = Ri(pp.text, cp, ip);
+         return this.bidiCache.push(new Qo(pp.from, pp.to, cp, ip, !0, Op)), Op
```

#### 591. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11815-L11817` → after: `L11807-L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11807-L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11807-L11809) · [Before (L11815-L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11815-L11817)

```diff
- 
-       function Pf(DD, zD) {
-         return CD(DD.declarations || gD, (DD => DD.kind === zD))
+       get hasFocus() {
+         var pp;
+         return (this.dom.ownerDocument.hasFocus() || kp.safari && (null === (pp = this.inputState) || void 0 === pp ? void 0 : pp.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
```

#### 592. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11819-L11824` → after: `L11811-L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11811-L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11811-L11814) · [Before (L11819-L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11819-L11824)

```diff
- 
-       function Cf(DD) {
-         const zD = new Map;
-         if (DD)
-           for (const wD of DD) zD.set(wD.escapedName, wD);
-         return zD
+       focus() {
+         this.observer.ignore((() => {
+           oi(this.contentDOM), this.docView.updateSelection()
+         }))
```

#### 593. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11826-L11828` → after: `L11816-L11817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11816-L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11816-L11817) · [Before (L11826-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11826-L11828)

```diff
- 
-       function xf(DD) {
-         return 0 !== (33554432 & DD.flags)
+       setRoot(pp) {
+         this._root != pp && (this._root = pp, this.observer.setWindow((9 == pp.nodeType ? pp : pp.ownerDocument).defaultView || window), this.mountStyles())
```

#### 594. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11830-L11832` → after: `L11819-L11822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11819-L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11819-L11822) · [Before (L11830-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11830-L11832)

```diff
- 
-       function Tf(DD) {
-         return !!(1536 & DD.flags) && 34 === DD.escapedName.charCodeAt(0)
+       destroy() {
+         this.root.activeElement == this.contentDOM && this.contentDOM.blur();
+         for (let pp of this.plugins) pp.destroy(this);
+         this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
```

#### 595. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11834-L11869` → after: `L11824-L11827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11824-L11827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11824-L11827) · [Before (L11834-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11834-L11869)

```diff
-       var bf = function() {
-         var DD = "";
-         const zD = zD => DD += zD;
-         return {
-           getText: () => DD,
-           write: zD,
-           rawWrite: zD,
-           writeKeyword: zD,
-           writeOperator: zD,
-           writePunctuation: zD,
-           writeSpace: zD,
-           writeStringLiteral: zD,
-           writeLiteral: zD,
-           writeParameter: zD,
-           writeProperty: zD,
-           writeSymbol: (DD, wD) => zD(DD),
- ... (20 more removed lines; see GitHub link above)
+       static scrollIntoView(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         var cp, op, Ip, Sp;
+         return Gi.of(new gi("number" == typeof pp ? Op.l.cursor(pp) : pp, null !== (cp = ip.y) && void 0 !== cp ? cp : "nearest", null !== (op = ip.x) && void 0 !== op ? op : "nearest", null !== (Ip = ip.yMargin) && void 0 !== Ip ? Ip : 5, null !== (Sp = ip.xMargin) && void 0 !== … [truncated]
```

#### 596. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11871-L11873` → after: `L11829-L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11829-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11829-L11834) · [Before (L11871-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11871-L11873)

```diff
- 
-       function df(DD, zD) {
-         return Sf(DD, zD, JN)
+       scrollSnapshot() {
+         let {
+           scrollTop: pp,
+           scrollLeft: ip
+         } = this.scrollDOM, cp = this.viewState.scrollAnchorAt(pp);
+         return Gi.of(new gi(Op.l.cursor(cp.from), "start", "start", cp.top - pp, ip, !0))
```

#### 597. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11875-L11877` → after: `L11836-L11837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11836-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11836-L11837) · [Before (L11875-L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11875-L11877)

```diff
- 
-       function Sf(DD, zD, wD) {
-         return DD !== zD && wD.some((wD => !EP(HX(DD, wD), HX(zD, wD))))
+       setTabFocusMode(pp) {
+         null == pp ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof pp ? this.inputState.tabFocusMode = pp ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + pp)
```

#### 598. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11879-L11887` → after: `L11839-L11842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11839-L11842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11839-L11842) · [Before (L11879-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11879-L11887)

```diff
- 
-       function lf(DD, zD) {
-         for (;;) {
-           const wD = zD(DD);
-           if ("quit" === wD) return;
-           if (void 0 !== wD) return wD;
-           if (bS(DD)) return;
-           DD = DD.parent
-         }
+       static domEventHandlers(pp) {
+         return Vi.define((() => ({})), {
+           eventHandlers: pp
+         })
```

#### 599. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11889-L11895` → after: `L11844-L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11844-L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11844-L11847) · [Before (L11889-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11889-L11895)

```diff
- 
-       function Wf(DD, zD) {
-         const wD = DD.entries();
-         for (const [pD, sD] of wD) {
-           const DD = zD(sD, pD);
-           if (DD) return DD
-         }
+       static domEventObservers(pp) {
+         return Vi.define((() => ({})), {
+           eventObservers: pp
+         })
```

#### 600. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11897-L11903` → after: `L11849-L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11849-L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11849-L11852) · [Before (L11897-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11897-L11903)

```diff
- 
-       function Nf(DD, zD) {
-         const wD = DD.keys();
-         for (const pD of wD) {
-           const DD = zD(pD);
-           if (DD) return DD
-         }
+       static theme(pp, ip) {
+         let cp = op.b.newName(),
+           Op = [yo.of(cp), Ac.of(eo(`.${cp}`, pp))];
+         return ip && ip.dark && Op.push(Uo.of(!0)), Op
```

#### 601. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11905-L11909` → after: `L11854-L11855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11854-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11854-L11855) · [Before (L11905-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11905-L11909)

```diff
- 
-       function Zf(DD, zD) {
-         DD.forEach(((DD, wD) => {
-           zD.set(wD, DD)
-         }))
+       static baseTheme(pp) {
+         return Op.u.lowest(Ac.of(eo("." + wo, pp, Ho)))
```

#### 602. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11911-L11917` → after: `L11857-L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11857-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11857-L11874) · [Before (L11911-L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11911-L11917)

```diff
- 
-       function yf(DD) {
-         const zD = bf.getText();
-         try {
-           return DD(bf), bf.getText()
-         } finally {
-           bf.clear(), bf.writeKeyword(zD)
+       static findFromDOM(pp) {
+         var ip;
+         let cp = pp.querySelector(".cm-content"),
+           Op = cp && Uc.get(cp) || Uc.get(pp);
+         return (null === (ip = null === Op || void 0 === Op ? void 0 : Op.root) || void 0 === ip ? void 0 : ip.view) || null
+       }
+     }
+     Co.styleModule = Ac, Co.inputHandler = Ni, Co.clipboardInputFilter = fi, Co.clipboardOutputFilter = bi, Co.scrollHandler = Fi, Co.focusChangeEffect = Ti, Co.perLineTextDirection = ai, Co.exceptionSink = Ji, Co.updateListener = Bi, Co.editable = zi, Co.mouseSelectionStyle = Qi … [truncated]
+       combine: pp => {
+         let ip = 5,
+           cp = 5;
+         for (let Op of pp) "number" == typeof Op ? ip = cp = Op : ({
+           x: ip,
+           y: cp
+         } = Op);
+         return {
+ ... (2 more added lines; see GitHub link above)
```

#### 603. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11920-L11922` → after: `L11877-L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11877-L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11877-L11886) · [Before (L11920-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11920-L11922)

```diff
- 
-       function kf(DD) {
-         return DD.end - DD.pos
+     }), Co.scrollMargins = Yc, Co.darkTheme = Uo, Co.cspNonce = Op.o.define({
+       combine: pp => pp.length ? pp[0] : ""
+     }), Co.contentAttributes = cc, Co.editorAttributes = ic, Co.lineWrapping = Co.contentAttributes.of({
+       class: "cm-lineWrapping"
+     }), Co.announce = Op.C.define();
+     const Eo = 4096,
+       Xo = {};
+     class Qo {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.from = pp, this.to = ip, this.dir = cp, this.isolates = Op, this.fresh = op, this.order = Ip
```

#### 604. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11924-L11926` → after: `L11888-L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11888-L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11888-L11896) · [Before (L11924-L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11924-L11926)

```diff
- 
-       function mf(DD, zD) {
-         return DD.path === zD.path && !DD.prepend === !zD.prepend && !DD.circular === !zD.circular
+       static update(pp, ip) {
+         if (ip.empty && !pp.some((pp => pp.fresh))) return pp;
+         let cp = [],
+           Op = pp.length ? pp[pp.length - 1].dir : Ai.LTR;
+         for (let op = Math.max(0, pp.length - 10); op < pp.length; op++) {
+           let Ip = pp[op];
+           Ip.dir != Op || ip.touchesRange(Ip.from, Ip.to) || cp.push(new Qo(ip.mapPos(Ip.from, 1), ip.mapPos(Ip.to, -1), Ip.dir, Ip.isolates, !1, Ip.order))
+         }
+         return cp
```

#### 605. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11928-L11931` → after: `L11898-L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L11898-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L11898-L12036) · [Before (L11928-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11928-L11931)

```diff
- 
-       function ef(DD, zD) {
-         return DD === zD || DD.resolvedModule === zD.resolvedModule || !!DD.resolvedModule && !!zD.resolvedModule && DD.resolvedModule.isExternalLibraryImport === zD.resolvedModule.isExternalLibraryImport && DD.resolvedModule.extension === zD.resolvedModule.extension && DD.resolv … [truncated]
-         var wD, pD
+     }
+ 
+     function Jo(pp, ip, cp) {
+       for (let Op = pp.state.facet(ip), op = Op.length - 1; op >= 0; op--) {
+         let ip = Op[op],
+           Ip = "function" == typeof ip ? ip(pp) : ip;
+         Ip && mp(Ip, cp)
+       }
+       return cp
+     }
+     const Bo = kp.mac ? "mac" : kp.windows ? "win" : kp.linux ? "linux" : "key";
+ 
+     function No(pp, ip, cp) {
+       return ip.altKey && (pp = "Alt-" + pp), ip.ctrlKey && (pp = "Ctrl-" + pp), ip.metaKey && (pp = "Meta-" + pp), !1 !== cp && ip.shiftKey && (pp = "Shift-" + pp), pp
+     }
+     const To = Op.u.default(Co.domEventHandlers({
+ ... (123 more added lines; see GitHub link above)
```

#### 606. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11933-L11935` → after: `L12038-L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12038-L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12038-L12040) · [Before (L11933-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11933-L11935)

```diff
- 
-       function of(DD) {
-         return DD.resolvedModule
+       draw() {
+         let pp = document.createElement("div");
+         return pp.className = this.className, this.adjust(pp), pp
```

#### 607. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11937-L11939` → after: `L12042-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12042-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12042-L12043) · [Before (L11937-L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11937-L11939)

```diff
- 
-       function af(DD) {
-         return DD.resolvedTypeReferenceDirective
+       update(pp, ip) {
+         return ip.className == this.className && (this.adjust(pp), !0)
```

#### 608. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11941-L11951` → after: `L12045-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12045-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12045-L12046) · [Before (L11941-L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11941-L11951)

```diff
- 
-       function uf(DD, zD, wD, pD, sD) {
-         var KD;
-         const rD = null == (KD = zD.getResolvedModule(DD, wD, pD)) ? void 0 : KD.alternateResult,
-           LD = rD && (2 === XX(zD.getCompilerOptions()) ? [TL.There_are_types_at_0_but_this_result_could_not_be_resolved_under_your_current_moduleResolution_setting_Consider_updating_to_node16_nodenext_or_bundler, [rD]] : [TL.There_are_types_at_0_but_this_result_could_not_be_reso … [truncated]
-           cD = LD ? pX(void 0, LD[0], ...LD[1]) : zD.typesPackageExists(sD) ? pX(void 0, TL.If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Sla … [truncated]
-         return cD && (cD.repopulateInfo = () => ({
-           moduleReference: wD,
-           mode: pD,
-           packageName: sD === wD ? void 0 : sD
-         })), cD
+       adjust(pp) {
+         pp.style.left = this.left + "px", pp.style.top = this.top + "px", null != this.width && (pp.style.width = this.width + "px"), pp.style.height = this.height + "px"
```

#### 609. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11953-L11959` → after: `L12048-L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12048-L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12048-L12049) · [Before (L11953-L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11953-L11959)

```diff
- 
-       function vf(DD) {
-         const zD = gP(DD.fileName),
-           wD = DD.packageJsonScope,
-           pD = ".ts" === zD ? ".mts" : ".js" === zD ? ".mjs" : void 0,
-           sD = wD && !wD.contents.packageJsonContent.type ? pD ? pX(void 0, TL.To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Colon_module_to_1, pD, zL(wD.packageDirectory, "package.json")) : pX(void 0, TL.To_convert_this_file_to … [truncated]
-         return sD.repopulateInfo = () => !0, sD
+       eq(pp) {
+         return this.left == pp.left && this.top == pp.top && this.width == pp.width && this.height == pp.height && this.className == pp.className
```

#### 610. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11961-L11983` → after: `L12051-L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12051-L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12051-L12056) · [Before (L11961-L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11961-L11983)

```diff
- 
-       function tf(DD) {
-         let {
-           name: zD,
-           subModuleName: wD
-         } = DD;
-         return wD ? `${zD}/${wD}` : zD
-       }
- 
-       function Ff(DD) {
-         return `${tf(DD)}@${DD.version}${DD.peerDependencies??""}`
-       }
- 
-       function Yf(DD, zD) {
-         return DD === zD || DD.resolvedTypeReferenceDirective === zD.resolvedTypeReferenceDirective || !!DD.resolvedTypeReferenceDirective && !!zD.resolvedTypeReferenceDirective && DD.resolvedTypeReferenceDirective.resolvedFileName === zD.resolvedTypeReferenceDirective.resolvedFi … [truncated]
-       }
- ... (7 more removed lines; see GitHub link above)
+       static forRange(pp, ip, cp) {
+         if (cp.empty) {
+           let Op = pp.coordsAtPos(cp.head, cp.assoc || 1);
+           if (!Op) return [];
+           let op = Zo(pp);
+           return [new ro(ip, Op.left - op.left, Op.top - op.top, null, Op.bottom - Op.top)]
```

#### 611. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11985-L11991` → after: `L12058-L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12058-L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12058-L12081) · [Before (L11985-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L11985-L11991)

```diff
-         return !1
-       }
- 
-       function qf(DD) {
-         return function(DD) {
-           if (!(2097152 & DD.flags)) {
-             (0 !== (262144 & DD.flags) || bW(DD, qf)) && (DD.flags |= 1048576), DD.flags |= 2097152
+         return function(pp, ip, cp) {
+           if (cp.to <= pp.viewport.from || cp.from >= pp.viewport.to) return [];
+           let Op = Math.max(cp.from, pp.viewport.from),
+             op = Math.min(cp.to, pp.viewport.to),
+             Ip = pp.textDirection == Ai.LTR,
+             Sp = pp.contentDOM,
+             xp = Sp.getBoundingClientRect(),
+             Lp = Zo(pp),
+             Yp = Sp.querySelector(".cm-line"),
+             Dp = Yp && window.getComputedStyle(Yp),
+             Ap = xp.left + (Dp ? parseInt(Dp.paddingLeft) + Math.min(0, parseInt(Dp.textIndent)) : 0),
+             Pp = xp.right - (Dp ? parseInt(Dp.paddingRight) : 0),
+             Wp = gc(pp, Op, 1),
+             yp = gc(pp, op, -1),
+             Up = Wp.type == Xp.Text ? Wp : null,
+             wp = yp.type == Xp.Text ? yp : null;
+ ... (8 more added lines; see GitHub link above)
```

#### 612. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12045-L12047` → after: `L12084-L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12084-L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12084-L12086) · [Before (L12045-L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12045-L12047)

```diff
-       function LI(DD, zD, wD) {
-         return !(wD && wD(zD)) && !DD.identifiers.has(zD)
-       }
+           function vp(pp, cp, Op, op) {
+             return new ro(ip, pp - Lp.left, cp - Lp.top, Math.max(0, Op - pp), op - cp)
+           }
```

#### 613. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12049-L12051` → after: `L12088-L12096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12088-L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12088-L12096) · [Before (L12049-L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12049-L12051)

```diff
-       function cI(DD) {
-         return void 0 === DD || DD.pos === DD.end && DD.pos >= 0 && 1 !== DD.kind
-       }
+           function tp(pp) {
+             let {
+               top: ip,
+               bottom: cp,
+               horizontal: Op
+             } = pp, op = [];
+             for (let Ip = 0; Ip < Op.length; Ip += 2) op.push(vp(Op[Ip], ip, Op[Ip + 1], cp));
+             return op
+           }
```

#### 614. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12053-L12055` → after: `L12098-L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12098-L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12098-L12101) · [Before (L12053-L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12053-L12055)

```diff
-       function gI(DD) {
-         return !cI(DD)
-       }
+           function Hp(ip, cp, Op) {
+             let op = 1e9,
+               Sp = -1e9,
+               xp = [];
```

#### 615. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12057-L12059` → after: `L12103-L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12103-L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12103-L12127) · [Before (L12057-L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12057-L12059)

```diff
-       function RI(DD, zD) {
-         return yb(DD) ? zD === DD.expression : vb(DD) ? zD === DD.modifiers : eb(DD) ? zD === DD.initializer : ob(DD) ? zD === DD.questionToken && kA(DD) : PS(DD) ? zD === DD.modifiers || zD === DD.questionToken || zD === DD.exclamationToken || AI(DD.modifiers, zD, oA) : CS(DD) ? … [truncated]
-       }
+             function Lp(ip, cp, Lp, Yp, Dp) {
+               let Wp = pp.coordsAtPos(ip, ip == Op.to ? -2 : 2),
+                 yp = pp.coordsAtPos(Lp, Lp == Op.from ? 2 : -2);
+               Wp && yp && (op = Math.min(Wp.top, yp.top, op), Sp = Math.max(Wp.bottom, yp.bottom, Sp), Dp == Ai.LTR ? xp.push(Ip && cp ? Ap : Wp.left, Ip && Yp ? Pp : yp.right) : xp.push(!Ip && Yp ? Ap : yp.left, !Ip && cp ? Pp : Wp.right))
+             }
+             let Yp = null !== ip && void 0 !== ip ? ip : Op.from,
+               Dp = null !== cp && void 0 !== cp ? cp : Op.to;
+             for (let Ip of pp.Z2)
+               if (Ip.to > Yp && Ip.from < Dp)
+                 for (let Op = Math.max(Ip.from, Yp), op = Math.min(Ip.to, Dp);;) {
+                   let Ip = pp.state.doc.lineAt(Op);
+                   for (let Sp of pp.bidiSpans(Ip)) {
+                     let pp = Sp.from + Ip.from,
+                       xp = Sp.to + Ip.from;
+                     if (pp >= op) break;
+                     xp > Op && Lp(Math.max(pp, Op), null == ip && pp <= Yp, Math.min(xp, op), null == cp && xp >= Dp, Sp.dir)
+ ... (9 more added lines; see GitHub link above)
```

#### 616. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12061-L12062` → after: `L12129-L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12129-L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12129-L12137) · [Before (L12061-L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12061-L12062)

```diff
-       function AI(DD, zD, wD) {
-         return !(!DD || ww(zD) || !wD(zD)) && XD(DD, zD)
+           function dp(pp, ip) {
+             let cp = xp.top + (ip ? pp.top : pp.bottom);
+             return {
+               top: cp,
+               bottom: cp,
+               horizontal: []
+             }
+           }
+         }(pp, ip, cp)
```

#### 617. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12065-L12069` → after: `L12141-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12141-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12141-L12145) · [Before (L12065-L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12065-L12069)

```diff
-       function UI(DD, zD, wD) {
-         if (void 0 === zD || 0 === zD.length) return DD;
-         let pD = 0;
-         for (; pD < DD.length && wD(DD[pD]); ++pD);
-         return DD.splice(pD, 0, ...zD), DD
+     function Zo(pp) {
+       let ip = pp.scrollDOM.getBoundingClientRect();
+       return {
+         left: (pp.textDirection == Ai.LTR ? ip.left : ip.right - pp.scrollDOM.clientWidth * pp.scaleX) - pp.scrollDOM.scrollLeft * pp.scaleX,
+         top: ip.top - pp.scrollDOM.scrollTop * pp.scaleY
```

#### 618. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12072-L12076` → after: `L12149-L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12149-L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12149-L12164) · [Before (L12072-L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12072-L12076)

```diff
-       function fI(DD, zD, wD) {
-         if (void 0 === zD) return DD;
-         let pD = 0;
-         for (; pD < DD.length && wD(DD[pD]); ++pD);
-         return DD.splice(pD, 0, zD), DD
+     function zo(pp, ip, cp, Op) {
+       let op = pp.coordsAtPos(ip, 2 * cp);
+       if (!op) return Op;
+       let Ip = pp.dom.getBoundingClientRect(),
+         Sp = (op.top + op.bottom) / 2,
+         xp = pp.posAtCoords({
+           x: Ip.left + 1,
+           y: Sp
+         }),
+         Lp = pp.posAtCoords({
+           x: Ip.right - 1,
+           y: Sp
+         });
+       return null == xp || null == Lp ? Op : {
+         from: Math.max(Op.from, Math.min(xp, Lp)),
+         to: Math.min(Op.to, Math.max(xp, Lp))
```

#### 619. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12078-L12080` → after: `L12166-L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12166-L12172) · [Before (L12078-L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12078-L12080)

```diff
- 
-       function II(DD) {
-         return YB(DD) || !!(2097152 & iI(DD))
+     }
+     class so {
+       constructor(pp, ip) {
+         this.view = pp, this.layer = ip, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
+           read: this.measure.bind(this),
+           write: this.draw.bind(this)
+         }, this.dom = pp.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ip.above && this.dom.classList.add("cm-layer-above"), ip.class && this.dom.classList.add(ip.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this. … [truncated]
```

#### 620. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12082-L12084` → after: `L12174-L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12174-L12175) · [Before (L12082-L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12082-L12084)

```diff
- 
-       function BI(DD, zD) {
-         return UI(DD, zD, YB)
+       update(pp) {
+         pp.startState.facet(Ko) != pp.state.facet(Ko) && this.setOrder(pp.state), (this.layer.update(pp, this.dom) || pp.geometryChanged) && (this.scale(), pp.view.requestMeasure(this.measureReq))
```

#### 621. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12086-L12088` → after: `L12177-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12177-L12178) · [Before (L12086-L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12086-L12088)

```diff
- 
-       function GI(DD, zD) {
-         return UI(DD, zD, II)
+       docViewUpdate(pp) {
+         !1 !== this.layer.updateOnDocViewUpdate && pp.requestMeasure(this.measureReq)
```

#### 622. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12090-L12092` → after: `L12180-L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12180-L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12180-L12184) · [Before (L12090-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12090-L12092)

```diff
- 
-       function hI(DD, zD) {
-         return fI(DD, zD, YB)
+       setOrder(pp) {
+         let ip = 0,
+           cp = pp.facet(Ko);
+         for (; ip < cp.length && cp[ip] != this.layer;) ip++;
+         this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ip)
```

#### 623. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12094-L12096` → after: `L12186-L12187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12186-L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12186-L12187) · [Before (L12094-L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12094-L12096)

```diff
- 
-       function nI(DD, zD) {
-         return fI(DD, zD, II)
+       measure() {
+         return this.layer.markers(this.view)
```

#### 624. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12098-L12102` → after: `L12189-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12189-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12189-L12208) · [Before (L12098-L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12098-L12102)

```diff
- 
-       function MI(DD, zD, wD) {
-         if (47 === DD.charCodeAt(zD + 1) && zD + 2 < wD && 47 === DD.charCodeAt(zD + 2)) {
-           const pD = DD.substring(zD, wD);
-           return !!(sG.test(pD) || LG.test(pD) || cG.test(pD) || KG.test(pD) || rG.test(pD) || gG.test(pD))
+       scale() {
+         let {
+           scaleX: pp,
+           scaleY: ip
+         } = this.view;
+         pp == this.scaleX && ip == this.scaleY || (this.scaleX = pp, this.scaleY = ip, this.dom.style.transform = `scale(${1/pp}, ${1/ip})`)
+       }
+       draw(pp) {
+         if (pp.length != this.drawn.length || pp.some(((pp, ip) => {
+             return cp = pp, Op = this.drawn[ip], !(cp.constructor == Op.constructor && cp.eq(Op));
+             var cp, Op
+           }))) {
+           let ip = this.dom.firstChild,
+             cp = 0;
+           for (let Op of pp) Op.update && ip && Op.constructor && this.drawn[cp].constructor && Op.update(ip, this.drawn[cp]) ? (ip = ip.nextSibling, cp++) : this.dom.insertBefore(Op.draw(), ip);
+           for (; ip;) {
+ ... (4 more added lines; see GitHub link above)
```

#### 625. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12106-L12108` → after: `L12211-L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12211-L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12211-L12212) · [Before (L12106-L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12106-L12108)

```diff
- 
-       function OI(DD, zD) {
-         return 42 === DD.charCodeAt(zD + 1) && 33 === DD.charCodeAt(zD + 2)
+       destroy() {
+         this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
```

#### 626. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12111-L12121` → after: `L12217-L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12217-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12217-L12359) · [Before (L12111-L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12111-L12121)

```diff
-       function JI(DD, zD) {
-         const wD = new Map(zD.map((zD => [`${cc(DD,zD.range.end).line}`, zD]))),
-           pD = new Map;
-         return {
-           getUnusedExpectations: function() {
-             return Nz(wD.entries()).filter((DD => {
-               let [zD, wD] = DD;
-               return 0 === wD.type && !pD.get(zD)
-             })).map((DD => {
-               let [zD, wD] = DD;
-               return wD
+     function Vo(pp) {
+       return [Vi.define((ip => new so(ip, pp))), Ko.of(pp)]
+     }
+     const pI = Op.o.define({
+       combine: pp => (0, Op.P)(pp, {
+         cursorBlinkRate: 1200,
+         drawRangeCursor: !0,
+         iosSelectionHandles: !0
+       }, {
+         cursorBlinkRate: (pp, ip) => Math.min(pp, ip),
+         drawRangeCursor: (pp, ip) => pp || ip
+       })
+     });
+ 
+     function iI() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+ ... (127 more added lines; see GitHub link above)
```

#### 627. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12124-L12126` → after: `L12362-L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12362-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12362-L12369) · [Before (L12124-L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12124-L12126)

```diff
-           markUsed: function(DD) {
-             if (!wD.has(`${DD}`)) return !1;
-             return pD.set(`${DD}`, !0), !0
+           dragleave(pp) {
+             pp.target != this.view.contentDOM && this.view.contentDOM.contains(pp.relatedTarget) || this.setDropPos(null)
+           },
+           dragend() {
+             this.setDropPos(null)
+           },
+           drop() {
+             this.setDropPos(null)
```

#### 628. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12129` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12372) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12129)

```diff
-       }
+       });
```

#### 629. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12131-L12138` → after: `L12374-L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12374-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12374-L12401) · [Before (L12131-L12138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12131-L12138)

```diff
-       function EI(DD, zD, wD) {
-         if (cI(DD)) return DD.pos;
-         if (Df(DD) || 12 === DD.kind) return nc((zD ?? DI(DD)).text, DD.pos, !1, !0);
-         if (wD && Kf(DD)) return EI(DD.jsDoc[0], zD);
-         if (353 === DD.kind) {
-           zD ?? (zD = DI(DD));
-           const pD = hz(Ci(DD, zD));
-           if (pD) return EI(pD, zD, wD)
+     function DI() {
+       return [LI, YI]
+     }
+ 
+     function AI(pp, ip, cp, Op, op) {
+       ip.lastIndex = 0;
+       for (let Ip, Sp = pp.iterRange(cp, Op), xp = cp; !Sp.next().done; xp += Sp.value.length)
+         if (!Sp.lineBreak)
+           for (; Ip = ip.exec(Sp.value);) op(xp + Ip.index, Ip)
+     }
+     class PI {
+       constructor(pp) {
+         const {
+           regexp: ip,
+           decoration: cp,
+           decorate: Op,
+ ... (12 more added lines; see GitHub link above)
```

#### 630. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12140` → after: `L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12403) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12140)

```diff
-         return nc((zD ?? DI(DD)).text, DD.pos, !1, !1, Mh(DD))
+         this.boundary = op, this.maxLength = Ip
```

#### 631. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12142-L12145` → after: `L12405-L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12405-L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12405-L12427) · [Before (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12142-L12145)

```diff
- 
-       function QI(DD, zD) {
-         const wD = !cI(DD) && wW(DD) ? JD(DD.modifiers, mb) : void 0;
-         return wD ? nc((zD || DI(DD)).text, wD.end) : EI(DD, zD)
+       createDeco(pp) {
+         let ip = new Op.w,
+           cp = ip.add.bind(ip);
+         for (let {
+             from: Op,
+             to: op
+           }
+           of
+           function(pp, ip) {
+             let cp = pp.Z2;
+             if (1 == cp.length && cp[0].from == pp.viewport.from && cp[0].to == pp.viewport.to) return cp;
+             let Op = [];
+             for (let {
+                 from: op,
+                 to: Ip
+               }
+ ... (7 more added lines; see GitHub link above)
```

#### 632. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12147-L12150` → after: `L12429-L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12429-L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12429-L12470) · [Before (L12147-L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12147-L12150)

```diff
- 
-       function XI(DD, zD) {
-         const wD = !cI(DD) && wW(DD) && DD.modifiers ? Ez(DD.modifiers) : void 0;
-         return wD ? nc((zD || DI(DD)).text, wD.end) : EI(DD, zD)
+       updateDeco(pp, ip) {
+         let cp = 1e9,
+           Op = -1;
+         return pp.docChanged && pp.changes.iterChanges(((ip, op, Ip, Sp) => {
+           Sp >= pp.view.viewport.from && Ip <= pp.view.viewport.to && (cp = Math.min(Ip, cp), Op = Math.max(Sp, Op))
+         })), pp.viewportMoved || Op - cp > 1e3 ? this.createDeco(pp.view) : Op > -1 ? this.updateRange(pp.view, ip.map(pp.changes), cp, Op) : ip
+       }
+       updateRange(pp, ip, cp, Op) {
+         for (let op of pp.Z2) {
+           let Ip = Math.max(op.from, cp),
+             Sp = Math.min(op.to, Op);
+           if (Sp >= Ip) {
+             let cp = pp.state.doc.lineAt(Ip),
+               Op = cp.to < Sp ? pp.state.doc.lineAt(Sp) : cp,
+               xp = Math.max(op.from, cp.from),
+               Lp = Math.min(op.to, Op.to);
+ ... (26 more added lines; see GitHub link above)
```

#### 633. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12152-L12155` → after: `L12472-L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12472-L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12472-L12513) · [Before (L12152-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12152-L12155)

```diff
- 
-       function VI(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         return bI(DD.text, zD, wD)
+     }
+     const WI = null != /x/.unicode ? "gu" : "g",
+       yI = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", WI),
+       UI = {
+         0: "null",
+         7: "bell",
+         8: "backspace",
+         10: "newline",
+         11: "vertical tab",
+         13: "carriage return",
+         27: "escape",
+         8203: "zero width space",
+         8204: "zero width non-joiner",
+         8205: "zero width joiner",
+         8206: "left-to-right mark",
+         8207: "right-to-left mark",
+ ... (26 more added lines; see GitHub link above)
```

#### 634. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12158-L12159` → after: `L12517-L12569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12517-L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12517-L12569) · [Before (L12158-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12158-L12159)

```diff
-       function PI(DD) {
-         return !!(wS(DD) && DD.exportClause && Hd(DD.exportClause) && TI(DD.exportClause.name))
+     function tI() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       return [vI.of(pp), HI || (HI = Vi.fromClass(class {
+         constructor(pp) {
+           this.view = pp, this.uO = lp.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(pp.state.facet(vI)), this.uO = this.decorator.createDeco(pp)
+         }
+         makeDecorator(pp) {
+           return new PI({
+             regexp: pp.specialChars,
+             decoration: (ip, cp, op) => {
+               let {
+                 doc: Ip
+               } = cp.state, Sp = (0, Op.J)(ip[0], 0);
+               if (9 == Sp) {
+                 let pp = Ip.lineAt(op),
+                   ip = cp.state.tabSize,
+ ... (37 more added lines; see GitHub link above)
```

#### 635. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12161-L12163` → after: `L12571-L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12571-L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12571-L12572) · [Before (L12161-L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12161-L12163)

```diff
- 
-       function CI(DD) {
-         return 11 === DD.kind ? DD.text : Zg(DD.escapedText)
+       ignoreEvent() {
+         return !1
```

#### 636. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12165-L12167` → after: `L12574-L12577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12574-L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12574-L12577) · [Before (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12165-L12167)

```diff
- 
-       function xI(DD) {
-         return 11 === DD.kind ? Ng(DD.text) : DD.escapedText
+     }
+     class eI extends Ep {
+       constructor(pp) {
+         super(), this.width = pp
```

#### 637. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12169-L12171` → after: `L12579-L12580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12579-L12580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12579-L12580) · [Before (L12169-L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12169-L12171)

```diff
- 
-       function TI(DD) {
-         return "default" === (11 === DD.kind ? DD.text : DD.escapedText)
+       eq(pp) {
+         return pp.width == this.width
```

#### 638. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12173-L12180` → after: `L12582-L12584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12582-L12584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12582-L12584) · [Before (L12173-L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12173-L12180)

```diff
- 
-       function bI(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (cI(zD)) return "";
-         let pD = DD.substring(wD ? zD.pos : nc(DD, zD.pos), zD.end);
-         return function(DD) {
-           return !!ig(DD, dS)
-         }(zD) && (pD = pD.split(/\r\n|\n|\r/).map((DD => DD.replace(/^\s*\*/, "").trimStart())).join("\n")), pD
+       toDOM() {
+         let pp = document.createElement("span");
+         return pp.textContent = "\t", pp.className = "cm-tab", pp.style.width = this.width + "px", pp
```

#### 639. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12182-L12185` → after: `L12586-L12587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12586-L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12586-L12587) · [Before (L12182-L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12182-L12185)

```diff
- 
-       function jI(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return VI(DI(DD), DD, zD)
+       ignoreEvent() {
+         return !1
```

#### 640. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12188-L12189` → after: `L12591-L12635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12591-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12591-L12635) · [Before (L12188-L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12188-L12189)

```diff
-       function dI(DD) {
-         return DD.pos
+     function uI() {
+       return kI
+     }
+     const jI = lp.line({
+         class: "cm-activeLine"
+       }),
+       kI = Vi.fromClass(class {
+         constructor(pp) {
+           this.uO = this.getDeco(pp)
+         }
+         update(pp) {
+           (pp.docChanged || pp.selectionSet) && (this.uO = this.getDeco(pp.view))
+         }
+         getDeco(pp) {
+           let ip = -1,
+             cp = [];
+ ... (29 more added lines; see GitHub link above)
```

#### 641. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12191-L12193` → after: `L12637-L12638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12637-L12638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12637-L12638) · [Before (L12191-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12191-L12193)

```diff
- 
-       function SI(DD, zD) {
-         return Cz(DD, zD, dI, Vw)
+       ignoreEvent() {
+         return !1
```

#### 642. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12196-L12199` → after: `L12642-L12741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12642-L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12642-L12741) · [Before (L12196-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12196-L12199)

```diff
-       function iI(DD) {
-         const zD = DD.emitNode;
-         return zD && zD.flags || 0
-       }
+     function RI(pp) {
+       let ip = Vi.fromClass(class {
+         constructor(ip) {
+           this.view = ip, this.placeholder = pp ? lp.set([lp.widget({
+             widget: new mI(pp),
+             side: 1
+           }).range(0)]) : lp.none
+         }
+         get uO() {
+           return this.view.state.doc.length ? lp.none : this.placeholder
+         }
+       }, {
+         uO: pp => pp.uO
+       });
+       return "string" == typeof pp ? [ip, Co.contentAttributes.of({
+         "aria-placeholder": pp
+ ... (84 more added lines; see GitHub link above)
```

#### 643. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12201-L12400` → after: `L12743-L12762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12743-L12762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12743-L12762) · [Before (L12201-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12201-L12400)

```diff
-       function lI(DD) {
-         const zD = DD.emitNode;
-         return zD && zD.internalFlags || 0
-       }
-       var WI = nw((() => new Map(Object.entries({
-           Array: new Map(Object.entries({
-             es2015: ["find", "findIndex", "fill", "copyWithin", "entries", "keys", "values"],
-             es2016: ["includes"],
-             es2019: ["flat", "flatMap"],
-             es2022: ["at"],
-             es2023: ["findLastIndex", "findLast", "toReversed", "toSorted", "toSpliced", "with"]
-           })),
-           Iterator: new Map(Object.entries({
-             es2015: gD
-           })),
-           AsyncIterator: new Map(Object.entries({
- ... (184 more removed lines; see GitHub link above)
+     function QI() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+         [ip, cp] = XI[pp.key || "Alt"],
+         Op = Vi.fromClass(class {
+           constructor(pp) {
+             this.view = pp, this.isDown = !1
+           }
+           set(pp) {
+             this.isDown != pp && (this.isDown = pp, this.view.update([]))
+           }
+         }, {
+           eventObservers: {
+             keydown(pp) {
+               this.set(pp.keyCode == ip || cp(pp))
+             },
+             keyup(pp) {
+ ... (4 more added lines; see GitHub link above)
```

#### 644. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12409-L12423` → after: `L12765-L12799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12765-L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12765-L12799) · [Before (L12409-L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12409-L12423)

```diff
-           case 15:
-           case 16:
-           case 17:
-           case 18: {
-             const zD = 1 & wD || 16777216 & iI(DD) ? GO : nO,
-               pD = DD.rawText ?? LO(zD(DD.text, 96));
-             switch (DD.kind) {
-               case 15:
-                 return "`" + pD + "`";
-               case 16:
-                 return "`" + pD + "${";
-               case 17:
-                 return "}" + pD + "${";
-               case 18:
-                 return "}" + pD + "`"
+         });
+       return [Op, Co.contentAttributes.of((pp => {
+         var ip;
+         return (null === (ip = pp.plugin(Op)) || void 0 === ip ? void 0 : ip.isDown) ? lI : null
+       }))]
+     }
+     const JI = "-10000px";
+     class BI {
+       constructor(pp, ip, cp, Op) {
+         this.facet = ip, this.createTooltipView = cp, this.removeTooltipView = Op, this.input = pp.state.facet(ip), this.tooltips = this.input.filter((pp => pp));
+         let op = null;
+         this.tooltipViews = this.tooltips.map((pp => op = cp(pp, op)))
+       }
+       update(pp, ip) {
+         var cp;
+         let Op = pp.state.facet(this.facet),
+ ... (19 more added lines; see GitHub link above)
```

#### 645. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12433-L12445` → after: `L12803-L12804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12803-L12804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12803-L12804) · [Before (L12433-L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12433-L12445)

```diff
-         return np.fail(`Literal kind '${DD.kind}' not accounted for.`)
-       }
- 
-       function yI(DD) {
-         return sw(DD) ? `"${GO(DD)}"` : "" + DD
-       }
- 
-       function kI(DD) {
-         return vr(DD).replace(/^(\d)/, "_$1").replace(/\W/g, "_")
-       }
- 
-       function mI(DD) {
-         return 0 !== (7 & Tg(DD)) || eI(DD)
+         for (let xp of this.tooltipViews) Ip.indexOf(xp) < 0 && (this.removeTooltipView(xp), null === (cp = xp.destroy) || void 0 === cp || cp.call(xp));
+         return ip && (Sp.forEach(((pp, cp) => ip[cp] = pp)), ip.length = Sp.length), this.input = Op, this.tooltips = op, this.tooltipViews = Ip, !0
```

#### 646. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12448-L12450` → after: `L12808-L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12808-L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L12808-L12814) · [Before (L12448-L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12448-L12450)

```diff
-       function eI(DD) {
-         const zD = uM(DD);
-         return 261 === zD.kind && 300 === zD.parent.kind
+     function NI(pp) {
+       let ip = pp.dom.ownerDocument.documentElement;
+       return {
+         top: 0,
+         left: 0,
+         bottom: ip.clientHeight,
+         right: ip.clientWidth
```

#### 647. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12453-L12454` → after: `L13006-L13084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13006-L13084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13006-L13084) · [Before (L12453-L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12453-L12454)

```diff
-       function oI(DD) {
-         return Nd(DD) && (11 === DD.name.kind || FI(DD))
+     function hI(pp, ip) {
+       let cp = parseInt(pp.style.left, 10);
+       (isNaN(cp) || Math.abs(ip - cp) > 1) && (pp.style.left = ip + "px")
+     }
+     const aI = Co.baseTheme({
+         ".cm-tooltip": {
+           zIndex: 500,
+           boxSizing: "border-box"
+         },
+         "&light .cm-tooltip": {
+           border: "1px solid #bbb",
+           backgroundColor: "#f5f5f5"
+         },
+         "&light .cm-tooltip-section:not(:first-child)": {
+           borderTop: "1px solid #bbb"
+         },
+ ... (63 more added lines; see GitHub link above)
```

#### 648. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12456-L12458` → after: `L13086-L13087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13086-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13086-L13087) · [Before (L12456-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12456-L12458)

```diff
- 
-       function aI(DD) {
-         return Nd(DD) && 11 === DD.name.kind
+       constructor(pp) {
+         this.view = pp, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new BI(pp, gI, ((pp, ip) => this.createHostedView(pp, ip)), (pp => pp.dom.remove()))
```

#### 649. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12460-L12462` → after: `L13089-L13091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13089-L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13089-L13091) · [Before (L12460-L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12460-L12462)

```diff
- 
-       function uI(DD) {
-         return Nd(DD) && Kb(DD.name)
+       createHostedView(pp, ip) {
+         let cp = pp.create(this.view);
+         return cp.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(cp.dom, ip ? ip.dom.nextSibling : this.dom.firstChild), this.mounted && cp.mount && cp.mount(this.view), cp
```

#### 650. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12464-L12467` → after: `L13093-L13095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13093-L13095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13093-L13095) · [Before (L12464-L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12464-L12467)

```diff
- 
-       function vI(DD) {
-         return !!(zD = DD.valueDeclaration) && 268 === zD.kind && !zD.body;
-         var zD
+       mount(pp) {
+         for (let ip of this.manager.tooltipViews) ip.mount && ip.mount(pp);
+         this.mounted = !0
```

#### 651. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12469-L12471` → after: `L13097-L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13097-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13097-L13098) · [Before (L12469-L12471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12469-L12471)

```diff
- 
-       function tI(DD) {
-         return 308 === DD.kind || 268 === DD.kind || jA(DD)
+       positioned(pp) {
+         for (let ip of this.manager.tooltipViews) ip.positioned && ip.positioned(pp)
```

#### 652. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12473-L12475` → after: `L13100-L13101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13100-L13101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13100-L13101) · [Before (L12473-L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12473-L12475)

```diff
- 
-       function FI(DD) {
-         return !!(2048 & DD.flags)
+       update(pp) {
+         this.manager.update(pp)
```

#### 653. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12477-L12479` → after: `L13103-L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13103-L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13103-L13105) · [Before (L12477-L12479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12477-L12479)

```diff
- 
-       function YI(DD) {
-         return oI(DD) && HI(DD)
+       destroy() {
+         var pp;
+         for (let ip of this.manager.tooltipViews) null === (pp = ip.destroy) || void 0 === pp || pp.call(ip)
```

#### 654. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12481-L12487` → after: `L13107-L13113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13107-L13113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13107-L13113) · [Before (L12481-L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12481-L12487)

```diff
- 
-       function HI(DD) {
-         switch (DD.parent.kind) {
-           case 308:
-             return NW(DD.parent);
-           case 269:
-             return oI(DD.parent.parent) && bS(DD.parent.parent.parent) && !NW(DD.parent.parent.parent)
+       passProp(pp) {
+         let ip;
+         for (let cp of this.manager.tooltipViews) {
+           let Op = cp[pp];
+           if (void 0 !== Op)
+             if (void 0 === ip) ip = Op;
+             else if (ip !== Op) return
```

#### 655. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12489` → after: `L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13115) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12489)

```diff
-         return !1
+         return ip
```

#### 656. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12491-L12494` → after: `L13117-L13118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13117-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13117-L13118) · [Before (L12491-L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12491-L12494)

```diff
- 
-       function qI(DD) {
-         var zD;
-         return null == (zD = DD.declarations) ? void 0 : zD.find((DD => !YI(DD) && !(Nd(DD) && FI(DD))))
+       get offset() {
+         return this.passProp("offset")
```

#### 657. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12496-L12499` → after: `L13120-L13121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13120-L13121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13120-L13121) · [Before (L12496-L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12496-L12499)

```diff
- 
-       function DB(DD, zD) {
-         return NW(DD) || (1 === (wD = QX(zD)) || 100 <= wD && wD <= 199) && !!DD.commonJsModuleIndicator;
-         var wD
+       get getCoords() {
+         return this.passProp("getCoords")
```

#### 658. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12501-L12512` → after: `L13123-L13124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13123-L13124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13123-L13124) · [Before (L12501-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12501-L12512)

```diff
- 
-       function zB(DD, zD) {
-         switch (DD.scriptKind) {
-           case 1:
-           case 3:
-           case 2:
-           case 4:
-             break;
-           default:
-             return !1
-         }
-         return !DD.isDeclarationFile && (!!aX(zD, "alwaysStrict") || (!!Fi(DD.statements) || !(!NW(DD) && !PX(zD))))
+       get overlap() {
+         return this.passProp("overlap")
```

#### 659. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12514-L12516` → after: `L13126-L13127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13126-L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13126-L13127) · [Before (L12514-L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12514-L12516)

```diff
- 
-       function wB(DD) {
-         return !!(33554432 & DD.flags) || VJ(DD, 128)
+       get resize() {
+         return this.passProp("resize")
```

#### 660. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12518-L12541` → after: `L13129-L13192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13129-L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13129-L13192) · [Before (L12518-L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12518-L12541)

```diff
- 
-       function pB(DD, zD) {
-         switch (DD.kind) {
-           case 308:
-           case 270:
-           case 300:
-           case 268:
-           case 249:
-           case 250:
-           case 251:
-           case 177:
-           case 175:
-           case 178:
-           case 179:
-           case 263:
-           case 219:
- ... (8 more removed lines; see GitHub link above)
+     }
+     const rI = FI.compute([gI], (pp => {
+       let ip = pp.facet(gI);
+       return 0 === ip.length ? null : {
+         pos: Math.min(...ip.map((pp => pp.pos))),
+         end: Math.max(...ip.map((pp => {
+           var ip;
+           return null !== (ip = pp.end) && void 0 !== ip ? ip : pp.pos
+         }))),
+         create: GI.create,
+         above: ip[0].above,
+         arrow: ip.some((pp => pp.arrow))
+       }
+     }));
+     class ZI {
+       constructor(pp, ip, cp, Op, op) {
+ ... (48 more added lines; see GitHub link above)
```

#### 661. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12543-L12552` → after: `L13194-L13197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13194-L13197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13194-L13197) · [Before (L12543-L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12543-L12552)

```diff
- 
-       function sB(DD) {
-         switch (np.type(DD), DD.kind) {
-           case 339:
-           case 347:
-           case 324:
-             return !0;
-           default:
-             return KB(DD)
-         }
+       get tooltip() {
+         let pp = this.view.plugin(bI),
+           ip = pp ? pp.manager.tooltips.findIndex((pp => pp.create == GI.create)) : -1;
+         return ip > -1 ? pp.manager.tooltipViews[ip] : null
```

#### 662. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12554-L12578` → after: `L13199-L13238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13199-L13238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13199-L13238) · [Before (L12554-L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12554-L12578)

```diff
- 
-       function KB(DD) {
-         switch (np.type(DD), DD.kind) {
-           case 180:
-           case 181:
-           case 174:
-           case 182:
-           case 185:
-           case 186:
-           case 318:
-           case 264:
-           case 232:
-           case 265:
-           case 266:
-           case 346:
-           case 263:
- ... (9 more removed lines; see GitHub link above)
+       mousemove(pp) {
+         var ip, cp;
+         this.lastMove = {
+           x: pp.clientX,
+           y: pp.clientY,
+           target: pp.target,
+           time: Date.now()
+         }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
+         let {
+           active: Op,
+           tooltip: op
+         } = this;
+         if (Op.length && op && ! function(pp, ip) {
+             let cp, {
+               left: Op,
+               right: op,
+ ... (24 more added lines; see GitHub link above)
```

#### 663. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12581-L12588` → after: `L13241-L13252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13241-L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13241-L13252) · [Before (L12581-L12588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12581-L12588)

```diff
- 
-       function rB(DD) {
-         switch (DD.kind) {
-           case 273:
-           case 272:
-             return !0;
-           default:
-             return !1
+       mouseleave(pp) {
+         clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
+         let {
+           active: ip
+         } = this;
+         if (ip.length) {
+           let {
+             tooltip: ip
+           } = this;
+           ip && ip.dom.contains(pp.relatedTarget) ? this.watchTooltipLeave(ip.dom) : this.view.dispatch({
+             effects: this.setHover.of([])
+           })
```

#### 664. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12591-L12593` → after: `L13255-L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13255-L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13255-L13261) · [Before (L12591-L12593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12591-L12593)

```diff
- 
-       function LB(DD) {
-         return rB(DD) || Qh(DD)
+       watchTooltipLeave(pp) {
+         let ip = cp => {
+           pp.removeEventListener("mouseleave", ip), this.active.length && !this.view.dom.contains(cp.relatedTarget) && this.view.dispatch({
+             effects: this.setHover.of([])
+           })
+         };
+         pp.addEventListener("mouseleave", ip)
```

#### 665. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12595-L12597` → after: `L13263-L13264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13263-L13264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13263-L13264) · [Before (L12595-L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12595-L12597)

```diff
- 
-       function cB(DD) {
-         return rB(DD) || Ph(DD)
+       destroy() {
+         clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
```

#### 666. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12600-L12614` → after: `L13269-L13344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13269-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13269-L13344) · [Before (L12600-L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12600-L12614)

```diff
-       function gB(DD) {
-         switch (DD.kind) {
-           case 273:
-           case 272:
-           case 244:
-           case 264:
-           case 263:
-           case 268:
-           case 266:
-           case 265:
-           case 267:
-             return !0;
-           default:
-             return !1
-         }
+     function sI(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         cp = Op.C.define(),
+         op = Op.E.define({
+           create: () => [],
+           update(pp, op) {
+             if (pp.length && (ip.hideOnChange && (op.docChanged || op.selection) ? pp = [] : ip.hideOn && (pp = pp.filter((pp => !ip.hideOn(op, pp)))), op.docChanged)) {
+               let ip = [];
+               for (let cp of pp) {
+                 let pp = op.changes.mapPos(cp.pos, -1, Op.r.TrackDel);
+                 if (null != pp) {
+                   let Op = Object.assign(Object.create(null), cp);
+                   Op.pos = pp, null != Op.end && (Op.end = op.changes.mapPos(Op.end)), ip.push(Op)
+                 }
+               }
+               pp = ip
+ ... (60 more added lines; see GitHub link above)
```

#### 667. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12616-L12618` → after: `L13346-L13347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13346-L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13346-L13347) · [Before (L12616-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12616-L12618)

```diff
- 
-       function RB(DD) {
-         return AB(DD) || Nd(DD) || Ej(DD) || vB(DD)
+       destroy() {
+         this.top.sync([]), this.bottom.sync([])
```

#### 668. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12621-L12622` → after: `L13431-L13457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13431-L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13431-L13457) · [Before (L12621-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12621-L12622)

```diff
-       function AB(DD) {
-         return rB(DD) || wS(DD)
+           function Sp(ip) {
+             Ip.contains(Ip.ownerDocument.activeElement) && pp.focus(), cp(ip)
+           }
+           return Ip.classList.add("cm-dialog"), {
+             dom: Ip,
+             top: ip.top,
+             mount: () => {
+               if (ip.focus) {
+                 let pp;
+                 pp = "string" == typeof ip.focus ? Op.querySelector(ip.focus) : Op.querySelector("input") || Op.querySelector("button"), pp && "select" in pp ? pp.select() : pp && "focus" in pp && pp.focus()
+               }
+             }
+           }
+         }(pp, ip, cp);
+       pp.state.field(xS, !1) ? pp.dispatch({
+         effects: LS.of(Ip)
+ ... (11 more added lines; see GitHub link above)
```

#### 669. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12624-L12626` → after: `L13459-L13472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13459-L13472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13459-L13472) · [Before (L12624-L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12624-L12626)

```diff
- 
-       function UB(DD) {
-         return ig(DD.parent, (DD => !!(1 & Fm(DD))))
+     }
+     const xS = Op.E.define({
+         create: () => [],
+         update(pp, ip) {
+           for (let cp of ip.effects) cp.is(LS) ? pp = [cp.value].concat(pp) : cp.is(YS) && (pp = pp.filter((pp => pp != cp.value)));
+           return pp
+         },
+         provide: pp => IS.computeN([pp], (ip => ip.field(pp)))
+       }),
+       LS = Op.C.define(),
+       YS = Op.C.define();
+     class DS extends Op.B {
+       compare(pp) {
+         return this == pp || this.constructor == pp.constructor && this.eq(pp)
```

#### 670. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12628-L12630` → after: `L13474-L13475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13474-L13475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13474-L13475) · [Before (L12628-L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12628-L12630)

```diff
- 
-       function fB(DD) {
-         return ig(DD.parent, (DD => pB(DD, DD.parent)))
+       eq(pp) {
+         return !1
```

#### 671. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12633-L12635` → after: `L13497-L13574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13497-L13574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13497-L13574) · [Before (L12633-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12633-L12635)

```diff
-       function IB(DD, zD) {
-         let wD = fB(DD);
-         for (; wD;) zD(wD), wD = fB(wD)
+     function US(pp) {
+       return [vS(), yS.of({
+         ...WS,
+         ...pp
+       })]
+     }
+     const wS = Op.o.define({
+       combine: pp => pp.some((pp => pp))
+     });
+ 
+     function vS(pp) {
+       let ip = [tS];
+       return pp && !1 === pp.fixed && ip.push(wS.of(!0)), ip
+     }
+     const tS = Vi.fromClass(class {
+       constructor(pp) {
+ ... (62 more added lines; see GitHub link above)
```

#### 672. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12638-L12640` → after: `L13596-L13598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13596-L13598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13596-L13598) · [Before (L12638-L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12638-L12640)

```diff
-       function BB(DD) {
-         return DD && 0 !== kf(DD) ? jI(DD) : "(Missing)"
-       }
+     function HS(pp) {
+       return Array.isArray(pp) ? pp : [pp]
+     }
```

#### 673. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12642-L12643` → after: `L13600-L13605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13600-L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13600-L13605) · [Before (L12642-L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12642-L12643)

```diff
-       function GB(DD) {
-         return DD.declaration ? BB(DD.declaration.parameters[0].name) : void 0
+     function dS(pp, ip, cp) {
+       for (; pp.value && pp.from <= cp;) pp.from == cp && ip.push(pp.value), pp.next()
+     }
+     class eS {
+       constructor(pp, ip, cp) {
+         this.gutter = pp, this.height = cp, this.i = 0, this.cursor = Op.A.iter(pp.markers, ip.from)
```

#### 674. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12645-L12647` → after: `L13607-L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13607-L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13607-L13655) · [Before (L12645-L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12645-L12647)

```diff
- 
-       function hB(DD) {
-         return 168 === DD.kind && !TM(DD.expression)
+       addElement(pp, ip, cp) {
+         let {
+           gutter: Op
+         } = this, op = (ip.top - this.height) / pp.scaleY, Ip = ip.height / pp.scaleY;
+         if (this.i == Op.elements.length) {
+           let ip = new jS(pp, Ip, op, cp);
+           Op.elements.push(ip), Op.dom.appendChild(ip.dom)
+         } else Op.elements[this.i].update(pp, Ip, op, cp);
+         this.height = ip.bottom, this.i++
+       }
+       line(pp, ip, cp) {
+         let Op = [];
+         dS(this.cursor, Op, ip.from), cp.length && (Op = Op.concat(cp));
+         let op = this.gutter.config.lineMarker(pp, ip, Op);
+         op && Op.unshift(op);
+         let Ip = this.gutter;
+ ... (33 more added lines; see GitHub link above)
```
