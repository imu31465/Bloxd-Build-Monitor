# Changed — Bundle Modifications Report (Part 018 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `18 / 115` (**329** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L168` → after: `L41-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L41-L44) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L168)

```diff
-       return Math.min(Math.max(kT, TT), cT)
+       const Yq = qq.filter((qq => qq.name !== Eq)),
+         lq = Yq.filter((qq => "none" === qq.role)).sort(((qq, Eq) => Eq.at - qq.at)),
+         Oq = Yq.filter((qq => "none" !== qq.role)).sort(((qq, Eq) => gq.indexOf(qq.role) - gq.indexOf(Eq.role) || Eq.at - qq.at));
+       return [...qq.some((qq => qq.name === Eq)) && null !== Eq ? [Eq] : [], ...[...lq, ...Oq].map((qq => qq.name))]
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L171-L185` → after: `L47-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L47-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L47-L53) · [Before (L171-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L171-L185)

```diff
-     function IT(TT) {
-       var kT = Math.round(TT).toString(16).toUpperCase();
-       return kT.length < 2 ? "0" + kT : kT
-     }
-     fT.get = function(TT) {
-       var kT, cT;
-       switch (TT.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           kT = fT.get.hsl(TT), cT = "hsl";
-           break;
-         case "hwb":
-           kT = fT.get.hwb(TT), cT = "hwb";
-           break;
-         default:
-           kT = fT.get.rgb(TT), cT = "rgb"
+     function Qq(qq, Eq) {
+       const gq = qq.banned.map((qq => qq.name)),
+         Yq = new Set(gq);
+       return {
+         here: Pq(qq.here, Eq, qq.roles.map((qq => qq.role))),
+         away: qq.away.filter((qq => !Yq.has(qq.name))).map((qq => qq.name)),
+         banned: gq
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L188-L226` → after: `L70-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L70-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L70-L73) · [Before (L188-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L188-L226)

```diff
-         model: cT,
-         value: kT
-       } : null
-     }, fT.get.rgb = function(TT) {
-       if (!TT) return null;
-       var kT, cT, MT, OT = [0, 0, 0, 1];
-       if (kT = TT.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
-         for (MT = kT[2], kT = kT[1], cT = 0; cT < 3; cT++) {
-           var yT = 2 * cT;
-           OT[cT] = parseInt(kT.slice(yT, yT + 2), 16)
-         }
-         MT && (OT[3] = parseInt(MT, 16) / 255)
-       } else if (kT = TT.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (MT = (kT = kT[1])[3], cT = 0; cT < 3; cT++) OT[cT] = parseInt(kT[cT] + kT[cT], 16);
-         MT && (OT[3] = parseInt(MT + MT, 16) / 255)
-       } else if (kT = TT.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
- ... (23 more removed lines; see GitHub link above)
+         section: "away",
+         player: lq
+       } : {
+         section: "gone"
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L251-L258` → after: `L76-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L76-L88) · [Before (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L251-L258)

```diff
-   },
-   36448: (TT, kT, cT) => {
-     const lT = cT(36454),
-       MT = cT(36474),
-       KT = ["keyword", "gray", "hex"],
-       OT = {};
-     for (const jT of Object.keys(MT)) OT[[...MT[jT].labels].sort().join("")] = jT;
-     const yT = {};
+     const tq = {
+       gamemode: !1,
+       roles: [],
+       fixedRole: null,
+       kick: !1,
+       ban: !1,
+       unban: !1
+     };
+     var rq = gq(2563),
+       vq = gq(36599),
+       hq = gq(36759),
+       nq = gq(3040),
+       bq = gq(307);
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L260-L281` → after: `L90-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L90-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L90-L239) · [Before (L260-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L260-L281)

```diff
-     function fT(TT, kT) {
-       if (!(this instanceof fT)) return new fT(TT, kT);
-       if (kT && kT in KT && (kT = null), kT && !(kT in MT)) throw new Error("Unknown model: " + kT);
-       let cT, xT;
-       if (null == TT) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (TT instanceof fT) this.model = TT.model, this.color = [...TT.color], this.valpha = TT.valpha;
-       else if ("string" === typeof TT) {
-         const kT = lT.get(TT);
-         if (null === kT) throw new Error("Unable to parse color from string: " + TT);
-         this.model = kT.model, xT = MT[this.model].channels, this.color = kT.value.slice(0, xT), this.valpha = "number" === typeof kT.value[xT] ? kT.value[xT] : 1
-       } else if (TT.length > 0) {
-         this.model = kT || "rgb", xT = MT[this.model].channels;
-         const cT = Array.prototype.slice.call(TT, 0, xT);
-         this.color = CT(cT, xT), this.valpha = "number" === typeof TT[xT] ? TT[xT] : 1
-       } else if ("number" === typeof TT) this.model = "rgb", this.color = [TT >> 16 & 255, TT >> 8 & 255, 255 & TT], this.valpha = 1;
-       else {
- ... (6 more removed lines; see GitHub link above)
+     function iq(qq, Eq, gq) {
+       return Eq.map((Eq => {
+         if ("string" === typeof Eq) return Eq;
+         const Yq = "str" in Eq ? Eq.str : Eq;
+         return "string" === typeof Yq ? Yq : "entityName" in Yq ? Yq.entityName : "translationKey" in Yq ? qq(Yq.translationKey, (0, Wq.j)(Yq.params, gq)) : ""
+       })).join("")
+     }
+ 
+     function Zq(qq, Eq, gq, Yq, lq) {
+       return lq - Yq < 6e4 ? qq(`${gq}JustNow`) : qq(gq, {
+         time: (0, bq.lb)((0, Wq.h)(Eq, gq), Yq, lq)
+       })
+     }
+     var fq = gq(1876),
+       Mq = gq(1659),
+       Tq = gq(1070);
+ ... (134 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L283-L291` → after: `L241-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L241-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L241-L249) · [Before (L283-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L283-L291)

```diff
-           labels: KT
-         } = MT[this.model], yT = [];
-         for (cT = 0; cT < KT.length; cT++) yT.push(TT[KT[cT]]);
-         this.color = CT(yT)
-       }
-       if (yT[this.model])
-         for (xT = MT[this.model].channels, cT = 0; cT < xT; cT++) {
-           const TT = yT[this.model][cT];
-           TT && (this.color[cT] = TT(this.color[cT]))
+           player: gq
+         } = qq, Yq = "here" === qq.section, lq = Yq || "none" !== gq.role ? gq.can.roles : [];
+         return {
+           gamemode: Yq && Eq && null !== gq.gamemode && gq.can.gamemode,
+           roles: lq,
+           fixedRole: 0 === lq.length && "none" !== gq.role ? gq.role : null,
+           kick: Yq && gq.can.kick,
+           ban: gq.can.ban,
+           unban: !1
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L293` → after: `L251-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L251-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L251-L440) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L293)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
+       }(xq, null !== Qq.gamemodes), fq = Bq.statusOf(yq), Mq = Bq.isPending(yq), Sq = cq(), pq = Date.now(), Jq = qq => {
+         var Eq, gq;
+         return null !== (Eq = null === (gq = (qq => Qq.roles.find((Eq => Eq.role === qq)))(qq)) || void 0 === gq ? void 0 : gq.label) && void 0 !== Eq ? Eq : qq
+       }, kq = qq => {
+         const Eq = Lq[qq];
+         return void 0 === Eq ? void 0 : dq(Eq)
+       }, Rq = "here" === xq.section || "away" === xq.section ? xq.player : null, Uq = "here" === xq.section ? xq.player.id : null, {
+         playerSocialPreview: Fq,
+         isFriend: sq
+       } = null === Uq ? {
+         playerSocialPreview: (0, hq.l)(mq, null),
+         isFriend: !1
+       } : (0, vq.d)(Uq, mq), Xq = function() {
+         Bq.send(...arguments)
+       }, wq = (qq, Eq) => {
+         Sq.hold("role", qq, Bq.send({
+ ... (174 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L295-L384` → after: `L442-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L442-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L442-L465) · [Before (L295-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L295-L384)

```diff
-     fT.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(TT) {
-         let kT = this.model in lT.to ? this : this.rgb();
-         kT = kT.round("number" === typeof TT ? TT : 1);
-         const cT = 1 === kT.valpha ? kT.color : [...kT.color, this.valpha];
-         return lT.to[kT.model](cT)
-       },
-       percentString(TT) {
-         const kT = this.rgb().round("number" === typeof TT ? TT : 1),
-           cT = 1 === kT.valpha ? kT.color : [...kT.color, this.valpha];
- ... (74 more removed lines; see GitHub link above)
+ 
+     function kq(qq) {
+       var Eq, gq, lq, Oq;
+       let {
+         manage: mq,
+         focusRequest: xq,
+         onFocused: Aq
+       } = qq;
+       const {
+         t: cq
+       } = (0, Wq.v)(), uq = (0, Hq.g)("players"), Bq = (0, Hq.g)("hiddenPlayerNames"), aq = (0, Yq.useRef)(null), {
+         state: dq
+       } = mq, jq = null === uq.localId ? null : null !== (Eq = null === (gq = uq.byId[uq.localId]) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : null, [Pq] = (0, Yq.useState)((() => Qq(dq, jq))), tq = function(qq, Eq, gq) {
+         const Yq = new Set([...qq.here, ...qq.away, ...qq.banned]),
+           lq = Qq(Eq, gq),
+           Oq = Eq => {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L386-L462` → after: `L467-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L467-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L467-L609) · [Before (L386-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L386-L462)

```diff
-         return .2126 * kT[0] + .7152 * kT[1] + .0722 * kT[2]
-       },
-       contrast(TT) {
-         const kT = this.luminosity(),
-           cT = TT.luminosity();
-         return kT > cT ? (kT + .05) / (cT + .05) : (cT + .05) / (kT + .05)
-       },
-       level(TT) {
-         const kT = this.contrast(TT);
-         return kT >= 7 ? "AAA" : kT >= 4.5 ? "AA" : ""
-       },
-       isDark() {
-         const TT = this.rgb().color;
-         return (2126 * TT[0] + 7152 * TT[1] + 722 * TT[2]) / 1e4 < 128
-       },
-       isLight() {
- ... (61 more removed lines; see GitHub link above)
+       }(Pq, dq, jq), [rq, vq] = (0, Yq.useState)(!1), hq = function(qq, Eq) {
+         return qq.here.filter((qq => qq.name !== Eq && "none" === qq.role && qq.can.kick)).length
+       }(dq, jq), nq = mq.statusOf("kickAll");
+       (0, Yq.useEffect)((() => {
+         var qq, Eq;
+         if (null === xq) return;
+         const gq = null === (qq = aq.current) || void 0 === qq ? void 0 : qq.querySelector(`[data-lobby-manage-row="${CSS.escape(xq.name)}"]`);
+         null === gq || void 0 === gq || gq.scrollIntoView({
+           block: "center"
+         }), null === gq || void 0 === gq || null === (Eq = gq.querySelector(".ProfilePreview")) || void 0 === Eq || Eq.focus({
+           preventScroll: !0
+         }), Aq(xq.seq)
+       }), [null === xq || void 0 === xq ? void 0 : xq.seq]);
+       const bq = qq => (Eq, gq) => (0, Tq.jsx)(Jq, {
+         name: Eq,
+         place: yq(dq, Eq),
+ ... (127 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L464-L475` → after: `L611-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L611-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L611-L710) · [Before (L464-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L464-L475)

```diff
-         channels: TT
-       } = MT[jT];
-       fT.prototype[jT] = function() {
-         if (this.model === jT) return new fT(this);
-         for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
-         return kT.length > 0 ? new fT(kT, jT) : new fT([...(lT = MT[this.model][jT].raw(this.color), Array.isArray(lT) ? lT : [lT]), this.valpha], jT);
-         var lT
-       }, fT[jT] = function() {
-         for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
-         let MT = cT[0];
-         return "number" === typeof MT && (MT = CT(cT, TT)), new fT(MT, jT)
-       }
+         t: Bq,
+         selectedLanguage: Nq
+       } = (0, Wq.v)(), aq = (0, Uq.g)(), dq = (0, Hq.g)("players"), jq = null === dq.localId ? null : null !== (Eq = null === (gq = dq.byId[dq.localId]) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : null, oq = (0, Yq.useMemo)((() => (0, wq.h)(aq.friends, Oq, lq.her … [truncated]
+         let {
+           refused: Eq,
+           listed: gq,
+           here: Yq,
+           friends: lq,
+           excluded: Oq
+         } = qq;
+         const mq = eq(Oq),
+           xq = qq => qq.filter((qq => {
+             const Eq = qq.toLowerCase();
+             return !mq.has(Eq) && (mq.add(Eq), !0)
+           }));
+         return {
+ ... (84 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L479-L483` → after: `L714-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L714-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L714-L774) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L479-L483)

```diff
-       return function(kT) {
-         return function(TT, kT) {
-           return Number(TT.toFixed(kT))
-         }(kT, TT)
-       }
+       let {
+         manage: Eq,
+         listing: gq
+       } = qq;
+       const {
+         t: Yq
+       } = (0, Wq.v)(), Oq = (qq, gq) => ((0, lq.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: qq
+       }), Eq.send({
+         type: "setListing",
+         field: qq,
+         value: gq
+       }, `listing:${qq}`)), mq = qq => {
+         const gq = Eq.statusOf(`listing:${qq}`);
+         return gq && !gq.ok && (0, Tq.jsx)("div", {
+ ... (45 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L486-L492` → after: `L777-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L777-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L777-L817) · [Before (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L486-L492)

```diff
-     function IT(TT, kT, cT) {
-       TT = Array.isArray(TT) ? TT : [TT];
-       for (const lT of TT)(yT[lT] || (yT[lT] = []))[kT] = cT;
-       return TT = TT[0],
-         function(lT) {
-           let MT;
-           return void 0 !== lT ? (cT && (lT = cT(lT)), MT = this[TT](), MT.color[kT] = lT, MT) : (MT = this[TT]().color[kT], cT && (MT = cT(MT)), MT)
+     function EE(qq) {
+       let {
+         value: Eq,
+         ariaLabel: gq,
+         onSave: lq
+       } = qq;
+       const Oq = (0, Yq.useRef)(null),
+         mq = (0, Yq.useRef)({
+           value: Eq,
+           onSave: lq
+         });
+       mq.current = {
+         value: Eq,
+         onSave: lq
+       };
+       const xq = (0, Yq.useRef)(null),
+ ... (25 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L497-L499` → after: `L823-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L823-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L823-L837) · [Before (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L497-L499)

```diff
-       return function(kT) {
-         return Math.max(0, Math.min(TT, kT))
-       }
+       let {
+         manage: Eq
+       } = qq;
+       const {
+         lobbyName: gq,
+         shownLobbyName: Yq
+       } = (0, Hq.g)("connectedGame");
+       return Eq.state.you.canSetVisibility && null !== gq ? (0, Tq.jsx)(lE, {
+         manage: Eq,
+         lobbyName: gq,
+         worldCode: null !== Yq && void 0 !== Yq ? Yq : gq
+       }, gq) : (0, Tq.jsx)(OE, {
+         manage: Eq,
+         lobbyName: null !== gq && void 0 !== gq ? gq : ""
+       })
```

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L502-L504` → after: `L840-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L840-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L840-L1307) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L502-L504)

```diff
-     function CT(TT, kT) {
-       for (let cT = 0; cT < kT; cT++) "number" !== typeof TT[cT] && (TT[cT] = 0);
-       return TT
+     function YE(qq) {
+       return qq.map((qq => qq.toLowerCase())).sort().join(",")
+     }
+ 
+     function lE(qq) {
+       var Eq;
+       let {
+         manage: gq,
+         lobbyName: Oq,
+         worldCode: mq
+       } = qq;
+       const {
+         t: xq
+       } = (0, Wq.v)(), {
+         settings: Aq,
+         loading: cq,
+ ... (452 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L513-L567` → after: `L1310-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1310-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1310-L1325) · [Before (L513-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L513-L567)

```diff
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
-         channels: 3,
-         labels: "hsv"
-       },
-       hwb: {
-         channels: 3,
-         labels: "hwb"
-       },
- ... (39 more removed lines; see GitHub link above)
+         players: {
+           icon: "user-group",
+           title: "lobbyManage:players"
+         },
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
+         },
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
+         },
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
+         }
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L569-L578` → after: `L1327-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1327-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1327-L1358) · [Before (L569-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L569-L578)

```diff
-       gray: {
-         channels: 1,
-         labels: ["gray"]
-       }
-     };
-     TT.exports = KT;
-     for (const OT of Object.keys(KT)) {
-       if (!("channels" in KT[OT])) throw new Error("missing channels property: " + OT);
-       if (!("labels" in KT[OT])) throw new Error("missing channel labels property: " + OT);
-       if (KT[OT].labels.length !== KT[OT].channels) throw new Error("channel and label counts mismatch: " + OT);
+       VE = 5,
+       dE = (0, Yq.memo)((function(qq) {
+         let {
+           page: Eq,
+           manage: gq,
+           leaderboard: lq,
+           focusRequest: Oq,
+           onFocused: mq,
+           ruleRowsShown: xq
+         } = qq;
+         return "leaderboard" === Eq ? (0, Tq.jsx)(Yq.Suspense, {
+           fallback: (0, Tq.jsx)("div", {
+             className: "LobbyManageLoading",
+             children: (0, Tq.jsx)(aq.e, {})
+           }),
+           children: lq
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L580-L586` → after: `L1360-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1360-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1360-L1368) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L580-L586)

```diff
-         channels: TT,
-         labels: kT
-       } = KT[OT];
-       delete KT[OT].channels, delete KT[OT].labels, Object.defineProperty(KT[OT], "channels", {
-         value: TT
-       }), Object.defineProperty(KT[OT], "labels", {
-         value: kT
+         t: gq
+       } = (0, Wq.v)(), Yq = aE[Eq];
+       return (0, Tq.jsxs)(Tq.Fragment, {
+         children: [(0, Tq.jsx)(Nq.d, {
+           name: Yq.icon
+         }), " ", (0, Tq.jsx)("span", {
+           className: "LobbyManagePageTitle",
+           children: gq(Yq.title)
+         })]
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L589-L608` → after: `L1371-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1371-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1371-L1430) · [Before (L589-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L589-L608)

```diff
-     KT.rgb.hsl = function(TT) {
-       const kT = TT[0] / 255,
-         cT = TT[1] / 255,
-         lT = TT[2] / 255,
-         MT = Math.min(kT, cT, lT),
-         KT = Math.max(kT, cT, lT),
-         OT = KT - MT;
-       let yT, fT;
-       KT === MT ? yT = 0 : kT === KT ? yT = (cT - lT) / OT : cT === KT ? yT = 2 + (lT - kT) / OT : lT === KT && (yT = 4 + (kT - cT) / OT), yT = Math.min(60 * yT, 360), yT < 0 && (yT += 360);
-       const xT = (MT + KT) / 2;
-       return fT = KT === MT ? 0 : xT <= .5 ? OT / (KT + MT) : OT / (2 - KT - MT), [yT, 100 * fT, 100 * xT]
-     }, KT.rgb.hsv = function(TT) {
-       let kT, cT, lT, MT, KT;
-       const OT = TT[0] / 255,
-         yT = TT[1] / 255,
-         fT = TT[2] / 255,
- ... (4 more removed lines; see GitHub link above)
+ 
+     function HE(qq) {
+       var Eq;
+       const {
+         t: gq
+       } = (0, Wq.v)(), {
+         pages: Oq,
+         landing: mq
+       } = qq, Aq = (0, Yq.useRef)(null), cq = (0, Yq.useRef)(null), uq = (0, Yq.useRef)(null), Nq = (0, Yq.useRef)(new Map), [aq, Hq] = (0, Yq.useState)(null), oq = (0, Yq.useRef)(aq), Pq = (0, Yq.useRef)(0), [Qq, yq] = (0, Yq.useState)(Oq[0]), tq = null !== aq && void 0 !== aq ? … [truncated]
+         const [gq, lq] = (0, Yq.useState)(qq), Oq = gq >= Eq;
+         return Oq && gq !== 1 / 0 && lq(1 / 0), (0, Yq.useLayoutEffect)((() => {
+           if (Oq) return;
+           let qq = !0;
+           return (0, jq.b)().then((() => {
+             qq && lq((qq => qq + 1))
+           })), () => {
+ ... (44 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L610-L631` → after: `L1432-L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1432-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1432-L1528) · [Before (L610-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L610-L631)

```diff
-       return 0 === IT ? (MT = 0, KT = 0) : (KT = IT / xT, kT = AT(OT), cT = AT(yT), lT = AT(fT), OT === xT ? MT = lT - cT : yT === xT ? MT = 1 / 3 + kT - lT : fT === xT && (MT = 2 / 3 + cT - kT), MT < 0 ? MT += 1 : MT > 1 && (MT -= 1)), [360 * MT, 100 * KT, 100 * xT]
-     }, KT.rgb.hwb = function(TT) {
-       const kT = TT[0],
-         cT = TT[1];
-       let lT = TT[2];
-       const MT = KT.rgb.hsl(TT)[0],
-         OT = 1 / 255 * Math.min(kT, Math.min(cT, lT));
-       return lT = 1 - 1 / 255 * Math.max(kT, Math.max(cT, lT)), [MT, 100 * OT, 100 * lT]
-     }, KT.rgb.cmyk = function(TT) {
-       const kT = TT[0] / 255,
-         cT = TT[1] / 255,
-         lT = TT[2] / 255,
-         MT = Math.min(1 - kT, 1 - cT, 1 - lT);
-       return [100 * ((1 - kT - MT) / (1 - MT) || 0), 100 * ((1 - cT - MT) / (1 - MT) || 0), 100 * ((1 - lT - MT) / (1 - MT) || 0), 100 * MT]
-     }, KT.rgb.keyword = function(TT) {
-       const kT = MT[TT];
- ... (6 more removed lines; see GitHub link above)
+       (0, Yq.useLayoutEffect)((() => {
+         null !== mq && Oq.includes(mq.page) && Lq(mq.page)
+       }), [null === mq || void 0 === mq ? void 0 : mq.seq]), (0, Yq.useLayoutEffect)((() => {
+         null === oq.current || Oq.includes(oq.current) || kq()
+       }));
+       const {
+         onFocused: Rq
+       } = qq, Uq = (0, Yq.useCallback)((qq => {
+         null !== oq.current && Gq(oq.current), Rq(qq)
+       }), [Rq]);
+       (0, Yq.useLayoutEffect)((() => {
+         const qq = oq.current;
+         null !== qq && (!fq || Oq.indexOf(nq[bq - 1]) < Oq.indexOf(qq)) && Gq(qq)
+       }), [bq]), (0, Yq.useEffect)((() => {
+         const qq = new ResizeObserver((() => {
+           null !== oq.current ? Gq(oq.current) : pq()
+ ... (81 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L633-L690` → after: `L1530-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1530-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1530-L1631) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L633-L690)

```diff
-       var OT, yT;
-       return cT
-     }, KT.keyword.rgb = function(TT) {
-       return lT[TT]
-     }, KT.rgb.xyz = function(TT) {
-       let kT = TT[0] / 255,
-         cT = TT[1] / 255,
-         lT = TT[2] / 255;
-       kT = kT > .04045 ? ((kT + .055) / 1.055) ** 2.4 : kT / 12.92, cT = cT > .04045 ? ((cT + .055) / 1.055) ** 2.4 : cT / 12.92, lT = lT > .04045 ? ((lT + .055) / 1.055) ** 2.4 : lT / 12.92;
-       return [100 * (.4124 * kT + .3576 * cT + .1805 * lT), 100 * (.2126 * kT + .7152 * cT + .0722 * lT), 100 * (.0193 * kT + .1192 * cT + .9505 * lT)]
-     }, KT.rgb.lab = function(TT) {
-       const kT = KT.rgb.xyz(TT);
-       let cT = kT[0],
-         lT = kT[1],
-         MT = kT[2];
-       cT /= 95.047, lT /= 100, MT /= 108.883, cT = cT > .008856 ? cT ** (1 / 3) : 7.787 * cT + 16 / 116, lT = lT > .008856 ? lT ** (1 / 3) : 7.787 * lT + 16 / 116, MT = MT > .008856 ? MT ** (1 / 3) : 7.787 * MT + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+     }
+ 
+     function PE(qq) {
+       let {
+         leaderboard: Eq
+       } = qq;
+       const gq = function() {
+           const qq = (0, Oq.h)("lobbyManage"),
+             [Eq, gq] = (0, Yq.useReducer)((qq => qq + 1), 0),
+             [lq] = (0, Yq.useState)((() => new Aq.e(gq)));
+           return (0, Yq.useEffect)((() => {
+             const qq = lq.nextDeadline();
+             if (null === qq) return;
+             const Eq = setTimeout((() => {
+               lq.expire(Date.now()), gq()
+             }), Math.max(0, qq - Date.now()));
+ ... (86 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L692-L732` → after: `L1633-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1633-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1633-L1650) · [Before (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L692-L732)

```diff
-     }, KT.hsv.hsl = function(TT) {
-       const kT = TT[0],
-         cT = TT[1] / 100,
-         lT = TT[2] / 100,
-         MT = Math.max(lT, .01);
-       let KT, OT;
-       OT = (2 - cT) * lT;
-       const yT = (2 - cT) * MT;
-       return KT = cT * MT, KT /= yT <= 1 ? yT : 2 - yT, KT = KT || 0, OT /= 2, [kT, 100 * KT, 100 * OT]
-     }, KT.hwb.rgb = function(TT) {
-       const kT = TT[0] / 360;
-       let cT = TT[1] / 100,
-         lT = TT[2] / 100;
-       const MT = cT + lT;
-       let KT;
-       MT > 1 && (cT /= MT, lT /= MT);
- ... (25 more removed lines; see GitHub link above)
+       send(qq, Eq, gq) {
+         var Yq;
+         return this.statuses.delete(Eq), this.pending.set(Eq, (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 0) + 1), this.sendAction(qq).then((qq => {
+           var Yq;
+           const lq = null !== qq && void 0 !== qq ? qq : {
+               requestId: -1,
+               ok: !1,
+               message: cq
+             },
+             Oq = (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 1) - 1;
+           Oq > 0 ? this.pending.set(Eq, Oq) : this.pending.delete(Eq);
+           const mq = !lq.ok || lq.message.length > 0 ? lq.message : null === gq ? null : [gq];
+           return null !== mq && this.statuses.set(Eq, {
+             ok: lq.ok,
+             text: mq,
+             until: Date.now() + 4e3
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L734-L795` → after: `L1652-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1652-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1652-L1656) · [Before (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L734-L795)

```diff
-       return [255 * xT, 255 * IT, 255 * AT]
-     }, KT.cmyk.rgb = function(TT) {
-       const kT = TT[0] / 100,
-         cT = TT[1] / 100,
-         lT = TT[2] / 100,
-         MT = TT[3] / 100;
-       return [255 * (1 - Math.min(1, kT * (1 - MT) + MT)), 255 * (1 - Math.min(1, cT * (1 - MT) + MT)), 255 * (1 - Math.min(1, lT * (1 - MT) + MT))]
-     }, KT.xyz.rgb = function(TT) {
-       const kT = TT[0] / 100,
-         cT = TT[1] / 100,
-         lT = TT[2] / 100;
-       let MT, KT, OT;
-       return MT = 3.2406 * kT + -1.5372 * cT + -.4986 * lT, KT = -.9689 * kT + 1.8758 * cT + .0415 * lT, OT = .0557 * kT + -.204 * cT + 1.057 * lT, MT = MT > .0031308 ? 1.055 * MT ** (1 / 2.4) - .055 : 12.92 * MT, KT = KT > .0031308 ? 1.055 * KT ** (1 / 2.4) - .055 : 12.92 * KT,  … [truncated]
-     }, KT.xyz.lab = function(TT) {
-       let kT = TT[0],
-         cT = TT[1],
- ... (46 more removed lines; see GitHub link above)
+       show(qq, Eq) {
+         this.statuses.set(qq, {
+           ...Eq,
+           until: Date.now() + 4e3
+         }), this.onChange()
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L797-L858` → after: `L1658-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1658-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1658-L1677) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L797-L858)

```diff
-       let kT;
-       TT -= 16;
-       return [Math.floor(TT / 36) / 5 * 255, Math.floor((kT = TT % 36) / 6) / 5 * 255, kT % 6 / 5 * 255]
-     }, KT.rgb.hex = function(TT) {
-       const kT = (((255 & Math.round(TT[0])) << 16) + ((255 & Math.round(TT[1])) << 8) + (255 & Math.round(TT[2]))).toString(16).toUpperCase();
-       return "000000".substring(kT.length) + kT
-     }, KT.hex.rgb = function(TT) {
-       const kT = TT.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!kT) return [0, 0, 0];
-       let cT = kT[0];
-       3 === kT[0].length && (cT = cT.split("").map((TT => TT + TT)).join(""));
-       const lT = parseInt(cT, 16);
-       return [lT >> 16 & 255, lT >> 8 & 255, 255 & lT]
-     }, KT.rgb.hcg = function(TT) {
-       const kT = TT[0] / 255,
-         cT = TT[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       expire(qq) {
+         for (const [Eq, gq] of this.statuses) gq.until <= qq && this.statuses.delete(Eq)
+       }
+       nextDeadline() {
+         let qq = null;
+         for (const gq of this.statuses.values()) {
+           var Eq;
+           qq = Math.min(null !== (Eq = qq) && void 0 !== Eq ? Eq : 1 / 0, gq.until)
+         }
+         return qq
+       }
+       statusOf(qq, Eq) {
+         const gq = this.statuses.get(qq);
+         return !gq || gq.until <= Eq ? null : {
+           ok: gq.ok,
+           text: gq.text
+ ... (4 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L903-L937` → after: `L1681-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1681-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1681-L1719) · [Before (L903-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L903-L937)

```diff
-   36474: (TT, kT, cT) => {
-     const lT = cT(36480),
-       MT = cT(36493),
-       KT = {};
-     Object.keys(lT).forEach((TT => {
-       KT[TT] = {}, Object.defineProperty(KT[TT], "channels", {
-         value: lT[TT].channels
-       }), Object.defineProperty(KT[TT], "labels", {
-         value: lT[TT].labels
-       });
-       const kT = MT(TT);
-       Object.keys(kT).forEach((cT => {
-         const lT = kT[cT];
-         KT[TT][cT] = function(TT) {
-           const kT = function() {
-             for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
- ... (19 more removed lines; see GitHub link above)
+   36599: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => cq,
+       f: () => Aq
+     });
+     var Yq = gq(576),
+       lq = gq(1904),
+       Oq = gq(1628),
+       mq = gq(96),
+       xq = gq(1252);
+ 
+     function Aq(qq, Eq, gq) {
+       return mq.featureFlags.useSocialFeatures && qq && null === (0, xq.d)(Eq, gq)
+     }
+ 
+     function cq(qq, Eq) {
+ ... (23 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L939-L940` → after: `L1721-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1721-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1721-L1732) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L939-L940)

```diff
-   36493: (TT, kT, cT) => {
-     const lT = cT(36480);
+   36768: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Bq
+     });
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(1659),
+       xq = gq(1422),
+       Aq = gq(1326),
+       cq = gq(1025),
+       uq = gq(1070);
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L943-L958` → after: `L1735-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1735-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1735-L1751) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L943-L958)

```diff
-       const kT = function() {
-           const TT = {},
-             kT = Object.keys(lT);
-           for (let cT = kT.length, lT = 0; lT < cT; lT++) TT[kT[lT]] = {
-             distance: -1,
-             parent: null
-           };
-           return TT
-         }(),
-         cT = [TT];
-       for (kT[TT].distance = 0; cT.length;) {
-         const TT = cT.pop(),
-           MT = Object.keys(lT[TT]);
-         for (let lT = MT.length, KT = 0; KT < lT; KT++) {
-           const lT = MT[KT],
-             OT = kT[lT]; - 1 === OT.distance && (OT.distance = kT[TT].distance + 1, OT.parent = TT, cT.unshift(lT))
+       let {
+         label: Eq,
+         icon: gq,
+         placeholder: lq,
+         onSubmit: Bq
+       } = qq;
+       const Wq = (0, Yq.useRef)(null),
+         [Nq, aq] = (0, Yq.useState)(""),
+         [Vq, dq] = (0, Yq.useState)("Enter"),
+         [jq, Hq] = (0, Yq.useState)(null);
+       (0, Yq.useEffect)((() => {
+         if ("Success" !== Vq && "Error" !== Vq) return;
+         const qq = setTimeout((() => {
+           "Success" === Vq && Wq.current && (Wq.current.value = "", aq("")), dq("Enter")
+         }), "Success" === Vq ? 1e3 : 4e3);
+         return () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L960-L961` → after: `L1753-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L1753-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L1753-L1792) · [Before (L960-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L960-L961)

```diff
-       }
-       return kT
+       }), [Vq]);
+       const oq = () => {
+         const qq = Nq.trim();
+         "" !== qq && "Enter" === Vq && (dq("Loading"), Bq(qq).then((qq => {
+           Wq.current && ("error" in qq ? null === qq.error ? dq("Enter") : (Hq(qq.error), dq("Error")) : dq("Success"))
+         })))
+       };
+       return (0, uq.jsxs)("div", {
+         className: "PlayerNameField",
+         onKeyDown: qq => {
+           qq.target === Wq.current && "Escape" !== qq.key && qq.stopPropagation()
+         },
+         children: [(0, uq.jsxs)("div", {
+           className: Oq()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Vq}`),
+           children: ["Loading" === Vq && (0, uq.jsx)(Aq.e, {}), "Success" === Vq && (0, uq.jsx)(cq.d, {
+             name: "check"
+ ... (24 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L965-L966` → after: `L2009-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2009-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2009-L2018) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L965-L966)

```diff
-       return function(cT) {
-         return kT(TT(cT))
+       var gq;
+       return {
+         isError: !1,
+         name: qq,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== Eq && void 0 !== Eq ? Eq : {},
+         nameColour: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.nameColour) && void 0 !== gq ? gq : Yq.e,
+         location: {
+           status: "offline"
+         }
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L970-L975` → after: `L2022-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2022-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2022-L2065) · [Before (L970-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L970-L975)

```diff
-     function OT(TT, kT) {
-       const cT = [kT[TT].parent, TT];
-       let MT = lT[kT[TT].parent][TT],
-         OT = kT[TT].parent;
-       for (; kT[OT].parent;) cT.unshift(kT[OT].parent), MT = KT(lT[kT[OT].parent][OT], MT), OT = kT[OT].parent;
-       return MT.conversion = cT, MT
+     function Wq(qq) {
+       let {
+         player: Eq,
+         isFriend: gq = !1,
+         status: Yq,
+         showLocation: Aq = void 0 === Yq,
+         SB: Bq,
+         onSendFriendRequest: Wq,
+         actions: Nq,
+         zIndex: aq
+       } = qq;
+       const {
+         t: Vq
+       } = (0, lq.v)();
+       let dq = Yq;
+       null !== Bq && void 0 !== Bq && Bq.on && (dq = (0, uq.jsxs)(uq.Fragment, {
+ ... (28 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L977-L983` → after: `L2067-L2183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2067-L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2067-L2183) · [Before (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L977-L983)

```diff
-     TT.exports = function(TT) {
-       const kT = MT(TT),
-         cT = {},
-         lT = Object.keys(kT);
-       for (let MT = lT.length, KT = 0; KT < MT; KT++) {
-         const TT = lT[KT];
-         null !== kT[TT].parent && (cT[TT] = OT(TT, kT))
+ 
+     function Nq(qq) {
+       let {
+         row: Eq,
+         SB: gq,
+         canInvite: Yq,
+         invited: Oq,
+         onInvite: mq,
+         zIndex: xq
+       } = qq;
+       const {
+         t: cq
+       } = (0, lq.v)(), Bq = "online" === Eq.place ? Aq.g : Aq.i;
+       return (0, uq.jsx)(Wq, {
+         player: Eq.friend,
+         isFriend: !0,
+ ... (101 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L988-L1137` → after: `L2187-L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2187-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2187-L2206) · [Before (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L988-L1137)

```diff
-   36487: TT => {
-     TT.exports = {
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
- ... (134 more removed lines; see GitHub link above)
+   36775: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq,
+       e: () => Oq
+     });
+     var Yq = gq(163);
+     const lq = new Map;
+ 
+     function Oq(qq, Eq) {
+       var gq;
+       const Yq = null !== (gq = lq.get(qq)) && void 0 !== gq ? gq : new Map;
+       Yq.set(Eq, Date.now()), lq.set(qq, Yq)
+     }
+ 
+     function mq(qq) {
+       const Eq = lq.get(qq);
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1140-L1147` → after: `L2209-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2209-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2209-L2258) · [Before (L1140-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L1140-L1147)

```diff
-   36462: (TT, kT, cT) => {
-     var lT = cT(36466),
-       MT = Array.prototype.concat,
-       KT = Array.prototype.slice,
-       OT = TT.exports = function(TT) {
-         for (var kT = [], cT = 0, OT = TT.length; cT < OT; cT++) {
-           var yT = TT[cT];
-           lT(yT) ? kT = MT.call(kT, KT.call(yT)) : kT.push(yT)
+   36753: (qq, Eq, gq) => {
+     function Yq(qq, Eq) {
+       const gq = Eq.toLowerCase();
+       for (const Yq of qq)
+         if (Yq.toLowerCase() === gq) return !0;
+       return !1
+     }
+ 
+     function lq(qq, Eq, gq) {
+       const lq = [],
+         Oq = [],
+         mq = [];
+       for (const xq of qq) !xq.isError && xq.name && ("inGame" === xq.location.status && xq.location.inLobbyName === Eq || Yq(gq, xq.name) ? Oq.push({
+         friend: xq,
+         place: "here"
+       }) : "offline" === xq.location.status ? mq.push({
+ ... (34 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1149-L1153` → after: `L2260-L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2260-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2260-L2263) · [Before (L1149-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L1149-L1153)

```diff
-         return kT
-       };
-     OT.wrap = function(TT) {
-       return function() {
-         return TT(OT(arguments))
+       }
+       return {
+         ...qq,
+         whitelist: qq.whitelist.filter((qq => !Yq(Eq, qq)))
```

#### 36. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1156-L1159` → after: `L2266-L2270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2266-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L2266-L2270) · [Before (L1156-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L1156-L1159)

```diff
-   },
-   36466: TT => {
-     TT.exports = function(TT) {
-       return !(!TT || "string" === typeof TT) && (TT instanceof Array || Array.isArray(TT) || TT.length >= 0 && (TT.splice instanceof Function || Object.getOwnPropertyDescriptor(TT, TT.length - 1) && "String" !== TT.constructor.name))
+ 
+     function cq(qq, Eq) {
+       const gq = [];
+       for (let Yq = 0; Yq < qq.length; Yq += Eq) gq.push(qq.slice(Yq, Yq + Eq));
+       return gq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L122` → after: `L4-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L4-L255) · [Before (L4-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L4-L122)

```diff
-   36580: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => Kk,
-       h: () => fk,
-       l: () => Ak,
-       m: () => xk,
-       n: () => Ik
-     });
-     const lT = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       MT = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       KT = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       OT = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       yT = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       fT = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       xT = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       IT = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
- ... (103 more removed lines; see GitHub link above)
+   36701: qq => {
+     qq.exports = {
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
+ ... (236 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L124-L128` → after: `L257-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L257-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L257-L286) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L124-L128)

```diff
-     for (const jk in Mk) {
-       const TT = Mk[jk];
-       for (const kT in TT.sprite) {
-         if (Ok[kT]) throw new Error(`duplicate sound name ${kT} in ${Ok[kT]} and ${jk}`);
-         Ok[kT] = jk
+     for (const Nq of Object.keys(lq)) mq[[...lq[Nq].labels].sort().join("")] = Nq;
+     const xq = {};
+ 
+     function Aq(qq, Eq) {
+       if (!(this instanceof Aq)) return new Aq(qq, Eq);
+       if (Eq && Eq in Oq && (Eq = null), Eq && !(Eq in lq)) throw new Error("Unknown model: " + Eq);
+       let gq, cq;
+       if (null == qq) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (qq instanceof Aq) this.model = qq.model, this.color = [...qq.color], this.valpha = qq.valpha;
+       else if ("string" === typeof qq) {
+         const Eq = Yq.get(qq);
+         if (null === Eq) throw new Error("Unable to parse color from string: " + qq);
+         this.model = Eq.model, cq = lq[this.model].channels, this.color = Eq.value.slice(0, cq), this.valpha = "number" === typeof Eq.value[cq] ? Eq.value[cq] : 1
+       } else if (qq.length > 0) {
+         this.model = Eq || "rgb", cq = lq[this.model].channels;
+         const gq = Array.prototype.slice.call(qq, 0, cq);
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L131-L133` → after: `L295-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L295-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L295-L475) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L131-L133)

```diff
-     for (const jk in Mk) {
-       const TT = Mk[jk];
-       for (let kT = 0; kT < TT.src.length; kT++) TT.src[kT] = lk.clientSideServerUrls.staticUrl + TT.src[kT]
+     Aq.prototype = {
+       toString() {
+         return this.string()
+       },
+       toJSON() {
+         return this[this.model]()
+       },
+       string(qq) {
+         let Eq = this.model in Yq.to ? this : this.rgb();
+         Eq = Eq.round("number" === typeof qq ? qq : 1);
+         const gq = 1 === Eq.valpha ? Eq.color : [...Eq.color, this.valpha];
+         return Yq.to[Eq.model](gq)
+       },
+       percentString(qq) {
+         const Eq = this.rgb().round("number" === typeof qq ? qq : 1),
+           gq = 1 === Eq.valpha ? Eq.color : [...Eq.color, this.valpha];
+ ... (165 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L138-L143` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L479-L482) · [Before (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L138-L143)

```diff
-       if (yk[TT]) return Ck(yk[TT]);
-       {
-         const kT = [];
-         for (const cT in Mk)
-           for (const lT in Mk[cT].sprite) lT.startsWith(TT) && kT.push(lT);
-         return yk[TT] = kT, Ck(kT)
+       return function(Eq) {
+         return function(qq, Eq) {
+           return Number(qq.toFixed(Eq))
+         }(Eq, qq)
```

#### 5. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L148-L150` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L497-L499) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L148-L150)

```diff
-       const kT = Ok[TT];
-       if (void 0 === kT) throw new Error(`Invalid sound name ${TT} (not in any sprite sheet)`);
-       return kT
+       return function(Eq) {
+         return Math.max(0, Math.min(qq, Eq))
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L154-L155` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L503-L504) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L154-L155)

```diff
-       if (!(TT in Mk)) throw new Error("Invalid spriteTrack name");
-       return kT in Mk[TT].sprite
+       for (let gq = 0; gq < Eq; gq++) "number" !== typeof qq[gq] && (qq[gq] = 0);
+       return qq
```

#### 7. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L157-L159` → after: `L506-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L506-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L506-L635) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L157-L159)

```diff
- 
-     function Ak(TT) {
-       if (!(TT in Mk)) throw new Error("Invalid spritesheet name");
+     qq.exports = Aq
+   },
+   36716: (qq, Eq, gq) => {
+     const Yq = gq(36723),
+       lq = {};
+     for (const mq of Object.keys(Yq)) lq[Yq[mq]] = mq;
+     const Oq = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+         channels: 3,
+         labels: "hsl"
+       },
+       hsv: {
+ ... (114 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L164` → after: `L943-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L943-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/216.js#L943-L1159) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/216.js#L164)

```diff
-       return TT[Math.floor(Math.random() * TT.length)]
+       const Eq = function() {
+           const qq = {},
+             Eq = Object.keys(Yq);
+           for (let gq = Eq.length, Yq = 0; Yq < gq; Yq++) qq[Eq[Yq]] = {
+             distance: -1,
+             parent: null
+           };
+           return qq
+         }(),
+         gq = [qq];
+       for (Eq[qq].distance = 0; gq.length;) {
+         const qq = gq.pop(),
+           lq = Object.keys(Yq[qq]);
+         for (let Yq = lq.length, Oq = 0; Oq < Yq; Oq++) {
+           const Yq = lq[Oq],
+             mq = Eq[Yq]; - 1 === mq.distance && (mq.distance = Eq[qq].distance + 1, mq.parent = qq, gq.unshift(Yq))
+ ... (201 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4-L20` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L4) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L4-L20)

```diff
-   39408: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => lT,
-       e: () => MT
-     });
-     const lT = "The world isn't loaded, so no blocks can be seen.",
-       MT = "The world isn't loaded, so nothing in it can be seen."
-   },
-   38914: (TT, kT, cT) => {
-     function lT(TT) {
-       return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
-     }
-     cT.d(kT, {
-       b: () => lT
-     })
-   },
- ... (1 more removed lines; see GitHub link above)
+   36796: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L40` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L9-L10) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L40)

```diff
-       i: () => hT
+       k: () => cE,
+       o: () => uE
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L42-L120` → after: `L12-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L12-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L12-L64) · [Before (L42-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L42-L120)

```diff
-     var lT = cT(36),
-       MT = cT(40230),
-       KT = cT(40215),
-       OT = cT(40239),
-       yT = cT(40219),
-       fT = cT(40246),
-       xT = cT(40264);
- 
-     function IT(TT) {
-       var kT, cT;
-       const lT = (0, KT.g)();
-       return lT ? null === (kT = (0, MT.c)(lT.api, TT[0], TT[1], TT[2])) || void 0 === kT || null === (cT = kT.persisted) || void 0 === cT ? void 0 : cT.shared : void 0
-     }
- 
-     function AT(TT) {
-       return `${TT[0]},${TT[1]},${TT[2]}`
- ... (63 more removed lines; see GitHub link above)
+     const Yq = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       lq = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       Oq = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       mq = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       xq = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       Aq = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       cq = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       uq = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       Bq = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       Wq = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       Nq = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       aq = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       Vq = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       dq = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       jq = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       Hq = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (37 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L122-L145` → after: `L66-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L66-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L66-L117) · [Before (L122-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L122-L145)

```diff
-         boardEditRequested: {
-           watch: TT => (0, lT.m)("EditBoard", (kT => {
-             let {
-               pos: cT
-             } = kT;
-             if (null === cT) return void TT(null);
-             const lT = (0, KT.g)(),
-               MT = (0, KT.q)();
-             lT && MT && TT(MT.readBoardToEdit(lT.api, lT.chunks, cT))
-           }))
-         },
-         ironChestOpenRequested: {
-           watch: TT => (0, lT.m)("OpenIronChest", (kT => {
-             let {
-               pos: cT
-             } = kT;
- ... (8 more removed lines; see GitHub link above)
+         gunSemiAutomatic: Yq,
+         gunSubmachineGun: lq,
+         gunShotgun: Aq,
+         gunRifle: mq,
+         gunPistol: Oq,
+         gunMisc: xq,
+         dig: cq,
+         step: uq,
+         randomBeep: Bq,
+         randomCannon: Wq,
+         randomCash: Nq,
+         randomExp: aq,
+         randomFallsmall: Vq,
+         randomItems: dq,
+         randomFire: jq,
+         randomFirecracker: Hq,
+ ... (36 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L147-L235` → after: `L119-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L119-L128) · [Before (L147-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L147-L235)

```diff
-       ST = {
-         writeOnBoard(TT) {
-           var kT;
-           let {
-             pos: cT,
-             text: lT,
-             textSize: MT
-           } = TT;
-           null === (kT = (0, KT.g)()) || void 0 === kT || kT.send(yT.b.UpdateBoard, (0, yT.W)({
-             gx: cT,
-             Ux: lT,
-             Yx: MT
-           }))
-         },
-         writeBook(TT) {
-           var kT;
- ... (73 more removed lines; see GitHub link above)
+       OE = new Map(["mob", "random"].map((qq => {
+         const Eq = Object.keys(lE).filter((Eq => Eq.startsWith(qq) && /^[A-Z]/.test(Eq.slice(qq.length))));
+         return [qq, Eq]
+       }))),
+       mE = {};
+     for (const NE in lE) {
+       const qq = lE[NE];
+       for (const Eq in qq.sprite) {
+         if (mE[Eq]) throw new Error(`duplicate sound name ${Eq} in ${mE[Eq]} and ${NE}`);
+         mE[Eq] = NE
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L238-L249` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L131-L133) · [Before (L238-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L238-L249)

```diff
-   },
-   40281: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => xT
-     });
-     var lT = cT(40215),
-       MT = cT(40284),
-       KT = cT(40290);
- 
-     function OT() {
-       var TT, kT;
-       return null !== (TT = null === (kT = (0, lT.g)()) || void 0 === kT ? void 0 : kT.itemBridgeSources) && void 0 !== TT ? TT : KT.b
+     for (const NE in lE) {
+       const qq = lE[NE];
+       for (let Eq = 0; Eq < qq.src.length; Eq++) qq.src[Eq] = YE.clientSideServerUrls.staticUrl + qq.src[Eq]
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L253-L258` → after: `L138-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L138-L143) · [Before (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L253-L258)

```diff
-       return {
-         current: () => OT().states[TT].current(),
-         watch: kT => (0, MT.h)((cT => {
-           const lT = cT.itemBridgeSources.states[TT];
-           return kT(lT.current()), lT.watch(kT)
-         }))
+       if (xE[qq]) return WE(xE[qq]);
+       {
+         const Eq = [];
+         for (const gq in lE)
+           for (const Yq in lE[gq].sprite) Yq.startsWith(qq) && Eq.push(Yq);
+         return xE[qq] = Eq, WE(Eq)
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L263-L795` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L148-L150) · [Before (L263-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L263-L795)

```diff
-       return {
-         watch: kT => (0, MT.h)((cT => cT.itemBridgeSources.events[TT].watch(kT)))
-       }
-     }
-     const xT = {
-       states: {
-         inventory: yT("inventory"),
-         hotbar: yT("hotbar"),
-         crafting: yT("crafting"),
-         heldItemAim: yT("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: fT("hotbarSlotRequested"),
-         hotbarScrolled: fT("hotbarScrolled"),
-         numberKeyPressed: fT("numberKeyPressed"),
-         inventoryDropRequested: fT("inventoryDropRequested"),
- ... (517 more removed lines; see GitHub link above)
+       const Eq = mE[qq];
+       if (void 0 === Eq) throw new Error(`Invalid sound name ${qq} (not in any sprite sheet)`);
+       return Eq
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L804-L812` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L154-L155) · [Before (L804-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L804-L812)

```diff
-       try {
-         TT(kT)
-       } catch (cT) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", cT)
-       }
-     }
- 
-     function IT() {
-       return fT
+       if (!(qq in lE)) throw new Error("Invalid spriteTrack name");
+       return Eq in lE[qq].sprite
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L816` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L159-L160) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L816)

```diff
-       yT.push(TT), null !== fT && xT(TT, fT)
+       if (!(qq in lE)) throw new Error("Invalid spritesheet name");
+       return lE[qq]
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L820-L860` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/217.js#L164) · [Before (L820-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/217.js#L820-L860)

```diff
-       return MT ??= Promise.all([cT.e(70), cT.e(95), cT.e(215), cT.e(75), cT.e(216), cT.e(189), cT.e(94), cT.e(235), cT.e(261), cT.e(187), cT.e(263), cT.e(199), cT.e(186), cT.e(200), cT.e(136), cT.e(86), cT.e(114), cT.e(239), cT.e(54)]).then((() => cT(42124))).then((kT => {
-         kT.loadAudio(TT), fT = kT;
-         for (const TT of yT) xT(TT, kT);
-         return kT
-       })).catch((TT => {
-         throw MT = null, TT
-       })), MT
-     }
-     async function jT(TT, kT) {
-       try {
-         const cT = await CT(TT);
-         await cT.loadClientGame(kT)
-       } catch (cT) {
-         throw new lT(cT)
-       }
-     }
- ... (25 more removed lines; see GitHub link above)
+       return qq[Math.floor(Math.random() * qq.length)]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L4)

```diff
-   36754: (TT, kT, cT) => {
+   39535: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L6-L7` → after: `L6-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L6-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L6-L23) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L6-L7)

```diff
-       c: () => aT,
-       g: () => DT
+       b: () => Yq,
+       d: () => lq
+     });
+     const Yq = "The world isn't loaded, so no blocks can be seen.",
+       lq = "The world isn't loaded, so nothing in it can be seen."
+   },
+   39056: (qq, Eq, gq) => {
+     function Yq(qq) {
+       return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
+     }
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   36851: (qq, Eq, gq) => {
+     gq.d(Eq, {
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L26` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L25-L61) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L9-L26)

```diff
-     var lT = cT(4251),
-       MT = cT(1461),
-       KT = cT(71),
-       OT = cT(6486),
-       yT = cT(4239),
-       fT = cT(1292),
-       xT = cT(1953),
-       IT = cT(1921),
-       AT = cT(1470),
-       CT = cT(1195),
-       jT = cT(36756),
-       vT = cT(1046),
-       tT = cT.n(vT),
-       hT = cT(1316),
-       NT = cT(1061),
-       QT = cT(1289),
- ... (2 more removed lines; see GitHub link above)
+     let Yq = () => null;
+ 
+     function lq(qq) {
+       Yq = qq
+     }
+ 
+     function Oq(qq, Eq) {
+       return Yq(qq, Eq)
+     }
+   },
+   40331: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Vq,
+       e: () => oq,
+       i: () => Hq,
+       j: () => dq
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L29-L31` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L64-L65) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L29-L31)

```diff
-       const {
-         t: TT
-       } = (0, CT.B)(), [kT, cT] = (0, KT.useState)(!1), [vT, aT] = (0, KT.useState)(null), [rT, PT] = (0, KT.useState)(1), [wT, mT] = (0, KT.useState)(!1), [bT, zT] = (0, KT.useState)(!1), JT = (0, KT.useRef)(0), oT = (0, KT.useRef)(!1), HT = (0, KT.useRef)(!1), eT = (0, KT.useRe … [truncated]
+       return aq
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L33-L35` → after: `L67-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L67-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L67-L84) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L33-L35)

```diff
-       function VT() {
-         const TT = null !== vT && void 0 !== vT ? vT : "Rested Speed";
-         xT.gameBridge.send("wakeUp", bT ? TT : null), GT.current = null, cT(!1), aT(null), PT(1), mT(!1), zT(!1)
+     function dq(qq) {
+       const Eq = null !== Nq && Nq.key === Bq(qq.pos) ? Nq.type : null;
+       if (null === Eq) return qq;
+       let gq = null;
+       if ("Iron" === Eq) {
+         const {
+           cachedPasskey: Eq,
+           ...Yq
+         } = jq(qq.pos);
+         gq = {
+           Nu: null !== Eq && void 0 !== Eq ? Eq : [0, 0, 0, 0],
+           ...Yq
+         }
+       }
+       return {
+         ...qq,
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L38-L39` → after: `L88-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L88-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L88-L102) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L38-L39)

```diff
-       function ET() {
-         return !wT && (VT(), !0)
+     function jq(qq) {
+       const Eq = uq(qq),
+         gq = null === Eq || void 0 === Eq ? void 0 : Eq.ownerDbId,
+         Yq = function(qq) {
+           var Eq;
+           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uq(qq);
+           const Yq = Bq(qq),
+             lq = Wq.get(Yq);
+           return lq ? lq.lastOpened < (null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.passkeyLastUpdated) && void 0 !== Eq ? Eq : 0) ? (Wq.delete(Yq), null) : [...lq.Nu] : null
+         }(qq, Eq);
+       return void 0 === gq ? {
+         cachedPasskey: Yq
+       } : {
+         ownerDbId: gq,
+         cachedPasskey: Yq
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L41-L138` → after: `L104-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L104-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L104-L114) · [Before (L41-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L41-L138)

```diff
-       return (0, MT.g)("PlayerPhysicsTypeUpdate", (TT => {
-         TT !== GT.current && (GT.current = TT, TT === OT.v.SLEEPING ? (HT.current || (JT.current = xT.gameBridge.lookup("cameraZoom", null), HT.current = !0), oT.current = !0, xT.gameBridge.send("setCameraZoom", 3), cT(!0), PT(function() {
-           for (const TT of xT.gameBridge.lookup("blocksStandingOn", null)) {
-             if (jT.c.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
-             if (jT.c.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
-             if (jT.c.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
-           }
-           return 1
-         }())) : (HT.current = !1, cT(!1), aT(null), PT(1)))
-       })), (0, KT.useEffect)((() => () => {
-         (0, fT.o)(DT)
-       }), []), (0, KT.useEffect)((() => {
-         kT ? (0, fT.p)(DT) : ((0, fT.o)(DT), oT.current && (xT.gameBridge.send("setCameraZoom", JT.current), oT.current = !1))
-       }), [kT]), (0, QT.q)("overlay", eT, ET, kT), (0, ST.jsx)(lT.d, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
- ... (82 more removed lines; see GitHub link above)
+     }(0, cq.l)(mq.b, (qq => {
+       const Eq = (0, Aq.d)(mq.b, qq);
+       if (!(0, Aq.b)(Eq) || Eq.Xq) return;
+       if (aq++, !Eq.Jq || null === Eq.Uq) return void(Nq = null);
+       const gq = Bq(Eq.Uq);
+       Nq = {
+         key: gq,
+         type: Eq.Rq
+       }, null !== Eq.Fq && Wq.set(gq, {
+         Nu: [...Eq.Fq],
+         lastOpened: Date.now()
```

#### 8. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L140-L150` → after: `L116-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L116-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L116-L159) · [Before (L140-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L140-L150)

```diff
-     }
-     const FT = (0, KT.memo)((function(TT) {
-       let {
-         children: kT,
-         restedEffect: cT,
-         yI: lT,
-         setChosenRestedEffect: MT
-       } = TT;
-       return cT === lT ? (0, ST.jsx)(AT.m, {
-         onClick: TT => {
-           TT.stopPropagation()
+     })), (0, cq.d)((() => {
+       Wq.clear(), Nq = null, aq++
+     })), (0, cq.h)((() => {
+       null !== Nq && (Nq = null, aq++, Yq.i.TV("chestToggleFromServer", !1, !0))
+     }));
+     const Hq = {
+         boardEditRequested: {
+           watch: qq => (0, Yq.k)("EditBoard", (Eq => {
+             let {
+               pos: gq
+             } = Eq;
+             if (null === gq) return void qq(null);
+             const Yq = (0, Oq.e)(),
+               lq = (0, Oq.k)();
+             Yq && lq && qq(lq.readBoardToEdit(Yq.api, Yq.chunks, gq))
+           }))
+ ... (28 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L152-L155` → after: `L161-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L161-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L161-L172) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L152-L155)

```diff
-         children: kT
-       }) : (0, ST.jsx)(AT.i, {
-         onClick: TT => {
-           MT(cT), TT.stopPropagation()
+         writeBook(qq) {
+           var Eq;
+           let {
+             pages: gq,
+             title: Yq,
+             published: lq
+           } = qq;
+           null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateBook, (0, xq.bb)({
+             tc: gq,
+             vc: Yq,
+             hc: lq
+           }))
```

#### 10. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L157-L159` → after: `L174-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L174-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L174-L190) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L157-L159)

```diff
-         children: kT
-       })
-     }))
+         writeNameTag(qq) {
+           var Eq;
+           null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateNameTag, qq)
+         },
+         setCustomLobbyBlock(qq) {
+           let {
+             pos: Eq,
+             blockName: gq
+           } = qq;
+           const Yq = (0, Oq.k)(),
+             lq = (0, Oq.e)();
+           Yq && lq && lq.send(xq.b.SetCustomLobbyBlock, (0, xq.I)({
+             lc: Yq.blockIdOf(gq),
+             Yc: Eq
+           }))
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L161` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L192) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L161)

```diff
-   40194: (TT, kT, cT) => {
+   40377: (qq, Eq, gq) => {
```

#### 12. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L163` → after: `L194-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L194-L196) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L163)

```diff
-       d: () => WT
+       b: () => Aq,
+       f: () => mq,
+       h: () => xq
```

#### 13. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L165-L196` → after: `L198-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L198-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L198-L205) · [Before (L165-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L165-L196)

```diff
-     var lT = cT(31),
-       MT = cT(36),
-       KT = cT(4272),
-       OT = cT(328),
-       yT = cT(1654),
-       fT = cT(8199),
-       xT = cT(4284),
-       IT = cT(8727),
-       AT = cT(8227),
-       CT = cT(8206),
-       jT = cT(8229),
-       vT = cT(1701),
-       tT = cT(8236),
-       hT = cT(8680),
-       NT = cT(8836),
-       QT = cT(8737),
- ... (16 more removed lines; see GitHub link above)
+     var Yq = gq(40318),
+       lq = gq(4608),
+       Oq = gq(40325);
+ 
+     function mq() {
+       var qq;
+       const Eq = null === (qq = (0, Oq.e)()) || void 0 === qq ? void 0 : qq.api.localId;
+       return void 0 === Eq || Eq === Yq.gd ? null : String(Eq)
```

#### 14. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L198-L207` → after: `L207-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L207-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L207-L218) · [Before (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L198-L207)

```diff
-     class mT {
-       constructor(TT, kT) {
-         this.press = TT, this.release = kT, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(TT, kT, cT, lT) {
-         if (TT && null === this.downAtMs) return this.downAtMs = cT, this.latched = lT, void(this.token = this.press());
-         null !== this.downAtMs && (this.latched ? TT && this.end() : !kT && cT - this.downAtMs >= 40 && this.end())
-       }
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+ 
+     function xq(qq) {
+       const Eq = (0, Oq.e)();
+       if (null !== Eq) return qq(Eq);
+       let gq = null;
+       const Yq = (0, lq.w)((() => {
+         const Eq = (0, Oq.e)();
+         null !== Eq && null === gq && (Yq(), gq = qq(Eq))
+       }));
+       return () => {
+         var qq;
+         Yq(), null === (qq = gq) || void 0 === qq || qq()
```

#### 15. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L209-L210` → after: `L220-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L220-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L220-L235) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L209-L210)

```diff
-       unlatch() {
-         this.latched = !1
+     }
+ 
+     function Aq(qq, Eq, gq) {
+       return {
+         current: () => {
+           const gq = (0, Oq.e)();
+           return null === gq ? Eq : qq(gq)()
+         },
+         watch: Eq => xq((Yq => {
+           const lq = qq(Yq);
+           let Oq = lq();
+           return Eq(Oq), gq((() => {
+             const qq = lq();
+             qq !== Oq && (Oq = qq, Eq(qq))
+           }))
+         }))
```

#### 16. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L212-L213` → after: `L237-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L237-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L237-L258) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L212-L213)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+     }
+   },
+   40371: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => cq
+     });
+     var Yq = gq(40325),
+       lq = gq(40377),
+       Oq = gq(40385);
+ 
+     function mq() {
+       var qq, Eq;
+       return null !== (qq = null === (Eq = (0, Yq.e)()) || void 0 === Eq ? void 0 : Eq.itemBridgeSources) && void 0 !== qq ? qq : Oq.b
+     }
+ 
+     function xq(qq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L215-L217` → after: `L260-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L260-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L260-L264) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L215-L217)

```diff
-       end() {
-         const TT = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(TT)
+     }
+ 
+     function Aq(qq) {
+       return {
+         watch: Eq => (0, lq.h)((gq => gq.itemBridgeSources.events[qq].watch(Eq)))
```

#### 18. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L221-L222` → after: `L268-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L268-L272) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L221-L222)

```diff
-         kind: "specialAction",
-         action: "SpecialAction2"
+       states: {
+         inventory: xq("inventory"),
+         hotbar: xq("hotbar"),
+         crafting: xq("crafting"),
+         heldItemAim: xq("heldItemAim")
```

#### 19. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L224-L242` → after: `L274-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L274-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L274-L392) · [Before (L224-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L224-L242)

```diff
-       zT = TT => {
-         let kT = null;
-         const cT = new PT.c,
-           lT = () => {
-             kT && (((TT, kT, cT) => {
-               switch (cT.kind) {
-                 case "reload":
-                   return void kT.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void kT.specialActionUp(cT.action);
-                 case "customButton":
-                   return void DT.gameBridge.send("pressCustomButton", {
-                     id: cT.id,
-                     down: !1
-                   });
-                 case "touchButton":
- ... (3 more removed lines; see GitHub link above)
+       events: {
+         hotbarSlotRequested: Aq("hotbarSlotRequested"),
+         hotbarScrolled: Aq("hotbarScrolled"),
+         numberKeyPressed: Aq("numberKeyPressed"),
+         inventoryDropRequested: Aq("inventoryDropRequested"),
+         chestToggled: Aq("chestToggled"),
+         chestRefreshed: Aq("chestRefreshed"),
+         inventorySynced: Aq("inventorySynced"),
+         enchantingTableOpened: Aq("enchantingTableOpened")
+       },
+       commands: {
+         selectHotbarSlot: qq => mq().commands.selectHotbarSlot(qq),
+         removeInventoryItem: qq => mq().commands.removeInventoryItem(qq),
+         swapInventorySlots: qq => mq().commands.swapInventorySlots(qq),
+         moveInventoryItem: qq => mq().commands.moveInventoryItem(qq),
+         quickMoveInventoryItem: qq => mq().commands.quickMoveInventoryItem(qq),
+ ... (103 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L244-L279` → after: `L394-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L394-L395) · [Before (L244-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L244-L279)

```diff
-           KT = (cT, MT, KT, OT) => {
-             lT(), kT = {
-               action: MT,
-               bodies: cT,
-               heldBy: KT,
-               atMs: OT
-             }, ((TT, kT, cT) => {
-               switch (cT.kind) {
-                 case "reload":
-                   return kT.reloadGun(), void kT.specialActionDown("SpecialAction1");
-                 case "specialAction":
-                   return void kT.specialActionDown(cT.action);
-                 case "customButton":
-                   return void DT.gameBridge.send("pressCustomButton", {
-                     id: cT.id,
-                     down: !0
- ... (20 more removed lines; see GitHub link above)
+           hotbarScrolled: {
+             watch: () => () => {}
```

#### 21. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L281-L282` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L397-L398) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L281-L282)

```diff
-           pressPicked: (TT, kT) => {
-             KT(TT, kT, [(0, fT.j)("menuConfirm"), (0, fT.j)("actionButton")], performance.now())
+           hotbarDropRequested: {
+             watch: () => () => {}
```

#### 22. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L284-L365` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L400-L401) · [Before (L284-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L284-L365)

```diff
-           release: () => {
-             cT.release(), lT(), (0, rT.d)(null), (0, rT.e)(!1)
-           }
-         }
-       };
-     var JT = cT(8188);
-     var oT = cT(40189),
-       HT = cT(8777),
-       eT = cT(8219),
-       GT = cT(8877);
-     var VT = cT(40182),
-       ET = cT(8886),
-       ZT = cT(40199),
-       uT = cT(8860),
-       XT = cT(8784),
-       dT = cT(8791),
- ... (66 more removed lines; see GitHub link above)
+           inventoryDropRequested: {
+             watch: () => () => {}
```

#### 23. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L367-L378` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L403-L404) · [Before (L367-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L367-L378)

```diff
-           Ik = function() {
-             let lT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-             xk(), lk = !1, lT || (ck = !1, cT = BT, Object.assign(kT, {
-               x: 0,
-               y: 0,
-               magnitude: 0,
-               headingOffset: 0,
-               jumpHeld: !1,
-               jumpPressed: !1,
-               running: !1,
-               sprintHeld: !1
-             }), TT.stopMoving())
+           numberKeyPressed: {
+             watch: () => () => {}
```

#### 24. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L380-L402` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L406-L407) · [Before (L380-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L380-L402)

```diff
-           Ak = function(lT, MT, KT) {
-             let OT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             const yT = (0, CT.g)(),
-               xT = (0, VT.i)(MT, yT.moveDeadzone),
-               AT = (0, fT.j)("sprint");
-             cT = (0, VT.w)(cT, {
-               sprintPressed: lT.wasPressed(AT),
-               magnitude: xT.magnitude,
-               autoSprint: yT.autoSprint,
-               nowMs: KT
-             }), kT.running = cT.running, kT.sprintHeld = lT.isHeld(AT), kT.x = xT.x, kT.y = xT.y, kT.magnitude = xT.speed, kT.headingOffset = xT.headingOffset, ck = xT.magnitude > 0;
-             const jT = (0, fT.j)("jump");
-             if (kT.jumpHeld = lT.isHeld(jT), kT.jumpPressed = lT.wasPressed(jT), kT.jumpPressed && TT.bodies().jumpDown(), OT) return void TT.move(kT, null);
-             const vT = (0, fT.j)("sneak"),
-               tT = IT.filter({
-                 sneakHeld: lT.isHeld(vT),
- ... (7 more removed lines; see GitHub link above)
+           chestToggled: {
+             watch: () => () => {}
```

#### 25. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L404-L408` → after: `L409-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L409-L410) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L404-L408)

```diff
-           Ck = (TT, kT) => {
-             const cT = (0, fT.j)("chat");
-             if ("off" === (0, CT.g)().quickChat) return void(TT.wasPressed(cT) && (AT.d.consumeButton(cT), MT.k.nt(HT.b)));
-             const lT = pT.update(TT.wasPressed(cT), TT.isHeld(cT), kT, gT());
-             "tap" === lT || "hold" === lT && null === (0, vT.c)() ? MT.k.nt(HT.b) : "hold" === lT && (AT.d.consumeButton(cT), MT.k.nt(QT.n))
+           chestRefreshed: {
+             watch: () => () => {}
```

#### 26. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L410-L420` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L412-L413) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L410-L420)

```diff
-           jk = (kT, cT) => {
-             ((TT, kT) => {
-               const cT = (0, NT.e)(),
-                 lT = (0, fT.j)("emoteWheel");
-               if ("wheel" === (0, CT.g)().emoteButton) return TT.wasPressed(lT) && (AT.d.consumeButton(lT), MT.k.nt("requestEmoteWheelPadOpen", !0)), (0, NT.e)() !== cT;
-               const KT = iT.update(TT.wasPressed(lT), TT.isHeld(lT), kT, gT());
-               return "tap" === KT ? MT.k.nt("requestEmoteRepeatLast") : "hold" === KT && (AT.d.consumeButton(lT), MT.k.nt("requestEmoteWheelPadOpen", !1)), (0, NT.e)() !== cT
-             })(kT, cT) || Ck(kT, cT), kT.wasPressed((0, fT.j)("inventory")) && (AT.d.consumeButton((0, fT.j)("inventory")), (0, yT.A)(UT(), "inventory", TT.hasFullInventory())), kT.wasPressed((0, fT.j)("pause")) && (AT.d.consumeButton((0, fT.j)("pause")), (0, xT.e)() === OT.o.SOC … [truncated]
-               if ("shop" === (0, eT.d)()) return MT.k.nt(GT.n), void(0, yT.z)(TT, OT.o.SHOP, !0);
-               (0, yT.z)(TT, OT.o.LOBBY_LEADERBOARD, kT)
-             })(UT(), TT.hasLobbyTab()))
+           inventorySynced: {
+             watch: () => () => {}
```

#### 27. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L422-L447` → after: `L415-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L415-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L415-L431) · [Before (L422-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L422-L447)

```diff
-           vk = (kT, cT) => {
-             const lT = TT.bodies();
-             ((kT, cT) => {
-               const lT = (0, fT.j)("attack"),
-                 MT = kT.wasPressed(lT);
-               MT && !Tk.isLatched() && (bT = TT.targetsBlock()), Tk.update(MT, kT.isHeld(lT), cT, "toggle" === (0, CT.g)().attackMode), Tk.isLatched() && bT ? WT.update(TT.targetsBlock(), cT) && Tk.unlatch() : WT.reset(), (0, dT.c)(Tk.isLatched())
-             })(kT, cT), kk.update(kT.wasPressed((0, fT.j)("use")), kT.isHeld((0, fT.j)("use")), cT, !1), Kk.update(kT.isHeld((0, fT.j)("hotbarPrevious")), cT) && TT.scrollHotbar(-1), Ok.update(kT.isHeld((0, fT.j)("hotbarNext")), cT) && TT.scrollHotbar(1), ((kT, cT, lT) => {
-               const MT = (0, fT.j)("perspective"),
-                 KT = (0, fT.j)("pickBlock"),
-                 OT = TT.pickBlockAllowed();
-               (0, LT.f)(OT && !fk && TT.targetsBlock());
-               const yT = () => {
-                 cT.pickBlock() && (fk = !0, (0, LT.f)(!1))
-               };
-               if (!OT || KT !== MT) return yk.release(), kT.wasPressed(MT) && cT.swapCameraZoom(), void(OT && kT.wasPressed(KT) && yT());
-               const xT = yk.update(kT.wasPressed(KT), kT.isHeld(KT), lT, gT());
- ... (10 more removed lines; see GitHub link above)
+           enchantingTableOpened: {
+             watch: () => () => {}
+           },
+           cosmeticsUpdated: {
+             watch: () => () => {}
+           },
+           shotDamageToShow: {
+             watch: () => () => {}
+           },
+           boardEditRequested: {
+             watch: () => () => {}
+           },
+           kill: {
+             watch: () => () => {}
+           },
+           chatReceived: {
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L449-L468` → after: `L433-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L433-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L433-L536) · [Before (L449-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L449-L468)

```diff
-           tk = AT.d.register({
-             name: "gameplay",
-             isActive: () => {
-               const kT = ck && "keyboardMouse" === lT.e.get("activeInputDevice") && !(0, jT.A)(),
-                 cT = (0, jT.i)() ? [oT.c] : [];
-               return ((0, jT.i)() || kT) && (0, tT.e)(cT) && TT.hasPlayer()
-             },
-             onFrame: TT => {
-               const kT = performance.now(),
-                 cT = (0, CT.g)(),
-                 lT = (0, VT.y)(TT, (0, VT.n)(cT, (0, fT.j)("pause"), (0, ET.d)().isSupported())),
-                 MT = (0, VT.k)(lT, cT.swapSticks);
-               return (0, jT.i)() ? (lk = !1, (0, tT.e)() ? (Mk = !1, nT.update(MT.look, cT, lT.isHeld((0, fT.j)("use"))), Ak(lT, MT.move, kT), void vk(lT, kT)) : (Mk || (Mk = !0, IT.lostToPadScreen(), Ik()), void Ck(lT, kT))) : (lk || (xk(), lk = !0), void Ak(lT, MT.move, kT))
-             },
-             onDeactivate: TT => {
-               (0, jT.i)() && IT.lostToPadScreen(), Ik(TT)
- ... (4 more removed lines; see GitHub link above)
+           ironChestOpenRequested: {
+             watch: () => () => {}
+           },
+           localEffectUpdated: {
+             watch: () => () => {}
+           },
+           localPlayerAliveSet: {
+             watch: () => () => {}
+           },
+           replayUiActionRequested: {
+             watch: () => () => {}
+           },
+           replayViewerRequested: {
+             watch: () => () => {}
+           }
+         },
+ ... (88 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L470-L486` → after: `L538-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L538-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L538-L544) · [Before (L470-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L470-L486)

```diff
-           hk = (0, oT.g)(TT),
-           Nk = (() => {
-             const TT = MT.k.subscribe(JT.c, (TT => {
-               !TT && (0, jT.i)() && "inGame" === lT.e.get("gameState") && MT.k.nt("showBottomMessage", {
-                 message: [{
-                   translationKey: "controller:disconnected"
-                 }],
-                 timeoutLength: 3e3,
-                 type: "Warning"
-               })
-             }));
-             return () => {
-               MT.k.unsubscribe(TT)
-             }
-           })();
-         return () => {
- ... (1 more removed lines; see GitHub link above)
+           cameraZoom: () => 0,
+           freeCameraPos: () => null,
+           blocksStandingOn: () => [],
+           dropAhead: () => !1,
+           replayCamera: () => null,
+           leaveGameReloadsPage: () => !1,
+           codeBlockClickable: () => !1
```

#### 30. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L490` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L548) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L490)

```diff
-   40189: (TT, kT, cT) => {
+   40320: (qq, Eq, gq) => {
```

#### 31. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L492` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L550-L551) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L492)

```diff
-       c: () => vT,
+       d: () => vq,
+       e: () => rq,
```

#### 32. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L494` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L553-L554) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L494)

```diff
-       k: () => jT
+       i: () => tq,
+       j: () => Qq
```

#### 33. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L496-L504` → after: `L556-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L556-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L556-L612) · [Before (L496-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L496-L504)

```diff
-     var lT = cT(1292),
-       MT = cT(4272),
-       KT = cT(8818),
-       OT = cT(36754),
-       yT = cT(1734),
-       fT = cT(1192),
-       xT = cT(8236),
-       IT = cT(8737),
-       AT = cT(8840);
+     var Yq = gq(39174),
+       lq = gq(1214),
+       Oq = gq(1926),
+       mq = gq(1933),
+       xq = gq(3166),
+       Aq = gq(36851),
+       cq = gq(1308),
+       uq = gq(40325),
+       Bq = gq(4637),
+       Wq = gq(2357),
+       Nq = gq(40329),
+       aq = gq(40331),
+       Vq = gq(40371);
+     let dq = null;
+ 
+     function jq(qq) {
+ ... (41 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L506-L508` → after: `L614-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L614-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L614-L682) · [Before (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L506-L508)

```diff
-         emoteWheel: KT.g,
-         quickChatWheel: IT.c,
-         actionWheel: AT.s
+         inventory: function() {
+           const qq = Vq.c.states.inventory;
+           let Eq = null;
+           const gq = qq => {
+             var gq;
+             return null === qq.chest ? qq : ((null === (gq = Eq) || void 0 === gq ? void 0 : gq.from) === qq && Eq.chestVersion === (0, aq.d)() || (Eq = {
+               from: qq,
+               chestVersion: (0, aq.d)(),
+               view: {
+                 ...qq,
+                 chest: (0, aq.j)(qq.chest)
+               }
+             }), Eq.view)
+           };
+           return {
+             current: () => gq(qq.current()),
+ ... (53 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L510-L519` → after: `L684-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L684-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L684-L724) · [Before (L510-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L510-L519)

```diff
-       jT = Object.keys(CT),
-       vT = "dead",
-       tT = TT => (0, lT.l)().includes(TT),
-       hT = TT => {
-         const kT = [(0, xT.j)(vT, (() => TT.hasPlayer() && TT.isPlayerDead())), (0, xT.j)("sleeping", (() => tT(OT.g))), (0, xT.j)("turnstile", (() => tT(fT.e))), (0, xT.j)("videoAd", yT.c), (0, xT.j)("replay", (() => (0, MT.g)() || TT.isReplayMode())), (0, xT.j)("freeCamera", (( … [truncated]
-           let [kT, cT] = TT;
-           return (0, xT.j)(kT, cT)
-         }))];
-         return () => {
-           for (const TT of kT) TT()
+       rq = {
+         inventoryDropRequested: Vq.c.events.inventoryDropRequested,
+         chestToggled: Vq.c.events.chestToggled,
+         chestRefreshed: Vq.c.events.chestRefreshed,
+         inventorySynced: Vq.c.events.inventorySynced,
+         enchantingTableOpened: Vq.c.events.enchantingTableOpened
+       },
+       vq = {
+         removeInventoryItem: Vq.c.commands.removeInventoryItem,
+         swapInventorySlots: Vq.c.commands.swapInventorySlots,
+         moveInventoryItem: Vq.c.commands.moveInventoryItem,
+         quickMoveInventoryItem: Vq.c.commands.quickMoveInventoryItem,
+         closeChest: Vq.c.commands.closeChest,
+         setInventoryOpen(qq) {
+           (0, Bq.k)(Wq.C.InventoryOpen, qq ? Wq.C.InventoryOpen : 0)
+         },
+ ... (25 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L523` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L731) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L523)

```diff
-   40182: (TT, kT, cT) => {
+   40369: (qq, Eq, gq) => {
```

#### 37. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L525-L526` → after: `L733-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L733-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L733-L734) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L525-L526)

```diff
-       e: () => MT,
-       i: () => fT,
+       d: () => Yq,
+       g: () => Bq,
```

#### 38. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L528-L532` → after: `L736-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L736-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L736-L739) · [Before (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L528-L532)

```diff
-       n: () => IT,
-       p: () => OT,
-       t: () => KT,
-       w: () => xT,
-       y: () => AT
+       l: () => Oq,
+       o: () => lq,
+       r: () => Aq,
+       v: () => uq
```

#### 39. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L534-L535` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L741) · [Before (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L534-L535)

```diff
-     var lT = cT(8190);
-     class MT {
+     class Yq extends Error {
```

#### 40. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L537-L548` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L743) · [Before (L537-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L537-L548)

```diff
-         this.fullTiltSinceMs = null
-       }
-       update(TT, kT, cT) {
-         const MT = (0, lT.m)(TT, kT.lookDeadzone);
-         if (Math.hypot(MT.x, MT.y) < .9 || Math.abs(MT.x) < Math.abs(MT.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = cT);
-         const KT = (OT = kT.lookSensitivityX, Math.min(1, 100 / OT));
-         var OT;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (cT - this.fullTiltSinceMs - 250 * KT) / (200 * KT)))
-       }
-       reset() {
-         this.fullTiltSinceMs = null
+         super(...arguments), this.name = "CoreCorruption"
```

#### 41. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L551-L632` → after: `L746-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L746-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L746-L776) · [Before (L551-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L551-L632)

```diff
-     const KT = (TT, kT, cT, MT, KT) => {
-         let OT = 1;
-         return "boost" === cT.lookCurve ? OT = TT.update(kT, cT, KT) : TT.reset(),
-           function(TT, kT) {
-             let {
-               yawBoost: cT = 1,
-               aiming: MT = !1
-             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             const KT = (0, lT.i)((0, lT.m)(TT, kT.lookDeadzone), kT.lookCurve),
-               OT = 220 * Math.PI / 180,
-               yT = MT ? kT.aimLookSensitivity / 100 : 1,
-               fT = kT.lookSensitivityX / 100 * yT,
-               xT = kT.lookSensitivityY / 100 * yT;
-             return {
-               yawRadPerSec: KT.x * OT * fT * cT * (kT.invertLookX ? -1 : 1),
-               pitchRadPerSec: KT.y * OT * .7 * xT * (kT.invertLookY ? -1 : 1)
- ... (66 more removed lines; see GitHub link above)
+ 
+     function lq(qq) {
+       return qq instanceof RangeError && /call stack/i.test(qq.message) || qq instanceof Error && "InternalError" === qq.name && /recursion/i.test(qq.message)
+     }
+ 
+     function Oq(qq) {
+       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(qq))
+     }
+     const mq = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function xq(qq) {
+       var Eq;
+       return qq instanceof WebAssembly.RuntimeError || qq instanceof Yq || lq(qq) && mq.test(null !== (Eq = qq.stack) && void 0 !== Eq ? Eq : "")
+     }
+ 
+     function Aq(qq, Eq) {
+ ... (15 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L634` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L778) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L634)

```diff
-   40199: (TT, kT, cT) => {
+   40325: (qq, Eq, gq) => {
```

#### 43. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L637` → after: `L782-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L782-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L782-L788) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L637)

```diff
-       e: () => lT
+       e: () => Vq,
+       f: () => dq,
+       i: () => Wq,
+       j: () => Nq,
+       k: () => uq,
+       n: () => Bq,
+       q: () => aq
```

#### 44. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L639-L660` → after: `L790-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L790-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L790-L794) · [Before (L639-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L639-L660)

```diff
-     const lT = TT => {
-       let {
-         mode: kT,
-         sneakHeld: cT,
-         sneakPressed: lT,
-         sneakTogglePressed: MT,
-         descending: KT,
-         canCrouch: OT,
-         toggled: yT
-       } = TT;
-       return OT ? KT ? {
-         crouchHeld: cT,
-         toggled: !1
-       } : "hold" === kT ? {
-         crouchHeld: cT,
-         toggled: MT ? !yT : yT
- ... (6 more removed lines; see GitHub link above)
+     class Yq extends Error {
+       constructor(qq) {
+         super(`the join's code did not load: ${qq instanceof Error?qq.message:String(qq)}`, {
+           cause: qq
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === qq || void 0 === qq ? void 0 : qq.request
```

#### 45. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L662-L668` → after: `L796-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L796-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L796-L807) · [Before (L662-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L662-L668)

```diff
-     };
-     class MT {
-       constructor() {
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
-       }
-       lostToPadScreen() {
-         this.regainPending = !0
+     }
+     let lq = null,
+       Oq = null,
+       mq = null;
+     const xq = [];
+     let Aq = null;
+ 
+     function cq(qq, Eq) {
+       try {
+         qq(Eq)
+       } catch (gq) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", gq)
```

#### 46. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L670-L677` → after: `L809-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L809-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L809-L833) · [Before (L670-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L670-L677)

```diff
-       filter(TT, kT) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = kT, this.graceEndsMs = kT + 500);
-         const cT = kT < this.graceEndsMs;
-         return cT && (TT.sneakPressed || TT.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, kT + 300))), TT.sneakHeld ? cT && TT.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: TT.sneakHeld && !this.ignoringHeld,
-           sneakPressed: TT.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: TT.sneakTogglePressed && !cT
-         }
+     }
+ 
+     function uq() {
+       return Aq
+     }
+ 
+     function Bq(qq) {
+       xq.push(qq), null !== Aq && cq(qq, Aq)
+     }
+ 
+     function Wq(qq) {
+       return lq ??= Promise.all([gq.e(70), gq.e(95), gq.e(216), gq.e(75), gq.e(217), gq.e(190), gq.e(94), gq.e(235), gq.e(261), gq.e(188), gq.e(263), gq.e(200), gq.e(187), gq.e(201), gq.e(137), gq.e(86), gq.e(115), gq.e(239), gq.e(54)]).then((() => gq(42335))).then((Eq => {
+         Eq.loadAudio(qq), Aq = Eq;
+         for (const qq of xq) cq(qq, Eq);
+         return Eq
+       })).catch((qq => {
+ ... (9 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L680-L774` → after: `L836-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L836-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/218.js#L836-L840) · [Before (L680-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/218.js#L680-L774)

```diff
-   },
-   40169: (TT, kT, cT) => {
-     cT(8886)
-   },
-   40176: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => ST
-     });
-     var lT = cT(36),
-       MT = cT(8818),
-       KT = cT(8827),
-       OT = cT(8199),
-       yT = cT(8227),
-       fT = cT(8206),
-       xT = cT(40182),
-       IT = cT(40189),
- ... (79 more removed lines; see GitHub link above)
+ 
+     function aq(qq, Eq) {
+       Oq = {
+         running: qq,
+         shell: Eq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L4)

```diff
-   36790: (TT, kT, cT) => {
+   36974: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L6-L7)

```diff
-       b: () => tl,
-       ungzip: () => vl
+       c: () => Qq,
+       g: () => Pq
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L10-L32` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L28-L31) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L10-L32)

```diff
-     function lT(TT) {
-       let kT = TT.length;
-       for (; --kT >= 0;) TT[kT] = 0
-     }
-     const MT = 256,
-       KT = 286,
-       OT = 30,
-       yT = 15,
-       fT = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
-       xT = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
-       IT = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
-       AT = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
-       CT = new Array(576);
-     lT(CT);
-     const jT = new Array(60);
-     lT(jT);
- ... (7 more removed lines; see GitHub link above)
+     function Qq() {
+       const {
+         t: qq
+       } = (0, Wq.v)(), [Eq, gq] = (0, Oq.useState)(!1), [aq, Qq] = (0, Oq.useState)(null), [tq, rq] = (0, Oq.useState)(1), [vq, hq] = (0, Oq.useState)(!1), [nq, bq] = (0, Oq.useState)(!1), iq = (0, Oq.useRef)(0), Zq = (0, Oq.useRef)(!1), fq = (0, Oq.useRef)(!1), Mq = (0, Oq.useRe … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L34-L37` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L33-L36) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L34-L37)

```diff
-     function QT(TT, kT, cT, lT, MT) {
-       this.static_tree = TT, this.extra_bits = kT, this.extra_base = cT, this.elems = lT, this.max_length = MT, this.has_stree = TT && TT.length
-     }
-     let ST, DT, aT;
+       function zq() {
+         const qq = null !== aq && void 0 !== aq ? aq : "Rested Speed";
+         cq.gameBridge.send("wakeUp", nq ? qq : null), Tq.current = null, gq(!1), Qq(null), rq(1), hq(!1), bq(!1)
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L39-L153` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L38-L46) · [Before (L39-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L39-L153)

```diff
-     function FT(TT, kT) {
-       this.dyn_tree = TT, this.max_code = 0, this.stat_desc = kT
-     }
-     lT(NT);
-     const rT = TT => TT < 256 ? vT[TT] : vT[256 + (TT >>> 7)],
-       PT = (TT, kT) => {
-         TT.pending_buf[TT.pending++] = 255 & kT, TT.pending_buf[TT.pending++] = kT >>> 8 & 255
-       },
-       wT = (TT, kT, cT) => {
-         TT.bi_valid > 16 - cT ? (TT.bi_buf |= kT << TT.bi_valid & 65535, PT(TT, TT.bi_buf), TT.bi_buf = kT >> 16 - TT.bi_valid, TT.bi_valid += cT - 16) : (TT.bi_buf |= kT << TT.bi_valid & 65535, TT.bi_valid += cT)
-       },
-       mT = (TT, kT, cT) => {
-         wT(TT, cT[2 * kT], cT[2 * kT + 1])
-       },
-       bT = (TT, kT) => {
-         let cT = 0;
- ... (99 more removed lines; see GitHub link above)
+       function Sq() {
+         return !vq && (zq(), !0)
+       }
+       return (0, lq.f)("PlayerPhysicsTypeUpdate", (qq => {
+         qq !== Tq.current && (Tq.current = qq, qq === mq.t.SLEEPING ? (fq.current || (iq.current = cq.gameBridge.lookup("cameraZoom", null), fq.current = !0), Zq.current = !0, cq.gameBridge.send("setCameraZoom", 3), gq(!0), rq(function() {
+           for (const qq of cq.gameBridge.lookup("blocksStandingOn", null)) {
+             if (Nq.e.leafBeds.includes(qq)) return console.log(`Found leaf bed: ${qq}`), 1;
+             if (Nq.e.woolBeds.includes(qq)) return console.log(`Found woold bed: ${qq}`), 2;
+             if (Nq.e.strongBeds.includes(qq)) return console.log(`Found strong bed ${qq}`), 3
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L155-L200` → after: `L48-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L48-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L48-L150) · [Before (L155-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L155-L200)

```diff
-       };
-     let uT = !1;
-     const XT = (TT, kT, cT, lT) => {
-       wT(TT, 0 + (lT ? 1 : 0), 3), ((TT, kT, cT, lT) => {
-         oT(TT), lT && (PT(TT, cT), PT(TT, ~cT)), TT.pending_buf.set(TT.window.subarray(kT, kT + cT), TT.pending), TT.pending += cT
-       })(TT, kT, cT, !0)
-     };
-     var dT = (TT, kT, cT, lT) => {
-         let KT, OT, yT = 0;
-         TT.level > 0 ? (2 === TT.strm.data_type && (TT.strm.data_type = (TT => {
-           let kT, cT = 4093624447;
-           for (kT = 0; kT <= 31; kT++, cT >>>= 1)
-             if (1 & cT && 0 !== TT.dyn_ltree[2 * kT]) return 0;
-           if (0 !== TT.dyn_ltree[18] || 0 !== TT.dyn_ltree[20] || 0 !== TT.dyn_ltree[26]) return 1;
-           for (kT = 32; kT < MT; kT++)
-             if (0 !== TT.dyn_ltree[2 * kT]) return 1;
- ... (30 more removed lines; see GitHub link above)
+           return 1
+         }())) : (fq.current = !1, gq(!1), Qq(null), rq(1)))
+       })), (0, Oq.useEffect)((() => () => {
+         (0, Aq.j)(Pq)
+       }), []), (0, Oq.useEffect)((() => {
+         Eq ? (0, Aq.m)(Pq) : ((0, Aq.j)(Pq), Zq.current && (cq.gameBridge.send("setCameraZoom", iq.current), Zq.current = !1))
+       }), [Eq]), (0, Hq.w)("overlay", Mq, Sq, Eq), (0, oq.jsx)(Yq.c, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: Eq,
+         timeout: 300,
+         nodeRef: Mq,
+         unmountOnExit: !0,
+         children: (0, oq.jsx)("div", {
+           ref: Mq,
+           onClick: qq => {
+ ... (87 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L202-L220` → after: `L152-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L152-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L152-L189) · [Before (L202-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L202-L220)

```diff
-         _tr_stored_block: XT,
-         _tr_flush_block: dT,
-         _tr_tally: (TT, kT, cT) => (TT.pending_buf[TT.d_buf + 2 * TT.last_lit] = kT >>> 8 & 255, TT.pending_buf[TT.d_buf + 2 * TT.last_lit + 1] = 255 & kT, TT.pending_buf[TT.l_buf + TT.last_lit] = 255 & cT, TT.last_lit++, 0 === kT ? TT.dyn_ltree[2 * cT]++ : (TT.matches++, kT--, T … [truncated]
-         _tr_align: TT => {
-           wT(TT, 2, 3), mT(TT, 256, CT), (TT => {
-             16 === TT.bi_valid ? (PT(TT, TT.bi_buf), TT.bi_buf = 0, TT.bi_valid = 0) : TT.bi_valid >= 8 && (TT.pending_buf[TT.pending++] = 255 & TT.bi_buf, TT.bi_buf >>= 8, TT.bi_valid -= 8)
-           })(TT)
-         }
-       };
-     var RT = (TT, kT, cT, lT) => {
-       let MT = 65535 & TT,
-         KT = TT >>> 16 & 65535,
-         OT = 0;
-       for (; 0 !== cT;) {
-         OT = cT > 2e3 ? 2e3 : cT, cT -= OT;
-         do {
- ... (3 more removed lines; see GitHub link above)
+         children: Eq
+       }) : (0, oq.jsx)(Bq.i, {
+         onClick: qq => {
+           lq(gq), qq.stopPropagation()
+         },
+         children: Eq
+       })
+     }))
+   },
+   40309: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => wq
+     });
+     var Yq = gq(24),
+       lq = gq(31),
+       Oq = gq(4135),
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L222-L229` → after: `L191-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L191-L195) · [Before (L222-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L222-L229)

```diff
-       return MT | KT << 16
-     };
-     const gT = new Uint32Array((() => {
-       let TT, kT = [];
-       for (var cT = 0; cT < 256; cT++) {
-         TT = cT;
-         for (var lT = 0; lT < 8; lT++) TT = 1 & TT ? 3988292384 ^ TT >>> 1 : TT >>> 1;
-         kT[cT] = TT
+       update(qq, Eq) {
+         return qq ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Eq, Eq - this.lostAtMs >= 250)
+       }
+       reset() {
+         this.lostAtMs = null
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L417-L427` → after: `L198-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L198-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L198-L217) · [Before (L417-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L417-L427)

```diff
-     const uk = [new Zk(0, 0, 0, 0, ((TT, kT) => {
-       let cT = 65535;
-       for (cT > TT.pending_buf_size - 5 && (cT = TT.pending_buf_size - 5);;) {
-         if (TT.lookahead <= 1) {
-           if (Gk(TT), 0 === TT.lookahead && kT === sT) return 1;
-           if (0 === TT.lookahead) break
-         }
-         TT.strstart += TT.lookahead, TT.lookahead = 0;
-         const lT = TT.block_start + cT;
-         if ((0 === TT.strstart || TT.strstart >= lT) && (TT.lookahead = TT.strstart - lT, TT.strstart = lT, bk(TT, !1), 0 === TT.strm.avail_out)) return 1;
-         if (TT.strstart - TT.block_start >= TT.w_size - Qk && (bk(TT, !1), 0 === TT.strm.avail_out)) return 1
+     class hq {
+       constructor(qq, Eq) {
+         this.press = qq, this.release = Eq, this.downAtMs = null, this.token = null, this.latched = !1
+       }
+       update(qq, Eq, gq, Yq) {
+         if (qq && null === this.downAtMs) return this.downAtMs = gq, this.latched = Yq, void(this.token = this.press());
+         null !== this.downAtMs && (this.latched ? qq && this.end() : !Eq && gq - this.downAtMs >= 40 && this.end())
+       }
+       isLatched() {
+         return null !== this.downAtMs && this.latched
+       }
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L435-L439` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L220-L222) · [Before (L435-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L435-L439)

```diff
-     const dk = TT => {
-         if (!TT || !TT.state) return Fk(TT, Ok);
-         TT.total_in = TT.total_out = 0, TT.data_type = tk;
-         const kT = TT.state;
-         return kT.pending = 0, kT.pending_out = 0, kT.wrap < 0 && (kT.wrap = -kT.wrap), kT.status = kT.wrap ? 42 : Dk, TT.adler = 2 === kT.wrap ? 0 : 1, kT.last_flush = sT, WT(kT), Mk
+     const nq = {
+         kind: "specialAction",
+         action: "SpecialAction2"
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L442-L484` → after: `L225-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L225-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L225-L240) · [Before (L442-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L442-L484)

```diff
-         const kT = dk(TT);
-         var cT;
-         return kT === Mk && ((cT = TT.state).window_size = 2 * cT.w_size, Pk(cT.head), cT.max_lazy_match = uk[cT.level].max_lazy, cT.good_match = uk[cT.level].good_length, cT.nice_match = uk[cT.level].nice_length, cT.max_chain_length = uk[cT.level].max_chain, cT.strstart = 0, cT. … [truncated]
-       },
-       Rk = (TT, kT, cT, lT, MT, KT) => {
-         if (!TT) return Ok;
-         let OT = 1;
-         if (kT === xk && (kT = 6), lT < 0 ? (OT = 0, lT = -lT) : lT > 15 && (OT = 2, lT -= 16), MT < 1 || MT > 9 || cT !== hk || lT < 8 || lT > 15 || kT < 0 || kT > 9 || KT < 0 || KT > jk) return Fk(TT, Ok);
-         8 === lT && (lT = 9);
-         const yT = new Xk;
-         return TT.state = yT, yT.strm = TT, yT.wrap = OT, yT.gzhead = null, yT.w_bits = lT, yT.w_size = 1 << yT.w_bits, yT.w_mask = yT.w_size - 1, yT.hash_bits = MT + 7, yT.hash_size = 1 << yT.hash_bits, yT.hash_mask = yT.hash_size - 1, yT.hash_shift = ~~((yT.hash_bits + 3 - 1) / … [truncated]
-       };
-     var gk = {
-       deflateInit: (TT, kT) => Rk(TT, kT, hk, 15, 8, vk),
-       deflateInit2: Rk,
-       deflateReset: Lk,
- ... (27 more removed lines; see GitHub link above)
+         let Eq = null;
+         const gq = new rq.d,
+           Yq = () => {
+             Eq && (((qq, Eq, gq) => {
+               switch (gq.kind) {
+                 case "reload":
+                   return void Eq.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void Eq.specialActionUp(gq.action);
+                 case "customButton":
+                   return void Pq.gameBridge.send("pressCustomButton", {
+                     id: gq.id,
+                     down: !1
+                   });
+                 case "touchButton":
+                   qq.pressTouchButton(!1)
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L486-L496` → after: `L242-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L242-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L242-L262) · [Before (L486-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L486-L496)

```diff
-               lT = MT.gzindex < MT.gzhead.name.length ? 255 & MT.gzhead.name.charCodeAt(MT.gzindex++) : 0, zk(MT, lT)
-             } while (0 !== lT);
-             MT.gzhead.hcrc && MT.pending > cT && (TT.adler = UT(TT.adler, MT.pending_buf, MT.pending - cT, cT)), 0 === lT && (MT.gzindex = 0, MT.status = 91)
-           } else MT.status = 91;
-         if (91 === MT.status)
-           if (MT.gzhead.comment) {
-             cT = MT.pending;
-             do {
-               if (MT.pending === MT.pending_buf_size && (MT.gzhead.hcrc && MT.pending > cT && (TT.adler = UT(TT.adler, MT.pending_buf, MT.pending - cT, cT)), mk(TT), cT = MT.pending, MT.pending === MT.pending_buf_size)) {
-                 lT = 1;
-                 break
+             })(qq, Eq.bodies, Eq.action), Eq = null)
+           },
+           Oq = (gq, lq, Oq, mq) => {
+             Yq(), Eq = {
+               action: lq,
+               bodies: gq,
+               heldBy: Oq,
+               atMs: mq
+             }, ((qq, Eq, gq) => {
+               switch (gq.kind) {
+                 case "reload":
+                   return Eq.reloadGun(), void Eq.specialActionDown("SpecialAction1");
+                 case "specialAction":
+                   return void Eq.specialActionDown(gq.action);
+                 case "customButton":
+                   return void Pq.gameBridge.send("pressCustomButton", {
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L498-L577` → after: `L264-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L264-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L264-L285) · [Before (L498-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L498-L577)

```diff
-               lT = MT.gzindex < MT.gzhead.comment.length ? 255 & MT.gzhead.comment.charCodeAt(MT.gzindex++) : 0, zk(MT, lT)
-             } while (0 !== lT);
-             MT.gzhead.hcrc && MT.pending > cT && (TT.adler = UT(TT.adler, MT.pending_buf, MT.pending - cT, cT)), 0 === lT && (MT.status = Sk)
-           } else MT.status = Sk;
-         if (MT.status === Sk && (MT.gzhead.hcrc ? (MT.pending + 2 > MT.pending_buf_size && mk(TT), MT.pending + 2 <= MT.pending_buf_size && (zk(MT, 255 & TT.adler), zk(MT, TT.adler >> 8 & 255), TT.adler = 0, MT.status = Dk)) : MT.status = Dk), 0 !== MT.pending) {
-           if (mk(TT), 0 === TT.avail_out) return MT.last_flush = -1, Mk
-         } else if (0 === TT.avail_in && rk(kT) <= rk(KT) && kT !== ck) return Fk(TT, fk);
-         if (MT.status === ak && 0 !== TT.avail_in) return Fk(TT, fk);
-         if (0 !== TT.avail_in || 0 !== MT.lookahead || kT !== sT && MT.status !== ak) {
-           let cT = MT.strategy === Ak ? ((TT, kT) => {
-             let cT;
-             for (;;) {
-               if (0 === TT.lookahead && (Gk(TT), 0 === TT.lookahead)) {
-                 if (kT === sT) return 1;
-                 break
-               }
- ... (64 more removed lines; see GitHub link above)
+             })(qq, gq, lq)
+           };
+         return {
+           update: (mq, xq, cq, uq) => {
+             var Wq;
+             const Nq = (0, yq.m)(qq.contextActionInputs()),
+               aq = null !== (Wq = Nq[0]) && void 0 !== Wq ? Wq : nq;
+             (0, tq.b)((0, yq.g)(aq) ? aq : null);
+             const Vq = (0, yq.c)(Nq);
+             (0, tq.e)(Vq);
+             const dq = (0, Aq.i)("actionButton");
+             if (Vq) {
+               const qq = gq.update(xq.wasPressed(dq), xq.isHeld(dq), cq, uq);
+               "tap" === qq ? Oq(mq, aq, [dq], cq) : "hold" === qq && (Bq.c.consumeButton(dq), lq.i.TV(oq.m, Nq))
+             } else gq.release(), xq.wasPressed(dq) && Oq(mq, aq, [dq], cq);
+             Eq && cq - Eq.atMs >= 40 && !Eq.heldBy.some((qq => (0, Qq.J)(xq.frame.values, qq))) && Yq()
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L592-L625` → after: `L289-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L289-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L289-L308) · [Before (L592-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L592-L625)

```diff
-     let Wk = !0;
-     try {
-       String.fromCharCode.apply(null, new Uint8Array(1))
-     } catch (hl) {
-       Wk = !1
-     }
-     const nk = new Uint8Array(256);
-     for (let Nl = 0; Nl < 256; Nl++) nk[Nl] = Nl >= 252 ? 6 : Nl >= 248 ? 5 : Nl >= 240 ? 4 : Nl >= 224 ? 3 : Nl >= 192 ? 2 : 1;
-     nk[254] = nk[254] = 1;
-     var pk = TT => {
-         if ("function" === typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(TT);
-         let kT, cT, lT, MT, KT, OT = TT.length,
-           yT = 0;
-         for (MT = 0; MT < OT; MT++) cT = TT.charCodeAt(MT), 55296 === (64512 & cT) && MT + 1 < OT && (lT = TT.charCodeAt(MT + 1), 56320 === (64512 & lT) && (cT = 65536 + (cT - 55296 << 10) + (lT - 56320), MT++)), yT += cT < 128 ? 1 : cT < 2048 ? 2 : cT < 65536 ? 3 : 4;
-         for (kT = new Uint8Array(yT), KT = 0, MT = 0; KT < yT; MT++) cT = TT.charCodeAt(MT), 55296 === (64512 & cT) && MT + 1 < OT && (lT = TT.charCodeAt(MT + 1), 56320 === (64512 & lT) && (cT = 65536 + (cT - 55296 << 10) + (lT - 56320), MT++)), cT < 128 ? kT[KT++] = cT : cT < 20 … [truncated]
-         return kT
- ... (18 more removed lines; see GitHub link above)
+     var iq = gq(8057);
+     var Zq = gq(40304),
+       fq = gq(8704),
+       Mq = gq(8110),
+       Tq = gq(8823);
+     var zq = gq(40301),
+       Sq = gq(8826),
+       pq = gq(40314),
+       Gq = gq(8803),
+       Lq = gq(8709),
+       Jq = gq(8712),
+       kq = gq(8718),
+       Rq = gq(8599);
+     const Uq = () => Rq.d[(0, Wq.i)().tapHoldTime].wheelMs,
+       Fq = () => ((0, uq.c)(), new Event("controllerMenuKey")),
+       sq = (qq, Eq, gq) => new hq((() => {
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L627-L707` → after: `L310-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L310-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L310-L319) · [Before (L627-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L627-L707)

```diff
-         return ((TT, kT) => {
-           if (kT < 65534 && TT.subarray && Wk) return String.fromCharCode.apply(null, TT.length === kT ? TT : TT.subarray(0, kT));
-           let cT = "";
-           for (let lT = 0; lT < kT; lT++) cT += String.fromCharCode(TT[lT]);
-           return cT
-         })(KT, MT)
-       },
-       qk = (TT, kT) => {
-         (kT = kT || TT.length) > TT.length && (kT = TT.length);
-         let cT = kT - 1;
-         for (; cT >= 0 && 128 === (192 & TT[cT]);) cT--;
-         return cT < 0 || 0 === cT ? kT : cT + nk[TT[cT]] > kT ? cT : kT
-       };
-     var sk = function() {
-       this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.vI = "", this.state = null, this.data_type = 2, this.adler = 0
-     };
- ... (65 more removed lines; see GitHub link above)
+       }), (qq => {
+         let {
+           bodies: Eq,
+           press: Yq
+         } = qq;
+         gq(Eq, Yq)
+       })),
+       Xq = {
+         running: !1,
+         latchedAtMs: -1 / 0
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L709-L787` → after: `L321-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L321-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L321-L444) · [Before (L709-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L709-L787)

```diff
-       constants: BT
-     };
-     var jc = function(TT, kT) {
-       let cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT;
-       const mT = TT.state;
-       cT = TT.next_in, PT = TT.input, lT = cT + (TT.avail_in - 5), MT = TT.next_out, wT = TT.output, KT = MT - (kT - TT.avail_out), OT = MT + (TT.avail_out - 257), yT = mT.dmax, fT = mT.wsize, xT = mT.whave, IT = mT.wnext, AT = mT.window, CT = mT.hold, jT = mT.bits, vT = mT.lenco … [truncated]
-       TT: do {
-         jT < 15 && (CT += PT[cT++] << jT, jT += 8, CT += PT[cT++] << jT, jT += 8), QT = vT[CT & hT];
-         kT: for (;;) {
-           if (ST = QT >>> 24, CT >>>= ST, jT -= ST, ST = QT >>> 16 & 255, 0 === ST) wT[MT++] = 65535 & QT;
-           else {
-             if (!(16 & ST)) {
-               if (0 === (64 & ST)) {
-                 QT = vT[(65535 & QT) + (CT & (1 << ST) - 1)];
-                 continue kT
-               }
- ... (63 more removed lines; see GitHub link above)
+       wq = qq => {
+         const Eq = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+         };
+         let gq = Xq;
+         const uq = new pq.b,
+           Pq = lq.i.subscribe("appManagerUpdated|activeInputDevice", (Eq => {
+             qq.deviceChanged(Eq)
+           }));
+ ... (108 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L789-L839` → after: `L446-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L446-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L446-L486) · [Before (L789-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L789-L839)

```diff
-               break
-             }
-           }
-           break
-         }
-       } while (cT < lT && MT < OT);
-       DT = jT >> 3, cT -= DT, jT -= DT << 3, CT &= (1 << jT) - 1, TT.next_in = cT, TT.next_out = MT, TT.avail_in = cT < lT ? lT - cT + 5 : 5 - (cT - lT), TT.avail_out = MT < OT ? OT - MT + 257 : 257 - (MT - OT), mT.hold = CT, mT.bits = jT
-     };
-     const vc = 15,
-       tc = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
-       hc = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
-       Nc = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
-       Qc = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
-     var Sc = (TT, kT, cT, lT, MT, KT, OT, yT) => {
-       const fT = yT.bits;
-       let xT, IT, AT, CT, jT, vT, tT = 0,
- ... (35 more removed lines; see GitHub link above)
+               null !== yq && (!Eq.isHeld(lq) || qq.selectedSlotEmpty() ? hq() : Yq - yq >= tq && (hq(), gq.dropItem(!0)))
+             })(Eq, Yq, gq), eq.update(Yq, Eq, gq, Uq()), NE(Eq, gq)
+           },
+           VE = Bq.c.register({
+             name: "gameplay",
+             isActive: () => {
+               const Eq = gE && "keyboardMouse" === Yq.b.get("activeInputDevice") && !(0, Nq.E)(),
+                 gq = (0, Nq.k)() ? [Zq.b] : [];
+               return ((0, Nq.k)() || Eq) && (0, Vq.d)(gq) && qq.hasPlayer()
+             },
+             onFrame: qq => {
+               const Eq = performance.now(),
+                 gq = (0, Wq.i)(),
+                 Yq = (0, zq.u)(qq, (0, zq.l)(gq, (0, Aq.i)("pause"), (0, Sq.b)().isSupported())),
+                 lq = (0, zq.i)(Yq, gq.swapSticks);
+               return (0, Nq.k)() ? (YE = !1, (0, Vq.d)() ? (lE = !1, Kq.update(lq.look, gq, Yq.isHeld((0, Aq.i)("use"))), BE(Yq, lq.move, Eq), void aE(Yq, Eq)) : (lE || (lE = !0, uq.lostToPadScreen(), uE()), void WE(Yq, Eq))) : (YE || (cE(), YE = !0), void BE(Yq, lq.move, Eq))
+ ... (25 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L841-L844` → after: `L488-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L488-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L488-L519) · [Before (L841-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L841-L844)

```diff
-         if (tT > ST && (PT & CT) !== AT) {
-           for (0 === aT && (aT = ST), jT += NT, DT = tT - aT, FT = 1 << DT; DT + aT < QT && (FT -= bT[DT + aT], !(FT <= 0));) DT++, FT <<= 1;
-           if (rT += 1 << DT, 1 === TT && rT > 852 || 2 === TT && rT > 592) return 1;
-           AT = PT & CT, MT[AT] = ST << 24 | DT << 16 | jT - KT
+       }
+   },
+   40304: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => aq,
+       c: () => dq,
+       d: () => Nq
+     });
+     var Yq = gq(1274),
+       lq = gq(4135),
+       Oq = gq(8750),
+       mq = gq(36974),
+       xq = gq(1702),
+       Aq = gq(1174),
+       cq = gq(8123),
+       uq = gq(8662),
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L847-L864` → after: `L522-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L522-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L522-L549) · [Before (L847-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L847-L864)

```diff
-       return 0 !== PT && (MT[jT + PT] = tT - aT << 24 | 64 << 16), yT.bits = ST, 0
-     };
-     const {
-       Z_FINISH: Dc,
-       Z_BLOCK: ac,
-       Z_TREES: Fc,
-       Z_OK: rc,
-       Z_STREAM_END: Pc,
-       Z_NEED_DICT: wc,
-       Z_STREAM_ERROR: mc,
-       Z_DATA_ERROR: bc,
-       Z_MEM_ERROR: zc,
-       Z_BUF_ERROR: Jc,
-       Z_DEFLATED: oc
-     } = BT, Hc = 12, ec = 30, Gc = TT => (TT >>> 24 & 255) + (TT >>> 8 & 65280) + ((65280 & TT) << 8) + ((255 & TT) << 24);
- 
- ... (2 more removed lines; see GitHub link above)
+   },
+   40301: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lq,
+       h: () => Aq,
+       i: () => xq,
+       l: () => uq,
+       m: () => mq,
+       o: () => Oq,
+       s: () => cq,
+       u: () => Bq
+     });
+     var Yq = gq(8061);
+     class lq {
+       constructor() {
+         this.fullTiltSinceMs = null
+ ... (12 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L866-L874` → after: `L551-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L551-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L551-L571) · [Before (L866-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L866-L874)

```diff
-     const Ec = TT => {
-         if (!TT || !TT.state) return mc;
-         const kT = TT.state;
-         return TT.total_in = TT.total_out = kT.total = 0, TT.vI = "", kT.wrap && (TT.adler = 1 & kT.wrap), kT.mode = 1, kT.last = 0, kT.havedict = 0, kT.dmax = 32768, kT.head = null, kT.hold = 0, kT.bits = 0, kT.lencode = kT.lendyn = new Int32Array(852), kT.distcode = kT.distdyn  … [truncated]
-       },
-       Zc = TT => {
-         if (!TT || !TT.state) return mc;
-         const kT = TT.state;
-         return kT.wsize = 0, kT.whave = 0, kT.wnext = 0, Ec(TT)
+     const Oq = (qq, Eq, gq, lq, Oq) => {
+         let mq = 1;
+         return "boost" === gq.lookCurve ? mq = qq.update(Eq, gq, Oq) : qq.reset(),
+           function(qq, Eq) {
+             let {
+               yawBoost: gq = 1,
+               aiming: lq = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const Oq = (0, Yq.f)((0, Yq.j)(qq, Eq.lookDeadzone), Eq.lookCurve),
+               mq = 220 * Math.PI / 180,
+               xq = lq ? Eq.aimLookSensitivity / 100 : 1,
+               Aq = Eq.lookSensitivityX / 100 * xq,
+               cq = Eq.lookSensitivityY / 100 * xq;
+             return {
+               yawRadPerSec: Oq.x * mq * Aq * gq * (Eq.invertLookX ? -1 : 1),
+               pitchRadPerSec: Oq.y * mq * .7 * cq * (Eq.invertLookY ? -1 : 1)
+ ... (5 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L877-L880` → after: `L574-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L574-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L574-L585) · [Before (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L877-L880)

```diff
-         let cT;
-         if (!TT || !TT.state) return mc;
-         const lT = TT.state;
-         return kT < 0 ? (cT = 0, kT = -kT) : (cT = 1 + (kT >> 4), kT < 48 && (kT &= 15)), kT && (kT < 8 || kT > 15) ? mc : (null !== lT.window && lT.wbits !== kT && (lT.window = null), lT.wrap = cT, lT.wbits = kT, Zc(TT))
+         const gq = Math.max(0, Math.min(250, Eq)) / 1e3;
+         return {
+           VJ: qq.yawRadPerSec * gq,
+           dJ: qq.pitchRadPerSec * gq
+         }
+       },
+       xq = (qq, Eq) => Eq ? {
+         move: qq.rightStick,
+         look: qq.leftStick
+       } : {
+         move: qq.leftStick,
+         look: qq.rightStick
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L883-L903` → after: `L588-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L588-L595) · [Before (L883-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L883-L903)

```diff
-         if (!TT) return mc;
-         const cT = new Vc;
-         TT.state = cT, cT.window = null;
-         const lT = uc(TT, kT);
-         return lT !== rc && (TT.state = null), lT
-       };
-     let dc, Lc, Rc = !0;
-     const gc = TT => {
-         if (Rc) {
-           dc = new Int32Array(512), Lc = new Int32Array(32);
-           let kT = 0;
-           for (; kT < 144;) TT.lens[kT++] = 8;
-           for (; kT < 256;) TT.lens[kT++] = 9;
-           for (; kT < 280;) TT.lens[kT++] = 7;
-           for (; kT < 288;) TT.lens[kT++] = 8;
-           for (Sc(1, TT.lens, 0, 288, dc, 0, TT.work, {
- ... (5 more removed lines; see GitHub link above)
+         const gq = (0, Yq.j)(qq, Eq),
+           lq = Math.min(1, Math.hypot(gq.x, gq.y));
+         return {
+           magnitude: lq,
+           speed: Math.min(1, lq / .8),
+           headingOffset: 0 === lq ? 0 : Math.atan2(gq.x, -gq.y),
+           x: gq.x,
+           y: gq.y
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L907-L1290` → after: `L598-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L598-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L598-L622) · [Before (L907-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L907-L1290)

```diff
-       Uc = (TT, kT, cT, lT) => {
-         let MT;
-         const KT = TT.state;
-         return null === KT.window && (KT.wsize = 1 << KT.wbits, KT.wnext = 0, KT.whave = 0, KT.window = new Uint8Array(KT.wsize)), lT >= KT.wsize ? (KT.window.set(kT.subarray(cT - KT.wsize, cT), 0), KT.wnext = 0, KT.whave = KT.wsize) : (MT = KT.wsize - KT.wnext, MT > lT && (MT =  … [truncated]
-       };
-     var Yc = {
-       inflateReset: Zc,
-       inflateReset2: uc,
-       inflateResetKeep: Ec,
-       inflateInit: TT => Xc(TT, 15),
-       inflateInit2: Xc,
-       inflate: (TT, kT) => {
-         let cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT = 0;
-         const wT = new Uint8Array(4);
-         let mT, bT;
-         const zT = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
- ... (368 more removed lines; see GitHub link above)
+       cq = (qq, Eq) => {
+         let {
+           sprintPressed: gq,
+           magnitude: Yq,
+           autoSprint: lq,
+           nowMs: Oq
+         } = Eq;
+         const mq = gq ? Oq : qq.latchedAtMs,
+           xq = (qq => {
+             let {
+               running: Eq,
+               magnitude: gq,
+               sprintPressed: Yq,
+               autoSprint: lq
+             } = qq;
+             return !(gq < .5) && (!!Yq || !!(lq && gq >= .9) || Eq)
+ ... (9 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1299-L1323` → after: `L625-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L625-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L625-L647) · [Before (L1299-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L1299-L1323)

```diff
-       inflateGetHeader: (TT, kT) => {
-         if (!TT || !TT.state) return mc;
-         const cT = TT.state;
-         return 0 === (2 & cT.wrap) ? mc : (cT.head = kT, kT.done = !1, rc)
-       },
-       inflateSetDictionary: (TT, kT) => {
-         const cT = kT.length;
-         let lT, MT, KT;
-         return TT && TT.state ? (lT = TT.state, 0 !== lT.wrap && 11 !== lT.mode ? mc : 11 === lT.mode && (MT = 1, MT = RT(MT, kT, cT, 0), MT !== lT.check) ? bc : (KT = Uc(TT, kT, cT, cT), KT ? (lT.mode = 31, zc) : (lT.havedict = 1, rc))) : mc
-       },
-       inflateInfo: "pako inflate (from Nodeca project)"
-     };
-     var Bc = function() {
-       this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
-     };
-     const Wc = Object.prototype.toString,
- ... (9 more removed lines; see GitHub link above)
+       uq = (qq, Eq, gq) => gq && qq.gyroAiming && "button" === qq.gyroActivation && qq.gyroButton !== Eq ? qq.gyroButton : null,
+       Bq = (qq, Eq) => Eq ? {
+         ...qq,
+         isHeld: gq => gq !== Eq && qq.isHeld(gq),
+         wasPressed: gq => gq !== Eq && qq.wasPressed(gq),
+         wasReleased: gq => gq !== Eq && qq.wasReleased(gq),
+         value: gq => gq === Eq ? 0 : qq.value(gq)
+       } : qq
+   },
+   40314: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+       c: () => Yq
+     });
+     const Yq = qq => {
+       let {
+ ... (7 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1325-L1342` → after: `L649-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L649-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L649-L678) · [Before (L1325-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L1325-L1342)

```diff
- 
-     function ll(TT) {
-       this.options = Yk({
-         vv: 65536,
-         windowBits: 15,
-         to: ""
-       }, TT || {});
-       const kT = this.options;
-       kT.raw && kT.windowBits >= 0 && kT.windowBits < 16 && (kT.windowBits = -kT.windowBits, 0 === kT.windowBits && (kT.windowBits = -15)), !(kT.windowBits >= 0 && kT.windowBits < 16) || TT && TT.windowBits || (kT.windowBits += 32), kT.windowBits > 15 && kT.windowBits < 48 && 0 = … [truncated]
-       let cT = Yc.inflateInit2(this.strm, kT.windowBits);
-       if (cT !== ic) throw new Error(YT[cT]);
-       if (this.header = new Bc, Yc.inflateGetHeader(this.strm, this.header), kT.dictionary && ("string" === typeof kT.dictionary ? kT.dictionary = pk(kT.dictionary) : "[object ArrayBuffer]" === Wc.call(kT.dictionary) && (kT.dictionary = new Uint8Array(kT.dictionary)), kT.raw && ( … [truncated]
-     }
- 
-     function Ml(TT, kT) {
-       const cT = new ll(kT);
- ... (2 more removed lines; see GitHub link above)
+       return mq ? Oq ? {
+         crouchHeld: gq,
+         toggled: !1
+       } : "hold" === Eq ? {
+         crouchHeld: gq,
+         toggled: lq ? !xq : xq
+       } : {
+         crouchHeld: !1,
+         toggled: Yq || lq ? !xq : xq
+       } : {
+         crouchHeld: !1,
+         toggled: !1
+       }
+     };
+     class lq {
+       constructor() {
+ ... (14 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1344-L1357` → after: `L680-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L680-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L680-L710) · [Before (L1344-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L1344-L1357)

```diff
-     ll.prototype.push = function(TT, kT) {
-       const cT = this.strm,
-         lT = this.options.vv,
-         MT = this.options.dictionary;
-       let KT, OT, yT;
-       if (this.ended) return !1;
-       for (OT = kT === ~~kT ? kT : !0 === kT ? pc : nc, "[object ArrayBuffer]" === Wc.call(TT) ? cT.input = new Uint8Array(TT) : cT.input = TT, cT.next_in = 0, cT.avail_in = cT.input.length;;) {
-         for (0 === cT.avail_out && (cT.output = new Uint8Array(lT), cT.next_out = 0, cT.avail_out = lT), KT = Yc.inflate(cT, OT), KT === sc && MT && (KT = Yc.inflateSetDictionary(cT, MT), KT === ic ? KT = Yc.inflate(cT, OT) : KT === kl && (KT = sc)); cT.avail_in > 0 && KT === qc  … [truncated]
-         switch (KT) {
-           case Tl:
-           case kl:
-           case sc:
-           case cl:
-             return this.onEnd(KT), this.ended = !0, !1
+   },
+   40293: (qq, Eq, gq) => {
+     gq(8826)
+   },
+   40295: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => oq
+     });
+     var Yq = gq(31),
+       lq = gq(8750),
+       Oq = gq(8764),
+       mq = gq(8073),
+       xq = gq(8118),
+       Aq = gq(8090),
+       cq = gq(40301),
+       uq = gq(40304),
+ ... (15 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1359-L1368` → after: `L712-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L712-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L712-L735) · [Before (L1359-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L1359-L1368)

```diff
-         if (yT = cT.avail_out, cT.next_out && (0 === cT.avail_out || KT === qc))
-           if ("string" === this.options.to) {
-             let TT = qk(cT.output, cT.next_out),
-               kT = cT.next_out - TT,
-               MT = ik(cT.output, TT);
-             cT.next_out = kT, cT.avail_out = lT - kT, kT && cT.output.set(cT.output.subarray(TT, TT + kT), 0), this.onData(MT)
-           } else this.onData(cT.output.length === cT.next_out ? cT.output : cT.output.subarray(0, cT.next_out));
-         if (KT !== ic || 0 !== yT) {
-           if (KT === qc) return KT = Yc.inflateEnd(this.strm), this.onEnd(KT), this.ended = !0, !0;
-           if (0 === cT.avail_in) break
+       }, {
+         isOpen: Nq.d,
+         openButton: () => (0, mq.i)("chat"),
+         aim: qq => {
+           Yq.i.TV(Nq.g, qq)
+         },
+         commit: qq => {
+           Yq.i.TV(Nq.i, qq)
+         },
+         close: () => {
+           Yq.i.TV(Nq.h)
+         },
+         keptOpenBy: [uq.b]
+       }, {
+         isOpen: aq.r,
+         openButton: () => (0, mq.i)("actionButton"),
+ ... (8 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1370-L1407` → after: `L737-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L737-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/219.js#L737-L774) · [Before (L1370-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/219.js#L1370-L1407)

```diff
-       }
-       return !0
-     }, ll.prototype.onData = function(TT) {
-       this.chunks.push(TT)
-     }, ll.prototype.onEnd = function(TT) {
-       TT === ic && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Bk(this.chunks)), this.chunks = [], this.err = TT, this.vI = this.strm.vI
-     };
-     var Kl = {
-       Inflate: ll,
-       inflate: Ml,
-       inflateRaw: function(TT, kT) {
-         return (kT = kT || {}).raw = !0, Ml(TT, kT)
-       },
-       ungzip: Ml,
-       constants: BT
-     };
- ... (22 more removed lines; see GitHub link above)
+       }],
+       dq = () => {
+         var qq;
+         return null !== (qq = Vq.find((qq => qq.isOpen()))) && void 0 !== qq ? qq : null
+       },
+       jq = qq => (0, mq.G)(qq.openButton()),
+       Hq = (qq, Eq) => !(0, Wq.J)(qq.frame.values, Eq),
+       oq = () => {
+         let qq = null,
+           Eq = !1,
+           gq = !1;
+         return xq.c.register({
+           name: "wheel",
+           isActive: () => null !== dq(),
+           peek: () => {
+             const qq = dq();
+ ... (22 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (114 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   38304: (TT, kT, cT) => {
+   38455: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L6)

```diff
-       d: () => vT
+       c: () => aq
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L8-L9)

```diff
-     var lT = cT(218),
-       MT = cT(37499);
+     var Yq = gq(190),
+       lq = gq(37656);
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L23-L24)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L37-L38)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L42-L43` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L42-L43) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L42-L43)

```diff
-           width: lT.f.Ow,
-           height: lT.f.Iw
+           width: Yq.c.ZH,
+           height: Yq.c.UH
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L46-L47)

```diff
-           width: lT.f.Ow + .4,
-           height: lT.f.Iw + .6
+           width: Yq.c.ZH + .4,
+           height: Yq.c.UH + .6
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L49-L52` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L49-L52) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L49-L52)

```diff
-         eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
-         rideHeight: lT.f.Iw - .3,
-         zI: .5,
-         ETT: !1
+         eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
+         rideHeight: Yq.c.UH - .3,
+         Am: .5,
+         wEq: !1
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L65-L66)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L79-L80)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 11. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L93-L94)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 12. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L107-L108)

```diff
-         zI: .5,
-         ETT: !1
+         Am: .5,
+         wEq: !1
```

#### 13. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L114-L115` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L114-L115) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L114-L115)

```diff
-             width: lT.f.Ow,
-             height: lT.f.Iw
+             width: Yq.c.ZH,
+             height: Yq.c.UH
```

#### 14. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L118-L119)

```diff
-             width: lT.f.Ow + .4,
-             height: lT.f.Iw + .6
+             width: Yq.c.ZH + .4,
+             height: Yq.c.UH + .6
```

#### 15. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L121-L124)

```diff
-           eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
-           rideHeight: lT.f.Iw - .1,
-           zI: MT.d.zI,
-           ETT: !0
+           eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
+           rideHeight: Yq.c.UH - .1,
+           Am: lq.g.Am,
+           wEq: !0
```

#### 16. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L140-L141)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 17. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L154-L155)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 18. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L168-L169)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 19. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L182-L183)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 20. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L197-L198)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 21. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L211-L212)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 22. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L228-L229)

```diff
-             width: lT.f.Ow,
-             height: lT.f.Iw
+             width: Yq.c.ZH,
+             height: Yq.c.UH
```

#### 23. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L232)

```diff
-             width: lT.f.Ow + .4,
+             width: Yq.c.ZH + .4,
```

#### 24. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L237-L238)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 25. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L253-L254)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 26. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L268-L269)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 27. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L283-L284)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 28. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L304-L305)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 29. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L319-L320` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L319-L320) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L319-L320)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 30. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L333-L334)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 31. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L338-L339)

```diff
-             width: lT.f.Ow,
-             height: lT.f.Iw
+             width: Yq.c.ZH,
+             height: Yq.c.UH
```

#### 32. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L342-L343)

```diff
-             width: lT.f.Ow + .4,
-             height: lT.f.Iw + .6
+             width: Yq.c.ZH + .4,
+             height: Yq.c.UH + .6
```

#### 33. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L345-L348` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L345-L348) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L345-L348)

```diff
-           eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
-           rideHeight: lT.f.Iw - .1,
-           zI: .5,
-           ETT: !1
+           eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
+           rideHeight: Yq.c.UH - .1,
+           Am: .5,
+           wEq: !1
```

#### 34. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L361-L362)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 35. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L366-L367)

```diff
-             width: lT.f.Ow,
-             height: lT.f.Iw
+             width: Yq.c.ZH,
+             height: Yq.c.UH
```

#### 36. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L370-L371)

```diff
-             width: lT.f.Ow + .4,
-             height: lT.f.Iw + .6
+             width: Yq.c.ZH + .4,
+             height: Yq.c.UH + .6
```

#### 37. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L373-L376` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L373-L376) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L373-L376)

```diff
-           eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
-           rideHeight: lT.f.Iw - .1,
-           zI: .5,
-           ETT: !1
+           eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
+           rideHeight: Yq.c.UH - .1,
+           Am: .5,
+           wEq: !1
```

#### 38. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L389-L390)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 39. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L403-L404)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 40. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L417-L418)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 41. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L431-L432)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 42. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L445-L446)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 43. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L459-L460)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 44. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L473-L474)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 45. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L487-L488)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 46. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L510-L511)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 47. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L524-L525)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 48. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L538-L539)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 49. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L552-L553)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 50. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L566-L567)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 51. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L581-L582)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 52. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L604-L605)

```diff
-           zI: .5,
-           ETT: !1
+           Am: .5,
+           wEq: !1
```

#### 53. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L613)

```diff
-   36864: (TT, kT, cT) => {
+   37111: (qq, Eq, gq) => {
```

#### 54. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L615)

```diff
-       b: () => lT
+       d: () => Yq
```

#### 55. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L777)

```diff
-   37505: (TT, kT, cT) => {
+   37661: (qq, Eq, gq) => {
```

#### 56. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L779)

```diff
-       e: () => OT
+       c: () => mq
```

#### 57. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L781)

```diff
-     var lT = cT(350),
+     var Yq = gq(317),
```

#### 58. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L783)

```diff
-       KT = cT(1915);
+       Oq = gq(1870);
```

#### 59. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L786)

```diff
-     const hT = [1, 151, 0, "h", 75, 9, 157, "e", "f", 22, 8, 255, "length", "c", 128, 36, 43, "undefined", void 0, 117, 118, 2, 63, 6, "fromCodePoint", 7, 12, "push", "a", 215, 3, 149, 240, "g", 91, 248, 8191, 88, 13, 14, 4, 83, 168, 242, 5, 196, "b", 87, 109, "d", 160, 99, 100,  … [truncated]
+     const dq = [229, 0, 1, "h", 3, 62, "i", 231, "e", 230, 203, 8, 255, "length", "c", "d", "a", "undefined", void 0, 131, 16, "b", 117, 63, 6, "fromCodePoint", 7, 12, "push", 246, 115, 106, 57, 52, 9, 91, 8191, 88, 13, 14, 4, 196, "g", "f", !1, 2, 34, 130, 116, 127, 128, 129, nu … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L789-L792` → after: `L789-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L789-L792) · [Before (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L789-L792)

```diff
-       return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
-         for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = '<BUtu^AOV4@3rzvXw,>e#6{yI%7i$hDJ1:dQf}FRj0Wg2PCG_cS?x~+q*(Z!=])oTH9YKM[5k.;&EmL/N`|8l"sbnpa', TT[hT[1]] = "" + (TT[hT[2]] || ""), TT[hT[4]] = TT[hT[1]].length, TT[hT[9]] = [], TT[hT[7]] = hT[2], TT[hT[8]] = hT[2], TT[-hT[6]] = -hT[ … [truncated]
-           if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[1]][TT[hT[3]]]), TT[hT[5]] !== -hT[0])
-             if (TT[-hT[6]] < hT[2]) TT[-hT[6]] = TT[hT[5]];
+       return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
+         for (bq(qq[dq[13]] = dq[2], qq[dq[5]] = 'XEHGhQieZbaRPDC5O)#S8.6:t*knl^>uL&JgB`do"=!xVAp(MFjm2WzU%yfqsc_NK@|T<r,Iw~1v079}?4/[$3]{+Y;', qq[-dq[0]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[-dq[0]].length, qq[-dq[10]] = [], qq[dq[8]] = dq[1], qq[-dq[9]] = dq[1], qq[dq[7]] =  … [truncated]
+           if (qq[dq[6]] = qq[dq[5]].indexOf(qq[-dq[0]][qq[dq[3]]]), qq[dq[6]] !== -dq[2])
+             if (qq[dq[7]] < dq[1]) qq[dq[7]] = qq[dq[6]];
```

#### 61. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L794)

```diff
-               JT(TT[-hT[6]] += TT[hT[5]] * hT[34], TT[hT[7]] |= TT[-hT[6]] << TT[hT[8]], TT[hT[8]] += (TT[-hT[6]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+               bq(qq[dq[7]] += qq[dq[6]] * dq[35], qq[dq[8]] |= qq[dq[7]] << qq[-dq[9]], qq[-dq[9]] += (qq[dq[7]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 62. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L796-L804` → after: `L796-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L796-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L796-L800) · [Before (L796-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L796-L804)

```diff
-                 JT(TT[hT[9]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[8]] -= hT[10])
-               } while (TT[hT[8]] > hT[25]);
-               TT[-hT[6]] = -hT[0]
-             } return TT[-hT[6]] > -hT[0] && TT[hT[9]].push((TT[hT[7]] | TT[-hT[6]] << TT[hT[8]]) & hT[11]), QT(TT[hT[9]])
-       }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
-     }
- 
-     function QT(...TT) {
-       return TT[hT[12]] = hT[0], typeof IT !== hT[17] && IT ? (new IT).decode(new AT(TT[hT[2]])) : typeof CT !== hT[17] && CT ? CT.from(TT[hT[2]]).toString("utf-8") : tT(TT[hT[2]])
+                 bq(qq[-dq[10]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[-dq[9]] -= dq[11])
+               } while (qq[-dq[9]] > dq[26]);
+               qq[dq[7]] = -dq[2]
+             } return qq[dq[7]] > -dq[2] && qq[-dq[10]].push((qq[dq[8]] | qq[dq[7]] << qq[-dq[9]]) & dq[12]), Hq(qq[-dq[10]])
+       }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 63. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L808-L821` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L804) · [Before (L808-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L808-L821)

```diff
-       if (TT[hT[12]] = hT[30], TT[hT[2]] === function(...TT) {
-           return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
-             for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = 'Eu8,l/<(vhOm06gG)%k]?iCV*:}eBy`cI^dbPpW=_>LfwXxM9jZ2R.AnH+Jot#FQ4rU1aNDTSK"qz&Y5[{3$~;7@|!s', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[-hT[32]] = TT[hT[21]].length, TT[hT[40]] = [], TT[hT[7]] = hT[2], TT[hT[35]] = hT[2], TT[hT[3 … [truncated]
-               if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[21]][TT[-hT[31]]]), TT[hT[5]] !== -hT[0])
-                 if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[hT[5]];
-                 else {
-                   JT(TT[hT[33]] += TT[hT[5]] * hT[34], TT[hT[7]] |= TT[hT[33]] << TT[hT[35]], TT[hT[35]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
-                   do {
-                     JT(TT[hT[40]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[35]] -= hT[10])
-                   } while (TT[hT[35]] > hT[25]);
-                   TT[hT[33]] = -hT[0]
-                 } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[7]] | TT[hT[33]] << TT[hT[35]]) & hT[11]), QT(TT[hT[40]])
-           }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
-         }(82) + hT[89]) return TT[hT[0]] + TT[hT[21]]
+       return qq[dq[13]] = dq[2], typeof uq !== dq[17] && uq ? (new uq).decode(new Bq(qq[dq[1]])) : typeof Wq !== dq[17] && Wq ? Wq.from(qq[dq[1]]).toString("utf-8") : Vq(qq[dq[1]])
```

#### 64. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L825-L826` → after: `L808-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L808-L809) · [Before (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L825-L826)

```diff
-     JT(yT = {}, fT = ["5_MOnG=N,46EmcHI%Hp1:x4`^zrqMk=Qd+w&5`2IAZl;U%LR", "vryxijrCCV}Ey7tgiK@1bFheSX;{D^+i65y+cm!0(#p(B", "t=J4wx.h}Z$/HkQ%2AT4", ';J+xxkg&#TEfJ|i0{KehH~*x|4AwhuMFvj~;"5K>C*&u}uqd,XzOAfSNu', "at9?%(pQ.#+[u8Tf=Hd1!CNZT>8Vnt4>B1<:wx$>gv@A%uD,m)U", "*K8SO/kZv>q", "+ … [truncated]
-       JT(TT[hT[12]] = hT[2], TT[-hT[15]] = [function() {
+     bq(xq = {}, Aq = ["ubHv{yYeQKpuiQ+gJ1S^dFIE", "dbrUb_Y}dKnthGd*Egm7b].E", 'tx,Iy,Q*55.`4wO"J:Ae=<apk8Sv(GEu&m903Iz2(sq', "Umm^eBiB;C;k85Zu{ML~Qrl#$by0VGs=zIOi9rs]!_`}X", "ux7Iz$|1xqDw$hrt;R}Fbr|t@yC/t(_>3,jn(ox(TS:0L(/l~i:&zJlH", 'o:9lWw/"sR4sJDC', '*<N~V%)=bCJ@Ew"u.1<7Djd>eD … [truncated]
+       bq(qq[dq[13]] = dq[1], qq[dq[16]] = [function() {
```

#### 65. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L834` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L817) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L834)

```diff
-       }], TT[hT[0]] = hT[18], TT[hT[13]] = []);
+       }], qq[dq[2]] = dq[18], qq[dq[14]] = []);
```

#### 66. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L836` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L819) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L836)

```diff
-         JT(TT[hT[0]] = Object, TT[hT[13]][hT[27]]("".__proto__.constructor.name))
+         bq(qq[dq[2]] = Object, qq[dq[14]][dq[28]]("".__proto__.constructor.name))
```

#### 67. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L838-L841` → after: `L821-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L821-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L821-L824) · [Before (L838-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L838-L841)

```diff
-       TT: for (TT[-hT[14]] = hT[2]; TT[-hT[14]] < TT[-hT[15]][hT[12]]; TT[-hT[14]]++) try {
-         for (TT[hT[0]] = TT[-hT[15]][TT[-hT[14]]](), TT[-hT[16]] = hT[2]; TT[-hT[16]] < TT[hT[13]][hT[12]]; TT[-hT[16]]++)
-           if (typeof TT[hT[0]][TT[hT[13]][TT[-hT[16]]]] === hT[17]) continue TT;
-         return TT[hT[0]]
+       qq: for (qq[dq[15]] = dq[1]; qq[dq[15]] < qq[dq[16]][dq[13]]; qq[dq[15]]++) try {
+         for (qq[dq[2]] = qq[dq[16]][qq[dq[15]]](), qq[dq[8]] = dq[1]; qq[dq[8]] < qq[dq[14]][dq[13]]; qq[dq[8]]++)
+           if (typeof qq[dq[2]][qq[dq[14]][qq[dq[8]]]] === dq[17]) continue qq;
+         return qq[dq[2]]
```

#### 68. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L843-L845` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L826-L828) · [Before (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L843-L845)

```diff
-       return TT[hT[0]] || this
-     }() || {}, IT = xT.TextDecoder, AT = xT.Uint8Array, CT = xT.Ov, jT = xT.String || String, vT = xT.Array || Array, tT = function(...TT) {
-       return JT(TT[hT[12]] = hT[2], TT[hT[28]] = new vT(hT[14]), TT[hT[29]] = jT[hT[24]] || jT.fromCharCode, TT[hT[19]] = []),
+       return qq[dq[2]] || this
+     }() || {}, uq = cq.TextDecoder, Bq = cq.Uint8Array, Wq = cq.IN, Nq = cq.String || String, aq = cq.Array || Array, Vq = function(...qq) {
+       return bq(qq[dq[13]] = dq[1], qq[dq[29]] = new aq(dq[50]), qq[dq[30]] = Nq[dq[25]] || Nq.fromCharCode, qq[dq[19]] = []),
```

#### 69. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L847` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L830) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L847)

```diff
-           for (JT(kT[hT[12]] = hT[0], kT[hT[0]] = hT[18], kT[hT[21]] = hT[18], kT[hT[13]] = kT[hT[2]][hT[12]], TT[hT[19]][hT[12]] = hT[2]), kT[-hT[20]] = hT[2]; kT[-hT[20]] < kT[hT[13]];) JT(kT[hT[21]] = kT[hT[2]][kT[-hT[20]]++], kT[hT[21]] <= hT[80] ? kT[hT[0]] = kT[hT[21]] : kT … [truncated]
+           for (bq(Eq[dq[13]] = dq[2], Eq[-dq[22]] = dq[18], Eq[dq[21]] = dq[18], Eq[dq[4]] = Eq[dq[1]][dq[13]], qq[dq[19]][dq[13]] = dq[1]), Eq[dq[20]] = dq[1]; Eq[dq[20]] < Eq[dq[4]];) bq(Eq[dq[21]] = Eq[dq[1]][Eq[dq[20]]++], Eq[dq[21]] <= dq[49] ? Eq[-dq[22]] = Eq[dq[21]] : Eq[ … [truncated]
```

#### 70. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L851-L857` → after: `L834-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L834-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L834-L840) · [Before (L851-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L851-L857)

```diff
-     const aT = MT()[NT(hT[41])](),
-       FT = MT()[NT(hT[41])](),
-       rT = MT()[NT(hT[41])](),
-       PT = MT()[NT(hT[41])](),
-       wT = MT()[NT(hT[41])](),
-       mT = MT()[NT(hT[41])](),
-       bT = MT()[NT(hT[41])](),
+     const Pq = lq()[jq(dq[31])](),
+       Qq = lq()[jq(dq[31])](),
+       yq = lq()[jq(dq[31])](),
+       tq = lq()[jq(dq[31])](),
+       rq = lq()[jq(dq[31])](),
+       vq = lq()[jq(dq[31])](),
+       hq = lq()[jq(dq[31])](),
```

#### 71. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L860-L863` → after: `L843-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L843-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L843-L846) · [Before (L860-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L860-L863)

```diff
-           return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
-             for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = ';0YSD8]Hk%T,7h2[&@xw>L_1oW^~r!Ke5V)CpB?/FXIt}=gzcG#vA6$RsJE"Mbji<`*NQO|l+na.U3P:d4({fZyq9um', TT[hT[42]] = "" + (TT[hT[2]] || ""), TT[hT[30]] = TT[hT[42]].length, TT[hT[45]] = [], TT[hT[44]] = hT[2], TT[hT[23]] = hT[2], TT[hT[2 … [truncated]
-               if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[42]][TT[-hT[43]]]), TT[hT[5]] !== -hT[0])
-                 if (TT[hT[25]] < hT[2]) TT[hT[25]] = TT[hT[5]];
+           return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
+             for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '<tNaAqiCjf7p~}w`_{>G.@9K1/Vhe$F?v!|b6#nJRl,uoy"sdgPXkz*I[QZOc5%x2rB&H(TUDW08=;4):+ELMm]^SY3', qq[-dq[32]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[-dq[32]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[ … [truncated]
+               if (qq[dq[34]] = qq[dq[2]].indexOf(qq[-dq[32]][qq[-dq[33]]]), qq[dq[34]] !== -dq[2])
+                 if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
```

#### 72. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L865` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L848) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L865)

```diff
-                   JT(TT[hT[25]] += TT[hT[5]] * hT[34], TT[hT[44]] |= TT[hT[25]] << TT[hT[23]], TT[hT[23]] += (TT[hT[25]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                   bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[8]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 73. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L867-L871` → after: `L850-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L850-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L850-L854) · [Before (L867-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L867-L871)

```diff
-                     JT(TT[hT[45]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[23]] -= hT[10])
-                   } while (TT[hT[23]] > hT[25]);
-                   TT[hT[25]] = -hT[0]
-                 } return TT[hT[25]] > -hT[0] && TT[hT[45]].push((TT[hT[44]] | TT[hT[25]] << TT[hT[23]]) & hT[11]), QT(TT[hT[45]])
-           }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+                     bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
+                   } while (qq[dq[24]] > dq[26]);
+                   qq[dq[26]] = -dq[2]
+                 } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[8]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
+           }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 74. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L873` → after: `L856-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L856-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L856-L908) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L873)

```diff
-         TT[hT[12]] = hT[30];
+         qq[dq[13]] = dq[4], Eq(107) + dq[21] in oq && function(...qq) {
+           function Eq(...qq) {
+             for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'fLoNAXth+Oy!u2cp]G)?`"H<7d#z3V&g|.Drq=:jZWFQKUk%1BREwl$s^I(PxYv;iSn~ae>@JbM_Cm}968540,[*/{T', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[8]] = dq[1], qq[dq[43]] = dq[1], qq[dq[4 … [truncated]
+               if (qq[dq[41]] = qq[dq[16]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[41]] !== -dq[2])
+                 if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[41]];
+                 else {
+                   bq(qq[dq[42]] += qq[dq[41]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[43]], qq[dq[43]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
+                   do {
+                     bq(qq[dq[15]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[43]] -= dq[11])
+                   } while (qq[dq[43]] > dq[26]);
+                   qq[dq[42]] = -dq[2]
+                 } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
+           }
+ 
+           function gq(...qq) {
+             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Eq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
+ ... (37 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L875` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L910) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L875)

```diff
-         return MT()[kT(hT[72]) + kT(hT[73])](cT, TT[hT[21]]), MT()[kT(86)](TT[hT[2]], cT, MT()[kT(hT[47])](cT, TT[hT[0]]))
+         return lq()[Eq(111) + Eq(112)](gq, qq[dq[45]]), lq()[Eq(113)](qq[dq[1]], gq, lq()[Eq(114)](gq, qq[dq[2]]))
```

#### 76. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L883-L886` → after: `L918-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L918-L921) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L883-L886)

```diff
-         return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
-           for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = '3kPqdGNgFLUZcRhAtbOsjDpQBKCETIWrlSf506#Jaoe?unHY/m7:$@MyVX^(<i+v").1,;2w>`]_&4x!z89[}|~=*%{', TT[hT[46]] = "" + (TT[hT[2]] || ""), TT[hT[39]] = TT[hT[46]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[48]] = hT[2], TT[hT[33] … [truncated]
-             if (TT[-hT[47]] = TT[hT[0]].indexOf(TT[hT[46]][TT[hT[3]]]), TT[-hT[47]] !== -hT[0])
-               if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[47]];
+         return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
+           for (bq(qq[dq[13]] = dq[2], qq[-dq[46]] = '}*y@=1>("&4{Lb|gVj9SpuzMP3DAl6KhQG<ask0vwF^n!m%Tio?U75;+EWr)B2R,`_#I/c.xJte:8qd]YHfO$~[CNXZ', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[45]].length, qq[dq[47]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[42] … [truncated]
+             if (qq[dq[34]] = qq[-dq[46]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
+               if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
```

#### 77. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L888` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L923) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L888)

```diff
-                 JT(TT[hT[33]] += TT[-hT[47]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[48]], TT[hT[48]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                 bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 78. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L890-L894` → after: `L925-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L925-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L925-L929) · [Before (L890-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L890-L894)

```diff
-                   JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[48]] -= hT[10])
-                 } while (TT[hT[48]] > hT[25]);
-                 TT[hT[33]] = -hT[0]
-               } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[48]]) & hT[11]), QT(TT[hT[49]])
-         }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+                   bq(qq[dq[47]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
+                 } while (qq[dq[24]] > dq[26]);
+                 qq[dq[42]] = -dq[2]
+               } return qq[dq[42]] > -dq[2] && qq[dq[47]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[47]])
+         }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 79. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L896-L903` → after: `L931-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L931-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L931-L940) · [Before (L896-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L896-L903)

```diff
-       TT[hT[12]] = hT[10];
-       const cT = TT[hT[2]][kT(hT[37])][kT(89) + kT(90) + kT(hT[34])](TT[hT[0]]);
-       TT[-hT[50]] = TT[hT[2]][kT(hT[37])][kT(hT[58]) + kT(hT[59]) + kT(hT[60]) + kT(hT[61])](cT);
-       const lT = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[69]) + kT(hT[70]) + kT(hT[71])](TT[hT[0]], kT(hT[51]) + kT(hT[52]) + kT(hT[53]) + hT[7]) : TT[-hT[50]][kT(hT[51]) + kT(hT[52]) + kT(hT[53]) + hT[7]],
-         OT = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[63]) + kT(hT[64]) + kT(hT[65]) + kT(hT[66])](TT[hT[0]], kT(hT[55]) + kT(hT[56]) + kT(hT[57])) : TT[-hT[50]][kT(hT[55]) + kT(hT[56]) + kT(hT[57])];
-       JT(MT()[kT(hT[48])](aT, hT[2], hT[2], TT[hT[44]]), MT().Of(aT, aT, MT()[kT(110)], TT[hT[30]].heading), MT()[kT(111)](bT, TT[hT[40]].Oh), bT[hT[0]] = hT[2]);
-       const xT = TT[hT[21]][kT(112) + kT(113)]();
-       if (JT(TT[-hT[50]] = TT[hT[2]][kT(hT[37])][kT(hT[58]) + kT(hT[59]) + kT(hT[60]) + kT(hT[61])](cT), TT[-hT[62]] = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[63]) + kT(hT[64]) + kT(hT[65]) + kT(hT[66])](TT[hT[0]], kT(hT[67]) + kT(hT[68])) : TT[-hT[50]][kT(hT[67]) +  … [truncated]
+       qq[dq[13]] = dq[11], Eq(dq[30]) in oq && function(...qq) {
+         qq[dq[13]] = dq[1]
+       }();
+       const gq = qq[dq[1]][Eq(dq[48])][Eq(dq[22]) + Eq(dq[114]) + Eq(119)](qq[dq[2]]);
+       qq[dq[16]] = qq[dq[1]][Eq(dq[48])][Eq(dq[56]) + Eq(dq[57]) + Eq(dq[58]) + Eq(dq[59])](gq);
+       const Yq = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[60]) + Eq(dq[61]) + Eq(dq[62]) + Eq(dq[49])](qq[dq[2]], Eq(dq[50]) + Eq(dq[51]) + Eq(dq[47]) + dq[8]) : qq[dq[16]][Eq(dq[50]) + Eq(dq[51]) + Eq(dq[47]) + dq[8]],
+         mq = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[19]) + Eq(dq[65]) + Eq(dq[66])](qq[dq[2]], Eq(dq[53]) + Eq(dq[54]) + Eq(dq[55])) : qq[dq[16]][Eq(dq[53]) + Eq(dq[54]) + Eq(dq[55])];
+       bq(lq()[Eq(137)](Pq, dq[1], dq[1], qq[dq[73]]), lq().tm(Pq, Pq, lq()[Eq(138)], qq[dq[4]].heading), lq()[Eq(139)](hq, qq[dq[40]].JV), hq[dq[2]] = dq[1]);
+       const cq = qq[dq[45]][Eq(140) + Eq(dq[109])]();
+       if (bq(qq[dq[16]] = qq[dq[1]][Eq(dq[48])][Eq(dq[56]) + Eq(dq[57]) + Eq(dq[58]) + Eq(dq[59])](gq), qq[dq[34]] = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[60]) + Eq(dq[61]) + Eq(dq[62]) + Eq(dq[49])](qq[dq[2]], Eq(dq[63]) + Eq(dq[64])) : qq[dq[16]][Eq(dq[63]) + Eq(d … [truncated]
```

#### 80. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L905-L907` → after: `L942-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L942-L944) · [Before (L905-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L905-L907)

```diff
-           for (JT(TT[hT[12]] = hT[0], TT[hT[75]] = 'm916oC!V`TleD=urY8iqJO_RBH75+Sx|$&MKw.%{;k})@ZvNj0?yGb^<zQPtEdAa["nIgL/:>,]sh4WUfF~*3#cp2(X', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[72]] = TT[hT[21]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[77]] = hT[2], TT[-hT[7 … [truncated]
-             if (TT[hT[76]] = TT[hT[75]].indexOf(TT[hT[21]][TT[hT[74]]]), TT[hT[76]] !== -hT[0])
-               if (TT[-hT[73]] < hT[2]) TT[-hT[73]] = TT[hT[76]];
+           for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = ';pA?sqPB!TjklF)~XKCbDoYh0&[=x%IaOn,:>@_w3QyWE1^cUe/VG(M"zm|9H5ir]4N}<RdZ#Jv2gL+*87{S6$fu.t`', qq[-dq[58]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[-dq[58]].length, qq[dq[15]] = [], qq[dq[72]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26 … [truncated]
+             if (qq[dq[6]] = qq[dq[2]].indexOf(qq[-dq[58]][qq[dq[71]]]), qq[dq[6]] !== -dq[2])
+               if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
```

#### 81. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L909` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L946) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L909)

```diff
-                 JT(TT[-hT[73]] += TT[hT[76]] * hT[34], TT[hT[44]] |= TT[-hT[73]] << TT[hT[77]], TT[hT[77]] += (TT[-hT[73]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                 bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[72]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 82. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L911-L914` → after: `L948-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L948-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L948-L951) · [Before (L911-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L911-L914)

```diff
-                   JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[77]] -= hT[10])
-                 } while (TT[hT[77]] > hT[25]);
-                 TT[-hT[73]] = -hT[0]
-               } return TT[-hT[73]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[-hT[73]] << TT[hT[77]]) & hT[11]), QT(TT[hT[49]])
+                   bq(qq[dq[15]].push(qq[dq[72]] & dq[12]), qq[dq[72]] >>= dq[11], qq[dq[24]] -= dq[11])
+                 } while (qq[dq[24]] > dq[26]);
+                 qq[dq[26]] = -dq[2]
+               } return qq[dq[26]] > -dq[2] && qq[dq[15]].push((qq[dq[72]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[15]])
```

#### 83. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L918` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L955) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L918)

```diff
-           return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = vT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+           return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = aq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 84. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L939` → after: `L974-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L974-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L974-L1168) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L939)

```diff
-             return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = HT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+             function Eq(...qq) {
+               return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
+                 for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'E+NW}Z<w12$lMb:T7XrmA/|Rg>iQsa={I.4SvkdJ9xYF6nGy*K"PzBL,5V%&`3]cD~t)U!h0u#C[ofjqp(;^H_O?8e@', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[-dq[76]] = qq[dq[45]].length, qq[dq[40]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], q … [truncated]
+                   if (qq[dq[34]] = qq[dq[16]].indexOf(qq[dq[45]][qq[dq[3]]]), qq[dq[34]] !== -dq[2])
+                     if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
+                     else {
+                       bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[73]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
+                       do {
+                         bq(qq[dq[40]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
+                       } while (qq[dq[24]] > dq[26]);
+                       qq[dq[26]] = -dq[2]
+                     } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[73]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
+               }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
+             }
+             qq[dq[13]] = dq[1],
+               function(...qq) {
+ ... (179 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L941` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1170) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L941)

```diff
-           MT()[eT(hT[80])](aT, aT, rT, oT)
+           Vq(153) + "P" in oq && fq(), lq()[Vq(169)](Pq, Pq, yq, Zq)
```

#### 86. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L943` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1172) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L943)

```diff
-         JT(TT[-hT[62]] = (0, KT.w)(TT[-hT[62]], 1, Math[tT(hT[74])](hT[0], Math[tT(hT[14])](hT[2], -mT, hT[0] - NT / TT[hT[44]]))), MT()[tT(129)](aT, aT, PT))
+         bq(qq[dq[34]] = (0, Oq.w)(qq[dq[34]], 1, Math[Vq(dq[105])](dq[2], Math[Vq(170)](dq[1], -iq, dq[2] - vq / qq[dq[73]]))), lq()[Vq(171)](Pq, Pq, tq))
```

#### 87. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L946-L951` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1175) · [Before (L946-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L946-L951)

```diff
-       JT(MT()[kT(hT[98])](IT, aT, bT), IT[hT[0]] = hT[2], TT[hT[13]] = MT()[kT(131)](IT)), xT || (TT[hT[13]] *= TT[-hT[62]]);
-       const AT = TT[hT[23]][kT(132) + kT(133) + kT(134)],
-         CT = AT ? Math[kT(135)](AT, TT[hT[13]]) : TT[hT[13]];
-       MT()[kT(136) + kT(137)](IT, IT);
-       const jT = TT[hT[25]] !== hT[54] && void 0 !== TT[hT[25]] ? TT[hT[25]] : TT[hT[23]][kT(138) + kT(139) + kT(140) + kT(141)];
-       if (CT > hT[2]) {
+       if (bq(lq()[Eq(172)](uq, Pq, hq), uq[dq[2]] = dq[1], qq[dq[107]] = lq()[Eq(173)](uq)), !cq) {
```

#### 88. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L953-L955` → after: `L1177-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1177-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1177-L1203) · [Before (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L953-L955)

```diff
-           for (JT(TT[hT[12]] = hT[0], TT[hT[81]] = 'UeBbYKFcnmhtqQ4+6V&iRpLr*T7JD^zaE#f5g{"?CA)`:Gs|NjPXHu;<($,S1MWZ!O}lIvd8o0y3~x_9=%.]@[w2>k/', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[21]].length, TT[hT[40]] = [], TT[hT[44]] = hT[2], TT[-hT[83]] = hT[2], TT[hT[3 … [truncated]
-             if (TT[-hT[82]] = TT[hT[81]].indexOf(TT[hT[21]][TT[hT[10]]]), TT[-hT[82]] !== -hT[0])
-               if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[82]];
+           var Eq;
+           bq(qq[dq[13]] = dq[1], Eq = function(...qq) {
+             bq(qq[dq[13]] = dq[2], this.WB = qq[dq[1]], this.length = dq[1], this.map = {}, this.head = dq[52], this.tail = dq[52])
+           }, Eq.prototype.get = function(...qq) {
+             var Eq;
+             return bq(qq[dq[13]] = dq[2], Eq = this.map[qq[dq[1]]]), Eq ? (this.remove(Eq), this.insert(Eq.key, Eq.val), Eq.val) : -dq[2]
+           }, Eq.prototype.put = function(...qq) {
+             bq(qq[dq[13]] = dq[45], this.map[qq[dq[1]]] ? (this.remove(this.map[qq[dq[1]]]), this.insert(qq[dq[1]], qq[dq[2]])) : this.length === this.WB ? (this.remove(this.head), this.insert(qq[dq[1]], qq[dq[2]])) : (this.insert(qq[dq[1]], qq[dq[2]]), this.length++))
+           }, Eq.prototype.remove = function(...qq) {
+             bq(qq[dq[13]] = dq[2], qq[dq[2]] = qq[dq[1]].prev, qq[-dq[106]] = qq[dq[1]].next), qq[-dq[106]] && (qq[-dq[106]].prev = qq[dq[2]]), qq[dq[2]] && (qq[dq[2]].next = qq[-dq[106]]), this.head === qq[dq[1]] && (this.head = qq[-dq[106]]), this.tail === qq[dq[1]] && (this.ta … [truncated]
+           }, Eq.prototype.insert = function(...qq) {
+             bq(qq[dq[13]] = dq[45], qq[dq[45]] = new List(qq[dq[1]], qq[dq[2]]), this.tail ? (this.tail.next = qq[dq[45]], qq[dq[45]].prev = this.tail, this.tail = qq[dq[45]]) : (this.tail = qq[dq[45]], this.head = qq[dq[45]]), this.map[qq[dq[1]]] = qq[dq[45]])
+           }, console.log(Eq))
+         }
+         Eq(dq[104]) in oq && Mq(), qq[dq[107]] *= qq[dq[34]]
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L957` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1205) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L957)

```diff
-                 JT(TT[hT[33]] += TT[-hT[82]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[-hT[83]], TT[-hT[83]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                 bq(mq += Aq * dq[35], lq |= mq << Oq, Oq += (mq & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 90. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L959-L962` → after: `L1207-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1207-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1207-L1212) · [Before (L959-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L959-L962)

```diff
-                   JT(TT[hT[40]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[-hT[83]] -= hT[10])
-                 } while (TT[-hT[83]] > hT[25]);
-                 TT[hT[33]] = -hT[0]
-               } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[44]] | TT[hT[33]] << TT[-hT[83]]) & hT[11]), QT(TT[hT[40]])
+                   bq(Yq.push(lq & dq[12]), lq >>= dq[11], Oq -= dq[11])
+                 } while (Oq > dq[26]);
+                 mq = -dq[2]
+               }
+           }
+           return mq > -dq[2] && Yq.push((lq | mq << Oq) & dq[12]), Hq(Yq)
```

#### 91. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L966` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1216) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L966)

```diff
-           return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = GT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+           return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Tq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 92. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L968` → after: `L1218-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1218-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1218-L1230) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L968)

```diff
-         let ET = TT[hT[21]][kT(142) + VT(143)] * jT;
+ 
+         function Sq(...qq) {
+           bq(qq[dq[13]] = dq[1], qq[dq[16]] = function(...Eq) {
+             return bq(Eq[dq[13]] = dq[45], Eq[dq[45]] = [], Eq[dq[4]] = Eq[dq[1]].length, Eq[dq[1]].sort(((qq, Eq) => qq - Eq)), qq[dq[2]](Eq[dq[45]], [], dq[1], Eq[dq[4]], Eq[dq[1]], Eq[dq[2]])), Eq[dq[45]]
+           }, qq[dq[2]] = function(...Eq) {
+             if (bq(Eq[dq[13]] = dq[24], Eq[dq[108]] = dq[52]), !(Eq[dq[73]] < dq[1])) {
+               if (Eq[dq[73]] === dq[1]) return Eq[dq[1]].push(Eq[dq[2]]);
+               for (Eq[dq[21]] = Eq[dq[45]]; Eq[dq[21]] < Eq[dq[4]] && !(Eq[dq[40]][Eq[dq[21]]] > Eq[dq[73]]); Eq[dq[21]]++) Eq[dq[21]] > Eq[dq[45]] && Eq[dq[40]][Eq[dq[21]]] === Eq[dq[40]][Eq[dq[21]] - dq[2]] || bq(Eq[dq[108]] = Array.from(Eq[dq[2]]), Eq[dq[108]].push(Eq[dq[40]][ … [truncated]
+             }
+           }, console.log(qq[dq[16]]))
+         }
+         zq(184) + "Y" in oq && Sq();
+         let pq = qq[dq[45]][zq(185) + zq(186)] * Nq;
```

#### 93. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L971-L973` → after: `L1233-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1233-L1235) · [Before (L971-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L971-L973)

```diff
-             for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = 'ay+"G7HU]nfA/zmu}Ow;jxvoL1c=X@.q%J<0FRDr^Y5p!?)|dQ6i`>IBPT:3C*k,2~t#N&l$9E{[4eKS8sM_(ghWVZb', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[21]].length, TT[hT[49]] = [], TT[hT[7]] = hT[2], TT[hT[8]] = hT[2], TT[hT[33] … [truncated]
-               if (TT[-hT[84]] = TT[hT[0]].indexOf(TT[hT[21]][TT[hT[3]]]), TT[-hT[84]] !== -hT[0])
-                 if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[84]];
+             for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '/UCTcNbflMq?X"YpJ7}B=kv~Z{x%yodt)>,!ru5Q8|mze;WI[Sw_:0]ghO#`<AVFPD@K&63(R*E4^iLH$2js9G1a.n+', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[40]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], qq[-dq[ … [truncated]
+               if (qq[dq[6]] = qq[dq[2]].indexOf(qq[dq[21]][qq[dq[110]]]), qq[dq[6]] !== -dq[2])
+                 if (qq[-dq[109]] < dq[1]) qq[-dq[109]] = qq[dq[6]];
```

#### 94. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L975` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1237) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L975)

```diff
-                   JT(TT[hT[33]] += TT[-hT[84]] * hT[34], TT[hT[7]] |= TT[hT[33]] << TT[hT[8]], TT[hT[8]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                   bq(qq[-dq[109]] += qq[dq[6]] * dq[35], qq[dq[73]] |= qq[-dq[109]] << qq[dq[24]], qq[dq[24]] += (qq[-dq[109]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 95. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L977-L980` → after: `L1239-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1239-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1239-L1242) · [Before (L977-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L977-L980)

```diff
-                     JT(TT[hT[49]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[8]] -= hT[10])
-                   } while (TT[hT[8]] > hT[25]);
-                   TT[hT[33]] = -hT[0]
-                 } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[7]] | TT[hT[33]] << TT[hT[8]]) & hT[11]), QT(TT[hT[49]])
+                     bq(qq[dq[40]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
+                   } while (qq[dq[24]] > dq[26]);
+                   qq[-dq[109]] = -dq[2]
+                 } return qq[-dq[109]] > -dq[2] && qq[dq[40]].push((qq[dq[73]] | qq[-dq[109]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
```

#### 96. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L983-L984` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1245-L1246) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L983-L984)

```diff
-           function XT(TT) {
-             return typeof yT[TT] === hT[17] ? yT[TT] = uT(fT[TT]) : yT[TT]
+           function Jq(...qq) {
+             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Lq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 97. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L986-L989` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1248) · [Before (L986-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L986-L989)

```diff
-           ET *= TT[hT[21]][XT(144) + XT(145)]
-         }
-         let ZT = TT[hT[21]][VT(146) + VT(147) + "ss"] * CT;
-         if (CT < .3 && (ZT *= CT), ET > ZT) {
+ 
```

#### 98. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L991-L993` → after: `L1250-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1250-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1250-L1261) · [Before (L991-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L991-L993)

```diff
-             for (JT(TT[hT[12]] = hT[0], TT[hT[28]] = '04x=>;%2#,6AHVBFRYmkfgLhw(M|ON&e[IsQ:9pCcD7{}?!^~1/tS]Tzl5yqoZ.)`X"$U@*EvbGKr3aWPuJn8di_+<j', TT[hT[82]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[82]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[8]] = hT[2], TT[hT[3 … [truncated]
-               if (TT[-hT[85]] = TT[hT[28]].indexOf(TT[hT[82]][TT[hT[10]]]), TT[-hT[85]] !== -hT[0])
-                 if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[85]];
+             qq[dq[13]] = dq[1]
+           }
+           Jq(187) + "n" in oq && kq(), pq *= qq[dq[45]][Jq(dq[93]) + Jq(194)]
+         }
+         let Gq = qq[dq[45]][zq(dq[107]) + zq(dq[41]) + "ss"] * Wq;
+         if (Wq < .3) {
+           function Rq(qq) {
+             var Eq, gq, Yq, lq, Oq, mq, xq;
+             for (bq(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = dq[1], Oq = dq[1], mq = -dq[2]), xq = dq[1]; xq < gq; xq++) {
+               var Aq = '5gcsXmUVERMkniPSO+/^l]3w1D=:%<?FLQ|;tuo>aGZzHB{[!IqjW#Cve4~KJYh&fA*xrNT.07bd2,`p8)}y$6_(@9"'.indexOf(Eq[xq]);
+               if (Aq !== -dq[2])
+                 if (mq < dq[1]) mq = Aq;
```

#### 99. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L995` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1263) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L995)

```diff
-                   JT(TT[hT[33]] += TT[-hT[85]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[8]], TT[hT[8]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
+                   bq(mq += Aq * dq[35], lq |= mq << Oq, Oq += (mq & dq[36]) > dq[37] ? dq[38] : dq[39]);
```

#### 100. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L997-L1000` → after: `L1265-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1265-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1265-L1270) · [Before (L997-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L997-L1000)

```diff
-                     JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[8]] -= hT[10])
-                   } while (TT[hT[8]] > hT[25]);
-                   TT[hT[33]] = -hT[0]
-                 } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[8]]) & hT[11]), QT(TT[hT[49]])
+                     bq(Yq.push(lq & dq[12]), lq >>= dq[11], Oq -= dq[11])
+                   } while (Oq > dq[26]);
+                   mq = -dq[2]
+                 }
+             }
+             return mq > -dq[2] && Yq.push((lq | mq << Oq) & dq[12]), Hq(Yq)
```

#### 101. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1004` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1274) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1004)

```diff
-             return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = dT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
+             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Rq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
```

#### 102. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1008-L1146` → after: `L1278-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1278-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1278-L1294) · [Before (L1008-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1008-L1146)

```diff
-             JT(TT[hT[12]] = hT[2], TT[hT[46]] = function(...TT) {
-               function kT(...TT) {
-                 return TT[hT[12]] = hT[21], KT(lT(OT(TT[hT[2]]), OT(TT[hT[0]])))
-               }
- 
-               function cT(...TT) {
-                 return TT[hT[12]] = hT[30],
-                   function(...TT) {
-                     var kT, cT, lT, MT;
-                     for (JT(TT[hT[12]] = hT[21], TT[hT[21]] = TT[hT[0]].length, TT[hT[30]] = Array()), TT[hT[40]] = Array(Math.ceil(TT[hT[2]].length / hT[21])), kT = hT[2]; kT < TT[hT[40]].length; kT++) TT[hT[40]][kT] = TT[hT[2]].charCodeAt(kT * hT[21]) << hT[10] | TT[hT[2]].char … [truncated]
-                     for (; TT[hT[40]].length > hT[2];) {
-                       for (JT(MT = Array(), lT = hT[2]), kT = hT[2]; kT < TT[hT[40]].length; kT++) JT(lT = (lT << hT[88]) + TT[hT[40]][kT], cT = Math.floor(lT / TT[hT[21]]), lT -= cT * TT[hT[21]]), (MT.length > hT[2] || cT > hT[2]) && (MT[MT.length] = cT);
-                       JT(TT[hT[30]][TT[hT[30]].length] = lT, TT[hT[40]] = MT)
-                     }
-                     for (TT[hT[44]] = "", kT = TT[hT[30]].length - hT[0]; kT >= hT[2]; kT--) TT[hT[44]] += TT[hT[0]].charAt(TT[hT[30]][kT]);
-                     for (TT[hT[7]] = Math.ceil(TT[hT[2]].length * hT[10] / (Math.log(TT[hT[0]].length) / Math.log(hT[21]))), kT = TT[hT[44]].length; kT < TT[hT[7]]; kT++) TT[hT[44]] = TT[hT[0]][hT[2]] + TT[hT[44]];
- ... (123 more removed lines; see GitHub link above)
+             qq[dq[13]] = dq[1]
+           }
+           Uq(dq[97]) + "3" in oq && Fq(), Gq *= Wq
+         }
+         if (pq > Gq) {
+           function sq(...qq) {
+             for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = '*!<,D;^+b"Av.9V{L(z%SO#)7=FHBj_U~ud|Isl$R6cCopm3>1yarJ}NZ]EfT@q8Kx?Q2k5h&Gin4:0wXeMt/`W[PgY', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[73]] = dq[1], qq[dq[43]] = dq[1], qq[dq[ … [truncated]
+               if (qq[dq[6]] = qq[dq[16]].indexOf(qq[dq[21]][qq[-dq[66]]]), qq[dq[6]] !== -dq[2])
+                 if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
+                 else {
+                   bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[73]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
+                   do {
+                     bq(qq[dq[15]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[43]] -= dq[11])
+                   } while (qq[dq[43]] > dq[26]);
+                   qq[dq[26]] = -dq[2]
+                 } return qq[dq[26]] > -dq[2] && qq[dq[15]].push((qq[dq[73]] | qq[dq[26]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
+ ... (1 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1148-L1155` → after: `L1296-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1296-L1298) · [Before (L1148-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1148-L1155)

```diff
-               function FT(...kT) {
-                 var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, QT;
-                 for (JT(kT[hT[12]] = hT[21], kT[hT[21]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), kT[hT[46]] = new Array(hT[81])), JT(kT[hT[2]][kT[hT[0]] >> hT[44]] |= hT[14] << hT[106] - kT[hT[0]] % hT[105], kT … [truncated]
-                   for (JT(cT = kT[hT[21]][hT[2]], lT = kT[hT[21]][hT[0]], MT = kT[hT[21]][hT[21]], KT = kT[hT[21]][hT[30]], OT = kT[hT[21]][hT[40]], yT = kT[hT[21]][hT[44]], fT = kT[hT[21]][hT[23]], xT = kT[hT[21]][hT[25]]), AT = hT[2]; AT < hT[81]; AT++) JT(kT[hT[46]][AT] = AT < … [truncated]
-                   JT(kT[hT[21]][hT[2]] = rT(cT, kT[hT[21]][hT[2]]), kT[hT[21]][hT[0]] = rT(lT, kT[hT[21]][hT[0]]), kT[hT[21]][hT[21]] = rT(MT, kT[hT[21]][hT[21]]), kT[hT[21]][hT[30]] = rT(KT, kT[hT[21]][hT[30]]), kT[hT[21]][hT[40]] = rT(OT, kT[hT[21]][hT[40]]), kT[hT[21]][hT[44]] … [truncated]
-                 }
-                 return kT[hT[21]]
-               }
+           function Xq(...qq) {
+             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = sq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
+           }
```

#### 104. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1157-L1174` → after: `L1300-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1300-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1300-L1307) · [Before (L1157-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1157-L1174)

```diff
-               function rT(...TT) {
-                 return JT(TT[hT[12]] = hT[21], TT[-hT[110]] = (TT[hT[2]] & hT[109]) + (TT[hT[0]] & hT[109]), TT[hT[46]] = (TT[hT[2]] >> hT[88]) + (TT[hT[0]] >> hT[88]) + (TT[-hT[110]] >> hT[88])), TT[hT[46]] << hT[88] | TT[-hT[110]] & hT[109]
-               }
-               return JT(TT[hT[12]] = hT[2], TT[hT[28]] = hT[2], TT[hT[0]] = ""), TT[-hT[44]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
-                 hex: function(...TT) {
-                   return TT[hT[12]] = hT[0], MT(function(...TT) {
-                     return TT[hT[12]] = hT[0], IT(FT(xT(TT[hT[2]]), TT[hT[2]].length * hT[10]))
-                   }(OT(TT[hT[2]])))
-                 },
-                 b64: kT,
-                 any: cT,
-                 hex_hmac: function(...TT) {
-                   return TT[hT[12]] = hT[21], MT(lT(OT(TT[hT[2]]), OT(TT[hT[0]])))
-                 },
-                 b64_hmac: kT,
-                 any_hmac: cT
- ... (2 more removed lines; see GitHub link above)
+           function wq(...qq) {
+             bq(qq[dq[13]] = dq[1], qq[dq[123]] = function(...qq) {
+               if (bq(qq[dq[13]] = dq[2], qq[dq[16]] = qq[dq[1]].length), qq[dq[16]] < dq[45]) return dq[1];
+               if (bq(qq[-dq[7]] = Math.max(...qq[dq[1]]), qq[dq[14]] = Math.min(...qq[dq[1]])), qq[-dq[7]] === qq[dq[14]]) return dq[1];
+               for (bq(qq[dq[15]] = Array(qq[dq[16]] - dq[2]).fill(Number.MAX_SAFE_INTEGER), qq[dq[73]] = Array(qq[dq[16]] - dq[2]).fill(Number.MIN_SAFE_INTEGER), qq[-dq[121]] = Math.ceil((qq[-dq[7]] - qq[dq[14]]) / (qq[dq[16]] - dq[2])), qq[dq[42]] = dq[1]), qq[dq[3]] = dq[1]; qq … [truncated]
+               for (bq(qq[dq[6]] = Number.MIN_SAFE_INTEGER, qq[dq[82]] = qq[dq[14]]), qq[dq[122]] = dq[1]; qq[dq[122]] < qq[dq[16]] - dq[2]; qq[dq[122]]++) qq[dq[15]][qq[dq[122]]] === Number.MAX_SAFE_INTEGER && qq[dq[73]][qq[dq[122]]] === Number.MIN_SAFE_INTEGER || bq(qq[dq[6]] =  … [truncated]
+               return qq[dq[6]] = Math.max(qq[dq[6]], qq[-dq[7]] - qq[dq[82]]), qq[dq[6]]
+             }, console.log(qq[dq[123]]))
```

#### 105. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1176` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1309) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1176)

```diff
-           LT(hT[82]) in DT && RT(), ET = ZT
+           Xq(dq[10]) + "l" in oq && wq(), pq = Gq
```

#### 106. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1178` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1311) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1178)

```diff
-         JT(MT()[VT(165)](IT, IT, ET), TT[hT[40]][VT(166) + VT(167)](IT))
+         bq(lq()[zq(dq[100])](uq, uq, pq), qq[dq[40]][zq(205) + zq(206)](uq))
```

#### 107. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1180` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1313) · [Before (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1180)

```diff
-       TT[hT[40]][kT(hT[42]) + hT[111]] = TT[hT[21]][kT(169) + kT(hT[52]) + hT[111]] * (xT ? lT : OT)
+       qq[dq[40]][Eq(dq[96]) + dq[124]] = qq[dq[45]][Eq(208) + Eq(dq[51]) + dq[124]] * (cq ? Yq : mq)
```

#### 108. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1183` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1316) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1183)

```diff
-   37499: (TT, kT, cT) => {
+   37656: (qq, Eq, gq) => {
```

#### 109. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1185-L1186` → after: `L1318-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1318-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1318-L1319) · [Before (L1185-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1185-L1186)

```diff
-       b: () => fT,
-       d: () => yT
+       c: () => Aq,
+       g: () => xq
```

#### 110. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1188-L1189` → after: `L1321-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1321-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1321-L1322) · [Before (L1188-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1188-L1189)

```diff
-     var lT = cT(37505),
-       MT = cT(1915);
+     var Yq = gq(37661),
+       lq = gq(1870);
```

#### 111. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1193` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1326) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1193)

```diff
-         zI: 1,
+         Am: 1,
```

#### 112. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1233` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1366) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1233)

```diff
-       if (fT.speed) return (0, lT.e)(kT, cT, yT, fT, xT, IT, TT), void(fT.ticksToReachMaxIdleFriction = KT);
+       if (Aq.speed) return (0, Yq.c)(Eq, gq, xq, Aq, cq, uq, qq), void(Aq.ticksToReachMaxIdleFriction = Oq);
```

#### 113. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1238` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1371) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1238)

```diff
-         tT = AT ? jT : vT,
+         Vq = Bq ? Nq : aq,
```

#### 114. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1242` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/220.js#L1375) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/220.js#L1242)

```diff
-       xT.friction = TT.standingFriction * ((null === CT ? kT.bloxd.getClientPredictedOption(cT, "airMomentumConservation") : CT.airMomentumConservation) ? QT : tT), fT.ticksToReachMaxIdleFriction > 0 && fT.ticksToReachMaxIdleFriction--
+       cq.friction = qq.standingFriction * ((null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "airMomentumConservation") : Wq.airMomentumConservation) ? Hq : Vq), Aq.ticksToReachMaxIdleFriction > 0 && Aq.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   39426: (TT, kT, cT) => {
+   39563: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L12-L15)

```diff
-     var lT = cT(4445),
-       MT = cT(36845),
-       KT = cT(9445),
-       OT = cT(3089);
+     var Yq = gq(4283),
+       lq = gq(37086),
+       Oq = gq(9371),
+       mq = gq(3059);
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${fT.size} names`, [...fT]), fT.clear(), xT = null
+         console.warn(`Docs gallery: no default texture for ${Aq.size} names`, [...Aq]), Aq.clear(), cq = null
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L36)

```diff
-       const KT = MT.o[TT];
+       const Oq = lq.m[qq];
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L42)

```diff
-         return "string" === typeof(kT = fT && Array.isArray(yT) ? yT[fT[TT]] : yT) ? AT(kT, OT.h.BLOCK) : kT && "object" === typeof kT && "animTextures" in kT ? AT((0, lT.j)(kT), OT.h.BLOCK) : null;
+         return "string" === typeof(Eq = Aq && Array.isArray(xq) ? xq[Aq[qq]] : xq) ? Bq(Eq, mq.g.BLOCK) : Eq && "object" === typeof Eq && "animTextures" in Eq ? Bq((0, Yq.l)(Eq), mq.g.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L47-L48)

```diff
-         left: null !== (kT = xT(4)) && void 0 !== kT ? kT : IT,
-         right: null !== (cT = xT(0)) && void 0 !== cT ? cT : IT
+         left: null !== (Eq = cq(4)) && void 0 !== Eq ? Eq : uq,
+         right: null !== (gq = cq(0)) && void 0 !== gq ? gq : uq
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L54-L55)

```diff
-       const cT = MT.o[TT];
-       return AT(null !== (kT = null === cT || void 0 === cT ? void 0 : cT.itemTexture) && void 0 !== kT ? kT : "string" === typeof(null === cT || void 0 === cT ? void 0 : cT.textureInfo) ? cT.textureInfo : TT, OT.h.ITEM)
+       const gq = lq.m[qq];
+       return Bq(null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.itemTexture) && void 0 !== Eq ? Eq : "string" === typeof(null === gq || void 0 === gq ? void 0 : gq.textureInfo) ? gq.textureInfo : qq, mq.g.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L60-L64)

```diff
-       return MT.o[TT] ? null !== (kT = null === (cT = CT(TT)) || void 0 === cT ? void 0 : cT.top) && void 0 !== kT ? kT : jT(TT) : null
-     }
- 
-     function tT(TT) {
-       return AT(TT, OT.h.ICON)
+       return lq.m[qq] ? null !== (Eq = null === (gq = Wq(qq)) || void 0 === gq ? void 0 : gq.top) && void 0 !== Eq ? Eq : Nq(qq) : null
+     }
+ 
+     function Vq(qq) {
+       return Bq(qq, mq.g.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L69)

```diff
-         return cT(3244)(`./${TT}.png`)
+         return gq(3189)(`./${qq}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L75)

```diff
-   36864: (TT, kT, cT) => {
+   37111: (qq, Eq, gq) => {
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/221.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/221.js#L77)

```diff
-       b: () => lT
+       d: () => Yq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L4)

```diff
-   36901: (TT, kT, cT) => {
+   37145: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L7-L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L8)

```diff
-       g: () => MT
+       e: () => Yq,
+       h: () => lq
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L15)

```diff
-   36937: (TT, kT, cT) => {
+   37158: (qq, Eq, gq) => {
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L31)

```diff
-       return TT === kT ? TT : Math.random() * (kT - TT) + TT
+       return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L116)

```diff
-       return lT = Math.abs(kT - TT) <= cT ? kT : TT + Math.sign(kT - TT) * cT, lT
+       return Yq = Math.abs(Eq - qq) <= gq ? Eq : qq + Math.sign(Eq - qq) * gq, Yq
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L122)

```diff
-       return MT = -cT < lT && lT < cT ? kT : FT(TT, kT = TT + lT, cT), MT
+       return lq = -gq < Yq && Yq < gq ? Eq : yq(qq, Eq = qq + Yq, gq), lq
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L135)

```diff
-       return 0 === cT ? kT : mT(kT, cT)
+       return 0 === gq ? Eq : hq(Eq, gq)
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L164)

```diff
-   36885: (TT, kT, cT) => {
+   37131: (qq, Eq, gq) => {
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L166-L177` → after: `L166-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L166-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L166-L177) · [Before (L166-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L166-L177)

```diff
-       Matrix: () => lT.d,
-       Quaternion: () => lT.f,
-       RegisterMathVector: () => lT.g,
-       TmpVectors: () => lT.h,
-       Vector2: () => lT.i,
-       Fv: () => lT.m,
-       Vector4: () => lT.o
-     });
-     var lT = cT(36892);
-     (0, lT.g)()
-   },
-   36910: (TT, kT, cT) => {
+       Matrix: () => Yq.e,
+       Quaternion: () => Yq.h,
+       RegisterMathVector: () => Yq.l,
+       TmpVectors: () => Yq.o,
+       Vector2: () => Yq.p,
+       Na: () => Yq.q,
+       Vector4: () => Yq.r
+     });
+     var Yq = gq(37139);
+     (0, Yq.l)()
+   },
+   37149: (qq, Eq, gq) => {
```

#### 10. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L189-L190` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L189-L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L189-L190)

```diff
-       f: () => MT,
-       g: () => OT
+       h: () => lq,
+       k: () => mq
```

#### 11. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/222.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/222.js#L215)

```diff
-   36949: (TT, kT, cT) => {
+   37171: (qq, Eq, gq) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1)

```diff
- /*! For license information please see bcgkc.223.8353be5a.chunk.js.LICENSE.txt */
+ /*! For license information please see bbb6l5.223.d383e0d8.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L5)

```diff
-   38128: TT => {
+   38280: qq => {
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L10-L13)

```diff
-   38109: (TT, kT, cT) => {
-     var lT = cT(38116),
-       MT = cT(38125),
-       KT = cT(38128);
+   38264: (qq, Eq, gq) => {
+     var Yq = gq(38267),
+       lq = gq(38273),
+       Oq = gq(38280);
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L135)

```diff
-   38116: (TT, kT) => {
+   38267: (qq, Eq) => {
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L189)

```diff
-   38105: (TT, kT, cT) => {
+   38258: (qq, Eq, gq) => {
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L205-L207)

```diff
-     var lT, MT = cT(38109),
-       KT = cT(38135),
-       OT = cT(38151);
+     var Yq, lq = gq(38264),
+       Oq = gq(38284),
+       mq = gq(38302);
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L252)

```diff
-   38158: (TT, kT) => {
+   38309: (qq, Eq) => {
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L291)

```diff
-   38151: (TT, kT, cT) => {
+   38302: (qq, Eq, gq) => {
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L367-L369)

```diff
-     var lT = cT(38109),
-       MT = cT(38116),
-       KT = cT(38158),
+     var Yq = gq(38264),
+       lq = gq(38267),
+       Oq = gq(38309),
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L372-L374)

```diff
-       fT = cT(38135),
-       xT = cT(38161),
-       IT = cT(38167),
+       Aq = gq(38284),
+       cq = gq(38317),
+       uq = gq(38319),
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L400)

```diff
-       TT: for (var vT = MT, tT = MT * AT; vT < KT; ++vT, tT += AT) {
+       qq: for (var aq = lq, Vq = lq * Bq; aq < Oq; ++aq, Vq += Bq) {
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L419)

```diff
-       TT: for (var jT = lT, vT = lT * IT; jT < MT; ++jT, vT += IT) {
+       qq: for (var Nq = Yq, aq = Yq * uq; Nq < lq; ++Nq, aq += uq) {
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L438)

```diff
-   38161: (TT, kT, cT) => {
+   38317: (qq, Eq, gq) => {
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L481)

```diff
-     var lT = cT(38167)("lo<p0", ["p0"]),
+     var Yq = gq(38319)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L496)

```diff
-   38167: TT => {
+   38319: qq => {
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L506)

```diff
-   38144: TT => {
+   38293: qq => {
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L595)

```diff
-   38135: (TT, kT, cT) => {
+   38284: (qq, Eq, gq) => {
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L689)

```diff
-         lT ? PT = OT : rT = OT;
+         Yq ? rq = mq : tq = mq;
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L713)

```diff
-               TT: for (var uT = 0; uT < oT; ++uT) {
+               qq: for (var Gq = 0; Gq < Zq; ++Gq) {
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L750)

```diff
-               TT: for (var oT = 0; oT < PT; ++oT) {
+               qq: for (var Zq = 0; Zq < rq; ++Zq) {
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L773-L775)

```diff
-     var lT = cT(38109),
-       MT = cT(38116),
-       KT = cT(38144),
+     var Yq = gq(38264),
+       lq = gq(38267),
+       Oq = gq(38293),
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L796)

```diff
-   38125: TT => {
+   38273: qq => {
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L822)

```diff
-   38077: (TT, kT, cT) => {
+   38224: (qq, Eq, gq) => {
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L841-L843)

```diff
-         OT && (KT.remove(TT), lT.Om && (lT.multi ? (OT.forEach((kT => {
-           kT && lT.Om(TT, kT)
-         })), OT.length = 0) : lT.Om(TT, OT)), yT.removals.push(KT), xT())
+         mq && (Oq.remove(qq), Yq.OJ && (Yq.multi ? (mq.forEach((Eq => {
+           Eq && Yq.OJ(qq, Eq)
+         })), mq.length = 0) : Yq.OJ(qq, mq)), xq.removals.push(Oq), cq())
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L874)

```diff
-       this.ft = MT, this._systems = KT, this._renderSystems = OT, this.tL = function(kT) {
+       this.qV = lq, this._systems = Oq, this._renderSystems = mq, this.eC = function(Eq) {
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L876)

```diff
-         return Array.isArray(kT) && kT.forEach((kT => TT.dJ(lT, kT))), lT
+         return Array.isArray(Eq) && Eq.forEach((Eq => qq.zk(Yq, Eq))), Yq
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L881)

```diff
-       }, this.sTT = function(TT) {
+       }, this.ugq = function(qq) {
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L887)

```diff
-         if (MT[cT]) throw new Error(`Component ${cT} already exists.`);
+         if (lq[gq]) throw new Error(`Component ${gq} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L889)

```diff
-         return yT.name = cT, yT.multi = !!TT.multi, yT.order = isNaN(TT.order) ? 99 : TT.order, yT.stateConstructor = TT.stateConstructor || null, yT.state = TT.state || {}, yT.uF = TT.uF || null, yT.Om = TT.Om || null, yT.system = TT.system || null, yT.ZN = TT.ZN || null, kT[cT] … [truncated]
+         return xq.name = gq, xq.multi = !!qq.multi, xq.order = isNaN(qq.order) ? 99 : qq.order, xq.stateConstructor = qq.stateConstructor || null, xq.state = qq.state || {}, xq.Fy = qq.Fy || null, xq.OJ = qq.OJ || null, xq.system = qq.system || null, xq.Vr = qq.Vr || null, Eq[gq] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L892)

```diff
-         if (!lT) throw new Error(`Unknown component: ${TT}`);
+         if (!Yq) throw new Error(`Unknown component: ${qq}`);
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L896)

```diff
-         yT.name = TT, yT.multi = !!cT.multi, yT.order = isNaN(cT.order) ? 99 : cT.order, yT.state = cT.state || {}, yT.uF = cT.uF || null, yT.Om = cT.Om || null, yT.system = cT.system || null, yT.ZN = cT.ZN || null, kT[TT] = yT, MT[TT]._pendingMultiCleanup = !1, MT[TT]._multiClea … [truncated]
+         xq.name = qq, xq.multi = !!gq.multi, xq.order = isNaN(gq.order) ? 99 : gq.order, xq.state = gq.state || {}, xq.Fy = gq.Fy || null, xq.OJ = gq.OJ || null, xq.system = gq.system || null, xq.Vr = gq.Vr || null, Eq[qq] = xq, lq[qq]._pendingMultiCleanup = !1, lq[qq]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L900)

```diff
-         yT.ZN && xT < 0 && OT.push(TT), !yT.ZN && xT >= 0 && OT.splice(xT, 1), OT.sort(((TT, cT) => kT[TT].order - kT[cT].order));
+         xq.Vr && cq < 0 && mq.push(qq), !xq.Vr && cq >= 0 && mq.splice(cq, 1), mq.sort(((qq, gq) => Eq[qq].order - Eq[gq].order));
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L902)

```diff
-         return this.VJ(TT).forEach((TT => {
+         return this.Hk(qq).forEach((qq => {
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L904)

```diff
-           yT.uF && yT.uF(TT.ZJ, TT)
+           xq.Fy && xq.Fy(qq.Zk, qq)
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L908)

```diff
-         if (!lT) throw new Error(`Unknown component: ${cT}`);
+         if (!Yq) throw new Error(`Unknown component: ${gq}`);
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L910)

```diff
-           TT && fT(TT.ZJ || TT[0].ZJ, cT)
+           qq && Aq(qq.Zk || qq[0].Zk, gq)
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L915)

```diff
-       }, this.dJ = function(TT, cT, lT) {
+       }, this.zk = function(qq, gq, Yq) {
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L918-L919)

```diff
-         if (!yT) throw new Error(`Unknown component: ${cT}.`);
-         if (yT.hash[TT] && !OT.multi) throw new Error(`Entity ${TT} already has component: ${cT}.`);
+         if (!xq) throw new Error(`Unknown component: ${gq}.`);
+         if (xq.hash[qq] && !mq.multi) throw new Error(`Entity ${qq} already has component: ${gq}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L921)

```diff
-           if (!(KT = new OT.stateConstructor).hasOwnProperty("ZJ")) throw new Error(`Component ${OT.name} stateConstructor type does not have property __id`);
+           if (!(Oq = new mq.stateConstructor).hasOwnProperty("Zk")) throw new Error(`Component ${mq.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L924)

```diff
-           ZJ: TT,
+           Zk: qq,
```

#### 41. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L928)

```diff
-         if (KT.ZJ = TT, OT.multi) {
+         if (Oq.Zk = qq, mq.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L932-L933)

```diff
-         return OT.uF && OT.uF(TT, KT), this
-       }, this.o9 = function(TT, kT) {
+         return mq.Fy && mq.Fy(qq, Oq), this
+       }, this.mEq = function(qq, Eq) {
```

#### 43. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L935)

```diff
-         if (!cT) throw new Error(`Unknown component: ${kT}.`);
+         if (!gq) throw new Error(`Unknown component: ${Eq}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L937-L938)

```diff
-       }, this.LJ = function(kT, cT) {
-         if (!MT[cT]) throw new Error(`Unknown component: ${cT}.`);
+       }, this.Lk = function(Eq, gq) {
+         if (!lq[gq]) throw new Error(`Unknown component: ${gq}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L942)

```diff
-         if (!cT) throw new Error(`Unknown component: ${kT}.`);
+         if (!gq) throw new Error(`Unknown component: ${Eq}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L944)

```diff
-       }, this.VJ = function(TT) {
+       }, this.Hk = function(qq) {
```

#### 47. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L946)

```diff
-         if (!kT) throw new Error(`Unknown component: ${TT}.`);
+         if (!Eq) throw new Error(`Unknown component: ${qq}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L948-L949)

```diff
-       }, this.JTT = function(TT) {
-         if (!MT[TT]) throw new Error(`Unknown component: ${TT}.`);
+       }, this.kEq = function(qq) {
+         if (!lq[qq]) throw new Error(`Unknown component: ${qq}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L952-L953)

```diff
-       }, this.ZTT = function(TT) {
-         if (!MT[TT]) throw new Error(`Unknown component: ${TT}.`);
+       }, this.KEq = function(qq) {
+         if (!lq[qq]) throw new Error(`Unknown component: ${qq}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L956)

```diff
-       }, this.UA = function(cT) {
+       }, this.SB = function(gq) {
```

#### 51. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L971)

```diff
-           yT.ZN(cT, fT.list), AT()
+           xq.Vr(gq, Aq.list), Bq()
```

#### 52. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L977)

```diff
-         if (!fT) throw new Error(`Unknown component: ${lT}.`);
+         if (!Aq) throw new Error(`Unknown component: ${Yq}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L983)

```diff
-             KT && (MT[lT] = null, kT.Om && kT.Om(TT, KT), yT.multiComps.push({
+             Oq && (lq[Yq] = null, Eq.OJ && Eq.OJ(qq, Oq), xq.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L991)

```diff
-     var lT = cT(38080)
+     var Yq = gq(38231)
```

#### 55. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L993)

```diff
-   38080: TT => {
+   38231: qq => {
```

#### 56. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1030-L1046` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1030) · [Before (L1030-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1030-L1046)

```diff
-   37583: TT => {
-     TT.exports = function(TT) {
-       for (var kT = new Array(TT), cT = 0; cT < TT; ++cT) kT[cT] = cT;
-       return kT
-     }
-   },
-   37585: TT => {
-     function kT(TT) {
-       return !!TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
-     }
-     TT.exports = function(TT) {
-       return null != TT && (kT(TT) || function(TT) {
-         return "function" === typeof TT.readFloatLE && "function" === typeof TT.slice && kT(TT.slice(0, 0))
-       }(TT) || !!TT._isBuffer)
-     }
-   },
- ... (1 more removed lines; see GitHub link above)
+   38031: (qq, Eq, gq) => {
```

#### 57. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1137` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1121) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1137)

```diff
-         return TT ? "Symbol(src)_1." + TT : ""
+         return qq ? "Symbol(src)_1." + qq : ""
```

#### 58. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1143` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1127) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1143)

```diff
-       Mk = dT ? ZT.Ov : void 0,
+       lE = Jq ? pq.IN : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1253` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1237) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1253)

```diff
-           if (UT(TT)) return jT ? TT : {};
+           if (Fq(qq)) return Nq ? qq : {};
```

#### 60. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1263` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1247) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1263)

```diff
-           if (!GT[VT]) return jT ? TT : {};
+           if (!Tq[zq]) return Nq ? qq : {};
```

#### 61. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1267` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1251) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1267)

```diff
-               case ST:
+               case oq:
```

#### 62. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1269-L1270` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1253-L1254) · [Before (L1269-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1269-L1270)

```diff
-               case OT:
-               case yT:
+               case mq:
+               case xq:
```

#### 63. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1272` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1256) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1272)

```diff
-               case DT:
+               case Pq:
```

#### 64. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1277-L1285` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1261-L1269) · [Before (L1277-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1277-L1285)

```diff
-               case aT:
-               case FT:
-               case rT:
-               case PT:
-               case wT:
-               case mT:
-               case bT:
-               case zT:
-               case JT:
+               case Qq:
+               case yq:
+               case tq:
+               case rq:
+               case vq:
+               case hq:
+               case nq:
+               case bq:
+               case iq:
```

#### 65. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1290` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/223.js#L1274) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/223.js#L1290)

```diff
-               case IT:
+               case uq:
```
