# Changed — Bundle Modifications Report (Part 008 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `8 / 65` (**309** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 21. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L344-L345` → after: `L616-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L616-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L616-L626) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L344-L345)

```diff
-     function MD(DD, zD) {
-       return DD / zD + "px"
+     function Qp(pp, ip, cp, Op, op) {
+       Array.isArray(ip) || (ip = [ip]);
+       let Ip = ip => {
+           var cp;
+           return null != (cp = pp.isDirected() ? pp.successors(ip) : pp.neighbors(ip)) ? cp : []
+         },
+         Sp = {};
+       return ip.forEach((function(ip) {
+         if (!pp.hasNode(ip)) throw new Error("Graph does not have node: " + ip);
+         op = Jp(pp, ip, "post" === cp, Sp, Ip, Op, op)
+       })), op
```

#### 22. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L348-L354` → after: `L629-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L629-L632) · [Before (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L348-L354)

```diff
-     function OD(DD, zD, wD, pD) {
-       return {
-         ...QD(DD, zD, wD),
-         width: MD(DD.w, wD),
-         height: MD(DD.h, wD),
-         background: pD
-       }
+     function Jp(pp, ip, cp, Op, op, Ip, Sp) {
+       return ip in Op || (Op[ip] = !0, cp || (Sp = Ip(Sp, ip)), op(ip).forEach((function(ip) {
+         Sp = Jp(pp, ip, cp, Op, op, Ip, Sp)
+       })), cp && (Sp = Ip(Sp, ip))), Sp
```

#### 23. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L358-L366` → after: `L636-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L636-L638) · [Before (L358-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L358-L366)

```diff
-       return {
-         left: MD(DD.x, zD),
-         top: MD(DD.y, zD),
-         width: MD(DD.size, zD),
-         height: MD(DD.size, zD),
-         borderWidth: MD(DD.border, zD),
-         borderColor: wD,
-         background: DD.filled ? wD : void 0
-       }
+       return Qp(pp, ip, cp, (function(pp, ip) {
+         return pp.push(ip), pp
+       }), [])
```

#### 24. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L375-L380` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L641-L642) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L375-L380)

```diff
-     function QD(DD, zD, wD) {
-       const [pD, sD] = DD.arm ? ED[DD.arm] : [0, 0], KD = Math.round(zD * wD);
-       return {
-         left: MD(DD.x + pD * KD, wD),
-         top: MD(DD.y + sD * KD, wD)
-       }
+     function Np(pp, ip) {
+       return Bp(pp, ip, "post")
```

#### 25. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L383-L388` → after: `L645-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L645-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L645-L646) · [Before (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L383-L388)

```diff
-     function XD(DD) {
-       return DD.arm ? {
-         "data-arm": DD.arm,
-         "data-x": DD.x,
-         "data-y": DD.y
-       } : {}
+     function Tp(pp, ip) {
+       return Bp(pp, ip, "pre")
```

#### 26. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L391-L445` → after: `L649-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L649-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L649-L697) · [Before (L391-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L391-L445)

```diff
-     function VD(DD) {
-       let {
-         settings: zD,
-         inPreview: wD,
-         inEditor: pD,
-         pressed: LD = !1,
-         spread: gD,
-         spreadRef: RD
-       } = DD;
-       const AD = (0, KD.useRef)(null),
-         {
-           box: ID,
-           dpr: BD
-         } = function(DD) {
-           const [zD, wD] = (0, KD.useState)({
-             box: {
- ... (39 more removed lines; see GitHub link above)
+     function fp(pp, ip) {
+       var cp;
+       let Op, op = new Lp,
+         Ip = {},
+         Sp = new ep;
+ 
+       function xp(pp) {
+         let cp = pp.v === Op ? pp.w : pp.v,
+           op = Sp.priority(cp);
+         if (void 0 !== op) {
+           let xp = ip(pp);
+           xp < op && (Ip[cp] = Op, Sp.decrease(cp, xp))
+         }
+       }
+       if (0 === pp.nodeCount()) return op;
+       pp.nodes().forEach((function(pp) {
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L447-L500` → after: `L699-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L699-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L699-L704) · [Before (L447-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L447-L500)

```diff
-         }(ID, hD.cell, BD),
-         MD = (0, rD.k)(zD.color),
-         ED = (0, rD.k)(zD.outlineColor),
-         VD = (0, KD.useRef)(0);
-       (0, KD.useLayoutEffect)((() => {
-         if (RD) return RD.current = DD => {
-           var zD;
-           VD.current = DD, null === (zD = AD.current) || void 0 === zD || zD.querySelectorAll("[data-arm]").forEach((zD => {
-             Object.assign(zD.style, QD(function(DD) {
-               return {
-                 x: Number(DD.dataset.x),
-                 y: Number(DD.dataset.y),
-                 arm: DD.dataset.arm
-               }
-             }(zD), DD, GD.current))
-           }))
- ... (38 more removed lines; see GitHub link above)
+           if (op) return Hp(pp, ip, cp, Op)
+         }
+         return kp(pp, ip, cp, Op)
+       }(pp, ip, cp, null != Op ? Op : ip => {
+         var cp;
+         return null != (cp = pp.outEdges(ip)) ? cp : []
```

#### 28. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L503-L517` → after: `L707-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L707-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L707-L713) · [Before (L503-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L503-L517)

```diff
-   },
-   34193: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => RD,
-       d: () => GD,
-       h: () => BD
-     });
-     var pD = wD(34181);
-     const sD = "XH1-",
-       KD = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       rD = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       LD = ["color", "outlineColor"],
-       cD = 1 + 3 * LD.length + rD.length + 1,
-       gD = Math.ceil(8 * cD / Math.log2(62)),
-       RD = sD.length + gD;
+     var hp = Lp;
+ 
+     function ap(pp, ip, cp, Op) {
+       let op = Op;
+       for (; pp.hasNode(op);) op = ii(Op);
+       return cp.dummy = ip, pp.setNode(op, cp), op
+     }
```

#### 29. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L520-L522` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L716-L723) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L520-L522)

```diff
-       let zD = 90;
-       for (const wD of DD) zD = 31 * zD + wD & 255;
-       return zD
+       let ip = new hp({
+         multigraph: pp.isMultigraph()
+       }).setGraph(pp.graph());
+       return pp.nodes().forEach((cp => {
+         pp.children(cp).length || ip.setNode(cp, pp.node(cp))
+       })), pp.edges().forEach((cp => {
+         ip.setEdge(cp, pp.edge(cp))
+       })), ip
```

#### 30. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L528-L532` → after: `L727-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L727-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L727-L736) · [Before (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L528-L532)

```diff
-       let wD = 0n;
-       for (const sD of DD) {
-         const DD = UD.indexOf(sD);
-         if (DD < 0) return null;
-         wD = wD * fD + BigInt(DD)
+       let cp, Op, op = pp.x,
+         Ip = pp.y,
+         Sp = ip.x - op,
+         xp = ip.y - Ip,
+         Lp = pp.width / 2,
+         Yp = pp.height / 2;
+       if (!Sp && !xp) throw new Error("Not possible to find intersection inside of the rectangle");
+       return Math.abs(xp) * Lp > Math.abs(Sp) * Yp ? (xp < 0 && (Yp = -Yp), cp = Yp * Sp / xp, Op = Yp) : (Sp < 0 && (Lp = -Lp), cp = Lp, Op = Lp * xp / Sp), {
+         x: op + cp,
+         y: Ip + Op
```

#### 31. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L541-L563` → after: `L741-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L741-L746) · [Before (L541-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L541-L563)

```diff
-       let zD = "shapes" === DD.style ? 1 : 0;
-       KD.forEach(((wD, pD) => {
-         DD[wD] && (zD |= 1 << pD + 1)
-       }));
-       const wD = [zD];
-       for (const sD of LD) {
-         const zD = (0, pD.h)(sD, DD[sD]);
-         wD.push(zD >> 16 & 255, zD >> 8 & 255, 255 & zD)
-       }
-       for (const sD of rD) {
-         const {
-           min: zD,
-           step: KD
-         } = pD.b[sD];
-         wD.push(Math.round(((0, pD.h)(sD, DD[sD]) - zD) / KD))
-       }
- ... (7 more removed lines; see GitHub link above)
+       let ip = ci(zp(pp) + 1).map((() => []));
+       return pp.nodes().forEach((cp => {
+         let Op = pp.node(cp),
+           op = Op.rank;
+         void 0 !== op && (ip[op] || (ip[op] = []), ip[op][Op.order] = cp)
+       })), ip
```

#### 32. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L566-L569` → after: `L749-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L749-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L749-L769) · [Before (L566-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L566-L569)

