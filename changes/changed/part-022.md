# Changed — Bundle Modifications Report (Part 022 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `22 / 65` (**328** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (869 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 675. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12649-L12666` → after: `L13657-L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13657-L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13657-L13661) · [Before (L12649-L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12649-L12666)

```diff
- 
-       function nB(DD) {
-         var zD;
-         switch (DD.kind) {
-           case 80:
-           case 81:
-             return (null == (zD = DD.emitNode) ? void 0 : zD.autoGenerate) ? void 0 : DD.escapedText;
-           case 11:
-           case 9:
-           case 10:
-           case 15:
-             return Ng(DD.text);
-           case 168:
-             return TM(DD.expression) ? Ng(DD.expression.text) : void 0;
-           case 296:
-             return IC(DD);
- ... (2 more removed lines; see GitHub link above)
+       update(pp) {
+         let ip = this.markers;
+         if (this.markers = HS(this.config.markers(pp.view)), this.spacer && this.config.updateSpacer) {
+           let ip = this.config.updateSpacer(this.spacer.markers[0], pp);
+           ip != this.spacer.markers[0] && this.spacer.update(pp.view, 0, 0, [ip])
```

#### 676. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12669-L12671` → after: `L13666-L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13666-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13666-L13667) · [Before (L12669-L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12669-L12671)

```diff
- 
-       function MB(DD) {
-         return np.checkDefined(nB(DD))
+       destroy() {
+         for (let pp of this.elements) pp.destroy()
```

#### 677. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12673-L12690` → after: `L13669-L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13669-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13669-L13708) · [Before (L12673-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12673-L12690)

```diff
- 
-       function OB(DD) {
-         switch (DD.kind) {
-           case 110:
-             return "this";
-           case 81:
-           case 80:
-             return 0 === kf(DD) ? yg(DD) : jI(DD);
-           case 167:
-             return OB(DD.left) + "." + OB(DD.right);
-           case 212:
-             return Eb(DD.name) || Qb(DD.name) ? OB(DD.expression) + "." + OB(DD.name) : np.assertNever(DD.name);
-           case 312:
-             return OB(DD.left) + "#" + OB(DD.right);
-           case 296:
-             return OB(DD.namespace) + ":" + OB(DD.name);
- ... (2 more removed lines; see GitHub link above)
+     }
+     class jS {
+       constructor(pp, ip, cp, Op) {
+         this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(pp, ip, cp, Op)
+       }
+       update(pp, ip, cp, Op) {
+         this.height != ip && (this.height = ip, this.dom.style.height = ip + "px"), this.above != cp && (this.dom.style.marginTop = (this.above = cp) ? cp + "px" : ""),
+           function(pp, ip) {
+             if (pp.length != ip.length) return !1;
+             for (let cp = 0; cp < pp.length; cp++)
+               if (!pp[cp].compare(ip[cp])) return !1;
+             return !0
+           }(this.markers, Op) || this.setMarkers(pp, Op)
+       }
+       setMarkers(pp, ip) {
+         let cp = "cm-gutterElement",
+ ... (24 more added lines; see GitHub link above)
```

#### 678. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12693-L12697` → after: `L13712-L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13712-L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13712-L13713) · [Before (L12693-L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12693-L12697)

```diff
- 
-       function JB(DD, zD) {
-         const wD = DI(DD);
-         for (var pD = arguments.length, sD = new Array(pD > 2 ? pD - 2 : 0), KD = 2; KD < pD; KD++) sD[KD - 2] = arguments[KD];
-         return QB(wD, DD, zD, ...sD)
+       destroy() {
+         this.setMarkers(null, [])
```

#### 679. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12700-L12703` → after: `L13796-L13876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13796-L13876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13796-L13876) · [Before (L12700-L12703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12700-L12703)

```diff
-       function EB(DD, zD, wD) {
-         const pD = nc(DD.text, zD.pos);
-         for (var sD = arguments.length, KD = new Array(sD > 3 ? sD - 3 : 0), rD = 3; rD < sD; rD++) KD[rD - 3] = arguments[rD];
-         return qQ(DD, pD, zD.end - pD, wD, ...KD)
+     function JS() {
+       return QS
+     }
+   },
+   41575: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       h: () => Wp,
+       j: () => Sp,
+       m: () => Dp,
+       p: () => Yp,
+       r: () => Qp,
+       s: () => Bp,
+       u: () => Jp,
+       w: () => yp
+     });
+ ... (65 more added lines; see GitHub link above)
```

#### 680. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12705-L12709` → after: `L13878-L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13878-L13879) · [Before (L12705-L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12705-L12709)

```diff
- 
-       function QB(DD, zD, wD) {
-         const pD = iB(DD, zD);
-         for (var sD = arguments.length, KD = new Array(sD > 3 ? sD - 3 : 0), rD = 3; rD < sD; rD++) KD[rD - 3] = arguments[rD];
-         return qQ(DD, pD.start, pD.length, wD, ...KD)
+       prop(pp) {
+         return this.props[pp.id]
```

#### 681. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12711-L12714` → after: `L13881-L13882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13881-L13882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13881-L13882) · [Before (L12711-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12711-L12714)

```diff
- 
-       function XB(DD, zD, wD, pD) {
-         const sD = iB(DD, zD);
-         return CB(DD, sD.start, sD.length, wD, pD)
+       get isTop() {
+         return (1 & this.flags) > 0
```

#### 682. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12716-L12719` → after: `L13884-L13885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13884-L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13884-L13885) · [Before (L12716-L12719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12716-L12719)

```diff
- 
-       function VB(DD, zD, wD, pD) {
-         const sD = nc(DD.text, zD.pos);
-         return CB(DD, sD, zD.end - sD, wD, pD)
+       get isSkipped() {
+         return (2 & this.flags) > 0
```

#### 683. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12721-L12723` → after: `L13887-L13888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13887-L13888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13887-L13888) · [Before (L12721-L12723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12721-L12723)

```diff
- 
-       function PB(DD, zD, wD) {
-         np.assertGreaterThanOrEqual(zD, 0), np.assertGreaterThanOrEqual(wD, 0), np.assertLessThanOrEqual(zD, DD.length), np.assertLessThanOrEqual(zD + wD, DD.length)
+       get isError() {
+         return (4 & this.flags) > 0
```

#### 684. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12725-L12735` → after: `L13890-L13897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13890-L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13890-L13897) · [Before (L12725-L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12725-L12735)

```diff
- 
-       function CB(DD, zD, wD, pD, sD) {
-         return PB(DD.text, zD, wD), {
-           file: DD,
-           start: zD,
-           length: wD,
-           code: pD.code,
-           category: pD.category,
-           messageText: pD.next ? pD : pD.messageText,
-           relatedInformation: sD,
-           canonicalHead: pD.canonicalHead
+       get isAnonymous() {
+         return (8 & this.flags) > 0
+       }
+       is(pp) {
+         if ("string" == typeof pp) {
+           if (this.name == pp) return !0;
+           let ip = this.prop(Sp.group);
+           return !!ip && ip.indexOf(pp) > -1
```

#### 685. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12738-L12747` → after: `L13901-L13909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13901-L13909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13901-L13909) · [Before (L12738-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12738-L12747)

```diff
- 
-       function xB(DD, zD, wD) {
-         return {
-           file: DD,
-           start: 0,
-           length: 0,
-           code: zD.code,
-           category: zD.category,
-           messageText: zD.next ? zD : zD.messageText,
-           relatedInformation: wD
+       static match(pp) {
+         let ip = Object.create(null);
+         for (let cp in pp)
+           for (let Op of cp.split(" ")) ip[Op] = pp[cp];
+         return pp => {
+           for (let cp = pp.prop(Sp.group), Op = -1; Op < (cp ? cp.length : 0); Op++) {
+             let op = ip[Op < 0 ? pp.name : cp[Op]];
+             if (op) return op
+           }
```

#### 686. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12750-L12757` → after: `L13912-L13918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13912-L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13912-L13918) · [Before (L12750-L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12750-L12757)

```diff
- 
-       function TB(DD) {
-         return "string" === typeof DD.messageText ? {
-           code: DD.code,
-           category: DD.category,
-           messageText: DD.messageText,
-           next: DD.next
-         } : DD.messageText
+     }
+     Yp.none = new Yp("", Object.create(null), 0, 8);
+     class Dp {
+       constructor(pp) {
+         this.types = pp;
+         for (let ip = 0; ip < pp.length; ip++)
+           if (pp[ip].id != ip) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
```

#### 687. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12759-L12767` → after: `L13920-L13934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13920-L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13920-L13934) · [Before (L12759-L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12759-L12767)

```diff
- 
-       function bB(DD, zD, wD) {
-         return {
-           file: DD,
-           start: zD.pos,
-           length: zD.end - zD.pos,
-           code: wD.code,
-           category: wD.category,
-           messageText: wD.message
+       extend() {
+         let pp = [];
+         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
+         for (let op of this.types) {
+           let ip = null;
+           for (let pp of cp) {
+             let cp = pp(op);
+             if (cp) {
+               ip || (ip = Object.assign({}, op.props));
+               let pp = cp[1],
+                 Op = cp[0];
+               Op.combine && Op.id in ip && (pp = Op.combine(ip[Op.id], pp)), ip[Op.id] = pp
+             }
+           }
+           pp.push(ip ? new Yp(op.name, ip, op.id, op.flags) : op)
```

#### 688. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12770-L12775` → after: `L13938-L13949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13938-L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13938-L13949) · [Before (L12770-L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12770-L12775)

```diff
- 
-       function jB(DD) {
-         for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
-         return {
-           code: DD.code,
-           messageText: DX(DD, ...wD)
+     }
+     const Ap = new WeakMap,
+       Pp = new WeakMap;
+     var Wp;
+     ! function(pp) {
+       pp[pp.ExcludeBuffers = 1] = "ExcludeBuffers", pp[pp.IncludeAnonymous = 2] = "IncludeAnonymous", pp[pp.IgnoreMounts = 4] = "IgnoreMounts", pp[pp.IgnoreOverlays = 8] = "IgnoreOverlays", pp[pp.EnterBracketed = 16] = "EnterBracketed"
+     }(Wp || (Wp = {}));
+     class yp {
+       constructor(pp, ip, cp, Op, op) {
+         if (this.type = pp, this.children = ip, this.positions = cp, this.length = Op, this.props = null, op && op.length) {
+           this.props = Object.create(null);
+           for (let [pp, ip] of op) this.props["number" == typeof pp ? pp : pp.id] = ip
```

#### 689. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12778-L12782` → after: `L13952-L13960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13952-L13960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13952-L13960) · [Before (L12778-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12778-L12782)

```diff
- 
-       function dB(DD, zD) {
-         const wD = Nc(DD.languageVersion, !0, DD.languageVariant, DD.text, void 0, zD);
-         wD.scan();
-         return Bg(wD.getTokenStart(), wD.getTokenEnd())
+       toString() {
+         let pp = xp.get(this);
+         if (pp && !pp.overlay) return pp.tree.toString();
+         let ip = "";
+         for (let cp of this.children) {
+           let pp = cp.toString();
+           pp && (ip && (ip += ","), ip += pp)
+         }
+         return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ip.length ? "(" + ip + ")" : "") : ip
```

#### 690. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12784-L12787` → after: `L13962-L13964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13962-L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13962-L13964) · [Before (L12784-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12784-L12787)

```diff
- 
-       function SB(DD, zD) {
-         const wD = Nc(DD.languageVersion, !0, DD.languageVariant, DD.text, void 0, zD);
-         return wD.scan(), wD.getToken()
+       cursor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return new Mp(this.topNode, pp)
```

#### 691. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12789-L12825` → after: `L13966-L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13966-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13966-L13997) · [Before (L12789-L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12789-L12825)

```diff
- 
-       function iB(DD, zD) {
-         let wD = zD;
-         switch (zD.kind) {
-           case 308: {
-             const zD = nc(DD.text, 0, !1);
-             return zD === DD.text.length ? Ig(0, 0) : dB(DD, zD)
-           }
-           case 261:
-           case 209:
-           case 264:
-           case 232:
-           case 265:
-           case 268:
-           case 267:
-           case 307:
- ... (21 more removed lines; see GitHub link above)
+       cursorAt(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = Ap.get(this) || this.topNode,
+           Op = new Mp(cp);
+         return Op.moveTo(pp, ip), Ap.set(this, Op._tree), Op
+       }
+       get topNode() {
+         return new dp(this, 0, 0, null)
+       }
+       resolve(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = tp(Ap.get(this) || this.topNode, pp, ip, !1);
+         return Ap.set(this, cp), cp
+       }
+       resolveInner(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+ ... (16 more added lines; see GitHub link above)
```

#### 692. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12827-L12845` → after: `L13999-L14017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L13999-L14017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L13999-L14017) · [Before (L12827-L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12827-L12845)

```diff
-               return Bg(wD, zD.end)
-             }(DD, zD);
-           case 297:
-           case 298:
-             return Bg(nc(DD.text, zD.pos), zD.statements.length > 0 ? zD.statements[0].pos : zD.end);
-           case 254:
-           case 230:
-             return dB(DD, nc(DD.text, zD.pos));
-           case 239:
-             return dB(DD, nc(DD.text, zD.expression.end));
-           case 351:
-             return dB(DD, nc(DD.text, zD.tagName.pos));
-           case 177: {
-             const wD = zD,
-               pD = nc(DD.text, wD.pos),
-               sD = Nc(DD.languageVersion, !0, DD.languageVariant, DD.text, void 0, pD);
- ... (3 more removed lines; see GitHub link above)
+             } return op ? Rp(op) : Op
+         }(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
+       }
+       iterate(pp) {
+         let {
+           enter: ip,
+           leave: cp,
+           from: Op = 0,
+           to: op = this.length
+         } = pp, Ip = pp.mode || 0, Sp = (Ip & Wp.IncludeAnonymous) > 0;
+         for (let xp = this.cursor(Ip | Wp.IncludeAnonymous);;) {
+           let pp = !1;
+           if (xp.from <= op && xp.to >= Op && (!Sp && xp.type.isAnonymous || !1 !== ip(xp))) {
+             if (xp.firstChild()) continue;
+             pp = !0
+           }
+ ... (3 more added lines; see GitHub link above)
```

#### 693. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12854-L12856` → after: `L14021-L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14021-L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14021-L14022) · [Before (L12854-L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12854-L12856)

```diff
- 
-       function lB(DD) {
-         return 308 === DD.kind && !WB(DD)
+       prop(pp) {
+         return pp.perNode ? this.props ? this.props[pp.id] : void 0 : this.type.prop(pp)
```

#### 694. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12858-L12860` → after: `L14024-L14028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14024-L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14024-L14028) · [Before (L12858-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12858-L12860)

```diff
- 
-       function WB(DD) {
-         return void 0 !== (DD.externalModuleIndicator || DD.commonJsModuleIndicator)
+       get propValues() {
+         let pp = [];
+         if (this.props)
+           for (let ip in this.props) pp.push([+ip, this.props[ip]]);
+         return pp
```

#### 695. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12862-L12864` → after: `L14030-L14032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14030-L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14030-L14032) · [Before (L12862-L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12862-L12864)

```diff
- 
-       function NB(DD) {
-         return 6 === DD.scriptKind
+       balance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         return this.children.length <= 8 ? this : lp(Yp.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((pp, ip, cp) => new yp(this.type, pp, ip, cp, this.propValues)), pp.makeTree || ((pp, ip, cp) => new yp(Yp.none, pp, ip, cp)))
```

#### 696. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12867-L12869` → after: `L14045-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14045-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14045-L14084) · [Before (L12867-L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12867-L12869)

```diff
-       function ZB(DD) {
-         return !!(4096 & Cg(DD))
-       }
+           function Wp(pp, ip, cp, Op, Sp, yp) {
+             let {
+               id: Up,
+               start: kp,
+               end: mp,
+               size: Rp
+             } = Yp, qp = Pp, Mp = Ap;
+             if (Rp < 0) {
+               if (Yp.next(), -1 == Rp) {
+                 let ip = xp[Up];
+                 return cp.push(ip), void Op.push(kp - pp)
+               }
+               if (-3 == Rp) return void(Ap = Up);
+               if (-4 == Rp) return void(Pp = Up);
+               throw new RangeError(`Unrecognized record size: ${Rp}`)
+             }
+ ... (24 more added lines; see GitHub link above)
```

#### 697. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12871-L12873` → after: `L14086-L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14086-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14086-L14109) · [Before (L12871-L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12871-L12873)

```diff
-       function yB(DD) {
-         return !(!(8 & Cg(DD)) || Eg(DD, DD.parent))
-       }
+           function vp(pp, ip, cp, Op) {
+             let Sp = [],
+               xp = 0,
+               Lp = -1;
+             for (; Yp.pos > ip;) {
+               let {
+                 id: pp,
+                 start: ip,
+                 end: cp,
+                 size: Op
+               } = Yp;
+               if (Op > 4) Yp.next();
+               else {
+                 if (Lp > -1 && ip < Lp) break;
+                 Lp < 0 && (Lp = cp - Ip), Sp.push(pp, ip, cp), xp++, Yp.next()
+               }
+ ... (8 more added lines; see GitHub link above)
```

#### 698. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12875-L12877` → after: `L14111-L14121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14111-L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14111-L14121) · [Before (L12875-L12877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12875-L12877)

```diff
-       function kB(DD) {
-         return 6 === (7 & Tg(DD))
-       }
+           function tp(pp, ip) {
+             return (cp, Op, op) => {
+               let Ip, xp, Lp = 0,
+                 Yp = cp.length - 1;
+               if (Yp >= 0 && (Ip = cp[Yp]) instanceof yp) {
+                 if (!Yp && Ip.type == pp && Ip.length == op) return Ip;
+                 (xp = Ip.prop(Sp.lookAhead)) && (Lp = Op[Yp] + Ip.length + xp)
+               }
+               return dp(pp, cp, Op, op, Lp, ip)
+             }
+           }
```

#### 699. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12879-L12881` → after: `L14123-L14128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14123-L14128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14123-L14128) · [Before (L12879-L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12879-L12881)

```diff
-       function mB(DD) {
-         return 4 === (7 & Tg(DD))
-       }
+           function Hp(pp, ip, cp, Op, Ip, Sp, xp, Lp, Yp) {
+             let Dp = [],
+               Ap = [];
+             for (; pp.length > Op;) Dp.push(pp.pop()), Ap.push(ip.pop() + cp - Ip);
+             pp.push(dp(op.types[xp], Dp, Ap, Sp - Ip, Lp - Sp, Yp)), ip.push(Ip - cp)
+           }
```

#### 700. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12883-L12885` → after: `L14130-L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14130-L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14130-L14140) · [Before (L12883-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12883-L12885)

```diff
-       function eB(DD) {
-         return 2 === (7 & Tg(DD))
-       }
+           function dp(pp, ip, cp, Op, op, Ip, xp) {
+             if (Ip) {
+               let pp = [Sp.contextHash, Ip];
+               xp = xp ? [pp].concat(xp) : [pp]
+             }
+             if (op > 25) {
+               let pp = [Sp.lookAhead, op];
+               xp = xp ? [pp].concat(xp) : [pp]
+             }
+             return new yp(pp, ip, cp, Op, xp)
+           }
```

#### 701. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12887-L12890` → after: `L14142-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14142-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14142-L14173) · [Before (L12887-L12890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12887-L12890)

```diff
-       function oB(DD) {
-         const zD = 7 & Tg(DD);
-         return 2 === zD || 4 === zD || 6 === zD
-       }
+           function ep(pp, ip) {
+             let cp = Yp.fork(),
+               Op = 0,
+               op = 0,
+               Sp = 0,
+               xp = cp.end - Ip,
+               Dp = {
+                 size: 0,
+                 start: 0,
+                 skip: 0
+               };
+             pp: for (let Ip = cp.pos - pp; cp.pos > Ip;) {
+               let pp = cp.size;
+               if (cp.id == ip && pp >= 0) {
+                 Dp.size = Op, Dp.start = op, Dp.skip = Sp, Sp += 4, Op += 4, cp.next();
+                 continue
+ ... (16 more added lines; see GitHub link above)
```

#### 702. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12892-L12893` → after: `L14175-L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14175-L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14175-L14197) · [Before (L12892-L12893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12892-L12893)

```diff
-       function aB(DD) {
-         return 1 === (7 & Tg(DD))
+           function jp(pp, ip, cp) {
+             let {
+               id: Op,
+               start: op,
+               end: Ip,
+               size: Sp
+             } = Yp;
+             if (Yp.next(), Sp >= 0 && Op < Lp) {
+               let xp = cp;
+               if (Sp > 4) {
+                 let Op = Yp.pos - (Sp - 4);
+                 for (; Yp.pos > Op;) cp = jp(pp, ip, cp)
+               }
+               ip[--cp] = xp, ip[--cp] = Ip - pp, ip[--cp] = op - pp, ip[--cp] = Op
+             } else - 3 == Sp ? Ap = Op : -4 == Sp && (Pp = Op);
+             return cp
+ ... (7 more added lines; see GitHub link above)
```

#### 703. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12895-L12897` → after: `L14199-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14199-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14199-L14203) · [Before (L12895-L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12895-L12897)

```diff
- 
-       function uB(DD) {
-         return 214 === DD.kind && 108 === DD.expression.kind
+     }
+     yp.empty = new yp(Yp.none, [], [], 0);
+     class Up {
+       constructor(pp, ip) {
+         this.buffer = pp, this.index = ip
```

#### 704. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12899-L12903` → after: `L14205-L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14205-L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14205-L14206) · [Before (L12899-L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12899-L12903)

```diff
- 
-       function vB(DD) {
-         if (214 !== DD.kind) return !1;
-         const zD = DD.expression;
-         return 102 === zD.kind || sd(zD) && 102 === zD.keywordToken && "defer" === zD.name.escapedText
+       get id() {
+         return this.buffer[this.index - 4]
```

#### 705. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12905-L12907` → after: `L14208-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14208-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14208-L14209) · [Before (L12905-L12907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12905-L12907)

```diff
- 
-       function tB(DD) {
-         return sd(DD) && 102 === DD.keywordToken && "meta" === DD.name.escapedText
+       get start() {
+         return this.buffer[this.index - 3]
```

#### 706. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12909-L12911` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14211-L14212) · [Before (L12909-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12909-L12911)

