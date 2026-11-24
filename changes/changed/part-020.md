# Changed — Bundle Modifications Report (Part 020 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `20 / 65` (**308** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (869 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 41. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2656-L2662` → after: `L1079-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1079-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1079-L1103) · [Before (L2656-L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2656-L2662)

```diff
- 
-       function Kz(DD) {
-         let zD;
-         if (void 0 !== DD)
-           for (let wD = 0; wD < DD.length; wD++) {
-             const pD = DD[wD];
-             (zD ?? !pD) && (zD ?? (zD = DD.slice(0, wD)), pD && zD.push(pD))
+       static parse(pp) {
+         let ip, cp = [],
+           Op = [],
+           op = [];
+         for (let Ip of pp.split(/\r\n?|\n/)) {
+           for (; ip = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Ip);) {
+             let pp = ip[1] ? +ip[1] : null,
+               Sp = ip[2] || ip[3] || "",
+               xp = -1,
+               Lp = Sp.replace(/\\[{}]/g, (pp => pp[1]));
+             for (let ip = 0; ip < cp.length; ip++)(null != pp ? cp[ip].seq == pp : Lp && cp[ip].name == Lp) && (xp = ip);
+             if (xp < 0) {
+               let ip = 0;
+               for (; ip < cp.length && (null == pp || null != cp[ip].seq && cp[ip].seq < pp);) ip++;
+               cp.splice(ip, 0, {
+                 seq: pp,
+ ... (9 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2664` → after: `L1105-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1105-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1105-L1110) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2664)

```diff
-         return zD ?? DD
+           Ip = Ip.replace(/\\([{}])/g, ((pp, ip, cp) => {
+             for (let Ip of op) Ip.line == Op.length && Ip.from > cp && (Ip.from--, Ip.to--);
+             return ip
+           })), Op.push(Ip)
+         }
+         return new ii(Op, op)
```

#### 43. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2666-L2679` → after: `L1112-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1112-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1112-L1120) · [Before (L2666-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2666-L2679)

```diff
- 
-       function rz(DD, zD, wD) {
-         if (!zD || !DD || 0 === zD.length || 0 === DD.length) return zD;
-         const pD = [];
-         DD: for (let sD = 0, KD = 0; KD < zD.length; KD++) {
-           KD > 0 && np.assertGreaterThanOrEqual(wD(zD[KD], zD[KD - 1]), 0);
-           zD: for (const rD = sD; sD < DD.length; sD++) switch (sD > rD && np.assertGreaterThanOrEqual(wD(DD[sD], DD[sD - 1]), 0), wD(zD[KD], DD[sD])) {
-             case -1:
-               pD.push(zD[KD]);
-               continue DD;
-             case 0:
-               continue DD;
-             case 1:
-               continue zD
+     }
+     let ci = op.c.widget({
+         widget: new class extends op.l {
+           toDOM() {
+             let pp = document.createElement("span");
+             return pp.className = "cm-snippetFieldPosition", pp
+           }
+           ignoreEvent() {
+             return !1
```

#### 44. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2682` → after: `L1123-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1123-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1123-L1129) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2682)

```diff
-         return pD
+       }),
+       Oi = op.c.mark({
+         class: "cm-snippetField"
+       });
+     class oi {
+       constructor(pp, ip) {
+         this.By = pp, this.active = ip, this.deco = op.c.set(pp.map((pp => (pp.from == pp.to ? ci : Oi).range(pp.from, pp.to))), !0)
```

#### 45. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2684-L2686` → after: `L1131-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1131-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1131-L1138) · [Before (L2684-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2684-L2686)

```diff
- 
-       function Lz(DD, zD) {
-         return void 0 === zD ? DD : void 0 === DD ? [zD] : (DD.push(zD), DD)
+       map(pp) {
+         let ip = [];
+         for (let cp of this.By) {
+           let Op = cp.map(pp);
+           if (!Op) return null;
+           ip.push(Op)
+         }
+         return new oi(ip, this.active)
```

#### 46. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2688-L2690` → after: `L1140-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1140-L1141) · [Before (L2688-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2688-L2690)

```diff
- 
-       function cz(DD, zD) {
-         return void 0 === DD ? zD : void 0 === zD ? DD : ww(DD) ? ww(zD) ? FD(DD, zD) : Lz(DD, zD) : ww(zD) ? Lz(zD, DD) : [DD, zD]
+       selectionInsideField(pp) {
+         return pp.By.every((pp => this.By.some((ip => ip.field == this.active && ip.from <= pp.from && ip.to >= pp.to))))
```

#### 47. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2693-L2694` → after: `L1160-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1160-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1160-L1186) · [Before (L2693-L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2693-L2694)

```diff
-       function gz(DD, zD) {
-         return zD < 0 ? DD.length + zD : zD
+     function Li(pp, ip) {
+       return Op.l.create(pp.filter((pp => pp.field == ip)).map((pp => Op.l.range(pp.from, pp.to))))
+     }
+ 
+     function Yi(pp) {
+       let ip = ii.parse(pp);
+       return (pp, cp, op, Ip) => {
+         let {
+           text: Sp,
+           By: xp
+         } = ip.instantiate(pp.state, op), {
+           main: Lp
+         } = pp.state.selection, Yp = {
+           changes: {
+             from: op,
+             to: Ip == Lp.from ? Lp.to : Ip,
+ ... (11 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2697-L2701` → after: `L1190-L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1190-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1190-L1272) · [Before (L2697-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2697-L2701)

```diff
-       function Rz(DD, zD, wD, pD) {
-         if (void 0 === zD || 0 === zD.length) return DD;
-         if (void 0 === DD) return zD.slice(wD, pD);
-         wD = void 0 === wD ? 0 : gz(zD, wD), pD = void 0 === pD ? zD.length : gz(zD, pD);
-         for (let sD = wD; sD < pD && sD < zD.length; sD++) void 0 !== zD[sD] && DD.push(zD[sD]);
+     function Di(pp) {
+       return ip => {
+         let {
+           state: cp,
+           dispatch: Op
+         } = ip, op = cp.field(xi, !1);
+         if (!op || pp < 0 && 0 == op.active) return !1;
+         let Ip = op.active + pp,
+           Sp = pp > 0 && !op.By.some((ip => ip.field == Ip + pp));
+         return Op(cp.update({
+           selection: Li(op.By, Ip),
+           effects: Ii.of(Sp ? null : new oi(op.By, Ip)),
+           scrollIntoView: !0
+         })), !0
+       }
+     }
+ ... (67 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2705-L2706` → after: `L1591-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1591-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1591-L1655) · [Before (L2705-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2705-L2706)

```diff
-       function Az(DD, zD, wD) {
-         return !XD(DD, zD, wD) && (DD.push(zD), !0)
+     function Yp() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       return [Lp, Sp.of(Object.assign({
+         generatedID: Math.floor(1e9 * Math.random()).toString(36)
+       }, pp))]
+     }
+ 
+     function Dp(pp, ip) {
+       let {
+         version: cp,
+         unconfirmed: Yp
+       } = pp.field(Lp), {
+         clientID: Dp
+       } = pp.facet(Sp);
+       cp += ip.length;
+       let Ap = [],
+ ... (49 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2708-L2710` → after: `L1657-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1657-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1657-L1658) · [Before (L2708-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2708-L2710)

```diff
- 
-       function Uz(DD, zD, wD) {
-         return void 0 !== DD ? (Az(DD, zD, wD), DD) : [zD]
+       get context() {
+         return this.curContext ? this.curContext.context : null
```

#### 51. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2712-L2714` → after: `L1660-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1660-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1660-L1661) · [Before (L2712-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2712-L2714)

```diff
- 
-       function fz(DD, zD) {
-         return 0 === DD.length ? gD : DD.slice().sort(zD)
+       pushState(pp, ip) {
+         this.stack.push(this.state, ip, this.bufferBase + this.buffer.length), this.state = pp
```

#### 52. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2716-L2718` → after: `L1663-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1663-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1663-L1714) · [Before (L2716-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2716-L2718)

```diff
- 
-       function* Iz(DD) {
-         for (let zD = DD.length - 1; zD >= 0; zD--) yield DD[zD]
+       reduce(pp) {
+         var ip;
+         let cp = pp >> 19,
+           Op = 65535 & pp,
+           {
+             parser: op
+           } = this.p,
+           Ip = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
+           Sp = op.dynamicPrecedence(Op);
+         if (Sp && (this.score += Sp), 0 == cp) return this.pushState(op.getGoto(this.state, Op, !0), this.reducePos), Op < op.minRepeatTerm && this.storeNode(Op, this.reducePos, this.reducePos, Ip ? 8 : 4, !0), void this.reduceContext(Op, this.reducePos);
+         let xp = this.stack.length - 3 * (cp - 1) - (262144 & pp ? 6 : 0),
+           Lp = xp ? this.stack[xp - 2] : this.p.By[0].from,
+           Yp = this.reducePos - Lp;
+         Yp >= 2e3 && !(null === (ip = this.p.parser.nodeSet.types[Op]) || void 0 === ip ? void 0 : ip.isAnonymous) && (Lp == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Yp) : this.p.lastBigReductionSize < Yp && (this.p.bigReductionCou … [truncated]
+         let Dp = xp ? this.stack[xp - 1] : 0,
+           Ap = this.bufferBase + this.buffer.length - Dp;
+ ... (36 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2720-L2724` → after: `L1716-L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1716-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1716-L1769) · [Before (L2720-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2720-L2724)

```diff
- 
-       function Bz(DD, zD, wD, pD) {
-         for (; wD < pD;) {
-           if (DD[wD] !== zD[wD]) return !1;
-           wD++
+       shift(pp, ip, cp, Op) {
+         if (131072 & pp) this.pushState(65535 & pp, this.pos);
+         else if (0 == (262144 & pp)) {
+           let op = pp,
+             {
+               parser: Ip
+             } = this.p;
+           this.pos = Op;
+           let Sp = Ip.stateFlag(op, 1);
+           !Sp && (Op > cp || ip <= Ip.maxNode) && (this.reducePos = Op), this.pushState(op, Sp ? cp : Math.min(cp, this.reducePos)), this.shiftContext(ip, cp), ip <= Ip.maxNode && this.buffer.push(ip, cp, Op, 4)
+         } else this.pos = Op, this.shiftContext(ip, cp), ip <= this.p.parser.maxNode && this.buffer.push(ip, cp, Op, 4)
+       }
+       apply(pp, ip, cp, Op) {
+         65536 & pp ? this.reduce(pp) : this.shift(pp, ip, cp, Op)
+       }
+       useNode(pp, ip) {
+ ... (38 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2726` → after: `L1771-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1771-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1771-L1778) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2726)

```diff
-         return !0
+         let cp = [];
+         for (let Op = 0; Op < ip.length && cp.length < 4; Op += 2) {
+           let pp = ip[Op + 1];
+           if (pp == this.state) continue;
+           let op = this.split();
+           op.pushState(pp, this.pos), op.storeNode(0, op.pos, op.pos, 4, !0), op.shiftContext(ip[Op], this.pos), op.reducePos = this.pos, op.score -= 200, cp.push(op)
+         }
+         return cp
```

#### 55. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2728-L2733` → after: `L1780-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1780-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1780-L1796) · [Before (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2728-L2733)

```diff
-       var Gz = Array.prototype.at ? (DD, zD) => null == DD ? void 0 : DD.at(zD) : (DD, zD) => {
-         if (void 0 !== DD && (zD = gz(DD, zD)) < DD.length) return DD[zD]
-       };
- 
-       function hz(DD) {
-         return void 0 === DD || 0 === DD.length ? void 0 : DD[0]
+       forceReduce() {
+         let {
+           parser: pp
+         } = this.p, ip = pp.stateSlot(this.state, 5);
+         if (0 == (65536 & ip)) return !1;
+         if (!pp.validAction(this.state, ip)) {
+           let cp = ip >> 19,
+             Op = 65535 & ip,
+             op = this.stack.length - 3 * cp;
+           if (op < 0 || pp.getGoto(this.stack[op], Op, !1) < 0) {
+             let pp = this.findForcedReduction();
+             if (null == pp) return !1;
+             ip = pp
+           }
+           this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2735-L2738` → after: `L1798-L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1798-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1798-L1817) · [Before (L2735-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2735-L2738)

```diff
- 
-       function nz(DD) {
-         if (void 0 !== DD)
-           for (const zD of DD) return zD
+       findForcedReduction() {
+         let {
+           parser: pp
+         } = this.p, ip = [], cp = (Op, op) => {
+           if (!ip.includes(Op)) return ip.push(Op), pp.allActions(Op, (ip => {
+             if (393216 & ip);
+             else if (65536 & ip) {
+               let cp = (ip >> 19) - op;
+               if (cp > 1) {
+                 let Op = 65535 & ip,
+                   op = this.stack.length - 3 * cp;
+                 if (op >= 0 && pp.getGoto(this.stack[op], Op, !1) >= 0) return cp << 19 | 65536 | Op
+               }
+             } else {
+               let pp = cp(ip, op + 1);
+               if (null != pp) return pp
+ ... (4 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2740-L2742` → after: `L1819-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1819-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1819-L1824) · [Before (L2740-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2740-L2742)

```diff
- 
-       function Mz(DD) {
-         return np.assert(0 !== DD.length), DD[0]
+       forceAll() {
+         for (; !this.p.parser.stateFlag(this.state, 2);)
+           if (!this.forceReduce()) {
+             this.storeNode(0, this.pos, this.pos, 4, !0);
+             break
+           } return this
```

#### 58. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2744-L2747` → after: `L1826-L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1826-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1826-L1831) · [Before (L2744-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2744-L2747)

```diff
- 
-       function Oz(DD) {
-         for (const zD of DD) return zD;
-         np.fail("iterator is empty")
+       get deadEnd() {
+         if (3 != this.stack.length) return !1;
+         let {
+           parser: pp
+         } = this.p;
+         return 65535 == pp.data[pp.stateSlot(this.state, 1)] && !pp.stateSlot(this.state, 4)
```

#### 59. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2749-L2751` → after: `L1833-L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1833-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1833-L1834) · [Before (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2749-L2751)

```diff
- 
-       function Jz(DD) {
-         return void 0 === DD || 0 === DD.length ? void 0 : DD[DD.length - 1]
+       restart() {
+         this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
```

#### 60. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2753-L2755` → after: `L1836-L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1836-L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1836-L1840) · [Before (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2753-L2755)

```diff
- 
-       function Ez(DD) {
-         return np.assert(0 !== DD.length), DD[DD.length - 1]
+       sameState(pp) {
+         if (this.state != pp.state || this.stack.length != pp.stack.length) return !1;
+         for (let ip = 0; ip < this.stack.length; ip += 3)
+           if (this.stack[ip] != pp.stack[ip]) return !1;
+         return !0
```

#### 61. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2757-L2759` → after: `L1842-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1842-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1842-L1843) · [Before (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2757-L2759)

```diff
- 
-       function Qz(DD) {
-         return void 0 !== DD && 1 === DD.length ? DD[0] : void 0
+       get parser() {
+         return this.p.parser
```

#### 62. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2761-L2763` → after: `L1845-L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1845-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1845-L1846) · [Before (L2761-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2761-L2763)

```diff
- 
-       function Xz(DD) {
-         return np.checkDefined(Qz(DD))
+       dialectEnabled(pp) {
+         return this.p.parser.dialect.flags[pp]
```

#### 63. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2765-L2767` → after: `L1848-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1848-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1848-L1849) · [Before (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2765-L2767)

```diff
- 
-       function Vz(DD) {
-         return void 0 !== DD && 1 === DD.length ? DD[0] : DD
+       shiftContext(pp, ip) {
+         this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, pp, this, this.p.stream.reset(ip)))
```

#### 64. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2769-L2772` → after: `L1851-L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1851-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1851-L1852) · [Before (L2769-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2769-L2772)

```diff
- 
-       function Pz(DD, zD, wD) {
-         const pD = DD.slice(0);
-         return pD[zD] = wD, pD
+       reduceContext(pp, ip) {
+         this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, pp, this, this.p.stream.reset(ip)))
```

#### 65. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2774-L2776` → after: `L1854-L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1854-L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1854-L1856) · [Before (L2774-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2774-L2776)

```diff
- 
-       function Cz(DD, zD, wD, pD, sD) {
-         return xz(DD, wD(zD), wD, pD, sD)
+       emitContext() {
+         let pp = this.buffer.length - 1;
+         (pp < 0 || -3 != this.buffer[pp]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
```

#### 66. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2778-L2795` → after: `L1858-L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1858-L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1858-L1860) · [Before (L2778-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2778-L2795)

```diff
- 
-       function xz(DD, zD, wD, pD, sD) {
-         if (!vD(DD)) return -1;
-         let KD = sD ?? 0,
-           rD = DD.length - 1;
-         for (; KD <= rD;) {
-           const sD = KD + (rD - KD >> 1);
-           switch (pD(wD(DD[sD], sD), zD)) {
-             case -1:
-               KD = sD + 1;
-               break;
-             case 0:
-               return sD;
-             case 1:
-               rD = sD - 1
-           }
- ... (2 more removed lines; see GitHub link above)
+       emitLookAhead() {
+         let pp = this.buffer.length - 1;
+         (pp < 0 || -4 != this.buffer[pp]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
```

#### 67. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2797-L2807` → after: `L1862-L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1862-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1862-L1865) · [Before (L2797-L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2797-L2807)

```diff
- 
-       function Tz(DD, zD, wD, pD, sD) {
-         if (DD && DD.length > 0) {
-           const KD = DD.length;
-           if (KD > 0) {
-             let rD = void 0 === pD || pD < 0 ? 0 : pD;
-             const LD = void 0 === sD || rD + sD > KD - 1 ? KD - 1 : rD + sD;
-             let cD;
-             for (arguments.length <= 2 ? (cD = DD[rD], rD++) : cD = wD; rD <= LD;) cD = zD(cD, DD[rD], rD), rD++;
-             return cD
-           }
+       updateContext(pp) {
+         if (pp != this.curContext.context) {
+           let ip = new Ip(this.curContext.tracker, pp);
+           ip.hash != this.curContext.hash && this.emitContext(), this.curContext = ip
```

#### 68. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2811-L2814` → after: `L1868-L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1868-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1868-L1869) · [Before (L2811-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2811-L2814)

```diff
-       var bz = Object.prototype.hasOwnProperty;
- 
-       function jz(DD, zD) {
-         return bz.call(DD, zD)
+       setLookAhead(pp) {
+         return !(pp <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = pp, !0)
```

#### 69. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2816-L2818` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1871-L1872) · [Before (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2816-L2818)

```diff
- 
-       function dz(DD, zD) {
-         return bz.call(DD, zD) ? DD[zD] : void 0
+       close() {
+         this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
```

#### 70. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2820-L2824` → after: `L1874-L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1874-L1877) · [Before (L2820-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2820-L2824)

```diff
- 
-       function Sz(DD) {
-         const zD = [];
-         for (const wD in DD) bz.call(DD, wD) && zD.push(wD);
-         return zD
+     }
+     class Ip {
+       constructor(pp, ip) {
+         this.tracker = pp, this.context = ip, this.hash = pp.strict ? pp.hash(ip) : 0
```

#### 71. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2826-L2833` → after: `L1879-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1879-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1879-L1882) · [Before (L2826-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2826-L2833)

```diff
- 
-       function iz(DD) {
-         const zD = [];
-         do {
-           const wD = Object.getOwnPropertyNames(DD);
-           for (const DD of wD) Az(zD, DD)
-         } while (DD = Object.getPrototypeOf(DD));
-         return zD
+     }
+     class Sp {
+       constructor(pp) {
+         this.start = pp, this.state = pp.state, this.stack = pp.stack, this.base = this.stack.length
```

#### 72. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2835-L2839` → after: `L1884-L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1884-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1884-L1889) · [Before (L2835-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2835-L2839)

```diff
- 
-       function lz(DD) {
-         const zD = [];
-         for (const wD in DD) bz.call(DD, wD) && zD.push(DD[wD]);
-         return zD
+       reduce(pp) {
+         let ip = 65535 & pp,
+           cp = pp >> 19;
+         0 == cp ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (cp - 1);
+         let Op = this.start.p.parser.getGoto(this.stack[this.base - 3], ip, !0);
+         this.state = Op
```

#### 73. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2841-L2845` → after: `L1891-L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1891-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1891-L1894) · [Before (L2841-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2841-L2845)

```diff
- 
-       function Wz(DD, zD) {
-         const wD = new Array(DD);
-         for (let pD = 0; pD < DD; pD++) wD[pD] = zD(pD);
-         return wD
+     }
+     class xp {
+       constructor(pp, ip, cp) {
+         this.stack = pp, this.pos = ip, this.index = cp, this.buffer = pp.buffer, 0 == this.index && this.maybeNext()
```

#### 74. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2847-L2851` → after: `L1896-L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1896-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1896-L1898) · [Before (L2847-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2847-L2851)

```diff
- 
-       function Nz(DD, zD) {
-         const wD = [];
-         for (const pD of DD) wD.push(zD ? zD(pD) : pD);
-         return wD
+       static create(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.bufferBase + pp.buffer.length;
+         return new xp(pp, ip, ip - pp.bufferBase)
```

#### 75. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2853-L2859` → after: `L1900-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1900-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1900-L1902) · [Before (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2853-L2859)

```diff
- 
-       function Zz(DD) {
-         for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
-         for (const sD of wD)
-           if (void 0 !== sD)
-             for (const zD in sD) jz(sD, zD) && (DD[zD] = sD[zD]);
-         return DD
+       maybeNext() {
+         let pp = this.stack.parent;
+         null != pp && (this.index = this.stack.bufferBase - pp.bufferBase, this.stack = pp, this.buffer = pp.buffer)
```

#### 76. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2861-L2872` → after: `L1904-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1904-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1904-L1911) · [Before (L2861-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2861-L2872)

```diff
- 
-       function yz(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jw;
-         if (DD === zD) return !0;
-         if (!DD || !zD) return !1;
-         for (const pD in DD)
-           if (bz.call(DD, pD)) {
-             if (!bz.call(zD, pD)) return !1;
-             if (!wD(DD[pD], zD[pD])) return !1
-           } for (const pD in zD)
-           if (bz.call(zD, pD) && !bz.call(DD, pD)) return !1;
-         return !0
+       get id() {
+         return this.buffer[this.index - 4]
+       }
+       get start() {
+         return this.buffer[this.index - 3]
+       }
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 77. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2875-L2881` → after: `L1924-L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1924-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1924-L1968) · [Before (L2875-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2875-L2881)

```diff
-       function kz(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw;
-         const pD = new Map;
-         for (let sD = 0; sD < DD.length; sD++) {
-           const KD = DD[sD],
-             rD = zD(KD);
-           void 0 !== rD && pD.set(rD, wD(KD))
+     function Lp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
+       if ("string" != typeof pp) return pp;
+       let cp = null;
+       for (let Op = 0, op = 0; Op < pp.length;) {
+         let Ip = 0;
+         for (;;) {
+           let ip = pp.charCodeAt(Op++),
+             cp = !1;
+           if (126 == ip) {
+             Ip = 65535;
+             break
+           }
+           ip >= 92 && ip--, ip >= 34 && ip--;
+           let op = ip - 32;
+           if (op >= 46 && (op -= 46, cp = !0), Ip += op, cp) break;
+ ... (29 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2885-L2891` → after: `L1972-L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1972-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1972-L1990) · [Before (L2885-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2885-L2891)

```diff
- 
-       function mz(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw;
-         const pD = [];
-         for (let sD = 0; sD < DD.length; sD++) {
-           const KD = DD[sD];
-           pD[zD(KD)] = wD(KD)
+       clipPos(pp) {
+         if (pp >= this.range.from && pp < this.range.to) return pp;
+         for (let ip of this.By)
+           if (ip.to > pp) return Math.max(pp, ip.from);
+         return this.end
+       }
+       peek(pp) {
+         let ip, cp, Op = this.chunkOff + pp;
+         if (Op >= 0 && Op < this.chunk.length) ip = this.pos + pp, cp = this.chunk.charCodeAt(Op);
+         else {
+           let Op = this.resolveOffset(pp, 1);
+           if (null == Op) return -1;
+           if (ip = Op, ip >= this.chunk2Pos && ip < this.chunk2Pos + this.chunk2.length) cp = this.chunk2.charCodeAt(ip - this.chunk2Pos);
+           else {
+             let pp = this.rangeIndex,
+               Op = this.range;
+ ... (3 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2893` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1992) · [Before (L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2893)

```diff
-         return pD
+         return ip >= this.token.lookAhead && (this.token.lookAhead = ip + 1), cp
```

#### 80. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2895-L2901` → after: `L1994-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L1994-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L1994-L2014) · [Before (L2895-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2895-L2901)

```diff
- 
-       function ez(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw;
-         const pD = Yz();
-         for (let sD = 0; sD < DD.length; sD++) {
-           const KD = DD[sD];
-           pD.add(zD(KD), wD(KD))
+       acceptToken(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = ip ? this.resolveOffset(ip, -1) : this.pos;
+         if (null == cp || cp < this.token.start) throw new RangeError("Token end out of bounds");
+         this.token.value = pp, this.token.end = cp
+       }
+       acceptTokenTo(pp, ip) {
+         this.token.value = pp, this.token.end = ip
+       }
+       getChunk() {
+         if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
+           let {
+             chunk: pp,
+             chunkPos: ip
+           } = this;
+           this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = pp, this.chunk2Pos = ip, this.chunkOff = this.pos - this.chunkPos
+ ... (5 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2905-L2908` → after: `L2017-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2017-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2017-L2018) · [Before (L2905-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2905-L2908)

```diff
- 
-       function oz(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw;
-         return Nz(ez(DD, zD).values(), wD)
+       readNext() {
+         return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
```

#### 82. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2910-L2919` → after: `L2020-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2020-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2020-L2026) · [Before (L2910-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2910-L2919)

```diff
- 
-       function az(DD, zD) {
-         const wD = {};
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             const sD = DD[pD],
-               KD = `${zD(sD)}`;
-             (wD[KD] ?? (wD[KD] = [])).push(sD)
-           }
-         return wD
+       advance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         for (this.chunkOff += pp; this.pos + pp >= this.range.to;) {
+           if (this.rangeIndex == this.By.length - 1) return this.setDone();
+           pp -= this.range.to - this.pos, this.range = this.By[++this.rangeIndex], this.pos = this.range.from
+         }
+         return this.pos += pp, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
```

#### 83. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2921-L2925` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2028-L2029) · [Before (L2921-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2921-L2925)

```diff
- 
-       function uz(DD) {
-         const zD = {};
-         for (const wD in DD) bz.call(DD, wD) && (zD[wD] = DD[wD]);
-         return zD
+       setDone() {
+         return this.pos = this.chunkPos = this.end, this.range = this.By[this.rangeIndex = this.By.length - 1], this.chunk = "", this.next = -1
```

#### 84. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2927-L2931` → after: `L2031-L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2031-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2031-L2048) · [Before (L2927-L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2927-L2931)

```diff
- 
-       function vz(DD, zD) {
-         const wD = {};
-         for (const pD in zD) bz.call(zD, pD) && (wD[pD] = zD[pD]);
-         for (const pD in DD) bz.call(DD, pD) && (wD[pD] = DD[pD]);
+       reset(pp, ip) {
+         if (ip ? (this.token = ip, ip.start = pp, ip.lookAhead = pp + 1, ip.value = ip.extended = -1) : this.token = Dp, this.pos != pp) {
+           if (this.pos = pp, pp == this.end) return this.setDone(), this;
+           for (; pp < this.range.from;) this.range = this.By[--this.rangeIndex];
+           for (; pp >= this.range.to;) this.range = this.By[++this.rangeIndex];
+           pp >= this.chunkPos && pp < this.chunkPos + this.chunk.length ? this.chunkOff = pp - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
+         }
+         return this
+       }
+       read(pp, ip) {
+         if (pp >= this.chunkPos && ip <= this.chunkPos + this.chunk.length) return this.chunk.slice(pp - this.chunkPos, ip - this.chunkPos);
+         if (pp >= this.chunk2Pos && ip <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(pp - this.chunk2Pos, ip - this.chunk2Pos);
+         if (pp >= this.range.from && ip <= this.range.to) return this.input.read(pp, ip);
+         let cp = "";
+         for (let Op of this.By) {
+           if (Op.from >= ip) break;
+ ... (2 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2934-L2936` → after: `L2051-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2051-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2051-L2054) · [Before (L2934-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2934-L2936)

```diff
- 
-       function tz(DD, zD) {
-         for (const wD in zD) bz.call(zD, wD) && (DD[wD] = zD[wD])
+     }
+     class Pp {
+       constructor(pp, ip) {
+         this.data = pp, this.id = ip
```

#### 86. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2938-L2940` → after: `L2056-L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2056-L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2056-L2086) · [Before (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2938-L2940)

```diff
- 
-       function Fz(DD, zD) {
-         return null == zD ? void 0 : zD.bind(DD)
+       token(pp, ip) {
+         let {
+           parser: cp
+         } = ip.p;
+         Up(this.data, pp, ip, this.id, cp.data, cp.tokenPrecTable)
+       }
+     }
+     Pp.prototype.contextual = Pp.prototype.fallback = Pp.prototype.extend = !1;
+     class Wp {
+       constructor(pp, ip, cp) {
+         this.precTable = ip, this.elseToken = cp, this.data = "string" == typeof pp ? Lp(pp) : pp
+       }
+       token(pp, ip) {
+         let cp = pp.pos,
+           Op = 0;
+         for (;;) {
+ ... (15 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2943-L2945` → after: `L2090-L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2090-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2090-L2170) · [Before (L2943-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2943-L2945)

```diff
-       function Yz() {
-         const DD = new Map;
-         return DD.add = Hz, DD.remove = qz, DD
+     function Up(pp, ip, cp, Op, op, Ip) {
+       let Sp = 0,
+         xp = 1 << Op,
+         {
+           dialect: Lp
+         } = cp.p.parser;
+       pp: for (; 0 != (xp & pp[Sp]);) {
+         let cp = pp[Sp + 1];
+         for (let Ap = Sp + 3; Ap < cp; Ap += 2)
+           if ((pp[Ap + 1] & xp) > 0) {
+             let cp = pp[Ap];
+             if (Lp.allows(cp) && (-1 == ip.token.value || ip.token.value == cp || vp(cp, ip.token.value, op, Ip))) {
+               ip.acceptToken(cp);
+               break
+             }
+           } let Op = ip.next,
+ ... (65 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2947-L2950` → after: `L2172-L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2172-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2172-L2206) · [Before (L2947-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2947-L2950)

```diff
- 
-       function Hz(DD, zD) {
-         let wD = this.get(DD);
-         return void 0 !== wD ? wD.push(zD) : this.set(DD, wD = [zD]), wD
+       nextFragment() {
+         let pp = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
+         if (pp) {
+           for (this.safeFrom = pp.openStart ? dp(pp.tree, pp.from + pp.offset, 1) - pp.offset : pp.from, this.safeTo = pp.openEnd ? dp(pp.tree, pp.to + pp.offset, -1) - pp.offset : pp.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
+           this.trees.push(pp.tree), this.start.push(-pp.offset), this.index.push(0), this.nextStart = this.safeFrom
+         } else this.nextStart = 1e9
+       }
+       nodeAt(pp) {
+         if (pp < this.nextStart) return null;
+         for (; this.fragment && this.safeTo <= pp;) this.nextFragment();
+         if (!this.fragment) return null;
+         for (;;) {
+           let ip = this.trees.length - 1;
+           if (ip < 0) return this.nextFragment(), null;
+           let cp = this.trees[ip],
+             op = this.index[ip];
+ ... (19 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2952-L2955` → after: `L2208-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2208-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2208-L2211) · [Before (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2952-L2955)

```diff
- 
-       function qz(DD, zD) {
-         const wD = this.get(DD);
-         void 0 !== wD && (Hw(wD, zD), wD.length || this.delete(DD))
+     }
+     class jp {
+       constructor(pp, ip) {
+         this.stream = ip, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = pp.tokenizers.map((pp => new Yp))
```

#### 90. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2957-L2963` → after: `L2213-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2213-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2213-L2232) · [Before (L2957-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2957-L2963)

```diff
- 
-       function Dw(DD) {
-         const zD = (null == DD ? void 0 : DD.slice()) ?? [];
-         let wD = 0;
- 
-         function pD() {
-           return wD === zD.length
+       getActions(pp) {
+         let ip = 0,
+           cp = null,
+           {
+             parser: Op
+           } = pp.p,
+           {
+             tokenizers: op
+           } = Op,
+           Ip = Op.stateSlot(pp.state, 3),
+           Sp = pp.curContext ? pp.curContext.hash : 0,
+           xp = 0;
+         for (let Lp = 0; Lp < op.length; Lp++) {
+           if (0 == (1 << Lp & Ip)) continue;
+           let Op = op[Lp],
+             Yp = this.tokens[Lp];
+ ... (4 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2965-L2974` → after: `L2234-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2234-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2234-L2258) · [Before (L2965-L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2965-L2974)

```diff
-         return {
-           enqueue: function() {
-             zD.push(...arguments)
-           },
-           dequeue: function() {
-             if (pD()) throw new Error("Queue is empty");
-             const DD = zD[wD];
-             if (zD[wD] = void 0, wD++, wD > 100 && wD > zD.length >> 1) {
-               const DD = zD.length - wD;
-               zD.copyWithin(0, wD), zD.length = DD, wD = 0
+         for (; this.actions.length > ip;) this.actions.pop();
+         return xp && pp.setLookAhead(xp), cp || pp.pos != this.stream.end || (cp = new Yp, cp.value = pp.p.parser.eofTerm, cp.start = cp.end = pp.pos, ip = this.addActions(pp, cp.value, cp.end, ip)), this.mainToken = cp, this.actions
+       }
+       getMainToken(pp) {
+         if (this.mainToken) return this.mainToken;
+         let ip = new Yp,
+           {
+             pos: cp,
+             p: Op
+           } = pp;
+         return ip.start = cp, ip.end = Math.min(cp + 1, Op.stream.end), ip.value = cp == Op.stream.end ? Op.parser.eofTerm : 0, ip
+       }
+       updateCachedToken(pp, ip, cp) {
+         let Op = this.stream.clipPos(cp.pos);
+         if (ip.token(this.stream.reset(Op, pp), cp), pp.value > -1) {
+           let {
+ ... (9 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2976-L2979` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2260) · [Before (L2976-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2976-L2979)

```diff
-             return DD
-           },
-           AI: pD
-         }
+         } else pp.value = 0, pp.end = this.stream.clipPos(Op + 1)
```

#### 93. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2981-L2987` → after: `L2262-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2262-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2262-L2307) · [Before (L2981-L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2981-L2987)

```diff
- 
-       function zw(DD, zD) {
-         const wD = new Map;
-         let pD = 0;
- 
-         function* sD() {
-           for (const DD of wD.values()) ww(DD) ? yield* DD: yield DD
+       putAction(pp, ip, cp, Op) {
+         for (let op = 0; op < Op; op += 3)
+           if (this.actions[op] == pp) return Op;
+         return this.actions[Op++] = pp, this.actions[Op++] = ip, this.actions[Op++] = cp, Op
+       }
+       addActions(pp, ip, cp, Op) {
+         let {
+           state: op
+         } = pp, {
+           parser: Ip
+         } = pp.p, {
+           data: Sp
+         } = Ip;
+         for (let xp = 0; xp < 2; xp++)
+           for (let pp = Ip.stateSlot(op, xp ? 2 : 1);; pp += 3) {
+             if (65535 == Sp[pp]) {
+ ... (30 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2989-L3003` → after: `L2309-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2309-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2309-L2318) · [Before (L2989-L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2989-L3003)

```diff
-         const KD = {
-           has(pD) {
-             const sD = DD(pD);
-             if (!wD.has(sD)) return !1;
-             const KD = wD.get(sD);
-             return ww(KD) ? XD(KD, pD, zD) : zD(KD, pD)
-           },
-           add(sD) {
-             const KD = DD(sD);
-             if (wD.has(KD)) {
-               const DD = wD.get(KD);
-               if (ww(DD)) XD(DD, sD, zD) || (DD.push(sD), pD++);
-               else {
-                 const rD = DD;
-                 zD(rD, sD) || (wD.set(KD, [rD, sD]), pD++)
+         for (let Ip = 0; Ip < cp.length; Ip++) {
+           let Sp = cp[Ip];
+           for (;;) {
+             if (this.tokens.mainToken = null, Sp.pos > Op) op.push(Sp);
+             else {
+               if (this.advanceStack(Sp, op, cp)) continue;
+               {
+                 pp || (pp = [], ip = []), pp.push(Sp);
+                 let cp = this.tokens.getMainToken(Sp);
+                 ip.push(cp.value, cp.end)
```

#### 95. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3018-L3023` → after: `L2321-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2321-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2321-L2330) · [Before (L3018-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3018-L3023)

```diff
-             return !1
-           },
-           clear() {
-             wD.clear(), pD = 0
-           },
-           get size() {
+             break
+           }
+         }
+         if (!op.length) {
+           let ip = pp && function(pp) {
+             let ip = null;
+             for (let cp of pp) {
+               let pp = cp.p.stoppedAt;
+               (cp.pos == cp.p.stream.end || null != pp && cp.pos > pp) && cp.p.parser.stateFlag(cp.state, 2) && (!ip || ip.score < cp.score) && (ip = cp)
+             }
```

#### 96. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3025-L3031` → after: `L2332-L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2332-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2332-L2356) · [Before (L3025-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3025-L3031)

```diff
-           },
-           forEach(DD) {
-             for (const zD of Nz(wD.values()))
-               if (ww(zD))
-                 for (const wD of zD) DD(wD, wD, KD);
-               else {
-                 DD(zD, zD, KD)
+           }(pp);
+           if (ip) return tp && console.log("Finish with " + this.stackID(ip)), this.stackToTree(ip);
+           if (this.parser.strict) throw tp && pp && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Op);
+           this.recovering || (this.recovering = 5)
+         }
+         if (this.recovering && pp) {
+           let cp = null != this.stoppedAt && pp[0].pos > this.stoppedAt ? pp[0] : this.runRecovery(pp, ip, op);
+           if (cp) return tp && console.log("Force-finish " + this.stackID(cp)), this.stackToTree(cp.forceAll())
+         }
+         if (this.recovering) {
+           let pp = 1 == this.recovering ? 1 : 3 * this.recovering;
+           if (op.length > pp)
+             for (op.sort(((pp, ip) => ip.score - pp.score)); op.length > pp;) op.pop();
+           op.some((pp => pp.reducePos > Op)) && this.recovering--
+         } else if (op.length > 1) {
+           pp: for (let pp = 0; pp < op.length - 1; pp++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3033-L3042` → after: `L2358-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2358-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2358-L2364) · [Before (L3033-L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3033-L3042)

```diff
-           },
-           keys: () => sD(),
-           values: () => sD(),
-           * entries() {
-             for (const DD of sD()) yield [DD, DD]
-           },
-           [Symbol.iterator]: () => sD(),
-           [Symbol.toStringTag]: wD[Symbol.toStringTag]
-         };
-         return KD
+             }
+           }
+           op.length > 12 && (op.sort(((pp, ip) => ip.score - pp.score)), op.splice(12, op.length - 12))
+         }
+         this.minStackPos = op[0].pos;
+         for (let Ip = 1; Ip < op.length; Ip++) op[Ip].pos < this.minStackPos && (this.minStackPos = op[Ip].pos);
+         return null
```

#### 98. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3044-L3046` → after: `L2366-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2366-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2366-L2368) · [Before (L3044-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3044-L3046)

```diff
- 
-       function ww(DD) {
-         return Array.isArray(DD)
+       stopAt(pp) {
+         if (null != this.stoppedAt && this.stoppedAt < pp) throw new RangeError("Can't move stoppedAt forward");
+         this.stoppedAt = pp
```

#### 99. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3048-L3050` → after: `L2370-L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2370-L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2370-L2404) · [Before (L3048-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3048-L3050)

```diff
- 
-       function pw(DD) {
-         return ww(DD) ? DD : [DD]
+       advanceStack(pp, ip, cp) {
+         let op = pp.pos,
+           {
+             parser: Ip
+           } = this,
+           Sp = tp ? this.stackID(pp) + " -> " : "";
+         if (null != this.stoppedAt && op > this.stoppedAt) return pp.forceReduce() ? pp : null;
+         if (this.fragments) {
+           let ip = pp.curContext && pp.curContext.tracker.strict,
+             cp = ip ? pp.curContext.hash : 0;
+           for (let xp = this.fragments.nodeAt(op); xp;) {
+             let op = this.parser.nodeSet.types[xp.type.id] == xp.type ? Ip.getGoto(pp.state, xp.type.id) : -1;
+             if (op > -1 && xp.length && (!ip || (xp.prop(Op.j.contextHash) || 0) == cp)) return pp.useNode(xp, op), tp && console.log(Sp + this.stackID(pp) + ` (via reuse of ${Ip.getName(xp.type.id)})`), !0;
+             if (!(xp instanceof Op.w) || 0 == xp.children.length || xp.positions[0] > 0) break;
+             let Lp = xp.children[0];
+             if (!(Lp instanceof Op.w && 0 == xp.positions[0])) break;
+ ... (19 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3052-L3054` → after: `L2406-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2406-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2406-L2411) · [Before (L3052-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3052-L3054)

```diff
- 
-       function sw(DD) {
-         return "string" === typeof DD
+       advanceFully(pp, ip) {
+         let cp = pp.pos;
+         for (;;) {
+           if (!this.advanceStack(pp, null, null)) return !1;
+           if (pp.pos > cp) return mp(pp, ip), !0
+         }
```

#### 101. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3056-L3058` → after: `L2413-L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2413-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2413-L2434) · [Before (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3056-L3058)

```diff
- 
-       function Kw(DD) {
-         return "number" === typeof DD
+       runRecovery(pp, ip, cp) {
+         let Op = null,
+           op = !1;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           let Sp = pp[Ip],
+             xp = ip[Ip << 1],
+             Lp = ip[1 + (Ip << 1)],
+             Yp = tp ? this.stackID(Sp) + " -> " : "";
+           if (Sp.deadEnd) {
+             if (op) continue;
+             if (op = !0, Sp.restart(), tp && console.log(Yp + this.stackID(Sp) + " (restarted)"), this.advanceFully(Sp, cp)) continue
+           }
+           let Dp = Sp.split(),
+             Ap = Yp;
+           for (let pp = 0; pp < 10 && Dp.forceReduce(); pp++) {
+             if (tp && console.log(Ap + this.stackID(Dp) + " (via force-reduce)"), this.advanceFully(Dp, cp)) break;
+ ... (6 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3060-L3062` → after: `L2436-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2436-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2436-L2446) · [Before (L3060-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3060-L3062)

```diff
- 
-       function rw(DD, zD) {
-         return void 0 !== DD && zD(DD) ? DD : void 0
+       stackToTree(pp) {
+         return pp.close(), Op.w.build({
+           buffer: xp.create(pp),
+           nodeSet: this.parser.nodeSet,
+           topID: this.topTerm,
+           maxBufferLength: this.parser.bufferLength,
+           reused: this.reused,
+           start: this.By[0].from,
+           length: pp.pos - this.By[0].from,
+           minRepeatType: this.parser.minRepeatTerm
+         })
```

#### 103. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3064-L3066` → after: `L2448-L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2448-L2450) · [Before (L3064-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3064-L3066)

```diff
- 
-       function Lw(DD, zD) {
-         return void 0 !== DD && zD(DD) ? DD : np.fail(`Invalid cast. The supplied value ${DD} did not pass the test '${np.getFunctionName(zD)}'.`)
+       stackID(pp) {
+         let ip = (Hp || (Hp = new WeakMap)).get(pp);
+         return ip || Hp.set(pp, ip = String.fromCodePoint(this.nextStackID++)), ip + pp
```

#### 104. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3069-L3073` → after: `L2454-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2454-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2454-L2478) · [Before (L3069-L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3069-L3073)

```diff
-       function gw(DD) {}
- 
-       function Rw() {
-         return !1
-       }
+     function mp(pp, ip) {
+       for (let cp = 0; cp < ip.length; cp++) {
+         let Op = ip[cp];
+         if (Op.pos == pp.pos && Op.sameState(pp)) return void(ip[cp].score < pp.score && (ip[cp] = pp))
+       }
+       ip.push(pp)
+     }
+     class Rp {
+       constructor(pp, ip, cp) {
+         this.source = pp, this.flags = ip, this.disabled = cp
+       }
+       allows(pp) {
+         return !this.disabled || 0 == this.disabled[pp]
+       }
+     }
+     const qp = pp => pp;
+ ... (9 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3075-L3076` → after: `L2480-L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2480-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2480-L2508) · [Before (L3075-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3075-L3076)

```diff
-       function Aw() {
-         return !0
+         function Ip(pp, ip, cp) {
+           op[pp].push([ip, ip.deserialize(String(cp))])
+         }
+         if (pp.nodeProps)
+           for (let xp of pp.nodeProps) {
+             let pp = xp[0];
+             "string" == typeof pp && (pp = Op.j[pp]);
+             for (let ip = 1; ip < xp.length;) {
+               let cp = xp[ip++];
+               if (cp >= 0) Ip(cp, pp, xp[ip++]);
+               else {
+                 let Op = xp[ip + -cp];
+                 for (let op = -cp; op > 0; op--) Ip(xp[ip++], pp, Op);
+                 ip++
+               }
+             }
+ ... (13 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3078-L3081` → after: `L2510-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2510-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2510-L2512) · [Before (L3078-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3078-L3081)

```diff
- 
-       function Uw() {}
- 
-       function fw(DD) {
+       createParse(pp, ip, cp) {
+         let Op = new kp(this, pp, ip, cp);
+         for (let op of this.wrappers) Op = op(Op, pp, ip, cp);
```

#### 107. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3084-L3086` → after: `L2515-L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2515-L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2515-L2542) · [Before (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3084-L3086)

```diff
- 
-       function Iw(DD) {
-         return DD.toLowerCase()
+       getGoto(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = this.goto;
+         if (ip >= Op[0]) return -1;
+         for (let op = Op[ip + 1];;) {
+           let ip = Op[op++],
+             Ip = 1 & ip,
+             Sp = Op[op++];
+           if (Ip && cp) return Sp;
+           for (let cp = op + (ip >> 1); op < cp; op++)
+             if (Op[op] == pp) return Sp;
+           if (Ip) return -1
+         }
+       }
+       hasAction(pp, ip) {
+         let cp = this.data;
+ ... (12 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3088-L3091` → after: `L2544-L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2544-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2544-L2545) · [Before (L3088-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3088-L3091)

```diff
-       var Bw = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
- 
-       function Gw(DD) {
-         return Bw.test(DD) ? DD.replace(Bw, Iw) : DD
+       stateSlot(pp, ip) {
+         return this.states[6 * pp + ip]
```

#### 109. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3093-L3095` → after: `L2547-L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2547-L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2547-L2548) · [Before (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3093-L3095)

```diff
- 
-       function hw() {
-         throw new Error("Not implemented")
+       stateFlag(pp, ip) {
+         return (this.stateSlot(pp, 0) & ip) > 0
```

#### 110. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3097-L3100` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2550-L2551) · [Before (L3097-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3097-L3100)

```diff
- 
-       function nw(DD) {
-         let zD;
-         return () => (DD && (zD = DD(), DD = void 0), zD)
+       validAction(pp, ip) {
+         return !!this.allActions(pp, (pp => pp == ip || null))
```

#### 111. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3102-L3108` → after: `L2553-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2553-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2553-L2561) · [Before (L3102-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3102-L3108)

```diff
- 
-       function Mw(DD) {
-         const zD = new Map;
-         return wD => {
-           const pD = `${typeof wD}:${wD}`;
-           let sD = zD.get(pD);
-           return void 0 !== sD || zD.has(pD) || (sD = DD(wD), zD.set(pD, sD)), sD
+       allActions(pp, ip) {
+         let cp = this.stateSlot(pp, 4),
+           Op = cp ? ip(cp) : void 0;
+         for (let op = this.stateSlot(pp, 1); null == Op; op += 3) {
+           if (65535 == this.data[op]) {
+             if (1 != this.data[op + 1]) break;
+             op = Cp(this.data, op + 2)
+           }
+           Op = ip(Cp(this.data, op + 1))
```

#### 112. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3111-L3114` → after: `L2565-L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2565-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2565-L2577) · [Before (L3111-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3111-L3114)

```diff
-       var Ow = (DD => (DD[DD.None = 0] = "None", DD[DD.Normal = 1] = "Normal", DD[DD.Aggressive = 2] = "Aggressive", DD[DD.VeryAggressive = 3] = "VeryAggressive", DD))(Ow || {});
- 
-       function Jw(DD, zD) {
-         return DD === zD
+       nextStates(pp) {
+         let ip = [];
+         for (let cp = this.stateSlot(pp, 1);; cp += 3) {
+           if (65535 == this.data[cp]) {
+             if (1 != this.data[cp + 1]) break;
+             cp = Cp(this.data, cp + 2)
+           }
+           if (0 == (1 & this.data[cp + 2])) {
+             let pp = this.data[cp + 1];
+             ip.some(((ip, cp) => 1 & cp && ip == pp)) || ip.push(this.data[cp], pp)
+           }
+         }
+         return ip
```

#### 113. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3116-L3118` → after: `L2579-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2579-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2579-L2596) · [Before (L3116-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3116-L3118)

```diff
- 
-       function Ew(DD, zD) {
-         return DD === zD || void 0 !== DD && void 0 !== zD && DD.toUpperCase() === zD.toUpperCase()
+       configure(pp) {
+         let ip = Object.assign(Object.create(Mp.prototype), this);
+         if (pp.props && (ip.nodeSet = this.nodeSet.extend(...pp.props)), pp.top) {
+           let cp = this.topRules[pp.top];
+           if (!cp) throw new RangeError(`Invalid top rule name ${pp.top}`);
+           ip.top = cp
+         }
+         return pp.tokenizers && (ip.tokenizers = this.tokenizers.map((ip => {
+           let cp = pp.tokenizers.find((pp => pp.from == ip));
+           return cp ? cp.to : ip
+         }))), pp.specializers && (ip.specializers = this.specializers.slice(), ip.specializerSpecs = this.specializerSpecs.map(((cp, Op) => {
+           let op = pp.specializers.find((pp => pp.from == cp.external));
+           if (!op) return cp;
+           let Ip = Object.assign(Object.assign({}, cp), {
+             external: op.to
+           });
+ ... (2 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3120-L3122` → after: `L2598-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2598-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2598-L2599) · [Before (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3120-L3122)

```diff
- 
-       function Qw(DD, zD) {
-         return Jw(DD, zD)
+       hasWrappers() {
+         return this.wrappers.length > 0
```

#### 115. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3124-L3126` → after: `L2601-L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2601-L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2601-L2602) · [Before (L3124-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3124-L3126)

```diff
- 
-       function Xw(DD, zD) {
-         return DD === zD ? 0 : void 0 === DD ? -1 : void 0 === zD ? 1 : DD < zD ? -1 : 1
+       getName(pp) {
+         return this.termNames ? this.termNames[pp] : String(pp <= this.maxNode && this.nodeSet.types[pp].name || pp)
```

#### 116. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3128-L3130` → after: `L2604-L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2604-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2604-L2605) · [Before (L3128-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3128-L3130)

```diff
- 
-       function Vw(DD, zD) {
-         return Xw(DD, zD)
+       get eofTerm() {
+         return this.maxNode + 1
```

#### 117. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3132-L3134` → after: `L2607-L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2607-L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2607-L2608) · [Before (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3132-L3134)

```diff
- 
-       function Pw(DD, zD) {
-         return Vw(null == DD ? void 0 : DD.start, null == zD ? void 0 : zD.start) || Vw(null == DD ? void 0 : DD.length, null == zD ? void 0 : zD.length)
+       get topNode() {
+         return this.nodeSet.types[this.top[1]]
```

#### 118. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3136-L3139` → after: `L2610-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2610-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2610-L2612) · [Before (L3136-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3136-L3139)

```diff
- 
-       function Cw(DD, zD, wD) {
-         for (let pD = 0; pD < DD.length; pD++) zD = Math.max(zD, wD(DD[pD]));
-         return zD
+       dynamicPrecedence(pp) {
+         let ip = this.dynamicPrecedences;
+         return null == ip ? 0 : ip[pp] || 0
```

#### 119. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3141-L3143` → after: `L2614-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2614-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2614-L2626) · [Before (L3141-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3141-L3143)

```diff
- 
-       function xw(DD, zD) {
-         return Tz(DD, ((DD, wD) => -1 === zD(DD, wD) ? DD : wD))
+       parseDialect(pp) {
+         let ip = Object.keys(this.dialects),
+           cp = ip.map((() => !1));
+         if (pp)
+           for (let op of pp.split(" ")) {
+             let pp = ip.indexOf(op);
+             pp >= 0 && (cp[pp] = !0)
+           }
+         let Op = null;
+         for (let op = 0; op < ip.length; op++)
+           if (!cp[op])
+             for (let pp, cp = this.dialects[ip[op]]; 65535 != (pp = this.data[cp++]);)(Op || (Op = new Uint8Array(this.maxTerm + 1)))[pp] = 1;
+         return new Rp(pp, cp, Op)
```

#### 120. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3145-L3147` → after: `L2628-L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2628-L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2628-L2629) · [Before (L3145-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3145-L3147)

```diff
- 
-       function Tw(DD, zD) {
-         return DD === zD ? 0 : void 0 === DD ? -1 : void 0 === zD ? 1 : (DD = DD.toUpperCase()) < (zD = zD.toUpperCase()) ? -1 : DD > zD ? 1 : 0
+       static deserialize(pp) {
+         return new Mp(pp)
```

#### 121. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3150-L3152` → after: `L2633-L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2633-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2633-L2635) · [Before (L3150-L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3150-L3152)

```diff
-       function bw(DD, zD) {
-         return DD === zD ? 0 : void 0 === DD ? -1 : void 0 === zD ? 1 : (DD = DD.toLowerCase()) < (zD = zD.toLowerCase()) ? -1 : DD > zD ? 1 : 0
-       }
+     function Cp(pp, ip) {
+       return pp[ip] | pp[ip + 1] << 16
+     }
```

#### 122. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3154-L3155` → after: `L2637-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2637-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2637-L2640) · [Before (L3154-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3154-L3155)

```diff
-       function jw(DD, zD) {
-         return Xw(DD, zD)
+     function Ep(pp) {
+       if (pp.external) {
+         let ip = pp.extend ? 1 : 0;
+         return (cp, Op) => pp.external(cp, Op) << 1 | ip
```

#### 123. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3158-L3178` → after: `L2692-L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2692-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2692-L2993) · [Before (L3158-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3158-L3178)

```diff
-       function dw(DD) {
-         return DD ? Tw : jw
-       }
-       var Sw, iw, lw = (() => function(DD) {
-         const zD = new Intl.Collator(DD, {
-           usage: "sort",
-           sensitivity: "variant",
-           numeric: !0
-         }).compare;
-         return (DD, wD) => function(DD, zD, wD) {
-           if (DD === zD) return 0;
-           if (void 0 === DD) return -1;
-           if (void 0 === zD) return 1;
-           const pD = wD(DD, zD);
-           return pD < 0 ? -1 : pD > 0 ? 1 : 0
-         }(DD, wD, zD)
- ... (5 more removed lines; see GitHub link above)
+     function fp(pp, ip) {
+       return pp >= 65 && pp <= 90 || pp >= 97 && pp <= 122 || 95 == pp || pp >= 192 || !ip && pp >= 48 && pp <= 57
+     }
+     const bp = new yp(((pp, ip) => {
+         if (60 != pp.next || !ip.dialectEnabled(0)) return;
+         if (pp.advance(), 47 == pp.next) return;
+         let cp = 0;
+         for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
+         if (fp(pp.next, !0)) {
+           for (pp.advance(), cp++; fp(pp.next, !1);) pp.advance(), cp++;
+           for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
+           if (44 == pp.next) return;
+           for (let ip = 0;; ip++) {
+             if (7 == ip) {
+               if (!fp(pp.next, !0)) return;
+               break
+ ... (286 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3180-L3182` → after: `L2995-L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2995-L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L2995-L2999) · [Before (L3180-L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3180-L3182)

```diff
-       function Nw(DD) {
-         iw !== DD && (iw = DD, Sw = void 0)
-       }
+     function Ii(pp, ip) {
+       let cp = Vp.get(ip);
+       if (cp) return cp;
+       let op = [],
+         Ip = !0;
```

#### 125. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3185` → after: `L3002-L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3002-L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3002-L3006) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3185)

```diff
-         return Sw ?? (Sw = lw(iw)), Sw(DD, zD)
+         let Op = pp.sliceString(ip.from, ip.to);
+         op.push({
+           label: Op,
+           type: cp
+         })
```

#### 126. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3187-L3189` → after: `L3008-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3008-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3008-L3283) · [Before (L3187-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3187-L3189)

```diff
- 
-       function yw(DD, zD, wD, pD) {
-         return DD === zD ? 0 : void 0 === DD ? -1 : void 0 === zD ? 1 : pD(DD[wD], zD[wD])
+       return ip.cursor(Op.h.IncludeAnonymous).iterate((ip => {
+         if (Ip) Ip = !1;
+         else if (ip.name) {
+           let pp = oi[ip.name];
+           if (pp && pp(ip, Sp) || ii.has(ip.name)) return !1
+         } else if (ip.to - ip.from > 8192) {
+           for (let cp of Ii(pp, ip.node)) op.push(cp);
+           return !1
+         }
+       })), Vp.set(ip, op), op
+     }
+     const Si = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
+       xi = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", … [truncated]
+ 
+     function Li(pp) {
+       let ip = (0, Gp.kb)(pp.state).resolveInner(pp.pos, -1);
+ ... (260 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3191-L3193` → after: `L3285-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3285-L3286) · [Before (L3191-L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3191-L3193)

```diff
- 
-       function kw(DD, zD) {
-         return Vw(DD ? 1 : 0, zD ? 1 : 0)
+       isActiveAt(pp, ip) {
+         return Wp(pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Yp) == this.data
```

#### 128. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3195-L3206` → after: `L3288-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3288-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3288-L3438) · [Before (L3195-L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3195-L3206)

```diff
- 
-       function mw(DD, zD, wD) {
-         const pD = Math.max(2, Math.floor(.34 * DD.length));
-         let sD, KD = Math.floor(.4 * DD.length) + 1;
-         for (const rD of zD) {
-           const zD = wD(rD);
-           if (void 0 !== zD && Math.abs(zD.length - DD.length) <= pD) {
-             if (zD === DD) continue;
-             if (zD.length < 3 && zD.toLowerCase() !== DD.toLowerCase()) continue;
-             const wD = ew(DD, zD, KD - .1);
-             if (void 0 === wD) continue;
-             np.assert(wD < KD), KD = wD, sD = rD
+       findRegions(pp) {
+         let ip = pp.facet(qp);
+         if ((null === ip || void 0 === ip ? void 0 : ip.data) == this.data) return [{
+           from: 0,
+           to: pp.doc.length
+         }];
+         if (!ip || !ip.allowsNesting) return [];
+         let cp = [],
+           Op = (pp, ip) => {
+             if (pp.prop(Yp) == this.data) return void cp.push({
+               from: ip,
+               to: ip + pp.length
+             });
+             let Ip = pp.prop(op.j.mounted);
+             if (Ip) {
+               if (Ip.tree.prop(Yp) == this.data) {
+ ... (135 more added lines; see GitHub link above)
```

#### 129. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3211-L3227` → after: `L3461-L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3461-L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3461-L3488) · [Before (L3211-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3211-L3227)

```diff
- 
-       function ew(DD, zD, wD) {
-         let pD = new Array(zD.length + 1),
-           sD = new Array(zD.length + 1);
-         const KD = wD + .01;
-         for (let LD = 0; LD <= zD.length; LD++) pD[LD] = LD;
-         for (let LD = 1; LD <= DD.length; LD++) {
-           const rD = DD.charCodeAt(LD - 1),
-             cD = Math.ceil(LD > wD ? LD - wD : 1),
-             gD = Math.floor(zD.length > wD + LD ? wD + LD : zD.length);
-           sD[0] = LD;
-           let RD = LD;
-           for (let DD = 1; DD < cD; DD++) sD[DD] = KD;
-           for (let wD = cD; wD <= gD; wD++) {
-             const KD = DD[LD - 1].toLowerCase() === zD[wD - 1].toLowerCase() ? pD[wD - 1] + .1 : pD[wD - 1] + 2,
-               cD = rD === zD.charCodeAt(wD - 1) ? pD[wD - 1] : Math.min(pD[wD] + 1, sD[wD - 1] + 1, KD);
- ... (1 more removed lines; see GitHub link above)
+       changes(pp, ip) {
+         let {
+           fragments: cp,
+           tree: Op,
+           treeLen: Ip,
+           viewport: Sp,
+           skipped: xp
+         } = this;
+         if (this.takeTree(), !pp.empty) {
+           let ip = [];
+           if (pp.iterChangedRanges(((pp, cp, Op, op) => ip.push({
+               fromA: pp,
+               toA: cp,
+               fromB: Op,
+               toB: op
+             }))), cp = op.u.applyChanges(cp, ip), Op = op.w.empty, Ip = 0, Sp = {
+ ... (12 more added lines; see GitHub link above)
```

#### 130. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3234-L3235` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3491) · [Before (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3234-L3235)

```diff
-         const rD = pD[zD.length];
-         return rD > wD ? void 0 : rD
+         return new dp(this.parser, ip, cp, Op, Ip, Sp, xp, this.scheduleOn)
```

#### 131. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3237-L3240` → after: `L3493-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3493-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3493-L3504) · [Before (L3237-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3237-L3240)

```diff
- 
-       function ow(DD, zD, wD) {
-         const pD = DD.length - zD.length;
-         return pD >= 0 && (wD ? Ew(DD.slice(pD), zD) : DD.indexOf(zD, pD) === pD)
+       updateViewport(pp) {
+         if (this.viewport.from == pp.from && this.viewport.to == pp.to) return !1;
+         this.viewport = pp;
+         let ip = this.skipped.length;
+         for (let cp = 0; cp < this.skipped.length; cp++) {
+           let {
+             from: ip,
+             to: Op
+           } = this.skipped[cp];
+           ip < pp.to && Op > pp.from && (this.fragments = ep(this.fragments, ip, Op), this.skipped.splice(cp--, 1))
+         }
+         return !(this.skipped.length >= ip) && (this.reset(), !0)
```

#### 132. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3242-L3244` → after: `L3506-L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3506-L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3506-L3507) · [Before (L3242-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3242-L3244)

```diff
- 
-       function aw(DD, zD) {
-         return ow(DD, zD) ? DD.slice(0, DD.length - zD.length) : DD
+       reset() {
+         this.parse && (this.takeTree(), this.parse = null)
```

#### 133. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3246-L3248` → after: `L3509-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3509-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3509-L3513) · [Before (L3246-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3246-L3248)

```diff
- 
-       function uw(DD, zD) {
-         return ow(DD, zD) ? DD.slice(0, DD.length - zD.length) : void 0
+       skipUntilInView(pp, ip) {
+         this.skipped.push({
+           from: pp,
+           to: ip
+         })
```

#### 134. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3250-L3263` → after: `L3515-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3515-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3515-L3532) · [Before (L3250-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3250-L3263)

```diff
- 
-       function vw(DD) {
-         let zD = DD.length;
-         for (let wD = zD - 1; wD > 0; wD--) {
-           let pD = DD.charCodeAt(wD);
-           if (pD >= 48 && pD <= 57)
-             do {
-               --wD, pD = DD.charCodeAt(wD)
-             } while (wD > 0 && pD >= 48 && pD <= 57);
-           else {
-             if (!(wD > 4) || 110 !== pD && 78 !== pD) break;
-             if (--wD, pD = DD.charCodeAt(wD), 105 !== pD && 73 !== pD) break;
-             if (--wD, pD = DD.charCodeAt(wD), 109 !== pD && 77 !== pD) break;
-             --wD, pD = DD.charCodeAt(wD)
+       static getSkippingParser(pp) {
+         return new class extends op.s {
+           createParse(ip, cp, Op) {
+             let Ip = Op[0].from,
+               Sp = Op[Op.length - 1].to;
+             return {
+               parsedPos: Ip,
+               advance() {
+                 let ip = Hp;
+                 if (ip) {
+                   for (let pp of Op) ip.tempSkipped.push(pp);
+                   pp && (ip.scheduleOn = ip.scheduleOn ? Promise.all([ip.scheduleOn, pp]) : pp)
+                 }
+                 return this.parsedPos = Sp, new op.w(op.p.none, [], [], Sp - Ip)
+               },
+               stoppedAt: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3270-L3274` → after: `L3536-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3536-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3536-L3539) · [Before (L3270-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3270-L3274)

```diff
- 
-       function tw(DD, zD) {
-         for (let wD = 0; wD < DD.length; wD++)
-           if (DD[wD] === zD) return Fw(DD, wD), !0;
-         return !1
+       isDone(pp) {
+         pp = Math.min(pp, this.state.doc.length);
+         let ip = this.fragments;
+         return this.treeLen >= pp && ip.length && 0 == ip[0].from && ip[0].to >= pp
```

#### 136. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3276-L3279` → after: `L3541-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3541-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3541-L3542) · [Before (L3276-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3276-L3279)

```diff
- 
-       function Fw(DD, zD) {
-         for (let wD = zD; wD < DD.length - 1; wD++) DD[wD] = DD[wD + 1];
-         DD.pop()
+       static get() {
+         return Hp
```

#### 137. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3282-L3283` → after: `L3669-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3669-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3669-L3690) · [Before (L3282-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3282-L3283)

```diff
-       function Yw(DD, zD) {
-         DD[zD] = DD[DD.length - 1], DD.pop()
+     function Xp(pp) {
+       let ip = pp.facet(Ep);
+       return 9 == ip.charCodeAt(0) ? pp.tabSize * ip.length : ip.length
+     }
+ 
+     function lp(pp, ip) {
+       let cp = "",
+         Op = pp.tabSize,
+         op = pp.facet(Ep)[0];
+       if ("\t" == op) {
+         for (; ip >= Op;) cp += "\t", ip -= Op;
+         op = " "
+       }
+       for (let Ip = 0; Ip < ip; Ip++) cp += op;
+       return cp
+     }
+ ... (6 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3285-L3291` → after: `L3692-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3692-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3692-L3710) · [Before (L3285-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3285-L3291)

```diff
- 
-       function Hw(DD, zD) {
-         return function(DD, zD) {
-           for (let wD = 0; wD < DD.length; wD++)
-             if (zD(DD[wD])) return Yw(DD, wD), !0;
-           return !1
-         }(DD, (DD => DD === zD))
+       let cp = Up(pp.state);
+       return cp.length >= ip ? function(pp, ip, cp) {
+         let Op = ip.resolveStack(cp),
+           op = ip.resolveInner(cp, -1).resolve(cp, 0).enterUnfinishedNodesBefore(cp);
+         if (op != Op.node) {
+           let pp = [];
+           for (let ip = op; ip && !(ip.from < Op.node.from || ip.to > Op.node.to || ip.from == Op.node.from && ip.type == Op.node.type); ip = ip.parent) pp.push(ip);
+           for (let ip = pp.length - 1; ip >= 0; ip--) Op = {
+             node: pp[ip],
+             next: Op
+           }
+         }
+         return Np(Op, pp, cp)
+       }(pp, cp, ip) : null
+     }
+     class Jp {
+ ... (3 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3293-L3295` → after: `L3712-L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3712-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3712-L3728) · [Before (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3293-L3295)

```diff
- 
-       function qw(DD) {
-         return DD ? fw : Gw
+       lineAt(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           cp = this.state.doc.lineAt(pp),
+           {
+             simulateBreak: Op,
+             simulateDoubleBreak: op
+           } = this.options;
+         return null != Op && Op >= cp.from && Op <= cp.to ? op && Op == pp ? {
+           text: "",
+           from: pp
+         } : (ip < 0 ? Op < pp : Op <= pp) ? {
+           text: cp.text.slice(Op - cp.from),
+           from: Op
+         } : {
+           text: cp.text.slice(0, Op - cp.from),
+           from: cp.from
+ ... (1 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3297-L3298` → after: `L3730-L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3730-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3730-L3732) · [Before (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3297-L3298)

```diff
- 
-       function Dp(DD) {
+       textAfterPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         if (this.options.simulateDoubleBreak && pp == this.options.simulateBreak) return "";
```

#### 141. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3300-L3307` → after: `L3734-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3734-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3734-L3737) · [Before (L3300-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3300-L3307)

```diff
-           prefix: zD,
-           suffix: wD
-         } = DD;
-         return `${zD}*${wD}`
-       }
- 
-       function zp(DD, zD) {
-         return np.assert(rp(DD, zD)), zD.substring(DD.prefix.length, zD.length - DD.suffix.length)
+           text: cp,
+           from: Op
+         } = this.lineAt(pp, ip);
+         return cp.slice(pp - Op, Math.min(cp.length, pp + 100 - Op))
```

#### 142. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3309-L3315` → after: `L3739-L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3739-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3739-L3762) · [Before (L3309-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3309-L3315)

```diff
- 
-       function wp(DD, zD, wD) {
-         let pD, sD = -1;
-         for (let KD = 0; KD < DD.length; KD++) {
-           const rD = DD[KD],
-             LD = zD(rD);
-           LD.prefix.length > sD && rp(LD, wD) && (sD = LD.prefix.length, pD = rD)
+       column(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           {
+             text: cp,
+             from: Op
+           } = this.lineAt(pp, ip),
+           op = this.countColumn(cp, pp - Op),
+           Ip = this.options.overrideIndentation ? this.options.overrideIndentation(Op) : -1;
+         return Ip > -1 && (op += Ip - this.countColumn(cp, cp.search(/\S|$/))), op
+       }
+       countColumn(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.length;
+         return (0, Ip.Q)(pp, this.state.tabSize, ip)
+       }
+       lineIndent(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+ ... (8 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3317` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3764) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3317)

```diff
-         return pD
+         return this.countColumn(cp, cp.search(/\S|$/))
```

#### 144. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3319-L3321` → after: `L3766-L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3766-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3766-L3767) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3319-L3321)

```diff
- 
-       function pp(DD, zD, wD) {
-         return wD ? Ew(DD.slice(0, zD.length), zD) : 0 === DD.lastIndexOf(zD, 0)
+       get simulatedBreak() {
+         return this.options.simulateBreak || null
```

#### 145. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3324-L3325` → after: `L3772-L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3772-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3772-L3775) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3324-L3325)

```diff
-       function sp(DD, zD) {
-         return pp(DD, zD) ? DD.substr(zD.length) : DD
+     function Np(pp, ip, cp) {
+       for (let Op = pp; Op; Op = Op.next) {
+         let pp = Tp(Op.node);
+         if (pp) return pp(bp.create(ip, cp, Op))
```

#### 146. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3328-L3330` → after: `L3780-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3780-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3780-L3789) · [Before (L3328-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3328-L3330)

```diff
-       function Kp(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fw;
-         return pp(wD(DD), wD(zD)) ? DD.substring(zD.length) : void 0
+     function Tp(pp) {
+       let ip = pp.type.prop(Bp);
+       if (ip) return ip;
+       let cp, Op = pp.firstChild;
+       if (Op && (cp = Op.type.prop(op.j.closedBy))) {
+         let ip = pp.lastChild,
+           Op = ip && cp.indexOf(ip.name) > -1;
+         return pp => np(pp, !0, 1, void 0, Op && ! function(pp) {
+           return pp.pos == pp.options.simulateBreak && pp.options.simulateDoubleBreak
+         }(pp) ? ip.from : void 0)
```

#### 147. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3333-L3338` → after: `L3794-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3794-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3794-L3799) · [Before (L3333-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3333-L3338)

```diff
-       function rp(DD, zD) {
-         let {
-           prefix: wD,
-           suffix: pD
-         } = DD;
-         return zD.length >= wD.length + pD.length && pp(zD, wD) && ow(zD, pD)
+     function fp() {
+       return 0
+     }
+     class bp extends Jp {
+       constructor(pp, ip, cp) {
+         super(pp.state, pp.options), this.base = pp, this.pos = ip, this.context = cp
```

#### 148. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3340-L3342` → after: `L3801-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3801-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3801-L3802) · [Before (L3340-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3340-L3342)

```diff
- 
-       function Lp(DD, zD) {
-         return wD => DD(wD) && zD(wD)
+       get node() {
+         return this.context.node
```

#### 149. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3344-L3352` → after: `L3804-L3805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3804-L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3804-L3805) · [Before (L3344-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3344-L3352)

```diff
- 
-       function cp() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         return function() {
-           let DD;
-           for (const wD of zD)
-             if (DD = wD(...arguments), DD) return DD;
-           return DD
-         }
+       static create(pp, ip, cp) {
+         return new bp(pp, ip, cp)
```

#### 150. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3354-L3358` → after: `L3807-L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3807-L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3807-L3808) · [Before (L3354-L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3354-L3358)

```diff
- 
-       function gp(DD) {
-         return function() {
-           return !DD(...arguments)
-         }
+       get textAfter() {
+         return this.textAfterPos(this.pos)
```

#### 151. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3360-L3364` → after: `L3810-L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3810-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3810-L3811) · [Before (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3360-L3364)

```diff
- 
-       function Rp(DD) {}
- 
-       function Ap(DD) {
-         return void 0 === DD ? void 0 : [DD]
+       get baseIndent() {
+         return this.baseIndentFor(this.node)
```

#### 152. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3367-L3381` → after: `L3873-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3873-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3873-L3880) · [Before (L3367-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3367-L3381)

```diff
-       function Up(DD, zD, wD, pD, sD, KD) {
-         KD ?? (KD = gw);
-         let rD = 0,
-           LD = 0;
-         const cD = DD.length,
-           gD = zD.length;
-         let RD = !1;
-         for (; rD < cD && LD < gD;) {
-           const cD = DD[rD],
-             gD = zD[LD],
-             AD = wD(cD, gD); - 1 === AD ? (pD(cD), rD++, RD = !0) : 1 === AD ? (sD(gD), LD++, RD = !0) : (KD(gD, cD), rD++, LD++)
-         }
-         for (; rD < cD;) pD(DD[rD++]), RD = !0;
-         for (; LD < gD;) sD(zD[LD++]), RD = !0;
-         return RD
+     function gp() {
+       let {
+         except: pp,
+         units: ip = 1
+       } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       return cp => {
+         let Op = pp && pp.test(cp.textAfter);
+         return cp.baseIndent + (Op ? 0 : ip * cp.unit)
```

#### 153. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3384-L3392` → after: `L3885-L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3885-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3885-L3916) · [Before (L3384-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3384-L3392)

```diff
-       function fp(DD) {
-         const zD = [];
-         return Ip(DD, zD, void 0, 0), zD
-       }
- 
-       function Ip(DD, zD, wD, pD) {
-         for (const sD of DD[pD]) {
-           let KD;
-           wD ? (KD = wD.slice(), KD.push(sD)) : KD = [sD], pD === DD.length - 1 ? zD.push(KD) : Ip(DD, zD, KD, pD + 1)
+     function rp() {
+       return Ip.n.transactionFilter.of((pp => {
+         if (!pp.docChanged || !pp.isUserEvent("input.type") && !pp.isUserEvent("input.complete")) return pp;
+         let ip = pp.startState.languageDataAt("indentOnInput", pp.startState.selection.main.head);
+         if (!ip.length) return pp;
+         let cp = pp.newDoc,
+           {
+             head: Op
+           } = pp.newSelection.main,
+           op = cp.lineAt(Op);
+         if (Op > op.from + Gp) return pp;
+         let Ip = cp.sliceString(op.from, Op);
+         if (!ip.some((pp => pp.test(Ip)))) return pp;
+         let {
+           state: Sp
+         } = pp, xp = -1, Lp = [];
+ ... (16 more added lines; see GitHub link above)
```

#### 154. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3395-L3401` → after: `L3946-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3946-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3946-L3958) · [Before (L3395-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3395-L3401)

```diff
- 
-       function Bp(DD, zD) {
-         if (void 0 !== DD) {
-           const wD = DD.length;
-           let pD = 0;
-           for (; pD < wD && zD(DD[pD]);) pD++;
-           return DD.slice(0, pD)
+       return function(pp, ip, cp) {
+         let Op = Up(pp);
+         if (Op.length < cp) return null;
+         let op = null;
+         for (let Ip = Op.resolveStack(cp, 1); Ip; Ip = Ip.next) {
+           let Sp = Ip.node;
+           if (Sp.to <= cp || Sp.from > cp) continue;
+           if (op && Sp.from < ip) break;
+           let xp = Sp.type.prop(zp);
+           if (xp && (Sp.to < Op.length - 50 || Op.length == pp.doc.length || !Kp(Sp))) {
+             let Op = xp(Sp, pp);
+             Op && Op.from <= cp && Op.from >= ip && Op.to > cp && (op = Op)
+           }
```

#### 155. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3403` → after: `L3960-L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3960-L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3960-L3977) · [Before (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3403)

```diff
-       }
+         return op
+       }(pp, ip, cp)
+     }
+ 
+     function ii(pp, ip) {
+       let cp = ip.mapPos(pp.from, 1),
+         Op = ip.mapPos(pp.to, -1);
+       return cp >= Op ? void 0 : {
+         from: cp,
+         to: Op
+       }
+     }
+     const ci = Ip.C.define({
+         map: ii
+       }),
+       Oi = Ip.C.define({
+ ... (2 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3405-L3410` → after: `L3979-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L3979-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L3979-L4078) · [Before (L3405-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3405-L3410)

```diff
-       function Gp(DD, zD) {
-         if (void 0 !== DD) {
-           const wD = DD.length;
-           let pD = 0;
-           for (; pD < wD && zD(DD[pD]);) pD++;
-           return DD.slice(pD)
+     function oi(pp) {
+       let ip = [];
+       for (let {
+           head: cp
+         }
+         of pp.state.selection.By) ip.some((pp => pp.from <= cp && pp.to >= cp)) || ip.push(pp.lineBlockAt(cp));
+       return ip
+     }
+     const Ii = Ip.E.define({
+       create: () => Sp.c.none,
+       update(pp, ip) {
+         ip.isUserEvent("delete") && ip.changes.iterChangedRanges(((ip, cp) => pp = Si(pp, ip, cp))), pp = pp.map(ip.changes);
+         for (let cp of ip.effects)
+           if (cp.is(ci) && !Li(pp, cp.value.from, cp.value.to)) {
+             let {
+               preparePlaceholder: Op
+ ... (84 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3412-L3422` → after: `L4080-L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4080-L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4080-L4092) · [Before (L3412-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3412-L3422)

```diff
-       }
- 
-       function hp() {
-         return "undefined" !== typeof process && !!process.nextTick && !process.browser && !0
-       }
-       var np, Mp = (DD => (DD[DD.Off = 0] = "Off", DD[DD.Error = 1] = "Error", DD[DD.Warning = 2] = "Warning", DD[DD.Info = 3] = "Info", DD[DD.Verbose = 4] = "Verbose", DD))(Mp || {});
-       (DD => {
-         let zD = 0;
- 
-         function wD(zD) {
-           return DD.currentLogLevel <= zD
+       }, {
+         key: "Ctrl-Shift-]",
+         mac: "Cmd-Alt-]",
+         run: pp => {
+           if (!pp.state.field(Ii, !1)) return !1;
+           let ip = [];
+           for (let cp of oi(pp)) {
+             let Op = xi(pp.state, cp.from, cp.to);
+             Op && ip.push(Oi.of(Op), Di(pp, Op, !1))
+           }
+           return ip.length && pp.dispatch({
+             effects: ip
+           }), ip.length > 0
```

#### 158. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3424-L3426` → after: `L4094-L4122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4094-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4094-L4122) · [Before (L3424-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3424-L3426)

```diff
- 
-         function pD(zD, pD) {
-           DD.loggingHost && wD(zD) && DD.loggingHost.log(zD, pD)
+       }, {
+         key: "Ctrl-Alt-[",
+         run: pp => {
+           let {
+             state: ip
+           } = pp, cp = [];
+           for (let Op = 0; Op < ip.doc.length;) {
+             let op = pp.lineBlockAt(Op),
+               Ip = Vp(ip, op.from, op.to);
+             Ip && cp.push(ci.of(Ip)), Op = (Ip ? pp.lineBlockAt(Ip.to) : op).to + 1
+           }
+           return cp.length && pp.dispatch({
+             effects: Yi(pp.state, cp)
+           }), !!cp.length
+         }
+       }, {
+ ... (13 more added lines; see GitHub link above)
```

#### 159. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3429-L3442` → after: `L4134-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4134-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4134-L4258) · [Before (L3429-L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3429-L3442)

```diff
-         function sD(DD) {
-           pD(3, DD)
-         }
-         var KD;
-         DD.currentLogLevel = 2, DD.isDebugging = !1, DD.shouldLog = wD, DD.log = sD, (KD = sD = DD.log || (DD.log = {})).error = function(DD) {
-           pD(1, DD)
-         }, KD.warn = function(DD) {
-           pD(2, DD)
-         }, KD.log = function(DD) {
-           pD(3, DD)
-         }, KD.trace = function(DD) {
-           pD(4, DD)
-         };
-         const rD = {};
+     function yi(pp) {
+       let ip = [Ii, ei];
+       return pp && ip.push(Wi.of(pp)), ip
+     }
+ 
+     function Ui(pp, ip) {
+       let {
+         state: cp
+       } = pp, Op = cp.facet(Wi), op = ip => {
+         let cp = pp.lineBlockAt(pp.posAtDOM(ip.target)),
+           Op = xi(pp.state, cp.from, cp.to);
+         Op && pp.dispatch({
+           effects: Oi.of(Op)
+         }), ip.preventDefault()
+       };
+       if (Op.placeholderDOM) return Op.placeholderDOM(pp, op, ip);
+ ... (109 more added lines; see GitHub link above)
```

#### 160. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3445-L3465` → after: `L4261-L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4261-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4261-L4262) · [Before (L3445-L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3445-L3465)

```diff
-           return zD >= DD
-         }
- 
-         function cD(zD, wD) {
-           return !!LD(zD) || (rD[wD] = {
-             level: zD,
-             assertion: DD[wD]
-           }, DD[wD] = gw, !1)
-         }
- 
-         function gD(DD, zD) {
-           const wD = new Error(DD ? `Debug Failure. ${DD}` : "Debug Failure.");
-           throw Error.captureStackTrace && Error.captureStackTrace(wD, zD || gD), wD
-         }
- 
-         function RD(DD, zD, wD, pD) {
- ... (5 more removed lines; see GitHub link above)
+           let ip = Lp.b.newName();
+           return (cp || (cp = Object.create(null)))["." + ip] = pp, ip
```

#### 161. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3468-L3470` → after: `L4285-L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4285-L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4285-L4408) · [Before (L3468-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3468-L3470)

```diff
-         function UD(DD, zD, wD) {
-           for (const pD of DD) AD(pD, zD, wD || UD)
-         }
+     function mi(pp) {
+       let ip = pp.facet(ji);
+       return ip.length ? ip : pp.facet(ki)
+     }
+ 
+     function Ri(pp, ip) {
+       let cp, Op = [Mi];
+       return pp instanceof ui && (pp.module && Op.push(Sp.f.styleModule.of(pp.module)), cp = pp.themeType), (null === ip || void 0 === ip ? void 0 : ip.fallback) ? Op.push(ki.of(pp)) : cp ? Op.push(ji.computeN([Sp.f.darkTheme], (ip => ip.facet(Sp.f.darkTheme) == ("dark" == cp) ?  … [truncated]
+     }
+     class qi {
+       constructor(pp) {
+         this.markCache = Object.create(null), this.tree = Up(pp.state), this.uO = this.buildDeco(pp, mi(pp.state)), this.decoratedTo = pp.viewport.to
+       }
+       update(pp) {
+         let ip = Up(pp.state),
+           cp = mi(pp.state),
+ ... (108 more added lines; see GitHub link above)
```

#### 162. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3472-L3474` → after: `L4410-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4410-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4410-L4468) · [Before (L3472-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3472-L3474)

```diff
-         function fD(DD) {
-           let zD = arguments.length > 2 ? arguments[2] : void 0;
-           return gD(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Illegal value:"} ${"object"===typeof DD&&jz(DD,"kind")&&jz(DD,"pos")?"SyntaxKind: "+OD(DD.kind):JSON.stringify(DD)}`, zD || fD)
+     function Ni(pp) {
+       let ip = [],
+         cp = pp.matched ? Ji : Bi;
+       return ip.push(cp.range(pp.start.from, pp.start.to)), pp.end && ip.push(cp.range(pp.end.from, pp.end.to)), ip
+     }
+ 
+     function Ti(pp) {
+       let ip = [],
+         cp = pp.facet(Qi);
+       for (let Op of pp.selection.By) {
+         if (!Op.empty) continue;
+         let op = gi(pp, Op.head, -1, cp) || Op.head > 0 && gi(pp, Op.head - 1, 1, cp) || cp.afterCursor && (gi(pp, Op.head, 1, cp) || Op.head < pp.doc.length && gi(pp, Op.head + 1, -1, cp));
+         op && (ip = ip.concat(cp.renderMatch(op, pp)))
+       }
+       return Sp.c.set(ip, !0)
+     }
+ ... (43 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3476-L3485` → after: `L4470-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4470-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4470-L4500) · [Before (L3476-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3476-L3485)

```diff
- 
-         function ID(DD) {}
- 
-         function BD(DD) {
-           if ("function" !== typeof DD) return "";
-           if (jz(DD, "name")) return DD.name;
-           {
-             const zD = Function.prototype.toString.call(DD),
-               wD = /^function\s+([\w$]+)\s*\(/.exec(zD);
-             return wD ? wD[1] : ""
+       }
+       return function(pp, ip, cp, Op, op, Ip, Sp) {
+         if (cp < 0 ? !ip : ip == pp.doc.length) return null;
+         let xp = cp < 0 ? pp.sliceDoc(ip - 1, ip) : pp.sliceDoc(ip, ip + 1),
+           Lp = Sp.indexOf(xp);
+         if (Lp < 0 || Lp % 2 == 0 != cp > 0) return null;
+         let Yp = {
+             from: cp < 0 ? ip - 1 : ip,
+             to: cp > 0 ? ip + 1 : ip
+           },
+           Dp = pp.doc.iterRange(ip, cp > 0 ? pp.doc.length : 0),
+           Ap = 0;
+         for (let Pp = 0; !Dp.next().done && Pp <= Ip;) {
+           let pp = Dp.value;
+           cp < 0 && (Pp += pp.length);
+           let Ip = ip + Pp * cp;
+ ... (15 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3489-L3498` → after: `L4511-L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4511-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4511-L4531) · [Before (L3489-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3489-L3498)

```diff
-         function GD() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             zD = arguments.length > 2 ? arguments[2] : void 0;
-           const wD = function(DD) {
-             const zD = nD.get(DD);
-             if (zD) return zD;
-             const wD = [];
-             for (const sD in DD) {
-               const zD = DD[sD];
-               "number" === typeof zD && wD.push([zD, sD])
+     function Gi(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = Op.parent,
+         Lp = {
+           from: op.from,
+           to: op.to
+         },
+         Yp = 0,
+         Dp = null === xp || void 0 === xp ? void 0 : xp.cursor();
+       if (Dp && (cp < 0 ? Dp.childBefore(Op.from) : Dp.childAfter(Op.to)))
+         do {
+           if (cp < 0 ? Dp.to <= Op.from : Dp.from >= Op.to) {
+             if (0 == Yp && Ip.indexOf(Dp.type.name) > -1 && Dp.from < Dp.to) {
+               let pp = Fi(Dp);
+               return {
+                 start: Lp,
+                 end: pp ? {
+ ... (5 more added lines; see GitHub link above)
```

#### 165. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3500-L3509` → after: `L4533-L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4533-L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4533-L4546) · [Before (L3500-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3500-L3509)

```diff
-             const pD = fz(wD, ((DD, zD) => Vw(DD[0], zD[0])));
-             return nD.set(DD, pD), pD
-           }(arguments.length > 1 ? arguments[1] : void 0);
-           if (0 === DD) return wD.length > 0 && 0 === wD[0][0] ? wD[0][1] : "0";
-           if (zD) {
-             const zD = [];
-             let pD = DD;
-             for (const [sD, KD] of wD) {
-               if (sD > DD) break;
-               0 !== sD && sD & DD && (zD.push(KD), pD &= ~sD)
+             if (ni(Dp.type, cp, Sp)) Yp++;
+             else if (ni(Dp.type, -cp, Sp)) {
+               if (0 == Yp) {
+                 let pp = Fi(Dp);
+                 return {
+                   start: Lp,
+                   end: pp && pp.from < pp.to ? {
+                     from: pp.from,
+                     to: pp.to
+                   } : void 0,
+                   matched: !1
+                 }
+               }
+               Yp--
```

#### 166. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3511-L3524` → after: `L4548-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4548-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4548-L4644) · [Before (L3511-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3511-L3524)

```diff
-             if (0 === pD) return zD.join("|")
-           } else
-             for (const [pD, sD] of wD)
-               if (pD === DD) return sD;
-           return DD.toString()
-         }
-         DD.getAssertionLevel = function() {
-           return zD
-         }, DD.setAssertionLevel = function(wD) {
-           const pD = zD;
-           if (zD = wD, wD > pD)
-             for (const zD of Sz(rD)) {
-               const pD = rD[zD];
-               void 0 !== pD && DD[zD] !== pD.assertion && wD >= pD.level && (DD[zD] = pD, rD[zD] = void 0)
+           }
+         } while (cp < 0 ? Dp.prevSibling() : Dp.nextSibling());
+       return {
+         start: Lp,
+         matched: !1
+       }
+     }
+     const ri = Object.create(null),
+       Zi = [op.p.none],
+       zi = [],
+       si = Object.create(null),
+       Ki = Object.create(null);
+     for (let [ic, cc] of [
+         ["variable", "variableName"],
+         ["variable-2", "variableName.special"],
+         ["string-2", "string.special"],
+ ... (81 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3526-L3530` → after: `L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4646) · [Before (L3526-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3526-L3530)

```diff
-         }, DD.shouldAssert = LD, DD.fail = gD, DD.failBadSyntaxKind = function DD(zD, wD, pD) {
-           return gD(`${wD||"Unexpected node."}\r\nNode ${OD(zD.kind)} was unexpected.`, pD || DD)
-         }, DD.assert = RD, DD.assertEqual = function DD(zD, wD, pD, sD, KD) {
-           if (zD !== wD) {
-             gD(`Expected ${zD} === ${wD}. ${pD?sD?`${pD} ${sD}`:pD:""}`, KD || DD)
+             Dp.push(cp), op++, ip = Math.min(cp.to, ip)
```

#### 168. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3532-L3564` → after: `L4648-L4676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4648-L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4648-L4676) · [Before (L3532-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3532-L3564)

```diff
-         }, DD.assertLessThan = function DD(zD, wD, pD, sD) {
-           zD >= wD && gD(`Expected ${zD} < ${wD}. ${pD||""}`, sD || DD)
-         }, DD.assertLessThanOrEqual = function DD(zD, wD, pD) {
-           zD > wD && gD(`Expected ${zD} <= ${wD}`, pD || DD)
-         }, DD.assertGreaterThanOrEqual = function DD(zD, wD, pD) {
-           zD < wD && gD(`Expected ${zD} >= ${wD}`, pD || DD)
-         }, DD.assertIsDefined = AD, DD.checkDefined = function DD(zD, wD, pD) {
-           return AD(zD, wD, pD || DD), zD
-         }, DD.assertEachIsDefined = UD, DD.checkEachDefined = function DD(zD, wD, pD) {
-           return UD(zD, wD, pD || DD), zD
-         }, DD.assertNever = fD, DD.assertEachNode = function DD(zD, wD, pD, sD) {
-           cD(1, "assertEachNode") && RD(void 0 === wD || MD(zD, wD), pD || "Unexpected node.", (() => `Node array did not pass test '${BD(wD)}'.`), sD || DD)
-         }, DD.assertNode = function DD(zD, wD, pD, sD) {
-           cD(1, "assertNode") && RD(void 0 !== zD && (void 0 === wD || wD(zD)), pD || "Unexpected node.", (() => `Node ${OD(null==zD?void 0:zD.kind)} did not pass test '${BD(wD)}'.`), sD || DD)
-         }, DD.assertNotNode = function DD(zD, wD, pD, sD) {
-           cD(1, "assertNotNode") && RD(void 0 === zD || void 0 === wD || !wD(zD), pD || "Unexpected node.", (() => `Node ${OD(zD.kind)} should not have passed test '${BD(wD)}'.`), sD || DD)
- ... (17 more removed lines; see GitHub link above)
+           ip = Math.min(ip, yp);
+           let Ip = !1;
+           if (Dp.some((cp => cp.from == pp && (cp.to == ip || ip == yp))) && (Ip = pp == ip, !Ip && ip - pp < 10)) {
+             let cp = pp - (Wp + Pp.value.length);
+             cp > 0 && (Pp.next(cp), Wp = pp);
+             for (let Op = pp;;) {
+               if (Op >= ip) {
+                 Ip = !0;
+                 break
+               }
+               if (!Pp.lineBreak && Wp + Pp.value.length > Op) break;
+               Op = Wp + Pp.value.length, Wp += Pp.value.length, Pp.next()
+             }
+           }
+           let xp = Jp(Dp);
+           if (Ip) Yp.add(pp, pp, Op.c.widget({
+ ... (13 more added lines; see GitHub link above)
```

#### 169. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3567-L3569` → after: `L4683-L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4683-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4683-L4737) · [Before (L3567-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3567-L3569)

```diff
-         function ED(DD) {
-           return GD(DD, Cs, !0)
-         }
+     function Lp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         Op = null;
+       return pp.between(cp, 1e9, ((pp, cp, op) => {
+         let {
+           spec: Ip
+         } = op;
+         if (!(ip && Ip.diagnostics.indexOf(ip) < 0))
+           if (Op) {
+             if (Ip.diagnostics.indexOf(Op.diagnostic) < 0) return !1;
+             Op = new Sp(Op.from, cp, Op.diagnostic)
+           } else Op = new Sp(pp, cp, ip || Ip.diagnostics[0])
+       })), Op
+     }
+ 
+ ... (39 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3571-L3572` → after: `L4739-L4797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4739-L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4739-L4797) · [Before (L3571-L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3571-L3572)

```diff
-         function QD(DD) {
-           return GD(DD, ZK, !0)
+     function wp(pp, ip, cp) {
+       let Op, {
+           diagnostics: op
+         } = pp.state.field(yp),
+         Ip = -1,
+         Sp = -1;
+       op.between(ip - (cp < 0 ? 1 : 0), ip + (cp > 0 ? 1 : 0), ((pp, op, xp) => {
+         let {
+           spec: Lp
+         } = xp;
+         if (ip >= pp && ip <= op && (pp == op || (ip > pp || cp > 0) && (ip < op || cp < 0))) return Op = Lp.diagnostics, Ip = pp, Sp = op, !1
+       }));
+       let xp = pp.state.facet(ep).tooltipFilter;
+       return Op && xp && (Op = xp(Op, pp.state)), Op ? {
+         pos: Ip,
+         end: Sp,
+ ... (43 more added lines; see GitHub link above)
```

#### 171. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3574-L3576` → after: `L4799-L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4799-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4799-L4834) · [Before (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3574-L3576)

```diff
- 
-         function XD(DD) {
-           return GD(DD, kK, !0)
+       }],
+       dp = Op.k.fromClass(class {
+         constructor(pp) {
+           this.view = pp, this.timeout = -1, this.set = !0;
+           let {
+             delay: ip
+           } = pp.state.facet(ep);
+           this.lintTime = Date.now() + ip, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ip)
+         }
+         run() {
+           clearTimeout(this.timeout);
+           let pp = Date.now();
+           if (pp < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - pp);
+           else {
+             this.set = !1;
+             let {
+ ... (20 more added lines; see GitHub link above)
```

#### 172. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3578-L3580` → after: `L4836-L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4836-L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4836-L4838) · [Before (L3578-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3578-L3580)

```diff
- 
-         function VD(DD) {
-           return GD(DD, wK, !0)
+         update(pp) {
+           let ip = pp.state.facet(ep);
+           (pp.docChanged || ip != pp.startState.facet(ep) || ip.needsRefresh && ip.needsRefresh(pp)) && (this.lintTime = Date.now() + ip.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ip.delay)))
```

#### 173. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3582-L3584` → after: `L4840-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4840-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4840-L4841) · [Before (L3582-L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3582-L3584)

```diff
- 
-         function PD(DD) {
-           return GD(DD, rK, !0)
+         force() {
+           this.set && (this.lintTime = Date.now(), this.run())
```

#### 174. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3586-L3588` → after: `L4843-L4844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4843-L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4843-L4844) · [Before (L3586-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3586-L3588)

```diff
- 
-         function CD(DD) {
-           return GD(DD, IK, !0)
+         destroy() {
+           clearTimeout(this.timeout)
```

#### 175. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3590-L3592` → after: `L4846-L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4846-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4846-L4882) · [Before (L3590-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3590-L3592)

```diff
- 
-         function xD(DD) {
-           return GD(DD, LK, !0)
+       });
+     const ep = op.o.define({
+       combine: pp => ({
+         sources: pp.map((pp => pp.source)).filter((pp => null != pp)),
+         ...(0, op.P)(pp.map((pp => pp.config)), {
+           delay: 750,
+           markerFilter: null,
+           tooltipFilter: null,
+           needsRefresh: null,
+           hideOn: () => null
+         }, {
+           delay: Math.max,
+           markerFilter: jp,
+           tooltipFilter: jp,
+           needsRefresh: (pp, ip) => pp ? ip ? cp => pp(cp) || ip(cp) : pp : ip,
+           hideOn: (pp, ip) => pp ? ip ? (cp, Op, op) => pp(cp, Op, op) || ip(cp, Op, op) : pp : ip,
+ ... (21 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3594-L3596` → after: `L4884-L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4884-L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4884-L4890) · [Before (L3594-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3594-L3596)

```diff
- 
-         function TD(DD) {
-           return GD(DD, ls, !0)
+         of pp) {
+         for (let pp = 0; pp < cp.length; pp++) {
+           let Op = cp[pp];
+           if (/[a-zA-Z]/.test(Op) && !ip.some((pp => pp.toLowerCase() == Op.toLowerCase()))) {
+             ip.push(Op);
+             continue pp
+           }
```

#### 177. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3598-L3613` → after: `L4892-L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4892-L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4892-L4895) · [Before (L3598-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3598-L3613)

```diff
-         DD.formatSyntaxKind = OD, DD.formatSnippetKind = function(DD) {
-           return GD(DD, yK, !1)
-         }, DD.formatScriptKind = function(DD) {
-           return GD(DD, dK, !1)
-         }, DD.formatNodeFlags = JD, DD.formatNodeCheckFlags = function(DD) {
-           return GD(DD, KK, !0)
-         }, DD.formatModifierFlags = ED, DD.formatTransformFlags = QD, DD.formatEmitFlags = XD, DD.formatSymbolFlags = VD, DD.formatTypeFlags = PD, DD.formatSignatureFlags = CD, DD.formatObjectFlags = xD, DD.formatFlowFlags = TD, DD.formatRelationComparisonResult = function(DD) {
-           return GD(DD, Ts, !0)
-         }, DD.formatCheckMode = function(DD) {
-           return GD(DD, ae, !0)
-         }, DD.formatSignatureCheckMode = function(DD) {
-           return GD(DD, ue, !0)
-         }, DD.formatTypeFacts = function(DD) {
-           return GD(DD, ee, !0)
-         };
-         let jD, dD, SD = !1;
+         ip.push("")
+       }
+       return ip
+     }
```

#### 178. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3615-L3631` → after: `L4897-L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4897-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4897-L4973) · [Before (L3615-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3615-L3631)

```diff
-         function iD(DD) {
-           "__debugFlowFlags" in DD || Object.defineProperties(DD, {
-             __tsDebuggerDisplay: {
-               value() {
-                 const DD = 2 & this.flags ? "FlowStart" : 4 & this.flags ? "FlowBranchLabel" : 8 & this.flags ? "FlowLoopLabel" : 16 & this.flags ? "FlowAssignment" : 32 & this.flags ? "FlowTrueCondition" : 64 & this.flags ? "FlowFalseCondition" : 128 & this.flags ? "FlowSwitchCl … [truncated]
-                   zD = -2048 & this.flags;
-                 return `${DD}${zD?` (${TD(zD)})`:""}`
-               }
-             },
-             __debugFlowFlags: {
-               get() {
-                 return GD(this.flags, ls, !0)
-               }
-             },
-             __debugToString: {
-               value() {
- ... (1 more removed lines; see GitHub link above)
+     function Rp(pp, ip, cp) {
+       var Op;
+       let op = cp ? mp(ip.actions) : [];
+       return (0, Ip.d)("li", {
+         class: "cm-diagnostic cm-diagnostic-" + ip.severity
+       }, (0, Ip.d)("span", {
+         class: "cm-diagnosticText"
+       }, ip.renderMessage ? ip.renderMessage(pp) : ip.message), null === (Op = ip.actions) || void 0 === Op ? void 0 : Op.map(((cp, Op) => {
+         let Sp = !1,
+           xp = Op => {
+             if (Op.preventDefault(), Sp) return;
+             Sp = !0;
+             let op = Lp(pp.state.field(yp).diagnostics, ip);
+             op && cp.apply(pp, op.from, op.to)
+           },
+           {
+ ... (61 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L3634-L4077` → after: `L4977-L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4977-L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4977-L4979) · [Before (L3634-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L3634-L4077)

```diff
-           })
-         }
- 
-         function lD(DD) {
-           "__tsDebuggerDisplay" in DD || Object.defineProperties(DD, {
-             __tsDebuggerDisplay: {
-               value: DD => `NodeArray ${DD=String(DD).replace(/(?:,[\s\w]+:[^,]+)+\]$/,"]")}`
-             }
-           })
-         }
-         DD.attachFlowNodeDebugInfo = function(DD) {
-           return SD && ("function" === typeof Object.setPrototypeOf ? (jD || (jD = Object.create(Object.prototype), iD(jD)), Object.setPrototypeOf(DD, jD)) : iD(DD)), DD
-         }, DD.attachNodeArrayDebugInfo = function(DD) {
-           SD && ("function" === typeof Object.setPrototypeOf ? (dD || (dD = Object.create(Array.prototype), lD(dD)), Object.setPrototypeOf(DD, dD)) : lD(DD))
-         }, DD.enableDebugInfo = function() {
-           if (SD) return;
- ... (428 more removed lines; see GitHub link above)
+           },
+           onclick: pp => {
+             for (let ip = 0; ip < this.items.length; ip++) this.items[ip].dom.contains(pp.target) && this.moveSelection(ip)
```

#### 180. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4079-L4085` → after: `L4981-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4981-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4981-L5004) · [Before (L4079-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4079-L4085)

```diff
-           with(zD) {
-             const {
-               major: wD = this.major,
-               minor: pD = this.minor,
-               patch: sD = this.patch,
-               prerelease: KD = this.prerelease,
-               build: rD = this.build
+         }), this.dom = (0, Ip.d)("div", {
+           class: "cm-panel-lint"
+         }, this.list, (0, Ip.d)("button", {
+           type: "button",
+           name: "close",
+           "aria-label": this.view.state.phrase("close"),
+           onclick: () => tp(this.view)
+         }, "\xd7")), this.update()
+       }
+       get selectedIndex() {
+         let pp = this.view.state.field(yp).selected;
+         if (!pp) return -1;
+         for (let ip = 0; ip < this.items.length; ip++)
+           if (this.items[ip].diagnostic == pp.diagnostic) return ip;
+         return -1
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4087-L4091` → after: `L5006-L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5006-L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5006-L5033) · [Before (L4087-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4087-L4091)

```diff
-             return new DD(wD, pD, sD, KD, rD)
-           }
-           toString() {
-             let DD = `${this.major}.${this.minor}.${this.patch}`;
-             return vD(this.prerelease) && (DD += `-${this.prerelease.join(".")}`), vD(this.build) && (DD += `+${this.build.join(".")}`), DD
+             for (let Yp of Lp.diagnostics) {
+               if (Ip.has(Yp)) continue;
+               Ip.add(Yp);
+               let pp, Sp = -1;
+               for (let ip = cp; ip < this.items.length; ip++)
+                 if (this.items[ip].diagnostic == Yp) {
+                   Sp = ip;
+                   break
+                 } Sp < 0 ? (pp = new Mp(this.view, Yp), this.items.splice(cp, 0, pp), Op = !0) : (pp = this.items[Sp], Sp > cp && (this.items.splice(cp, Sp - cp), Op = !0)), ip && pp.diagnostic == ip.diagnostic ? pp.dom.hasAttribute("aria-selected") || (pp.dom.setAttribute("aria- … [truncated]
+             }
+           })); cp < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Op = !0, this.items.pop();
+         0 == this.items.length && (this.items.push(new Mp(this.view, {
+           from: -1,
+           to: -1,
+           severity: "info",
+           message: this.view.state.phrase("No diagnostics")
+ ... (12 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4093-L4107` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5035) · [Before (L4093-L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4093-L4107)

```diff
-         };
-       Pp.zero = new Pp(0, 0, 0, ["0"]);
-       var Cp = Pp;
- 
-       function xp(DD) {
-         const zD = Op.exec(DD);
-         if (!zD) return;
-         const [, wD, pD = "0", sD = "0", KD = "", rD = ""] = zD;
-         return KD && !Jp.test(KD) || rD && !Qp.test(rD) ? void 0 : {
-           major: parseInt(wD, 10),
-           minor: parseInt(pD, 10),
-           patch: parseInt(sD, 10),
-           prerelease: KD,
-           build: rD
-         }
+         })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Op && this.sync()
```

#### 183. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4109-L4137` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5037-L5038) · [Before (L4109-L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4109-L4137)

```diff
-       var Tp = class DD {
-           constructor(DD) {
-             this._alternatives = DD ? np.checkDefined(lp(DD), "Invalid range spec.") : gD
-           }
-           static tryParse(zD) {
-             const wD = lp(zD);
-             if (wD) {
-               const zD = new DD("");
-               return zD._alternatives = wD, zD
-             }
-           }
-           test(DD) {
-             return "string" === typeof DD && (DD = new Cp(DD)),
-               function(DD, zD) {
-                 if (0 === zD.length) return !0;
-                 for (const wD of zD)
- ... (13 more removed lines; see GitHub link above)
+       sync() {
+         let pp = this.list.firstChild;
```

#### 184. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4139-L4155` → after: `L5040-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5040-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5040-L5061) · [Before (L4139-L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4139-L4155)

```diff
-       function lp(DD) {
-         const zD = [];
-         for (let wD of DD.trim().split(bp)) {
-           if (!wD) continue;
-           const DD = [];
-           wD = wD.trim();
-           const pD = Sp.exec(wD);
-           if (pD) {
-             if (!Np(pD[1], pD[2], DD)) return
-           } else
-             for (const zD of wD.split(jp)) {
-               const wD = ip.exec(zD.trim());
-               if (!wD || !Zp(wD[1], wD[2], DD)) return
-             }
-           zD.push(DD)
-         }
- ... (1 more removed lines; see GitHub link above)
+         function ip() {
+           let ip = pp;
+           pp = ip.nextSibling, ip.remove()
+         }
+         for (let cp of this.items)
+           if (cp.dom.parentNode == this.list) {
+             for (; pp != cp.dom;) ip();
+             pp = cp.dom.nextSibling
+           } else this.list.insertBefore(cp.dom, pp);
+         for (; pp;) ip()
+       }
+       moveSelection(pp) {
+         if (this.selectedIndex < 0) return;
+         let ip = Lp(this.view.state.field(yp).diagnostics, this.items[pp].diagnostic);
+         ip && this.view.dispatch({
+           selection: {
+ ... (6 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4157-L4167` → after: `L5063-L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5063-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5063-L5064) · [Before (L4157-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4157-L4167)

```diff
- 
-       function Wp(DD) {
-         const zD = dp.exec(DD);
-         if (!zD) return;
-         const [, wD, pD = "*", sD = "*", KD, rD] = zD;
-         return {
-           version: new Cp(yp(wD) ? 0 : parseInt(wD, 10), yp(wD) || yp(pD) ? 0 : parseInt(pD, 10), yp(wD) || yp(pD) || yp(sD) ? 0 : parseInt(sD, 10), KD, rD),
-           major: wD,
-           minor: pD,
-           patch: sD
-         }
+       static open(pp) {
+         return new Cp(pp)
```

#### 186. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4170-L4175` → after: `L5068-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5068-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5068-L5070) · [Before (L4170-L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4170-L4175)

```diff
-       function Np(DD, zD, wD) {
-         const pD = Wp(DD);
-         if (!pD) return !1;
-         const sD = Wp(zD);
-         return !!sD && (yp(pD.major) || wD.push(kp(">=", pD.version)), yp(sD.major) || wD.push(yp(sD.minor) ? kp("<", sD.version.increment("major")) : yp(sD.patch) ? kp("<", sD.version.increment("minor")) : kp("<=", sD.version)), !0)
-       }
+     function Ep(pp) {
+       return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(pp)}</svg>')`
+     }
```

#### 187. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4177-L4217` → after: `L5072-L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5072-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5072-L5141) · [Before (L4177-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4177-L4217)

```diff
-       function Zp(DD, zD, wD) {
-         const pD = Wp(zD);
-         if (!pD) return !1;
-         const {
-           version: sD,
-           major: KD,
-           minor: rD,
-           patch: LD
-         } = pD;
-         if (yp(KD)) "<" !== DD && ">" !== DD || wD.push(kp("<", Cp.zero));
-         else switch (DD) {
-           case "~":
-             wD.push(kp(">=", sD)), wD.push(kp("<", sD.increment(yp(rD) ? "major" : "minor")));
-             break;
-           case "^":
-             wD.push(kp(">=", sD)), wD.push(kp("<", sD.increment(sD.major > 0 || yp(rD) ? "major" : sD.minor > 0 || yp(LD) ? "minor" : "patch")));
- ... (25 more removed lines; see GitHub link above)
+     function Xp(pp) {
+       return Ep(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${pp}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
+     }
+     const lp = Op.f.baseTheme({
+       ".cm-diagnostic": {
+         padding: "3px 6px 3px 8px",
+         marginLeft: "-1px",
+         display: "block",
+         whiteSpace: "pre-wrap"
+       },
+       ".cm-diagnostic-error": {
+         borderLeft: "5px solid #d11"
+       },
+       ".cm-diagnostic-warning": {
+         borderLeft: "5px solid orange"
+       },
+ ... (54 more added lines; see GitHub link above)
```

#### 188. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4219-L4229` → after: `L5143-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5143-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5143-L5198) · [Before (L4219-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4219-L4229)

```diff
-         return !0
-       }
- 
-       function yp(DD) {
-         return "*" === DD || "x" === DD || "X" === DD
-       }
- 
-       function kp(DD, zD) {
-         return {
-           operator: DD,
-           operand: zD
+       },
+       ".cm-lintPoint-warning": {
+         "&:after": {
+           borderBottomColor: "orange"
+         }
+       },
+       ".cm-lintPoint-info": {
+         "&:after": {
+           borderBottomColor: "#999"
+         }
+       },
+       ".cm-lintPoint-hint": {
+         "&:after": {
+           borderBottomColor: "#66d"
+         }
+       },
+ ... (40 more added lines; see GitHub link above)
```

#### 189. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4233-L4237` → after: `L5203-L5205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5203-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5203-L5205) · [Before (L4233-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4233-L4237)

```diff
-       function mp(DD, zD) {
-         for (const wD of zD)
-           if (!ep(DD, wD.operator, wD.operand)) return !1;
-         return !0
-       }
+     function Qp(pp) {
+       return "error" == pp ? 4 : "warning" == pp ? 3 : "info" == pp ? 2 : 1
+     }
```

#### 190. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4239-L4253` → after: `L5207-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5207-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5207-L5251) · [Before (L4239-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4239-L4253)

```diff
-       function ep(DD, zD, wD) {
-         const pD = DD.compareTo(wD);
-         switch (zD) {
-           case "<":
-             return pD < 0;
-           case "<=":
-             return pD <= 0;
-           case ">":
-             return pD > 0;
-           case ">=":
-             return pD >= 0;
-           case "=":
-             return 0 === pD;
-           default:
-             return np.assertNever(zD)
+     function Jp(pp) {
+       let ip = "hint",
+         cp = 1;
+       for (let Op of pp) {
+         let pp = Qp(Op.severity);
+         pp > cp && (cp = pp, ip = Op.severity)
+       }
+       return ip
+     }
+     Op.j;
+     const Bp = [yp, Op.f.uO.compute([yp], (pp => {
+       let {
+         selected: ip,
+         panel: cp
+       } = pp.field(yp);
+       return ip && cp && ip.from != ip.to ? Op.c.set([Up.range(ip.from, ip.to)]) : Op.c.none
+ ... (29 more added lines; see GitHub link above)
```

#### 191. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4256-L4258` → after: `L5255-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5255-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5255-L5257) · [Before (L4256-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4256-L4258)

```diff
- 
-       function op(DD) {
-         return bD(DD, ap).join(" ")
+       next() {
+         for (; this.matches.length;) this.matches.pop();
+         return this.nextOverlapping()
```

#### 192. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4260-L4272` → after: `L5259-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5259-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5259-L5273) · [Before (L4260-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4260-L4272)

```diff
- 
-       function ap(DD) {
-         return `${DD.operator}${DD.operand}`
-       }
-       var vp = function() {
-           const DD = function() {
-             if (hp()) try {
-               const {
-                 performance: DD
-               } = wD(41310);
-               if (DD) return {
-                 shouldWriteNativeEvents: !1,
-                 performance: DD
+       nextOverlapping() {
+         for (;;) {
+           let pp = this.peek();
+           if (pp < 0) return this.done = !0, this;
+           let ip = (0, op.W)(pp),
+             cp = this.bufferStart + this.bufferPos;
+           this.bufferPos += (0, op.N)(pp);
+           let Op = this.normalize(ip);
+           if (Op.length)
+             for (let op = 0, Ip = cp;; op++) {
+               let pp = Op.charCodeAt(op),
+                 Sp = this.match(pp, Ip, this.bufferPos + this.bufferStart);
+               if (op == Op.length - 1) {
+                 if (Sp) return this.value = Sp, this;
+                 break
```

#### 193. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4274-L4277` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5275) · [Before (L4274-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4274-L4277)

```diff
-             } catch {}
-             if ("object" === typeof performance) return {
-               shouldWriteNativeEvents: !0,
-               performance: performance
+               Ip == cp && op < ip.length && ip.charCodeAt(op) == pp && Ip++
```

#### 194. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4279-L4300` → after: `L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5277) · [Before (L4279-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4279-L4300)

```diff
-           }();
-           if (!DD) return;
-           const {
-             shouldWriteNativeEvents: zD,
-             performance: pD
-           } = DD, sD = {
-             shouldWriteNativeEvents: zD,
-             performance: void 0,
-             performanceTime: void 0
-           };
-           return "number" === typeof pD.timeOrigin && "function" === typeof pD.now && (sD.performanceTime = pD), sD.performanceTime && "function" === typeof pD.mark && "function" === typeof pD.measure && "function" === typeof pD.clearMarks && "function" === typeof pD.clearMeasure … [truncated]
-         }(),
-         tp = null == vp ? void 0 : vp.performanceTime;
- 
-       function Fp() {
-         return vp
- ... (6 more removed lines; see GitHub link above)
+         }
```

#### 195. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4302-L4310` → after: `L5279-L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5279-L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5279-L5334) · [Before (L4302-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4302-L4310)

```diff
- 
-       function ws(DD, zD, wD) {
-         let pD = 0;
-         return {
-           enter: function() {
-             1 === ++pD && As(zD)
-           },
-           exit: function() {
-             0 === --pD ? (As(wD), Us(DD, zD, wD)) : pD < 0 && np.fail("enter/exit count does not match.")
+       match(pp, ip, cp) {
+         let Op = null;
+         for (let op = 0; op < this.matches.length; op += 2) {
+           let ip = this.matches[op],
+             Ip = !1;
+           this.query.charCodeAt(ip) == pp && (ip == this.query.length - 1 ? Op = {
+             from: this.matches[op + 1],
+             to: cp
+           } : (this.matches[op]++, Ip = !0)), Ip || (this.matches.splice(op, 2), op -= 2)
+         }
+         return this.query.charCodeAt(0) == pp && (1 == this.query.length ? Op = {
+           from: ip,
+           to: cp
+         } : this.matches.push(1, ip)), Op && this.test && !this.test(Op.from, Op.to, this.buffer, this.bufferStart) && (Op = null), Op
+       }
+     }
+ ... (40 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4314-L4344` → after: `L5338-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5338-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5338-L5342) · [Before (L4314-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4314-L4344)

```diff
-       sD(Ds, {
-         clearMarks: () => ns,
-         clearMeasures: () => hs,
-         createTimer: () => ws,
-         createTimerIf: () => zs,
-         disable: () => Es,
-         enable: () => Os,
-         forEachMark: () => Gs,
-         forEachMeasure: () => Bs,
-         getCount: () => fs,
-         getDuration: () => Is,
-         isEnabled: () => Ms,
-         mark: () => As,
-         measure: () => Us,
-         nullTimer: () => Ks
-       });
- ... (15 more removed lines; see GitHub link above)
+     }
+     const Ap = new WeakMap;
+     class Pp {
+       constructor(pp, ip) {
+         this.from = pp, this.text = ip
```

#### 197. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4346-L4352` → after: `L5344-L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5344-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5344-L5351) · [Before (L4346-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4346-L4352)

```diff
- 
-       function Us(DD, zD, wD) {
-         if (rs) {
-           const pD = (void 0 !== wD ? cs.get(wD) : void 0) ?? qp(),
-             sD = (void 0 !== zD ? cs.get(zD) : void 0) ?? Ls,
-             KD = Rs.get(DD) || 0;
-           Rs.set(DD, KD + (pD - sD)), null == Hp || Hp.measure(DD, zD, wD)
+       get to() {
+         return this.from + this.text.length
+       }
+       static get(pp, ip, cp) {
+         let Op = Ap.get(pp);
+         if (!Op || Op.from >= cp || Op.to <= ip) {
+           let Op = new Pp(ip, pp.sliceString(ip, cp));
+           return Ap.set(pp, Op), Op
```

#### 198. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4355-L4357` → after: `L5360-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5360-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5360-L5363) · [Before (L4355-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4355-L4357)

```diff
- 
-       function fs(DD) {
-         return gs.get(DD) || 0
+     }
+     class Wp {
+       constructor(pp, ip, cp, Op, op) {
+         this.text = pp, this.to = op, this.done = !1, this.value = Lp, this.matchPos = yp(pp, Op), this.re = new RegExp(ip, Yp + ((null === cp || void 0 === cp ? void 0 : cp.ignoreCase) ? "i" : "")), this.test = null === cp || void 0 === cp ? void 0 : cp.test, this.flat = Pp.get( … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4359-L4387` → after: `L5365-L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5365-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5365-L5366) · [Before (L4359-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4359-L4387)

```diff
- 
-       function Is(DD) {
-         return Rs.get(DD) || 0
-       }
- 
-       function Bs(DD) {
-         Rs.forEach(((zD, wD) => DD(wD, zD)))
-       }
- 
-       function Gs(DD) {
-         cs.forEach(((zD, wD) => DD(wD)))
-       }
- 
-       function hs(DD) {
-         void 0 !== DD ? Rs.delete(DD) : Rs.clear(), null == Hp || Hp.clearMeasures(DD)
-       }
- ... (13 more removed lines; see GitHub link above)
+       chunkEnd(pp) {
+         return pp >= this.to ? this.to : this.text.lineAt(pp).to
```

#### 200. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4390-L4561` → after: `L5410-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5410-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5410-L5419) · [Before (L4390-L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4390-L4561)

```diff
-       function Es() {
-         rs && (cs.clear(), gs.clear(), Rs.clear(), Hp = void 0, rs = !1)
-       }(DD => {
-         let zD, pD, sD = 0,
-           KD = 0;
-         const rD = [];
-         let LD;
-         const cD = [];
-         let gD;
-         var RD;
-         DD.startTracing = function(gD, RD, AD) {
-           if (np.assert(!ps, "Tracing already started"), void 0 === zD) try {
-             zD = wD(41315)
-           } catch (GD) {
-             throw new Error(`tracing requires having fs\n(original error: ${GD.message||GD})`)
-           }
- ... (156 more removed lines; see GitHub link above)
+     function vp(pp) {
+       let ip = [jp, ep];
+       return pp && ip.push(wp.of(pp)), ip
+     }
+     const tp = Op.c.mark({
+         class: "cm-selectionMatch"
+       }),
+       Hp = Op.c.mark({
+         class: "cm-selectionMatch cm-selectionMatch-main"
+       });
```

#### 201. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4563-L4574` → after: `L5421-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5421-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5421-L5426) · [Before (L4563-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4563-L4574)

```diff
-         function fD(DD, zD, wD) {
-           const {
-             phase: pD,
-             name: sD,
-             args: KD,
-             time: rD,
-             separateBeginAndEnd: LD
-           } = AD[DD];
-           LD ? (np.assert(!wD, "`results` are not supported for events with `separateBeginAndEnd`"), ID("E", pD, sD, KD, void 0, zD)) : UD - rD % UD <= zD - rD && ID("X", pD, sD, {
-             ...KD,
-             results: wD
-           }, '"dur":' + (zD - rD), rD)
+     function dp(pp, ip, cp, Op) {
+       return (0 == cp || pp(ip.sliceDoc(cp - 1, cp)) != op.i.Word) && (Op == ip.doc.length || pp(ip.sliceDoc(Op, Op + 1)) != op.i.Word)
+     }
+     const ep = Op.k.fromClass(class {
+         constructor(pp) {
+           this.uO = this.getDeco(pp)
```

#### 202. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4576-L4579` → after: `L5428-L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5428-L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5428-L5429) · [Before (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4576-L4579)

```diff
- 
-         function ID(DD, wD, sD, rD, LD) {
-           let cD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1e3 * qp();
-           "server" === pD && "checkTypes" === wD || (As("beginTracing"), zD.writeSync(KD, `,\n{"pid":1,"tid":1,"ph":"${DD}","cat":"${wD}","ts":${cD},"name":"${sD}"`), LD && zD.writeSync(KD, `,${LD}`), rD && zD.writeSync(KD, `,"args":${JSON.stringify(rD)}`), zD.writeSync(KD, "}"), … [truncated]
+         update(pp) {
+           (pp.selectionSet || pp.docChanged || pp.viewportChanged) && (this.uO = this.getDeco(pp.view))
```

#### 203. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4581-L4593` → after: `L5431-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5431-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5431-L5462) · [Before (L4581-L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4581-L4593)

```diff
- 
-         function BD(DD) {
-           const zD = DI(DD);
-           return zD ? {
-             path: zD.path,
-             start: wD(cc(zD, DD.pos)),
-             end: wD(cc(zD, DD.end))
-           } : void 0;
- 
-           function wD(DD) {
-             return {
-               line: DD.line + 1,
-               character: DD.character + 1
+         getDeco(pp) {
+           let ip = pp.state.facet(wp),
+             {
+               state: cp
+             } = pp,
+             Ip = cp.selection;
+           if (Ip.By.length > 1) return Op.c.none;
+           let Sp, Lp = Ip.main,
+             Yp = null;
+           if (Lp.empty) {
+             if (!ip.highlightWordAroundCursor) return Op.c.none;
+             let pp = cp.wordAt(Lp.head);
+             if (!pp) return Op.c.none;
+             Yp = cp.charCategorizer(Lp.head), Sp = cp.sliceDoc(pp.from, pp.to)
+           } else {
+             let pp = Lp.to - Lp.from;
+ ... (16 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4597-L4710` → after: `L5467-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5467-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5467-L5472) · [Before (L4597-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4597-L4710)

```diff
-         DD.dumpLegend = function() {
-           LD && zD.writeFileSync(LD, JSON.stringify(cD))
-         }
-       })(ss || (ss = {}));
-       var Qs = ss.startTracing,
-         Xs = ss.dumpLegend,
-         Vs = (DD => (DD[DD.Unknown = 0] = "Unknown", DD[DD.EndOfFileToken = 1] = "EndOfFileToken", DD[DD.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", DD[DD.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", DD[DD.NewLineTrivia = 4] = "NewLineTrivia", DD[DD.White … [truncated]
-         Ps = (DD => (DD[DD.None = 0] = "None", DD[DD.Let = 1] = "Let", DD[DD.Const = 2] = "Const", DD[DD.Using = 4] = "Using", DD[DD.AwaitUsing = 6] = "AwaitUsing", DD[DD.NestedNamespace = 8] = "NestedNamespace", DD[DD.Synthesized = 16] = "Synthesized", DD[DD.Namespace = 32] = "N … [truncated]
-         Cs = (DD => (DD[DD.None = 0] = "None", DD[DD.Public = 1] = "Public", DD[DD.Private = 2] = "Private", DD[DD.Protected = 4] = "Protected", DD[DD.Readonly = 8] = "Readonly", DD[DD.Override = 16] = "Override", DD[DD.Export = 32] = "Export", DD[DD.Abstract = 64] = "Abstract",  … [truncated]
-         xs = (DD => (DD[DD.None = 0] = "None", DD[DD.IntrinsicNamedElement = 1] = "IntrinsicNamedElement", DD[DD.IntrinsicIndexedElement = 2] = "IntrinsicIndexedElement", DD[DD.IntrinsicElement = 3] = "IntrinsicElement", DD))(xs || {}),
-         Ts = (DD => (DD[DD.None = 0] = "None", DD[DD.Succeeded = 1] = "Succeeded", DD[DD.Failed = 2] = "Failed", DD[DD.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", DD[DD.ReportsUnreliable = 16] = "ReportsUnreliable", DD[DD.ReportsMask = 24] = "ReportsMask", DD[DD.ComplexityO … [truncated]
-         bs = (DD => (DD[DD.None = 0] = "None", DD[DD.Always = 1] = "Always", DD[DD.Never = 2] = "Never", DD[DD.Sometimes = 3] = "Sometimes", DD))(bs || {}),
-         ds = (DD => (DD[DD.None = 0] = "None", DD[DD.Auto = 1] = "Auto", DD[DD.Loop = 2] = "Loop", DD[DD.Unique = 3] = "Unique", DD[DD.Node = 4] = "Node", DD[DD.KindMask = 7] = "KindMask", DD[DD.ReservedInNestedScopes = 8] = "ReservedInNestedScopes", DD[DD.Optimistic = 16] = "Opt … [truncated]
-         Ss = (DD => (DD[DD.None = 0] = "None", DD[DD.HasIndices = 1] = "HasIndices", DD[DD.Global = 2] = "Global", DD[DD.IgnoreCase = 4] = "IgnoreCase", DD[DD.Multiline = 8] = "Multiline", DD[DD.DotAll = 16] = "DotAll", DD[DD.Unicode = 32] = "Unicode", DD[DD.UnicodeSets = 64] = " … [truncated]
-         is = (DD => (DD[DD.None = 0] = "None", DD[DD.PrecedingLineBreak = 1] = "PrecedingLineBreak", DD[DD.PrecedingJSDocComment = 2] = "PrecedingJSDocComment", DD[DD.Unterminated = 4] = "Unterminated", DD[DD.ExtendedUnicodeEscape = 8] = "ExtendedUnicodeEscape", DD[DD.Scientific  … [truncated]
-         ls = (DD => (DD[DD.Unreachable = 1] = "Unreachable", DD[DD.Start = 2] = "Start", DD[DD.BranchLabel = 4] = "BranchLabel", DD[DD.LoopLabel = 8] = "LoopLabel", DD[DD.Assignment = 16] = "Assignment", DD[DD.TrueCondition = 32] = "TrueCondition", DD[DD.FalseCondition = 64] = "F … [truncated]
- ... (98 more removed lines; see GitHub link above)
+       }, {
+         uO: pp => pp.uO
+       }),
+       jp = Op.f.baseTheme({
+         ".cm-selectionMatch": {
+           backgroundColor: "#99ff7780"
```

#### 205. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4712-L4787` → after: `L5474-L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5474-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5474-L5495) · [Before (L4712-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4712-L4787)

```diff
-         oK = (DD => (DD[DD.Extends = 1] = "Extends", DD[DD.Assign = 2] = "Assign", DD[DD.Rest = 4] = "Rest", DD[DD.Decorate = 8] = "Decorate", DD[DD.ESDecorateAndRunInitializers = 8] = "ESDecorateAndRunInitializers", DD[DD.Metadata = 16] = "Metadata", DD[DD.Param = 32] = "Param", … [truncated]
-         aK = (DD => (DD[DD.SourceFile = 0] = "SourceFile", DD[DD.Expression = 1] = "Expression", DD[DD.IdentifierName = 2] = "IdentifierName", DD[DD.MappedTypeParameter = 3] = "MappedTypeParameter", DD[DD.Unspecified = 4] = "Unspecified", DD[DD.EmbeddedStatement = 5] = "EmbeddedS … [truncated]
-         uK = (DD => (DD[DD.Parentheses = 1] = "Parentheses", DD[DD.TypeAssertions = 2] = "TypeAssertions", DD[DD.NonNullAssertions = 4] = "NonNullAssertions", DD[DD.PartiallyEmittedExpressions = 8] = "PartiallyEmittedExpressions", DD[DD.ExpressionsWithTypeArguments = 16] = "Expre … [truncated]
-         vK = (DD => (DD[DD.None = 0] = "None", DD[DD.InParameters = 1] = "InParameters", DD[DD.VariablesHoistedInParameters = 2] = "VariablesHoistedInParameters", DD))(vK || {}),
-         tK = (DD => (DD[DD.None = 0] = "None", DD[DD.SingleLine = 0] = "SingleLine", DD[DD.MultiLine = 1] = "MultiLine", DD[DD.PreserveLines = 2] = "PreserveLines", DD[DD.LinesMask = 3] = "LinesMask", DD[DD.NotDelimited = 0] = "NotDelimited", DD[DD.BarDelimited = 4] = "BarDelimit … [truncated]
-         FK = (DD => (DD[DD.None = 0] = "None", DD[DD.TripleSlashXML = 1] = "TripleSlashXML", DD[DD.SingleLine = 2] = "SingleLine", DD[DD.MultiLine = 4] = "MultiLine", DD[DD.All = 7] = "All", DD[DD.Default = 7] = "Default", DD))(FK || {}),
-         YK = {
-           reference: {
-             args: [{
-               name: "types",
-               optional: !0,
-               captureSpan: !0
-             }, {
-               name: "lib",
-               optional: !0,
-               captureSpan: !0
- ... (60 more removed lines; see GitHub link above)
+         ".cm-searchMatch .cm-selectionMatch": {
+           backgroundColor: "transparent"
+         }
+       });
+     const kp = op.o.define({
+       combine: pp => (0, op.P)(pp, {
+         top: !1,
+         caseSensitive: !1,
+         literal: !1,
+         regexp: !1,
+         wholeWord: !1,
+         createPanel: pp => new ci(pp),
+         scrollToMatch: pp => Op.f.scrollIntoView(pp)
+       })
+     });
+     class mp {
+ ... (6 more added lines; see GitHub link above)
```

#### 206. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4789-L4795` → after: `L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5497) · [Before (L4789-L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4789-L4795)

```diff
-         },
-         HK = (DD => (DD[DD.ParseAll = 0] = "ParseAll", DD[DD.ParseNone = 1] = "ParseNone", DD[DD.ParseForTypeErrors = 2] = "ParseForTypeErrors", DD[DD.ParseForTypeInfo = 3] = "ParseForTypeInfo", DD))(HK || {});
- 
-       function qK(DD) {
-         let zD = 5381;
-         for (let wD = 0; wD < DD.length; wD++) zD = (zD << 5) + zD + DD.charCodeAt(wD);
-         return zD.toString()
+         }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!pp.wholeWord, this.test = pp.test
```

#### 207. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4797-L4799` → after: `L5499-L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5499-L5500) · [Before (L4797-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4797-L4799)

```diff
- 
-       function Dr() {
-         Error.stackTraceLimit < 100 && (Error.stackTraceLimit = 100)
+       unquote(pp) {
+         return this.literal ? pp : pp.replace(/\\([nrt\\])/g, ((pp, ip) => "n" == ip ? "\n" : "r" == ip ? "\r" : "t" == ip ? "\t" : "\\"))
```

#### 208. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4801-L4806` → after: `L5502-L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5502-L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5502-L5503) · [Before (L4801-L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4801-L4806)

```diff
-       var zr = (DD => (DD[DD.Created = 0] = "Created", DD[DD.Changed = 1] = "Changed", DD[DD.Deleted = 2] = "Deleted", DD))(zr || {}),
-         wr = (DD => (DD[DD.High = 2e3] = "High", DD[DD.Medium = 500] = "Medium", DD[DD.Low = 250] = "Low", DD))(wr || {}),
-         pr = new Date(0);
- 
-       function sr(DD, zD) {
-         return DD.getModifiedTime(zD) || pr
+       eq(pp) {
+         return this.search == pp.search && this.replace == pp.replace && this.caseSensitive == pp.caseSensitive && this.regexp == pp.regexp && this.wholeWord == pp.wholeWord && this.test == pp.test
```

#### 209. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4808-L4814` → after: `L5505-L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5505-L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5505-L5506) · [Before (L4808-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4808-L4814)

```diff
- 
-       function Kr(DD) {
-         return {
-           250: DD.Low,
-           500: DD.Medium,
-           2e3: DD.High
-         }
+       create() {
+         return this.regexp ? new lp(this) : new Mp(this)
```

#### 210. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4816-L4822` → after: `L5508-L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5508-L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5508-L5521) · [Before (L4816-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4816-L4822)

```diff
-       var rr = {
-           Low: 32,
-           Medium: 64,
-           High: 256
-         },
-         Lr = Kr(rr),
-         cr = Kr(rr);
+       getCursor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = pp.doc ? pp : op.n.create({
+             doc: pp
+           });
+         return null == cp && (cp = Op.doc.length), this.regexp ? Cp(this, Op, ip, cp) : qp(this, Op, ip, cp)
+       }
+     }
+     class Rp {
+       constructor(pp) {
+         this.spec = pp
+       }
+     }
```

#### 211. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4824-L4835` → after: `L5523-L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5523-L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5523-L5530) · [Before (L4824-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4824-L4835)

```diff
-       function gr(DD, zD, wD, pD, sD) {
-         let KD = wD;
-         for (let LD = zD.length; pD && LD; rD(), LD--) {
-           const rD = zD[wD];
-           if (!rD) continue;
-           if (rD.isClosed) {
-             zD[wD] = void 0;
-             continue
-           }
-           pD--;
-           const LD = fr(rD, sr(DD, rD.fileName));
-           rD.isClosed ? zD[wD] = void 0 : (null == sD || sD(rD, wD, LD), zD[wD] && (KD < wD && (zD[KD] = rD, zD[wD] = void 0), KD++))
+     function qp(pp, ip, cp, Op) {
+       let Ip;
+       var Sp, Lp;
+       return pp.wholeWord && (Sp = ip.doc, Lp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp, Op) => ((Op > pp || Op + cp.length < ip) && (Op = Math.max(0, pp - 2), cp = Sp.sliceString(Op, Math.min(Sp.length, ip + 2))), (Lp(Ep(cp, pp - Op)) != op.i.Word || Lp(Xp(c … [truncated]
+         return (Op, op, Ip, Sp) => {
+           if (cp && !cp(Op, op, Ip, Sp)) return !1;
+           let xp = Op >= Sp && op <= Sp + Ip.length ? Ip.slice(Op - Sp, op - Sp) : ip.doc.sliceString(Op, op);
+           return pp(xp, ip, Op, op)
```

#### 212. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4837-L4840` → after: `L5532-L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5532-L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5532-L5554) · [Before (L4837-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4837-L4840)

```diff
-         return wD;
- 
-         function rD() {
-           ++wD === zD.length && (KD < wD && (zD.length = KD), wD = 0, KD = 0)
+       }(pp.test, ip, Ip)), new xp(ip.doc, pp.unquoted, cp, Op, pp.caseSensitive ? void 0 : pp => pp.toLowerCase(), Ip)
+     }
+     class Mp extends Rp {
+       constructor(pp) {
+         super(pp)
+       }
+       nextMatch(pp, ip, cp) {
+         let Op = qp(this.spec, pp, cp, pp.doc.length).nextOverlapping();
+         if (Op.done) {
+           let cp = Math.min(pp.doc.length, ip + this.spec.unquoted.length);
+           Op = qp(this.spec, pp, 0, cp).nextOverlapping()
+         }
+         return Op.done || Op.value.from == ip && Op.value.to == cp ? null : Op.value
+       }
+       prevMatchInRange(pp, ip, cp) {
+         for (let Op = cp;;) {
+ ... (7 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4843-L4866` → after: `L5557-L5569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5557-L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5557-L5569) · [Before (L4843-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4843-L4866)

```diff
- 
-       function Rr(DD) {
-         const zD = [],
-           wD = [],
-           pD = rD(250),
-           sD = rD(500),
-           KD = rD(2e3);
-         return function(wD, pD, sD) {
-           const KD = {
-             fileName: wD,
-             callback: pD,
-             unchangedPolls: 0,
-             mtime: sr(DD, wD)
-           };
-           return zD.push(KD), AD(KD, sD), {
-             close: () => {
- ... (8 more removed lines; see GitHub link above)
+       prevMatch(pp, ip, cp) {
+         let Op = this.prevMatchInRange(pp, 0, ip);
+         return Op || (Op = this.prevMatchInRange(pp, Math.max(0, cp - this.spec.unquoted.length), pp.doc.length)), !Op || Op.from == ip && Op.to == cp ? null : Op
+       }
+       getReplacement(pp) {
+         return this.spec.unquote(this.spec.replace)
+       }
+       matchAll(pp, ip) {
+         let cp = qp(this.spec, pp, 0, pp.doc.length),
+           Op = [];
+         for (; !cp.next().done;) {
+           if (Op.length >= ip) return null;
+           Op.push(cp.value)
```

#### 214. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4868-L4870` → after: `L5571-L5631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5571-L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5571-L5631) · [Before (L4868-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4868-L4870)

```diff
- 
-         function LD(DD, zD) {
-           zD.pollIndex = gD(zD, zD.pollingInterval, zD.pollIndex, Lr[zD.pollingInterval]), zD.length ? fD(zD.pollingInterval) : (np.assert(0 === zD.pollIndex), zD.pollScheduled = !1)
+         return Op
+       }
+       highlight(pp, ip, cp, Op) {
+         let op = qp(this.spec, pp, Math.max(0, ip - this.spec.unquoted.length), Math.min(cp + this.spec.unquoted.length, pp.doc.length));
+         for (; !op.next().done;) Op(op.value.from, op.value.to)
+       }
+     }
+ 
+     function Cp(pp, ip, cp, Op) {
+       let Ip;
+       var Sp;
+       return pp.wholeWord && (Sp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp) => !cp[0].length || (Sp(Ep(cp.input, cp.index)) != op.i.Word || Sp(Xp(cp.input, cp.index)) != op.i.Word) && (Sp(Xp(cp.input, cp.index + cp[0].length)) != op.i.Word || Sp(Ep(cp.input,  … [truncated]
+         return (Op, op, Ip) => (!cp || cp(Op, op, Ip)) && pp(Ip[0], ip, Op, op)
+       }(pp.test, ip, Ip)), new Dp(ip.doc, pp.search, {
+         ignoreCase: !pp.caseSensitive,
+         test: Ip
+ ... (45 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4872-L4874` → after: `L5633-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5633-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5633-L5663) · [Before (L4872-L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4872-L4874)

```diff
- 
-         function cD(DD, zD) {
-           gD(wD, 250, 0, wD.length), LD(0, zD), !zD.pollScheduled && wD.length && fD(250)
+         return Op
+       }
+       highlight(pp, ip, cp, Op) {
+         let op = Cp(this.spec, pp, Math.max(0, ip - 250), Math.min(cp + 250, pp.doc.length));
+         for (; !op.next().done;) Op(op.value.from, op.value.to)
+       }
+     }
+     const Qp = op.C.define(),
+       Jp = op.C.define(),
+       Bp = op.E.define({
+         create: pp => new Np(Zp(pp).create(), null),
+         update(pp, ip) {
+           for (let cp of ip.effects) cp.is(Qp) ? pp = new Np(cp.value.create(), pp.panel) : cp.is(Jp) && (pp = new Np(pp.query, cp.value ? rp : null));
+           return pp
+         },
+         provide: pp => Op.ob.from(pp, (pp => pp.panel))
+ ... (15 more added lines; see GitHub link above)
```

#### 216. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4876-L4881` → after: `L5665-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5665-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5665-L5667) · [Before (L4876-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4876-L4881)

```diff
- 
-         function gD(zD, pD, sD, KD) {
-           return gr(DD, zD, sD, KD, (function(DD, sD, KD) {
-             KD ? (DD.unchangedPolls = 0, zD !== wD && (zD[sD] = void 0, rD = DD, wD.push(rD), UD(250))) : DD.unchangedPolls !== cr[pD] ? DD.unchangedPolls++ : zD === wD ? (DD.unchangedPolls = 1, zD[sD] = void 0, AD(DD, 250)) : 2e3 !== pD && (DD.unchangedPolls++, zD[sD] = void 0,  … [truncated]
-             var rD
-           }))
+         update(pp) {
+           let ip = pp.state.field(Bp);
+           (ip != pp.startState.field(Bp) || pp.docChanged || pp.selectionSet || pp.viewportChanged) && (this.uO = this.highlight(ip))
```

#### 217. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4883-L4891` → after: `L5669-L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5669-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5669-L5687) · [Before (L4883-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4883-L4891)

```diff
- 
-         function RD(DD) {
-           switch (DD) {
-             case 250:
-               return pD;
-             case 500:
-               return sD;
-             case 2e3:
-               return KD
+         highlight(pp) {
+           let {
+             query: ip,
+             panel: cp
+           } = pp;
+           if (!cp || !ip.spec.valid) return Op.c.none;
+           let {
+             view: Ip
+           } = this, Sp = new op.w;
+           for (let Op = 0, op = Ip.Z2, xp = op.length; Op < xp; Op++) {
+             let {
+               from: pp,
+               to: cp
+             } = op[Op];
+             for (; Op < xp - 1 && cp > op[Op + 1].from - 500;) cp = op[++Op].to;
+             ip.highlight(Ip.state, pp, cp, ((pp, ip) => {
+ ... (3 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4895-L4905` → after: `L5695-L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5695-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5695-L5698) · [Before (L4895-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4895-L4905)

```diff
-         function AD(DD, zD) {
-           RD(zD).push(DD), UD(zD)
-         }
- 
-         function UD(DD) {
-           RD(DD).pollScheduled || fD(DD)
-         }
- 
-         function fD(zD) {
-           RD(zD).pollScheduled = DD.setTimeout(250 === zD ? cD : LD, zD, 250 === zD ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", RD(zD))
-         }
+     function hp(pp) {
+       return ip => {
+         let cp = ip.state.field(Bp, !1);
+         return cp && cp.query.spec.valid ? pp(ip, cp) : Kp(ip)
```

#### 219. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4908-L4922` → after: `L5795-L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5795-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5795-L5960) · [Before (L4908-L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4908-L4922)

```diff
-       function Ar(DD, zD, wD, pD) {
-         const sD = Yz(),
-           KD = pD ? new Map : void 0,
-           rD = new Map,
-           LD = qw(zD);
-         return function(zD, pD, cD, gD) {
-           const RD = LD(zD);
-           1 === sD.add(RD, pD).length && KD && KD.set(RD, wD(zD) || pr);
-           const AD = ur(RD) || ".",
-             UD = rD.get(AD) || function(zD, pD, cD) {
-               const gD = DD(zD, 1, ((DD, pD) => {
-                 if (!sw(pD)) return;
-                 const rD = sL(pD, zD),
-                   cD = LD(rD),
-                   gD = rD && sD.get(cD);
+     function rp(pp) {
+       return pp.state.facet(kp).createPanel(pp)
+     }
+ 
+     function Zp(pp, ip) {
+       var cp, Op, op, Ip, Sp;
+       let xp = pp.selection.main,
+         Lp = xp.empty || xp.to > xp.from + 100 ? "" : pp.sliceDoc(xp.from, xp.to);
+       if (ip && !Lp) return ip;
+       let Yp = pp.facet(kp);
+       return new mp({
+         search: (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== cp ? cp : Yp.literal) ? Lp : Lp.replace(/\n/g, "\\n"),
+         caseSensitive: null !== (Op = null === ip || void 0 === ip ? void 0 : ip.caseSensitive) && void 0 !== Op ? Op : Yp.caseSensitive,
+         literal: null !== (op = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== op ? op : Yp.literal,
+         regexp: null !== (Ip = null === ip || void 0 === ip ? void 0 : ip.regexp) && void 0 !== Ip ? Ip : Yp.regexp,
+         wholeWord: null !== (Sp = null === ip || void 0 === ip ? void 0 : ip.wholeWord) && void 0 !== Sp ? Sp : Yp.wholeWord
+ ... (150 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4924-L4930` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5962-L5963) · [Before (L4924-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4924-L4930)

```diff
-                   let zD, pD = 1;
-                   if (KD) {
-                     const sD = KD.get(cD);
-                     if ("change" === DD && (zD = wD(rD) || pr, zD.getTime() === sD.getTime())) return;
-                     zD || (zD = wD(rD) || pr), KD.set(cD, zD), sD === pr ? pD = 0 : zD === pr && (pD = 2)
-                   }
-                   for (const DD of gD) DD(rD, pD, zD)
+                   let ip = pp.wordAt(Lp.value.from);
+                   if (!ip || ip.from != Lp.value.from || ip.to != Lp.value.to) continue
```

#### 221. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4932-L4937` → after: `L5965-L5968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5965-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5965-L5968) · [Before (L4932-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4932-L4937)

```diff
-               }), !1, 500, cD);
-               return gD.referenceCount = 0, rD.set(pD, gD), gD
-             }(ur(zD) || ".", AD, gD);
-           return UD.referenceCount++, {
-             close: () => {
-               1 === UD.referenceCount ? (UD.close(), rD.delete(AD)) : UD.referenceCount--, sD.remove(RD, pD)
+                 return Lp.value
+               }
+               if (Sp) return null;
+               Lp = new xp(pp.doc, ip, 0, Math.max(0, Op[Op.length - 1].from - 1)), Sp = !0
```

#### 222. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4939-L4941` → after: `L5970-L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5970-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5970-L5981) · [Before (L4939-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4939-L4941)

```diff
-           }
-         }
-       }
+           }(ip, Sp);
+           return !!Lp && (cp(ip.update({
+             selection: ip.selection.addRange(op.l.range(Lp.from, Lp.to), !1),
+             effects: Op.f.scrollIntoView(Lp.to)
+           })), !0)
+         },
+         preventDefault: !0
+       }];
+     class ci {
+       constructor(pp) {
+         this.view = pp;
+         let ip = this.query = pp.state.field(Bp).query.spec;
```

#### 223. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4943-L4956` → after: `L5983-L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5983-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L5983-L5989) · [Before (L4943-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4943-L4956)

```diff
-       function Ur(DD, zD, wD, pD, sD) {
-         const KD = qw(zD)(wD),
-           rD = DD.get(KD);
-         return rD ? rD.callbacks.push(pD) : DD.set(KD, {
-           watcher: sD(((zD, wD, pD) => {
-             var sD;
-             return null == (sD = DD.get(KD)) ? void 0 : sD.callbacks.slice().forEach((DD => DD(zD, wD, pD)))
-           })),
-           callbacks: [pD]
-         }), {
-           close: () => {
-             const zD = DD.get(KD);
-             zD && tw(zD.callbacks, pD) && !zD.callbacks.length && (DD.delete(KD), ov(zD))
-           }
+         function cp(pp, ip, cp) {
+           return (0, Ip.d)("button", {
+             class: "cm-button",
+             name: pp,
+             onclick: ip,
+             type: "button"
+           }, cp)
```

#### 224. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4959-L4963` → after: `L6050-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6050-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6050-L6051) · [Before (L4959-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4959-L4963)

```diff
- 
-       function fr(DD, zD) {
-         const wD = DD.mtime.getTime(),
-           pD = zD.getTime();
-         return wD !== pD && (DD.mtime = zD, DD.callback(DD.fileName, Ir(wD, pD), zD), !0)
+       keydown(pp) {
+         (0, Op.hb)(this.view, pp, "search-panel") ? pp.preventDefault(): 13 == pp.keyCode && pp.target == this.searchField ? (pp.preventDefault(), (pp.shiftKey ? np : ap)(this.view)) : 13 == pp.keyCode && pp.target == this.replaceField && (pp.preventDefault(), gp(this.view))
```

#### 225. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4965-L4967` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6053-L6055) · [Before (L4965-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4965-L4967)

```diff
- 
-       function Ir(DD, zD) {
-         return 0 === DD ? 0 : 0 === zD ? 2 : 1
+       update(pp) {
+         for (let ip of pp.transactions)
+           for (let pp of ip.effects) pp.is(Qp) && !pp.value.eq(this.query) && this.setQuery(pp.value)
```

#### 226. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4969-L4973` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6057-L6058) · [Before (L4969-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4969-L4973)

```diff
-       var Br = ["/node_modules/.", "/.git", "/.#"],
-         Gr = gw;
- 
-       function hr(DD) {
-         return Gr(DD)
+       setQuery(pp) {
+         this.query = pp, this.searchField.value = pp.search, this.replaceField.value = pp.replace, this.caseField.checked = pp.caseSensitive, this.reField.checked = pp.regexp, this.wordField.checked = pp.wholeWord
```

#### 227. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4975-L4977` → after: `L6060-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6060-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6060-L6067) · [Before (L4975-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4975-L4977)

```diff
- 
-       function nr(DD) {
-         Gr = DD
+       mount() {
+         this.searchField.select()
+       }
+       get pos() {
+         return 80
+       }
+       get top() {
+         return this.view.state.facet(kp).top
```

#### 228. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4980-L4997` → after: `L6071-L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6071-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6071-L6075) · [Before (L4980-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4980-L4997)

```diff
-       function Mr(DD) {
-         let {
-           watchDirectory: zD,
-           useCaseSensitiveFileNames: wD,
-           getCurrentDirectory: pD,
-           getAccessibleSortedChildDirectories: sD,
-           fileSystemEntryExists: KD,
-           realpath: rD,
-           setTimeout: LD,
-           clearTimeout: cD
-         } = DD;
-         const RD = new Map,
-           AD = Yz(),
-           UD = new Map;
-         let fD;
-         const ID = dw(!wD),
- ... (2 more removed lines; see GitHub link above)
+     function Oi(pp, ip) {
+       return pp.state.phrase(ip)
+     }
+     const oi = 30,
+       Ii = /[\s\.,:;?!]/;
```

#### 229. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4999-L5037` → after: `L6077-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6077-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6077-L6252) · [Before (L4999-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4999-L5037)

```diff
-         function GD(DD, wD, pD, sD) {
-           const rD = BD(DD);
-           let ID = RD.get(rD);
-           ID ? ID.refCount++ : (ID = {
-             watcher: zD(DD, (zD => {
-               var pD;
-               ED(zD, wD) || ((null == wD ? void 0 : wD.synchronousWatchDirectory) ? ((null == (pD = RD.get(rD)) ? void 0 : pD.targetWatcher) || hD(DD, rD, zD), JD(DD, rD, wD)) : function(DD, zD, wD, pD) {
-                 const sD = RD.get(zD);
-                 if (sD && KD(DD, 1)) return void
-                 function(DD, zD, wD, pD) {
-                   const sD = UD.get(zD);
-                   sD ? sD.fileNames.push(wD) : UD.set(zD, {
-                     dirName: DD,
-                     options: pD,
-                     fileNames: [wD]
-                   });
- ... (23 more removed lines; see GitHub link above)
+     function Si(pp, ip) {
+       let {
+         from: cp,
+         to: op
+       } = ip, Ip = pp.state.doc.lineAt(cp), Sp = pp.state.doc.lineAt(op).to, xp = Math.max(Ip.from, cp - oi), Lp = Math.min(Sp, op + oi), Yp = pp.state.sliceDoc(xp, Lp);
+       if (xp != Ip.from)
+         for (let Op = 0; Op < oi; Op++)
+           if (!Ii.test(Yp[Op + 1]) && Ii.test(Yp[Op])) {
+             Yp = Yp.slice(Op);
+             break
+           } if (Lp != Sp)
+         for (let Op = Yp.length - 1; Op > Yp.length - oi; Op--)
+           if (!Ii.test(Yp[Op - 1]) && Ii.test(Yp[Op])) {
+             Yp = Yp.slice(0, Op);
+             break
+           } return Op.f.announce.of(`${pp.state.phrase("current match")}. ${Yp} ${pp.state.phrase("on line")} ${Ip.number}.`)
+ ... (160 more added lines; see GitHub link above)
```

#### 230. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5039-L5059` → after: `L6254-L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6254-L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6254-L6373) · [Before (L5039-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5039-L5059)

```diff
- 
-         function hD(DD, zD, wD, pD) {
-           var sD, KD;
-           let rD, LD;
-           sw(wD) ? rD = wD : LD = wD, AD.forEach(((DD, wD) => {
-             if ((!LD || !0 !== LD.get(wD)) && (wD === zD || pp(zD, wD) && zD[wD.length] === Cr))
-               if (LD)
-                 if (pD) {
-                   const DD = LD.get(wD);
-                   DD ? DD.push(...pD) : LD.set(wD, pD.slice())
-                 } else LD.set(wD, !0);
-             else DD.forEach((DD => {
-               let {
-                 callback: zD
-               } = DD;
-               return zD(rD)
- ... (5 more removed lines; see GitHub link above)
+       };
+     const yp = /Edge\/(\d+)/.exec(Pp.userAgent),
+       Up = /MSIE \d/.test(Pp.userAgent),
+       wp = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Pp.userAgent),
+       vp = !!(Up || wp || yp),
+       tp = !vp && /gecko\/(\d+)/i.test(Pp.userAgent),
+       Hp = !vp && /Chrome\/(\d+)/.exec(Pp.userAgent),
+       dp = "webkitFontSmoothing" in Wp.documentElement.style,
+       ep = !vp && /Apple Computer/.test(Pp.vendor),
+       jp = ep && (/Mobile\/\w+/.test(Pp.userAgent) || Pp.maxTouchPoints > 2);
+     var kp = {
+       mac: jp || /Mac/.test(Pp.platform),
+       windows: /Win/.test(Pp.platform),
+       linux: /Linux|X11/.test(Pp.platform),
+       ie: vp,
+       ie_version: Up ? Wp.documentMode || 6 : wp ? +wp[1] : yp ? +yp[1] : 0,
+ ... (104 more added lines; see GitHub link above)
```

#### 231. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5062-L5092` → after: `L6447-L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6447-L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6447-L6457) · [Before (L5062-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5062-L5092)

```diff
-         function nD() {
-           var DD;
-           fD = void 0, hr(`sysLog:: onTimerToUpdateChildWatches:: ${UD.size}`);
-           const zD = qp(),
-             wD = new Map;
-           for (; !fD && UD.size;) {
-             const zD = UD.entries().next();
-             np.assert(!zD.done);
-             const {
-               value: [pD, {
-                 dirName: sD,
-                 options: KD,
-                 fileNames: rD
-               }]
-             } = zD;
-             UD.delete(pD);
- ... (15 more removed lines; see GitHub link above)
+     function Np(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         {
+           inclusiveStart: cp,
+           inclusiveEnd: Op
+         } = pp;
+       return null == cp && (cp = pp.inclusive), null == Op && (Op = pp.inclusive), {
+         start: null !== cp && void 0 !== cp ? cp : ip,
+         end: null !== Op && void 0 !== Op ? Op : ip
+       }
+     }
```

#### 232. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5094-L5099` → after: `L6459-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6459-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6459-L6479) · [Before (L5094-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5094-L5099)

```diff
-         function MD(DD) {
-           if (!DD) return;
-           const zD = DD.childWatches;
-           DD.childWatches = gD;
-           for (const wD of zD) wD.close(), MD(RD.get(BD(wD.dirName)))
-         }
+     function Tp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = cp.length - 1;
+       op >= 0 && cp[op] + Op >= pp ? cp[op] = Math.max(cp[op], ip) : cp.push(pp, ip)
+     }
+     Bp.prototype.point = !0;
+     class fp extends Op.B {
+       constructor(pp, ip) {
+         super(), this.tagName = pp, this.attributes = ip
+       }
+       eq(pp) {
+         return pp == this || pp instanceof fp && this.tagName == pp.tagName && qp(this.attributes, pp.attributes)
+       }
+       static create(pp) {
+         return new fp(pp.tagName, pp.attributes || Rp)
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 233. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5101-L5103` → after: `L6481-L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6481-L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6481-L6484) · [Before (L5101-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5101-L5103)

```diff
-         function OD(DD) {
-           (null == DD ? void 0 : DD.targetWatcher) && (DD.targetWatcher.close(), DD.targetWatcher = void 0)
-         }
+     function bp(pp) {
+       let ip;
+       return ip = 11 == pp.nodeType ? pp.getSelection ? pp : pp.ownerDocument : pp, ip.getSelection()
+     }
```

#### 234. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5105-L5115` → after: `L6486-L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6486-L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6486-L6488) · [Before (L5105-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5105-L5115)

```diff
-         function JD(DD, zD, wD) {
-           const pD = RD.get(zD);
-           if (!pD) return !1;
-           const LD = KL(rD(DD));
-           let cD, AD;
-           return 0 === ID(LD, DD) ? cD = Up(KD(DD, 1) ? yD(sD(DD), (zD => {
-             const pD = sL(zD, DD);
-             return ED(pD, wD) || 0 !== ID(pD, KL(rD(pD))) ? void 0 : pD
-           })) : gD, pD.childWatches, ((DD, zD) => ID(DD, zD.dirName)), (function(DD) {
-             UD(GD(DD, wD))
-           }), sQ, UD) : pD.targetWatcher && 0 === ID(LD, pD.targetWatcher.dirName) ? (cD = !1, np.assert(pD.childWatches === gD)) : (OD(pD), pD.targetWatcher = GD(LD, wD, void 0, DD), pD.childWatches.forEach(sQ), cD = !0), pD.childWatches = AD || gD, cD;
+     function hp(pp, ip) {
+       return !!ip && (pp == ip || pp.contains(1 != ip.nodeType ? ip.parentNode : ip))
+     }
```

#### 235. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5117-L5120` → after: `L6490-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6490-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6490-L6604) · [Before (L5117-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5117-L5120)

```diff
-           function UD(DD) {
-             (AD || (AD = [])).push(DD)
-           }
-         }
+     function ap(pp, ip) {
+       if (!ip.anchorNode) return !1;
+       try {
+         return hp(pp, ip.anchorNode)
+       } catch (cp) {
+         return !1
+       }
+     }
+ 
+     function np(pp) {
+       return 3 == pp.nodeType ? Ii(pp, 0, pp.nodeValue.length).getClientRects() : 1 == pp.nodeType ? pp.getClientRects() : []
+     }
+ 
+     function Fp(pp, ip, cp, Op) {
+       return !!cp && (rp(pp, ip, cp, Op, -1) || rp(pp, ip, cp, Op, 1))
+     }
+ ... (99 more added lines; see GitHub link above)
```

#### 236. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5122-L5125` → after: `L6606-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6606-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6606-L6669) · [Before (L5122-L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5122-L5125)

```diff
-         function ED(DD, zD) {
-           return vD(Br, (zD => function(DD, zD) {
-             return !!DD.includes(zD) || !wD && BD(DD).includes(zD)
-           }(DD, zD))) || Jr(DD, zD, wD, pD)
+     function oi(pp) {
+       if (pp.setActive) return pp.setActive();
+       if (Oi) return pp.focus(Oi);
+       let ip = [];
+       for (let cp = pp; cp && (ip.push(cp, cp.scrollTop, cp.scrollLeft), cp != cp.ownerDocument); cp = cp.parentNode);
+       if (pp.focus(null == Oi ? {
+           get preventScroll() {
+             return Oi = {
+               preventScroll: !0
+             }, !0
+           }
+         } : void 0), !Oi) {
+         Oi = !1;
+         for (let pp = 0; pp < ip.length;) {
+           let cp = ip[pp++],
+             Op = ip[pp++],
+ ... (48 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5128` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6672) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5128)

```diff
-       var Or = (DD => (DD[DD.File = 0] = "File", DD[DD.Directory = 1] = "Directory", DD))(Or || {});
+     }
```

#### 238. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5130-L5131` → after: `L6674-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6674-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6674-L6686) · [Before (L5130-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5130-L5131)

```diff
-       function Jr(DD, zD, wD, pD) {
-         return ((null == zD ? void 0 : zD.excludeDirectories) || (null == zD ? void 0 : zD.excludeFiles)) && (Vy(DD, null == zD ? void 0 : zD.excludeFiles, wD, pD()) || Vy(DD, null == zD ? void 0 : zD.excludeDirectories, wD, pD()))
+     function Yi(pp, ip) {
+       for (let cp = pp, Op = ip;;) {
+         if (3 == cp.nodeType && Op < cp.nodeValue.length) return {
+           node: cp,
+           offset: Op
+         };
+         if (1 == cp.nodeType && Op < cp.childNodes.length) {
+           if ("false" == cp.contentEditable) return null;
+           cp = cp.childNodes[Op], Op = 0
+         } else {
+           if (!cp.parentNode || Gp(cp)) return null;
+           Op = gp(cp) + 1, cp = cp.parentNode
+         }
```

#### 239. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5133-L5138` → after: `L6688-L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6688-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6688-L6746) · [Before (L5133-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5133-L5138)

```diff
- 
-       function Er(DD, zD, wD, pD, sD) {
-         return (KD, rD) => {
-           if ("rename" === KD) {
-             const KD = rD ? KL(zL(DD, rD)) : DD;
-             rD && Jr(KD, wD, pD, sD) || zD(KD)
+     }
+     kp.safari && kp.safari_version >= 26 && (Oi = !1);
+     class Di {
+       constructor(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         this.node = pp, this.offset = ip, this.precise = cp
+       }
+       static before(pp, ip) {
+         return new Di(pp.parentNode, gp(pp), ip)
+       }
+       static after(pp, ip) {
+         return new Di(pp.parentNode, gp(pp) + 1, ip)
+       }
+     }
+     var Ai = function(pp) {
+       return pp[pp.LTR = 0] = "LTR", pp[pp.RTL = 1] = "RTL", pp
+ ... (43 more added lines; see GitHub link above)
```

#### 240. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5143-L5183` → after: `L6754-L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6754-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6754-L6763) · [Before (L5143-L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5143-L5183)

```diff
-       function Qr(DD) {
-         let {
-           pollingWatchFileWorker: zD,
-           getModifiedTime: wD,
-           setTimeout: pD,
-           clearTimeout: sD,
-           fsWatchWorker: KD,
-           fileSystemEntryExists: rD,
-           useCaseSensitiveFileNames: LD,
-           getCurrentDirectory: cD,
-           fsSupportsRecursiveFsWatch: gD,
-           getAccessibleSortedChildDirectories: RD,
-           realpath: AD,
-           tscWatchFile: UD,
-           useNonPollingWatchers: fD,
-           tscWatchDirectory: ID,
- ... (25 more removed lines; see GitHub link above)
+     function ui(pp, ip) {
+       if (pp.length != ip.length) return !1;
+       for (let cp = 0; cp < pp.length; cp++) {
+         let Op = pp[cp],
+           op = ip[cp];
+         if (Op.from != op.from || Op.to != op.to || Op.direction != op.direction || !ui(Op.inner, op.inner)) return !1
+       }
+       return !0
+     }
+     const ji = [];
```

#### 241. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5185-L5205` → after: `L6765-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6765-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6765-L6789) · [Before (L5185-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5185-L5205)

```diff
-         function PD(DD, zD, pD, sD) {
-           sD = function(DD, zD) {
-             if (DD && void 0 !== DD.watchFile) return DD;
-             switch (UD) {
-               case "PriorityPollingInterval":
-                 return {
-                   watchFile: 1
-                 };
-               case "DynamicPriorityPolling":
-                 return {
-                   watchFile: 2
-                 };
-               case "UseFsEvents":
-                 return TD(4, 1, DD);
-               case "UseFsEventsWithFallbackDynamicPolling":
-                 return TD(4, 2, DD);
- ... (5 more removed lines; see GitHub link above)
+     function ki(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = Op % 2 ? 2 : 1;
+       if (Op % 2 == op % 2)
+         for (let Lp = ip, Yp = 0; Lp < cp;) {
+           let ip = !0,
+             Dp = !1;
+           if (Yp == Ip.length || Lp < Ip[Yp].from) {
+             let pp = ji[Lp];
+             pp != xp && (ip = !1, Dp = 16 == pp)
+           }
+           let Ap = ip || 1 != xp ? null : [],
+             Pp = ip ? Op : Op + 1,
+             Wp = Lp;
+           pp: for (;;)
+             if (Yp < Ip.length && Wp == Ip[Yp].from) {
+               if (Dp) break pp;
+ ... (9 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5208-L5222` → after: `L6808-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6808-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6808-L6826) · [Before (L5208-L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5208-L5222)

```diff
-           }(sD, fD);
-           const KD = np.checkDefined(sD.watchFile);
-           switch (KD) {
-             case 0:
-               return jD(DD, zD, 250, void 0);
-             case 1:
-               return jD(DD, zD, pD, void 0);
-             case 2:
-               return CD()(DD, zD, pD, void 0);
-             case 3:
-               return xD()(DD, zD, void 0, void 0);
-             case 4:
-               return dD(DD, 0, function(DD, zD, wD) {
-                 return (pD, sD, KD) => {
-                   "rename" === pD ? (KD || (KD = wD(DD) || pr), zD(DD, KD !== pr ? 0 : 2, KD)) : zD(DD, 1, KD)
+             let Ap = cp || 1 != xp ? null : [],
+               Pp = cp ? Op : Op + 1,
+               Wp = Lp;
+             pp: for (;;)
+               if (Yp && Wp == Ip[Yp - 1].to) {
+                 if (Dp) break pp;
+                 let yp = Ip[--Yp];
+                 if (!cp)
+                   for (let pp = yp.from, cp = Yp;;) {
+                     if (pp == ip) break pp;
+                     if (!cp || Ip[cp - 1].to != pp) {
+                       if (ji[pp - 1] == xp) break pp;
+                       break
+                     }
+                     pp = Ip[--cp].from
+                   }
+ ... (3 more added lines; see GitHub link above)
```

#### 243. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5224-L5228` → after: `L6828-L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6828-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6828-L6891) · [Before (L5224-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5224-L5228)

```diff
-               }(DD, zD, wD), !1, pD, ev(sD));
-             case 5:
-               return QD || (QD = Ar(dD, LD, wD, GD)), QD(DD, zD, pD, ev(sD));
-             default:
-               np.assertNever(KD)
+                 Wp = yp.from
+               } else {
+                 if (Wp == ip || (cp ? ji[Wp - 1] != xp : ji[Wp - 1] == xp)) break;
+                 Wp--
+               } Ap ? ki(pp, Wp, Lp, Op + 1, op, Ap, Sp) : Wp < Lp && Sp.push(new ei(Wp, Lp, Pp)), Lp = Wp
+           }
+     }
+ 
+     function mi(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = ip % 2 ? 2 : 1;
+       ! function(pp, ip, cp, Op, op) {
+         for (let Ip = 0; Ip <= Op.length; Ip++) {
+           let Sp = Ip ? Op[Ip - 1].to : ip,
+             xp = Ip < Op.length ? Op[Ip].from : cp,
+             Lp = Ip ? 256 : op;
+           for (let ip = Sp, cp = Lp, Op = Lp; ip < xp; ip++) {
+ ... (48 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5231-L5236` → after: `L6894-L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6894-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L6894-L7072) · [Before (L5231-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5231-L5236)

```diff
- 
-         function CD() {
-           return JD || (JD = Rr({
-             getModifiedTime: wD,
-             setTimeout: pD
-           }))
+       }(pp, op, Ip, Op, xp),
+       function(pp, ip, cp, Op) {
+         for (let op = 0, Ip = Op; op <= cp.length; op++) {
+           let Sp = op ? cp[op - 1].to : pp,
+             xp = op < cp.length ? cp[op].from : ip;
+           for (let Lp = Sp; Lp < xp;) {
+             let Sp = ji[Lp];
+             if (256 == Sp) {
+               let Sp = Lp + 1;
+               for (;;)
+                 if (Sp == xp) {
+                   if (op == cp.length) break;
+                   Sp = cp[op++].to, xp = op < cp.length ? cp[op].from : ip
+                 } else {
+                   if (256 != ji[Sp]) break;
+                   Sp++
+ ... (163 more added lines; see GitHub link above)
```

#### 245. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5239-L5247` → after: `L7087-L7106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7087-L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7087-L7106) · [Before (L5239-L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5239-L5247)

```diff
-         function xD() {
-           return ED || (ED = function(DD) {
-             const zD = [];
-             let wD, pD = 0;
-             return function(wD, pD) {
-               const sD = {
-                 fileName: wD,
-                 callback: pD,
-                 mtime: sr(DD, wD)
+     function Lc(pp, ip) {
+       let cp = pp.state.facet(xc);
+       if (!cp.length) return cp;
+       let op = cp.map((ip => ip instanceof Function ? ip(pp) : ip)),
+         Ip = [];
+       return Op.A.spans(op, ip.from, ip.to, {
+         point() {},
+         span(pp, cp, Op, op) {
+           let Sp = pp - ip.from,
+             xp = cp - ip.from,
+             Lp = Ip;
+           for (let Ip = Op.length - 1; Ip >= 0; Ip--, op--) {
+             let pp, cp = Op[Ip].spec.bidiIsolate;
+             if (null == cp && (cp = Ei(ip.text, Sp, xp)), op > 0 && Lp.length && (pp = Lp[Lp.length - 1]).to == Sp && pp.direction == cp) pp.to = xp, Lp = pp.inner;
+             else {
+               let pp = {
+ ... (4 more added lines; see GitHub link above)
```

#### 246. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5249-L5261` → after: `L7108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7108) · [Before (L5249-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5249-L5261)

```diff
-               return zD.push(sD), KD(), {
-                 close: () => {
-                   sD.isClosed = !0, Hw(zD, sD)
-                 }
-               }
-             };
- 
-             function sD() {
-               wD = void 0, pD = gr(DD, zD, pD, Lr[250]), KD()
-             }
- 
-             function KD() {
-               zD.length && !wD && (wD = DD.setTimeout(sD, 2e3, "pollQueue"))
+               Lp.push(pp), Lp = pp.inner
```

#### 247. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5277-L5308` → after: `L7116-L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7116-L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7116-L7147) · [Before (L5277-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5277-L5308)

```diff
-         function bD(DD, zD, wD, pD) {
-           np.assert(!wD);
-           const sD = function(DD) {
-               if (DD && void 0 !== DD.watchDirectory) return DD;
-               switch (ID) {
-                 case "RecursiveDirectoryUsingFsWatchFile":
-                   return {
-                     watchDirectory: 1
-                   };
-                 case "RecursiveDirectoryUsingDynamicPriorityPolling":
-                   return {
-                     watchDirectory: 2
-                   };
-                 default:
-                   const zD = null == DD ? void 0 : DD.fallbackPolling;
-                   return {
- ... (16 more removed lines; see GitHub link above)
+     function Dc(pp) {
+       let ip = 0,
+         cp = 0,
+         Op = 0,
+         op = 0;
+       for (let Ip of pp.state.facet(Yc)) {
+         let Sp = Ip(pp);
+         Sp && (null != Sp.left && (ip = Math.max(ip, Sp.left)), null != Sp.right && (cp = Math.max(cp, Sp.right)), null != Sp.top && (Op = Math.max(Op, Sp.top)), null != Sp.bottom && (op = Math.max(op, Sp.bottom)))
+       }
+       return {
+         left: ip,
+         right: cp,
+         top: Op,
+         bottom: op
+       }
+     }
+ ... (16 more added lines; see GitHub link above)
```

#### 248. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5311-L5339` → after: `L7150-L7173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7150-L7173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7150-L7173) · [Before (L5311-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5311-L5339)

```diff
- 
-         function jD(DD, wD, pD, sD) {
-           return Ur(nD, LD, DD, wD, (wD => zD(DD, wD, pD, sD)))
-         }
- 
-         function dD(DD, zD, pD, sD, cD, gD) {
-           return Ur(sD ? OD : MD, LD, DD, pD, (pD => function(DD, zD, pD, sD, LD, cD) {
-             let gD, RD;
-             BD && (gD = DD.substring(DD.lastIndexOf(Cr)), RD = gD.slice(Cr.length));
-             let AD = rD(DD, zD) ? fD() : MD();
-             return {
-               close: () => {
-                 AD && (AD.close(), AD = void 0)
-               }
-             };
- 
- ... (13 more removed lines; see GitHub link above)
+         return pp.splice(ip, 0, cp), pp
+       }
+       static extendWithRanges(pp, ip) {
+         if (0 == ip.length) return pp;
+         let cp = [];
+         for (let Op = 0, op = 0, Ip = 0;;) {
+           let Sp = Op < pp.length ? pp[Op].fromB : 1e9,
+             xp = op < ip.length ? ip[op] : 1e9,
+             Lp = Math.min(Sp, xp);
+           if (1e9 == Lp) break;
+           let Yp = Lp + Ip,
+             Dp = Lp,
+             Ap = Yp;
+           for (;;)
+             if (op < ip.length && ip[op] <= Dp) {
+               let cp = ip[op + 1];
+ ... (8 more added lines; see GitHub link above)
```

#### 249. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5341-L5370` → after: `L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7175) · [Before (L5341-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5341-L5370)

```diff
-             }
- 
-             function ID(zD, sD) {
-               let KD;
-               if (sD && ow(sD, "~") && (KD = sD, sD = sD.slice(0, sD.length - 1)), "rename" !== zD || sD && sD !== RD && !ow(sD, gD)) KD && pD(zD, KD), pD(zD, sD);
-               else {
-                 const rD = wD(DD) || pr;
-                 KD && pD(zD, KD, rD), pD(zD, sD, rD), BD ? UD(rD === pr ? MD : fD) : rD === pr && UD(MD)
-               }
-             }
- 
-             function nD() {
-               return PD(DD, function(DD) {
-                 return (zD, wD, pD) => DD(1 === wD ? "change" : "rename", "", pD)
-               }(pD), LD, cD)
-             }
- ... (14 more removed lines; see GitHub link above)
+             } cp.push(new Pc(Yp, Ap, Lp, Dp))
```

#### 250. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5373-L5376` → after: `L7179-L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7179-L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7179-L7185) · [Before (L5373-L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5373-L5376)

```diff
- 
-       function Xr(DD) {
-         const zD = DD.writeFile;
-         DD.writeFile = (wD, pD, sD) => HO(wD, pD, !!sD, ((wD, pD, sD) => zD.call(DD, wD, pD, sD)), (zD => DD.createDirectory(zD)), (zD => DD.directoryExists(zD)))
+     }
+     class Wc {
+       constructor(pp, ip, cp) {
+         this.view = pp, this.state = ip, this.transactions = cp, this.flags = 0, this.startState = pp.state, this.changes = Op.ChangeSet.empty(this.startState.doc.length);
+         for (let Op of cp) this.changes = this.changes.compose(Op.changes);
+         let op = [];
+         this.changes.iterChangedRanges(((pp, ip, cp, Op) => op.push(new Pc(pp, ip, cp, Op)))), this.changedRanges = op
```

#### 251. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5378-L5750` → after: `L7187-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7187-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7187-L7188) · [Before (L5378-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5378-L5750)

```diff
-       var Vr = (() => {
-         let DD;
-         return hp() && (DD = function() {
-           const DD = /^native |^\([^)]+\)$|^(?:internal[\\/]|[\w\s]+(?:\.js)?$)/,
-             zD = wD(41315),
-             sD = wD(41321),
-             KD = wD(41327);
-           let rD, LD;
-           try {
-             rD = wD(41332)
-           } catch {
-             rD = void 0
-           }
-           let cD = "./profile.cpuprofile";
-           const gD = "darwin" === process.platform,
-             RD = "linux" === process.platform || gD,
- ... (357 more removed lines; see GitHub link above)
+       static create(pp, ip, cp) {
+         return new Wc(pp, ip, cp)
```

#### 252. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5752-L5790` → after: `L7190-L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7190-L7191) · [Before (L5752-L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5752-L5790)

```diff
-       Vr && Vr.getEnvironmentVariable && (! function(DD) {
-         if (!DD.getEnvironmentVariable) return;
-         const zD = function(DD, zD) {
-           const pD = wD("TSC_WATCH_POLLINGINTERVAL");
-           return !!pD && (sD("Low"), sD("Medium"), sD("High"), !0);
- 
-           function sD(DD) {
-             zD[DD] = pD[DD] || zD[DD]
-           }
-         }(0, wr);
- 
-         function wD(zD) {
-           let wD;
-           return pD("Low"), pD("Medium"), pD("High"), wD;
- 
-           function pD(pD) {
- ... (23 more removed lines; see GitHub link above)
+       get viewportChanged() {
+         return (4 & this.flags) > 0
```

#### 253. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5792-L5794` → after: `L7193-L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7193-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7193-L7194) · [Before (L5792-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5792-L5794)

```diff
- 
-       function dr(DD) {
-         return or(DD) < 0
+       get viewportMoved() {
+         return (8 & this.flags) > 0
```

#### 254. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5796-L5798` → after: `L7196-L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7196-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7196-L7197) · [Before (L5796-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5796-L5798)

```diff
- 
-       function Sr(DD) {
-         return or(DD) > 0
+       get heightChanged() {
+         return (2 & this.flags) > 0
```

#### 255. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5800-L5803` → after: `L7199-L7200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7199-L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7199-L7200) · [Before (L5800-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5800-L5803)

```diff
- 
-       function ir(DD) {
-         const zD = or(DD);
-         return zD > 0 && zD === DD.length
+       get geometryChanged() {
+         return this.docChanged || (18 & this.flags) > 0
```

#### 256. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5805-L5807` → after: `L7202-L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7202-L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7202-L7203) · [Before (L5805-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5805-L5807)

```diff
- 
-       function lr(DD) {
-         return 0 !== or(DD)
+       get focusChanged() {
+         return (1 & this.flags) > 0
```

#### 257. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5809-L5811` → after: `L7205-L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7205-L7206) · [Before (L5809-L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5809-L5811)

```diff
- 
-       function Wr(DD) {
-         return /^\.\.?(?:$|[\\/])/.test(DD)
+       get docChanged() {
+         return !this.changes.empty
```

#### 258. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5813-L5815` → after: `L7208-L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7208-L7209) · [Before (L5813-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5813-L5815)

```diff
- 
-       function Nr(DD) {
-         return !lr(DD) && !Wr(DD)
+       get selectionSet() {
+         return this.transactions.some((pp => pp.selection))
```

#### 259. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5817-L5819` → after: `L7211-L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7211-L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7211-L7212) · [Before (L5817-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5817-L5819)

```diff
- 
-       function Zr(DD) {
-         return vr(DD).includes(".")
+       get empty() {
+         return 0 == this.flags && 0 == this.transactions.length
```

#### 260. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5821-L5823` → after: `L7214-L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7214-L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7214-L7219) · [Before (L5821-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5821-L5823)

```diff
- 
-       function yr(DD, zD) {
-         return DD.length > zD.length && ow(DD, zD)
+     }
+     const yc = [];
+     class Uc {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.dom = pp, this.length = ip, this.flags = cp, this.parent = null, pp.cmTile = this
```

#### 261. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5825-L5828` → after: `L7221-L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7221-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7221-L7227) · [Before (L5825-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5825-L5828)

```diff
- 
-       function kr(DD, zD) {
-         for (const wD of zD)
-           if (yr(DD, wD)) return !0;
+       get breakAfter() {
+         return 1 & this.flags
+       }
+       get children() {
+         return yc
+       }
+       isWidget() {
```

#### 262. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5831-L5833` → after: `L7230-L7231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7230-L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7230-L7231) · [Before (L5831-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5831-L5833)

```diff
- 
-       function mr(DD) {
-         return DD.length > 0 && jr(DD.charCodeAt(DD.length - 1))
+       get isHidden() {
+         return !1
```

#### 263. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5835-L5837` → after: `L7233-L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7233-L7234) · [Before (L5835-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5835-L5837)

```diff
- 
-       function er(DD) {
-         return DD >= 97 && DD <= 122 || DD >= 65 && DD <= 90
+       isComposite() {
+         return !1
```

#### 264. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5839-L5879` → after: `L7236-L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7236-L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7236-L7237) · [Before (L5839-L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5839-L5879)

```diff
- 
-       function or(DD) {
-         if (!DD) return 0;
-         const zD = DD.charCodeAt(0);
-         if (47 === zD || 92 === zD) {
-           if (DD.charCodeAt(1) !== zD) return 1;
-           const wD = DD.indexOf(47 === zD ? Cr : xr, 2);
-           return wD < 0 ? DD.length : wD + 1
-         }
-         if (er(zD) && 58 === DD.charCodeAt(1)) {
-           const zD = DD.charCodeAt(2);
-           if (47 === zD || 92 === zD) return 3;
-           if (2 === DD.length) return 2
-         }
-         const wD = DD.indexOf(Tr);
-         if (-1 !== wD) {
- ... (25 more removed lines; see GitHub link above)
+       isLine() {
+         return !1
```

#### 265. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5881-L5884` → after: `L7239-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7239-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7239-L7240) · [Before (L5881-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5881-L5884)

```diff
- 
-       function ar(DD) {
-         const zD = or(DD);
-         return zD < 0 ? ~zD : zD
+       isText() {
+         return !1
```

#### 266. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5886-L5889` → after: `L7242-L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7242-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7242-L7243) · [Before (L5886-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5886-L5889)

```diff
- 
-       function ur(DD) {
-         const zD = ar(DD = qr(DD));
-         return zD === DD.length ? DD : (DD = gL(DD)).slice(0, Math.max(zD, DD.lastIndexOf(Cr)))
+       isBlock() {
+         return !1
```

#### 267. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5891-L5896` → after: `L7245-L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7245-L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7245-L7246) · [Before (L5891-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5891-L5896)

```diff
- 
-       function vr(DD, zD, wD) {
-         if (ar(DD = qr(DD)) === DD.length) return "";
-         const pD = (DD = gL(DD)).slice(Math.max(ar(DD), DD.lastIndexOf(Cr) + 1)),
-           sD = void 0 !== zD && void 0 !== wD ? Fr(pD, zD, wD) : void 0;
-         return sD ? pD.slice(0, pD.length - sD.length) : pD
+       get domAttrs() {
+         return null
```

#### 268. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5898-L5902` → after: `L7248-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7248-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7248-L7261) · [Before (L5898-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5898-L5902)

```diff
- 
-       function tr(DD, zD, wD) {
-         if (pp(zD, ".") || (zD = "." + zD), DD.length >= zD.length && 46 === DD.charCodeAt(DD.length - zD.length)) {
-           const pD = DD.slice(DD.length - zD.length);
-           if (wD(pD, zD)) return pD
+       sync(pp) {
+         if (this.flags |= 2, 4 & this.flags) {
+           this.flags &= -5;
+           let pp = this.domAttrs;
+           pp && function(pp, ip) {
+             for (let cp = pp.attributes.length - 1; cp >= 0; cp--) {
+               let Op = pp.attributes[cp].name;
+               null == ip[Op] && pp.removeAttribute(Op)
+             }
+             for (let cp in ip) {
+               let Op = ip[cp];
+               "style" == cp ? pp.style.cssText = Op : pp.getAttribute(cp) != Op && pp.setAttribute(cp, Op)
+             }
+           }(this.dom, pp)
```

#### 269. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5905-L5925` → after: `L7264-L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7264-L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7264-L7265) · [Before (L5905-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5905-L5925)

```diff
- 
-       function Fr(DD, zD, wD) {
-         if (zD) return function(DD, zD, wD) {
-           if ("string" === typeof zD) return tr(DD, zD, wD) || "";
-           for (const pD of zD) {
-             const zD = tr(DD, pD, wD);
-             if (zD) return zD
-           }
-           return ""
-         }(gL(DD), zD, wD ? Ew : Qw);
-         const pD = vr(DD),
-           sD = pD.lastIndexOf(".");
-         return sD >= 0 ? pD.substring(sD) : ""
-       }
- 
-       function Yr(DD) {
- ... (5 more removed lines; see GitHub link above)
+       toString() {
+         return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
```

#### 270. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5927-L5930` → after: `L7267-L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7267-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7267-L7268) · [Before (L5927-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5927-L5930)

```diff
- 
-       function Hr(DD, zD) {
-         if (0 === DD.length) return "";
-         return (DD[0] && RL(DD[0])) + DD.slice(1, zD).join(Cr)
+       destroy() {
+         this.parent = null
```

#### 271. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5932-L5934` → after: `L7270-L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7270-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7270-L7271) · [Before (L5932-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5932-L5934)

```diff
- 
-       function qr(DD) {
-         return DD.includes("\\") ? DD.replace(br, Cr) : DD
+       setDOM(pp) {
+         this.dom = pp, pp.cmTile = this
```

#### 272. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5936-L5953` → after: `L7273-L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7273-L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7273-L7274) · [Before (L5936-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5936-L5953)

```diff
- 
-       function DL(DD) {
-         if (!vD(DD)) return [];
-         const zD = [DD[0]];
-         for (let wD = 1; wD < DD.length; wD++) {
-           const pD = DD[wD];
-           if (pD && "." !== pD) {
-             if (".." === pD)
-               if (zD.length > 1) {
-                 if (".." !== zD[zD.length - 1]) {
-                   zD.pop();
-                   continue
-                 }
-               } else if (zD[0]) continue;
-             zD.push(pD)
-           }
- ... (2 more removed lines; see GitHub link above)
+       get posAtStart() {
+         return this.parent ? this.parent.posBefore(this) : 0
```

#### 273. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5955-L5960` → after: `L7276-L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7276-L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7276-L7277) · [Before (L5955-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5955-L5960)

```diff
- 
-       function zL(DD) {
-         DD && (DD = qr(DD));
-         for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
-         for (let sD of wD) sD && (sD = qr(sD), DD = DD && 0 === ar(sD) ? RL(DD) + sD : sD);
-         return DD
+       get posAtEnd() {
+         return this.posAtStart + this.length
```

#### 274. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5962-L5965` → after: `L7279-L7285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7279-L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7279-L7285) · [Before (L5962-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5962-L5965)

```diff
- 
-       function wL(DD) {
-         for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
-         return KL(vD(wD) ? zL(DD, ...wD) : qr(DD))
+       posBefore(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
+         for (let cp of this.children) {
+           if (cp == pp) return ip;
+           ip += cp.length + cp.breakAfter
+         }
+         throw new RangeError("Invalid child in posBefore")
```

#### 275. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5967-L5969` → after: `L7287-L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7287-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7287-L7288) · [Before (L5967-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5967-L5969)

```diff
- 
-       function pL(DD, zD) {
-         return DL(Yr(DD, zD))
+       posAfter(pp) {
+         return this.posBefore(pp) + pp.length
```

#### 276. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5971-L6002` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7290-L7291) · [Before (L5971-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L5971-L6002)

```diff
- 
-       function sL(DD, zD) {
-         let wD = ar(DD);
-         0 === wD && zD ? wD = ar(DD = zL(zD, DD)) : DD = qr(DD);
-         const pD = rL(DD);
-         if (void 0 !== pD) return pD.length > wD ? gL(pD) : pD;
-         const sD = DD.length,
-           KD = DD.substring(0, wD);
-         let rD, LD = wD,
-           cD = LD,
-           gD = LD,
-           RD = 0 !== wD;
-         for (; LD < sD;) {
-           cD = LD;
-           let zD = DD.charCodeAt(LD);
-           for (; 47 === zD && LD + 1 < sD;) LD++, zD = DD.charCodeAt(LD);
- ... (16 more removed lines; see GitHub link above)
+       covers(pp) {
+         return !0
```

#### 277. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6004-L6007` → after: `L7293-L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7293-L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7293-L7294) · [Before (L6004-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6004-L6007)

```diff
- 
-       function KL(DD) {
-         let zD = rL(DD = qr(DD));
-         return void 0 !== zD ? zD : (zD = sL(DD, ""), zD && mr(DD) ? RL(zD) : zD)
+       coordsIn(pp, ip) {
+         return null
```

#### 278. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6009-L6013` → after: `L7296-L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7296-L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7296-L7299) · [Before (L6009-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6009-L6013)

```diff
- 
-       function rL(DD) {
-         if (!IL.test(DD)) return DD;
-         let zD = DD.replace(/\/\.\//g, "/");
-         return zD.startsWith("./") && (zD = zD.slice(2)), zD === DD || (DD = zD, IL.test(DD)) ? void 0 : DD
+       domPosFor(pp, ip) {
+         let cp = gp(this.dom),
+           Op = this.length ? pp > 0 : ip > 0;
+         return new Di(this.parent.dom, cp + (Op ? 1 : 0), 0 == pp || pp == this.length)
```

#### 279. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6015-L6018` → after: `L7301-L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7301-L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7301-L7302) · [Before (L6015-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6015-L6018)

```diff
- 
-       function LL(DD, zD) {
-         return 0 === (wD = pL(DD, zD)).length ? "" : wD.slice(1).join(Cr);
-         var wD
+       markDirty(pp) {
+         this.flags &= -3, pp && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
```

#### 280. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6020-L6022` → after: `L7304-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7304-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7304-L7305) · [Before (L6020-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6020-L6022)

```diff
- 
-       function cL(DD, zD, wD) {
-         return wD(Sr(DD) ? KL(DD) : sL(DD, zD))
+       get overrideDOMText() {
+         return null
```

#### 281. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6024-L6026` → after: `L7307-L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7307-L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7307-L7310) · [Before (L6024-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6024-L6026)

```diff
- 
-       function gL(DD) {
-         return mr(DD) ? DD.substr(0, DD.length - 1) : DD
+       get root() {
+         for (let pp = this; pp; pp = pp.parent)
+           if (pp instanceof tc) return pp;
+         return null
```

#### 282. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6028-L6030` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7312-L7313) · [Before (L6028-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6028-L6030)

```diff
- 
-       function RL(DD) {
-         return mr(DD) ? DD : DD + Cr
+       static get(pp) {
+         return pp.cmTile
```

#### 283. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6032-L6034` → after: `L7315-L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7315-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7315-L7318) · [Before (L6032-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6032-L6034)

```diff
- 
-       function AL(DD) {
-         return lr(DD) || Wr(DD) ? DD : "./" + DD
+     }
+     class wc extends Uc {
+       constructor(pp) {
+         super(pp, 0), this._children = []
```

#### 284. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6036-L6039` → after: `L7320-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7320-L7321) · [Before (L6036-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6036-L6039)

```diff
- 
-       function UL(DD, zD, wD, pD) {
-         const sD = void 0 !== wD && void 0 !== pD ? Fr(DD, wD, pD) : Fr(DD);
-         return sD ? DD.slice(0, DD.length - sD.length) + (pp(zD, ".") ? zD : "." + zD) : DD
+       isComposite() {
+         return !0
```

#### 285. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6041-L6044` → after: `L7323-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7323-L7324) · [Before (L6041-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6041-L6044)

```diff
- 
-       function fL(DD, zD) {
-         const wD = vW(DD);
-         return wD ? DD.slice(0, DD.length - wD.length) + (pp(zD, ".") ? zD : "." + zD) : UL(DD, zD)
+       get children() {
+         return this._children
```

#### 286. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6046-L6066` → after: `L7326-L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7326-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7326-L7327) · [Before (L6046-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6046-L6066)

```diff
-       var IL = /\/\/|(?:^|\/)\.\.?(?:$|\/)/;
- 
-       function BL(DD, zD, wD) {
-         if (DD === zD) return 0;
-         if (void 0 === DD) return -1;
-         if (void 0 === zD) return 1;
-         const pD = DD.substring(0, ar(DD)),
-           sD = zD.substring(0, ar(zD)),
-           KD = Tw(pD, sD);
-         if (0 !== KD) return KD;
-         const rD = DD.substring(pD.length),
-           LD = zD.substring(sD.length);
-         if (!IL.test(rD) && !IL.test(LD)) return wD(rD, LD);
-         const cD = DL(Yr(DD)),
-           gD = DL(Yr(zD)),
-           RD = Math.min(cD.length, gD.length);
- ... (5 more removed lines; see GitHub link above)
+       get lastChild() {
+         return this.children.length ? this.children[this.children.length - 1] : null
```

#### 287. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6068-L6070` → after: `L7329-L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7329-L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7329-L7330) · [Before (L6068-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6068-L6070)

```diff
- 
-       function GL(DD, zD) {
-         return BL(DD, zD, jw)
+       append(pp) {
+         this.children.push(pp), pp.parent = this
```

#### 288. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6072-L6074` → after: `L7332-L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7332-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7332-L7361) · [Before (L6072-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6072-L6074)

```diff
- 
-       function hL(DD, zD) {
-         return BL(DD, zD, Tw)
+       sync(pp) {
+         if (2 & this.flags) return;
+         super.sync(pp);
+         let ip, cp = this.dom,
+           Op = null,
+           op = (null === pp || void 0 === pp ? void 0 : pp.node) == cp ? pp : null,
+           Ip = 0;
+         for (let Sp of this.children) {
+           if (Sp.sync(pp), Ip += Sp.length + Sp.breakAfter, ip = Op ? Op.nextSibling : cp.firstChild, op && ip != Sp.dom && (op.written = !0), Sp.dom.parentNode == cp)
+             for (; ip && ip != Sp.dom;) ip = vc(ip);
+           else cp.insertBefore(Sp.dom, ip);
+           Op = Sp.dom
+         }
+         for (ip = Op ? Op.nextSibling : cp.firstChild, op && ip && (op.written = !0); ip;) ip = vc(ip);
+         this.length = Ip
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 289. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6076-L6078` → after: `L7363-L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7363-L7364) · [Before (L6076-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6076-L6078)

```diff
- 
-       function nL(DD, zD, wD, pD) {
-         return "string" === typeof wD ? (DD = zL(wD, DD), zD = zL(wD, zD)) : "boolean" === typeof wD && (pD = wD), BL(DD, zD, dw(pD))
+       isBlock() {
+         return !0
```

#### 290. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6080-L6089` → after: `L7366-L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7366-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7366-L7371) · [Before (L6080-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6080-L6089)

```diff
- 
-       function ML(DD, zD, wD, pD) {
-         if ("string" === typeof wD ? (DD = zL(wD, DD), zD = zL(wD, zD)) : "boolean" === typeof wD && (pD = wD), void 0 === DD || void 0 === zD) return !1;
-         if (DD === zD) return !0;
-         const sD = DL(Yr(DD)),
-           KD = DL(Yr(zD));
-         if (KD.length < sD.length) return !1;
-         const rD = pD ? Ew : Qw;
-         for (let LD = 0; LD < sD.length; LD++) {
-           if (!(0 === LD ? Ew : rD)(sD[LD], KD[LD])) return !1
+       nearest(pp) {
+         for (;;) {
+           if (!pp) return null;
+           let ip = Uc.get(pp);
+           if (ip && this.owns(ip)) return ip;
+           pp = pp.parentNode
```

#### 291. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6093-L6097` → after: `L7374-L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7374-L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7374-L7388) · [Before (L6093-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6093-L6097)

```diff
- 
-       function OL(DD, zD, wD) {
-         const pD = wD(DD),
-           sD = wD(zD);
-         return pp(pD, sD + "/") || pp(pD, sD + "\\")
+       blockTiles(pp) {
+         for (let ip = [], cp = this, Op = 0, op = 0;;)
+           if (Op == cp.children.length) {
+             if (!ip.length) return;
+             cp = cp.parent, cp.breakAfter && op++, Op = ip.pop()
+           } else {
+             let Ip = cp.children[Op++];
+             if (Ip instanceof Hc) ip.push(Op), cp = Ip, Op = 0;
+             else {
+               let ip = op + Ip.length,
+                 cp = pp(Ip, op);
+               if (void 0 !== cp) return cp;
+               op = ip + Ip.breakAfter
+             }
+           }
```

#### 292. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6099-L6105` → after: `L7390-L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7390-L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7390-L7407) · [Before (L6099-L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6099-L6105)

```diff
- 
-       function JL(DD, zD, wD, pD) {
-         const sD = DL(Yr(DD)),
-           KD = DL(Yr(zD));
-         let rD;
-         for (rD = 0; rD < sD.length && rD < KD.length; rD++) {
-           if (!(0 === rD ? Ew : wD)(pD(sD[rD]), pD(KD[rD]))) break
+       resolveBlock(pp, ip) {
+         let cp, Op, op = -1,
+           Ip = -1;
+         if (this.blockTiles(((Sp, xp) => {
+             let Lp = xp + Sp.length;
+             if (pp >= xp && pp <= Lp) {
+               if (Sp.isWidget() && ip >= -1 && ip <= 1) {
+                 if (32 & Sp.flags) return !0;
+                 16 & Sp.flags && (cp = void 0)
+               }(xp < pp || pp == Lp && (ip < -1 ? Sp.length : Sp.covers(1))) && (!cp || !Sp.isWidget() && cp.isWidget()) && (cp = Sp, op = pp - xp), (Lp > pp || pp == xp && (ip > 1 ? Sp.length : Sp.covers(-1))) && (!Op || !Sp.isWidget() && Op.isWidget()) && (Op = Sp, Ip = pp - xp … [truncated]
+             }
+           })), !cp && !Op) throw new Error("No tile at position " + pp);
+         return cp && ip < 0 || !Op ? {
+           tile: cp,
+           offset: op
+         } : {
+ ... (2 more added lines; see GitHub link above)
```

#### 293. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6113-L6116` → after: `L7410-L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7410-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7410-L7413) · [Before (L6113-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6113-L6116)

```diff
- 
-       function EL(DD, zD, wD) {
-         np.assert(ar(DD) > 0 === ar(zD) > 0, "Paths must either both be absolute or both be relative");
-         return Hr(JL(DD, zD, "boolean" === typeof wD && wD ? Ew : Qw, "function" === typeof wD ? wD : fw))
+     }
+     class Hc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.wrapper = ip
```

#### 294. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6118-L6120` → after: `L7415-L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7415-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7415-L7416) · [Before (L6118-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6118-L6120)

```diff
- 
-       function QL(DD, zD, wD) {
-         return Sr(DD) ? VL(zD, DD, zD, wD, !1) : DD
+       isBlock() {
+         return !0
```

#### 295. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6122-L6124` → after: `L7418-L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7418-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7418-L7419) · [Before (L6122-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6122-L6124)

```diff
- 
-       function XL(DD, zD, wD) {
-         return AL(EL(ur(DD), zD, wD))
+       covers(pp) {
+         return !!this.children.length && (pp < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
```

#### 296. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6126-L6134` → after: `L7421-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7421-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7421-L7422) · [Before (L6126-L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6126-L6134)

```diff
- 
-       function VL(DD, zD, wD, pD, sD) {
-         const KD = JL(wL(wD, DD), wL(wD, zD), Qw, pD),
-           rD = KD[0];
-         if (sD && Sr(rD)) {
-           const DD = rD.charAt(0) === Cr ? "file://" : "file:///";
-           KD[0] = DD + rD
-         }
-         return Hr(KD)
+       get domAttrs() {
+         return this.wrapper.attributes
```

#### 297. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6136-L6144` → after: `L7424-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7424-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7424-L7426) · [Before (L6136-L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6136-L6144)

```diff
- 
-       function PL(DD, zD) {
-         for (;;) {
-           const wD = zD(DD);
-           if (void 0 !== wD) return wD;
-           const pD = ur(DD);
-           if (pD === DD) return;
-           DD = pD
-         }
+       static of (pp, ip) {
+         let cp = new Hc(ip || document.createElement(pp.tagName), pp);
+         return ip || (cp.flags |= 4), cp
```

#### 298. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6146-L6148` → after: `L7428-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7428-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7428-L7431) · [Before (L6146-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6146-L6148)

```diff
- 
-       function CL(DD) {
-         return ow(DD, "/node_modules")
+     }
+     class dc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.attrs = ip
```

#### 299. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6150-L6160` → after: `L7433-L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7433-L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7433-L7434) · [Before (L6150-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6150-L6160)

```diff
- 
-       function xL(DD, zD, wD, pD, sD, KD, rD) {
-         return {
-           code: DD,
-           category: zD,
-           key: wD,
-           message: pD,
-           reportsUnnecessary: sD,
-           elidedInCompatabilityPyramid: KD,
-           reportsDeprecated: rD
-         }
+       isLine() {
+         return !0
```

#### 300. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6162-L8287` → after: `L7436-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7436-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7436-L7438) · [Before (L6162-L8287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L6162-L8287)

```diff
-       var TL = {
-         Unterminated_string_literal: xL(1002, 1, "Unterminated_string_literal_1002", "Unterminated string literal."),
-         Identifier_expected: xL(1003, 1, "Identifier_expected_1003", "Identifier expected."),
-         _0_expected: xL(1005, 1, "_0_expected_1005", "'{0}' expected."),
-         A_file_cannot_have_a_reference_to_itself: xL(1006, 1, "A_file_cannot_have_a_reference_to_itself_1006", "A file cannot have a reference to itself."),
-         The_parser_expected_to_find_a_1_to_match_the_0_token_here: xL(1007, 1, "The_parser_expected_to_find_a_1_to_match_the_0_token_here_1007", "The parser expected to find a '{1}' to match the '{0}' token here."),
-         Trailing_comma_not_allowed: xL(1009, 1, "Trailing_comma_not_allowed_1009", "Trailing comma not allowed."),
-         Asterisk_Slash_expected: xL(1010, 1, "Asterisk_Slash_expected_1010", "'*/' expected."),
-         An_element_access_expression_should_take_an_argument: xL(1011, 1, "An_element_access_expression_should_take_an_argument_1011", "An element access expression should take an argument."),
-         Unexpected_token: xL(1012, 1, "Unexpected_token_1012", "Unexpected token."),
-         A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: xL(1013, 1, "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma_1013", "A rest parameter or binding pattern may not have a trailing comma."),
-         A_rest_parameter_must_be_last_in_a_parameter_list: xL(1014, 1, "A_rest_parameter_must_be_last_in_a_parameter_list_1014", "A rest parameter must be last in a parameter list."),
-         Parameter_cannot_have_question_mark_and_initializer: xL(1015, 1, "Parameter_cannot_have_question_mark_and_initializer_1015", "Parameter cannot have question mark and initializer."),
-         A_required_parameter_cannot_follow_an_optional_parameter: xL(1016, 1, "A_required_parameter_cannot_follow_an_optional_parameter_1016", "A required parameter cannot follow an optional parameter."),
-         An_index_signature_cannot_have_a_rest_parameter: xL(1017, 1, "An_index_signature_cannot_have_a_rest_parameter_1017", "An index signature cannot have a rest parameter."),
-         An_index_signature_parameter_cannot_have_an_accessibility_modifier: xL(1018, 1, "An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018", "An index signature parameter cannot have an accessibility modifier."),
- ... (2110 more removed lines; see GitHub link above)
+       static start(pp, ip, cp) {
+         let Op = new dc(ip || document.createElement("div"), pp);
+         return ip && cp || (Op.flags |= 4), Op
```

#### 301. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8289-L8475` → after: `L7440-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7440-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7440-L7483) · [Before (L8289-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8289-L8475)

```diff
- 
-       function jL(DD) {
-         return 32 === DD || bL(DD)
-       }
-       var dL = {
-           abstract: 128,
-           accessor: 129,
-           any: 133,
-           as: 130,
-           asserts: 131,
-           assert: 132,
-           bigint: 163,
-           boolean: 136,
-           break: 83,
-           case: 84,
-           catch: 85,
- ... (171 more removed lines; see GitHub link above)
+       get domAttrs() {
+         return this.attrs
+       }
+       resolveInline(pp, ip, cp) {
+         let Op = null,
+           op = -1,
+           Ip = null,
+           Sp = -1;
+         ! function pp(xp, Lp) {
+           for (let Yp = 0, Dp = 0; Yp < xp.children.length && Dp <= Lp; Yp++) {
+             let Ap = xp.children[Yp],
+               Pp = Dp + Ap.length;
+             Pp >= Lp && (Ap.isComposite() ? pp(Ap, Lp - Dp) : (!Ip || Ip.isHidden && (ip > 0 || cp && ec(Ip, Ap))) && (Pp > Lp || 32 & Ap.flags) ? (Ip = Ap, Sp = Lp - Dp) : (Dp < Lp || 16 & Ap.flags && !Ap.isHidden) && (Op = Ap, op = Lp - Dp)), Dp = Pp
+           }
+         }(this, pp);
+         let xp = (ip < 0 ? Op : Ip) || Op || Ip;
+ ... (28 more added lines; see GitHub link above)
```

#### 302. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8477` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7485) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8477)

```diff
-         return !1
+         return new Di(this.dom, 0)
```

#### 303. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8480-L8481` → after: `L7489-L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7489-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7489-L7496) · [Before (L8480-L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8480-L8481)

```diff
-       function uL(DD, zD) {
-         return aL(DD, zD >= 2 ? yL : NL)
+     function ec(pp, ip) {
+       let cp = pp.coordsIn(0, 1),
+         Op = ip.coordsIn(0, 1);
+       return cp && Op && Op.top < cp.bottom
+     }
+     class uc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.mark = ip
```

#### 304. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8483-L8488` → after: `L7498-L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7498-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7498-L7499) · [Before (L8483-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8483-L8488)

```diff
- 
-       function vL(DD) {
-         const zD = [];
-         return DD.forEach(((DD, wD) => {
-           zD[DD] = wD
-         })), zD
+       get domAttrs() {
+         return this.mark.attrs
```

#### 305. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8490-L8493` → after: `L7501-L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7501-L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7501-L7503) · [Before (L8490-L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8490-L8493)

```diff
-       var tL = vL(iL);
- 
-       function FL(DD) {
-         return tL[DD]
+       static of (pp, ip) {
+         let cp = new uc(ip || document.createElement(pp.tagName), pp);
+         return ip || (cp.flags |= 4), cp
```

#### 306. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8495-L8497` → after: `L7505-L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7505-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7505-L7508) · [Before (L8495-L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8495-L8497)

```diff
- 
-       function YL(DD) {
-         return iL.get(DD)
+     }
+     class jc extends Uc {
+       constructor(pp, ip) {
+         super(pp, ip.length), this.text = ip
```

#### 307. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8499-L8502` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7510-L7511) · [Before (L8499-L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8499-L8502)

```diff
-       var HL = vL(lL);
- 
-       function qL(DD) {
-         return HL[DD]
+       sync(pp) {
+         2 & this.flags || (super.sync(pp), this.dom.nodeValue != this.text && (pp && pp.node == this.dom && (pp.written = !0), this.dom.nodeValue = this.text))
```

#### 308. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8504-L8506` → after: `L7513-L7514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7513-L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7513-L7514) · [Before (L8504-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8504-L8506)

```diff
- 
-       function Dc(DD) {
-         return lL.get(DD)
+       isText() {
+         return !0
```

#### 309. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8508-L8511` → after: `L7516-L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7516-L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7516-L7523) · [Before (L8508-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8508-L8511)

```diff
- 
-       function zc(DD) {
-         const zD = [];
-         let wD = 0,
+       toString() {
+         return JSON.stringify(this.text)
+       }
+       coordsIn(pp, ip) {
+         let cp = this.dom.nodeValue.length;
+         pp > cp && (pp = cp);
+         let Op = pp,
+           op = pp,
```

#### 310. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8513-L8525` → after: `L7525-L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7525-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7525-L7541) · [Before (L8513-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8513-L8525)

```diff
-         for (; wD < DD.length;) {
-           const sD = DD.charCodeAt(wD);
-           switch (wD++, sD) {
-             case 13:
-               10 === DD.charCodeAt(wD) && wD++;
-             case 10:
-               zD.push(pD), pD = wD;
-               break;
-             default:
-               sD > 127 && Ac(sD) && (zD.push(pD), pD = wD)
-           }
-         }
-         return zD.push(pD), zD
+         0 == pp && ip < 0 || pp == cp && ip >= 0 ? kp.chrome || kp.gecko || (pp ? (Op--, Ip = 1) : op < cp && (op++, Ip = -1)) : ip < 0 ? Op-- : op < cp && op++;
+         let Sp = Ii(this.dom, Op, op).getClientRects();
+         if (!Sp.length) return null;
+         let xp = Sp[(Ip ? Ip < 0 : ip >= 0) ? 0 : Sp.length - 1];
+         return kp.safari && !Ip && 0 == xp.width && (xp = Array.prototype.find.call(Sp, (pp => pp.width)) || xp), Ip ? zp(xp, Ip < 0) : xp || null
+       }
+       static of (pp, ip) {
+         let cp = new jc(ip || document.createTextNode(pp), pp);
+         return ip || (cp.flags |= 2), cp
+       }
+     }
+     class kc extends Uc {
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, Op), this.widget = cp
+       }
+       isWidget() {
+ ... (1 more added lines; see GitHub link above)
```

#### 311. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8527-L8529` → after: `L7543-L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7543-L7544) · [Before (L8527-L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8527-L8529)

```diff
- 
-       function wc(DD, zD, wD, pD) {
-         return DD.getPositionOfLineAndCharacter ? DD.getPositionOfLineAndCharacter(zD, wD, pD) : pc(sc(DD), zD, wD, DD.text, pD)
+       get isHidden() {
+         return this.widget.isHidden
```

#### 312. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8531-L8535` → after: `L7546-L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7546-L7547) · [Before (L8531-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8531-L8535)

```diff
- 
-       function pc(DD, zD, wD, pD, sD) {
-         (zD < 0 || zD >= DD.length) && (sD ? zD = zD < 0 ? 0 : zD >= DD.length ? DD.length - 1 : zD : np.fail(`Bad line number. Line: ${zD}, lineStarts.length: ${DD.length} , line map is correct? ${void 0!==pD?sz(DD,zc(pD)):"unknown"}`));
-         const KD = DD[zD] + wD;
-         return sD ? KD > DD[zD + 1] ? DD[zD + 1] : "string" === typeof pD && KD > pD.length ? pD.length : KD : (zD < DD.length - 1 ? np.assert(KD < DD[zD + 1]) : void 0 !== pD && np.assert(KD <= pD.length), KD)
+       covers(pp) {
+         return !(48 & this.flags) && (this.flags & (pp < 0 ? 64 : 128)) > 0
```

#### 313. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8537-L8539` → after: `L7549-L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7549-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7549-L7550) · [Before (L8537-L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8537-L8539)

```diff
- 
-       function sc(DD) {
-         return DD.lineMap || (DD.lineMap = zc(DD.text))
+       coordsIn(pp, ip) {
+         return this.coordsInWidget(pp, ip, !1)
```

#### 314. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8541-L8546` → after: `L7552-L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7552-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7552-L7562) · [Before (L8541-L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8541-L8546)

```diff
- 
-       function Kc(DD, zD) {
-         const wD = rc(DD, zD);
-         return {
-           line: wD,
-           character: zD - DD[wD]
+       coordsInWidget(pp, ip, cp) {
+         let Op = this.widget.coordsAt(this.dom, pp, ip);
+         if (Op) return Op;
+         if (cp) return zp(this.dom.getBoundingClientRect(), this.length ? 0 == pp : ip <= 0);
+         {
+           let ip = this.dom.getClientRects(),
+             cp = null;
+           if (!ip.length) return null;
+           let Op = !!(16 & this.flags) || !(32 & this.flags) && pp > 0;
+           for (let op = Op ? ip.length - 1 : 0; cp = ip[op], !(pp > 0 ? 0 == op : op == ip.length - 1 || cp.top < cp.bottom); op += Op ? -1 : 1);
+           return zp(cp, !Op)
```

#### 315. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8549-L8552` → after: `L7565-L7572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7565-L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7565-L7572) · [Before (L8549-L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8549-L8552)

```diff
- 
-       function rc(DD, zD, wD) {
-         let pD = Cz(DD, zD, fw, Vw, wD);
-         return pD < 0 && (pD = ~pD - 1, np.assert(-1 !== pD, "position cannot precede the beginning of the file")), pD
+       get overrideDOMText() {
+         if (!this.length) return Op.F.empty;
+         let {
+           root: pp
+         } = this;
+         if (!pp) return Op.F.empty;
+         let ip = this.posAtStart;
+         return pp.view.state.doc.slice(ip, ip + this.length)
```

#### 316. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8554-L8563` → after: `L7574-L7575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7574-L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7574-L7575) · [Before (L8554-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8554-L8563)

```diff
- 
-       function Lc(DD, zD, wD) {
-         if (zD === wD) return 0;
-         const pD = sc(DD),
-           sD = Math.min(zD, wD),
-           KD = sD === wD,
-           rD = KD ? zD : wD,
-           LD = rc(pD, sD),
-           cD = rc(pD, rD, LD);
-         return KD ? LD - cD : cD - LD
+       destroy() {
+         super.destroy(), this.widget.destroy(this.dom)
```

#### 317. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8565-L8567` → after: `L7577-L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7577-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7577-L7578) · [Before (L8565-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8565-L8567)

```diff
- 
-       function cc(DD, zD) {
-         return Kc(sc(DD), zD)
+       static of (pp, ip, cp, Op, op) {
+         return op || (op = pp.toDOM(ip), pp.editable || (op.contentEditable = "false")), new kc(op, cp, pp, Op)
```

#### 318. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8569-L8571` → after: `L7580-L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7580-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7580-L7584) · [Before (L8569-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8569-L8571)

```diff
- 
-       function gc(DD) {
-         return Rc(DD) || Ac(DD)
+     }
+     class mc extends Uc {
+       constructor(pp) {
+         let ip = document.createElement("img");
+         ip.className = "cm-widgetBuffer", ip.setAttribute("aria-hidden", "true"), super(ip, 0, pp)
```

#### 319. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8573-L8575` → after: `L7586-L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7586-L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7586-L7587) · [Before (L8573-L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8573-L8575)

```diff
- 
-       function Rc(DD) {
-         return 32 === DD || 9 === DD || 11 === DD || 12 === DD || 160 === DD || 133 === DD || 5760 === DD || DD >= 8192 && DD <= 8203 || 8239 === DD || 8287 === DD || 12288 === DD || 65279 === DD
+       get isHidden() {
+         return !0
```

#### 320. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8577-L8579` → after: `L7589-L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7589-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7589-L7590) · [Before (L8577-L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8577-L8579)

```diff
- 
-       function Ac(DD) {
-         return 10 === DD || 13 === DD || 8232 === DD || 8233 === DD
+       get overrideDOMText() {
+         return Op.F.empty
```

#### 321. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8581-L8583` → after: `L7592-L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7592-L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7592-L7593) · [Before (L8581-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8581-L8583)

```diff
- 
-       function Uc(DD) {
-         return DD >= 48 && DD <= 57
+       coordsIn(pp) {
+         return this.dom.getBoundingClientRect()
```

#### 322. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8585-L8587` → after: `L7595-L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7595-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7595-L7598) · [Before (L8585-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8585-L8587)

```diff
- 
-       function fc(DD) {
-         return Uc(DD) || DD >= 65 && DD <= 70 || DD >= 97 && DD <= 102
+     }
+     class Rc {
+       constructor(pp) {
+         this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = pp
```

#### 323. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8589-L8591` → after: `L7600-L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7600-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7600-L7636) · [Before (L8589-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8589-L8591)

```diff
- 
-       function Ic(DD) {
-         return DD >= 65 && DD <= 90 || DD >= 97 && DD <= 122
+       advance(pp, ip, cp) {
+         let {
+           tile: Op,
+           index: op,
+           beforeBreak: Ip,
+           parents: Sp
+         } = this;
+         for (; pp || ip > 0;)
+           if (Op.isComposite())
+             if (Ip) {
+               if (!pp) break;
+               cp && cp.break(), pp--, Ip = !1
+             } else if (op == Op.children.length) {
+           if (!pp && !Sp.length) break;
+           cp && cp.leave(Op), Ip = !!Op.breakAfter, ({
+             tile: Op,
+ ... (21 more added lines; see GitHub link above)
```

#### 324. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8593-L8595` → after: `L7638-L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7638-L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7638-L7639) · [Before (L8593-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8593-L8595)

```diff
- 
-       function Bc(DD) {
-         return Ic(DD) || Uc(DD) || 95 === DD
+       get root() {
+         return this.parents.length ? this.parents[0].tile : this.tile
```

#### 325. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8597-L8599` → after: `L7641-L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7641-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7641-L7644) · [Before (L8597-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8597-L8599)

```diff
- 
-       function Gc(DD) {
-         return DD >= 48 && DD <= 55
+     }
+     class qc {
+       constructor(pp, ip, cp, Op) {
+         this.from = pp, this.to = ip, this.wrapper = cp, this.rank = Op
```

#### 326. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8601-L8621` → after: `L7646-L7649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7646-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7646-L7649) · [Before (L8601-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8601-L8621)

```diff
- 
-       function hc(DD, zD) {
-         const wD = DD.charCodeAt(zD);
-         switch (wD) {
-           case 13:
-           case 10:
-           case 9:
-           case 11:
-           case 12:
-           case 32:
-           case 47:
-           case 60:
-           case 124:
-           case 61:
-           case 62:
-             return !0;
- ... (5 more removed lines; see GitHub link above)
+     }
+     class Mc {
+       constructor(pp, ip, cp) {
+         this.cache = pp, this.root = ip, this.blockWrappers = cp, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
```

#### 327. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8623-L8686` → after: `L7651-L7675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7651-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7651-L7675) · [Before (L8623-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8623-L8686)

```diff
- 
-       function nc(DD, zD, wD, pD, sD) {
-         if (sP(zD)) return zD;
-         let KD = !1;
-         for (;;) {
-           const rD = DD.charCodeAt(zD);
-           switch (rD) {
-             case 13:
-               10 === DD.charCodeAt(zD + 1) && zD++;
-             case 10:
-               if (zD++, wD) return zD;
-               KD = !!sD;
-               continue;
-             case 9:
-             case 11:
-             case 12:
- ... (48 more removed lines; see GitHub link above)
+       addText(pp, ip, cp, Op) {
+         var op;
+         this.flushBuffer();
+         let Ip = this.ensureMarks(ip, cp),
+           Sp = Ip.lastChild;
+         if (Sp && Sp.isText() && !(8 & Sp.flags) && Sp.length + pp.length < 512) {
+           this.cache.reused.set(Sp, 2), (Ip.children[Ip.children.length - 1] = new jc(Sp.dom, Sp.text + pp)).parent = Ip
+         } else Ip.append(Op || jc.of(pp, null === (op = this.cache.find(jc)) || void 0 === op ? void 0 : op.dom));
+         this.pos += pp.length, this.afterWidget = null
+       }
+       addComposition(pp, ip) {
+         let cp = this.curLine;
+         cp.dom != ip.line.dom && (cp.setDOM(this.cache.reused.has(ip.line) ? Bc(ip.line.dom) : ip.line.dom), this.cache.reused.set(ip.line, 2));
+         let Op = cp;
+         for (let Sp = ip.marks.length - 1; Sp >= 0; Sp--) {
+           let pp = ip.marks[Sp],
+ ... (9 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8688` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7677) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8688)

```diff
-           return zD
+           this.cache.reused.set(pp, 2)
```

#### 329. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8691-L8702` → after: `L7684-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7684-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7684-L7688) · [Before (L8691-L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8691-L8702)

```diff
-       var Mc = 7;
- 
-       function Oc(DD, zD) {
-         if (np.assert(zD >= 0), 0 === zD || Ac(DD.charCodeAt(zD - 1))) {
-           const wD = DD.charCodeAt(zD);
-           if (zD + Mc < DD.length) {
-             for (let pD = 0; pD < Mc; pD++)
-               if (DD.charCodeAt(zD + pD) !== wD) return !1;
-             return 61 === wD || 32 === DD.charCodeAt(zD + Mc)
-           }
-         }
-         return !1
+       addInlineWidget(pp, ip, cp) {
+         let Op = this.afterWidget && 48 & pp.flags && (48 & this.afterWidget.flags) == (48 & pp.flags);
+         Op || this.flushBuffer();
+         let op = this.ensureMarks(ip, cp);
+         Op || 16 & pp.flags || op.append(this.getBuffer(1)), op.append(pp), this.pos += pp.length, this.afterWidget = pp
```

#### 330. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8704-L8717` → after: `L7690-L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7690-L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7690-L7691) · [Before (L8704-L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8704-L8717)

```diff
- 
-       function Jc(DD, zD, wD) {
-         wD && wD(TL.Merge_conflict_marker_encountered, zD, Mc);
-         const pD = DD.charCodeAt(zD),
-           sD = DD.length;
-         if (60 === pD || 62 === pD)
-           for (; zD < sD && !Ac(DD.charCodeAt(zD));) zD++;
-         else
-           for (np.assert(124 === pD || 61 === pD); zD < sD;) {
-             const wD = DD.charCodeAt(zD);
-             if ((61 === wD || 62 === wD) && wD !== pD && Oc(DD, zD)) break;
-             zD++
-           }
-         return zD
+       addMark(pp, ip, cp) {
+         this.flushBuffer(), this.ensureMarks(ip, cp).append(pp), this.pos += pp.length, this.afterWidget = null
```

#### 331. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8719-L8722` → after: `L7693-L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7693-L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7693-L7694) · [Before (L8719-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8719-L8722)

```diff
-       var Ec = /^#!.*/;
- 
-       function Qc(DD, zD) {
-         return np.assert(0 === zD), Ec.test(DD)
+       addBlockWidget(pp) {
+         this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
```

#### 332. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8724-L8726` → after: `L7696-L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7696-L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7696-L7697) · [Before (L8724-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8724-L8726)

```diff
- 
-       function Xc(DD, zD) {
-         return zD += Ec.exec(DD)[0].length
+       continueWidget(pp) {
+         (this.afterWidget || this.lastBlock).length += pp, this.pos += pp
```

#### 333. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8728-L8736` → after: `L7699-L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7699-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7699-L7726) · [Before (L8728-L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8728-L8736)

```diff
- 
-       function Vc(DD, zD, wD, pD, sD, KD, rD) {
-         let LD, cD, gD, RD, AD = !1,
-           UD = pD,
-           fD = rD;
-         if (0 === wD) {
-           UD = !0;
-           const DD = Sc(zD);
-           DD && (wD = DD.length)
+       addLineStart(pp, ip) {
+         var cp;
+         pp || (pp = Jc);
+         let Op = dc.start(pp, ip || (null === (cp = this.cache.find(dc)) || void 0 === cp ? void 0 : cp.dom), !!ip);
+         this.getBlockPos().append(this.lastBlock = this.curLine = Op)
+       }
+       addLine(pp) {
+         this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
+       }
+       addBreak() {
+         this.lastBlock.flags |= 1, this.endLine(), this.pos++
+       }
+       addLineStartIfNotCovered(pp) {
+         this.blockPosCovered() || this.addLineStart(pp)
+       }
+       ensureLine(pp) {
+ ... (12 more added lines; see GitHub link above)
```

#### 334. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8738-L8786` → after: `L7728-L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7728-L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7728-L7757) · [Before (L8738-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8738-L8786)

```diff
-         DD: for (; wD >= 0 && wD < zD.length;) {
-           const rD = zD.charCodeAt(wD);
-           switch (rD) {
-             case 13:
-               10 === zD.charCodeAt(wD + 1) && wD++;
-             case 10:
-               if (wD++, pD) break DD;
-               UD = !0, AD && (RD = !0);
-               continue;
-             case 9:
-             case 11:
-             case 12:
-             case 32:
-               wD++;
-               continue;
-             case 47:
- ... (33 more removed lines; see GitHub link above)
+         return Op
+       }
+       endLine() {
+         if (this.curLine) {
+           this.flushBuffer();
+           let pp = this.curLine.lastChild;
+           pp && Qc(this.curLine, !1) && ("BR" == pp.dom.nodeName || !pp.isWidget() || kp.ios && Qc(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Tc, 0, 32) || new kc(Tc.toDOM(), 0, Tc, 32)), this.curLine = this.afterWidget = null
+         }
+       }
+       updateBlockWrappers() {
+         this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
+         for (let pp = this.wrappers.length - 1; pp >= 0; pp--) this.wrappers[pp].to < this.pos && this.wrappers.splice(pp, 1);
+         for (let pp = this.blockWrappers; pp.value && pp.from <= this.pos; pp.next())
+           if (pp.to >= this.pos) {
+             let ip = new qc(pp.from, pp.to, pp.value, pp.rank),
+               cp = this.wrappers.length;
+ ... (14 more added lines; see GitHub link above)
```

#### 335. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8789` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7760) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8789)

```diff
-         return AD && (fD = sD(LD, cD, gD, RD, KD, fD)), fD
+         return ip
```

#### 336. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8791-L8793` → after: `L7762-L7764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7762-L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7762-L7764) · [Before (L8791-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8791-L8793)

```diff
- 
-       function Pc(DD, zD, wD, pD) {
-         return Vc(!1, DD, zD, !1, wD, pD)
+       blockPosCovered() {
+         let pp = this.lastBlock;
+         return null != pp && !pp.breakAfter && (!pp.isWidget() || (160 & pp.flags) > 0)
```

#### 337. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8795-L8797` → after: `L7766-L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7766-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7766-L7769) · [Before (L8795-L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8795-L8797)

```diff
- 
-       function Cc(DD, zD, wD, pD) {
-         return Vc(!1, DD, zD, !0, wD, pD)
+       getBuffer(pp) {
+         let ip = 2 | (pp < 0 ? 16 : 32),
+           cp = this.cache.find(mc, void 0, 1);
+         return cp && (cp.flags = ip), cp || new mc(ip)
```

#### 338. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8799-L8801` → after: `L7771-L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7771-L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7771-L7772) · [Before (L8799-L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8799-L8801)

```diff
- 
-       function xc(DD, zD, wD, pD, sD) {
-         return Vc(!0, DD, zD, !1, wD, pD, sD)
+       flushBuffer() {
+         !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
```

#### 339. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8803-L8805` → after: `L7774-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7774-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7774-L7777) · [Before (L8803-L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8803-L8805)

```diff
- 
-       function Tc(DD, zD, wD, pD, sD) {
-         return Vc(!0, DD, zD, !0, wD, pD, sD)
+     }
+     class Cc {
+       constructor(pp) {
+         this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = pp.iter()
```

#### 340. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8807-L8815` → after: `L7779-L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7779-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7779-L7780) · [Before (L8807-L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8807-L8815)

```diff
- 
-       function bc(DD, zD, wD, pD, sD) {
-         let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
-         return KD.push({
-           kind: wD,
-           pos: DD,
-           end: zD,
-           hasTrailingNewLine: pD
-         }), KD
+       skip(pp) {
+         this.textOff + pp <= this.text.length ? this.textOff += pp : (this.skipCount += pp - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
```

#### 341. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8817-L8819` → after: `L7782-L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7782-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7782-L7820) · [Before (L8817-L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8817-L8819)

```diff
- 
-       function jc(DD, zD) {
-         return xc(DD, zD, bc, void 0, void 0)
+       next(pp) {
+         if (this.textOff == this.text.length) {
+           let {
+             value: ip,
+             lineBreak: cp,
+             done: Op
+           } = this.cursor.next(this.skipCount);
+           if (this.skipCount = 0, Op) throw new Error("Ran out of text content when drawing inline views");
+           this.text = ip;
+           let op = this.textOff = Math.min(pp, ip.length);
+           return cp ? null : ip.slice(0, op)
+         }
+         let ip = Math.min(this.text.length, this.textOff + pp),
+           cp = this.text.slice(this.textOff, ip);
+         return this.textOff = ip, cp
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 342. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8821-L8823` → after: `L7822-L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7822-L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7822-L7832) · [Before (L8821-L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8821-L8823)

```diff
- 
-       function dc(DD, zD) {
-         return Tc(DD, zD, bc, void 0, void 0)
+       findWidget(pp, ip, cp) {
+         let Op = this.buckets[0];
+         if (Op.length)
+           for (let op = 0, Ip = 0;; op++) {
+             if (op == Op.length) {
+               if (Ip) return null;
+               Ip = 1, op = 0
+             }
+             let Sp = Op[op];
+             if (!this.reused.has(Sp) && (0 == Ip ? Sp.widget.compare(pp) : Sp.widget.constructor == pp.constructor && pp.updateDOM(Sp.dom, this.view, Sp.widget))) return Op.splice(op, 1), op < this.index[0] && this.index[0]--, Sp.widget == pp && Sp.length == ip && (497 & Sp.flags … [truncated]
+           }
```

#### 343. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8825-L8828` → after: `L7834-L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7834-L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7834-L7835) · [Before (L8825-L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8825-L8828)

```diff
- 
-       function Sc(DD) {
-         const zD = Ec.exec(DD);
-         if (zD) return zD[0]
+       reuse(pp) {
+         return this.reused.set(pp, 1), pp
```

#### 344. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8830-L8832` → after: `L7837-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7837-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7837-L7839) · [Before (L8830-L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8830-L8832)

```diff
- 
-       function ic(DD, zD) {
-         return Ic(DD) || 36 === DD || 95 === DD || DD > 127 && uL(DD, zD)
+       maybeReuse(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+         if (!this.reused.has(pp)) return this.reused.set(pp, ip), pp.dom
```

#### 345. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8834-L8838` → after: `L7841-L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7841-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7841-L7842) · [Before (L8834-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8834-L8838)

```diff
- 
-       function lc(DD, zD, wD) {
-         return Bc(DD) || 36 === DD || 1 === wD && (45 === DD || 58 === DD) || DD > 127 && function(DD, zD) {
-           return aL(DD, zD >= 2 ? kL : ZL)
-         }(DD, zD)
+       clear() {
+         for (let pp = 0; pp < this.buckets.length; pp++) this.buckets[pp].length = this.index[pp] = 0
```

#### 346. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8840-L8846` → after: `L7844-L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7844-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7844-L7854) · [Before (L8840-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8840-L8846)

```diff
- 
-       function Wc(DD, zD, wD) {
-         let pD = Zc(DD, 0);
-         if (!ic(pD, zD)) return !1;
-         for (let sD = yc(pD); sD < DD.length; sD += yc(pD))
-           if (!lc(pD = Zc(DD, sD), zD, wD)) return !1;
-         return !0
+     }
+     class lc {
+       constructor(pp, ip, cp, op, Ip) {
+         this.view = pp, this.uO = op, this.disallowBlockEffectsFor = Ip, this.openWidget = !1, this.openMarks = 0, this.cache = new Xc(pp), this.text = new Cc(pp.state.doc), this.builder = new Mc(this.cache, new tc(pp, pp.contentDOM), Op.A.iter(cp)), this.cache.reused.set(ip, 2), … [truncated]
+           skip: (pp, ip, cp) => {
+             if (this.cache.add(pp), pp.isComposite()) return !1
+           },
+           enter: pp => this.cache.add(pp),
+           leave: () => {},
+           break: () => {}
+         }
```

#### 347. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8848-L8882` → after: `L7856-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7856-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7856-L7875) · [Before (L8848-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8848-L8882)

```diff
- 
-       function Nc(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           pD = arguments.length > 4 ? arguments[4] : void 0,
-           sD = arguments.length > 5 ? arguments[5] : void 0;
-         var KD, rD, LD, cD, gD, RD, AD, fD, ID = arguments.length > 3 ? arguments[3] : void 0,
-           BD = 0,
-           GD = 0,
-           hD = 0;
-         HD(ID, sD, arguments.length > 6 ? arguments[6] : void 0);
-         var nD = {
-           getTokenFullStart: () => LD,
-           getStartPos: () => LD,
-           getTokenEnd: () => KD,
-           getTextPos: () => KD,
-           getToken: () => gD,
- ... (19 more removed lines; see GitHub link above)
+       run(pp, ip) {
+         let cp = ip && this.getCompositionContext(ip.text);
+         for (let Op = 0, op = 0, Ip = 0;;) {
+           let Sp = Ip < pp.length ? pp[Ip++] : null,
+             xp = Sp ? Sp.fromA : this.old.root.length;
+           if (xp > Op) {
+             let pp = xp - Op;
+             this.preserve(pp, !Ip, !Sp), Op = xp, op += pp
+           }
+           if (!Sp) break;
+           ip && Sp.fromA <= ip.range.fromA && Sp.toA >= ip.range.toA ? (this.forward(Sp.fromA, ip.range.fromA, ip.range.fromA < ip.range.toA ? 1 : -1), this.emit(op, ip.range.fromB), this.cache.clear(), this.builder.addComposition(ip, cp), this.text.skip(ip.range.toB - ip.range.f … [truncated]
+         }
+         return this.builder.curLine && this.builder.endLine(), this.builder.root
+       }
+       preserve(pp, ip, cp) {
+         let Op = function(pp) {
+ ... (4 more added lines; see GitHub link above)
```

#### 348. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8886-L8887` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L7897-L7898) · [Before (L8886-L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L8886-L8887)

```diff
-           reScanAsteriskEqualsToken: function() {
-             return np.assert(67 === gD, "'reScanAsteriskEqualsToken' should only be called on a '*='"), KD = cD + 1, gD = 64
+           enter: pp => {
+             pp.isLine() ? this.builder.addLineStart(pp.attrs, this.cache.maybeReuse(pp)) : (this.cache.add(pp), pp instanceof uc && Op.unshift(pp.mark)), this.openWidget = !1
```