```diff
-     function GD(DD) {
-       for (const zD of DD.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${gD}})`, "gi"))) {
-         const DD = hD(ID(zD[1], cD));
-         if (DD) return DD
+     function Gp(pp, ip, cp, Op) {
+       let op = {
+         width: 0,
+         height: 0
+       };
+       return arguments.length >= 4 && (op.rank = cp, op.order = Op), ap(pp, "border", op, ip)
+     }
+     var rp = 65535;
+ 
+     function Zp(pp, ip) {
+       if (ip.length > rp) {
+         let cp = function(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rp,
+             cp = [];
+           for (let Op = 0; Op < pp.length; Op += ip) {
+             let op = pp.slice(Op, Op + ip);
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L571` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L771) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L571)

```diff
-       return null
+       return pp(...ip)
```

#### 34. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L575-L582` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L775-L777) · [Before (L575-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L575-L582)

```diff
-       if (!DD || DD.length !== cD || AD(DD.slice(0, -1)) !== DD[DD.length - 1]) return null;
-       const zD = DD[0],
-         wD = {
-           ...pD.e,
-           style: 1 & zD ? "shapes" : "classic"
-         };
-       KD.forEach(((DD, pD) => {
-         wD[DD] = 0 !== (zD & 1 << pD + 1)
+       let ip = pp.nodes().map((ip => {
+         let cp = pp.node(ip).rank;
+         return void 0 === cp ? Number.MIN_VALUE : cp
```

#### 35. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L584-L593` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L779) · [Before (L584-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L584-L593)

```diff
-       let sD = 1;
-       for (const pD of LD) wD[pD] = DD[sD] << 16 | DD[sD + 1] << 8 | DD[sD + 2], sD += 3;
-       for (const KD of rD) {
-         const {
-           min: zD,
-           step: rD
-         } = pD.b[KD];
-         wD[KD] = (0, pD.h)(KD, zD + DD[sD] * rD), sD++
-       }
-       return wD
+       return Zp(Math.max, ip)
```

#### 36. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L686-L702` → after: `L783-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L783-L787) · [Before (L686-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L686-L702)

```diff
-       var wD;
-       const {
-         min: KD,
-         max: rD,
-         step: LD
-       } = pD[DD];
-       if (!Number.isFinite(zD)) return sD[DD];
-       const cD = (null !== (wD = String(LD).split(".")[1]) && void 0 !== wD ? wD : "").length,
-         gD = Number((Math.round(zD / LD) * LD).toFixed(cD));
-       return Math.min(rD, Math.max(KD, gD))
-     }
- 
-     function rD(DD, zD, wD) {
-       const pD = "number" === typeof wD ? KD(zD, wD) : wD;
-       return {
-         ...DD,
- ... (1 more removed lines; see GitHub link above)
+       let cp = Date.now();
+       try {
+         return ip()
+       } finally {
+         console.log(pp + " time: " + (Date.now() - cp) + "ms")
```

#### 37. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L707-L708` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L792) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L707-L708)

```diff
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(sD).every((pD => wD.includes(pD) || DD[pD] === zD[pD]))
+       return ip()
```

#### 38. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L712` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L797) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L712)

```diff
-       return LD(DD, sD)
+       return pp + "" + ++Vp
```

#### 39. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L715-L716` → after: `L800-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L800-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L800-L807) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L715-L716)

```diff
-     function gD(DD) {
-       return `#${DD.toString(16).padStart(6,"0")}`
+     function ci(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       null == ip && (ip = pp, pp = 0);
+       let Op = pp => pp < ip;
+       cp < 0 && (Op = pp => ip < pp);
+       let op = [];
+       for (let Ip = pp; Op(Ip); Ip += cp) op.push(Ip);
+       return op
```

#### 40. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L719-L742` → after: `L810-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L810-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L810-L812) · [Before (L719-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L719-L742)

```diff
-     function RD(DD) {
-       const zD = /^#?([0-9a-f]{6})$/i.exec(DD.trim());
-       return zD ? parseInt(zD[1], 16) : null
-     }
-   },
-   34197: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => AD,
-       g: () => UD
-     });
-     var pD = wD(58),
-       sD = wD(35),
-       KD = wD(34193),
-       rD = wD(34181);
-     const LD = "crosshairCode";
-     let cD = null;
- ... (8 more removed lines; see GitHub link above)
+     function Oi(pp, ip) {
+       let cp = {};
+       for (let Op of ip) void 0 !== pp[Op] && (cp[Op] = pp[Op]);
```

#### 41. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L746-L748` → after: `L816-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L816-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L816-L821) · [Before (L746-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L746-L748)

```diff
-     function AD(DD) {
-       cD = DD, (0, rD.m)(DD) ? sD.h.removeItem(LD) : sD.h.setItem(LD, (0, KD.h)(DD));
-       for (const zD of gD) zD()
+     function oi(pp, ip) {
+       let cp;
+       return cp = "string" == typeof ip ? pp => pp[ip] : ip, Object.entries(pp).reduce(((pp, ip) => {
+         let [Op, op] = ip;
+         return pp[Op] = cp(op, Op), pp
+       }), {})
```

#### 42. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L751-L774` → after: `L825-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L825-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L825-L842) · [Before (L751-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L751-L774)

```diff
-     function UD() {
-       const [DD, zD] = (0, pD.useState)(RD);
-       return (0, pD.useEffect)((() => {
-         const DD = () => {
-           zD(RD())
-         };
-         return DD(), wD = DD, gD.add(wD), () => {
-           gD.delete(wD)
-         };
-         var wD
-       }), []), DD
-     }
-   },
-   36726: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => KD,
- ... (8 more removed lines; see GitHub link above)
+     function Si(pp, ip, cp) {
+       var Op, op, Ip, Sp, xp, Lp;
+       if (!(pp && ip && cp && "edge" === ip.dummy && "edge" === cp.dummy && ip.edgeObj && cp.edgeObj && pp[ip.edgeObj.v] && pp[cp.edgeObj.v] && pp[ip.edgeObj.w] && pp[cp.edgeObj.w])) return 0;
+       let Yp = !0;
+       ip.edgeObj.w === cp.edgeObj.w && (Yp = !1);
+       let Dp = Yp ? null != (op = null == (Op = pp[ip.edgeObj.v]) ? void 0 : Op.rank) ? op : NaN : null != (Sp = null == (Ip = pp[ip.edgeObj.w]) ? void 0 : Ip.rank) ? Sp : NaN,
+         Ap = Object.entries(pp).find((pp => {
+           var cp, Op;
+           return (null == (cp = pp[1].edgeObj) ? void 0 : cp.v) === ip.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === ip.edgeObj.w && pp[1].rank === Dp
+         })),
+         Pp = Object.entries(pp).find((pp => {
+           var ip, Op;
+           return (null == (ip = pp[1].edgeObj) ? void 0 : ip.v) === cp.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === cp.edgeObj.w && pp[1].rank === Dp
+         }));
+       if (!Ap || !Pp) return 0;
+       let Wp = null != (xp = Ap[1].order) ? xp : NaN,
+ ... (2 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L778` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L847) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L778)

```diff
-       return !(0, pD.B)(DD) && KD(DD) === (0, sD.e)().vW
+       pp._prev._next = pp._next, pp._next._prev = pp._prev, delete pp._next, delete pp._prev
```

#### 44. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L782-L783` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L850-L851) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L782-L783)

```diff
-     function cD() {
-       return (0, sD.e)().physics[LD][1]
+     function Yi(pp, ip) {
+       if ("_next" !== pp && "_prev" !== pp) return ip
```

#### 45. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L785-L901` → after: `L853-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L853-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L853-L927) · [Before (L785-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L785-L901)

```diff
-   },
-   36711: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => QD
-     });
-     var pD = wD(36719),
-       sD = wD(197),
-       KD = wD(4875),
-       rD = wD(36723),
-       LD = wD(36432),
-       cD = wD(36751),
-       gD = wD(36726),
-       RD = wD(358),
-       AD = wD.n(RD),
-       UD = wD(1211),
-       fD = wD(2769),
- ... (101 more removed lines; see GitHub link above)
+     var Di = class {
+         constructor() {
+           op(this, "_sentinel");
+           let pp = {};
+           pp._next = pp._prev = pp, this._sentinel = pp
+         }
+         dequeue() {
+           let pp = this._sentinel,
+             ip = pp._prev;
+           if (ip !== pp) return Li(ip), ip
+         }
+         enqueue(pp) {
+           let ip = this._sentinel;
+           pp._prev && pp._next && Li(pp), pp._next = ip._next, ip._next._prev = pp, ip._next = pp, pp._prev = ip
+         }
+         toString() {
+ ... (59 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L904-L908` → after: `L1192-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1192-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1192-L1501) · [Before (L904-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L904-L908)

```diff
-       liveHowl() {
-         return this._unloaded ? null : this._howl
-       }
-       loaded() {
-         return "loaded" === this._howl.state()
+     };
+     var Ni = vi;
+ 
+     function Ti(pp) {
+       mi(pp)
+     }
+     var fi = function(pp) {
+       let ip = function(pp) {
+           let ip = {},
+             cp = 0;
+ 
+           function Op(op) {
+             let Ip = cp;
+             pp.children(op).forEach(Op), ip[op] = {
+               low: Ip,
+               lim: cp++
+ ... (294 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L910-L912` → after: `L1503-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1503-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1503-L1568) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L910-L912)

```diff
-       unloadOnceIdle() {
-         (0, rD.c)(this._howl, (() => {
-           this._unloaded = !0
+       Up = cc(Pp, Ap, Up), Dp.forEach((pp => {
+         Up += pp.vs.length, Pp.push(pp.vs), Wp += pp.barycenter * pp.weight, yp += pp.weight, Up = cc(Pp, Ap, Up)
+       }));
+       let wp = {
+         vs: Pp.flat(1)
+       };
+       return yp && (wp.barycenter = Wp / yp, wp.weight = yp), wp
+     }
+ 
+     function cc(pp, ip, cp) {
+       let Op;
+       for (; ip.length && (Op = ip[ip.length - 1]).i <= cp;) ip.pop(), pp.push(Op.vs), cp++;
+       return cp
+     }
+ 
+     function Oc(pp, ip, cp, Op, op) {
+ ... (50 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L915-L916` → after: `L1598-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1598-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1598-L1658) · [Before (L915-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L915-L916)

```diff
-       setGlobalVolume(DD) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", DD), this._howl.volume(DD)
+       return Object.defineProperty(Mp, "result", {
+         value: Mp,
+         enumerable: !1,
+         configurable: !0,
+         writable: !0
+       }), Object.defineProperty(Mp, "usedBias", {
+         value: qp,
+         enumerable: !1,
+         configurable: !0,
+         writable: !0
+       }), Mp
+     }
+ 
+     function oc(pp, ip, cp, Op) {
+       Op || (Op = pp.nodes());
+       let op = function(pp) {
+ ... (45 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L918-L943` → after: `L1660-L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1660-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1660-L1666) · [Before (L918-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L918-L943)

```diff
-       _setPannerAttr(DD) {
-         let {
-           id: zD,
-           coneInnerAngle: wD = 360,
-           coneOuterAngle: pD = 360,
-           coneOuterGain: sD = 0,
-           distanceModel: KD = "inverse",
-           maxDistance: rD = 1e3,
-           panningModel: LD = "HRTF",
-           refDistance: cD = ID.g,
-           rolloffFactor: gD = 1
-         } = DD;
-         const RD = this.liveHowl();
-         if (null === RD) return;
-         RD.pannerAttr({
-           coneOuterAngle: pD
- ... (10 more removed lines; see GitHub link above)
+       Lc(pp, xp)
+     }
+ 
+     function Sc(pp, ip, cp) {
+       let Op = new Map,
+         op = (pp, ip) => {
+           Op.has(pp) || Op.set(pp, []), Op.get(pp).push(ip)
```

#### 50. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L945` → after: `L1668-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1668-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1668-L1671) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L945)

```diff
-         RD.pannerAttr(AD, zD)
+       for (let Ip of pp.nodes()) {
+         let ip = pp.node(Ip);
+         if ("number" == typeof ip.rank && op(ip.rank, Ip), "number" == typeof ip.minRank && "number" == typeof ip.maxRank)
+           for (let pp = ip.minRank; pp <= ip.maxRank; pp++) pp !== ip.rank && op(pp, Ip)
```

#### 51. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L948-L953` → after: `L1677-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1677-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1677-L1709) · [Before (L948-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L948-L953)

```diff
-     const QD = new class {
-       constructor() {
-         this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new hD.d, BD.l.subscribe("appManagerUpdated|soundVolume", (DD => {
-           const zD = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
-           for (const wD of zD) wD.setGlobalVolume(DD)
-         }))
+ 
+     function xc(pp, ip, cp, Op) {
+       let op = !0,
+         Ip = new hp;
+       pp.forEach((function(pp) {
+         cp.forEach((pp => Ip.setEdge(pp.left, pp.right)));
+         let Sp = pp.graph().root,
+           {
+             result: xp,
+             usedBias: Lp
+           } = Oc(pp, Sp, Ip, Op, op);
+         ip && Lp && (op = !op), xp.vs.forEach(((ip, cp) => pp.node(ip).order = cp)),
+           function(pp, ip, cp) {
+             let Op, op = {};
+             cp.forEach((cp => {
+               let Ip, Sp, xp = pp.parent(cp);
+ ... (17 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L955-L993` → after: `L1711-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1711-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1711-L1764) · [Before (L955-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L955-L993)

```diff
-       play(DD, zD) {
-         var wD;
-         let KD, rD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (wD = (0, fD.e)()) || void 0 === wD ? void 0 : wD.vW,
-           LD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ID.f,
-           cD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ID.g,
-           RD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         var UD;
-         (0, fD.e)() ? KD = !!Array.isArray(rD) || (0, gD.b)(rD) !== (null === (UD = (0, fD.e)()) || void 0 === UD ? void 0 : UD.vW): KD = !1;
-         const BD = (0, pD.l)(DD),
-           GD = this.loadSheet(KD ? this.spatialSheets : this.stereoSheets, BD);
-         if (!KD) {
-           const wD = GD.play(DD, RD);
-           return wD.setRelativeVolume(zD), wD
-         }
-         const nD = (0, fD.e)(),
-           MD = Array.isArray(rD) ? rD : nD.yJ.PJ(rD),
- ... (23 more removed lines; see GitHub link above)
+       let Op = pp[ip];
+       Op || (pp[ip] = Op = {}), Op[cp] = !0
+     }
+ 
+     function Dc(pp, ip, cp) {
+       if (ip > cp) {
+         let pp = ip;
+         ip = cp, cp = pp
+       }
+       let Op = pp[ip];
+       return void 0 !== Op && Object.hasOwn(Op, cp)
+     }
+ 
+     function Ac(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Ip = {},
+ ... (38 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L995` → after: `L1766-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1766-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1766-L1781) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L995)

```diff
-             })) return JD
+             }))
+           })), op
+         }(pp, ip, cp, op),
+         xp = op ? "borderLeft" : "borderRight";
+ 
+       function Lp(pp, ip) {
+         let cp = Sp.nodes().slice(),
+           Op = {},
+           op = cp.pop();
+         for (; op;) {
+           if (Op[op]) pp(op);
+           else {
+             Op[op] = !0, cp.push(op);
+             for (let pp of ip(op)) cp.push(pp)
+           }
+           op = cp.pop()
```

#### 54. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1004` → after: `L1784-L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1784-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1784-L1807) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1004)

```diff
-       loadSheet(DD, zD) {
+       return Lp((function(pp) {
+         let ip = Sp.inEdges(pp);
+         Ip[pp] = ip ? ip.reduce(((pp, ip) => {
+           var cp;
+           let Op = null != (cp = Ip[ip.v]) ? cp : 0,
+             op = Sp.edge(ip);
+           return Math.max(pp, Op + (void 0 !== op ? op : 0))
+         }), 0) : 0
+       }), (function(pp) {
+         return Sp.predecessors(pp) || []
+       })), Lp((function(ip) {
+         let cp = Sp.outEdges(ip),
+           Op = Number.POSITIVE_INFINITY;
+         cp && (Op = cp.reduce(((pp, ip) => {
+           let cp = Ip[ip.w],
+             Op = Sp.edge(ip);
+ ... (8 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1006-L1010` → after: `L1809-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1809-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L1809-L2014) · [Before (L1006-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1006-L1010)

```diff
-         return wD || ((0, MD.c)(zD), wD = new ED({
-           src: zD,
-           isSoundSprite: !0,
-           volumeScalar: 1
-         }), wD.setGlobalVolume(GD.e.get("soundVolume")), DD[zD] = wD), wD
+         void 0 !== Op && (Ip[pp] = null != (ip = Ip[Op]) ? ip : 0)
+       })), Ip
+     }
+ 
+     function Pc(pp, ip) {
+       let cp, Op = gp(pp),
+         op = Object.assign(function(pp, ip) {
+           let cp = {};
+           return ip.length && ip.reduce((function(ip, Op) {
+             let op = 0,
+               Ip = 0,
+               Sp = ip.length,
+               xp = Op[Op.length - 1];
+             return Op.forEach(((ip, Lp) => {
+               let Yp = function(pp, ip) {
+                   if (pp.node(ip).dummy) {
+ ... (190 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1012-L1014` → after: `L2016-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2016-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2016-L2493) · [Before (L1012-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1012-L1014)

```diff
-       freeSheetsAfterGame() {
-         for (const DD of [this.stereoSheets, this.spatialSheets])
-           for (const [zD, wD] of Object.entries(DD)) !nD.e.has(zD) && wD.loaded() && (wD.unloadOnceIdle(), delete DD[zD])
+     }
+ 
+     function tc(pp, ip, cp) {
+       var Op;
+       let op = pp.nodes().filter((ip => pp.children(ip).length)),
+         Ip = {};
+       op.forEach((Op => {
+         let op = pp.node(Op);
+         if (op && op.rankdir) {
+           let Sp = new hp({
+             multigraph: !0,
+             compound: !0
+           });
+           Sp.setGraph({
+             rankdir: op.rankdir
+           });
+ ... (462 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1017-L1018` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2496) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1017-L1018)

```diff
-   },
-   36804: (DD, zD, wD) => {
+ 
```

#### 58. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1020-L1029` → after: `L2498-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2498-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2498-L2506) · [Before (L1020-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1020-L1029)

```diff
-       var wD, pD, sD, KD, rD, LD, cD, gD;
-       return DD.name === zD.name && ((null === (wD = DD.attributes) || void 0 === wD || null === (pD = wD.customAttributes) || void 0 === pD ? void 0 : pD.stackKey) === (null === (sD = zD.attributes) || void 0 === sD || null === (KD = sD.customAttributes) || void 0 === KD ? void  … [truncated]
-     }
-     wD.d(zD, {
-       d: () => pD
-     })
-   },
-   36897: (DD, zD, wD) => {
-     function pD(DD) {
-       return DD.includes("Leaf Bed")
+       pp.nodes().forEach((cp => {
+         let Op = pp.node(cp),
+           op = ip.node(cp);
+         Op && (Op.x = op.x, Op.y = op.y, Op.order = op.order, Op.rank = op.rank, ip.children(cp).length && (Op.width = op.width, Op.height = op.height))
+       })), pp.edges().forEach((cp => {
+         let Op = pp.edge(cp),
+           op = ip.edge(cp);
+         Op.points = op.points, Object.hasOwn(op, "x") && (Op.x = op.x, Op.y = op.y)
+       })), pp.graph().width = ip.graph().width, pp.graph().height = ip.graph().height
```

#### 59. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1033` → after: `L2534-L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2534-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2534-L2553) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1033)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(DD) && !pD(DD)
+       let ip = new hp({
+           multigraph: !0,
+           compound: !0
+         }),
+         cp = Xc(pp.graph());
+       return ip.setGraph(Object.assign({}, uc, Ec(cp, ec), Oi(cp, jc))), pp.nodes().forEach((cp => {
+         let Op = Ec(Xc(pp.node(cp)), kc);
+         Object.keys(mc).forEach((pp => {
+           void 0 === Op[pp] && (Op[pp] = mc[pp])
+         })), ip.setNode(cp, Op);
+         let op = pp.parent(cp);
+         void 0 !== op && ip.setParent(cp, op)
+       })), pp.edges().forEach((cp => {
+         let Op = Xc(pp.edge(cp));
+         ip.setEdge(cp, Object.assign({}, qc, Ec(Op, Rc), Oi(Op, Mc)))
+       })), ip
+ ... (4 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1037` → after: `L2557-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2557-L2561) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1037)

```diff
-       return DD.includes(" Strongbed")
+       let ip = {};
+       return pp && Object.entries(pp).forEach((pp => {
+         let [cp, Op] = pp;
+         "string" == typeof cp && (cp = cp.toLowerCase()), ip[cp] = Op
+       })), ip
```

#### 61. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1041-L1103` → after: `L2565-L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2565-L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L2565-L2597) · [Before (L1041-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L1041-L1103)

```diff
-       return pD(DD) || sD(DD) || KD(DD)
-     }
-     wD.d(zD, {
-       b: () => rD,
-       d: () => pD,
-       e: () => KD,
-       f: () => sD
-     })
-   },
-   36891: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => gD
-     });
-     var pD = wD(36897),
-       sD = wD(9198);
-     const KD = [],
- ... (47 more removed lines; see GitHub link above)
+       let ip = gp(pp),
+         cp = new hp({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return pp.nodes().forEach((ip => {
+         cp.setNode(ip, {
+           label: ip
+         }), cp.setParent(ip, "layer" + pp.node(ip).rank)
+       })), pp.edges().forEach((pp => cp.setEdge(pp.v, pp.w, {}, pp.name))), ip.forEach(((pp, ip) => {
+         let Op = "layer" + ip;
+         cp.setNode(Op, {
+           rank: "same"
+         }), pp.reduce(((pp, ip) => (cp.setEdge(pp, ip, {
+           style: "invis"
+         }), ip)))
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/121.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/121.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a)

#### 1. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L4` → after: `L4-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L4-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/121.js#L4-L1050) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/121.js#L4)

```diff
-   6523: (DD, zD, wD) => {
+   36812: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Up,
+       h: () => jp
+     });
+     cp(34402);
+     var Op = cp(62),
+       op = cp(1476),
+       Ip = cp(1956),
+       Sp = cp(2004),
+       xp = cp(25),
+       Lp = cp(2492),
+       Yp = cp(36819),
+       Dp = cp(36828),
+       Ap = cp(34386),
+       Pp = cp(34397),
+ ... (1031 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L9-L168` → after: `L1062-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L1062-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/121.js#L1062-L1103) · [Before (L9-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/121.js#L9-L168)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (144 more removed lines; see GitHub link above)
+       leafBeds: Ip,
+       woolBeds: Sp,
+       strongBeds: xp,
+       beds: [...Ip, ...Sp, ...xp],
+       bedHeads: Lp,
+       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     }
+   },
+   6605: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       g: () => op,
+       h: () => Lp,
+       i: () => Ip,
+       k: () => Yp,
+       l: () => Op,
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 1. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122, 396];
+ export const ids = [122];
```

#### 2. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L1304` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/122.js#L4) · [Before (L4-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/122.js#L4-L1304)

```diff
-   36310: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => iz
-     });
-     var pD = wD(338),
-       sD = wD(3494),
-       KD = wD(3535),
-       rD = wD(3528),
-       LD = wD(3521),
-       cD = wD(1200),
-       gD = wD(35),
-       RD = wD(1737),
-       AD = wD(1366),
-       UD = wD(1447),
-       fD = wD(1044),
-       ID = wD.n(fD),
- ... (1285 more removed lines; see GitHub link above)
+   6613: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L1306` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/122.js#L6) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/122.js#L1306)

```diff
-       e: () => nD
+       b: () => Op
```

#### 4. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L1480-L1593` → after: `L9-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L9-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/122.js#L9-L45) · [Before (L1480-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/122.js#L1480-L1593)

```diff
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
- 
-     function rD() {
-       const {
-         t: DD,
-         selectedLanguage: zD
-       } = (0, sD.E)();
-       return {
-         statusText: zD => DD(KD[zD]),
-         rowText: wD => {
- ... (98 more removed lines; see GitHub link above)
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+       musicVolumeLevel: .6,
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L1595-L1603` → after: `L47-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L47-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/122.js#L47-L166) · [Before (L1595-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/122.js#L1595-L1603)

```diff
-       }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
-         if ((0, KD.B)(DD.directJoinVmUrl)) return DD;
-         const zD = (0, sD.V)(DD.directJoinVmUrl);
-         null === zD && (DD.directJoinVmUrl = void 0);
-         return DD
-       }(DD = function(DD) {
-         if ((0, KD.B)(DD.gameNameWithVariation)) return DD;
-         return DD.gameNameWithVariation = (0, pD.i)(DD.gameNameWithVariation), DD
-       }(DD))
+       },
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       middleTextTop: "",
+       middleTextUpper: "",
+ ... (104 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/123.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/123.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496)

#### 1. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123];
+ export const ids = [123, 401];
```

#### 2. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L4)

```diff
-   6558: (DD, zD, wD) => {
+   36533: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L17` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L8-L40) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L8-L17)

```diff
-     var pD = wD(1200),
-       sD = wD(128),
-       KD = wD(236),
-       rD = wD(1447),
-       LD = wD(1324),
-       cD = wD(20),
-       gD = wD(1702),
-       RD = wD(3398),
-       AD = wD(3106),
-       UD = wD(1096);
+     var Op = cp(322),
+       op = cp(3607),
+       Ip = cp(3641),
+       Sp = cp(3635),
+       xp = cp(3628),
+       Lp = cp(1201),
+       Yp = cp(44),
+       Dp = cp(1765),
+       Ap = cp(1387),
+       Pp = cp(1480),
+       Wp = cp(1049),
+       yp = cp.n(Wp),
+       Up = cp(1692),
+       wp = cp(62),
+       vp = cp(82),
+       tp = cp(2420),
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L19` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L42-L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L19)

```diff
-     function fD() {
+     function Tp(pp) {
+       var ip;
+       let {
+         eventName: cp
+       } = pp;
```

#### 5. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L22-L652` → after: `L49-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L49-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L49-L171) · [Before (L22-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L22-L652)

```diff
-       } = (0, pD.E)(), zD = !(0, KD.shouldUseUkPrivacyPolicy)();
-       return (0, UD.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, UD.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: DD("homePage:privacyPolicy")
-         }), (0, UD.jsx)("p", {
-           children: (0, UD.jsxs)("em", {
-             children: ["Last updated: ", RD.e.toLocaleDateString()]
-           })
-         }), (0, UD.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, UD.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, UD.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
- ... (615 more removed lines; see GitHub link above)
+       } = (0, Lp.H)(), op = Mp.e[cp], [Ip, Sp] = (0, wp.useState)((() => Date.now() >= op.endsAt.getTime())), [xp, Yp] = (0, wp.useState)("overall"), Dp = function(pp, ip) {
+         const {
+           userContext: cp,
+           isUserContextUpdating: Op
+         } = (0, ep.b)(), op = `${pp}:${ip}`, [Ip, Sp] = (0, wp.useState)({
+           requestKey: op,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, wp.useEffect)((() => {
+           if (Op) return;
+           let Ip, xp = !1;
+           const Lp = async () => {
+             if ("visible" === document.visibilityState) try {
+               const Op = await Cp.b.getGameEventLeaderboard(cp, {
+ ... (107 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L654-L669` → after: `L173-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L173-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L173-L241) · [Before (L654-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L654-L669)

```diff
-           }), (0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: (0, UD.jsx)("a", {
-                   href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
-                   children: "ByteBrew"
-                 })
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Usage data, device data, interactions on the site"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Analyzes website usage to help us understand how the site is used and improve user experience."
-               })
+           }), (0, Jp.jsxs)("div", {
+             className: "GameEventPanelLeaderboard",
+             children: [(0, Jp.jsxs)("div", {
+               className: "GameEventPanelLeaderboardHeader",
+               children: [(0, Jp.jsx)("h3", {
+                 className: "GameEventPanelLeaderboardTitle",
+                 children: Op(op.leaderboard.titleKey)
+               }), (0, Jp.jsx)(Qp.b, {
+                 ariaLabel: Op("gameEvents:leaderboardScope"),
+                 options: Mp.b.map((pp => ({
+                   value: pp,
+                   label: Op(`gameEvents:${pp}Scope`)
+                 }))),
+                 value: xp,
+                 onChange: Yp
+               })]
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L672-L687` → after: `L244-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L244-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L244-L345) · [Before (L672-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L672-L687)

```diff
-         }), (0, UD.jsx)("h4", {
-           children: "Content Moderation"
-         }), (0, UD.jsxs)("table", {
-           children: [(0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "What They Do"
-               })
+         })
+       })
+     }
+ 
+     function fp(pp) {
+       let {
+         event: ip,
+         progress: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Lp.H)(), op = null !== cp && ip.prizeGoals.some(((pp, ip) => cp[ip] >= pp.target));
+       return (0, Jp.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, Jp.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+ ... (86 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L689-L704` → after: `L347-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L347-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L347-L354) · [Before (L689-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L689-L704)

```diff
-           }), (0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: (0, UD.jsx)("a", {
-                   href: "https://www.lassomoderation.com/privacy-policy/",
-                   children: "Lasso Moderation"
-                 })
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Anonymized IP addresses, chat logs, usernames, reports, custom lobby metadata, custom game metadata, thumbnail uploads"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
-               })
+           }), (0, Jp.jsxs)("aside", {
+             className: "GamePageContentSection",
+             children: [(0, Jp.jsx)("h2", {
+               children: Ip.tips
+             }), (0, Jp.jsx)("ul", {
+               children: Op.tips.map((pp => (0, Jp.jsx)("li", {
+                 children: pp
+               }, pp)))
```

#### 9. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L706-L711` → after: `L356-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L356-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L356-L388) · [Before (L706-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L706-L711)

```diff
-           }), (0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: (0, UD.jsx)("a", {
-                   href: "https://www.purgomalum.com/",
-                   children: "PurgoMalum"
+           }), (0, Jp.jsxs)("section", {
+             className: "GamePageContentSection GamePageContentFaq",
+             children: [(0, Jp.jsx)("h2", {
+               children: Ip.faq
+             }), Op.faq.map((pp => {
+               let {
+                 question: ip,
+                 answer: cp
+               } = pp;
+               return (0, Jp.jsxs)("div", {
+                 className: "GamePageContentFaqItem",
+                 children: [(0, Jp.jsx)("h3", {
+                   children: ip
+                 }), (0, Jp.jsx)("p", {
+                   children: cp
+                 })]
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L713-L721` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L390) · [Before (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L713-L721)

```diff
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Chat logs"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Provides profanity filtering for moderating chat messages."
-               })
+               }, pp)))
```

#### 11. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L724-L757` → after: `L393-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L393-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L393-L548) · [Before (L724-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L724-L757)

```diff
-         }), (0, UD.jsx)("h4", {
-           children: "Payment Providers"
-         }), (0, UD.jsxs)("table", {
-           children: [(0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (18 more removed lines; see GitHub link above)
+         })
+       })
+     }
+     var Gp = cp(1060),
+       rp = cp(104),
+       Zp = cp(1149),
+       zp = cp(34470),
+       sp = cp(1666),
+       Kp = cp(1543),
+       Vp = cp(1538),
+       ii = cp(1623),
+       ci = cp(1490),
+       Oi = cp(1372),
+       oi = cp(36539),
+       Ii = cp(1244),
+       Si = cp(1014),
+ ... (140 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L759-L790` → after: `L550-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L550-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L550-L1264) · [Before (L759-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L759-L790)

```diff
-         }), (0, UD.jsx)("h4", {
-           children: "Platform Integrations"
-         }), (0, UD.jsxs)("table", {
-           children: [(0, UD.jsxs)("tr", {
-             children: [(0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "Information Processed"
-               })
-             }), (0, UD.jsx)("td", {
-               children: (0, UD.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (16 more removed lines; see GitHub link above)
+         })]
+       })
+     }
+     var Hi = cp(4766),
+       di = cp(4685),
+       ei = cp(3546);
+     const ui = 8,
+       ji = 12;
+ 
+     function ki(pp) {
+       let {
+         customLobbies: ip,
+         favouriteLobbies: cp,
+         toggleLikeLobby: Op,
+         showReport: op
+       } = pp;
+ ... (699 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L794-L886` → after: `L1339-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1339-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L1339-L1464) · [Before (L794-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L794-L886)

```diff
-         }), (0, UD.jsx)("h3", {
-           children: "3.4 YouTube API Services"
-         }), (0, UD.jsxs)("p", {
-           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
-             href: "https://www.youtube.com/t/terms",
-             children: "YouTube Terms of Service"
-           }), "."]
-         }), (0, UD.jsxs)("p", {
-           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, UD.jsx)("a", {
-             href: "http://www.google.com/policies/privacy",
-             children: "http://www.google.com/policies/privacy"
-           }), "."]
-         }), (0, UD.jsx)("p", {
-           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
-         }), (0, UD.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
- ... (77 more removed lines; see GitHub link above)
+         }), ip.rows.length > 0 && (0, yp.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: ip.rows.map((pp => {
+             const {
+               label: ip,
+               value: cp
+             } = op(pp);
+             return (0, yp.jsxs)("div", {
+               className: Pp()("GameApprovalInfoRow", pp.passed ? "Passed" : "Failed"),
+               children: [(0, yp.jsx)(Dp.d, {
+                 name: pp.passed ? "check" : "xmark"
+               }), (0, yp.jsxs)("div", {
+                 className: "GameApprovalInfoRowText",
+                 children: [(0, yp.jsx)("div", {
+                   className: "GameApprovalInfoRowLabel",
+                   children: ip
+ ... (110 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1064-L1074` → after: `L1490-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1490-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L1490-L1506) · [Before (L1064-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L1064-L1074)

```diff
-         adMobPrivacyOptionsRequired: DD
-       } = (0, cD.n)(["adMobPrivacyOptionsRequired"]);
-       if (!DD) return null;
-       return (0, UD.jsx)(rD.f, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await gD.c.request("ads.showPrivacyOptions", {})
-             } catch (DD) {
-               console.error("Failed to open AdMob privacy options:", DD)
+         t: pp,
+         selectedLanguage: ip
+       } = (0, op.H)();
+       return {
+         statusText: ip => pp(Ip[ip]),
+         rowText: cp => {
+           const Ip = (pp, cp) => (0, Op.cb)((0, op.p)(ip.code, pp), 0, cp);
+           switch (cp.kind) {
+             case "ownerAccountAge": {
+               const ip = cp.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: pp("studio:approvalAccountAgeLabel"),
+                 value: pp(ip, {
+                   age: Ip(ip, cp.accountAgeMs),
+                   days: cp.minAccountAgeDays
+                 })
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1076-L1079` → after: `L1508-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1508-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L1508-L1547) · [Before (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L1076-L1079)

```diff
-           })()
-         },
-         children: "Manage Privacy Choices"
-       })
+             case "sinceUnbannedOrUnmuted":
+               return {
+                 label: pp("studio:approvalSinceUnbannedLabel"), value: pp("studio:approvalSinceUnbannedValue", {
+                   time: Ip("studio:approvalSinceUnbannedValue", cp.sinceMs),
+                   days: cp.minDays
+                 })
+               };
+             case "reportHold": {
+               const {
+                 detail: ip
+               } = cp;
+               if (null === ip) return {
+                 label: pp("studio:approvalUnderInvestigation"),
+                 value: null
+               };
+               const Op = ip.weightedReporters.toFixed(1),
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L1083-L1095` → after: `L1562-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1562-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/123.js#L1562-L1570) · [Before (L1083-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/123.js#L1083-L1095)

```diff
-       return (0, UD.jsxs)(UD.Fragment, {
-         children: [(0, sD.d)() && (0, UD.jsx)(UD.Fragment, {
-           children: (0, UD.jsx)(rD.f, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, LD.s)()
-             },
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, UD.jsx)(ID, {}), (0, UD.jsx)(AD.d, {
-           className: "PrivacyPolicyLinks"
-         }), (0, UD.jsx)(fD, {})]
-       })
+       const [pp, ip] = (0, Op.useState)(!1);
+       return (0, Op.useLayoutEffect)((() => {
+         let pp = !0;
+         return (0, op.h)().then((() => {
+           pp && ip(!0)
+         })), () => {
+           pp = !1
+         }
+       }), []), pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/124.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/124.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c)

#### 1. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L2)

```diff
- export const ids = [124];
+ export const ids = [124, 125];
```

#### 2. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L4-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L4-L69) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L4)

```diff
-   6566: (DD, zD, wD) => {
+   6666: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(1112);
+ 
+     function op(pp) {
+       let {
+         href: ip,
+         children: cp
+       } = pp;
+       return (0, Op.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: ip,
+         target: "_blank",
+         rel: "noreferrer noopener",
+ ... (50 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L9` → after: `L73-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L73-L83) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L8-L9)

```diff
-     var pD = wD(1200),
-       sD = wD(1096);
+     var Op = cp(1201),
+       op = cp(131),
+       Ip = cp(226),
+       Sp = cp(1480),
+       xp = cp(1334),
+       Lp = cp(25),
+       Yp = cp(1705),
+       Dp = cp(3505),
+       Ap = cp(3221),
+       Pp = cp(6660),
+       Wp = cp(1112);
```

#### 4. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L14` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L88) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L14)

```diff
-       } = (0, pD.E)();
+       } = (0, Op.H)(), ip = !(0, Ip.shouldUseUkPrivacyPolicy)();
```

#### 5. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L19` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L93) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L19)

```diff
-           children: DD("homePage:termsOfService")
+           children: pp("homePage:privacyPolicy")
```

#### 6. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L21-L22` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L95-L96) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L21-L22)

```diff
-           children: (0, sD.jsx)("em", {
-             children: "Last updated: July 15, 2025"
+           children: (0, Wp.jsxs)("em", {
+             children: ["Last updated: ", Dp.h.toLocaleDateString()]
```

#### 7. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L25-L27` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L99-L101) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L25-L27)

```diff
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, sD.jsx)("h3", {
-           children: "1. General Information"
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, Wp.jsx)("h2", {
+           children: "1. Who We Are"
```

#### 8. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L29-L31` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L103) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L29-L31)

```diff
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, sD.jsx)("h3", {
-           children: "2. Definitions"
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L33-L45` → after: `L105-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L105-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L105-L127) · [Before (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L33-L45)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, sD.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, sD.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
-             }), (0, sD.jsx)("li", {
-               children: '"User", "you", or "your" refers to anyone using the Services.'
-             }), (0, sD.jsx)("li", {
-               children: '"Content" means all text, graphics, logos, images, software, and other material found on Bloxd.io.'
-             }), (0, sD.jsx)("li", {
-               children: '"Virtual Goods" refers to virtual items available for purchase within Bloxd.io, such as game items and in-game currency.'
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, Wp.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, Wp.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, Wp.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L47` → after: `L129-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L129-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L129-L187) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L47)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Technical Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "IP address, browser type, device type, screen resolution, language selection"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To ensure the website functions correctly and displays in your preferred language."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (43 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L49` → after: `L189-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L189-L199) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L49)

```diff
-           children: "3. Age Requirements"
+           children: "2.2 Chat Rooms"
+         }), (0, Wp.jsx)("p", {
+           children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
+           }), (0, Wp.jsx)("li", {
+             children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
+           }), (0, Wp.jsx)("li", {
+             children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
+           })]
```

#### 12. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L51` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L201) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L51)

```diff
-           children: "To use Bloxd.io, you must be at least 13 years old. If you are under 13, you need permission from a parent or guardian. By using our Services, you confirm that you meet this age or permission requirement."
+           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
```

#### 13. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L53` → after: `L203-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L203-L212) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L53)

```diff
-           children: "4. Account Creation and Security"
+           children: "2.3 Registered players"
+         }), (0, Wp.jsx)("h4", {
+           children: "2.3.1 Age Requirements and Parental Consent"
+         }), (0, Wp.jsxs)("p", {
+           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
+             href: "https://families.google.com/familylink/privacy/child-policy",
+             children: "Google\u2019s Child Privacy Policy"
+           }), "."]
+         }), (0, Wp.jsx)("h4", {
+           children: "2.3.2 Data Collection for Registered Players"
```

#### 14. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L55-L59` → after: `L214-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L214-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L214-L228) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L55-L59)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Account Information: You agree to provide accurate and complete information when creating your account. You are responsible for keeping your account information secure and confidential."
-             }), (0, sD.jsx)("li", {
-               children: "Account Security: Notify us immediately if you suspect unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account."
+           children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 15. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L61-L63` → after: `L230-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L230-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L230-L286) · [Before (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L61-L63)

```diff
-           })
-         }), (0, sD.jsx)("h3", {
-           children: "5. User Conduct and Community Guidelines"
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Username, email address"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To create and manage user accounts."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (41 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L65-L67` → after: `L288-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L288-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L288-L290) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L65-L67)

```diff
-           children: "We are committed to creating a fun, safe, and inclusive environment for everyone. By using Bloxd.io, you agree to follow our Community Conduct Guidelines and adhere to the following rules:"
-         }), (0, sD.jsx)("h4", {
-           children: "Expected Behavior"
+           children: "Data Retention: Data related to registered players is retained for as long as the account is active, 14 months after your last play session or If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after th … [truncated]
+         }), (0, Wp.jsx)("h3", {
+           children: "2.3.3 Data Collection for Store Purchases"
```

#### 17. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L69-L75` → after: `L292-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L292-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L292-L306) · [Before (L69-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L69-L75)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Show Respect: Treat others with kindness and consideration in all interactions."
-             }), (0, sD.jsx)("li", {
-               children: "Promote Positivity: Engage in activities that contribute to a positive community experience."
-             }), (0, sD.jsx)("li", {
-               children: "Play Fairly: Participate honestly and with integrity, respecting the rules and spirit of the game."
+           children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 18. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L77-L95` → after: `L308-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L308-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L308-L376) · [Before (L77-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L77-L95)

```diff
-           })
-         }), (0, sD.jsx)("h4", {
-           children: "Prohibited Behavior"
-         }), (0, sD.jsxs)("p", {
-           children: ["To maintain a safe and welcoming environment, the following actions are strictly prohibited:", (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Harassment and Threats: Any form of bullying, stalking, or harassment, including making threats or inciting violence."
-             }), (0, sD.jsx)("li", {
-               children: "Discrimination and Hate Speech: Discriminating against or mocking others based on age, race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic."
-             }), (0, sD.jsx)("li", {
-               children: "Inappropriate Content and Behavior: Sharing or promoting content that is sexually explicit, violent, or otherwise inappropriate."
-             }), (0, sD.jsx)("li", {
-               children: "Impersonation: Impersonating other players, staff, or developers with the intent to deceive or harm."
-             }), (0, sD.jsx)("li", {
-               children: "Account Security and Privacy: Sharing, selling, or trading accounts, or using someone else's account without permission."
-             }), (0, sD.jsx)("li", {
- ... (3 more removed lines; see GitHub link above)
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "User ID, email address"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To attach any purchase made to your account."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (53 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L98-L111` → after: `L379-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L379-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L379-L442) · [Before (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L98-L111)

```diff
-         }), (0, sD.jsx)("h4", {
-           children: "Cheating and Unfair Play"
-         }), (0, sD.jsxs)("p", {
-           children: ["You may not make, use, share, or promote any cheats, hacks, bots, scripts, or other tools that change how the game works or give players an unfair advantage.", (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "This includes trying to bypass any form of security - including, but not limited to, protections related to client integrity or gameplay action security."
-             }), (0, sD.jsx)("li", {
-               children: "It also includes trying to reverse engineer our game's code in any way, or trying to gain unauthorised access to our systems."
-             }), (0, sD.jsx)("li", {
-               children: "If you do any of these things, we may suspend or ban your account, and we reserve the right to take civil and/or criminal legal action for your actions harming our game, our players, and our business."
-             }), (0, sD.jsx)("li", {
-               children: "If you break these rules - like hacking, cheating, or trying to mess with our game or servers - you agree to pay us \xa325,000 for each violation. This is because it's hard to measure exactly how much damage those actions cause, and this amount is a fair  … [truncated]
-             }), (0, sD.jsx)("li", {
-               children: "These rules apply to everyone, whether or not you have a game account, and even if you used a bot or other automated tool to do it."
+         }), (0, Wp.jsx)("p", {
+           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
+         }), (0, Wp.jsx)("p", {
+           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
+         }), (0, Wp.jsx)("h3", {
+           children: "2.4 When You Contact Us"
+         }), (0, Wp.jsx)("p", {
+           children: "When you reach out to us, we collect information to help us respond to you effectively:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+ ... (48 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L115` → after: `L448-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L448-L450) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L115)

```diff
-           children: "6. Software License and IP Restrictions"
+           children: "2.5 The AI Helper in the Code Editor"
+         }), (0, Wp.jsx)("p", {
+           children: "The Code Editor\u2019s AI Helper answers questions about the code of games made in Bloxd.io. To answer, the AI is sent your question, your game\u2019s code, the recent messages in that chat, errors your game showed and the AI notes you kept. When the AI looks … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L118` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L453) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L118)

```diff
-             children: "License Grant: We grant you a limited, non-exclusive, non-transferable right to download and run the Bloxd game client solely to access and play our Services."
+             children: "Bot.xd: your browser sends them to OVHcloud, a company in France, whose AI models answer."
```

#### 22. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L120` → after: `L455-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L455-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L455-L463) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L120)

```diff
-             children: "What You Can't Do: You may not copy, modify, distribute, or create derivative works of the game client, or attempt to reverse-engineer, decompile, disassemble, hack, bypass security, inject cheats, bots, scripts, or any unauthorized tools. Any such action a … [truncated]
+             children: "Super Bot.xd: our game servers send them to DeepSeek, a company in China, or to OVHcloud when Super Bot.xd runs on its models. We ask for your consent before you first use DeepSeek."
+           }), (0, Wp.jsxs)("li", {
+             children: ["ChatGPT: when Bot.xd isn\u2019t working on our website, you can ask ChatGPT instead. We open it in a new tab that sends OpenAI, a company in the United States, your question, the code of the file you have open, the names and line counts of your other files … [truncated]
+               href: Pp.i,
+               children: "terms"
+             }), " and ", (0, Wp.jsx)("a", {
+               href: Pp.f,
+               children: "privacy policy"
+             }), " apply. If you paste its answer back, the code it puts in your files goes with your later questions as part of your files; its words don\u2019t, except to your own keys while their safety check is off. We count how many answers are pasted."]
```

#### 23. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L122` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L465) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L122)

```diff
-             children: "Our Ownership: All intellectual property rights in the game client and Services stay with Bloxd LTD. You get no ownership or other rights here beyond this limited license."
+             children: "Your own API key: if you add a key from another AI company, your browser sends your questions straight to that company, and its terms and privacy policy apply. Your key is kept only in your browser."
```

#### 24. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L125` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L476-L478) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L125)

```diff
-           children: "7. Virtual Goods and In-Game Purchases"
+           children: "3.1 Scope of This Privacy Policy"
+         }), (0, Wp.jsxs)("p", {
+           children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
```

#### 25. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L127-L135` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L480-L482) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L127-L135)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Purchases: Virtual Goods can be purchased within the Services. All purchases are final and non-refundable unless required by law."
-             }), (0, sD.jsx)("li", {
-               children: "License: When you purchase Virtual Goods, you receive a limited, non-transferable license to use them within the Services."
-             }), (0, sD.jsx)("li", {
-               children: "Termination: We may terminate your access to Virtual Goods if you violate these Terms or our Community Conduct Guidelines."
-             })]
-           })
+           children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging w … [truncated]
+         }), (0, Wp.jsx)("p", {
+           children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
```

#### 26. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L137` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L484) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L137)

```diff
-           children: "8. Modifications and Updates"
+           children: "3.2 Advertisers"
```

#### 27. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L139-L145` → after: `L486-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L486-L492) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L139-L145)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Service Changes: We may update or modify the Services at any time without prior notice. We are not liable for any changes, suspensions, or discontinuations of the Services."
-             }), (0, sD.jsx)("li", {
-               children: "Terms Updates: These Terms may be updated periodically. We will notify you of significant changes, and your continued use of the Services constitutes your acceptance of the new Terms."
-             })]
-           })
+           children: "Bloxd.io displays ads from selected partners. On our website, ads are managed and delivered by our web advertising partners; within our mobile apps (available on iOS and Android), ads are delivered through Google AdMob."
+         }), ip && (0, Wp.jsx)("p", {
+           children: "With your consent, we may display personalized ads tailored to your interests based on information such as your browsing history, device information, your device\u2019s advertising identifier, and your interactions with our site and apps. Where you do not pro … [truncated]
+         }), !ip && (0, Wp.jsx)("p", {
+           children: "These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on general context. We do not collect personal data from children under 13 for advertising purposes."
+         }), (0, Wp.jsx)("p", {
+           children: "Where the EU or UK General Data Protection Regulation (GDPR) applies, our website asks for your advertising and cookie choices through a consent prompt registered with the IAB Transparency and Consent Framework when you first visit. You can review, change or  … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L147` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L494) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L147)

```diff
-           children: "9. Termination"
+           children: "3.3 Service Providers"
```

#### 29. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L149-L153` → after: `L496-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L496-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L496-L512) · [Before (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L149-L153)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Termination by You: You can terminate your account at any time by contacting us."
-             }), (0, sD.jsx)("li", {
-               children: "Termination by Us: We reserve the right to terminate or suspend your account if you violate these Terms, the Community Conduct Guidelines, or engage in harmful behavior."
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, Wp.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What They Do"
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L155` → after: `L514-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L514-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L514-L934) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L155)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "AWS Cloud"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Data storage and processing"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Hosts our servers and stores backup, data securely."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (405 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L157` → after: `L936-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L936-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L936-L946) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L157)

