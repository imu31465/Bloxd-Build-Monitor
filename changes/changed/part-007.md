# Changed — Bundle Modifications Report (Part 007 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `7 / 56` (**312** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/191.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/191.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff)

#### 6. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L129-L132` → after: `L91-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L91-L95) · [Before (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L129-L132)

```diff
-   40824: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op,
-       f: () => Dp
+   40080: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       emptyColumnHeight: () => GQ,
+       loadHeatmapSchematic: () => UQ,
+       readSchematicBlocks: () => bQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L134-L248` → after: `L97-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L97-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L97-L120) · [Before (L134-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L134-L248)

```diff
-     const Op = new TextDecoder;
- 
-     function op(pp) {
-       const ip = new Ip(pp),
-         cp = ip.value();
-       if (ip.at !== pp.length) throw new Error(`msgpack: ${pp.length-ip.at} bytes after the value`);
-       return cp
-     }
-     class Ip {
-       constructor(pp) {
-         this.bytes = pp, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(pp.buffer, pp.byteOffset, pp.byteLength)
-       }
-       value() {
-         const pp = this.u8();
-         if (pp <= 127) return pp;
-         if (pp >= 224) return pp - 256;
- ... (99 more removed lines; see GitHub link above)
+     var wQ = XQ(3989),
+       qQ = XQ.n(wQ),
+       TQ = XQ(3963),
+       zQ = XQ(38002),
+       sQ = XQ(231),
+       FQ = XQ(9580);
+     const PQ = [{
+         name: "x",
+         type: "int"
+       }, {
+         name: "y",
+         type: "int"
+       }, {
+         name: "z",
+         type: "int"
+       }],
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L250-L271` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L122-L126) · [Before (L250-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L250-L271)

```diff
-         return Op.decode(cp.subarray(ip, ip + pp))
-       }
-       bin(pp) {
-         const ip = this.take(pp);
-         return this.bytes.subarray(ip, ip + pp)
-       }
-       enter() {
-         if (++this.depth > 512) throw new Error("msgpack: nested too deep")
-       }
-       array(pp) {
-         this.enter();
-         const ip = [];
-         for (let cp = 0; cp < pp; cp++) ip.push(this.value());
-         return this.depth--, ip
-       }
-       map(pp) {
- ... (6 more removed lines; see GitHub link above)
+       }, {
+         name: "dimensions",
+         type: {
+           type: "record",
+           fields: PQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L273-L292` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L128-L137) · [Before (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L273-L292)

```diff
-         return this.depth--, ip
-       }
-       ext(pp) {
-         const ip = this.view.getInt8(this.take(1)),
-           cp = this.take(pp);
-         if (0 !== ip) {
-           if (-1 === ip) {
-             if (1 === pp) return new Date(NaN);
-             if (4 === pp) return new Date(1e3 * this.view.getUint32(cp, !1));
-             if (8 === pp) {
-               const pp = this.view.getUint32(cp, !1),
-                 ip = pp >>> 2,
-                 Op = 4294967296 * (3 & pp) + this.view.getUint32(cp + 4, !1);
-               return new Date(1e3 * Op + ip / 1e6)
-             }
-             if (12 === pp) {
- ... (4 more removed lines; see GitHub link above)
+       }, {
+         name: "chunkData",
+         type: {
+           type: "array",
+           items: {
+             type: "record",
+             fields: [...PQ, {
+               name: "rle",
+               type: "bytes"
+             }]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L296-L340` → after: `L140-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L140-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L140-L156) · [Before (L296-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L296-L340)

```diff
-       }
-     }
-     const Sp = new TextEncoder,
-       xp = -(2n ** 63n),
-       Lp = 2n ** 63n - 1n,
-       Yp = 2n ** 64n - 1n;
- 
-     function Dp(pp) {
-       const ip = new Ap;
-       return ip.value(pp, 0), ip.bytes()
-     }
-     class Ap {
-       constructor() {
-         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
-       }
-       bytes() {
- ... (29 more removed lines; see GitHub link above)
+       }],
+       JQ = qQ().Type.forSchema({
+         type: "record",
+         fields: gQ
+       }),
+       rQ = qQ().Type.forSchema({
+         type: "record",
+         fields: [...gQ, {
+           name: "blockData",
+           type: {
+             type: "array",
+             items: {
+               type: "record",
+               fields: [...PQ, {
+                 name: "data",
+                 type: "bytes"
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L424-L453` → after: `L159-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L159-L163) · [Before (L424-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L424-L453)

```diff
-           return pp
-         }
-         return op.decode(this.buf.subarray(ip, cp))
-       }
-       bytes() {
-         return this.fixed(this.size())
-       }
-       fixed(pp) {
-         const ip = this.take(pp);
-         return this.buf.slice(ip, ip + pp)
-       }
-       index(pp) {
-         const ip = this.long();
-         if (!(ip >= 0 && ip < pp)) throw new RangeError(`avro: index ${ip} of ${pp}`);
-         return ip
-       }
- ... (14 more removed lines; see GitHub link above)
+         }, {
+           name: "pasteOffset",
+           type: {
+             type: "record",
+             fields: PQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L455-L538` → after: `L165-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L165-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L165-L173) · [Before (L455-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L455-L538)

```diff
-         }
-         return ip
-       }
-       end() {
-         if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
-       }
-       block(pp) {
-         let ip = pp;
-         if (ip < 0 && (ip = -ip, this.long()), ip > this.buf.length - this.at) throw new RangeError(`avro: block of ${ip} items in ${this.buf.length-this.at} bytes`);
-         return ip
-       }
-       floats() {
-         return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
-       }
-       size() {
-         const pp = this.long();
- ... (68 more removed lines; see GitHub link above)
+         }]
+       }),
+       IQ = 2,
+       jQ = 6,
+       BQ = {
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
+       },
+       yQ = [150, 150, 150],
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L540-L752` → after: `L175-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L175-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L175-L191) · [Before (L540-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L540-L752)

```diff
-       jp = 86,
-       kp = 60,
-       mp = 17,
-       Rp = 56,
-       qp = 100,
-       Mp = 81;
- 
-     function Cp(pp, ip) {
-       switch (pp) {
-         case Op:
-           return function(pp) {
-             return {
-               pS: zp(pp),
-               iS: pp.float(),
-               cS: pp.long()
-             }
- ... (197 more removed lines; see GitHub link above)
+       DQ = 4096,
+       pQ = sQ.h.Ij,
+       GQ = -2147483648;
+     async function UQ(QQ) {
+       const WQ = await bQ(new Uint8Array(await QQ.arrayBuffer()), await async function() {
+         const {
+           averageColors: QQ
+         } = await XQ.e(213).then((() => XQ(34609))), WQ = new Map;
+         return XQ => {
+           var wQ, qQ, TQ, zQ, sQ;
+           const PQ = WQ.get(XQ);
+           if (void 0 !== PQ) return PQ;
+           const gQ = null !== (wQ = null === (qQ = FQ.h[XQ]) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== wQ ? wQ : "",
+             JQ = null !== (TQ = QQ[gQ]) && void 0 !== TQ ? TQ : QQ[gQ.split("|")[0]],
+             rQ = BQ[gQ.split("|")[0]],
+             IQ = null !== (zQ = null !== (sQ = null === JQ || void 0 === JQ ? void 0 : JQ[0]) && void 0 !== sQ ? sQ : rQ) && void 0 !== zQ ? zQ : 0 === (null === JQ || void 0 === JQ ? void 0 : JQ.length) ? null : yQ;
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L754-L757` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L193) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L754-L757)

```diff
-       }(pp)
-     }
- 
-     function Np(pp) {
+       }());
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L759-L1108` → after: `L195-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L195-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L195-L261) · [Before (L759-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L759-L1108)

```diff
-         icon: pp.str(),
-         style: Bp(pp)
-       }
-     }
- 
-     function Tp(pp) {
-       const ip = pp.index(3);
-       return 0 === ip ? {
-         string: pp.str()
-       } : 1 === ip ? {
-         styledEntityName: Ep(pp)
-       } : {
-         styledTranslatedText: Qp(pp)
-       }
-     }
- 
- ... (334 more removed lines; see GitHub link above)
+         surface: WQ.surface,
+         topDown: dQ(WQ.columnTops)
+       }
+     }
+     async function bQ(QQ, WQ) {
+       var XQ;
+       if (QQ.byteLength < 4) throw new Error("The file is too short to be a schematic.");
+       const wQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength).getUint32(0, !0);
+       if (wQ > jQ) throw new Error("The file isn't a schematic this version of Bloxd can read.");
+       const qQ = (wQ >= IQ ? rQ : JQ).decode(TQ.Tj.from(QQ.subarray(4)), 0).value;
+       if (!qQ) throw new Error("The file isn't a schematic.");
+       if (0 === qQ.chunkData.length) throw new Error("The schematic has no blocks in it.");
+       const sQ = null !== (XQ = qQ.pasteOffset) && void 0 !== XQ ? XQ : {
+           x: 0,
+           y: 0,
+           z: 0
+ ... (51 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1110-L1116` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L263) · [Before (L1110-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1110-L1116)

```diff
-     }
- 
-     function Qi(pp) {
-       return pp.qy(li)
-     }
- 
-     function Ji(pp) {
+       if (0 === UQ.length) throw new Error("The schematic has no blocks in it.");
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1118-L1124` → after: `L265-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L265-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L265-L271) · [Before (L1118-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1118-L1124)

```diff
-         UO: pp.long(),
-         wO: pp.long(),
-         vO: pp.long(),
-         tO: pp.bool(),
-         HO: qi(pp),
-         BO: Xi(pp),
-         aO: Qi(pp)
+         name: qQ.name,
+         surface: {
+           positions: Int32Array.from(UQ),
+           colours: Uint8Array.from(bQ),
+           count: UQ.length / 3
+         },
+         columnTops: [...DQ.values()]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1129` → after: `L276-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L276-L278) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1129)

```diff
-       return pp.qy(Ji)
+       if (0 === QQ) return !0;
+       const WQ = FQ.h[QQ];
+       return void 0 === WQ || WQ.XI || WQ.transTex || !1 === WQ.solid
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1133-L1136` → after: `L282-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L282-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L282-L289) · [Before (L1133-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1133-L1136)

```diff
-       return 0 === pp.index(2) ? null : function(pp) {
-         return {
-           name: pp.str(),
-           zO: Jp(pp)
+       let WQ = 1 / 0,
+         XQ = -1 / 0,
+         wQ = 1 / 0,
+         qQ = -1 / 0;
+       for (const {
+           chunkX: jQ,
+           chunkZ: BQ,
+           heights: yQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1138-L1145` → after: `L291-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L291-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L291-L312) · [Before (L1138-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1138-L1145)

```diff
-       }(pp)
-     }
- 
-     function Ti(pp) {
-       return 0 === pp.index(2) ? null : function(pp) {
-         return {
-           terrain: Ni(pp),
-           sO: Qi(pp)
+         of QQ) yQ.forEach(((QQ, TQ) => {
+         if (QQ === GQ) return;
+         const zQ = jQ * pQ + TQ % pQ,
+           sQ = BQ * pQ + Math.floor(TQ / pQ);
+         WQ = Math.min(WQ, zQ), XQ = Math.max(XQ, zQ), wQ = Math.min(wQ, sQ), qQ = Math.max(qQ, sQ)
+       }));
+       const TQ = XQ - WQ + 1,
+         zQ = qQ - wQ + 1,
+         sQ = Math.max(1, Math.ceil(TQ / DQ), Math.ceil(zQ / DQ)),
+         FQ = Math.ceil(TQ / sQ),
+         PQ = Math.ceil(zQ / sQ),
+         gQ = document.createElement("canvas");
+       gQ.width = FQ, gQ.height = PQ;
+       const JQ = gQ.getContext("2d");
+       if (!JQ) throw new Error("Couldn't draw the schematic from above.");
+       const rQ = JQ.createImageData(FQ, PQ),
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1147-L1222` → after: `L314-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L314-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L314-L325) · [Before (L1147-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1147-L1222)

```diff
-       }(pp)
-     }
- 
-     function fi(pp) {
-       return 0 === pp.index(2) ? null : function(pp) {
-         return {
-           layers: Bi(pp),
-           GO: Ti(pp)
-         }
-       }(pp)
-     }
-   },
-   40792: (pp, ip, cp) => {
-     cp.d(ip, {
-       A: () => Ep,
-       B: () => dp,
- ... (60 more removed lines; see GitHub link above)
+         of QQ) yQ.forEach(((QQ, WQ) => {
+         const qQ = jQ * pQ + WQ % pQ,
+           TQ = BQ * pQ + Math.floor(WQ / pQ),
+           zQ = Math.floor((TQ - wQ) / sQ) * FQ + Math.floor((XQ - qQ) / sQ);
+         QQ === GQ || QQ <= IQ[zQ] || (IQ[zQ] = QQ, rQ.data.set(VQ.subarray(3 * WQ, 3 * WQ + 3), 4 * zQ), rQ.data[4 * zQ + 3] = 255)
+       }));
+       return JQ.putImageData(rQ, 0, 0), {
+         maxX: XQ,
+         minZ: wQ,
+         width: FQ * sQ,
+         depth: PQ * sQ,
+         canvas: gQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1229-L1333` → after: `L329-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L329-L331) · [Before (L1229-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1229-L1333)

```diff
-     function Yp(pp) {
-       return pp
-     }
-     let Dp;
- 
-     function Ap(pp) {
-       return null === pp || "object" !== typeof pp ? pp : [Sp(pp.Cx), Sp(pp.Ex)]
-     }
- 
-     function Pp(pp) {
-       return null === pp || "object" !== typeof pp ? pp : [Ip(pp.WI, Yp), Ip(pp.Zx, Yp)]
-     }
- 
-     function Wp(pp) {
-       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.VD), Sp(ip.pA)];
-       var ip
- ... (89 more removed lines; see GitHub link above)
+     function HQ() {
+       return new Promise((QQ => {
+         setTimeout(QQ, 0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1342-L1351` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L335) · [Before (L1342-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1342-L1351)

```diff
-   9436: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => op,
-       h: () => Ip
-     });
-     var Op = cp(9385);
-     const op = "Air",
-       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   39425: (pp, ip, cp) => {
+   9679: (QQ, WQ, XQ) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1354` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L338) · [Before (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1354)

```diff
-       d: () => xp
+       c: () => TQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1356-L1366` → after: `L340-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/191.js#L340-L342) · [Before (L1356-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/191.js#L1356-L1366)

```diff
-     var Op = cp(337),
-       op = cp(4543);
-     const Ip = new Set(op.s),
-       Sp = new Map;
- 
-     function xp(pp, ip) {
-       let cp = Sp.get(ip);
-       void 0 === cp && (cp = new Map, Sp.set(ip, cp));
-       let op = cp.get(pp);
-       return void 0 === op && (op = `${pp}${(0,Op.C)(ip)}`, cp.set(pp, op)), op
-     }
+     var wQ = XQ(9634);
+     const qQ = "Air",
+       TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/192.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/192.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07)

#### 1. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L2)

```diff
- export const ids = [52, 192];
+ export const ids = [192];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L36` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L4-L11) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L4-L36)

```diff
-   38774: (pp, ip, cp) => {
-     var Op = {
-       "./combat_1.png": 38776,
-       "./dungeon_crumbling_crypt.png": 38783,
-       "./dungeon_frozen_hollow.png": 38791,
-       "./dungeon_wildwood_grove.png": 38798,
-       "./dungeons.png": 38807,
-       "./farming_1.png": 38814,
-       "./fishing_1.png": 38817,
-       "./hub.png": 38819,
-       "./island.png": 38824,
-       "./mining_1.png": 38828,
-       "./mining_1_bridge.png": 38831,
-       "./mining_1_gallery.png": 38836,
-       "./mining_1_hollow.png": 38842,
-       "./mining_1_village.png": 38849
- ... (17 more removed lines; see GitHub link above)
+   40738: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       FORMER_BLOCK_IMAGE_NAMES: () => wQ.e,
+       textureAnimationData: () => qQ.s,
+       textureNameToIndex: () => qQ.w
+     });
+     var wQ = XQ(38999),
+       qQ = XQ(9580)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L38` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L13) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L38)

```diff
-   38856: (pp, ip, cp) => {
+   9679: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L43-L147` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L18-L20) · [Before (L43-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L43-L147)

```diff
-     const Op = new WeakMap;
- 
-     function op(pp, ip) {
-       return Op.set(pp, ip), pp
-     }
- 
-     function Ip(pp) {
-       var ip;
-       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
-     }
-   },
-   38751: (pp, ip, cp) => {
-     function Op(pp, ip, cp) {
-       var Op;
-       const {
-         width: op,
- ... (89 more removed lines; see GitHub link above)
+     var wQ = XQ(9634);
+     const qQ = "Air",
+       TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L149` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L22) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L149)

```diff
-   38745: (pp, ip, cp) => {
+   38999: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L151-L232` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L24-L25) · [Before (L151-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L151-L232)

```diff
-       b: () => Op
-     });
-     class Op {
-       constructor(pp, ip, cp) {
-         this.GA = pp, this.beforeOpen = ip, this.afterClose = cp, this.open = !1, this.Ry = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.Ry && (this.open = !0, this.beforeOpen(this), this.emit())
-         }, this.close = () => {
-           this.closePanel(!1)
-         }, this.dismiss = () => {
-           this.closePanel(!0)
-         }
-       }
-       isOpen() {
-         return this.open
-       }
-       showOrRefresh() {
- ... (66 more removed lines; see GitHub link above)
+       e: () => wQ,
+       h: () => qQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L234-L5064` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L27) · [Before (L234-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L234-L5064)

```diff
-     const Op = "island";
-     var op = cp(337);
-     const Ip = (0, op.zb)([0, 0, -1]),
-       Sp = [{
-         name: "S",
-         bearing: (0, op.zb)([0, 0, 1])
-       }, {
-         name: "E",
-         bearing: (0, op.zb)([-1, 0, 0])
-       }, {
-         name: "N",
-         bearing: Ip
-       }, {
-         name: "W",
-         bearing: (0, op.zb)([1, 0, 0])
-       }];
- ... (4815 more removed lines; see GitHub link above)
+     const wQ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((QQ => [QQ, `${QQ}_block`])));
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L5071-L5888` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/192.js#L31) · [Before (L5071-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/192.js#L5071-L5888)

```diff
-       if (pp.shiftKey && cp <= 0) pp.preventDefault(), null === (Op = ip.at(-1)) || void 0 === Op || Op.focus();
-       else if (!pp.shiftKey && (-1 === cp || cp === ip.length - 1)) {
-         var op;
-         pp.preventDefault(), null === (op = ip[0]) || void 0 === op || op.focus()
-       }
-     }
- 
-     function ro() {
-       const pp = (0, Rp.useRef)(null);
-       return (0, Rp.useCallback)((ip => {
-         var cp;
-         ip ? (pp.current = document.activeElement, ip.focus()) : null === (cp = pp.current) || void 0 === cp || cp.focus()
-       }), [])
-     }
- 
-     function Zo(pp) {
- ... (802 more removed lines; see GitHub link above)
+       return null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : QQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/193.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/193.js` (120 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081)

#### 1. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L35` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L4) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L4-L35)

```diff
-   39310: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op
-     });
-     class Op {
-       constructor(pp, ip) {
-         this.read = pp, this.apply = ip, this.release = null
-       }
-       turn(pp, ip) {
-         const cp = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: ip,
-           forcedCameraDirection: [pp[0], pp[1], pp[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
- ... (16 more removed lines; see GitHub link above)
+   40847: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L40` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L10-L16) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L40)

```diff
-     const Op = new Map;
+     var wQ = XQ(40850),
+       qQ = XQ(5134),
+       TQ = XQ(40853);
+ 
+     function zQ(QQ) {
+       return QQ.payloadKind === qQ.rc.Msgpack ? (0, wQ.d)(QQ.payload) : void 0
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L43` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L19) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L43)

```diff
-       Op.set(pp, ip)
+       if (WQ.payloadKind === qQ.rc.Bytes || WQ.payloadKind === qQ.rc.MsgpackBin) return (0, TQ.c)(QQ, WQ.payload)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L47` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L23) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L47)

```diff
-       return pp ? Op.get(pp) : void 0
+       return null !== QQ && "object" === typeof QQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L50` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L26) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L50)

```diff
-   39818: (pp, ip, cp) => {
+   40857: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L52` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L28-L32) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L52)

```diff
-       b: () => op
+       c: () => JQ,
+       g: () => rQ,
+       h: () => IQ,
+       j: () => gQ,
+       n: () => yQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L54` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L34-L40) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L54)

```diff
-     var Op = cp(38430);
+     var wQ = XQ(5134),
+       qQ = XQ(40864);
+     const TQ = new Map,
+       zQ = new Set,
+       sQ = new Set;
+     let FQ = 0,
+       PQ = 0;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L56-L68` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L42-L45) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L56-L68)

```diff
-     function op(pp, ip, cp) {
-       var op, Ip, Sp, xp, Lp, Yp, Dp;
-       const Ap = (0, Op.b)(pp, ip, cp[0], cp[1], cp[2]),
-         Pp = Ap ? null !== (op = Ap.textCell) && void 0 !== op ? op : Ap.rect.anchor : cp,
-         Wp = ip(Pp[0], Pp[1], Pp[2]);
-       return {
-         pos: [cp[0], cp[1], cp[2]],
-         noticeboardSpan: Ap && {
-           width: Ap.rect.width,
-           height: Ap.rect.height
-         },
-         text: null !== (Ip = null === Wp || void 0 === Wp || null === (Sp = Wp.persisted) || void 0 === Sp || null === (xp = Sp.shared) || void 0 === xp ? void 0 : xp.text) && void 0 !== Ip ? Ip : "",
-         textSize: null !== (Lp = null === Wp || void 0 === Wp || null === (Yp = Wp.persisted) || void 0 === Yp || null === (Dp = Yp.shared) || void 0 === Dp ? void 0 : Dp.textSize) && void 0 !== Lp ? Lp : null
+     function gQ(QQ, WQ) {
+       let XQ = TQ.get(QQ);
+       return XQ || (XQ = new Set, TQ.set(QQ, XQ)), XQ.add(WQ), () => {
+         XQ.delete(WQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L71-L72` → after: `L48-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L48-L58) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L71-L72)

```diff
-   },
-   38726: (pp, ip, cp) => {
+ 
+     function JQ() {
+       return 0 !== FQ
+     }
+ 
+     function rQ(QQ) {
+       return zQ.add(QQ), () => {
+         zQ.delete(QQ)
+       }
+     }
+ 
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L74-L80` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L60-L61) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L74-L80)

```diff
-       switch (pp.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
-         case "chevronPath":
-         case "furnaceFire":
-           return !0
+       return sQ.add(QQ), () => {
+         sQ.delete(QQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L85-L86` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L98) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L85-L86)

```diff
-       h: () => Ip,
-       j: () => Op
+       i: () => sQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L88-L89` → after: `L100-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L100-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L100-L127) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L88-L89)

```diff
-     const op = 4,
-       Ip = 3
+     var wQ = XQ(1302),
+       qQ = XQ(40813);
+     const TQ = new TextDecoder,
+       zQ = new TextEncoder;
+ 
+     function sQ(QQ, WQ) {
+       const XQ = QQ.queries.entityName(WQ);
+       if (XQ === qQ.fd) return;
+       const zQ = QQ.memoryData(QQ.scratch(), 4 + XQ, 4, "entity_name's answer");
+       if (!zQ) return;
+       const sQ = zQ.getUint32(0, !0),
+         FQ = TQ.decode(new Uint8Array(zQ.buffer, zQ.byteOffset + 4, XQ));
+       return (0, wQ.c)(FQ, !1, sQ === qQ.je ? null : sQ)
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L91` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L129) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L91)

