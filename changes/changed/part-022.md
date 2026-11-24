# Changed — Bundle Modifications Report (Part 022 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `22 / 69` (**321** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (867 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 403. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10468-L10470` → after: `L8694-L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8694-L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8694-L8699) · [Before (L10468-L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10468-L10470)

```diff
- 
-       function Hq(CC) {
-         return dq(CC, rx)
+       dirAt(pp, ip) {
+         let {
+           line: cp,
+           spans: Op
+         } = this.bidiSpansAt(pp);
+         return Op[ei.find(Op, pp - cp.from, -1, ip)].dir
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10472-L10474` → after: `L8701-L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8701-L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8701-L8706) · [Before (L10472-L10474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10472-L10474)

```diff
- 
-       function Eq(CC) {
-         return dq(CC, lq)
+       bidiIn(pp, ip) {
+         let {
+           spans: cp,
+           line: Op
+         } = this.bidiSpansAt(pp);
+         return cp.length > 1 || cp.length && (cp[0].level != this.baseDir || cp[0].to + Op.from < ip)
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10476-L10478` → after: `L8708-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8708-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8708-L8757) · [Before (L10476-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10476-L10478)

```diff
- 
-       function lq(CC) {
-         return CC.flags
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

#### 406. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10480-L10501` → after: `L8759-L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8759-L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8759-L8810) · [Before (L10480-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10480-L10501)

```diff
-       var Xq = ["cs", "de", "es", "fr", "it", "ja", "ko", "pl", "pt-br", "ru", "tr", "zh-cn", "zh-tw"];
- 
-       function cq(CC, zC, ZC) {
-         const QC = CC.toLowerCase(),
-           wC = /^([a-z]+)(?:[_-]([a-z]+))?$/.exec(QC);
-         if (!wC) return void(ZC && ZC.push(zi(df.Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1, "en", "ja-jp")));
-         const bC = wC[1],
-           nC = wC[2];
- 
-         function fC(CC, ZC, QC) {
-           let wC = zf(yn(bf(zC.getExecutingFilePath())), CC);
-           if (ZC && (wC = wC + "-" + ZC), wC = zC.resolvePath(zf(wC, "diagnosticMessages.generated.json")), !zC.fileExists(wC)) return !1;
-           let bC = "";
-           try {
-             bC = zC.readFile(wC)
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

#### 407. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10503` → after: `L8812-L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8812-L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8812-L8813) · [Before (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10503)

```diff
-           return !0
+           let Sp = Uc.get(Ip);
+           (op && Sp ? op.breakAfter : (op ? op.breakAfter : Gp(Op)) || Gp(Ip) && ("BR" != Op.nodeName || (null === op || void 0 === op ? void 0 : op.isWidget())) && this.text.length > pp) && !OO(Ip, ip) && this.lineBreak(), Op = Ip
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10505-L10511` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8815) · [Before (L10505-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10505-L10511)

```diff
-         iC(Xq, QC) && !fC(bC, nC, ZC) && fC(bC, void 0, ZC), cZ(CC)
-       }
- 
-       function uq(CC, zC) {
-         if (CC)
-           for (; void 0 !== CC.original;) CC = CC.original;
-         return CC && zC ? zC(CC) ? CC : void 0 : CC
+         return this.findPointBefore(cp, ip), this
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10513-L10519` → after: `L8817-L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8817-L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8817-L8826) · [Before (L10513-L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10513-L10519)

```diff
- 
-       function rq(CC, zC) {
-         for (; CC;) {
-           const ZC = zC(CC);
-           if ("quit" === ZC) return;
-           if (ZC) return CC;
-           CC = CC.parent
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

#### 410. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10522-L10524` → after: `L8829-L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8829-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8829-L8835) · [Before (L10522-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10522-L10524)

```diff
- 
-       function sq(CC) {
-         return 0 === (16 & CC.flags)
+       readNode(pp) {
+         let ip = Uc.get(pp),
+           cp = ip && ip.overrideDOMText;
+         if (null != cp) {
+           this.findPointInside(pp, cp.length);
+           for (let pp = cp.iter(); !pp.next().done;) pp.lineBreak ? this.lineBreak() : this.append(pp.value)
+         } else 3 == pp.nodeType ? this.readTextNode(pp) : "BR" == pp.nodeName ? pp.nextSibling && this.lineBreak() : 1 == pp.nodeType && this.readRange(pp.firstChild, null)
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10526-L10532` → after: `L8837-L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8837-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8837-L8838) · [Before (L10526-L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10526-L10532)

```diff
- 
-       function Tq(CC, zC) {
-         if (void 0 === CC || sq(CC)) return CC;
-         for (CC = CC.original; CC;) {
-           if (sq(CC)) return !zC || zC(CC) ? CC : void 0;
-           CC = CC.original
-         }
+       findPointBefore(pp, ip) {
+         for (let cp of this.points) cp.node == pp && pp.childNodes[cp.offset] == ip && (cp.pos = this.text.length)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10534-L10536` → after: `L8840-L8841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8840-L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8840-L8841) · [Before (L10534-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10534-L10536)

```diff
- 
-       function aq(CC) {
-         return CC.length >= 2 && 95 === CC.charCodeAt(0) && 95 === CC.charCodeAt(1) ? "_" + CC : CC
+       findPointInside(pp, ip) {
+         for (let cp of this.points)(3 == pp.nodeType ? cp.node == pp : pp.contains(cp.node)) && (cp.pos = this.text.length + (cO(pp, cp.node, cp.offset) ? ip : 0))
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10539-L10541` → after: `L8845-L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8845-L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8845-L8849) · [Before (L10539-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10539-L10541)

```diff
-       function tq(CC) {
-         const zC = CC;
-         return zC.length >= 3 && 95 === zC.charCodeAt(0) && 95 === zC.charCodeAt(1) && 95 === zC.charCodeAt(2) ? zC.substr(1) : zC
+     function cO(pp, ip, cp) {
+       for (;;) {
+         if (!ip || cp < Zp(ip)) return !1;
+         if (ip == pp) return !0;
+         cp = gp(ip) + 1, ip = ip.parentNode
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10544-L10545` → after: `L8853-L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8853-L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8853-L8858) · [Before (L10544-L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10544-L10545)

```diff
-       function Dq(CC) {
-         return tq(CC.escapedText)
+     function OO(pp, ip) {
+       let cp;
+       for (; pp != ip && pp; pp = pp.nextSibling) {
+         let ip = Uc.get(pp);
+         if (!(null === ip || void 0 === ip ? void 0 : ip.isWidget())) return !1;
+         ip && (cp || (cp = [])).push(ip)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10547-L10550` → after: `L8860-L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8860-L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8860-L8918) · [Before (L10547-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10547-L10550)

```diff
- 
-       function jq(CC) {
-         const zC = Vf(CC.escapedText);
-         return zC ? nZ(zC, GR) : void 0
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

#### 416. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10553-L10554` → after: `L8922-L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8922-L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8922-L9122) · [Before (L10553-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10553-L10554)

```diff
-       function yq(CC) {
-         return CC.valueDeclaration && vW(CC.valueDeclaration) ? Dq(CC.valueDeclaration.name) : tq(CC.escapedName)
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

#### 417. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10556-L10558` → after: `L9124-L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9124-L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9124-L9125) · [Before (L10556-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10556-L10558)

```diff
- 
-       function Lq(CC) {
-         const zC = CC.parent.parent;
+       runHandlers(pp, ip) {
+         let cp = this.handlers[pp];
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10560-L10578` → after: `L9127-L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9127-L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9127-L9133) · [Before (L10560-L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10560-L10578)

```diff
-           if (DN(zC)) return Uq(zC);
-           switch (zC.kind) {
-             case 244:
-               if (zC.declarationList && zC.declarationList.declarations[0]) return Uq(zC.declarationList.declarations[0]);
-               break;
-             case 245:
-               let CC = zC.expression;
-               switch (227 === CC.kind && 64 === CC.operatorToken.kind && (CC = CC.left), CC.kind) {
-                 case 212:
-                   return CC.name;
-                 case 213:
-                   const zC = CC.argumentExpression;
-                   if (vd(zC)) return zC
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

#### 419. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10582-L10585` → after: `L9137-L9149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9137-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9137-L9149) · [Before (L10582-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10582-L10585)

```diff
- 
-       function Uq(CC) {
-         const zC = CF(CC);
-         return zC && vd(zC) ? zC : void 0
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

#### 420. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10587-L10589` → after: `L9151-L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9151-L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9151-L9155) · [Before (L10587-L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10587-L10589)

```diff
- 
-       function Bq(CC, zC) {
-         return !(!kq(CC) || !vd(CC.name) || Dq(CC.name) !== Dq(zC)) || !(!SH(CC) || !LC(CC.declarationList.declarations, (CC => Bq(CC, zC))))
+       keydown(pp) {
+         if (this.lastKeyCode = pp.keyCode, this.lastKeyTime = Date.now(), 9 == pp.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
+         if (this.tabFocusMode > 0 && 27 != pp.keyCode && wO.indexOf(pp.keyCode) < 0 && (this.tabFocusMode = -1), kp.android && kp.chrome && !pp.synthetic && (13 == pp.keyCode || 8 == pp.keyCode)) return this.view.observer.delayAndroidKey(pp.key, pp.keyCode), !0;
+         let ip;
+         return !kp.ios || pp.synthetic || pp.altKey || pp.metaKey || pp.shiftKey || !((ip = yO.find((ip => ip.keyCode == pp.keyCode))) && !pp.ctrlKey || UO.indexOf(pp.key) > -1 && pp.ctrlKey) ? (229 != pp.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ip  … [truncated]
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10591-L10593` → after: `L9157-L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9157-L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9157-L9159) · [Before (L10591-L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10591-L10593)

```diff
- 
-       function Oq(CC) {
-         return CC.name || Lq(CC)
+       flushIOSKey(pp) {
+         let ip = this.pendingIOSKey;
+         return !!ip && (!("Enter" == ip.key && pp && pp.from < pp.to && /^\S+$/.test(pp.insert.toString())) && (this.pendingIOSKey = void 0, Si(this.view.contentDOM, ip.key, ip.keyCode, ip instanceof KeyboardEvent ? ip : void 0)))
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10595-L10597` → after: `L9161-L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9161-L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9161-L9162) · [Before (L10595-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10595-L10597)

```diff
- 
-       function kq(CC) {
-         return !!CC.name
+       ignoreDuringComposition(pp) {
+         return !(!/^key/.test(pp.type) || pp.synthetic) && (this.composing > 0 || !!(kp.safari && !kp.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10599-L10643` → after: `L9164-L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9164-L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9164-L9165) · [Before (L10599-L10643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10599-L10643)

```diff
- 
-       function Vq(CC) {
-         switch (CC.kind) {
-           case 80:
-             return CC;
-           case 349:
-           case 342: {
-             const {
-               name: zC
-             } = CC;
-             if (167 === zC.kind) return zC.right;
-             break
-           }
-           case 214:
-           case 227: {
-             const zC = CC;
- ... (29 more removed lines; see GitHub link above)
+       startMouseSelection(pp) {
+         this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = pp
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10645-L10647` → after: `L9167-L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9167-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9167-L9171) · [Before (L10645-L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10645-L10647)

```diff
- 
-       function CF(CC) {
-         if (void 0 !== CC) return Vq(CC) || (am(CC) || tm(CC) || ZH(CC) ? zF(CC) : void 0)
+       update(pp) {
+         this.view.observer.update(pp), this.mouseSelection && this.mouseSelection.update(pp), this.draggedContent && pp.docChanged && (this.draggedContent = this.draggedContent.map(pp.changes)), pp.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
+       }
+       destroy() {
+         this.mouseSelection && this.mouseSelection.destroy()
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10650-L10656` → after: `L9175-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9175-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9175-L9180) · [Before (L10650-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10650-L10656)

```diff
-       function zF(CC) {
-         if (CC.parent) {
-           if (YE(CC.parent) || mm(CC.parent)) return CC.parent.name;
-           if (Om(CC.parent) && CC === CC.parent.right) {
-             if (vd(CC.parent.left)) return CC.parent.left;
-             if (vI(CC.parent.left)) return CG(CC.parent.left)
-           } else if (EH(CC.parent) && vd(CC.parent.name)) return CC.parent.name
+     function PO(pp, ip) {
+       return (cp, Op) => {
+         try {
+           return ip.call(pp, Op, cp)
+         } catch (op) {
+           Zi(cp.state, op)
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10660-L10662` → after: `L9185-L9186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9185-L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9185-L9186) · [Before (L10660-L10662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10660-L10662)

```diff
-       function ZF(CC) {
-         if (Ex(CC)) return hC(CC.modifiers, jd)
-       }
+     function WO(pp) {
+       let ip = Object.create(null);
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10665` → after: `L9189-L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9189-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9189-L9192) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10665)

```diff
-         if (vx(CC, 98303)) return hC(CC.modifiers, dW)
+         return ip[pp] || (ip[pp] = {
+           observers: [],
+           handlers: []
+         })
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10667-L10677` → after: `L9194-L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9194-L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9194-L9350) · [Before (L10667-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10667-L10677)

```diff
- 
-       function wF(CC, zC) {
-         if (CC.name) {
-           if (vd(CC.name)) {
-             const ZC = CC.name.escapedText;
-             return EF(CC.parent, zC).filter((CC => Ml(CC) && vd(CC.name) && CC.name.escapedText === ZC))
-           } {
-             const ZC = CC.parent.parameters.indexOf(CC);
-             PQ.assert(ZC > -1, "Parameters should always be in their parents' parameter list");
-             const QC = EF(CC.parent, zC).filter(Ml);
-             if (ZC < QC.length) return [QC[ZC]]
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

#### 429. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10682-L10684` → after: `L9659-L9665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9659-L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9659-L9665) · [Before (L10682-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10682-L10684)

```diff
- 
-       function bF(CC) {
-         return wF(CC, !1)
+       let op;
+       if (kp.chrome && kp.android && (op = yO.find((pp => pp.inputType == ip.inputType))) && (pp.observer.delayAndroidKey(op.key, op.keyCode), "Backspace" == op.key || "Delete" == op.key)) {
+         let ip = (null === (Op = window.visualViewport) || void 0 === Op ? void 0 : Op.height) || 0;
+         setTimeout((() => {
+           var cp;
+           ((null === (cp = window.visualViewport) || void 0 === cp ? void 0 : cp.height) || 0) > ip + 10 && pp.hasFocus && (pp.contentDOM.blur(), pp.focus())
+         }), 100)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10687-L10688` → after: `L9673-L9678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9673-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9673-L9678) · [Before (L10687-L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10687-L10688)

```diff
-       function nF(CC) {
-         return wF(CC, !0)
+     function fO() {
+       TO = !1
+     }
+     class bO {
+       constructor(pp) {
+         this.lineWrapping = pp, this.doc = Op.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10690-L10693` → after: `L9680-L9682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9680-L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9680-L9682) · [Before (L10690-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10690-L10693)

```diff
- 
-       function fF(CC, zC) {
-         const ZC = CC.name.escapedText;
-         return EF(CC.parent, zC).filter((CC => Pl(CC) && CC.typeParameters.some((CC => CC.name.escapedText === ZC))))
+       heightForGap(pp, ip) {
+         let cp = this.doc.lineAt(ip).number - this.doc.lineAt(pp).number + 1;
+         return this.lineWrapping && (cp += Math.max(0, Math.ceil((ip - pp - cp * this.lineLength * .5) / this.lineLength))), this.lineHeight * cp
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10695-L10697` → after: `L9684-L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9684-L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9684-L9686) · [Before (L10695-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10695-L10697)

```diff
- 
-       function oF(CC) {
-         return fF(CC, !1)
+       heightForLine(pp) {
+         if (!this.lineWrapping) return this.lineHeight;
+         return (1 + Math.max(0, Math.ceil((pp - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10699-L10701` → after: `L9688-L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9688-L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9688-L9689) · [Before (L10699-L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10699-L10701)

```diff
- 
-       function qF(CC) {
-         return fF(CC, !0)
+       setDoc(pp) {
+         return this.doc = pp, this
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10703-L10705` → after: `L9691-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9691-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9691-L9692) · [Before (L10703-L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10703-L10705)

```diff
- 
-       function FF(CC) {
-         return !!XF(CC, Ml)
+       mustRefreshForWrapping(pp) {
+         return NO.indexOf(pp) > -1 != this.lineWrapping
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10707-L10709` → after: `L9694-L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9694-L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9694-L9700) · [Before (L10707-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10707-L10709)

```diff
- 
-       function WF(CC) {
-         return XF(CC, Cl)
+       mustRefreshForHeights(pp) {
+         let ip = !1;
+         for (let cp = 0; cp < pp.length; cp++) {
+           let Op = pp[cp];
+           Op < 0 ? cp++ : this.heightSamples[Math.floor(10 * Op)] || (ip = !0, this.heightSamples[Math.floor(10 * Op)] = !0)
+         }
+         return ip
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10711-L10713` → after: `L9702-L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9702-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9702-L9712) · [Before (L10711-L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10711-L10713)

```diff
- 
-       function NF(CC) {
-         return cF(CC, xl)
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

#### 437. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10715-L10717` → after: `L9714-L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9714-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9714-L9717) · [Before (L10715-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10715-L10717)

```diff
- 
-       function MF(CC) {
-         return XF(CC, Zl)
+     }
+     class hO {
+       constructor(pp, ip) {
+         this.from = pp, this.heights = ip, this.index = 0
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10719-L10721` → after: `L9719-L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9719-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9719-L9720) · [Before (L10719-L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10719-L10721)

```diff
- 
-       function gF(CC) {
-         return XF(CC, wl)
+       get more() {
+         return this.index < this.heights.length
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10723-L10725` → after: `L9722-L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9722-L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9722-L9725) · [Before (L10723-L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10723-L10725)

```diff
- 
-       function SF(CC) {
-         return XF(CC, wl, !0)
+     }
+     class aO {
+       constructor(pp, ip, cp, Op, op) {
+         this.from = pp, this.length = ip, this.top = cp, this.height = Op, this._content = op
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10727-L10729` → after: `L9727-L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9727-L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9727-L9728) · [Before (L10727-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10727-L10729)

```diff
- 
-       function pF(CC) {
-         return XF(CC, bl)
+       get type() {
+         return "number" == typeof this._content ? Xp.Text : Array.isArray(this._content) ? this._content : this._content.type
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10731-L10733` → after: `L9730-L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9730-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9730-L9731) · [Before (L10731-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10731-L10733)

```diff
- 
-       function PF(CC) {
-         return XF(CC, bl, !0)
+       get to() {
+         return this.from + this.length
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10735-L10737` → after: `L9733-L9734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9733-L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9733-L9734) · [Before (L10735-L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10735-L10737)

```diff
- 
-       function GF(CC) {
-         return XF(CC, nl)
+       get bottom() {
+         return this.top + this.height
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10739-L10741` → after: `L9736-L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9736-L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9736-L9737) · [Before (L10739-L10741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10739-L10741)

```diff
- 
-       function RF(CC) {
-         return XF(CC, nl, !0)
+       get widget() {
+         return this._content instanceof Bp ? this._content.widget : null
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10743-L10745` → after: `L9739-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9739-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9739-L9740) · [Before (L10743-L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10743-L10745)

```diff
- 
-       function AF(CC) {
-         return XF(CC, fl)
+       get widgetLineBreaks() {
+         return "number" == typeof this._content ? this._content : 0
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10747-L10749` → after: `L9742-L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9742-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9742-L9744) · [Before (L10747-L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10747-L10749)

```diff
- 
-       function xF(CC) {
-         return XF(CC, fl, !0)
+       join(pp) {
+         let ip = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(pp._content) ? pp._content : [pp]);
+         return new aO(this.from, this.length + pp.length, this.top, this.height + pp.height, ip)
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10751-L10753` → after: `L9746-L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9746-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9746-L9754) · [Before (L10751-L10753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10751-L10753)

```diff
- 
-       function JF(CC) {
-         return XF(CC, ol, !0)
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

#### 447. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10755-L10757` → after: `L9756-L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9756-L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9756-L9757) · [Before (L10755-L10757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10755-L10757)

```diff
- 
-       function IF(CC) {
-         return XF(CC, Fl)
+       get outdated() {
+         return (2 & this.flags) > 0
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10759-L10761` → after: `L9759-L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9759-L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9759-L9760) · [Before (L10759-L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10759-L10761)

```diff
- 
-       function iF(CC) {
-         return XF(CC, Fl, !0)
+       set outdated(pp) {
+         this.flags = (pp ? 2 : 0) | -3 & this.flags
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10763-L10765` → after: `L9762-L9763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9762-L9763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9762-L9763) · [Before (L10763-L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10763-L10765)

```diff
- 
-       function vF(CC) {
-         return XF(CC, Nl)
+       setHeight(pp) {
+         this.height != pp && (Math.abs(this.height - pp) > FO && (TO = !0), this.height = pp)
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10767-L10777` → after: `L9765-L9766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9765-L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9765-L9766) · [Before (L10767-L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10767-L10777)

```diff
- 
-       function eF(CC) {
-         return XF(CC, Sl)
-       }
- 
-       function hF(CC) {
-         return XF(CC, gl)
-       }
- 
-       function KF(CC) {
-         return XF(CC, Pl)
+       replace(pp, ip, cp) {
+         return gO.of(cp)
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10779-L10791` → after: `L9768-L9769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9768-L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9768-L9769) · [Before (L10779-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10779-L10791)

```diff
- 
-       function YF(CC) {
-         return XF(CC, Jl)
-       }
- 
-       function dF(CC) {
-         const zC = XF(CC, pl);
-         if (zC && zC.typeExpression && zC.typeExpression.type) return zC
-       }
- 
-       function mF(CC) {
-         let zC = XF(CC, pl);
-         return !zC && Dd(CC) && (zC = AC(bF(CC), (CC => !!CC.typeExpression))), zC && zC.typeExpression && zC.typeExpression.type
+       decomposeLeft(pp, ip) {
+         ip.push(this)
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10793-L10805` → after: `L9771-L9772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9771-L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9771-L9772) · [Before (L10793-L10805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10793-L10805)

```diff
- 
-       function HF(CC) {
-         const zC = hF(CC);
-         if (zC && zC.typeExpression) return zC.typeExpression.type;
-         const ZC = dF(CC);
-         if (ZC && ZC.typeExpression) {
-           const CC = ZC.typeExpression.type;
-           if (qm(CC)) {
-             const zC = AC(CC.members, zm);
-             return zC && zC.type
-           }
-           if (nm(CC) || LE(CC)) return CC.type
-         }
+       decomposeRight(pp, ip) {
+         ip.push(this)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10807-L10814` → after: `L9774-L9817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9774-L9817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9774-L9817) · [Before (L10807-L10814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10807-L10814)

```diff
- 
-       function EF(CC, zC) {
-         var ZC;
-         if (!eG(CC)) return qC;
-         let QC = null == (ZC = CC.jsDoc) ? void 0 : ZC.jsDocCache;
-         if (void 0 === QC || zC) {
-           const ZC = hG(CC, zC);
-           PQ.assert(ZC.length < 2 || ZC[0] !== ZC[1]), QC = lC(ZC, (CC => OE(CC) ? CC.tags : CC)), zC || (CC.jsDoc ?? (CC.jsDoc = []), CC.jsDoc.jsDocCache = QC)
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

#### 454. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10816-L10820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9819-L9820) · [Before (L10816-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10816-L10820)

```diff
-         return QC
-       }
- 
-       function lF(CC) {
-         return EF(CC, !1)
+         let Ip = 0;
+         return null == pp[ip - 1] ? (Ip = 1, ip--) : null == pp[ip] && (Ip = 1, cp++), new KO(gO.of(pp.slice(0, ip)), Ip, gO.of(pp.slice(cp)))
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10823-L10824` → after: `L9824-L9831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9824-L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9824-L9831) · [Before (L10823-L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10823-L10824)

```diff
-       function XF(CC, zC, ZC) {
-         return AC(EF(CC, ZC), zC)
+     function GO(pp, ip) {
+       return pp == ip ? pp : (pp.constructor != ip.constructor && (TO = !0), ip)
+     }
+     gO.prototype.size = 1;
+     const rO = lp.replace({});
+     class ZO extends gO {
+       constructor(pp, ip, cp) {
+         super(pp, ip), this.deco = cp, this.spaceAbove = 0
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10826-L10828` → after: `L9833-L9834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9833-L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9833-L9834) · [Before (L10826-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10826-L10828)

```diff
- 
-       function cF(CC, zC) {
-         return lF(CC).filter(zC)
+       mainBlock(pp, ip) {
+         return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10830-L10832` → after: `L9836-L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9836-L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9836-L9837) · [Before (L10830-L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10830-L10832)

```diff
- 
-       function uF(CC, zC) {
-         return lF(CC).filter((CC => CC.kind === zC))
+       blockAt(pp, ip, cp, Op) {
+         return this.spaceAbove && pp < cp + this.spaceAbove ? new aO(Op, 0, cp, this.spaceAbove, rO) : this.mainBlock(cp, Op)
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10834-L10841` → after: `L9839-L9841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9839-L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9839-L9841) · [Before (L10834-L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10834-L10841)

```diff
- 
-       function rF(CC) {
-         return "string" === typeof CC ? CC : null == CC ? void 0 : CC.map((CC => 322 === CC.kind ? CC.text : function(CC) {
-           const zC = 325 === CC.kind ? "link" : 326 === CC.kind ? "linkcode" : "linkplain",
-             ZC = CC.name ? JS(CC.name) : "",
-             QC = CC.name && ("" === CC.text || CC.text.startsWith("://")) ? "" : " ";
-           return `{@${zC} ${ZC}${QC}${CC.text}}`
-         }(CC))).join("")
+       lineAt(pp, ip, cp, Op, op) {
+         let Ip = this.mainBlock(Op, op);
+         return this.spaceAbove ? this.blockAt(0, cp, Op, op).join(Ip) : Ip
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10843-L10861` → after: `L9843-L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9843-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9843-L9844) · [Before (L10843-L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10843-L10861)

```diff
- 
-       function sF(CC) {
-         if (VE(CC)) {
-           if (ql(CC.parent)) {
-             const zC = cG(CC.parent);
-             if (zC && WC(zC.tags)) return lC(zC.tags, (CC => Pl(CC) ? CC.typeParameters : void 0))
-           }
-           return qC
-         }
-         if (RG(CC)) return PQ.assert(321 === CC.parent.kind), lC(CC.parent.tags, (CC => Pl(CC) ? CC.typeParameters : void 0));
-         if (CC.typeParameters) return CC.typeParameters;
-         if (xX(CC) && CC.typeParameters) return CC.typeParameters;
-         if (RP(CC)) {
-           const zC = gx(CC);
-           if (zC.length) return zC;
-           const ZC = mF(CC);
- ... (3 more removed lines; see GitHub link above)
+       forEachLine(pp, ip, cp, Op, op, Ip) {
+         pp <= op + this.length && ip >= op && Ip(this.lineAt(0, nO.ByPos, cp, Op, op))
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10863-L10865` → after: `L9846-L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9846-L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9846-L9848) · [Before (L10863-L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10863-L10865)

```diff
- 
-       function TF(CC) {
-         return CC.constraint ? CC.constraint : Pl(CC.parent) && CC === CC.parent.typeParameters[0] ? CC.parent.constraint : void 0
+       setMeasuredHeight(pp) {
+         let ip = pp.heights[pp.index++];
+         ip < 0 ? (this.spaceAbove = -ip, ip = pp.heights[pp.index++]) : this.spaceAbove = 0, this.setHeight(ip)
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10867-L10869` → after: `L9850-L9853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9850-L9853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9850-L9853) · [Before (L10867-L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10867-L10869)

```diff
- 
-       function aF(CC) {
-         return 80 === CC.kind || 81 === CC.kind
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 3 ? arguments[3] : void 0;
+         return cp && cp.from <= ip && cp.more && this.setMeasuredHeight(cp), this.outdated = !1, this
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10871-L10873` → after: `L9855-L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9855-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9855-L9856) · [Before (L10871-L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10871-L10873)

```diff
- 
-       function tF(CC) {
-         return 179 === CC.kind || 178 === CC.kind
+       toString() {
+         return `block(${this.length})`
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10875-L10877` → after: `L9858-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9858-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9858-L9861) · [Before (L10875-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10875-L10877)

```diff
- 
-       function DF(CC) {
-         return lm(CC) && !!(64 & CC.flags)
+     }
+     class zO extends ZO {
+       constructor(pp, ip, cp) {
+         super(pp, ip, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = cp
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10879-L10881` → after: `L9863-L9864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9863-L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9863-L9864) · [Before (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10879-L10881)

```diff
- 
-       function jF(CC) {
-         return Xm(CC) && !!(64 & CC.flags)
+       mainBlock(pp, ip) {
+         return new aO(ip, this.length, pp + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10883-L10885` → after: `L9866-L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9866-L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9866-L9868) · [Before (L10883-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10883-L10885)

```diff
- 
-       function yF(CC) {
-         return cm(CC) && !!(64 & CC.flags)
+       replace(pp, ip, cp) {
+         let Op = cp[0];
+         return 1 == cp.length && (Op instanceof zO || Op instanceof sO && 4 & Op.flags) && Math.abs(this.length - Op.length) < 10 ? (Op instanceof sO ? Op = new zO(Op.length, this.height, this.spaceAbove) : Op.height = this.height, this.outdated || (Op.outdated = !1), Op) : gO.of … [truncated]
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10887-L10890` → after: `L9870-L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9870-L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9870-L9874) · [Before (L10887-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10887-L10890)

```diff
- 
-       function LF(CC) {
-         const zC = CC.kind;
-         return !!(64 & CC.flags) && (212 === zC || 213 === zC || 214 === zC || 236 === zC)
+       updateHeight(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0;
+         return Op && Op.from <= ip && Op.more ? this.setMeasuredHeight(Op) : (cp || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, pp.heightForLine(this.length - this.collapsed)) + this.breaks * pp.lineHeight)), this.outdated = !1, this
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10892-L10894` → after: `L9876-L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9876-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9876-L9877) · [Before (L10892-L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10892-L10894)

```diff
- 
-       function UF(CC) {
-         return LF(CC) && !fH(CC) && !!CC.questionDotToken
+       toString() {
+         return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10896-L10898` → after: `L9879-L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9879-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9879-L9882) · [Before (L10896-L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10896-L10898)

```diff
- 
-       function BF(CC) {
-         return UF(CC.parent) && CC.parent.expression === CC
+     }
+     class sO extends gO {
+       constructor(pp) {
+         super(pp, 0)
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10900-L10902` → after: `L9884-L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9884-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9884-L9898) · [Before (L10900-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10900-L10902)

```diff
- 
-       function OF(CC) {
-         return !LF(CC.parent) || UF(CC.parent) || CC !== CC.parent.expression
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

#### 470. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10904-L10906` → after: `L9900-L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9900-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9900-L9920) · [Before (L10904-L10906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10904-L10906)

```diff
- 
-       function kF(CC) {
-         return 227 === CC.kind && 61 === CC.operatorToken.kind
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

#### 471. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10908-L10910` → after: `L9922-L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9922-L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9922-L9965) · [Before (L10908-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10908-L10910)

```diff
- 
-       function VF(CC) {
-         return bm(CC) && vd(CC.typeName) && "const" === CC.typeName.escapedText && !CC.typeArguments
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

#### 472. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10912-L10914` → after: `L9967-L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9967-L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9967-L9968) · [Before (L10912-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10912-L10914)

```diff
- 
-       function CW(CC) {
-         return QX(CC, 8)
+       decomposeLeft(pp, ip) {
+         ip.push(new sO(pp - 1), null)
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10916-L10918` → after: `L9970-L9971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9970-L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9970-L9971) · [Before (L10916-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10916-L10918)

```diff
- 
-       function zW(CC) {
-         return fH(CC) && !!(64 & CC.flags)
+       decomposeRight(pp, ip) {
+         ip.push(null, new sO(this.length - pp - 1))
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10920-L10922` → after: `L9973-L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L9973-L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L9973-L10028) · [Before (L10920-L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10920-L10922)

```diff
- 
-       function ZW(CC) {
-         return 253 === CC.kind || 252 === CC.kind
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

#### 475. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10924-L10926` → after: `L10030-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10030-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10030-L10042) · [Before (L10924-L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10924-L10926)

```diff
- 
-       function QW(CC) {
-         return 281 === CC.kind || 280 === CC.kind
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

#### 476. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10928-L10930` → after: `L10044-L10047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10044-L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10044-L10047) · [Before (L10928-L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10928-L10930)

```diff
- 
-       function wW(CC) {
-         return 349 === CC.kind || 342 === CC.kind
+       decomposeLeft(pp, ip) {
+         let cp = this.left.length;
+         if (pp <= cp) return this.left.decomposeLeft(pp, ip);
+         ip.push(this.left), this.break && (cp++, pp >= cp && ip.push(null)), pp > cp && this.right.decomposeLeft(pp - cp, ip)
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10932-L10934` → after: `L10049-L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10049-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10049-L10053) · [Before (L10932-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10932-L10934)

```diff
- 
-       function bW(CC) {
-         return CC >= 167
+       decomposeRight(pp, ip) {
+         let cp = this.left.length,
+           Op = cp + this.break;
+         if (pp >= Op) return this.right.decomposeRight(pp - Op, ip);
+         pp < cp && this.left.decomposeRight(pp, ip), this.break && pp < Op && ip.push(null), ip.push(this.right)
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10936-L10938` → after: `L10055-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10055-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10055-L10056) · [Before (L10936-L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10936-L10938)

```diff
- 
-       function nW(CC) {
-         return CC >= 0 && CC <= 166
+       balanced(pp, ip) {
+         return pp.size > 2 * ip.size || ip.size > 2 * pp.size ? gO.of(this.break ? [pp, null, ip] : [pp, ip]) : (this.left = GO(this.left, pp), this.right = GO(this.right, ip), this.setHeight(pp.height + ip.height), this.outdated = pp.outdated || ip.outdated, this.size = pp.size  … [truncated]
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10940-L10942` → after: `L10058-L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10058-L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10058-L10202) · [Before (L10940-L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10940-L10942)

```diff
- 
-       function fW(CC) {
-         return nW(CC.kind)
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

#### 480. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10944-L10946` → after: `L10204-L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10204-L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10204-L10259) · [Before (L10944-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10944-L10946)

```diff
- 
-       function oW(CC) {
-         return mz(CC, "pos") && mz(CC, "end")
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

#### 481. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10948-L10950` → after: `L10261-L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10261-L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10261-L10263) · [Before (L10948-L10950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10948-L10950)

```diff
- 
-       function qW(CC) {
-         return 9 <= CC && CC <= 15
+       updateScaler() {
+         let pp = this.scaler;
+         return this.scaler = this.heightMap.height <= 7e6 ? Do : new Po(this.heightOracle, this.heightMap, this.viewports), pp.eq(this.scaler) ? 0 : 2
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10952-L10954` → after: `L10265-L10268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10265-L10268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10265-L10268) · [Before (L10952-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10952-L10954)

```diff
- 
-       function FW(CC) {
-         return qW(CC.kind)
+       updateViewportLines() {
+         this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (pp => {
+           this.viewportLines.push(Wo(pp, this.scaler))
+         }))
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10956-L10964` → after: `L10270-L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10270-L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10270-L10339) · [Before (L10956-L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10956-L10964)

```diff
- 
-       function WW(CC) {
-         switch (CC.kind) {
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

#### 484. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10966-L10974` → after: `L10341-L10342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10341-L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10341-L10342) · [Before (L10966-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10966-L10974)

```diff
-         return !1
-       }
- 
-       function NW(CC) {
-         return 15 <= CC && CC <= 18
-       }
- 
-       function MW(CC) {
-         return NW(CC.kind)
+         let dp = !this.viewportIsAppropriate(this.viewport, Dp) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
+         return dp && (2 & Yp && (Yp |= this.updateScaler()), this.viewport = this.getViewport(Dp, this.scrollTarget), Yp |= this.updateForViewport()), (2 & Yp || dp) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updat … [truncated]
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10976-L10979` → after: `L10344-L10345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10344-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10344-L10345) · [Before (L10976-L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10976-L10979)

```diff
- 
-       function gW(CC) {
-         const zC = CC.kind;
-         return 17 === zC || 18 === zC
+       get visibleTop() {
+         return this.scaler.fromDOM(this.pixelViewport.top)
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10981-L10983` → after: `L10347-L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10347-L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10347-L10348) · [Before (L10981-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10981-L10983)

```diff
- 
-       function SW(CC) {
-         return QE(CC) || fE(CC)
+       get visibleBottom() {
+         return this.scaler.fromDOM(this.pixelViewport.bottom)
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10985-L10995` → after: `L10350-L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10350-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10350-L10367) · [Before (L10985-L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10985-L10995)

```diff
- 
-       function pW(CC) {
-         switch (CC.kind) {
-           case 277:
-             return CC.isTypeOnly || 156 === CC.parent.parent.phaseModifier;
-           case 275:
-             return 156 === CC.parent.phaseModifier;
-           case 274:
-             return 156 === CC.phaseModifier;
-           case 272:
-             return CC.isTypeOnly
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

#### 488. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10997` → after: `L10369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10369) · [Before (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10997)

```diff
-         return !1
+         return xp
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10999-L11009` → after: `L10371-L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10371-L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10371-L10374) · [Before (L10999-L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10999-L11009)

```diff
- 
-       function PW(CC) {
-         switch (CC.kind) {
-           case 282:
-             return CC.isTypeOnly || CC.parent.parent.isTypeOnly;
-           case 279:
-             return CC.isTypeOnly && !!CC.moduleSpecifier && !CC.exportClause;
-           case 281:
-             return CC.parent.isTypeOnly
-         }
-         return !1
+       mapViewport(pp, ip) {
+         let cp = ip.mapPos(pp.from, -1),
+           Op = ip.mapPos(pp.to, 1);
+         return new xo(this.heightMap.lineAt(cp, nO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Op, nO.ByPos, this.heightOracle, 0, 0).to)
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11011-L11013` → after: `L10376-L10396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10376-L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10376-L10396) · [Before (L11011-L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11011-L11013)

```diff
- 
-       function GW(CC) {
-         return pW(CC) || PW(CC)
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

#### 491. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11015-L11017` → after: `L10398-L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10398-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10398-L10478) · [Before (L11015-L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11015-L11017)

```diff
- 
-       function RW(CC) {
-         return void 0 !== rq(CC, GW)
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

#### 492. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11019-L11021` → after: `L10480-L10482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10480-L10482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10480-L10482) · [Before (L11019-L11021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11019-L11021)

```diff
- 
-       function AW(CC) {
-         return 11 === CC.kind || NW(CC.kind)
+       gapSize(pp, ip, cp, Op) {
+         let op = Yo(Op, cp) - Yo(Op, ip);
+         return this.heightOracle.lineWrapping ? pp.height * op : Op.total * this.heightOracle.charWidth * op
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11023-L11025` → after: `L10484-L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10484-L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10484-L10485) · [Before (L11023-L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11023-L11025)

```diff
- 
-       function xW(CC) {
-         return fd(CC) || vd(CC)
+       updateLineGaps(pp) {
+         oo.same(pp, this.lineGaps) || (this.lineGaps = pp, this.lineGapDeco = lp.set(pp.map((pp => pp.draw(this, this.heightOracle.lineWrapping)))))
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11027-L11030` → after: `L10487-L10508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10487-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10487-L10508) · [Before (L11027-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11027-L11030)

```diff
- 
-       function JW(CC) {
-         var zC;
-         return vd(CC) && void 0 !== (null == (zC = CC.emitNode) ? void 0 : zC.autoGenerate)
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

#### 495. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11032-L11035` → after: `L10510-L10511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10510-L10511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10510-L10511) · [Before (L11032-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11032-L11035)

```diff
- 
-       function IW(CC) {
-         var zC;
-         return ed(CC) && void 0 !== (null == (zC = CC.emitNode) ? void 0 : zC.autoGenerate)
+       lineBlockAt(pp) {
+         return pp >= this.viewport.from && pp <= this.viewport.to && this.viewportLines.find((ip => ip.from <= pp && ip.to >= pp)) || Wo(this.heightMap.lineAt(pp, nO.ByPos, this.heightOracle, 0, 0), this.scaler)
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11037-L11040` → after: `L10513-L10514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10513-L10514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10513-L10514) · [Before (L11037-L11040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11037-L11040)

```diff
- 
-       function iW(CC) {
-         const zC = CC.emitNode.autoGenerate.flags;
-         return !!(32 & zC) && !!(16 & zC) && !!(8 & zC)
+       lineBlockAtHeight(pp) {
+         return pp >= this.viewportLines[0].top && pp <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ip => ip.top <= pp && ip.bottom >= pp)) || Wo(this.heightMap.lineAt(this.scaler.fromDOM(pp), nO.ByHeight, this.heightOracle, 0, 0), this.sc … [truncated]
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11042-L11044` → after: `L10516-L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10516-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10516-L10517) · [Before (L11042-L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11042-L11044)

```diff
- 
-       function vW(CC) {
-         return (Ld(CC) || LW(CC)) && ed(CC.name)
+       getScrollOffset() {
+         return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11046-L11048` → after: `L10519-L10521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10519-L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10519-L10521) · [Before (L11046-L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11046-L11048)

```diff
- 
-       function eW(CC) {
-         return lm(CC) && ed(CC.name)
+       scrollAnchorAt(pp) {
+         let ip = this.lineBlockAtHeight(pp + 8);
+         return ip.from >= this.viewport.from || this.viewportLines[0].top - pp > 200 ? ip : this.viewportLines[0]
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11050-L11070` → after: `L10523-L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10523-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10523-L10524) · [Before (L11050-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11050-L11070)

```diff
- 
-       function hW(CC) {
-         switch (CC) {
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

#### 500. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11072-L11074` → after: `L10526-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10526-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10526-L10527) · [Before (L11072-L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11072-L11074)

```diff
- 
-       function KW(CC) {
-         return !!(31 & yx(CC))
+       get docHeight() {
+         return this.scaler.toDOM(this.heightMap.height)
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11076-L11078` → after: `L10529-L10530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10529-L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10529-L10530) · [Before (L11076-L11078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11076-L11078)

```diff
- 
-       function YW(CC) {
-         return KW(CC) || 126 === CC || 164 === CC || 129 === CC
+       get contentHeight() {
+         return this.docHeight + this.paddingTop + this.paddingBottom
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11080-L11082` → after: `L10532-L10535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10532-L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10532-L10535) · [Before (L11080-L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11080-L11082)

```diff
- 
-       function dW(CC) {
-         return hW(CC.kind)
+     }
+     class xo {
+       constructor(pp, ip) {
+         this.from = pp, this.to = ip
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11085-L11088` → after: `L10539-L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10539-L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10539-L10646) · [Before (L11085-L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11085-L11088)

```diff
-       function mW(CC) {
-         const zC = CC.kind;
-         return 167 === zC || 80 === zC
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

#### 504. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11090-L11101` → after: `L10648-L10994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10648-L10994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10648-L10994) · [Before (L11090-L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11090-L11101)

```diff
-       function HW(CC) {
-         const zC = CC.kind;
-         return 80 === zC || 81 === zC || 11 === zC || 9 === zC || 168 === zC
-       }
- 
-       function EW(CC) {
-         const zC = CC.kind;
-         return 80 === zC || 207 === zC || 208 === zC
-       }
- 
-       function lW(CC) {
-         return !!CC && sW(CC.kind)
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

#### 505. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11103-L11105` → after: `L10996-L10997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10996-L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10996-L10997) · [Before (L11103-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11103-L11105)

```diff
- 
-       function XW(CC) {
-         return !!CC && (sW(CC.kind) || Od(CC))
+       onScrollChanged(pp) {
+         this.view.inputState.runHandlers("scroll", pp), this.intersecting && this.view.measure()
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11107-L11109` → after: `L10999-L11000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L10999-L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L10999-L11000) · [Before (L11107-L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11107-L11109)

```diff
- 
-       function cW(CC) {
-         return CC && rW(CC.kind)
+       onScroll(pp) {
+         this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(pp)
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11111-L11113` → after: `L11002-L11005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11002-L11005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11002-L11005) · [Before (L11111-L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11111-L11113)

```diff
- 
-       function uW(CC) {
-         return 112 === CC.kind || 97 === CC.kind
+       mH() {
+         this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
+           this.resizeTimeout = -1, this.view.requestMeasure()
+         }), 50))
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11115-L11128` → after: `L11007-L11010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11007-L11010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11007-L11010) · [Before (L11115-L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11115-L11128)

```diff
- 
-       function rW(CC) {
-         switch (CC) {
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

#### 509. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11130-L11143` → after: `L11012-L11016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11012-L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11012-L11016) · [Before (L11130-L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11130-L11143)

```diff
- 
-       function sW(CC) {
-         switch (CC) {
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
-             return rW(CC)
+       updateGaps(pp) {
+         if (this.gapIntersection && (pp.length != this.gaps.length || this.gaps.some(((ip, cp) => ip != pp[cp])))) {
+           this.gapIntersection.disconnect();
+           for (let ip of pp) this.gapIntersection.observe(ip);
+           this.gaps = pp
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11146-L11157` → after: `L11019-L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11019-L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11019-L11027) · [Before (L11146-L11157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11146-L11157)

```diff
- 
-       function TW(CC) {
-         return EE(CC) || aH(CC) || gH(CC) && lW(CC.parent)
-       }
- 
-       function aW(CC) {
-         const zC = CC.kind;
-         return 177 === zC || 173 === zC || 175 === zC || 178 === zC || 179 === zC || 182 === zC || 176 === zC || 241 === zC
-       }
- 
-       function tW(CC) {
-         return CC && (264 === CC.kind || 232 === CC.kind)
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

#### 511. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11160-L11161` → after: `L11041-L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11041-L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11041-L11061) · [Before (L11160-L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11160-L11161)

```diff
-       function DW(CC) {
-         return CC && (178 === CC.kind || 179 === CC.kind)
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

#### 512. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11163-L11165` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11063-L11064) · [Before (L11163-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11163-L11165)

```diff
- 
-       function jW(CC) {
-         return Ld(CC) && mx(CC)
+       setSelectionRange(pp, ip) {
+         this.selectionRange.set(pp.node, pp.offset, ip.node, ip.offset), this.selectionChanged = !1
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11167-L11169` → after: `L11066-L11067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11066-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11066-L11067) · [Before (L11167-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11167-L11169)

```diff
- 
-       function yW(CC) {
-         return RP(CC) && xh(CC) ? (!BP(CC) || !WJ(CC.expression)) && !kP(CC, !0) : CC.parent && tW(CC.parent) && Ld(CC) && !mx(CC)
+       clearSelectionRange() {
+         this.selectionRange.set(null, 0, null, 0)
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11171-L11179` → after: `L11069-L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11069-L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11069-L11080) · [Before (L11171-L11179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11171-L11179)

```diff
- 
-       function LW(CC) {
-         switch (CC.kind) {
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

#### 515. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11182-L11209` → after: `L11083-L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11083-L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11083-L11088) · [Before (L11182-L11209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11182-L11209)

```diff
- 
-       function UW(CC) {
-         return dW(CC) || jd(CC)
-       }
- 
-       function BW(CC) {
-         const zC = CC.kind;
-         return 181 === zC || 180 === zC || 172 === zC || 174 === zC || 182 === zC || 178 === zC || 179 === zC || 355 === zC
-       }
- 
-       function OW(CC) {
-         return BW(CC) || aW(CC)
-       }
- 
-       function kW(CC) {
-         const zC = CC.kind;
- ... (12 more removed lines; see GitHub link above)
+       ignore(pp) {
+         if (!this.active) return pp();
+         try {
+           return this.stop(), pp()
+         } finally {
+           this.start(), this.clear()
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11213-L11219` → after: `L11091-L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11091-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11091-L11092) · [Before (L11213-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11213-L11219)

```diff
- 
-       function zN(CC) {
-         if (CC) {
-           const zC = CC.kind;
-           return 208 === zC || 207 === zC
-         }
-         return !1
+       start() {
+         this.active || (this.observer.observe(this.dom, jo), ko && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11221-L11224` → after: `L11094-L11095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11094-L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11094-L11095) · [Before (L11221-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11221-L11224)

```diff
- 
-       function ZN(CC) {
-         const zC = CC.kind;
-         return 210 === zC || 211 === zC
+       stop() {
+         this.active && (this.active = !1, this.observer.disconnect(), ko && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11226-L11229` → after: `L11097-L11098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11097-L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11097-L11098) · [Before (L11226-L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11226-L11229)

```diff
- 
-       function QN(CC) {
-         const zC = CC.kind;
-         return 209 === zC || 233 === zC
+       clear() {
+         this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11231-L11237` → after: `L11100-L11109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11100-L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11100-L11109) · [Before (L11231-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11231-L11237)

```diff
- 
-       function wN(CC) {
-         switch (CC.kind) {
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

#### 520. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11239` → after: `L11111-L11115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11111-L11115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11111-L11115) · [Before (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11239)

```diff
-         return !1
+         this.delayedAndroidKey && "Enter" != pp || (this.delayedAndroidKey = {
+           key: pp,
+           keyCode: ip,
+           force: this.lastChange < Date.now() - 50 || !!(null === (cp = this.delayedAndroidKey) || void 0 === cp ? void 0 : cp.force)
+         })
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11241-L11243` → after: `L11117-L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11117-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11117-L11118) · [Before (L11241-L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11241-L11243)

```diff
- 
-       function bN(CC) {
-         return EH(CC) || Dd(CC) || oN(CC) || FN(CC)
+       clearDelayedAndroidKey() {
+         this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11245-L11247` → after: `L11120-L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11120-L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11120-L11123) · [Before (L11245-L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11245-L11247)

```diff
- 
-       function nN(CC) {
-         return fN(CC) || qN(CC)
+       flushSoon() {
+         this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame((() => {
+           this.delayedFlush = -1, this.flush()
+         })))
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11249-L11256` → after: `L11125-L11126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11125-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11125-L11126) · [Before (L11249-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11249-L11256)

```diff
- 
-       function fN(CC) {
-         switch (CC.kind) {
-           case 207:
-           case 211:
-             return !0
-         }
-         return !1
+       forceFlush() {
+         this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11258-L11267` → after: `L11128-L11130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11128-L11130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11128-L11130) · [Before (L11258-L11267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11258-L11267)

```diff
- 
-       function oN(CC) {
-         switch (CC.kind) {
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

#### 525. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11269-L11274` → after: `L11132-L11143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11132-L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11132-L11143) · [Before (L11269-L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11269-L11274)

```diff
- 
-       function qN(CC) {
-         switch (CC.kind) {
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

#### 526. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11276-L11289` → after: `L11145-L11148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11145-L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11145-L11148) · [Before (L11276-L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11276-L11289)

```diff
-         return !1
-       }
- 
-       function FN(CC) {
-         switch (CC.kind) {
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

#### 527. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11293-L11296` → after: `L11151-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11151-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11151-L11162) · [Before (L11293-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11293-L11296)

```diff
- 
-       function WN(CC) {
-         const zC = CC.kind;
-         return 212 === zC || 167 === zC || 206 === zC
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

#### 528. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11298-L11301` → after: `L11164-L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11164-L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11164-L11190) · [Before (L11298-L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11298-L11301)

```diff
- 
-       function NN(CC) {
-         const zC = CC.kind;
-         return 212 === zC || 167 === zC
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

#### 529. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11303-L11305` → after: `L11192-L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11192-L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11192-L11193) · [Before (L11303-L11305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11303-L11305)

```diff
- 
-       function MN(CC) {
-         return gN(CC) || Be(CC)
+       setWindow(pp) {
+         pp != this.win && (this.removeWindowListeners(this.win), this.win = pp, this.addWindowListeners(this.win))
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11307-L11322` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11195-L11196) · [Before (L11307-L11322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11307-L11322)

```diff
- 
-       function gN(CC) {
-         switch (CC.kind) {
-           case 214:
-           case 215:
-           case 216:
-           case 171:
-           case 287:
-           case 286:
-           case 290:
-             return !0;
-           case 227:
-             return 104 === CC.operatorToken.kind;
-           default:
-             return !1
-         }
+       addWindowListeners(pp) {
+         pp.addEventListener("resize", this.mH), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : pp.addEventListener("beforeprint", this.onPrint), pp.addEventListener("scrol … [truncated]
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11324-L11326` → after: `L11198-L11199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11198-L11199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11198-L11199) · [Before (L11324-L11326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11324-L11326)

```diff
- 
-       function SN(CC) {
-         return 214 === CC.kind || 215 === CC.kind
+       removeWindowListeners(pp) {
+         pp.removeEventListener("scroll", this.onScroll), pp.removeEventListener("resize", this.mH), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : pp.removeEventL … [truncated]
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11328-L11331` → after: `L11201-L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11201-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11201-L11202) · [Before (L11328-L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11328-L11331)

```diff
- 
-       function pN(CC) {
-         const zC = CC.kind;
-         return 229 === zC || 15 === zC
+       update(pp) {
+         this.editContext && (this.editContext.update(pp), pp.startState.facet(zi) != pp.state.facet(zi) && (pp.view.contentDOM.editContext = pp.state.facet(zi) ? this.editContext.editContext : null))
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11333-L11335` → after: `L11204-L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11204-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11204-L11208) · [Before (L11333-L11335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11333-L11335)

```diff
- 
-       function PN(CC) {
-         return GN(CW(CC).kind)
+       destroy() {
+         var pp, ip, cp;
+         this.stop(), null === (pp = this.intersection) || void 0 === pp || pp.disconnect(), null === (ip = this.gapIntersection) || void 0 === ip || ip.disconnect(), null === (cp = this.resizeScroll) || void 0 === cp || cp.disconnect();
+         for (let Op of this.scrollTargets) Op.removeEventListener("scroll", this.onScroll);
+         this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null,  … [truncated]
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11338-L11373` → after: `L11212-L11325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11212-L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11212-L11325) · [Before (L11338-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11338-L11373)

```diff
-       function GN(CC) {
-         switch (CC) {
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

#### 535. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11376-L11378` → after: `L11328-L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11328-L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11328-L11345) · [Before (L11376-L11378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11376-L11378)

```diff
- 
-       function RN(CC) {
-         return AN(CW(CC).kind)
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

#### 536. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11380-L11393` → after: `L11347-L11350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11347-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11347-L11350) · [Before (L11380-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11380-L11393)

```diff
- 
-       function AN(CC) {
-         switch (CC) {
-           case 225:
-           case 226:
-           case 221:
-           case 222:
-           case 223:
-           case 224:
-           case 217:
-             return !0;
-           default:
-             return GN(CC)
-         }
+       update(pp) {
+         let ip = this.pendingContextChange,
+           cp = pp.startState.selection.main;
+         this.composing && (this.composing.drifted || !pp.changes.touchesRange(cp.from, cp.to) && pp.transactions.some((pp => !pp.isUserEvent("input.type") && pp.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = pp.changes.mapP … [truncated]
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11395-L11404` → after: `L11352-L11356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11352-L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11352-L11356) · [Before (L11395-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11395-L11404)

```diff
- 
-       function xN(CC) {
-         switch (CC.kind) {
-           case 226:
-             return !0;
-           case 225:
-             return 46 === CC.operator || 47 === CC.operator;
-           default:
-             return !1
-         }
+       resetRange(pp) {
+         let {
+           head: ip
+         } = pp.selection.main;
+         this.from = Math.max(0, ip - 1e4), this.to = Math.min(pp.doc.length, ip + 1e4)
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11406-L11416` → after: `L11358-L11359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11358-L11359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11358-L11359) · [Before (L11406-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11406-L11416)

```diff
- 
-       function JN(CC) {
-         switch (CC.kind) {
-           case 106:
-           case 112:
-           case 97:
-           case 225:
-             return !0;
-           default:
-             return FW(CC)
-         }
+       reset(pp) {
+         this.resetRange(pp), this.editContext.updateText(0, this.editContext.text.length, pp.doc.sliceString(this.from, this.to)), this.setSelection(pp)
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11418-L11436` → after: `L11361-L11363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11361-L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11361-L11363) · [Before (L11418-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11418-L11436)

```diff
- 
-       function IN(CC) {
-         return function(CC) {
-           switch (CC) {
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

#### 540. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11438-L11441` → after: `L11365-L11369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11365-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11365-L11369) · [Before (L11438-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11438-L11441)

```diff
- 
-       function iN(CC) {
-         const zC = CC.kind;
-         return 217 === zC || 235 === zC
+       setSelection(pp) {
+         let {
+           main: ip
+         } = pp.selection, cp = this.toContextPos(Math.max(this.from, Math.min(this.to, ip.anchor))), Op = this.toContextPos(ip.head);
+         this.editContext.selectionStart == cp && this.editContext.selectionEnd == Op || this.editContext.updateSelection(cp, Op)
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11443-L11455` → after: `L11371-L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11371-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11371-L11375) · [Before (L11443-L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11443-L11455)

```diff
- 
-       function vN(CC, zC) {
-         switch (CC.kind) {
-           case 249:
-           case 250:
-           case 251:
-           case 247:
-           case 248:
-             return !0;
-           case 257:
-             return zC && vN(CC.statement, zC)
-         }
-         return !1
+       rangeIsValid(pp) {
+         let {
+           head: ip
+         } = pp.selection.main;
+         return !(this.from > 0 && ip - this.from < 500 || this.to < pp.doc.length && this.to - ip < 500 || this.to - this.from > 3e4)
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11457-L11459` → after: `L11377-L11381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11377-L11381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11377-L11381) · [Before (L11457-L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11457-L11459)

```diff
- 
-       function eN(CC) {
-         return wE(CC) || bE(CC)
+       toEditorPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
+         pp = Math.min(pp, ip);
+         let cp = this.composing;
+         return cp && cp.drifted ? cp.editorBase + (pp - cp.contextBase) : pp + this.from
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11461-L11463` → after: `L11383-L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11383-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11383-L11385) · [Before (L11461-L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11461-L11463)

```diff
- 
-       function hN(CC) {
-         return LC(CC, eN)
+       toContextPos(pp) {
+         let ip = this.composing;
+         return ip && ip.drifted ? ip.contextBase + (pp - ip.editorBase) : pp - this.from
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11465-L11467` → after: `L11387-L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11387-L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11387-L11388) · [Before (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11465-L11467)

```diff
- 
-       function KN(CC) {
-         return !MS(CC) && !wE(CC) && !vx(CC, 32) && !yg(CC)
+       destroy() {
+         for (let pp in this.handlers) this.editContext.removeEventListener(pp, this.handlers[pp])
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11469-L11471` → after: `L11390-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11390-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11390-L11393) · [Before (L11469-L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11469-L11471)

```diff
- 
-       function YN(CC) {
-         return MS(CC) || wE(CC) || vx(CC, 32)
+     }
+     class Co {
+       get state() {
+         return this.viewState.state
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11473-L11475` → after: `L11395-L11396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11395-L11396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11395-L11396) · [Before (L11473-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11473-L11475)

```diff
- 
-       function dN(CC) {
-         return 250 === CC.kind || 251 === CC.kind
+       get viewport() {
+         return this.viewState.viewport
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11477-L11479` → after: `L11398-L11399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11398-L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11398-L11399) · [Before (L11477-L11479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11477-L11479)

```diff
- 
-       function mN(CC) {
-         return gH(CC) || IN(CC)
+       get Z2() {
+         return this.viewState.Z2
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11481-L11483` → after: `L11401-L11402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11401-L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11401-L11402) · [Before (L11481-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11481-L11483)

```diff
- 
-       function HN(CC) {
-         return gH(CC)
+       get inView() {
+         return this.viewState.inView
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11485-L11487` → after: `L11404-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11404-L11405) · [Before (L11485-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11485-L11487)

```diff
- 
-       function EN(CC) {
-         return lH(CC) || IN(CC)
+       get composing() {
+         return !!this.inputState && this.inputState.composing > 0
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11489-L11492` → after: `L11407-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11407-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11407-L11408) · [Before (L11489-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11489-L11492)

```diff
- 
-       function lN(CC) {
-         const zC = CC.kind;
-         return 269 === zC || 268 === zC || 80 === zC
+       get compositionStarted() {
+         return !!this.inputState && this.inputState.composing >= 0
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11494-L11497` → after: `L11410-L11411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11410-L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11410-L11411) · [Before (L11494-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11494-L11497)

```diff
- 
-       function XN(CC) {
-         const zC = CC.kind;
-         return 269 === zC || 268 === zC
+       get root() {
+         return this._root
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11499-L11502` → after: `L11413-L11414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11413-L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11413-L11414) · [Before (L11499-L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11499-L11502)

```diff
- 
-       function cN(CC) {
-         const zC = CC.kind;
-         return 80 === zC || 268 === zC
+       get win() {
+         return this.dom.ownerDocument.defaultView || window
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11504-L11507` → after: `L11416-L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11416-L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11416-L11433) · [Before (L11504-L11507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11504-L11507)

```diff
- 
-       function uN(CC) {
-         const zC = CC.kind;
-         return 276 === zC || 275 === zC
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

#### 554. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11509-L11511` → after: `L11435-L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11435-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11435-L11438) · [Before (L11509-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11509-L11511)

```diff
- 
-       function rN(CC) {
-         return 268 === CC.kind || 267 === CC.kind
+       dispatch() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         let op = 1 == ip.length && ip[0] instanceof Op.I ? ip : 1 == ip.length && Array.isArray(ip[0]) ? ip[0] : [this.state.update(...ip)];
+         this.dispatchTransactions(op, this)
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11513-L11582` → after: `L11440-L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11440-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11440-L11475) · [Before (L11513-L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11513-L11582)

```diff
- 
-       function sN(CC) {
-         switch (CC.kind) {
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

#### 556. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11585-L11620` → after: `L11486-L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11486-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11486-L11497) · [Before (L11585-L11620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11585-L11620)

```diff
- 
-       function TN(CC) {
-         switch (CC.kind) {
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

#### 557. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11623-L11625` → after: `L11501-L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11501-L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11501-L11529) · [Before (L11623-L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11623-L11625)

```diff
- 
-       function aN(CC) {
-         return 263 === CC || 283 === CC || 264 === CC || 265 === CC || 266 === CC || 267 === CC || 268 === CC || 273 === CC || 272 === CC || 279 === CC || 278 === CC || 271 === CC
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

#### 558. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11627-L11629` → after: `L11531-L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11531-L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11531-L11597) · [Before (L11627-L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11627-L11629)

```diff
- 
-       function tN(CC) {
-         return 253 === CC || 252 === CC || 260 === CC || 247 === CC || 245 === CC || 243 === CC || 250 === CC || 251 === CC || 249 === CC || 246 === CC || 257 === CC || 254 === CC || 256 === CC || 258 === CC || 259 === CC || 244 === CC || 248 === CC || 255 === CC || 354 === CC
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

#### 559. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11631-L11634` → after: `L11599-L11600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11599-L11600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11599-L11600) · [Before (L11631-L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11631-L11634)

```diff
- 
-       function DN(CC) {
-         return 169 === CC.kind ? CC.parent && 346 !== CC.parent.kind || RP(CC) : 220 === (zC = CC.kind) || 209 === zC || 264 === zC || 232 === zC || 176 === zC || 177 === zC || 267 === zC || 307 === zC || 282 === zC || 263 === zC || 219 === zC || 178 === zC || 274 === zC || 272 = … [truncated]
-         var zC
+       get themeClasses() {
+         return wo + " " + (this.state.facet(Uo) ? to : vo) + " " + this.state.facet(yo)
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11636-L11638` → after: `L11602-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11602-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11602-L11624) · [Before (L11636-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11636-L11638)

```diff
- 
-       function jN(CC) {
-         return aN(CC.kind)
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

#### 561. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11640-L11642` → after: `L11626-L11632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11626-L11632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11626-L11632) · [Before (L11640-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11640-L11642)

```diff
- 
-       function yN(CC) {
-         return tN(CC.kind)
+       showAnnouncements(pp) {
+         let ip = !0;
+         for (let cp of pp)
+           for (let pp of cp.effects)
+             if (pp.is(Co.announce)) {
+               ip && (this.announceDOM.textContent = ""), ip = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = pp.value
+             }
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11644-L11651` → after: `L11634-L11639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11634-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11634-L11639) · [Before (L11644-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11644-L11651)

```diff
- 
-       function LN(CC) {
-         const zC = CC.kind;
-         return tN(zC) || aN(zC) || function(CC) {
-           if (242 !== CC.kind) return !1;
-           if (void 0 !== CC.parent && (259 === CC.parent.kind || 300 === CC.parent.kind)) return !1;
-           return !vp(CC)
-         }(CC)
+       mountStyles() {
+         this.styleModules = this.state.facet(Ac);
+         let pp = this.state.facet(Co.cspNonce);
+         op.b.mount(this.root, this.styleModules.concat(uo).reverse(), pp ? {
+           nonce: pp
+         } : void 0)
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11653-L11656` → after: `L11641-L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11641-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11641-L11643) · [Before (L11653-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11653-L11656)

```diff
- 
-       function UN(CC) {
-         const zC = CC.kind;
-         return tN(zC) || aN(zC) || 242 === zC
+       readMeasured() {
+         if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
+         0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11658-L11661` → after: `L11645-L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11645-L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11645-L11652) · [Before (L11658-L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11658-L11661)

```diff
- 
-       function BN(CC) {
-         const zC = CC.kind;
-         return 284 === zC || 167 === zC || 80 === zC
+       requestMeasure(pp) {
+         if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), pp) {
+           if (this.measureRequests.indexOf(pp) > -1) return;
+           if (null != pp.key)
+             for (let ip = 0; ip < this.measureRequests.length; ip++)
+               if (this.measureRequests[ip].key === pp.key) return void(this.measureRequests[ip] = pp);
+           this.measureRequests.push(pp)
+         }
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11663-L11666` → after: `L11654-L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11654-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11654-L11656) · [Before (L11663-L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11663-L11666)

```diff
- 
-       function ON(CC) {
-         const zC = CC.kind;
-         return 110 === zC || 80 === zC || 212 === zC || 296 === zC
+       plugin(pp) {
+         let ip = this.pluginMap.get(pp);
+         return (void 0 === ip || ip && ip.plugin != pp) && this.pluginMap.set(pp, ip = this.plugins.find((ip => ip.plugin == pp)) || null), ip && ip.update(this).value
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11668-L11671` → after: `L11658-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11658-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11658-L11659) · [Before (L11668-L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11668-L11671)

```diff
- 
-       function kN(CC) {
-         const zC = CC.kind;
-         return 285 === zC || 295 === zC || 286 === zC || 12 === zC || 289 === zC
+       get documentTop() {
+         return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11673-L11676` → after: `L11661-L11665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11661-L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11661-L11665) · [Before (L11673-L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11673-L11676)

```diff
- 
-       function VN(CC) {
-         const zC = CC.kind;
-         return 292 === zC || 294 === zC
+       get documentPadding() {
+         return {
+           top: this.viewState.paddingTop,
+           bottom: this.viewState.paddingBottom
+         }
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11678-L11681` → after: `L11667-L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11667-L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11667-L11668) · [Before (L11678-L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11678-L11681)

```diff
- 
-       function CM(CC) {
-         const zC = CC.kind;
-         return 11 === zC || 295 === zC
+       get scaleX() {
+         return this.viewState.scaleX
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11683-L11686` → after: `L11670-L11671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11670-L11671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11670-L11671) · [Before (L11683-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11683-L11686)

```diff
- 
-       function zM(CC) {
-         const zC = CC.kind;
-         return 287 === zC || 286 === zC
+       get scaleY() {
+         return this.viewState.scaleY
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11688-L11691` → after: `L11673-L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11673-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11673-L11674) · [Before (L11688-L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11688-L11691)

```diff
- 
-       function ZM(CC) {
-         const zC = CC.kind;
-         return 287 === zC || 286 === zC || 290 === zC
+       elementAtHeight(pp) {
+         return this.readMeasured(), this.viewState.elementAtHeight(pp)
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11693-L11696` → after: `L11676-L11677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11676-L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11676-L11677) · [Before (L11693-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11693-L11696)

```diff
- 
-       function QM(CC) {
-         const zC = CC.kind;
-         return 297 === zC || 298 === zC
+       lineBlockAtHeight(pp) {
+         return this.readMeasured(), this.viewState.lineBlockAtHeight(pp)
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11698-L11700` → after: `L11679-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11679-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11679-L11680) · [Before (L11698-L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11698-L11700)

```diff
- 
-       function wM(CC) {
-         return CC.kind >= 310 && CC.kind <= 352
+       get viewportLineBlocks() {
+         return this.viewState.viewportLines
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11702-L11704` → after: `L11682-L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11682-L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11682-L11683) · [Before (L11702-L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11702-L11704)

```diff
- 
-       function bM(CC) {
-         return 321 === CC.kind || 320 === CC.kind || 322 === CC.kind || GM(CC) || nM(CC) || kE(CC) || VE(CC)
+       lineBlockAt(pp) {
+         return this.viewState.lineBlockAt(pp)
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11706-L11708` → after: `L11685-L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11685-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11685-L11686) · [Before (L11706-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11706-L11708)

```diff
- 
-       function nM(CC) {
-         return CC.kind >= 328 && CC.kind <= 352
+       get contentHeight() {
+         return this.viewState.contentHeight
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11710-L11712` → after: `L11688-L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11688-L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11688-L11689) · [Before (L11710-L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11710-L11712)

```diff
- 
-       function fM(CC) {
-         return 179 === CC.kind
+       moveByChar(pp, ip, cp) {
+         return zc(this, pp, Gc(this, pp, ip, cp))
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11714-L11716` → after: `L11691-L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11691-L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11691-L11699) · [Before (L11714-L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11714-L11716)

```diff
- 
-       function oM(CC) {
-         return 178 === CC.kind
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

#### 577. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11718-L11724` → after: `L11701-L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11701-L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11701-L11705) · [Before (L11718-L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11718-L11724)

```diff
- 
-       function qM(CC) {
-         if (!eG(CC)) return !1;
-         const {
-           jsDoc: zC
-         } = CC;
-         return !!zC && zC.length > 0
+       visualLineSide(pp, ip) {
+         let cp = this.bidiSpans(pp),
+           op = this.textDirectionAt(pp.from),
+           Ip = cp[ip ? cp.length - 1 : 0];
+         return Op.l.cursor(Ip.side(ip, op) + pp.from, Ip.forward(!ip, op) ? 1 : -1)
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11726-L11728` → after: `L11707-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11707-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11707-L11751) · [Before (L11726-L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11726-L11728)

```diff
- 
-       function FM(CC) {
-         return !!CC.type
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

#### 579. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11730-L11732` → after: `L11753-L11755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11753-L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11753-L11755) · [Before (L11730-L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11730-L11732)

```diff
- 
-       function WM(CC) {
-         return !!CC.initializer
+       domAtPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return this.docView.domAtPos(pp, ip)
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11734-L11746` → after: `L11757-L11759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11757-L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11757-L11759) · [Before (L11734-L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11734-L11746)

```diff
- 
-       function NM(CC) {
-         switch (CC.kind) {
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

#### 581. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11748-L11750` → after: `L11761-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11761-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11761-L11765) · [Before (L11748-L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11748-L11750)

```diff
- 
-       function MM(CC) {
-         return 292 === CC.kind || 294 === CC.kind || kW(CC)
+       posAtCoords(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this.readMeasured();
+         let cp = Kc(this, pp, ip);
+         return cp && cp.pos
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11752-L11754` → after: `L11767-L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11767-L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11767-L11769) · [Before (L11752-L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11752-L11754)

```diff
- 
-       function gM(CC) {
-         return 184 === CC.kind || 234 === CC.kind
+       posAndSideAtCoords(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         return this.readMeasured(), Kc(this, pp, ip)
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11756-L11766` → after: `L11771-L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11771-L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11771-L11778) · [Before (L11756-L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11756-L11766)

```diff
-       var SM = 1073741823;
- 
-       function pM(CC) {
-         let zC = SM;
-         for (const ZC of CC) {
-           if (!ZC.length) continue;
-           let CC = 0;
-           for (; CC < ZC.length && CC < zC && Wo(ZC.charCodeAt(CC)); CC++);
-           if (CC < zC && (zC = CC), 0 === zC) return 0
-         }
-         return zC === SM ? void 0 : zC
+       coordsAtPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         this.readMeasured();
+         let cp = this.docView.coordsAt(pp, ip);
+         if (!cp || cp.left == cp.right) return cp;
+         let Op = this.state.doc.lineAt(pp),
+           op = this.bidiSpans(Op);
+         return zp(cp, op[ei.find(op, pp - Op.from, -1, ip)].dir == Ai.LTR == ip > 0)
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11768-L11770` → after: `L11780-L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11780-L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11780-L11781) · [Before (L11768-L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11768-L11770)

```diff
- 
-       function PM(CC) {
-         return 11 === CC.kind || 15 === CC.kind
+       coordsForChar(pp) {
+         return this.readMeasured(), this.docView.coordsForChar(pp)
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11772-L11774` → after: `L11783-L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11783-L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11783-L11784) · [Before (L11772-L11774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11772-L11774)

```diff
- 
-       function GM(CC) {
-         return 325 === CC.kind || 326 === CC.kind || 327 === CC.kind
+       get defaultCharacterWidth() {
+         return this.viewState.heightOracle.charWidth
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11776-L11779` → after: `L11786-L11787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11786-L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11786-L11787) · [Before (L11776-L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11776-L11779)

```diff
- 
-       function RM(CC) {
-         const zC = xz(CC.parameters);
-         return !!zC && AM(zC)
+       get defaultLineHeight() {
+         return this.viewState.heightOracle.lineHeight
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11781-L11784` → after: `L11789-L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11789-L11790) · [Before (L11781-L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11781-L11784)

```diff
- 
-       function AM(CC) {
-         const zC = Ml(CC) ? CC.typeExpression && CC.typeExpression.type : CC.type;
-         return void 0 !== CC.dotDotDotToken || !!zC && 319 === zC.kind
+       get textDirection() {
+         return this.viewState.defaultTextDirection
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11786-L11788` → after: `L11792-L11793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11792-L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11792-L11793) · [Before (L11786-L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11786-L11788)

```diff
- 
-       function xM(CC, zC) {
-         return zC.text.substring(CC.pos, CC.end).includes("@internal")
+       textDirectionAt(pp) {
+         return !this.state.facet(ai) || pp < this.viewport.from || pp > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(pp))
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11790-L11801` → after: `L11795-L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11795-L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11795-L11796) · [Before (L11790-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11790-L11801)

```diff
- 
-       function JM(CC, zC) {
-         zC ?? (zC = Zg(CC));
-         const ZC = Tq(CC);
-         if (ZC && 170 === ZC.kind) {
-           const QC = ZC.parent.parameters.indexOf(ZC),
-             wC = QC > 0 ? ZC.parent.parameters[QC - 1] : void 0,
-             bC = zC.text,
-             nC = wC ? BC(co(bC, Ao(bC, wC.end + 1, !1, !0)), Xo(bC, CC.pos)) : co(bC, Ao(bC, CC.pos, !1, !0));
-           return LC(nC) && xM(Jz(nC), zC)
-         }
-         return !!NC(ZC && wp(ZC, zC), (CC => xM(CC, zC)))
+       get lineWrapping() {
+         return this.viewState.heightOracle.lineWrapping
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11803-L11813` → after: `L11798-L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11798-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11798-L11805) · [Before (L11803-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11803-L11813)

```diff
-       var IM = [],
-         iM = "tslib",
-         vM = 160,
-         eM = 1e6,
-         hM = 500;
- 
-       function KM(CC, zC) {
-         const ZC = CC.declarations;
-         if (ZC)
-           for (const QC of ZC)
-             if (QC.kind === zC) return QC
+       bidiSpans(pp) {
+         if (pp.length > Eo) return qi(pp.length);
+         let ip, cp = this.textDirectionAt(pp.from);
+         for (let op of this.bidiCache)
+           if (op.from == pp.from && op.dir == cp && (op.fresh || ui(op.isolates, ip = Lc(this, pp)))) return op.order;
+         ip || (ip = Lc(this, pp));
+         let Op = Ri(pp.text, cp, ip);
+         return this.bidiCache.push(new Qo(pp.from, pp.to, cp, ip, !0, Op)), Op
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11815-L11817` → after: `L11807-L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11807-L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11807-L11809) · [Before (L11815-L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11815-L11817)

```diff
- 
-       function YM(CC, zC) {
-         return hC(CC.declarations || qC, (CC => CC.kind === zC))
+       get hasFocus() {
+         var pp;
+         return (this.dom.ownerDocument.hasFocus() || kp.safari && (null === (pp = this.inputState) || void 0 === pp ? void 0 : pp.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11819-L11824` → after: `L11811-L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11811-L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11811-L11814) · [Before (L11819-L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11819-L11824)

```diff
- 
-       function dM(CC) {
-         const zC = new Map;
-         if (CC)
-           for (const ZC of CC) zC.set(ZC.escapedName, ZC);
-         return zC
+       focus() {
+         this.observer.ignore((() => {
+           oi(this.contentDOM), this.docView.updateSelection()
+         }))
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11826-L11828` → after: `L11816-L11817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11816-L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11816-L11817) · [Before (L11826-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11826-L11828)

```diff
- 
-       function mM(CC) {
-         return 0 !== (33554432 & CC.flags)
+       setRoot(pp) {
+         this._root != pp && (this._root = pp, this.observer.setWindow((9 == pp.nodeType ? pp : pp.ownerDocument).defaultView || window), this.mountStyles())
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11830-L11832` → after: `L11819-L11822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11819-L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11819-L11822) · [Before (L11830-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11830-L11832)

```diff
- 
-       function HM(CC) {
-         return !!(1536 & CC.flags) && 34 === CC.escapedName.charCodeAt(0)
+       destroy() {
+         this.root.activeElement == this.contentDOM && this.contentDOM.blur();
+         for (let pp of this.plugins) pp.destroy(this);
+         this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11834-L11869` → after: `L11824-L11827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11824-L11827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11824-L11827) · [Before (L11834-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11834-L11869)

```diff
-       var EM = function() {
-         var CC = "";
-         const zC = zC => CC += zC;
-         return {
-           getText: () => CC,
-           write: zC,
-           rawWrite: zC,
-           writeKeyword: zC,
-           writeOperator: zC,
-           writePunctuation: zC,
-           writeSpace: zC,
-           writeStringLiteral: zC,
-           writeLiteral: zC,
-           writeParameter: zC,
-           writeProperty: zC,
-           writeSymbol: (CC, ZC) => zC(CC),
- ... (20 more removed lines; see GitHub link above)
+       static scrollIntoView(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         var cp, op, Ip, Sp;
+         return Gi.of(new gi("number" == typeof pp ? Op.l.cursor(pp) : pp, null !== (cp = ip.y) && void 0 !== cp ? cp : "nearest", null !== (op = ip.x) && void 0 !== op ? op : "nearest", null !== (Ip = ip.yMargin) && void 0 !== Ip ? Ip : 5, null !== (Sp = ip.xMargin) && void 0 !== … [truncated]
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11871-L11873` → after: `L11829-L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11829-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11829-L11834) · [Before (L11871-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11871-L11873)

```diff
- 
-       function XM(CC, zC) {
-         return cM(CC, zC, Ju)
+       scrollSnapshot() {
+         let {
+           scrollTop: pp,
+           scrollLeft: ip
+         } = this.scrollDOM, cp = this.viewState.scrollAnchorAt(pp);
+         return Gi.of(new gi(Op.l.cursor(cp.from), "start", "start", cp.top - pp, ip, !0))
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11875-L11877` → after: `L11836-L11837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11836-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11836-L11837) · [Before (L11875-L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11875-L11877)

```diff
- 
-       function cM(CC, zC, ZC) {
-         return CC !== zC && ZC.some((ZC => !ie(Cv(CC, ZC), Cv(zC, ZC))))
+       setTabFocusMode(pp) {
+         null == pp ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof pp ? this.inputState.tabFocusMode = pp ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + pp)
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11879-L11887` → after: `L11839-L11842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11839-L11842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11839-L11842) · [Before (L11879-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11879-L11887)

```diff
- 
-       function uM(CC, zC) {
-         for (;;) {
-           const ZC = zC(CC);
-           if ("quit" === ZC) return;
-           if (void 0 !== ZC) return ZC;
-           if (EE(CC)) return;
-           CC = CC.parent
-         }
+       static domEventHandlers(pp) {
+         return Vi.define((() => ({})), {
+           eventHandlers: pp
+         })
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11889-L11895` → after: `L11844-L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11844-L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11844-L11847) · [Before (L11889-L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11889-L11895)

```diff
- 
-       function rM(CC, zC) {
-         const ZC = CC.entries();
-         for (const [QC, wC] of ZC) {
-           const CC = zC(wC, QC);
-           if (CC) return CC
-         }
+       static domEventObservers(pp) {
+         return Vi.define((() => ({})), {
+           eventObservers: pp
+         })
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11897-L11903` → after: `L11849-L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11849-L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11849-L11852) · [Before (L11897-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11897-L11903)

```diff
- 
-       function sM(CC, zC) {
-         const ZC = CC.keys();
-         for (const QC of ZC) {
-           const CC = zC(QC);
-           if (CC) return CC
-         }
+       static theme(pp, ip) {
+         let cp = op.b.newName(),
+           Op = [yo.of(cp), Ac.of(eo(`.${cp}`, pp))];
+         return ip && ip.dark && Op.push(Uo.of(!0)), Op
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11905-L11909` → after: `L11854-L11855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11854-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11854-L11855) · [Before (L11905-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11905-L11909)

```diff
- 
-       function TM(CC, zC) {
-         CC.forEach(((CC, ZC) => {
-           zC.set(ZC, CC)
-         }))
+       static baseTheme(pp) {
+         return Op.u.lowest(Ac.of(eo("." + wo, pp, Ho)))
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11911-L11917` → after: `L11857-L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11857-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11857-L11874) · [Before (L11911-L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11911-L11917)

```diff
- 
-       function aM(CC) {
-         const zC = EM.getText();
-         try {
-           return CC(EM), EM.getText()
-         } finally {
-           EM.clear(), EM.writeKeyword(zC)
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

#### 603. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11920-L11922` → after: `L11877-L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11877-L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11877-L11886) · [Before (L11920-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11920-L11922)

```diff
- 
-       function tM(CC) {
-         return CC.end - CC.pos
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

#### 604. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11924-L11926` → after: `L11888-L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11888-L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11888-L11896) · [Before (L11924-L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11924-L11926)

```diff
- 
-       function DM(CC, zC) {
-         return CC.path === zC.path && !CC.prepend === !zC.prepend && !CC.circular === !zC.circular
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

#### 605. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11928-L11931` → after: `L11898-L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L11898-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L11898-L12036) · [Before (L11928-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11928-L11931)

```diff
- 
-       function jM(CC, zC) {
-         return CC === zC || CC.resolvedModule === zC.resolvedModule || !!CC.resolvedModule && !!zC.resolvedModule && CC.resolvedModule.isExternalLibraryImport === zC.resolvedModule.isExternalLibraryImport && CC.resolvedModule.extension === zC.resolvedModule.extension && CC.resolv … [truncated]
-         var ZC, QC
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

#### 606. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11933-L11935` → after: `L12038-L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12038-L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12038-L12040) · [Before (L11933-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11933-L11935)

```diff
- 
-       function yM(CC) {
-         return CC.resolvedModule
+       draw() {
+         let pp = document.createElement("div");
+         return pp.className = this.className, this.adjust(pp), pp
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11937-L11939` → after: `L12042-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12042-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12042-L12043) · [Before (L11937-L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11937-L11939)

```diff
- 
-       function LM(CC) {
-         return CC.resolvedTypeReferenceDirective
+       update(pp, ip) {
+         return ip.className == this.className && (this.adjust(pp), !0)
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11941-L11951` → after: `L12045-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12045-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12045-L12046) · [Before (L11941-L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11941-L11951)

```diff
- 
-       function UM(CC, zC, ZC, QC, wC) {
-         var bC;
-         const nC = null == (bC = zC.getResolvedModule(CC, ZC, QC)) ? void 0 : bC.alternateResult,
-           fC = nC && (2 === vi(zC.getCompilerOptions()) ? [df.There_are_types_at_0_but_this_result_could_not_be_resolved_under_your_current_moduleResolution_setting_Consider_updating_to_node16_nodenext_or_bundler, [nC]] : [df.There_are_types_at_0_but_this_result_could_not_be_reso … [truncated]
-           oC = fC ? Qi(void 0, fC[0], ...fC[1]) : zC.typesPackageExists(wC) ? Qi(void 0, df.If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Sla … [truncated]
-         return oC && (oC.repopulateInfo = () => ({
-           moduleReference: ZC,
-           mode: QC,
-           packageName: wC === ZC ? void 0 : wC
-         })), oC
+       adjust(pp) {
+         pp.style.left = this.left + "px", pp.style.top = this.top + "px", null != this.width && (pp.style.width = this.width + "px"), pp.style.height = this.height + "px"
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11953-L11959` → after: `L12048-L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12048-L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12048-L12049) · [Before (L11953-L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11953-L11959)

```diff
- 
-       function BM(CC) {
-         const zC = We(CC.fileName),
-           ZC = CC.packageJsonScope,
-           QC = ".ts" === zC ? ".mts" : ".js" === zC ? ".mjs" : void 0,
-           wC = ZC && !ZC.contents.packageJsonContent.type ? QC ? Qi(void 0, df.To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Colon_module_to_1, QC, zf(ZC.packageDirectory, "package.json")) : Qi(void 0, df.To_convert_this_file_to … [truncated]
-         return wC.repopulateInfo = () => !0, wC
+       eq(pp) {
+         return this.left == pp.left && this.top == pp.top && this.width == pp.width && this.height == pp.height && this.className == pp.className
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11961-L11983` → after: `L12051-L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12051-L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12051-L12056) · [Before (L11961-L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11961-L11983)

```diff
- 
-       function OM(CC) {
-         let {
-           name: zC,
-           subModuleName: ZC
-         } = CC;
-         return ZC ? `${zC}/${ZC}` : zC
-       }
- 
-       function kM(CC) {
-         return `${OM(CC)}@${CC.version}${CC.peerDependencies??""}`
-       }
- 
-       function VM(CC, zC) {
-         return CC === zC || CC.resolvedTypeReferenceDirective === zC.resolvedTypeReferenceDirective || !!CC.resolvedTypeReferenceDirective && !!zC.resolvedTypeReferenceDirective && CC.resolvedTypeReferenceDirective.resolvedFileName === zC.resolvedTypeReferenceDirective.resolvedFi … [truncated]
-       }
- ... (7 more removed lines; see GitHub link above)
+       static forRange(pp, ip, cp) {
+         if (cp.empty) {
+           let Op = pp.coordsAtPos(cp.head, cp.assoc || 1);
+           if (!Op) return [];
+           let op = Zo(pp);
+           return [new ro(ip, Op.left - op.left, Op.top - op.top, null, Op.bottom - Op.top)]
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L11985-L11991` → after: `L12058-L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12058-L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12058-L12081) · [Before (L11985-L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L11985-L11991)

```diff
-         return !1
-       }
- 
-       function zg(CC) {
-         return function(CC) {
-           if (!(2097152 & CC.flags)) {
-             (0 !== (262144 & CC.flags) || mc(CC, zg)) && (CC.flags |= 1048576), CC.flags |= 2097152
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

#### 612. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12009-L12047` → after: `L12084-L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12084-L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12084-L12086) · [Before (L12009-L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12009-L12047)

```diff
-       function bg(CC) {
-         switch (CC.kind) {
-           case 242:
-           case 270:
-           case 249:
-           case 250:
-           case 251:
-             return !0
-         }
-         return !1
-       }
- 
-       function ng(CC, zC) {
-         return PQ.assert(CC >= 0), no(zC)[CC]
-       }
- 
- ... (23 more removed lines; see GitHub link above)
+           function vp(pp, cp, Op, op) {
+             return new ro(ip, pp - Lp.left, cp - Lp.top, Math.max(0, Op - pp), op - cp)
+           }
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12049-L12051` → after: `L12088-L12096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12088-L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12088-L12096) · [Before (L12049-L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12049-L12051)

```diff
-       function Fg(CC) {
-         return void 0 === CC || CC.pos === CC.end && CC.pos >= 0 && 1 !== CC.kind
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

#### 614. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12053-L12055` → after: `L12098-L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12098-L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12098-L12101) · [Before (L12053-L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12053-L12055)

```diff
-       function Wg(CC) {
-         return !Fg(CC)
-       }
+           function Hp(ip, cp, Op) {
+             let op = 1e9,
+               Sp = -1e9,
+               xp = [];
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12057-L12059` → after: `L12103-L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12103-L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12103-L12127) · [Before (L12057-L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12057-L12059)

```diff
-       function Ng(CC, zC) {
-         return td(CC) ? zC === CC.expression : Od(CC) ? zC === CC.modifiers : yd(CC) ? zC === CC.initializer : Ld(CC) ? zC === CC.questionToken && jW(CC) : YE(CC) ? zC === CC.modifiers || zC === CC.questionToken || zC === CC.exclamationToken || Mg(CC.modifiers, zC, UW) : dE(CC) ? … [truncated]
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

#### 616. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12061-L12062` → after: `L12129-L12137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12129-L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12129-L12137) · [Before (L12061-L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12061-L12062)

```diff
-       function Mg(CC, zC, ZC) {
-         return !(!CC || ZZ(zC) || !ZC(zC)) && iC(CC, zC)
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

#### 617. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12065-L12069` → after: `L12141-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12141-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12141-L12145) · [Before (L12065-L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12065-L12069)

```diff
-       function gg(CC, zC, ZC) {
-         if (void 0 === zC || 0 === zC.length) return CC;
-         let QC = 0;
-         for (; QC < CC.length && ZC(CC[QC]); ++QC);
-         return CC.splice(QC, 0, ...zC), CC
+     function Zo(pp) {
+       let ip = pp.scrollDOM.getBoundingClientRect();
+       return {
+         left: (pp.textDirection == Ai.LTR ? ip.left : ip.right - pp.scrollDOM.clientWidth * pp.scaleX) - pp.scrollDOM.scrollLeft * pp.scaleX,
+         top: ip.top - pp.scrollDOM.scrollTop * pp.scaleY
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12072-L12076` → after: `L12149-L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12149-L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12149-L12164) · [Before (L12072-L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12072-L12076)

```diff
-       function Sg(CC, zC, ZC) {
-         if (void 0 === zC) return CC;
-         let QC = 0;
-         for (; QC < CC.length && ZC(CC[QC]); ++QC);
-         return CC.splice(QC, 0, zC), CC
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

#### 619. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12078-L12080` → after: `L12166-L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12166-L12172) · [Before (L12078-L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12078-L12080)

```diff
- 
-       function pg(CC) {
-         return VS(CC) || !!(2097152 & cg(CC))
+     }
+     class so {
+       constructor(pp, ip) {
+         this.view = pp, this.layer = ip, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
+           read: this.measure.bind(this),
+           write: this.draw.bind(this)
+         }, this.dom = pp.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ip.above && this.dom.classList.add("cm-layer-above"), ip.class && this.dom.classList.add(ip.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this. … [truncated]
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12082-L12084` → after: `L12174-L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12174-L12175) · [Before (L12082-L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12082-L12084)

```diff
- 
-       function Pg(CC, zC) {
-         return gg(CC, zC, VS)
+       update(pp) {
+         pp.startState.facet(Ko) != pp.state.facet(Ko) && this.setOrder(pp.state), (this.layer.update(pp, this.dom) || pp.geometryChanged) && (this.scale(), pp.view.requestMeasure(this.measureReq))
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12086-L12088` → after: `L12177-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12177-L12178) · [Before (L12086-L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12086-L12088)

```diff
- 
-       function Gg(CC, zC) {
-         return gg(CC, zC, pg)
+       docViewUpdate(pp) {
+         !1 !== this.layer.updateOnDocViewUpdate && pp.requestMeasure(this.measureReq)
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12090-L12092` → after: `L12180-L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12180-L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12180-L12184) · [Before (L12090-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12090-L12092)

```diff
- 
-       function Rg(CC, zC) {
-         return Sg(CC, zC, VS)
+       setOrder(pp) {
+         let ip = 0,
+           cp = pp.facet(Ko);
+         for (; ip < cp.length && cp[ip] != this.layer;) ip++;
+         this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ip)
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12094-L12096` → after: `L12186-L12187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12186-L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12186-L12187) · [Before (L12094-L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12094-L12096)

```diff
- 
-       function Ag(CC, zC) {
-         return Sg(CC, zC, pg)
+       measure() {
+         return this.layer.markers(this.view)
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12098-L12102` → after: `L12189-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12189-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12189-L12208) · [Before (L12098-L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12098-L12102)

```diff
- 
-       function xg(CC, zC, ZC) {
-         if (47 === CC.charCodeAt(zC + 1) && zC + 2 < ZC && 47 === CC.charCodeAt(zC + 2)) {
-           const QC = CC.substring(zC, ZC);
-           return !!(np.test(QC) || qp.test(QC) || Fp.test(QC) || fp.test(QC) || op.test(QC) || Wp.test(QC))
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

#### 625. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12106-L12108` → after: `L12211-L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12211-L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12211-L12212) · [Before (L12106-L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12106-L12108)

```diff
- 
-       function Jg(CC, zC) {
-         return 42 === CC.charCodeAt(zC + 1) && 33 === CC.charCodeAt(zC + 2)
+       destroy() {
+         this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12111-L12121` → after: `L12217-L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12217-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12217-L12359) · [Before (L12111-L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12111-L12121)

```diff
-       function Ig(CC, zC) {
-         const ZC = new Map(zC.map((zC => [`${Fo(CC,zC.range.end).line}`, zC]))),
-           QC = new Map;
-         return {
-           getUnusedExpectations: function() {
-             return uz(ZC.entries()).filter((CC => {
-               let [zC, ZC] = CC;
-               return 0 === ZC.type && !QC.get(zC)
-             })).map((CC => {
-               let [zC, ZC] = CC;
-               return ZC
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

#### 627. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12124-L12126` → after: `L12362-L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12362-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12362-L12369) · [Before (L12124-L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12124-L12126)

```diff
-           markUsed: function(CC) {
-             if (!ZC.has(`${CC}`)) return !1;
-             return QC.set(`${CC}`, !0), !0
+           dragleave(pp) {
+             pp.target != this.view.contentDOM && this.view.contentDOM.contains(pp.relatedTarget) || this.setDropPos(null)
+           },
+           dragend() {
+             this.setDropPos(null)
+           },
+           drop() {
+             this.setDropPos(null)
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12129` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12372) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12129)

```diff
-       }
+       });
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12131-L12138` → after: `L12374-L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12374-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12374-L12401) · [Before (L12131-L12138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12131-L12138)

```diff
-       function ig(CC, zC, ZC) {
-         if (Fg(CC)) return CC.pos;
-         if (wM(CC) || 12 === CC.kind) return Ao((zC ?? Zg(CC)).text, CC.pos, !1, !0);
-         if (ZC && qM(CC)) return ig(CC.jsDoc[0], zC);
-         if (353 === CC.kind) {
-           zC ?? (zC = Zg(CC));
-           const QC = Pz(Kl(CC, zC));
-           if (QC) return ig(QC, zC, ZC)
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

#### 630. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12140` → after: `L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12403) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12140)

```diff
-         return Ao((zC ?? Zg(CC)).text, CC.pos, !1, !1, JP(CC))
+         this.boundary = op, this.maxLength = Ip
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12142-L12145` → after: `L12405-L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12405-L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12405-L12427) · [Before (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12142-L12145)

```diff
- 
-       function vg(CC, zC) {
-         const ZC = !Fg(CC) && Qc(CC) ? xC(CC.modifiers, jd) : void 0;
-         return ZC ? Ao((zC || Zg(CC)).text, ZC.end) : ig(CC, zC)
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

#### 632. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12147-L12150` → after: `L12429-L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12429-L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12429-L12470) · [Before (L12147-L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12147-L12150)

```diff
- 
-       function eg(CC, zC) {
-         const ZC = !Fg(CC) && Qc(CC) && CC.modifiers ? Jz(CC.modifiers) : void 0;
-         return ZC ? Ao((zC || Zg(CC)).text, ZC.end) : ig(CC, zC)
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

#### 633. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12152-L12155` → after: `L12472-L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12472-L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12472-L12513) · [Before (L12152-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12152-L12155)

```diff
- 
-       function hg(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         return Hg(CC.text, zC, ZC)
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

#### 634. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12158-L12159` → after: `L12517-L12569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12517-L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12517-L12569) · [Before (L12158-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12158-L12159)

```diff
-       function Kg(CC) {
-         return !!(bE(CC) && CC.exportClause && zE(CC.exportClause) && mg(CC.exportClause.name))
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

#### 635. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12161-L12163` → after: `L12571-L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12571-L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12571-L12572) · [Before (L12161-L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12161-L12163)

```diff
- 
-       function Yg(CC) {
-         return 11 === CC.kind ? CC.text : tq(CC.escapedText)
+       ignoreEvent() {
+         return !1
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12165-L12167` → after: `L12574-L12577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12574-L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12574-L12577) · [Before (L12165-L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12165-L12167)

```diff
- 
-       function dg(CC) {
-         return 11 === CC.kind ? aq(CC.text) : CC.escapedText
+     }
+     class eI extends Ep {
+       constructor(pp) {
+         super(), this.width = pp
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12169-L12171` → after: `L12579-L12580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12579-L12580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12579-L12580) · [Before (L12169-L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12169-L12171)

```diff
- 
-       function mg(CC) {
-         return "default" === (11 === CC.kind ? CC.text : CC.escapedText)
+       eq(pp) {
+         return pp.width == this.width
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12173-L12180` → after: `L12582-L12584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12582-L12584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12582-L12584) · [Before (L12173-L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12173-L12180)

```diff
- 
-       function Hg(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (Fg(zC)) return "";
-         let QC = CC.substring(ZC ? zC.pos : Ao(CC, zC.pos), zC.end);
-         return function(CC) {
-           return !!rq(CC, XE)
-         }(zC) && (QC = QC.split(/\r\n|\n|\r/).map((CC => CC.replace(/^\s*\*/, "").trimStart())).join("\n")), QC
+       toDOM() {
+         let pp = document.createElement("span");
+         return pp.textContent = "\t", pp.className = "cm-tab", pp.style.width = this.width + "px", pp
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12182-L12185` → after: `L12586-L12587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12586-L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12586-L12587) · [Before (L12182-L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12182-L12185)

```diff
- 
-       function Eg(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return hg(Zg(CC), CC, zC)
+       ignoreEvent() {
+         return !1
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12188-L12189` → after: `L12591-L12635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12591-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12591-L12635) · [Before (L12188-L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12188-L12189)

```diff
-       function lg(CC) {
-         return CC.pos
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

#### 641. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12191-L12193` → after: `L12637-L12638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12637-L12638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12637-L12638) · [Before (L12191-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12191-L12193)

```diff
- 
-       function Xg(CC, zC) {
-         return hz(CC, zC, lg, iZ)
+       ignoreEvent() {
+         return !1
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12196-L12199` → after: `L12642-L12741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12642-L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12642-L12741) · [Before (L12196-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12196-L12199)

```diff
-       function cg(CC) {
-         const zC = CC.emitNode;
-         return zC && zC.flags || 0
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

#### 643. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12201-L12400` → after: `L12743-L12762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12743-L12762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12743-L12762) · [Before (L12201-L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12201-L12400)

```diff
-       function ug(CC) {
-         const zC = CC.emitNode;
-         return zC && zC.internalFlags || 0
-       }
-       var rg = PZ((() => new Map(Object.entries({
-           Array: new Map(Object.entries({
-             es2015: ["find", "findIndex", "fill", "copyWithin", "entries", "keys", "values"],
-             es2016: ["includes"],
-             es2019: ["flat", "flatMap"],
-             es2022: ["at"],
-             es2023: ["findLastIndex", "findLast", "toReversed", "toSorted", "toSpliced", "with"]
-           })),
-           Iterator: new Map(Object.entries({
-             es2015: qC
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

#### 644. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12409-L12423` → after: `L12765-L12799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12765-L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12765-L12799) · [Before (L12409-L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12409-L12423)

```diff
-           case 15:
-           case 16:
-           case 17:
-           case 18: {
-             const zC = 1 & ZC || 16777216 & cg(CC) ? pA : GA,
-               QC = CC.rawText ?? fA(zC(CC.text, 96));
-             switch (CC.kind) {
-               case 15:
-                 return "`" + QC + "`";
-               case 16:
-                 return "`" + QC + "${";
-               case 17:
-                 return "}" + QC + "${";
-               case 18:
-                 return "}" + QC + "`"
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

#### 645. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12433-L12441` → after: `L12803-L12804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12803-L12804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12803-L12804) · [Before (L12433-L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12433-L12441)

```diff
-         return PQ.fail(`Literal kind '${CC.kind}' not accounted for.`)
-       }
- 
-       function ag(CC) {
-         return wZ(CC) ? `"${pA(CC)}"` : "" + CC
-       }
- 
-       function tg(CC) {
-         return Ln(CC).replace(/^(\d)/, "_$1").replace(/\W/g, "_")
+         for (let xp of this.tooltipViews) Ip.indexOf(xp) < 0 && (this.removeTooltipView(xp), null === (cp = xp.destroy) || void 0 === cp || cp.call(xp));
+         return ip && (Sp.forEach(((pp, cp) => ip[cp] = pp)), ip.length = Sp.length), this.input = Op, this.tooltips = op, this.tooltipViews = Ip, !0
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12444-L12450` → after: `L12808-L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12808-L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L12808-L12814) · [Before (L12444-L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12444-L12450)

```diff
-       function Dg(CC) {
-         return 0 !== (7 & Eq(CC)) || jg(CC)
-       }
- 
-       function jg(CC) {
-         const zC = yR(CC);
-         return 261 === zC.kind && 300 === zC.parent.kind
+     function NI(pp) {
+       let ip = pp.dom.ownerDocument.documentElement;
+       return {
+         top: 0,
+         left: 0,
+         bottom: ip.clientHeight,
+         right: ip.clientWidth
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12453-L12454` → after: `L13006-L13084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13006-L13084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13006-L13084) · [Before (L12453-L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12453-L12454)

```diff
-       function yg(CC) {
-         return TH(CC) && (11 === CC.name.kind || kg(CC))
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

#### 648. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12456-L12458` → after: `L13086-L13087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13086-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13086-L13087) · [Before (L12456-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12456-L12458)

```diff
- 
-       function Lg(CC) {
-         return TH(CC) && 11 === CC.name.kind
+       constructor(pp) {
+         this.view = pp, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new BI(pp, gI, ((pp, ip) => this.createHostedView(pp, ip)), (pp => pp.dom.remove()))
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12460-L12462` → after: `L13089-L13091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13089-L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13089-L13091) · [Before (L12460-L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12460-L12462)

```diff
- 
-       function Ug(CC) {
-         return TH(CC) && fd(CC.name)
+       createHostedView(pp, ip) {
+         let cp = pp.create(this.view);
+         return cp.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(cp.dom, ip ? ip.dom.nextSibling : this.dom.firstChild), this.mounted && cp.mount && cp.mount(this.view), cp
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12464-L12467` → after: `L13093-L13095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13093-L13095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13093-L13095) · [Before (L12464-L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12464-L12467)

```diff
- 
-       function Bg(CC) {
-         return !!(zC = CC.valueDeclaration) && 268 === zC.kind && !zC.body;
-         var zC
+       mount(pp) {
+         for (let ip of this.manager.tooltipViews) ip.mount && ip.mount(pp);
+         this.mounted = !0
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12469-L12471` → after: `L13097-L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13097-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13097-L13098) · [Before (L12469-L12471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12469-L12471)

```diff
- 
-       function Og(CC) {
-         return 308 === CC.kind || 268 === CC.kind || XW(CC)
+       positioned(pp) {
+         for (let ip of this.manager.tooltipViews) ip.positioned && ip.positioned(pp)
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12473-L12475` → after: `L13100-L13101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13100-L13101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13100-L13101) · [Before (L12473-L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12473-L12475)

```diff
- 
-       function kg(CC) {
-         return !!(2048 & CC.flags)
+       update(pp) {
+         this.manager.update(pp)
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12477-L12479` → after: `L13103-L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13103-L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13103-L13105) · [Before (L12477-L12479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12477-L12479)

```diff
- 
-       function Vg(CC) {
-         return yg(CC) && CS(CC)
+       destroy() {
+         var pp;
+         for (let ip of this.manager.tooltipViews) null === (pp = ip.destroy) || void 0 === pp || pp.call(ip)
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12481-L12487` → after: `L13107-L13113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13107-L13113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13107-L13113) · [Before (L12481-L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12481-L12487)

```diff
- 
-       function CS(CC) {
-         switch (CC.parent.kind) {
-           case 308:
-             return rc(CC.parent);
-           case 269:
-             return yg(CC.parent.parent) && EE(CC.parent.parent.parent) && !rc(CC.parent.parent.parent)
+       passProp(pp) {
+         let ip;
+         for (let cp of this.manager.tooltipViews) {
+           let Op = cp[pp];
+           if (void 0 !== Op)
+             if (void 0 === ip) ip = Op;
+             else if (ip !== Op) return
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12489` → after: `L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13115) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12489)

```diff
-         return !1
+         return ip
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12491-L12494` → after: `L13117-L13118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13117-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13117-L13118) · [Before (L12491-L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12491-L12494)

```diff
- 
-       function zS(CC) {
-         var zC;
-         return null == (zC = CC.declarations) ? void 0 : zC.find((CC => !Vg(CC) && !(TH(CC) && kg(CC))))
+       get offset() {
+         return this.passProp("offset")
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12496-L12499` → after: `L13120-L13121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13120-L13121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13120-L13121) · [Before (L12496-L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12496-L12499)

```diff
- 
-       function ZS(CC, zC) {
-         return rc(CC) || (1 === (ZC = ii(zC)) || 100 <= ZC && ZC <= 199) && !!CC.commonJsModuleIndicator;
-         var ZC
+       get getCoords() {
+         return this.passProp("getCoords")
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12501-L12512` → after: `L13123-L13124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13123-L13124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13123-L13124) · [Before (L12501-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12501-L12512)

```diff
- 
-       function QS(CC, zC) {
-         switch (CC.scriptKind) {
-           case 1:
-           case 3:
-           case 2:
-           case 4:
-             break;
-           default:
-             return !1
-         }
-         return !CC.isDeclarationFile && (!!Li(zC, "alwaysStrict") || (!!Ol(CC.statements) || !(!rc(CC) && !Ki(zC))))
+       get overlap() {
+         return this.passProp("overlap")
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12514-L12516` → after: `L13126-L13127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13126-L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13126-L13127) · [Before (L12514-L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12514-L12516)

```diff
- 
-       function wS(CC) {
-         return !!(33554432 & CC.flags) || vx(CC, 128)
+       get resize() {
+         return this.passProp("resize")
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12518-L12541` → after: `L13129-L13192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13129-L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13129-L13192) · [Before (L12518-L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12518-L12541)

```diff
- 
-       function bS(CC, zC) {
-         switch (CC.kind) {
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

#### 661. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12543-L12552` → after: `L13194-L13197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13194-L13197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13194-L13197) · [Before (L12543-L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12543-L12552)

```diff
- 
-       function nS(CC) {
-         switch (PQ.type(CC), CC.kind) {
-           case 339:
-           case 347:
-           case 324:
-             return !0;
-           default:
-             return fS(CC)
-         }
+       get tooltip() {
+         let pp = this.view.plugin(bI),
+           ip = pp ? pp.manager.tooltips.findIndex((pp => pp.create == GI.create)) : -1;
+         return ip > -1 ? pp.manager.tooltipViews[ip] : null
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12554-L12578` → after: `L13199-L13238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13199-L13238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13199-L13238) · [Before (L12554-L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12554-L12578)

```diff
- 
-       function fS(CC) {
-         switch (PQ.type(CC), CC.kind) {
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

#### 663. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12581-L12588` → after: `L13241-L13252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13241-L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13241-L13252) · [Before (L12581-L12588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12581-L12588)

```diff
- 
-       function oS(CC) {
-         switch (CC.kind) {
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

#### 664. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12591-L12593` → after: `L13255-L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13255-L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13255-L13261) · [Before (L12591-L12593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12591-L12593)

```diff
- 
-       function qS(CC) {
-         return oS(CC) || eP(CC)
+       watchTooltipLeave(pp) {
+         let ip = cp => {
+           pp.removeEventListener("mouseleave", ip), this.active.length && !this.view.dom.contains(cp.relatedTarget) && this.view.dispatch({
+             effects: this.setHover.of([])
+           })
+         };
+         pp.addEventListener("mouseleave", ip)
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12595-L12597` → after: `L13263-L13264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13263-L13264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13263-L13264) · [Before (L12595-L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12595-L12597)

```diff
- 
-       function FS(CC) {
-         return oS(CC) || YP(CC)
+       destroy() {
+         clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12600-L12614` → after: `L13269-L13344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13269-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13269-L13344) · [Before (L12600-L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12600-L12614)

```diff
-       function WS(CC) {
-         switch (CC.kind) {
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

#### 667. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12616-L12618` → after: `L13346-L13347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13346-L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13346-L13347) · [Before (L12616-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12616-L12618)

```diff
- 
-       function NS(CC) {
-         return MS(CC) || TH(CC) || em(CC) || BS(CC)
+       destroy() {
+         this.top.sync([]), this.bottom.sync([])
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12621-L12622` → after: `L13431-L13457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13431-L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13431-L13457) · [Before (L12621-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12621-L12622)

```diff
-       function MS(CC) {
-         return oS(CC) || bE(CC)
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

#### 669. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12624-L12626` → after: `L13459-L13472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13459-L13472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13459-L13472) · [Before (L12624-L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12624-L12626)

```diff
- 
-       function gS(CC) {
-         return rq(CC.parent, (CC => !!(1 & Oa(CC))))
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

#### 670. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12628-L12630` → after: `L13474-L13475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13474-L13475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13474-L13475) · [Before (L12628-L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12628-L12630)

```diff
- 
-       function SS(CC) {
-         return rq(CC.parent, (CC => bS(CC, CC.parent)))
+       eq(pp) {
+         return !1
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12633-L12635` → after: `L13497-L13574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13497-L13574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13497-L13574) · [Before (L12633-L12635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12633-L12635)

```diff
-       function pS(CC, zC) {
-         let ZC = SS(CC);
-         for (; ZC;) zC(ZC), ZC = SS(ZC)
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

#### 672. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12638-L12640` → after: `L13596-L13598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13596-L13598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13596-L13598) · [Before (L12638-L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12638-L12640)

```diff
-       function PS(CC) {
-         return CC && 0 !== tM(CC) ? Eg(CC) : "(Missing)"
-       }
+     function HS(pp) {
+       return Array.isArray(pp) ? pp : [pp]
+     }
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12642-L12643` → after: `L13600-L13605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13600-L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13600-L13605) · [Before (L12642-L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12642-L12643)

```diff
-       function GS(CC) {
-         return CC.declaration ? PS(CC.declaration.parameters[0].name) : void 0
+     function dS(pp, ip, cp) {
+       for (; pp.value && pp.from <= cp;) pp.from == cp && ip.push(pp.value), pp.next()
+     }
+     class eS {
+       constructor(pp, ip, cp) {
+         this.gutter = pp, this.height = cp, this.i = 0, this.cursor = Op.A.iter(pp.markers, ip.from)
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12645-L12647` → after: `L13607-L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13607-L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13607-L13655) · [Before (L12645-L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12645-L12647)

```diff
- 
-       function RS(CC) {
-         return 168 === CC.kind && !YR(CC.expression)
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

#### 675. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12649-L12666` → after: `L13657-L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13657-L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13657-L13661) · [Before (L12649-L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12649-L12666)

```diff
- 
-       function AS(CC) {
-         var zC;
-         switch (CC.kind) {
-           case 80:
-           case 81:
-             return (null == (zC = CC.emitNode) ? void 0 : zC.autoGenerate) ? void 0 : CC.escapedText;
-           case 11:
-           case 9:
-           case 10:
-           case 15:
-             return aq(CC.text);
-           case 168:
-             return YR(CC.expression) ? aq(CC.expression.text) : void 0;
-           case 296:
-             return ph(CC);
- ... (2 more removed lines; see GitHub link above)
+       update(pp) {
+         let ip = this.markers;
+         if (this.markers = HS(this.config.markers(pp.view)), this.spacer && this.config.updateSpacer) {
+           let ip = this.config.updateSpacer(this.spacer.markers[0], pp);
+           ip != this.spacer.markers[0] && this.spacer.update(pp.view, 0, 0, [ip])
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12669-L12671` → after: `L13666-L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13666-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13666-L13667) · [Before (L12669-L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12669-L12671)

```diff
- 
-       function xS(CC) {
-         return PQ.checkDefined(AS(CC))
+       destroy() {
+         for (let pp of this.elements) pp.destroy()
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12673-L12690` → after: `L13669-L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13669-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13669-L13708) · [Before (L12673-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12673-L12690)

```diff
- 
-       function JS(CC) {
-         switch (CC.kind) {
-           case 110:
-             return "this";
-           case 81:
-           case 80:
-             return 0 === tM(CC) ? Dq(CC) : Eg(CC);
-           case 167:
-             return JS(CC.left) + "." + JS(CC.right);
-           case 212:
-             return vd(CC.name) || ed(CC.name) ? JS(CC.expression) + "." + JS(CC.name) : PQ.assertNever(CC.name);
-           case 312:
-             return JS(CC.left) + "#" + JS(CC.right);
-           case 296:
-             return JS(CC.namespace) + ":" + JS(CC.name);
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

#### 678. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12693-L12697` → after: `L13712-L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13712-L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13712-L13713) · [Before (L12693-L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12693-L12697)

```diff
- 
-       function IS(CC, zC) {
-         const ZC = Zg(CC);
-         for (var QC = arguments.length, wC = new Array(QC > 2 ? QC - 2 : 0), bC = 2; bC < QC; bC++) wC[bC - 2] = arguments[bC];
-         return vS(ZC, CC, zC, ...wC)
+       destroy() {
+         this.setMarkers(null, [])
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12700-L12703` → after: `L13796-L13876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13796-L13876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13796-L13876) · [Before (L12700-L12703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12700-L12703)

```diff
-       function iS(CC, zC, ZC) {
-         const QC = Ao(CC.text, zC.pos);
-         for (var wC = arguments.length, bC = new Array(wC > 3 ? wC - 3 : 0), nC = 3; nC < wC; nC++) bC[nC - 3] = arguments[nC];
-         return VI(CC, QC, zC.end - QC, ZC, ...bC)
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

#### 680. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12705-L12709` → after: `L13878-L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13878-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13878-L13879) · [Before (L12705-L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12705-L12709)

```diff
- 
-       function vS(CC, zC, ZC) {
-         const QC = cS(CC, zC);
-         for (var wC = arguments.length, bC = new Array(wC > 3 ? wC - 3 : 0), nC = 3; nC < wC; nC++) bC[nC - 3] = arguments[nC];
-         return VI(CC, QC.start, QC.length, ZC, ...bC)
+       prop(pp) {
+         return this.props[pp.id]
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12711-L12714` → after: `L13881-L13882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13881-L13882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13881-L13882) · [Before (L12711-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12711-L12714)

```diff
- 
-       function eS(CC, zC, ZC, QC) {
-         const wC = cS(CC, zC);
-         return YS(CC, wC.start, wC.length, ZC, QC)
+       get isTop() {
+         return (1 & this.flags) > 0
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12716-L12719` → after: `L13884-L13885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13884-L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13884-L13885) · [Before (L12716-L12719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12716-L12719)

```diff
- 
-       function hS(CC, zC, ZC, QC) {
-         const wC = Ao(CC.text, zC.pos);
-         return YS(CC, wC, zC.end - wC, ZC, QC)
+       get isSkipped() {
+         return (2 & this.flags) > 0
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12721-L12723` → after: `L13887-L13888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13887-L13888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13887-L13888) · [Before (L12721-L12723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12721-L12723)

```diff
- 
-       function KS(CC, zC, ZC) {
-         PQ.assertGreaterThanOrEqual(zC, 0), PQ.assertGreaterThanOrEqual(ZC, 0), PQ.assertLessThanOrEqual(zC, CC.length), PQ.assertLessThanOrEqual(zC + ZC, CC.length)
+       get isError() {
+         return (4 & this.flags) > 0
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12725-L12735` → after: `L13890-L13897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13890-L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13890-L13897) · [Before (L12725-L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12725-L12735)

```diff
- 
-       function YS(CC, zC, ZC, QC, wC) {
-         return KS(CC.text, zC, ZC), {
-           file: CC,
-           start: zC,
-           length: ZC,
-           code: QC.code,
-           category: QC.category,
-           messageText: QC.next ? QC : QC.messageText,
-           relatedInformation: wC,
-           canonicalHead: QC.canonicalHead
+       get isAnonymous() {
+         return (8 & this.flags) > 0
+       }
+       is(pp) {
+         if ("string" == typeof pp) {
+           if (this.name == pp) return !0;
+           let ip = this.prop(Sp.group);
+           return !!ip && ip.indexOf(pp) > -1
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12738-L12747` → after: `L13901-L13909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13901-L13909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13901-L13909) · [Before (L12738-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12738-L12747)

```diff
- 
-       function dS(CC, zC, ZC) {
-         return {
-           file: CC,
-           start: 0,
-           length: 0,
-           code: zC.code,
-           category: zC.category,
-           messageText: zC.next ? zC : zC.messageText,
-           relatedInformation: ZC
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

#### 686. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12750-L12757` → after: `L13912-L13918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13912-L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13912-L13918) · [Before (L12750-L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12750-L12757)

```diff
- 
-       function mS(CC) {
-         return "string" === typeof CC.messageText ? {
-           code: CC.code,
-           category: CC.category,
-           messageText: CC.messageText,
-           next: CC.next
-         } : CC.messageText
+     }
+     Yp.none = new Yp("", Object.create(null), 0, 8);
+     class Dp {
+       constructor(pp) {
+         this.types = pp;
+         for (let ip = 0; ip < pp.length; ip++)
+           if (pp[ip].id != ip) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12759-L12767` → after: `L13920-L13934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13920-L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13920-L13934) · [Before (L12759-L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12759-L12767)

```diff
- 
-       function HS(CC, zC, ZC) {
-         return {
-           file: CC,
-           start: zC.pos,
-           length: zC.end - zC.pos,
-           code: ZC.code,
-           category: ZC.category,
-           messageText: ZC.message
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

#### 688. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12770-L12775` → after: `L13938-L13949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13938-L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13938-L13949) · [Before (L12770-L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12770-L12775)

```diff
- 
-       function ES(CC) {
-         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
-         return {
-           code: CC.code,
-           messageText: Ci(CC, ...ZC)
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

#### 689. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12778-L12782` → after: `L13952-L13960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13952-L13960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13952-L13960) · [Before (L12778-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12778-L12782)

```diff
- 
-       function lS(CC, zC) {
-         const ZC = ao(CC.languageVersion, !0, CC.languageVariant, CC.text, void 0, zC);
-         ZC.scan();
-         return Rq(ZC.getTokenStart(), ZC.getTokenEnd())
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

#### 690. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12784-L12787` → after: `L13962-L13964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13962-L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13962-L13964) · [Before (L12784-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12784-L12787)

```diff
- 
-       function XS(CC, zC) {
-         const ZC = ao(CC.languageVersion, !0, CC.languageVariant, CC.text, void 0, zC);
-         return ZC.scan(), ZC.getToken()
+       cursor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return new Mp(this.topNode, pp)
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12789-L12825` → after: `L13966-L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13966-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13966-L13997) · [Before (L12789-L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12789-L12825)

```diff
- 
-       function cS(CC, zC) {
-         let ZC = zC;
-         switch (zC.kind) {
-           case 308: {
-             const zC = Ao(CC.text, 0, !1);
-             return zC === CC.text.length ? Gq(0, 0) : lS(CC, zC)
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

#### 692. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12827-L12845` → after: `L13999-L14017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L13999-L14017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L13999-L14017) · [Before (L12827-L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12827-L12845)

```diff
-               return Rq(ZC, zC.end)
-             }(CC, zC);
-           case 297:
-           case 298:
-             return Rq(Ao(CC.text, zC.pos), zC.statements.length > 0 ? zC.statements[0].pos : zC.end);
-           case 254:
-           case 230:
-             return lS(CC, Ao(CC.text, zC.pos));
-           case 239:
-             return lS(CC, Ao(CC.text, zC.expression.end));
-           case 351:
-             return lS(CC, Ao(CC.text, zC.tagName.pos));
-           case 177: {
-             const ZC = zC,
-               QC = Ao(CC.text, ZC.pos),
-               wC = ao(CC.languageVersion, !0, CC.languageVariant, CC.text, void 0, QC);
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

#### 693. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12854-L12856` → after: `L14021-L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14021-L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14021-L14022) · [Before (L12854-L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12854-L12856)

```diff
- 
-       function uS(CC) {
-         return 308 === CC.kind && !rS(CC)
+       prop(pp) {
+         return pp.perNode ? this.props ? this.props[pp.id] : void 0 : this.type.prop(pp)
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12858-L12860` → after: `L14024-L14028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14024-L14028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14024-L14028) · [Before (L12858-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12858-L12860)

```diff
- 
-       function rS(CC) {
-         return void 0 !== (CC.externalModuleIndicator || CC.commonJsModuleIndicator)
+       get propValues() {
+         let pp = [];
+         if (this.props)
+           for (let ip in this.props) pp.push([+ip, this.props[ip]]);
+         return pp
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12862-L12864` → after: `L14030-L14032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14030-L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14030-L14032) · [Before (L12862-L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12862-L12864)

```diff
- 
-       function sS(CC) {
-         return 6 === CC.scriptKind
+       balance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         return this.children.length <= 8 ? this : lp(Yp.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((pp, ip, cp) => new yp(this.type, pp, ip, cp, this.propValues)), pp.makeTree || ((pp, ip, cp) => new yp(Yp.none, pp, ip, cp)))
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12867-L12869` → after: `L14045-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14045-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14045-L14084) · [Before (L12867-L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12867-L12869)

```diff
-       function TS(CC) {
-         return !!(4096 & mq(CC))
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

#### 697. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12871-L12873` → after: `L14086-L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14086-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14086-L14109) · [Before (L12871-L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12871-L12873)

```diff
-       function aS(CC) {
-         return !(!(8 & mq(CC)) || eq(CC, CC.parent))
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

#### 698. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12875-L12877` → after: `L14111-L14121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14111-L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14111-L14121) · [Before (L12875-L12877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12875-L12877)

```diff
-       function tS(CC) {
-         return 6 === (7 & Eq(CC))
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

#### 699. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12879-L12881` → after: `L14123-L14128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14123-L14128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14123-L14128) · [Before (L12879-L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12879-L12881)

```diff
-       function DS(CC) {
-         return 4 === (7 & Eq(CC))
-       }
+           function Hp(pp, ip, cp, Op, Ip, Sp, xp, Lp, Yp) {
+             let Dp = [],
+               Ap = [];
+             for (; pp.length > Op;) Dp.push(pp.pop()), Ap.push(ip.pop() + cp - Ip);
+             pp.push(dp(op.types[xp], Dp, Ap, Sp - Ip, Lp - Sp, Yp)), ip.push(Ip - cp)
+           }
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12883-L12885` → after: `L14130-L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14130-L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14130-L14140) · [Before (L12883-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12883-L12885)

```diff
-       function jS(CC) {
-         return 2 === (7 & Eq(CC))
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

#### 701. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12887-L12890` → after: `L14142-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14142-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14142-L14173) · [Before (L12887-L12890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12887-L12890)

```diff
-       function yS(CC) {
-         const zC = 7 & Eq(CC);
-         return 2 === zC || 4 === zC || 6 === zC
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

#### 702. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12892-L12893` → after: `L14175-L14197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14175-L14197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14175-L14197) · [Before (L12892-L12893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12892-L12893)

```diff
-       function LS(CC) {
-         return 1 === (7 & Eq(CC))
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

#### 703. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12895-L12897` → after: `L14199-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14199-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14199-L14203) · [Before (L12895-L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12895-L12897)

```diff
- 
-       function US(CC) {
-         return 214 === CC.kind && 108 === CC.expression.kind
+     }
+     yp.empty = new yp(Yp.none, [], [], 0);
+     class Up {
+       constructor(pp, ip) {
+         this.buffer = pp, this.index = ip
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12899-L12903` → after: `L14205-L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14205-L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14205-L14206) · [Before (L12899-L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12899-L12903)

```diff
- 
-       function BS(CC) {
-         if (214 !== CC.kind) return !1;
-         const zC = CC.expression;
-         return 102 === zC.kind || oH(zC) && 102 === zC.keywordToken && "defer" === zC.name.escapedText
+       get id() {
+         return this.buffer[this.index - 4]
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12905-L12907` → after: `L14208-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14208-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14208-L14209) · [Before (L12905-L12907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12905-L12907)

```diff
- 
-       function OS(CC) {
-         return oH(CC) && 102 === CC.keywordToken && "meta" === CC.name.escapedText
+       get start() {
+         return this.buffer[this.index - 3]
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12909-L12911` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14211-L14212) · [Before (L12909-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12909-L12911)

```diff
- 
-       function kS(CC) {
-         return em(CC) && im(CC.argument) && fd(CC.argument.literal)
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12913-L12915` → after: `L14214-L14215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14214-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14214-L14215) · [Before (L12913-L12915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12913-L12915)

```diff
- 
-       function VS(CC) {
-         return 245 === CC.kind && 11 === CC.expression.kind
+       get size() {
+         return this.buffer[this.index - 1]
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12917-L12919` → after: `L14217-L14218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14217-L14218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14217-L14218) · [Before (L12917-L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12917-L12919)

```diff
- 
-       function Cp(CC) {
-         return !!(2097152 & cg(CC))
+       get pos() {
+         return this.index
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12921-L12923` → after: `L14220-L14221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14220-L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14220-L14221) · [Before (L12921-L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12921-L12923)

```diff
- 
-       function zp(CC) {
-         return Cp(CC) && XH(CC)
+       next() {
+         this.index -= 4
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12925-L12927` → after: `L14223-L14224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14223-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14223-L14224) · [Before (L12925-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12925-L12927)

```diff
- 
-       function Zp(CC) {
-         return vd(CC.name) && !CC.initializer
+       fork() {
+         return new Up(this.buffer, this.index)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12929-L12931` → after: `L14226-L14229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14226-L14229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14226-L14229) · [Before (L12929-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12929-L12931)

```diff
- 
-       function Qp(CC) {
-         return Cp(CC) && SH(CC) && RC(CC.declarationList.declarations, Zp)
+     }
+     class wp {
+       constructor(pp, ip, cp) {
+         this.buffer = pp, this.length = ip, this.set = cp
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12933-L12935` → after: `L14231-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14231-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14231-L14232) · [Before (L12933-L12935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12933-L12935)

```diff
- 
-       function wp(CC, zC) {
-         return 12 !== CC.kind ? Xo(zC.text, CC.pos) : void 0
+       get type() {
+         return Yp.none
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L12937-L13010` → after: `L14234-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14234-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14234-L14247) · [Before (L12937-L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L12937-L13010)

```diff
- 
-       function bp(CC, zC) {
-         return hC(170 === CC.kind || 169 === CC.kind || 219 === CC.kind || 220 === CC.kind || 218 === CC.kind || 261 === CC.kind || 282 === CC.kind ? BC(co(zC, CC.pos), Xo(zC, CC.pos)) : Xo(zC, CC.pos), (ZC => ZC.end <= CC.end && 42 === zC.charCodeAt(ZC.pos + 1) && 42 === zC.char … [truncated]
-       }
-       var np = /^\/\/\/\s*<reference\s+path\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         fp = /^\/\/\/\s*<reference\s+types\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         op = /^\/\/\/\s*<reference\s+lib\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         qp = /^\/\/\/\s*<amd-dependency\s+path\s*=\s*(?:'[^']*'|"[^"]*").*?\/>/,
-         Fp = /^\/\/\/\s*<amd-module\s+(?:\S.*?)??\/>/,
-         Wp = /^\/\/\/\s*<reference\s+no-default-lib\s*=\s*(?:'[^']*'|"[^"]*")\s*\/>/;
- 
-       function Np(CC) {
-         if (183 <= CC.kind && CC.kind <= 206) return !0;
-         switch (CC.kind) {
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

#### 714. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13012-L13014` → after: `L14249-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14249-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14249-L14254) · [Before (L13012-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13012-L13014)

```diff
- 
-       function Mp(CC) {
-         return xl(CC.parent) || Cl(CC.parent) || hE(CC.parent) && !bJ(CC)
+       findChild(pp, ip, cp, Op, op) {
+         let {
+           buffer: Ip
+         } = this, Sp = -1;
+         for (let xp = pp; xp != ip && !(vp(op, Op, Ip[xp + 1], Ip[xp + 2]) && (Sp = xp, cp > 0)); xp = Ip[xp + 3]);
+         return Sp
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13016-L13039` → after: `L14256-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14256-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14256-L14282) · [Before (L13016-L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13016-L13039)

```diff
- 
-       function gp(CC, zC) {
-         return function CC(ZC) {
-           switch (ZC.kind) {
-             case 254:
-               return zC(ZC);
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

#### 716. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13042-L13059` → after: `L14286-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14286-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14286-L14290) · [Before (L13042-L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13042-L13059)

```diff
-       function Sp(CC, zC) {
-         return function CC(ZC) {
-           switch (ZC.kind) {
-             case 230:
-               zC(ZC);
-               const QC = ZC.expression;
-               return void(QC && CC(QC));
-             case 267:
-             case 265:
-             case 268:
-             case 266:
-               return;
-             default:
-               if (lW(ZC)) {
-                 if (ZC.name && 168 === ZC.name.kind) return void CC(ZC.name.expression)
-               } else Np(ZC) || mc(ZC, CC)
- ... (2 more removed lines; see GitHub link above)
+     function tp(pp, ip, cp, Op) {
+       for (var op; pp.from == pp.to || (cp < 1 ? pp.from >= ip : pp.from > ip) || (cp > -1 ? pp.to <= ip : pp.to < ip);) {
+         let ip = !Op && pp instanceof dp && pp.index < 0 ? null : pp.parent;
+         if (!ip) return pp;
+         pp = ip
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13061-L13063` → after: `L14292-L14298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14292-L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14292-L14298) · [Before (L13061-L13063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13061-L13063)

```diff
- 
-       function pp(CC) {
-         return CC && 189 === CC.kind ? CC.elementType : CC && 184 === CC.kind ? Iz(CC.typeArguments) : void 0
+       let Ip = Op ? 0 : Wp.IgnoreOverlays;
+       if (Op)
+         for (let Sp = pp, xp = Sp.parent; xp; Sp = xp, xp = Sp.parent) Sp instanceof dp && Sp.index < 0 && (null === (op = xp.enter(ip, cp, Ip)) || void 0 === op ? void 0 : op.from) != Sp.from && (pp = xp);
+       for (;;) {
+         let Op = pp.enter(ip, cp, Ip);
+         if (!Op) return pp;
+         pp = Op
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13065-L13075` → after: `L14300-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14300-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14300-L14303) · [Before (L13065-L13075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13065-L13075)

```diff
- 
-       function Pp(CC) {
-         switch (CC.kind) {
-           case 265:
-           case 264:
-           case 232:
-           case 188:
-             return CC.members;
-           case 211:
-             return CC.properties
-         }
+     }
+     class Hp {
+       cursor() {
+         return new Mp(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13077-L13090` → after: `L14305-L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14305-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14305-L14307) · [Before (L13077-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13077-L13090)

```diff
- 
-       function Gp(CC) {
-         if (CC) switch (CC.kind) {
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

#### 720. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13092-L13094` → after: `L14309-L14310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14309-L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14309-L14310) · [Before (L13092-L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13092-L13094)

```diff
- 
-       function Rp(CC) {
-         return 262 === CC.parent.kind && 244 === CC.parent.parent.kind
+       getChildren(pp) {
+         return ep(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13096-L13098` → after: `L14312-L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14312-L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14312-L14313) · [Before (L13096-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13096-L13098)

```diff
- 
-       function Ap(CC) {
-         return !!RP(CC) && (Em(CC.parent) && Om(CC.parent.parent) && 2 === jP(CC.parent.parent) || xp(CC.parent))
+       resolve(pp) {
+         return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13100-L13102` → after: `L14315-L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14315-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14315-L14316) · [Before (L13100-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13100-L13102)

```diff
- 
-       function xp(CC) {
-         return !!RP(CC) && (Om(CC) && 1 === jP(CC))
+       resolveInner(pp) {
+         return tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13104-L13106` → after: `L14318-L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14318-L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14318-L14319) · [Before (L13104-L13106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13104-L13106)

```diff
- 
-       function Jp(CC) {
-         return (EH(CC) ? jS(CC) && vd(CC.name) && Rp(CC) : Ld(CC) ? Hx(CC) && hx(CC) : yd(CC) && Hx(CC)) || xp(CC)
+       matchContext(pp) {
+         return jp(this.parent, pp)
```