```diff
-           children: "10. Reporting and Consequences"
+           children: "3.4 YouTube API Services"
+         }), (0, Wp.jsxs)("p", {
+           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
+             href: "https://www.youtube.com/t/terms",
+             children: "YouTube Terms of Service"
+           }), "."]
+         }), (0, Wp.jsxs)("p", {
+           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, Wp.jsx)("a", {
+             href: "http://www.google.com/policies/privacy",
+             children: "http://www.google.com/policies/privacy"
+           }), "."]
```

#### 32. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L159-L165` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L948-L950) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L159-L165)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Reporting Violations: If you encounter behavior that violates these Terms or the Community Conduct Guidelines, report it using the in-game tools. Your reports help us maintain a high-quality, enjoyable experience for everyone."
-             }), (0, sD.jsx)("li", {
-               children: "Consequences for Violations: Breaking these guidelines can result in penalties ranging from temporary suspensions to permanent bans. Players who demonstrate positive behavior over time may see a reduction in penalties."
-             })]
-           })
+           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
```

#### 33. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L167` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L952) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L167)

```diff
-           children: "11. Disclaimer of Warranties"
+           children: "4.1 What Are Cookies?"
```

#### 34. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L169-L175` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L954) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L169-L175)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: 'As-Is Basis: The Services are provided "as is" and "as available", without any warranties, either express or implied.'
-             }), (0, sD.jsx)("li", {
-               children: "No Warranty: We do not guarantee that the Services will be uninterrupted or error-free."
-             })]
-           })
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
```

#### 35. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L177` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L956) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L177)

```diff
-           children: "12. Limitation of Liability"
+           children: "4.2 Types of Cookies We Use"
```

#### 36. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L179-L183` → after: `L958-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L958-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L958-L972) · [Before (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L179-L183)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "No Liability: To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services."
-             }), (0, sD.jsx)("li", {
-               children: "Total Liability: Our total liability to you for any claims related to the Services is limited to the amount you paid us in the past 12 months."
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Cookie"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Purpose"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Example"
+               })
```

#### 37. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L185` → after: `L974-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L974-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L974-L1030) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L185)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Functional Cookies"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Ensure the website works properly by enabling basic functions like navigation and settings."
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Remembering your game settings, progress or language preferences."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (41 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L187` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1032) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L187)

```diff
-           children: "13. Governing Law and Dispute Resolution"
+           children: "4.3 Managing Cookies"
```

#### 39. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L189-L201` → after: `L1034-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1034-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1034-L1058) · [Before (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L189-L201)