```diff
-   39339: (pp, ip, cp) => {
+   40850: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L93` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L131) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L93)

```diff
-       c: () => op,
+       d: () => qQ,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L96-L97` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L134-L141) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L96-L97)

```diff
-     var Op = cp(337);
-     const op = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
+     const wQ = new TextDecoder;
+ 
+     function qQ(QQ) {
+       const WQ = new TQ(QQ),
+         XQ = WQ.value();
+       if (WQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-WQ.at} bytes after the value`);
+       return XQ
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L100-L119` → after: `L144-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L144-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L144-L295) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L100-L119)

```diff
-         this.importGame = pp, this.loads = new Map, this.loaded = new Map
-       }
-       load(pp) {
-         const ip = (0, Op.Mb)(pp);
-         if (!op.has(ip)) return Promise.resolve(void 0);
-         let cp = this.loads.get(ip);
-         return cp || (cp = this.importGame(ip).then((pp => {
-           const cp = pp.default;
-           if ("function" !== typeof cp) throw new Error(`${ip}'s client code has no default-exported factory`);
-           return this.loaded.set(ip, cp), cp
-         })).catch((pp => {
-           throw this.loads.delete(ip), pp
-         })), this.loads.set(ip, cp)), cp
-       }
-       loadedFactory(pp) {
-         const ip = (0, Op.Mb)(pp);
- ... (4 more removed lines; see GitHub link above)
+         this.bytes = QQ, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength)
+       }
+       value() {
+         const QQ = this.u8();
+         if (QQ <= 127) return QQ;
+         if (QQ >= 224) return QQ - 256;
+         if (QQ >= 128 && QQ <= 143) return this.map(15 & QQ);
+         if (QQ >= 144 && QQ <= 159) return this.array(15 & QQ);
+         if (QQ >= 160 && QQ <= 191) return this.str(31 & QQ);
+         switch (QQ) {
+           case 192:
+             return null;
+           case 194:
+             return !1;
+           case 195:
+             return !0;
+ ... (136 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L122-L129` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L298-L301) · [Before (L122-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L122-L129)

```diff
-   },
-   39827: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
-     });
-     var Op = cp(9436),
-       op = cp(34448),
-       Ip = cp(3400);
+     const zQ = new TextEncoder,
+       sQ = -(2n ** 63n),
+       FQ = 2n ** 63n - 1n,
+       PQ = 2n ** 64n - 1n;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L132-L137` → after: `L304-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L304-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L304-L377) · [Before (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L132-L137)

```diff
-       if (pp === Op.d) return 0;
-       const ip = (0, Ip.c)(pp);
-       if (void 0 !== ip && ip <= op.MAX_BLOCK_ID) return ip;
-       const cp = (0, Ip.c)(pp.split("|")[0]);
-       if (void 0 !== cp && cp <= op.MAX_BLOCK_ID && (0, op.rootMetaDescOf)(cp) === pp) return cp;
-       throw new Error(`Invalid block name. You sent ${pp}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       const WQ = new JQ;
+       return WQ.value(QQ, 0), WQ.bytes()
+     }
+     class JQ {
+       constructor() {
+         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
+       }
+       bytes() {
+         return this.buf.subarray(0, this.at)
+       }
+       value(QQ, WQ) {
+         if (WQ > 512) throw new Error("msgpack: nested too deep");
+         switch (typeof QQ) {
+           case "undefined":
+             return this.u8(212), this.u8(0), void this.u8(0);
+           case "boolean":
+ ... (58 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L140` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L380) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L140)

```diff
-   39391: (pp, ip, cp) => {
+   40853: (QQ, WQ, XQ) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L142` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L382-L386) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L142)

```diff
-       e: () => op
+       c: () => zQ
+     });
+     var wQ = XQ(40845);
+     const qQ = new TextDecoder("utf-8", {
+       ignoreBOM: !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L147` → after: `L390-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L390-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L390-L429) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L147)

```diff
-         this.screen = pp, this.hidesHud = !1
+         this.buf = QQ, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let QQ = this.u8(),
+           WQ = 127 & QQ,
+           XQ = 128;
+         for (; 128 & QQ;) {
+           if (XQ > 2 ** 63) throw new RangeError("avro: varint too long");
+           QQ = this.u8(), WQ += (127 & QQ) * XQ, XQ *= 128
+         }
+         return WQ % 2 === 1 ? -(WQ + 1) / 2 : WQ / 2
+       }
+       float() {
+ ... (24 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L149-L150` → after: `L431-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L431-L433) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L149-L150)

```diff
-       show(pp, ip) {
-         this.screen.setFade(pp.colour, pp.alpha), this.screen.setLetterbox(!0 === ip.letterbox, pp.alpha < 1), this.setHudHidden(!0 === ip.hideHud)
+       fixed(QQ) {
+         const WQ = this.take(QQ);
+         return this.buf.slice(WQ, WQ + QQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L152-L153` → after: `L435-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L435-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L435-L438) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L152-L153)

```diff
-       clear() {
-         this.screen.clear(), this.setHudHidden(!1)
+       index(QQ) {
+         const WQ = this.long();
+         if (!(WQ >= 0 && WQ < QQ)) throw new RangeError(`avro: index ${WQ} of ${QQ}`);
+         return WQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L155-L158` → after: `L440-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L440-L446) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L155-L158)

```diff
-       setHudHidden(pp) {
-         this.hidesHud !== pp && (this.hidesHud = pp, Op.c.set({
-           isUiHiddenByCamera: pp
-         }))
+       sj(QQ) {
+         const WQ = [];
+         for (let XQ = this.long(); 0 !== XQ; XQ = this.long()) {
+           XQ = this.block(XQ);
+           for (let wQ = 0; wQ < XQ; wQ++) WQ.push(QQ(this))
+         }
+         return WQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L162` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L492) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L162)

```diff
-   39362: (pp, ip, cp) => {
+   40845: (QQ, WQ, XQ) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L165-L167` → after: `L497-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L497-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L497-L513) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L165-L167)

```diff
-       D: () => Dp,
-       e: () => Op,
-       i: () => Pp,
+       C: () => qQ,
+       E: () => sQ,
+       H: () => IQ,
+       J: () => HQ,
+       N: () => dQ,
+       P: () => bQ,
+       Q: () => gQ,
+       U: () => JQ,
+       W: () => aQ,
+       X: () => jQ,
+       Y: () => pQ,
+       ab: () => FQ,
+       b: () => UQ,
+       cb: () => hQ,
+       f: () => yQ,
+       h: () => VQ,
+ ... (1 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L169-L173` → after: `L515-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L515-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L515-L519) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L169-L173)

```diff
-       m: () => Sp,
-       o: () => yp,
-       s: () => Lp,
-       w: () => Up,
-       y: () => Yp
+       n: () => wQ,
+       p: () => TQ,
+       q: () => GQ,
+       u: () => rQ,
+       x: () => PQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L175-L177` → after: `L521-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L521-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L521-L545) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L175-L177)

```diff
-     const Op = Math.PI / 2 - .001,
-       op = 2 * Math.PI,
-       Ip = 1e-9;
+     const wQ = 2,
+       qQ = 12,
+       TQ = 27,
+       zQ = 40,
+       sQ = 52,
+       FQ = 59,
+       PQ = 63,
+       gQ = 83,
+       JQ = 84,
+       rQ = 89,
+       IQ = 91,
+       jQ = 93,
+       BQ = 94,
+       yQ = 95,
+       VQ = 97,
+       DQ = 101,
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L180-L189` → after: `L548-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L548-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L548-L716) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L180-L189)

```diff
-       ip.heading = pp.heading, ip.pitch = pp.pitch
-     }
- 
-     function xp(pp, ip) {
-       const cp = ip - pp;
-       return cp - op * Math.floor((cp + Math.PI) / op)
-     }
- 
-     function Lp(pp, ip, cp) {
-       return pp + xp(pp, ip) * cp
+       switch (QQ) {
+         case wQ:
+           return function(QQ) {
+             return {
+               aT: ZQ(QQ),
+               lT: QQ.float(),
+               hT: QQ.long()
+             }
+           }(WQ);
+         case qQ:
+           return function(QQ) {
+             return {
+               Cq: EQ(QQ),
+               uq: EQ(QQ)
+             }
+           }(WQ);
+ ... (153 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L193-L195` → after: `L720-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L720-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L720-L722) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L193-L195)

```diff
-       if (!Number.isFinite(pp)) return pp;
-       const ip = pp - op * Math.floor(pp / op);
-       return ip < op ? ip : 0
+       return {
+         entityName: QQ.str()
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L198-L199` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L725-L727) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L198-L199)

```diff
-     function Dp(pp, ip) {
-       return pp + xp(pp, ip)
+     function cQ(QQ) {
+       const WQ = QQ.index(4);
+       return 0 === WQ ? QQ.str() : 1 === WQ ? QQ.long() : 2 === WQ ? QQ.bool() : iQ(QQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L203` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L731-L733) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L203)

```diff
-       return Math.max(-Op, Math.min(Op, pp))
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return QQ.map(cQ)
+       }(QQ)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L206-L208` → after: `L736-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L736-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L736-L740) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L206-L208)

```diff
-     function Pp(pp, ip, cp) {
-       const Op = Math.cos(ip);
-       return cp[0] = Op * Math.sin(pp), cp[1] = -Math.sin(ip), cp[2] = Op * Math.cos(pp), cp
+     function RQ(QQ) {
+       return {
+         translationKey: QQ.str(),
+         params: AQ(QQ)
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L211-L213` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L743-L744) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L211-L213)

```diff
-     function Wp(pp, ip, cp, Op) {
-       const op = Math.sqrt(pp * pp + cp * cp);
-       return op < Ip && Math.abs(ip) < Ip || (op >= Ip && (Op.heading = Math.atan2(pp, cp)), Op.pitch = Ap(Math.atan2(-ip, op) + 0)), Op
+     function EQ(QQ) {
+       return 0 === QQ.index(2) ? null : QQ.str()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L216-L217` → after: `L747-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L747-L754) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L216-L217)

```diff
-     function yp(pp, ip) {
-       return Wp(pp[0], pp[1], pp[2], ip)
+     function CQ(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           color: EQ(QQ),
+           colour: EQ(QQ),
+           fontSize: EQ(QQ)
+         }
+       }(QQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L220-L221` → after: `L757-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L757-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L757-L761) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L220-L221)

```diff
-     function Up(pp, ip, cp) {
-       return Wp(ip[0] - pp[0], ip[1] - pp[1], ip[2] - pp[2], cp)
+     function uQ(QQ) {
+       return {
+         icon: QQ.str(),
+         style: CQ(QQ)
+       }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L232-L236` → after: `L765-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L765-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L765-L769) · [Before (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L232-L236)

```diff
-       var ip;
-       const cp = "default" === pp.mode ? "movement" : null !== (ip = pp.playerFacing) && void 0 !== ip ? ip : "movement";
-       return "cursor" === cp ? {
-         facing: cp,
-         mouseTurns: null
+       const WQ = QQ.index(3);
+       return 0 === WQ ? {
+         string: QQ.str()
+       } : 1 === WQ ? {
+         styledEntityName: iQ(QQ)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L238-L239` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L771) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L238-L239)

```diff
-         facing: cp,
-         mouseTurns: "default" !== pp.mode && void 0 !== pp.playerLook ? "look" : "view"
+         styledTranslatedText: RQ(QQ)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L243-L244` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L775-L777) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L243-L244)

```diff
-     function Ip(pp, ip, cp, op, Ip, Sp) {
-       return Sp.QE = 0, Sp.TE = 0, Sp.pointedAt = void 0, void 0 !== op ? Ip ? (Sp.pointedAt = op, pp) : (0, Op.y)(op.heading) : Ip ? (Sp.QE = ip, Sp.TE = cp, pp) : (0, Op.y)(pp + ip)
+     function kQ(QQ) {
+       const WQ = QQ.index(3);
+       return 0 === WQ ? null : 1 === WQ ? QQ.str() : QQ.long()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L255-L258` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L780-L781) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L255-L258)

```diff
-     function Sp(pp, ip, cp, Op) {
-       if (!(Op > 0)) return ip;
-       const op = ip > pp ? Math.min(ip, pp + cp / Op) : Math.max(ip, pp - cp / Op);
-       return Math.abs(ip - op) < 1e-9 ? ip : op
+     function fQ(QQ) {
+       return 0 === QQ.index(2) ? null : QQ.float()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L260-L314` → after: `L783-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L783-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L783-L792) · [Before (L260-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L260-L314)

```diff
-     class xp {
-       constructor() {
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
-           colour: Op.e,
-           alpha: 0
-         }
-       }
-       getScreen() {
-         return this.screen
-       }
-       fadeOut(pp) {
-         !this.isGoingOut() && this.sinceTurnMs < Op.j.minFadeTurnMs ? this.waiting = {
-           turn: "out",
-           transition: pp
-         } : (this.waiting = null, this.startOut(pp))
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function SQ(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           color: EQ(QQ),
+           colour: EQ(QQ),
+           fontWeight: kQ(QQ),
+           fontStyle: EQ(QQ),
+           fontSize: EQ(QQ),
+           opacity: fQ(QQ)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L316` → after: `L794-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L794-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L794-L801) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L316)

```diff
-         return "in" === this.phase && (ip.alpha = Sp(ip.alpha, 0, Ip, this.inMs), ip.alpha <= 0 && (this.phase = null, this.clearMs = 0)), cp
+       }(QQ)
+     }
+ 
+     function tQ(QQ) {
+       return {
+         str: LQ(QQ),
+         style: SQ(QQ),
+         clickableUrl: EQ(QQ)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L324-L325` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L805-L806) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L324-L325)

```diff
-     function Pp(pp, ip) {
-       for (let cp = 0; cp < ip.length; cp++) ip[cp] = pp[cp]
+     function oQ(QQ) {
+       return QQ.str()
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L328-L330` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L809-L810) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L328-L330)

```diff
-     function Wp(pp, ip) {
-       var cp;
-       return null !== (cp = pp.fov) && void 0 !== cp ? cp : ip.getDefaultFov()
+     function eQ(QQ) {
+       return QQ.sj(oQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L333-L340` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L813-L814) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L333-L340)

