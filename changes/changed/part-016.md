# Changed — Bundle Modifications Report (Part 016 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `16 / 56` (**298** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (177 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 7. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2311-L2316` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L141-L142) · [Before (L2311-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2311-L2316)

```diff
- 
-       function vp(pp, ip, cp) {
-         const Op = [];
-         dO.assertEqual(pp.length, ip.length);
-         for (let op = 0; op < pp.length; op++) Op.push(cp(pp[op], ip[op], op));
-         return Op
+       iter() {
+         return new GQ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2318-L2323` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L144-L146) · [Before (L2318-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2318-L2323)

```diff
- 
-       function tp(pp, ip) {
-         if (pp.length <= 1) return pp;
-         const cp = [];
-         for (let Op = 0, op = pp.length; Op < op; Op++) 0 !== Op && cp.push(ip), cp.push(pp[Op]);
-         return cp
+       iterRange(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
+         return new UQ(this, QQ, WQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2325-L2330` → after: `L148-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L148-L156) · [Before (L2325-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2325-L2330)

```diff
- 
-       function Hp(pp, ip) {
-         if (void 0 !== pp)
-           for (let cp = 0; cp < pp.length; cp++)
-             if (!ip(pp[cp], cp)) return !1;
-         return !0
+       iterLines(QQ, WQ) {
+         let XQ;
+         if (null == QQ) XQ = this.iter();
+         else {
+           null == WQ && (WQ = this.lines + 1);
+           let wQ = this.line(QQ).from;
+           XQ = this.iterRange(wQ, Math.max(wQ, WQ == this.lines + 1 ? this.length : WQ <= 1 ? 0 : this.line(WQ - 1).to))
+         }
+         return new bQ(XQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2332-L2338` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L158-L159) · [Before (L2332-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2332-L2338)

```diff
- 
-       function dp(pp, ip, cp) {
-         if (void 0 !== pp)
-           for (let Op = cp ?? 0; Op < pp.length; Op++) {
-             const cp = pp[Op];
-             if (ip(cp, Op)) return cp
-           }
+       toString() {
+         return this.sliceString(0)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2340-L2346` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L161-L163) · [Before (L2340-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2340-L2346)

```diff
- 
-       function ep(pp, ip, cp) {
-         if (void 0 !== pp)
-           for (let Op = cp ?? pp.length - 1; Op >= 0; Op--) {
-             const cp = pp[Op];
-             if (ip(cp, Op)) return cp
-           }
+       toJSON() {
+         let QQ = [];
+         return this.flatten(QQ), QQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2348-L2353` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L165-L168) · [Before (L2348-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2348-L2353)

```diff
- 
-       function jp(pp, ip, cp) {
-         if (void 0 === pp) return -1;
-         for (let Op = cp ?? 0; Op < pp.length; Op++)
-           if (ip(pp[Op], Op)) return Op;
-         return -1
+       constructor() {}
+       static of (QQ) {
+         if (0 == QQ.length) throw new RangeError("A document must have at least one line");
+         return 1 != QQ.length || QQ[0] ? QQ.length <= 32 ? new yQ(QQ) : VQ.from(yQ.split(QQ, [])) : BQ.empty
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2355-L2360` → after: `L170-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L170-L178) · [Before (L2355-L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2355-L2360)

```diff
- 
-       function kp(pp, ip, cp) {
-         if (void 0 === pp) return -1;
-         for (let Op = cp ?? pp.length - 1; Op >= 0; Op--)
-           if (ip(pp[Op], Op)) return Op;
-         return -1
+     }
+     class yQ extends BQ {
+       constructor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(QQ) {
+           let WQ = -1;
+           for (let XQ of QQ) WQ += XQ.length + 1;
+           return WQ
+         }(QQ);
+         super(), this.text = QQ, this.length = WQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2362-L2368` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L180-L181) · [Before (L2362-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2362-L2368)

```diff
- 
-       function mp(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++)
-             if (cp(pp[Op], ip)) return !0;
-         return !1
+       get lines() {
+         return this.text.length
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2370-L2374` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L183-L184) · [Before (L2370-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2370-L2374)

```diff
- 
-       function Rp(pp, ip, cp) {
-         for (let Op = cp ?? 0; Op < pp.length; Op++)
-           if (mp(ip, pp.charCodeAt(Op))) return Op;
-         return -1
+       get children() {
+         return null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2376-L2383` → after: `L186-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L186-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L186-L192) · [Before (L2376-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2376-L2383)

```diff
- 
-       function qp(pp, ip) {
-         let cp = 0;
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             ip(pp[Op], Op) && cp++
-           }
-         return cp
+       lineInner(QQ, WQ, XQ, wQ) {
+         for (let qQ = 0;; qQ++) {
+           let TQ = this.text[qQ],
+             zQ = wQ + TQ.length;
+           if ((WQ ? XQ : zQ) >= QQ) return new vQ(wQ, zQ, XQ, TQ);
+           wQ = zQ + 1, XQ++
+         }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2385-L2398` → after: `L194-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L194-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L194-L221) · [Before (L2385-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2385-L2398)

```diff
- 
-       function Mp(pp, ip) {
-         if (void 0 !== pp) {
-           const cp = pp.length;
-           let Op = 0;
-           for (; Op < cp && ip(pp[Op]);) Op++;
-           if (Op < cp) {
-             const op = pp.slice(0, Op);
-             for (Op++; Op < cp;) {
-               const cp = pp[Op];
-               ip(cp) && op.push(cp), Op++
-             }
-             return op
-           }
+       decompose(QQ, WQ, XQ, wQ) {
+         let qQ = QQ <= 0 && WQ >= this.length ? this : new yQ(pQ(this.text, QQ, WQ), Math.min(WQ, this.length) - Math.max(0, QQ));
+         if (1 & wQ) {
+           let QQ = XQ.pop(),
+             WQ = DQ(qQ.text, QQ.text.slice(), 0, qQ.length);
+           if (WQ.length <= 32) XQ.push(new yQ(WQ, QQ.length + qQ.length));
+           else {
+             let QQ = WQ.length >> 1;
+             XQ.push(new yQ(WQ.slice(0, QQ)), new yQ(WQ.slice(QQ)))
+           }
+         } else XQ.push(qQ)
+       }
+       replace(QQ, WQ, XQ) {
+         if (!(XQ instanceof yQ)) return super.replace(QQ, WQ, XQ);
+         [QQ, WQ] = dQ(this, QQ, WQ);
+         let wQ = DQ(this.text, DQ(XQ.text, pQ(this.text, 0, QQ)), WQ),
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2402-L2406` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L225-L226) · [Before (L2402-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2402-L2406)

```diff
- 
-       function Cp(pp, ip) {
-         let cp = 0;
-         for (let Op = 0; Op < pp.length; Op++) ip(pp[Op], Op, pp) && (pp[cp] = pp[Op], cp++);
-         pp.length = cp
+       flatten(QQ) {
+         for (let WQ of this.text) QQ.push(WQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2408-L2410` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L228-L229) · [Before (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2408-L2410)

```diff
- 
-       function Ep(pp) {
-         pp.length = 0
+       scanIdentical() {
+         return 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2412-L2417` → after: `L231-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L231-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L231-L260) · [Before (L2412-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2412-L2417)

```diff
- 
-       function Xp(pp, ip) {
-         let cp;
-         if (void 0 !== pp) {
-           cp = [];
-           for (let Op = 0; Op < pp.length; Op++) cp.push(ip(pp[Op], Op))
+       static split(QQ, WQ) {
+         let XQ = [],
+           wQ = -1;
+         for (let qQ of QQ) XQ.push(qQ), wQ += qQ.length + 1, 32 == XQ.length && (WQ.push(new yQ(XQ, wQ)), XQ = [], wQ = -1);
+         return wQ > -1 && WQ.push(new yQ(XQ, wQ)), WQ
+       }
+     }
+     class VQ extends BQ {
+       constructor(QQ, WQ) {
+         super(), this.children = QQ, this.length = WQ, this.lines = 0;
+         for (let XQ of QQ) this.lines += XQ.lines
+       }
+       lineInner(QQ, WQ, XQ, wQ) {
+         for (let qQ = 0;; qQ++) {
+           let TQ = this.children[qQ],
+             zQ = wQ + TQ.length,
+ ... (14 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2425-L2434` → after: `L263-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L263-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L263-L275) · [Before (L2425-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2425-L2434)

```diff
- 
-       function Qp(pp, ip) {
-         if (void 0 !== pp)
-           for (let cp = 0; cp < pp.length; cp++) {
-             const Op = pp[cp],
-               op = ip(Op, cp);
-             if (Op !== op) {
-               const Op = pp.slice(0, cp);
-               for (Op.push(op), cp++; cp < pp.length; cp++) Op.push(ip(pp[cp], cp));
-               return Op
+       replace(QQ, WQ, XQ) {
+         if ([QQ, WQ] = dQ(this, QQ, WQ), XQ.lines < this.lines)
+           for (let wQ = 0, qQ = 0; wQ < this.children.length; wQ++) {
+             let TQ = this.children[wQ],
+               zQ = qQ + TQ.length;
+             if (QQ >= qQ && WQ <= zQ) {
+               let sQ = TQ.replace(QQ - qQ, WQ - qQ, XQ),
+                 FQ = this.lines - TQ.lines + sQ.lines;
+               if (sQ.lines < FQ >> 4 && sQ.lines > FQ >> 6) {
+                 let qQ = this.children.slice();
+                 return qQ[wQ] = sQ, new VQ(qQ, this.length - (WQ - QQ) + XQ.length)
+               }
+               return super.replace(qQ, zQ, sQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2437` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L279) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2437)

```diff
-         return pp
+         return super.replace(QQ, WQ, XQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2439-L2444` → after: `L281-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L281-L289) · [Before (L2439-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2439-L2444)

```diff
- 
-       function Jp(pp) {
-         const ip = [];
-         for (let cp = 0; cp < pp.length; cp++) {
-           const Op = pp[cp];
-           Op && (Ic(Op) ? Pi(ip, Op) : ip.push(Op))
+       sliceString(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
+         [QQ, WQ] = dQ(this, QQ, WQ);
+         let wQ = "";
+         for (let qQ = 0, TQ = 0; qQ < this.children.length && TQ <= WQ; qQ++) {
+           let zQ = this.children[qQ],
+             sQ = TQ + zQ.length;
+           TQ > QQ && qQ && (wQ += XQ), QQ < sQ && WQ > TQ && (wQ += zQ.sliceString(QQ - TQ, WQ - TQ, XQ)), TQ = sQ + 1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2448-L2456` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L293-L294) · [Before (L2448-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2448-L2456)

```diff
- 
-       function Bp(pp, ip) {
-         let cp;
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             const op = ip(pp[Op], Op);
-             op && (cp = Ic(op) ? Pi(cp, op) : Yi(cp, op))
-           }
-         return cp ?? Yp
+       flatten(QQ) {
+         for (let WQ of this.children) WQ.flatten(QQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2458-L2466` → after: `L296-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L296-L306) · [Before (L2458-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2458-L2466)

```diff
- 
-       function Np(pp, ip) {
-         const cp = [];
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             const op = ip(pp[Op], Op);
-             op && (Ic(op) ? Pi(cp, op) : cp.push(op))
-           }
-         return cp
+       scanIdentical(QQ, WQ) {
+         if (!(QQ instanceof VQ)) return 0;
+         let XQ = 0,
+           [wQ, qQ, TQ, zQ] = WQ > 0 ? [0, 0, this.children.length, QQ.children.length] : [this.children.length - 1, QQ.children.length - 1, -1, -1];
+         for (;; wQ += WQ, qQ += WQ) {
+           if (wQ == TQ || qQ == zQ) return XQ;
+           let sQ = this.children[wQ],
+             FQ = QQ.children[qQ];
+           if (sQ != FQ) return XQ + sQ.scanIdentical(FQ, WQ);
+           XQ += sQ.length + 1
+         }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2469-L2472` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L332-L333) · [Before (L2469-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2469-L2472)

```diff
-       function* Tp(pp, ip) {
-         for (const cp of pp) {
-           const pp = ip(cp);
-           pp && (yield* pp)
+         function JQ() {
+           0 != sQ && (zQ.push(1 == PQ.length ? PQ[0] : VQ.from(PQ, FQ)), FQ = -1, sQ = PQ.length = 0)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2476-L2484` → after: `L340-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L340-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L340-L346) · [Before (L2476-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2476-L2484)

```diff
-       function fp(pp, ip) {
-         let cp;
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             const op = pp[Op],
-               Ip = ip(op, Op);
-             (cp || op !== Ip || Ic(Ip)) && (cp || (cp = pp.slice(0, Op)), Ic(Ip) ? Pi(cp, Ip) : cp.push(Ip))
-           }
-         return cp ?? pp
+     function DQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
+       for (let qQ = 0, TQ = 0, zQ = !0; TQ < QQ.length && qQ <= wQ; TQ++) {
+         let sQ = QQ[TQ],
+           FQ = qQ + sQ.length;
+         FQ >= XQ && (FQ > wQ && (sQ = sQ.slice(0, wQ - qQ)), qQ < XQ && (sQ = sQ.slice(XQ - qQ)), zQ ? (WQ[WQ.length - 1] += sQ, zQ = !1) : WQ.push(sQ)), qQ = FQ + 1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2487-L2492` → after: `L351-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L351-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L351-L380) · [Before (L2487-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2487-L2492)

```diff
-       function bp(pp, ip) {
-         const cp = [];
-         for (let Op = 0; Op < pp.length; Op++) {
-           const op = ip(pp[Op], Op);
-           if (void 0 === op) return;
-           cp.push(op)
+     function pQ(QQ, WQ, XQ) {
+       return DQ(QQ, [""], WQ, XQ)
+     }
+     BQ.empty = new yQ([""], 0);
+     class GQ {
+       constructor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         this.dir = WQ, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [QQ], this.offsets = [WQ > 0 ? 1 : (QQ instanceof yQ ? QQ.text.length : QQ.children.length) << 1]
+       }
+       nextInner(QQ, WQ) {
+         for (this.done = this.lineBreak = !1;;) {
+           let XQ = this.nodes.length - 1,
+             wQ = this.nodes[XQ],
+             qQ = this.offsets[XQ],
+             TQ = qQ >> 1,
+             zQ = wQ instanceof yQ ? wQ.text.length : wQ.children.length;
+ ... (14 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2496-L2503` → after: `L479-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L479-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L479-L484) · [Before (L2496-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2496-L2503)

```diff
- 
-       function hp(pp, ip) {
-         const cp = [];
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             const op = ip(pp[Op], Op);
-             void 0 !== op && cp.push(op)
-           }
+       get newLength() {
+         let QQ = 0;
+         for (let WQ = 0; WQ < this.sections.length; WQ += 2) {
+           let XQ = this.sections[WQ + 1];
+           QQ += XQ < 0 ? this.sections[WQ] : XQ
+         }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2506-L2510` → after: `L487-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L487-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L487-L494) · [Before (L2506-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2506-L2510)

```diff
- 
-       function* ap(pp, ip) {
-         for (const cp of pp) {
-           const pp = ip(cp);
-           void 0 !== pp && (yield pp)
+       get empty() {
+         return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
+       }
+       iterGaps(QQ) {
+         for (let WQ = 0, XQ = 0, wQ = 0; WQ < this.sections.length;) {
+           let qQ = this.sections[WQ++],
+             TQ = this.sections[WQ++];
+           TQ < 0 ? (QQ(XQ, wQ, qQ), wQ += qQ) : wQ += TQ, XQ += qQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2513-L2517` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L497-L498) · [Before (L2513-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2513-L2517)

```diff
- 
-       function np(pp, ip, cp) {
-         if (pp.has(ip)) return pp.get(ip);
-         const Op = cp();
-         return pp.set(ip, Op), Op
+       iterChangedRanges(QQ) {
+         uQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2519-L2521` → after: `L500-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L500-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L500-L507) · [Before (L2519-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2519-L2521)

```diff
- 
-       function Fp(pp, ip) {
-         return !pp.has(ip) && (pp.add(ip), !0)
+       get invertedDesc() {
+         let QQ = [];
+         for (let WQ = 0; WQ < this.sections.length;) {
+           let XQ = this.sections[WQ++],
+             wQ = this.sections[WQ++];
+           wQ < 0 ? QQ.push(XQ, wQ) : QQ.push(wQ, XQ)
+         }
+         return new AQ(QQ)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2523-L2525` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L509-L510) · [Before (L2523-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2523-L2525)

```diff
- 
-       function* gp(pp) {
-         yield pp
+       composeDesc(QQ) {
+         return this.empty ? QQ : QQ.empty ? this : kQ(this, QQ)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2527-L2545` → after: `L512-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L512-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L512-L531) · [Before (L2527-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2527-L2545)

```diff
- 
-       function Gp(pp, ip, cp) {
-         let Op;
-         if (void 0 !== pp) {
-           Op = [];
-           const op = pp.length;
-           let Ip, Sp, xp = 0,
-             Lp = 0;
-           for (; xp < op;) {
-             for (; Lp < op;) {
-               if (Sp = ip(pp[Lp], Lp), 0 === Lp) Ip = Sp;
-               else if (Sp !== Ip) break;
-               Lp++
-             }
-             if (xp < Lp) {
-               const ip = cp(pp.slice(xp, Lp), Ip, xp, Lp);
- ... (3 more removed lines; see GitHub link above)
+       mapDesc(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return QQ.empty ? this : LQ(this, QQ, WQ)
+       }
+       mapPos(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cQ.Simple,
+           wQ = 0,
+           qQ = 0;
+         for (let TQ = 0; TQ < this.sections.length;) {
+           let zQ = this.sections[TQ++],
+             sQ = this.sections[TQ++],
+             FQ = wQ + zQ;
+           if (sQ < 0) {
+             if (FQ > QQ) return qQ + (QQ - wQ);
+             qQ += zQ
+ ... (4 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2550-L2564` → after: `L538-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L538-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L538-L543) · [Before (L2550-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2550-L2564)

```diff
- 
-       function rp(pp, ip) {
-         if (void 0 === pp) return;
-         const cp = new Map;
-         return pp.forEach(((pp, Op) => {
-           const [op, Ip] = ip(Op, pp);
-           cp.set(op, Ip)
-         })), cp
-       }
- 
-       function Zp(pp, ip) {
-         if (void 0 !== pp) {
-           if (void 0 === ip) return pp.length > 0;
-           for (let cp = 0; cp < pp.length; cp++)
-             if (ip(pp[cp])) return !0
+       touchesRange(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
+         for (let XQ = 0, wQ = 0; XQ < this.sections.length && wQ <= WQ;) {
+           let qQ = wQ + this.sections[XQ++];
+           if (this.sections[XQ++] >= 0 && wQ <= WQ && qQ >= QQ) return !(wQ < QQ && qQ > WQ) || "cover";
+           wQ = qQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2568-L2572` → after: `L547-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L547-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L547-L554) · [Before (L2568-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2568-L2572)

```diff
- 
-       function zp(pp, ip, cp) {
-         let Op;
-         for (let op = 0; op < pp.length; op++) ip(pp[op]) ? Op = void 0 === Op ? op : Op : void 0 !== Op && (cp(Op, op), Op = void 0);
-         void 0 !== Op && cp(Op, pp.length)
+       toString() {
+         let QQ = "";
+         for (let WQ = 0; WQ < this.sections.length;) {
+           let XQ = this.sections[WQ++],
+             wQ = this.sections[WQ++];
+           QQ += (QQ ? " " : "") + XQ + (wQ >= 0 ? ":" + wQ : "")
+         }
+         return QQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2574-L2576` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L556-L557) · [Before (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2574-L2576)

```diff
- 
-       function sp(pp, ip) {
-         return void 0 === ip || 0 === ip.length ? pp : void 0 === pp || 0 === pp.length ? ip : [...pp, ...ip]
+       toJSON() {
+         return this.sections
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2578-L2580` → after: `L559-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L559-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L559-L561) · [Before (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2578-L2580)

```diff
- 
-       function Kp(pp, ip) {
-         return ip
+       static fromJSON(QQ) {
+         if (!Array.isArray(QQ) || QQ.length % 2 || QQ.some((QQ => "number" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeDesc");
+         return new AQ(QQ)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2582-L2584` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L563-L564) · [Before (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2582-L2584)

```diff
- 
-       function Vp(pp) {
-         return pp.map(Kp)
+       static create(QQ) {
+         return new AQ(QQ)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2586-L2599` → after: `L566-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L566-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L566-L569) · [Before (L2586-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2586-L2599)

```diff
- 
-       function ii(pp, ip, cp) {
-         const Op = Vp(pp);
-         ! function(pp, ip, cp) {
-           ip.sort(((ip, Op) => cp(pp[ip], pp[Op]) || qc(ip, Op)))
-         }(pp, Op, cp);
-         let op = pp[Op[0]];
-         const Ip = [Op[0]];
-         for (let Sp = 1; Sp < Op.length; Sp++) {
-           const cp = Op[Sp],
-             xp = pp[cp];
-           ip(op, xp) || (Ip.push(cp), op = xp)
-         }
-         return Ip.sort(), Ip.map((ip => pp[ip]))
+     }
+     class RQ extends AQ {
+       constructor(QQ, WQ) {
+         super(QQ), this.inserted = WQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2601-L2607` → after: `L571-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L571-L573) · [Before (L2601-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2601-L2607)

```diff
- 
-       function ci(pp, ip, cp) {
-         return 0 === pp.length ? [] : 1 === pp.length ? pp.slice() : cp ? ii(pp, ip, cp) : function(pp, ip) {
-           const cp = [];
-           for (let Op = 0; Op < pp.length; Op++) Wi(cp, pp[Op], ip);
-           return cp
-         }(pp, ip)
+       apply(QQ) {
+         if (this.length != QQ.length) throw new RangeError("Applying change set to a document with the wrong length");
+         return uQ(this, ((WQ, XQ, wQ, qQ, TQ) => QQ = QQ.replace(wQ, wQ + (XQ - WQ), TQ)), !1), QQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2609-L2611` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L575-L576) · [Before (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2609-L2611)

```diff
- 
-       function Oi() {
-         return []
+       mapDesc(QQ) {
+         return LQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2613-L2621` → after: `L578-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L578-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L578-L588) · [Before (L2613-L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2613-L2621)

```diff
- 
-       function oi(pp, ip, cp, Op, op) {
-         if (0 === pp.length) return pp.push(ip), !0;
-         const Ip = Ci(pp, ip, Uc, cp);
-         if (Ip < 0) {
-           if (Op && !op) {
-             const cp = ~Ip;
-             if (cp > 0 && Op(ip, pp[cp - 1])) return !1;
-             if (cp < pp.length && Op(ip, pp[cp])) return pp.splice(cp, 1, ip), !0
+       invert(QQ) {
+         let WQ = this.sections.slice(),
+           XQ = [];
+         for (let wQ = 0, qQ = 0; wQ < WQ.length; wQ += 2) {
+           let TQ = WQ[wQ],
+             zQ = WQ[wQ + 1];
+           if (zQ >= 0) {
+             WQ[wQ] = zQ, WQ[wQ + 1] = TQ;
+             let sQ = wQ >> 1;
+             for (; XQ.length < sQ;) XQ.push(BQ.empty);
+             XQ.push(TQ ? QQ.slice(qQ, qQ + TQ) : BQ.empty)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2623` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L590) · [Before (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2623)

```diff
-           return pp.splice(~Ip, 0, ip), !0
+           qQ += TQ
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2625` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L592) · [Before (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2625)

```diff
-         return !!op && (pp.splice(Ip, 0, ip), !0)
+         return new RQ(WQ, XQ)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2627-L2642` → after: `L594-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L594-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L594-L625) · [Before (L2627-L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2627-L2642)

```diff
- 
-       function Ii(pp, ip, cp) {
-         return function(pp, ip) {
-           if (0 === pp.length) return Yp;
-           let cp = pp[0];
-           const Op = [cp];
-           for (let op = 1; op < pp.length; op++) {
-             const Ip = pp[op];
-             switch (ip(Ip, cp)) {
-               case !0:
-               case 0:
-                 continue;
-               case -1:
-                 return dO.fail("Array is unsorted.")
-             }
-             Op.push(cp = Ip)
+       compose(QQ) {
+         return this.empty ? QQ : QQ.empty ? this : kQ(this, QQ, !0)
+       }
+       map(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return QQ.empty ? this : LQ(this, QQ, WQ, !0)
+       }
+       iterChanges(QQ) {
+         uQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       }
+       get desc() {
+         return AQ.create(this.sections)
+       }
+       filter(QQ) {
+         let WQ = [],
+           XQ = [],
+ ... (16 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2644-L2645` → after: `L627-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L627-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L627-L631) · [Before (L2644-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2644-L2645)

```diff
-           return Op
-         }(Ui(pp, ip), cp ?? ip ?? Qc)
+         }
+         return {
+           changes: new RQ(WQ, XQ),
+           filtered: AQ.create(wQ)
+         }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2647-L2654` → after: `L633-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L633-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L633-L640) · [Before (L2647-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2647-L2654)

```diff
- 
-       function Si(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
-         if (void 0 === pp || void 0 === ip) return pp === ip;
-         if (pp.length !== ip.length) return !1;
-         for (let Op = 0; Op < pp.length; Op++)
-           if (!cp(pp[Op], ip[Op], Op)) return !1;
-         return !0
+       toJSON() {
+         let QQ = [];
+         for (let WQ = 0; WQ < this.sections.length; WQ += 2) {
+           let XQ = this.sections[WQ],
+             wQ = this.sections[WQ + 1];
+           wQ < 0 ? QQ.push(XQ) : 0 == wQ ? QQ.push([XQ]) : QQ.push([XQ].concat(this.inserted[WQ >> 1].toJSON()))
+         }
+         return QQ
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2657-L2662` → after: `L648-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L648-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L648-L670) · [Before (L2657-L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2657-L2662)

```diff
-       function xi(pp) {
-         let ip;
-         if (void 0 !== pp)
-           for (let cp = 0; cp < pp.length; cp++) {
-             const Op = pp[cp];
-             (ip ?? !Op) && (ip ?? (ip = pp.slice(0, cp)), Op && ip.push(Op))
+         function sQ() {
+           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !wQ.length) return;
+           TQ < WQ && EQ(wQ, WQ - TQ, -1);
+           let QQ = new RQ(wQ, qQ);
+           zQ = zQ ? zQ.compose(QQ.map(zQ)) : QQ, wQ = [], qQ = [], TQ = 0
+         }
+         return function QQ(FQ) {
+           if (Array.isArray(FQ))
+             for (let WQ of FQ) QQ(WQ);
+           else if (FQ instanceof RQ) {
+             if (FQ.length != WQ) throw new RangeError(`Mismatched change set length (got ${FQ.length}, expected ${WQ})`);
+             sQ(), zQ = zQ ? zQ.compose(FQ.map(zQ)) : FQ
+           } else {
+             let {
+               from: QQ,
+               to: zQ = QQ,
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2664` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L672) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2664)

```diff
-         return ip ?? pp
+         }(QQ), sQ(!zQ), zQ
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2666-L2679` → after: `L674-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L674-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L674-L690) · [Before (L2666-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2666-L2679)

```diff
- 
-       function Li(pp, ip, cp) {
-         if (!ip || !pp || 0 === ip.length || 0 === pp.length) return ip;
-         const Op = [];
-         pp: for (let op = 0, Ip = 0; Ip < ip.length; Ip++) {
-           Ip > 0 && dO.assertGreaterThanOrEqual(cp(ip[Ip], ip[Ip - 1]), 0);
-           ip: for (const Sp = op; op < pp.length; op++) switch (op > Sp && dO.assertGreaterThanOrEqual(cp(pp[op], pp[op - 1]), 0), cp(ip[Ip], pp[op])) {
-             case -1:
-               Op.push(ip[Ip]);
-               continue pp;
-             case 0:
-               continue pp;
-             case 1:
-               continue ip
+       static empty(QQ) {
+         return new RQ(QQ ? [QQ, -1] : [], [])
+       }
+       static fromJSON(QQ) {
+         if (!Array.isArray(QQ)) throw new RangeError("Invalid JSON representation of ChangeSet");
+         let WQ = [],
+           XQ = [];
+         for (let wQ = 0; wQ < QQ.length; wQ++) {
+           let qQ = QQ[wQ];
+           if ("number" == typeof qQ) WQ.push(qQ, -1);
+           else {
+             if (!Array.isArray(qQ) || "number" != typeof qQ[0] || qQ.some(((QQ, WQ) => WQ && "string" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeSet");
+             if (1 == qQ.length) WQ.push(qQ[0], 0);
+             else {
+               for (; XQ.length < wQ;) XQ.push(BQ.empty);
+               XQ[wQ] = BQ.of(qQ.slice(1)), WQ.push(qQ[0], XQ[wQ].length)
+ ... (1 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2682` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L693) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2682)

```diff
-         return Op
+         return new RQ(WQ, XQ)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2684-L2686` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L695-L696) · [Before (L2684-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2684-L2686)

```diff
- 
-       function Yi(pp, ip) {
-         return void 0 === ip ? pp : void 0 === pp ? [ip] : (pp.push(ip), pp)
+       static createSet(QQ, WQ) {
+         return new RQ(QQ, WQ)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2689-L2691` → after: `L700-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L700-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L700-L705) · [Before (L2689-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2689-L2691)

```diff
-       function Di(pp, ip) {
-         return void 0 === pp ? ip : void 0 === ip ? pp : Ic(pp) ? Ic(ip) ? sp(pp, ip) : Yi(pp, ip) : Ic(ip) ? Yi(ip, pp) : [pp, ip]
-       }
+     function EQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == WQ && XQ <= 0) return;
+       let qQ = QQ.length - 2;
+       qQ >= 0 && XQ <= 0 && XQ == QQ[qQ + 1] ? QQ[qQ] += WQ : qQ >= 0 && 0 == WQ && 0 == QQ[qQ] ? QQ[qQ + 1] += XQ : wQ ? (QQ[qQ] += WQ, QQ[qQ + 1] += XQ) : QQ.push(WQ, XQ)
+     }
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2693-L2694` → after: `L707-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L707-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L707-L713) · [Before (L2693-L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2693-L2694)

```diff
-       function Ai(pp, ip) {
-         return ip < 0 ? pp.length + ip : ip
+     function CQ(QQ, WQ, XQ) {
+       if (0 == XQ.length) return;
+       let wQ = WQ.length - 2 >> 1;
+       if (wQ < QQ.length) QQ[QQ.length - 1] = QQ[QQ.length - 1].append(XQ);
+       else {
+         for (; QQ.length < wQ;) QQ.push(BQ.empty);
+         QQ.push(XQ)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2697-L2702` → after: `L717-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L717-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L717-L772) · [Before (L2697-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2697-L2702)

```diff
-       function Pi(pp, ip, cp, Op) {
-         if (void 0 === ip || 0 === ip.length) return pp;
-         if (void 0 === pp) return ip.slice(cp, Op);
-         cp = void 0 === cp ? 0 : Ai(ip, cp), Op = void 0 === Op ? ip.length : Ai(ip, Op);
-         for (let op = cp; op < Op && op < ip.length; op++) void 0 !== ip[op] && pp.push(ip[op]);
-         return pp
+     function uQ(QQ, WQ, XQ) {
+       let wQ = QQ.inserted;
+       for (let qQ = 0, TQ = 0, zQ = 0; zQ < QQ.sections.length;) {
+         let sQ = QQ.sections[zQ++],
+           FQ = QQ.sections[zQ++];
+         if (FQ < 0) qQ += sQ, TQ += sQ;
+         else {
+           let PQ = qQ,
+             gQ = TQ,
+             JQ = BQ.empty;
+           for (; PQ += sQ, gQ += FQ, FQ && wQ && (JQ = JQ.append(wQ[zQ - 2 >> 1])), !(XQ || zQ == QQ.sections.length || QQ.sections[zQ + 1] < 0);) sQ = QQ.sections[zQ++], FQ = QQ.sections[zQ++];
+           WQ(qQ, PQ, TQ, gQ, JQ), qQ = PQ, TQ = gQ
+         }
+       }
+     }
+ 
+ ... (40 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2705-L2706` → after: `L776-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L776-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L776-L797) · [Before (L2705-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2705-L2706)

```diff
-       function Wi(pp, ip, cp) {
-         return !mp(pp, ip, cp) && (pp.push(ip), !0)
+     function kQ(QQ, WQ) {
+       let XQ = [],
+         wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
+         qQ = new fQ(QQ),
+         TQ = new fQ(WQ),
+         zQ = 0;
+       for (let sQ = !1;;) {
+         if (++zQ > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
+         if (qQ.done && TQ.done) return wQ ? RQ.createSet(XQ, wQ) : AQ.create(XQ);
+         if (0 == qQ.ins) EQ(XQ, qQ.len, 0, sQ), qQ.next();
+         else if (0 != TQ.len || TQ.done) {
+           if (qQ.done || TQ.done) throw new Error("Mismatched change set lengths");
+           {
+             let QQ = Math.min(qQ.len2, TQ.len),
+               WQ = XQ.length;
+             if (-1 == qQ.ins) {
+ ... (6 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2708-L2710` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L799-L802) · [Before (L2708-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2708-L2710)

```diff
- 
-       function yi(pp, ip, cp) {
-         return void 0 !== pp ? (Wi(pp, ip, cp), pp) : [ip]
+     }
+     class fQ {
+       constructor(QQ) {
+         this.set = QQ, this.i = 0, this.next()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2712-L2714` → after: `L804-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L804-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L804-L808) · [Before (L2712-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2712-L2714)

```diff
- 
-       function Ui(pp, ip) {
-         return 0 === pp.length ? Yp : pp.slice().sort(ip)
+       next() {
+         let {
+           sections: QQ
+         } = this.set;
+         this.i < QQ.length ? (this.len = QQ[this.i++], this.ins = QQ[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2716-L2718` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L810-L811) · [Before (L2716-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2716-L2718)

```diff
- 
-       function* wi(pp) {
-         for (let ip = pp.length - 1; ip >= 0; ip--) yield pp[ip]
+       get done() {
+         return -2 == this.ins
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2720-L2726` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L813-L814) · [Before (L2720-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2720-L2726)

```diff
- 
-       function vi(pp, ip, cp, Op) {
-         for (; cp < Op;) {
-           if (pp[cp] !== ip[cp]) return !1;
-           cp++
-         }
-         return !0
+       get len2() {
+         return this.ins < 0 ? this.len : this.ins
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2728-L2733` → after: `L816-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L816-L820) · [Before (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2728-L2733)

```diff
-       var ti = Array.prototype.at ? (pp, ip) => null == pp ? void 0 : pp.at(ip) : (pp, ip) => {
-         if (void 0 !== pp && (ip = Ai(pp, ip)) < pp.length) return pp[ip]
-       };
- 
-       function Hi(pp) {
-         return void 0 === pp || 0 === pp.length ? void 0 : pp[0]
+       get text() {
+         let {
+           inserted: QQ
+         } = this.set, WQ = this.i - 2 >> 1;
+         return WQ >= QQ.length ? BQ.empty : QQ[WQ]
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2735-L2738` → after: `L822-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L822-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L822-L826) · [Before (L2735-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2735-L2738)

```diff
- 
-       function di(pp) {
-         if (void 0 !== pp)
-           for (const ip of pp) return ip
+       textBit(QQ) {
+         let {
+           inserted: WQ
+         } = this.set, XQ = this.i - 2 >> 1;
+         return XQ >= WQ.length && !QQ ? BQ.empty : WQ[XQ].slice(this.off, null == QQ ? void 0 : this.off + QQ)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2740-L2742` → after: `L828-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L828-L829) · [Before (L2740-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2740-L2742)

```diff
- 
-       function ei(pp) {
-         return dO.assert(0 !== pp.length), pp[0]
+       forward(QQ) {
+         QQ == this.len ? this.next() : (this.len -= QQ, this.off += QQ)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2744-L2747` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L831-L832) · [Before (L2744-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2744-L2747)

```diff
- 
-       function ui(pp) {
-         for (const ip of pp) return ip;
-         dO.fail("iterator is empty")
+       forward2(QQ) {
+         -1 == this.ins ? this.forward(QQ) : QQ == this.ins ? this.next() : (this.ins -= QQ, this.off += QQ)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2749-L2751` → after: `L834-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L834-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L834-L837) · [Before (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2749-L2751)

```diff
- 
-       function ji(pp) {
-         return void 0 === pp || 0 === pp.length ? void 0 : pp[pp.length - 1]
+     }
+     class SQ {
+       constructor(QQ, WQ, XQ) {
+         this.from = QQ, this.to = WQ, this.flags = XQ
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2753-L2755` → after: `L839-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L839-L840) · [Before (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2753-L2755)

```diff
- 
-       function ki(pp) {
-         return dO.assert(0 !== pp.length), pp[pp.length - 1]
+       get anchor() {
+         return 32 & this.flags ? this.to : this.from
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2757-L2759` → after: `L842-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L842-L843) · [Before (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2757-L2759)

```diff
- 
-       function mi(pp) {
-         return void 0 !== pp && 1 === pp.length ? pp[0] : void 0
+       get head() {
+         return 32 & this.flags ? this.from : this.to
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2761-L2763` → after: `L845-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L845-L846) · [Before (L2761-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2761-L2763)

```diff
- 
-       function Ri(pp) {
-         return dO.checkDefined(mi(pp))
+       get empty() {
+         return this.from == this.to
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2765-L2767` → after: `L848-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L848-L849) · [Before (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2765-L2767)

```diff
- 
-       function qi(pp) {
-         return void 0 !== pp && 1 === pp.length ? pp[0] : pp
+       get assoc() {
+         return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2769-L2772` → after: `L851-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L851-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L851-L853) · [Before (L2769-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2769-L2772)

```diff
- 
-       function Mi(pp, ip, cp) {
-         const Op = pp.slice(0);
-         return Op[ip] = cp, Op
+       get bidiLevel() {
+         let QQ = 7 & this.flags;
+         return 7 == QQ ? null : QQ
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2774-L2776` → after: `L855-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L855-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L855-L857) · [Before (L2774-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2774-L2776)

```diff
- 
-       function Ci(pp, ip, cp, Op, op) {
-         return Ei(pp, cp(ip), cp, Op, op)
+       get goalColumn() {
+         let QQ = this.flags >> 6;
+         return 16777215 == QQ ? void 0 : QQ
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2778-L2795` → after: `L859-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L859-L861) · [Before (L2778-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2778-L2795)

```diff
- 
-       function Ei(pp, ip, cp, Op, op) {
-         if (!Zp(pp)) return -1;
-         let Ip = op ?? 0,
-           Sp = pp.length - 1;
-         for (; Ip <= Sp;) {
-           const op = Ip + (Sp - Ip >> 1);
-           switch (Op(cp(pp[op], op), ip)) {
-             case -1:
-               Ip = op + 1;
-               break;
-             case 0:
-               return op;
-             case 1:
-               Sp = op - 1
-           }
- ... (2 more removed lines; see GitHub link above)
+       map(QQ) {
+         let WQ, XQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
+         return this.empty ? WQ = XQ = QQ.mapPos(this.from, wQ) : (WQ = QQ.mapPos(this.from, 1), XQ = QQ.mapPos(this.to, -1)), WQ == this.from && XQ == this.to ? this : new SQ(WQ, XQ, this.flags)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2797-L2807` → after: `L863-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L863-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L863-L877) · [Before (L2797-L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2797-L2807)

```diff
- 
-       function Xi(pp, ip, cp, Op, op) {
-         if (pp && pp.length > 0) {
-           const Ip = pp.length;
-           if (Ip > 0) {
-             let Sp = void 0 === Op || Op < 0 ? 0 : Op;
-             const xp = void 0 === op || Sp + op > Ip - 1 ? Ip - 1 : Sp + op;
-             let Lp;
-             for (arguments.length <= 2 ? (Lp = pp[Sp], Sp++) : Lp = cp; Sp <= xp;) Lp = ip(Lp, pp[Sp], Sp), Sp++;
-             return Lp
-           }
+       extend(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (QQ <= this.anchor && WQ >= this.anchor) return tQ.range(QQ, WQ, void 0, void 0, XQ);
+         let wQ = Math.abs(QQ - this.anchor) > Math.abs(WQ - this.anchor) ? QQ : WQ;
+         return tQ.range(this.anchor, wQ, void 0, void 0, XQ)
+       }
+       eq(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         return this.anchor == QQ.anchor && this.head == QQ.head && this.goalColumn == QQ.goalColumn && (!WQ || !this.empty || this.assoc == QQ.assoc)
+       }
+       toJSON() {
+         return {
+           anchor: this.anchor,
+           head: this.head
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2811-L2814` → after: `L880-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L880-L882) · [Before (L2811-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2811-L2814)

```diff
-       var li = Object.prototype.hasOwnProperty;
- 
-       function Qi(pp, ip) {
-         return li.call(pp, ip)
+       static fromJSON(QQ) {
+         if (!QQ || "number" != typeof QQ.anchor || "number" != typeof QQ.head) throw new RangeError("Invalid JSON representation for SelectionRange");
+         return tQ.range(QQ.anchor, QQ.head)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2816-L2818` → after: `L884-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L884-L885) · [Before (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2816-L2818)

```diff
- 
-       function Ji(pp, ip) {
-         return li.call(pp, ip) ? pp[ip] : void 0
+       static create(QQ, WQ, XQ) {
+         return new SQ(QQ, WQ, XQ)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2820-L2824` → after: `L887-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L887-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L887-L890) · [Before (L2820-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2820-L2824)

```diff
- 
-       function Bi(pp) {
-         const ip = [];
-         for (const cp in pp) li.call(pp, cp) && ip.push(cp);
-         return ip
+     }
+     class tQ {
+       constructor(QQ, WQ) {
+         this.Qy = QQ, this.mainIndex = WQ
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2826-L2833` → after: `L892-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L892-L894) · [Before (L2826-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2826-L2833)

```diff
- 
-       function Ni(pp) {
-         const ip = [];
-         do {
-           const cp = Object.getOwnPropertyNames(pp);
-           for (const pp of cp) Wi(ip, pp)
-         } while (pp = Object.getPrototypeOf(pp));
-         return ip
+       map(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
+         return QQ.empty ? this : tQ.create(this.Qy.map((XQ => XQ.map(QQ, WQ))), this.mainIndex)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2835-L2839` → after: `L896-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L896-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L896-L901) · [Before (L2835-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2835-L2839)

```diff
- 
-       function Ti(pp) {
-         const ip = [];
-         for (const cp in pp) li.call(pp, cp) && ip.push(pp[cp]);
-         return ip
+       eq(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.Qy.length != QQ.Qy.length || this.mainIndex != QQ.mainIndex) return !1;
+         for (let XQ = 0; XQ < this.Qy.length; XQ++)
+           if (!this.Qy[XQ].eq(QQ.Qy[XQ], WQ)) return !1;
+         return !0
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2841-L2845` → after: `L903-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L903-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L903-L904) · [Before (L2841-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2841-L2845)

```diff
- 
-       function fi(pp, ip) {
-         const cp = new Array(pp);
-         for (let Op = 0; Op < pp; Op++) cp[Op] = ip(Op);
-         return cp
+       get main() {
+         return this.Qy[this.mainIndex]
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2847-L2851` → after: `L906-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L906-L907) · [Before (L2847-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2847-L2851)

```diff
- 
-       function bi(pp, ip) {
-         const cp = [];
-         for (const Op of pp) cp.push(ip ? ip(Op) : Op);
-         return cp
+       asSingle() {
+         return 1 == this.Qy.length ? this : new tQ([this.main], 0)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2853-L2859` → after: `L909-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L909-L911) · [Before (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2853-L2859)

```diff
- 
-       function ai(pp) {
-         for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
-         for (const op of cp)
-           if (void 0 !== op)
-             for (const ip in op) Qi(op, ip) && (pp[ip] = op[ip]);
-         return pp
+       addRange(QQ) {
+         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         return tQ.create([QQ].concat(this.Qy), WQ ? 0 : this.mainIndex + 1)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2861-L2872` → after: `L913-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L913-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L913-L916) · [Before (L2861-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2861-L2872)

```diff
- 
-       function ni(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
-         if (pp === ip) return !0;
-         if (!pp || !ip) return !1;
-         for (const Op in pp)
-           if (li.call(pp, Op)) {
-             if (!li.call(ip, Op)) return !1;
-             if (!cp(pp[Op], ip[Op])) return !1
-           } for (const Op in ip)
-           if (li.call(ip, Op) && !li.call(pp, Op)) return !1;
-         return !0
+       replaceRange(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
+           XQ = this.Qy.slice();
+         return XQ[WQ] = QQ, tQ.create(XQ, this.mainIndex)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2874-L2881` → after: `L918-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L918-L921) · [Before (L2874-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2874-L2881)

```diff
- 
-       function Fi(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
-         const Op = new Map;
-         for (let op = 0; op < pp.length; op++) {
-           const Ip = pp[op],
-             Sp = ip(Ip);
-           void 0 !== Sp && Op.set(Sp, cp(Ip))
+       toJSON() {
+         return {
+           Qy: this.Qy.map((QQ => QQ.toJSON())),
+           main: this.mainIndex
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2885-L2893` → after: `L924-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L924-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L924-L926) · [Before (L2885-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2885-L2893)

```diff
- 
-       function gi(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
-         const Op = [];
-         for (let op = 0; op < pp.length; op++) {
-           const Ip = pp[op];
-           Op[ip(Ip)] = cp(Ip)
-         }
-         return Op
+       static fromJSON(QQ) {
+         if (!QQ || !Array.isArray(QQ.Qy) || "number" != typeof QQ.main || QQ.main >= QQ.Qy.length) throw new RangeError("Invalid JSON representation for EditorSelection");
+         return new tQ(QQ.Qy.map((QQ => SQ.fromJSON(QQ))), QQ.main)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2895-L2901` → after: `L928-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L928-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L928-L938) · [Before (L2895-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2895-L2901)

```diff
- 
-       function Gi(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
-         const Op = pc();
-         for (let op = 0; op < pp.length; op++) {
-           const Ip = pp[op];
-           Op.add(ip(Ip), cp(Ip))
+       static single(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
+         return new tQ([tQ.range(QQ, WQ)], 0)
+       }
+       static create(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (0 == QQ.length) throw new RangeError("A selection needs at least one range");
+         for (let XQ = 0, wQ = 0; wQ < QQ.length; wQ++) {
+           let qQ = QQ[wQ];
+           if (qQ.empty ? qQ.from <= XQ : qQ.from < XQ) return tQ.normalized(QQ.slice(), WQ);
+           XQ = qQ.to
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2903` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L940) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2903)

```diff
-         return Op
+         return new tQ(QQ, WQ)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2905-L2908` → after: `L942-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L942-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L942-L946) · [Before (L2905-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2905-L2908)

```diff
- 
-       function ri(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
-         return bi(Gi(pp, ip).values(), cp)
+       static cursor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           XQ = arguments.length > 2 ? arguments[2] : void 0,
+           wQ = arguments.length > 3 ? arguments[3] : void 0;
+         return SQ.create(QQ, QQ, (0 == WQ ? 0 : WQ < 0 ? 8 : 16) | (null == XQ ? 7 : Math.min(6, XQ)) | (null !== wQ && void 0 !== wQ ? wQ : 16777215) << 6)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2910-L2917` → after: `L948-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L948-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L948-L962) · [Before (L2910-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2910-L2917)

```diff
- 
-       function Zi(pp, ip) {
-         const cp = {};
-         if (void 0 !== pp)
-           for (let Op = 0; Op < pp.length; Op++) {
-             const op = pp[Op],
-               Ip = `${ip(op)}`;
-             (cp[Ip] ?? (cp[Ip] = [])).push(op)
+       static range(QQ, WQ, XQ, wQ, qQ) {
+         let TQ = (null !== XQ && void 0 !== XQ ? XQ : 16777215) << 6 | (null == wQ ? 7 : Math.min(6, wQ));
+         return qQ || QQ == WQ || (qQ = WQ < QQ ? 1 : -1), WQ < QQ ? SQ.create(WQ, QQ, 48 | TQ) : SQ.create(QQ, WQ, (qQ ? qQ < 0 ? 8 : 16 : 0) | TQ)
+       }
+       static normalized(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           XQ = QQ[WQ];
+         QQ.sort(((QQ, WQ) => QQ.from - WQ.from)), WQ = QQ.indexOf(XQ);
+         for (let wQ = 1; wQ < QQ.length; wQ++) {
+           let XQ = QQ[wQ],
+             qQ = QQ[wQ - 1];
+           if (XQ.empty ? XQ.from <= qQ.to : XQ.from < qQ.to) {
+             let TQ = qQ.from,
+               zQ = Math.max(XQ.to, qQ.to);
+             wQ <= WQ && WQ--, QQ.splice(--wQ, 2, XQ.anchor > XQ.head ? tQ.range(zQ, TQ) : tQ.range(TQ, zQ))
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2919` → after: `L964-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L964-L965) · [Before (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2919)

```diff
-         return cp
+         }
+         return new tQ(QQ, WQ)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2922-L2925` → after: `L969-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L969-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L969-L976) · [Before (L2922-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2922-L2925)

```diff
-       function zi(pp) {
-         const ip = {};
-         for (const cp in pp) li.call(pp, cp) && (ip[cp] = pp[cp]);
-         return ip
+     function oQ(QQ, WQ) {
+       for (let XQ of QQ.Qy)
+         if (XQ.to > WQ) throw new RangeError("Selection points outside of document")
+     }
+     let eQ = 0;
+     class nQ {
+       constructor(QQ, WQ, XQ, wQ, qQ) {
+         this.combine = QQ, this.compareInput = WQ, this.compare = XQ, this.isStatic = wQ, this.id = eQ++, this.default = QQ([]), this.extensions = "function" == typeof qQ ? qQ(this) : qQ
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2927-L2932` → after: `L978-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L978-L979) · [Before (L2927-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2927-L2932)

```diff
- 
-       function si(pp, ip) {
-         const cp = {};
-         for (const Op in ip) li.call(ip, Op) && (cp[Op] = ip[Op]);
-         for (const Op in pp) li.call(pp, Op) && (cp[Op] = pp[Op]);
-         return cp
+       get reader() {
+         return this
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2934-L2936` → after: `L981-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L981-L983) · [Before (L2934-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2934-L2936)

```diff
- 
-       function Ki(pp, ip) {
-         for (const cp in ip) li.call(ip, cp) && (pp[cp] = ip[cp])
+       static define() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         return new nQ(QQ.combine || (QQ => QQ), QQ.compareInput || ((QQ, WQ) => QQ === WQ), QQ.compare || (QQ.combine ? (QQ, WQ) => QQ === WQ : xQ), !!QQ.static, QQ.enables)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2938-L2940` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L985-L986) · [Before (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2938-L2940)

```diff
- 
-       function Vi(pp, ip) {
-         return null == ip ? void 0 : ip.bind(pp)
+       of(QQ) {
+         return new YQ([], this, 0, QQ)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2942-L2945` → after: `L988-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L988-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L988-L990) · [Before (L2942-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2942-L2945)

```diff
- 
-       function pc() {
-         const pp = new Map;
-         return pp.add = ic, pp.remove = cc, pp
+       compute(QQ, WQ) {
+         if (this.isStatic) throw new Error("Can't compute a static facet");
+         return new YQ(QQ, this, 1, WQ)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2947-L2950` → after: `L992-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L992-L994) · [Before (L2947-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2947-L2950)

```diff
- 
-       function ic(pp, ip) {
-         let cp = this.get(pp);
-         return void 0 !== cp ? cp.push(ip) : this.set(pp, cp = [ip]), cp
+       computeN(QQ, WQ) {
+         if (this.isStatic) throw new Error("Can't compute a static facet");
+         return new YQ(QQ, this, 2, WQ)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2952-L2955` → after: `L996-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L996-L997) · [Before (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2952-L2955)

```diff
- 
-       function cc(pp, ip) {
-         const cp = this.get(pp);
-         void 0 !== cp && (pO(cp, ip), cp.length || this.delete(pp))
+       from(QQ, WQ) {
+         return WQ || (WQ = QQ => QQ), this.compute([QQ], (XQ => WQ(XQ.field(QQ))))
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2958-L2964` → after: `L1001-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1001-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1001-L1018) · [Before (L2958-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2958-L2964)

```diff
-       function Oc(pp) {
-         const ip = (null == pp ? void 0 : pp.slice()) ?? [];
-         let cp = 0;
- 
-         function Op() {
-           return cp === ip.length
-         }
+     function xQ(QQ, WQ) {
+       return QQ == WQ || QQ.length == WQ.length && QQ.every(((QQ, XQ) => QQ === WQ[XQ]))
+     }
+     class YQ {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.dependencies = QQ, this.facet = WQ, this.type = XQ, this.value = wQ, this.id = eQ++
+       }
+       dynamicSlot(QQ) {
+         var WQ;
+         let XQ = this.value,
+           wQ = this.facet.compareInput,
+           qQ = this.id,
+           TQ = QQ[qQ] >> 1,
+           zQ = 2 == this.type,
+           sQ = !1,
+           FQ = !1,
+ ... (2 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2966-L2974` → after: `L1020-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1020-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1020-L1024) · [Before (L2966-L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2966-L2974)

```diff
-           enqueue: function() {
-             ip.push(...arguments)
-           },
-           dequeue: function() {
-             if (Op()) throw new Error("Queue is empty");
-             const pp = ip[cp];
-             if (ip[cp] = void 0, cp++, cp > 100 && cp > ip.length >> 1) {
-               const pp = ip.length - cp;
-               ip.copyWithin(0, cp), ip.length = pp, cp = 0
+           create: QQ => (QQ.values[TQ] = XQ(QQ), 1),
+           update(QQ, WQ) {
+             if (sQ && WQ.docChanged || FQ && (WQ.docChanged || WQ.selection) || ZQ(QQ, PQ)) {
+               let WQ = XQ(QQ);
+               if (zQ ? !NQ(WQ, QQ.values[TQ], wQ) : !wQ(WQ, QQ.values[TQ])) return QQ.values[TQ] = WQ, 1
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2976` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1026) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2976)

```diff
-             return pp
+             return 0
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2978` → after: `L1028-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1028-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1028-L1035) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2978)

```diff
-           wy: Op
+           reconfigure: (QQ, WQ) => {
+             let sQ, FQ = WQ.config.address[qQ];
+             if (null != FQ) {
+               let qQ = gW(WQ, FQ);
+               if (this.dependencies.every((XQ => XQ instanceof nQ ? WQ.facet(XQ) === QQ.facet(XQ) : !(XQ instanceof mQ) || WQ.field(XQ, !1) == QQ.field(XQ, !1))) || (zQ ? NQ(sQ = XQ(QQ), qQ, wQ) : wQ(sQ = XQ(QQ), qQ))) return QQ.values[TQ] = qQ, 0
+             } else sQ = XQ(QQ);
+             return QQ.values[TQ] = sQ, 1
+           }
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2982-L3043` → after: `L1040-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1040-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1040-L1045) · [Before (L2982-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2982-L3043)

```diff
-       function oc(pp, ip) {
-         const cp = new Map;
-         let Op = 0;
- 
-         function* op() {
-           for (const pp of cp.values()) Ic(pp) ? yield* pp: yield pp
-         }
-         const Ip = {
-           has(Op) {
-             const op = pp(Op);
-             if (!cp.has(op)) return !1;
-             const Ip = cp.get(op);
-             return Ic(Ip) ? mp(Ip, Op, ip) : ip(Ip, Op)
-           },
-           add(op) {
-             const Ip = pp(op);
- ... (46 more removed lines; see GitHub link above)
+     function NQ(QQ, WQ, XQ) {
+       if (QQ.length != WQ.length) return !1;
+       for (let wQ = 0; wQ < QQ.length; wQ++)
+         if (!XQ(QQ[wQ], WQ[wQ])) return !1;
+       return !0
+     }
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3045-L3047` → after: `L1047-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1047-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1047-L1051) · [Before (L3045-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3045-L3047)

```diff
-       function Ic(pp) {
-         return Array.isArray(pp)
-       }
+     function ZQ(QQ, WQ) {
+       let XQ = !1;
+       for (let wQ of WQ) 1 & PW(QQ, wQ) && (XQ = !0);
+       return XQ
+     }
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3049-L3051` → after: `L1053-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1053-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1053-L1057) · [Before (L3049-L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3049-L3051)

```diff
-       function Sc(pp) {
-         return Ic(pp) ? pp : [pp]
-       }
+     function OQ(QQ, WQ, XQ) {
+       let wQ = XQ.map((WQ => QQ[WQ.id])),
+         qQ = XQ.map((QQ => QQ.type)),
+         TQ = wQ.filter((QQ => !(1 & QQ))),
+         zQ = QQ[WQ.id] >> 1;
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3054` → after: `L1060-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1060-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1060-L1067) · [Before (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3054)

```diff
-         return "string" === typeof pp
+         let XQ = [];
+         for (let WQ = 0; WQ < wQ.length; WQ++) {
+           let TQ = gW(QQ, wQ[WQ]);
+           if (2 == qQ[WQ])
+             for (let QQ of TQ) XQ.push(QQ);
+           else XQ.push(TQ)
+         }
+         return WQ.combine(XQ)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3056-L3058` → after: `L1069-L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1069-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1069-L1158) · [Before (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3056-L3058)

```diff
- 
-       function Lc(pp) {
-         return "number" === typeof pp
+       return {
+         create(QQ) {
+           for (let WQ of wQ) PW(QQ, WQ);
+           return QQ.values[zQ] = sQ(QQ), 1
+         },
+         update(QQ, XQ) {
+           if (!ZQ(QQ, TQ)) return 0;
+           let wQ = sQ(QQ);
+           return WQ.compare(wQ, QQ.values[zQ]) ? 0 : (QQ.values[zQ] = wQ, 1)
+         },
+         reconfigure(QQ, qQ) {
+           let TQ = ZQ(QQ, wQ),
+             FQ = qQ.config.facets[WQ.id],
+             PQ = qQ.facet(WQ);
+           if (FQ && !TQ && xQ(XQ, FQ)) return QQ.values[zQ] = PQ, 0;
+           let gQ = sQ(QQ);
+ ... (74 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3060-L3062` → after: `L1160-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1160-L1161) · [Before (L3060-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3060-L3062)

```diff
- 
-       function Yc(pp, ip) {
-         return void 0 !== pp && ip(pp) ? pp : void 0
+       get(QQ) {
+         return QQ.config.compartments.get(this)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3064-L3066` → after: `L1163-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1163-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1163-L1166) · [Before (L3064-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3064-L3066)

```diff
- 
-       function Dc(pp, ip) {
-         return void 0 !== pp && ip(pp) ? pp : dO.fail(`Invalid cast. The supplied value ${pp} did not pass the test '${dO.getFunctionName(ip)}'.`)
+     }
+     class sW {
+       constructor(QQ, WQ) {
+         this.compartment = QQ, this.inner = WQ
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3068-L3072` → after: `L1168-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1168-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1168-L1171) · [Before (L3068-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3068-L3072)

```diff
- 
-       function Ac(pp) {}
- 
-       function Pc() {
-         return !1
+     }
+     class FW {
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
+         for (this.base = QQ, this.compartments = WQ, this.dynamicSlots = XQ, this.address = wQ, this.staticValues = qQ, this.facets = TQ, this.statusTemplate = []; this.statusTemplate.length < XQ.length;) this.statusTemplate.push(0)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3074-L3076` → after: `L1173-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1173-L1175) · [Before (L3074-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3074-L3076)

```diff
- 
-       function Wc() {
-         return !0
+       staticFacet(QQ) {
+         let WQ = this.address[QQ.id];
+         return null == WQ ? QQ.default : this.staticValues[WQ >> 1]
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3079-L3081` → after: `L1191-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1191-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1191-L1310) · [Before (L3079-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3079-L3081)

```diff
-       function yc() {}
- 
-       function Uc(pp) {
+             function TQ(QQ, zQ) {
+               let sQ = qQ.get(QQ);
+               if (null != sQ) {
+                 if (sQ <= zQ) return;
+                 let WQ = wQ[sQ].indexOf(QQ);
+                 WQ > -1 && wQ[sQ].splice(WQ, 1), QQ instanceof sW && XQ.delete(QQ.compartment)
+               }
+               if (qQ.set(QQ, zQ), Array.isArray(QQ))
+                 for (let WQ of QQ) TQ(WQ, zQ);
+               else if (QQ instanceof sW) {
+                 if (XQ.has(QQ.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
+                 let wQ = WQ.get(QQ.compartment) || QQ.inner;
+                 XQ.set(QQ.compartment, wQ), TQ(wQ, zQ)
+               } else if (QQ instanceof TW) TQ(QQ.inner, QQ.prec);
+               else if (QQ instanceof mQ) wQ[zQ].push(QQ), QQ.provides && TQ(QQ.provides, zQ);
+               else if (QQ instanceof YQ) wQ[zQ].push(QQ), QQ.facet.extensions && TQ(QQ.facet.extensions, WW);
+ ... (104 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3084-L3086` → after: `L1313-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1313-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1313-L1317) · [Before (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3084-L3086)

```diff
- 
-       function wc(pp) {
-         return pp.toLowerCase()
+     }
+     UW.reconfigure = UW.define(), UW.appendConfig = UW.define();
+     class bW {
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
+         this.startState = QQ, this.changes = WQ, this.selection = XQ, this.effects = wQ, this.annotations = qQ, this.scrollIntoView = TQ, this._doc = null, this._state = null, XQ && oQ(XQ, WQ.newLength), qQ.some((QQ => QQ.type == bW.time)) || (this.annotations = qQ.concat(bW.time … [truncated]
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3088-L3091` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1319-L1320) · [Before (L3088-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3088-L3091)

```diff
-       var vc = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
- 
-       function tc(pp) {
-         return vc.test(pp) ? pp.replace(vc, wc) : pp
+       static create(QQ, WQ, XQ, wQ, qQ, TQ) {
+         return new bW(QQ, WQ, XQ, wQ, qQ, TQ)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3093-L3095` → after: `L1322-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1322-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1322-L1323) · [Before (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3093-L3095)

```diff
- 
-       function Hc() {
-         throw new Error("Not implemented")
+       get newDoc() {
+         return this._doc || (this._doc = this.changes.apply(this.startState.doc))
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3097-L3100` → after: `L1325-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1325-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1325-L1326) · [Before (L3097-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3097-L3100)

```diff
- 
-       function dc(pp) {
-         let ip;
-         return () => (pp && (ip = pp(), pp = void 0), ip)
+       get newSelection() {
+         return this.selection || this.startState.selection.map(this.changes)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3102-L3109` → after: `L1328-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1328-L1329) · [Before (L3102-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3102-L3109)

```diff
- 
-       function ec(pp) {
-         const ip = new Map;
-         return cp => {
-           const Op = `${typeof cp}:${cp}`;
-           let op = ip.get(Op);
-           return void 0 !== op || ip.has(Op) || (op = pp(cp), ip.set(Op, op)), op
-         }
+       get state() {
+         return this._state || this.startState.applyTransaction(this), this._state
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3111-L3114` → after: `L1331-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1331-L1333) · [Before (L3111-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3111-L3114)

```diff
-       var uc = (pp => (pp[pp.None = 0] = "None", pp[pp.Normal = 1] = "Normal", pp[pp.Aggressive = 2] = "Aggressive", pp[pp.VeryAggressive = 3] = "VeryAggressive", pp))(uc || {});
- 
-       function jc(pp, ip) {
-         return pp === ip
+       annotation(QQ) {
+         for (let WQ of this.annotations)
+           if (WQ.type == QQ) return WQ.value
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3116-L3118` → after: `L1335-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1335-L1336) · [Before (L3116-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3116-L3118)

```diff
- 
-       function kc(pp, ip) {
-         return pp === ip || void 0 !== pp && void 0 !== ip && pp.toUpperCase() === ip.toUpperCase()
+       get docChanged() {
+         return !this.changes.empty
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3120-L3122` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1338-L1339) · [Before (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3120-L3122)

```diff
- 
-       function mc(pp, ip) {
-         return jc(pp, ip)
+       get reconfigured() {
+         return this.startState.config != this.state.config
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3124-L3126` → after: `L1341-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1341-L1343) · [Before (L3124-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3124-L3126)

```diff
- 
-       function Rc(pp, ip) {
-         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : pp < ip ? -1 : 1
+       isUserEvent(QQ) {
+         let WQ = this.annotation(bW.userEvent);
+         return !(!WQ || !(WQ == QQ || WQ.length > QQ.length && WQ.slice(0, QQ.length) == QQ && "." == WQ[QQ.length]))
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3129-L3130` → after: `L1347-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1347-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1347-L1474) · [Before (L3129-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3129-L3130)

```diff
-       function qc(pp, ip) {
-         return Rc(pp, ip)
+     function vW(QQ, WQ) {
+       let XQ = [];
+       for (let wQ = 0, qQ = 0;;) {
+         let TQ, zQ;
+         if (wQ < QQ.length && (qQ == WQ.length || WQ[qQ] >= QQ[wQ])) TQ = QQ[wQ++], zQ = QQ[wQ++];
+         else {
+           if (!(qQ < WQ.length)) return XQ;
+           TQ = WQ[qQ++], zQ = WQ[qQ++]
+         }!XQ.length || XQ[XQ.length - 1] < TQ ? XQ.push(TQ, zQ) : XQ[XQ.length - 1] < zQ && (XQ[XQ.length - 1] = zQ)
+       }
+     }
+ 
+     function dW(QQ, WQ, XQ) {
+       var wQ;
+       let qQ, TQ, zQ;
+       return XQ ? (qQ = WQ.changes, TQ = RQ.empty(WQ.changes.length), zQ = QQ.changes.compose(WQ.changes)) : (qQ = WQ.changes.map(QQ.changes), TQ = QQ.changes.mapDesc(WQ.changes, !0), zQ = QQ.changes.compose(qQ)), {
+ ... (112 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3132-L3134` → after: `L1476-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1476-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1476-L1488) · [Before (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3132-L3134)

```diff
- 
-       function Mc(pp, ip) {
-         return qc(null == pp ? void 0 : pp.start, null == ip ? void 0 : ip.start) || qc(null == pp ? void 0 : pp.length, null == ip ? void 0 : ip.length)
+       applyTransaction(QQ) {
+         let WQ, XQ = this.config,
+           {
+             base: wQ,
+             compartments: qQ
+           } = XQ;
+         for (let zQ of QQ.effects) zQ.is(zW.reconfigure) ? (XQ && (qQ = new Map, XQ.compartments.forEach(((QQ, WQ) => qQ.set(WQ, QQ))), XQ = null), qQ.set(zQ.value.compartment, zQ.value.extension)) : zQ.is(UW.reconfigure) ? (XQ = null, wQ = zQ.value) : zQ.is(UW.appendConfig) && ( … [truncated]
+         if (XQ) WQ = QQ.startState.values.slice();
+         else {
+           XQ = FW.resolve(wQ, qQ, this), WQ = new EW(XQ, this.doc, this.selection, XQ.dynamicSlots.map((() => null)), ((QQ, WQ) => WQ.reconfigure(QQ, this)), null).values
+         }
+         let TQ = QQ.startState.facet(rW) ? QQ.newSelection : QQ.newSelection.asSingle();
+         new EW(XQ, QQ.newDoc, TQ, WQ, ((WQ, XQ) => XQ.update(WQ, QQ)), QQ)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3136-L3139` → after: `L1490-L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1490-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1490-L1498) · [Before (L3136-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3136-L3139)

```diff
- 
-       function Cc(pp, ip, cp) {
-         for (let Op = 0; Op < pp.length; Op++) ip = Math.max(ip, cp(pp[Op]));
-         return ip
+       replaceSelection(QQ) {
+         return "string" == typeof QQ && (QQ = this.toText(QQ)), this.changeByRange((WQ => ({
+           changes: {
+             from: WQ.from,
+             to: WQ.to,
+             insert: QQ
+           },
+           range: tQ.cursor(WQ.from + QQ.length)
+         })))
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3141-L3143` → after: `L1500-L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1500-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1500-L1518) · [Before (L3141-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3141-L3143)

```diff
- 
-       function Ec(pp, ip) {
-         return Xi(pp, ((pp, cp) => -1 === ip(pp, cp) ? pp : cp))
+       changeByRange(QQ) {
+         let WQ = this.selection,
+           XQ = QQ(WQ.Qy[0]),
+           wQ = this.changes(XQ.changes),
+           qQ = [XQ.range],
+           TQ = hW(XQ.effects);
+         for (let zQ = 1; zQ < WQ.Qy.length; zQ++) {
+           let XQ = QQ(WQ.Qy[zQ]),
+             sQ = this.changes(XQ.changes),
+             FQ = sQ.map(wQ);
+           for (let QQ = 0; QQ < zQ; QQ++) qQ[QQ] = qQ[QQ].map(FQ);
+           let PQ = wQ.mapDesc(sQ, !0);
+           qQ.push(XQ.range.map(PQ)), wQ = wQ.compose(FQ), TQ = UW.mapEffects(TQ, FQ).concat(UW.mapEffects(hW(XQ.effects), PQ))
+         }
+         return {
+           changes: wQ,
+ ... (3 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3145-L3147` → after: `L1520-L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1520-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1520-L1522) · [Before (L3145-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3145-L3147)

```diff
- 
-       function Xc(pp, ip) {
-         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toUpperCase()) < (ip = ip.toUpperCase()) ? -1 : pp > ip ? 1 : 0
+       changes() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
+         return QQ instanceof RQ ? QQ : RQ.of(QQ, this.doc.length, this.facet(EW.lineSeparator))
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3149-L3151` → after: `L1524-L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1524-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1524-L1525) · [Before (L3149-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3149-L3151)

```diff
- 
-       function lc(pp, ip) {
-         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toLowerCase()) < (ip = ip.toLowerCase()) ? -1 : pp > ip ? 1 : 0
+       toText(QQ) {
+         return BQ.of(QQ.split(this.facet(EW.lineSeparator) || iQ))
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3153-L3155` → after: `L1527-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1527-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1527-L1530) · [Before (L3153-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3153-L3155)

```diff
- 
-       function Qc(pp, ip) {
-         return Rc(pp, ip)
+       sliceDoc() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
+         return this.doc.sliceString(QQ, WQ, this.lineBreak)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3157-L3159` → after: `L1532-L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1532-L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1532-L1534) · [Before (L3157-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3157-L3159)

```diff
- 
-       function Jc(pp) {
-         return pp ? Xc : Qc
+       facet(QQ) {
+         let WQ = this.config.address[QQ.id];
+         return null == WQ ? QQ.default : (PW(this, WQ), gW(this, WQ))
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3161-L3176` → after: `L1536-L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1536-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1536-L1545) · [Before (L3161-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3161-L3176)

```diff
-       var Bc, Nc, Tc = (() => function(pp) {
-         const ip = new Intl.Collator(pp, {
-           usage: "sort",
-           sensitivity: "variant",
-           numeric: !0
-         }).compare;
-         return (pp, cp) => function(pp, ip, cp) {
-           if (pp === ip) return 0;
-           if (void 0 === pp) return -1;
-           if (void 0 === ip) return 1;
-           const Op = cp(pp, ip);
-           return Op < 0 ? -1 : Op > 0 ? 1 : 0
-         }(pp, cp, ip)
-       })();
- 
-       function fc() {
+       toJSON(QQ) {
+         let WQ = {
+           doc: this.sliceDoc(),
+           selection: this.selection.toJSON()
+         };
+         if (QQ)
+           for (let XQ in QQ) {
+             let wQ = QQ[XQ];
+             wQ instanceof mQ && null != this.config.address[wQ.id] && (WQ[XQ] = wQ.spec.toJSON(this.field(QQ[XQ]), this))
+           }
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3179-L3181` → after: `L1548-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1548-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1548-L1563) · [Before (L3179-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3179-L3181)

```diff
- 
-       function bc(pp) {
-         Nc !== pp && (Nc = pp, Bc = void 0)
+       static fromJSON(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+           XQ = arguments.length > 2 ? arguments[2] : void 0;
+         if (!QQ || "string" != typeof QQ.doc) throw new RangeError("Invalid JSON representation for EditorState");
+         let wQ = [];
+         if (XQ)
+           for (let qQ in XQ)
+             if (Object.prototype.hasOwnProperty.call(QQ, qQ)) {
+               let WQ = XQ[qQ],
+                 TQ = QQ[qQ];
+               wQ.push(WQ.init((QQ => WQ.spec.fromJSON(TQ, QQ))))
+             } return EW.create({
+           doc: QQ.doc,
+           selection: tQ.fromJSON(QQ.selection),
+           extensions: WQ.extensions ? wQ.concat([WQ.extensions]) : wQ
+         })
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3183-L3185` → after: `L1565-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1565-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1565-L1570) · [Before (L3183-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3183-L3185)

```diff
- 
-       function hc(pp, ip) {
-         return Bc ?? (Bc = Tc(Nc)), Bc(pp, ip)
+       static create() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+           WQ = FW.resolve(QQ.extensions || [], new Map),
+           XQ = QQ.doc instanceof BQ ? QQ.doc : BQ.of((QQ.doc || "").split(WQ.staticFacet(EW.lineSeparator) || iQ)),
+           wQ = QQ.selection ? QQ.selection instanceof tQ ? QQ.selection : tQ.single(QQ.selection.anchor, QQ.selection.head) : tQ.single(0);
+         return oQ(wQ, XQ.length), WQ.staticFacet(rW) || (wQ = wQ.asSingle()), new EW(WQ, XQ, wQ, WQ.dynamicSlots.map((() => null)), ((QQ, WQ) => WQ.create(QQ)), null)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3187-L3189` → after: `L1572-L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1572-L1573) · [Before (L3187-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3187-L3189)

```diff
- 
-       function ac(pp, ip, cp, Op) {
-         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : Op(pp[cp], ip[cp])
+       get tabSize() {
+         return this.facet(EW.tabSize)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3191-L3193` → after: `L1575-L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1575-L1576) · [Before (L3191-L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3191-L3193)

```diff
- 
-       function nc(pp, ip) {
-         return qc(pp ? 1 : 0, ip ? 1 : 0)
+       get lineBreak() {
+         return this.facet(EW.lineSeparator) || "\n"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3195-L3208` → after: `L1578-L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1578-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1578-L1597) · [Before (L3195-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3195-L3208)

```diff
- 
-       function Fc(pp, ip, cp) {
-         const Op = Math.max(2, Math.floor(.34 * pp.length));
-         let op, Ip = Math.floor(.4 * pp.length) + 1;
-         for (const Sp of ip) {
-           const ip = cp(Sp);
-           if (void 0 !== ip && Math.abs(ip.length - pp.length) <= Op) {
-             if (ip === pp) continue;
-             if (ip.length < 3 && ip.toLowerCase() !== pp.toLowerCase()) continue;
-             const cp = gc(pp, ip, Ip - .1);
-             if (void 0 === cp) continue;
-             dO.assert(cp < Ip), Ip = cp, op = Sp
-           }
-         }
+       get readOnly() {
+         return this.facet(VW)
+       }
+       phrase(QQ) {
+         for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
+         for (let qQ of this.facet(EW.phrases))
+           if (Object.prototype.hasOwnProperty.call(qQ, QQ)) {
+             QQ = qQ[QQ];
+             break
+           } return XQ.length && (QQ = QQ.replace(/\$(\$|\d*)/g, ((QQ, WQ) => {
+           if ("$" == WQ) return "$";
+           let wQ = +(WQ || 1);
+           return !wQ || wQ > XQ.length ? QQ : XQ[wQ - 1]
+         }))), QQ
+       }
+       languageDataAt(QQ, WQ) {
+ ... (4 more added lines; see GitHub link above)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3211-L3232` → after: `L1600-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1600-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1600-L1618) · [Before (L3211-L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3211-L3232)

```diff
- 
-       function gc(pp, ip, cp) {
-         let Op = new Array(ip.length + 1),
-           op = new Array(ip.length + 1);
-         const Ip = cp + .01;
-         for (let xp = 0; xp <= ip.length; xp++) Op[xp] = xp;
-         for (let xp = 1; xp <= pp.length; xp++) {
-           const Sp = pp.charCodeAt(xp - 1),
-             Lp = Math.ceil(xp > cp ? xp - cp : 1),
-             Yp = Math.floor(ip.length > cp + xp ? cp + xp : ip.length);
-           op[0] = xp;
-           let Dp = xp;
-           for (let pp = 1; pp < Lp; pp++) op[pp] = Ip;
-           for (let cp = Lp; cp <= Yp; cp++) {
-             const Ip = pp[xp - 1].toLowerCase() === ip[cp - 1].toLowerCase() ? Op[cp - 1] + .1 : Op[cp - 1] + 2,
-               Lp = Sp === ip.charCodeAt(cp - 1) ? Op[cp - 1] : Math.min(Op[cp] + 1, op[cp - 1] + 1, Ip);
- ... (6 more removed lines; see GitHub link above)
+       charCategorizer(QQ) {
+         let WQ = this.languageDataAt("wordChars", QQ);
+         return RW(WQ.length ? WQ[0] : "")
+       }
+       wordAt(QQ) {
+         let {
+           text: WQ,
+           from: XQ,
+           length: wQ
+         } = this.doc.lineAt(QQ), qQ = this.charCategorizer(QQ), TQ = QQ - XQ, zQ = QQ - XQ;
+         for (; TQ > 0;) {
+           let QQ = HQ(WQ, TQ, !1);
+           if (qQ(WQ.slice(QQ, TQ)) != iW.Word) break;
+           TQ = QQ
+         }
+         for (; zQ < wQ;) {
+ ... (3 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3234-L3235` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1620) · [Before (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3234-L3235)

```diff
-         const Sp = Op[ip.length];
-         return Sp > cp ? void 0 : Sp
+         return TQ == zQ ? null : tQ.range(TQ + XQ, zQ + XQ)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3238-L3240` → after: `L1624-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1624-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1624-L1656) · [Before (L3238-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3238-L3240)

```diff
-       function Gc(pp, ip, cp) {
-         const Op = pp.length - ip.length;
-         return Op >= 0 && (cp ? kc(pp.slice(Op), ip) : pp.indexOf(ip, Op) === Op)
+     function CW(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
+         wQ = {};
+       for (let qQ of QQ)
+         for (let QQ of Object.keys(qQ)) {
+           let WQ = qQ[QQ],
+             TQ = wQ[QQ];
+           if (void 0 === TQ) wQ[QQ] = WQ;
+           else if (TQ === WQ || void 0 === WQ);
+           else {
+             if (!Object.hasOwnProperty.call(XQ, QQ)) throw new Error("Config merge conflict for field " + QQ);
+             wQ[QQ] = XQ[QQ](TQ, WQ)
+           }
+         }
+       for (let qQ in WQ) void 0 === wQ[qQ] && (wQ[qQ] = WQ[qQ]);
+       return wQ
+ ... (17 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3243-L3244` → after: `L1660-L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1660-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1660-L1666) · [Before (L3243-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3243-L3244)

```diff
-       function rc(pp, ip) {
-         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : pp
+     function LW(QQ, WQ) {
+       return QQ == WQ || QQ.constructor == WQ.constructor && QQ.eq(WQ)
+     }
+     uW.prototype.startSide = uW.prototype.endSide = 0, uW.prototype.point = !1, uW.prototype.mapMode = cQ.TrackDel;
+     class kW {
+       constructor(QQ, WQ, XQ) {
+         this.from = QQ, this.to = WQ, this.value = XQ
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3246-L3248` → after: `L1668-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1668-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1668-L1669) · [Before (L3246-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3246-L3248)

```diff
- 
-       function Zc(pp, ip) {
-         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : void 0
+       static create(QQ, WQ, XQ) {
+         return new kW(QQ, WQ, XQ)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3251-L3268` → after: `L1673-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1673-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1673-L1678) · [Before (L3251-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3251-L3268)

```diff
-       function zc(pp) {
-         let ip = pp.length;
-         for (let cp = ip - 1; cp > 0; cp--) {
-           let Op = pp.charCodeAt(cp);
-           if (Op >= 48 && Op <= 57)
-             do {
-               --cp, Op = pp.charCodeAt(cp)
-             } while (cp > 0 && Op >= 48 && Op <= 57);
-           else {
-             if (!(cp > 4) || 110 !== Op && 78 !== Op) break;
-             if (--cp, Op = pp.charCodeAt(cp), 105 !== Op && 73 !== Op) break;
-             if (--cp, Op = pp.charCodeAt(cp), 109 !== Op && 77 !== Op) break;
-             --cp, Op = pp.charCodeAt(cp)
-           }
-           if (45 !== Op && 46 !== Op) break;
-           ip = cp
- ... (2 more removed lines; see GitHub link above)
+     function fW(QQ, WQ) {
+       return QQ.from - WQ.from || QQ.value.startSide - WQ.value.startSide
+     }
+     class SW {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.from = QQ, this.to = WQ, this.value = XQ, this.RwQ = wQ
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3270-L3274` → after: `L1680-L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1680-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1680-L1681) · [Before (L3270-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3270-L3274)

```diff
- 
-       function sc(pp, ip) {
-         for (let cp = 0; cp < pp.length; cp++)
-           if (pp[cp] === ip) return Kc(pp, cp), !0;
-         return !1
+       get length() {
+         return this.to[this.to.length - 1]
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3276-L3279` → after: `L1683-L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1683-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1683-L1692) · [Before (L3276-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3276-L3279)

```diff
- 
-       function Kc(pp, ip) {
-         for (let cp = ip; cp < pp.length - 1; cp++) pp[cp] = pp[cp + 1];
-         pp.pop()
+       findIndex(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           qQ = XQ ? this.to : this.from;
+         for (let TQ = wQ, zQ = qQ.length;;) {
+           if (TQ == zQ) return TQ;
+           let wQ = TQ + zQ >> 1,
+             sQ = qQ[wQ] - QQ || (XQ ? this.value[wQ].endSide : this.value[wQ].startSide) - WQ;
+           if (wQ == TQ) return sQ >= 0 ? TQ : zQ;
+           sQ >= 0 ? zQ = wQ : TQ = wQ + 1
+         }
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3281-L3283` → after: `L1694-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1694-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1694-L1696) · [Before (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3281-L3283)

```diff
- 
-       function Vc(pp, ip) {
-         pp[ip] = pp[pp.length - 1], pp.pop()
+       between(QQ, WQ, XQ, wQ) {
+         for (let qQ = this.findIndex(WQ, -1e9, !0), TQ = this.findIndex(XQ, 1e9, !1, qQ); qQ < TQ; qQ++)
+           if (!1 === wQ(this.from[qQ] + QQ, this.to[qQ] + QQ, this.value[qQ])) return !1
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3285-L3291` → after: `L1698-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1698-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1698-L1718) · [Before (L3285-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3285-L3291)

```diff
- 
-       function pO(pp, ip) {
-         return function(pp, ip) {
-           for (let cp = 0; cp < pp.length; cp++)
-             if (ip(pp[cp])) return Vc(pp, cp), !0;
-           return !1
-         }(pp, (pp => pp === ip))
+       map(QQ, WQ) {
+         let XQ = [],
+           wQ = [],
+           qQ = [],
+           TQ = -1,
+           zQ = -1;
+         for (let sQ = 0; sQ < this.value.length; sQ++) {
+           let FQ, PQ, gQ = this.value[sQ],
+             JQ = this.from[sQ] + QQ,
+             rQ = this.to[sQ] + QQ;
+           if (JQ == rQ) {
+             let QQ = WQ.mapPos(JQ, gQ.startSide, gQ.mapMode);
+             if (null == QQ) continue;
+             if (FQ = PQ = QQ, gQ.startSide != gQ.endSide && (PQ = WQ.mapPos(JQ, gQ.endSide), PQ < FQ)) continue
+           } else if (FQ = WQ.mapPos(JQ, gQ.startSide), PQ = WQ.mapPos(rQ, gQ.endSide), FQ > PQ || FQ == PQ && gQ.startSide > 0 && gQ.endSide <= 0) continue;
+           (PQ - FQ || gQ.endSide - gQ.startSide) < 0 || (TQ < 0 && (TQ = FQ), gQ.point && (zQ = Math.max(zQ, PQ - FQ)), XQ.push(gQ), wQ.push(FQ - TQ), qQ.push(PQ - TQ))
+ ... (5 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3293-L3295` → after: `L1720-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1720-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1720-L1723) · [Before (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3293-L3295)

```diff
- 
-       function iO(pp) {
-         return pp ? Uc : tc
+     }
+     class tW {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.chunkPos = QQ, this.chunk = WQ, this.nextLayer = XQ, this.RwQ = wQ
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3297-L3303` → after: `L1725-L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1725-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1725-L1726) · [Before (L3297-L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3297-L3303)

```diff
- 
-       function cO(pp) {
-         let {
-           prefix: ip,
-           suffix: cp
-         } = pp;
-         return `${ip}*${cp}`
+       static create(QQ, WQ, XQ, wQ) {
+         return new tW(QQ, WQ, XQ, wQ)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3305-L3307` → after: `L1728-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1728-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1728-L1730) · [Before (L3305-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3305-L3307)

```diff
- 
-       function OO(pp, ip) {
-         return dO.assert(LO(pp, ip)), ip.substring(pp.prefix.length, ip.length - pp.suffix.length)
+       get length() {
+         let QQ = this.chunk.length - 1;
+         return QQ < 0 ? 0 : Math.max(this.chunkEnd(QQ), this.nextLayer.length)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3309-L3316` → after: `L1732-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1732-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1732-L1735) · [Before (L3309-L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3309-L3316)

```diff
- 
-       function oO(pp, ip, cp) {
-         let Op, op = -1;
-         for (let Ip = 0; Ip < pp.length; Ip++) {
-           const Sp = pp[Ip],
-             xp = ip(Sp);
-           xp.prefix.length > op && LO(xp, cp) && (op = xp.prefix.length, Op = Sp)
-         }
+       get size() {
+         if (this.mI) return 0;
+         let QQ = this.nextLayer.size;
+         for (let WQ of this.chunk) QQ += WQ.value.length;
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3319-L3321` → after: `L1738-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1738-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1738-L1739) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3319-L3321)

```diff
- 
-       function IO(pp, ip, cp) {
-         return cp ? kc(pp.slice(0, ip.length), ip) : 0 === pp.lastIndexOf(ip, 0)
+       chunkEnd(QQ) {
+         return this.chunkPos[QQ] + this.chunk[QQ].length
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3323-L3325` → after: `L1741-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1741-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1741-L1785) · [Before (L3323-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3323-L3325)

```diff
- 
-       function SO(pp, ip) {
-         return IO(pp, ip) ? pp.substr(ip.length) : pp
+       update(QQ) {
+         let {
+           add: WQ = [],
+           sort: XQ = !1,
+           filterFrom: wQ = 0,
+           filterTo: qQ = this.length
+         } = QQ, TQ = QQ.filter;
+         if (0 == WQ.length && !TQ) return this;
+         if (XQ && (WQ = WQ.slice().sort(fW)), this.mI) return WQ.length ? tW.of(WQ) : this;
+         let zQ = new nW(this, null, -1).goto(0),
+           sQ = 0,
+           FQ = [],
+           PQ = new oW;
+         for (; zQ.value || sQ < WQ.length;)
+           if (sQ < WQ.length && (zQ.from - WQ[sQ].from || zQ.startSide - WQ[sQ].value.startSide) >= 0) {
+             let QQ = WQ[sQ++];
+ ... (29 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3327-L3330` → after: `L1787-L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1787-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1787-L1795) · [Before (L3327-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3327-L3330)

```diff
- 
-       function xO(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
-         return IO(cp(pp), cp(ip)) ? pp.substring(ip.length) : void 0
+       between(QQ, WQ, XQ) {
+         if (!this.mI) {
+           for (let wQ = 0; wQ < this.chunk.length; wQ++) {
+             let qQ = this.chunkPos[wQ],
+               TQ = this.chunk[wQ];
+             if (WQ >= qQ && QQ <= qQ + TQ.length && !1 === TQ.between(qQ, QQ - qQ, WQ - qQ, XQ)) return
+           }
+           this.nextLayer.between(QQ, WQ, XQ)
+         }
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3332-L3338` → after: `L1797-L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1797-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1797-L1799) · [Before (L3332-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3332-L3338)

```diff
- 
-       function LO(pp, ip) {
-         let {
-           prefix: cp,
-           suffix: Op
-         } = pp;
-         return ip.length >= cp.length + Op.length && IO(ip, cp) && Gc(ip, Op)
+       iter() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return xW.from([this]).goto(QQ)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3340-L3342` → after: `L1801-L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1801-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1801-L1802) · [Before (L3340-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3340-L3342)

```diff
- 
-       function YO(pp, ip) {
-         return cp => pp(cp) && ip(cp)
+       get mI() {
+         return this.nextLayer == this
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3344-L3352` → after: `L1804-L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1804-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1804-L1806) · [Before (L3344-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3344-L3352)

```diff
- 
-       function DO() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         return function() {
-           let pp;
-           for (const cp of ip)
-             if (pp = cp(...arguments), pp) return pp;
-           return pp
-         }
+       static iter(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return xW.from(QQ).goto(WQ)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3354-L3357` → after: `L1808-L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1808-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1808-L1831) · [Before (L3354-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3354-L3357)

```diff
- 
-       function AO(pp) {
-         return function() {
-           return !pp(...arguments)
+       static compare(QQ, WQ, XQ, wQ) {
+         let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
+           TQ = QQ.filter((QQ => QQ.RwQ > 0 || !QQ.mI && QQ.RwQ >= qQ)),
+           zQ = WQ.filter((QQ => QQ.RwQ > 0 || !QQ.mI && QQ.RwQ >= qQ)),
+           sQ = eW(TQ, zQ, XQ),
+           FQ = new NW(TQ, sQ, qQ),
+           PQ = new NW(zQ, sQ, qQ);
+         XQ.iterGaps(((QQ, WQ, XQ) => ZW(FQ, QQ, PQ, WQ, XQ, wQ))), XQ.empty && 0 == XQ.length && ZW(FQ, 0, PQ, 0, 0, wQ)
+       }
+       static eq(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           wQ = arguments.length > 3 ? arguments[3] : void 0;
+         null == wQ && (wQ = 999999999);
+         let qQ = QQ.filter((QQ => !QQ.mI && WQ.indexOf(QQ) < 0)),
+           TQ = WQ.filter((WQ => !WQ.mI && QQ.indexOf(WQ) < 0));
+         if (qQ.length != TQ.length) return !1;
+ ... (8 more added lines; see GitHub link above)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3360-L3364` → after: `L1834-L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1834-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1834-L1861) · [Before (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3360-L3364)

```diff
- 
-       function PO(pp) {}
- 
-       function WO(pp) {
-         return void 0 === pp ? void 0 : [pp]
+       static spans(QQ, WQ, XQ, wQ) {
+         let qQ = new NW(QQ, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(WQ),
+           TQ = WQ,
+           zQ = qQ.openStart;
+         for (;;) {
+           let QQ = Math.min(qQ.to, XQ);
+           if (qQ.point) {
+             let XQ = qQ.activeForPoint(qQ.to),
+               sQ = qQ.pointFrom < WQ ? XQ.length + 1 : qQ.point.startSide < 0 ? XQ.length : Math.min(XQ.length, zQ);
+             wQ.point(TQ, QQ, qQ.point, XQ, sQ, qQ.pointRank), zQ = Math.min(qQ.openEnd(QQ), XQ.length)
+           } else QQ > TQ && (wQ.span(TQ, QQ, qQ.active, zQ), zQ = qQ.openEnd(QQ));
+           if (qQ.to > XQ) return zQ + (qQ.point && qQ.to > XQ ? 1 : 0);
+           TQ = qQ.to, qQ.next()
+         }
+       }
+       static of (QQ) {
+ ... (12 more added lines; see GitHub link above)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3366-L3380` → after: `L1863-L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1863-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1863-L1867) · [Before (L3366-L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3366-L3380)

```diff
- 
-       function yO(pp, ip, cp, Op, op, Ip) {
-         Ip ?? (Ip = Ac);
-         let Sp = 0,
-           xp = 0;
-         const Lp = pp.length,
-           Yp = ip.length;
-         let Dp = !1;
-         for (; Sp < Lp && xp < Yp;) {
-           const Lp = pp[Sp],
-             Yp = ip[xp],
-             Ap = cp(Lp, Yp); - 1 === Ap ? (Op(Lp), Sp++, Dp = !0) : 1 === Ap ? (op(Yp), xp++, Dp = !0) : (Ip(Yp, Lp), Sp++, xp++)
-         }
-         for (; Sp < Lp;) Op(pp[Sp++]), Dp = !0;
-         for (; xp < Yp;) op(ip[xp++]), Dp = !0;
+       static join(QQ) {
+         if (!QQ.length) return tW.empty;
+         let WQ = QQ[QQ.length - 1];
+         for (let XQ = QQ.length - 2; XQ >= 0; XQ--)
+           for (let wQ = QQ[XQ]; wQ != tW.empty; wQ = wQ.nextLayer) WQ = new tW(wQ.chunkPos, wQ.chunk, WQ, Math.max(wQ.RwQ, WQ.RwQ));
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3383-L3386` → after: `L1870-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1870-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1870-L1874) · [Before (L3383-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3383-L3386)

```diff
- 
-       function UO(pp) {
-         const ip = [];
-         return wO(pp, ip, void 0, 0), ip
+     }
+     tW.empty = new tW([], [], null, -1), tW.empty.nextLayer = tW.empty;
+     class oW {
+       finishChunk(QQ) {
+         this.chunks.push(new SW(this.from, this.to, this.value, this.RwQ)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.RwQ), this.RwQ = -1, QQ && (this.from = [], this.to = [], this.value = [])
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3388-L3393` → after: `L1876-L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1876-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1876-L1877) · [Before (L3388-L3393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3388-L3393)

```diff
- 
-       function wO(pp, ip, cp, Op) {
-         for (const op of pp[Op]) {
-           let Ip;
-           cp ? (Ip = cp.slice(), Ip.push(op)) : Ip = [op], Op === pp.length - 1 ? ip.push(Ip) : wO(pp, ip, Ip, Op + 1)
-         }
+       constructor() {
+         this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.RwQ = -1, this.setMaxPoint = -1, this.nextLayer = null
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3395-L3402` → after: `L1879-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1879-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1879-L1880) · [Before (L3395-L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3395-L3402)

```diff
- 
-       function vO(pp, ip) {
-         if (void 0 !== pp) {
-           const cp = pp.length;
-           let Op = 0;
-           for (; Op < cp && ip(pp[Op]);) Op++;
-           return pp.slice(0, Op)
-         }
+       add(QQ, WQ, XQ) {
+         this.addInner(QQ, WQ, XQ) || (this.nextLayer || (this.nextLayer = new oW)).add(QQ, WQ, XQ)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3404-L3411` → after: `L1882-L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1882-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1882-L1885) · [Before (L3404-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3404-L3411)

```diff
- 
-       function tO(pp, ip) {
-         if (void 0 !== pp) {
-           const cp = pp.length;
-           let Op = 0;
-           for (; Op < cp && ip(pp[Op]);) Op++;
-           return pp.slice(Op)
-         }
+       addInner(QQ, WQ, XQ) {
+         let wQ = QQ - this.lastTo || XQ.startSide - this.last.endSide;
+         if (wQ <= 0 && (QQ - this.lastFrom || XQ.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
+         return !(wQ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = QQ), this.from.push(QQ - this.chunkStart), this.to.push(WQ - this.chunkStart), this.last = XQ, this.lastFrom = QQ, this.lastTo = WQ, this.value.push(XQ), XQ.poi … [truncated]
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3413-L3415` → after: `L1887-L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1887-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1887-L1891) · [Before (L3413-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3413-L3415)

```diff
- 
-       function HO() {
-         return "undefined" !== typeof process && !!process.nextTick && !process.browser && !0
+       addChunk(QQ, WQ) {
+         if ((QQ - this.lastTo || WQ.value[0].startSide - this.last.endSide) < 0) return !1;
+         this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, WQ.RwQ), this.chunks.push(WQ), this.chunkPos.push(QQ);
+         let XQ = WQ.value.length - 1;
+         return this.last = WQ.value[XQ], this.lastFrom = WQ.from[XQ] + QQ, this.lastTo = WQ.to[XQ] + QQ, !0
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3417-L3470` → after: `L1893-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1893-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1893-L1901) · [Before (L3417-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3417-L3470)

```diff
-       var dO, eO = (pp => (pp[pp.Off = 0] = "Off", pp[pp.Error = 1] = "Error", pp[pp.Warning = 2] = "Warning", pp[pp.Info = 3] = "Info", pp[pp.Verbose = 4] = "Verbose", pp))(eO || {});
-       (pp => {
-         let ip = 0;
- 
-         function cp(ip) {
-           return pp.currentLogLevel <= ip
-         }
- 
-         function Op(ip, Op) {
-           pp.loggingHost && cp(ip) && pp.loggingHost.log(ip, Op)
-         }
- 
-         function op(pp) {
-           Op(3, pp)
-         }
-         var Ip;
- ... (38 more removed lines; see GitHub link above)
+       finish() {
+         return this.finishInner(tW.empty)
+       }
+       finishInner(QQ) {
+         if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return QQ;
+         let WQ = tW.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(QQ) : QQ, this.setMaxPoint);
+         return this.from = null, WQ
+       }
+     }
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3472-L3474` → after: `L1903-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1903-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1903-L1911) · [Before (L3472-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3472-L3474)

```diff
-         function Wp(pp) {
-           let ip = arguments.length > 2 ? arguments[2] : void 0;
-           return Yp(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Illegal value:"} ${"object"===typeof pp&&Qi(pp,"kind")&&Qi(pp,"pos")?"SyntaxKind: "+dp(pp.kind):JSON.stringify(pp)}`, ip || Wp)
+     function eW(QQ, WQ, XQ) {
+       let wQ = new Map;
+       for (let TQ of QQ)
+         for (let QQ = 0; QQ < TQ.chunk.length; QQ++) TQ.chunk[QQ].RwQ <= 0 && wQ.set(TQ.chunk[QQ], TQ.chunkPos[QQ]);
+       let qQ = new Set;
+       for (let TQ of WQ)
+         for (let QQ = 0; QQ < TQ.chunk.length; QQ++) {
+           let WQ = wQ.get(TQ.chunk[QQ]);
+           null == WQ || (XQ ? XQ.mapPos(WQ) : WQ) != TQ.chunkPos[QQ] || (null === XQ || void 0 === XQ ? void 0 : XQ.touchesRange(WQ, WQ + TQ.chunk[QQ].length)) || qQ.add(TQ.chunk[QQ])
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3476-L3486` → after: `L1913-L1934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1913-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1913-L1934) · [Before (L3476-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3476-L3486)

```diff
- 
-         function yp(pp) {}
- 
-         function Up(pp) {
-           if ("function" !== typeof pp) return "";
-           if (Qi(pp, "name")) return pp.name;
-           {
-             const ip = Function.prototype.toString.call(pp),
-               cp = /^function\s+([\w$]+)\s*\(/.exec(ip);
-             return cp ? cp[1] : ""
-           }
+       return qQ
+     }
+     class nW {
+       constructor(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.layer = QQ, this.skip = WQ, this.EwQ = XQ, this.rank = wQ
+       }
+       get startSide() {
+         return this.value ? this.value.startSide : 0
+       }
+       get endSide() {
+         return this.value ? this.value.endSide : 0
+       }
+       goto(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
+         return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(QQ, WQ, !1), this
+ ... (6 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3488-L3515` → after: `L1936-L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1936-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1936-L1938) · [Before (L3488-L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3488-L3515)

```diff
- 
-         function wp() {
-           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             ip = arguments.length > 2 ? arguments[2] : void 0;
-           const cp = function(pp) {
-             const ip = tp.get(pp);
-             if (ip) return ip;
-             const cp = [];
-             for (const op in pp) {
-               const ip = pp[op];
-               "number" === typeof ip && cp.push([ip, op])
-             }
-             const Op = Ui(cp, ((pp, ip) => qc(pp[0], ip[0])));
-             return tp.set(pp, Op), Op
-           }(arguments.length > 1 ? arguments[1] : void 0);
-           if (0 === pp) return cp.length > 0 && 0 === cp[0][0] ? cp[0][1] : "0";
- ... (12 more removed lines; see GitHub link above)
+         if (this.chunkIndex < this.layer.chunk.length) {
+           let wQ = this.layer.chunk[this.chunkIndex].findIndex(QQ - this.layer.chunkPos[this.chunkIndex], WQ, !0);
+           (!XQ || this.rangeIndex < wQ) && this.setRangeIndex(wQ)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3517-L3530` → after: `L1940-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1940-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1940-L1954) · [Before (L3517-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3517-L3530)

```diff
-         pp.getAssertionLevel = function() {
-           return ip
-         }, pp.setAssertionLevel = function(cp) {
-           const Op = ip;
-           if (ip = cp, cp > Op)
-             for (const ip of Bi(Sp)) {
-               const Op = Sp[ip];
-               void 0 !== Op && pp[ip] !== Op.assertion && cp >= Op.level && (pp[ip] = Op, Sp[ip] = void 0)
-             }
-         }, pp.shouldAssert = xp, pp.fail = Yp, pp.failBadSyntaxKind = function pp(ip, cp, Op) {
-           return Yp(`${cp||"Unexpected node."}\r\nNode ${dp(ip.kind)} was unexpected.`, Op || pp)
-         }, pp.assert = Dp, pp.assertEqual = function pp(ip, cp, Op, op, Ip) {
-           if (ip !== cp) {
-             Yp(`Expected ${ip} === ${cp}. ${Op?op?`${Op} ${op}`:Op:""}`, Ip || pp)
+         this.next()
+       }
+       forward(QQ, WQ) {
+         (this.to - QQ || this.endSide - WQ) < 0 && this.gotoInner(QQ, WQ, !0)
+       }
+       next() {
+         for (;;) {
+           if (this.chunkIndex == this.layer.chunk.length) {
+             this.from = this.to = 1e9, this.value = null;
+             break
+           } {
+             let QQ = this.layer.chunkPos[this.chunkIndex],
+               WQ = this.layer.chunk[this.chunkIndex],
+               XQ = QQ + WQ.from[this.rangeIndex];
+             if (this.from = XQ, this.to = QQ + WQ.to[this.rangeIndex], this.value = WQ.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.EwQ < 0 || this.value.point && this.to - this.from >= this.EwQ) break
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3562-L3634` → after: `L1957-L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L1957-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L1957-L2002) · [Before (L3562-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3562-L3634)

```diff
- 
-         function ep(pp) {
-           return wp(pp, qo, !0)
-         }
- 
-         function jp(pp) {
-           return wp(pp, Mo, !0)
-         }
- 
-         function kp(pp) {
-           return wp(pp, bI, !0)
-         }
- 
-         function mp(pp) {
-           return wp(pp, aI, !0)
-         }
- ... (57 more removed lines; see GitHub link above)
+       }
+       setRangeIndex(QQ) {
+         if (QQ == this.layer.chunk[this.chunkIndex].value.length) {
+           if (this.chunkIndex++, this.skip)
+             for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
+           this.rangeIndex = 0
+         } else this.rangeIndex = QQ
+       }
+       nextChunk() {
+         this.chunkIndex++, this.rangeIndex = 0, this.next()
+       }
+       compare(QQ) {
+         return this.from - QQ.from || this.startSide - QQ.startSide || this.rank - QQ.rank || this.to - QQ.to || this.endSide - QQ.endSide
+       }
+     }
+     class xW {
+ ... (30 more added lines; see GitHub link above)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3637-L3687` → after: `L2007-L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2007-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2007-L2051) · [Before (L3637-L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3637-L3687)

```diff
-         function Np(pp) {
-           "__tsDebuggerDisplay" in pp || Object.defineProperties(pp, {
-             __tsDebuggerDisplay: {
-               value: pp => `NodeArray ${pp=String(pp).replace(/(?:,[\s\w]+:[^,]+)+\]$/,"]")}`
-             }
-           })
-         }
-         pp.attachFlowNodeDebugInfo = function(pp) {
-           return Jp && ("function" === typeof Object.setPrototypeOf ? (lp || (lp = Object.create(Object.prototype), Bp(lp)), Object.setPrototypeOf(pp, lp)) : Bp(pp)), pp
-         }, pp.attachNodeArrayDebugInfo = function(pp) {
-           Jp && ("function" === typeof Object.setPrototypeOf ? (Qp || (Qp = Object.create(Array.prototype), Np(Qp)), Object.setPrototypeOf(pp, Qp)) : Np(pp))
-         }, pp.enableDebugInfo = function() {
-           if (Jp) return;
-           const pp = new WeakMap,
-             ip = new WeakMap;
-           Object.defineProperties(bj.getSymbolConstructor().prototype, {
- ... (35 more removed lines; see GitHub link above)
+     function YW(QQ, WQ) {
+       for (let XQ = QQ[WQ];;) {
+         let wQ = 1 + (WQ << 1);
+         if (wQ >= QQ.length) break;
+         let qQ = QQ[wQ];
+         if (wQ + 1 < QQ.length && qQ.compare(QQ[wQ + 1]) >= 0 && (qQ = QQ[wQ + 1], wQ++), XQ.compare(qQ) < 0) break;
+         QQ[wQ] = XQ, QQ[WQ] = qQ, WQ = wQ
+       }
+     }
+     class NW {
+       constructor(QQ, WQ, XQ) {
+         this.EwQ = XQ, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = xW.from(QQ, WQ, XQ)
+       }
+       goto(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
+         return this.cursor.goto(QQ, WQ), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = QQ, this.endSide = WQ, this.openStart = -1, this.next(), this
+ ... (29 more added lines; see GitHub link above)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3689-L3699` → after: `L2053-L2057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2053-L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2053-L2057) · [Before (L3689-L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3689-L3699)

```diff
-           }), Object.defineProperties(bj.getSignatureConstructor().prototype, {
-             __debugFlags: {
-               get() {
-                 return Mp(this.flags)
-               }
-             },
-             __debugSignatureToString: {
-               value() {
-                 var pp;
-                 return null == (pp = this.lD) ? void 0 : pp.signatureToString(this)
-               }
+             this.removeActive(wQ), XQ && KW(XQ, wQ)
+           } else {
+             if (!this.cursor.value) {
+               this.to = this.endSide = 1e9;
+               break
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3701-L3746` → after: `L2059-L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2059-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2059-L2067) · [Before (L3701-L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3701-L3746)

```diff
-           });
-           const cp = [bj.getNodeConstructor(), bj.getIdentifierConstructor(), bj.getTokenConstructor(), bj.getSourceFileConstructor()];
-           for (const Op of cp) Qi(Op.prototype, "__debugKind") || Object.defineProperties(Op.prototype, {
-             __tsDebuggerDisplay: {
-               value() {
-                 return `${HA(this)?"GeneratedIdentifier":kE(this)?`Identifier '${hY(this)}'`:mE(this)?`PrivateIdentifier '${hY(this)}'`:xE(this)?`StringLiteral ${JSON.stringify(this.text.length<10?this.text:this.text.slice(10)+"...")}`:IE(this)?`NumericLiteral ${this.text}`:SE(th … [truncated]
-               }
-             },
-             __debugKind: {
-               get() {
-                 return dp(this.kind)
-               }
-             },
-             __debugNodeFlags: {
-               get() {
-                 return ep(this.flags)
- ... (30 more removed lines; see GitHub link above)
+             if (this.cursor.from > QQ) {
+               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
+               break
+             } {
+               let QQ = this.cursor.value;
+               if (QQ.point) {
+                 if (!(WQ && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
+                   this.point = QQ, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = QQ.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
+                   break
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3748-L3774` → after: `L2069-L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2069-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2069-L2070) · [Before (L3748-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3748-L3774)

```diff
-                 return cp
-               }
-             }
-           });
-           Jp = !0
-         }, pp.formatVariance = function(pp) {
-           const ip = 7 & pp;
-           let cp = 0 === ip ? "in out" : 3 === ip ? "[bivariant]" : 2 === ip ? "in" : 1 === ip ? "out" : 4 === ip ? "[independent]" : "";
-           return 8 & pp ? cp += " (unmeasurable)" : 16 & pp && (cp += " (unreliable)"), cp
-         };
-         class Tp {
-           __debugToString() {
-             var pp;
-             switch (this.kind) {
-               case 3:
-                 return (null == (pp = this.debugInfo) ? void 0 : pp.call(this)) || "(function mapper)";
- ... (11 more removed lines; see GitHub link above)
+                 this.cursor.next()
+               } else this.addActive(XQ), this.cursor.next()
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3778-L3996` → after: `L2074-L2076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2074-L2076) · [Before (L3778-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L3778-L3996)

```diff
- 
-         function fp(pp) {
-           let ip, cp = -1;
- 
-           function Op(pp) {
-             return pp.id || (pp.id = cp, cp--), pp.id
-           }
-           var op;
-           let Ip;
-           var Sp;
-           (op = ip || (ip = {})).lr = "\u2500", op.ud = "\u2502", op.dr = "\u256d", op.dl = "\u256e", op.ul = "\u256f", op.ur = "\u2570", op.udr = "\u251c", op.udl = "\u2524", op.dlr = "\u252c", op.ulr = "\u2534", op.udlr = "\u256b", (Sp = Ip || (Ip = {}))[Sp.None = 0] = "None",  … [truncated]
-           const xp = Object.create(null),
-             Lp = [],
-             Yp = [],
-             Dp = Up(pp, new Set);
-           for (const kp of Lp) kp.text = Hp(kp.flowNode, kp.circular), vp(kp);
- ... (203 more removed lines; see GitHub link above)
+         if (XQ) {
+           this.openStart = 0;
+           for (let WQ = XQ.length - 1; WQ >= 0 && XQ[WQ] < QQ; WQ--) this.openStart++
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4296-L4300` → after: `L2079-L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2079-L2083) · [Before (L4296-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L4296-L4300)

```diff
-       var KO, VO, po = zO ? () => zO.now() : Date.now,
-         io = {};
- 
-       function co(pp, ip, cp, Op) {
-         return pp ? Oo(ip, cp, Op) : So
+       activeForPoint(QQ) {
+         if (!this.active.length) return this.active;
+         let WQ = [];
+         for (let XQ = this.active.length - 1; XQ >= 0 && !(this.activeRank[XQ] < this.pointRank); XQ--)(this.activeTo[XQ] > QQ || this.activeTo[XQ] == QQ && this.active[XQ].endSide >= this.point.endSide) && WQ.push(this.active[XQ]);
+         return WQ.reverse()
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4302-L4303` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2085) · [Before (L4302-L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L4302-L4303)

```diff
- 
-       function Oo(pp, ip, cp) {
+       openEnd(QQ) {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4305-L4380` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2087) · [Before (L4305-L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L4305-L4380)

```diff
-         return {
-           enter: function() {
-             1 === ++Op && Po(ip)
-           },
-           exit: function() {
-             0 === --Op ? (Po(cp), Wo(pp, ip, cp)) : Op < 0 && dO.fail("enter/exit count does not match.")
-           }
-         }
-       }
-       op(io, {
-         clearMarks: () => Ho,
-         clearMeasures: () => to,
-         createTimer: () => Oo,
-         createTimerIf: () => co,
-         disable: () => jo,
-         enable: () => uo,
- ... (60 more removed lines; see GitHub link above)
+         for (let XQ = this.activeTo.length - 1; XQ >= 0 && this.activeTo[XQ] > QQ; XQ--) WQ++;
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4384-L125586` → after: `L2092-L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2092-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L2092-L2146) · [Before (L4384-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L4384-L125586)

```diff
-       function uo() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS;
-         var ip;
-         return xo || (xo = !0, KO || (KO = sO()), (null == KO ? void 0 : KO.performance) && (Lo = KO.performance.timeOrigin, (KO.shouldWriteNativeEvents || (null == (ip = null == pp ? void 0 : pp.cpuProfilingEnabled) ? void 0 : ip.call(pp)) || (null == pp ? void 0 : pp.debugMode) … [truncated]
-       }
- 
-       function jo() {
-         xo && (Yo.clear(), Do.clear(), Ao.clear(), VO = void 0, xo = !1)
-       }(pp => {
-         let ip, Op, op = 0,
-           Ip = 0;
-         const Sp = [];
-         let xp;
-         const Lp = [];
-         let Yp;
-         var Dp;
- ... (121187 more removed lines; see GitHub link above)
+     function ZW(QQ, WQ, XQ, wQ, qQ, TQ) {
+       QQ.goto(WQ), XQ.goto(wQ);
+       let zQ = wQ + qQ,
+         sQ = wQ,
+         FQ = wQ - WQ,
+         PQ = !!TQ.boundChange;
+       for (let gQ = !1;;) {
+         let WQ = QQ.to + FQ - XQ.to,
+           wQ = WQ || QQ.endSide - XQ.endSide,
+           qQ = wQ < 0 ? QQ.to + FQ : XQ.to,
+           JQ = Math.min(qQ, zQ);
+         if (QQ.point || XQ.point ? (QQ.point && XQ.point && LW(QQ.point, XQ.point) && OW(QQ.activeForPoint(QQ.to), XQ.activeForPoint(XQ.to)) || TQ.comparePoint(sQ, JQ, QQ.point, XQ.point), gQ = !1) : (gQ && TQ.boundChange(sQ), JQ > sQ && !OW(QQ.active, XQ.active) && TQ.compareRan … [truncated]
+         sQ = qQ, wQ <= 0 && QQ.next(), wQ >= 0 && XQ.next()
+       }
+     }
+ 
+ ... (39 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/304.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/304.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L4)

```diff
-   41728: (pp, ip, cp) => {
+   41627: QQ => {
+     function WQ(QQ) {
+       var WQ = new Error("Cannot find module '" + QQ + "'");
+       throw WQ.code = "MODULE_NOT_FOUND", WQ
+     }
+     WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 41627, QQ.exports = WQ
+   },
+   41694: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ,
+       i: () => qQ
+     });
+     const wQ = "Sends one question to the AI",
+       qQ = {
+         title: wQ,
+         "data-asks-ai": !0
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L6` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L24) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L6)

```diff
-       collectImportedWorldCodePluginNames: () => Yp
+       e: () => wQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L8-L11` → after: `L26-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L26-L35) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L8-L11)

```diff
-     var Op = cp(2487),
-       op = cp(37055),
-       Ip = cp(41647),
-       Sp = cp.n(Ip);
+     const wQ = String.raw`
+ 	/** The ID of the player running the code.
+ 	 *
+ 	 * Lobby code usually has nobody running it, so this is null.
+ 	 */
+ 	declare const myId: string | null
+ 	/** The position of the code block or press to code board */
+ 	declare const thisPos: [number, number, number]
+ 	/** The owner of the current custom lobby */
+ 	declare const lobbyOwnerId: string | null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L13-L23` → after: `L37-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L37-L41) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L13-L23)

```diff
-     function xp(pp) {
-       return Sp().isImportDeclaration(pp) && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
-         const ip = pp.importClause;
-         if (!ip) return !0;
-         if (ip.isTypeOnly) return !1;
-         const cp = ip.namedBindings;
-         return !(cp && !Sp().isNamespaceImport(cp)) || !!ip.name || cp.elements.some((pp => !pp.isTypeOnly))
-       }(pp) || Sp().isExportDeclaration(pp) && pp.moduleSpecifier && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
-         return !pp.isTypeOnly && (!pp.exportClause || !Sp().isNamedExports(pp.exportClause) || 0 === pp.exportClause.elements.length || pp.exportClause.elements.some((pp => !pp.isTypeOnly)))
-       }(pp) ? pp.moduleSpecifier.text : Sp().isImportEqualsDeclaration(pp) && !pp.isTypeOnly && Sp().isExternalModuleReference(pp.moduleReference) && pp.moduleReference.expression && Sp().isStringLiteral(pp.moduleReference.expression) ? pp.moduleReference.expression.text : Sp().i … [truncated]
-     }
+ 	interface Console {
+ 		/** Log a message to chat. */
+ 		log(message: any): void
+ 	}
+ 	declare const console: Console
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L25-L38` → after: `L43-L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L43-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L43-L1853) · [Before (L25-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L25-L38)

```diff
-     function Lp(pp, ip, cp) {
-       if (!ip.startsWith("./") && !ip.startsWith("../")) return;
-       const op = ((pp.includes("/") ? pp.slice(0, pp.lastIndexOf("/") + 1) : "") + ip).split("/"),
-         Ip = [];
-       for (const Op of op)
-         if ("" !== Op && "." !== Op)
-           if (".." !== Op) Ip.push(Op);
-           else {
-             if (0 === Ip.length) return;
-             Ip.pop()
-           } const Sp = Ip.join("/");
-       for (const xp of [Sp, `${Sp}.ts`, `${Sp}.js`])
-         if (xp in cp && !(0, Op.m)(xp)) return xp
-     }
+ 	interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (1795 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L40-L64` → after: `L1855-L4268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L1855-L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L1855-L4268) · [Before (L40-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L40-L64)

```diff
-     function Yp(pp) {
-       const ip = new Set,
-         cp = (0, op.d)(pp);
-       if (!cp) return [];
-       const Op = [cp],
-         Ip = new Set;
-       for (; Op.length > 0;) {
-         const cp = Op.pop();
-         if (!cp || Ip.has(cp)) continue;
-         Ip.add(cp);
-         const Yp = Sp().createSourceFile(cp, pp[cp], Sp().ScriptTarget.Latest, !1),
-           Dp = Yp => {
-             const Ap = xp(Yp),
-               Pp = Ap ? (0, op.q)(Ap) : null;
-             if (Pp) ip.add(Pp);
-             else if (Ap) {
- ... (9 more removed lines; see GitHub link above)
+ calcExplosionForce(eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: number[], ignoreProjectiles: boolean): { force: Pos; forceFrac: number; }
+ /**
+  * Add a custom killfeed message to the killfeed
+  * @param killer - The entity ID or a custom name and colour for the killer
+  * @param victim - The entity ID or a custom name and colour for the victim
+  * @param withItem - The item used
+  */
+ addCustomKillfeedMessage(killer: { eId: EntityId } | { name: string; colour: string }, victim: { eId: EntityId } | { name: string; colour: string }, withItem: string): void
+ /**
+  * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
+  *
+  *
+  * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
+  * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
+  *
+  * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
+ ... (2398 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L66` → after: `L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L4270) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L66)

```diff
-   41688: pp => {
+   41671: QQ => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L71` → after: `L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L4275) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L71)

```diff
-     ip.keys = () => [], ip.resolve = ip, ip.id = 41688, pp.exports = ip
+     WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 41671, QQ.exports = WQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L73-L79` → after: `L4277-L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4277-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/304.js#L4277-L4284) · [Before (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/304.js#L73-L79)

```diff
-   41672: () => {},
-   41659: () => {},
-   41695: () => {},
-   41666: () => {},
-   41661: () => {},
-   41653: () => {},
-   41681: () => {}
+   41618: () => {},
+   41663: () => {},
+   41643: () => {},
+   41680: () => {},
+   41660: () => {},
+   41652: () => {},
+   41635: () => {},
+   41668: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/305.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/305.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6)

```diff
-   41709: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => jp
+   41613: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L8-L413` → after: `L8-L7360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L8-L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/305.js#L8-L7360) · [Before (L8-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/305.js#L8-L413)

```diff
-     var Op = cp(62),
-       op = cp(4852),
-       Ip = cp(1692),
-       Sp = cp(1049),
-       xp = cp.n(Sp),
-       Lp = cp(1480),
-       Yp = cp(1201),
-       Dp = cp(4819),
-       Ap = cp(4831),
-       Pp = cp(4838),
-       Wp = cp(1112);
- 
-     function yp(pp) {
-       return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
- ... (390 more removed lines; see GitHub link above)
+     const wQ = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (7337 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/306.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/306.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/306.js#L4)

```diff
-   41736: (pp, ip, cp) => {
+   41615: (QQ, WQ, XQ) => {
+     function wQ() {
+       return wQ = Object.assign ? Object.assign.bind() : function(QQ) {
+         for (var WQ = 1; WQ < arguments.length; WQ++) {
+           var XQ = arguments[WQ];
+           for (var wQ in XQ)({}).hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
+         }
+         return QQ
+       }, wQ.apply(null, arguments)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L6` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/306.js#L15-L16) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/306.js#L6)

```diff
-       ensureLocalBloxdTypes: () => vp
+       c: () => rQ,
+       g: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L17` → after: `L18-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L18-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/306.js#L18-L117) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/306.js#L8-L17)

```diff
-     var Op = cp(4874),
-       op = cp(41630),
-       Ip = cp(41621),
-       Sp = cp(37053),
-       xp = cp(37055),
-       Lp = cp(37070);
-     const Yp = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var qQ = !1;
+     try {
+       qQ = "undefined" !== typeof localStorage
+     } catch (jQ) {}
+     var TQ = "undefined" !== typeof process,
+       zQ = qQ && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || TQ && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(QQ) {
+         return ""
+       };
+ ... (84 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L20-L21` → after: `L120-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L120-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/306.js#L120-L148) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/306.js#L20-L21)

```diff
-       return pp.replace(/^\//, "")
-     }
+       throw new Error("Method '" + QQ + "' is not implemented.")
+     }
+ 
+     function PQ(QQ, WQ) {
+       return function() {
+         for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
+         var TQ = WQ.apply(void 0, wQ),
+           sQ = "string" === typeof TQ ? TQ.slice(0, 80) + "..." : TQ;
+         return zQ.apply(void 0, ["> " + QQ].concat(wQ)), zQ("< " + sQ), TQ
+       }
+     }
+     var gQ = function(QQ) {
+         return wQ({}, QQ.getDefaultCompilerOptions(), {
+           jsx: QQ.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L24-L107` → after: `L151-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L151-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/306.js#L151-L229) · [Before (L24-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/306.js#L24-L107)

```diff
-       return Dp((0, xp.s)(pp.name, "")).replace(/\/$/, "")
-     }
- 
-     function Pp(pp) {
-       return pp.typesVfsPath.slice(pp.typesVfsPath.lastIndexOf("/") + 1)
-     }
- 
-     function Wp(pp) {
-       return JSON.stringify({
-         name: pp.specifier,
-         types: Pp(pp)
-       }, null, "\t") + "\n"
-     }
-     async function yp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-       const cp = [];
- ... (68 more removed lines; see GitHub link above)
+       return {
+         args: [],
+         createDirectory: function() {
+           return FQ("createDirectory")
+         },
+         directoryExists: PQ("directoryExists", (function(WQ) {
+           return Array.from(QQ.keys()).some((function(QQ) {
+             return QQ.startsWith(WQ)
+           }))
+         })),
+         exit: function() {
+           return FQ("exit")
+         },
+         fileExists: PQ("fileExists", (function(WQ) {
+           return QQ.has(WQ) || QQ.has(JQ(WQ))
+         })),
+ ... (63 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/307.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/307.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710)

#### 1. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L20` → after: `L4-L125577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L4-L125577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L125577) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L20)

```diff
-   41792: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       installImageBitmapTextureLoader: () => Yp
-     });
-     var Op = cp(40088),
-       op = cp(41798),
-       Ip = cp(3309);
- 
-     function Sp(pp, ip) {
-       if ("string" === typeof pp) {
-         const cp = (0, Ip.h)(pp);
-         return cp ? new Blob([(0, Ip.d)(cp.base64)], {
-           type: cp.mimeType || ip
-         }) : null
-       }
-       return pp instanceof Blob ? pp : new Blob([pp], {
- ... (1 more removed lines; see GitHub link above)
+   41631: (QQ, WQ, XQ) => {
+     var wQ = "/index.js",
+       qQ = {};
+     (QQ => {
+       var WQ = Object.defineProperty,
+         qQ = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (QQ, XQ) => {
+           for (var wQ in XQ) WQ(QQ, wQ, {
+             get: XQ[wQ],
+             enumerable: !0
+           })
+         }),
+         TQ = {};
+       qQ(TQ, {
+         ANONYMOUS: () => Z3,
+         AccessFlags: () => sT,
+         AssertionLevel: () => pX,
+ ... (125558 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L22-L72` → after: `L125579-L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R125579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L125579-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/307.js#L125579-L125586) · [Before (L22-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/307.js#L22-L72)

```diff
-     }
-     const xp = function(pp, ip, cp, Op) {
-       let Ip, xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         Lp = arguments.length > 5 ? arguments[5] : void 0,
-         Yp = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         Ip = Sp(pp, xp)
-       } catch {
-         Ip = null
-       }
-       return Ip ? (createImageBitmap(Ip, {
-         premultiplyAlpha: "none",
-         colorSpaceConversion: "none",
-         ...Lp
-       }).then((pp => {
-         ip(pp)
- ... (35 more removed lines; see GitHub link above)
+     })({
+       get exports() {
+         return qQ
+       },
+       set exports(WQ) {
+         qQ = WQ, QQ.exports && (QQ.exports = WQ)
+       }
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/308.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/308.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L4)

```diff
-   41869: (pp, ip, cp) => {
+   41718: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L6)

```diff
-       d: () => Ip
+       collectImportedWorldCodePluginNames: () => PQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L2721` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L11) · [Before (L8-L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L2721)

```diff
-     var Op = cp(40314),
-       op = cp(41871);
-     class Ip {
-       constructor(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = cp, this.sOp = [], this._maxBlockCapacity = ip || 64, this._selectionContent = new Op.d(1024), this._creationFunc = pp
-       }
-       update(pp, ip, cp) {
-         op.b._CreateBlocks(pp, ip, cp, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       TOp(pp) {
-         for (let ip = 0; ip < this.blocks.length; ip++) {
-           this.blocks[ip].addEntry(pp)
-         }
-       }
-       xJ(pp) {
- ... (2698 more removed lines; see GitHub link above)
+     var wQ = XQ(2531),
+       qQ = XQ(37158),
+       TQ = XQ(41631),
+       zQ = XQ.n(TQ);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L2724-L2852` → after: `L14-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L14-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L14-L37) · [Before (L2724-L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L2724-L2852)

```diff
-       pp.direction.scaleToRef(pp._properties.directionScale, pp._properties.scaledDirection)
-     }
- 
-     function Li(pp, ip) {
-       ip.particleEmitterType.startPositionFunction(ip._emitterWorldMatrix, pp.position, pp, ip.isLocal)
-     }
- 
-     function Yi(pp, ip) {
-       ip.startPositionFunction(ip._emitterWorldMatrix, pp.position, pp, ip.isLocal)
-     }
- 
-     function Di(pp, ip) {
-       pp._properties.localPosition ? pp._properties.localPosition.rM(pp.position) : pp._properties.localPosition = pp.position.clone(), Ip.o.TransformCoordinatesToRef(pp._properties.localPosition, ip._emitterWorldMatrix, pp.position)
-     }
- 
-     function Ai(pp, ip) {
- ... (113 more removed lines; see GitHub link above)
+       return zQ().isImportDeclaration(QQ) && zQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
+         const WQ = QQ.importClause;
+         if (!WQ) return !0;
+         if (WQ.isTypeOnly) return !1;
+         const XQ = WQ.namedBindings;
+         return !(XQ && !zQ().isNamespaceImport(XQ)) || !!WQ.name || XQ.elements.some((QQ => !QQ.isTypeOnly))
+       }(QQ) || zQ().isExportDeclaration(QQ) && QQ.moduleSpecifier && zQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
+         return !QQ.isTypeOnly && (!QQ.exportClause || !zQ().isNamedExports(QQ.exportClause) || 0 === QQ.exportClause.elements.length || QQ.exportClause.elements.some((QQ => !QQ.isTypeOnly)))
+       }(QQ) ? QQ.moduleSpecifier.text : zQ().isImportEqualsDeclaration(QQ) && !QQ.isTypeOnly && zQ().isExternalModuleReference(QQ.moduleReference) && QQ.moduleReference.expression && zQ().isStringLiteral(QQ.moduleReference.expression) ? QQ.moduleReference.expression.text : zQ().i … [truncated]
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+       if (!WQ.startsWith("./") && !WQ.startsWith("../")) return;
+       const qQ = ((QQ.includes("/") ? QQ.slice(0, QQ.lastIndexOf("/") + 1) : "") + WQ).split("/"),
+         TQ = [];
+       for (const wQ of qQ)
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L2856-L4038` → after: `L41-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L41-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L41-L61) · [Before (L2856-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L2856-L4038)

```diff
-       pp.previousItem && (pp.previousItem.nextItem = pp.nextItem), pp.nextItem && (pp.nextItem.previousItem = pp.previousItem)
-     }
-     var li = cp(40550);
-     class Qi extends jp {
-       get startDirectionFunction() {
-         return this._startDirectionFunction
-       }
-       set startDirectionFunction(pp) {
-         this._startDirectionFunction !== pp && (this._startDirectionFunction = pp, this._directionCreation.process = pp ? ci : ii)
-       }
-       get startPositionFunction() {
-         return this._startPositionFunction
-       }
-       set startPositionFunction(pp) {
-         this._startPositionFunction !== pp && (this._startPositionFunction = pp, this._positionCreation.process = pp ? Yi : Li)
-       }
- ... (1167 more removed lines; see GitHub link above)
+       const WQ = new Set,
+         XQ = (0, qQ.c)(QQ);
+       if (!XQ) return [];
+       const wQ = [XQ],
+         TQ = new Set;
+       for (; wQ.length > 0;) {
+         const XQ = wQ.pop();
+         if (!XQ || TQ.has(XQ)) continue;
+         TQ.add(XQ);
+         const PQ = zQ().createSourceFile(XQ, QQ[XQ], zQ().ScriptTarget.Latest, !1),
+           gQ = PQ => {
+             const JQ = sQ(PQ),
+               rQ = JQ ? (0, qQ.q)(JQ) : null;
+             if (rQ) WQ.add(rQ);
+             else if (JQ) {
+               const WQ = FQ(XQ, JQ, QQ);
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4045-L4069` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L66) · [Before (L4045-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L4045-L4069)

```diff
-   41888: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       SkyMaterial: () => Hp,
-       _MaxColorValueForRenderTarget: () => tp
-     });
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40233),
-       Sp = cp(37313),
-       xp = cp(40472),
-       Lp = cp(40523),
-       Yp = cp(41851),
-       Dp = cp(41378),
-       Ap = cp(40289),
-       Pp = cp(37368),
-       Wp = cp(40546),
- ... (9 more removed lines; see GitHub link above)
+   41671: QQ => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4071-L4078` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L68-L69) · [Before (L4071-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L4071-L4078)

```diff
-       switch (pp) {
-         case Yp.d.TEXTURETYPE_HALF_FLOAT:
-           return 65504;
-         case Yp.d.TEXTURETYPE_FLOAT:
-           return 3e38;
-         default:
-           return 1
-       }
+       var WQ = new Error("Cannot find module '" + QQ + "'");
+       throw WQ.code = "MODULE_NOT_FOUND", WQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4080-L4406` → after: `L71-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/308.js#L71-L79) · [Before (L4080-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/308.js#L4080-L4406)

```diff
-     let Hp = (() => {
-       var pp;
-       let ip, xp, Yp, Pp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp = Lp.e,
-         lp = [],
-         Qp = [],
-         Jp = [],
-         Bp = [],
-         Np = [],
-         Tp = [],
-         fp = [],
-         bp = [],
-         hp = [],
-         ap = [],
-         np = [],
-         Fp = [],
-         gp = [],
- ... (311 more removed lines; see GitHub link above)
+     WQ.keys = () => [], WQ.resolve = WQ, WQ.id = 41671, QQ.exports = WQ
+   },
+   41663: () => {},
+   41643: () => {},
+   41680: () => {},
+   41660: () => {},
+   41652: () => {},
+   41635: () => {},
+   41668: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/309.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/309.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L31` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L6) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L31)

```diff
-   41955: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip
-     });
-     var Op = cp(41948),
-       op = cp(41959);
- 
-     function Ip(pp) {
-       (0, op.e)(pp), (0, Op.q)(pp);
-       const ip = pp._surfaces;
-       for (const cp of ip) cp._renderingContexts.length = 0, cp._ro?.disconnect(), cp._context.unconfigure();
-       ip.length = 0;
-       try {
-         pp._disposeManagedResources?.(), pp._disposeStorageBuffers?.()
-       } finally {
-         pp._device.destroy()
- ... (12 more removed lines; see GitHub link above)
+   41701: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => bQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L33-L179` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L8-L18) · [Before (L33-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L33-L179)

```diff
-     var Op = cp(41905);
-     var op = "Babylon Lite v1.32.0",
-       Ip = cp(41952);
- 
-     function Sp(pp) {
-       return "clientWidth" in pp
-     }
-     var xp = 1;
- 
-     function Lp(pp, ip, cp) {
-       const Lp = ip.getContext("webgpu");
-       Lp || (0, Op.e)(54), Sp(ip) && ip.setAttribute("data-engine", op);
-       const Yp = cp?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         Dp = cp?.srgb ? (Ap = Yp).endsWith("-srgb") ? Ap : `${Ap}-srgb` : Yp;
-       var Ap;
-       const Pp = cp?.alphaMode ?? "opaque";
- ... (131 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(5071),
+       TQ = XQ(1739),
+       zQ = XQ(1081),
+       sQ = XQ.n(zQ),
+       FQ = XQ(1507),
+       PQ = XQ(1226),
+       gQ = XQ(5036),
+       JQ = XQ(5049),
+       rQ = XQ(5057),
+       IQ = XQ(1145);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L182` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L21) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L182)

```diff
-       pp._animFrameId && cancelAnimationFrame(pp._animFrameId), pp._animFrameId = 0, pp._renderFn = null, pp._flushGpuRetirements?.(pp)
+       return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L186-L189` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L26-L27) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L186-L189)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.surfaces;
-       if (cp !== pp.surfaces)
-         for (let op = cp.length; op--;) cp[op].engine !== pp && (0, Op.e)(49);
-       ep(pp, ip, cp)
+       const XQ = jQ(QQ).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${WQ}" title="${XQ}" aria-label="${XQ}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L193-L215` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L31-L39) · [Before (L193-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L193-L215)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp._surfaces,
-         Op = 0;
-       for (let Ip = cp.length; Ip--;) Op += cp[Ip]._renderingContexts.length;
-       if (!Op) return pp.drawCallCount = 0, pp._flushGpuRetirements?.(pp);
-       const op = pp._device.createCommandEncoder({
-         label: "frame"
-       });
-       pp._currentEncoder = op, pp._currentDelta = ip;
-       try {
-         pp._gpuTimerBegin?.(op), Op = 0;
-         for (let pp = 0; pp < cp.length; pp++) {
-           const ip = cp[pp];
-           ip._capturePreFrame?.(ip), Yp(ip);
-           const op = ip._renderingContexts;
-           for (let pp = 0; pp < op.length; pp++) {
-             const ip = op[pp];
- ... (7 more removed lines; see GitHub link above)
+       const XQ = [],
+         wQ = QQ.toLowerCase(),
+         qQ = WQ.toLowerCase();
+       let TQ = 0;
+       for (; TQ < QQ.length;) {
+         const zQ = wQ.indexOf(qQ, TQ);
+         if (-1 === zQ) {
+           XQ.push(QQ.slice(TQ));
+           break
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L217-L519` → after: `L41-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L41-L44) · [Before (L217-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L217-L519)

```diff
-         pp._gpuTimerEnd?.(ip), pp._cbs[0] = ip.finish(), pp._device.queue.submit(pp._cbs), pp._flushGpuRetirements?.(pp), pp.drawCallCount = Op, pp._gpuTimerResolve?.()
-       } finally {
-         pp._currentEncoder = void 0
-       }
-     }
-   },
-   41911: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => op,
-       h: () => Ip,
-       j: () => Op
-     });
-     var Op = globalThis.GPUTextureUsage,
-       op = globalThis.GPUBufferUsage,
-       Ip = globalThis.GPUShaderStage;
-     globalThis.GPUColorWrite
- ... (287 more removed lines; see GitHub link above)
+         zQ > TQ && XQ.push(QQ.slice(TQ, zQ)), XQ.push((0, IQ.jsx)("mark", {
+           className: "DocsHighlight",
+           children: QQ.slice(zQ, zQ + WQ.length)
+         }, zQ)), TQ = zQ + WQ.length
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L523-L628` → after: `L48-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L48-L57) · [Before (L523-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L523-L628)

```diff
-     var vp = cp(41977),
-       tp = new Sp.k(1),
-       Hp = new Sp.c(tp.buffer);
- 
-     function dp(pp) {
-       let ip = 0;
-       for (const cp of pp) ip += cp._lightVersion ?? 0;
-       return ip
-     }
- 
-     function ep(pp, ip) {
-       pp.fill(0);
-       let cp = 0;
-       for (const Op of ip) {
-         if (cp >= vp.d) break;
-         Op._writeLightUbo && (Op._writeLightUbo(pp, 4 + 16 * cp), cp++)
- ... (90 more removed lines; see GitHub link above)
+     var VQ = XQ(1094),
+       DQ = XQ(1416),
+       pQ = XQ(37169),
+       GQ = XQ(37172);
+     const UQ = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L630-L632` → after: `L59-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L59-L63) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L630-L632)

```diff
-         Dp = {
-           loadOp: "clear",
-           storeOp: "store"
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L634-L879` → after: `L65-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L65-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L65-L69) · [Before (L634-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L634-L879)

```diff
-         Ap = {
-           ...Rp([], -1),
-           name: pp.name,
-           _config: pp,
-           _ownsTargets: !pp.sharedRt,
-           engine: ip,
-           pw: cp,
-           _passes: [],
-           _renderPassDescriptor: {
-             colorAttachments: [Dp]
-           },
-           _colorAttachment: Dp,
-           _sceneUBO: Pp(ip, 368),
-           _suData: new Sp.c(92),
-           _sceneUboCacheKey: [],
-           _targetSignature: Lp,
- ... (230 more removed lines; see GitHub link above)
+         callbacks: {
+           tabStep: "docsCallbacksTab",
+           tabText: "codeEditor:tutorialCallbacksTab",
+           pageStep: "docsCallbacks",
+           pageText: "codeEditor:tutorialCallbacks"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L881-L885` → after: `L71-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L71-L73) · [Before (L881-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L881-L885)

```diff
-         Op = Sp.push(yp)
-       }
-       if (Op && (Sp.sort(((pp, ip) => pp.order - ip.order)), pp._renderableVersion++, pp._materialEpoch++), ip.length = 0, !Ip) return op;
-       const xp = Ip;
-       return cp.e(367).then((() => cp(61471))).then((ip => {
+       },
+       bQ = (0, wQ.memo)((function(QQ) {
+         var WQ, XQ, zQ, JQ, rQ, bQ, vQ;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L887` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L75-L77) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L887)

```diff
-           C: cp
+           popOutDocs: dQ,
+           hideDocs: HQ,
+           tutorialEnabled: aQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L889-L966` → after: `L79-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L79-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L79-L160) · [Before (L889-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L889-L966)

```diff
-         return cp(pp, xp, op)
-       }), (ip => {
-         const cp = pp._runtimeBuilds;
-         cp ? cp._x(ip) : console.error(ip)
-       }))
-     }
-     var Np = null;
- 
-     function Tp(pp, ip) {
-       const cp = pp.engine,
-         op = {
-           _kind: "pw",
-           surface: pp,
-           clearColor: {
-             r: .2,
-             g: .2,
- ... (62 more removed lines; see GitHub link above)
+         const [lQ, hQ] = (0, wQ.useState)(qQ.e[0].id), iQ = (0, wQ.useRef)(null), cQ = (0, wQ.useRef)(null), [AQ, RQ] = (0, wQ.useState)(""), [EQ, CQ] = (0, wQ.useState)(0), [uQ, LQ] = (0, wQ.useState)(null), [kQ, fQ] = (0, wQ.useState)(!1), [SQ, tQ] = (0, wQ.useState)(160), oQ = … [truncated]
+         (0, wQ.useEffect)((() => {
+           NQ && AQ.length > 0 && (RQ(""), YQ((QQ => QQ + 1)))
+         }), [NQ, AQ]);
+         const ZQ = AQ.length > 0,
+           OQ = (0, wQ.useMemo)((() => function(QQ) {
+             if (!QQ) return [];
+             const WQ = QQ.toLowerCase(),
+               XQ = [];
+             for (const wQ of qQ.e) {
+               const QQ = wQ.content.toLowerCase();
+               let qQ = 0,
+                 TQ = -1,
+                 zQ = 0,
+                 sQ = QQ.indexOf(WQ, zQ);
+               for (; - 1 !== sQ;) - 1 === TQ && (TQ = sQ), qQ++, zQ = sQ + WQ.length, sQ = QQ.indexOf(WQ, zQ);
+ ... (66 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L968-L971` → after: `L162-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L162-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L162-L167) · [Before (L968-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L968-L971)

```diff
-             },
-             dispose() {
-               for (const ip of pp._tasks) ip.dispose();
-               pp._tasks.length = 0, pp._currentProcessedTask = null
+             }(QQ, WQ))), qQ = qQ.replace(/\n{2,}/g, "\n<br/>\n");
+             for (let zQ = 0; zQ < TQ.length; zQ++) qQ = qQ.replace(`\0PLACEHOLDER_${zQ}\0`, TQ[zQ]);
+             if (wQ) {
+               const QQ = jQ(wQ).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
+                 WQ = new RegExp(QQ, "gi");
+               qQ = qQ.replace(/([^<>]+)(?=<|$)/g, (QQ => QQ.replace(WQ, (QQ => `<mark class="DocsHighlight">${QQ}</mark>`))))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L974-L1223` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L188-L189) · [Before (L974-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L974-L1223)

```diff
-           return pp
-         }();
-       if (op._frameGraph = Sp, !1 !== ip?.defaultRenderTask) {
-         const ip = pp.msaaSamples > 1,
-           Ip = ip ? (0, Op.e)({
-             lbl: "scene-color",
-             format: pp.format,
-             dFormat: "depth24plus-stencil8",
-             samples: pp.msaaSamples,
-             size: pp
-           }) : pp.scRT,
-           xp = ip ? void 0 : (0, Op.e)({
-             lbl: "scene-depth",
-             dFormat: "depth24plus-stencil8",
-             samples: 1,
-             size: pp
- ... (234 more removed lines; see GitHub link above)
+           return QQ.addEventListener("click", WQ, !0), () => {
+             QQ.removeEventListener("click", WQ, !0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L1225-L1379` → after: `L191-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L191-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/309.js#L191-L413) · [Before (L1225-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/309.js#L1225-L1379)

```diff
-         }, {
-           binding: 1,
-           visibility: Op.h.FRAGMENT,
-           sampler: {}
-         }]
-       })
-     }
- 
-     function Wp(pp, ip, cp) {
-       const Op = pp._device,
-         op = Op.createCommandEncoder();
-       yp(pp, ip, op, cp), Op.queue.submit([op.finish()])
-     }
- 
-     function yp(pp, ip, cp, Op) {
-       if (ip.mipLevelCount <= 1) return;
- ... (139 more removed lines; see GitHub link above)
+         }), []);
+         const [WW, XW] = (0, wQ.useState)(0);
+         (0, wQ.useEffect)((() => {
+           if (!ZQ || !cQ.current) return void XW(0);
+           const QQ = cQ.current.querySelectorAll(".DocsHighlight").length;
+           XW(QQ)
+         }), [ZQ, QW]), (0, wQ.useEffect)((() => {
+           if (null === uQ || !cQ.current) return;
+           LQ(null);
+           const QQ = cQ.current.querySelectorAll(".DocsHighlight");
+           if (0 === QQ.length) return;
+           const WQ = Math.min(uQ, QQ.length - 1);
+           CQ(WQ), QQ.forEach((QQ => {
+             QQ.classList.remove("DocsHighlightActive")
+           })), QQ[WQ].classList.add("DocsHighlightActive"), QQ[WQ].scrollIntoView({
+             block: "center",
+ ... (207 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/310.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/310.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/310.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/310.js#L4)

```diff
-   41996: (pp, ip, cp) => {
+   41724: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/310.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/310.js#L6)

```diff
-       parseShaderPack: () => Op
+       ensureLocalBloxdTypes: () => VQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L10-L15` → after: `L20-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L20-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/310.js#L20-L42) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/310.js#L10-L15)

```diff
-       var ip, cp;
-       const Op = pp.get("shaderPackUrl"),
-         op = null !== (ip = pp.get("shaderPackMode")) && void 0 !== ip ? ip : "strict";
-       if (null === Op) {
-         if (pp.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
+       return QQ.replace(/^\//, "")
+     }
+ 
+     function JQ(QQ) {
+       return gQ((0, sQ.t)(QQ.name, "")).replace(/\/$/, "")
+     }
+ 
+     function rQ(QQ) {
+       return QQ.typesVfsPath.slice(QQ.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function IQ(QQ) {
+       return JSON.stringify({
+         name: QQ.specifier,
+         types: rQ(QQ)
+       }, null, "\t") + "\n"
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L17-L25` → after: `L44-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L44-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/310.js#L44-L59) · [Before (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/310.js#L17-L25)

```diff
-       if ("lite" !== pp.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(pp) {
-           return "strict" === pp || "allow" === pp
-         }(op)) throw new Error(`Unknown shaderPackMode "${op}" - use strict or allow`);
-       const Ip = (null !== (cp = pp.get("variants")) && void 0 !== cp ? cp : "").split(",").find((pp => pp.trim().startsWith("liteShaderPack")));
-       if (void 0 !== Ip) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Ip.trim()}`);
-       return {
-         url: Op,
-         mode: op
+       return XQ
+     }
+     async function BQ(QQ, WQ, XQ) {
+       const wQ = JQ(WQ),
+         qQ = await (0, FQ.o)(QQ, wQ);
+       if (!qQ) return;
+       const TQ = new Set([rQ(WQ), "package.json"]);
+       if (XQ)
+         for (const FQ of Object.keys(WQ.files)) TQ.add(FQ);
+       const zQ = await jQ(qQ),
+         sQ = new Set;
+       for (const JQ of zQ) {
+         if (TQ.has(JQ)) continue;
+         await (0, FQ.E)(QQ, `${wQ}/${JQ}`);
+         const WQ = JQ.split("/");
+         for (let QQ = 1; QQ < WQ.length; QQ++) sQ.add(WQ.slice(0, QQ).join("/"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/311.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/311.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L4` → after: `L4-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L4-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/311.js#L4-L66) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/311.js#L4)

```diff
-   42025: (pp, ip, cp) => {
+   41786: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       installImageBitmapTextureLoader: () => PQ
+     });
+     var wQ = XQ(40150),
+       qQ = XQ(41791),
+       TQ = XQ(3480);
+ 
+     function zQ(QQ, WQ) {
+       if ("string" === typeof QQ) {
+         const XQ = (0, TQ.i)(QQ);
+         return XQ ? new Blob([(0, TQ.e)(XQ.base64)], {
+           type: XQ.mimeType || WQ
+         }) : null
+       }
+       return QQ instanceof Blob ? QQ : new Blob([QQ], {
+ ... (47 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L6` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/311.js#L68-L69) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/311.js#L6)

```diff
-       d: () => Yp
+       b: () => wQ.i,
+       f: () => wQ.r
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L8-L429` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/311.js#L71-L72) · [Before (L8-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/311.js#L8-L429)

```diff
-     var Op = cp(37320),
-       op = cp(37356),
-       Ip = cp(40190),
-       Sp = cp(37324),
-       xp = cp(37487);
-     class Lp {
-       constructor(pp, ip, cp, Op) {
-         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
-       }
-     }
-     class Yp {
-       static _NearestPow2Floor(pp) {
-         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
-         if (!pp.isCube) return null;
- ... (406 more removed lines; see GitHub link above)
+     var wQ = XQ(40307);
+     (0, wQ.w)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/312.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/312.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L2)

```diff
- export const ids = [311, 312];
+ export const ids = [312];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L4-L6)

```diff
-   42041: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       _DDSTextureLoader: () => Ip
+   41855: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L9)

```diff
-     var Op = cp(40190),
-       op = cp(42016);
+     var wQ = XQ(40371),
+       qQ = XQ(41858);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L11-L12` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L11-L13) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L11-L12)

```diff
-       constructor() {
-         this.supportCascades = !0
+       constructor(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = XQ, this.twQ = [], this._maxBlockCapacity = WQ || 64, this._selectionContent = new wQ.d(1024), this._creationFunc = QQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L14-L32` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L15-L16) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L14-L32)

```diff
-       loadCubeData(pp, ip, cp, Ip) {
-         const Sp = ip.gy();
-         let xp, Lp = !1,
-           Yp = 1e3;
-         if (Array.isArray(pp))
-           for (let Op = 0; Op < pp.length; Op++) {
-             const cp = pp[Op];
-             xp = op.DDSTools.GetDDSInfo(cp), ip.width = xp.width, ip.height = xp.height, Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, cp, xp, Lp, 6, -1, Op), xp.isFourCC || 1 ! … [truncated]
-           } else {
-             const Ip = pp;
-             xp = op.DDSTools.GetDDSInfo(Ip), ip.width = xp.width, ip.height = xp.height, cp && (xp.sphericalPolynomial = new Op.e), Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, … [truncated]
-           }
-         Sp._setCubeMapTextureParams(ip, Lp, Yp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Ip && Ip({
-           isDDS: !0,
-           width: ip.width,
-           info: xp,
- ... (3 more removed lines; see GitHub link above)
+       update(QQ, WQ, XQ) {
+         qQ.b._CreateBlocks(QQ, WQ, XQ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L34-L39` → after: `L18-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L18-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L18-L47) · [Before (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L34-L39)

```diff
-       loadData(pp, ip, cp) {
-         const Op = op.DDSTools.GetDDSInfo(pp),
-           Ip = (Op.isRGB || Op.isLuminance || Op.mipmapCount > 1) && ip.generateMipMaps && Math.max(Op.width, Op.height) >> Op.mipmapCount - 1 === 1;
-         cp(Op.width, Op.height, Ip, Op.isFourCC, (() => {
-           op.DDSTools.UploadDDSLevels(ip.gy(), ip, pp, Op, Ip, 1)
-         }))
+       hwQ(QQ) {
+         for (let WQ = 0; WQ < this.blocks.length; WQ++) {
+           this.blocks[WQ].addEntry(QQ)
+         }
+       }
+       ZE(QQ) {
+         for (let WQ = 0; WQ < this.blocks.length; WQ++) {
+           this.blocks[WQ].removeEntry(QQ)
+         }
+       }
+       select(QQ, WQ) {
+         this._selectionContent.reset();
+         for (let XQ = 0; XQ < this.blocks.length; XQ++) {
+           this.blocks[XQ].select(QQ, this._selectionContent, WQ)
+         }
+         return WQ ? this._selectionContent.concat(this.twQ) : this._selectionContent.concatWithNoDuplicate(this.twQ), this._selectionContent
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L43` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L57) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L43)

```diff
-   42025: (pp, ip, cp) => {
+   41858: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L45` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L59) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L45)

```diff
-       d: () => Yp
+       b: () => TQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L47-L51` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L61-L62) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L47-L51)

```diff
-     var Op = cp(37320),
-       op = cp(37356),
-       Ip = cp(40190),
-       Sp = cp(37324),
-       xp = cp(37487);
+     var wQ = XQ(37370),
+       qQ = XQ(40564);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L53-L54` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L64-L65) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L53-L54)

```diff
-       constructor(pp, ip, cp, Op) {
-         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
+         this.entries = [], this.owQ = new Array, this._capacity = XQ, this._depth = wQ, this._maxDepth = qQ, this._creationFunc = TQ, this._minPoint = QQ, this._maxPoint = WQ, this.owQ.push(QQ.clone()), this.owQ.push(WQ.clone()), this.owQ.push(QQ.clone()), this.owQ[2].x = WQ.x, t … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L56-L100` → after: `L67-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L67-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L67-L96) · [Before (L56-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L56-L100)

```diff
-     }
-     class Yp {
-       static _NearestPow2Floor(pp) {
-         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
-         if (!pp.isCube) return null;
-         pp.Gl()?.gy().flushFramebuffer();
-         const ip = pp.getSize().width,
-           cp = pp._sphericalPolynomialTargetSize,
-           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
-           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
-           Ip = Op > 0 && Op < ip && op,
-           Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
-           xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
-           Lp = pp.readPixels(0, Sp, void 0, !1),
- ... (29 more removed lines; see GitHub link above)
+       get yJ() {
+         return this._capacity
+       }
+       get EwQ() {
+         return this._minPoint
+       }
+       get RwQ() {
+         return this._maxPoint
+       }
+       addEntry(QQ) {
+         if (this.blocks)
+           for (let WQ = 0; WQ < this.blocks.length; WQ++) {
+             this.blocks[WQ].addEntry(QQ)
+           } else this._creationFunc(QQ, this), this.entries.length > this.yJ && this._depth < this._maxDepth && this.createInnerBlocks()
+       }
+       removeEntry(QQ) {
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L102-L122` → after: `L98-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L98-L102) · [Before (L102-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L102-L122)

```diff
-       static _AreaElement(pp, ip) {
-         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
-       }
-       static _DownsampleFace(pp, ip, cp, Op) {
-         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
-           Ip = cp * cp * Op,
-           Sp = new Float32Array(Ip),
-           xp = ip / cp,
-           Lp = 1 / (xp * xp);
-         for (let Dp = 0; Dp < cp; Dp++) {
-           const pp = Math.floor(Dp * xp),
-             Ip = Math.floor((Dp + 1) * xp);
-           for (let Yp = 0; Yp < cp; Yp++) {
-             const Ap = Math.floor(Yp * xp),
-               Pp = Math.floor((Yp + 1) * xp),
-               Wp = (Dp * cp + Yp) * Op;
- ... (5 more removed lines; see GitHub link above)
+       select(QQ, WQ, XQ) {
+         if (qQ.b.IsInFrustum(this.owQ, QQ)) {
+           if (this.blocks) {
+             for (let wQ = 0; wQ < this.blocks.length; wQ++) {
+               this.blocks[wQ].select(QQ, WQ, XQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L131-L142` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L109-L115) · [Before (L131-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L131-L142)

```diff
-       static ConvertCubeMapToSphericalPolynomial(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
-         if (cp > 0 && pp.size > cp) {
-           const ip = 5 === pp.format ? 4 : 3,
-             Op = ["right", "left", "up", "down", "front", "back"],
-             op = {};
-           for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
-           pp = {
-             ...pp,
-             ...op,
-             size: cp
+       intersects(QQ, WQ, XQ, wQ) {
+         if (qQ.b.IntersectsSphere(this._minPoint, this._maxPoint, QQ, WQ)) {
+           if (this.blocks) {
+             for (let qQ = 0; qQ < this.blocks.length; qQ++) {
+               this.blocks[qQ].intersects(QQ, WQ, XQ, wQ)
+             }
+             return
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L145-L175` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L119-L124) · [Before (L145-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L145-L175)

```diff
-         const Op = new Ip.c;
-         let Lp = 0;
-         const Yp = 2 / pp.size,
-           Dp = Yp,
-           Ap = .5 * Yp,
-           Pp = Ap - 1;
-         for (let Ip = 0; Ip < 6; Ip++) {
-           const ip = this._FileFaces[Ip],
-             cp = pp[ip.name];
-           let Wp = Pp;
-           const yp = 5 === pp.format ? 4 : 3;
-           for (let Ip = 0; Ip < pp.size; Ip++) {
-             let Up = Pp;
-             for (let Dp = 0; Dp < pp.size; Dp++) {
-               const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
-               Pp.normalize();
- ... (15 more removed lines; see GitHub link above)
+       }
+       intersectsRay(QQ, WQ) {
+         if (QQ.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let XQ = 0; XQ < this.blocks.length; XQ++) {
+               this.blocks[XQ].intersectsRay(QQ, WQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L177` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L126) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L177)

```diff
-             Wp += Dp
+             return
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L180-L181` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L130-L144) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L180-L181)

```diff
-         const Wp = 6 * (4 * Math.PI) / 6 / Lp;
-         return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
+       }
+       createInnerBlocks() {
+         TQ._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(QQ, WQ, XQ, qQ, zQ, sQ, FQ, PQ) {
+         FQ.blocks = new Array;
+         const gQ = new wQ.s((WQ.x - QQ.x) / 2, (WQ.y - QQ.y) / 2, (WQ.z - QQ.z) / 2);
+         for (let wQ = 0; wQ < 2; wQ++)
+           for (let WQ = 0; WQ < 2; WQ++)
+             for (let JQ = 0; JQ < 2; JQ++) {
+               const rQ = QQ.add(gQ.multiplyByFloats(wQ, WQ, JQ)),
+                 IQ = QQ.add(gQ.multiplyByFloats(wQ + 1, WQ + 1, JQ + 1)),
+                 jQ = new TQ(rQ, IQ, qQ, zQ + 1, sQ, PQ);
+               jQ.addEntries(XQ), FQ.blocks.push(jQ)
+             }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L186` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L148) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L186)

```diff
-   42016: (pp, ip, cp) => {
+   41865: (QQ, WQ, XQ) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L188` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L150) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L188)

```diff
-       DDSTools: () => yp
+       b: () => gQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L190-L203` → after: `L152-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L152-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L152-L158) · [Before (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L190-L203)

```diff
-     var Op = cp(37356),
-       op = cp(38905),
-       Ip = cp(42025),
-       Sp = cp(40276);
-     const xp = 131072,
-       Lp = 131072;
- 
-     function Yp(pp) {
-       return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
-     }
-     const Dp = Yp("DXT1"),
-       Ap = Yp("DXT3"),
-       Pp = Yp("DXT5"),
-       Wp = Yp("DX10");
+     var wQ = XQ(40355),
+       qQ = XQ(37370),
+       TQ = XQ(40683),
+       zQ = XQ(41813),
+       sQ = XQ(40432),
+       FQ = XQ(37392),
+       PQ = XQ(41855);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L205-L250` → after: `L160-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L160-L167) · [Before (L205-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L205-L250)

```diff
-       static GetDDSInfo(pp) {
-         const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
-           cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
-         let Op = 1;
-         ip[2] & xp && (Op = Math.max(1, ip[7]));
-         const op = ip[21],
-           Ip = op === Wp ? cp[32] : 0;
-         let Sp = 0;
-         switch (op) {
-           case 113:
-             Sp = 2;
-             break;
-           case 116:
-             Sp = 1;
-             break;
-           case Wp:
- ... (30 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.name = sQ.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new zQ.v(qQ.s.Zero(), new qQ.s(1, 1, 1)), (QQ = QQ || FQ.d.LastCreatedScene) && (this.cB = QQ, this.cB.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.cB.getActiveSubMeshCandidat … [truncated]
+       }
+       register() {
+         this.cB.onMeshRemovedObservable.add((QQ => {
+           const WQ = this.cB.selectionOctree;
+           if (void 0 !== WQ && null !== WQ) {
+             const XQ = WQ.twQ.indexOf(QQ); - 1 !== XQ && WQ.twQ.splice(XQ, 1)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L252` → after: `L169-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L169-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L169-L172) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L252)

```diff
-         return xp
+         })), this.cB.onMeshImportedObservable.add((QQ => {
+           const WQ = this.cB.selectionOctree;
+           void 0 !== WQ && null !== WQ && WQ.hwQ(QQ)
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L254-L264` → after: `L174-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L174-L179) · [Before (L254-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L254-L264)

```diff
-       static _GetHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
-         if (yp.StoreLODInAlphaChannel) {
-           const xp = new Uint16Array(Op),
-             Lp = new Uint16Array(op, cp);
-           let Yp = 0;
-           for (let cp = 0; cp < ip; cp++)
-             for (let ip = 0; ip < pp; ip++) {
-               const Op = 4 * (ip + cp * pp);
-               xp[Yp] = Lp[Op], xp[Yp + 1] = Lp[Op + 1], xp[Yp + 2] = Lp[Op + 2], xp[Yp + 3] = (0, Sp.h)(Ip), Yp += 4
-             }
-           return xp
+       getActiveMeshCandidates() {
+         return this.cB.ZwQ?.select(this.cB.frustumPlanes) || this.cB._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(QQ) {
+         if (QQ._submeshesOctree && QQ.useOctreeForRenderingSelection) {
+           return QQ._submeshesOctree.select(this.cB.frustumPlanes)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L266` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L181) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L266)

```diff
-         return new Uint16Array(op, cp, Op)
+         return this.cB._getDefaultSubMeshCandidates(QQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L268-L278` → after: `L183-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L183-L186) · [Before (L268-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L268-L278)

```diff
-       static _GetFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
-         if (yp.StoreLODInAlphaChannel) {
-           const Sp = new Float32Array(Op),
-             xp = new Float32Array(op, cp);
-           let Lp = 0;
-           for (let cp = 0; cp < ip; cp++)
-             for (let ip = 0; ip < pp; ip++) {
-               const Op = 4 * (ip + cp * pp);
-               Sp[Lp] = xp[Op], Sp[Lp + 1] = xp[Op + 1], Sp[Lp + 2] = xp[Op + 2], Sp[Lp + 3] = Ip, Lp += 4
-             }
-           return Sp
+       getIntersectingSubMeshCandidates(QQ, WQ) {
+         if (QQ._submeshesOctree && QQ.useOctreeForPicking) {
+           zQ.v.TransformToRef(WQ, QQ.getWorldMatrix(), this._tempRay);
+           return QQ._submeshesOctree.intersectsRay(this._tempRay)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L280` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L188) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L280)

```diff
-         return new Float32Array(op, cp, Op)
+         return this.cB._getDefaultSubMeshCandidates(QQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L282-L288` → after: `L190-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L190-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L190-L195) · [Before (L282-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L282-L288)

```diff
-       static _GetFloatAsHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
-         const xp = new Uint16Array(Op),
-           Lp = new Float32Array(op, cp);
-         let Yp = 0;
-         for (let Dp = 0; Dp < ip; Dp++)
-           for (let ip = 0; ip < pp; ip++) xp[Yp] = (0, Sp.h)(Lp[Yp]), xp[Yp + 1] = (0, Sp.h)(Lp[Yp + 1]), xp[Yp + 2] = (0, Sp.h)(Lp[Yp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = (0, Sp.h)(Ip) : xp[Yp + 3] = (0, Sp.h)(Lp[Yp + 3]), Yp += 4;
-         return xp
+       getCollidingSubMeshCandidates(QQ, WQ) {
+         if (QQ._submeshesOctree && QQ.useOctreeForCollisions) {
+           const XQ = WQ._velocityWorldLength + Math.max(WQ._radius.x, WQ._radius.y, WQ._radius.z);
+           return QQ._submeshesOctree.intersects(WQ._basePointWorld, XQ)
+         }
+         return this.cB._getDefaultSubMeshCandidates(QQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L290-L299` → after: `L197-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L197-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L197-L251) · [Before (L290-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L290-L299)

```diff
-       static _GetFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, Sp) {
-         const xp = new Uint8Array(op),
-           Lp = new Float32Array(Ip, cp);
-         let Yp = 0;
-         for (let Dp = 0; Dp < ip; Dp++)
-           for (let ip = 0; ip < pp; ip++) {
-             const cp = 4 * (ip + Dp * pp);
-             xp[Yp] = 255 * (0, Op.Clamp)(Lp[cp]), xp[Yp + 1] = 255 * (0, Op.Clamp)(Lp[cp + 1]), xp[Yp + 2] = 255 * (0, Op.Clamp)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Sp : xp[Yp + 3] = 255 * (0, Op.Clamp)(Lp[cp + 3]), Yp += 4
-           }
-         return xp
+       rebuild() {}
+       dispose() {}
+     }
+     let JQ = !1;
+     JQ || (JQ = !0, wQ.h.prototype.createOrUpdateSelectionOctree = function() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         XQ = this._getComponent(sQ.c.NAME_OCTREE);
+       XQ || (XQ = new gQ(this), this.rwQ(XQ)), this.ZwQ || (this.ZwQ = new PQ.d(PQ.d.CreationFuncForMeshes, QQ, WQ));
+       const wQ = this.getWorldExtends();
+       return this.ZwQ.update(wQ.min, wQ.max, this.meshes), this.ZwQ
+     }, Object.defineProperty(wQ.h.prototype, "selectionOctree", {
+       get: function() {
+         return this.ZwQ
+       },
+       enumerable: !0,
+ ... (39 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L301-L310` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L253-L254) · [Before (L301-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L301-L310)

```diff
-       static _GetHalfFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, xp) {
-         const Lp = new Uint8Array(op),
-           Yp = new Uint16Array(Ip, cp);
-         let Dp = 0;
-         for (let Ap = 0; Ap < ip; Ap++)
-           for (let ip = 0; ip < pp; ip++) {
-             const cp = 4 * (ip + Ap * pp);
-             Lp[Dp] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp])), Lp[Dp + 1] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 1])), Lp[Dp + 2] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 2])), yp.StoreLODInAlphaChannel ? Lp[Dp + 3] = xp : Lp[Dp + 3] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 3])), Dp … [truncated]
-           }
-         return Lp
+       clone() {
+         return new JQ(this.origin.clone(), this.direction.clone(), this.length)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L312-L321` → after: `L256-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L256-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L256-L288) · [Before (L312-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L312-L321)

```diff
-       static _GetRGBAArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
-         const Yp = new Uint8Array(Op),
-           Dp = new Uint8Array(op, cp);
-         let Ap = 0;
-         for (let Pp = 0; Pp < ip; Pp++)
-           for (let ip = 0; ip < pp; ip++) {
-             const cp = 4 * (ip + Pp * pp);
-             Yp[Ap] = Dp[cp + Ip], Yp[Ap + 1] = Dp[cp + Sp], Yp[Ap + 2] = Dp[cp + xp], Yp[Ap + 3] = Dp[cp + Lp], Ap += 4
-           }
-         return Yp
+       intersectsBoxMinMax(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const wQ = JQ._TmpVector3[0].XQQ(QQ.x - XQ, QQ.y - XQ, QQ.z - XQ),
+           qQ = JQ._TmpVector3[1].XQQ(WQ.x + XQ, WQ.y + XQ, WQ.z + XQ);
+         let TQ, zQ, sQ, FQ, PQ = 0,
+           gQ = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < wQ.x || this.origin.x > qQ.x) return !1
+         } else if (TQ = 1 / this.direction.x, zQ = (wQ.x - this.origin.x) * TQ, sQ = (qQ.x - this.origin.x) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < wQ.y || this.origin.y > qQ.y) return !1
+         } else if (TQ = 1 / this.direction.y, zQ = (wQ.y - this.origin.y) * TQ, sQ = (qQ.y - this.origin.y) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+           if (this.origin.z < wQ.z || this.origin.z > qQ.z) return !1
+         } else if (TQ = 1 / this.direction.z, zQ = (wQ.z - this.origin.z) * TQ, sQ = (qQ.z - this.origin.z) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
+         return !0
+ ... (17 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L323-L324` → after: `L290-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L290-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L290-L307) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L323-L324)

```diff
-       static _ExtractLongWordOrder(pp) {
-         return 0 === pp || 255 === pp || -16777216 === pp ? 0 : 1 + yp._ExtractLongWordOrder(pp >> 8)
+       intersectsTriangle(QQ, WQ, XQ) {
+         const wQ = JQ._TmpVector3[0],
+           TQ = JQ._TmpVector3[1],
+           sQ = JQ._TmpVector3[2],
+           FQ = JQ._TmpVector3[3],
+           PQ = JQ._TmpVector3[4];
+         WQ.subtractToRef(QQ, wQ), XQ.subtractToRef(QQ, TQ), qQ.s.CrossToRef(this.direction, TQ, sQ);
+         const gQ = qQ.s.Dot(wQ, sQ);
+         if (0 === gQ) return null;
+         const rQ = 1 / gQ;
+         this.origin.subtractToRef(QQ, FQ);
+         const IQ = qQ.s.Dot(FQ, sQ) * rQ;
+         if (IQ < -this.epsilon || IQ > 1 + this.epsilon) return null;
+         qQ.s.CrossToRef(FQ, wQ, PQ);
+         const jQ = qQ.s.Dot(this.direction, PQ) * rQ;
+         if (jQ < -this.epsilon || IQ + jQ > 1 + this.epsilon) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L326-L333` → after: `L309-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L309-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L309-L323) · [Before (L326-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L326-L333)

```diff
-       static _GetRGBArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp) {
-         const Lp = new Uint8Array(Op),
-           Yp = new Uint8Array(op, cp);
-         let Dp = 0;
-         for (let Ap = 0; Ap < ip; Ap++)
-           for (let ip = 0; ip < pp; ip++) {
-             const cp = 3 * (ip + Ap * pp);
-             Lp[Dp] = Yp[cp + Ip], Lp[Dp + 1] = Yp[cp + Sp], Lp[Dp + 2] = Yp[cp + xp], Dp += 3
+       intersectsPlane(QQ) {
+         let WQ;
+         const XQ = qQ.s.Dot(QQ.normal, this.direction);
+         if (Math.abs(XQ) < 9.99999997475243e-7) return null;
+         {
+           const wQ = qQ.s.Dot(QQ.normal, this.origin);
+           return WQ = (-QQ.d - wQ) / XQ, WQ < 0 ? WQ < -9.99999997475243e-7 ? null : 0 : WQ
+         }
+       }
+       intersectsAxis(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (QQ) {
+           case "y": {
+             const QQ = (this.origin.y - WQ) / this.direction.y;
+             return QQ > 0 ? null : new qQ.s(this.origin.x + this.direction.x * -QQ, WQ, this.origin.z + this.direction.z * -QQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L337-L344` → after: `L421-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L421-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L421-L543) · [Before (L337-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L337-L344)

```diff
-       static _GetLuminanceArrayBuffer(pp, ip, cp, Op, op) {
-         const Ip = new Uint8Array(Op),
-           Sp = new Uint8Array(op, cp);
-         let xp = 0;
-         for (let Lp = 0; Lp < ip; Lp++)
-           for (let ip = 0; ip < pp; ip++) {
-             const cp = ip + Lp * pp;
-             Ip[xp] = Sp[cp], xp++
+       unprojectRayToRef(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
+         const PQ = qQ.m.Matrix[0];
+         TQ.multiplyToRef(zQ, PQ), PQ.multiplyToRef(sQ, PQ), PQ.invert();
+         const gQ = FQ.d.LastCreatedEngine,
+           JQ = qQ.m.vj[0];
+         JQ.x = QQ / XQ * 2 - 1, JQ.y = -(WQ / wQ * 2 - 1), JQ.z = gQ?.vwQ ? 1 : gQ?.isNDCHalfZRange ? 0 : -1;
+         const rQ = qQ.m.vj[1].XQQ(JQ.x, JQ.y, 1 - 1e-8),
+           IQ = qQ.m.vj[2],
+           jQ = qQ.m.vj[3];
+         qQ.s.TransformCoordinatesToRef(JQ, PQ, IQ), qQ.s.TransformCoordinatesToRef(rQ, PQ, jQ), this.origin.WH(IQ), jQ.subtractToRef(IQ, this.direction), this.direction.normalize()
+       }
+     }
+ 
+     function rQ(QQ, WQ, XQ, wQ, qQ) {
+       let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const zQ = JQ.Zero();
+ ... (107 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L346` → after: `L545-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L545-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L545-L548) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L346)

```diff
-         return Ip
+         } else {
+           const QQ = rQ(FQ, WQ, gQ, BQ, wQ, TQ, zQ);
+           if (QQ && (FQ = QQ, wQ)) return FQ
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L348-L393` → after: `L550-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L550-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L550-L584) · [Before (L348-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L348-L393)

```diff
-       static UploadDDSLevels(pp, ip, cp, Op, Sp, Lp) {
-         let Yp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           Up = arguments.length > 7 ? arguments[7] : void 0,
-           wp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           vp = null;
-         Op.sphericalPolynomial && (vp = []);
-         const tp = !!pp.getCaps().s3tc;
-         ip.generateMipMaps = Sp;
-         const Hp = new Int32Array(cp.buffer, cp.byteOffset, 31);
-         let dp, ep, jp, kp, mp, Rp, qp, Mp = 0,
-           Cp = 0,
-           Ep = 1;
-         if (542327876 !== Hp[0]) return void op.e.Error("Invalid magic number in DDS header");
-         if (!Op.isFourCC && !Op.isRGB && !Op.isLuminance) return void op.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Op.isCompressed && !tp) return void op.e.Error("Compressed textures are not supported on this platform.");
-         let Xp = Hp[22];
- ... (30 more removed lines; see GitHub link above)
+       return FQ || new sQ.b
+     }
+ 
+     function bQ(QQ, WQ, XQ, wQ) {
+       if (!sQ.b) return null;
+       const TQ = [],
+         zQ = !!(QQ.activeCameras && QQ.activeCameras.length > 1 && QQ.cameraToUseForPointers !== QQ.activeCamera),
+         FQ = QQ.cameraToUseForPointers || QQ.activeCamera,
+         PQ = gQ.internalPickerForMesh || yQ,
+         JQ = PQ === yQ;
+       for (let sQ = 0; sQ < QQ.meshes.length; sQ++) {
+         const gQ = QQ.meshes[sQ];
+         if (XQ) {
+           if (!XQ(gQ, -1)) continue
+         } else if (!gQ.isEnabled() || !gQ.isVisible || !gQ.RB) continue;
+         const rQ = zQ && gQ.isWorldMatrixCameraDependent(),
+ ... (19 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L397-L398` → after: `L587-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L587-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L587-L589) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L397-L398)

```diff
-           default:
-             return void op.e.Error(["Unsupported FourCC code:", (Qp = dp, String.fromCharCode(255 & Qp, Qp >> 8 & 255, Qp >> 16 & 255, Qp >> 24 & 255))])
+         } else {
+           const QQ = PQ(null, WQ, gQ, IQ, !1, !1, wQ);
+           QQ && TQ.push(QQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L401-L448` → after: `L686-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L686-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L686-L766) · [Before (L401-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L401-L448)

```diff
-         const Jp = yp._ExtractLongWordOrder(Hp[23]),
-           Bp = yp._ExtractLongWordOrder(Hp[24]),
-           Np = yp._ExtractLongWordOrder(Hp[25]),
-           Tp = yp._ExtractLongWordOrder(Hp[26]);
-         lp && (Cp = pp._getRGBABufferInternalSizedFormat(Op.textureType)), Rp = 1, Hp[2] & xp && !1 !== Sp && (Rp = Math.max(1, Hp[7]));
-         const fp = Up || 0,
-           bp = pp.getCaps();
-         for (let op = fp; op < Lp; op++) {
-           for (ep = Hp[4], jp = Hp[3], qp = 0; qp < Rp; ++qp) {
-             if (-1 === Yp || Yp === qp) {
-               const Ip = -1 === Yp ? qp : 0;
-               if (!Op.isCompressed && Op.isFourCC) {
-                 ip.format = 5, Mp = ep * jp * 4;
-                 let Op = null;
-                 if (pp._badOS || pp._badDesktopOS || !bp.textureHalfFloat && !bp.textureFloat) 128 === Xp ? (Op = yp._GetFloatAsUIntRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip), vp && 0 == Ip && vp.push(yp._GetFloatRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, … [truncated]
-                 else {
- ... (32 more removed lines; see GitHub link above)
+         let WQ, XQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ = sQ.e,
+           BQ = [],
+           yQ = [],
+           VQ = [],
+           DQ = [],
+           pQ = [],
+           GQ = [],
+           UQ = [],
+           bQ = [],
+           vQ = [],
+           dQ = [],
+           HQ = [],
+           aQ = [],
+           lQ = [];
+         return QQ = class extends jQ {
+           get shadowFrustumSize() {
+ ... (65 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L450` → after: `L768-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L768-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L768-L773) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L450)

```diff
-             kp += Xp ? ep * jp * (Xp / 8) : Mp, ep *= .5, jp *= .5, ep = Math.max(1, ep), jp = Math.max(1, jp)
+             const qQ = this._orthoRight - this._orthoLeft,
+               zQ = this._orthoTop - this._orthoBottom,
+               sQ = void 0 !== this.shadowMinZ ? this.shadowMinZ : wQ?.minZ || 0,
+               FQ = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : wQ?.maxZ || 1e4,
+               PQ = this.sE().Uj().vwQ;
+             TQ.e.OrthoOffCenterLHToRef(this._orthoLeft - qQ * this.shadowOrthoScale, this._orthoRight + qQ * this.shadowOrthoScale, this._orthoBottom - zQ * this.shadowOrthoScale, this._orthoTop + zQ * this.shadowOrthoScale, PQ ? FQ : sQ, PQ ? sQ : FQ, QQ, this.sE().Uj().isNDCHal … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L452-L465` → after: `L775-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L775-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L775-L1088) · [Before (L452-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L452-L465)

```diff
-           if (void 0 !== Up) break
-         }
-         vp && vp.length > 0 ? Op.sphericalPolynomial = Ip.d.ConvertCubeMapToSphericalPolynomial({
-           size: Hp[4],
-           right: vp[0],
-           left: vp[1],
-           up: vp[2],
-           down: vp[3],
-           front: vp[4],
-           back: vp[5],
-           format: 5,
-           type: 1,
-           gammaSpace: !1
-         }) : Op.sphericalPolynomial = void 0
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformB … [truncated]
+           }
+           transferToEffect(QQ, WQ) {
+             return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, WQ), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this. … [truncated]
+           }
+           transferToNodeMaterialEffect(QQ, WQ) {
+             return this.computeTransformedInformation() ? (QQ.setFloat3(WQ, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (QQ.setFloat3(WQ, this.direction.x, this.direction.y, this.direction.z), this)
+           }
+           getDepthMinZ(QQ) {
+             const WQ = this._scene.Uj();
+             return !WQ.vwQ && WQ.isNDCHalfZRange ? 0 : 1
+           }
+           getDepthMaxZ(QQ) {
+             const WQ = this._scene.Uj();
+             return WQ.vwQ && WQ.isNDCHalfZRange ? 0 : 1
+ ... (298 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L468` → after: `L1091-L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L1091-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/312.js#L1091-L4405) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/312.js#L468)

```diff
-     yp.StoreLODInAlphaChannel = !1
+     var DQ = XQ(38945);
+     class pQ {
+       get radius() {
+         return this._radius
+       }
+       set radius(QQ) {
+         this._radius = QQ, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(QQ) {
+         this._angle = QQ, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (3299 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 1. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L6)

```diff
-   42054: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       _ENVTextureLoader: () => Rp
+   41957: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L8-L18` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L9) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L18)

```diff
-     var Op = cp(40143),
-       op = cp(37320),
-       Ip = cp(37356),
-       Sp = cp(40190),
-       xp = cp(40033),
-       Lp = cp(40195),
-       Yp = (cp(40296), cp(42060)),
-       Dp = cp(38905),
-       Ap = (cp(42071), cp(42102), cp(40273));
-     const Pp = "image/png",
-       Wp = [134, 22, 135, 150, 246, 214, 150, 54];
+     var wQ = XQ(41945),
+       qQ = XQ(41963);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L21-L28` → after: `L12-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L12-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L12-L20) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L21-L28)

```diff
-       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
-       let cp = 0;
-       for (let Sp = 0; Sp < Wp.length; Sp++)
-         if (ip.getUint8(cp++) !== Wp[Sp]) return Dp.e.Error("Not a babylon environment map"), null;
-       let Op, op = "";
-       for (; Op = ip.getUint8(cp++);) op += String.fromCharCode(Op);
-       let Ip = JSON.parse(op);
-       return Ip = Up(Ip), Ip.binaryDataPosition = cp, Ip.specular && (Ip.specular.lodGenerationScale = Ip.specular.lodGenerationScale || .8), Ip
+       (0, qQ.e)(QQ), (0, wQ.p)(QQ);
+       const WQ = QQ._surfaces;
+       for (const XQ of WQ) XQ._renderingContexts.length = 0, XQ._ro?.disconnect(), XQ._context.unconfigure();
+       WQ.length = 0;
+       try {
+         QQ._disposeManagedResources?.(), QQ._disposeStorageBuffers?.()
+       } finally {
+         QQ._device.destroy()
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L32-L36` → after: `L38-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L38-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L38-L76) · [Before (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L32-L36)

```diff
-       if (pp.version > 2) throw new Error(`Unsupported babylon environment map version "${pp.version}". Latest supported version is "2".`);
-       return 2 === pp.version ? pp : pp = {
-         ...pp,
-         version: 2,
-         imageType: Pp
+       return "clientWidth" in QQ
+     }
+     var sQ = 1;
+ 
+     function FQ(QQ, WQ, XQ) {
+       const FQ = WQ.getContext("webgpu");
+       FQ || (0, wQ.e)(54), zQ(WQ) && WQ.setAttribute("data-engine", qQ);
+       const PQ = XQ?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         gQ = XQ?.srgb ? (JQ = PQ).endsWith("-srgb") ? JQ : `${JQ}-srgb` : PQ;
+       var JQ;
+       const rQ = XQ?.alphaMode ?? "opaque";
+       FQ.configure({
+         device: QQ._device,
+         format: PQ,
+         alphaMode: rQ,
+         viewFormats: [gQ]
+ ... (23 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L40-L50` → after: `L80-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L80-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L80-L104) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L40-L50)

```diff
-     function wp(pp, ip) {
-       const cp = (ip = Up(ip)).specular;
-       let Op = Math.log2(ip.width);
-       if (Op = Math.round(Op) + 1, cp.mipmaps.length !== 6 * Op) throw new Error(`Unsupported specular mipmaps number "${cp.mipmaps.length}"`);
-       const op = new Array(Op);
-       for (let Ip = 0; Ip < Op; Ip++) {
-         op[Ip] = new Array(6);
-         for (let Op = 0; Op < 6; Op++) {
-           const Sp = cp.mipmaps[6 * Ip + Op];
-           op[Ip][Op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Sp.position, Sp.length)
-         }
+     function PQ(QQ) {
+       const WQ = QQ._context.getCurrentTexture(),
+         XQ = QQ.scRT;
+       XQ._colorTexture = WQ, XQ._colorView = WQ.createView({
+         format: QQ.format
+       }), XQ._width = WQ.width, XQ._height = WQ.height
+     }
+ 
+     function gQ(QQ) {
+       const WQ = QQ.canvas;
+       if (!zQ(WQ)) return;
+       const XQ = QQ._w ?? WQ.clientWidth,
+         wQ = QQ._h ?? WQ.clientHeight;
+       if (!(XQ > 0 && wQ > 0)) return;
+       const qQ = Math.min(globalThis.devicePixelRatio || 1, QQ.maxDevicePixelRatio);
+       JQ(QQ, XQ * qQ | 0, wQ * qQ | 0)
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L56-L58` → after: `L110-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L110-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L110-L140) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L56-L58)

```diff
-       ip = Up(ip);
-       const cp = new Array(6),
-         Op = ip.irradiance?.irradianceTexture;
+       return -1 !== QQ._renderingContexts.indexOf(WQ)
+     }
+ 
+     function jQ(QQ, WQ) {
+       return -1 === QQ._renderingContexts.indexOf(WQ) && (QQ._renderingContexts.push(WQ), !0)
+     }
+     var BQ = null;
+     var yQ = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function VQ(QQ, WQ) {
+       const TQ = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...BQ ? BQ() : {}
+       });
+       TQ || (0, wQ.e)(47);
+       const zQ = BQ?.deviceFeatures?.(TQ, WQ) ?? function(QQ) {
+           return yQ.filter((WQ => QQ.features.has(WQ)))
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L60-L64` → after: `L142-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L142-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L142-L149) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L60-L64)

```diff
-         if (6 !== Op.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Op.faces.length}"`);
-         for (let op = 0; op < 6; op++) {
-           const Ip = Op.faces[op];
-           cp[op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Ip.position, Ip.length)
-         }
+         const [{
+           wrapRenderableForFO: QQ,
+           lightFoVersion: WQ,
+           applyLightFoOffset: wQ
+         }, {
+           makePackMeshWorld: qQ
+         }] = await Promise.all([XQ.e(366).then((() => XQ(61618))), XQ.e(367).then((() => XQ(61627)))]);
+         IQ = QQ, jQ = qQ, VQ = WQ, DQ = wQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L66` → after: `L151-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L151-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L151-L174) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L66)

```diff
-       return cp
+       const pQ = {
+           _device: sQ
+         },
+         GQ = [pQ];
+       return Object.assign(pQ, {
+         engine: pQ,
+         surfaces: GQ,
+         _surfaces: GQ,
+         _device: sQ,
+         _options: WQ,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: JQ,
+         useFloatingOrigin: rQ,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L70-L82` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L178) · [Before (L70-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L70-L82)

```diff
-       const Op = (cp = Up(cp)).specular;
-       if (!Op) return Promise.resolve([]);
-       pp._lodGenerationScale = Op.lodGenerationScale;
-       const Ip = [],
-         Sp = wp(ip, cp);
-       Ip.push(dp(pp, Sp, cp.imageType));
-       const xp = cp.irradiance?.irradianceTexture;
-       if (xp) {
-         const Op = vp(ip, cp);
-         let Sp = null;
-         cp.irradiance?.irradianceTexture?.dominantDirection && (Sp = op.o.FromArray(cp.irradiance.irradianceTexture.dominantDirection)), Ip.push(ep(pp, Op, xp.size, cp.imageType, Sp))
-       }
-       return Promise.all(Ip)
+       JQ(QQ, WQ, XQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L84-L104` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L180-L182) · [Before (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L84-L104)

```diff
-     async function Hp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
-       return await new Promise(((Ap, Pp) => {
-         if (cp) {
-           const cp = ip.createTexture(null, !0, !0, null, 1, null, (pp => {
-             Pp(pp)
-           }), pp);
-           Op?.onEffectCreatedObservable.addOnce((xp => {
-             xp.executeWhenCompiled((() => {
-               Op.externalTextureSamplerBinding = !0, Op.onApply = Op => {
-                 Op._bindTexture("textureSampler", cp), Op.setFloat2("scale", 1, ip._features.needsInvertingBitmap && pp instanceof ImageBitmap ? -1 : 1)
-               }, ip.scenes.length && (ip.scenes[0].postProcessManager.directRender([Op], Yp, !0, Ip, Sp), ip.restoreDefaultFramebuffer(), cp.dispose(), URL.revokeObjectURL(op), Ap())
-             }))
-           }))
-         } else {
-           if (ip._uploadImageToTexture(Dp, pp, Ip, Sp), xp) {
-             const cp = Lp[Sp];
- ... (5 more removed lines; see GitHub link above)
+ 
+     function pQ(QQ) {
+       QQ._animFrameId && cancelAnimationFrame(QQ._animFrameId), QQ._animFrameId = 0, QQ._renderFn = null, QQ._flushGpuRetirements?.(QQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L106-L138` → after: `L184-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L184-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L184-L198) · [Before (L106-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L106-L138)

```diff
-     async function dp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pp;
-       const Op = pp.gy();
-       pp.format = 5, pp.type = 0, pp.generateMipMaps = !0, pp._cachedAnisotropicFilteringLevel = null, Op.updateTextureSamplingMode(3, pp), await jp(pp, ip, !0, cp), pp.isReady = !0
-     }
-     async function ep(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp,
-         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const Ip = pp.gy(),
-         Sp = new xp.b(Ip, 5),
-         Yp = new Lp.d(Ip, Sp);
-       pp._irradianceTexture = Yp, Yp._dominantDirection = op, Sp.isCube = !0, Sp.format = 5, Sp.type = 0, Sp.generateMipMaps = !0, Sp._cachedAnisotropicFilteringLevel = null, Sp.generateMipMaps = !0, Sp.width = cp, Sp.height = cp, Ip.updateTextureSamplingMode(3, Sp), await jp(Sp, … [truncated]
-     }
-     async function jp(pp, ip, op) {
-       let Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp;
-       if (!(0, Op.h)(pp.width)) throw new Error("Texture size must be a power of two");
- ... (17 more removed lines; see GitHub link above)
+ 
+     function GQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.surfaces;
+       if (XQ !== QQ.surfaces)
+         for (let qQ = XQ.length; qQ--;) XQ[qQ].engine !== QQ && (0, wQ.e)(49);
+       UQ(QQ, WQ, XQ)
+     }
+ 
+     function UQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ._surfaces,
+         wQ = 0;
+       for (let TQ = XQ.length; TQ--;) wQ += XQ[TQ]._renderingContexts.length;
+       if (!wQ) return QQ.drawCallCount = 0, QQ._flushGpuRetirements?.(QQ);
+       const qQ = QQ._device.createCommandEncoder({
+         label: "frame"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L140-L188` → after: `L200-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L200-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L200-L209) · [Before (L140-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L140-L188)

```diff
-       else if (pp._isRGBD = !0, pp.invertY = !0, Up) {
-         const ip = 3;
-         tp = {};
-         const cp = pp._lodGenerationScale,
-           Op = pp._lodGenerationOffset;
-         for (let op = 0; op < ip; op++) {
-           const Ip = (Dp - 1) * cp + Op,
-             Sp = Op + (Ip - Op) * (1 - op / (ip - 1)),
-             Yp = Math.round(Math.min(Math.max(Sp, 0), Ip)),
-             Ap = new xp.b(Wp, 2);
-           Ap.isCube = !0, Ap.invertY = !0, Ap.generateMipMaps = !1, Wp.updateTextureSamplingMode(2, Ap);
-           const Pp = new Lp.d(null);
-           switch (Pp._isCube = !0, Pp._texture = Ap, tp[Yp] = Pp, op) {
-             case 0:
-               pp._lodTextureLow = Pp;
-               break;
- ... (33 more removed lines; see GitHub link above)
+       QQ._currentEncoder = qQ, QQ._currentDelta = WQ;
+       try {
+         QQ._gpuTimerBegin?.(qQ), wQ = 0;
+         for (let QQ = 0; QQ < XQ.length; QQ++) {
+           const WQ = XQ[QQ];
+           WQ._capturePreFrame?.(WQ), PQ(WQ);
+           const qQ = WQ._renderingContexts;
+           for (let QQ = 0; QQ < qQ.length; QQ++) {
+             const WQ = qQ[QQ];
+             WQ._update(), wQ += WQ._drawCallsPre + WQ._record()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L192-L204` → after: `L212-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L212-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L212-L215) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L192-L204)

```diff
-       if (await Promise.all(jp), ip.length < Dp) {
-         let cp;
-         const Op = Math.pow(2, Dp - 1 - ip.length),
-           op = Op * Op * 4;
-         switch (pp.type) {
-           case 0:
-             cp = new Uint8Array(op);
-             break;
-           case 2:
-             cp = new Uint16Array(op);
-             break;
-           case 1:
-             cp = new Float32Array(op)
+         const WQ = QQ._currentEncoder;
+         for (let QQ = 0; QQ < XQ.length; QQ++) {
+           const wQ = XQ[QQ];
+           wQ._captureService?.(wQ, WQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L206-L207` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L217-L219) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L206-L207)

```diff
-         for (let Ip = ip.length; Ip < Dp; Ip++)
-           for (let ip = 0; ip < 6; ip++) Wp._uploadArrayBufferViewToTexture(vp?.texture || pp, cp, ip, Ip)
+         QQ._gpuTimerEnd?.(WQ), QQ._cbs[0] = WQ.finish(), QQ._device.queue.submit(QQ._cbs), QQ._flushGpuRetirements?.(QQ), QQ.drawCallCount = wQ, QQ._gpuTimerResolve?.()
+       } finally {
+         QQ._currentEncoder = void 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L209-L211` → after: `L221-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L221-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L221-L243) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L209-L211)

```diff
-       if (vp) {
-         const ip = pp._irradianceTexture;
-         pp._irradianceTexture = null, Wp._releaseTexture(pp), vp._swapAndDie(pp), pp._irradianceTexture = ip
+     }
+   },
+   41901: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       e: () => TQ,
+       h: () => wQ
+     });
+     var wQ = globalThis.GPUTextureUsage,
+       qQ = globalThis.GPUBufferUsage,
+       TQ = globalThis.GPUShaderStage;
+     globalThis.GPUColorWrite
+   },
+   41963: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       qQ(QQ.splice(0))
+ ... (7 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L217` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L248-L252) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L217)

```diff
-       const cp = (ip = Up(ip)).irradiance;
+       QQ._flushGpuRetirements ??= zQ, (QQ._retirements ??= []).push(WQ)
+     }
+ 
+     function zQ(QQ) {
+       const WQ = QQ._retirements;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L219-L220` → after: `L254-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L254-L260) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L219-L220)

```diff
-       const Op = new Sp.e;
-       op.o.FromArrayToRef(cp.x, 0, Op.x), op.o.FromArrayToRef(cp.y, 0, Op.y), op.o.FromArrayToRef(cp.z, 0, Op.z), op.o.FromArrayToRef(cp.xx, 0, Op.xx), op.o.FromArrayToRef(cp.yy, 0, Op.yy), op.o.FromArrayToRef(cp.zz, 0, Op.zz), op.o.FromArrayToRef(cp.yz, 0, Op.yz), op.o.FromArray … [truncated]
+       QQ._retirements = null;
+       const XQ = QQ._retiring ??= new Set;
+       XQ.add(WQ), queueMicrotask((() => {
+         QQ._device.queue.onSubmittedWorkDone().then((() => {
+           XQ.delete(WQ), wQ(WQ)
+         })).catch((() => {}))
+       }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L222-L245` → after: `L262-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L262-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L262-L266) · [Before (L222-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L222-L245)

```diff
-     var mp = cp(42109);
-     class Rp {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData(pp, ip, cp, Op, op) {
-         if (Array.isArray(pp)) return;
-         const Ip = yp(pp);
-         if (Ip) {
-           ip.width = Ip.width, ip.height = Ip.width;
-           try {
-             (0, mp.d)(), kp(ip, Ip), tp(ip, pp, Ip).then((() => {
-               ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
-             }), (pp => {
-               op?.("Can not upload environment levels", pp)
-             }))
- ... (8 more removed lines; see GitHub link above)
+ 
+     function sQ(QQ) {
+       const WQ = QQ._retirements,
+         XQ = QQ._retiring;
+       QQ._retirements = null, QQ._retiring = null, WQ && wQ(WQ), XQ?.forEach(wQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L248` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L273) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L248)

```diff
-   42109: (pp, ip, cp) => {
+   41952: (QQ, WQ, XQ) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L250` → after: `L275-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L275-L277) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L250)

```diff
-       d: () => Sp
+       d: () => TQ,
+       g: () => zQ,
+       h: () => sQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L252-L267` → after: `L279-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L279-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L279-L313) · [Before (L252-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L252-L267)

```diff
-     var Op = cp(42025),
-       op = cp(40195);
-     let Ip = !1;
- 
-     function Sp() {
-       Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = pp, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var wQ = XQ(41901);
+ 
+     function qQ(QQ) {
+       const WQ = QQ.size;
+       return "canvas" in WQ ? WQ.canvas : WQ
+     }
+ 
+     function TQ(QQ) {
+       return {
+         _descriptor: QQ,
+         _resolveSize: qQ,
+         _colorTexture: null,
+         _colorView: null,
+         _depthTexture: null,
+         _depthView: null,
+         _width: 0,
+ ... (19 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L269-L270` → after: `L315-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L315-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L315-L322) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L269-L270)

```diff
-         set: function(pp) {
-           this._texture && (this._texture._sphericalPolynomial = pp)
+         format: XQ.format,
+         sampleCount: XQ.samples,
+         usage: wQ.h.RENDER_ATTACHMENT | wQ.h.TEXTURE_BINDING | wQ.h.COPY_SRC | wQ.h.COPY_DST
+       }), QQ._colorView = QQ._colorTexture.createView()), XQ.dFormat && (QQ._depthTexture = FQ.createTexture({
+         label: XQ.lbl,
+         size: {
+           width: TQ,
+           height: zQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L272-L274` → after: `L324-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L324-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L324-L367) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L272-L274)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
+         format: XQ.dFormat,
+         sampleCount: XQ.samples,
+         usage: wQ.h.RENDER_ATTACHMENT | wQ.h.TEXTURE_BINDING
+       }), QQ._depthView = QQ._depthTexture.createView())
+     }
+ 
+     function sQ(QQ) {
+       if (!QQ || QQ._eager && !QQ._disposeAttachments) return;
+       const WQ = QQ._colorTexture,
+         XQ = QQ._depthTexture;
+       if (QQ._colorTexture = QQ._depthTexture = null, QQ._colorView = QQ._depthView = null, QQ._width = QQ._height = 0, QQ._disposeAttachments) QQ._disposeAttachments(WQ, XQ);
+       else try {
+         WQ?.destroy()
+       } finally {
+         !1 !== QQ._ownsDepthTexture && XQ?.destroy()
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L277` → after: `L370-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L370-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L370-L385) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L277)

```diff
-   42025: (pp, ip, cp) => {
+   41929: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ
+     });
+     var wQ = XQ(41914);
+ 
+     function qQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const XQ = WQ.compare,
+         qQ = WQ.lodMinClamp ?? 0,
+         TQ = WQ.lodMaxClamp ?? 32,
+         zQ = void 0 !== XQ || 0 !== qQ || 32 !== TQ ? `${XQ??""}:${qQ}:${TQ}` : "";
+       return (0, wQ.c)(QQ, WQ, zQ)
+     }
+   },
+   41906: (QQ, WQ, XQ) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L281-L288` → after: `L389-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L389-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L389-L427) · [Before (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L281-L288)

```diff
-     var Op = cp(37320),
-       op = cp(37356),
-       Ip = cp(40190),
-       Sp = cp(37324),
-       xp = cp(37487);
-     class Lp {
-       constructor(pp, ip, cp, Op) {
-         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
+     var wQ = null;
+ 
+     function qQ(QQ) {
+       const WQ = wQ ??= new WeakMap;
+       WQ.set(QQ, (WQ.get(QQ) ?? 0) + 1)
+     }
+ 
+     function TQ(QQ) {
+       qQ(QQ.texture)
+     }
+   },
+   41914: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => sQ
+     });
+     var wQ = null,
+ ... (23 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L291-L293` → after: `L432-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L432-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L432-L446) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L291-L293)

```diff
-     class Yp {
-       static _NearestPow2Floor(pp) {
-         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
+   },
+   41970: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => LQ,
+       g: () => SQ
+     });
+     var wQ = XQ(41952),
+       qQ = XQ(41945);
+ 
+     function TQ(QQ, WQ) {
+       WQ._passes.length = 0, QQ._currentProcessedTask = WQ;
+       try {
+         WQ.record()
+       } finally {
+         QQ._currentProcessedTask = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L295-L334` → after: `L448-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L448-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L448-L538) · [Before (L295-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L295-L334)

```diff
-       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
-         if (!pp.isCube) return null;
-         pp.Gl()?.gy().flushFramebuffer();
-         const ip = pp.getSize().width,
-           cp = pp._sphericalPolynomialTargetSize,
-           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
-           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
-           Ip = Op > 0 && Op < ip && op,
-           Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
-           xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
-           Lp = pp.readPixels(0, Sp, void 0, !1),
-           Yp = pp.readPixels(1, Sp, void 0, !1);
-         let Dp, Ap;
-         pp.isRenderTarget ? (Dp = pp.readPixels(3, Sp, void 0, !1), Ap = pp.readPixels(2, Sp, void 0, !1)) : (Dp = pp.readPixels(2, Sp, void 0, !1), Ap = pp.readPixels(3, Sp, void 0, !1));
-         const Pp = pp.readPixels(4, Sp, void 0, !1),
-           Wp = pp.readPixels(5, Sp, void 0, !1),
- ... (24 more removed lines; see GitHub link above)
+     }
+     var zQ = XQ(41975);
+ 
+     function sQ(QQ) {
+       const WQ = QQ.worldMatrixVersion;
+       if (QQ._viewVer === WQ) return QQ._viewCache;
+       const XQ = QQ._viewCache,
+         wQ = QQ.worldMatrix,
+         qQ = QQ._useFloatingOrigin,
+         TQ = qQ ? 0 : wQ[12],
+         zQ = qQ ? 0 : wQ[13],
+         sQ = qQ ? 0 : wQ[14];
+       return XQ[0] = wQ[0], XQ[1] = wQ[4], XQ[2] = wQ[8], XQ[3] = 0, XQ[4] = wQ[1], XQ[5] = wQ[5], XQ[6] = wQ[9], XQ[7] = 0, XQ[8] = wQ[2], XQ[9] = wQ[6], XQ[10] = wQ[10], XQ[11] = 0, XQ[12] = -(wQ[0] * TQ + wQ[1] * zQ + wQ[2] * sQ), XQ[13] = -(wQ[4] * TQ + wQ[5] * zQ + wQ[6] * s … [truncated]
+     }
+     var FQ = null;
+ 
+ ... (75 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L336-L337` → after: `L540-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L540-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L540-L616) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L336-L337)

```diff
-       static _AreaElement(pp, ip) {
-         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
+       DQ[0] = XQ, QQ[0] = pQ[0]
+     }
+ 
+     function bQ(QQ, WQ) {
+       let XQ = WQ._lightGpuState;
+       const wQ = 16 + 16 * VQ.c * 4;
+       if (XQ && XQ._byteSize === wQ) return XQ;
+       const qQ = !XQ;
+       XQ?._buffer.destroy();
+       const TQ = new zQ.e(wQ / 4);
+       return UQ(TQ, WQ.lights), QQ._applyLightFoOffset?.(TQ, WQ), XQ = {
+         _buffer: yQ(QQ, TQ),
+         _scratch: TQ,
+         kS: GQ(WQ.lights) + (QQ._lightFoVersion?.(WQ) ?? 0),
+         _listVersion: WQ._lightListVersion ?? 0,
+         _lightCount: WQ.lights.length,
+ ... (61 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L339-L357` → after: `L618-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L618-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L618-L719) · [Before (L339-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L339-L357)

```diff
-       static _DownsampleFace(pp, ip, cp, Op) {
-         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
-           Ip = cp * cp * Op,
-           Sp = new Float32Array(Ip),
-           xp = ip / cp,
-           Lp = 1 / (xp * xp);
-         for (let Dp = 0; Dp < cp; Dp++) {
-           const pp = Math.floor(Dp * xp),
-             Ip = Math.floor((Dp + 1) * xp);
-           for (let Yp = 0; Yp < cp; Yp++) {
-             const Ap = Math.floor(Yp * xp),
-               Pp = Math.floor((Yp + 1) * xp),
-               Wp = (Dp * cp + Yp) * Op;
-             for (let cp = 0; cp < Op; cp++) {
-               let xp = 0;
-               for (let Sp = pp; Sp < Ip; Sp++)
- ... (3 more removed lines; see GitHub link above)
+     }
+ 
+     function aQ(QQ, WQ, XQ) {
+       QQ.clr ??= !0;
+       const qQ = QQ.rt._descriptor,
+         TQ = QQ.depth?._descriptor,
+         FQ = {
+           _colorFormat: qQ.format,
+           _depthStencilFormat: TQ?.dFormat ?? qQ.dFormat,
+           _depthCompare: qQ.depthCompare ?? TQ?.depthCompare,
+           _sampleCount: qQ.samples
+         },
+         gQ = {
+           loadOp: "clear",
+           storeOp: "store"
+         },
+ ... (86 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L360-L363` → after: `L758-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L758-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L758-L760) · [Before (L360-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L360-L363)

```diff
-         if (pp instanceof Float32Array) return Sp;
-         const Yp = new(0, pp.constructor)(Ip);
-         for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
-         return Yp
+         gQ.sort(hQ), JQ.sort(hQ), XQ && AQ(QQ, QQ.engine, !1)
+       } catch (IQ) {
+         throw PQ._batchState?._release(void 0, TQ ?? [FQ]), IQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L365-L372` → after: `L762-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L762-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L762-L771) · [Before (L365-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L365-L372)

```diff
-       static ConvertCubeMapToSphericalPolynomial(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
-         if (cp > 0 && pp.size > cp) {
-           const ip = 5 === pp.format ? 4 : 3,
-             Op = ["right", "left", "up", "down", "front", "back"],
-             op = {};
-           for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
+       return XQ && (! function(QQ, WQ) {
+         const XQ = QQ._config,
+           wQ = QQ._colorAttachment;
+         wQ.view = WQ._colorView, QQ._renderPassDescriptor.colorAttachments = WQ._colorView ? [wQ] : [];
+         const qQ = XQ.depth ?? WQ,
+           TQ = qQ._depthView;
+         let zQ;
+         if (TQ) {
+           const QQ = qQ._descriptor,
+             WQ = (XQ.depth ? qQ._eager : !1 === XQ.depthClear) ? "load" : "clear";
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L374-L377` → after: `L773-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L773-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L773-L777) · [Before (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L374-L377)

```diff
-             ...pp,
-             ...op,
-             size: cp
-           }
+             view: TQ,
+             depthClearValue: QQ.depthClearValue ?? 0,
+             depthLoadOp: WQ,
+             depthStoreOp: "store"
+           }, QQ.dFormat?.includes("stencil") && (zQ.stencilClearValue = 0, zQ.stencilLoadOp = WQ, zQ.stencilStoreOp = "store")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L379-L411` → after: `L779-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L779-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L779-L826) · [Before (L379-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L379-L411)

```diff
-         const Op = new Ip.c;
-         let Lp = 0;
-         const Yp = 2 / pp.size,
-           Dp = Yp,
-           Ap = .5 * Yp,
-           Pp = Ap - 1;
-         for (let Ip = 0; Ip < 6; Ip++) {
-           const ip = this._FileFaces[Ip],
-             cp = pp[ip.name];
-           let Wp = Pp;
-           const yp = 5 === pp.format ? 4 : 3;
-           for (let Ip = 0; Ip < pp.size; Ip++) {
-             let Up = Pp;
-             for (let Dp = 0; Dp < pp.size; Dp++) {
-               const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
-               Pp.normalize();
- ... (17 more removed lines; see GitHub link above)
+         QQ._renderPassDescriptor.depthStencilAttachment = zQ
+       }(QQ, sQ), QQ._updateContext.targetWidth = sQ._width, QQ._updateContext.targetHeight = sQ._height), qQ && (Object.assign(QQ, PQ), FQ?._release(QQ.engine, [PQ._batchState])), PQ
+     }
+ 
+     function cQ(QQ, WQ) {
+       const XQ = QQ.engine,
+         wQ = QQ._config,
+         TQ = wQ.rt,
+         zQ = QQ.cB,
+         sQ = QQ._opaqueBindings,
+         FQ = QQ._ob,
+         PQ = QQ._sceneBG;
+       if (function(QQ, WQ, XQ, wQ) {
+           const qQ = WQ?.viewport;
+           if (!qQ) return;
+           const TQ = Math.floor(qQ.x * XQ),
+ ... (32 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L414-L415` → after: `L881-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L881-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L881-L1006) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L414-L415)

```diff
-         const Wp = 6 * (4 * Math.PI) / 6 / Lp;
-         return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
+         wQ = zQ.push(jQ)
+       }
+       if (wQ && (zQ.sort(((QQ, WQ) => QQ.order - WQ.order)), QQ._renderableVersion++, QQ._materialEpoch++), WQ.length = 0, !TQ) return qQ;
+       const sQ = TQ;
+       return XQ.e(371).then((() => XQ(61644))).then((WQ => {
+         let {
+           C: XQ
+         } = WQ;
+         return XQ(QQ, sQ, qQ)
+       }), (WQ => {
+         const XQ = QQ._runtimeBuilds;
+         XQ ? XQ._x(WQ) : console.error(WQ)
+       }))
+     }
+     var uQ = null;
+ 
+ ... (110 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L418` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1016) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L418)

```diff
-     Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), ne … [truncated]
+     var tQ = (QQ, WQ) => QQ.order - WQ.order
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L420` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1018) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L420)

```diff
-   42071: (pp, ip, cp) => {
+   41940: (QQ, WQ, XQ) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L422` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1020-L1021) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L422)

```diff
-       b: () => Ip
+       b: () => PQ,
+       e: () => gQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L424-L455` → after: `L1023-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1023-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1023-L1059) · [Before (L424-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L424-L455)

```diff
-     var Op = cp(42060),
-       op = cp(42080);
-     class Ip {
-       static ExpandRGBDTexture(pp) {
-         const ip = pp._texture;
-         if (!ip || !pp.isRGBD) return;
-         const op = ip.gy(),
-           Ip = op.getCaps(),
-           Sp = ip.isReady;
-         let xp = !1;
-         Ip.textureHalfFloatRender && Ip.textureHalfFloatLinearFiltering ? (xp = !0, ip.type = 2) : Ip.textureFloatRender && Ip.textureFloatLinearFiltering && (xp = !0, ip.type = 1), xp && (ip.isReady = !1, ip._isRGBD = !1, ip.invertY = !1);
-         const Lp = async () => {
-           const Ip = op.isWebGPU,
-             Sp = Ip ? 1 : 0;
-           ip.isReady = !1, Ip ? await cp.e(347).then((() => cp(61482))) : await cp.e(329).then((() => cp(61491)));
-           const xp = new Op.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, op, !1, void 0, ip.type, void 0, null, !1, void 0, Sp);
- ... (16 more removed lines; see GitHub link above)
+     var wQ = XQ(41893),
+       qQ = XQ(41901),
+       TQ = XQ(41906),
+       zQ = XQ(41914),
+       sQ = XQ(41920),
+       FQ = XQ(41927);
+ 
+     function PQ(QQ, WQ, XQ) {
+       let sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       (WQ < 1 || XQ < 1) && (0, wQ.e)(676, WQ, XQ);
+       const PQ = QQ._device,
+         gQ = sQ.mipMaps ?? !1,
+         JQ = sQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
+         rQ = gQ ? (0, FQ.e)(WQ, XQ) : 1,
+         IQ = PQ.createTexture({
+           size: {
+ ... (21 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L457` → after: `L1061-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1061-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1061-L1190) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L457)

```diff
-         xp && (Sp ? Lp() : pp.onLoadObservable.addOnce(Lp))
+       return (0, TQ.d)(yQ), QQ._dlr && QQ._dlr.t(yQ, {
+         kind: "dynamic",
+         width: WQ,
+         height: XQ,
+         format: JQ,
+         levels: rQ,
+         samplerDesc: jQ,
+         source: null,
+         flipY: !0,
+         premultipliedAlpha: !1
+       }), yQ
+     }
+ 
+     function gQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const qQ = wQ.invertY ?? !0,
+ ... (114 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L459-L461` → after: `L1192-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L1192-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/313.js#L1192-L1305) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/313.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(pp, ip) {
-         let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return ip.gy().isWebGPU ? await cp.e(348).then((() => cp(61509))) : await cp.e(330).then((() => cp(61507))), await (0, op.c)("rgbdEncode", pp, ip, Op, 1, 5)
+     }
+   },
+   41920: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       generateMipmaps: () => IQ,
+       recordMipmaps: () => jQ
+     });
+     var wQ = XQ(41901),
+       qQ = XQ(41914),
+       TQ = {
+         magFilter: "linear",
+         minFilter: "linear"
+       };
+     var zQ = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
+       sQ = null,
+       FQ = null,
+ ... (98 more added lines; see GitHub link above)
```