```diff
-           children: (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, sD.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, sD.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, sD.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, sD.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
-             })]
-           })
+           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
+           }), (0, Wp.jsx)("li", {
+             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
+           }), (0, Wp.jsx)("li", {
+             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
+           }), (0, Wp.jsx)("li", {
+             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
+           })]
+         }), (0, Wp.jsx)("h2", {
+           children: "5. Security Measures"
+         }), (0, Wp.jsx)("p", {
+           children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
+         }), (0, Wp.jsx)("h3", {
+ ... (9 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L203` → after: `L1060-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1060-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1060-L1088) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L203)

```diff
-           children: "14. Severability"
+           children: "5.2 Staff Training and Compliance"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
+           }), (0, Wp.jsx)("li", {
+             children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
+           })]
+         }), (0, Wp.jsx)("h3", {
+           children: "5.3 Data Breach Notification"
+         }), (0, Wp.jsx)("p", {
+           children: "In the unlikely event of a data breach that affects your personal information:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "We will promptly notify\xa0affected users, as required by law."
+           }), (0, Wp.jsx)("li", {
+             children: "The notification will include:"
+ ... (13 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L205` → after: `L1090-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1090-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1090-L1148) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L205)

```diff
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
+           children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded. The AI Helper sends data to France and China, and ChatGPT to the United St … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "7. Data Retention"
+         }), (0, Wp.jsx)("p", {
+           children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
+           }), (0, Wp.jsx)("li", {
+             children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
+           }), (0, Wp.jsx)("li", {
+             children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
+           }), (0, Wp.jsx)("li", {
+             children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site per … [truncated]
+           }), (0, Wp.jsx)("li", {
+             children: "YouTube API Data:\xa0Public video metadata retrieved from YouTube API Services is refreshed every hour and is never kept for more than 24 hours. Creator-linked YouTube handles and channel IDs are retained while the link remains on the account and deleted as … [truncated]
+ ... (43 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L207` → after: `L1150-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1150-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1150-L1178) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L207)

```diff
-           children: "15. Contact Information"
+           children: "8.4 Your California Privacy Rights"
+         }), (0, Wp.jsx)("p", {
+           children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
+         }), (0, Wp.jsx)("p", {
+           children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
+           }), (0, Wp.jsx)("li", {
+             children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
+           }), (0, Wp.jsx)("li", {
+             children: "Commercial information, such as your purchase history."
+           })]
+         }), (0, Wp.jsx)("p", {
+           children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads.  … [truncated]
+         }), (0, Wp.jsx)("p", {
+ ... (13 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L209-L213` → after: `L1180-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1180-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1180-L1192) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L209-L213)

```diff
-           children: ["If you have any questions about these Terms, please contact us at:", (0, sD.jsxs)("ul", {
-             children: [(0, sD.jsx)("li", {
-               children: "Email: privacy@bloxd.io"
-             }), (0, sD.jsx)("li", {
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
+           children: ["To opt out of the sale or sharing of your personal information, use the \u201cDo Not Sell My Personal Information\u201d link shown to California visitors in the footer of our home page and at the top of this Privacy Policy, or email us at", " ", (0, Wp.jsx)( … [truncated]
+             href: "mailto:privacy@bloxd.io",
+             children: "privacy@bloxd.io"
+           }), ". To exercise your other rights, contact us as described in section 8.3. You may also ask an authorized agent to make a request on your behalf; we may ask the agent for proof of your permission and ask you to verify your identity with us."]
+         }), (0, Wp.jsx)("h2", {
+           children: "9. Contact Us"
+         }), (0, Wp.jsx)("p", {
+           children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsxs)("li", {
+             children: ["Email: ", (0, Wp.jsx)("a", {
+               href: "mailto:privacy@bloxd.io",
+               children: "privacy@bloxd.io"
```

#### 44. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L216-L217` → after: `L1197-L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1197-L1198) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L216-L217)

```diff
-         }), (0, sD.jsx)("h3", {
-           children: "16. Entire Agreement"
+         }), (0, Wp.jsx)("h2", {
+           children: "10. Updates to This Policy"
```

#### 45. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L219` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/124.js#L1200) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/124.js#L219)

```diff
-           children: "These Terms, together with our Privacy Policy and Community Conduct Guidelines, constitute the entire agreement between you and Bloxd LTD regarding your use of the Services. They supersede any prior agreements or communications."
+           children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/125.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/125.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c)

#### 1. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/125.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   6571: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => ID
+   6660: (pp, ip, cp) => {
+     cp.d(ip, {
+       WorldCodeAiChatGptNotice: () => Dp,
+       WorldCodeAiDeepSeekNotice: () => Yp,
+       c: () => Sp,
+       f: () => Lp,
+       i: () => xp
```

#### 2. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L18` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/125.js#L12-L17) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/125.js#L8-L18)

```diff
-     var pD = wD(1523),
-       sD = wD(1562),
-       KD = wD(2990),
-       rD = wD(2252),
-       LD = wD(1447),
-       cD = wD(1511),
-       gD = wD(1127),
-       RD = wD(1051),
-       AD = wD(1200),
-       UD = wD(1057),
-       fD = wD(1096);
+     var Op = cp(1201),
+       op = cp(6666),
+       Ip = cp(1112);
+     const Sp = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       xp = "https://openai.com/policies/terms-of-use/",
+       Lp = "https://openai.com/policies/privacy-policy/";
```

#### 3. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L24-L68` → after: `L22-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/125.js#L22-L41) · [Before (L24-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/125.js#L24-L68)

```diff
-       } = (0, AD.E)(), {
-         pack: wD
-       } = (0, pD.C)(), {
-         userContext: ID
-       } = (0, gD.c)();
-       if (wD) {
-         const DD = sD.e[wD];
-         if (null === DD || void 0 === DD || !DD.purchasable) return (0, fD.jsx)(cD.NavigatePreserveSearch, {
-           to: "/"
-         })
-       }
-       const BD = wD ? sD.e[wD] : null,
-         GD = wD ? KD.i[(0, rD.j)(wD)] : null,
-         hD = void 0 !== (null === BD || void 0 === BD ? void 0 : BD.characterSet) || null !== BD && void 0 !== BD && BD.singleItem ? BD.displayName : `${null!==(DD=null===BD||void 0===BD?void 0:BD.displayName)&&void 0!==DD?DD:wD} Pack`,
-         nD = BD ? `Your ${hD} is Ready!` : "Welcome To Super Rank!",
-         MD = BD ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
- ... (29 more removed lines; see GitHub link above)
+       } = (0, Op.H)();
+       return (0, Ip.jsxs)(Ip.Fragment, {
+         children: [pp("superBotXd:deepSeekNotice"), " ", (0, Ip.jsx)(op.c, {
+           href: Sp,
+           children: pp("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
+     }
+ 
+     function Dp() {
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, Ip.jsxs)(Ip.Fragment, {
+         children: [pp("aiHelperChatGpt:notice"), " ", (0, Ip.jsx)(op.c, {
+           href: xp,
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/126.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/126.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b)

#### 1. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/126.js#L4)

```diff
-   6578: (DD, zD, wD) => {
+   6672: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/126.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/126.js#L8-L16)

```diff
-     var pD = wD(1346),
-       sD = wD(58),
-       KD = wD(113),
-       rD = wD(1523),
-       LD = wD(1234),
-       cD = wD(338),
-       gD = wD(638);
-     const RD = new URL(LD.p[cD.c.PRODUCTION]).origin;
-     var AD = wD(1096);
+     var Op = cp(1201),
+       op = cp(1112);
```

#### 3. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L19-L40` → after: `L12-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L12-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/126.js#L12-L220) · [Before (L19-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/126.js#L19-L40)

```diff
-       const DD = (0, rD.C)();
-       return (0, sD.useEffect)((() => {
-         const zD = KD.currentUrl.getSearchParam("code");
-         KD.currentUrl.removeSearchParam("code"), null === zD && (console.error("No authorization code found in the URL"), window.close());
-         const wD = {
-           type: `oauth_authentication_${DD.providerName}`,
-           code: zD
-         };
-         for (const DD of (sD = window.location.origin) === RD ? [sD, `https://${gD.e}`] : [sD]) {
-           var pD;
-           null === (pD = window.opener) || void 0 === pD || pD.postMessage(wD, DD)
-         }
-         var sD;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
- ... (6 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, op.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, op.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: pp("homePage:termsOfService")
+         }), (0, op.jsx)("p", {
+           children: (0, op.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, op.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, op.jsx)("h3", {
+           children: "1. General Information"
+ ... (193 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/127.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/127.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009)

#### 1. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L4)

```diff
-   6582: (DD, zD, wD) => {
+   6679: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L8-L32` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L8-L18) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L8-L32)

```diff
-     var pD = wD(58),
-       sD = wD(1523),
-       KD = wD(1044),
-       rD = wD.n(KD),
-       LD = wD(338),
-       cD = wD(6594),
-       gD = wD(1057),
-       RD = wD(1511),
-       AD = wD(4576),
-       UD = wD(1447),
-       fD = wD(3115),
-       ID = wD(4583),
-       BD = wD(1687),
-       GD = wD(4572),
-       hD = wD(1127),
-       nD = wD(20),
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(1543),
+       op = cp(1577),
+       Ip = cp(3098),
+       Sp = cp(2334),
+       xp = cp(1480),
+       Lp = cp(1538),
+       Yp = cp(1141),
+       Dp = cp(1055),
+       Ap = cp(1201),
+       Pp = cp(1060),
+       Wp = cp(1112);
```

#### 3. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L34-L107` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L20-L21) · [Before (L34-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L34-L107)

```diff
-     function xD(DD) {
-       let {
-         pack: zD,
-         view: wD,
-         favourite: pD,
-         notice: sD
-       } = DD;
-       const {
-         width: KD,
-         height: LD
-       } = cD.s.thumb, {
-         live: AD
-       } = zD;
-       return (0, CD.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, CD.jsxs)("div", {
- ... (58 more removed lines; see GitHub link above)
+     function yp() {
+       var pp;
```

#### 4. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L110` → after: `L24-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L24-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L24-L41) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L110)

```diff
-       } = (0, ED.E)(), gD = (0, TD.k)(), RD = Date.now(), AD = null === zD ? 0 : "owned" === zD.kind ? zD.packs.length : zD.page.results.length;
+       } = (0, Ap.H)(), {
+         pack: cp
+       } = (0, Op.A)(), {
+         userContext: yp
+       } = (0, Yp.b)();
+       if (cp) {
+         const pp = op.e[cp];
+         if (null === pp || void 0 === pp || !pp.purchasable) return (0, Wp.jsx)(Lp.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const Up = cp ? op.e[cp] : null,
+         wp = cp ? Ip.i[(0, Sp.g)(cp)] : null,
+         vp = void 0 !== (null === Up || void 0 === Up ? void 0 : Up.characterSet) || null !== Up && void 0 !== Up && Up.singleItem ? Up.displayName : `${null!==(pp=null===Up||void 0===Up?void 0:Up.displayName)&&void 0!==pp?pp:cp} Pack`,
+         tp = Up ? `Your ${vp} is Ready!` : "Welcome To Super Rank!",
+         Hp = Up ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L112-L117` → after: `L43-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L43-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L43-L55) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L112-L117)

```diff
-         className: rD()("ShaderPackBrowseResults", {
-           Loading: wD && null !== zD
-         }),
-         children: [wD && null === zD && (0, CD.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, CD.jsx)(QD.e, {})
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [wp && (0, Wp.jsx)(wp, {}), !Up && (0, Wp.jsx)(Dp.b, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+           customClass: "SuperRankWelcomeIconShower"
+         }), (0, Wp.jsx)("div", {
+           className: "PurchaseWelcomeTitle FullyFancyText",
+           children: tp
+         }), (0, Wp.jsx)("div", {
+           className: "PurchaseWelcomeText",
+           children: Hp
```

#### 6. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L119-L122` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L57-L61) · [Before (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L119-L122)

```diff
-           className: "ShaderPackBrowseMessage",
-           children: [cD("shaderPackListing:loadFailed"), (0, CD.jsx)(UD.f, {
-             onClick: sD,
-             children: cD("general:tryAgain")
+           className: "PurchaseWelcomeWarning",
+           children: [(0, Wp.jsx)(Pp.d, {
+             name: "circle-info"
+           }), (0, Wp.jsx)("div", {
+             children: ep
```

#### 7. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L124-L194` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/127.js#L63-L67) · [Before (L124-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/127.js#L124-L194)

```diff
-         }), "listing" === (null === zD || void 0 === zD ? void 0 : zD.kind) && AD > 0 && (0, CD.jsx)("div", {
-           className: "ShaderPackBrowseGrid",
-           children: zD.page.results.map((DD => (0, CD.jsx)(xD, {
-             pack: {
-               packId: DD.packId,
-               name: DD.name,
-               live: DD
-             },
-             view: LD,
-             favourite: {
-               isFavourite: gD.isFavourite(DD.packId),
-               onToggle: () => {
-                 gD.toggle(DD.packId)
-               }
-             }
-           }, DD.packId)))
- ... (55 more removed lines; see GitHub link above)
+         }), (0, Wp.jsx)(Lp.LinkPreserveSearch, {
+           to: "/",
+           children: (0, Wp.jsx)(xp.o, {
+             className: "PurchaseWelcomeContinue",
+             children: ip("general:continue")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 1. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L4-L6)

```diff
-   6597: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => LD
+   6687: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Pp
```

#### 2. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L8-L90` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L8-L16) · [Before (L8-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L8-L90)

```diff
-     var pD = wD(1044),
-       sD = wD.n(pD),
-       KD = wD(1200),
-       rD = wD(1096);
- 
-     function LD(DD) {
-       let {
-         item: zD,
-         className: wD
-       } = DD;
-       const {
-         t: pD
-       } = (0, KD.E)();
-       return null === zD.renderId || zD.previewsOutdated ? (0, rD.jsx)("div", {
-         className: sD()("ShaderPackPreviewsNotice", wD),
-         children: (0, rD.jsx)("span", {
- ... (67 more removed lines; see GitHub link above)
+     var Op = cp(1361),
+       op = cp(62),
+       Ip = cp(108),
+       Sp = cp(1543),
+       xp = cp(1236),
+       Lp = cp(322),
+       Yp = cp(657);
+     const Dp = new URL(xp.l[Lp.b.PRODUCTION]).origin;
+     var Ap = cp(1112);
```

#### 3. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L93-L119` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L19) · [Before (L93-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L93-L119)

```diff
-       var DD;
-       const [zD, wD] = (0, LD.d)(gD, sD.H[0]);
-       return [null !== (DD = sD.H.find((DD => DD === zD))) && void 0 !== DD ? DD : sD.H[0], wD]
-     }
- 
-     function UD() {
-       (0, pD.useEffect)((() => () => {
-         window.location.pathname.startsWith(rD.S) || (0, rD.k)()
-       }), [])
-     }
- 
-     function fD() {
-       return (0, LD.d)(RD, !1)
-     }
- 
-     function ID() {
- ... (11 more removed lines; see GitHub link above)
+       const pp = (0, Sp.A)();
```

#### 4. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L121-L128` → after: `L21-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L21-L29) · [Before (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L121-L128)

```diff
-         if (zD) return;
-         let wD = !1;
-         return KD.d.getFavouriteShaderPacks(DD).then((DD => {
-           wD || sD(new Set(DD))
-         })).catch((DD => {
-           console.error("Failed to get favourite shader packs", DD), wD || sD(new Set)
-         })), () => {
-           wD = !0
+         const ip = Ip.currentUrl.getSearchParam("code");
+         Ip.currentUrl.removeSearchParam("code"), null === ip && (console.error("No authorization code found in the URL"), window.close());
+         const cp = {
+           type: `oauth_authentication_${pp.providerName}`,
+           code: ip
+         };
+         for (const pp of (op = window.location.origin) === Dp ? [op, `https://${Yp.e}`] : [op]) {
+           var Op;
+           null === (Op = window.opener) || void 0 === Op || Op.postMessage(cp, pp)
```

#### 5. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L130-L330` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L31-L39) · [Before (L130-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L130-L330)

```diff
-       }), [DD, zD]), {
-         isFavourite: DD => null === wD ? null : wD.has(DD),
-         toggle: function(zD) {
-           if (null === wD || rD.current.has(zD)) return;
-           rD.current.add(zD);
-           const pD = !wD.has(zD);
-           LD(zD, pD), (pD ? KD.d.favouriteShaderPack(DD, zD) : KD.d.unfavouriteShaderPack(DD, zD)).catch((DD => {
-             console.error("Failed to change a favourite shader pack", DD), LD(zD, !pD)
-           })).finally((() => {
-             rD.current.delete(zD)
-           }))
-         }
-       }
-     }
-   },
-   6590: (DD, zD, wD) => {
- ... (185 more removed lines; see GitHub link above)
+         var op;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+       })), (0, Ap.jsx)("div", {
+         className: "AuthCallback",
+         children: (0, Ap.jsx)(Op.c, {
+           showFace: !0,
+           loading: !0
```

#### 6. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L332-L439` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/128.js#L41) · [Before (L332-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/128.js#L332-L439)

```diff
-       }
-       return DD.listed || KD.push({
-         tone: "info",
-         text: sD("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), KD
-     }
- 
-     function ND(DD) {
-       return Math.max(1, Math.round(DD / 1024))
-     }
- 
-     function ZD(DD, zD, wD) {
-       return DD instanceof sD.c && DD.errorMessageForUser ? DD.errorMessageForUser : zD(wD)
-     }
-   },
- ... (92 more removed lines; see GitHub link above)
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/129.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/129.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15)

#### 1. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L4)

```diff
-   40991: (DD, zD, wD) => {
+   6690: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L6)

```diff
-       ShaderPackCategory: () => jD
+       default: () => Np
```

#### 3. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L8-L31` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L8-L10) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L8-L31)

```diff
-     var pD = wD(58),
-       sD = wD(1523),
-       KD = wD(1447),
-       rD = wD(1511),
-       LD = wD(1200),
-       cD = wD(103),
-       gD = wD(20),
-       RD = wD(1648),
-       AD = wD(6645),
-       UD = wD(323),
-       fD = wD(6691),
-       ID = wD(6682),
-       BD = wD(6693),
-       GD = wD(6590),
-       hD = wD(5021),
-       nD = wD(5070),
- ... (8 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(1049),
```

#### 4. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L33-L52` → after: `L12-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L12-L32) · [Before (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L33-L52)

```diff
-       XD = wD(5076),
-       VD = wD(1057),
-       PD = wD(6630),
-       CD = wD(1096);
-     const xD = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
-       wrongApiVersion: "shaderPack:statusWrongApiVersion",
-       checking: "shaderPack:statusChecking",
-       unchecked: "shaderPack:statusUnchecked",
-       noCompiler: "shaderPack:statusNoCompiler"
-     };
- ... (4 more removed lines; see GitHub link above)
+       xp = cp(322),
+       Lp = cp(6704),
+       Yp = cp(1060),
+       Dp = cp(1538),
+       Ap = cp(4653),
+       Pp = cp(1480),
+       Wp = cp(3224),
+       yp = cp(4656),
+       Up = cp(1692),
+       wp = cp(4648),
+       vp = cp(1141),
+       tp = cp(25),
+       Hp = cp(1520),
+       dp = cp(1211),
+       ep = cp(104),
+       jp = cp(1201),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L56-L60` → after: `L36-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L36-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L36-L108) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L56-L60)

```diff
-         stored: zD,
-         checking: wD,
-         webGpuUsable: pD,
-         changePending: sD,
-         compiler: KD,
+         pack: ip,
+         view: cp,
+         favourite: Op,
+         notice: op
+       } = pp;
+       const {
+         width: Ip,
+         height: xp
+       } = Lp.u.thumb, {
+         live: Ap
+       } = ip;
+       return (0, Mp.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, Mp.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, Mp.jsxs)(Dp.LinkPreserveSearch, {
+ ... (57 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L62-L82` → after: `L110-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L110-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L110-L122) · [Before (L62-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L62-L82)

```diff
-       } = DD;
-       const LD = function(DD, zD, wD, pD, sD) {
-           const KD = (0, fD.storedPackOutcome)(DD, sD);
-           return "none" === KD.kind ? "noCompiler" === KD.reason ? zD ? "checking" : "noCompiler" : "otherApiVersion" === KD.reason ? "wrongApiVersion" : "failed" : (0, OD.f)() ? "harnessBuild" : "blocked" === KD.kind ? (0, fD.shaderPackNeedsCheck)(DD, sD) ? zD ? "checking" : !1  … [truncated]
-         }(zD, wD, pD, sD, KD),
-         cD = "failed" === LD || "failedRecheck" === LD,
-         gD = cD || "wrongApiVersion" === LD || "noCompiler" === LD,
-         RD = "ready" === LD || "readyAfterReload" === LD ? zD.validation.offInStrict : [];
-       return (0, CD.jsxs)(CD.Fragment, {
-         children: [(0, CD.jsxs)("div", {
-           className: QD()("ShaderPackStatus", {
-             Ready: "ready" === LD,
-             Failed: gD
-           }),
-           children: ["ready" === LD && (0, CD.jsx)(VD.e, {
-             name: "circle-check"
- ... (5 more removed lines; see GitHub link above)
+       } = (0, jp.H)(), Yp = (0, Ep.i)(), Dp = Date.now(), Ap = null === ip ? 0 : "owned" === ip.kind ? ip.packs.length : ip.page.results.length;
+       return (0, Mp.jsxs)("div", {
+         className: Sp()("ShaderPackBrowseResults", {
+           Loading: cp && null !== ip
+         }),
+         children: [cp && null === ip && (0, Mp.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, Mp.jsx)(kp.c, {})
+         }), Op && (0, Mp.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [Lp("shaderPackListing:loadFailed"), (0, Mp.jsx)(Pp.f, {
+             onClick: op,
+             children: Lp("general:tryAgain")
```

#### 7. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L84-L97` → after: `L124-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L124-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L124-L152) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L84-L97)

```diff
-         }), cD && (0, CD.jsx)(PD.b, {
-           diagnostics: zD.validation.errors,
-           more: zD.validation.moreErrors,
-           t: rD
-         }), RD.length > 0 && (0, CD.jsxs)(CD.Fragment, {
-           children: [(0, CD.jsxs)("div", {
-             className: "ShaderPackStatus OffInStrict",
-             children: [(0, CD.jsx)(VD.e, {
-               name: "triangle-exclamation"
-             }), rD("shaderPack:offInStrict")]
-           }), (0, CD.jsx)(PD.b, {
-             diagnostics: RD,
-             t: rD
-           })]
+         }), "listing" === (null === ip || void 0 === ip ? void 0 : ip.kind) && Ap > 0 && (0, Mp.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: ip.page.results.map((pp => (0, Mp.jsx)(Cp, {
+             pack: {
+               packId: pp.packId,
+               name: pp.name,
+               live: pp
+             },
+             view: xp,
+             favourite: {
+               isFavourite: Yp.isFavourite(pp.packId),
+               onToggle: () => {
+                 Yp.toggle(pp.packId)
+               }
+             }
+           }, pp.packId)))
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L103-L105` → after: `L158-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L158-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L158-L168) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L103-L105)

```diff
-       let {
-         setApplySettingsCallback: zD
-       } = DD;
+       return "mine" === pp.section ? "shaderPackListing:noOwnPacks" : (0, Rp.r)(pp) ? "general:noResults" : "favourites" === pp.section ? "shaderPackListing:noFavourites" : "general:noResults"
+     }
+     var Qp = cp(6733);
+     const Jp = 24,
+       Bp = {
+         favourites: "general:favourites",
+         mine: "shaderPackListing:mine"
+       };
+ 
+     function Np() {
+       var pp, ip, cp, Ip;
```

#### 9. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L108-L124` → after: `L171-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L171-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L171-L186) · [Before (L108-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L108-L124)

```diff
-       } = (0, LD.E)(), [sD, rD] = (0, pD.useState)(null), [gD, RD] = (0, pD.useState)(null), [OD, ED] = (0, pD.useState)(null), [QD] = (0, pD.useState)(UD.i), [XD, VD] = (0, pD.useState)(!0), [PD, xD] = (0, pD.useState)(!1), {
-         loading: TD,
-         error: jD,
-         setError: SD,
-         onFiles: iD
-       } = (0, MD.f)((async DD => {
-         const zD = await (0, AD.loadPageShaderPackCompiler)();
-         if (!zD) return void SD(wD("shaderPack:compilerUnavailable"));
-         RD(zD);
-         const pD = (0, fD.toStoredShaderPack)(DD, await (0, ID.h)(zD, DD.files));
-         await (0, fD.saveShaderPack)(pD, zD) ? (rD(pD), lD(sD, pD, zD)) : SD(wD("shaderPack:saveFailed"))
-       }));
- 
-       function lD(DD, wD, pD) {
-         (function(DD, zD, wD, pD) {
-           return wD || JD(DD, pD) || JD(zD, pD)
- ... (1 more removed lines; see GitHub link above)
+       } = (0, jp.H)(), mp = (0, Dp.useNavigatePreserveSearch)(), qp = (0, op.r)(), {
+         userContext: Cp,
+         isUserContextUpdating: lp
+       } = (0, vp.b)(), [Np, Tp] = (0, Ep.h)(), [fp, bp] = (0, Ep.d)(), hp = (0, Op.useRef)(!1), [ap, np] = (0, Ap.o)(), Fp = (0, Rp.C)(ap), [gp, Gp] = (0, Op.useState)(null !== (pp = Fp.searchQuery) && void 0 !== pp ? pp : ""), rp = (0, Op.useRef)(null), {
+         searchQuery: Zp
+       } = Fp;
+       (0, Op.useEffect)((() => {
+         Gp(null !== Zp && void 0 !== Zp ? Zp : ""), rp.current && (rp.current.value = null !== Zp && void 0 !== Zp ? Zp : "")
+       }), [Zp]);
+       const [zp, sp] = (0, Op.useState)(null), [Kp, Vp] = (0, Op.useState)(!1), [ii, ci] = (0, Op.useState)(!1), [Oi, oi] = (0, Op.useState)(0), Ii = (0, Op.useRef)(0), Si = JSON.stringify(Fp), xi = (0, Rp.k)();
+ 
+       function Li() {
+         null !== xi ? (mp(xi), tp.c.set({
+           openEverythingMenuName: xp.n.SETTINGS,
+           openSettingsCategory: "Dy"
+         })) : mp("/")
```

#### 10. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L126-L140` → after: `L188-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L188-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L188-L205) · [Before (L126-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L126-L140)

```diff
-       return (0, pD.useEffect)((() => {
-         let DD = !1;
-         return async function() {
-           const zD = (0, cD.hasUsableWebGpuAdapter)(),
-             wD = await (0, BD.c)();
-           if (DD) return;
-           rD(wD), xD(!0), VD(!1);
-           const pD = null !== wD ? (0, AD.loadPageShaderPackCompiler)() : null,
-             sD = await zD;
-           if (DD) return;
-           ED(sD);
-           const KD = await pD;
-           if (!DD && (RD(KD), null !== wD && sD && null !== KD && (0, fD.shaderPackNeedsCheck)(wD, KD))) {
-             const zD = await (0, ID.d)(wD, KD);
-             DD || rD((DD => DD === wD ? zD : DD))
+ 
+       function Yi(pp) {
+         np((ip => {
+           (0, Rp.eb)(ip, {
+             ...Fp,
+             pageNumber: 1,
+             ...pp
+           })
+         }))
+       }
+ 
+       function Di() {
+         const pp = gp.trim() || null;
+         Yi({
+           searchQuery: pp,
+           ...null !== pp && !hp.current && (0, Rp.l)(Fp) && {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L142-L143` → after: `L207-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L207-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L207-L236) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L142-L143)

```diff
-         }().catch((zD => {
-           console.error("Failed to load the stored shader pack", zD), DD || SD(wD("shaderPack:unexpectedError"))
+         })
+       }(0, wp.e)(Li), (0, Ep.b)(), (0, Op.useEffect)((() => {
+         if (lp) return;
+         const pp = ++Ii.current,
+           ip = JSON.parse(Si);
+         Vp(!0), ci(!1), async function(pp) {
+           if ("mine" === pp.section) return {
+             kind: "owned",
+             packs: await Hp.b.getOwnedShaderPacks(Cp)
+           };
+           const ip = "favourites" === pp.section,
+             cp = ip && (0, Rp.l)(pp),
+             Op = await Hp.b.getShaderPacks(Cp, {
+               sort: ip ? Rp.d : pp.sort,
+               features: cp ? [] : pp.withFeatures,
+               withoutFeatures: cp ? [] : pp.withoutFeatures,
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L145-L153` → after: `L238-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L238-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L238-L401) · [Before (L145-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L145-L153)

```diff
-           DD || (VD(!1), xD(!1))
-         })), () => {
-           DD = !0
-         }
-       }), []), (0, CD.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, CD.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: wD("shaderPack:intro")
+           Ii.current === pp && Vp(!1)
+         }))
+       }), [Si, Cp, lp, Oi]);
+       const [Ai, Pi] = (0, Op.useState)(null), Wi = null !== (cp = null === (Ip = ("listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) ? zp.page.results : (null !== (ip = null === zp || void 0 === zp ? void 0 : zp.packs) && void 0 !== ip ? ip : []).flatMap((pp => pp.l … [truncated]
+       (0, Op.useEffect)((() => {
+         null !== Wi && Pi(Wi)
+       }), [Wi]);
+       const yi = "mine" === Fp.section,
+         Ui = (0, Rp.n)(Cp),
+         wi = pp => {
+           "explore" !== Fp.section && (pp.stopPropagation(), pp.preventDefault(), Yi({
+             section: "explore"
+           }))
+         };
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+ ... (148 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L155-L209` → after: `L403-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L403-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/129.js#L403-L425) · [Before (L155-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/129.js#L155-L209)

```diff
-           to: GD.S,
-           className: "ShaderPackBrowseLink",
-           children: (0, CD.jsx)(KD.o, {
-             className: "ShaderPackBrowseButton",
-             children: wD("shaderPackListing:browse")
-           })
-         }), !1 === OD && (0, CD.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: wD(QD ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== jD && (0, CD.jsxs)("div", {
-           className: "ShaderPackCategoryError",
-           children: [wD("general:error"), ": ", jD]
-         }), sD && (0, CD.jsxs)("div", {
-           className: "SettingBox ShaderPackSummary",
-           children: [(0, CD.jsxs)("div", {
-             className: "ShaderPackSummaryHeader",
- ... (39 more removed lines; see GitHub link above)
+           results: zp,
+           loading: Kp,
+           failed: ii,
+           onRetry: () => {
+             oi((pp => pp + 1))
+           },
+           view: Fp,
+           previewView: Np
+         }), "listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) && (0, Mp.jsx)(yp.d, {
+           className: "ShaderPackBrowsePagination",
+           page: zp.page.pageNumber,
+           totalPages: zp.page.totalPages,
+           onSetPage: pp => {
+             np((ip => {
+               (0, Ap.k)(ip, pp)
+             }))
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/130.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/130.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a)

#### 1. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 136, 137];
+ export const ids = [130];
```

#### 2. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L4-L5` → after: `L4-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L4-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L4-L161) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L4-L5)

```diff
-   40420: (DD, zD, wD) => {
-     wD.d(zD, {
+   6712: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => xp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(1201),
+       Sp = cp(1112);
+ 
+     function xp(pp) {
+       let {
+         item: ip,
+         className: cp
+       } = pp;
+       const {
+         t: Op
+ ... (142 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L7-L20` → after: `L163-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L163-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L163-L205) · [Before (L7-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L7-L20)

```diff
-       installListedShaderPack: () => RD
-     });
-     var pD = wD(6594),
-       sD = wD(5084),
-       KD = wD(1211),
-       rD = wD(6645),
-       LD = wD(5076),
-       cD = wD(6691),
-       gD = wD(6682);
-     async function RD(DD) {
-       const zD = await (0, rD.loadPageShaderPackCompiler)();
-       if (null === zD) return {
-         kind: "failed",
-         reason: "compiler"
+       eb: () => Cp,
+       g: () => Pp,
+       k: () => Ap,
+       l: () => Xp,
+       n: () => Wp,
+       r: () => lp,
+       s: () => bp,
+       w: () => yp,
+       z: () => vp
+     });
+     var Op = cp(6704),
+       op = cp(156),
+       Ip = cp(4653);
+     const Sp = "/shader-packs",
+       xp = `${Sp}/publish`;
+ 
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L22-L25` → after: `L207-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L207-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L207-L225) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L22-L25)

```diff
-       const wD = await AD(DD, zD);
-       return "failed" === wD.kind ? wD : await (0, cD.saveShaderPack)(wD.stored, zD) ? ((0, cD.markShaderPackChangePending)(), wD) : {
-         kind: "failed",
-         reason: "save"
+ 
+     function wp(pp, ip) {
+       return pp.withFeatures.includes(ip) ? "with" : pp.withoutFeatures.includes(ip) ? "without" : null
+     }
+ 
+     function vp(pp) {
+       return null === pp ? "with" : "with" === pp ? "without" : null
+     }
+ 
+     function tp(pp) {
+       return "with" === pp ? "only" : null === pp ? "include" : void 0
+     }
+ 
+     function Hp(pp, ip) {
+       const cp = wp(pp, ip),
+         Op = pp => pp.filter((pp => pp !== ip));
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L28-L38` → after: `L228-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L228-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L228-L325) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L28-L38)

```diff
-     async function AD(DD, zD) {
-       const wD = await async function(DD) {
-         let {
-           packId: zD,
-           sourceHash: wD
-         } = DD;
-         try {
-           const DD = await fetch(`${KD.clientSideServerUrls.s3Url}/${(0,pD.M)(zD,wD)}`, {
-             headers: {
-               Accept: "application/json"
-             }
+     const dp = "section",
+       ep = "sort",
+       jp = "filters",
+       kp = "q",
+       mp = "banned",
+       Rp = "popular",
+       qp = "strict";
+ 
+     function Mp(pp) {
+       var ip, cp, op;
+       const Sp = pp.get(dp),
+         xp = (null !== (ip = pp.get(jp)) && void 0 !== ip ? ip : qp).split(","),
+         Lp = pp.get(mp);
+       return {
+         section: "favourites" === Sp || "mine" === Sp ? Sp : "explore",
+         sort: null !== (cp = Op.A.find((ip => ip === pp.get(ep)))) && void 0 !== cp ? cp : Rp,
+ ... (82 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L40-L79` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L327-L330) · [Before (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L40-L79)

```diff
-           if (!DD.ok) return console.error(`Failed to download shader pack ${zD} (${DD.status})`), null;
-           const sD = await DD.json();
-           return "object" !== typeof sD || null === sD ? (console.error(`Shader pack ${zD}'s source isn't an object`), null) : sD
-         } catch (sD) {
-           return console.error(`Failed to download shader pack ${zD}`, sD), null
-         }
-       }(DD);
-       if (null === wD) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, LD.h)(wD.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const rD = (0, sD.v)(wD.files);
- ... (24 more removed lines; see GitHub link above)
+         Ip.push({
+           tone: "info",
+           text: xp,
+           detail: null
```

#### 7. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L84-L177` → after: `L348-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L348-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L348-L360) · [Before (L84-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L84-L177)

```diff
-   41198: (DD, zD, wD) => {
-     wD.d(zD, {
-       followListingUpdates: () => UD
-     });
-     var pD = wD(212),
-       sD = wD(20),
-       KD = wD(1495),
-       rD = wD(1130),
-       LD = wD(6645),
-       cD = wD(5076),
-       gD = wD(40420),
-       RD = wD(6691);
-     const AD = ["apiVersion", "invalid", "errors"];
-     async function UD(DD, zD) {
-       const wD = await rD.userContextManager.getCurrentUserContext(),
-         UD = await KD.d.getShaderPackVersions(wD, [zD.packId]),
- ... (78 more removed lines; see GitHub link above)
+   6724: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
+     });
+     var Op = cp(62),
+       op = cp(44);
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
+       return [Ip, ip => {
+         op.h.setItem(pp, ip), Sp(ip)
+       }]
```

#### 8. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L180-L341` → after: `L363-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L363-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L363-L373) · [Before (L180-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L180-L341)

```diff
-   6691: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
- ... (146 more removed lines; see GitHub link above)
+   6704: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => Ip,
+       D: () => xp,
+       G: () => Sp,
+       J: () => Op,
+       M: () => Pp,
+       P: () => Dp,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
```

#### 9. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L435-L436` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L376) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L435-L436)

```diff
-       i: () => fD,
-       k: () => MD,
+       j: () => Up,
```

#### 10. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L438-L440` → after: `L378-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L378-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L378-L382) · [Before (L438-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L438-L440)

```diff
-       p: () => cD,
-       s: () => sD,
-       w: () => JD
+       n: () => Hp,
+       r: () => jp,
+       t: () => Lp,
+       u: () => op,
+       x: () => ep
```

#### 11. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L478` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L420) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L478)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
```

#### 12. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L489` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L431) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L489)

```diff
-       return `shaderPacks/${DD}/${zD}.json`
+       return `shaderPacks/${pp}/${ip}.json`
```

#### 13. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L493` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L435) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L493)

```diff
-       return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
+       return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
```

#### 14. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L497` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/130.js#L439) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/130.js#L497)

```diff
-       return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
+       return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/131.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/131.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430)

#### 1. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L4-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L4-L237) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L4)

```diff
-   41654: (DD, zD, wD) => {
+   41287: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ShaderPackCategory: () => lp
+     });
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(1480),
+       Sp = cp(1538),
+       xp = cp(1201),
+       Lp = cp(104),
+       Yp = cp(25),
+       Dp = cp(1650),
+       Ap = cp(6758),
+       Pp = cp(314),
+       Wp = cp(6798),
+       yp = cp(6792),
+ ... (218 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L6` → after: `L239-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L239-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L239-L263) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L6)

```diff
-       startHarnessShaderPack: () => AD
+       C: () => Mp,
+       E: () => Dp,
+       H: () => Ep,
+       L: () => Up,
+       O: () => fp,
+       P: () => Np,
+       R: () => Sp,
+       S: () => Tp,
+       V: () => Lp,
+       X: () => xp,
+       Z: () => Jp,
+       ab: () => Bp,
+       b: () => tp,
+       bb: () => Hp,
+       d: () => Rp,
+       e: () => wp,
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L8-L16` → after: `L265-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L265-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L265-L400) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L8-L16)

```diff
-     var pD = wD(6594),
-       sD = wD(5084),
-       KD = wD(6678),
-       rD = wD(6645),
-       LD = wD(5076),
-       cD = wD(39186),
-       gD = wD(6664),
-       RD = wD(6682);
-     async function AD(DD, zD) {
+     var Op = cp(6704),
+       op = cp(156),
+       Ip = cp(4653);
+     const Sp = "/shader-packs",
+       xp = `${Sp}/publish`;
+ 
+     function Lp(pp) {
+       return `${Sp}/${encodeURIComponent(pp)}`
+     }
+     let Yp = null;
+ 
+     function Dp(pp) {
+       Yp = pp
+     }
+ 
+     function Ap() {
+ ... (120 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L18-L78` → after: `L402-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L402-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L402-L423) · [Before (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L18-L78)

```diff
-         stored: wD,
-         info: AD
-       } = await async function(DD, zD) {
-         const wD = await async function(DD) {
-           const zD = await fetch(DD);
-           if (!zD.ok) throw new Error(`Couldn't fetch the shader pack at ${DD}: HTTP ${zD.status}`);
-           const wD = await zD.json();
-           if (!(0, pD.i)(wD)) throw new Error(`The shader pack at ${DD} isn't a shader pack listing source`);
-           return wD
-         }(DD);
-         if (!(0, LD.h)(wD.apiVersion)) throw new Error(`The pack is for shader pack API version ${wD.apiVersion}; this build runs version ${LD.b}`);
-         const cD = {
-             manifest: {
-               apiVersion: wD.apiVersion,
-               name: wD.name,
-               author: wD.author,
- ... (45 more removed lines; see GitHub link above)
+         pending: Sp
+       } = pp;
+       if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
+           tone: "warning",
+           text: op("shaderPackListing:ownerBroken"),
+           detail: pp.brokenError
+         }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
+         tone: "warning",
+         text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, Op.n)(Sp.error) ? null : Sp.error
+       });
+       else if (Sp) {
+         const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
+           Op = String(Math.ceil(pp / 6e4)),
+           xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: Op
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L80-L86` → after: `L425-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L425-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L425-L437) · [Before (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L80-L86)

```diff
-       return AD.runsInMode ? ((0, cD.setHarnessUrlShaderPack)(wD, zD), {
-         info: AD,
-         problem: null
-       }) : {
-         info: AD,
-         problem: `The shader pack runs nothing in ${zD} mode`
-       }
+       return pp.listed || Ip.push({
+         tone: "info",
+         text: op("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), Ip
+     }
+ 
+     function fp(pp) {
+       return Math.max(1, Math.round(pp / 1024))
+     }
+ 
+     function bp(pp, ip, cp) {
+       return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
```

#### 6. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L89-L305` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L440) · [Before (L89-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L89-L305)

```diff
-   6691: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
- ... (201 more removed lines; see GitHub link above)
+   6704: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L308` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L443) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L308)

```diff
-       C: () => LD,
+       D: () => xp,
```

#### 8. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L310-L312` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L445) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L310-L312)

```diff
-       H: () => pD,
-       I: () => UD,
-       K: () => RD,
+       J: () => Op,
```

#### 9. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L314-L315` → after: `L447-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L447-L450) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L314-L315)

```diff
-       N: () => AD,
-       R: () => gD,
+       P: () => Dp,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
```

#### 10. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L319-L320` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L453) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L319-L320)

```diff
-       i: () => fD,
-       k: () => MD,
+       j: () => Up,
```

#### 11. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L322-L324` → after: `L455-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L455-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L455-L459) · [Before (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L322-L324)

```diff
-       p: () => cD,
-       s: () => sD,
-       w: () => JD
+       n: () => Hp,
+       r: () => jp,
+       t: () => Lp,
+       u: () => op,
+       x: () => ep
```

#### 12. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L362` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L497) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L362)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
```

#### 13. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L373` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L508) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L373)

```diff
-       return `shaderPacks/${DD}/${zD}.json`
+       return `shaderPacks/${pp}/${ip}.json`
```

#### 14. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L377` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L512) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L377)

```diff
-       return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
+       return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
```

#### 15. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L381` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/131.js#L516) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/131.js#L381)

```diff
-       return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
+       return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/132.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/132.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f)

#### 1. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L2)

```diff
- export const ids = [132, 136, 137];
+ export const ids = [132, 138, 139];
```

#### 2. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L4-L52` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L4) · [Before (L4-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L4-L52)

```diff
-   6630: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(5070),
-       sD = wD(1096);
-     const KD = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
- 
-     function rD(DD) {
-       let {
- ... (33 more removed lines; see GitHub link above)
+   40674: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L55` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L7) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L55)

```diff
-       f: () => QD
+       installListedShaderPack: () => Dp
```

#### 4. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L57-L69` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L9-L15) · [Before (L57-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L57-L69)

```diff
-     var pD = wD(58),
-       sD = wD(1044),
-       KD = wD.n(sD),
-       rD = wD(4974),
-       LD = wD(1346),
-       cD = wD(1057),
-       gD = wD(1200),
-       RD = wD(5084),
-       AD = wD(5076),
-       UD = wD(3150);
-     const fD = 33554432,
-       ID = 1024,
-       BD = 65536;
+     var Op = cp(6704),
+       op = cp(5167),
+       Ip = cp(1211),
+       Sp = cp(6758),
+       xp = cp(5159),
+       Lp = cp(6798),
+       Yp = cp(6792);
```

#### 5. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L71-L81` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L17-L25) · [Before (L71-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L71-L81)

```diff
-       const zD = (0, UD.n)(DD);
-       if (zD) {
-         if (zD.size > fD) throw new UD.c("shaderPack:loadZipTooBig", {
-           megabytes: String(fD / 1048576)
-         });
-         return async function(DD) {
-           return hD((0, UD.j)(DD, ID).map((zD => ({
-             path: zD.path,
-             read: wD => (0, UD.m)(DD, zD, wD)
-           }))))
-         }(new Uint8Array(await zD.arrayBuffer()))
+       const ip = await (0, Sp.loadPageShaderPackCompiler)();
+       if (null === ip) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const cp = await Ap(pp, ip);
+       return "failed" === cp.kind ? cp : await (0, Lp.saveShaderPack)(cp.stored, ip) ? ((0, Lp.markShaderPackChangePending)(), cp) : {
+         kind: "failed",
+         reason: "save"
```

#### 6. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L83-L129` → after: `L27-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L27-L38) · [Before (L83-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L83-L129)

```diff
-       return hD(DD.map((DD => ({
-         path: (0, UD.k)(DD),
-         read: zD => async function(DD, zD) {
-           return DD.size > zD ? null : new Uint8Array(await DD.arrayBuffer())
-         }(DD, zD)
-       }))))
-     }
-     async function hD(DD) {
-       const zD = function(DD) {
-           const zD = DD.length > 0 ? DD[0].path.indexOf("/") : -1;
-           if (-1 === zD) return DD;
-           const wD = DD[0].path.slice(0, zD + 1);
-           if (!DD.every((DD => DD.path.startsWith(wD)))) return DD;
-           return DD.map((DD => ({
-             ...DD,
-             path: DD.path.slice(wD.length)
- ... (31 more removed lines; see GitHub link above)
+     }
+     async function Ap(pp, ip) {
+       const cp = await async function(pp) {
+         let {
+           packId: ip,
+           sourceHash: cp
+         } = pp;
+         try {
+           const pp = await fetch(`${Ip.clientSideServerUrls.s3Url}/${(0,Op.S)(ip,cp)}`, {
+             headers: {
+               Accept: "application/json"
+             }
```

#### 7. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L131-L165` → after: `L40-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L40-L79) · [Before (L131-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L131-L165)

```diff
-           if (!(0, AD.h)(wD)) throw new UD.c("shaderPack:loadWrongApiVersion", {
-             packVersion: JSON.stringify(wD),
-             version: String(AD.b)
-           });
-           if ("string" !== typeof pD || "" === pD.trim()) throw new UD.c("shaderPack:loadNoName");
-           if (void 0 !== sD && null !== sD && "string" !== typeof sD) throw new UD.c("shaderPack:loadAuthorNotString");
-           if (void 0 !== KD && null !== KD && "string" !== typeof KD) throw new UD.c("shaderPack:loadDescriptionNotString");
-           if (void 0 !== rD && "boolean" !== typeof rD) throw new UD.c("shaderPack:loadKeepCircleShadowsNotBoolean");
-           return {
-             apiVersion: wD,
-             name: pD,
-             author: "string" === typeof sD ? sD : null,
-             description: "string" === typeof KD && "" !== KD.trim() ? KD : null,
-             keepCircleShadows: !0 === rD
-           }
-         }(nD(sD, pD.path)),
- ... (19 more removed lines; see GitHub link above)
+           if (!pp.ok) return console.error(`Failed to download shader pack ${ip} (${pp.status})`), null;
+           const op = await pp.json();
+           return "object" !== typeof op || null === op ? (console.error(`Shader pack ${ip}'s source isn't an object`), null) : op
+         } catch (op) {
+           return console.error(`Failed to download shader pack ${ip}`, op), null
+         }
+       }(pp);
+       if (null === cp) return {
+         kind: "failed",
+         reason: "download"
+       };
+       if (!(0, xp.k)(cp.apiVersion)) return {
+         kind: "failed",
+         reason: "apiVersion"
+       };
+       const Sp = (0, op.s)(cp.files);
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L168-L257` → after: `L82-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L82-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L82-L173) · [Before (L168-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L168-L257)

```diff
-       return {
-         manifest: KD,
-         files: cD
-       }
-     }
- 
-     function nD(DD, zD) {
-       try {
-         return new TextDecoder("utf-8", {
-           fatal: !0
-         }).decode(DD)
-       } catch (wD) {
-         throw new UD.c("shaderPack:loadNotUtf8", {
-           path: zD
-         }, {
-           cause: wD
- ... (74 more removed lines; see GitHub link above)
+     }
+   },
+   41532: (pp, ip, cp) => {
+     cp.d(ip, {
+       followListingUpdates: () => Pp
+     });
+     var Op = cp(209),
+       op = cp(25),
+       Ip = cp(1520),
+       Sp = cp(1149),
+       xp = cp(6758),
+       Lp = cp(5159),
+       Yp = cp(40674),
+       Dp = cp(6798);
+     const Ap = ["apiVersion", "invalid", "errors"];
+     async function Pp(pp, ip) {
+ ... (76 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L260` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L176-L177) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L260)

```diff
-       }
+       }(pp, ip, Wp, Up);
+       return void 0 === wp || (await (0, Dp.replaceShaderPack)(pp, wp, Up) ? (null !== wp && wp.files === pp.files || (0, Dp.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
```

#### 10. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L263` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L180) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L263)

```diff
-   6691: (DD, zD, wD) => {
+   6798: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L280-L285` → after: `L197-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L197-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L197-L202) · [Before (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L280-L285)

```diff
-     var pD = wD(5084),
-       sD = wD(5076),
-       KD = wD(35),
-       rD = wD(3462),
-       LD = wD(6693),
-       cD = wD(6664);
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
```

#### 12. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L292` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L209) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L292)

```diff
-         files: (0, pD.z)(DD.files),
+         files: (0, Op.v)(pp.files),
```

#### 13. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L318` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L235) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L318)

```diff
-       return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
+       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
```

#### 14. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L321` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L238) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L321)

```diff
-       const wD = await KD.g.setItem(LD.b, DD);
+       const cp = await Ip.g.setItem(xp.e, pp);
```

#### 15. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L325` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L242) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L325)

```diff
-       await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
```

#### 16. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L362` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L279) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L362)

```diff
-       KD.k.setItem(gD, performance.timeOrigin)
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 17. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L366-L374` → after: `L283-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L283-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L283-L291) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L366-L374)

```diff
-       return KD.k.getItem(gD) === performance.timeOrigin
-     }
- 
-     function XD(DD) {
-       return !(0, sD.h)(DD.manifest.apiVersion)
-     }
- 
-     function VD(DD) {
-       return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
+       return Ip.l.getItem(Yp) === performance.timeOrigin
+     }
+ 
+     function mp(pp) {
+       return !(0, op.k)(pp.manifest.apiVersion)
+     }
+ 
+     function Rp(pp) {
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
```

#### 18. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L384` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L301) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L384)