```diff
-     function yp(pp, ip, cp, Op, op) {
-       const Ip = 2 / Op,
-         Sp = Math.exp(-Ip * op);
-       for (let xp = 0; xp < pp.length; xp++) {
-         const Op = pp[xp] - cp[xp],
-           Lp = (ip[xp] + Ip * Op) * op;
-         pp[xp] = cp[xp] + (Op + Lp) * Sp, ip[xp] = (ip[xp] - Ip * Lp) * Sp
-       }
+     function nQ(QQ) {
+       return 0 === QQ.index(2) ? null : eQ(QQ)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L342-L407` → after: `L816-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L816-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L816-L824) · [Before (L342-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L342-L407)

```diff
-     class Up {
-       constructor(pp, ip, cp, Op) {
-         var Ip, Sp, xp, Lp, Yp;
-         this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.tw = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
-           heading: 0,
-           pitch: 0
-         }, this.points = [], this.forward = [0, 0, 0], this.base = {
-           heading: (0, op.y)((0, Dp.o)(null !== (Ip = pp.viewHeading) && void 0 !== Ip ? Ip : 0)),
-           pitch: (0, op.l)((0, Dp.o)(null !== (Sp = pp.viewElevation) && void 0 !== Sp ? Sp : 45))
-         }, this.closestDistance = null !== (xp = pp.closestDistance) && void 0 !== xp ? xp : Math.min(6, null !== (Lp = pp.furthestDistance) && void 0 !== Lp ? Lp : 1 / 0), this.furthestDistance = null !== (Yp = pp.furthestDistance) && void 0 !== Yp ? Yp : Math.max(64, this.close … [truncated]
-         const Ap = (0, op.i)(this.base.heading, this.base.pitch, this.forward),
-           Pp = Op.position,
-           Wp = this.closestDistance;
-         this.goal = [Pp[0] + Ap[0] * Wp, Pp[1] + Ap[1] * Wp, Pp[2] + Ap[2] * Wp, Wp, this.base.heading, this.base.pitch]
-       }
-       update(pp, ip, cp) {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function xQ(QQ) {
+       return {
+         type: QQ.str(),
+         progress: QQ.float(),
+         width: EQ(QQ),
+         height: EQ(QQ),
+         colours: nQ(QQ),
+         backgroundColour: EQ(QQ)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L410-L448` → after: `L827-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L827-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L827-L832) · [Before (L410-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L410-L448)

```diff
-     class wp {
-       constructor(pp) {
-         this.limits = pp, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
-       }
-       continueFrom(pp) {
-         this.limits && (this.yawOffset = pp.yawOffset, this.pitchOffset = pp.pitchOffset, this.idleMs = pp.idleMs)
-       }
-       update(pp, ip) {
-         const cp = this.limits;
-         if (!cp) return;
-         const Op = Number.isFinite(ip.QE) ? ip.QE : 0,
-           op = Number.isFinite(ip.TE) ? ip.TE : 0;
-         if (ip.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: ip.pointedAt.heading,
-           pitch: ip.pointedAt.pitch
-         };
- ... (23 more removed lines; see GitHub link above)
+ 
+     function YQ(QQ) {
+       return {
+         type: QQ.str(),
+         action: QQ.str(),
+         style: SQ(QQ)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L450-L451` → after: `L834-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L834-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L834-L851) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L450-L451)

```diff
-       unapply(pp, ip) {
-         ip.heading = (0, op.y)(pp.heading - this.yawOffset), ip.pitch = (0, op.l)(pp.pitch - this.pitchOffset)
+     }
+ 
+     function NQ(QQ) {
+       const WQ = QQ.index(7);
+       return 0 === WQ ? {
+         string: QQ.str()
+       } : 1 === WQ ? {
+         entityName: iQ(QQ)
+       } : 2 === WQ ? {
+         translatedText: RQ(QQ)
+       } : 3 === WQ ? {
+         styledIcon: uQ(QQ)
+       } : 4 === WQ ? {
+         MQ: tQ(QQ)
+       } : 5 === WQ ? {
+         styledProgressBar: xQ(QQ)
+ ... (2 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L457` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L856) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L457)

```diff
-       return Math.sqrt(pp[0] * pp[0] + pp[1] * pp[1] + pp[2] * pp[2])
+       return QQ.sj(NQ)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L460-L463` → after: `L860-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L860-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L860-L861) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L460-L463)

```diff
-     function Hp(pp, ip, cp, Op, op) {
-       const Ip = op * op,
-         Sp = Ip * op;
-       return (2 * Sp - 3 * Ip + 1) * pp + (Sp - 2 * Ip + op) * ip + (-2 * Sp + 3 * Ip) * cp + (Sp - Ip) * Op
+     function KQ(QQ) {
+       return OQ[QQ.index(5)]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L466-L468` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L864-L865) · [Before (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L466-L468)

```diff
-     function dp(pp, ip, cp, Op, op) {
-       const Ip = op * op;
-       return (6 * Ip - 6 * op) * pp + (3 * Ip - 4 * op + 1) * ip + (-6 * Ip + 6 * op) * cp + (3 * Ip - 2 * op) * Op
+     function mQ(QQ) {
+       return 0 === QQ.index(2) ? null : QQ.double()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L471-L484` → after: `L868-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L868-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L868-L878) · [Before (L471-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L471-L484)

```diff
-     function ep(pp, ip) {
-       const cp = ip[0] - pp[0],
-         Op = ip[1] - pp[1],
-         op = ip[2] - pp[2];
-       return Math.sqrt(cp * cp + Op * Op + op * op)
-     }
- 
-     function jp(pp, ip, cp, Op, op, Ip) {
-       for (let Sp = 0; Sp < 3; Sp++) Ip[Sp] = op ? pp[Sp] * Op : cp[Sp] - ip[Sp];
-       return op && function(pp, ip) {
-         const cp = tp(pp);
-         if (cp > ip) {
-           const Op = ip / cp;
-           pp[0] *= Op, pp[1] *= Op, pp[2] *= Op
+     function MQ(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           ZQ: mQ(QQ),
+           OQ: QQ.double(),
+           KQ: QQ.double(),
+           mQ: QQ.bool(),
+           description: ZQ(QQ),
+           WW: QQ.str(),
+           scale: mQ(QQ),
+           rotation: mQ(QQ)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L486` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L880) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L486)

```diff
-       }(Ip, 3 * ep(ip, cp)), Ip
+       }(QQ)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L489-L493` → after: `L883-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L883-L884) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L489-L493)

```diff
-     function kp(pp, ip, cp, Op) {
-       for (let op = 0; op < 3; op++) Op[op] = 6 * (ip[op] - pp[op]) - 2 * cp[op];
-       if (tp(Op) < vp)
-         for (let op = 0; op < 3; op++) Op[op] = ip[op] - pp[op];
-       return Op
+     function QW(QQ) {
+       return 0 === QQ.index(2) ? null : QQ.bool()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L496-L497` → after: `L887-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L887-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L887-L898) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L496-L497)

```diff
-     function mp(pp, ip) {
-       return [2 * ip[0] - pp[0], 2 * ip[1] - pp[1], 2 * ip[2] - pp[2]]
+     function WW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           wW: QQ.double(),
+           icon: QQ.str(),
+           label: ZQ(QQ),
+           qW: QQ.bool(),
+           scale: mQ(QQ),
+           rotation: mQ(QQ),
+           TW: QW(QQ)
+         }
+       }(QQ)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L500-L511` → after: `L901-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L901-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L901-L916) · [Before (L500-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L500-L511)

```diff
-     function Rp(pp, ip, cp, Op, op, Ip, Sp) {
-       if (!Ip && !Sp) return 0;
-       const xp = Ip ? pp : 2 * ip - cp,
-         Lp = Sp ? cp : 2 * ip - pp,
-         Yp = Ip ? Op : op,
-         Dp = Sp ? op : Op,
-         Ap = (ip - xp) / Yp,
-         Pp = (Lp - ip) / Dp;
-       if (Ap * Pp <= 0) return 0;
-       const Wp = (Lp - xp) / (Yp + Dp),
-         yp = 3 * Math.min(Math.abs(Ap), Math.abs(Pp));
-       return Math.max(-yp, Math.min(yp, Wp))
+     function XW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           ZQ: mQ(QQ),
+           sW: QQ.double(),
+           FW: QQ.double(),
+           PW: QQ.double(),
+           gravity: QQ.double(),
+           gW: QQ.double(),
+           JW: QQ.double(),
+           rW: QQ.double(),
+           mQ: QQ.bool(),
+           description: ZQ(QQ),
+           icon: EQ(QQ)
+         }
+       }(QQ)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L514-L520` → after: `L919-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L919-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L919-L929) · [Before (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L514-L520)

```diff
-     function qp(pp, ip, cp, Op, op, Ip, Sp) {
-       const {
-         u: xp,
-         segmentMs: Lp
-       } = pp;
-       if (!pp.curved) return cp + (Op - cp) * xp;
-       return Hp(cp, Rp(ip, cp, Op, pp.beforeMs, Lp, Ip, !0) * Lp, Op, Rp(cp, Op, op, Lp, pp.afterMs, !0, Sp) * Lp, xp)
+     function wW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           speed: QQ.double(),
+           jW: QQ.double(),
+           label: ZQ(QQ),
+           icon: EQ(QQ),
+           scale: mQ(QQ),
+           rotation: mQ(QQ)
+         }
+       }(QQ)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L524` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L933) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L524)

```diff
-       return Math.abs(pp.pitch) >= op.e
+       return 0 === QQ.index(2) ? null : QQ.long()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L526-L574` → after: `L935-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L935-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L935-L944) · [Before (L526-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L526-L574)

```diff
-     class Cp {
-       constructor(pp, ip, cp, Op, op) {
-         this.nodes = pp, this.prevNodes = cp, this.nextNodes = Op, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.fromAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.toAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.afterAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.borrowedAngles = {
-           heading: 0,
- ... (33 more removed lines; see GitHub link above)
+ 
+     function TW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           yW: QQ.long(),
+           VW: QQ.double(),
+           DW: QQ.double(),
+           pW: qW(QQ),
+           label: ZQ(QQ),
+           icon: EQ(QQ)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L576-L604` → after: `L946-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L946-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L946-L956) · [Before (L576-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L576-L604)

```diff
-         const Sp = this.tangents[pp];
-         return Sp ? ((0, op.m)(Sp, Op), "tangent") : "none"
-       }
-       liveTangent(pp, ip) {
-         const cp = this.nodes[pp.index].position,
-           Op = this.nodes[pp.toIndex].position,
-           Ip = this.derivative;
-         for (let op = 0; op < 3; op++) Ip[op] = dp(cp[op], pp.fromTangent[op], Op[op], pp.toTangent[op], pp.u);
-         return tp(Ip) > 1e-9 ? ((0, op.o)(Ip, ip), !0) : !(ep(cp, Op) < vp) && ((0, op.o)(kp(cp, Op, pp.u < .5 ? pp.toTangent : pp.fromTangent, Ip), ip), !0)
-       }
-       nodeTangent(pp, ip, cp) {
-         var Op;
-         const Ip = pp[cp];
-         if (tp(Ip) > 1e-9) return (0, op.o)(Ip, {
-           heading: 0,
-           pitch: 0
- ... (13 more removed lines; see GitHub link above)
+       }(QQ)
+     }
+ 
+     function zW(QQ) {
+       return {
+         type: KQ(QQ),
+         progressBar: MQ(QQ),
+         timedClick: WW(QQ),
+         gravityBar: XW(QQ),
+         precisionBar: wW(QQ),
+         rhythmClick: TW(QQ)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L608-L616` → after: `L961-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L961-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L961-L964) · [Before (L608-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L608-L616)

```diff
-     function Ep(pp, ip) {
-       const cp = pp.lookDirection || ip.lookDirection ? function(pp, ip) {
-         if (!pp || !ip) return pp === ip;
-         const cp = tp(pp),
-           Op = tp(ip);
-         return Math.hypot(pp[0] / cp - ip[0] / Op, pp[1] / cp - ip[1] / Op, pp[2] / cp - ip[2] / Op) < vp
-       }(pp.lookDirection, ip.lookDirection) : (Op = pp.lookAt, op = ip.lookAt, "object" !== typeof Op || "object" !== typeof op ? Op === op : ep(Op, op) < vp);
-       var Op, op;
-       return ep(pp.position, ip.position) < vp && pp.fov === ip.fov && cp
+     function FW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return sW[QQ.index(2)]
+       }(QQ)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L618-L724` → after: `L966-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L966-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L966-L968) · [Before (L618-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L618-L724)

```diff
-     class Xp {
-       constructor(pp, ip, cp) {
-         if (this.smooth = ip, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
-             toIndex: 0,
-             u: 0,
-             segmentMs: 0,
-             curved: !1,
-             beforeIndex: -1,
-             afterIndex: -1,
-             beforeMs: 0,
-             afterMs: 0,
-             fromTangent: [0, 0, 0],
-             toTangent: [0, 0, 0]
-           }, 0 === pp.length) throw new Error("A camera path needs at least one keyframe");
-         for (let Ip = 1; Ip < pp.length; Ip++)
- ... (91 more removed lines; see GitHub link above)
+ 
+     function PW(QQ) {
+       return QQ.float()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L726-L750` → after: `L970-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L970-L972) · [Before (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L726-L750)

```diff
-     class lp {
-       constructor(pp) {
-         this.WP = pp, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ip => pp.getEntityPosition(ip), this.readAimPoint = ip => pp.getEntityAimPoint(ip)
-       }
-       aimPoint(pp) {
-         return "string" !== typeof pp ? (0, Lp.o)(pp, 3) ? pp : null : this.resolve(pp, this.readAimPoint, this.lastAimPoints)
-       }
-       currentAimPoint(pp) {
-         const ip = "string" === typeof pp ? this.WP.getEntityAimPoint(pp) : pp;
-         return ip && (0, Lp.o)(ip, 3) ? ip : null
-       }
-       feetPosition(pp) {
-         return this.resolve(pp, this.readFeet, this.lastFeet)
-       }
-       heading(pp) {
-         const ip = this.WP.getEntityHeading(pp);
- ... (9 more removed lines; see GitHub link above)
+ 
+     function gW(QQ) {
+       return QQ.sj(PW)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L754-L757` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L976) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L754-L757)

```diff
-       return {
-         heading: pp.heading,
-         pitch: pp.pitch
-       }
+       return 0 === QQ.index(2) ? null : gW(QQ)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L760-L761` → after: `L979-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L979-L980) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L760-L761)

```diff
-     function Jp(pp, ip) {
-       Number.isFinite(pp.heading) && Number.isFinite(pp.pitch) || (0, op.m)(ip, pp)
+     function rW(QQ) {
+       return 0 === QQ.index(2) ? null : ZQ(QQ)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L764-L767` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L983-L984) · [Before (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L764-L767)

```diff
-     function Bp(pp, ip, cp, Op, Ip) {
-       if (ip) return void(0, op.o)(ip, Ip);
-       const Sp = Op.aimPoint(cp);
-       Sp && (0, op.w)(pp, Sp, Ip)
+     function IW(QQ) {
+       return QQ.long()
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L769-L783` → after: `L986-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L986-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L986-L990) · [Before (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L769-L783)

```diff
-     class Np {
-       constructor(pp, ip, cp, Op) {
-         this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.base = Qp(Op)
-       }
-       update(pp, ip, cp) {
-         var Op;
-         const op = this.settings;
-         (0, Lp.g)(op.position, cp.position), Bp(op.position, op.lookDirection, null !== (Op = op.lookAt) && void 0 !== Op ? Op : this.WP.localPlayerId, this.targets, this.base), ip.apply(this.base, cp), cp.fov = Wp(op, this.WP)
-       }
-       continueFrom(pp) {
-         pp instanceof Np && (0, op.m)(pp.base, this.base)
-       }
-       reset(pp) {
-         Jp(this.base, pp)
-       }
+ 
+     function jW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return QQ.sj(IW)
+       }(QQ)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L785-L840` → after: `L992-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L992-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L992-L997) · [Before (L785-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L785-L840)

```diff
-     class Tp {
-       constructor(pp, ip, cp, Op) {
-         this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.tw = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
-       }
-       update(pp, ip, cp) {
-         var Op, op, Ip;
-         const Sp = this.settings,
-           xp = null !== (Op = Sp.target) && void 0 !== Op ? Op : this.WP.localPlayerId,
-           Yp = this.targets.feetPosition(xp);
-         let Dp = !1;
-         Yp && (Dp = this.foundFeet && ep(this.lastFeet, Yp) > 32 + .1 * pp, (0, Lp.g)(Yp, this.lastFeet), this.foundFeet = !0, this.placeGoal(Yp, xp));
-         const Ap = null !== (op = Sp.smoothMs) && void 0 !== op ? op : 0;
-         !this.started || Ap < 1 || Dp ? ((0, Lp.g)(this.goal, this.smoothed), this.tw.fill(0), this.started = !0) : yp(this.smoothed, this.tw, this.goal, Ap, pp), Dp && (this.distance = -1), (0, Lp.g)(this.smoothed, cp.position);
-         const Pp = !0 === Sp.avoidTerrain ? this.pullIn(xp, pp, cp) : 1;
-         let Up = this.goal;
-         if ("target" === Sp.offsetSpace) Up = cp.position;
- ... (40 more removed lines; see GitHub link above)
+ 
+     function BW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           Yq: QQ.str(),
+           Nq: QQ.long()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L842-L843` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L999) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L842-L843)

```diff
-         this.goal[0] = pp[0] + Op, this.goal[1] = pp[1] + cp[1], this.goal[2] = pp[2] + op
-       }
+       }(QQ)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L845-L856` → after: `L1001-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1001-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1001-L1011) · [Before (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L845-L856)

```diff
-     class fp {
-       constructor(pp, ip, cp, Op) {
-         var op, Ip;
-         this.settings = pp, this.WP = ip, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = pp.keyframes.length > 0 ? new Xp(pp.keyframes, null === (op = pp.smooth) || void 0 === op || op, null !== (Ip = pp.loop) && void 0  … [truncated]
-       }
-       update(pp, ip, cp) {
-         this.elapsedMs += pp;
-         const Op = Wp(this.settings, this.WP);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Op, this.base) : this.base.fov = Op, (0, Lp.g)(this.base.position, cp.position), cp.fov = this.base.fov, ip.apply(this.base, cp)
-       }
-       continueFrom(pp) {
-         pp instanceof fp && (0, Op.p)(pp.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = pp.elapsedMs, (0, Lp.e)(pp.base, this.base))
+ 
+     function yW(QQ) {
+       const WQ = QQ.index(3);
+       return 0 === WQ ? null : 1 === WQ ? QQ.str() : RQ(QQ)
+     }
+ 
+     function VW(QQ) {
+       return {
+         vT: QQ.str(),
+         dT: QQ.str(),
+         HT: QQ.str()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L858-L859` → after: `L1013-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1013-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1013-L1020) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L858-L859)

```diff
-       reset(pp) {
-         Jp(this.base, pp), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+     }
+ 
+     function DW(QQ) {
+       return {
+         LQ: QQ.str(),
+         kQ: EQ(QQ),
+         fQ: EQ(QQ),
+         SQ: eQ(QQ)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L863-L864` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1024-L1025) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L863-L864)

```diff
-     function bp(pp, ip) {
-       return (0, Op.q)(pp, ip)
+     function pW(QQ) {
+       return QQ.sj(DW)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L866-L888` → after: `L1027-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1027-L1033) · [Before (L866-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L866-L888)

```diff
-     class hp {
-       constructor(pp, ip, cp) {
-         var Op;
-         this.settings = pp, this.WP = ip, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const op = null !== cp && cp.settings.mode === pp.mode,
-           Ip = op ? cp.pose : ip.getDefaultPose();
-         this.pose = (0, Lp.e)(Ip, (0, Lp.i)()), this.lastGoodPose = (0, Lp.e)(op ? cp.lastGoodPose : Ip, (0, Lp.i)()), this.look = new wp(pp.playerLook), this.targets = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.targets) && void 0 !== Op ? Op : new lp(ip);
-         const Sp = (0, Lp.e)(Ip, (0, Lp.i)());
-         op && cp.look.unapply(Sp, Sp), this.mode = function(pp, ip, cp, Op) {
-           switch (pp.mode) {
-             case "fixed":
-               return new Np(pp, ip, cp, Op);
-             case "follow":
-               return new Tp(pp, ip, cp, Op);
-             case "path":
-               return new fp(pp, ip, cp, Op);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function GW(QQ) {
+       return {
+         NX: QQ.str(),
+         x: QQ.long(),
+         y: QQ.long(),
+         z: QQ.long()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L893` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1038) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L893)

```diff
-       return [0, 0, pp[2], pp[3]]
+       return QQ.sj(GW)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L895-L975` → after: `L1040-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1040-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1040-L1046) · [Before (L895-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L895-L975)

```diff
-     class np {
-       constructor(pp) {
-         this.WP = pp, this.settings = {
-           mode: "default"
-         }, this.pending = null, this.fade = new xp, this.shot = null, this.blend = null, this.mixed = (0, Lp.i)(), this.output = (0, Lp.i)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
-           length: 3
-         }, (() => [0, 0, 0]))
-       }
-       setSettings(pp) {
-         const ip = (0, Yp.c)(pp);
-         if ((0, Op.p)(ip, this.pending ? this.pending.settings : this.settings)) return;
-         const cp = bp(this.settings, ip);
-         if (void 0 !== ip.transition && !cp) return this.pending = {
-           settings: ip,
-           shot: "default" === ip.mode ? null : new hp(ip, this.WP, null)
-         }, void this.fade.fadeOut(ip.transition);
- ... (65 more removed lines; see GitHub link above)
+ 
+     function bW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           Bw: QQ.float(),
+           yw: QQ.long(),
+           Vw: QQ.long()
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L978-L985` → after: `L1062-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1062-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1062-L1073) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L978-L985)

```diff
-       writeOutput(pp) {
-         const ip = this.output;
-         (0, Lp.k)(pp) ? (0, Lp.e)(pp, ip) : this.hasOutput || (0, Lp.e)(this.WP.getDefaultPose(), ip), ip.pitch = (0, op.l)(ip.pitch);
-         const cp = this.WP.getDefaultFov(),
-           Ip = Number.isFinite(cp) && cp > 0 && cp < 180,
-           Sp = Ip ? Math.min(Op.j.minFov, cp) : Op.j.minFov,
-           xp = Ip ? Math.max(Op.j.maxFov, cp) : Op.j.maxFov;
-         return ip.fov = Number.isFinite(ip.fov) ? Math.min(xp, Math.max(Sp, ip.fov)) : xp, this.hasOutput = !0, ip
+     }
+ 
+     function dW(QQ) {
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return QQ.sj(vW)
+       }(QQ)
+     }
+ 
+     function HW(QQ) {
+       return {
+         qw: QQ.str(),
+         Tw: dW(QQ)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1005` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1077) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1005)

```diff
-     function Ip() {
+     function aW(QQ) {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1007-L1010` → after: `L1079-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1079-L1080) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1007-L1010)

```diff
-         position: [0, 0, 0],
-         heading: 0,
-         pitch: 0,
-         fov: 0
+         blockName: QQ.str(),
+         frequency: QQ.float()
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1014-L1015` → after: `L1084-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1084-L1085) · [Before (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1014-L1015)

```diff
-     function Sp(pp, ip) {
-       return ip[0] = pp[0], ip[1] = pp[1], ip[2] = pp[2], ip
+     function lW(QQ) {
+       return QQ.sj(aW)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1018-L1019` → after: `L1088-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1088-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1088-L1094) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1018-L1019)

```diff
-     function xp(pp, ip) {
-       return Sp(pp.position, ip.position), ip.heading = pp.heading, ip.pitch = pp.pitch, ip.fov = pp.fov, ip
+     function hW(QQ) {
+       return {
+         Gw: QQ.str(),
+         Uw: QQ.str(),
+         frequency: QQ.float(),
+         bw: lW(QQ)
+       }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1022-L1023` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1097-L1098) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1022-L1023)

```diff
-     function Lp(pp, ip) {
-       return Array.isArray(pp) && pp.length === ip && pp.every(Number.isFinite)
+     function iW(QQ) {
+       return QQ.sj(hW)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1027` → after: `L1102-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1102-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1102-L1109) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1027)

```diff
-       return Lp(pp.position, 3) && Number.isFinite(pp.heading) && Number.isFinite(pp.pitch) && Number.isFinite(pp.fov)
+       return {
+         blockName: QQ.str(),
+         radius: QQ.long(),
+         lw: QQ.long(),
+         mX: QQ.long(),
+         MX: QQ.long(),
+         hw: QQ.float()
+       }
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1030-L1032` → after: `L1112-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1112-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1112-L1113) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1030-L1032)

```diff
-     function Dp(pp, ip, cp, op, Ip) {
-       for (let Op = 0; Op < 3; Op++) Ip.position[Op] = pp.position[Op] + (ip.position[Op] - pp.position[Op]) * op;
-       return Ip.heading = (0, Op.y)(pp.heading + cp * op), Ip.pitch = pp.pitch + (ip.pitch - pp.pitch) * op, Ip.fov = pp.fov + (ip.fov - pp.fov) * op, Ip
+     function AW(QQ) {
+       return QQ.sj(cW)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1045-L1046` → after: `L1116-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1116-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1116-L1125) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1045-L1046)

```diff
-     function xp(pp, ip, cp, Op) {
-       return Number.isFinite(pp) ? Math.min(cp, Math.max(ip, pp)) : Op
+     function RW(QQ) {
+       return {
+         mX: QQ.long(),
+         MX: QQ.long(),
+         Qw: QQ.long(),
+         Ww: QQ.bool(),
+         Xw: HW(QQ),
+         Dw: iW(QQ),
+         Hw: AW(QQ)
+       }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1049-L1050` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1128-L1129) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1049-L1050)

```diff
-     function Lp(pp, ip, cp) {
-       return void 0 !== pp && Number.isFinite(pp) ? Math.min(cp, Math.max(ip, pp)) : void 0
+     function EW(QQ) {
+       return QQ.sj(RW)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1054-L1055` → after: `L1133-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1133-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1133-L1138) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1054-L1055)

```diff
-       const ip = Op.j.maxCoordinate;
-       return [Math.min(ip, Math.max(-ip, pp[0])), Math.min(ip, Math.max(-ip, pp[1])), Math.min(ip, Math.max(-ip, pp[2]))]
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           name: QQ.str(),
+           Ew: EQ(QQ)
+         }
+       }(QQ)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1059` → after: `L1142-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1142-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1142-L1147) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1059)

```diff
-       return "string" === typeof pp ? pp : (0, op.o)(pp, 3) ? Yp(pp) : void 0
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           terrain: CW(QQ),
+           Cw: AW(QQ)
+         }
+       }(QQ)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1064` → after: `L1151-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1151-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1151-L1215) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1064)

```diff
-       return "string" === typeof pp && Ap.test(pp)
+       return 0 === QQ.index(2) ? null : function(QQ) {
+         return {
+           layers: EW(QQ),
+           iw: uW(QQ)
+         }
+       }(QQ)
+     }
+   },
+   40835: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       $: () => pQ,
+       C: () => GQ,
+       F: () => UQ,
+       G: () => yQ,
+       I: () => aQ,
+       M: () => AQ,
+ ... (49 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1068-L1072` → after: `L1219-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1219-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1219-L1222) · [Before (L1068-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1068-L1072)

```diff
-       const ip = [];
-       if (!Array.isArray(pp)) return ip;
-       for (const cp of pp.slice(0, Op.j.maxFrameTargets)) {
-         const pp = Dp(cp);
-         void 0 === pp || "string" === typeof pp && !Pp(pp) || ip.push(pp)
+       if ("string" !== typeof QQ) return QQ;
+       for (let WQ = 0; WQ < QQ.length; WQ++) {
+         const XQ = QQ.charCodeAt(WQ);
+         if (XQ >= 55296 && XQ <= 57343) return FQ.decode(sQ.encode(QQ))
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1078-L1081` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1230) · [Before (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1078-L1081)

```diff
-       if (!(0, op.o)(pp, 3)) return;
-       const ip = Math.max(Math.abs(pp[0]), Math.abs(pp[1]), Math.abs(pp[2])),
-         cp = Math.hypot(pp[0] / ip, pp[1] / ip, pp[2] / ip);
-       return 0 === ip || ip * cp < Op.j.minDirectionLength ? void 0 : [pp[0] / ip / cp, pp[1] / ip / cp, pp[2] / ip / cp]
+       return QQ
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1085` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1235) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1085)

```diff
-       if (void 0 !== pp) return "string" === typeof pp ? Ip.includes(pp) ? pp : void 0 : (0, op.o)(pp, 4) ? [xp(pp[0], 0, 1, 0), xp(pp[1], Op.j.minEasingY, Op.j.maxEasingY, 0), xp(pp[2], 0, 1, 1), xp(pp[3], Op.j.minEasingY, Op.j.maxEasingY, 1)] : "linear"
+       return null === QQ || "object" !== typeof QQ ? QQ : [zQ(QQ.mz), zQ(QQ.Mz)]
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1089-L1093` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1239) · [Before (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1089-L1093)

```diff
-       if (pp) return {
-         maxYaw: xp(pp.maxYaw, 0, Op.j.maxPlayerLook, 0),
-         maxPitch: xp(pp.maxPitch, 0, Op.j.maxPlayerLook, 0),
-         returnMs: Lp(pp.returnMs, 0, Op.j.maxReturnMs)
-       }
+       return null === QQ || "object" !== typeof QQ ? QQ : [TQ(QQ.Sq, PQ), TQ(QQ.ys, PQ)]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1098-L1107` → after: `L1243-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1243-L1244) · [Before (L1098-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1098-L1107)

```diff
-       var ip;
-       if ("object" !== typeof pp || null === pp) return;
-       const cp = Op.j.maxTransitionMs,
-         op = Op.j.minTransitionFadeMs;
-       return {
-         colour: "string" === typeof pp.colour && vp.test(pp.colour) ? pp.colour : Op.e,
-         outMs: xp(pp.outMs, op, cp, op),
-         holdMs: xp(null !== (ip = pp.holdMs) && void 0 !== ip ? ip : 0, 0, cp, 0),
-         inMs: xp(pp.inMs, op, cp, op)
-       }
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.cg), zQ(WQ.Ag)];
+       var WQ
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1111` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1248-L1249) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1111)

```diff
-       return !0 === pp || void 0
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.id, WQ.yg];
+       var WQ
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1115-L1117` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1253-L1254) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1115-L1117)

```diff
-       if ("object" !== typeof pp || null === pp) return !1;
-       const ip = pp.lookAt;
-       return Number.isFinite(pp.timeMs) && (0, op.o)(pp.position, 3) && (void 0 === ip || "string" === typeof ip || (0, op.o)(ip, 3))
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.Zq, zQ(WQ.Oq), WQ.Kq, zQ(WQ.QT), WQ.qT, WQ.TT, WQ.lg, zQ(WQ.hg), zQ(WQ.ig)];
+       var WQ
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1121-L1129` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1258-L1259) · [Before (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1121-L1129)

```diff
-       return {
-         ...pp,
-         timeMs: xp(pp.timeMs, 0, Op.j.maxPathMs, 0),
-         position: Yp(pp.position),
-         lookAt: Dp(pp.lookAt),
-         lookDirection: yp(pp.lookDirection),
-         fov: Lp(pp.fov, Op.j.minFov, Op.j.maxFov),
-         easing: Up(pp.easing)
-       }
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.tz, PQ), WQ.ez];
+       var WQ
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1133-L1140` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1263-L1264) · [Before (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1133-L1140)

```diff
-       const ip = [];
-       if (!Array.isArray(pp)) return ip;
-       for (const cp of pp.slice(0, Op.j.maxKeyframes)) {
-         if (!dp(cp)) continue;
-         const pp = ep(cp);
-         (0 === ip.length || pp.timeMs > ip[ip.length - 1].timeMs) && ip.push(pp)
-       }
-       return ip
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.kz, (QQ => zQ(QQ))), zQ(WQ.fz), WQ.Sz];
+       var WQ
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1144-L1185` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1268-L1269) · [Before (L1144-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1144-L1185)

```diff
-       if ("object" !== typeof pp || null === pp) return {
-         mode: "default"
-       };
-       const ip = {
-           blendInMs: Lp(pp.blendInMs, 0, Op.j.maxBlendInMs),
-           blendEasing: Up(pp.blendEasing),
-           transition: tp(pp.transition),
-           letterbox: Hp(pp.letterbox),
-           hideHud: Hp(pp.hideHud)
-         },
-         cp = {
-           mode: "default",
-           ...ip
-         };
-       if ("default" === pp.mode || "fixed" === pp.mode && !(0, op.o)(pp.position, 3)) return cp;
-       const Ip = {
- ... (26 more removed lines; see GitHub link above)
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [TQ(WQ.UF, PQ), zQ(WQ.bF), WQ.vF];
+       var WQ
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1195-L1196` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1273-L1274) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1195-L1196)

```diff
-       const ip = /(\d*\.?\d+)px/.exec(pp);
-       return ip ? Number(ip[1]) : null
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dT), zQ(WQ.HT)];
+       var WQ
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1200` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1278-L1279) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1200)

```diff
-       return pp.split(/[\s,]+/).pop()
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Rs)];
+       var WQ
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1357-L1364` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1282-L1283) · [Before (L1357-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1357-L1364)

```diff
-     function Dp(pp, ip, cp) {
-       if ("string" !== typeof pp) return ip;
-       try {
-         const cp = JSON.parse(pp);
-         return cp && "object" === typeof cp ? cp : ip
-       } catch (Op) {
-         return void 0 !== cp && console.error(`Couldn't parse ${cp}`, Op), ip
-       }
+     function UQ(QQ) {
+       return zQ(QQ)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1368` → after: `L1287-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1287-L1288) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1368)