```diff
- 
-       function FB(DD) {
-         return Ej(DD) && Jj(DD.argument) && Kb(DD.argument.literal)
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 707. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12913-L12915` → after: `L14214-L14215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14214-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14214-L14215) · [Before (L12913-L12915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12913-L12915)

```diff
- 
-       function YB(DD) {
-         return 245 === DD.kind && 11 === DD.expression.kind
+       get size() {
+         return this.buffer[this.index - 1]
```

#### 708. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12917-L12919` → after: `L14217-L14218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14217-L14218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14217-L14218) · [Before (L12917-L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12917-L12919)

```diff
- 
-       function HB(DD) {
-         return !!(2097152 & iI(DD))
+       get pos() {
+         return this.index
```

#### 709. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12921-L12923` → after: `L14220-L14221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14220-L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14220-L14221) · [Before (L12921-L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12921-L12923)

```diff
- 
-       function qB(DD) {
-         return HB(DD) && jd(DD)
+       next() {
+         this.index -= 4
```

#### 710. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12925-L12927` → after: `L14223-L14224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14223-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14223-L14224) · [Before (L12925-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12925-L12927)

```diff
- 
-       function DG(DD) {
-         return Eb(DD.name) && !DD.initializer
+       fork() {
+         return new Up(this.buffer, this.index)
```

#### 711. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12929-L12931` → after: `L14226-L14229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14226-L14229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14226-L14229) · [Before (L12929-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12929-L12931)

```diff
- 
-       function zG(DD) {
-         return HB(DD) && Ad(DD) && MD(DD.declarationList.declarations, DG)
+     }
+     class wp {
+       constructor(pp, ip, cp) {
+         this.buffer = pp, this.length = ip, this.set = cp
```

#### 712. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12933-L12935` → after: `L14231-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14231-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14231-L14232) · [Before (L12933-L12935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12933-L12935)

```diff
- 
-       function wG(DD, zD) {
-         return 12 !== DD.kind ? jc(zD.text, DD.pos) : void 0
+       get type() {
+         return Yp.none
```

#### 713. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L12937-L13010` → after: `L14234-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14234-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14234-L14247) · [Before (L12937-L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L12937-L13010)

```diff
- 
-       function pG(DD, zD) {
-         return CD(170 === DD.kind || 169 === DD.kind || 219 === DD.kind || 220 === DD.kind || 218 === DD.kind || 261 === DD.kind || 282 === DD.kind ? FD(dc(zD, DD.pos), jc(zD, DD.pos)) : jc(zD, DD.pos), (wD => wD.end <= DD.end && 42 === zD.charCodeAt(wD.pos + 1) && 42 === zD.char … [truncated]
-       }
-       var sG = /^\/\/\/\s*<reference\s+path\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         KG = /^\/\/\/\s*<reference\s+types\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         rG = /^\/\/\/\s*<reference\s+lib\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         LG = /^\/\/\/\s*<amd-dependency\s+path\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         cG = /^\/\/\/\s*<amd-module\s+(?:\S.*?)??\/>/,
-         gG = /^\/\/\/\s*<reference\s+no-default-lib\s*=\s*(?:'[^']*'|"[^"]*")\s*\/>/;
- 
-       function RG(DD) {
-         if (183 <= DD.kind && DD.kind <= 206) return !0;
-         switch (DD.kind) {
-           case 133:
-           case 159:
- ... (58 more removed lines; see GitHub link above)
+       toString() {
+         let pp = [];
+         for (let ip = 0; ip < this.buffer.length;) pp.push(this.childString(ip)), ip = this.buffer[ip + 3];
+         return pp.join(",")
+       }
+       childString(pp) {
+         let ip = this.buffer[pp],
+           cp = this.buffer[pp + 3],
+           Op = this.set.types[ip],
+           op = Op.name;
+         if (/\W/.test(op) && !Op.isError && (op = JSON.stringify(op)), cp == (pp += 4)) return op;
+         let Ip = [];
+         for (; pp < cp;) Ip.push(this.childString(pp)), pp = this.buffer[pp + 3];
+         return op + "(" + Ip.join(",") + ")"
```

#### 714. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13012-L13014` → after: `L14249-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14249-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14249-L14254) · [Before (L13012-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13012-L13014)

```diff
- 
-       function AG(DD) {
-         return Oi(DD.parent) || YS(DD.parent) || XS(DD.parent) && !KE(DD)
+       findChild(pp, ip, cp, Op, op) {
+         let {
+           buffer: Ip
+         } = this, Sp = -1;
+         for (let xp = pp; xp != ip && !(vp(op, Op, Ip[xp + 1], Ip[xp + 2]) && (Sp = xp, cp > 0)); xp = Ip[xp + 3]);
+         return Sp
```

#### 715. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13016-L13039` → after: `L14256-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14256-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14256-L14282) · [Before (L13016-L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13016-L13039)

```diff
- 
-       function UG(DD, zD) {
-         return function DD(wD) {
-           switch (wD.kind) {
-             case 254:
-               return zD(wD);
-             case 270:
-             case 242:
-             case 246:
-             case 247:
-             case 248:
-             case 249:
-             case 250:
-             case 251:
-             case 255:
-             case 256:
- ... (8 more removed lines; see GitHub link above)
+       slice(pp, ip, cp) {
+         let Op = this.buffer,
+           op = new Uint16Array(ip - pp),
+           Ip = 0;
+         for (let Sp = pp, xp = 0; Sp < ip;) {
+           op[xp++] = Op[Sp++], op[xp++] = Op[Sp++] - cp;
+           let ip = op[xp++] = Op[Sp++] - cp;
+           op[xp++] = Op[Sp++] - pp, Ip = Math.max(Ip, ip)
+         }
+         return new wp(op, Ip, this.set)
+       }
+     }
+ 
+     function vp(pp, ip, cp, Op) {
+       switch (pp) {
+         case -2:
+ ... (11 more added lines; see GitHub link above)
```

#### 716. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13042-L13059` → after: `L14286-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14286-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14286-L14290) · [Before (L13042-L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13042-L13059)

```diff
-       function fG(DD, zD) {
-         return function DD(wD) {
-           switch (wD.kind) {
-             case 230:
-               zD(wD);
-               const pD = wD.expression;
-               return void(pD && DD(pD));
-             case 267:
-             case 265:
-             case 268:
-             case 266:
-               return;
-             default:
-               if (bA(wD)) {
-                 if (wD.name && 168 === wD.name.kind) return void DD(wD.name.expression)
-               } else RG(wD) || bW(wD, DD)
- ... (2 more removed lines; see GitHub link above)
+     function tp(pp, ip, cp, Op) {
+       for (var op; pp.from == pp.to || (cp < 1 ? pp.from >= ip : pp.from > ip) || (cp > -1 ? pp.to <= ip : pp.to < ip);) {
+         let ip = !Op && pp instanceof dp && pp.index < 0 ? null : pp.parent;
+         if (!ip) return pp;
+         pp = ip
```

#### 717. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13061-L13063` → after: `L14292-L14298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14292-L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14292-L14298) · [Before (L13061-L13063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13061-L13063)

```diff
- 
-       function IG(DD) {
-         return DD && 189 === DD.kind ? DD.elementType : DD && 184 === DD.kind ? Qz(DD.typeArguments) : void 0
+       let Ip = Op ? 0 : Wp.IgnoreOverlays;
+       if (Op)
+         for (let Sp = pp, xp = Sp.parent; xp; Sp = xp, xp = Sp.parent) Sp instanceof dp && Sp.index < 0 && (null === (op = xp.enter(ip, cp, Ip)) || void 0 === op ? void 0 : op.from) != Sp.from && (pp = xp);
+       for (;;) {
+         let Op = pp.enter(ip, cp, Ip);
+         if (!Op) return pp;
+         pp = Op
```

#### 718. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13065-L13075` → after: `L14300-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14300-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14300-L14303) · [Before (L13065-L13075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13065-L13075)

```diff
- 
-       function BG(DD) {
-         switch (DD.kind) {
-           case 265:
-           case 264:
-           case 232:
-           case 188:
-             return DD.members;
-           case 211:
-             return DD.properties
-         }
+     }
+     class Hp {
+       cursor() {
+         return new Mp(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
```

#### 719. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13077-L13090` → after: `L14305-L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14305-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14305-L14307) · [Before (L13077-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13077-L13090)

```diff
- 
-       function GG(DD) {
-         if (DD) switch (DD.kind) {
-           case 209:
-           case 307:
-           case 170:
-           case 304:
-           case 173:
-           case 172:
-           case 305:
-           case 261:
-             return !0
-         }
-         return !1
+       getChild(pp) {
+         let ip = ep(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
+         return ip.length ? ip[0] : null
```

#### 720. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13092-L13094` → after: `L14309-L14310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14309-L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14309-L14310) · [Before (L13092-L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13092-L13094)

```diff
- 
-       function hG(DD) {
-         return 262 === DD.parent.kind && 244 === DD.parent.parent.kind
+       getChildren(pp) {
+         return ep(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
```

#### 721. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13096-L13098` → after: `L14312-L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14312-L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14312-L14313) · [Before (L13096-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13096-L13098)

```diff
- 
-       function nG(DD) {
-         return !!Gh(DD) && (Tj(DD.parent) && uj(DD.parent.parent) && 2 === mh(DD.parent.parent) || MG(DD.parent))
+       resolve(pp) {
+         return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
```

#### 722. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13100-L13102` → after: `L14315-L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14315-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14315-L14316) · [Before (L13100-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13100-L13102)

```diff
- 
-       function MG(DD) {
-         return !!Gh(DD) && (uj(DD) && 1 === mh(DD))
+       resolveInner(pp) {
+         return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
```

#### 723. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13104-L13106` → after: `L14318-L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14318-L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14318-L14319) · [Before (L13104-L13106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13104-L13106)

```diff
- 
-       function OG(DD) {
-         return (Td(DD) ? eB(DD) && Eb(DD.name) && hG(DD) : ob(DD) ? dJ(DD) && CJ(DD) : eb(DD) && dJ(DD)) || MG(DD)
+       matchContext(pp) {
+         return jp(this.parent, pp)
```

#### 724. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13108-L13118` → after: `L14321-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14321-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14321-L14327) · [Before (L13108-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13108-L13118)

```diff
- 
-       function JG(DD) {
-         switch (DD.kind) {
-           case 175:
-           case 174:
-           case 177:
-           case 178:
-           case 179:
-           case 263:
-           case 219:
-             return !0
+       enterUnfinishedNodesBefore(pp) {
+         let ip = this.childBefore(pp),
+           cp = this;
+         for (; ip;) {
+           let pp = ip.lastChild;
+           if (!pp || pp.to != ip.to) break;
+           pp.type.isError && pp.from == pp.to ? (cp = ip, ip = pp.prevSibling) : ip = pp
```

#### 725. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13120` → after: `L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14329) · [Before (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13120)

```diff
-         return !1
+         return cp
```

#### 726. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13122-L13127` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14331-L14332) · [Before (L13122-L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13122-L13127)

```diff
- 
-       function EG(DD, zD) {
-         for (;;) {
-           if (zD && zD(DD), 257 !== DD.statement.kind) return DD.statement;
-           DD = DD.statement
-         }
+       get node() {
+         return this
```

#### 727. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13129-L13131` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14334-L14335) · [Before (L13129-L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13129-L13131)

```diff
- 
-       function QG(DD) {
-         return DD && 242 === DD.kind && bA(DD.parent)
+       get next() {
+         return this.parent
```

#### 728. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13133-L13135` → after: `L14337-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14337-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14337-L14340) · [Before (L13133-L13135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13133-L13135)

```diff
- 
-       function XG(DD) {
-         return DD && 175 === DD.kind && 211 === DD.parent.kind
+     }
+     class dp extends Hp {
+       constructor(pp, ip, cp, Op) {
+         super(), this._tree = pp, this.from = ip, this.index = cp, this._parent = Op
```

#### 729. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13137-L13139` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14342-L14343) · [Before (L13137-L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13137-L13139)

```diff
- 
-       function VG(DD) {
-         return (175 === DD.kind || 178 === DD.kind || 179 === DD.kind) && (211 === DD.parent.kind || 232 === DD.parent.kind)
+       get type() {
+         return this._tree.type
```

#### 730. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13141-L13147` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14345-L14346) · [Before (L13141-L13147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13141-L13147)

```diff
- 
-       function PG(DD) {
-         return DD && 1 === DD.kind
-       }
- 
-       function CG(DD) {
-         return DD && 0 === DD.kind
+       get name() {
+         return this._tree.type.name
```

#### 731. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13149-L13155` → after: `L14348-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14348-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14348-L14349) · [Before (L13149-L13155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13149-L13155)

```diff
- 
-       function xG(DD, zD, wD, pD) {
-         return UD(null == DD ? void 0 : DD.properties, (DD => {
-           if (!PS(DD)) return;
-           const sD = nB(DD.name);
-           return zD === sD || pD && pD === sD ? wD(DD) : void 0
-         }))
+       get to() {
+         return this.from + this._tree.length
```

#### 732. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13157-L13160` → after: `L14351-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14351-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14351-L14373) · [Before (L13157-L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13157-L13160)

```diff
- 
-       function TG(DD) {
-         if (DD && DD.statements.length) {
-           return rw(DD.statements[0].expression, Tj)
+       nextChild(pp, ip, cp, Op) {
+         let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         for (let Ip = this;;) {
+           for (let {
+               children: Sp,
+               positions: Lp
+             } = Ip._tree, Yp = ip > 0 ? Sp.length : -1; pp != Yp; pp += ip) {
+             let Yp, Dp = Sp[pp],
+               Ap = Lp[pp] + Ip.from;
+             if (op & Wp.EnterBracketed && Dp instanceof yp && (Yp = xp.get(Dp)) && !Yp.overlay && Yp.bracketed && cp >= Ap && cp <= Ap + Dp.length || vp(Op, cp, Ap, Ap + Dp.length))
+               if (Dp instanceof wp) {
+                 if (op & Wp.ExcludeBuffers) continue;
+                 let Sp = Dp.findChild(0, Dp.buffer.length, ip, cp - Ap, Op);
+                 if (Sp > -1) return new mp(new kp(Ip, Dp, pp, Ap), null, Sp)
+               } else if (op & Wp.IncludeAnonymous || !Dp.type.isAnonymous || Cp(Dp)) {
+               let Sp;
+ ... (7 more added lines; see GitHub link above)
```

#### 733. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13163-L13165` → after: `L14376-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14376-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14376-L14377) · [Before (L13163-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13163-L13165)

```diff
- 
-       function bG(DD, zD, wD) {
-         return jG(DD, zD, (DD => xj(DD.initializer) ? OD(DD.initializer.elements, (DD => Kb(DD) && DD.text === wD)) : void 0))
+       get firstChild() {
+         return this.nextChild(0, 1, 0, 4)
```

#### 734. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13167-L13169` → after: `L14379-L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14379-L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14379-L14380) · [Before (L13167-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13167-L13169)

```diff
- 
-       function jG(DD, zD, wD) {
-         return xG(TG(DD), zD, wD)
+       get lastChild() {
+         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
```

#### 735. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13171-L13173` → after: `L14382-L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14382-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14382-L14383) · [Before (L13171-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13171-L13173)

```diff
- 
-       function dG(DD) {
-         return ig(DD.parent, bA)
+       childAfter(pp) {
+         return this.nextChild(0, 1, pp, 2)
```

#### 736. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13175-L13177` → after: `L14385-L14386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14385-L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14385-L14386) · [Before (L13175-L13177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13175-L13177)

```diff
- 
-       function SG(DD) {
-         return ig(DD.parent, dA)
+       childBefore(pp) {
+         return this.nextChild(this._tree.children.length - 1, -1, pp, -2)
```

#### 737. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13179-L13181` → after: `L14388-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14388-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14388-L14389) · [Before (L13179-L13181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13179-L13181)

```diff
- 
-       function iG(DD) {
-         return ig(DD.parent, ZA)
+       prop(pp) {
+         return this._tree.prop(pp)
```

#### 738. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13183-L13185` → after: `L14391-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14391-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14391-L14403) · [Before (L13183-L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13183-L13185)

```diff
- 
-       function lG(DD) {
-         return ig(DD.parent, (DD => ZA(DD) || bA(DD) ? "quit" : vb(DD)))
+       enter(pp, ip) {
+         let cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (!(Op & Wp.IgnoreOverlays) && (cp = xp.get(this._tree)) && cp.overlay) {
+           let op = pp - this.from,
+             Ip = Op & Wp.EnterBracketed && cp.bracketed;
+           for (let {
+               from: pp,
+               to: Op
+             }
+             of cp.overlay)
+             if ((ip > 0 || Ip ? pp <= op : pp < op) && (ip < 0 || Ip ? Op >= op : Op > op)) return new dp(cp.tree, cp.overlay[0].from + this.from, -1, this)
+         }
+         return this.nextChild(0, 1, pp, ip, Op)
```

#### 739. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13187-L13189` → after: `L14405-L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14405-L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14405-L14408) · [Before (L13187-L13189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13187-L13189)

```diff
- 
-       function WG(DD) {
-         return ig(DD.parent, jA)
+       nextSignificantParent() {
+         let pp = this;
+         for (; pp.type.isAnonymous && pp._parent;) pp = pp._parent;
+         return pp
```

#### 740. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13191-L13194` → after: `L14410-L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14410-L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14410-L14411) · [Before (L13191-L13194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13191-L13194)

```diff
- 
-       function NG(DD) {
-         const zD = ig(DD.parent, (DD => ZA(DD) ? "quit" : mb(DD)));
-         return zD && ZA(zD.parent) ? iG(zD.parent) : iG(zD ?? DD)
+       get parent() {
+         return this._parent ? this._parent.nextSignificantParent() : null
```

#### 741. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13196-L13228` → after: `L14413-L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14413-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14413-L14414) · [Before (L13196-L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13196-L13228)

```diff
- 
-       function ZG(DD, zD, wD) {
-         for (np.assert(308 !== DD.kind);;) {
-           if (!(DD = DD.parent)) return np.fail();
-           switch (DD.kind) {
-             case 168:
-               if (wD && ZA(DD.parent.parent)) return DD;
-               DD = DD.parent.parent;
-               break;
-             case 171:
-               170 === DD.parent.kind && NA(DD.parent.parent) ? DD = DD.parent.parent : NA(DD.parent) && (DD = DD.parent);
-               break;
-             case 220:
-               if (!zD) continue;
-             case 263:
-             case 219:
- ... (17 more removed lines; see GitHub link above)
+       get nextSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
```

#### 742. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13230-L13250` → after: `L14416-L14417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14416-L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14416-L14417) · [Before (L13230-L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13230-L13250)

```diff
- 
-       function yG(DD) {
-         switch (DD.kind) {
-           case 220:
-           case 263:
-           case 219:
-           case 173:
-             return !0;
-           case 242:
-             switch (DD.parent.kind) {
-               case 177:
-               case 175:
-               case 178:
-               case 179:
-                 return !0;
-               default:
- ... (5 more removed lines; see GitHub link above)
+       get prevSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
```

#### 743. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13252-L13255` → after: `L14419-L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14419-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14419-L14420) · [Before (L13252-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13252-L13255)

```diff
- 
-       function kG(DD) {
-         Eb(DD) && (dd(DD.parent) || jd(DD.parent)) && DD.parent.name === DD && (DD = DD.parent);
-         return bS(ZG(DD, !0, !1))
+       get tree() {
+         return this._tree
```

#### 744. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13257-L13265` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14422-L14423) · [Before (L13257-L13265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13257-L13265)

```diff
- 
-       function mG(DD) {
-         const zD = ZG(DD, !1, !1);
-         if (zD) switch (zD.kind) {
-           case 177:
-           case 263:
-           case 219:
-             return zD
-         }
+       toTree() {
+         return this._tree
```

#### 745. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13267-L13291` → after: `L14425-L14426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14425-L14426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14425-L14426) · [Before (L13267-L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13267-L13291)

```diff
- 
-       function eG(DD, zD) {
-         for (;;) {
-           if (!(DD = DD.parent)) return;
-           switch (DD.kind) {
-             case 168:
-               DD = DD.parent;
-               break;
-             case 263:
-             case 219:
-             case 220:
-               if (!zD) continue;
-             case 173:
-             case 172:
-             case 175:
-             case 174:
- ... (9 more removed lines; see GitHub link above)
+       toString() {
+         return this._tree.toString()
```

#### 746. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13294-L13299` → after: `L14430-L14449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14430-L14449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14430-L14449) · [Before (L13294-L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13294-L13299)

```diff
-       function oG(DD) {
-         if (219 === DD.kind || 220 === DD.kind) {
-           let zD = DD,
-             wD = DD.parent;
-           for (; 218 === wD.kind;) zD = wD, wD = wD.parent;
-           if (214 === wD.kind && wD.expression === zD) return wD
+     function ep(pp, ip, cp, Op) {
+       let op = pp.cursor(),
+         Ip = [];
+       if (!op.firstChild()) return Ip;
+       if (null != cp)
+         for (let Sp = !1; !Sp;)
+           if (Sp = op.type.is(cp), !op.nextSibling()) return Ip;
+       for (;;) {
+         if (null != Op && op.type.is(Op)) return Ip;
+         if (op.type.is(ip) && Ip.push(op.node), !op.nextSibling()) return null == Op ? Ip : []
+       }
+     }
+ 
+     function jp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.length - 1;
+       for (let Op = pp; cp >= 0; Op = Op.parent) {
+ ... (4 more added lines; see GitHub link above)
```

#### 747. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13302-L13305` → after: `L14452-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14452-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14452-L14456) · [Before (L13302-L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13302-L13305)

```diff
- 
-       function aG(DD) {
-         const zD = DD.kind;
-         return (212 === zD || 213 === zD) && 108 === DD.expression.kind
+       return !0
+     }
+     class kp {
+       constructor(pp, ip, cp, Op) {
+         this.parent = pp, this.buffer = ip, this.index = cp, this.start = Op
```

#### 748. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13307-L13310` → after: `L14458-L14461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14458-L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14458-L14461) · [Before (L13307-L13310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13307-L13310)

```diff
- 
-       function uG(DD) {
-         const zD = DD.kind;
-         return (212 === zD || 213 === zD) && 110 === DD.expression.kind
+     }
+     class mp extends Hp {
+       get name() {
+         return this.type.name
```

#### 749. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13312-L13315` → after: `L14463-L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14463-L14464) · [Before (L13312-L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13312-L13315)

```diff
- 
-       function vG(DD) {
-         var zD;
-         return !!DD && Td(DD) && 110 === (null == (zD = DD.initializer) ? void 0 : zD.kind)
+       get from() {
+         return this.context.start + this.context.buffer.buffer[this.index + 1]
```

#### 750. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13317-L13319` → after: `L14466-L14467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14466-L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14466-L14467) · [Before (L13317-L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13317-L13319)

```diff
- 
-       function tG(DD) {
-         return !!DD && (CS(DD) || PS(DD)) && uj(DD.parent.parent) && 64 === DD.parent.parent.operatorToken.kind && 110 === DD.parent.parent.right.kind
+       get to() {
+         return this.context.start + this.context.buffer.buffer[this.index + 2]
```

#### 751. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13321-L13331` → after: `L14469-L14470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14469-L14470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14469-L14470) · [Before (L13321-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13321-L13331)

```diff
- 
-       function FG(DD) {
-         switch (DD.kind) {
-           case 184:
-             return DD.typeName;
-           case 234:
-             return rE(DD.expression) ? DD.expression : void 0;
-           case 80:
-           case 167:
-             return DD
-         }
+       constructor(pp, ip, cp) {
+         super(), this.context = pp, this._parent = ip, this.index = cp, this.type = pp.buffer.set.types[pp.buffer.buffer[cp]]
```

#### 752. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13333-L13347` → after: `L14472-L14476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14472-L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14472-L14476) · [Before (L13333-L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13333-L13347)

```diff
- 
-       function YG(DD) {
-         switch (DD.kind) {
-           case 216:
-             return DD.tag;
-           case 287:
-           case 286:
-             return DD.tagName;
-           case 227:
-             return DD.right;
-           case 290:
-             return DD;
-           default:
-             return DD.expression
-         }
+       child(pp, ip, cp) {
+         let {
+           buffer: Op
+         } = this.context, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.context.start, cp);
+         return op < 0 ? null : new mp(this.context, this, op)
```

#### 753. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13349-L13366` → after: `L14478-L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14478-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14478-L14479) · [Before (L13349-L13366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13349-L13366)

```diff
- 
-       function HG(DD, zD, wD, pD) {
-         if (DD && vg(zD) && Qb(zD.name)) return !1;
-         switch (zD.kind) {
-           case 264:
-             return !0;
-           case 232:
-             return !DD;
-           case 173:
-             return void 0 !== wD && (DD ? dd(wD) : ZA(wD) && !TJ(zD) && !bJ(zD));
-           case 178:
-           case 179:
-           case 175:
-             return void 0 !== zD.body && void 0 !== wD && (DD ? dd(wD) : ZA(wD));
-           case 170:
-             return !!DD && (void 0 !== wD && void 0 !== wD.body && (177 === wD.kind || 175 === wD.kind || 179 === wD.kind) && sJ(wD) !== zD && void 0 !== pD && 264 === pD.kind)
- ... (2 more removed lines; see GitHub link above)
+       get firstChild() {
+         return this.child(1, 0, 4)
```

#### 754. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13368-L13370` → after: `L14481-L14482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14481-L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14481-L14482) · [Before (L13368-L13370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13368-L13370)

```diff
- 
-       function qG(DD, zD, wD, pD) {
-         return SJ(zD) && HG(DD, zD, wD, pD)
+       get lastChild() {
+         return this.child(-1, 0, 4)
```

#### 755. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13372-L13374` → after: `L14484-L14485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14484-L14485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14484-L14485) · [Before (L13372-L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13372-L13374)

```diff
- 
-       function Dh(DD, zD, wD, pD) {
-         return qG(DD, zD, wD, pD) || zh(DD, zD, wD)
+       childAfter(pp) {
+         return this.child(1, pp, 2)
```

#### 756. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13376-L13389` → after: `L14487-L14488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14487-L14488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14487-L14488) · [Before (L13376-L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13376-L13389)

```diff
- 
-       function zh(DD, zD, wD) {
-         switch (zD.kind) {
-           case 264:
-             return vD(zD.members, (pD => Dh(DD, pD, zD, wD)));
-           case 232:
-             return !DD && vD(zD.members, (pD => Dh(DD, pD, zD, wD)));
-           case 175:
-           case 179:
-           case 177:
-             return vD(zD.parameters, (pD => qG(DD, pD, zD, wD)));
-           default:
-             return !1
-         }
+       childBefore(pp) {
+         return this.child(-1, pp, -2)
```

#### 757. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13391-L13395` → after: `L14490-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14490-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14490-L14491) · [Before (L13391-L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13391-L13395)

```diff
- 
-       function wh(DD, zD) {
-         if (qG(DD, zD)) return !0;
-         const wD = zJ(zD);
-         return !!wD && zh(DD, wD, zD)
+       prop(pp) {
+         return this.type.prop(pp)
```

#### 758. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13397-L13413` → after: `L14493-L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14493-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14493-L14498) · [Before (L13397-L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13397-L13413)

```diff
- 
-       function ph(DD, zD, wD) {
-         let pD;
-         if (yA(zD)) {
-           const {
-             firstAccessor: DD,
-             secondAccessor: sD,
-             setAccessor: KD
-           } = RJ(wD.members, zD), rD = SJ(DD) ? DD : sD && SJ(sD) ? sD : void 0;
-           if (!rD || zD !== rD) return !1;
-           pD = null == KD ? void 0 : KD.parameters
-         } else ub(zD) && (pD = zD.parameters);
-         if (qG(DD, zD, wD)) return !0;
-         if (pD)
-           for (const sD of pD)
-             if (!KJ(sD) && qG(DD, sD, zD, wD)) return !0;
- ... (1 more removed lines; see GitHub link above)
+       enter(pp, ip) {
+         if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Wp.ExcludeBuffers) return null;
+         let {
+           buffer: cp
+         } = this.context, Op = cp.findChild(this.index + 4, cp.buffer[this.index + 3], ip > 0 ? 1 : -1, pp - this.context.start, ip);
+         return Op < 0 ? null : new mp(this.context, this, Op)
```

#### 759. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13415-L13426` → after: `L14500-L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14500-L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14500-L14501) · [Before (L13415-L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13415-L13426)

```diff
- 
-       function sh(DD) {
-         if (DD.textSourceNode) {
-           switch (DD.textSourceNode.kind) {
-             case 11:
-               return sh(DD.textSourceNode);
-             case 15:
-               return "" === DD.text
-           }
-           return !1
-         }
-         return "" === DD.text
+       get parent() {
+         return this._parent || this.context.parent.nextSignificantParent()
```

#### 760. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13428-L13433` → after: `L14503-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14503-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14503-L14504) · [Before (L13428-L13433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13428-L13433)

```diff
- 
-       function Kh(DD) {
-         const {
-           parent: zD
-         } = DD;
-         return (287 === zD.kind || 286 === zD.kind || 288 === zD.kind) && zD.tagName === DD
+       externalSibling(pp) {
+         return this._parent ? null : this.context.parent.nextChild(this.context.index + pp, pp, 0, 4)
```

#### 761. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13435-L13496` → after: `L14506-L14510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14506-L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14506-L14510) · [Before (L13435-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13435-L13496)

```diff
- 
-       function rh(DD) {
-         switch (DD.kind) {
-           case 108:
-           case 106:
-           case 112:
-           case 97:
-           case 14:
-           case 210:
-           case 211:
-           case 212:
-           case 213:
-           case 214:
-           case 215:
-           case 216:
-           case 235:
- ... (46 more removed lines; see GitHub link above)
+       get nextSibling() {
+         let {
+           buffer: pp
+         } = this.context, ip = pp.buffer[this.index + 3];
+         return ip < (this._parent ? pp.buffer[this._parent.index + 3] : pp.buffer.length) ? new mp(this.context, this._parent, ip) : this.externalSibling(1)
```

#### 762. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13498-L13546` → after: `L14512-L14516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14512-L14516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14512-L14516) · [Before (L13498-L13546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13498-L13546)

```diff
- 
-       function Lh(DD) {
-         const {
-           parent: zD
-         } = DD;
-         switch (zD.kind) {
-           case 261:
-           case 170:
-           case 173:
-           case 172:
-           case 307:
-           case 304:
-           case 209:
-             return zD.initializer === DD;
-           case 245:
-           case 246:
- ... (33 more removed lines; see GitHub link above)
+       get prevSibling() {
+         let {
+           buffer: pp
+         } = this.context, ip = this._parent ? this._parent.index + 4 : 0;
+         return this.index == ip ? this.externalSibling(-1) : new mp(this.context, this._parent, pp.findChild(ip, this.index, -1, 0, 4))
```

#### 763. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13548-L13551` → after: `L14518-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14518-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14518-L14519) · [Before (L13548-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13548-L13551)

```diff
- 
-       function ch(DD) {
-         for (; 167 === DD.kind || 80 === DD.kind;) DD = DD.parent;
-         return 187 === DD.kind
+       get tree() {
+         return null
```

#### 764. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13553-L13555` → after: `L14521-L14546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14521-L14546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14521-L14546) · [Before (L13553-L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13553-L13555)

```diff
- 
-       function gh(DD) {
-         return Hd(DD) && !!DD.parent.moduleSpecifier
+       toTree() {
+         let pp = [],
+           ip = [],
+           {
+             buffer: cp
+           } = this.context,
+           Op = this.index + 4,
+           op = cp.buffer[this.index + 3];
+         if (op > Op) {
+           let Ip = cp.buffer[this.index + 1];
+           pp.push(cp.slice(Op, op, Ip)), ip.push(0)
+         }
+         return new yp(this.type, pp, ip, this.to - this.from)
+       }
+       toString() {
+         return this.context.buffer.childString(this.index)
+ ... (10 more added lines; see GitHub link above)
```

#### 765. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13557-L13559` → after: `L14548-L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14548-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14548-L14554) · [Before (L13557-L13559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13557-L13559)

```diff
- 
-       function Rh(DD) {
-         return 272 === DD.kind && 284 === DD.moduleReference.kind
+       let Op = cp instanceof dp && cp.index < 0 ? null : cp.parent,
+         op = pp.slice();
+       return Op ? op[ip] = Op : op.splice(ip, 1), new qp(op, cp)
+     }
+     class qp {
+       constructor(pp, ip) {
+         this.heads = pp, this.node = ip
```

#### 766. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13561-L13563` → after: `L14556-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14556-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14556-L14557) · [Before (L13561-L13563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13561-L13563)

```diff
- 
-       function Ah(DD) {
-         return np.assert(Rh(DD)), DD.moduleReference.expression
+       get next() {
+         return Rp(this.heads)
```

#### 767. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13565-L13567` → after: `L14559-L14562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14559-L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14559-L14562) · [Before (L13565-L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13565-L13567)

```diff
- 
-       function Uh(DD) {
-         return Qh(DD) && xQ(DD.initializer).arguments[0]
+     }
+     class Mp {
+       get name() {
+         return this.type.name
```

#### 768. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13569-L13571` → after: `L14564-L14571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14564-L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14564-L14571) · [Before (L13569-L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13569-L13571)

```diff
- 
-       function fh(DD) {
-         return 272 === DD.kind && 284 !== DD.moduleReference.kind
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ip & ~Wp.EnterBracketed, pp instanceof dp) this.yieldNode(pp);
+         else {
+           this._tree = pp.context.parent, this.buffer = pp.context;
+           for (let ip = pp._parent; ip; ip = ip._parent) this.stack.unshift(ip.index);
+           this.bufferNode = pp, this.yieldBuf(pp.index)
+         }
```

#### 769. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13573-L13575` → after: `L14573-L14574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14573-L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14573-L14574) · [Before (L13573-L13575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13573-L13575)

```diff
- 
-       function Ih(DD) {
-         return 308 === (null == DD ? void 0 : DD.kind)
+       yieldNode(pp) {
+         return !!pp && (this._tree = pp, this.type = pp.type, this.from = pp.from, this.to = pp.to, !0)
```

#### 770. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13577-L13579` → after: `L14576-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14576-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14576-L14582) · [Before (L13577-L13579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13577-L13579)

```diff
- 
-       function Bh(DD) {
-         return Gh(DD)
+       yieldBuf(pp, ip) {
+         this.index = pp;
+         let {
+           start: cp,
+           buffer: Op
+         } = this.buffer;
+         return this.type = ip || Op.set.types[Op.buffer[pp]], this.from = cp + Op.buffer[pp + 1], this.to = cp + Op.buffer[pp + 2], !0
```

#### 771. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13581-L13583` → after: `L14584-L14585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14584-L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14584-L14585) · [Before (L13581-L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13581-L13583)

```diff
- 
-       function Gh(DD) {
-         return !!DD && !!(524288 & DD.flags)
+       yield(pp) {
+         return !!pp && (pp instanceof dp ? (this.buffer = null, this.yieldNode(pp)) : (this.buffer = pp.context, this.yieldBuf(pp.index, pp.type)))
```

#### 772. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13585-L13587` → after: `L14587-L14588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14587-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14587-L14588) · [Before (L13585-L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13585-L13587)

```diff
- 
-       function hh(DD) {
-         return !!DD && !!(134217728 & DD.flags)
+       toString() {
+         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
```

#### 773. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13589-L13591` → after: `L14590-L14595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14590-L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14590-L14595) · [Before (L13589-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13589-L13591)

```diff
- 
-       function nh(DD) {
-         return !NB(DD)
+       enterChild(pp, ip, cp) {
+         if (!this.buffer) return this.yield(this._tree.nextChild(pp < 0 ? this._tree._tree.children.length - 1 : 0, pp, ip, cp, this.mode));
+         let {
+           buffer: Op
+         } = this.buffer, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.buffer.start, cp);
+         return !(op < 0) && (this.stack.push(this.index), this.yieldBuf(op))
```

#### 774. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13593-L13595` → after: `L14597-L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14597-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14597-L14598) · [Before (L13593-L13595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13593-L13595)

```diff
- 
-       function Mh(DD) {
-         return !!DD && !!(16777216 & DD.flags)
+       firstChild() {
+         return this.enterChild(1, 0, 4)
```

#### 775. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13597-L13599` → after: `L14600-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14600-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14600-L14601) · [Before (L13597-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13597-L13599)

```diff
- 
-       function Oh(DD) {
-         return wj(DD) && Eb(DD.typeName) && "Object" === DD.typeName.escapedText && DD.typeArguments && 2 === DD.typeArguments.length && (154 === DD.typeArguments[0].kind || 150 === DD.typeArguments[0].kind)
+       lastChild() {
+         return this.enterChild(-1, 0, 4)
```

#### 776. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13601-L13611` → after: `L14603-L14604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14603-L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14603-L14604) · [Before (L13601-L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13601-L13611)

```diff
- 
-       function Jh(DD, zD) {
-         if (214 !== DD.kind) return !1;
-         const {
-           expression: wD,
-           arguments: pD
-         } = DD;
-         if (80 !== wD.kind || "require" !== wD.escapedText) return !1;
-         if (1 !== pD.length) return !1;
-         const sD = pD[0];
-         return !zD || If(sD)
+       childAfter(pp) {
+         return this.enterChild(1, pp, 2)
```

#### 777. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13613-L13615` → after: `L14606-L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14606-L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14606-L14607) · [Before (L13613-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13613-L13615)

```diff
- 
-       function Eh(DD) {
-         return Vh(DD, !1)
+       childBefore(pp) {
+         return this.enterChild(-1, pp, -2)
```

#### 778. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13617-L13619` → after: `L14609-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14609-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14609-L14611) · [Before (L13617-L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13617-L13619)

```diff
- 
-       function Qh(DD) {
-         return Vh(DD, !0)
+       enter(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
+         return this.buffer ? !(cp & Wp.ExcludeBuffers) && this.enterChild(1, pp, ip) : this.yield(this._tree.enter(pp, ip, cp))
```

#### 779. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13621-L13623` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14613-L14617) · [Before (L13621-L13623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13621-L13623)

```diff
- 
-       function Xh(DD) {
-         return Cj(DD) && Qh(DD.parent.parent)
+       parent() {
+         if (!this.buffer) return this.yieldNode(this.mode & Wp.IncludeAnonymous ? this._tree._parent : this._tree.parent);
+         if (this.stack.length) return this.yieldBuf(this.stack.pop());
+         let pp = this.mode & Wp.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
+         return this.buffer = null, this.yieldNode(pp)
```

#### 780. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13625-L13627` → after: `L14619-L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14619-L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14619-L14631) · [Before (L13625-L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13625-L13627)

```diff
- 
-       function Vh(DD, zD) {
-         return Td(DD) && !!DD.initializer && Jh(zD ? xQ(DD.initializer) : DD.initializer, !0)
+       sibling(pp) {
+         if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + pp, pp, 0, 4, this.mode));
+         let {
+           buffer: ip
+         } = this.buffer, cp = this.stack.length - 1;
+         if (pp < 0) {
+           let pp = cp < 0 ? 0 : this.stack[cp] + 4;
+           if (this.index != pp) return this.yieldBuf(ip.findChild(pp, this.index, -1, 0, 4))
+         } else {
+           let pp = ip.buffer[this.index + 3];
+           if (pp < (cp < 0 ? ip.buffer.length : ip.buffer[this.stack[cp] + 3])) return this.yieldBuf(pp)
+         }
+         return cp < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + pp, pp, 0, 4, this.mode))
```

#### 781. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13629-L13631` → after: `L14633-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14633-L14634) · [Before (L13629-L13631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13629-L13631)

```diff
- 
-       function Ph(DD) {
-         return Ad(DD) && DD.declarationList.declarations.length > 0 && MD(DD.declarationList.declarations, (DD => Eh(DD)))
+       nextSibling() {
+         return this.sibling(1)
```

#### 782. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13633-L13635` → after: `L14636-L14637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14636-L14637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14636-L14637) · [Before (L13633-L13635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13633-L13635)

```diff
- 
-       function Ch(DD) {
-         return 39 === DD || 34 === DD
+       prevSibling() {
+         return this.sibling(-1)
```

#### 783. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13637-L13639` → after: `L14639-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14639-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14639-L14667) · [Before (L13637-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13637-L13639)

```diff
- 
-       function xh(DD, zD) {
-         return 34 === VI(zD, DD).charCodeAt(0)
+       atLastNode(pp) {
+         let ip, cp, {
+           buffer: Op
+         } = this;
+         if (Op) {
+           if (pp > 0) {
+             if (this.index < Op.buffer.buffer.length) return !1
+           } else
+             for (let pp = 0; pp < this.index; pp++)
+               if (Op.buffer.buffer[pp + 3] < this.index) return !1;
+           ({
+             index: ip,
+             parent: cp
+           } = Op)
+         } else({
+           index: ip,
+ ... (13 more added lines; see GitHub link above)
```

#### 784. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13641-L13643` → after: `L14669-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14669-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14669-L14674) · [Before (L13641-L13643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13641-L13643)

```diff
- 
-       function Th(DD) {
-         return uj(DD) || VQ(DD) || Eb(DD) || dj(DD)
+       move(pp, ip) {
+         if (ip && this.enterChild(pp, 0, 4)) return !0;
+         for (;;) {
+           if (this.sibling(pp)) return !0;
+           if (this.atLastNode(pp) || !this.parent()) return !1
+         }
```

#### 785. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13645-L13647` → after: `L14676-L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14676-L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14676-L14678) · [Before (L13645-L13647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13645-L13647)

```diff
- 
-       function bh(DD) {
-         return Gh(DD) && DD.initializer && uj(DD.initializer) && (57 === DD.initializer.operatorToken.kind || 61 === DD.initializer.operatorToken.kind) && DD.name && rE(DD.name) && Wh(DD.name, DD.initializer.left) ? DD.initializer.right : DD.initializer
+       next() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this.move(1, pp)
```

#### 786. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13649-L13652` → after: `L14680-L14682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14680-L14682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14680-L14682) · [Before (L13649-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13649-L13652)

```diff
- 
-       function jh(DD) {
-         const zD = bh(DD);
-         return zD && Sh(zD, AE(DD.name))
+       prev() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this.move(-1, pp)
```

#### 787. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13654-L13661` → after: `L14684-L14702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14684-L14702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14684-L14702) · [Before (L13654-L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13654-L13661)

```diff
- 
-       function dh(DD) {
-         if (DD && DD.parent && uj(DD.parent) && 64 === DD.parent.operatorToken.kind) {
-           const zD = AE(DD.parent.left);
-           return Sh(DD.parent.right, zD) || function(DD, zD, wD) {
-             const pD = uj(zD) && (57 === zD.operatorToken.kind || 61 === zD.operatorToken.kind) && Sh(zD.right, wD);
-             if (pD && Wh(DD, zD.left)) return pD
-           }(DD.parent.left, DD.parent.right, zD)
+       moveTo(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         for (;
+           (this.from == this.to || (ip < 1 ? this.from >= pp : this.from > pp) || (ip > -1 ? this.to <= pp : this.to < pp)) && this.parent(););
+         for (; this.enterChild(1, pp, ip););
+         return this
+       }
+       get node() {
+         if (!this.buffer) return this._tree;
+         let pp = this.bufferNode,
+           ip = null,
+           cp = 0;
+         if (pp && pp.context == this.buffer) pp: for (let Op = this.index, op = this.stack.length; op >= 0;) {
+           for (let Ip = pp; Ip; Ip = Ip._parent)
+             if (Ip.index == Op) {
+               if (Op == this.index) return Ip;
+ ... (3 more added lines; see GitHub link above)
```

#### 788. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13663-L13667` → after: `L14704-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14704-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14704-L14724) · [Before (L13663-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13663-L13667)

```diff
-         if (DD && dj(DD) && eh(DD)) {
-           const zD = function(DD, zD) {
-             return UD(DD.properties, (DD => PS(DD) && Eb(DD.name) && "value" === DD.name.escapedText && DD.initializer && Sh(DD.initializer, zD)))
-           }(DD.arguments[2], "prototype" === DD.arguments[1].text);
-           if (zD) return zD
+         for (let Op = cp; Op < this.stack.length; Op++) ip = new mp(this.buffer, ip, this.stack[Op]);
+         return this.bufferNode = new mp(this.buffer, ip, this.index)
+       }
+       get tree() {
+         return this.buffer ? null : this._tree._tree
+       }
+       iterate(pp, ip) {
+         for (let cp = 0;;) {
+           let Op = !1;
+           if (this.type.isAnonymous || !1 !== pp(this)) {
+             if (this.firstChild()) {
+               cp++;
+               continue
+             }
+             this.type.isAnonymous || (Op = !0)
+           }
+ ... (5 more added lines; see GitHub link above)
```

#### 789. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13670-L13674` → after: `L14727-L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14727-L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14727-L14740) · [Before (L13670-L13674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13670-L13674)

```diff
- 
-       function Sh(DD, zD) {
-         if (dj(DD)) {
-           const zD = qn(DD.expression);
-           return 219 === zD.kind || 220 === zD.kind ? DD : void 0
+       matchContext(pp) {
+         if (!this.buffer) return jp(this.node.parent, pp);
+         let {
+           buffer: ip
+         } = this.buffer, {
+           types: cp
+         } = ip.set;
+         for (let Op = pp.length - 1, op = this.stack.length - 1; Op >= 0; op--) {
+           if (op < 0) return jp(this._tree, pp, Op);
+           let Ip = cp[ip.buffer[this.stack[op]]];
+           if (!Ip.isAnonymous) {
+             if (pp[Op] && pp[Op] != Ip.name) return !1;
+             Op--
+           }
```

#### 790. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13676` → after: `L14742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14742) · [Before (L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13676)

```diff
-         return 219 === DD.kind || 232 === DD.kind || 220 === DD.kind || Tj(DD) && (0 === DD.properties.length || zD) ? DD : void 0
+         return !0
```

#### 791. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13679-L13682` → after: `L14746-L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14746-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14746-L14749) · [Before (L13679-L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13679-L13682)

```diff
-       function ih(DD) {
-         const zD = Td(DD.parent) ? DD.parent.name : uj(DD.parent) && 64 === DD.parent.operatorToken.kind ? DD.parent.left : void 0;
-         return zD && Sh(DD.right, AE(zD)) && rE(zD) && Wh(zD, DD.left)
-       }
+     function Cp(pp) {
+       return pp.children.some((pp => pp instanceof wp || !pp.type.isAnonymous || Cp(pp)))
+     }
+     const Ep = new WeakMap;
```

#### 792. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13684-L13688` → after: `L14751-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14751-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14751-L14763) · [Before (L13684-L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13684-L13688)

```diff
-       function lh(DD) {
-         if (uj(DD.parent)) {
-           const zD = 57 !== DD.parent.operatorToken.kind && 61 !== DD.parent.operatorToken.kind || !uj(DD.parent.parent) ? DD.parent : DD.parent.parent;
-           if (64 === zD.operatorToken.kind && Eb(zD.left)) return zD.left
-         } else if (Td(DD.parent)) return DD.parent.name
+     function Xp(pp, ip) {
+       if (!pp.isAnonymous || ip instanceof wp || ip.type != pp) return 1;
+       let cp = Ep.get(ip);
+       if (null == cp) {
+         cp = 1;
+         for (let Op of ip.children) {
+           if (Op.type != pp || !(Op instanceof yp)) {
+             cp = 1;
+             break
+           }
+           cp += Xp(pp, Op)
+         }
+         Ep.set(ip, cp)
```

#### 793. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13691-L13692` → after: `L14768-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14768-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14768-L14801) · [Before (L13691-L13692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13691-L13692)

```diff
-       function Wh(DD, zD) {
-         return iM(DD) && iM(zD) ? lM(DD) === lM(zD) : NR(DD) && oh(zD) && (110 === zD.expression.kind || Eb(zD.expression) && ("window" === zD.expression.escapedText || "self" === zD.expression.escapedText || "global" === zD.expression.escapedText)) ? Wh(DD, Fh(zD)) : !(!oh(DD) | … [truncated]
+     function lp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+       let Yp = 0;
+       for (let Wp = Op; Wp < op; Wp++) Yp += Xp(pp, ip[Wp]);
+       let Dp = Math.ceil(1.5 * Yp / 8),
+         Ap = [],
+         Pp = [];
+       return function ip(cp, Op, op, Sp, xp) {
+         for (let Yp = op; Yp < Sp;) {
+           let op = Yp,
+             Wp = Op[Yp],
+             yp = Xp(pp, cp[Yp]);
+           for (Yp++; Yp < Sp; Yp++) {
+             let ip = Xp(pp, cp[Yp]);
+             if (yp + ip >= Dp) break;
+             yp += ip
+           }
+ ... (18 more added lines; see GitHub link above)
```

#### 794. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13694-L13697` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14803-L14805) · [Before (L13694-L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13694-L13697)

```diff
- 
-       function Nh(DD) {
-         for (; pE(DD, !0);) DD = DD.right;
-         return DD
+       setBuffer(pp, ip, cp) {
+         let Op = this.map.get(pp);
+         Op || this.map.set(pp, Op = new Map), Op.set(ip, cp)
```

#### 795. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13699-L13701` → after: `L14807-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14807-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14807-L14809) · [Before (L13699-L13701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13699-L13701)

```diff
- 
-       function Zh(DD) {
-         return Eb(DD) && "exports" === DD.escapedText
+       getBuffer(pp, ip) {
+         let cp = this.map.get(pp);
+         return cp && cp.get(ip)
```

#### 796. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13703-L13705` → after: `L14811-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14811-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14811-L14812) · [Before (L13703-L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13703-L13705)

```diff
- 
-       function yh(DD) {
-         return Eb(DD) && "module" === DD.escapedText
+       set(pp, ip) {
+         pp instanceof mp ? this.setBuffer(pp.context.buffer, pp.index, ip) : pp instanceof dp && this.map.set(pp.tree, ip)
```

#### 797. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13707-L13709` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14814-L14815) · [Before (L13707-L13709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13707-L13709)

```diff
- 
-       function kh(DD) {
-         return (bj(DD) || ah(DD)) && yh(DD.expression) && "exports" === Hh(DD)
+       get(pp) {
+         return pp instanceof mp ? this.getBuffer(pp.context.buffer, pp.index) : pp instanceof dp ? this.map.get(pp.tree) : void 0
```

#### 798. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13711-L13724` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14817-L14818) · [Before (L13711-L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13711-L13724)

```diff
- 
-       function mh(DD) {
-         const zD = function(DD) {
-           if (dj(DD)) {
-             if (!eh(DD)) return 0;
-             const zD = DD.arguments[0];
-             return Zh(zD) || kh(zD) ? 8 : uh(zD) && "prototype" === Hh(zD) ? 9 : 7
-           }
-           if (64 !== DD.operatorToken.kind || !VQ(DD.left) || (zD = Nh(DD), mj(zD) && pb(zD.expression) && "0" === zD.expression.text)) return 0;
-           var zD;
-           if (th(DD.left.expression, !0) && "prototype" === Hh(DD.left) && Tj(Dn(DD))) return 6;
-           return qh(DD.left)
-         }(DD);
-         return 5 === zD || Gh(DD) ? zD : 0
+       cursorSet(pp, ip) {
+         pp.buffer ? this.setBuffer(pp.buffer.buffer, pp.index, ip) : this.map.set(pp.tree, ip)
```

#### 799. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13726-L13728` → after: `L14820-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14820-L14821) · [Before (L13726-L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13726-L13728)

```diff
- 
-       function eh(DD) {
-         return 3 === AD(DD.arguments) && bj(DD.expression) && Eb(DD.expression.expression) && "Object" === yg(DD.expression.expression) && "defineProperty" === yg(DD.expression.name) && TM(DD.arguments[1]) && th(DD.arguments[0], !0)
+       cursorGet(pp) {
+         return pp.buffer ? this.getBuffer(pp.buffer.buffer, pp.index) : this.map.get(pp.tree)
```

#### 800. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13730-L13732` → after: `L14823-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14823-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14823-L14828) · [Before (L13730-L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13730-L13732)

```diff
- 
-       function oh(DD) {
-         return bj(DD) || ah(DD)
+     }
+     class Jp {
+       constructor(pp, ip, cp, Op) {
+         let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         this.from = pp, this.to = ip, this.tree = cp, this.offset = Op, this.open = (op ? 1 : 0) | (Ip ? 2 : 0)
```

#### 801. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13734-L13736` → after: `L14830-L14831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14830-L14831) · [Before (L13734-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13734-L13736)

```diff
- 
-       function ah(DD) {
-         return jj(DD) && TM(DD.argumentExpression)
+       get openStart() {
+         return (1 & this.open) > 0
```

#### 802. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13738-L13740` → after: `L14833-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14833-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14833-L14834) · [Before (L13738-L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13738-L13740)

```diff
- 
-       function uh(DD, zD) {
-         return bj(DD) && (!zD && 110 === DD.expression.kind || Eb(DD.name) && th(DD.expression, !0)) || vh(DD, zD)
+       get openEnd() {
+         return (2 & this.open) > 0
```

#### 803. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13742-L13744` → after: `L14836-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14836-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14836-L14841) · [Before (L13742-L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13742-L13744)

```diff
- 
-       function vh(DD, zD) {
-         return ah(DD) && (!zD && 110 === DD.expression.kind || rE(DD.expression) || uh(DD.expression, !0))
+       static addTree(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = [new Jp(0, pp.length, pp, 0, !1, cp)];
+         for (let op of ip) op.to > pp.length && Op.push(op);
+         return Op
```

#### 804. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13746-L13778` → after: `L14843-L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14843-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14843-L14864) · [Before (L13746-L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13746-L13778)

```diff
- 
-       function th(DD, zD) {
-         return rE(DD) || uh(DD, zD)
-       }
- 
-       function Fh(DD) {
-         return bj(DD) ? DD.name : DD.argumentExpression
-       }
- 
-       function Yh(DD) {
-         if (bj(DD)) return DD.name;
-         const zD = qn(DD.argumentExpression);
-         return pb(zD) || If(zD) ? zD : DD
-       }
- 
-       function Hh(DD) {
- ... (17 more removed lines; see GitHub link above)
+       static applyChanges(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
+         if (!ip.length) return pp;
+         let Op = [],
+           op = 1,
+           Ip = pp.length ? pp[0] : null;
+         for (let Sp = 0, xp = 0, Lp = 0;; Sp++) {
+           let Yp = Sp < ip.length ? ip[Sp] : null,
+             Dp = Yp ? Yp.fromA : 1e9;
+           if (Dp - xp >= cp)
+             for (; Ip && Ip.from < Dp;) {
+               let ip = Ip;
+               if (xp >= ip.from || Dp <= ip.to || Lp) {
+                 let pp = Math.max(ip.from, xp) - Lp,
+                   cp = Math.min(ip.to, Dp) - Lp;
+                 ip = pp >= cp ? null : new Jp(pp, cp, ip.tree, ip.offset + Lp, Sp > 0, !!Yp)
+ ... (6 more added lines; see GitHub link above)
```

#### 805. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13780` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14866) · [Before (L13780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13780)

```diff
-         return 0
+         return Op
```

#### 806. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13782-L13785` → after: `L14868-L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14868-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14868-L14871) · [Before (L13782-L13785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13782-L13785)

```diff
- 
-       function Dn(DD) {
-         for (; uj(DD.right);) DD = DD.right;
-         return DD.right
+     }
+     class Bp {
+       startParse(pp, ip, cp) {
+         return "string" == typeof pp && (pp = new Np(pp)), cp = cp ? cp.length ? cp.map((pp => new Ip(pp.from, pp.to))) : [new Ip(0, 0)] : [new Ip(0, pp.length)], this.createParse(pp, ip || [], cp)
```

#### 807. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13787-L13789` → after: `L14873-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14873-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14873-L14878) · [Before (L13787-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13787-L13789)

```diff
- 
-       function zn(DD) {
-         return uj(DD) && 3 === mh(DD)
+       parse(pp, ip, cp) {
+         let Op = this.startParse(pp, ip, cp);
+         for (;;) {
+           let pp = Op.advance();
+           if (pp) return pp
+         }
```

#### 808. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13791-L13793` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14880-L14883) · [Before (L13791-L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13791-L13793)

```diff
- 
-       function wn(DD) {
-         return Gh(DD) && DD.parent && 245 === DD.parent.kind && (!jj(DD) || ah(DD)) && !!PR(DD.parent)
+     }
+     class Np {
+       constructor(pp) {
+         this.string = pp
```

#### 809. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13795-L13802` → after: `L14885-L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14885-L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14885-L14886) · [Before (L13795-L13802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13795-L13802)

```diff
- 
-       function pn(DD, zD) {
-         const {
-           valueDeclaration: wD
-         } = DD;
-         (!wD || (!(33554432 & zD.flags) || Gh(zD) || 33554432 & wD.flags) && Th(wD) && !Th(zD) || wD.kind !== zD.kind && function(DD) {
-           return Nd(DD) || Eb(DD)
-         }(wD)) && (DD.valueDeclaration = zD)
+       get length() {
+         return this.string.length
```

#### 810. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13804-L13808` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14888-L14889) · [Before (L13804-L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13804-L13808)

```diff
- 
-       function sn(DD) {
-         if (!DD || !DD.valueDeclaration) return !1;
-         const zD = DD.valueDeclaration;
-         return 263 === zD.kind || Td(zD) && zD.initializer && bA(zD.initializer)
+       chunk(pp) {
+         return this.string.slice(pp)
```

#### 811. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13810-L13825` → after: `L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14891) · [Before (L13810-L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13810-L13825)

```diff
- 
-       function Kn(DD) {
-         switch (null == DD ? void 0 : DD.kind) {
-           case 261:
-           case 209:
-           case 273:
-           case 279:
-           case 272:
-           case 274:
-           case 281:
-           case 275:
-           case 282:
-           case 277:
-           case 206:
-             return !0
-         }
+       get lineChunks() {
```

#### 812. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13828-L13853` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14894-L14895) · [Before (L13828-L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13828-L13853)

```diff
- 
-       function rn(DD) {
-         var zD, wD;
-         switch (DD.kind) {
-           case 261:
-           case 209:
-             return null == (zD = ig(DD.initializer, (DD => Jh(DD, !0)))) ? void 0 : zD.arguments[0];
-           case 273:
-           case 279:
-           case 352:
-             return rw(DD.moduleSpecifier, If);
-           case 272:
-             return rw(null == (wD = rw(DD.moduleReference, gS)) ? void 0 : wD.expression, If);
-           case 274:
-           case 281:
-             return rw(DD.parent.moduleSpecifier, If);
- ... (10 more removed lines; see GitHub link above)
+       read(pp, ip) {
+         return this.string.slice(pp, ip)
```

#### 813. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13855-L13857` → after: `L14897-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14897-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14897-L14920) · [Before (L13855-L13857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13855-L13857)

```diff
- 
-       function Ln(DD) {
-         return cn(DD) || np.failBadSyntaxKind(DD.parent)
+     }
+     new Sp({
+       perNode: !0
+     })
+   },
+   41583: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Pp,
+       e: () => Lp,
+       i: () => Ap,
+       l: () => Ep
+     });
+     var Op = cp(41575);
+     let op = 0;
+     class Ip {
+       constructor(pp, ip, cp, Op) {
+ ... (8 more added lines; see GitHub link above)
```

#### 814. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13859-L13875` → after: `L14922-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14922-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14922-L14928) · [Before (L13859-L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13859-L13875)

```diff
- 
-       function cn(DD) {
-         switch (DD.parent.kind) {
-           case 273:
-           case 279:
-           case 352:
-             return DD.parent;
-           case 284:
-             return DD.parent.parent;
-           case 214:
-             return vB(DD.parent) || Jh(DD.parent, !1) ? DD.parent : void 0;
-           case 202:
-             if (!Kb(DD)) break;
-             return rw(DD.parent.parent, Ej);
-           default:
-             return
- ... (1 more removed lines; see GitHub link above)
+       static define(pp, ip) {
+         let cp = "string" == typeof pp ? pp : "?";
+         if (pp instanceof Ip && (ip = pp), null === ip || void 0 === ip ? void 0 : ip.base) throw new Error("Can not derive from a modified tag");
+         let Op = new Ip(cp, [], null, []);
+         if (Op.set.push(Op), ip)
+           for (let op of ip.set) Op.set.push(op);
+         return Op
```

#### 815. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13877-L13879` → after: `L14930-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14930-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14930-L14932) · [Before (L13877-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13877-L13879)

```diff
- 
-       function gn(DD, zD) {
-         return !!zD.rewriteRelativeImportExtensions && Wr(DD) && !uW(DD) && mV(DD)
+       static defineModifier(pp) {
+         let ip = new xp(pp);
+         return pp => pp.modified.indexOf(ip) > -1 ? pp : xp.get(pp.base || pp, pp.modified.concat(ip).sort(((pp, ip) => pp.id - ip.id)))
```

#### 816. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13881-L13898` → after: `L14934-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14934-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14934-L14938) · [Before (L13881-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13881-L13898)

```diff
- 
-       function Rn(DD) {
-         switch (DD.kind) {
-           case 273:
-           case 279:
-           case 352:
-             return DD.moduleSpecifier;
-           case 272:
-             return 284 === DD.moduleReference.kind ? DD.moduleReference.expression : void 0;
-           case 206:
-             return FB(DD) ? DD.argument.literal : void 0;
-           case 214:
-             return DD.arguments[0];
-           case 268:
-             return 11 === DD.name.kind ? DD.name : void 0;
-           default:
- ... (2 more removed lines; see GitHub link above)
+     }
+     let Sp = 0;
+     class xp {
+       constructor(pp) {
+         this.name = pp, this.instances = [], this.id = Sp++
```

#### 817. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13900-L13911` → after: `L14940-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14940-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14940-L14961) · [Before (L13900-L13911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13900-L13911)

```diff
- 
-       function An(DD) {
-         switch (DD.kind) {
-           case 273:
-             return DD.importClause && rw(DD.importClause.namedBindings, Yd);
-           case 272:
-             return DD;
-           case 279:
-             return DD.exportClause && rw(DD.exportClause, Hd);
-           default:
-             return np.assertNever(DD)
-         }
+       static get(pp, ip) {
+         if (!ip.length) return pp;
+         let cp = ip[0].instances.find((cp => {
+           return cp.base == pp && (Op = ip, op = cp.modified, Op.length == op.length && Op.every(((pp, ip) => pp == op[ip])));
+           var Op, op
+         }));
+         if (cp) return cp;
+         let Op = [],
+           op = new Ip(pp.name, Op, pp, ip);
+         for (let Ip of ip) Ip.instances.push(op);
+         let Sp = function(pp) {
+           let ip = [
+             []
+           ];
+           for (let cp = 0; cp < pp.length; cp++)
+             for (let Op = 0, op = ip.length; Op < op; Op++) ip.push(ip[Op].concat(pp[cp]));
+ ... (6 more added lines; see GitHub link above)
```

#### 818. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13914-L13915` → after: `L14965-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14965-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14965-L14996) · [Before (L13914-L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13914-L13915)

```diff
-       function Un(DD) {
-         return (273 === DD.kind || 352 === DD.kind) && !!DD.importClause && !!DD.importClause.name
+     function Lp(pp) {
+       let ip = Object.create(null);
+       for (let cp in pp) {
+         let Op = pp[cp];
+         Array.isArray(Op) || (Op = [Op]);
+         for (let pp of cp.split(" "))
+           if (pp) {
+             let cp = [],
+               op = 2,
+               Ip = pp;
+             for (let ip = 0;;) {
+               if ("..." == Ip && ip > 0 && ip + 3 == pp.length) {
+                 op = 1;
+                 break
+               }
+               let Op = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Ip);
+ ... (16 more added lines; see GitHub link above)
```

#### 819. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13917-L13925` → after: `L14998-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14998-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L14998-L15006) · [Before (L13917-L13925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13917-L13925)

```diff
- 
-       function fn(DD, zD) {
-         if (DD.name) {
-           const wD = zD(DD);
-           if (wD) return wD
-         }
-         if (DD.namedBindings) {
-           const wD = Yd(DD.namedBindings) ? zD(DD.namedBindings) : UD(DD.namedBindings.elements, zD);
-           if (wD) return wD
+       return Yp.add(ip)
+     }
+     const Yp = new Op.j({
+       combine(pp, ip) {
+         let cp, Op, op;
+         for (; pp || ip;) {
+           if (!pp || ip && pp.depth >= ip.depth ? (op = ip, ip = ip.next) : (op = pp, pp = pp.next), cp && cp.mode == op.mode && !op.context && !cp.context) continue;
+           let Ip = new Dp(op.tags, op.mode, op.context);
+           cp ? cp.next = Ip : Op = Ip, cp = Ip
```

#### 820. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13928-L13940` → after: `L15010-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15010-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15010-L15052) · [Before (L13928-L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13928-L13940)

```diff
- 
-       function In(DD) {
-         switch (DD.kind) {
-           case 170:
-           case 175:
-           case 174:
-           case 305:
-           case 304:
-           case 173:
-           case 172:
-             return void 0 !== DD.questionToken
-         }
-         return !1
+     });
+     class Dp {
+       constructor(pp, ip, cp, Op) {
+         this.tags = pp, this.mode = ip, this.context = cp, this.next = Op
+       }
+       get opaque() {
+         return 0 == this.mode
+       }
+       get inherit() {
+         return 1 == this.mode
+       }
+       sort(pp) {
+         return !pp || pp.depth < this.depth ? (this.next = pp, this) : (pp.next = this.sort(pp.next), pp)
+       }
+       get depth() {
+         return this.context ? this.context.length : 0
+ ... (27 more added lines; see GitHub link above)
```

#### 821. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13943-L13946` → after: `L15056-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15056-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15056-L15065) · [Before (L13943-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13943-L13946)

```diff
-       function Bn(DD) {
-         const zD = oS(DD) ? hz(DD.parameters) : void 0,
-           wD = rw(zD && zD.name, Eb);
-         return !!wD && "new" === wD.escapedText
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.length,
+         Ip = new Wp(Op, Array.isArray(ip) ? ip : [ip], cp);
+       Ip.highlightRange(pp.cursor(), Op, op, "", Ip.highlighters), Ip.flush(op)
+     }
+     Dp.empty = new Dp([], 2, null);
+     class Wp {
+       constructor(pp, ip, cp) {
+         this.at = pp, this.highlighters = ip, this.span = cp, this.class = ""
```

#### 822. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13948-L13950` → after: `L15067-L15068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15067-L15068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15067-L15068) · [Before (L13948-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13948-L13950)

```diff
- 
-       function Gn(DD) {
-         return 347 === DD.kind || 339 === DD.kind || 341 === DD.kind
+       startSpan(pp, ip) {
+         ip != this.class && (this.flush(pp), pp > this.at && (this.at = pp), this.class = ip)
```

#### 823. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13952-L13954` → after: `L15070-L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15070-L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15070-L15071) · [Before (L13952-L13954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13952-L13954)

```diff
- 
-       function hn(DD) {
-         return Gn(DD) || ld(DD)
+       flush(pp) {
+         pp > this.at && this.class && this.span(this.at, pp, this.class)
```

#### 824. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13956-L13958` → after: `L15073-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15073-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15073-L15348) · [Before (L13956-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13956-L13958)

```diff
- 
-       function nn(DD) {
-         return fd(DD) && uj(DD.expression) && 0 !== mh(DD.expression) && uj(DD.expression.right) && (57 === DD.expression.right.operatorToken.kind || 61 === DD.expression.right.operatorToken.kind) ? DD.expression.right.right : void 0
+       highlightRange(pp, ip, cp, op, Ip) {
+         let {
+           type: Sp,
+           from: xp,
+           to: Lp
+         } = pp;
+         if (xp >= cp || Lp <= ip) return;
+         Sp.isTop && (Ip = this.highlighters.filter((pp => !pp.scope || pp.scope(Sp))));
+         let Ap = op,
+           Pp = function(pp) {
+             let ip = pp.type.prop(Yp);
+             for (; ip && ip.context && !pp.matchContext(ip.context);) ip = ip.next;
+             return ip || null
+           }(pp) || Dp.empty,
+           Wp = function(pp, ip) {
+             let cp = null;
+ ... (260 more added lines; see GitHub link above)
```

#### 825. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13960-L13968` → after: `L15350-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15350-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15350-L15363) · [Before (L13960-L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13960-L13968)

```diff
- 
-       function Mn(DD) {
-         switch (DD.kind) {
-           case 244:
-             const zD = On(DD);
-             return zD && zD.initializer;
-           case 173:
-           case 304:
-             return DD.initializer
+     }
+     const Ap = Dp(vp, 0),
+       Pp = Dp(wp, 0),
+       Wp = Dp(((pp, ip) => wp(pp, ip, function(pp) {
+         let ip = [];
+         for (let cp of pp.selection.By) {
+           let Op = pp.doc.lineAt(cp.from),
+             op = cp.to <= Op.to ? Op : pp.doc.lineAt(cp.to);
+           op.from > Op.from && op.from == cp.to && (op = cp.to == Op.to + 1 ? Op : pp.doc.lineAt(cp.to - 1));
+           let Ip = ip.length - 1;
+           Ip >= 0 && ip[Ip].to > Op.from ? ip[Ip].to = op.to : ip.push({
+             from: Op.from + /^\s*/.exec(Op.text)[0].length,
+             to: op.to
+           })
```

#### 826. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L13970-L13998` → after: `L15365-L15439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15365-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15365-L15439) · [Before (L13970-L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L13970-L13998)

```diff
-       }
- 
-       function On(DD) {
-         return Ad(DD) ? hz(DD.declarationList.declarations) : void 0
-       }
- 
-       function Jn(DD) {
-         return Nd(DD) && DD.body && 268 === DD.body.kind ? DD.body : void 0
-       }
- 
-       function En(DD) {
-         if (DD.kind >= 244 && DD.kind <= 260) return !0;
-         switch (DD.kind) {
-           case 80:
-           case 110:
-           case 108:
- ... (13 more removed lines; see GitHub link above)
+         return ip
+       }(ip))), 0);
+ 
+     function yp(pp, ip) {
+       let cp = pp.languageDataAt("commentTokens", ip, 1);
+       return cp.length ? cp[0] : {}
+     }
+     const Up = 50;
+ 
+     function wp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
+         Op = cp.map((pp => yp(ip, pp.from).block));
+       if (!Op.every((pp => pp))) return null;
+       let op = cp.map(((pp, cp) => function(pp, ip, cp, Op) {
+         let op, Ip, {
+             open: Sp,
+ ... (59 more added lines; see GitHub link above)
```

#### 827. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14002-L14072` → after: `L15445-L15473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15445-L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15445-L15473) · [Before (L14002-L14072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14002-L14072)

```diff
-       function Qn(DD) {
-         switch (DD.kind) {
-           case 220:
-           case 227:
-           case 242:
-           case 253:
-           case 180:
-           case 297:
-           case 264:
-           case 232:
-           case 176:
-           case 177:
-           case 186:
-           case 181:
-           case 252:
-           case 260:
- ... (55 more removed lines; see GitHub link above)
+     function vp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
+         Op = [],
+         op = -1;
+       pp: for (let {
+           from: Ip,
+           to: Sp
+         }
+         of cp) {
+         let pp, cp = Op.length,
+           xp = 1e9;
+         for (let Lp = Ip; Lp <= Sp;) {
+           let cp = ip.doc.lineAt(Lp);
+           if (void 0 == pp && (pp = yp(ip, cp.from).line, !pp)) continue pp;
+           if (cp.from > op && (Ip == Sp || Sp > cp.from)) {
+             op = cp.from;
+ ... (13 more added lines; see GitHub link above)
```

#### 828. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14075-L14087` → after: `L15479-L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15479-L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15479-L15486) · [Before (L14075-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14075-L14087)

```diff
- 
-       function Xn(DD, zD) {
-         let wD;
-         GG(DD) && Lf(DD) && Kf(DD.initializer) && (wD = Rz(wD, Vn(DD, DD.initializer.jsDoc)));
-         let pD = DD;
-         for (; pD && pD.parent;) {
-           if (Kf(pD) && (wD = Rz(wD, Vn(DD, pD.jsDoc))), 170 === pD.kind) {
-             wD = Rz(wD, (zD ? wR : zR)(pD));
-             break
-           }
-           if (169 === pD.kind) {
-             wD = Rz(wD, (zD ? KR : sR)(pD));
-             break
+       if (2 != pp && Op.some((pp => pp.comment < 0 && (!pp.empty || pp.single)))) {
+         let pp = [];
+         for (let {
+             line: ip,
+             token: op,
+             indent: Ip,
+             empty: Sp,
+             single: xp
```

#### 829. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14089` → after: `L15488-L15495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15488-L15495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15488-L15495) · [Before (L14089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14089)

```diff
-           pD = Pn(pD)
+           of Op) !xp && Sp || pp.push({
+           from: ip.from + Ip,
+           insert: op + " "
+         });
+         let cp = ip.changes(pp);
+         return {
+           changes: cp,
+           selection: ip.selection.map(cp, 1)
```

#### 830. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14093-L14101` → after: `L15498-L15503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15498-L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15498-L15503) · [Before (L14093-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14093-L14101)

```diff
- 
-       function Vn(DD, zD) {
-         const wD = Ez(zD);
-         return iD(zD, (zD => {
-           if (zD === wD) {
-             const wD = CD(zD.tags, (zD => function(DD, zD) {
-               return !(Ii(zD) || Ji(zD)) || !zD.parent || !vS(zD.parent) || !Wj(zD.parent.parent) || zD.parent.parent === DD
-             }(DD, zD)));
-             return zD.tags === wD ? [zD] : wD
+       if (1 != pp && Op.some((pp => pp.comment >= 0))) {
+         let pp = [];
+         for (let {
+             line: ip,
+             comment: cp,
+             token: op
```

#### 831. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14103-L14105` → after: `L15505-L15556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15505-L15556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15505-L15556) · [Before (L14103-L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14103-L14105)

```diff
-           return CD(zD.tags, Li)
-         }))
-       }
+           of Op)
+           if (cp >= 0) {
+             let Op = ip.from + cp,
+               Ip = Op + op.length;
+             " " == ip.text[Ip - ip.from] && Ip++, pp.push({
+               from: Op,
+               to: Ip
+             })
+           } return {
+           changes: pp
+         }
+       }
+       return null
+     }
+     const tp = Sp.c.define(),
+       Hp = Sp.c.define(),
+ ... (36 more added lines; see GitHub link above)
```

#### 832. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14107-L14109` → after: `L15558-L15589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15558-L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15558-L15589) · [Before (L14107-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14107-L14109)

```diff
-       function Pn(DD) {
-         const zD = DD.parent;
-         return 304 === zD.kind || 278 === zD.kind || 173 === zD.kind || 245 === zD.kind && 212 === DD.kind || 254 === zD.kind || Jn(zD) || pE(DD) ? zD : zD.parent && (On(zD.parent) === DD || pE(zD)) ? zD.parent : zD.parent && zD.parent.parent && (On(zD.parent.parent) || Mn(zD.par … [truncated]
+     function kp(pp, ip) {
+       return function(cp) {
+         let {
+           state: Op,
+           dispatch: op
+         } = cp;
+         if (!ip && Op.readOnly) return !1;
+         let Ip = Op.field(jp, !1);
+         if (!Ip) return !1;
+         let Sp = Ip.pop(pp, Op, ip);
+         return !!Sp && (op(Sp), !0)
+       }
+     }
+     const mp = kp(0, !1),
+       Rp = kp(1, !1),
+       qp = kp(0, !0),
+ ... (16 more added lines; see GitHub link above)
```

#### 833. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14111-L14119` → after: `L15591-L15592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15591-L15592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15591-L15592) · [Before (L14111-L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14111-L14119)

```diff
- 
-       function Cn(DD) {
-         if (DD.symbol) return DD.symbol;
-         if (!Eb(DD.name)) return;
-         const zD = DD.name.escapedText,
-           wD = bn(DD);
-         if (!wD) return;
-         const pD = OD(wD.parameters, (DD => 80 === DD.name.kind && DD.name.escapedText === zD));
-         return pD && pD.symbol
+       static fromJSON(pp) {
+         return new Cp(pp.changes && Sp.ChangeSet.fromJSON(pp.changes), [], pp.mapped && Sp.f.fromJSON(pp.mapped), pp.startSelection && Sp.l.fromJSON(pp.startSelection), pp.selectionsAfter.map(Sp.l.fromJSON))
```

#### 834. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14121-L14125` → after: `L15594-L15598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15594-L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15594-L15598) · [Before (L14121-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14121-L14125)

```diff
- 
-       function xn(DD) {
-         if (vS(DD.parent) && DD.parent.tags) {
-           const zD = OD(DD.parent.tags, Gn);
-           if (zD) return zD
+       static fromTransaction(pp, ip) {
+         let cp = lp;
+         for (let Op of pp.startState.facet(dp)) {
+           let ip = Op(pp);
+           ip.length && (cp = cp.concat(ip))
```

#### 835. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14127` → after: `L15600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15600) · [Before (L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14127)

```diff
-         return bn(DD)
+         return !cp.length && pp.changes.empty ? null : new Cp(pp.changes.invert(pp.startState.doc), cp, void 0, ip || pp.startState.selection, lp)
```

#### 836. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14129-L14131` → after: `L15602-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15602-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15602-L15603) · [Before (L14129-L14131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14129-L14131)

```diff
- 
-       function Tn(DD) {
-         return dR(DD, Li)
+       static selection(pp) {
+         return new Cp(void 0, lp, void 0, void 0, pp)
```

#### 837. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14134-L14137` → after: `L15607-L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15607-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15607-L15611) · [Before (L14134-L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14134-L14137)

```diff
-       function bn(DD) {
-         const zD = jn(DD);
-         if (zD) return eb(zD) && zD.type && bA(zD.type) ? zD.type : bA(zD) ? zD : void 0
-       }
+     function Ep(pp, ip, cp, Op) {
+       let op = ip + 1 > cp + 20 ? ip - cp - 1 : 0,
+         Ip = pp.slice(op, ip);
+       return Ip.push(Op), Ip
+     }
```

#### 838. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14139-L14144` → after: `L15613-L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15613-L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15613-L15617) · [Before (L14139-L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14139-L14144)

```diff
-       function jn(DD) {
-         const zD = dn(DD);
-         if (zD) return nn(zD) || function(DD) {
-           return fd(DD) && uj(DD.expression) && 64 === DD.expression.operatorToken.kind ? Nh(DD.expression) : void 0
-         }(zD) || Mn(zD) || On(zD) || Jn(zD) || zD
-       }
+     function Xp(pp, ip) {
+       return pp.length ? ip.length ? pp.concat(ip) : pp : ip
+     }
+     const lp = [],
+       Qp = 200;
```

#### 839. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14146-L14150` → after: `L15619-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15619-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15619-L15623) · [Before (L14146-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14146-L14150)

```diff
-       function dn(DD) {
-         const zD = Sn(DD);
-         if (!zD) return;
-         const wD = zD.parent;
-         return wD && wD.jsDoc && zD === Jz(wD.jsDoc) ? wD : void 0
+     function Jp(pp, ip) {
+       if (pp.length) {
+         let cp = pp[pp.length - 1],
+           Op = cp.selectionsAfter.slice(Math.max(0, cp.selectionsAfter.length - Qp));
+         return Op.length && Op[Op.length - 1].eq(ip) ? pp : (Op.push(ip), Ep(pp, pp.length - 1, 1e9, cp.setSelAfter(Op)))
```

#### 840. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14153-L14155` → after: `L15628-L15632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15628-L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15628-L15632) · [Before (L14153-L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14153-L14155)

```diff
-       function Sn(DD) {
-         return ig(DD.parent, vS)
-       }
+     function Bp(pp) {
+       let ip = pp[pp.length - 1],
+         cp = pp.slice();
+       return cp[pp.length - 1] = ip.setSelAfter(ip.selectionsAfter.slice(0, ip.selectionsAfter.length - 1)), cp
+     }
```

#### 841. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14157-L14162` → after: `L15634-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15634-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15634-L15662) · [Before (L14157-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14157-L14162)

```diff
-       function Wn(DD) {
-         const zD = DD.name.escapedText,
-           {
-             typeParameters: wD
-           } = DD.parent.parent.parent;
-         return wD && OD(wD, (DD => DD.name.escapedText === zD))
+     function Np(pp, ip) {
+       if (!pp.length) return pp;
+       let cp = pp.length,
+         Op = lp;
+       for (; cp;) {
+         let op = Tp(pp[cp - 1], ip, Op);
+         if (op.changes && !op.changes.empty || op.effects.length) {
+           let ip = pp.slice(0, cp);
+           return ip[cp - 1] = op, ip
+         }
+         ip = op.mapped, cp--, Op = op.selectionsAfter
+       }
+       return Op.length ? [Cp.selection(Op)] : lp
+     }
+ 
+     function Tp(pp, ip, cp) {
+ ... (13 more added lines; see GitHub link above)
```

#### 842. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14164-L14166` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15664-L15665) · [Before (L14164-L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14164-L14166)

```diff
- 
-       function Nn(DD) {
-         return !!DD.typeArguments
+       isolate() {
+         return this.prevTime ? new bp(this.done, this.undone) : this
```

#### 843. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14168-L14207` → after: `L15667-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15667-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15667-L15680) · [Before (L14168-L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14168-L14207)

```diff
-       var Zn = (DD => (DD[DD.None = 0] = "None", DD[DD.Definite = 1] = "Definite", DD[DD.Compound = 2] = "Compound", DD))(Zn || {});
- 
-       function yn(DD) {
-         let zD = DD.parent;
-         for (;;) {
-           switch (zD.kind) {
-             case 227:
-               const wD = zD;
-               return DE(wD.operatorToken.kind) && wD.left === DD ? wD : void 0;
-             case 225:
-             case 226:
-               const pD = zD,
-                 sD = pD.operator;
-               return 46 === sD || 47 === sD ? pD : void 0;
-             case 250:
-             case 251:
- ... (24 more removed lines; see GitHub link above)
+       addChanges(pp, ip, cp, Op, op) {
+         let Ip = this.done,
+           xp = Ip[Ip.length - 1];
+         return Ip = xp && xp.changes && !xp.changes.empty && pp.changes && (!cp || fp.test(cp)) && (!xp.selectionsAfter.length && ip - this.prevTime < Op.newGroupDelay && Op.joinToEvent(op, function(pp, ip) {
+           let cp = [],
+             Op = !1;
+           return pp.iterChangedRanges(((pp, ip) => cp.push(pp, ip))), ip.iterChangedRanges(((pp, ip, op, Ip) => {
+             for (let Sp = 0; Sp < cp.length;) {
+               let pp = cp[Sp++],
+                 ip = cp[Sp++];
+               Ip >= pp && op <= ip && (Op = !0)
+             }
+           })), Op
+         }(xp.changes, pp.changes)) || "input.type.compose" == cp) ? Ep(Ip, Ip.length - 1, Op.minDepth, new Cp(pp.changes.compose(xp.changes), Xp(Sp.C.mapEffects(pp.effects, xp.changes), xp.effects), xp.mapped, xp.startSelection, lp)) : Ep(Ip, Ip.length, Op.minDepth, pp), new bp(I … [truncated]
```

#### 844. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14209-L14222` → after: `L15682-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15682-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15682-L15822) · [Before (L14209-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14209-L14222)

```diff
- 
-       function kn(DD) {
-         const zD = yn(DD);
-         if (!zD) return 0;
-         switch (zD.kind) {
-           case 227:
-             const DD = zD.operatorToken.kind;
-             return 64 === DD || FJ(DD) ? 1 : 2;
-           case 225:
-           case 226:
-             return 2;
-           case 250:
-           case 251:
-             return 1
+       addSelection(pp, ip, cp, Op) {
+         let op = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lp;
+         return op.length > 0 && ip - this.prevTime < Op && cp == this.prevUserEvent && cp && /^select($|\.)/.test(cp) && (Ip = op[op.length - 1], Sp = pp, Ip.By.length == Sp.By.length && 0 === Ip.By.filter(((pp, ip) => pp.empty != Sp.By[ip].empty)).length) ? this : new bp(Jp(this … [truncated]
+         var Ip, Sp
+       }
+       addMapping(pp) {
+         return new bp(Np(this.done, pp), Np(this.undone, pp), this.prevTime, this.prevUserEvent)
+       }
+       pop(pp, ip, cp) {
+         let Op = 0 == pp ? this.done : this.undone;
+         if (0 == Op.length) return null;
+         let op = Op[Op.length - 1],
+           Ip = op.selectionsAfter[0] || (op.startSelection ? op.startSelection.map(op.changes.invertedDesc, 1) : ip.selection);
+         if (cp && op.selectionsAfter.length) return ip.update({
+           selection: op.selectionsAfter[op.selectionsAfter.length - 1],
+           annotations: tp.of({
+ ... (125 more added lines; see GitHub link above)
```

#### 845. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14226-L14235` → after: `L15834-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15834-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15834-L15849) · [Before (L14226-L14235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14226-L14235)

```diff
-       function mn(DD) {
-         return !!yn(DD)
-       }
- 
-       function en(DD) {
-         const zD = yn(DD);
-         return !!zD && pE(zD, !0) && function(DD) {
-           const zD = qn(DD.right);
-           return 227 === zD.kind && xl(zD.operatorToken.kind)
-         }(zD)
+     function Ii(pp, ip) {
+       let cp, Op = oi(pp),
+         {
+           state: op
+         } = pp,
+         Ip = ap(op.selection, (cp => cp.empty ? pp.moveVertically(cp, ip, Op.height) : gp(cp, ip)));
+       if (Ip.eq(op.selection)) return !1;
+       if (Op.selfScroll) {
+         let ip = pp.coordsAtPos(op.selection.main.head),
+           Sp = pp.scrollDOM.getBoundingClientRect(),
+           Lp = Sp.top + Op.marginTop,
+           Yp = Sp.bottom - Op.marginBottom;
+         ip && ip.top > Lp && ip.bottom < Yp && (cp = xp.f.scrollIntoView(Ip.main.head, {
+           y: "start",
+           yMargin: ip.top - Lp
+         }))
```

#### 846. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14238-L14259` → after: `L15880-L15946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15880-L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15880-L15946) · [Before (L14238-L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14238-L14259)

```diff
-       function an(DD) {
-         switch (DD.kind) {
-           case 242:
-           case 244:
-           case 255:
-           case 246:
-           case 256:
-           case 270:
-           case 297:
-           case 298:
-           case 257:
-           case 249:
-           case 250:
-           case 251:
-           case 247:
-           case 248:
- ... (6 more removed lines; see GitHub link above)
+     function Di(pp, ip) {
+       let cp = ap(pp.state.selection, (pp => {
+         let cp = ip(pp);
+         return Sp.l.range(pp.anchor, cp.head, cp.goalColumn, cp.bidiLevel || void 0, cp.assoc)
+       }));
+       return !cp.eq(pp.state.selection) && (pp.dispatch(np(pp.state, cp)), !0)
+     }
+ 
+     function Ai(pp, ip) {
+       return Di(pp, (cp => pp.moveByChar(cp, ip)))
+     }
+     const Pi = pp => Ai(pp, !rp(pp)),
+       Wi = pp => Ai(pp, rp(pp));
+ 
+     function yi(pp, ip) {
+       return Di(pp, (cp => pp.moveByGroup(cp, ip)))
+ ... (51 more added lines; see GitHub link above)
```

#### 847. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14261-L14262` → after: `L15948-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15948-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15948-L15963) · [Before (L14261-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14261-L14262)

```diff
-       function un(DD) {
-         return Nj(DD) || Zj(DD) || eA(DD) || jd(DD) || tb(DD)
+     function mi(pp, ip) {
+       let {
+         state: cp
+       } = pp, Op = cp.selection, op = cp.selection.By.slice();
+       for (let Ip of cp.selection.By) {
+         let Op = cp.doc.lineAt(Ip.head);
+         if (ip ? Op.to < pp.state.doc.length : Op.from > 0)
+           for (let cp = Ip;;) {
+             let Ip = pp.moveVertically(cp, ip);
+             if (Ip.head < Op.from || Ip.head > Op.to) {
+               op.some((pp => pp.head == Ip.head)) || op.push(Ip);
+               break
+             }
+             if (Ip.head == cp.head) break;
+             cp = Ip
+           }
```

#### 848. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14265-L14266` → after: `L15968-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L15968-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L15968-L16018) · [Before (L14265-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14265-L14266)

```diff
-       function vn(DD, zD) {
-         for (; DD && DD.kind === zD;) DD = DD.parent;
+     function Ri(pp, ip) {
+       if (pp.state.readOnly) return !1;
+       let cp = "delete.selection",
+         {
+           state: Op
+         } = pp,
+         op = Op.changeByRange((Op => {
+           let {
+             from: op,
+             to: Ip
+           } = Op;
+           if (op == Ip) {
+             let Sp = ip(Op);
+             Sp < op ? (cp = "delete.backward", Sp = qi(pp, Sp, !1)) : Sp > op && (cp = "delete.forward", Sp = qi(pp, Sp, !0)), op = Math.min(op, Sp), Ip = Math.max(Ip, Sp)
+           } else op = qi(pp, op, !1), Ip = qi(pp, Ip, !0);
+           return op == Ip ? {
+ ... (35 more added lines; see GitHub link above)
```

#### 849. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14268-L14285` → after: `L16020-L16040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16020-L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16020-L16040) · [Before (L14268-L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14268-L14285)

```diff
-       }
- 
-       function tn(DD) {
-         return vn(DD, 197)
-       }
- 
-       function Fn(DD) {
-         return vn(DD, 218)
-       }
- 
-       function Yn(DD) {
-         let zD;
-         for (; DD && 197 === DD.kind;) zD = DD, DD = DD.parent;
-         return [zD, DD]
-       }
- 
- ... (2 more removed lines; see GitHub link above)
+       })),
+       Ci = pp => Mi(pp, !1, !0),
+       Ei = pp => Mi(pp, !0, !1),
+       Xi = (pp, ip) => Ri(pp, (cp => {
+         let Op = cp.head,
+           {
+             state: op
+           } = pp,
+           Ip = op.doc.lineAt(Op),
+           xp = op.charCategorizer(Op);
+         for (let pp = null;;) {
+           if (Op == (ip ? Ip.to : Ip.from)) {
+             Op == cp.head && Ip.number != (ip ? op.doc.lines : 1) && (Op += ip ? 1 : -1);
+             break
+           }
+           let Lp = (0, Sp.S)(Ip.text, Op - Ip.from, ip) + Ip.from,
+ ... (5 more added lines; see GitHub link above)
```

#### 850. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14289-L14294` → after: `L16064-L16168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16064-L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16064-L16168) · [Before (L14289-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14289-L14294)

```diff
-       function qn(DD, zD) {
-         return wl(DD, zD ? -2147483647 : 1)
-       }
- 
-       function DM(DD) {
-         return (212 === DD.kind || 213 === DD.kind) && ((DD = Fn(DD.parent)) && 221 === DD.kind)
+     function Ji(pp, ip, cp) {
+       if (pp.readOnly) return !1;
+       let Op = [],
+         op = [];
+       for (let Ip of Qi(pp)) {
+         if (cp ? Ip.to == pp.doc.length : 0 == Ip.from) continue;
+         let ip = pp.doc.lineAt(cp ? Ip.to + 1 : Ip.from - 1),
+           xp = ip.length + 1;
+         if (cp) {
+           Op.push({
+             from: Ip.to,
+             to: ip.to
+           }, {
+             from: Ip.from,
+             insert: ip.text + pp.lineBreak
+           });
+ ... (89 more added lines; see GitHub link above)
```

#### 851. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14297-L14300` → after: `L16172-L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16172-L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16172-L16178) · [Before (L14297-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14297-L14300)

```diff
-       function zM(DD, zD) {
-         for (; DD;) {
-           if (DD === zD) return !0;
-           DD = DD.parent
+     function fi(pp, ip) {
+       let cp = -1;
+       return pp.changeByRange((Op => {
+         let op = [];
+         for (let Sp = Op.from; Sp <= Op.to;) {
+           let Ip = pp.doc.lineAt(Sp);
+           Ip.number > cp && (Op.empty || Op.to > Ip.from) && (ip(Ip, op, Op), cp = Ip.number), Sp = Ip.to + 1
```

#### 852. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14302-L14323` → after: `L16180-L16322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16180-L16322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16180-L16322) · [Before (L14302-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14302-L14323)

```diff
-         return !1
-       }
- 
-       function wM(DD) {
-         return !bS(DD) && !YA(DD) && yU(DD.parent) && DD.parent.name === DD
-       }
- 
-       function pM(DD) {
-         const zD = DD.parent;
-         switch (DD.kind) {
-           case 11:
-           case 15:
-           case 9:
-             if (Zb(zD)) return zD.parent;
-           case 80:
-             if (yU(zD)) return zD.name === DD ? zD : void 0;
- ... (6 more removed lines; see GitHub link above)
+         let Ip = pp.changes(op);
+         return {
+           changes: op,
+           range: Sp.l.range(Ip.mapPos(Op.anchor, 1), Ip.mapPos(Op.head, 1))
+         }
+       }))
+     }
+     const bi = pp => {
+         let {
+           state: ip,
+           dispatch: cp
+         } = pp;
+         return !ip.readOnly && (cp(ip.update(fi(ip, ((pp, cp) => {
+           cp.push({
+             from: pp.from,
+             insert: ip.facet(Lp.W)
+ ... (127 more added lines; see GitHub link above)
```

#### 853. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14325-L14328` → after: `L16324-L16395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16324-L16395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16324-L16395) · [Before (L14325-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14325-L14328)

```diff
-           case 81:
-             return yU(zD) && zD.name === DD ? zD : void 0;
-           default:
-             return
+             return pp
+           }));
+           return !Op.eq(ip.selection) && (cp(np(ip, Op)), !0)
+         },
+         preventDefault: !0
+       }, {
+         key: "Mod-[",
+         run: ai
+       }, {
+         key: "Mod-]",
+         run: bi
+       }, {
+         key: "Mod-Alt-\\",
+         run: pp => {
+           let {
+             state: ip,
+ ... (56 more added lines; see GitHub link above)
```

#### 854. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14330-L14359` → after: `L16397-L16404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16397-L16404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16397-L16404) · [Before (L14330-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14330-L14359)

```diff
-       }
- 
-       function sM(DD) {
-         return TM(DD) && 168 === DD.parent.kind && yU(DD.parent.parent)
-       }
- 
-       function KM(DD) {
-         const zD = DD.parent;
-         switch (zD.kind) {
-           case 173:
-           case 172:
-           case 175:
-           case 174:
-           case 178:
-           case 179:
-           case 307:
- ... (14 more removed lines; see GitHub link above)
+       }, {
+         key: "Shift-Mod-\\",
+         run: pp => {
+           let {
+             state: ip,
+             dispatch: cp
+           } = pp;
+           return Yi(ip, cp, !1)
```

#### 855. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14361-L14378` → after: `L16406-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16406-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16406-L16847) · [Before (L14361-L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14361-L14378)

```diff
-         return !1
-       }
- 
-       function rM(DD) {
-         switch (DD.parent.kind) {
-           case 274:
-           case 277:
-           case 275:
-           case 282:
-           case 278:
-           case 272:
-           case 281:
-             return DD.parent;
-           case 167:
-             do {
-               DD = DD.parent
- ... (2 more removed lines; see GitHub link above)
+       }, {
+         key: "Mod-/",
+         run: pp => {
+           let {
+             state: ip
+           } = pp, cp = ip.doc.lineAt(ip.selection.main.from), Op = yp(pp.state, cp.from);
+           return Op.line ? Ap(pp) : !!Op.block && Wp(pp)
+         }
+       }, {
+         key: "Alt-A",
+         run: Pp
+       }, {
+         key: "Ctrl-m",
+         mac: "Shift-Alt-m",
+         run: pp => (pp.setTabFocusMode(), !0)
+       }].concat([{
+ ... (426 more added lines; see GitHub link above)
```

#### 856. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14381-L14383` → after: `L16850-L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16850-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16850-L16851) · [Before (L14381-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14381-L14383)

```diff
- 
-       function LM(DD) {
-         return rE(DD) || Hj(DD)
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
```

#### 857. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14385-L14387` → after: `L16853-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16853-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16853-L16854) · [Before (L14385-L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14385-L14387)

```diff
- 
-       function cM(DD) {
-         return LM(gM(DD))
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
```

#### 858. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14389-L14391` → after: `L16856-L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16856-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16856-L16857) · [Before (L14389-L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14389-L14391)

```diff
- 
-       function gM(DD) {
-         return zS(DD) ? DD.expression : DD.right
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
```

#### 859. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14393-L14395` → after: `L16859-L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16859-L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16859-L16862) · [Before (L14393-L14395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14393-L14395)

```diff
- 
-       function RM(DD) {
-         return 305 === DD.kind ? DD.name : 304 === DD.kind ? DD.initializer : DD.parent.right
+     }
+     class tc {
+       constructor() {
+         this.interval = null, this.latches = new Set
```

#### 860. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14397-L14404` → after: `L16864-L16865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16864-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16864-L16865) · [Before (L14397-L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14397-L14404)

```diff
- 
-       function AM(DD) {
-         const zD = UM(DD);
-         if (zD && Gh(DD)) {
-           const zD = LR(DD);
-           if (zD) return zD.class
-         }
-         return zD
+       add(pp) {
+         this.latches.add(pp), this.start()
```

#### 861. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14406-L14409` → after: `L16867-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16867-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16867-L16868) · [Before (L14406-L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14406-L14409)

```diff
- 
-       function UM(DD) {
-         const zD = GM(DD.heritageClauses, 96);
-         return zD && zD.types.length > 0 ? zD.types[0] : void 0
+       remove(pp) {
+         this.latches.delete(pp), 0 === this.latches.size && this.stop()
```

#### 862. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14411-L14416` → after: `L16870-L16935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16870-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16870-L16935) · [Before (L14411-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14411-L14416)

```diff
- 
-       function fM(DD) {
-         if (Gh(DD)) return cR(DD).map((DD => DD.class));
-         {
-           const zD = GM(DD.heritageClauses, 119);
-           return null == zD ? void 0 : zD.types
+       start() {
+         null === this.interval && (this.interval = setInterval((() => {
+           this.latches.forEach((pp => {
+             pp.LP(), pp.isDone && this.remove(pp)
+           }))
+         }), 1))
+       }
+       stop() {
+         null !== this.interval && (clearInterval(this.interval), this.interval = null)
+       }
+     }
+     var Hc = null,
+       dc = Sp.c.define(),
+       ec = [];
+ 
+     function uc(pp) {
+ ... (50 more added lines; see GitHub link above)
```

#### 863. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14418` → after: `L16937-L17154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L16937-L17154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L16937-L17154) · [Before (L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14418)

```diff
-       }
+         op && op((pp => ({
+           line: pp.state.doc.lineAt(pp.state.selection.main.from),
+           lineCount: pp.state.doc.lines,
+           lineBreak: pp.state.lineBreak,
+           length: pp.state.doc.length,
+           readOnly: pp.state.readOnly,
+           tabSize: pp.state.tabSize,
+           selection: pp.state.selection,
+           selectionAsSingle: pp.state.selection.asSingle().main,
+           By: pp.state.selection.By,
+           selectionCode: pp.state.sliceDoc(pp.state.selection.main.from, pp.state.selection.main.to),
+           selections: pp.state.selection.By.map((ip => pp.state.sliceDoc(ip.from, ip.to))),
+           selectedText: pp.state.selection.By.some((pp => !pp.empty))
+         }))(pp))
+       })), Tp = function(pp) {
+         void 0 === pp && (pp = {});
+ ... (202 more added lines; see GitHub link above)
```

#### 864. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14420-L14422` → after: `L17156-L17158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17156-L17158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17156-L17158) · [Before (L14420-L14422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14420-L14422)

```diff
-       function IM(DD) {
-         return Sd(DD) ? BM(DD) || gD : ZA(DD) && FD(Ap(AM(DD)), fM(DD)) || gD
-       }
+         function Op(pp) {
+           return /^@/.test(pp) ? [pp] : pp.split(/,\s*/)
+         }
```

#### 865. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14424-L14976` → after: `L17160-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17160-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17160-L17199) · [Before (L14424-L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14424-L14976)

```diff
-       function BM(DD) {
-         const zD = GM(DD.heritageClauses, 96);
-         return zD ? zD.types : void 0
-       }
- 
-       function GM(DD, zD) {
-         if (DD)
-           for (const wD of DD)
-             if (wD.token === zD) return wD
-       }
- 
-       function hM(DD, zD) {
-         for (; DD;) {
-           if (DD.kind === zD) return DD;
-           DD = DD.parent
-         }
- ... (537 more removed lines; see GitHub link above)
+         function op(pp, ip, Ip, Sp) {
+           let xp = [],
+             Lp = /^@(\w+)\b/.exec(pp[0]),
+             Yp = Lp && "keyframes" == Lp[1];
+           if (Lp && null == ip) return Ip.push(pp[0] + ";");
+           for (let cp in ip) {
+             let Sp = ip[cp];
+             if (/&/.test(cp)) op(cp.split(/,\s*/).map((ip => pp.map((pp => ip.replace(/&/, pp))))).reduce(((pp, ip) => pp.concat(ip))), Sp, Ip);
+             else if (Sp && "object" == typeof Sp) {
+               if (!Lp) throw new RangeError("The value of a property (" + cp + ") should be a primitive value.");
+               op(Op(cp), Sp, xp, Yp)
+             } else null != Sp && xp.push(cp.replace(/_.*/, "").replace(/[A-Z]/g, (pp => "-" + pp.toLowerCase())) + ": " + Sp + ";")
+           }(xp.length || Yp) && Ip.push((!cp || Lp || Sp ? pp : pp.map(cp)).join(", ") + " {" + xp.join(" ") + "}")
+         }
+         for (let Ip in pp) op(Op(Ip), pp[Ip], this.rules)
+       }
+ ... (24 more added lines; see GitHub link above)
```

#### 866. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14978-L15034` → after: `L17201-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17201-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17201-L17213) · [Before (L14978-L15034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L14978-L15034)

```diff
- 
-       function TO(DD) {
-         var zD, wD, pD, sD, KD, rD = !1;
- 
-         function LD(DD) {
-           const wD = zc(DD);
-           wD.length > 1 ? (sD = sD + wD.length - 1, KD = zD.length - DD.length + Ez(wD), pD = KD - zD.length === 0) : pD = !1
-         }
- 
-         function cD(DD) {
-           DD && DD.length && (pD && (DD = CO(wD) + DD, pD = !1), zD += DD, LD(DD))
-         }
- 
-         function gD(DD) {
-           DD && (rD = !1), cD(DD)
-         }
- ... (41 more removed lines; see GitHub link above)
+       mount(pp, ip) {
+         let cp = this.sheet,
+           Op = 0,
+           op = 0;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           let ip = pp[Ip],
+             Sp = this.modules.indexOf(ip);
+           if (Sp < op && Sp > -1 && (this.modules.splice(Sp, 1), op--, Sp = -1), -1 == Sp) {
+             if (this.modules.splice(op++, 0, ip), cp)
+               for (let pp = 0; pp < ip.rules.length; pp++) cp.insertRule(ip.rules[pp], Op++)
+           } else {
+             for (; op < Sp;) Op += this.modules[op++].rules.length;
+             Op += ip.rules.length, op++
```

#### 867. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L15037-L15088` → after: `L17216-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17216-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17216-L17222) · [Before (L15037-L15088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L15037-L15088)

```diff
-       }
- 
-       function bO(DD) {
-         let zD = !1;
- 
-         function wD() {
-           zD && (DD.writeTrailingSemicolon(";"), zD = !1)
-         }
-         return {
-           ...DD,
-           writeTrailingSemicolon() {
-             zD = !0
-           },
-           writeLiteral(zD) {
-             wD(), DD.writeLiteral(zD)
-           },
- ... (36 more removed lines; see GitHub link above)
+         if (cp) ip.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ip.adoptedStyleSheets = [this.sheet, ...ip.adoptedStyleSheets]);
+         else {
+           let pp = "";
+           for (let ip = 0; ip < this.modules.length; ip++) pp += this.modules[ip].getRules() + "\n";
+           this.styleTag.textContent = pp;
+           let cp = ip.head || ip;
+           this.styleTag.parentNode != cp && cp.insertBefore(this.styleTag, cp.firstChild)
```

#### 868. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L15091-L15093` → after: `L17225-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17225-L17226) · [Before (L15091-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L15091-L15093)

```diff
- 
-       function jO(DD) {
-         return !!DD.useCaseSensitiveFileNames && DD.useCaseSensitiveFileNames()
+       setNonce(pp) {
+         this.styleTag && this.styleTag.getAttribute("nonce") != pp && this.styleTag.setAttribute("nonce", pp)
```

#### 869. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L15095-L125586` → after: `L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R17228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L17228) · [Before (L15095-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L15095-L125586)

```diff
- 
-       function dO(DD) {
-         return qw(jO(DD))
-       }
- 
-       function SO(DD, zD, wD) {
-         return zD.moduleName || WO(DD, zD.fileName, wD && wD.fileName)
-       }
- 
-       function iO(DD, zD) {
-         return DD.getCanonicalFileName(sL(zD, DD.getCurrentDirectory()))
-       }
- 
-       function lO(DD, zD, wD) {
-         const pD = zD.getExternalModuleFileFromDeclaration(wD);
-         if (!pD || pD.isDeclarationFile) return;
- ... (110476 more removed lines; see GitHub link above)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L4)

```diff
-   41384: (DD, zD, wD) => {
+   41548: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L6` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L6-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L6)

```diff
-       collectImportedWorldCodePluginNames: () => gD
+       c: () => di,
+       f: () => lp,
+       ChangeSet: () => Qp,
+       i: () => Xi,
+       l: () => ap,
+       n: () => Bi,
+       o: () => gp,
+       r: () => Xp,
+       u: () => Si,
+       A: () => Fi,
+       w: () => gi,
+       B: () => Ti,
+       C: () => ji,
+       E: () => Vp,
+       F: () => Up,
+       I: () => ki,
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L8-L11` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L30-L31) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L8-L11)

```diff
-     var pD = wD(36821),
-       sD = wD(36819),
-       KD = wD(41304),
-       rD = wD.n(KD);
+     let Op = [],
+       op = [];
```

#### 4. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L14-L22` → after: `L34-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L34-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L34-L55) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L14-L22)

```diff
-       return rD().isImportDeclaration(DD) && rD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
-         const zD = DD.importClause;
-         if (!zD) return !0;
-         if (zD.isTypeOnly) return !1;
-         const wD = zD.namedBindings;
-         return !(wD && !rD().isNamespaceImport(wD)) || !!zD.name || wD.elements.some((DD => !DD.isTypeOnly))
-       }(DD) || rD().isExportDeclaration(DD) && DD.moduleSpecifier && rD().isStringLiteral(DD.moduleSpecifier) && function(DD) {
-         return !DD.isTypeOnly && (!DD.exportClause || !rD().isNamedExports(DD.exportClause) || 0 === DD.exportClause.elements.length || DD.exportClause.elements.some((DD => !DD.isTypeOnly)))
-       }(DD) ? DD.moduleSpecifier.text : rD().isImportEqualsDeclaration(DD) && !DD.isTypeOnly && rD().isExternalModuleReference(DD.moduleReference) && DD.moduleReference.expression && rD().isStringLiteral(DD.moduleReference.expression) ? DD.moduleReference.expression.text : rD().i … [truncated]
+       if (pp < 768) return !1;
+       for (let ip = 0, cp = Op.length;;) {
+         let Ip = ip + cp >> 1;
+         if (pp < Op[Ip]) cp = Ip;
+         else {
+           if (!(pp >= op[Ip])) return !0;
+           ip = Ip + 1
+         }
+         if (ip == cp) return !1
+       }
+     }
+ 
+     function Sp(pp) {
+       return pp >= 127462 && pp <= 127487
+     }(() => {
+       let pp = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L26-L31` → after: `L59-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L59-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L59-L199) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L26-L31)

```diff
-       if (!zD.startsWith("./") && !zD.startsWith("../")) return;
-       const sD = ((DD.includes("/") ? DD.slice(0, DD.lastIndexOf("/") + 1) : "") + zD).split("/"),
-         KD = [];
-       for (const pD of sD)
-         if ("" !== pD && "." !== pD)
-           if (".." !== pD) KD.push(pD);
+       if (ip == pp.length) return ip;
+       ip && Pp(pp.charCodeAt(ip)) && Wp(pp.charCodeAt(ip - 1)) && ip--;
+       let Op = Ap(pp, ip);
+       for (ip += yp(Op); ip < pp.length;) {
+         let op = Ap(pp, ip);
+         if (Op == xp || op == xp || cp && Ip(op)) ip += yp(op), Op = op;
+         else {
+           if (!Sp(op)) break;
+           {
+             let cp = 0,
+               Op = ip - 2;
+             for (; Op >= 0 && Sp(Ap(pp, Op));) cp++, Op -= 2;
+             if (cp % 2 == 0) break;
+             ip += 2
+           }
+         }
+ ... (125 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L33-L37` → after: `L201-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L201-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L201-L456) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L33-L37)

```diff
-             if (0 === KD.length) return;
-             KD.pop()
-           } const rD = KD.join("/");
-       for (const LD of [rD, `${rD}.ts`, `${rD}.js`])
-         if (LD in wD && !(0, pD.i)(LD)) return LD
+             let pp = ip.length >> 1;
+             cp.push(new wp(ip.slice(0, pp)), new wp(ip.slice(pp)))
+           }
+         } else cp.push(op)
+       }
+       replace(pp, ip, cp) {
+         if (!(cp instanceof wp)) return super.replace(pp, ip, cp);
+         [pp, ip] = mp(this, pp, ip);
+         let Op = tp(this.text, tp(cp.text, Hp(this.text, 0, pp)), ip),
+           op = this.length + cp.length - (ip - pp);
+         return Op.length <= 32 ? new wp(Op, op) : vp.from(wp.split(Op, []), op)
+       }
+       sliceString(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
+         [pp, ip] = mp(this, pp, ip);
+ ... (240 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L41-L57` → after: `L460-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L460-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L460-L689) · [Before (L41-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L41-L57)

```diff
-       const zD = new Set,
-         wD = (0, sD.e)(DD);
-       if (!wD) return [];
-       const pD = [wD],
-         KD = new Set;
-       for (; pD.length > 0;) {
-         const wD = pD.pop();
-         if (!wD || KD.has(wD)) continue;
-         KD.add(wD);
-         const gD = rD().createSourceFile(wD, DD[wD], rD().ScriptTarget.Latest, !1),
-           RD = gD => {
-             const AD = LD(gD),
-               UD = AD ? (0, sD.r)(AD) : null;
-             if (UD) zD.add(UD);
-             else if (AD) {
-               const zD = cD(wD, AD, DD);
- ... (1 more removed lines; see GitHub link above)
+       return pp <= 65535 ? String.fromCharCode(pp) : (pp -= 65536, String.fromCharCode(55296 + (pp >> 10), 56320 + (1023 & pp)))
+     }
+ 
+     function Cp(pp) {
+       return pp < 65536 ? 1 : 2
+     }
+     const Ep = /\r\n?|\n/;
+     var Xp = function(pp) {
+       return pp[pp.Simple = 0] = "Simple", pp[pp.TrackDel = 1] = "TrackDel", pp[pp.TrackBefore = 2] = "TrackBefore", pp[pp.TrackAfter = 3] = "TrackAfter", pp
+     }(Xp || (Xp = {}));
+     class lp {
+       constructor(pp) {
+         this.sections = pp
+       }
+       get length() {
+         let pp = 0;
+ ... (214 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L59-L61` → after: `L691-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L691-L693) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L59-L61)

```diff
-             rD().forEachChild(gD, RD)
-           };
-         RD(gD)
+           }
+         }
+         return new Qp(ip, cp)
```

#### 9. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L63` → after: `L695-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L695-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L695-L704) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L63)

```diff
-       return [...zD].sort()
+       static createSet(pp, ip) {
+         return new Qp(pp, ip)
+       }
+     }
+ 
+     function Jp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == ip && cp <= 0) return;
+       let op = pp.length - 2;
+       op >= 0 && cp <= 0 && cp == pp[op + 1] ? pp[op] += ip : op >= 0 && 0 == ip && 0 == pp[op] ? pp[op + 1] += cp : Op ? (pp[op] += ip, pp[op + 1] += cp) : pp.push(ip, cp)
```

#### 10. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L65-L66` → after: `L706-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L706-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L706-L1134) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L65-L66)

```diff
-   },
-   41345: DD => {
+ 
+     function Bp(pp, ip, cp) {
+       if (0 == cp.length) return;
+       let Op = ip.length - 2 >> 1;
+       if (Op < pp.length) pp[pp.length - 1] = pp[pp.length - 1].append(cp);
+       else {
+         for (; pp.length < Op;) pp.push(Up.empty);
+         pp.push(cp)
+       }
+     }
+ 
+     function Np(pp, ip, cp) {
+       let Op = pp.inserted;
+       for (let op = 0, Ip = 0, Sp = 0; Sp < pp.sections.length;) {
+         let xp = pp.sections[Sp++],
+           Lp = pp.sections[Sp++];
+ ... (413 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L68-L79` → after: `L1136-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L1136-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/299.js#L1136-L2147) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/299.js#L68-L79)

```diff
-       var zD = new Error("Cannot find module '" + DD + "'");
-       throw zD.code = "MODULE_NOT_FOUND", zD
-     }
-     zD.keys = () => [], zD.resolve = zD, zD.id = 41345, DD.exports = zD
-   },
-   41332: () => {},
-   41315: () => {},
-   41353: () => {},
-   41327: () => {},
-   41321: () => {},
-   41310: () => {},
-   41339: () => {}
+       return ip => new xi(ip, pp)
+     }
+     const Si = {
+       highest: Ii(0),
+       high: Ii(oi),
+       default: Ii(Oi),
+       low: Ii(ci),
+       lowest: Ii(ii)
+     };
+     class xi {
+       constructor(pp, ip) {
+         this.inner = pp, this.prec = ip
+       }
+     }
+     class Li {
+       of(pp) {
+ ... (996 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L4-L19)

```diff
-   41369: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => ED
-     });
-     var pD = wD(58),
-       sD = wD(4770),
-       KD = wD(1687),
-       rD = wD(1044),
-       LD = wD.n(rD),
-       cD = wD(1447),
-       gD = wD(1200),
-       RD = wD(4744),
-       AD = wD(4757),
-       UD = wD(4763),
-       fD = wD(1096);
- 
+   41644: pp => {
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L21` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L6-L7) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L21)

```diff
-       return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+       var ip = new Error("Cannot find module '" + pp + "'");
+       throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L23` → after: `L9-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L9-L35) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L23)

```diff
-     RD.d.registerLanguage("javascript", AD.d), RD.d.registerLanguage("typescript", UD.e);
+     ip.keys = () => [], ip.resolve = ip, ip.id = 41644, pp.exports = ip
+   },
+   41707: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       f: () => op
+     });
+     const Op = "Sends one question to the AI",
+       op = {
+         title: Op,
+         "data-asks-ai": !0
+       }
+   },
+   41612: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L25-L28` → after: `L37-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L37-L41) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L25-L28)

```diff
-     function BD(DD, zD) {
-       const wD = ID(DD).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${zD}" title="${wD}" aria-label="${wD}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
-     }
+ 	interface Console {
+ 		/** Log a message to chat. */
+ 		log(message: any): void
+ 	}
+ 	declare const console: Console
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L30-L46` → after: `L43-L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L43-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L43-L4264) · [Before (L30-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L30-L46)

```diff
-     function GD(DD, zD) {
-       const wD = [],
-         pD = DD.toLowerCase(),
-         sD = zD.toLowerCase();
-       let KD = 0;
-       for (; KD < DD.length;) {
-         const rD = pD.indexOf(sD, KD);
-         if (-1 === rD) {
-           wD.push(DD.slice(KD));
-           break
-         }
-         rD > KD && wD.push(DD.slice(KD, rD)), wD.push((0, fD.jsx)("mark", {
-           className: "DocsHighlight",
-           children: DD.slice(rD, rD + zD.length)
-         }, rD)), KD = rD + zD.length
-       }
- ... (1 more removed lines; see GitHub link above)
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
+ ... (4206 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L48-L414` → after: `L4266-L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4266-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/300.js#L4266-L4275) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/300.js#L48-L414)

```diff
-     var hD = wD(1057),
-       nD = wD(1366),
-       MD = wD(36841),
-       OD = wD(36845);
-     const JD = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (351 more removed lines; see GitHub link above)
+     ip.keys = () => [], ip.resolve = ip, ip.id = 41688, pp.exports = ip
+   },
+   41639: () => {},
+   41672: () => {},
+   41659: () => {},
+   41695: () => {},
+   41666: () => {},
+   41661: () => {},
+   41653: () => {},
+   41681: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/301.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/301.js#L4)

```diff
-   41387: (DD, zD, wD) => {
+   41630: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/301.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/301.js#L6)

```diff
-       ensureLocalBloxdTypes: () => hD
+       b: () => Op
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L108` → after: `L8-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/301.js#L8-L7359) · [Before (L8-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/301.js#L8-L108)

```diff
-     var pD = wD(4782),
-       sD = wD(41275),
-       KD = wD(41269),
-       rD = wD(36813),
-       LD = wD(36819),
-       cD = wD(36833);
-     const gD = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
- 
-     function RD(DD) {
-       return DD.replace(/^\//, "")
-     }
- 
-     function AD(DD) {
- ... (85 more removed lines; see GitHub link above)
+     const Op = String.raw`interface Map<K, V> {
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
+ ... (7336 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L6` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/302.js#L4-L16) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/302.js#L4-L6)

```diff
-   41434: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       installImageBitmapTextureLoader: () => gD
+   41637: (pp, ip, cp) => {
+     function Op() {
+       return Op = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp)({}).hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Op.apply(null, arguments)
+     }
+     cp.d(ip, {
+       d: () => Pp,
+       e: () => xp
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L8-L10` → after: `L18-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L18-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/302.js#L18-L121) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/302.js#L8-L10)

```diff
-     var pD = wD(39800),
-       sD = wD(41439),
-       KD = wD(3186);
+     var op = !1;
+     try {
+       op = "undefined" !== typeof localStorage
+     } catch (yp) {}
+     var Ip = "undefined" !== typeof process,
+       Sp = op && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Ip && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(pp) {
+         return ""
+       };
+ ... (88 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L13-L72` → after: `L124-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L124-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/302.js#L124-L230) · [Before (L13-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/302.js#L13-L72)

```diff
-       if ("string" === typeof DD) {
-         const wD = (0, KD.l)(DD);
-         return wD ? new Blob([(0, KD.d)(wD.base64)], {
-           type: wD.mimeType || zD
-         }) : null
-       }
-       return DD instanceof Blob ? DD : new Blob([DD], {
-         type: zD
-       })
-     }
-     const LD = function(DD, zD, wD, pD) {
-       let KD, LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         cD = arguments.length > 5 ? arguments[5] : void 0,
-         gD = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         KD = rD(DD, LD)
- ... (44 more removed lines; see GitHub link above)
+       return function() {
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         var Ip = ip.apply(void 0, Op),
+           xp = "string" === typeof Ip ? Ip.slice(0, 80) + "..." : Ip;
+         return Sp.apply(void 0, ["> " + pp].concat(Op)), Sp("< " + xp), Ip
+       }
+     }
+     var Dp = function(pp) {
+         return Op({}, pp.getDefaultCompilerOptions(), {
+           jsx: pp.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: pp.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+           skipDefaultLibCheck: !0
+ ... (91 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (222 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L96` → after: `L4-L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L4-L2269) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L4-L96)

```diff
-   41504: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => KD
-     });
-     var pD = wD(40043),
-       sD = wD(41506);
-     class KD {
-       constructor(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = wD, this.ypD = [], this._maxBlockCapacity = zD || 64, this._selectionContent = new pD.c(1024), this._creationFunc = DD
-       }
-       update(DD, zD, wD) {
-         sD.d._CreateBlocks(DD, zD, wD, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       VpD(DD) {
-         for (let zD = 0; zD < this.blocks.length; zD++) {
- ... (77 more removed lines; see GitHub link above)
+   41647: (pp, ip, cp) => {
+     var Op = "/index.js",
+       op = {};
+     (pp => {
+       var ip = Object.defineProperty,
+         op = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (pp, cp) => {
+           for (var Op in cp) ip(pp, Op, {
+             get: cp[Op],
+             enumerable: !0
+           })
+         }),
+         Ip = {};
+       op(Ip, {
+         ANONYMOUS: () => r8,
+         AccessFlags: () => AI,
+         AssertionLevel: () => uc,
+ ... (2250 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L98-L104` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2271-L2276) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L98-L104)

```diff
-       select(DD, zD, wD) {
-         if (sD.b.IsInFrustum(this.kpD, DD)) {
-           if (this.blocks) {
-             for (let pD = 0; pD < this.blocks.length; pD++) {
-               this.blocks[pD].select(DD, zD, wD)
-             }
-             return
+ 
+       function Pp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = ip(pp[cp], cp);
+             if (Op) return Op
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L109-L115` → after: `L2279-L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2279-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2279-L2284) · [Before (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L109-L115)

```diff
-       intersects(DD, zD, wD, pD) {
-         if (sD.b.IntersectsSphere(this._minPoint, this._maxPoint, DD, zD)) {
-           if (this.blocks) {
-             for (let sD = 0; sD < this.blocks.length; sD++) {
-               this.blocks[sD].intersects(DD, zD, wD, pD)
-             }
-             return
+ 
+       function Wp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = pp.length - 1; cp >= 0; cp--) {
+             const Op = ip(pp[cp], cp);
+             if (Op) return Op
```

#### 4. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L120-L126` → after: `L2287-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2287-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2287-L2292) · [Before (L120-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L120-L126)

```diff
-       intersectsRay(DD, zD) {
-         if (DD.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
-           if (this.blocks) {
-             for (let wD = 0; wD < this.blocks.length; wD++) {
-               this.blocks[wD].intersectsRay(DD, zD)
-             }
-             return
+ 
+       function yp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = ip(pp[cp], cp);
+             if (void 0 !== Op) return Op
```

#### 5. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L277-L334` → after: `L2295-L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2295-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2295-L2299) · [Before (L277-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L277-L334)

```diff
-       intersectsSphere(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wD = DD.center.x - this.origin.x,
-           pD = DD.center.y - this.origin.y,
-           sD = DD.center.z - this.origin.z,
-           KD = wD * wD + pD * pD + sD * sD,
-           rD = DD.radius + zD,
-           LD = rD * rD;
-         if (KD <= LD) return !0;
-         const cD = wD * this.direction.x + pD * this.direction.y + sD * this.direction.z;
-         if (cD < 0) return !1;
-         return KD - cD * cD <= LD
-       }
-       intersectsTriangle(DD, zD, wD) {
-         const pD = AD._TmpVector3[0],
-           KD = AD._TmpVector3[1],
- ... (42 more removed lines; see GitHub link above)
+ 
+       function Up(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           if (void 0 !== pp) return pp
```

#### 6. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L337-L517` → after: `L2302-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2302-L2304) · [Before (L337-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L337-L517)

```diff
-       AsD(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           KD = arguments.length > 4 ? arguments[4] : void 0,
-           rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const LD = sD.n.Matrix[0];
-         return DD.getWorldMatrix().invertToRef(LD), this._tmpRay ? AD.TransformToRef(this, LD, this._tmpRay) : this._tmpRay = AD.Transform(this, LD), DD.intersects(this._tmpRay, zD, wD, pD, KD, rD)
-       }
-       intersectsMeshes(DD, zD, wD) {
-         wD ? wD.length = 0 : wD = [];
-         for (let pD = 0; pD < DD.length; pD++) {
-           const sD = this.AsD(DD[pD], zD);
-           sD.hit && wD.push(sD)
-         }
-         return wD.sort(this._comparePickingInfo), wD
-       }
-       _comparePickingInfo(DD, zD) {
- ... (165 more removed lines; see GitHub link above)
+ 
+       function wp(pp, ip, cp) {
+         let Op = cp;
```

#### 7. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L519-L547` → after: `L2306-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2306-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2306-L2307) · [Before (L519-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L519-L547)

```diff
-           if (!wD(RD, -1)) continue
-         } else if (!RD.isEnabled() || !RD.isVisible || !RD.uB) continue;
-         const ID = gD && RD.isWorldMatrixCameraDependent(),
-           BD = RD.computeWorldMatrix(ID, AD);
-         if (RD.hasThinInstances && RD.WzD) {
-           const DD = UD(cD, zD, RD, BD, !0, !0, rD);
-           if (DD) {
-             if (KD) return DD;
-             const {
-               rawBoundingInfo: LD,
-               intersectionThreshold: gD
-             } = MD(RD), AD = RD._thinInstanceDataStorage.matrixData;
-             if (AD) {
-               const DD = sD.n.Matrix[0],
-                 ID = sD.n.Matrix[1],
-                 GD = Math.min(RD.A4, AD.length >> 4);
- ... (13 more removed lines; see GitHub link above)
+           let cp = 0;
+           for (const op of pp) Op = ip(Op, op, cp), cp++
```

#### 8. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L553-L1051` → after: `L2312-L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2312-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2312-L2316) · [Before (L553-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L553-L1051)

```diff
-     function ED(DD, zD, wD, pD) {
-       if (!LD.c) return null;
-       const KD = [],
-         rD = !!(DD.activeCameras && DD.activeCameras.length > 1 && DD.cameraToUseForPointers !== DD.activeCamera),
-         cD = DD.cameraToUseForPointers || DD.activeCamera,
-         gD = RD.internalPickerForMesh || GD,
-         AD = gD === GD;
-       for (let LD = 0; LD < DD.meshes.length; LD++) {
-         const RD = DD.meshes[LD];
-         if (wD) {
-           if (!wD(RD, -1)) continue
-         } else if (!RD.isEnabled() || !RD.isVisible || !RD.uB) continue;
-         const UD = rD && RD.isWorldMatrixCameraDependent(),
-           fD = RD.computeWorldMatrix(UD, cD);
-         if (RD.hasThinInstances && RD.WzD) {
-           if (gD(null, zD, RD, fD, !0, !0, pD)) {
- ... (483 more removed lines; see GitHub link above)
+       function vp(pp, ip, cp) {
+         const Op = [];
+         dO.assertEqual(pp.length, ip.length);
+         for (let op = 0; op < pp.length; op++) Op.push(cp(pp[op], ip[op], op));
+         return Op
```

#### 9. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1053-L1059` → after: `L2318-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2318-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2318-L2323) · [Before (L1053-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1053-L1059)

```diff
-     }
-     class hD extends GD {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0),
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0);
-         super(DD), this.direction1 = zD, this.direction2 = wD
+ 
+       function tp(pp, ip) {
+         if (pp.length <= 1) return pp;
+         const cp = [];
+         for (let Op = 0, op = pp.length; Op < op; Op++) 0 !== Op && cp.push(ip), cp.push(pp[Op]);
+         return cp
```

#### 10. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1061-L1065` → after: `L2325-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2325-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2325-L2330) · [Before (L1061-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1061-L1065)

```diff
-       startDirectionFunction(DD, zD, wD, pD) {
-         const sD = (0, fD.RandomRange)(this.direction1.x, this.direction2.x),
-           rD = (0, fD.RandomRange)(this.direction1.y, this.direction2.y),
-           LD = (0, fD.RandomRange)(this.direction1.z, this.direction2.z);
-         pD ? zD.Z2(sD, rD, LD) : KD.s.TransformNormalFromFloatsToRef(sD, rD, LD, DD, zD)
+ 
+       function Hp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++)
+             if (!ip(pp[cp], cp)) return !1;
+         return !0
```

#### 11. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1067-L1069` → after: `L2332-L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2332-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2332-L2338) · [Before (L1067-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1067-L1069)

```diff
-       clone() {
-         const DD = new hD(this.radius, this.direction1, this.direction2);
-         return UD.e.DeepCopy(this, DD), DD
+ 
+       function dp(pp, ip, cp) {
+         if (void 0 !== pp)
+           for (let Op = cp ?? 0; Op < pp.length; Op++) {
+             const cp = pp[Op];
+             if (ip(cp, Op)) return cp
+           }
```

#### 12. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1071-L1072` → after: `L2340-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2340-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2340-L2346) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1071-L1072)

```diff
-       applyToShader(DD) {
-         DD.setFloat("radius", this.radius), DD.setFloat("radiusRange", this.radiusRange), DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
+ 
+       function ep(pp, ip, cp) {
+         if (void 0 !== pp)
+           for (let Op = cp ?? pp.length - 1; Op >= 0; Op--) {
+             const cp = pp[Op];
+             if (ip(cp, Op)) return cp
+           }
```

#### 13. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1074-L1075` → after: `L2348-L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2348-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2348-L2353) · [Before (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1074-L1075)

```diff
-       buildUniformLayout(DD) {
-         DD.addUniform("radius", 1), DD.addUniform("radiusRange", 1), DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
+ 
+       function jp(pp, ip, cp) {
+         if (void 0 === pp) return -1;
+         for (let Op = cp ?? 0; Op < pp.length; Op++)
+           if (ip(pp[Op], Op)) return Op;
+         return -1
```

#### 14. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1077-L1078` → after: `L2355-L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2355-L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2355-L2360) · [Before (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1077-L1078)

```diff
-       getEffectDefines() {
-         return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
+ 
+       function kp(pp, ip, cp) {
+         if (void 0 === pp) return -1;
+         for (let Op = cp ?? pp.length - 1; Op >= 0; Op--)
+           if (ip(pp[Op], Op)) return Op;
+         return -1
```

#### 15. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1080-L1081` → after: `L2362-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2362-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2362-L2368) · [Before (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1080-L1081)

```diff
-       getClassName() {
-         return "SphereDirectedParticleEmitter"
+ 
+       function mp(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++)
+             if (cp(pp[Op], ip)) return !0;
+         return !1
```

#### 16. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1083-L1085` → after: `L2370-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2370-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2370-L2374) · [Before (L1083-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1083-L1085)

```diff
-       serialize() {
-         const DD = super.serialize();
-         return DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD
+ 
+       function Rp(pp, ip, cp) {
+         for (let Op = cp ?? 0; Op < pp.length; Op++)
+           if (mp(ip, pp.charCodeAt(Op))) return Op;
+         return -1
```

#### 17. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1087-L1088` → after: `L2376-L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2376-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2376-L2383) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1087-L1088)

```diff
-       parse(DD) {
-         super.parse(DD), KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2)
+ 
+       function qp(pp, ip) {
+         let cp = 0;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             ip(pp[Op], Op) && cp++
+           }
+         return cp
```

#### 18. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1090-L1094` → after: `L2385-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2385-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2385-L2400) · [Before (L1090-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1090-L1094)

```diff
-     }
-     var nD = wD(38651);
-     class MD {
-       get radius() {
-         return this._radius
+ 
+       function Mp(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           if (Op < cp) {
+             const op = pp.slice(0, Op);
+             for (Op++; Op < cp;) {
+               const cp = pp[Op];
+               ip(cp) && op.push(cp), Op++
+             }
+             return op
+           }
+         }
+         return pp
```

#### 19. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1096-L1097` → after: `L2402-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2402-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2402-L2406) · [Before (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1096-L1097)

```diff
-       set radius(DD) {
-         this._radius = DD, this._buildHeight()
+ 
+       function Cp(pp, ip) {
+         let cp = 0;
+         for (let Op = 0; Op < pp.length; Op++) ip(pp[Op], Op, pp) && (pp[cp] = pp[Op], cp++);
+         pp.length = cp
```

#### 20. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1099-L1100` → after: `L2408-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2408-L2410) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1099-L1100)

```diff
-       get angle() {
-         return this._angle
+ 
+       function Ep(pp) {
+         pp.length = 0
```

#### 21. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1102-L1103` → after: `L2412-L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2412-L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2412-L2419) · [Before (L1102-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1102-L1103)

```diff
-       set angle(DD) {
-         this._angle = DD, this._buildHeight()
+ 
+       function Xp(pp, ip) {
+         let cp;
+         if (void 0 !== pp) {
+           cp = [];
+           for (let Op = 0; Op < pp.length; Op++) cp.push(ip(pp[Op], Op))
+         }
+         return cp
```

#### 22. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1105-L1106` → after: `L2421-L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2421-L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2421-L2423) · [Before (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1105-L1106)

```diff
-       _buildHeight() {
-         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ 
+       function* lp(pp, ip) {
+         for (const cp of pp) yield ip(cp)
```

#### 23. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1108-L1112` → after: `L2425-L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2425-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2425-L2437) · [Before (L1108-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1108-L1112)

```diff
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.directionRandomizer = wD, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = zD, this.radius = DD
+ 
+       function Qp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = pp[cp],
+               op = ip(Op, cp);
+             if (Op !== op) {
+               const Op = pp.slice(0, cp);
+               for (Op.push(op), cp++; cp < pp.length; cp++) Op.push(ip(pp[cp], cp));
+               return Op
+             }
+           }
+         return pp
```

#### 24. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1114-L1119` → after: `L2439-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2439-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2439-L2446) · [Before (L1114-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1114-L1119)

```diff
-       startDirectionFunction(DD, zD, wD, pD) {
-         const sD = wD.position.subtract(DD.getTranslation()).normalize(),
-           rD = (0, fD.RandomRange)(0, this.directionRandomizer),
-           LD = (0, fD.RandomRange)(0, this.directionRandomizer),
-           cD = (0, fD.RandomRange)(0, this.directionRandomizer);
-         sD.x += rD, sD.y += LD, sD.z += cD, sD.normalize(), pD ? zD.pC(sD) : KD.s.TransformNormalFromFloatsToRef(sD.x, sD.y, sD.z, DD, zD)
+ 
+       function Jp(pp) {
+         const ip = [];
+         for (let cp = 0; cp < pp.length; cp++) {
+           const Op = pp[cp];
+           Op && (Ic(Op) ? Pi(ip, Op) : ip.push(Op))
+         }
+         return ip
```

#### 25. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1121-L1122` → after: `L2448-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2448-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2448-L2449) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1121-L1122)

```diff
-       startPositionFunction(DD, zD, wD, pD) {
-         const sD = (0, fD.RandomRange)(0, 2 * Math.PI);
+ 
+       function Bp(pp, ip) {
```

#### 26. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1124-L1131` → after: `L2451-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2451-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2451-L2456) · [Before (L1124-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1124-L1131)

```diff
-         this.emitFromSpawnPointOnly ? rD = 1e-4 : (rD = (0, fD.RandomRange)(0, this.heightRange), rD = 1 - rD * rD);
-         let LD = this._radius - (0, fD.RandomRange)(0, this._radius * this.radiusRange);
-         LD *= rD;
-         const cD = LD * Math.sin(sD),
-           gD = LD * Math.cos(sD),
-           RD = rD * this._height;
-         if (pD) return zD.x = cD, zD.y = RD, void(zD.z = gD);
-         KD.s.TransformCoordinatesFromFloatsToRef(cD, RD, gD, DD, zD)
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             op && (cp = Ic(op) ? Pi(cp, op) : Yi(cp, op))
+           }
+         return cp ?? Yp
```

#### 27. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1133-L1135` → after: `L2458-L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2458-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2458-L2466) · [Before (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1133-L1135)

```diff
-       clone() {
-         const DD = new MD(this._radius, this._angle, this.directionRandomizer);
-         return UD.e.DeepCopy(this, DD), DD
+ 
+       function Np(pp, ip) {
+         const cp = [];
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             op && (Ic(op) ? Pi(cp, op) : cp.push(op))
+           }
+         return cp
```

#### 28. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1137-L1138` → after: `L2468-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2468-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2468-L2473) · [Before (L1137-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1137-L1138)

```diff
-       applyToShader(DD) {
-         DD.setFloat2("radius", this._radius, this.radiusRange), DD.setFloat("coneAngle", this._angle), DD.setFloat2("height", this._height, this.heightRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
+ 
+       function* Tp(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           pp && (yield* pp)
+         }
```

#### 29. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1140-L1141` → after: `L2475-L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2475-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2475-L2484) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1140-L1141)

```diff
-       buildUniformLayout(DD) {
-         DD.addUniform("radius", 2), DD.addUniform("coneAngle", 1), DD.addUniform("height", 2), DD.addUniform("directionRandomizer", 1)
+ 
+       function fp(pp, ip) {
+         let cp;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = pp[Op],
+               Ip = ip(op, Op);
+             (cp || op !== Ip || Ic(Ip)) && (cp || (cp = pp.slice(0, Op)), Ic(Ip) ? Pi(cp, Ip) : cp.push(Ip))
+           }
+         return cp ?? pp
```

#### 30. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1143-L1145` → after: `L2486-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2486-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2486-L2494) · [Before (L1143-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1143-L1145)

```diff
-       getEffectDefines() {
-         let DD = "#define CONEEMITTER";
-         return this.emitFromSpawnPointOnly && (DD += "\n#define CONEEMITTERSPAWNPOINT"), DD
+ 
+       function bp(pp, ip) {
+         const cp = [];
+         for (let Op = 0; Op < pp.length; Op++) {
+           const op = ip(pp[Op], Op);
+           if (void 0 === op) return;
+           cp.push(op)
+         }
+         return cp
```

#### 31. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1147-L1148` → after: `L2496-L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2496-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2496-L2504) · [Before (L1147-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1147-L1148)

```diff
-       getClassName() {
-         return "ConeParticleEmitter"
+ 
+       function hp(pp, ip) {
+         const cp = [];
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             void 0 !== op && cp.push(op)
+           }
+         return cp
```

#### 32. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1150-L1240` → after: `L2506-L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2506-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2506-L2511) · [Before (L1150-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1150-L1240)

```diff
-       serialize() {
-         const DD = {};
-         return DD.type = this.getClassName(), DD.radius = this._radius, DD.angle = this._angle, DD.directionRandomizer = this.directionRandomizer, DD.radiusRange = this.radiusRange, DD.heightRange = this.heightRange, DD.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, DD
-       }
-       parse(DD) {
-         this.radius = DD.radius, this.angle = DD.angle, this.directionRandomizer = DD.directionRandomizer, this.radiusRange = void 0 !== DD.radiusRange ? DD.radiusRange : 1, this.heightRange = void 0 !== DD.heightRange ? DD.heightRange : 1, this.emitFromSpawnPointOnly = void 0 != … [truncated]
-       }
-     }
-     class OD extends MD {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0),
-           pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0);
-         super(DD, zD), this.direction1 = wD, this.direction2 = pD
-       }
- ... (75 more removed lines; see GitHub link above)
+ 
+       function* ap(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           void 0 !== pp && (yield pp)
+         }
```

#### 33. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1242-L1243` → after: `L2513-L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2513-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2513-L2517) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1242-L1243)

```diff
-       getClassName() {
-         return "MeshParticleEmitter"
+ 
+       function np(pp, ip, cp) {
+         if (pp.has(ip)) return pp.get(ip);
+         const Op = cp();
+         return pp.set(ip, Op), Op
```

#### 34. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1245-L1247` → after: `L2519-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2519-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2519-L2521) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1245-L1247)

```diff
-       serialize() {
-         const DD = {};
-         return DD.type = this.getClassName(), DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD.meshId = this.mesh?.id, DD.useMeshNormalsForDirection = this.useMeshNormalsForDirection, DD
+ 
+       function Fp(pp, ip) {
+         return !pp.has(ip) && (pp.add(ip), !0)
```

#### 35. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1249-L1250` → after: `L2523-L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2523-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2523-L2525) · [Before (L1249-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1249-L1250)

```diff
-       parse(DD, zD) {
-         KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2), DD.meshId && zD && (this.mesh = zD.getLastMeshById(DD.meshId)), this.useMeshNormalsForDirection = DD.useMeshNormalsForDirection
+ 
+       function* gp(pp) {
+         yield pp
```

#### 36. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1252-L1255` → after: `L2527-L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2527-L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2527-L2548) · [Before (L1252-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1252-L1255)

```diff
-     }
-     class ED {
-       get targetStopDuration() {
-         return this._targetStopDuration
+ 
+       function Gp(pp, ip, cp) {
+         let Op;
+         if (void 0 !== pp) {
+           Op = [];
+           const op = pp.length;
+           let Ip, Sp, xp = 0,
+             Lp = 0;
+           for (; xp < op;) {
+             for (; Lp < op;) {
+               if (Sp = ip(pp[Lp], Lp), 0 === Lp) Ip = Sp;
+               else if (Sp !== Ip) break;
+               Lp++
+             }
+             if (xp < Lp) {
+               const ip = cp(pp.slice(xp, Lp), Ip, xp, Lp);
+ ... (6 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1257-L1258` → after: `L2550-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2550-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2550-L2557) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1257-L1258)

```diff
-       set targetStopDuration(DD) {
-         this._targetStopDuration !== DD && (this._targetStopDuration = DD)
+ 
+       function rp(pp, ip) {
+         if (void 0 === pp) return;
+         const cp = new Map;
+         return pp.forEach(((pp, Op) => {
+           const [op, Ip] = ip(Op, pp);
+           cp.set(op, Ip)
+         })), cp
```

#### 38. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1260` → after: `L2559-L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2559-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2559-L2565) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1260)

```diff
-       get isNodeGenerated() {
+ 
+       function Zp(pp, ip) {
+         if (void 0 !== pp) {
+           if (void 0 === ip) return pp.length > 0;
+           for (let cp = 0; cp < pp.length; cp++)
+             if (ip(pp[cp])) return !0
+         }
```

#### 39. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1263-L1264` → after: `L2568-L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2568-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2568-L2572) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1263-L1264)

```diff
-       get noiseTexture() {
-         return this._noiseTexture
+ 
+       function zp(pp, ip, cp) {
+         let Op;
+         for (let op = 0; op < pp.length; op++) ip(pp[op]) ? Op = void 0 === Op ? op : Op : void 0 !== Op && (cp(Op, op), Op = void 0);
+         void 0 !== Op && cp(Op, pp.length)
```

#### 40. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1266-L1267` → after: `L2574-L2576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2574-L2576) · [Before (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1266-L1267)

```diff
-       set noiseTexture(DD) {
-         this._noiseTexture !== DD && (this._noiseTexture = DD, this._reset())
+ 
+       function sp(pp, ip) {
+         return void 0 === ip || 0 === ip.length ? pp : void 0 === pp || 0 === pp.length ? ip : [...pp, ...ip]
```

#### 41. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1269-L1270` → after: `L2578-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2578-L2580) · [Before (L1269-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1269-L1270)

```diff
-       get attractors() {
-         return this._attractors.slice(0)
+ 
+       function Kp(pp, ip) {
+         return ip
```

#### 42. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1272-L1273` → after: `L2582-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2582-L2584) · [Before (L1272-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1272-L1273)

```diff
-       addAttractor(DD) {
-         this._attractors.push(DD)
+ 
+       function Vp(pp) {
+         return pp.map(Kp)
```

#### 43. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1275-L1276` → after: `L2586-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2586-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2586-L2599) · [Before (L1275-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1275-L1276)

```diff
-       removeAttractor(DD) {
-         const zD = this._attractors.indexOf(DD); - 1 !== zD && this._attractors.splice(zD, 1)
+ 
+       function ii(pp, ip, cp) {
+         const Op = Vp(pp);
+         ! function(pp, ip, cp) {
+           ip.sort(((ip, Op) => cp(pp[ip], pp[Op]) || qc(ip, Op)))
+         }(pp, Op, cp);
+         let op = pp[Op[0]];
+         const Ip = [Op[0]];
+         for (let Sp = 1; Sp < Op.length; Sp++) {
+           const cp = Op[Sp],
+             xp = pp[cp];
+           ip(op, xp) || (Ip.push(cp), op = xp)
+         }
+         return Ip.sort(), Ip.map((ip => pp[ip]))
```

#### 44. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1278-L1279` → after: `L2601-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2601-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2601-L2607) · [Before (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1278-L1279)

```diff
-       get _isAnimationSheetEnabled() {
-         return this._animationSheetEnabled
+ 
+       function ci(pp, ip, cp) {
+         return 0 === pp.length ? [] : 1 === pp.length ? pp.slice() : cp ? ii(pp, ip, cp) : function(pp, ip) {
+           const cp = [];
+           for (let Op = 0; Op < pp.length; Op++) Wi(cp, pp[Op], ip);
+           return cp
+         }(pp, ip)
```

#### 45. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1281-L1282` → after: `L2609-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2609-L2611) · [Before (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1281-L1282)

```diff
-       set _isAnimationSheetEnabled(DD) {
-         this._animationSheetEnabled !== DD && (this._animationSheetEnabled = DD)
+ 
+       function Oi() {
+         return []
```

#### 46. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1284-L1285` → after: `L2613-L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2613-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2613-L2625) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1284-L1285)

```diff
-       get isAnimationSheetEnabled() {
-         return this._isAnimationSheetEnabled
+ 
+       function oi(pp, ip, cp, Op, op) {
+         if (0 === pp.length) return pp.push(ip), !0;
+         const Ip = Ci(pp, ip, Uc, cp);
+         if (Ip < 0) {
+           if (Op && !op) {
+             const cp = ~Ip;
+             if (cp > 0 && Op(ip, pp[cp - 1])) return !1;
+             if (cp < pp.length && Op(ip, pp[cp])) return pp.splice(cp, 1, ip), !0
+           }
+           return pp.splice(~Ip, 0, ip), !0
+         }
+         return !!op && (pp.splice(Ip, 0, ip), !0)
```

#### 47. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1287-L1288` → after: `L2627-L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2627-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2627-L2645) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1287-L1288)

```diff
-       set isAnimationSheetEnabled(DD) {
-         this._isAnimationSheetEnabled != DD && (this._isAnimationSheetEnabled = DD, this._reset())
+ 
+       function Ii(pp, ip, cp) {
+         return function(pp, ip) {
+           if (0 === pp.length) return Yp;
+           let cp = pp[0];
+           const Op = [cp];
+           for (let op = 1; op < pp.length; op++) {
+             const Ip = pp[op];
+             switch (ip(Ip, cp)) {
+               case !0:
+               case 0:
+                 continue;
+               case -1:
+                 return dO.fail("Array is unsorted.")
+             }
+             Op.push(cp = Ip)
+ ... (3 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1290-L1291` → after: `L2647-L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2647-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2647-L2654) · [Before (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1290-L1291)

```diff
-       get useLogarithmicDepth() {
-         return this._useLogarithmicDepth
+ 
+       function Si(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (void 0 === pp || void 0 === ip) return pp === ip;
+         if (pp.length !== ip.length) return !1;
+         for (let Op = 0; Op < pp.length; Op++)
+           if (!cp(pp[Op], ip[Op], Op)) return !1;
+         return !0
```

#### 49. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1293-L1294` → after: `L2656-L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2656-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2656-L2664) · [Before (L1293-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1293-L1294)

```diff
-       set useLogarithmicDepth(DD) {
-         this._useLogarithmicDepth = DD && this.Ul().iI().getCaps().fragmentDepthSupported
+ 
+       function xi(pp) {
+         let ip;
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = pp[cp];
+             (ip ?? !Op) && (ip ?? (ip = pp.slice(0, cp)), Op && ip.push(Op))
+           }
+         return ip ?? pp
```

#### 50. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1296-L1297` → after: `L2666-L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2666-L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2666-L2682) · [Before (L1296-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1296-L1297)

```diff
-       Ul() {
-         return this._scene
+ 
+       function Li(pp, ip, cp) {
+         if (!ip || !pp || 0 === ip.length || 0 === pp.length) return ip;
+         const Op = [];
+         pp: for (let op = 0, Ip = 0; Ip < ip.length; Ip++) {
+           Ip > 0 && dO.assertGreaterThanOrEqual(cp(ip[Ip], ip[Ip - 1]), 0);
+           ip: for (const Sp = op; op < pp.length; op++) switch (op > Sp && dO.assertGreaterThanOrEqual(cp(pp[op], pp[op - 1]), 0), cp(ip[Ip], pp[op])) {
+             case -1:
+               Op.push(ip[Ip]);
+               continue pp;
+             case 0:
+               continue pp;
+             case 1:
+               continue ip
+           }
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1299-L1300` → after: `L2684-L2686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2684-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2684-L2686) · [Before (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1299-L1300)

```diff
-       _hasTargetStopDurationDependantGradient() {
-         return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
+ 
+       function Yi(pp, ip) {
+         return void 0 === ip ? pp : void 0 === pp ? [ip] : (pp.push(ip), pp)
```

#### 52. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1302-L1321` → after: `L2688-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2688-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2688-L2690) · [Before (L1302-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1302-L1321)

```diff
-       _setEngineBasedOnBlendMode(DD) {
-         switch (DD) {
-           case ED.BLENDMODE_MULTIPLYADD:
-             return;
-           case ED.BLENDMODE_ADD:
-             DD = 1;
-             break;
-           case ED.BLENDMODE_ONEONE:
-             DD = 6;
-             break;
-           case ED.BLENDMODE_STANDARD:
-             DD = 2;
-             break;
-           case ED.BLENDMODE_MULTIPLY:
-             DD = 4;
-             break;
- ... (4 more removed lines; see GitHub link above)
+ 
+       function Di(pp, ip) {
+         return void 0 === pp ? ip : void 0 === ip ? pp : Ic(pp) ? Ic(ip) ? sp(pp, ip) : Yi(pp, ip) : Ic(ip) ? Yi(ip, pp) : [pp, ip]
```

#### 53. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1323-L1324` → after: `L2692-L2694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2692-L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2692-L2694) · [Before (L1323-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1323-L1324)

```diff
-       getDragGradients() {
-         return this._dragGradients
+ 
+       function Ai(pp, ip) {
+         return ip < 0 ? pp.length + ip : ip
```

#### 54. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1326-L1327` → after: `L2696-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2696-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2696-L2702) · [Before (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1326-L1327)

```diff
-       getLimitVelocityGradients() {
-         return this._limitVelocityGradients
+ 
+       function Pi(pp, ip, cp, Op) {
+         if (void 0 === ip || 0 === ip.length) return pp;
+         if (void 0 === pp) return ip.slice(cp, Op);
+         cp = void 0 === cp ? 0 : Ai(ip, cp), Op = void 0 === Op ? ip.length : Ai(ip, Op);
+         for (let op = cp; op < Op && op < ip.length; op++) void 0 !== ip[op] && pp.push(ip[op]);
+         return pp
```

#### 55. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1329-L1330` → after: `L2704-L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2704-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2704-L2706) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1329-L1330)

```diff
-       getColorGradients() {
-         return this._colorGradients
+ 
+       function Wi(pp, ip, cp) {
+         return !mp(pp, ip, cp) && (pp.push(ip), !0)
```

#### 56. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1332-L1333` → after: `L2708-L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2708-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2708-L2710) · [Before (L1332-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1332-L1333)

```diff
-       getSizeGradients() {
-         return this._sizeGradients
+ 
+       function yi(pp, ip, cp) {
+         return void 0 !== pp ? (Wi(pp, ip, cp), pp) : [ip]
```

#### 57. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1335-L1336` → after: `L2712-L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2712-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2712-L2714) · [Before (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1335-L1336)

```diff
-       getColorRemapGradients() {
-         return this._colorRemapGradients
+ 
+       function Ui(pp, ip) {
+         return 0 === pp.length ? Yp : pp.slice().sort(ip)
```

#### 58. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1338-L1339` → after: `L2716-L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2716-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2716-L2718) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1338-L1339)

```diff
-       getAlphaRemapGradients() {
-         return this._alphaRemapGradients
+ 
+       function* wi(pp) {
+         for (let ip = pp.length - 1; ip >= 0; ip--) yield pp[ip]
```

#### 59. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1341-L1342` → after: `L2720-L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2720-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2720-L2726) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1341-L1342)

```diff
-       getLifeTimeGradients() {
-         return this._lifeTimeGradients
+ 
+       function vi(pp, ip, cp, Op) {
+         for (; cp < Op;) {
+           if (pp[cp] !== ip[cp]) return !1;
+           cp++
+         }
+         return !0
```

#### 60. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1344-L1345` → after: `L2728-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2728-L2733) · [Before (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1344-L1345)

```diff
-       getAngularSpeedGradients() {
-         return this._angularSpeedGradients
+       var ti = Array.prototype.at ? (pp, ip) => null == pp ? void 0 : pp.at(ip) : (pp, ip) => {
+         if (void 0 !== pp && (ip = Ai(pp, ip)) < pp.length) return pp[ip]
+       };
+ 
+       function Hi(pp) {
+         return void 0 === pp || 0 === pp.length ? void 0 : pp[0]
```

#### 61. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1347-L1348` → after: `L2735-L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2735-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2735-L2738) · [Before (L1347-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1347-L1348)

```diff
-       getVelocityGradients() {
-         return this._velocityGradients
+ 
+       function di(pp) {
+         if (void 0 !== pp)
+           for (const ip of pp) return ip
```

#### 62. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1350-L1351` → after: `L2740-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2740-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2740-L2742) · [Before (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1350-L1351)

```diff
-       getStartSizeGradients() {
-         return this._startSizeGradients
+ 
+       function ei(pp) {
+         return dO.assert(0 !== pp.length), pp[0]
```

#### 63. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1353-L1354` → after: `L2744-L2747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2744-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2744-L2747) · [Before (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1353-L1354)

```diff
-       getEmitRateGradients() {
-         return this._emitRateGradients
+ 
+       function ui(pp) {
+         for (const ip of pp) return ip;
+         dO.fail("iterator is empty")
```

#### 64. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1356-L1357` → after: `L2749-L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2749-L2751) · [Before (L1356-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1356-L1357)

```diff
-       addEmitRateGradient(DD, zD, wD) {
-         return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, DD, zD, wD), this
+ 
+       function ji(pp) {
+         return void 0 === pp || 0 === pp.length ? void 0 : pp[pp.length - 1]
```

#### 65. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1359-L1360` → after: `L2753-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2753-L2755) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1359-L1360)

```diff
-       removeEmitRateGradient(DD) {
-         return this._removeFactorGradient(this._emitRateGradients, DD), this
+ 
+       function ki(pp) {
+         return dO.assert(0 !== pp.length), pp[pp.length - 1]
```

#### 66. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1362-L1363` → after: `L2757-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2757-L2759) · [Before (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1362-L1363)

```diff
-       get direction1() {
-         return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : KD.s.Zero()
+ 
+       function mi(pp) {
+         return void 0 !== pp && 1 === pp.length ? pp[0] : void 0
```

#### 67. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1365-L1366` → after: `L2761-L2763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2761-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2761-L2763) · [Before (L1365-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1365-L1366)

```diff
-       set direction1(DD) {
-         this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = DD)
+ 
+       function Ri(pp) {
+         return dO.checkDefined(mi(pp))
```

#### 68. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1368-L1369` → after: `L2765-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2765-L2767) · [Before (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1368-L1369)

```diff
-       get direction2() {
-         return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : KD.s.Zero()
+ 
+       function qi(pp) {
+         return void 0 !== pp && 1 === pp.length ? pp[0] : pp
```

#### 69. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1371-L1372` → after: `L2769-L2772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2769-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2769-L2772) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1371-L1372)

```diff
-       set direction2(DD) {
-         this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = DD)
+ 
+       function Mi(pp, ip, cp) {
+         const Op = pp.slice(0);
+         return Op[ip] = cp, Op
```

#### 70. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1374-L1375` → after: `L2774-L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2774-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2774-L2776) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1374-L1375)

```diff
-       get minEmitBox() {
-         return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : KD.s.Zero()
+ 
+       function Ci(pp, ip, cp, Op, op) {
+         return Ei(pp, cp(ip), cp, Op, op)
```

#### 71. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1377-L1378` → after: `L2778-L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2778-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2778-L2795) · [Before (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1377-L1378)

```diff
-       set minEmitBox(DD) {
-         this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = DD)
+ 
+       function Ei(pp, ip, cp, Op, op) {
+         if (!Zp(pp)) return -1;
+         let Ip = op ?? 0,
+           Sp = pp.length - 1;
+         for (; Ip <= Sp;) {
+           const op = Ip + (Sp - Ip >> 1);
+           switch (Op(cp(pp[op], op), ip)) {
+             case -1:
+               Ip = op + 1;
+               break;
+             case 0:
+               return op;
+             case 1:
+               Sp = op - 1
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1380-L1381` → after: `L2797-L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2797-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2797-L2809) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1380-L1381)

```diff
-       get maxEmitBox() {
-         return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : KD.s.Zero()
+ 
+       function Xi(pp, ip, cp, Op, op) {
+         if (pp && pp.length > 0) {
+           const Ip = pp.length;
+           if (Ip > 0) {
+             let Sp = void 0 === Op || Op < 0 ? 0 : Op;
+             const xp = void 0 === op || Sp + op > Ip - 1 ? Ip - 1 : Sp + op;
+             let Lp;
+             for (arguments.length <= 2 ? (Lp = pp[Sp], Sp++) : Lp = cp; Sp <= xp;) Lp = ip(Lp, pp[Sp], Sp), Sp++;
+             return Lp
+           }
+         }
+         return cp
```

#### 73. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1383-L1384` → after: `L2811-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2811-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2811-L2814) · [Before (L1383-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1383-L1384)

```diff
-       set maxEmitBox(DD) {
-         this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = DD)
+       var li = Object.prototype.hasOwnProperty;
+ 
+       function Qi(pp, ip) {
+         return li.call(pp, ip)
```

#### 74. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1386-L1387` → after: `L2816-L2818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2816-L2818) · [Before (L1386-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1386-L1387)

```diff
-       get billboardMode() {
-         return this._billboardMode
+ 
+       function Ji(pp, ip) {
+         return li.call(pp, ip) ? pp[ip] : void 0
```

#### 75. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1389-L1390` → after: `L2820-L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2820-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2820-L2824) · [Before (L1389-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1389-L1390)

```diff
-       set billboardMode(DD) {
-         this._billboardMode !== DD && (this._billboardMode = DD, this._reset())
+ 
+       function Bi(pp) {
+         const ip = [];
+         for (const cp in pp) li.call(pp, cp) && ip.push(cp);
+         return ip
```

#### 76. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1392-L1393` → after: `L2826-L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2826-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2826-L2833) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1392-L1393)

```diff
-       get isBillboardBased() {
-         return this._isBillboardBased
+ 
+       function Ni(pp) {
+         const ip = [];
+         do {
+           const cp = Object.getOwnPropertyNames(pp);
+           for (const pp of cp) Wi(ip, pp)
+         } while (pp = Object.getPrototypeOf(pp));
+         return ip
```

#### 77. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1395-L1396` → after: `L2835-L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2835-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2835-L2839) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1395-L1396)

```diff
-       set isBillboardBased(DD) {
-         this._isBillboardBased !== DD && (this._isBillboardBased = DD, this._reset())
+ 
+       function Ti(pp) {
+         const ip = [];
+         for (const cp in pp) li.call(pp, cp) && ip.push(pp[cp]);
+         return ip
```

#### 78. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1398-L1399` → after: `L2841-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2841-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2841-L2845) · [Before (L1398-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1398-L1399)

```diff
-       get imageProcessingConfiguration() {
-         return this._imageProcessingConfiguration
+ 
+       function fi(pp, ip) {
+         const cp = new Array(pp);
+         for (let Op = 0; Op < pp; Op++) cp[Op] = ip(Op);
+         return cp
```

#### 79. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1401-L1402` → after: `L2847-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2847-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2847-L2851) · [Before (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1401-L1402)

```diff
-       set imageProcessingConfiguration(DD) {
-         this._attachImageProcessingConfiguration(DD)
+ 
+       function bi(pp, ip) {
+         const cp = [];
+         for (const Op of pp) cp.push(ip ? ip(Op) : Op);
+         return cp
```

#### 80. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1404-L1405` → after: `L2853-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2853-L2859) · [Before (L1404-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1404-L1405)

```diff
-       _attachImageProcessingConfiguration(DD) {
-         DD !== this._imageProcessingConfiguration && (!DD && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = DD)
+ 
+       function ai(pp) {
+         for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
+         for (const op of cp)
+           if (void 0 !== op)
+             for (const ip in op) Qi(op, ip) && (pp[ip] = op[ip]);
+         return pp
```

#### 81. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1407-L1410` → after: `L2861-L2872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2861-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2861-L2872) · [Before (L1407-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1407-L1410)

```diff
-       _reset() {}
-       _addFactorGradient(DD, zD, wD, sD) {
-         const KD = new pD.k(zD, wD, sD);
-         DD.push(KD), DD.sort(((DD, zD) => DD.gradient < zD.gradient ? -1 : DD.gradient > zD.gradient ? 1 : 0))
+ 
+       function ni(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (pp === ip) return !0;
+         if (!pp || !ip) return !1;
+         for (const Op in pp)
+           if (li.call(pp, Op)) {
+             if (!li.call(ip, Op)) return !1;
+             if (!cp(pp[Op], ip[Op])) return !1
+           } for (const Op in ip)
+           if (li.call(ip, Op) && !li.call(pp, Op)) return !1;
+         return !0
```

#### 82. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1412-L1420` → after: `L2874-L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2874-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2874-L2881) · [Before (L1412-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1412-L1420)

```diff
-       _removeFactorGradient(DD, zD) {
-         if (!DD) return;
-         let wD = 0;
-         for (const pD of DD) {
-           if (pD.gradient === zD) {
-             DD.splice(wD, 1);
-             break
-           }
-           wD++
+ 
+       function Fi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = new Map;
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op],
+             Sp = ip(Ip);
+           void 0 !== Sp && Op.set(Sp, cp(Ip))
```

#### 83. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1423-L1431` → after: `L2885-L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2885-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2885-L2891) · [Before (L1423-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1423-L1431)

```diff
-       _removeGradientAndTexture(DD, zD, wD) {
-         if (!zD) return this;
-         let pD = 0;
-         for (const sD of zD) {
-           if (sD.gradient === DD) {
-             zD.splice(pD, 1);
-             break
-           }
-           pD++
+ 
+       function gi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = [];
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op];
+           Op[ip(Ip)] = cp(Ip)
```

#### 84. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1433-L1443` → after: `L2893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2893) · [Before (L1433-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1433-L1443)

```diff
-         return wD && wD.dispose(), this
-       }
-       constructor(DD) {
-         this.animations = [], this.renderingGroupId = 0, this.emitter = KD.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
-       }
-       createPointEmitter(DD, zD) {
-         const wD = function(DD, zD) {
-           const wD = new ID;
-           return wD.direction1 = DD, wD.direction2 = zD, wD
-         }(DD, zD);
-         return this.particleEmitterType = wD, wD
+         return Op
```

#### 85. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1445-L1449` → after: `L2895-L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2895-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2895-L2903) · [Before (L1445-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1445-L1449)

```diff
-       createHemisphericEmitter() {
-         const DD = function() {
-           return new BD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
-         return this.particleEmitterType = DD, DD
+ 
+       function Gi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = pc();
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op];
+           Op.add(ip(Ip), cp(Ip))
+         }
+         return Op
```

#### 86. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1451-L1455` → after: `L2905-L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2905-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2905-L2908) · [Before (L1451-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1451-L1455)

```diff
-       createSphereEmitter() {
-         const DD = function() {
-           return new GD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
-         return this.particleEmitterType = DD, DD
+ 
+       function ri(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         return bi(Gi(pp, ip).values(), cp)
```

#### 87. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1457-L1493` → after: `L2910-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2910-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2910-L2919) · [Before (L1457-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1457-L1493)

```diff
-       createDirectedSphereEmitter() {
-         const DD = function() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0),
-             wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0);
-           return new hD(DD, zD, wD)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0));
-         return this.particleEmitterType = DD, DD
-       }
-       createCylinderEmitter() {
-         const DD = function() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-             wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-             pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-           return new nD.f(DD, zD, wD, pD)
- ... (21 more removed lines; see GitHub link above)
+ 
+       function Zi(pp, ip) {
+         const cp = {};
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = pp[Op],
+               Ip = `${ip(op)}`;
+             (cp[Ip] ?? (cp[Ip] = [])).push(op)
+           }
+         return cp
```

#### 88. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1495-L1538` → after: `L2921-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2921-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2921-L2925) · [Before (L1495-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1495-L1538)

```diff
-       createDirectedConeEmitter() {
-         const DD = function() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
-             wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0),
-             pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0);
-           return new OD(DD, zD, wD, pD)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
-         return this.particleEmitterType = DD, DD
-       }
-       createBoxEmitter(DD, zD, wD, pD) {
-         const sD = new AD.e;
-         return this.particleEmitterType = sD, this.direction1 = DD, this.direction2 = zD, this.minEmitBox = wD, this.maxEmitBox = pD, sD
-       }
-       createMeshEmitter() {
-         const DD = function() {
- ... (28 more removed lines; see GitHub link above)
+ 
+       function zi(pp) {
+         const ip = {};
+         for (const cp in pp) li.call(pp, cp) && (ip[cp] = pp[cp]);
+         return ip
```

#### 89. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1540-L1550` → after: `L2927-L2932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2927-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2927-L2932) · [Before (L1540-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1540-L1550)

```diff
-       _inheritParticleInfoToSubEmitter(DD) {
-         if (DD.particleSystem.emitter.position) {
-           const zD = DD.particleSystem.emitter;
-           if (zD.position.pC(this.position), DD.inheritDirection) {
-             const DD = KD.n.WI[0];
-             this.direction.normalizeToRef(DD), zD.setDirection(DD, 0, Math.PI / 2)
-           }
-         } else {
-           DD.particleSystem.emitter.pC(this.position)
-         }
-         this.direction.scaleToRef(DD.inheritedVelocityAmount / 2, KD.n.WI[0]), DD.particleSystem._inheritedVelocityOffset.pC(KD.n.WI[0])
+ 
+       function si(pp, ip) {
+         const cp = {};
+         for (const Op in ip) li.call(ip, Op) && (cp[Op] = ip[Op]);
+         for (const Op in pp) li.call(pp, Op) && (cp[Op] = pp[Op]);
+         return cp
```

#### 90. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1552-L1554` → after: `L2934-L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2934-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2934-L2936) · [Before (L1552-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1552-L1554)

```diff
-       _inheritParticleInfoToSubEmitters() {
-         if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
-           for (const DD of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(DD)
+ 
+       function Ki(pp, ip) {
+         for (const cp in ip) li.call(ip, cp) && (pp[cp] = ip[cp])
```

#### 91. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1556-L1557` → after: `L2938-L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2938-L2940) · [Before (L1556-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1556-L1557)

```diff
-       _reset() {
-         this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = XD._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
+ 
+       function Vi(pp, ip) {
+         return null == ip ? void 0 : ip.bind(pp)
```

#### 92. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1559-L1560` → after: `L2942-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2942-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2942-L2945) · [Before (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1559-L1560)

```diff
-       copyTo(DD) {
-         DD.position.pC(this.position), this._properties.initialDirection ? DD._properties.initialDirection ? DD._properties.initialDirection.pC(this._properties.initialDirection) : DD._properties.initialDirection = this._properties.initialDirection.clone() : DD._properties.initia … [truncated]
+ 
+       function pc() {
+         const pp = new Map;
+         return pp.add = ic, pp.remove = cc, pp
```

#### 93. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1562-L1567` → after: `L2947-L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2947-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2947-L2950) · [Before (L1562-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1562-L1567)

```diff
-     }
-     XD._Count = 0;
-     var VD = wD(41016);
-     class PD {
-       get currentFrame() {
-         return this._currentFrame
+ 
+       function ic(pp, ip) {
+         let cp = this.get(pp);
+         return void 0 !== cp ? cp.push(ip) : this.set(pp, cp = [ip]), cp
```

#### 94. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1569-L1570` → after: `L2952-L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2952-L2955) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1569-L1570)

```diff
-       get _evaluatedFrom() {
-         return this._playbackFrom
+ 
+       function cc(pp, ip) {
+         const cp = this.get(pp);
+         void 0 !== cp && (pO(cp, ip), cp.length || this.delete(pp))
```

#### 95. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1572-L1573` → after: `L2957-L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2957-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2957-L2979) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1572-L1573)

```diff
-       get _evaluatedTo() {
-         return this._playbackTo
+ 
+       function Oc(pp) {
+         const ip = (null == pp ? void 0 : pp.slice()) ?? [];
+         let cp = 0;
+ 
+         function Op() {
+           return cp === ip.length
+         }
+         return {
+           enqueue: function() {
+             ip.push(...arguments)
+           },
+           dequeue: function() {
+             if (Op()) throw new Error("Queue is empty");
+             const pp = ip[cp];
+             if (ip[cp] = void 0, cp++, cp > 100 && cp > ip.length >> 1) {
+ ... (7 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1575-L1576` → after: `L2981-L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L2981-L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L2981-L3042) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1575-L1576)

```diff
-       get _evaluatedProgress() {
-         return this._playbackProgress
+ 
+       function oc(pp, ip) {
+         const cp = new Map;
+         let Op = 0;
+ 
+         function* op() {
+           for (const pp of cp.values()) Ic(pp) ? yield* pp: yield pp
+         }
+         const Ip = {
+           has(Op) {
+             const op = pp(Op);
+             if (!cp.has(op)) return !1;
+             const Ip = cp.get(op);
+             return Ic(Ip) ? mp(Ip, Op, ip) : ip(Ip, Op)
+           },
+           add(op) {
+ ... (46 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1578-L1579` → after: `L3044-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3044-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3044-L3046) · [Before (L1578-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1578-L1579)

```diff
-       get _evaluatedSyncRoot() {
-         return this._playbackSyncRoot
+ 
+       function Ic(pp) {
+         return Array.isArray(pp)
```

#### 98. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1581-L1582` → after: `L3048-L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3048-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3048-L3050) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1581-L1582)

```diff
-       get _evaluatedJump() {
-         return this._playbackJumped
+ 
+       function Sc(pp) {
+         return Ic(pp) ? pp : [pp]
```

#### 99. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1584-L1585` → after: `L3052-L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3052-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3052-L3054) · [Before (L1584-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1584-L1585)

```diff
-       get weight() {
-         return this._weight
+ 
+       function xc(pp) {
+         return "string" === typeof pp
```

#### 100. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1587-L1588` → after: `L3056-L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3056-L3058) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1587-L1588)

```diff
-       get currentValue() {
-         return this._currentValue
+ 
+       function Lc(pp) {
+         return "number" === typeof pp
```

#### 101. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1590-L1591` → after: `L3060-L3062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3060-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3060-L3062) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1590-L1591)

```diff
-       get targetPath() {
-         return this._targetPath
+ 
+       function Yc(pp, ip) {
+         return void 0 !== pp && ip(pp) ? pp : void 0
```

#### 102. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1593-L1594` → after: `L3064-L3066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3064-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3064-L3066) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1593-L1594)

```diff
-       get target() {
-         return this._currentActiveTarget
+ 
+       function Dc(pp, ip) {
+         return void 0 !== pp && ip(pp) ? pp : dO.fail(`Invalid cast. The supplied value ${pp} did not pass the test '${dO.getFunctionName(ip)}'.`)
```

#### 103. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1596-L1597` → after: `L3068-L3072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3068-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3068-L3072) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1596-L1597)

```diff
-       get isAdditive() {
-         return this._host && this._host.isAdditive
+ 
+       function Ac(pp) {}
+ 
+       function Pc() {
+         return !1
```

#### 104. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1599-L1619` → after: `L3074-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3074-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3074-L3076) · [Before (L1599-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1599-L1619)

```diff
-       constructor(DD, zD, wD, pD) {
-         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
-             key: 0,
-             repeatCount: 0,
-             MK: this._getCorrectLoopMode()
-           }, this._animation.dataType === VD.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = KD.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
-           const DD = {
-             frame: 0,
-             value: this._keys[0].value
-           };
-           this._keys.splice(0, 0, DD)
-         }
-         if (this.bq instanceof Array) {
-           let DD = 0;
-           for (const zD of this.bq) this._preparePath(zD, DD), this._getOriginalValues(DD), DD++;
-           this._targetIsArray = !0
- ... (5 more removed lines; see GitHub link above)
+ 
+       function Wc() {
+         return !0
```

#### 105. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1621-L1632` → after: `L3078-L3082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3078-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3078-L3082) · [Before (L1621-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1621-L1632)

```diff
-       _preparePath(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wD = this._animation.targetPropertyPath;
-         if (wD.length > 1) {
-           let pD = DD;
-           for (let DD = 0; DD < wD.length - 1; DD++) {
-             const zD = wD[DD];
-             if (pD = pD[zD], void 0 === pD) throw new Error(`Invalid property (${zD}) in property path (${wD.join(".")})`)
-           }
-           this._targetPath = wD[wD.length - 1], this._activeTargets[zD] = pD
-         } else this._targetPath = wD[0], this._activeTargets[zD] = DD;
-         if (void 0 === this._activeTargets[zD][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${wD.join(".")})`)
+ 
+       function yc() {}
+ 
+       function Uc(pp) {
+         return pp
```

#### 106. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1634-L1635` → after: `L3084-L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3084-L3086) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1634-L1635)

```diff
-       get animation() {
-         return this._animation
+ 
+       function wc(pp) {
+         return pp.toLowerCase()
```

#### 107. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1637-L1675` → after: `L3088-L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3088-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3088-L3091) · [Before (L1637-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1637-L1675)

```diff
-       reset() {
-         if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
-           if (this.bq instanceof Array) {
-             let DD = 0;
-             for (const zD of this.bq) void 0 !== this._originalValue[DD] && this._setValue(zD, this._activeTargets[DD], this._originalValue[DD], -1, DD), DD++
-           } else void 0 !== this._originalValue[0] && this._setValue(this.bq, this._directTarget, this._originalValue[0], -1, 0);
-         this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
-         for (let DD = 0; DD < this._events.length; DD++) this._events[DD].isDone = !1
-       }
-       isStopped() {
-         return this._stopped
-       }
-       dispose() {
-         const DD = this._animation.runtimeAnimations.indexOf(this);
-         DD > -1 && this._animation.runtimeAnimations.splice(DD, 1)
-       }
- ... (23 more removed lines; see GitHub link above)
+       var vc = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
+ 
+       function tc(pp) {
+         return vc.test(pp) ? pp.replace(vc, wc) : pp
```

#### 108. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1677-L1685` → after: `L3093-L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3093-L3095) · [Before (L1677-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1677-L1685)

```diff
-       _registerTargetForLateAnimationBinding(DD, zD) {
-         const wD = DD.target;
-         this._scene._registeredForLateAnimationBindings.pushNoDuplicate(wD), wD._lateAnimationHolders || (wD._lateAnimationHolders = {}), wD._lateAnimationHolders[DD.targetPath] || (wD._lateAnimationHolders[DD.targetPath] = {
-           totalWeight: 0,
-           totalAdditiveWeight: 0,
-           animations: [],
-           additiveAnimations: [],
-           originalValue: zD
-         }), DD.isAdditive ? (wD._lateAnimationHolders[DD.targetPath].additiveAnimations.push(DD), wD._lateAnimationHolders[DD.targetPath].totalAdditiveWeight += DD.weight) : (wD._lateAnimationHolders[DD.targetPath].animations.push(DD), wD._lateAnimationHolders[DD.targetPath].tota … [truncated]
+ 
+       function Hc() {
+         throw new Error("Not implemented")
```

#### 109. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1687-L1735` → after: `L3097-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3097-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3097-L3098) · [Before (L1687-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1687-L1735)

```diff
-       _setValue(DD, zD, wD, pD, sD) {
-         const rD = this._scene._animationWrites,
-           LD = this._scene._animationWriteCount++;
-         let cD = rD[LD];
-         if (cD || (cD = rD[LD] = {
-             runtimeAnimation: this,
-             target: DD,
-             weight: pD,
-             additive: !1,
-             blendingFactor: 1,
-             fG: !1
-           }), cD.runtimeAnimation = this, cD.target = DD, cD.weight = pD, cD.additive = this.isAdditive, cD.fG = !1, this._currentActiveTarget = zD, this._weight = pD, this._enableBlending && this._blendingFactor <= 1) {
-           if (!this._originalBlendValue) {
-             const DD = zD[this._targetPath];
-             DD.clone ? this._originalBlendValue = DD.clone() : this._originalBlendValue = DD
-           }
- ... (33 more removed lines; see GitHub link above)
+ 
+       function dc(pp) {
```

#### 110. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1737-L1827` → after: `L3100-L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L3100-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/303.js#L3100-L3108) · [Before (L1737-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/303.js#L1737-L1827)

```diff
-         if (this._coreRuntimeAnimation) AD = wD - zD, cD = this._coreRuntimeAnimation.currentFrame, this._currentFrame = cD, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation … [truncated]
-         else {
-           let KD;
-           (zD < this._minFrame || zD > this._maxFrame) && (zD = this._minFrame), (wD < this._minFrame || wD > this._maxFrame) && (wD = this._maxFrame), AD = wD - zD;
-           let LD = DD * (rD.framePerSecond * sD) / 1e3 + this._absoluteFrameOffset,
-             UD = 0,
-             fD = !1;
-           const ID = pD && this._animationState.MK === VD.d.ANIMATIONLOOPMODE_YOYO;
-           if (ID) {
-             const DD = (LD - zD) / AD,
-               wD = Math.sin(DD * Math.PI);
-             LD = Math.abs(wD) * AD + zD;
-             const pD = wD >= 0 ? 1 : -1;
-             this._yoyoDirection !== pD && (fD = !0), this._yoyoDirection = pD
-           }
-           if (this._previousElapsedTime = DD, this._previousAbsoluteFrame = LD, !pD && wD >= zD && (LD >= AD && sD > 0 || LD <= 0 && sD < 0)) gD = !1, UD = rD.evaluate(wD);
- ... (75 more removed lines; see GitHub link above)
+         return () => (pp && (ip = pp(), pp = void 0), ip)
+       }
+ 
+       function ec(pp) {
+         const ip = new Map;
+         return cp => {
+           const Op = `${typeof cp}:${cp}`;
+           let op = ip.get(Op);
+           return void 0 !== op || ip.has(Op) || (op = pp(cp), ip.set(Op, op)), op
```