```diff
-         TD(await (0, LD.c)(!0), DD)
+         Ep(await (0, xp.f)(!0), pp)
```

#### 19. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L390` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L307) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L390)

```diff
-         KD.h.removeItem(rD.e)
+         Ip.h.removeItem(Sp.d)
```

#### 20. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L395` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L312) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L395)

```diff
-       OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```

#### 21. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L398` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L315) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L398)

```diff
-   6664: (DD, zD, wD) => {
+   6772: (pp, ip, cp) => {
```

#### 22. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L403` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L320) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L403)

```diff
-     var pD = wD(5084);
+     var Op = cp(5167);
```

#### 23. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L408` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L325) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L408)

```diff
-       return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 24. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L414` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L331) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L414)

```diff
-         return sD ??= (0, pD.m)(wD, KD, zD), sD
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 25. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L423` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L340) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L423)

```diff
-   6682: (DD, zD, wD) => {
+   6792: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L425` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L342) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L425)

```diff
-       d: () => cD,
+       e: () => Lp,
```

#### 27. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L428-L430` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L345-L347) · [Before (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L428-L430)

```diff
-     var pD = wD(6691),
-       sD = wD(6664),
-       KD = wD(119);
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
```

#### 28. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L434-L435` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L351-L352) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L434-L435)