```diff
-       return Dp(pp, null, "a leaderboard's rows")
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Ig), zQ(WQ.jg), zQ(WQ.mz), zQ(WQ.Mz)];
+       var WQ
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1371-L1376` → after: `L1291-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1291-L1292) · [Before (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1371-L1376)

```diff
-     function Pp(pp, ip) {
-       var cp, Op;
-       return null !== ip && void 0 !== ip ? ip : {
-         status: null !== (cp = pp.status) && void 0 !== cp ? cp : "loading",
-         entries: null !== (Op = pp.entries) && void 0 !== Op ? Op : []
-       }
+     function vQ(QQ) {
+       return JQ(QQ)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1379-L1380` → after: `L1295-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1295-L1296) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1379-L1380)

```diff
-     function Wp(pp, ip) {
-       return "number" === typeof pp && Number.isFinite(pp) && pp > 0 ? pp : ip
+     function dQ(QQ) {
+       return JQ(QQ)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1383-L1495` → after: `L1299-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1299-L1301) · [Before (L1383-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1383-L1495)

```diff
-     function yp(pp, ip) {
-       const cp = Wp(pp.size, 1);
-       let Op = Wp(pp.width, Wp(2.5 * cp, 2.5)),
-         op = Wp(pp.height, Wp(3.75 * cp, 3.75));
-       Number.isFinite(Ip * op / Op) && Number.isFinite(Sp * Op / op) || (Op = 2.5, op = 3.75);
-       const xp = op / Op,
-         Lp = Math.max(1, Math.min(Ip, ip / xp));
-       return {
-         width: Op,
-         height: op,
-         layoutWidth: Math.max(Ip, Sp / xp),
-         layoutHeight: Math.max(Sp, Ip * xp),
-         pixelWidth: Math.round(Lp),
-         pixelHeight: Math.round(Math.max(1, Math.min(ip, Lp * xp)))
-       }
-     }
- ... (97 more removed lines; see GitHub link above)
+     function HQ(QQ) {
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.IF)];
+       var WQ
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1498-L1499` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1304-L1305) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1498-L1499)

```diff
-     function wp(pp, ip) {
-       return Array.isArray(pp) ? pp.slice(0, ip).filter((pp => pp && Number.isFinite(pp.rank) && Number.isFinite(pp.value))) : []
+     function aQ(QQ) {
+       return QQ
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1502-L1509` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1308-L1310) · [Before (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1502-L1509)

```diff
-     function vp(pp, ip) {
-       const cp = [];
-       let Op = !1;
-       return pp.forEach(((op, Ip) => {
-         if (null !== ip && op.value === ip.value) return void cp.push(ip.rank);
-         const Sp = Ip > 0 && op.value === pp[Ip - 1].value;
-         Sp || (Op = 0 === Ip && 1 !== op.rank), cp.push(Sp && !Op ? cp[Ip - 1] : op.rank)
-       })), cp
+     function lQ(QQ) {
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.Oz), zQ(WQ.Kz)];
+       var WQ
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1520` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1314) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1520)

```diff
-       return Array.from(pp).length
+       return zQ(QQ)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1524-L1538` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1318) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1524-L1538)

```diff
-       const ip = [""];
-       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         op = "";
-       const Ip = () => {
-         ip.push(""), cp = 0, op = ""
-       };
-       for (const Sp of pp.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(Sp)) Ip();
-         else if (/^\s+$/.test(Sp)) op += Sp;
-       else if (Sp.length > 0) {
-         const pp = Array.from(Sp);
-         cp > 0 && cp + op.length + pp.length > Op && Ip(), ip[ip.length - 1] += op, cp += op.length, op = "";
-         for (const op of pp) cp >= Op && Ip(), ip[ip.length - 1] += op, cp++
-       }
-       return ip[ip.length - 1] += op, ip
+       return rQ(QQ)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1550-L1556` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1322) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1550-L1556)

```diff
-       if (!pp) return [...Ip];
-       try {
-         const [ip, cp, Op] = op()(pp).rgb().array();
-         return [ip / 255, cp / 255, Op / 255]
-       } catch (ip) {
-         return console.warn(`Invalid groundArrowPath colour "${pp}":`, ip), [...Ip]
-       }
+       return rQ(QQ)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1571-L1573` → after: `L1326-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1326-L1327) · [Before (L1571-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1571-L1573)

```diff
-       var ip;
-       const cp = Math.min(screen.width, screen.height) * (null !== (ip = (0, Op.e)()) && void 0 !== ip ? ip : (0, op.l)());
-       return Math.max(window.innerHeight * (0, op.l)(), cp) / (0, op.p)(pp)
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [zQ(WQ.dF)];
+       var WQ
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1576-L1577` → after: `L1330-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1330-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1330-L1334) · [Before (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1576-L1577)

```diff
-     function Lp(pp, ip, cp) {
-       return ip / (2 * Math.tan(cp / 2)) > Sp ? pp : Yp(pp)
+     function RQ(QQ) {
+       return (gQ ??= (0, wQ.f)().map((QQ => QQ.name)), gQ).map((WQ => {
+         return "string" === typeof(XQ = QQ[WQ]) ? zQ(XQ) : TQ(XQ, PQ);
+         var XQ
+       }))
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1581` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1338-L1339) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1581)

```diff
-       return pp.map((pp => pp.replace(Ip, "/textures/skyBoxes/$1/1024/$2")))
+       return null === (WQ = QQ) || "object" !== typeof WQ ? WQ : [WQ.gF, WQ.JF, WQ.rF];
+       var WQ
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1584` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1342) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1584)

```diff
-   34258: (pp, ip, cp) => {
+   9679: (QQ, WQ, XQ) => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1587-L1590` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1345) · [Before (L1587-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1587-L1590)

```diff
-       c: () => xp,
-       d: () => Sp,
-       h: () => op,
-       l: () => Op
+       c: () => TQ
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1592-L1682` → after: `L1347-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1347-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1347-L1349) · [Before (L1592-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1592-L1682)

```diff
-     const Op = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
- ... (75 more removed lines; see GitHub link above)
+     var wQ = XQ(9634);
+     const qQ = "Air",
+       TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1684` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1351) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1684)

```diff
-   39380: (pp, ip, cp) => {
+   39527: (QQ, WQ, XQ) => {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1688-L1693` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1354) · [Before (L1688-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1688-L1693)

```diff
-       h: () => Op,
-       j: () => Lp,
-       l: () => op,
-       o: () => Yp,
-       p: () => xp,
-       q: () => Sp
+       f: () => sQ
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1695-L1697` → after: `L1356-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1356-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1356-L1359) · [Before (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1695-L1697)

```diff
-     const Op = ["linear", "easeIn", "easeOut", "easeInOut"],
-       op = ["movement", "camera", "cursor"],
-       Ip = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
+     var wQ = XQ(402),
+       qQ = XQ(4774);
+     const TQ = new Set(qQ.j),
+       zQ = new Map;
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L1700` → after: `L1362-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1362-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/193.js#L1362-L1365) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/193.js#L1700)

```diff
-       return xp(pp, ip, Ip)
+       let XQ = zQ.get(WQ);
+       void 0 === XQ && (XQ = new Map, zQ.set(WQ, XQ));
+       let qQ = XQ.get(QQ);
+       return void 0 === qQ && (qQ = `${QQ}${(0,wQ.D)(WQ)}`, XQ.set(QQ, qQ)), qQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/194.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/194.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2)

```diff
- export const ids = [194];
+ export const ids = [54, 194];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L4-L230) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L4)

```diff
-   34267: (pp, ip, cp) => {
+   38840: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./combat_1.png": 38849,
+       "./dungeon_crumbling_crypt.png": 38854,
+       "./dungeon_frozen_hollow.png": 38863,
+       "./dungeon_wildwood_grove.png": 38870,
+       "./dungeons.png": 38878,
+       "./farming_1.png": 38880,
+       "./fishing_1.png": 38884,
+       "./hub.png": 38889,
+       "./island.png": 38893,
+       "./mining_1.png": 38896,
+       "./mining_1_bridge.png": 38905,
+       "./mining_1_gallery.png": 38908,
+       "./mining_1_hollow.png": 38910,
+       "./mining_1_village.png": 38913
+ ... (211 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L6-L7` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L232) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L6-L7)

```diff
-       getLatestPublishedUpdateLog: () => xp,
-       updateLogsData: () => Sp
+       default: () => gF
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L11` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L234-L236) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L11)