```diff
-       let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
-       const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
```

#### 29. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L440` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L357) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L440)

```diff
-           const zD = await (0, KD.x)(DD);
+           const ip = await (0, Ip.s)(pp);
```

#### 30. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L471` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L388) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L471)

```diff
-         return cD ? null : gD(DD, DD.RpD(zD.flat()), rD.offInStrict)
+         return Lp ? null : Yp(pp, pp.eOp(ip.flat()), Sp.offInStrict)
```

#### 31. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L486` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/132.js#L403) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/132.js#L486)

```diff
-           validation: KD ? sD : {
+           validation: Ip ? op : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/133.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/133.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934)

#### 1. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L4` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L4-L89) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L4)

```diff
-   6645: (DD, zD, wD) => {
+   42003: (pp, ip, cp) => {
+     cp.d(ip, {
+       startHarnessShaderPack: () => Ap
+     });
+     var Op = cp(6704),
+       op = cp(5167),
+       Ip = cp(6788),
+       Sp = cp(6758),
+       xp = cp(5159),
+       Lp = cp(39396),
+       Yp = cp(6772),
+       Dp = cp(6792);
+     async function Ap(pp, ip) {
+       const {
+         stored: cp,
+         info: Ap
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L6` → after: `L91-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L91-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L91-L104) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L6)

```diff
-       loadPageShaderPackCompiler: () => Uz
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+       toStoredShaderPack: () => Ap
```

#### 3. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L8-L122` → after: `L106-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L106-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L106-L151) · [Before (L8-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L8-L122)

```diff
-     var pD = {};
-     wD.r(pD), wD.d(pD, {
-       EsD: () => sD,
-       LDD: () => KD,
-       default: () => oD,
-       QsD: () => rD,
-       XsD: () => LD,
-       initSync: () => eD,
-       fA: () => cD,
-       RpD: () => gD,
-       VsD: () => RD,
-       CsD: () => AD,
-       Kl: () => UD,
-       xsD: () => fD,
-       qS: () => ID,
-       TsD: () => BD
- ... (99 more removed lines; see GitHub link above)
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
+     const Yp = "shaderPackChangePending";
+     let Dp = null;
+ 
+     function Ap(pp, ip, cp) {
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
+ ... (30 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L126-L128` → after: `L155-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L155-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L155-L184) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L126-L128)

```diff
-       const DD = yD.KYtr();
-       var zD = MD(DD[0], DD[1]);
-       return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
+       return yp(tp)
+     }
+ 
+     function dp(pp, ip) {
+       return "active" === ep(pp, ip).kind
+     }
+ 
+     function ep(pp, ip) {
+       var cp;
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L132-L134` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L188) · [Before (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L132-L134)

```diff
-       const DD = yD.jV3D();
-       var zD = MD(DD[0], DD[1]);
-       return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 6. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L138-L164` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L192-L211) · [Before (L138-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L138-L164)

```diff
-       yD.fnK7()
-     }
- 
-     function gD(DD, zD, wD, pD, sD) {
-       let KD, rD;
-       try {
-         const gD = jD(DD, yD.lieu),
-           RD = kD,
-           AD = bD(zD, yD.lieu),
-           UD = kD,
-           fD = jD(wD, yD.lieu),
-           ID = kD,
-           BD = bD(pD, yD.lieu),
-           GD = kD,
-           hD = function(DD, zD) {
-             const wD = zD(1 * DD.length, 1) >>> 0;
- ... (11 more removed lines; see GitHub link above)
+       return Ip.l.getItem(Yp) === performance.timeOrigin
+     }
+ 
+     function mp(pp) {
+       return !(0, op.k)(pp.manifest.apiVersion)
+     }
+ 
+     function Rp(pp) {
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
+     }
+ 
+     function qp(pp, ip) {
+       var cp;
+       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
+     }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L168-L593` → after: `L215-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L215-L221) · [Before (L168-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L168-L593)

```diff
-       let DD, zD;
-       try {
-         const wD = yD.pi1s();
-         return DD = wD[0], zD = wD[1], QD(wD[0], wD[1])
-       } finally {
-         yD.yQTQ(DD, zD, 1)
-       }
-     }
- 
-     function AD(DD) {
-       let zD, wD;
-       try {
-         const KD = yD.F6Kj(DD);
-         var pD = KD[0],
-           sD = KD[1];
-         if (KD[3]) throw pD = 0, sD = 0, dD(KD[2]);
- ... (410 more removed lines; see GitHub link above)
+       return yp((async () => {
+         Ip.h.removeItem(Sp.d)
+       }))
+     }
+ 
+     function Ep(pp, ip) {
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```

#### 8. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L596-L599` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L224) · [Before (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L596-L599)

```diff
-   6659: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/bloxd_wasm_shader_pack_bg.bccfa67f1d2e1d222959.wasm"
-   },
-   6653: (DD, zD, wD) => {
+   6792: (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L636-L637` → after: `L229-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L229-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L229-L341) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L636-L637)

```diff
-     var pD = wD(6678);
-     const sD = 6,
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
+     const Sp = 100;
+     async function xp(pp, ip) {
+       var cp;
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
+       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
+       const xp = await async function(pp) {
+         if (!pp) return null;
+         try {
+           const ip = await (0, Ip.s)(pp);
+           return ip ? await ip.requestDevice() : null
+         } catch (ip) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
+ ... (97 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L645-L752` → after: `L344-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L344-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/133.js#L344-L381) · [Before (L645-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/133.js#L645-L752)

```diff
-       UD = 64,
-       fD = 128,
-       ID = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function BD(DD) {
-       if (!DD) return 0;
-       const zD = ID.indexOf(DD);
-       if (zD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
-       return zD
-     }
- 
-     function GD(DD) {
-       if (0 === DD) return null;
-       const zD = ID[DD];
-       if (void 0 === zD) throw new Error(`${DD} is not a shader pack hook function id`);
-       return zD
- ... (92 more removed lines; see GitHub link above)
+       Lp = 300;
+ 
+     function Yp(pp, ip) {
+       return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Dp = 64,
+       Ap = 512,
+       Pp = 18e5;
+ 
+     function Wp(pp) {
+       const ip = pp,
+         cp = null === ip || void 0 === ip ? void 0 : ip.files;
+       return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof … [truncated]
+     }
+     const yp = "Bloxdhub",
+       Up = "https://bloxdhub.com/shaders";
+ ... (22 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/134.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/134.js` (82 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789)

#### 1. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L2)

```diff
- export const ids = [134];
+ export const ids = [134, 196];
```

#### 2. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L4)

```diff
-   38736: (DD, zD, wD) => {
+   34434: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L6-L7` → after: `L6-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L6-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L6-L57) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L6-L7)

```diff
-       b: () => cD,
-       f: () => AD,
+       e: () => Ip
+     });
+     var Op = cp(337),
+       op = cp(34438);
+ 
+     function Ip(pp, ip, cp) {
+       const Ip = Object.entries(ip).sort(((pp, ip) => ip[1] - pp[1])),
+         Sp = (0, Op.sb)(pp);
+       Sp.push(pp ? "\n\n" : "\n");
+       for (const [op, yp] of Ip) {
+         var xp, Lp, Yp;
+         const pp = null !== (xp = null === cp || void 0 === cp || null === (Lp = cp[op]) || void 0 === Lp ? void 0 : Lp.icon) && void 0 !== xp ? xp : `${op} Enchantment`;
+         Sp.push({
+           icon: pp,
+           style: {
+             fontSize: "1.5rem"
+ ... (36 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L12` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L61-L64) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L12)

```diff
-       p: () => fD
+       q: () => Dp,
+       s: () => Pp,
+       w: () => Up,
+       x: () => Ap
```

#### 5. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L14-L35` → after: `L66-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L66-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L66-L70) · [Before (L14-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L14-L35)

```diff
-     var pD = wD(330),
-       sD = wD(1727);
-     const KD = "A valid external Instance reference no longer exists.",
-       rD = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       LD = [
-         [1e3, "lt1s"],
-         [2e3, "lt2s"],
-         [5e3, "lt5s"],
-         [1e4, "lt10s"],
-         [3e4, "lt30s"],
- ... (6 more removed lines; see GitHub link above)
+     var Op = cp(322),
+       op = cp(640),
+       Ip = cp(337),
+       Sp = cp(4326),
+       xp = cp(34434);
```

#### 6. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L38-L42` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L73-L79) · [Before (L38-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L38-L42)

```diff
-       return DD ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(DD) {
-         var zD;
-         const wD = null !== (zD = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(DD)) && void 0 !== zD ? zD : /failed with ([A-Z][A-Z0-9_]+)/.exec(DD);
-         return wD ? wD[1] : DD.includes(KD) ? "gpu_process_lost" : "other"
-       }(zD)
+       var cp;
+       let {
+         player: Op,
+         chestOrCreative: op
+       } = pp;
+       var Ip;
+       return ip < Op.length ? null !== (Ip = Op[ip]) && void 0 !== Ip ? Ip : null : null !== (cp = op[ip - Op.length]) && void 0 !== cp ? cp : null
```

#### 7. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L46` → after: `L83-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L83-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L83-L88) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L46)

```diff
-       return `${(null===DD||void 0===DD?void 0:DD.vendor)||"unknown vendor"} ${(null===DD||void 0===DD?void 0:DD.architecture)||"unknown architecture"}`
+       var ip;
+       return null !== (ip = pp.amount) && void 0 !== ip ? ip : 0
+     }
+ 
+     function Dp(pp) {
+       return 0 === pp.button || void 0 === pp.button
```

#### 8. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L50` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L92) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L50)

```diff
-       return GD(DD)[1]
+       return !!pp.shiftKey
```

#### 9. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L54` → after: `L96-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L96-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L96-L104) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L54)

```diff
-       return GD(DD)[2]
+       return "touches" in pp || "touch" === pp.pointerType || "pen" === pp.pointerType
+     }
+     const Wp = new Set,
+       yp = 50;
+ 
+     function Up(pp, ip) {
+       var cp;
+       const Op = null === (cp = pp[ip]) || void 0 === cp ? void 0 : cp.displayName;
+       return (0, op.G)(Op) ? "string" !== typeof ip ? "" : (!Wp.has(ip) && Wp.size < yp && (Wp.add(ip), console.warn(`No item called "${ip}", so its hover shows the name as given`)), ip) : Op
```

#### 10. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L58-L61` → after: `L108-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L108-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L108-L319) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L58-L61)

```diff
-       const sD = (0, pD.e)(),
-         KD = null !== sD && sD >= zD,
-         rD = document.hidden ? "hidden" : KD ? "shown" : "visible",
-         LD = KD ? wD - sD : null;
+       var Lp, Yp, Dp, Ap, Pp, Wp, yp, wp, vp, tp, Hp, dp, ep, jp;
+       const kp = pp.attributes,
+         mp = null !== (Lp = null === (Yp = ip[pp.name]) || void 0 === Yp ? void 0 : Yp.rootName) && void 0 !== Lp ? Lp : pp.name,
+         Rp = null !== (Dp = null !== (Ap = kp.customDisplayName) && void 0 !== Ap ? Ap : null === (Pp = ip[pp.name]) || void 0 === Pp ? void 0 : Pp.displayName) && void 0 !== Dp ? Dp : Up(ip, mp);
+       let qp = Rp;
+       const Mp = null === (Wp = kp.customAttributes) || void 0 === Wp ? void 0 : Wp.enchantmentTier;
+       Mp && (qp = (0, Ip.sb)(Rp, {
+         colour: Ip.lb[Mp]
+       }));
+       const Cp = null !== (yp = null !== (wp = null !== (vp = function(pp, ip) {
+         var cp;
+         if (void 0 === pp || null !== (cp = ip.customAttributes) && void 0 !== cp && cp.author) return pp;
+         const op = (0, Op.nc)(pp);
+         return op.every((pp => "string" === typeof pp)) ? pp : op.map((pp => "string" === typeof pp ? pp : {
+           icon: pp.icon,
+           style: {
+ ... (196 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L63-L64` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L321-L323) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L63-L64)

```diff
-         page: null === LD ? rD : `${rD}${AD(LD)}`,
-         code: `${DD}_${null===LD?rD:`${rD}_${UD(LD)}`}_${ID(wD)}`
+         name: qp,
+         desc: Ep,
+         fontStyle: null !== (jp = kp.customAttributes) && void 0 !== jp && jp.author ? "italic" : "normal"
```

#### 12. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L69-L71` → after: `L343-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L343-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L343-L352) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L69-L71)

```diff
-       if ((0, sD.e)()) return "ad_open";
-       const zD = (0, sD.c)();
-       return null === zD ? "ad_none" : `ad_${UD(DD-zD.endedAt)}_${zD.pageHid?"h":"v"}`
+       let ip;
+       if ("number" === typeof pp) {
+         const cp = document.querySelector(`[data-inven-idx="${pp}"]`);
+         if (!cp) return null;
+         ip = cp.getBoundingClientRect()
+       } else ip = pp.getBoundingClientRect();
+       return {
+         x: ip.left + ip.width / 2,
+         y: ip.top + ip.height / 2
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L75` → after: `L368-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L368-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L368-L392) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L75)

```diff
-       return hD(LD, DD)[1]
+       let {
+         slotsLeft: ip,
+         slotsRight: cp,
+         width: Op,
+         height: op,
+         zoneRight: Ip,
+         rowTop: Sp,
+         besideBottom: Yp,
+         obstacles: Dp
+       } = pp;
+       const Ap = Math.max(0, Math.floor(cp - ip - Op)),
+         Pp = null === Ip ? 0 : Math.min(Ap, Math.max(0, Math.ceil(Ip + xp - ip))),
+         Wp = ip + Pp - xp,
+         yp = ip + Pp + Op + xp,
+         Up = Dp.filter((pp => pp.left < yp && pp.right > Wp));
+       let wp = Yp;
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L79` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L396) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L79)

```diff
-       return hD(rD, DD)
+       return Array.from(pp.children).filter((pp => !pp.classList.contains("HotBarRow")))
```

#### 15. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L82` → after: `L399-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L399-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L399-L413) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L82)

```diff
-     function hD(DD, zD) {
+     function Ap(pp) {
+       return function(pp) {
+         const ip = [],
+           cp = (pp, Op) => {
+             const op = pp.getBoundingClientRect();
+             if (op.width > 0 && op.height > 0) ip.push(pp);
+             else if (Op < 2)
+               for (const ip of Array.from(pp.children)) cp(ip, Op + 1)
+           };
+         for (const Op of pp) cp(Op, 0);
+         return ip
+       }(Dp(pp).flatMap((pp => pp.classList.contains("AuraBarWrapper") ? [] : pp.classList.contains("BottomScreenStatBarList") ? Array.from(pp.children) : [pp])))
+     }
+ 
+     function Pp(pp) {
```

#### 16. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L84-L87` → after: `L415-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L415-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L415-L418) · [Before (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L84-L87)

```diff
-       return null !== (wD = DD.find((DD => {
-         let [wD] = DD;
-         return zD < wD
-       }))) && void 0 !== wD ? wD : DD[DD.length - 1]
+       const cp = pp.getBoundingClientRect();
+       if (0 === cp.width) return null;
+       const Op = null === (ip = pp.parentElement) || void 0 === ip ? void 0 : ip.getBoundingClientRect();
+       return Op && Op.width > 0 ? Math.min(cp.right, Op.left + Op.width * Wp) : cp.right
```

#### 17. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L89-L106` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L420-L423) · [Before (L89-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L89-L106)

```diff
-   },
-   39038: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => cD
-     });
-     var pD = wD(8901),
-       sD = wD(36486),
-       KD = wD(39042);
-     const rD = {
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
-         socket: "socket_timeout"
-       },
-       LD = {
-         seat: "seat_lost",
-         socket_unopened: "socket_unopened",
- ... (2 more removed lines; see GitHub link above)
+     const Wp = .35,
+       yp = new WeakMap,
+       Up = ".BottomScreenMessage, [role='status']",
+       wp = new WeakMap;
```

#### 18. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L108-L121` → after: `L425-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L425-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L425-L519) · [Before (L108-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L108-L121)

```diff
-     function cD(DD, zD) {
-       if (DD instanceof sD.c) return {
-         at: rD[zD],
-         code: 0
-       };
-       const wD = (0, pD.g)(DD),
-         cD = "number" === typeof wD ? wD : 0;
-       return null !== (0, KD.j)(cD).name ? {
-         at: "refused",
-         code: cD
-       } : {
-         at: LD[zD],
-         code: cD
-       }
+     function vp(pp) {
+       tp(pp) && tp(pp)
+     }
+ 
+     function tp(pp) {
+       var ip, cp, Op, op, Ip, Sp;
+       const xp = pp.documentElement.classList;
+       if (!xp.contains("TouchHotbar") || xp.contains("TouchHotbarKeysAbove") || xp.contains("HudMove-inventory") || xp.contains("HudLocked-inventory") || null === (ip = pp.defaultView) || void 0 === ip || null === (cp = ip.matchMedia) || void 0 === cp || !cp.call(ip, Hp).matches) … [truncated]
+       const Dp = pp.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
+         Wp = null === Dp || void 0 === Dp ? void 0 : Dp.parentElement,
+         vp = null === Dp || void 0 === Dp ? void 0 : Dp.closest(".BottomMiddleElements"),
+         tp = null === vp || void 0 === vp ? void 0 : vp.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
+       if (!Dp || !Wp || !vp || !tp || vp.classList.contains("TouchInventoryOpen")) return !1;
+       const dp = Dp.getBoundingClientRect();
+       if (0 === dp.width) return !1;
+       const ep = pp.querySelector(".JoystickZone"),
+ ... (79 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L124` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L522) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L124)

```diff
-   8901: (DD, zD, wD) => {
+   34325: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L126` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L524) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L126)

```diff
-       e: () => KD,
+       d: () => Wp,
```

#### 21. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L128-L130` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L526) · [Before (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L128-L130)

```diff
-       i: () => LD,
-       m: () => gD,
-       q: () => cD
+       k: () => Up
```

#### 22. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L132-L133` → after: `L528-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L528-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L528-L537) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L132-L133)

```diff
-     var pD = wD(197),
-       sD = wD(4657);
+     var Op = cp(1480),
+       op = cp(62),
+       Ip = cp(1334),
+       Sp = cp(4621),
+       xp = cp(2413),
+       Lp = cp(1201),
+       Yp = cp(104),
+       Dp = cp(2004),
+       Ap = cp(1361),
+       Pp = cp(1112);
```

#### 23. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L136` → after: `L540-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L540-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L540-L602) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L136)

```diff
-       return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
+       let {
+         show: ip,
+         onClose: cp
+       } = pp;
+       const {
+         requestedGameNameWithVariation: Op,
+         lobbyName: op,
+         shownLobbyName: Ip
+       } = (0, Dp.g)("connectedGame"), Lp = (0, xp.c)(Op, op, !1);
+       return Yp.featureFlags.canUseInviteLinks && (0, Pp.jsx)(Sp.c, {
+         show: ip,
+         close: cp,
+         padShowsHud: !0,
+         togglePointerLock: !1,
+         globallyUniqueKey: "InviteLinkBox",
+         doGameplayStartStopOnShow: !0,
+ ... (47 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L140` → after: `L606-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L606-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L606-L617) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L140)

```diff
-       return "object" === typeof DD && null !== DD ? DD.code : void 0
+       const [ip, cp] = (0, op.useState)(null);
+       return (0, op.useEffect)((() => {
+         if (!pp) return;
+         let ip = !0;
+         return (0, Ip.w)().then((pp => {
+           ip && cp(pp)
+         })).catch((pp => {
+           console.error("Failed to get invite link:", pp)
+         })), () => {
+           ip = !1
+         }
+       }), [pp]), ip
```

#### 25. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L144-L145` → after: `L631-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L631-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L631-L635) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L144-L145)

```diff
-       var zD;
-       return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
+       const ip = Math.floor(pp / 3600),
+         cp = Math.floor(pp % 3600 / 60),
+         Op = Math.floor(pp % 60),
+         op = `${cp.toString().padStart(2,"0")}:${Op.toString().padStart(2,"0")}`;
+       return ip > 0 ? `${ip}:${op}` : op
```

#### 26. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L149` → after: `L667-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L667-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L667-L675) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L149)

```diff
-       return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       let {
+         children: ip,
+         showing: cp,
+         globallyUniqueKey: Ip,
+         alwaysMountChildren: Sp = !1,
+         doGameplayStartStopOnShow: xp = !0,
+         keepsMovement: Lp = !1
+       } = pp;
+       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
```

#### 27. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L151-L155` → after: `L677-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L677-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L677-L690) · [Before (L151-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L151-L155)

```diff
-     const gD = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+   },
+   6724: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
+     });
+     var Op = cp(62),
+       op = cp(44);
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
+       return [Ip, ip => {
+         op.h.setItem(pp, ip), Sp(ip)
+       }]
```

#### 28. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L158` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L693) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L158)

```diff
-   39042: (DD, zD, wD) => {
+   9015: (pp, ip, cp) => {
```

#### 29. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L160-L162` → after: `L695-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L695-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L695-L701) · [Before (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L160-L162)

```diff
-       b: () => sD,
-       c: () => KD,
-       g: () => LD,
+       B: () => Lp,
+       D: () => Pp,
+       H: () => Yp,
+       I: () => yp,
+       J: () => Ip,
+       d: () => op,
+       h: () => xp,
```

#### 30. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L165` → after: `L705-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L705-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L705-L714) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L165)

```diff
-       p: () => rD
+       o: () => Dp,
+       r: () => Sp,
+       u: () => wp,
+       y: () => Ap
+     });
+     const Op = pp => ({
+       left: pp.left,
+       top: pp.top,
+       right: pp.right,
+       bottom: pp.bottom
```

#### 31. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L174-L175` → after: `L719-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L719-L720) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L174-L175)

```diff
-         text: (zD ? DD.slice(0, -pD.j.length) : DD) || null,
-         dropsCache: zD
+         x: (pp.left + pp.right) / 2,
+         y: (pp.top + pp.bottom) / 2
```

#### 32. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L180-L182` → after: `L724-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L724-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L724-L730) · [Before (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L180-L182)

```diff
-     function cD(DD, zD) {
-       const wD = RD(DD);
-       return null !== wD.name && "" === pD.e[wD.name].text && null !== zD ? zD : wD.reason
+     function Ip(pp) {
+       return 0 === pp.length ? null : pp.reduce(((pp, ip) => ({
+         left: Math.min(pp.left, ip.left),
+         top: Math.min(pp.top, ip.top),
+         right: Math.max(pp.right, ip.right),
+         bottom: Math.max(pp.bottom, ip.bottom)
+       })))
```

#### 33. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L186-L201` → after: `L733-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L733-L735) · [Before (L186-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L186-L201)

```diff
-     function RD(DD) {
-       var zD;
-       let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const sD = null !== (zD = Object.keys(pD.e).find((zD => pD.e[zD].code === DD))) && void 0 !== zD ? zD : null;
-       if (null === sD) return {
-         code: DD,
-         name: sD,
-         reason: null !== wD && void 0 !== wD ? wD : `${LD}\nCode: ${DD}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
-       };
-       const {
-         text: KD,
-         canReconnect: rD = !1
-       } = pD.e[sD], cD = DD === pD.e.outdatedVersion.code || DD === pD.e.loadRecaptchaError.code;
+     function Sp(pp, ip) {
+       const cp = Math.max(0, (ip - (pp.right - pp.left)) / 2),
+         Op = Math.max(0, (ip - (pp.bottom - pp.top)) / 2);
```

#### 34. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L203-L208` → after: `L737-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L737-L740) · [Before (L203-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L203-L208)

```diff
-         code: DD,
-         name: sD,
-         reason: "" !== KD ? KD : null !== wD && void 0 !== wD ? wD : DD === pD.e.gameOrPluginKick.code ? gD : `Code: ${DD}`,
-         canReconnect: rD,
-         automaticallyReconnect: DD === pD.e.customGameUpdated.code || DD === pD.e.duplicateLobbyNameError.code,
-         requiresRefresh: cD
+         left: pp.left - cp,
+         top: pp.top - Op,
+         right: pp.right + cp,
+         bottom: pp.bottom + Op
```

#### 35. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L211-L214` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L743-L745) · [Before (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L211-L214)

```diff
-   },
-   36808: (DD, zD, wD) => {
-     function pD(DD) {
-       return "fetch" === DD || "timeout" === DD || "integrity" === DD ? "download" : "browser"
+ 
+     function xp(pp, ip) {
+       return ip.x >= pp.left && ip.x <= pp.right && ip.y >= pp.top && ip.y <= pp.bottom
```

#### 36. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L226-L242` → after: `L748-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L748-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L748-L757) · [Before (L226-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L226-L242)

```diff
-     function KD(DD) {
-       return "download" === DD ? {
-         icon: "wifi",
-         title: "wasmScreens:downloadFailedTitle",
-         help: "wasmScreens:downloadFailedHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       } : {
-         icon: "face-dizzy",
-         title: "wasmScreens:unsupportedTitle",
-         help: "wasmScreens:unsupportedHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
- ... (1 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp) {
+       let Op = null,
+         Ip = 1 / 0;
+       for (const {
+           id: op,
+           box: Sp
+         }
+         of ip) {
+         const ip = (Sp.right - Sp.left) * (Sp.bottom - Sp.top);
+         xp(Sp, pp) && ip < Ip && (Ip = ip, Op = op)
```

#### 37. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L246` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L774) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L246)

```diff
-     function rD(DD, zD) {
+     function Yp(pp, ip, cp) {
```

#### 38. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L248-L256` → after: `L776-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L776-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L776-L779) · [Before (L248-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L248-L256)

```diff
-         icon: "face-dizzy",
-         title: "wasmScreens:crashTitle",
-         help: zD ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
-         helpValues: {
-           code: DD.code
-         },
-         discordLink: zD,
-         confirm: "general:reload",
-         cancel: "general:back"
+         left: cp.left,
+         top: cp.top,
+         right: pp - cp.right,
+         bottom: ip - cp.bottom
```

#### 39. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L260` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L783-L784) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L260)

```diff
-     function LD() {
+     function Dp(pp, ip, cp, Op) {
+       const op = (pp, ip, cp) => Math.max(Math.min(ip, 0), Math.min(Math.max(cp, 0), pp));
```

#### 40. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L262-L268` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L786-L787) · [Before (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L262-L268)

```diff
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
+         x: op(ip, Op.left - pp.left, Op.right - pp.right),
+         y: op(cp, Op.top - pp.top, Op.bottom - pp.bottom)
```

#### 41. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L274-L282` → after: `L812-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L812-L813) · [Before (L274-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L274-L282)

```diff
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: wD ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
-         helpValues: {
-           reason: DD.reason
-         },
-         discordLink: null === DD.name,
-         confirm: zD ? "general:reconnect" : DD.requiresRefresh ? "general:reload" : "general:ok",
-         cancel: null
+         x: cp(pp.left, pp.right, ip.left, ip.right),
+         y: cp(pp.top, pp.bottom, ip.top, ip.bottom)
```

#### 42. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L286` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L839) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L286)

```diff
-   36290: (DD, zD, wD) => {
+   9019: (pp, ip, cp) => {
```

#### 43. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L291` → after: `L846-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L846-L848) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L291)

```diff
-       m: () => vD
+       n: () => Dp,
+       r: () => Yp,
+       s: () => Lp
```

#### 44. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L293-L300` → after: `L850-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L850-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L850-L860) · [Before (L293-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L293-L300)

```diff
-     var pD = wD(2861),
-       sD = wD(2874),
-       KD = wD(6653),
-       rD = wD(4722),
-       LD = wD(2872),
-       cD = wD(2868);
-     const gD = "bloxd-wasmDownloaded",
-       RD = 12;
+     var Op = cp(2525);
+     const op = ["J", "C", "A", "P", "U", "X", "G"],
+       Ip = {
+         J: "jump",
+         C: "crouch",
+         A: "attack",
+         P: "attack",
+         U: "use",
+         X: "extra",
+         G: "game"
+       };
```

#### 45. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L303` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L863) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L303)

```diff
-       return DD.pathname.slice(DD.pathname.lastIndexOf("/") + 1)
+       return pp ? ["X"] : ["P", "X"]
```

#### 46. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L306-L343` → after: `L879-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L879-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L879-L890) · [Before (L306-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L306-L343)

```diff
-     function UD() {
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const DD = JSON.parse(localStorage.getItem(gD) ?? "[]");
-         return Array.isArray(DD) ? DD.filter((DD => "string" === typeof DD)) : []
-       } catch (DD) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", DD), null
-       }
-     }
-     const fD = Reflect.apply,
-       ID = "undefined" === typeof Worker ? void 0 : Worker,
-       BD = ID?.prototype.postMessage,
-       GD = ID?.prototype.terminate,
-       hD = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
-       nD = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
-       MD = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
- ... (22 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp) {
+       const Op = pp.querySelector(".InGameUi .TouchComponentsButtons");
+       if (!Op) return xp;
+       const Ip = {},
+         Sp = {};
+       for (const xp of op) {
+         const pp = Op.querySelector(`.TouchSlot${xp} > .TouchKey`);
+         if (pp) {
+           var Lp, Yp;
+           Ip[xp] = pp.cloneNode(!0);
+           const ip = (null !== (Lp = null === (Yp = pp.querySelector(".TouchKeyLabel")) || void 0 === Yp ? void 0 : Yp.textContent) && void 0 !== Lp ? Lp : "").split(/\s+/).filter((pp => !/[\d\xd7]/.test(pp))).join(" ");
+           ip && (Sp[xp] = ip)
```

#### 47. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L346-L353` → after: `L893-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L893-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L893-L906) · [Before (L346-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L346-L353)

```diff
-       take() {
-         const DD = this.worker;
-         if (this.worker = null, null !== DD && this.failed) throw fD(GD, DD, []), new Error("it did not run");
-         return DD
-       }
-       stop() {
-         const DD = this.worker;
-         this.worker = null, null !== DD && fD(GD, DD, [])
+       const Dp = ip => {
+           const cp = pp.querySelector(`.InGameUi ${ip}`);
+           return null !== cp && !cp.classList.contains("Hidden")
+         },
+         Ap = [...pp.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((pp => pp.cloneNode(!0)));
+       return {
+         faces: Object.keys(Ip).length > 0 ? Ip : null,
+         names: Sp,
+         shop: Dp(".TouchInventoryKey.ShopKey"),
+         bag: Dp(".TouchInventoryKey.BagKey"),
+         sprint: Dp(".TouchSprintHit"),
+         items: Ap.length > 0 ? Ap : null,
+         rowIcons: ip,
+         pinnedIcons: cp
```

#### 48. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L356-L406` → after: `L909-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L909-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L909-L914) · [Before (L356-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L356-L406)

```diff
-     class XD {
-       decoded;
-       worker;
-       reject;
-       constructor(DD, zD, wD, pD, KD) {
-         try {
-           this.worker = KD?.take() ?? VD()
-         } catch (gD) {
-           throw JD = !0, new Error(`The zstd decoder's worker did not start: ${(0,LD.d)(gD)}`)
-         }
-         const rD = this.worker;
-         this.decoded = (0, sD.k)(((zD, sD) => {
-           this.reject = sD;
-           const KD = (DD, zD) => {
-             fD(hD, rD, [DD, zD])
-           };
- ... (35 more removed lines; see GitHub link above)
+ 
+     function Yp(pp, ip) {
+       const cp = {};
+       for (const Op of [...Sp(ip), "G"]) {
+         const ip = pp.names[Op];
+         ip && (cp[Ip[Op]] = ip)
```

#### 49. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L411-L415` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L953) · [Before (L411-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L411-L415)

```diff
-       if (globalThis.Worker !== ID) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(wD.p + wD.u(67), wD.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
+       return !(0, Ip.isMobileApp)() || Op.b.supports("photos")
```

#### 50. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L417-L438` → after: `L955-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L955-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L955-L962) · [Before (L417-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L417-L438)

```diff
-     const PD = Reflect.apply,
-       CD = ArrayBuffer,
-       xD = "undefined" === typeof Response ? void 0 : Response,
-       TD = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       bD = function() {
-         let DD;
-         void 0 !== TD && new TD({
-           __proto__: null,
-           start(zD) {
-             const {
-               enqueue: wD,
-               close: pD,
-               error: sD
-             } = Object.getPrototypeOf(zD);
-             DD = {
-               enqueue: wD,
- ... (6 more removed lines; see GitHub link above)
+     async function Yp(pp) {
+       var ip, cp;
+       if ((0, Ip.isMobileApp)()) {
+         const {
+           saved: ip
+         } = await Op.b.request("photos.save", {
+           data: await (0, op.g)(pp),
+           mimeType: xp.g
```

#### 51. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L440-L503` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L964) · [Before (L440-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L440-L503)

```diff
-         return DD
-       }(),
-       jD = function() {
-         try {
-           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== bD && (0, rD.j)(xD, "Response", !0) && (0, rD.j)(TD, "ReadableStream", !0) && (0, rD.j)(bD.enqueue, "enqueue") && (0, rD.j)(bD.close, "close") && (0, rD.j)(bD.e … [truncated]
-         } catch {
-           return !1
-         }
-       }();
-     async function dD(DD, zD, wD, pD, KD, rD, gD) {
-       const RD = new CD(zD),
-         {
-           controller: AD,
-           compiled: UD
-         } = function(DD) {
-           try {
- ... (48 more removed lines; see GitHub link above)
+         return ip ? "saved" : "denied"
```

#### 52. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L505-L513` → after: `L966-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L966-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L966-L970) · [Before (L505-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L505-L513)

```diff
-       const JD = DD => {
-         MD.fail(DD), void 0 !== OD && SD(OD)
-       };
-       let ED = !1;
-       wD.addEventListener("abort", (() => {
-         ED && MD.markWorkerFailed(), JD(new Error(`${DD} stalled`))
-       }), {
-         once: !0
-       }), (0, sD.u)(UD, (() => {}), JD);
+       return (0, Ip.isIOS)() && null !== (ip = (cp = navigator).canShare) && void 0 !== ip && ip.call(cp, {
+         files: [pp]
+       }) ? Dp(pp) : ((0, Sp.c)(pp, pp.name), "saved")
+     }
+     async function Dp(pp) {
```

#### 53. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L515-L559` → after: `L972-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L972-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L972-L974) · [Before (L515-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L515-L559)

```diff
-         let rD;
-         try {
-           rD = await fetch(DD, {
-             signal: wD
-           })
-         } catch (VD) {
-           throw new Error(`Fetching ${DD} failed: ${(0,LD.d)(VD)}`)
-         }
-         const {
-           ok: gD,
-           status: RD,
-           body: AD
-         } = function(DD, zD) {
-           try {
-             const {
-               ok: DD,
- ... (29 more removed lines; see GitHub link above)
+         return await navigator.share({
+           files: [pp]
+         }), "shared"
```

#### 54. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L561` → after: `L976-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L976-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L976-L978) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L561)

```diff
-         throw GD(VD), JD(VD), VD
+         if (ip instanceof DOMException && "AbortError" === ip.name) return "OO";
+         if (ip instanceof DOMException && "NotAllowedError" === ip.name) return "needsTap";
+         throw ip
```

#### 55. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L574-L577` → after: `L995-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L995-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L995-L998) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L574-L577)

```diff
-     function SD(DD) {
-       try {
-         (0, cD.R)(DD.cancel())
-       } catch {}
+     function Yp() {
+       (0, Ip.e)(), Op.c.set({
+         screenshotMode: !0
+       })
```

#### 56. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L583-L589` → after: `L1001-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1001-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1001-L1018) · [Before (L583-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L583-L589)

```diff
-     function ND(DD) {
-       return WD ??= function() {
-         const DD = new Map,
-           zD = "bloxd_wasm_webgpu:5121192,bloxd_wasm_webgl:5503528,bloxd_wasm_webgl1:4839018,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704228";
-         for (const wD of zD?.split(",") ?? []) {
-           const [zD = "", pD] = wD.split(":"), sD = Number(pD);
-           Number.isInteger(sD) && sD > 0 && DD.set(zD, sD)
+     function Dp() {
+       Op.c.set({
+         screenshotMode: !1
+       })
+     }
+     async function Ap() {
+       const {
+         width: pp,
+         height: ip,
+         scale: cp
+       } = function(pp, ip, cp) {
+         const Op = Math.max(1, pp),
+           op = Math.max(1, ip),
+           Ip = Math.min(Math.max(1, cp), Math.sqrt(xp / (Op * op)));
+         return {
+           width: Math.round(Op * Ip),
+ ... (2 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L591-L592` → after: `L1020-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1020-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1020-L1034) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L591-L592)

```diff
-         return DD
-       }(), WD.get(DD)
+       }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
+         blob: Op
+       } = await op.devTools.capturePhoto(pp, ip, {
+         scale: cp,
+         type: Sp.g,
+         quality: Lp
+       });
+       return new File([Op], function(pp) {
+         const ip = pp => String(pp).padStart(2, "0"),
+           cp = `${pp.getFullYear()}${ip(pp.getMonth()+1)}${ip(pp.getDate())}`,
+           Op = `${ip(pp.getHours())}${ip(pp.getMinutes())}${ip(pp.getSeconds())}`;
+         return `bloxd-${cp}-${Op}.${Sp.e}`
+       }(new Date), {
+         type: Sp.g
+       })
```

#### 58. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L594-L643` → after: `L1036-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1036-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1036-L1065) · [Before (L594-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L594-L643)

```diff
-     async function ZD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const pD = ND(DD.name);
-       if (void 0 === pD) return yD(await kD(DD, zD, wD), "cold-wasm");
-       const KD = jD ? new QD : null;
-       let rD;
-       try {
-         if (gD = DD.url(), UD()?.includes(AD(gD)) && await async function(DD) {
-             const zD = new AbortController;
-             let wD;
-             const pD = (0, sD.k)((DD => {
-               wD = setTimeout((() => {
-                 zD.abort(), DD(null)
-               }), lD)
-             }));
-             try {
- ... (34 more removed lines; see GitHub link above)
+   },
+   8807: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op,
+       e: () => Op
+     });
+     const Op = "controllerOpenKeyboard",
+       op = "controllerKeyboardVisible"
+   },
+   34310: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
+     });
+     const Op = new Set(["chunkBorders"])
+   },
+   34306: (pp, ip, cp) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L646` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1113-L1114) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L646)

```diff
-     function yD(DD, zD) {
+     function op(pp) {
+       var ip;
```

#### 60. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L648-L650` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1116-L1117) · [Before (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L648-L650)

```diff
-         __proto__: null,
-         module: DD,
-         path: zD
+         ...Sp.store,
+         yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
```

#### 61. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L653-L670` → after: `L1120-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1120-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1120-L1131) · [Before (L653-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L653-L670)

```diff
- 
-     function kD(DD, zD, wD) {
-       return void 0 === ND(DD.name) ? (0, cD.B)(DD.url(), zD, wD) : (0, cD.B)(DD.url(), zD, {
-         ...wD,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(DD) {
-             const zD = UD();
-             if (null === zD) return;
-             const wD = AD(DD),
-               pD = zD.filter((DD => DD !== wD));
-             pD.push(wD);
-             try {
-               localStorage.setItem(gD, JSON.stringify(pD.slice(-RD)))
-             } catch (sD) {
-               console.warn(`Bloxd wasm: ${wD} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, sD)
- ... (2 more removed lines; see GitHub link above)
+     const Ip = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       Sp = {
+         player: Ip,
+         store: {
+           ...Ip,
+           radius: 33,
+           target: [0, 3.9, 0]
```

#### 62. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L672` → after: `L1133-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1133-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1133-L1138) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L672)

```diff
-       })
+       };
+ 
+     function xp(pp, ip) {
+       pp instanceof Promise ? pp.then(ip).catch((pp => {
+         console.error("Couldn't open the preview", pp)
+       })) : ip(pp)
```

#### 63. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L674-L681` → after: `L1140-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1140-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1140-L1159) · [Before (L674-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L674-L681)

```diff
-     async function mD(DD, zD, wD, pD) {
-       if (!jD || !ED()) return null;
-       const sD = DD.url(),
-         KD = `${sD.href}${iD}`;
-       try {
-         return await (0, cD.ab)(KD, ((DD, sD, rD) => dD(KD, zD, DD, sD, rD, wD, pD)))
-       } catch (rD) {
-         return console.warn(`${(0,LD.d)(rD)}: loading ${sD.href} instead`), null
+     class Lp {
+       constructor(pp) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
+         }))
+       }
+       show(pp) {
+         var ip;
+         this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
+       }
+       resize(pp, ip) {
+         var cp;
+         this.size = {
+           width: pp,
+           height: ip
+         }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
+ ... (4 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L684-L718` → after: `L1162-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1162-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1162-L1165) · [Before (L684-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L684-L718)

```diff
-     let eD = null,
-       oD = !1;
-     const aD = new Map,
-       uD = new Map;
- 
-     function vD(DD, zD, wD) {
-       return null === eD ? eD = FD(DD, zD, wD?.memoryMaximumBytes) : DD !== eD.build ? console.warn(`Bloxd wasm: ${DD.name} was asked for after ${eD.build.name} started loading, which this thread keeps`) : zD.name !== eD.workers.name && console.warn(`Bloxd wasm: ${zD.name} was as … [truncated]
-     }
- 
-     function tD(DD, zD) {
-       if (null !== eD) return (0, sD.h)([]);
-       const wD = DD.filter((DD => !aD.has(DD.name))).map((DD => {
-         const wD = new AbortController,
-           pD = {
-             compiled: kD(DD, (0, KD.d)(DD.name), {
-               priority: zD,
- ... (19 more removed lines; see GitHub link above)
+     class Yp {
+       constructor(pp) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
```

#### 65. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L720-L721` → after: `L1167-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1167-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1167-L1205) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L720-L721)

```diff
-       }));
-       return (0, sD.h)(wD)
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var pp, ip;
+         return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
+       }
+       setCosmetic(pp, ip) {
+         var cp;
+         null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
+       }
+       playEmote(pp) {
+         var ip;
+         null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L723-L738` → after: `L1207-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1207-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1207-L1220) · [Before (L723-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L723-L738)

```diff
- 
-     function FD(DD, zD, wD) {
-       const KD = (0, pD.F)((async () => {
-         (0, rD.E)(), uD.clear();
-         const wD = HD(DD),
-           pD = zD.name === DD.name ? wD : HD(zD);
-         for (const {
-             cancel: DD
-           }
-           of aD.values()) DD.abort();
-         aD.clear(), await (0, sD.h)([wD, pD]);
-         const KD = await wD,
-           LD = await pD;
-         return (0, rD.E)(), {
-           module: KD,
-           workerModule: LD
+     const Dp = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
+       }
+       setHost(pp) {
+         this.host = pp
+       }
+       setDefaultHost(pp) {
+         this.makeDefault = pp
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 67. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L740-L745` → after: `L1222-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1222-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1222-L1234) · [Before (L740-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L740-L745)

```diff
-       }), DD, wD);
-       return {
-         build: DD,
-         workers: zD,
-         memoryMaximumBytes: wD,
-         loaded: KD
+         return this.host
+       }
+       openMob(pp) {
+         return new Lp(this.current().openMob(pp))
+       }
+       openPet(pp) {
+         return new Lp(this.current().openPet(pp))
+       }
+       openMobLineup(pp) {
+         return new Lp(this.current().openMobLineup(pp))
+       }
+       openCharacter(pp, ip) {
+         return new Yp(this.current().openCharacter(pp, ip))
```

#### 68. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L748-L777` → after: `L1237-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1237-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1237-L1253) · [Before (L748-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L748-L777)

```diff
- 
-     function YD(DD) {
-       return uD.get(DD)
-     }
- 
-     function HD(DD) {
-       const zD = performance.now(),
-         wD = aD.get(DD.name);
-       aD.delete(DD.name);
-       const pD = !0 === wD?.downloaded ? wD : void 0;
-       return void 0 !== wD && void 0 === pD && wD.cancel.abort(), (0, sD.k)(((wD, KD) => {
-         const rD = (pD, sD) => {
-             uD.set(DD.name, {
-               path: sD,
-               ms: performance.now() - zD
-             }), wD(pD)
- ... (14 more removed lines; see GitHub link above)
+   },
+   34462: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.b,
+       h: () => Op.e,
+       j: () => Op.i
+     });
+     var Op = cp(34466);
+     class op {
+       constructor(pp) {
+         this.load = pp, this.loaded = null, this.loading = null
+       }
+       run(pp) {
+         return null !== this.loaded ? pp(this.loaded) : (this.loading ??= this.load().then((pp => (this.loaded = pp, pp)), (pp => {
+           throw this.loading = null, pp
+         })), this.loading.then(pp))
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L779-L785` → after: `L1255-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1255-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1255-L1270) · [Before (L779-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L779-L785)

```diff
-     async function qD(DD, zD) {
-       const {
-         module: wD
-       } = await Dz(DD, {
-         retries: zD
-       });
-       return wD
+     class Ip {
+       constructor() {
+         this.mobScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e … [truncated]
+       }
+       openMob(pp) {
+         return this.mobScene.run((ip => ip.openMobPreview(pp)))
+       }
+       openPet(pp) {
+         return this.mobScene.run((ip => ip.openPetPreview(pp)))
+       }
+       openMobLineup(pp) {
+         return this.mobScene.run((ip => ip.openMobLineupPreview(pp)))
+       }
+       openCharacter(pp, ip) {
+         return this.characterScene.run((cp => cp.openCharacterPreview(pp, ip)))
+       }
```

#### 70. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L787-L789` → after: `L1272-L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1272-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1272-L1284) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L787-L789)

```diff
-     async function Dz(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return await ZD(DD, (0, KD.d)(DD.name), zD)
+     Op.i.setDefaultHost((() => new Ip))
+   },
+   6804: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => op,
+       f: () => Ip
+     });
+     var Op = cp(44);
+     const op = "shaderPack";
+     async function Ip() {
+       var pp;
+       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
```

#### 71. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L792` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1287) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L792)

```diff
-   6653: (DD, zD, wD) => {
+   9002: (pp, ip, cp) => {
```

#### 72. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L794` → after: `L1289-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1289-L1290) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L794)

```diff
-       d: () => rD
+       e: () => xp,
+       f: () => Lp
```

#### 73. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L796` → after: `L1292-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1292-L1294) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L796)

```diff
-     var pD = wD(2868);
+     var Op = cp(25),
+       op = cp(1349),
+       Ip = cp(104);
```

#### 74. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L798-L809` → after: `L1296-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1296-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1296-L1335) · [Before (L798-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L798-L809)

```diff
-       bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
-       bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
-       bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
-       bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
-       bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
-       bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
-       bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
-       bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
-       bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
-       bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
-       bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
-       bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
+       blockMined: {
+         pattern: [18],
+         priority: 1,
+         minGapMs: 120
+       },
+       hitLanded: {
+         pattern: [20],
+         priority: 2,
+         minGapMs: 80
+       },
+       damageTaken: {
+         pattern: [45],
+         priority: 3,
+         minGapMs: 250
+       },
+       fishBite: {
+ ... (24 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L813-L819` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1338-L1339) · [Before (L813-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L813-L819)

```diff
-     function rD(DD) {
-       const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
-       if (void 0 !== zD) return {
-         sha256: zD,
-         onMismatch: KD.B
-       };
-       throw new pD.l(`${DD} has no release digest, so this build refuses it`)
+     function xp() {
+       return (0, Ip.isMobile)() && "function" === typeof navigator.vibrate
```

#### 76. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L822` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1362) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L822)

```diff
-   6678: (DD, zD, wD) => {
+   34346: (pp, ip, cp) => {
```

#### 77. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L825-L828` → after: `L1365-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1365-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1365-L1366) · [Before (L825-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L825-L828)

```diff
-       d: () => rD,
-       f: () => LD,
-       h: () => sD,
-       l: () => KD
+       e: () => Ap,
+       i: () => Dp
```

#### 78. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L830` → after: `L1368-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1368-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1368-L1378) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L830)

```diff
-     const pD = ["terrain", "liquid", "model"];
+     var Op = cp(25),
+       op = cp(1705),
+       Ip = cp(44),
+       Sp = cp(3761);
+     const xp = 2592e5,
+       Lp = "notificationOptInLastPromptedAt";
+     async function Yp() {
+       var pp;
+       const ip = null !== (pp = Ip.h.getItem(Lp)) && void 0 !== pp ? pp : 0;
+       return Date.now() - ip < xp ? null : Ap()
+     }
```

#### 79. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L833-L839` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1381) · [Before (L833-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L833-L839)

```diff
-       const DD = [];
-       for (const zD of [!1, !0])
-         for (const wD of pD) DD.push({
-           strict: zD,
-           program: wD
-         });
-       return DD
+       Ip.h.setItem(Lp, Date.now())
```

#### 80. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L841-L843` → after: `L1383-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1383-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1383-L1400) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L841-L843)

```diff
- 
-     function KD(DD) {
-       return `${DD.strict?"strict":"allow"}.${DD.program}`
+     async function Ap() {
+       return await op.b.ready, op.b.supports("notifications") ? Op.c.get("mobilePushNotificationsCanAsk") ? async () => {
+         op.b.request("notifications.requestPermission", {}).then((pp => {
+           let {
+             canAsk: ip
+           } = pp;
+           Op.c.set({
+             mobilePushNotificationsCanAsk: ip
+           })
+         }), (pp => {
+           console.error("The app couldn't ask for push notifications:", pp)
+         }))
+       }: null: await Sp.c.canAsk() ? () => Sp.c.requestPermission() : null
+     }
+   },
+   8897: (pp, ip, cp) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L847` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1404) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L847)

```diff
-       return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
+       return "object" === typeof pp ? pp.option : pp
```

#### 82. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L851` → after: `L1408-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R1408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L1408-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/134.js#L1408-L1420) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/134.js#L851)

```diff
-       return "off" !== zD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === zD) && !rD(DD))))
+       var cp;
+       if ("dropdown" === (null === (cp = pp.userInput) || void 0 === cp ? void 0 : cp.type) && "object" === typeof pp.userInput.dropdownOptions[0]) {
+         for (const cp of pp.userInput.dropdownOptions)
+           if (op(cp) === ip) return "object" === typeof cp ? cp.cost : pp.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", pp, "input:", ip)
+       }
+       return pp.cost
+     }
+ 
+     function Sp(pp, ip, cp) {
+       var Op;
+       const op = null !== (Op = cp.excludedPlayers) && void 0 !== Op ? Op : [ip];
+       return pp.filter((pp => !op.includes(pp)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 1. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135];
+ export const ids = [135, 138, 139];
```

#### 2. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   36230: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       WasmTextureWorker: () => nD
+   6750: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L8-L20` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L8-L16) · [Before (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L8-L20)

```diff
-     var pD = wD(608),
-       sD = wD(3175),
-       KD = wD(36232),
-       rD = wD.n(KD);
- 
-     function LD() {
-       return rD()('(()=>{var DD={d:(zD,wD)=>{for(var pD in wD)DD.o(wD,pD)&&!DD.o(zD,pD)&&Object.defineProperty(zD,pD,{enumerable:!0,get:wD[pD]})},o:(DD,zD)=>Object.prototype.hasOwnProperty.call(DD,zD),r:DD=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(D … [truncated]
-     }
-     var cD = wD(36237),
-       gD = wD(3205),
-       RD = wD(3227),
-       AD = wD(3219),
-       UD = wD(3180);
+     var Op = cp(5156),
+       op = cp(1112);
+     const Ip = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
```

#### 4. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L23` → after: `L19-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L19-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L19-L49) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L23)

```diff
-       return "" === DD ? [] : DD.split("\0")
+       let {
+         diagnostics: ip,
+         more: cp = 0,
+         t: Sp
+       } = pp;
+       return (0, op.jsxs)("ul", {
+         className: "ShaderPackDiagnostics",
+         children: [ip.map(((pp, ip) => {
+           const cp = (0, Op.e)(pp),
+             xp = function(pp, ip) {
+               const cp = (0, Op.b)(null !== pp && void 0 !== pp ? pp : []);
+               if (0 === cp.length) return null;
+               return cp.map((pp => pp.map((pp => ip(Ip[pp]))).join(", "))).join("; ")
+             }(pp.variants, Sp);
+           return (0, op.jsxs)("li", {
+             children: [cp && (0, op.jsx)("span", {
+ ... (15 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L25-L28` → after: `L51-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L51-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L51-L88) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L25-L28)

```diff
- 
-     function ID(DD) {
-       if ("" !== DD)
-         for (const zD of DD.split("\n")) console.error(zD)
+   },
+   6752: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => jp,
+       f: () => kp
+     });
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(5076),
+       xp = cp(1361),
+       Lp = cp(1060),
+       Yp = cp(1201),
+       Dp = cp(5167),
+       Ap = cp(5159),
+       Pp = cp(3259);
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L30-L54` → after: `L90-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L90-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L90-L110) · [Before (L30-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L30-L54)

```diff
- 
-     function BD(DD, zD) {
-       return async function(DD, zD) {
-         const wD = Object.keys(DD),
-           pD = [],
-           sD = new Map,
-           KD = new Uint32Array(wD.length);
-         for (const [rD, LD] of wD.entries()) {
-           const {
-             url: zD
-           } = DD[LD];
-           sD.has(zD) || (sD.set(zD, pD.length), pD.push(zD)), KD[rD] = sD.get(zD)
-         }
-         return {
-           sources: await zD(pD),
-           names: wD.join("\0"),
- ... (9 more removed lines; see GitHub link above)
+     async function vp(pp) {
+       const ip = function(pp) {
+           const ip = pp.length > 0 ? pp[0].path.indexOf("/") : -1;
+           if (-1 === ip) return pp;
+           const cp = pp[0].path.slice(0, ip + 1);
+           if (!pp.every((pp => pp.path.startsWith(cp)))) return pp;
+           return pp.map((pp => ({
+             ...pp,
+             path: pp.path.slice(cp.length)
+           })))
+         }(pp.filter((pp => !(0, Pp.e)(pp.path)))),
+         cp = ip.filter((pp => "pack.json" === pp.path.toLowerCase()));
+       if (0 === cp.length) throw new Pp.b("shaderPack:loadNoManifest");
+       if (cp.length > 1) throw new Pp.b("shaderPack:loadDuplicateManifest");
+       const Op = cp[0],
+         op = await Op.read(Up);
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L56-L69` → after: `L112-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L112-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L112-L118) · [Before (L56-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L56-L69)

```diff
-             const zD = await Promise.all(DD.map((async DD => {
-               try {
-                 const zD = await fetch(DD, {
-                   signal: wD.signal
-                 });
-                 if (!zD.ok) throw new Error(`HTTP ${zD.status}`);
-                 return [DD, await zD.blob()]
-               } catch (zD) {
-                 throw wD.abort(), new RD.m(RD.l.Fetch, `fetching ${DD} failed: ${(0,AD.h)(zD)}`)
-               }
-             })));
-             return new Map(zD)
-           } finally {
-             zD.removeEventListener("abort", pD)
+             ip = JSON.parse(pp)
+           } catch (xp) {
+             throw new Pp.b("shaderPack:loadManifestNotJson", {
+               error: xp.message
+             }, {
+               cause: xp
+             })
```

#### 8. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L71-L76` → after: `L120-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L120-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L120-L171) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L71-L76)

```diff
-         }(DD.filter((DD => !DD.startsWith("data:"))), zD);
-         return Promise.all(DD.map((DD => {
-           var zD;
-           return (0, UD.d)(null !== (zD = wD.get(DD)) && void 0 !== zD ? zD : DD)
-         })))
-       }))
+           if ("object" !== typeof ip || null === ip || Array.isArray(ip)) throw new Pp.b("shaderPack:loadManifestNotObject");
+           const {
+             apiVersion: cp,
+             name: Op,
+             author: op,
+             description: Ip,
+             keepCircleShadows: Sp
+           } = ip;
+           if (void 0 === cp) throw new Pp.b("shaderPack:loadNoApiVersion", {
+             version: String(Ap.e)
+           });
+           if (!(0, Ap.k)(cp)) throw new Pp.b("shaderPack:loadWrongApiVersion", {
+             packVersion: JSON.stringify(cp),
+             version: String(Ap.e)
+           });
+           if ("string" !== typeof Op || "" === Op.trim()) throw new Pp.b("shaderPack:loadNoName");
+ ... (36 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L80-L81` → after: `L175-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L175-L185) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L80-L81)

```diff
-       let wD;
-       return DD instanceof RD.m ? wD = DD : (wD = new RD.m(zD ? RD.l.Optional : RD.l.Error, (0, AD.h)(DD)), DD instanceof Error && (wD.stack = `${wD.name}: ${wD.message}\n${DD.stack}`)), wD.code !== RD.l.Fetch && wD.code !== RD.l.Error && (0, gD.h)(wD.message), wD
+       try {
+         return new TextDecoder("utf-8", {
+           fatal: !0
+         }).decode(pp)
+       } catch (cp) {
+         throw new Pp.b("shaderPack:loadNotUtf8", {
+           path: ip
+         }, {
+           cause: cp
+         })
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L85` → after: `L192-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L192-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L192-L237) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L85)

```diff
-       return DD.message ? new Error(`the texture worker failed: ${DD.message}`) : new RD.m(RD.l.Load, "the texture worker failed to start")
+       let {
+         busy: ip,
+         disabled: cp,
+         onFiles: Op
+       } = pp;
+       const {
+         t: op
+       } = (0, Yp.H)(), {
+         getRootProps: Dp,
+         getInputProps: Ap,
+         isDragActive: Pp,
+         open: Wp
+       } = (0, Sp.c)({
+         onDrop: Op,
+         noClick: !0,
+         noKeyboard: !0,
+ ... (30 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L87-L101` → after: `L239-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L239-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L239-L250) · [Before (L87-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L87-L101)

```diff
-     class nD {
-       constructor(DD) {
-         this.worker = DD, this.failure = void 0, this.abandonStep = null, DD.addEventListener("error", (DD => {
-           DD.preventDefault(), this.failure ??= hD(DD)
-         }))
-       }
-       static async generateRequired(DD, zD, wD, KD) {
-         let rD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RD.b,
-           gD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const UD = (0, cD.j)();
-         if (null !== UD) throw GD(new RD.m(RD.l.Load, UD), !1);
-         let fD;
-         const hD = new AbortController;
-         try {
-           fD = new nD(function() {
+ 
+     function kp(pp) {
+       const {
+         t: ip
+       } = (0, Yp.H)(), [cp, op] = (0, Op.useState)(!1), [Ip, Sp] = (0, Op.useState)(null), xp = (0, Op.useRef)(!1);
+       return {
+         loading: cp,
+         error: Ip,
+         setError: Sp,
+         onFiles: async function(cp) {
+           if (!xp.current) {
+             xp.current = !0, op(!0), Sp(null);
```

#### 12. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L103` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L252) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L103)

```diff
-               return new LD
+               await pp(await wp(cp))
```

#### 13. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L105-L192` → after: `L254-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L254-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L254-L256) · [Before (L105-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L105-L192)

```diff
-               throw new RD.m(RD.l.Load, `the texture worker failed to start: ${(0,AD.h)(DD)}`)
-             }
-           }());
-           const UD = (0, cD.c)().catch((DD => {
-               throw new RD.m(RD.l.Load, function(DD) {
-                 return `the texture module didn't load (${(0,AD.h)(DD)})`
-               }(DD))
-             })),
-             GD = (async () => {
-               const KD = function(DD, zD, wD) {
-                 const pD = [],
-                   sD = new Map,
-                   KD = DD => {
-                     let zD = sD.get(DD);
-                     return void 0 === zD && (zD = pD.length, pD.push(DD), sD.set(DD, zD)), zD
-                   },
- ... (72 more removed lines; see GitHub link above)
+               Op instanceof Pp.b ? Sp((0, Hp.f)(ip, Op.translationKey, Op.params)) : (console.error("Failed to load the shader pack", Op), Sp(ip("shaderPack:unexpectedError")))
+             } finally {
+               xp.current = !1, op(!1)
```

#### 14. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L286-L291` → after: `L263-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L263-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L263-L278) · [Before (L286-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L286-L291)

```diff
-   36248: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD,
-       f: () => sD,
-       h: () => KD,
-       i: () => rD
+   6798: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+       toStoredShaderPack: () => Ap
```

#### 15. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L293-L294` → after: `L280-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L280-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L280-L287) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L293-L294)

```diff
-     const pD = 1024,
-       sD = 1024 * pD;
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
+     const Yp = "shaderPackChangePending";
+     let Dp = null;
```

#### 16. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L296-L297` → after: `L289-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L289-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L289-L297) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L296-L297)

```diff
-     function KD(DD) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, DD / sD)))
+     function Ap(pp, ip, cp) {
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
+         }
+       }
```