```diff
-     var Op = cp(817),
-       op = cp(322);
-     const Ip = "\xa0\xa0\xa0\xa0",
+     const wQ = "island";
+     var qQ = XQ(402);
+     const TQ = (0, qQ.ub)([0, 0, -1]),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L13-L137` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L238-L239) · [Before (L13-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L13-L137)

```diff
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
-           menu: op.n.COSMETIC_SHOP
-         },
-         callToAction: {
-           color: "rainbow",
-           label: "Go to Store!",
-           action: {
-             type: "openMenu",
-             menu: op.n.COSMETIC_SHOP
-           }
- ... (109 more removed lines; see GitHub link above)
+         name: "S",
+         bearing: (0, qQ.ub)([0, 0, 1])
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L139-L226` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L241-L242) · [Before (L139-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L139-L226)

```diff
-         author: "pegasys",
-         date: new Date("2026-10-22T12:00:00Z"),
-         title: "New Game: Build a Factory 2 \ud83c\udfed",
-         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
-         image: "build_a_factory_2.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "buildAFactory2"
-         },
-         mobileNotification: {
-           title: "New Game: Build a Factory 2 \ud83c\udfed",
-           body: "Build machines on your own floating island and watch them work - even while you're away!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Start building",
- ... (72 more removed lines; see GitHub link above)
+         name: "E",
+         bearing: (0, qQ.ub)([-1, 0, 0])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L228-L248` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L244-L245) · [Before (L228-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L228-L248)

```diff
-         author: "pegasys",
-         date: new Date("2026-10-09T12:00:00Z"),
-         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
-         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
-         image: "lucky_bedwars_gear_sets.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "luckyBedwars"
-         },
-         mobileNotification: {
-           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
-           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
- ... (5 more removed lines; see GitHub link above)
+         name: "N",
+         bearing: TQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L250-L264` → after: `L247-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L247-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L247-L701) · [Before (L250-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L250-L264)

```diff
-         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
-         date: new Date("2026-10-07T08:00:00Z"),
-         title: "New Game: Skyblock!",
-         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
-         image: "skyblock_thumbnail_large.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "skyblock"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Start your adventure",
-           action: {
-             type: "playGame",
-             game: "skyblock"
+         name: "W",
+         bearing: (0, qQ.ub)([1, 0, 0])
+       }];
+ 
+     function sQ(QQ, WQ, XQ) {
+       return [100 * (XQ.mapMaxX - QQ) / (XQ.mapMaxX - XQ.mapMinX), 100 * (WQ - XQ.mapMinZ) / (XQ.mapMaxZ - XQ.mapMinZ)]
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+       const qQ = "local" === WQ,
+         TQ = QQ.background,
+         zQ = WQ => TQ ? sQ(WQ[0] - QQ.mapOrigin[0], WQ[2] - QQ.mapOrigin[2], TQ.bounds) : [50, 50],
+         FQ = (QQ.insideDungeon ? [] : QQ.landmarks).map((QQ => {
+           var WQ, wQ;
+           return {
+             id: QQ.id,
+ ... (439 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L277-L297` → after: `L704-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L704-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L704-L2389) · [Before (L277-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L277-L297)

```diff
-         mobileNotification: {
-           title: "New Lucky Bedwars Map: Turtles! \ud83d\udc22",
-           body: "Play the new Lucky Bedwars map - Turtles!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "luckyBedwars"
-           }
-         }
-       }, {
-         author: "pegasys",
-         date: new Date("2026-09-30T12:00:00Z"),
-         title: "New Game: Lucky Bedwars \ud83c\udf40",
- ... (5 more removed lines; see GitHub link above)
+         combat_1: {
+           tower_roof: {
+             min: [202, 69, 151],
+             max: [203, 71, 151],
+             unlockedBlock: "Red Portal",
+             lockedBlock: "Grey Portal"
+           },
+           tower_exit: {
+             min: [202, 80, 133],
+             max: [203, 82, 133],
+             unlockedBlock: "Red Portal",
+             lockedBlock: "Grey Portal"
+           }
+         }
+       },
+       LQ = "Compressed Messy Stone",
+ ... (1670 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L299-L301` → after: `L2391-L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2391-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2391-L2398) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L299-L301)

```diff
-         mobileNotification: {
-           title: "New Game: Lucky Bedwars \ud83c\udf40",
-           body: "Open lucky blocks, upgrade your gear and break enemy beds. Last team standing wins!"
+         tiers: UX
+       }, {
+         id: "iron",
+         category: "mining",
+         item: "Raw Iron",
+         blocks: {
+           "Iron Ore": 1,
+           "Pure Iron Ore": 9
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L303-L338` → after: `L2400-L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2400-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2400-L2407) · [Before (L303-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L303-L338)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "luckyBedwars"
-           }
-         }
-       }, {
-         author: "Slushie",
-         date: new Date("2026-09-29T12:00:00Z"),
-         title: "Stairs!!!",
-         description: "At long last, stairs are finally here!\nThey have collision, just like stairs should do!\nDid you know, slabs also have half-block collision?\nUse them in your builds!",
-         image: "stairs.jpg"
-       }, {
-         author: ["JBL", "AnxietreeDev"],
- ... (20 more removed lines; see GitHub link above)
+         tiers: bX
+       }, {
+         id: "gold",
+         category: "mining",
+         item: "Raw Gold",
+         blocks: {
+           "Gold Ore": 1,
+           "Pure Gold Ore": 9
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L340-L370` → after: `L2409-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2409-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2409-L2416) · [Before (L340-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L340-L370)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Go to Parkour Place",
-           action: {
-             type: "navigate",
-             to: "/place/parkourPlace"
-           }
-         }
-       }, {
-         date: new Date("2026-09-22T12:00:00Z"),
-         title: "Oasis Biome",
-         image: "oasis_biome.jpg",
-         author: "Slushie",
-         description: "Discover a new oasis biome in Sandbox, with big palm trees, and lakes surrounded by lush grass!\n \u2022 Hop across lily pads that you can stand on!\n \u2022 Tame and saddle a camel, then bring a friend along for the ride! Two people can ride on a camel.\n \ … [truncated]
-         callToAction: {
-           color: "blue",
- ... (15 more removed lines; see GitHub link above)
+         tiers: bX
+       }, {
+         id: "diamond",
+         category: "mining",
+         item: "Diamond",
+         blocks: {
+           "Diamond Ore": 1,
+           "Pure Diamond Ore": 9
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L372-L388` → after: `L2418-L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2418-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2418-L2425) · [Before (L372-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L372-L388)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_duo"
-           }
-         }
-       }, {
-         date: new Date("2026-09-10T12:00:00Z"),
-         title: "New Bedwars Map: Blossom! \ud83c\udf38",
-         description: "Redesigned, revamped and rebalanced! Back from its brief spotlight as a permanent addition - play now in Squads and Trios!",
-         image: "bedwars_blossom.jpg",
-         author: "AnxietreeDev",
-         mobileNotification: {
-           title: "New Bedwars Map: Blossom! \ud83c\udf38",
- ... (1 more removed lines; see GitHub link above)
+         tiers: vX
+       }, {
+         id: "moonstone",
+         category: "mining",
+         item: "Moonstone",
+         blocks: {
+           "Moonstone Ore": 1,
+           "Pure Moonstone Ore": 9
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L390-L411` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2427) · [Before (L390-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L390-L411)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
-       }, {
-         date: new Date("2026-09-09T12:00:00Z"),
-         title: "Featured Game: The Dark!",
-         description: "We are featuring The Dark as a really cool custom game we like! Play it to see what all the hype is about!",
-         image: "the_dark.jpg",
-         author: "Harry",
-         callToAction: {
-           color: "blue",
- ... (6 more removed lines; see GitHub link above)
+         tiers: vX
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L413-L420` → after: `L2429-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2429-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2429-L2433) · [Before (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L413-L420)

```diff
-         date: new Date("2026-09-04T12:00:00Z"),
-         title: "Bedwars Arena Collapse! \ud83d\udd25",
-         description: "No more late game stalling - towards the end of the match the arena will now start collapsing from the edges inwards until only the void is left.\n \u2022 Beds, generators and shops caught by the collapse are destroyed\n \u2022 Watch the countdown and stay i … [truncated]
-         image: "bedwars_arena_collapse.jpg",
-         author: "pegasys",
-         mobileNotification: {
-           title: "Bedwars Arena Collapse! \ud83d\udd25",
-           body: "Late game, the arena now collapses from the edges - no more stalling!"
+         id: "stone",
+         category: "mining",
+         item: "Stone",
+         blocks: {
+           Stone: 1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L422-L429` → after: `L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2435) · [Before (L422-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L422-L429)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
+         tiers: UX
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L431-L438` → after: `L2437-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2437-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2437-L2441) · [Before (L431-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L431-L438)

```diff
-         date: new Date("2026-08-27T12:00:00Z"),
-         title: "New Bedwars Map: Enchanted! \u2728",
-         description: "Play now in Squads and Trios",
-         image: "bedwars_enchanted.jpg",
-         author: "Harry",
-         mobileNotification: {
-           title: "New Bedwars Map: Enchanted! \u2728",
-           body: "Play the new Bedwars map - Enchanted!"
+         id: "wheat",
+         category: "farming",
+         item: "Wheat",
+         blocks: {
+           "Wheat|FreshlyGrown": 1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L440-L447` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2443) · [Before (L440-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L440-L447)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
+         tiers: GX
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L449-L456` → after: `L2445-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2445-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2445-L2449) · [Before (L449-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L449-L456)

```diff
-         date: new Date("2026-08-21T12:00:00Z"),
-         title: "Bedwars Mutations! \ud83e\uddec",
-         description: "Four new Bedwars mutations, picked on the map vote:\n \u2022 Treasure Guardians - Guardians protect the Diamond and Moonstone generators.\n \u2022 Weapon Roulette - every respawn rolls you a new random weapon.\n \u2022 Specialists - your chosen role grants r … [truncated]
-         image: "bedwars_mutations.jpg",
-         author: "pegasys",
-         mobileNotification: {
-           title: "Bedwars Mutations! \ud83e\uddec",
-           body: "Four new mutations - Guardians, random weapons, role perks and faster ores!"
+         id: "carrot",
+         category: "farming",
+         item: "Carrot",
+         blocks: {
+           "Carrot Plant|FreshlyGrown": 1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L458-L505` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2451) · [Before (L458-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L458-L505)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
-       }, {
-         date: new Date("2026-08-14T12:00:00Z"),
-         title: "Miner's Delight! \u26cf\ufe0f \n Bedwars",
-         description: "A new Bedwars mutation!\n\n Ores respawn twice as fast, and have a 50% chance of dropping double.\n\n Look for it on the map vote.",
-         image: "bedwars_miners_delight.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
- ... (32 more removed lines; see GitHub link above)
+         tiers: GX
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L507-L514` → after: `L2453-L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2453-L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2453-L2457) · [Before (L507-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L507-L514)

```diff
-         date: new Date("2026-07-21T13:00:00Z"),
-         title: "Frontline - Missile Silo! \ud83d\ude80",
-         image: "missile_silo_map.jpg",
-         description: "The front has a second battlefield - a hidden mountain missile facility!\n \u2022 Maps now rotate every round: Shipment and Missile Silo back to back\n \u2022 Play with your friends in parties or solo\n \u2022 Earn brand new kits, like the Demon Ripper and W … [truncated]
-         author: ["Harry", "ellie"],
-         mobileNotification: {
-           title: "The new Missile Silo map for Frontline is here!",
-           body: "Fight it out on a brand new map!"
+         id: "potato",
+         category: "farming",
+         item: "Raw Potato",
+         blocks: {
+           "Potato Plant|FreshlyGrown": 1
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L516-L523` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2459) · [Before (L516-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L516-L523)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Storm the frontline!",
-           action: {
-             type: "playGame",
-             game: "frontline"
-           }
-         }
+         tiers: GX
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L525-L532` → after: `L2461-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2461-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2461-L2465) · [Before (L525-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L525-L532)

```diff
-         date: new Date("2026-07-20T13:00:00Z"),
-         title: "Slimes and Night are in Survival! \ud83c\udf19",
-         image: "day_night_slime.jpg",
-         description: "Will tamed slimes help you survive the night?\n \u2022 Day & Night is now enabled by default in survival\n \u2022 New rare slime mobs with bright slime trails\n \u2022 New mob settings for custom game devs",
-         author: ["Harry", "Tom"],
-         mobileNotification: {
-           title: "Slimes and Day & Night in Survival!",
-           body: "Survival is bigger than ever!"
+         id: "beetroot",
+         category: "farming",
+         item: "Beetroot",
+         blocks: {
+           "Beetroot Plant|FreshlyGrown": 1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L534-L541` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2467) · [Before (L534-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L534-L541)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "classic_survival"
-           }
-         }
+         tiers: bX
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L543-L550` → after: `L2469-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2469-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2469-L2473) · [Before (L543-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L543-L550)

```diff
-         date: new Date("2026-07-15T09:00:00Z"),
-         title: "Containment Breach - New Anomalies! \ud83e\uddea",
-         image: "containmentBreachBroodfather.jpg",
-         description: 'Two new anomalies just breached containment:\n \u2022 ANOM-0808 "Broodfather" \ud83e\udddf - spawns zombies faster than you can kill them, and the corpses explode. Don\'t stand near the bodies!\n \u2022 ANOM-1033 "Deadlock" \ud83d\udca3 - the room is rigged  … [truncated]
-         author: "ellie",
-         mobileNotification: {
-           title: "Containment Breach update \ud83e\uddea",
-           body: "Face the Broodfather & Deadlock, and build your perfect loadout!"
+         id: "melon",
+         category: "farming",
+         item: "Melon",
+         blocks: {
+           Melon: 1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L552-L559` → after: `L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2475) · [Before (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L552-L559)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Fight the new anomalies!",
-           action: {
-             type: "playGame",
-             game: "containmentBreach"
-           }
-         }
+         tiers: UX
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L561-L568` → after: `L2477-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2477-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2477-L2481) · [Before (L561-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L561-L568)

```diff
-         date: new Date("2026-07-08T09:00:00Z"),
-         title: "Bedwars ranked 1v1 and new 4v4 map",
-         image: "4v4_interchange.jpg",
-         description: "New ranked Bedwars mode for 1v1! \u2694\ufe0f\nSmaller map and faster pace, no teammates to blame now.\n\nAnd try out the new 4v4 map, Interchange! \ud83d\ude97\n\nAlso includes quality of life changes:\n \u2022 Win streak system\n \u2022 MVP system\n \u2022 … [truncated]
-         author: ["Harry", "jasninus", "pixelbaker"],
-         mobileNotification: {
-           title: "Play 1v1 Bedwars now!",
-           body: "Also try out new 4v4 Map: Interchange! \u2694\ufe0f"
+         id: "watermelon",
+         category: "farming",
+         item: "Watermelon",
+         blocks: {
+           Watermelon: 1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L570-L577` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2483) · [Before (L570-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L570-L577)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play 1v1 now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_1v1"
-           }
-         }
+         tiers: UX
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L579-L600` → after: `L2485-L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2485-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2485-L2489) · [Before (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L579-L600)

```diff
-         date: new Date("2026-07-06T09:00:00Z"),
-         title: "Frontline \u2694\ufe0f vs Containment Breach \ud83e\uddea",
-         image: "FrontlineVContainmentBreach.png",
-         description: "Two new games are here, with two completely different fights. Which one's your favorite?\nFrontline \u2694\ufe0f :\n \u2022 Classic all-out warfare on a massive scale\n \u2022 Grab a vehicle, capture points for your team, and earn new powerful kits!\nContain … [truncated]
-         author: ["ellie", "Harry"],
-         mobileNotification: {
-           title: "Two new squad shooters \u2694\ufe0f\ud83e\uddea",
-           body: "Frontline 12v12 war or co-op Containment Breach - pick your fight!"
-         }
-       }, {
-         date: new Date("2026-07-01T09:00:00Z"),
-         title: "New Pirates map \ud83c\udff4\u200d\u2620\ufe0f",
-         description: "Play the new Pirates map - Dynasty Docks!",
-         image: "dynasty_docks.jpg",
-         author: "Harry",
-         callToAction: {
- ... (6 more removed lines; see GitHub link above)
+         id: "maple_log",
+         category: "foraging",
+         item: "Maple Log",
+         blocks: {
+           "Maple Log": 1
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L602-L605` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2491) · [Before (L602-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L602-L605)

```diff
-         mobileNotification: {
-           title: "New Pirates map \ud83c\udff4\u200d\u2620\ufe0f",
-           body: "Play the new Pirates map - Dynasty Docks!"
-         }
+         tiers: UX
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L607-L618` → after: `L2493-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2493-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2493-L2497) · [Before (L607-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L607-L618)

```diff
-         date: new Date("2026-06-23T12:00:00Z"),
-         title: "\ud83d\udfe8Backrooms Update!\ud83d\udfe8",
-         description: "Backrooms just got deadlier - escaping isn't always as simple as finding the blue room.\n\u2022 Meet the Crone: a new hostile mob that charges at you and hits hard \ud83d\udc80\n\u2022 Floor exits can now be locked - search the level for keys before you can  … [truncated]
-         image: "backrooms_crone_keys.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
-           label: "Play Backrooms!",
-           action: {
-             type: "playGame",
-             game: "backrooms"
-           }
+         id: "pear_log",
+         category: "foraging",
+         item: "Pear Log",
+         blocks: {
+           "Pear Log": 1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L620-L651` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2499) · [Before (L620-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L620-L651)

```diff
-         mobileNotification: {
-           title: "\ud83d\udfe8New Mob in the Backrooms!\ud83d\udfe8",
-           body: "the Crone now walks the endless halls, and some exits now have keys! \ud83d\udc80\ud83d\udd11"
-         }
-       }, {
-         date: new Date("2026-06-23T11:00:00Z"),
-         title: "One Block new skill and rotating trader!",
-         description: "Try out the Farming skill in One Block! \ud83c\udf3e\nWhile farming, you now sometimes get gold crops \ud83e\ude99\nActivate the skill to grow and harvest everything around you \ud83e\uddd1\u200d\ud83c\udf3e\nOther skills have also been reworked slightly.\n\ … [truncated]
-         image: "one_block_skills_rework.jpg",
-         author: ["jasninus"],
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "oneBlock"
- ... (16 more removed lines; see GitHub link above)
+         tiers: bX
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L653-L678` → after: `L2501-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2501-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2501-L2505) · [Before (L653-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L653-L678)

```diff
-         date: new Date("2026-06-22T12:00:00Z"),
-         title: "\u2694\ufe0f New Weapons in PvP Civilisation! \u2694\ufe0f",
-         description: "Pick your loadout at the Weaponmaster in the safe zone!\n\u2022 Sword: Balanced reach and speed - the all-rounder\n\u2022 Axe: Slow swing, heavy hits\n\u2022 Spear: Long reach plus a dash - difficult to master but rewarding\n\u2022 Dagger: Fast combos and ba … [truncated]
-         image: "pvp_civ_weapons.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "pvpCiv"
-           }
-         }
-       }, {
-         date: new Date("2026-06-12T14:00:00Z"),
-         title: "Go to the moon! \ud83d\ude80\ud83c\udf15",
- ... (10 more removed lines; see GitHub link above)
+         id: "palm_log",
+         category: "foraging",
+         item: "Palm Log",
+         blocks: {
+           "Palm Log": 1
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L680-L1982` → after: `L2507-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L2507-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L2507-L6149) · [Before (L680-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L680-L1982)

```diff
-         mobileNotification: {
-           title: "Go to the moon! \ud83d\ude80\ud83c\udf15",
-           body: "You can now go to the moon in Build a Factory \ud83c\udfed"
-         }
-       }, {
-         date: new Date("2026-06-11T14:00:00Z"),
-         title: "Chunklock Protectors!\ud83d\udd10",
-         description: "Chunklock now has Protectors! Place a Protector block to protect your chunk from attackers\ud83d\udee1\ufe0f\nBut you need to fuel your Protectors to keep them protected from attackers\ud83d\udd25\nAttackers can raid your Protectors if they are willing to do … [truncated]
-         image: "chunklock_thumbnail.jpg",
-         author: ["pixelbaker", "jasninus"]
-       }, {
-         date: new Date("2026-06-10T13:00:00Z"),
-         title: "Chunklock is here!\ud83d\udd13",
-         description: "In Chunklock, you have to unlock every chunk first!\nMine, gather, and pay to crack open each chunk and claim the next.",
-         image: "chunklock_thumbnail.jpg",
-         author: ["pixelbaker", "jasninus"],
- ... (1287 more removed lines; see GitHub link above)
+         tiers: bX
+       }, aX("wheatfish", "Wheatfish"), aX("darter", "Darter"), aX("sunset_minnow", "Sunset Minnow"), aX("root_flounder", "Root Flounder"), aX("greenfin_loach", "Greenfin Loach"), aX("red_strongfish", "Red Strongfish"), aX("green_strongfish", "Green Strongfish"), aX("boomerang_fis … [truncated]
+         id: "rotten_flesh",
+         category: "combat",
+         item: "Rotten Flesh",
+         drops: ["Rotten Flesh"],
+         tiers: UX
+       }, {
+         id: "rotten_brain",
+         category: "combat",
+         item: "Rotten Brain",
+         drops: ["Rotten Brain"],
+         tiers: vX
+       }, {
+         id: "iron_fragment",
+         category: "combat",
+ ... (3627 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L1984-L2008` → after: `L6151-L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L6151-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L6151-L6190) · [Before (L1984-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L1984-L2008)

```diff
-       }, {
-         date: new Date("2025-07-29T10:00:00Z"),
-         title: "Fruity Leaves!",
-         description: "Fruity Trees now have Fruity Leaves! No more guessing which Maple leaf has an Apple, or which Palm leaf has a Coconut - you can just pluck the fruit you want! And they make for pretty cool building blocks, too.",
-         image: "fruity_leaves.jpg",
-         author: "Dirty Flea Sack"
-       }, {
-         date: new Date("2025-07-24T14:00:00Z"),
-         title: "Custom Lobby Roles!",
-         description: "You can now promote (and demote) players in your custom lobbies! Co-Owners can use World Builder, edit Code Blocks and manage other world settings. Moderators can kick, ban and unban players. More custom-lobby upgrades coming soon!",
-         image: "world_roles.jpg",
-         author: "Dirty Flea Sack"
-       }, {
-         date: new Date("2025-07-16T14:48:00Z"),
-         title: "Solos/Duos Bedwars Map!",
-         description: "Try the new Bedwars map: Siege!",
- ... (9 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function bT(QQ, WQ, XQ) {
+       return yT(UT, QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
+     }
+ 
+     function vT(QQ) {
+       return "number" === typeof QQ ? [QQ, QQ] : QQ
+     }
+ 
+     function dT(QQ, WQ, XQ) {
+       const {
+         rise: wQ = 0,
+         shift: qQ = 0,
+         torso: TQ = 0,
+ ... (24 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2010-L2022` → after: `L6192-L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L6192-L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L6192-L6241) · [Before (L2010-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2010-L2022)

```diff
-       }, {
-         date: new Date("2025-07-14T11:00:00Z"),
-         title: "Rocket Obby Map!",
-         description: "New rocket obby map! It's a bit harder than the original map, try it out now!",
-         image: "rocket_parkour_january.jpg",
-         author: "Tom",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "rocketParkour_january"
-           }
+       }
+     }
+     const HT = [1.0625, -1, 0];
+ 
+     function aT(QQ) {
+       return "number" === typeof QQ ? [QQ, QQ] : QQ
+     }
+ 
+     function lT(QQ, WQ, XQ) {
+       const {
+         drop: wQ = 0,
+         shift: qQ = 0,
+         torso: TQ = 0,
+         tilt: zQ = 0,
+         nod: sQ = 0,
+         cock: FQ = 0,
+ ... (34 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2024-L2031` → after: `L6243-L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L6243-L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L6243-L9030) · [Before (L2024-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2024-L2031)

```diff
-       }, {
-         date: new Date("2025-07-14T10:00:00Z"),
-         title: "\ud83d\udcf2 iOS Mobile App",
-         description: "Bloxd.io has landed on the Apple App Store! Download it by clicking the button below or searching bloxd.io on the Apple App Store! Please leave us a review if you enjoy playing bloxd!",
-         image: "AppleAppQRCode.jpg",
-         onClickImage: {
-           type: "openUrl",
-           url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
+       }
+     }
+     var hT = XQ(37437),
+       iT = XQ(38756),
+       cT = XQ(38918);
+ 
+     function AT(QQ, WQ, XQ) {
+       var wQ, qQ;
+       const TQ = function() {
+           let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+           return QQ + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - QQ) * XQ
+         },
+         [zQ, sQ] = null !== (wQ = QQ.legs) && void 0 !== wQ ? wQ : [0, 0],
+         [FQ, PQ] = null !== (qQ = WQ.legs) && void 0 !== qQ ? qQ : [0, 0];
+       return {
+         drop: TQ(QQ.drop, WQ.drop),
+ ... (2772 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2033-L2097` → after: `L9032-L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9032-L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L9032-L9263) · [Before (L2033-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2033-L2097)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on the Apple App Store",
-           action: {
-             type: "openUrl",
-             url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
-           }
-         }
-       }, {
-         date: new Date("2025-07-03T13:00:00Z"),
-         title: "Jungle Update!",
-         description: "Jungle biomes can now be found in Bloxd! Explore the dense foliage to find jungle ruins, mango trees, wildcats and gorillas! You can tame wildcats with meat, and they'll get the zoomies if you feed them a very special plant... The gorillas may look friendly, … [truncated]
-         image: "jungle.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
- ... (49 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: [(0, Aq.jsx)("div", {
+           className: "SkyblockPortalTransitVeil",
+           "aria-hidden": "true"
+         }), (0, Aq.jsx)("div", {
+           className: "SkyblockPortalTransitRim",
+           "aria-hidden": "true",
+           onAnimationEnd: () => {
+             WQ.finishArrival(wQ.token)
+           }
+         }), (0, Aq.jsxs)("div", {
+           className: "SkyblockPortalTransitTitle",
+           children: [(0, Aq.jsx)("div", {
+             className: "SkyblockPortalTransitBand",
+             "aria-hidden": "true"
+ ... (216 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2099-L2145` → after: `L9265-L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9265-L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L9265-L9427) · [Before (L2099-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2099-L2145)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-30T12:00:00Z"),
-         title: "Knight Sword, Golem Pickaxe and Fur Armour!",
-         description: "A bunch of new items have dropped in Bloxd! Draugr Knights now carry a new sword - it's more powerful than a Diamond Sword, and it has knockback too! Golems now drop Golem Eyes, which can be used to craft a Golem Pickaxe. This special pickaxe has a chance to … [truncated]
-         image: "unique_tools_and_armour.jpg",
-         author: "Dirty Flea Sack"
-       }, {
- ... (31 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: [(0, Aq.jsx)("div", {
+           className: "SkyblockDailyRewardGlow",
+           "aria-hidden": "true"
+         }), (0, Aq.jsxs)("div", {
+           className: "SkyblockDailyRewardCard",
+           children: [(0, Aq.jsxs)("div", {
+             className: "SkyblockDailyRewardHeading",
+             children: [(0, Aq.jsx)("span", {
+               className: "SkyblockDailyRewardTitle",
+               children: XQ("skyblockGame:dailyRewardTitle")
+             }), (0, Aq.jsx)("span", {
+               className: "SkyblockDailyRewardDay",
+               children: XQ("skyblockGame:dailyRewardDay", {
+                 day: String(WQ.day)
+ ... (147 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2147-L2773` → after: `L9429-L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9429-L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L9429-L9464) · [Before (L2147-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2147-L2773)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-02T12:00:00Z"),
-         title: "Frozen Badlands!",
-         description: "Hostile mobs have made their way to the surface... and they've brought a new biome with them - the Frozen Badlands! Explore this new biome to find a new tree type, new blocks, and new mobs. Pay special attention for the Draugr Knight, which will now spawn de … [truncated]
-         image: "frozen_badlands.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
- ... (611 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: (0, Aq.jsxs)("div", {
+           className: "SkyblockMailboxCard",
+           children: [(0, Aq.jsxs)("div", {
+             className: "SkyblockMailboxHeading",
+             children: [(0, Aq.jsx)(Gs, {
+               letterCount: WQ.letters.length
+             }), (0, Aq.jsx)("span", {
+               className: "SkyblockMailboxTitle",
+               children: XQ("skyblockGame:mailboxTitle")
+             })]
+           }), (0, Aq.jsx)("ol", {
+             className: "SkyblockMailboxLetters",
+             children: WQ.letters.map(((QQ, WQ) => (0, Aq.jsx)(Us, {
+               letter: QQ,
+ ... (20 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L2776-L2779` → after: `L9467-L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9467-L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/194.js#L9467-L11133) · [Before (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/194.js#L2776-L2779)

```diff
-       const ip = Date.now();
-       let cp = null;
-       for (const Op of Sp) Op.date.getTime() > ip || pp && !pp(Op) || (!cp || Op.date.getTime() > cp.date.getTime()) && (cp = Op);
-       return cp
+       let {
+         controller: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, iq.C)(), wQ = (0, cq.j)(fw, WQ.getSnapshot());
+       if (null === wQ) return null;
+       const qQ = wQ.fullSet ? "empty" === wQ.fuelState ? {
+         text: XQ("skyblockGame:magmawardHudNoFuel"),
+         tone: "empty"
+       } : null : {
+         text: XQ("skyblockGame:magmawardHudFullSet", {
+           worn: String(wQ.wornCount)
+         }),
+         tone: "partial"
+       };
+ ... (1651 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/195.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/195.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359)

#### 1. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L10137` → after: `L4-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L4-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L431) · [Before (L4-L10137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L10137)

```diff
-   34271: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(pp, ip, cp) {
-               pp.exports = cp(7588)
-             },
-             5036: function(pp, ip, cp) {
-               cp(1719), cp(5677), cp(6394), cp(5334), cp(6969), cp(2021), cp(8328), cp(2129);
-               var Op = cp(1287);
-               pp.exports = Op.Promise
-             },
-             2582: function(pp, ip, cp) {
-               cp(1646), cp(6394), cp(2004), cp(462), cp(8407), cp(2429), cp(1172), cp(8288), cp(1274), cp(8201), cp(6626), cp(3211), cp(9952), cp(15), cp(9831), cp(7521), cp(2972), cp(6956), cp(5222), cp(2257);
-               var Op = cp(1287);
- ... (10118 more removed lines; see GitHub link above)
+   39409: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ
+     });
+     class wQ {
+       constructor(QQ, WQ) {
+         this.read = QQ, this.apply = WQ, this.release = null
+       }
+       turn(QQ, WQ) {
+         const XQ = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: WQ,
+           forcedCameraDirection: [QQ[0], QQ[1], QQ[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+ ... (412 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10139-L10188` → after: `L433-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L433-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L433-L667) · [Before (L10139-L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10139-L10188)

```diff
- 
-           function Jo(pp) {
-             var ip, cp, Op, op;
-             return Op = new eO({
-               props: {
-                 items: pp[1],
-                 itemKey: "id",
-                 itemHeight: 30,
-                 buffer: 100,
-                 stickToBottom: !0,
-                 scrollbar: !0,
-                 $$slots: {
-                   item: [Qo, function(pp) {
-                     return {
-                       10: pp.item
-                     }
- ... (34 more removed lines; see GitHub link above)
+         }
+         this.clampOffsets(XQ)
+       }
+       clampOffsets(QQ) {
+         if (QQ.maxYaw >= 180) this.yawOffset = (0, qQ.x)(0, this.yawOffset);
+         else {
+           const WQ = (0, gQ.j)(QQ.maxYaw);
+           this.yawOffset = Math.max(-WQ, Math.min(WQ, this.yawOffset))
+         }
+         const WQ = (0, gQ.j)(QQ.maxPitch);
+         this.pitchOffset = Math.max(-WQ, Math.min(WQ, this.pitchOffset))
+       }
+       apply(QQ, WQ) {
+         this.pointedAt && this.limits && (this.yawOffset = (0, qQ.x)(QQ.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - QQ.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const XQ = (0, qQ.j)(QQ.pitch + this.pitchOffset);
+         this.pitchOffset = XQ - QQ.pitch, WQ.heading = (0, qQ.w)(QQ.heading + this.yawOffset), WQ.pitch = XQ
+ ... (219 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10190-L10295` → after: `L669-L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L669-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L669-L1194) · [Before (L10190-L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10190-L10295)

```diff
-           }
- 
-           function Bo(pp, cp, Op) {
-             var op;
-             (0, Sp.FIv)(pp, Io, (function(pp) {
-               return Op(6, op = pp)
-             }));
-             var Ip = 0,
-               Lp = function(pp) {
-                 Op(0, Ip = Object.keys(pp).length)
-               },
-               Yp = Io.subscribe(Lp);
-             Lp(op);
-             var Dp = [],
-               Ap = function(pp) {
-                 (0, Sp.fxP)(Io, op[pp].actived = !op[pp].actived, op)
- ... (90 more removed lines; see GitHub link above)
+             return TQ
+           }(XQ >= 0 ? this.nodes[XQ].position : null, QQ.position, wQ >= 0 ? this.nodes[wQ].position : null, this.prevGaps[WQ], this.nextGaps[WQ], [0, 0, 0])
+         })), this.aim = new hQ(this.nodes, this.velocities, this.prevNodes, this.nextNodes, WQ)
+       }
+       sample(QQ, WQ, XQ, wQ) {
+         const qQ = this.findSegment(this.pathTime(QQ));
+         this.samplePosition(qQ, wQ.position), this.aim.sample(qQ, WQ, wQ);
+         const {
+           beforeIndex: TQ,
+           afterIndex: zQ
+         } = qQ;
+         wQ.fov = aQ(qQ, TQ >= 0 ? this.fovAt(TQ, XQ) : 0, this.fovAt(qQ.index, XQ), this.fovAt(qQ.toIndex, XQ), zQ >= 0 ? this.fovAt(zQ, XQ) : 0, TQ >= 0, zQ >= 0)
+       }
+       pathTime(QQ) {
+         const WQ = this.nodes[0].timeMs;
+         if (this.loopMs <= 0 || QQ <= WQ) return QQ;
+ ... (510 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10297-L10438` → after: `L1196-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1196-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L1196-L1266) · [Before (L10297-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10297-L10438)

```diff
-           var so = Go;
- 
-           function Ko(pp, ip, cp) {
-             var Op = pp.slice();
-             return Op[8] = ip[cp], Op
-           }
- 
-           function Vo(pp, ip, cp) {
-             var Op = pp.slice();
-             return Op[11] = ip[cp], Op
-           }
- 
-           function pI(pp) {
-             var ip, cp, Op, op = pp[0].nodeType === Node.ELEMENT_NODE && iI(pp),
-               Ip = pp[0].nodeType === Node.TEXT_NODE && PI(pp);
-             return {
- ... (126 more removed lines; see GitHub link above)
+         case "follow":
+           return {
+             ...QQ, ...TQ, target: "string" === typeof QQ.target ? QQ.target : void 0, anchor: (DQ = QQ.anchor, sQ.includes(DQ) ? DQ : void 0), lookAt: JQ(QQ.lookAt), offset: (IQ = QQ.offset, Array.isArray(IQ) ? [FQ(IQ[0], -wQ.m.maxOffset, wQ.m.maxOffset, 0), FQ(IQ[1], -wQ.m.maxOf … [truncated]
+           };
+         case "path":
+           return {
+             ...QQ, ...TQ, keyframes: vQ(QQ.keyframes)
+           };
+         case "frame":
+           return {
+             ...QQ, ...TQ, targets: jQ(QQ.targets), viewHeading: PQ(QQ.viewHeading, -wQ.m.maxFrameHeading, wQ.m.maxFrameHeading), viewElevation: PQ(QQ.viewElevation, 0, wQ.m.maxFrameElevation), padding: PQ(QQ.padding, 0, wQ.m.maxFrameDistance), closestDistance: PQ(QQ.closestDistan … [truncated]
+           };
+         default:
+           return XQ
+       }
+     }
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10440-L10955` → after: `L1268-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1268-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L1268-L1290) · [Before (L10440-L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10440-L10955)

```diff
-             return {
-               c: function() {
-                 ip = (0, Sp.fLW)("\xa0\n            "), Ip.c(), cp = (0, Sp.cSb)()
-               },
-               m: function(pp, Op) {
-                 (0, Sp.$Tr)(pp, ip, Op), Ip.m(pp, Op), (0, Sp.$Tr)(pp, cp, Op)
-               },
-               p: function(pp, ip) {
-                 op === (op = Op(pp)) && Ip ? Ip.p(pp, ip) : (Ip.d(1), (Ip = op(pp)) && (Ip.c(), Ip.m(cp.parentNode, cp)))
-               },
-               d: function(pp) {
-                 pp && (0, Sp.ogt)(ip), Ip.d(pp), pp && (0, Sp.ogt)(cp)
-               }
-             }
-           }
- 
- ... (500 more removed lines; see GitHub link above)
+             if (null !== WQ && Math.abs(WQ - XQ) <= .5 && QQ.font.toLowerCase().includes(zQ.toLowerCase())) return wQ
+           }
+           return null
+         }(QQ, [BQ, ...yQ], IQ);
+         DQ !== BQ && function(QQ, WQ, wQ) {
+           zQ || (zQ = !0, Promise.resolve().then((() => XQ(1109))).then((XQ => {
+             let {
+               jB: qQ
+             } = XQ;
+             qQ(new Error("A canvas didn't take canvasTxt's font"), {
+               font: QQ,
+               HI: WQ,
+               drawnWith: null !== wQ && void 0 !== wQ ? wQ : "the kept font, scaled"
+             })
+           })).catch((() => {})))
+         }(BQ, VQ, DQ);
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10957` → after: `L1292-L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1292-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L1292-L1293) · [Before (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10957)

```diff
-             return pp
+           } finally {
+             QQ.restore()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10959-L10974` → after: `L1295-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1295-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L1295-L1473) · [Before (L10959-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10959-L10974)

```diff
-           var qI = function(pp) {
-               if (!pp || 0 === pp.length) return {};
-               for (var ip = {}, cp = pp.split(";"), Op = 0; Op < cp.length; Op++) {
-                 var op = cp[Op].indexOf("=");
-                 if (!(op < 0)) {
-                   var Ip = cp[Op].substring(0, op).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
-                     Sp = cp[Op].substring(op + 1, cp[Op].length);
-                   try {
-                     Ip = decodeURIComponent(Ip)
-                   } catch (pp) {}
-                   try {
-                     Sp = decodeURIComponent(Sp)
-                   } catch (pp) {}
-                   ip[Ip] = Sp
-                 }
-               }
+         }
+         return this.drawLines(QQ, WQ, wQ, sQ, FQ, PQ, IQ)
+       },
+       drawLines: function(QQ, WQ, XQ, qQ, TQ, zQ, sQ) {
+         const FQ = XQ + TQ,
+           PQ = qQ + zQ;
+         let gQ, JQ = qQ + zQ / 2 + sQ / 2;
+         "right" === this.align ? (gQ = FQ, QQ.textAlign = "right") : "left" === this.align ? (gQ = XQ, QQ.textAlign = "left") : (gQ = XQ + TQ / 2, QQ.textAlign = "center");
+         for (const wQ of WQ) {
+           QQ.measureText(wQ).width >= TQ && (WQ = WQ.replace(wQ, ""))
+         }
+         WQ = (0, wQ.P)(WQ);
+         const rQ = [],
+           IQ = WQ.split("\n"),
+           jQ = this.justify ? QQ.measureText("\u200a").width : 0;
+         IQ.forEach((WQ => {
+ ... (163 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L10976-L11892` → after: `L1475-L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1475-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/195.js#L1475-L1776) · [Before (L10976-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/195.js#L10976-L11892)

```diff
-             },
-             MI = function(pp, ip, cp) {
-               "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = encodeURIComponent(pp) + "=" + encodeURIComponent(ip) + function(pp) {
-                 void 0 === pp && (pp = {});
-                 var ip = pp,
-                   cp = ip.path,
-                   Op = ip.domain,
-                   op = ip.expires,
-                   Ip = ip.secure,
-                   Sp = ip.sameSite,
-                   xp = ["none", "lax", "strict"].indexOf((Sp || "").toLowerCase()) > -1 ? Sp : null;
-                 return [null == cp ? "" : ";path=" + cp, null == Op ? "" : ";domain=" + Op, null == op ? "" : ";expires=" + op.toUTCString(), void 0 === Ip || !1 === Ip ? "" : ";secure", null === xp ? "" : ";SameSite=" + xp].join("")
-               }(cp))
-             },
-             CI = function() {
-               return "undefined" == typeof document || void 0 === document.cookie ? "" : document.cookie
- ... (901 more removed lines; see GitHub link above)
+             }(jQ.standing),
+             AQ = hQ.find(HQ),
+             RQ = aQ.find(HQ),
+             EQ = null === cQ || void 0 === AQ ? null : {
+               value: AQ.value,
+               rank: cQ.rank
+             },
+             CQ = VQ(aQ, void 0 === RQ || RQ.value === (null === EQ || void 0 === EQ ? void 0 : EQ.value) ? EQ : null),
+             uQ = VQ(hQ, EQ),
+             LQ = (QQ, WQ) => {
+               const XQ = QQ.findIndex(HQ);
+               return XQ >= 0 ? WQ[XQ] : null
+             },
+             kQ = null !== (zQ = null !== (gQ = null === cQ || void 0 === cQ ? void 0 : cQ.rank) && void 0 !== gQ ? gQ : LQ(hQ, uQ)) && void 0 !== zQ ? zQ : LQ(aQ, CQ);
+           QQ.font = "bold 34px 'Jetbrains Mono', monospace";
+           const fQ = [...lQ ? CQ : [], ...iQ ? [] : uQ],
+ ... (286 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/196.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/196.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L4)

```diff
-   34306: (pp, ip, cp) => {
+   34320: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => Sp,
-       coreDevTools: () => Yp,
-       devTools: () => Lp
+       getLatestPublishedUpdateLog: () => sQ,
+       updateLogsData: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L10-L22` → after: `L9-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L9-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L9-L118) · [Before (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L10-L22)

```diff
-     var Op = cp(657),
-       op = cp(1317),
-       Ip = cp(34310);
-     const Sp = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function xp() {
-       const {
-         noaDevTools: pp
-       } = await cp.e(242).then((() => cp(41280)));
-       return pp
-     }
-     const Lp = new class {
-         constructor() {
-           this.loadHost = xp, this.tools = Sp
+     var wQ = XQ(860),
+       qQ = XQ(382);
+     const TQ = "\xa0\xa0\xa0\xa0",
+       zQ = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: qQ.r.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L24-L25` → after: `L120-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L120-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L120-L136) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L24-L25)

```diff
-         setHost(pp) {
-           this.tools = null === pp ? Sp : pp.tools, this.loadHost = null === pp ? xp : async () => pp
+       }, {
+         author: ["januaryboy", "Oliver"],
+         date: new Date("2026-10-27T12:00:00Z"),
+         title: "New Texture Pack: January 16x16 \ud83c\udfa8",
+         description: "A brand new 16x16 texture pack by januaryboy, giving every block, crop and model a fresh, crisp look!\n\n Pick it in Settings > Texture Pack.",
+         image: "january_16x16_texture_pack.jpg",
+         onClickImage: {
+           type: "openSettings",
+           category: "texturePack"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "openSettings",
+             category: "texturePack"
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L27-L28` → after: `L138-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L138-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L138-L158) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L27-L28)

```diff
-         supports(pp) {
-           return this.tools.has(pp)
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-22T12:00:00Z"),
+         title: "New Game: Build a Factory 2 \ud83c\udfed",
+         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
+         image: "build_a_factory_2.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "buildAFactory2"
+         },
+         mobileNotification: {
+           title: "New Game: Build a Factory 2 \ud83c\udfed",
+           body: "Build machines on your own floating island and watch them work - even while you're away!"
+         },
+         callToAction: {
+           color: "blue",
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L30-L32` → after: `L160-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L160-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L160-L171) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L30-L32)

```diff
-         async downloadScene(pp, ip) {
-           const cp = await this.loadHost();
-           await cp.downloadScene(pp, ip)
+       }, {
+         date: new Date("2026-10-21T13:00:00Z"),
+         title: "Skyblock Official Trailer",
+         description: "We have released the official trailer for Bloxd Skyblock!",
+         youtubeVideoId: "A2LktM6_YFM",
+         callToAction: {
+           color: "blue",
+           label: "Watch on YouTube",
+           action: {
+             type: "openUrl",
+             url: "https://www.youtube.com/watch?v=A2LktM6_YFM"
+           }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L34-L36` → after: `L173-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L173-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L173-L189) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L34-L36)

```diff
-         async setAmbientLightIntensity(pp) {
-           const ip = await this.loadHost();
-           await ip.setAmbientLightIntensity(pp)
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry"],
+         date: wQ.e,
+         title: "Skyblock: Cragrock Mines! \u26cf\ufe0f",
+         description: "A meteor has struck Cragrock Mines, and the dwarves need your help!\n\n Ride a cannon over a lava lake, drive a gold-mining drill and earn the trust of the wary Elder Crag. Finish Ruby's mining lessons in the Hub and she'll show you the way.",
+         image: "skyblock_cragrock_mines.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "skyblock"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Explore the mines",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L38-L39` → after: `L191-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L191-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L191-L225) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L38-L39)

```diff
-         async capturePhoto(pp, ip, cp) {
-           return (await this.loadHost()).capturePhoto(pp, ip, cp)
+       }, {
+         author: "Oliver",
+         date: new Date("2026-10-14T12:00:00Z"),
+         title: "Invite Your Friends! \ud83d\udce8",
+         description: "Invite a friend to your game or party from their profile, and they'll get a notification to join you.\n\n Missed one? Your invites wait in the Social menu until they expire.",
+         callToAction: {
+           color: "blue",
+           label: "Open Social",
+           action: {
+             type: "openMenu",
+             menu: qQ.r.SOCIAL
+           }
+         },
+         showPopupOnLoad: !1
+       }, {
+         author: ["JBL", "AnxietreeDev"],
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L41-L45` → after: `L227-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L227-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L227-L235) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L41-L45)

```diff
-       },
-       Yp = {
-         tools: Ip.d,
-         downloadScene: async () => {
-           throw new Error("This client can't download the scene")
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-09T12:00:00Z"),
+         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
+         image: "lucky_bedwars_gear_sets.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L47-L48` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L237-L239) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L47-L48)

```diff
-         setAmbientLightIntensity: async () => {
-           throw new Error("This client can't set the ambient light")
+         mobileNotification: {
+           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L50-L51` → after: `L241-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L241-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L241-L1112) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L50-L51)

```diff
-         capturePhoto: async () => {
-           throw new Error("No game is drawing yet")
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
+         date: new Date("2026-10-07T08:00:00Z"),
+         title: "New Game: Skyblock!",
+         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
+         image: "skyblock_thumbnail_large.jpg",
+         onClickImage: {
+           type: "playGame",
+ ... (856 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L53-L56` → after: `L1114-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L1114-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/196.js#L1114-L2780) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/196.js#L53-L56)

```diff
-       };
-     Op.z && Lp.setHost(Yp), (0, op.y)((() => {
-       Lp.setHost(Yp)
-     }))
+       }, {
+         date: new Date("2026-04-15T12:00:00Z"),
+         title: "Nuketown has been reworked",
+         description: "The Nuketown map has been completely remade from the ground up.\n\nTry it out now in Clutch and let us know what you think!",
+         image: "nuketown_rework.jpg",
+         author: ["Harry", "pegasys"],
+         callToAction: {
+           color: "blue",
+           label: "Try it out",
+           action: {
+             type: "playGame",
+             game: "clutch"
+           }
+         }
+       }, {
+         date: new Date("2026-04-10T15:02:00Z"),
+ ... (1651 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/197.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/197.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L4-L94` → after: `L4-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L4-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L4-L1013) · [Before (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L4-L94)

```diff
-   36593: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       showOnboardingPopup: () => Bp
-     });
-     var Op = cp(62),
-       op = cp(1201),
-       Ip = cp(1372),
-       Sp = cp(1480),
-       xp = cp(4417),
-       Lp = cp(1579),
-       Yp = cp(1577),
-       Dp = cp(2276),
-       Ap = cp(1049),
-       Pp = cp.n(Ap),
-       Wp = cp(1149),
-       yp = cp(36602),
- ... (75 more removed lines; see GitHub link above)
+   34329: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(QQ, WQ, XQ) {
+               QQ.exports = XQ(7588)
+             },
+             5036: function(QQ, WQ, XQ) {
+               XQ(1719), XQ(5677), XQ(6394), XQ(5334), XQ(6969), XQ(2021), XQ(8328), XQ(2129);
+               var wQ = XQ(1287);
+               QQ.exports = wQ.Promise
+             },
+             2582: function(QQ, WQ, XQ) {
+               XQ(1646), XQ(6394), XQ(2004), XQ(462), XQ(8407), XQ(2429), XQ(1172), XQ(8288), XQ(1274), XQ(8201), XQ(6626), XQ(3211), XQ(9952), XQ(15), XQ(9831), XQ(7521), XQ(2972), XQ(6956), XQ(5222), XQ(2257);
+               var wQ = XQ(1287);
+ ... (994 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L97-L150` → after: `L1030-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1030-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1030-L1361) · [Before (L97-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L97-L150)

```diff
-             }, op)
-           }))
-         })]
-       })
-     }
- 
-     function Mp() {
-       const {
-         t: pp
-       } = (0, op.H)(), {
-         userContext: ip,
-         isUserContextUpdating: cp
-       } = (0, tp.b)(), [Ip, Sp] = (0, Op.useState)(!1), [, Lp] = (0, Op.useReducer)((pp => pp + 1), 0), Yp = (0, Op.useRef)({}), Dp = (0, Op.useRef)(null), Ap = (0, vp.b)(), ep = {
-         ...ip.getPlayerCosmetics(),
-         ...Dp.current
-       }, Mp = (0, Op.useRef)(null);
- ... (38 more removed lines; see GitHub link above)
+             },
+             783: function(QQ, WQ, XQ) {
+               var wQ = XQ(7583);
+               QQ.exports = wQ.Promise
+             },
+             8640: function(QQ, WQ, XQ) {
+               var wQ = XQ(4061),
+                 qQ = XQ(6544);
+               QQ.exports = !!Object.getOwnPropertySymbols && !qQ((function() {
+                 var QQ = Symbol();
+                 return !String(QQ) || !(Object(QQ) instanceof Symbol) || !Symbol.sham && wQ && wQ < 41
+               }))
+             },
+             9491: function(QQ, WQ, XQ) {
+               var wQ = XQ(7583),
+                 qQ = XQ(9212),
+ ... (316 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L152-L174` → after: `L1363-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1363-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1363-L1399) · [Before (L152-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L152-L174)

```diff
-             }(ep, op);
-             return (0, Hp.jsx)("button", {
-               type: "button",
-               className: Pp()("OnboardingPreset", {
-                 OnboardingPresetSelected: Ip
-               }),
-               "aria-label": pp("homePage:onboardingPreset", {
-                 number: cp + 1
-               }),
-               "aria-pressed": Ip,
-               onClick: () => {
-                 (0, xp.k)(`preset.${Op}`);
-                 const {
-                   eyes: pp,
-                   skin: ip
-                 } = Yp.current;
- ... (7 more removed lines; see GitHub link above)
+             },
+             3955: function(QQ, WQ, XQ) {
+               var wQ = XQ(7583).TypeError;
+               QQ.exports = function(QQ) {
+                 if (null == QQ) throw wQ("Can't call method on " + QQ);
+                 return QQ
+               }
+             },
+             460: function(QQ, WQ, XQ) {
+               var wQ = XQ(7583),
+                 qQ = Object.defineProperty;
+               QQ.exports = function(QQ, WQ) {
+                 try {
+                   qQ(wQ, QQ, {
+                     value: WQ,
+                     configurable: !0,
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L177-L181` → after: `L1402-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1402-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1402-L1677) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L177-L181)

```diff
-               },
-               children: (0, Hp.jsx)("div", {
-                 className: "OnboardingPresetImage",
-                 style: {
-                   backgroundImage: `url(/textures/charSkins/previews/character_${Op}_preview.png)`
+               }
+             },
+             8821: function(QQ, WQ, XQ) {
+               var wQ = XQ(4615).f,
+                 qQ = XQ(2870),
+                 TQ = XQ(3649)("toStringTag");
+               QQ.exports = function(QQ, WQ, XQ) {
+                 QQ && !XQ && (QQ = QQ.prototype), QQ && !qQ(QQ, TQ) && wQ(QQ, TQ, {
+                   configurable: !0,
+                   value: WQ
+                 })
+               }
+             },
+             9137: function(QQ, WQ, XQ) {
+               var wQ = XQ(7836),
+                 qQ = XQ(8284),
+ ... (260 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L184-L213` → after: `L1723-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1723-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1723-L1788) · [Before (L184-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L184-L213)

```diff
-             }, Op)
-           }))
-         }), (0, Hp.jsxs)("button", {
-           type: "button",
-           className: "OnboardingMoreOptions",
-           "aria-expanded": Ip,
-           onClick: () => {
-             Ip || (0, xp.k)("more"), Sp(!Ip)
-           },
-           children: [pp("homePage:onboardingMoreOptions"), (0, Hp.jsx)(Up.d, {
-             name: Ip ? "caret-up" : "caret-down"
-           })]
-         }), Ip && (0, Hp.jsxs)("div", {
-           ref: Mp,
-           className: "OnboardingMore",
-           children: [(0, Hp.jsx)("div", {
- ... (14 more removed lines; see GitHub link above)
+             },
+             1646: function(QQ, WQ, XQ) {
+               var wQ = XQ(7263),
+                 qQ = XQ(7583),
+                 TQ = XQ(6544),
+                 zQ = XQ(4521),
+                 sQ = XQ(794),
+                 FQ = XQ(1324),
+                 PQ = XQ(1825),
+                 gQ = XQ(5999),
+                 JQ = XQ(4822),
+                 rQ = XQ(9269),
+                 IQ = XQ(3649),
+                 jQ = XQ(4061),
+                 BQ = IQ("isConcatSpreadable"),
+                 yQ = 9007199254740991,
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L215-L222` → after: `L1790-L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1790-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1790-L1947) · [Before (L215-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L215-L222)

```diff
-               }
-             }), (0, Hp.jsx)(qp, {
-               label: pp("homePage:onboardingSkinColour"),
-               colours: kp,
-               picked: null === lp || void 0 === lp ? void 0 : lp[1],
-               onPick: pp => {
-                 (0, xp.k)("skin"), Yp.current.skin = pp, Ep({
-                   skin: Rp("skin", "0", pp)
+               }), (function() {
+                 var QQ = IQ(this),
+                   WQ = QQ.target,
+                   XQ = QQ.kind,
+                   wQ = QQ.index++;
+                 return !WQ || wQ >= WQ.length ? (QQ.target = void 0, {
+                   value: void 0,
+                   done: !0
+                 }) : "keys" == XQ ? {
+                   value: wQ,
+                   done: !1
+                 } : "values" == XQ ? {
+                   value: WQ[wQ],
+                   done: !1
+                 } : {
+                   value: [wQ, WQ[wQ]],
+ ... (142 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L225-L354` → after: `L1950-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L1950-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L1950-L2054) · [Before (L225-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L225-L354)

```diff
-             })]
-           })]
-         })]
-       })
-     }
-     var Cp = cp(1284),
-       Ep = cp(25),
-       Xp = cp(34316),
-       lp = cp(1361),
-       Qp = cp(1692);
- 
-     function Jp(pp) {
-       const {
-         t: ip
-       } = (0, op.H)(), {
-         userContext: cp,
- ... (114 more removed lines; see GitHub link above)
+             },
+             5334: function(QQ, WQ, XQ) {
+               var wQ, qQ, TQ, zQ, sQ = XQ(7263),
+                 FQ = XQ(6268),
+                 PQ = XQ(7583),
+                 gQ = XQ(5897),
+                 JQ = XQ(8262),
+                 rQ = XQ(783),
+                 IQ = XQ(1270),
+                 jQ = XQ(6893),
+                 BQ = XQ(7496),
+                 yQ = XQ(8821),
+                 VQ = XQ(7730),
+                 DQ = XQ(8257),
+                 pQ = XQ(9212),
+                 GQ = XQ(794),
+ ... (89 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L356-L359` → after: `L2056-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L2056-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L2056-L2208) · [Before (L356-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L356-L359)

```diff
-                 })()
-               },
-               children: (0, Hp.jsx)(Up.d, {
-                 name: "dice"
+                 },
+                 JW = function(QQ) {
+                   return 1 !== QQ.rejection && !QQ.parent
+                 },
+                 rW = function(QQ) {
+                   JQ(aQ, PQ, (function() {
+                     var WQ = QQ.facade;
+                     kQ ? KQ.emit("rejectionHandled", WQ) : PW("rejectionhandled", WQ, QQ.value)
+                   }))
+                 },
+                 IW = function(QQ, WQ, XQ) {
+                   return function(wQ) {
+                     QQ(WQ, wQ, XQ)
+                   }
+                 },
+                 jW = function(QQ, WQ, XQ) {
+ ... (137 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L361-L567` → after: `L2210-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L2210-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/197.js#L2210-L11892) · [Before (L361-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/197.js#L361-L567)

```diff
-             })]
-           }), "suffixed" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && (0, Hp.jsx)("div", {
-             className: "OnboardingNameNote",
-             children: ip("homePage:onboardingNameSuffixed", {
-               taken: Pp.taken,
-               name: Pp.name
-             })
-           }), null !== hp && (0, Hp.jsx)("div", {
-             className: "OnboardingNameNote OnboardingNameError",
-             children: hp
-           })]
-         }),
-         submit: () => {
-           if (!yp && null !== mp) {
-             if (null === Lp) {
-               if (fp(mp)) return;
- ... (191 more removed lines; see GitHub link above)
+             },
+             2257: function(QQ, WQ, XQ) {
+               var wQ = XQ(7263),
+                 qQ = XQ(7583),
+                 TQ = XQ(8821);
+               wQ({
+                 global: !0
+               }, {
+                 Reflect: {}
+               }), TQ(qQ.Reflect, "Reflect", !0)
+             },
+             2129: function(QQ, WQ, XQ) {
+               var wQ = XQ(6389).charAt,
+                 qQ = XQ(8320),
+                 TQ = XQ(2743),
+                 zQ = XQ(9012),
+ ... (9667 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/198.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/198.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L2)

```diff
- export const ids = [198];
+ export const ids = [198, 199];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L14` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L7) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L14)

```diff
-   34364: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => gp,
-       h: () => ui,
-       l: () => ei,
-       p: () => ki,
-       r: () => Li,
-       v: () => Di,
-       w: () => Pi,
-       y: () => ji,
-       C: () => Ai
+   34331: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       reportJsMainStall: () => sQ,
+       resetJsMainStallReport: () => FQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L16-L249` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L9-L12) · [Before (L16-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L16-L249)

```diff
-     var Op = cp(259),
-       op = cp(25),
-       Ip = cp(104),
-       Sp = cp(1650),
-       xp = cp(4515),
-       Lp = cp(2993),
-       Yp = cp(3e3),
-       Dp = cp(44);
-     const {
-       windows: Ap,
-       target: Pp,
-       stepDown: Wp,
-       stepUp: yp,
-       noGain: Up
-     } = Yp.d, wp = 1e3 / 60 * 1.08, vp = 1e3 / 55, tp = 1e3 / 45, Hp = 1e3 / 30 * .92, dp = 1e3 / 30 * 1.08;
-     class ep {
- ... (218 more removed lines; see GitHub link above)
+     var wQ = XQ(34339),
+       qQ = XQ(3176),
+       TQ = XQ(34346);
+     let zQ = !1;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L251-L252` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L14-L15) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L251-L252)

```diff
-     function fp() {
-       return (0, Lp.G)(op.c.get("clientEscMenuOptions").pixelScale) * (0, Lp.C)()
+     function sQ(QQ, WQ, XQ, sQ) {
+       zQ || (zQ = !0, (0, qQ.reportClientError)("wasm_load", (0, TQ.d)(QQ, WQ, XQ, sQ, (0, TQ.e)()), "JS-mainStall", !0, wQ.CAPPED_COUNTS_VISIT_CAP))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L256` → after: `L19-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L19-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L19-L33) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L256)

```diff
-       return (0, Lp.s)(fp())
+       zQ = !1
+     }
+   },
+   34346: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       e: () => zQ
+     });
+     var wQ = XQ(307),
+       qQ = XQ(150),
+       TQ = XQ(34354);
+ 
+     function zQ() {
+       var QQ, WQ, XQ;
+       return null !== (QQ = (0, wQ.h)(null !== (WQ = null === (XQ = (0, qQ.n)()) || void 0 === XQ ? void 0 : XQ.renderer) && void 0 !== WQ ? WQ : null, (0, qQ.j)())) && void 0 !== QQ ? QQ : "unknown"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L259-L261` → after: `L36-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L36-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L36-L59) · [Before (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L259-L261)

```diff
-     function hp() {
-       const pp = Dp.h.getItem(Bp);
-       return "object" !== typeof pp || null === pp || "string" !== typeof pp.gpu ? null : pp
+     function sQ(QQ, WQ, XQ, wQ, qQ) {
+       const zQ = null === WQ ? "untimed" : `${Math.round(WQ)} ms`;
+       return `frames stalled, ${XQ}, gpu ${(0,TQ.b)(qQ)}, blocking ${zQ}, drawn ${Math.round(QQ)} ms apart, timers ${wQ.timers}, timer gap ${Math.round(wQ.longestGapMs)} ms`
+     }
+   },
+   34339: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CAPPED_COUNTS_VISIT_CAP: () => TQ,
+       reportCappedWasmFailure: () => FQ,
+       reportUncappedWasmFailure: () => sQ,
+       reportWasmCrash: () => qQ,
+       reportWasmFailure: () => zQ
+     });
+     var wQ = XQ(3176);
+ 
+     function qQ(QQ) {
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L264-L269` → after: `L62-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L62-L65) · [Before (L264-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L264-L269)

```diff
-     function ap(pp) {
-       return {
-         untilEpochMs: Date.now() + (pp.untilMs - performance.now()),
-         backoffMs: pp.backoffMs,
-         fps: pp.fps
-       }
+     function sQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
+         context: qQ
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L272-L457` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L68-L70) · [Before (L272-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L272-L457)

```diff
-     function np(pp) {
-       return void 0 === pp || "number" !== typeof pp.fps ? null : {
-         untilMs: performance.now() + (pp.untilEpochMs - Date.now()),
-         backoffMs: pp.backoffMs,
-         fps: pp.fps
-       }
-     }
-     let Fp = null;
- 
-     function gp() {
-       if (null === Fp) {
-         const pp = new URLSearchParams(window.location.search).get("msaa");
-         Fp = op.c.get("clientEscMenuOptions").antiAliasing && ("0" === pp || "1" !== pp && !(0, xp.c)("antiAliasing") && (0, Qp.e)())
-       }
-       return Fp
-     }
- ... (170 more removed lines; see GitHub link above)
+     function FQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
+         context: qQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L460-L466` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L73-L76) · [Before (L460-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L460-L466)

```diff
-     let vi = 0,
-       ti = 0,
-       Hi = 0,
-       di = !1;
- 
-     function ei() {
-       vi++
+   },
+   34354: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return String(QQ).replace(/\d/g, (QQ => String.fromCharCode(97 + Number(QQ))))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L494-L519` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/198.js#L79-L80) · [Before (L494-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/198.js#L494-L519)

```diff
-       d: () => Ip
-     });
-     var Op = cp(104),
-       op = cp(129);
- 
-     function Ip(pp, ip, cp) {
-       if ("webgpu" === pp) return cp ? ((0, Op.seedGpuVendor)(cp), {
-         vendor: cp,
-         renderer: ""
-       }) : null;
-       try {
-         const cp = "webgl" === pp ? ip.getContext("webgl2") : ip.getContext("webgl");
-         "webgl" === pp && cp && (0, op.z)(cp);
-         const Ip = null === cp || void 0 === cp ? void 0 : cp.getExtension("WEBGL_debug_renderer_info");
-         if (cp && Ip) {
-           const pp = String(cp.getParameter(Ip.UNMASKED_VENDOR_WEBGL)),
- ... (10 more removed lines; see GitHub link above)
+       b: () => wQ
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/199.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/199.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df)

#### 1. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L4-L9` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L4-L10) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L4-L9)

```diff
-   37169: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => op,
-       e: () => Ip,
-       h: () => xp,
-       l: () => Sp
+   34339: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CAPPED_COUNTS_VISIT_CAP: () => TQ,
+       reportCappedWasmFailure: () => FQ,
+       reportUncappedWasmFailure: () => sQ,
+       reportWasmCrash: () => qQ,
+       reportWasmFailure: () => zQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L11-L17` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L12) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L11-L17)

```diff
-     var Op = cp(1779);
-     const op = ".bloxdreplay",
-       Ip = "application/octet-stream";
- 
-     function Sp() {
-       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${op}`
-     }
+     var wQ = XQ(3176);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L20-L23` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L15) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L20-L23)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp();
-       return (0, Op.c)(new Blob([pp], {
-         type: Ip
-       }), ip), ip
+       (0, wQ.reportClientError)("wasm_load", QQ.message, QQ.code)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L25-L150` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L17) · [Before (L25-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L25-L150)

```diff
-   },
-   37151: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp,
-       f: () => Ip
-     });
-     var Op = cp(37156);
-     let op = {
-       open: async () => {
-         throw new Error(Op.c.viewerLoadFailed.text)
-       },
-       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
-       encode: async () => null,
-       fileHandle: () => null,
-       markSaved: () => {}
-     };
- ... (110 more removed lines; see GitHub link above)
+     const TQ = wQ.MAX_ERRORS_PER_VISIT - 4;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L152-L162` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L19-L21) · [Before (L152-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L152-L162)

```diff
-     function Lp(pp) {
-       return pp instanceof Error && xp.has(pp.message) ? pp.message : void 0
-     }
- 
-     function Yp(pp) {
-       var ip;
-       const cp = null !== (ip = pp.timeoutMs) && void 0 !== ip ? ip : "Error" === pp.type ? op : Ip;
-       Op.m.GA("showBottomMessage", {
-         message: pp.text,
-         timeoutLength: cp,
-         type: pp.type
+     function zQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, wQ.MAX_ERRORS_PER_VISIT, {
+         context: qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L254-L633` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L26-L28) · [Before (L254-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L254-L633)

```diff
-       if (! function(pp, ip, cp) {
-           return pp.size > 0 || ip.size > 0 || cp.size > 0
-         }(ip, cp, Op)) return pp;
-       const op = pp => {
-         const Op = cp.get(pp.name);
-         var op;
-         return Op ? null !== (op = Op.stepsAway) && void 0 !== op ? op : 1 : ip.has(pp.name) ? -1 : 0
-       };
-       return [...pp].sort(((pp, ip) => op(pp) - op(ip) || ((pp, ip) => {
-         const cp = Op.get(pp.name),
-           op = Op.get(ip.name);
-         return void 0 === cp || void 0 === op ? (void 0 === cp ? 1 : 0) - (void 0 === op ? 1 : 0) : Number(ip.haveIngredients) - Number(pp.haveIngredients) || cp - op
-       })(pp, ip)))
-     }
- 
-     function dp(pp, ip, cp) {
- ... (364 more removed lines; see GitHub link above)
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
+         context: qQ
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L637-L893` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/199.js#L32-L34) · [Before (L637-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/199.js#L637-L893)

```diff
-       const {
-         numLines: op,
-         charsPerLine: Ip
-       } = Yp(cp, Op, ip);
-       return Hp(pp, op, Ip, !1)
-     }
-     const Ap = 32e3;
- 
-     function Pp(pp) {
-       return pp.slice(0, Ap)
-     }
-     const Wp = 512e3,
-       yp = 64,
-       Up = Wp;
- 
-     function wp(pp, ip) {
- ... (241 more removed lines; see GitHub link above)
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
+         context: qQ
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/200.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/200.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L2)

```diff
- export const ids = [200];
+ export const ids = [199, 200];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L7)

```diff
-   39283: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => xp,
-       f: () => Ip
+   34339: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CAPPED_COUNTS_VISIT_CAP: () => TQ,
+       reportCappedWasmFailure: () => FQ,
+       reportUncappedWasmFailure: () => sQ,
+       reportWasmCrash: () => qQ,
+       reportWasmFailure: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L9-L10` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L12) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L9-L10)

```diff
-     var Op = cp(4176);
-     let op = null;
+     var wQ = XQ(3176);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L13` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L15) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L13)

```diff
-       return null !== op && pp === op
+       (0, wQ.reportClientError)("wasm_load", QQ.message, QQ.code)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L16-L64` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L19-L22) · [Before (L16-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L16-L64)

```diff
-     function Sp() {
-       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
-     }
-     class xp {
-       constructor(pp, ip) {
-         this.version = "0.7.0";
-         var cp = Object.assign({}, new Sp, ip || {});
-         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           Aip: 0,
-           Wip: 0,
-           yip: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (33 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, wQ.MAX_ERRORS_PER_VISIT, {
+         context: qQ
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L67-L68` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L25-L28) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L67-L68)

```diff
-     function Lp(pp) {
-       for (var ip in pp) pp[ip] = 0
+     function sQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
+         context: qQ
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L71-L78` → after: `L31-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L31-L34) · [Before (L71-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L71-L78)

```diff
-     function Yp(pp) {
-       window.addEventListener("keydown", wp.bind(null, pp, !0), !1), window.addEventListener("keyup", wp.bind(null, pp, !1), !1);
-       var ip = {
-         passive: !0
-       };
-       pp.element.addEventListener("touchstart", Wp.bind(void 0, pp), {
-         passive: !1
-       }), pp.element.addEventListener("touchend", Up.bind(void 0, pp), ip), pp.element.addEventListener("mousedown", vp.bind(null, pp, !0), ip), window.document.addEventListener("mouseup", vp.bind(null, pp, !1), ip), pp.element.addEventListener("touchmove", tp.bind(null, pp), ip) … [truncated]
+     function FQ(QQ, WQ, XQ, qQ) {
+       (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
+         context: qQ
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L80-L82` → after: `L36-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L36-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L36-L60) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L80-L82)

```diff
-     var Dp = 0,
-       Ap = 0,
-       Pp = null;
+   },
+   36543: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => UQ,
+       d: () => dQ,
+       h: () => HQ,
+       j: () => bQ
+     });
+     var wQ = XQ(36575),
+       qQ = XQ(3107),
+       TQ = XQ(36595),
+       zQ = XQ(3110),
+       sQ = XQ(34339),
+       FQ = XQ(3167),
+       PQ = XQ(3500),
+       gQ = XQ(3497),
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L84-L85` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L62-L63) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L84-L85)

```diff
-     function Wp(pp, ip) {
-       ip.preventDefault(), yp(ip)
+     function GQ() {
+       return "undefined" === typeof WebAssembly
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L88-L97` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L66-L67) · [Before (L88-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L88-L97)

```diff
-     function yp(pp) {
-       let ip = !1;
-       for (let cp = 0; cp < pp.touches.length; ++cp)
-         if (pp.touches[cp].identifier === Pp) {
-           ip = !0;
-           break
-         } if (!ip) {
-         const ip = pp.changedTouches[0];
-         Dp = ip.clientX, Ap = ip.clientY, Pp = ip.identifier
-       }
+     function UQ() {
+       return (0, wQ.h)()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L100-L101` → after: `L70-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L70-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L70-L76) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L100-L101)

```diff
-     function Up(pp, ip) {
-       for (var cp = ip.changedTouches, Op = 0; Op < cp.length; ++Op) cp[Op].identifier === Pp && (Pp = null)
+     function bQ() {
+       if (GQ()) return "this browser has no WebAssembly";
+       const QQ = (0, qQ.r)();
+       return "compile" === QQ || "instantiate" === QQ ? `the core wasm didn't load here (${(0,qQ.h)()})` : null
+     }
+     async function vQ(QQ) {
+       return await (0, TQ.e)(TQ.d, void 0, QQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L104-L109` → after: `L79-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L79-L82) · [Before (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L104-L109)

```diff
-     function wp(pp, ip, cp) {
-       if (!pp.ignoreEvent(cp)) try {
-         mp(pp, cp), ip && cp.isTrusted && !cp.repeat && pp._keyStates[cp.code] && Rp(pp, cp.code)
-       } finally {
-         qp(cp.code, ip, pp, cp)
-       }
+     function dQ() {
+       GQ() || (0, DQ.d)((() => {
+         vQ()
+       }))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L112-L126` → after: `L85-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L85-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L85-L114) · [Before (L112-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L112-L126)

```diff
-     function vp(pp, ip, cp) {
-       if (!pp.ignoreEvent(cp)) try {
-         mp(pp, cp)
-       } finally {
-         ! function(pp, ip, cp) {
-           if ("pointerId" in cp)
-             if (ip) {
-               if (null !== pp._touches.currID) return;
-               pp._touches.currID = cp.pointerId
-             } else {
-               if (pp._touches.currID !== cp.pointerId) return;
-               pp._touches.currID = null
-             } var Op = "button" in cp ? cp.button + 1 : 1;
-           qp("Mouse" + Op, ip, pp, cp)
-         }(pp, ip, cp)
+     function HQ() {
+       if (GQ()) return async () => ((0, FQ.j)("unsupported", 0), aQ("unsupported", "This browser has no WebAssembly"), !1);
+       const QQ = {
+         reloadFailedDownload: !0
+       };
+       return vQ(QQ), async () => {
+         var WQ;
+         const XQ = performance.now();
+         await vQ(QQ);
+         const wQ = (performance.now() - XQ) / 1e3;
+         if ((0, qQ.O)()) return (0, FQ.j)("ready", wQ), yQ || (yQ = !0, (0, qQ.U)((() => {
+           if ("call" !== (0, qQ.r)()) return;
+           const QQ = (0, qQ.n)(),
+             WQ = (0, JQ.k)(QQ, qQ.C, qQ.Z),
+             XQ = (0, qQ.w)().buffer.byteLength,
+             wQ = (0, JQ.f)(WQ.kind, WQ.refusedBytes),
+ ... (14 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L131-L145` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L119) · [Before (L131-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L131-L145)

```diff
-       var cp = ip.movementX || ip.mozMovementX || 0,
-         Op = ip.movementY || ip.mozMovementY || 0;
-       if (ip.touches && 0 === (cp | Op)) {
-         var op = function(pp) {
-           yp(pp);
-           for (let ip = 0; ip < pp.changedTouches.length; ++ip)
-             if (pp.changedTouches[ip].identifier == Pp) {
-               const cp = pp.changedTouches[ip],
-                 Op = [cp.clientX - Dp, cp.clientY - Ap];
-               return Dp = cp.clientX, Ap = cp.clientY, Op
-             } return console.error(`Did not find touch id ${Pp}`), [0, 0]
-         }(ip);
-         cp = op[0], Op = op[1]
-       }
-       pp.yG.dx += cp, pp.yG.dy += Op
+       (0, gQ.i)(pQ, `Bloxd wasm ${QQ}, so the game can't start: ${WQ}`, WQ, QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L148-L161` → after: `L133-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L133-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L133-L136) · [Before (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L148-L161)

```diff
-     function Hp(pp, ip) {
-       mp(pp, ip);
-       var cp = 1;
-       switch (ip.deltaMode) {
-         case 0:
-           cp = 1;
-           break;
-         case 1:
-           cp = 12;
-           break;
-         case 2:
-           cp = pp.element.clientHeight || window.innerHeight
-       }
-       pp.yG.Aip += (ip.deltaX || 0) * cp, pp.yG.Wip += (ip.deltaY || 0) * cp, pp.yG.yip += (ip.deltaZ || 0) * cp
+     function zQ(QQ) {
+       if (QQ instanceof WebAssembly.RuntimeError) return !0;
+       const WQ = QQ instanceof Error ? QQ.stack : void 0;
+       return "string" === typeof WQ && TQ.test(WQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L164-L176` → after: `L139-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L139-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L139-L148) · [Before (L164-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L164-L176)

```diff
-     function dp(pp, ip) {
-       if (!pp.WG) return ip.preventDefault(), !1
-     }
-     var ep = {
-       AltLeft: "altKey",
-       AltRight: "altKey",
-       ControlLeft: "ctrlKey",
-       ControlRight: "ctrlKey",
-       ShiftLeft: "shiftKey",
-       ShiftRight: "shiftKey",
-       MetaLeft: "metaKey",
-       MetaRight: "metaKey"
-     };
+     function sQ(QQ, WQ, XQ) {
+       var qQ;
+       const zQ = QQ instanceof Error ? QQ.name : "thrown",
+         sQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => TQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
+         FQ = null === WQ ? "wasm memory unknown" : `wasm memory ${Math.round(WQ/2**20)} MB`,
+         PQ = null === XQ.panic ? "" : `, panic: ${(0,wQ.i)(XQ.panic)}`,
+         gQ = `${zQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
+       return `${(0,wQ.l)(XQ.kind,XQ.refusedBytes)} ${gQ} (${FQ})${PQ}${sQ.length>0?` | ${sQ.join(" < ")}`:""}`
+     }
+     const FQ = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L178-L179` → after: `L150-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L150-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L150-L159) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L178-L179)

```diff
-     function jp(pp, ip) {
-       return !!pp[ep[ip]] || ("AltRight" === ip || "ControlLeft" === ip) && "function" === typeof pp.getModifierState && !0 === pp.getModifierState("AltGraph")
+     function PQ(QQ) {
+       var WQ;
+       let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(QQ instanceof Error) || !FQ.test(QQ.message)) return {};
+       if (!("detached" in XQ)) return {
+         arrayBufferDetached: "absent"
+       };
+       return {
+         arrayBufferDetached: (0, qQ.W)(null === (WQ = (0, qQ.O)(XQ, "detached")) || void 0 === WQ ? void 0 : WQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L182-L184` → after: `L163-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L163-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L163-L342) · [Before (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L182-L184)

```diff
-     function kp(pp, ip) {
-       for (var cp in pp._modifiersHeldThroughBlur = {}, ep) pp._keyStates[cp] && (pp._modifiersHeldThroughBlur[cp] = !0);
-       ip && ip.isTrusted && function() {
+     function JQ(QQ) {
+       let WQ = "[object Object]";
+       try {
+         WQ = String(QQ)
+       } catch {}
+       if ("[object Object]" !== WQ) return WQ;
+       try {
+         var XQ, wQ;
+         return null !== (XQ = null === (wQ = JSON.stringify(QQ)) || void 0 === wQ ? void 0 : wQ.slice(0, gQ)) && void 0 !== XQ ? XQ : WQ
+       } catch {
+         return WQ
+       }
+     }
+   },
+   36616: (QQ, WQ, XQ) => {
+     QQ.exports = XQ.p + "static/media/bloxd_wasm_bg.b7e23ad43b7e82dd6e75.wasm"
+ ... (164 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L186-L188` → after: `L344-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L344-L347) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L186-L188)

```diff
-           return window.self !== window.top
-         } catch (pp) {
-           return !0
+           const XQ = pW.tKiw(this.__wbg_ptr);
+           return QQ = XQ[0], WQ = XQ[1], KQ(XQ[0], XQ[1])
+         } finally {
+           pW.dsle(QQ, WQ, 1)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L190-L193` → after: `L349-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L349-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L349-L890) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L190-L193)

```diff
-       }() && (clearTimeout(pp._blurRelease), pp._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var ip in pp._modifiersHeldThroughBlur = {}, pp._keyStates) pp._keyStates[ip] && !/^Mouse\d/.test(ip) && Rp(pp, ip)
-       }), 0))
+       }
+     }
+     Symbol.dispose && (TQ.prototype[Symbol.dispose] = TQ.prototype.free);
+     class zQ {
+       __destroy_into_raw() {
+         const QQ = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, uQ.unregister(this), QQ
+       }
+       free() {
+         const QQ = this.__destroy_into_raw();
+         pW.DryQ(QQ, 0)
+       }
+       kJ(QQ, WQ) {
+         eQ(WQ, wQ);
+         const XQ = pW.fOeo(this.__wbg_ptr, QQ, WQ.__wbg_ptr);
+         if (XQ[2]) throw rW(XQ[1]);
+ ... (526 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L196-L199` → after: `L893-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L893-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L893-L896) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L196-L199)

```diff
-     function mp(pp, ip) {
-       var cp = pp._modifiersHeldThroughBlur;
-       if (cp && ip.isTrusted && document.hasFocus())
-         for (var Op in cp) delete cp[Op], pp._keyStates[Op] && Op !== ip.code && (jp(ip, Op) || Rp(pp, Op))
+     function rQ() {
+       const QQ = pW.TPwt();
+       var WQ = xQ(QQ[0], QQ[1]).slice();
+       return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L203-L209` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L900) · [Before (L203-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L203-L209)

```diff
-       const cp = {
-           code: ip,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         Op = op;
-       op = cp;
+       let XQ, wQ;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L211` → after: `L902-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L902-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L902-L907) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L211)

```diff
-         qp(ip, !1, pp, cp)
+         const qQ = sW(QQ, pW.U5qy),
+           TQ = GW,
+           zQ = JW(WQ, pW.U5qy, pW.KJR0),
+           sQ = GW,
+           FQ = pW.MbaF(qQ, TQ, zQ, sQ);
+         return XQ = FQ[0], wQ = FQ[1], KQ(FQ[0], FQ[1])
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L213` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L909) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L213)

```diff
-         op = Op
+         pW.dsle(XQ, wQ, 1)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L217-L233` → after: `L913-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L913-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L913-L920) · [Before (L217-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L217-L233)

```diff
-     function qp(pp, ip, cp, Op) {
-       var op = cp._keyBindmap[pp];
-       op && (Mp(cp._keyStates[pp], ip) && (cp._keyStates[pp] = ip, op.forEach((pp => {
-         (!cp.filterEvents || cp.filterEvents(Op, pp)) && function(pp, ip, cp, Op) {
-           var op = ip ? cp.pressCount : cp.releaseCount;
-           op[pp] = (op[pp] || 0) + 1;
-           var Ip = cp._bindPressCount[pp] || 0;
-           (Ip += ip ? 1 : -1) < 0 && (Ip = 0);
-           cp._bindPressCount[pp] = Ip;
-           var Sp = cp.state[pp];
-           if (Mp(Sp, Ip)) {
-             cp.state[pp] = Ip > 0;
-             var xp = ip ? cp.down : cp.up;
-             cp.disabled || xp.emit(pp, Op)
-           }
-         }(pp, ip, cp, Op)
- ... (1 more removed lines; see GitHub link above)
+     function jQ() {
+       const QQ = pW.LtWz();
+       var WQ = xQ(QQ[0], QQ[1]).slice();
+       return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
+     }
+ 
+     function BQ(QQ) {
+       return 0 !== pW.emuE(QQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L237` → after: `L924-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L924-L927) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L237)

```diff
-       return pp ? !ip : ip
+       const XQ = JW(QQ, pW.U5qy, pW.KJR0),
+         wQ = GW,
+         qQ = pW.r3NR(XQ, wQ, WQ);
+       if (qQ[1]) throw rW(qQ[0])
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L256-L262` → after: `L931-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L931-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L931-L935) · [Before (L256-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L256-L262)

```diff
-       return {
-         source: null,
-         direction: null,
-         oN: null,
-         timeout: void 0,
-         writtenAngle: null
-       }
+       pW.Yjc1()
+     }
+ 
+     function DQ() {
+       return pW.tk5d() >>> 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L266` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L939) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L266)

```diff
-       return Ap.find((ip => null !== ip.source && ip.source === pp))
+       return 0 !== pW.f7sP(QQ)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L270-L320` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L943-L944) · [Before (L270-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L270-L320)

```diff
-       clearTimeout(pp.timeout), pp.source = null, pp.direction = null, pp.writtenAngle = null, pp.oN && (pp.oN.style.rotate = "")
-     }
-     const Up = (0, Op.memo)((function() {
-       const [, pp] = (0, Op.useReducer)((pp => pp + 1), 0);
-       return (0, op.f)("damagedByOtherPlayer", (ip => {
-         let {
-           Ec: cp,
-           direction: Op
-         } = ip;
-         const op = cp || "nonDirectional",
-           Ip = function(pp) {
-             var ip;
-             const cp = null !== (ip = Wp(pp)) && void 0 !== ip ? ip : Ap.find((pp => null === pp.source));
-             if (cp) return cp;
-             const Op = {
-               source: null,
- ... (35 more removed lines; see GitHub link above)
+       return 0 !== pW.DhE5(QQ)
+     }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L323-L327` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L947) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L323-L327)

```diff
-       for (const ip of Ap) {
-         if (null === ip.source || (0, xp.G)(ip.direction)) continue;
-         const cp = ip.direction - pp;
-         cp !== ip.writtenAngle && (ip.writtenAngle = cp, ip.oN.style.rotate = `${cp}rad`)
-       }
+       pW.ucBJ(QQ)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L338` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L951) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L338)

```diff
-       return Op
+       return pW.jZR7() >>> 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L341-L342` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L954-L955) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L341-L342)

```diff
-     function Ip(pp) {
-       return Op !== pp && (Op = pp, !0)
+     function vQ() {
+       return pW.swmz() >>> 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L352-L353` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L958-L959) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L352-L353)

```diff
-     function op(pp, ip) {
-       return pp && !ip
+     function dQ() {
+       return 0 !== pW.eEmG()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L357` → after: `L963-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L963-L965) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L357)

```diff
-       return op(Op.c.get("isTouchScreen"), Op.c.get("clientEscMenuOptions").touchActionButtons)
+       const QQ = pW.vFPv();
+       var WQ = xQ(QQ[0], QQ[1]).slice();
+       return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L359-L532` → after: `L967-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L967-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L967-L971) · [Before (L359-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L359-L532)

```diff
-   },
-   40871: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       startPadGameplay: () => ep
-     });
-     cp(40736);
-     var Op = cp(40739),
-       op = cp(3837),
-       Ip = cp(25),
-       Sp = cp(39252),
-       xp = cp(3774),
-       Lp = cp(39278),
-       Yp = cp(34),
-       Dp = cp(2849),
-       Ap = cp(38644),
-       Pp = cp(8979),
- ... (158 more removed lines; see GitHub link above)
+ 
+     function aQ() {
+       const QQ = pW.MLcU();
+       var WQ = xQ(QQ[0], QQ[1]).slice();
+       return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L554-L557` → after: `L975-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L975-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L975-L977) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L554-L557)

```diff
-       return [...Sp.values()].sort(((pp, ip) => {
-         var cp, Op;
-         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
-       }))
+       const QQ = pW.VgnV();
+       var WQ = xQ(QQ[0], QQ[1]).slice();
+       return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L561-L562` → after: `L980-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L980-L981) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L561-L562)

```diff
-     function Yp(pp) {
-       Lp = pp
+     function hQ() {
+       return pW.RI4y() >>> 0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L566-L567` → after: `L984-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L984-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L984-L989) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L566-L567)

```diff
-     function Ap(pp) {
-       Dp = !0;
+     function iQ() {
+       pW.zdEy()
+     }
+ 
+     function cQ() {
+       let QQ, WQ;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L569` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L991-L992) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L569)

```diff
-         pp.onClick()
+         const XQ = pW.eED2();
+         return QQ = XQ[0], WQ = XQ[1], KQ(XQ[0], XQ[1])
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L571` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L994) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L571)

```diff
-         Dp = !1
+         pW.dsle(QQ, WQ, 1)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L576-L577` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L998-L999) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L576-L577)

```diff
-     function Pp() {
-       return Dp
+     function AQ(QQ) {
+       pW.qfo8(oQ(QQ))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L581` → after: `L1003-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1003-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1003-L1026) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L581)

```diff
-       return xp().filter((pp => pp.panel && !pp.disabled))
+       return {
+         __proto__: null,
+         jcA9: {
+           __proto__: null,
+           xfOB: function(QQ, WQ) {
+             return oQ(Error(KQ(QQ, WQ)))
+           },
+           YeI2: function(QQ, WQ) {
+             throw new Error(KQ(QQ, WQ))
+           },
+           XWOa: function(QQ) {
+             wW(QQ).call()
+           },
+           J7tI: function(QQ, WQ) {
+             console.error(KQ(QQ, WQ))
+           },
+ ... (8 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L585-L587` → after: `L1063-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1063-L1065) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L585-L587)

```diff
-       const ip = Wp(),
-         cp = ip.findIndex((pp => pp.id === Lp));
-       return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
+       TW === qW.length && qW.push(qW.length + 1);
+       const WQ = TW;
+       return TW = qW[WQ], qW[WQ] = QQ, WQ
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L590-L591` → after: `L1068-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1068-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1068-L1077) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L590-L591)

```diff
-     function Up() {
-       return null !== Lp && Wp().length > 1
+     function eQ(QQ, WQ) {
+       if (!(QQ instanceof WQ)) throw new Error(`expected instance of ${WQ.name}`)
+     }
+ 
+     function nQ(QQ, WQ) {
+       return QQ >>>= 0, ZQ().subarray(QQ / 8, QQ / 8 + WQ)
+     }
+ 
+     function xQ(QQ, WQ) {
+       return QQ >>>= 0, QW().subarray(QQ / 4, QQ / 4 + WQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L595` → after: `L1086-L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1086-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1086-L1097) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L595)

```diff
-       Yp(null)
+       return null !== NQ && 0 !== NQ.byteLength || (NQ = new Float64Array(pW.memory.buffer)), NQ
+     }
+     let OQ = null;
+ 
+     function KQ(QQ, WQ) {
+       return function(QQ, WQ) {
+         BW += WQ, BW >= jW && (IW = new TextDecoder("utf-8", {
+           ignoreBOM: !0,
+           fatal: !0
+         }), IW.decode(), BW = WQ);
+         return IW.decode(XW().subarray(QQ, QQ + WQ))
+       }(QQ >>> 0, WQ)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L599` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1103) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L599)

```diff
-       "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
+       return null !== MQ && 0 !== MQ.byteLength || (MQ = new Uint32Array(pW.memory.buffer)), MQ
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L603-L604` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1108) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L603-L604)

```diff
-       const pp = Lp;
-       return Yp(null), pp
+       return null !== WW && 0 !== WW.byteLength || (WW = new Uint8Array(pW.memory.buffer)), WW
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L608-L610` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1112) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L608-L610)

```diff
-       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
-         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
-       }
+       return qW[QQ]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L612-L629` → after: `L1114-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1114-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1114-L1116) · [Before (L612-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L612-L629)

```diff
-   },
-   36799: (pp, ip, cp) => {
-     cp.d(ip, {
-       A: () => Dp,
-       d: () => xp,
-       h: () => wp,
-       l: () => vp,
-       o: () => Pp,
-       s: () => Yp,
-       t: () => Up,
-       x: () => Wp
-     });
-     var Op = cp(25),
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(36804);
- ... (2 more removed lines; see GitHub link above)
+     let qW = new Array(1024).fill(void 0);
+     qW.push(void 0, null, !0, !1);
+     let TW = qW.length;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L631-L632` → after: `L1118-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1118-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1118-L1119) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L631-L632)

```diff
-     function Yp() {
-       return Lp
+     function zW(QQ) {
+       return void 0 === QQ || null === QQ
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L636-L642` → after: `L1123-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1123-L1124) · [Before (L636-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L636-L642)

```diff
-       const cp = {
-         content: pp,
-         menu: ip
-       };
-       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
-         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
-       }
+       const XQ = WQ(2 * QQ.length, 2) >>> 0;
+       return (null !== mQ && 0 !== mQ.byteLength || (mQ = new Uint16Array(pW.memory.buffer)), mQ).set(QQ, XQ / 2), GW = QQ.length, XQ
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L646-L647` → after: `L1127-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1127-L1129) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L646-L647)

```diff
-     function Pp() {
-       return Ap
+     function FW(QQ, WQ) {
+       const XQ = WQ(4 * QQ.length, 4) >>> 0;
+       return QW().set(QQ, XQ / 4), GW = QQ.length, XQ
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L650-L653` → after: `L1132-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1132-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1132-L1134) · [Before (L650-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L650-L653)

```diff
-     function Wp(pp) {
-       return Ap = pp, () => {
-         Ap === pp && (Ap = null)
-       }
+     function PW(QQ, WQ) {
+       const XQ = WQ(1 * QQ.length, 1) >>> 0;
+       return XW().set(QQ, XQ / 1), GW = QQ.length, XQ
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L657-L662` → after: `L1137-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1137-L1139) · [Before (L657-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L657-L662)

```diff
-     function Up() {
-       const pp = Op.c.get("openInGameMenuName");
-       "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+     function gW(QQ, WQ) {
+       const XQ = WQ(8 * QQ.length, 8) >>> 0;
+       return ZQ().set(QQ, XQ / 8), GW = QQ.length, XQ
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L665-L666` → after: `L1142-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1142-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1142-L1162) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L665-L666)

```diff
-     function wp() {
-       tp(!1)
+     function JW(QQ, WQ, XQ) {
+       if (void 0 === XQ) {
+         const XQ = yW.encode(QQ),
+           wQ = WQ(XQ.length, 1) >>> 0;
+         return XW().subarray(wQ, wQ + XQ.length).set(XQ), GW = XQ.length, wQ
+       }
+       let wQ = QQ.length,
+         qQ = WQ(wQ, 1) >>> 0;
+       const TQ = XW();
+       let zQ = 0;
+       for (; zQ < wQ; zQ++) {
+         const WQ = QQ.charCodeAt(zQ);
+         if (WQ > 127) break;
+         TQ[qQ + zQ] = WQ
+       }
+       if (zQ !== wQ) {
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L669-L670` → after: `L1165-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1165-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1165-L1189) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L669-L670)

```diff
-     function vp() {
-       tp(yp)
+     function rW(QQ) {
+       const WQ = wW(QQ);
+       return function(QQ) {
+         QQ < 1028 || (qW[QQ] = TW, TW = QQ)
+       }(QQ), WQ
+     }
+     let IW = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
+     });
+     IW.decode();
+     const jW = 2146435072;
+     let BW = 0;
+     const yW = new TextEncoder;
+     "encodeInto" in yW || (yW.encodeInto = function(QQ, WQ) {
+       const XQ = yW.encode(QQ);
+ ... (9 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L674-L676` → after: `L1193-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1193-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1193-L1238) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L674-L676)

```diff
-       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
-         openInGameMenuName: pp ? "inventory" : null
-       }), pp || (0, Sp.f)(), yp = !1
+       if (void 0 !== pW) return pW;
+       void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
+         module: QQ
+       } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const WQ = RQ();
+       QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
+       return UW(new WebAssembly.Instance(QQ, WQ), QQ)
+     }
+     async function vW(QQ) {
+       if (void 0 !== pW) return pW;
+       void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
+         module_or_path: QQ
+       } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const WQ = RQ();
+       ("string" === typeof QQ || "function" === typeof Request && QQ instanceof Request || "function" === typeof URL && QQ instanceof URL) && (QQ = fetch(QQ));
+       const {
+ ... (30 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L679` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1241) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L679)

```diff
-   36691: (pp, ip, cp) => {
+   36595: (QQ, WQ, XQ) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L681` → after: `L1243-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1243-L1245) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L681)

```diff
-       b: () => Lp
+       d: () => zQ,
+       e: () => sQ,
+       h: () => FQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L683-L687` → after: `L1247-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1247-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1247-L1255) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L683-L687)

```diff
-     var Op = cp(322),
-       op = cp(25),
-       Ip = cp(36693),
-       Sp = cp(1650),
-       xp = cp(2012);
+     var wQ = XQ(36599),
+       qQ = XQ(3107),
+       TQ = XQ(36608);
+     const zQ = {
+       name: qQ.d,
+       url: () => new XQ.U(XQ(36616)),
+       init: wQ.default,
+       bindings: wQ
+     };
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L689-L695` → after: `L1257-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1257-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1257-L1265) · [Before (L689-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L689-L695)

```diff
-     function Lp(pp, ip) {
-       var cp, Lp, Yp;
-       if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
-       const Dp = pp.code;
-       "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION … [truncated]
-         showDebugOverlay: !op.c.get("showDebugOverlay")
-       })
+     function sQ() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ,
+         WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ,
+         XQ = arguments.length > 2 ? arguments[2] : void 0;
+       return (0, TQ.k)(QQ, WQ, XQ)
+     }
+ 
+     function FQ(QQ) {
+       return (0, qQ.I)((() => QQ), wQ, zQ)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L698-L705` → after: `L1268-L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1268-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1268-L1272) · [Before (L698-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L698-L705)

```diff
-   39169: (pp, ip, cp) => {
-     function Op(pp, ip, cp, Op, op) {
-       var Ip = {};
-       return Object.keys(Op).forEach((function(pp) {
-         Ip[pp] = Op[pp]
-       })), Ip.enumerable = !!Ip.enumerable, Ip.configurable = !!Ip.configurable, ("value" in Ip || Ip.initializer) && (Ip.writable = !0), Ip = cp.slice().reverse().reduce((function(cp, Op) {
-         return Op(pp, ip, cp) || cp
-       }), Ip), op && void 0 !== Ip.initializer && (Ip.value = Ip.initializer ? Ip.initializer.call(op) : void 0, Ip.initializer = void 0), void 0 === Ip.initializer && (Object.defineProperty(pp, ip, Ip), Ip = null), Ip
+   36581: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       return new Error(`${QQ}: ${WQ instanceof Error?`${WQ.name}: ${WQ.message}`:String(WQ)}`, {
+         cause: WQ
+       })
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L711-L718` → after: `L1278-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1278-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1278-L1295) · [Before (L711-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L711-L718)

```diff
-   39164: (pp, ip, cp) => {
-     function Op(pp, ip, cp, Op) {
-       cp && Object.defineProperty(pp, ip, {
-         enumerable: cp.enumerable,
-         configurable: cp.configurable,
-         writable: cp.writable,
-         value: cp.initializer ? cp.initializer.call(Op) : void 0
-       })
+   36575: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ,
+       h: () => FQ
+     });
+     var wQ = XQ(3110),
+       qQ = XQ(6987),
+       TQ = XQ(36581);
+ 
+     function zQ() {
+       return new URL(new XQ.U(XQ(36588)).href, globalThis.location?.href).href
+     }
+     let sQ = null;
+ 
+     function FQ() {
+       return sQ ??= (async () => (0, wQ.H)(new URL(zQ()), (0, qQ.b)("bloxd_wasm_textures")))().catch((QQ => {
+ ... (2 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L721-L722` → after: `L1300-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L1300-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/200.js#L1300-L1337) · [Before (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/200.js#L721-L722)

```diff
-       c: () => Op
-     })
+       d: () => wQ,
+       f: () => TQ,
+       i: () => FQ,
+       k: () => zQ,
+       l: () => qQ
+     });
+     const wQ = /^alloc_failed (\d+) bytes$/;
+ 
+     function qQ(QQ, WQ) {
+       return TQ(QQ, WQ) ? `trap=alloc_failed ${WQ} bytes` : `trap=${QQ}`
+     }
+ 
+     function TQ(QQ, WQ) {
+       return "unreachable" === QQ && WQ > 0
+     }
+ 
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/201.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/201.js#L4)

```diff
-   34448: (pp, ip, cp) => {
+   34393: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L6-L29` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/201.js#L6-L8) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/201.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => Op,
-       armourReductionOf: () => ap,
-       clipSizeOf: () => hp,
-       creativeAltNames: () => Li,
-       creativeCategoryOf: () => Vp,
-       creativeItemCategories: () => xp,
-       creativeItemCategoryIcons: () => Lp,
-       creativeItemIds: () => Kp,
-       descriptionOf: () => Tp,
-       displayNameOf: () => Np,
-       dropsNothing: () => gp,
-       enchantmentPerksOf: () => zp,
-       gunTypeOf: () => Fp,
-       harvestsNullLevelOf: () => Gp,
-       isDevOnlyItem: () => oi,
-       itemIsDisabled: () => Si,
- ... (8 more removed lines; see GitHub link above)
+       ALL_DEV_TOOLS: () => zQ,
+       coreDevTools: () => PQ,
+       devTools: () => FQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L31-L71` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/201.js#L10-L17) · [Before (L31-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/201.js#L31-L71)

```diff
-     const Op = 8558,
-       op = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       Ip = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       Sp = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       xp = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       Lp = {
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
- ... (25 more removed lines; see GitHub link above)
+     var wQ = XQ(691),
+       qQ = XQ(1345),
+       TQ = XQ(34399);
+     const zQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function sQ() {
+       const {
+         noaDevTools: QQ
+       } = await XQ.e(246).then((() => XQ(41280)));
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L74-L221` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/201.js#L20-L22) · [Before (L74-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/201.js#L74-L221)

```diff
- 
-     function Up(pp) {
-       return pp === Dp.f ? null : (0, Dp.C)(pp)
-     }
-     const wp = Wp("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
-       vp = Wp("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
-       tp = new Map,
-       Hp = new Map;
-     let dp = -1;
- 
-     function ep(pp, ip, cp) {
-       dp !== (0, Yp.g)() && (dp = (0, Yp.g)(), tp.clear(), Hp.clear());
-       let Op = pp.get(ip);
-       return void 0 === Op && (Op = cp(), void 0 !== Op && pp.set(ip, Op)), Op
-     }
-     const jp = Wp("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
- ... (132 more removed lines; see GitHub link above)
+     const FQ = new class {
+         constructor() {
+           this.loadHost = sQ, this.tools = zQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L223-L226` → after: `L24-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L24-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/201.js#L24-L56) · [Before (L223-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/201.js#L223-L226)

```diff
-         xi = ip
-       }
-       return xi
-     }
+         setHost(QQ) {
+           this.tools = null === QQ ? zQ : QQ.tools, this.loadHost = null === QQ ? sQ : async () => QQ
+         }
+         supports(QQ) {
+           return this.tools.has(QQ)
+         }
+         async downloadScene(QQ, WQ) {
+           const XQ = await this.loadHost();
+           await XQ.downloadScene(QQ, WQ)
+         }
+         async setAmbientLightIntensity(QQ) {
+           const WQ = await this.loadHost();
+           await WQ.setAmbientLightIntensity(QQ)
+         }
+         async capturePhoto(QQ, WQ, XQ) {
+           return (await this.loadHost()).capturePhoto(QQ, WQ, XQ)
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 1. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L4-L6)

```diff
-   41773: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip
+   36678: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       showOnboardingPopup: () => CQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L8-L9` → after: `L8-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L8-L51) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L8-L9)

```diff
-     var Op = cp(62),
-       op = cp(2835);
+     var wQ = XQ(61),
+       qQ = XQ(1226),
+       TQ = XQ(1404),
+       zQ = XQ(1507),
+       sQ = XQ(4631),
+       FQ = XQ(1626),
+       PQ = XQ(1620),
+       gQ = XQ(2313),
+       JQ = XQ(1081),
+       rQ = XQ.n(JQ),
+       IQ = XQ(1165),
+       jQ = XQ(36684),
+       BQ = XQ(1094),
+       yQ = XQ(2451),
+       VQ = XQ(3736),
+       DQ = XQ(1162),
+ ... (28 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L12-L16` → after: `L54-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L54-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L54-L112) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L12-L16)

```diff
-       const Ip = (0, Op.useRef)(null),
-         {
-           width: Sp,
-           height: xp
-         } = (0, op.d)(pp);
+       return `${QQ}_${WQ}_${XQ}`
+     }
+ 
+     function aQ(QQ) {
+       let {
+         label: WQ,
+         colours: XQ,
+         picked: wQ,
+         onPick: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, qQ.C)();
+       return (0, pQ.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, pQ.jsx)("div", {
+ ... (43 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L18-L20` → after: `L114-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L114-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L114-L303) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L18-L20)

```diff
-         const cp = ip(pp.current);
-         return Ip.current = cp, () => {
-           cp.close(), Ip.current = null
+         var QQ;
+         TQ && (null === (QQ = lQ.current) || void 0 === QQ || QQ.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [TQ]);
+       const hQ = (QQ, WQ) => {
+           (0, jQ.e)(QQ, Object.entries(WQ)), JQ.current ? FQ() : QQ.publishUpdateIfCurrent()
+         },
+         iQ = QQ => {
+           const wQ = {
+             ...gQ.current,
+             ...QQ
+           };
+           if (!XQ) return gQ.current = null, void hQ(WQ, wQ);
+           gQ.current = wQ, FQ(), IQ.userContextManager.getCurrentUserContext().then((QQ => {
+             gQ.current === wQ && (gQ.current = null, hQ(QQ, wQ))
+ ... (174 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L23-L26` → after: `L306-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L306-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L306-L433) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L23-L26)

```diff
-         Sp <= 0 || xp <= 0 || Ip.current.resize(Sp, xp)
-       }), [Sp, xp]), (0, Op.useEffect)((() => {
-         Ip.current.show(cp)
-       }), [cp])
+         if (null === FQ) return;
+         const QQ = bQ.current && "HI" === GQ.current && XQ.isLoggedIn();
+         bQ.current = !1, "noAccount" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) && IQ(null), QQ && aQ(FQ), vQ.current && (vQ.current = !1, yQ(!1), fQ(QQ ? FQ : dQ))
+       }), [FQ]);
+       const SQ = "error" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) ? rQ.message : "noAccount" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) ? WQ("homePage:onboardingNameNoAccount") : null;
+       return {
+         field: (0, pQ.jsxs)("div", {
+           className: "OnboardingNameField",
+           ref: EQ,
+           children: [(0, pQ.jsx)("div", {
+             className: "OnboardingSubtitle",
+             children: WQ("general:name")
+           }), null === dQ && (0, pQ.jsx)(AQ.e, {}), null !== dQ && (0, pQ.jsxs)("div", {
+             className: "OnboardingNameRow",
+             children: [(0, pQ.jsx)(RQ.e, {
+               className: "OnboardingNameInput",
+ ... (112 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L29` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L436) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L29)

```diff
-   41776: (pp, ip, cp) => {
+   36684: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L31-L33` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L438) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L31-L33)

```diff
-       b: () => Pp,
-       e: () => Ap,
-       f: () => Lp
+       e: () => zQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L35-L205` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/202.js#L440-L441) · [Before (L35-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/202.js#L35-L205)

```diff
-     var Op = cp(37395),
-       op = cp(38856);
- 
-     function Ip(pp, ip) {
-       let [cp, Op, op] = pp;
-       return [0, .5, 1].map((pp => ({
-         timeFraction: pp,
-         rotation: {
-           Wo: "catmull-rom-spline",
-           point: [cp, Op, op + (.5 === pp ? ip : 0)]
-         }
-       })))
-     }
- 
-     function Sp(pp, ip, cp) {
-       return {
- ... (155 more removed lines; see GitHub link above)
+     var wQ = XQ(2003),
+       qQ = XQ(1548);
```
