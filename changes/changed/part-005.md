# Changed — Bundle Modifications Report (Part 005 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `5 / 69` (**266** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 28. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19810-L19851` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L170-L182) · [Before (L19810-L19851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19810-L19851)

```diff
-       return CC
-     }
- 
-     function qC(CC, zC, ZC) {
-       return (zC = function(CC) {
-         var zC = function(CC, zC) {
-           if ("object" != nC(CC) || !CC) return CC;
-           var ZC = CC[Symbol.toPrimitive];
-           if (void 0 !== ZC) {
-             var QC = ZC.call(CC, zC || "default");
-             if ("object" != nC(QC)) return QC;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === zC ? String : Number)(CC)
-         }(CC, "string");
-         return "symbol" == nC(zC) ? zC : zC + ""
- ... (26 more removed lines; see GitHub link above)
+       return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
+         function(pp) {
+           if (0 === pp.length) return "The pack has no .wgsl files.";
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
+           const ip = new Set;
+           for (const {
+               path: cp
+             }
+             of pp) {
+             const pp = Wp(cp);
+             if (null !== pp) return pp;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
+             ip.add(cp)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19853-L19905` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L184-L185) · [Before (L19853-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19853-L19905)

```diff
-         })))
-       }), []) : (ZC || []).map((function(CC) {
-         var zC = CC.item,
-           ZC = zC.type.defaultProps,
-           QC = void 0 !== ZC ? oC(oC({}, ZC), zC.props) : {},
-           bC = QC.dataKey,
-           nC = QC.name,
-           fC = QC.legendType;
-         return {
-           inactive: QC.hide,
-           dataKey: bC,
-           type: NC.iconType || fC || "square",
-           color: (0, wC.J)(zC),
-           value: nC || bC,
-           payload: QC
-         }
- ... (37 more removed lines; see GitHub link above)
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
+         }(ip) ?? ip
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19956-L20008` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L189-L190) · [Before (L19956-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19956-L20008)

```diff
-       if ("object" === typeof CC && null !== CC) {
-         var zC = CC.$$typeof;
-         switch (zC) {
-           case QC:
-             switch (CC = CC.type) {
-               case bC:
-               case fC:
-               case nC:
-               case NC:
-               case MC:
-                 return CC;
-               default:
-                 switch (CC = CC && CC.$$typeof) {
-                   case FC:
-                   case qC:
-                   case WC:
- ... (37 more removed lines; see GitHub link above)
+       const ip = {};
+       for (const cp of pp) ip[cp.path] = cp.source;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20165-L20170` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L195) · [Before (L20165-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20165-L20170)

```diff
-       let {
-         _intern: ZC,
-         _key: QC
-       } = CC;
-       const wC = QC(zC);
-       return ZC.has(wC) && (zC = ZC.get(wC), ZC.delete(wC)), zC
+       return pp < ip ? -1 : pp > ip ? 1 : 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20174-L20189` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L199-L202) · [Before (L20174-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20174-L20189)

```diff
-       return null !== CC && "object" === typeof CC ? CC.valueOf() : CC
-     }
-     var oC = ZC(6159);
-     const qC = Symbol("implicit");
- 
-     function FC() {
-       var CC = new QC,
-         zC = [],
-         ZC = [],
-         wC = qC;
- 
-       function bC(QC) {
-         let bC = CC.get(QC);
-         if (void 0 === bC) {
-           if (wC !== qC) return wC;
-           CC.set(QC, bC = zC.push(QC) - 1)
+       const ip = new TextEncoder;
+       let cp = 0;
+       for (const {
+           source: Op
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20191-L20204` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L204-L205) · [Before (L20191-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20191-L20204)

```diff
-         return ZC[bC % ZC.length]
-       }
-       return bC.domain = function(ZC) {
-         if (!arguments.length) return zC.slice();
-         zC = [], CC = new QC;
-         for (const QC of ZC) CC.has(QC) || CC.set(QC, zC.push(QC) - 1);
-         return bC
-       }, bC.range = function(CC) {
-         return arguments.length ? (ZC = Array.from(CC), bC) : ZC.slice()
-       }, bC.unknown = function(CC) {
-         return arguments.length ? (wC = CC, bC) : wC
-       }, bC.copy = function() {
-         return FC(zC, ZC).unknown(wC)
-       }, oC.f.apply(bC, arguments), bC
+         of pp) cp += ip.encode(Op).byteLength;
+       return cp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20214-L20221` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L209-L212) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20214-L20221)

```diff
-       return "object" === typeof CC && "length" in CC ? CC : Array.from(CC)
-     }
-   },
-   6106: (CC, zC, ZC) => {
-     function QC(CC) {
-       return function() {
-         return CC
-       }
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20223-L20234` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L214) · [Before (L20223-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20223-L20234)

```diff
-     ZC.d(zC, {
-       e: () => QC
-     })
-   },
-   6113: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => qC
-     });
-     const QC = Math.PI,
-       wC = 2 * QC,
-       bC = 1e-6,
-       nC = wC - bC;
+     const yp = /^(.*)\[rot\[([1-4])$/;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20236-L20304` → after: `L216-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L216-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L216-L293) · [Before (L20236-L20304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20236-L20304)

```diff
-     function fC(CC) {
-       this._ += CC[0];
-       for (let zC = 1, ZC = CC.length; zC < ZC; ++zC) this._ += arguments[zC] + CC[zC]
-     }
-     class oC {
-       constructor(CC) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == CC ? fC : function(CC) {
-           let zC = Math.floor(CC);
-           if (!(zC >= 0)) throw new Error(`invalid digits: ${CC}`);
-           if (zC > 15) return fC;
-           const ZC = 10 ** zC;
-           return function(CC) {
-             this._ += CC[0];
-             for (let zC = 1, QC = CC.length; zC < QC; ++zC) this._ += Math.round(arguments[zC] * ZC) / ZC + CC[zC]
-           }
-         }(CC)
- ... (53 more removed lines; see GitHub link above)
+     function Up(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Op = new Map;
+       ip.forEach(((pp, ip) => {
+         let {
+           numAnimStates: cp,
+           animStartIdx: op
+         } = pp;
+         for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
+       }));
+       const op = Object.entries(pp),
+         Ip = new Map;
+       for (const [Up, wp] of op) {
+         const pp = yp.exec(Up);
+         "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
+       }
+ ... (62 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20306-L20307` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L295-L298) · [Before (L20306-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20306-L20307)

```diff
-       toString() {
-         return this._
+       for (const yp of Pp.keys()) Wp.delete(yp);
+       for (const [yp, Up] of cp) {
+         const pp = Pp.get(Up);
+         void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L20309-L20338` → after: `L300-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L300-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L300-L312) · [Before (L20309-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L20309-L20338)

```diff
-     }
- 
-     function qC(CC) {
-       let zC = 3;
-       return CC.digits = function(ZC) {
-         if (!arguments.length) return zC;
-         if (null == ZC) zC = null;
-         else {
-           const CC = Math.floor(ZC);
-           if (!(CC >= 0)) throw new RangeError(`invalid digits: ${ZC}`);
-           zC = CC
-         }
-         return CC
-       }, () => new oC(zC)
-     }
-     oC.prototype
- ... (14 more removed lines; see GitHub link above)
+       return {
+         named: [...Pp].sort(((pp, ip) => {
+           let [cp] = pp, [Op] = ip;
+           return cp < Op ? -1 : cp > Op ? 1 : 0
+         })).map((pp => {
+           let [ip, cp] = pp;
+           return {
+             name: ip,
+             id: cp
+           }
+         })),
+         aliases: [...Wp.values()],
+         layers: Ap
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L3)

```diff
- export const ids = [118];
+ export const ids = [118, 138];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L5)

```diff
-   6445: (CC, zC, ZC) => {
+   6772: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L7-L13` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L6-L7) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L7-L13)

```diff
-       Graph: () => sC,
-       debug: () => YZ,
-       default: () => mZ,
-       graphlib: () => bC,
-       layout: () => MZ,
-       util: () => dZ,
-       version: () => bz
+       loadShaderPackTextures: () => Sp,
+       shaderPackTextures: () => xp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L15-L614` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L9-L11) · [Before (L15-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L15-L614)

```diff
-     var QC = Object.defineProperty,
-       wC = (CC, zC, ZC) => ((CC, zC, ZC) => zC in CC ? QC(CC, zC, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: ZC
-       }) : CC[zC] = ZC)(CC, "symbol" != typeof zC ? zC + "" : zC, ZC),
-       bC = {};
-     ((CC, zC) => {
-       for (var ZC in zC) QC(CC, ZC, {
-         get: zC[ZC],
-         enumerable: !0
-       })
-     })(bC, {
-       Graph: () => sC,
-       alg: () => PC
- ... (584 more removed lines; see GitHub link above)
+     var Op = cp(5167);
+     let op = null,
+       Ip = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L616-L625` → after: `L13-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L13-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L13-L20) · [Before (L616-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L616-L625)

```diff
-     function HC(CC, zC, ZC, QC, wC) {
-       Array.isArray(zC) || (zC = [zC]);
-       let bC = zC => {
-           var ZC;
-           return null != (ZC = CC.isDirected() ? CC.successors(zC) : CC.neighbors(zC)) ? ZC : []
-         },
-         nC = {};
-       return zC.forEach((function(zC) {
-         if (!CC.hasNode(zC)) throw new Error("Graph does not have node: " + zC);
-         wC = EC(CC, zC, "post" === ZC, nC, bC, QC, wC)
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L629-L677` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L24-L25) · [Before (L629-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L629-L677)

```diff
-     function EC(CC, zC, ZC, QC, wC, bC, nC) {
-       return zC in QC || (QC[zC] = !0, ZC || (nC = bC(nC, zC)), wC(zC).forEach((function(zC) {
-         nC = EC(CC, zC, ZC, QC, wC, bC, nC)
-       })), ZC && (nC = bC(nC, zC))), nC
-     }
- 
-     function lC(CC, zC, ZC) {
-       return HC(CC, zC, ZC, (function(CC, zC) {
-         return CC.push(zC), CC
-       }), [])
-     }
- 
-     function XC(CC, zC) {
-       return lC(CC, zC, "post")
-     }
- 
- ... (33 more removed lines; see GitHub link above)
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L680-L713` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L28-L42) · [Before (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L680-L713)

```diff
- 
-     function rC(CC, zC, ZC, QC) {
-       return function(CC, zC, ZC, QC) {
-         if (void 0 === ZC) return IC(CC, zC, ZC, QC);
-         let wC = !1,
-           bC = CC.nodes();
-         for (let nC = 0; nC < bC.length; nC++) {
-           let fC = bC[nC];
-           if (void 0 === fC) continue;
-           let oC = QC(fC);
-           for (let CC = 0; CC < oC.length; CC++) {
-             let zC = oC[CC];
-             if (!zC) continue;
-             let QC = zC.v === fC ? zC.v : zC.w;
-             ZC({
-               v: QC,
- ... (18 more removed lines; see GitHub link above)
+   },
+   5167: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       e: () => Sp,
+       f: () => Op,
+       j: () => Up,
+       m: () => Ap,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
+       v: () => Dp,
+       z: () => Pp
+     });
+     const Op = 5;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L716-L737` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L45) · [Before (L716-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L716-L737)

```diff
-       let zC = new sC({
-         multigraph: CC.isMultigraph()
-       }).setGraph(CC.graph());
-       return CC.nodes().forEach((ZC => {
-         CC.children(ZC).length || zC.setNode(ZC, CC.node(ZC))
-       })), CC.edges().forEach((ZC => {
-         zC.setEdge(ZC, CC.edge(ZC))
-       })), zC
-     }
- 
-     function tC(CC, zC) {
-       let ZC, QC, wC = CC.x,
-         bC = CC.y,
-         nC = zC.x - wC,
-         fC = zC.y - bC,
-         oC = CC.width / 2,
- ... (6 more removed lines; see GitHub link above)
+       return pp === Op
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L741-L771` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L49) · [Before (L741-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L741-L771)

```diff
-       let zC = Cz(UC(CC) + 1).map((() => []));
-       return CC.nodes().forEach((ZC => {
-         let QC = CC.node(ZC),
-           wC = QC.rank;
-         void 0 !== wC && (zC[wC] || (zC[wC] = []), zC[wC][QC.order] = ZC)
-       })), zC
-     }
- 
-     function jC(CC, zC, ZC, QC) {
-       let wC = {
-         width: 0,
-         height: 0
-       };
-       return arguments.length >= 4 && (wC.rank = ZC, wC.order = QC), TC(CC, "border", wC, zC)
-     }
-     var yC = 65535;
- ... (15 more removed lines; see GitHub link above)
+       return [...pp.features]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L775-L787` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L56-L63) · [Before (L775-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L775-L787)

```diff
-       let zC = CC.nodes().map((zC => {
-         let ZC = CC.node(zC).rank;
-         return void 0 === ZC ? Number.MIN_VALUE : ZC
-       }));
-       return LC(Math.max, zC)
-     }
- 
-     function BC(CC, zC) {
-       let ZC = Date.now();
-       try {
-         return zC()
-       } finally {
-         console.log(CC + " time: " + (Date.now() - ZC) + "ms")
+       if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) {
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         ip.push({
+           path: cp,
+           source: Op
+         })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L797-L806` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L84-L85) · [Before (L797-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L797-L806)

```diff
-       return CC + "" + ++kC
-     }
- 
-     function Cz(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == zC && (zC = CC, CC = 0);
-       let QC = CC => CC < zC;
-       ZC < 0 && (QC = CC => zC < CC);
-       let wC = [];
-       for (let bC = CC; QC(bC); bC += ZC) wC.push(bC);
+       const ip = {};
+       for (const cp of pp) ip[cp.path] = cp.source;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L811-L842` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L90) · [Before (L811-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L811-L842)

```diff
-       let ZC = {};
-       for (let QC of zC) void 0 !== CC[QC] && (ZC[QC] = CC[QC]);
-       return ZC
-     }
- 
-     function Zz(CC, zC) {
-       let ZC;
-       return ZC = "string" == typeof zC ? CC => CC[zC] : zC, Object.entries(CC).reduce(((CC, zC) => {
-         let [QC, wC] = zC;
-         return CC[QC] = ZC(wC, QC), CC
-       }), {})
-     }
-     var Qz = "\0";
- 
-     function wz(CC, zC, ZC) {
-       var QC, wC, bC, nC, fC, oC;
- ... (16 more removed lines; see GitHub link above)
+       return pp < ip ? -1 : pp > ip ? 1 : 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L847-L985` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L94-L97) · [Before (L847-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L847-L985)

```diff
-       CC._prev._next = CC._next, CC._next._prev = CC._prev, delete CC._next, delete CC._prev
-     }
- 
-     function fz(CC, zC) {
-       if ("_next" !== CC && "_prev" !== CC) return zC
-     }
-     var oz = class {
-         constructor() {
-           wC(this, "_sentinel");
-           let CC = {};
-           CC._next = CC._prev = CC, this._sentinel = CC
-         }
-         dequeue() {
-           let CC = this._sentinel,
-             zC = CC._prev;
-           if (zC !== CC) return nz(zC), zC
- ... (123 more removed lines; see GitHub link above)
+       const ip = new TextEncoder;
+       let cp = 0;
+       for (const {
+           source: Op
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L987-L1044` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L99) · [Before (L987-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L987-L1044)

```diff
-         let fC = bC;
-         return zC && "function" == typeof zC.node && (fC = nC), CC.sources().forEach(fC), CC.nodes().forEach(fC), ZC
-       }(CC, null != zC ? zC : null)).forEach((zC => {
-         let ZC = CC.edge(zC);
-         CC.removeEdge(zC), ZC.forwardName = zC.name, ZC.reversed = !0, CC.setEdge(zC.w, zC.v, ZC, VC("rev"))
-       }))
-     }
- 
-     function gz(CC) {
-       CC.graph().dummyChains = [], CC.edges().forEach((zC => function(CC, zC) {
-         let ZC, QC, wC, bC = zC.v,
-           nC = CC.node(bC).rank,
-           fC = zC.w,
-           oC = CC.node(fC).rank,
-           qC = zC.name,
-           FC = CC.edge(zC),
- ... (42 more removed lines; see GitHub link above)
+         of pp) cp += ip.encode(Op).byteLength;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1075-L1122` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L104-L107) · [Before (L1075-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L1075-L1122)

```diff
-       CC = function(CC) {
-         let zC = (new sC).setGraph(CC.graph());
-         return CC.nodes().forEach((ZC => zC.setNode(ZC, CC.node(ZC)))), CC.edges().forEach((ZC => {
-           let QC = zC.edge(ZC.v, ZC.w) || {
-               weight: 0,
-               minlen: 1
-             },
-             wC = CC.edge(ZC);
-           zC.setEdge(ZC.v, ZC.w, {
-             weight: QC.weight + wC.weight,
-             minlen: Math.max(QC.minlen, wC.minlen)
-           })
-         })), zC
-       }(CC), Sz(CC);
-       let zC, ZC, QC = Pz(CC);
-       for (hz(QC), vz(QC, CC); zC = Yz(QC);) ZC = dz(QC, CC, zC), mz(QC, CC, zC, ZC)
- ... (32 more removed lines; see GitHub link above)
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1126-L1283` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L112-L119) · [Before (L1126-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L1126-L1283)

```diff
-       arguments.length < 2 && (zC = CC.nodes()[0]), Kz(CC, {}, 1, zC)
-     }
- 
-     function Kz(CC, zC, ZC, QC, wC) {
-       let bC = ZC,
-         nC = CC.node(QC);
-       zC[QC] = !0;
-       let fC = CC.neighbors(QC);
-       return fC && fC.forEach((wC => {
-         Object.hasOwn(zC, wC) || (ZC = Kz(CC, zC, ZC, wC, QC))
-       })), nC.low = bC, nC.lim = ZC++, wC ? nC.parent = wC : delete nC.parent, ZC
-     }
- 
-     function Yz(CC) {
-       return CC.edges().find((zC => CC.edge(zC).cutvalue < 0))
-     }
- ... (142 more removed lines; see GitHub link above)
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Op = new Map;
+       ip.forEach(((pp, ip) => {
+         let {
+           numAnimStates: cp,
+           animStartIdx: op
+         } = pp;
+         for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1285-L1326` → after: `L121-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L121-L132) · [Before (L1285-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L1285-L1326)

```diff
-       let qC = jC(CC, "_bt"),
-         FC = jC(CC, "_bb"),
-         WC = CC.node(nC);
-       CC.setParent(qC, nC), WC.borderTop = qC, CC.setParent(FC, nC), WC.borderBottom = FC, oC.forEach((fC => {
-         var oC;
-         rz(CC, zC, ZC, QC, wC, bC, fC);
-         let WC = CC.node(fC),
-           NC = WC.borderTop ? WC.borderTop : fC,
-           MC = WC.borderBottom ? WC.borderBottom : fC,
-           gC = WC.borderTop ? QC : 2 * QC,
-           SC = NC !== MC ? 1 : wC - (null != (oC = bC[nC]) ? oC : 0) + 1;
-         CC.setEdge(qC, NC, {
-           weight: gC,
-           minlen: SC,
-           nestingEdge: !0
-         }), CC.setEdge(MC, FC, {
- ... (26 more removed lines; see GitHub link above)
+       const op = Object.entries(pp),
+         Ip = new Map;
+       for (const [Up, wp] of op) {
+         const pp = yp.exec(Up);
+         "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
+       }
+       const Sp = pp => {
+           const ip = yp.exec(pp);
+           return ip && Ip.has(ip[1]) ? {
+             root: ip[1],
+             rotation: Number(ip[2]) - 1
+           } : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1328-L1664` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L134-L137) · [Before (L1328-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L1328-L1664)

```diff
-         fC = wC[zC][bC - 1],
-         oC = TC(CC, "border", nC, ZC);
-       wC[zC][bC] = oC, CC.setParent(oC, QC), fC && CC.setEdge(fC, oC, {
-         weight: 1
-       })
-     }
- 
-     function az(CC) {
-       var zC;
-       let ZC = null == (zC = CC.graph().rankdir) ? void 0 : zC.toLowerCase();
-       ("bt" === ZC || "rl" === ZC) && function(CC) {
-         CC.nodes().forEach((zC => jz(CC.node(zC)))), CC.edges().forEach((zC => {
-           var ZC;
-           let QC = CC.edge(zC);
-           null == (ZC = QC.points) || ZC.forEach(jz), Object.hasOwn(QC, "y") && jz(QC)
-         }))
- ... (321 more removed lines; see GitHub link above)
+         xp = new Set(op.map((pp => {
+           let [ip] = pp;
+           return Sp(ip)?.root ?? ip
+         }))),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1666-L2077` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L139-L141) · [Before (L1666-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L1666-L2077)

```diff
-           QC.has(CC) || QC.set(CC, []), QC.get(CC).push(zC)
-         };
-       for (let bC of CC.nodes()) {
-         let zC = CC.node(bC);
-         if ("number" == typeof zC.rank && wC(zC.rank, bC), "number" == typeof zC.minRank && "number" == typeof zC.maxRank)
-           for (let CC = zC.minRank; CC <= zC.maxRank; CC++) CC !== zC.rank && wC(CC, bC)
-       }
-       return zC.map((function(zC) {
-         return zZ(CC, zC, ZC, QC.get(zC) || [])
-       }))
-     }
- 
-     function wZ(CC, zC, ZC, QC) {
-       let wC = !0,
-         bC = new sC;
-       CC.forEach((function(CC) {
- ... (396 more removed lines; see GitHub link above)
+           const Op = pp.replace(/_?0$/, "");
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
+         },
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2079-L2083` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L143-L154) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L2079-L2083)

```diff
-       wC.forEach((zC => {
-         let ZC = CC.node(zC);
-         ZC && ZC.rankdir && bC[zC] && fC.set(zC, (CC.children(zC) || []).filter((CC => CC !== zC)))
-       }));
-       let oC = new Set([...fC.values()].flat()),
+       for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
+       const Dp = op.reduce(((pp, ip) => {
+           let [, cp] = ip;
+           return Math.max(pp, cp + 1)
+         }), 0),
+         Ap = Array.from({
+           length: Dp
+         }, ((pp, ip) => ({
+           id: ip + 1,
+           rotation: 0
+         }))),
+         Pp = new Map,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2085-L2177` → after: `L156-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L156-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L156-L180) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L2085-L2177)

```diff
-       fC.forEach(((zC, ZC) => {
-         oC.has(ZC) || qC.set(ZC, (zC => {
-           let ZC = [],
-             QC = (CC.children(zC) || []).filter((CC => CC !== zC));
-           for (; QC.length > 0;) {
-             let zC = QC.shift();
-             ZC.push(zC), (CC.children(zC) || []).filter((CC => CC !== zC)).forEach((CC => QC.push(CC)))
-           }
-           return ZC
-         })(ZC))
-       }));
-       let FC = new Set([...qC.values()].flat()),
-         WC = CC => {
-           for (let [zC, ZC] of qC)
-             if (ZC.includes(CC)) return zC;
-           return CC
- ... (77 more removed lines; see GitHub link above)
+       for (const [yp, Up] of op) {
+         const pp = Sp(yp),
+           ip = Op.get(Up);
+         if (void 0 !== ip) {
+           const cp = Yp.get(ip);
+           Wp.set(yp, {
+             name: yp,
+             texture: cp,
+             kind: "frame"
+           }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
+             name: pp.root,
+             texture: cp,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2179-L2488` → after: `L182-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L182-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L182-L203) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L2179-L2488)

```diff
-             node: QC,
-             parent: wC
-           } = zC;
-           CC.setNode(ZC, QC), void 0 !== wC && CC.setParent(ZC, wC)
-         })), nC.forEach((zC => {
-           let {
-             edge: ZC,
-             label: QC
-           } = zC;
-           CC.setEdge(ZC, QC)
-         })), QC.nodes().forEach((zC => {
-           if (zC === ZC) return;
-           let wC = QC.node(zC),
-             bC = CC.node(zC);
-           bC && wC && "number" == typeof wC.x && "number" == typeof wC.y && (bC.x = FC + (wC.x - NC), bC.y = WC + (wC.y - MC))
-         })), delete qC._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: pp.rotation
+           }, Pp.set(cp, ip), Wp.set(yp, {
+             name: yp,
+             texture: cp,
+             kind: "rotation"
+           })
+         } else Pp.set(cp, Up + 1)
+       }
+       for (const yp of Pp.keys()) Wp.delete(yp);
+       for (const [yp, Up] of cp) {
+         const pp = Pp.get(Up);
+         void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
+       }
+       return {
+         named: [...Pp].sort(((pp, ip) => {
+           let [cp] = pp, [Op] = ip;
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2490-L2493` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/118.js#L205-L207) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/118.js#L2490-L2493)

```diff
-         }))
-       }(CC))), {
-         graph: CC,
-         rawNodes: qC
+         })),
+         aliases: [...Wp.values()],
+         layers: Ap
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (849 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4-L463` → after: `L5-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5-L26) · [Before (L4-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4-L463)

```diff
-   37105: (CC, zC, ZC) => {
-     var QC = {
-       "./67/67_Atlas.png": 27108,
-       "./67/67_Model.glb": 33193,
-       "./67/67_Reconstructed.glb": 33202,
-       "./67/variations/0_67_default.png": 27117,
-       "./Armour Collector/Armour Collector_Atlas.png": 27122,
-       "./Armour Collector/Armour Collector_Model.glb": 33205,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33210,
-       "./Armour Collector/variations/0_armour collector_default.png": 27124,
-       "./Bear/BearSaddle_Atlas.png": 27130,
-       "./Bear/Bear_Atlas.png": 27139,
-       "./Bear/Bear_Model.glb": 33219,
-       "./Bear/variations/0_bear_default.png": 27146,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27155,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 33222,
- ... (444 more removed lines; see GitHub link above)
+   6328: function(pp, ip, cp) {
+     var Op;
+     ! function() {
+       var op, Ip = 1e9,
+         Sp = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         xp = !0,
+         Lp = "[DecimalError] ",
+         Yp = Lp + "Invalid argument: ",
+         Dp = Lp + "Exponent out of range: ",
+         Ap = Math.floor,
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L465-L468` → after: `L28-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L28-L38) · [Before (L465-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L465-L468)

```diff
-     function bC(CC) {
-       if (!ZC.o(QC, CC)) {
-         var zC = new Error("Cannot find module '" + CC + "'");
-         throw zC.code = "MODULE_NOT_FOUND", zC
+       function tp(pp, ip) {
+         var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap = pp.constructor,
+           Pp = Ap.precision;
+         if (!pp.s || !ip.s) return ip.s || (ip = new Ap(pp)), xp ? Cp(ip, Pp) : ip;
+         if (Yp = pp.d, Dp = ip.d, Sp = pp.e, op = ip.e, Yp = Yp.slice(), Ip = Sp - op) {
+           for (Ip < 0 ? (Op = Yp, Ip = -Ip, Lp = Dp.length) : (Op = Dp, op = Sp, Lp = Yp.length), Ip > (Lp = (Sp = Math.ceil(Pp / 7)) > Lp ? Sp + 1 : Lp + 1) && (Ip = Lp, Op.length = 1), Op.reverse(); Ip--;) Op.push(0);
+           Op.reverse()
+         }
+         for ((Lp = Yp.length) - (Ip = Dp.length) < 0 && (Ip = Lp, Op = Dp, Dp = Yp, Yp = Op), cp = 0; Ip;) cp = (Yp[--Ip] = Yp[Ip] + Dp[Ip] + cp) / yp | 0, Yp[Ip] %= yp;
+         for (cp && (Yp.unshift(cp), ++op), Lp = Yp.length; 0 == Yp[--Lp];) Yp.pop();
+         return ip.d = Yp, ip.e = op, xp ? Cp(ip, Pp) : ip
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L483-L486` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L41-L43) · [Before (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L483-L486)

```diff
-     function bC(CC) {
-       var zC = [],
-         ZC = [],
-         QC = null;
+       function Hp(pp, ip, cp) {
+         if (pp !== ~~pp || pp < ip || pp > cp) throw Error(Yp + pp)
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L488-L508` → after: `L45-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L45-L54) · [Before (L488-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L488-L508)

```diff
-       function bC(ZC, wC) {
-         var bC = QC[ZC],
-           fC = QC[wC];
-         bC && fC && (function(CC, zC, ZC, QC) {
-           if (CC.lnC) return zC.lnC ? function(CC, zC) {
-             var ZC = (CC[3] - CC[0]) / 2,
-               QC = (zC[3] - zC[0]) / 2,
-               wC = CC[0] + ZC - (zC[0] + QC),
-               bC = CC[2] + ZC - (zC[2] + QC),
-               nC = ZC + QC;
-             return wC * wC + bC * bC <= nC * nC
-           }(ZC, QC) : nC(ZC, QC);
-           if (zC.lnC) return nC(QC, ZC);
-           return !0
-         }(bC, fC, zC[ZC], zC[wC]) && function(CC, zC, ZC) {
-           var QC = zC.mH,
- ... (5 more removed lines; see GitHub link above)
+       function dp(pp) {
+         var ip, cp, Op, op = pp.length - 1,
+           Ip = "",
+           Sp = pp[0];
+         if (op > 0) {
+           for (Ip += Sp, ip = 1; ip < op; ip++)(cp = 7 - (Op = pp[ip] + "").length) && (Ip += Rp(cp)), Ip += Op;
+           (cp = 7 - (Op = (Sp = pp[ip]) + "").length) && (Ip += Rp(cp))
+         } else if (0 === Sp) return "0";
+         for (; Sp % 10 === 0;) Sp /= 10;
+         return Ip + Sp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L510-L538` → after: `L56-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L56-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L56-L189) · [Before (L510-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L510-L538)

```diff
-       return {
-         name: "collideEntities",
-         order: 70,
-         state: {
-           lnC: !1,
-           cZC: 1,
-           uZC: 1,
-           callback: null,
-           lZC: 0,
-           XZC: 0
-         },
-         xR: null,
-         lY: null,
-         system: function(nC, fC) {
-           for (var oC = CC.JR, qC = 0; qC < fC.length; qC++) {
-             var FC = fC[qC].mH,
- ... (13 more removed lines; see GitHub link above)
+       vp.absoluteValue = vp.abs = function() {
+         var pp = new this.constructor(this);
+         return pp.s && (pp.s = 1), pp
+       }, vp.comparedTo = vp.cmp = function(pp) {
+         var ip, cp, Op, op, Ip = this;
+         if (pp = new Ip.constructor(pp), Ip.s !== pp.s) return Ip.s || -pp.s;
+         if (Ip.e !== pp.e) return Ip.e > pp.e ^ Ip.s < 0 ? 1 : -1;
+         for (ip = 0, cp = (Op = Ip.d.length) < (op = pp.d.length) ? Op : op; ip < cp; ++ip)
+           if (Ip.d[ip] !== pp.d[ip]) return Ip.d[ip] > pp.d[ip] ^ Ip.s < 0 ? 1 : -1;
+         return Op === op ? 0 : Op > op ^ Ip.s < 0 ? 1 : -1
+       }, vp.decimalPlaces = vp.dp = function() {
+         var pp = this,
+           ip = pp.d.length - 1,
+           cp = 7 * (ip - pp.e);
+         if (ip = pp.d[ip])
+           for (; ip % 10 == 0; ip /= 10) cp--;
+ ... (118 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L543-L548` → after: `L260-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L260-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L260-L278) · [Before (L543-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L543-L548)

```diff
-         var ZC = (CC[3] - CC[0]) / 2,
-           QC = CC[0] + ZC,
-           wC = CC[2] + ZC,
-           bC = fC(QC, zC[0], zC[3]) - QC,
-           nC = fC(wC, zC[2], zC[5]) - wC;
-         return bC * bC + nC * nC <= ZC * ZC
+         var cp, Op, Ip, Sp, Lp, Yp = 0,
+           Ap = 0,
+           Wp = pp.constructor,
+           yp = Wp.precision;
+         if (kp(pp) > 16) throw Error(Dp + kp(pp));
+         if (!pp.s) return new Wp(op);
+         for (null == ip ? (xp = !1, Lp = yp) : Lp = ip, Sp = new Wp(.03125); pp.abs().gte(.1);) pp = pp.times(Sp), Ap += 5;
+         for (Lp += Math.log(Pp(2, Ap)) / Math.LN10 * 2 + 5 | 0, cp = Op = Ip = new Wp(op), Wp.precision = Lp;;) {
+           if (Op = Cp(Op.times(pp), Lp), cp = cp.times(++Yp), dp((Sp = Ip.plus(ep(Op, cp, Lp))).d).slice(0, Lp) === dp(Ip.d).slice(0, Lp)) {
+             for (; Ap--;) Ip = Cp(Ip.times(Ip), Lp);
+             return Wp.precision = yp, null == ip ? (xp = !0, Cp(Ip, yp)) : Ip
+           }
+           Ip = Sp
+         }
+       }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L552` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L282-L283) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L552)

```diff
-         return CC < zC ? zC : CC > ZC ? ZC : CC
+         if (ip > pp.LN10.sd()) throw xp = !0, cp && (pp.precision = cp), Error(Lp + "LN10 precision limit exceeded");
+         return Cp(new pp(pp.LN10), ip)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L554-L574` → after: `L285-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L285-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L285-L288) · [Before (L554-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L554-L574)

```diff
-     }
-   },
-   38162: (CC, zC, ZC) => {
-     function QC(CC) {
-       return {
-         name: "collideTerrain",
-         order: 0,
-         state: {
-           callback: null
-         },
-         xR: function(zC, ZC) {
-           var QC = CC.entities;
-           QC.cnC(zC) && (QC.MCC(zC).body.GN = function(ZC) {
-             var QC = CC.JR.unC(zC).callback;
-             QC && QC(ZC, zC)
-           })
- ... (5 more removed lines; see GitHub link above)
+ 
+       function Rp(pp) {
+         for (var ip = ""; pp--;) ip += "0";
+         return ip
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L576-L592` → after: `L290-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L290-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L290-L304) · [Before (L576-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L576-L592)

```diff
-     }
-     ZC.r(zC), ZC.d(zC, {
-       default: () => QC
-     })
-   },
-   38179: (CC, zC, ZC) => {
-     function QC(CC) {
-       return {
-         name: "gCC",
-         order: 99,
-         state: {
-           aY: 1.5
-         },
-         xR: null,
-         lY: null,
-         system: function(zC, ZC) {
- ... (1 more removed lines; see GitHub link above)
+ 
+       function qp(pp, ip) {
+         var cp, Op, Ip, Sp, Yp, Dp, Ap, Pp, Wp, yp = 1,
+           Up = pp,
+           wp = Up.d,
+           vp = Up.constructor,
+           tp = vp.precision;
+         if (Up.s < 1) throw Error(Lp + (Up.s ? "NaN" : "-Infinity"));
+         if (Up.eq(op)) return new vp(0);
+         if (null == ip ? (xp = !1, Pp = tp) : Pp = ip, Up.eq(10)) return null == ip && (xp = !0), mp(vp, Pp);
+         if (Pp += 10, vp.precision = Pp, Op = (cp = dp(wp)).charAt(0), Sp = kp(Up), !(Math.abs(Sp) < 15e14)) return Ap = mp(vp, Pp + 2, tp).times(Sp + ""), Up = qp(new vp(Op + "." + cp.slice(1)), Pp - 10).plus(Ap), vp.precision = tp, null == ip ? (xp = !0, Cp(Up, tp)) : Up;
+         for (; Op < 7 && 1 != Op || 1 == Op && cp.charAt(1) > 3;) Op = (cp = dp((Up = Up.times(pp)).d)).charAt(0), yp++;
+         for (Sp = kp(Up), Op > 1 ? (Up = new vp("0." + cp), Sp++) : Up = new vp(Op + "." + cp.slice(1)), Dp = Yp = Up = ep(Up.minus(op), Up.plus(op), Pp), Wp = Cp(Up.times(Up), Pp), Ip = 3;;) {
+           if (Yp = Cp(Yp.times(Wp), Pp), dp((Ap = Dp.plus(ep(Yp, new vp(Ip), Pp))).d).slice(0, Pp) === dp(Dp.d).slice(0, Pp)) return Dp = Dp.times(2), 0 !== Sp && (Dp = Dp.plus(mp(vp, Pp + 2, tp).times(Sp + ""))), Dp = ep(Dp, new vp(yp), Pp), vp.precision = tp, null == ip ? (xp = … [truncated]
+           Dp = Ap, Ip += 2
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L597-L603` → after: `L308-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L308-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L308-L320) · [Before (L597-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L597-L603)

```diff
-     function wC(CC, zC, ZC) {
-       if (ZC.JR.rnC(CC.mH)) {
-         var QC = ZC.JR.fzC(CC.mH).mesh;
-         if (QC.metadata) {
-           var wC = zC < CC.aY;
-           ZC.Vg.S_(QC, !wC)
-         }
+       function Mp(pp, ip) {
+         var cp, Op, op;
+         for ((cp = ip.indexOf(".")) > -1 && (ip = ip.replace(".", "")), (Op = ip.search(/e/i)) > 0 ? (cp < 0 && (cp = Op), cp += +ip.slice(Op + 1), ip = ip.substring(0, Op)) : cp < 0 && (cp = ip.length), Op = 0; 48 === ip.charCodeAt(Op);) ++Op;
+         for (op = ip.length; 48 === ip.charCodeAt(op - 1);) --op;
+         if (ip = ip.slice(Op, op)) {
+           if (op -= Op, cp = cp - Op - 1, pp.e = Ap(cp / 7), pp.d = [], Op = (cp + 1) % 7, cp < 0 && (Op += 7), Op < op) {
+             for (Op && pp.d.push(+ip.slice(0, Op)), op -= 7; Op < op;) pp.d.push(+ip.slice(Op, Op += 7));
+             Op = 7 - (ip = ip.slice(Op)).length
+           } else Op -= op;
+           for (; Op--;) ip += "0";
+           if (pp.d.push(+ip), xp && (pp.e > wp || pp.e < -wp)) throw Error(Dp + cp)
+         } else pp.s = 0, pp.e = 0, pp.d = [0];
+         return pp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L617-L620` → after: `L323-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L323-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L323-L345) · [Before (L617-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L617-L620)

```diff
-     function bC(CC) {
-       let zC = 0;
-       const ZC = wC().create(),
-         QC = wC().create();
+       function Cp(pp, ip, cp) {
+         var Op, op, Ip, Sp, Lp, Yp, Wp, Up, vp = pp.d;
+         for (Sp = 1, Ip = vp[0]; Ip >= 10; Ip /= 10) Sp++;
+         if ((Op = ip - Sp) < 0) Op += 7, op = ip, Wp = vp[Up = 0];
+         else {
+           if ((Up = Math.ceil((Op + 1) / 7)) >= (Ip = vp.length)) return pp;
+           for (Wp = Ip = vp[Up], Sp = 1; Ip >= 10; Ip /= 10) Sp++;
+           op = (Op %= 7) - 7 + Sp
+         }
+         if (void 0 !== cp && (Lp = Wp / (Ip = Pp(10, Sp - op - 1)) % 10 | 0, Yp = ip < 0 || void 0 !== vp[Up + 1] || Wp % Ip, Yp = cp < 4 ? (Lp || Yp) && (0 == cp || cp == (pp.s < 0 ? 3 : 2)) : Lp > 5 || 5 == Lp && (4 == cp || Yp || 6 == cp && (Op > 0 ? op > 0 ? Wp / Pp(10, Sp -  … [truncated]
+         if (0 == Op ? (vp.length = Up, Ip = 1, Up--) : (vp.length = Up + 1, Ip = Pp(10, 7 - Op), vp[Up] = op > 0 ? (Wp / Pp(10, Sp - op) % Pp(10, op) | 0) * Ip : 0), Yp)
+           for (;;) {
+             if (0 == Up) {
+               (vp[0] += Ip) == yp && (vp[0] = 1, ++pp.e);
+               break
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L623-L634` → after: `L348-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L348-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L348-L365) · [Before (L623-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L623-L634)

```diff
-         if (nC.snC === zC) return;
-         nC.snC = zC;
-         const oC = CC.JR.BzC(nC.og);
-         oC && bC(oC, fC);
-         const qC = CC.JR.lL(nC.mH),
-           FC = CC.JR.lL(nC.og);
-         if (FC)
-           if (nC.ZZC ? nC.ZZC(ZC, fC, nC.offset) : wC().copy(ZC, nC.offset), fC) wC().add(qC.nB, FC.nB, ZC);
-           else {
-             const zC = qC.YN || CC.YN;
-             for (let CC = 0; CC < 3; CC++) QC[CC] = FC.position[CC] - zC[CC] + ZC[CC];
-             CC.JR.anC(nC.mH, QC)
+         var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap, Pp, Wp = pp.constructor,
+           Up = Wp.precision;
+         if (!pp.s || !ip.s) return ip.s ? ip.s = -ip.s : ip = new Wp(pp), xp ? Cp(ip, Up) : ip;
+         if (Yp = pp.d, Pp = ip.d, Op = ip.e, Dp = pp.e, Yp = Yp.slice(), Sp = Dp - Op) {
+           for ((Ap = Sp < 0) ? (cp = Yp, Sp = -Sp, Lp = Pp.length) : (cp = Pp, Op = Dp, Lp = Yp.length), Sp > (op = Math.max(Math.ceil(Up / 7), Lp) + 2) && (Sp = op, cp.length = 1), cp.reverse(), op = Sp; op--;) cp.push(0);
+           cp.reverse()
+         } else {
+           for ((Ap = (op = Yp.length) < (Lp = Pp.length)) && (Lp = op), op = 0; op < Lp; op++)
+             if (Yp[op] != Pp[op]) {
+               Ap = Yp[op] < Pp[op];
+               break
+             } Sp = 0
+         }
+         for (Ap && (cp = Yp, Yp = Pp, Pp = cp, ip.s = -ip.s), Lp = Yp.length, op = Pp.length - Lp; op > 0; --op) Yp[Lp++] = 0;
+         for (op = Pp.length; op > Sp;) {
+           if (Yp[--op] < Pp[op]) {
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L636-L665` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L367) · [Before (L636-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L636-L665)

```diff
-         else nC.zZC || (nC.TnC && nC.TnC(nC.mH), CC.JR.uH(nC.mH, CC.JR.names.Xx))
-       }
-       return {
-         name: "Xx",
-         order: CC.room ? 50 : 97,
-         state: {
-           og: 0,
-           offset: null,
-           ZZC: null,
-           OzC: !0,
-           TnC: null,
-           zZC: !1,
-           snC: 0
-         },
-         xR: function(ZC, QC) {
-           QC.offset = QC.offset ? wC().clone(QC.offset) : wC().create();
- ... (14 more removed lines; see GitHub link above)
+           Yp[op] -= Pp[op]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L681-L688` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L374-L379) · [Before (L681-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L681-L688)

```diff
-     function qC(CC, zC) {
-       const ZC = zC.LQC || zC;
-       void 0 === ZC.ZE?.aLightLevels && (ZC.UH("aLightLevels", 4), ZC.ZE.aLightLevels = (0, bC.j)());
-       const {
-         ZE: QC
-       } = zC;
-       !QC || void 0 !== QC.aLightLevels && null !== QC.aLightLevels && QC.aLightLevels !== ZC.ZE?.aLightLevels || (QC.aLightLevels = (0, bC.j)()), CC.Vg.dzC && ZC.material && CC.Vg.dzC(ZC.material)
-     }
+       function Xp(pp, ip, cp) {
+         var Op, op = kp(pp),
+           Ip = dp(pp.d),
+           Sp = Ip.length;
+         return ip ? (cp && (Op = cp - Sp) > 0 ? Ip = Ip.charAt(0) + "." + Ip.slice(1) + Rp(Op) : Sp > 1 && (Ip = Ip.charAt(0) + "." + Ip.slice(1)), Ip = Ip + (op < 0 ? "e" : "e+") + op) : op < 0 ? (Ip = "0." + Rp(-op - 1) + Ip, cp && (Op = cp - Sp) > 0 && (Ip += Rp(Op))) : op >=  … [truncated]
+       }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L690-L694` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L381-L383) · [Before (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L690-L694)

```diff
-     function FC(CC, zC) {
-       const ZC = (0, bC.i)(zC);
-       for (const QC of ZC) qC(CC, QC);
-       return ZC
-     }
+       function lp(pp, ip) {
+         if (pp.length > ip) return pp.length = ip, !0
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L696-L749` → after: `L385-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L385-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L385-L410) · [Before (L696-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L696-L749)

```diff
-     function WC(CC) {
-       return {
-         name: "mesh",
-         order: 100,
-         state: {
-           WH: null,
-           AZC: null,
-           mesh: null,
-           offset: null,
-           jnC: null,
-           tS: !1,
-           ynC: !0,
-           JZC: !0,
-           LnC: null,
-           UnC: null,
-           BnC: -1
- ... (38 more removed lines; see GitHub link above)
+       function Qp(pp) {
+         if (!pp || "object" !== typeof pp) throw Error(Lp + "Object expected");
+         var ip, cp, Op, op = ["precision", 1, Ip, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
+         for (ip = 0; ip < op.length; ip += 3)
+           if (void 0 !== (Op = pp[cp = op[ip]])) {
+             if (!(Ap(Op) === Op && Op >= op[ip + 1] && Op <= op[ip + 2])) throw Error(Yp + cp + ": " + Op);
+             this[cp] = Op
+           } if (void 0 !== (Op = pp[cp = "LN10"])) {
+           if (Op != Math.LN10) throw Error(Yp + cp + ": " + Op);
+           this[cp] = new this(Op)
+         }
+         return this
+       }
+       Sp = function pp(ip) {
+         var cp, Op, op;
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L756-L768` → after: `L447-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L447-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L447-L459) · [Before (L756-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L756-L768)

```diff
-   38078: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       PhysicsState: () => bC,
-       default: () => nC,
-       setFloatingYValue: () => qC,
-       zfC: () => oC,
-       ZfC: () => FC
-     });
-     var QC = ZC(338),
-       wC = ZC.n(QC);
-     class bC {
-       constructor() {
-         this.body = null, this.uQ = null, this.MN = null
+   5469: (pp, ip, cp) => {
+     var Op = cp(5475),
+       op = cp(5477),
+       Ip = cp(5496),
+       Sp = cp(5498),
+       xp = cp(5506);
+ 
+     function Lp(pp) {
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+         this.set(Op[0], Op[1])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L773-L799` → after: `L476-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L476-L480) · [Before (L773-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L773-L799)

```diff
-       return {
-         name: "physics",
-         order: 40,
-         state: new bC,
-         xR: function(zC, ZC) {
-           ZC.MN = CC, ZC.uQ = null, ZC.body = CC.physics.IN(), oC(ZC, CC.JR.lL(ZC.mH))
-         },
-         lY: function(zC, ZC) {
-           if (CC.JR.hasPosition(ZC.mH)) {
-             var QC = CC.JR.lL(ZC.mH);
-             FC(ZC, QC), WC(ZC, QC, 0, !1)
-           }
-           CC.physics.iN(ZC.body)
-         },
-         system: function(zC, ZC) {
-           for (var QC = 0; QC < ZC.length; QC++) {
- ... (11 more removed lines; see GitHub link above)
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+         this.set(Op[0], Op[1])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L802` → after: `L483-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L483-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L483-L496) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L802)

```diff
-     var fC = wC().create();
+     Lp.prototype.clear = Op, Lp.prototype.delete = op, Lp.prototype.get = Ip, Lp.prototype.has = Sp, Lp.prototype.set = xp, pp.exports = Lp
+   },
+   5955: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "Promise");
+     pp.exports = Op
+   },
+   5964: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "Set");
+     pp.exports = Op
+   },
+   5791: (pp, ip, cp) => {
+     var Op = cp(5364),
+       op = cp(5794),
+       Ip = cp(5801);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L804-L807` → after: `L498-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L498-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L498-L501) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L804-L807)

```diff
-     function oC(CC, zC) {
-       var ZC = CC.body.wN,
-         QC = zC.GZC;
-       wC().copy(ZC.base, QC), wC().set(ZC.vec, zC.width, zC.height, zC.width), wC().add(ZC.max, ZC.base, ZC.vec), qC(CC, zC, CC.uQ)
+     function Sp(pp) {
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.__data__ = new Op; ++ip < cp;) this.add(pp[ip])
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L810-L813` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L513-L515) · [Before (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L810-L813)

```diff
-     function qC(CC, zC, ZC) {
-       CC.uQ = ZC;
-       const QC = zC.YN ?? CC.MN.YN;
-       CC.body.Qr = null !== ZC ? ZC - QC[1] : null
+     function Yp(pp) {
+       var ip = this.__data__ = new Op(pp);
+       this.size = ip.size
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L815-L820` → after: `L517-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L517-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L517-L543) · [Before (L815-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L815-L820)

```diff
- 
-     function FC(CC, zC) {
-       var ZC = CC.body.wN.base,
-         QC = zC.width / 2,
-         wC = zC.DCC;
-       wC[0] = ZC[0] + QC, wC[1] = ZC[1], wC[2] = ZC[2] + QC
+     Yp.prototype.clear = op, Yp.prototype.delete = Ip, Yp.prototype.get = Sp, Yp.prototype.has = xp, Yp.prototype.set = Lp, pp.exports = Yp
+   },
+   5272: (pp, ip, cp) => {
+     var Op = cp(5231).Symbol;
+     pp.exports = Op
+   },
+   5822: (pp, ip, cp) => {
+     var Op = cp(5231).Uint8Array;
+     pp.exports = Op
+   },
+   5968: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "WeakMap");
+     pp.exports = Op
+   },
+   6058: pp => {
+     pp.exports = function(pp, ip, cp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L822-L825` → after: `L545-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L545-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L545-L550) · [Before (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L822-L825)

```diff
- 
-     function WC(CC, zC, ZC, QC) {
-       var bC = CC.body.Np;
-       wC().wb(fC, zC.DCC, bC, ZC), QC && wC().lerp(fC, zC.nB, fC, .3), wC().copy(zC.nB, fC)
+   },
+   6391: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
+         if (!ip(pp[cp], cp, pp)) return !1;
+       return !0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L828-L837` → after: `L553-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L553-L557) · [Before (L828-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L828-L837)

```diff
-   38074: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       PositionState: () => wC,
-       default: () => bC,
-       wfC: () => nC
-     });
-     const QC = ZC(338);
-     class wC {
-       constructor() {
-         this.position = null, this.width = .8, this.height = .8, this.DCC = null, this.nB = null, this.GZC = null, this.YN = null
+   5873: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length, op = 0, Ip = []; ++cp < Op;) {
+         var Sp = pp[cp];
+         ip(Sp, cp, pp) && (Ip[op++] = Sp)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L840-L860` → after: `L561-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L561-L565) · [Before (L840-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L840-L860)

```diff
- 
-     function bC(CC) {
-       return {
-         name: "position",
-         order: 41,
-         state: new wC,
-         xR: function(zC, ZC) {
-           var wC = [0, 0, 0];
-           ZC.position && QC.copy(wC, ZC.position), ZC.position = wC, ZC.DCC = QC.create(), ZC.nB = QC.create(), ZC.GZC = new Float32Array(6), CC.wzC(ZC.position, null, ZC.DCC), QC.copy(ZC.nB, ZC.DCC), nC(ZC)
-         },
-         lY: null,
-         system: function(zC, ZC) {
-           for (var QC = 0; QC < ZC.length; QC++) {
-             var wC = ZC[QC],
-               bC = wC.YN ?? CC.YN,
-               fC = wC.position,
- ... (5 more removed lines; see GitHub link above)
+   },
+   6136: (pp, ip, cp) => {
+     var Op = cp(6142);
+     pp.exports = function(pp, ip) {
+       return !!(null == pp ? 0 : pp.length) && Op(pp, ip, 0) > -1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L862-L867` → after: `L567-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L567-L572) · [Before (L862-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L862-L867)

```diff
- 
-     function nC(CC) {
-       var zC = CC.width / 2,
-         ZC = CC.DCC,
-         QC = CC.GZC;
-       QC[0] = ZC[0] - zC, QC[1] = ZC[1], QC[2] = ZC[2] - zC, QC[3] = ZC[0] + zC, QC[4] = ZC[1] + CC.height, QC[5] = ZC[2] + zC
+   },
+   6167: pp => {
+     pp.exports = function(pp, ip, cp) {
+       for (var Op = -1, op = null == pp ? 0 : pp.length; ++Op < op;)
+         if (cp(ip, pp[Op])) return !0;
+       return !1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L870-L887` → after: `L575-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L575-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L575-L592) · [Before (L870-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L870-L887)

```diff
-   38080: (CC, zC, ZC) => {
-     function QC(CC) {
-       var zC = "bfC";
-       return {
-         name: zC,
-         order: 99,
-         state: {
-           time: 100.1
-         },
-         xR: null,
-         lY: null,
-         system: function(ZC, QC) {
-           for (var wC = 0; wC < QC.length; wC++) {
-             var bC = QC[wC];
-             bC.time -= ZC, bC.time < 0 && CC.JR.uH(bC.mH, zC)
-           }
- ... (2 more removed lines; see GitHub link above)
+   5884: (pp, ip, cp) => {
+     var Op = cp(5889),
+       op = cp(5715),
+       Ip = cp(5310),
+       Sp = cp(5895),
+       xp = cp(5674),
+       Lp = cp(5910),
+       Yp = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp, ip) {
+       var cp = Ip(pp),
+         Dp = !cp && op(pp),
+         Ap = !cp && !Dp && Sp(pp),
+         Pp = !cp && !Dp && !Ap && Lp(pp),
+         Wp = cp || Dp || Ap || Pp,
+         yp = Wp ? Op(pp.length, String) : [],
+         Up = yp.length;
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L893-L918` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L595-L598) · [Before (L893-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L893-L918)

```diff
-   38057: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => pC,
-       f: () => AC,
-       h: () => MC
-     });
-     var QC = ZC(38063),
-       wC = ZC.n(QC),
-       bC = ZC(338),
-       nC = ZC.n(bC),
-       fC = ZC(38074),
-       oC = ZC(38078);
-     class qC {
-       constructor() {
-         this.runs = 0, this.loopMs = 0, this.byComponent = new Map
-       }
- ... (10 more removed lines; see GitHub link above)
+   5565: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length, op = Array(Op); ++cp < Op;) op[cp] = ip(pp[cp], cp, pp);
+       return op
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L920-L922` → after: `L600-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L600-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L600-L659) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L920-L922)

```diff
-     class FC {
-       constructor(CC) {
-         this.sampleRate = CC, this.ticks = new qC, this.renders = new qC
+   },
+   5706: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = ip.length, op = pp.length; ++cp < Op;) pp[op + cp] = ip[cp];
+       return pp
+     }
+   },
+   5805: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
+         if (ip(pp[cp], cp, pp)) return !0;
+       return !1
+     }
+   },
+   6219: pp => {
+     pp.exports = function(pp) {
+ ... (44 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L924-L925` → after: `L661-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L661-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L661-L679) · [Before (L924-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L924-L925)

```diff
-       reset() {
-         this.ticks.reset(), this.renders.reset()
+       return Yp
+     }
+   },
+   6149: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       for (var op = pp.length, Ip = cp + (Op ? 1 : -1); Op ? Ip-- : ++Ip < op;)
+         if (ip(pp[Ip], Ip, pp)) return Ip;
+       return -1
+     }
+   },
+   5699: (pp, ip, cp) => {
+     var Op = cp(5706),
+       op = cp(5713);
+     pp.exports = function pp(ip, cp, Ip, Sp, xp) {
+       var Lp = -1,
+         Yp = ip.length;
+ ... (3 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L928-L979` → after: `L683-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L683-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L683-L692) · [Before (L928-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L928-L979)

```diff
-     class WC {
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
-           let CC = 2654435769;
-           return () => (CC ^= CC << 13, CC ^= CC >>> 17, CC ^= CC << 5, (CC >>> 0) / 4294967296)
-         }();
-         this.ecs = CC, this.random = zC, this.windows = [], this.sampleRate = 0, this.runNames = [], this.runMs = [], this.runStates = [], this.now = () => performance.now();
-         const ZC = CC.ZN,
-           QC = CC.render;
-         CC.ZN = zC => this.sampleRate > 0 && this.random() < this.sampleRate && CC._systems.length > 0 ? (this.runTimed(CC._systems, "system", zC), CC) : ZC(zC), CC.render = zC => this.sampleRate > 0 && this.random() < this.sampleRate && CC._renderSystems.length > 0 ? (this.runTi … [truncated]
-       }
-       openWindow(CC) {
-         const zC = new FC(CC);
-         return this.windows.push(zC), this.updateSampleRate(), zC
-       }
-       closeWindow(CC) {
- ... (36 more removed lines; see GitHub link above)
+   },
+   6033: (pp, ip, cp) => {
+     var Op = cp(6035)();
+     pp.exports = Op
+   },
+   6030: (pp, ip, cp) => {
+     var Op = cp(6033),
+       op = cp(5882);
+     pp.exports = function(pp, ip) {
+       return pp && Op(pp, ip, op)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L981-L1154` → after: `L694-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L694-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L694-L700) · [Before (L981-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L981-L1154)

```diff
-     var gC = {
-       ffC: 10
-     };
-     const SC = {
-       physics: {
-         Qg: ZC(38078),
-         server: !0
-       },
-       position: {
-         Qg: ZC(38074),
-         server: !0
-       },
-       Zg: {},
-       bfC: {
-         Qg: ZC(38080),
-         server: !0
- ... (158 more removed lines; see GitHub link above)
+   },
+   5332: (pp, ip, cp) => {
+     var Op = cp(5340),
+       op = cp(5569);
+     pp.exports = function(pp, ip) {
+       for (var cp = 0, Ip = (ip = Op(ip, pp)).length; null != pp && cp < Ip;) pp = pp[op(ip[cp++])];
+       return cp && cp == Ip ? pp : void 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1156-L1160` → after: `L702-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L702-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L702-L708) · [Before (L1156-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1156-L1160)

```diff
- 
-     function PC(CC, zC, ZC, QC, wC) {
-       var bC = CC[zC] + ZC,
-         nC = CC[zC] + QC;
-       Math.abs(bC - Math.round(bC)) < .002 && (CC[zC] += .002), Math.abs(nC - Math.round(nC)) < .001 && (CC[zC] -= .001)
+   },
+   5856: (pp, ip, cp) => {
+     var Op = cp(5706),
+       op = cp(5310);
+     pp.exports = function(pp, ip, cp) {
+       var Ip = ip(pp);
+       return op(pp) ? Ip : Op(Ip, cp(pp))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1162-L1165` → after: `L710-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L710-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L710-L717) · [Before (L1162-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1162-L1165)

```diff
-     const GC = [0, 0, 0, 0, 0, 0];
- 
-     function RC(CC, zC) {
-       return !(CC[0] > zC[3]) && (!(CC[1] > zC[4]) && (!(CC[2] > zC[5]) && (!(CC[3] < zC[0]) && (!(CC[4] < zC[1]) && !(CC[5] < zC[2])))))
+   },
+   5266: (pp, ip, cp) => {
+     var Op = cp(5272),
+       op = cp(5277),
+       Ip = cp(5284),
+       Sp = Op ? Op.toStringTag : void 0;
+     pp.exports = function(pp) {
+       return null == pp ? void 0 === pp ? "[object Undefined]" : "[object Null]" : Sp && Sp in Object(pp) ? op(pp) : Ip(pp)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1169-L1209` → after: `L720-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L720-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L720-L811) · [Before (L1169-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1169-L1209)

```diff
-   37353: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => wz,
-       c: () => Fz,
-       g: () => Cz,
-       k: () => Zz,
-       n: () => UC,
-       o: () => BC,
-       p: () => kC,
-       q: () => LC,
-       s: () => OC,
-       v: () => Wz,
-       x: () => VC,
-       y: () => zz
-     });
-     ZC(338), ZC(2837);
- ... (25 more removed lines; see GitHub link above)
+   6303: pp => {
+     pp.exports = function(pp, ip) {
+       return pp > ip
+     }
+   },
+   5994: pp => {
+     pp.exports = function(pp, ip) {
+       return null != pp && ip in Object(pp)
+     }
+   },
+   6142: (pp, ip, cp) => {
+     var Op = cp(6149),
+       op = cp(6157),
+       Ip = cp(6162);
+     pp.exports = function(pp, ip, cp) {
+       return ip === ip ? Ip(pp, ip, cp) : Op(pp, op, cp)
+ ... (76 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1212-L1214` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L814) · [Before (L1212-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1212-L1214)

```diff
-       clear() {
-         this.pending.length = 0
-       }
+       return !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1216-L1223` → after: `L816-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L816-L819) · [Before (L1216-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1216-L1223)

```diff
- 
-     function NC(CC, zC, ZC, QC, wC, bC) {
-       if ("number" !== typeof ZC) {
-         for (let QC = 0; QC < ZC.length; QC++)
-           if (!MC(CC[zC + QC], ZC[QC])) return !1;
-         return !0
-       }
-       return !!MC(CC[zC], ZC) && (void 0 === QC || !!MC(CC[zC + 1], QC) && (void 0 === wC || !!MC(CC[zC + 2], wC) && (void 0 === bC || MC(CC[zC + 3], bC))))
+   },
+   6157: pp => {
+     pp.exports = function(pp) {
+       return pp !== pp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1225-L1228` → after: `L821-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L821-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L821-L834) · [Before (L1225-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1225-L1228)

```diff
- 
-     function MC(CC, zC) {
-       const ZC = Math.fround(zC);
-       return CC === ZC && (0 !== ZC || 1 / CC === 1 / ZC)
+   },
+   5403: (pp, ip, cp) => {
+     var Op = cp(5405),
+       op = cp(5410),
+       Ip = cp(5214),
+       Sp = cp(5427),
+       xp = /^\[object .+?Constructor\]$/,
+       Lp = Function.prototype,
+       Yp = Object.prototype,
+       Dp = Lp.toString,
+       Ap = Yp.hasOwnProperty,
+       Pp = RegExp("^" + Dp.call(Ap).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
+     pp.exports = function(pp) {
+       return !(!Ip(pp) || op(pp)) && (Op(pp) ? Pp : xp).test(Sp(pp))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1230-L1235` → after: `L836-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L836-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L836-L843) · [Before (L1230-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1230-L1235)

```diff
- 
-     function gC(CC, zC, ZC, QC) {
-       const wC = CC.getBuffer();
-       if (!wC || !CC.isUpdatable()) return;
-       const bC = CC._engine;
-       bC.fS >= 2 ? (SC(bC, wC, zC, ZC, QC), pC(bC)) : CC.updateDirectly(zC.subarray(ZC, QC), ZC)
+   },
+   5916: (pp, ip, cp) => {
+     var Op = cp(5266),
+       op = cp(5669),
+       Ip = cp(5292),
+       Sp = {};
+     Sp["[object Float32Array]"] = Sp["[object Float64Array]"] = Sp["[object Int8Array]"] = Sp["[object Int16Array]"] = Sp["[object Int32Array]"] = Sp["[object Uint8Array]"] = Sp["[object Uint8ClampedArray]"] = Sp["[object Uint16Array]"] = Sp["[object Uint32Array]"] = !0, Sp["[obj … [truncated]
+       return Ip(pp) && op(pp.length) && !!Sp[Op(pp)]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1237-L1239` → after: `L845-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L845-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L845-L853) · [Before (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1237-L1239)

```diff
- 
-     function SC(CC, zC, ZC, QC, wC) {
-       CC.bindArrayBuffer(zC), CC._gl.bufferSubData(CC._gl.ARRAY_BUFFER, QC * Float32Array.BYTES_PER_ELEMENT, ZC, QC, wC - QC)
+   },
+   5727: (pp, ip, cp) => {
+     var Op = cp(5729),
+       op = cp(5984),
+       Ip = cp(6004),
+       Sp = cp(5310),
+       xp = cp(6006);
+     pp.exports = function(pp) {
+       return "function" == typeof pp ? pp : null == pp ? Ip : "object" == typeof pp ? Sp(pp) ? op(pp[0], pp[1]) : Op(pp) : xp(pp)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1241-L1243` → after: `L855-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L855-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L855-L864) · [Before (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1241-L1243)

```diff
- 
-     function pC(CC) {
-       CC._cachedVertexBuffers = null
+   },
+   5930: (pp, ip, cp) => {
+     var Op = cp(5933),
+       op = cp(5938),
+       Ip = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp) {
+       if (!Op(pp)) return op(pp);
+       var ip = [];
+       for (var cp in Object(pp)) Ip.call(pp, cp) && "constructor" != cp && ip.push(cp);
+       return ip
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1245-L1247` → after: `L866-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L866-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L866-L890) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1245-L1247)

```diff
-     class PC {
-       constructor(CC) {
-         this.engine = CC, this.pages = []
+   },
+   6309: pp => {
+     pp.exports = function(pp, ip) {
+       return pp < ip
+     }
+   },
+   6025: (pp, ip, cp) => {
+     var Op = cp(6028),
+       op = cp(5660);
+     pp.exports = function(pp, ip) {
+       var cp = -1,
+         Ip = op(pp) ? Array(pp.length) : [];
+       return Op(pp, (function(pp, Op, op) {
+         Ip[++cp] = ip(pp, Op, op)
+       })), Ip
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1249-L1263` → after: `L892-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L892-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L892-L905) · [Before (L1249-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1249-L1263)

```diff
-       static forEngine(CC) {
-         const zC = CC;
-         if (!(zC.fS >= 2) || !GC.test(zC.getGlInfo().renderer)) return null;
-         let ZC = RC.get(CC);
-         if (!ZC) {
-           const QC = new PC(zC);
-           ZC = QC, RC.set(CC, QC);
-           const wC = CC.Yg.add((() => {
-             for (const CC of QC.pages) CC.restore()
-           }));
-           CC.Tm.addOnce((() => {
-             CC.Yg.remove(wC), QC.dispose(), RC.delete(CC)
-           }))
-         }
-         return ZC
+     }
+   },
+   5984: (pp, ip, cp) => {
+     var Op = cp(5770),
+       op = cp(5326),
+       Ip = cp(5986),
+       Sp = cp(5345),
+       xp = cp(5974),
+       Lp = cp(5977),
+       Yp = cp(5569);
+     pp.exports = function(pp, ip) {
+       return Sp(pp) && xp(ip) ? Lp(Yp(pp), ip) : function(cp) {
+         var Sp = op(cp, pp);
+         return void 0 === Sp && Sp === ip ? Ip(cp, pp) : Op(ip, Sp, 3)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1265-L1279` → after: `L907-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L907-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L907-L933) · [Before (L1265-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1265-L1279)

```diff
-       allocate(CC) {
-         const zC = Math.max(16, 16 * Math.ceil(CC / 16));
-         for (const QC of this.pages) {
-           const CC = QC.take(zC);
-           if (CC >= 0) return {
-             page: QC,
-             start: CC,
-             size: zC
-           }
-         }
-         const ZC = new xC(this.engine, Math.max(65536, zC));
-         return this.pages.push(ZC), {
-           page: ZC,
-           start: ZC.take(zC),
-           size: zC
+     }
+   },
+   5724: (pp, ip, cp) => {
+     var Op = cp(5565),
+       op = cp(5332),
+       Ip = cp(5727),
+       Sp = cp(6025),
+       xp = cp(6039),
+       Lp = cp(5918),
+       Yp = cp(6043),
+       Dp = cp(6004),
+       Ap = cp(5310);
+     pp.exports = function(pp, ip, cp) {
+       ip = ip.length ? Op(ip, (function(pp) {
+         return Ap(pp) ? function(ip) {
+           return op(ip, 1 === pp.length ? pp[0] : pp)
+ ... (11 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1282-L1284` → after: `L946-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L946-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L946-L952) · [Before (L1282-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1282-L1284)

```diff
-       release(CC) {
-         const zC = CC.page;
-         zC.give(CC.start, CC.size), zC.fg() && (this.pages[0] !== zC || zC.data.length > 65536) && (zC.dispose(), this.pages.splice(this.pages.indexOf(zC), 1))
+     }
+   },
+   6018: (pp, ip, cp) => {
+     var Op = cp(5332);
+     pp.exports = function(pp) {
+       return function(ip) {
+         return Op(ip, pp)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1286-L1287` → after: `L954-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L954-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L954-L1042) · [Before (L1286-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1286-L1287)

```diff
-       servesEngine(CC) {
-         return CC === this.engine
+     }
+   },
+   5652: pp => {
+     var ip = Math.ceil,
+       cp = Math.max;
+     pp.exports = function(pp, Op, op, Ip) {
+       for (var Sp = -1, xp = cp(ip((Op - pp) / (op || 1)), 0), Lp = Array(xp); xp--;) Lp[Ip ? xp : ++Sp] = pp, pp += op;
+       return Lp
+     }
+   },
+   6049: (pp, ip, cp) => {
+     var Op = cp(6004),
+       op = cp(6056),
+       Ip = cp(6066);
+     pp.exports = function(pp, ip) {
+       return Ip(op(pp, ip, Op), pp + "")
+ ... (73 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1289-L1290` → after: `L1044-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1044-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1044-L1073) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1289-L1290)

```diff
-       upload() {
-         for (const CC of this.pages) CC.upload()
+     }
+   },
+   6130: (pp, ip, cp) => {
+     var Op = cp(5791),
+       op = cp(6136),
+       Ip = cp(6167),
+       Sp = cp(5810),
+       xp = cp(6172),
+       Lp = cp(5833);
+     pp.exports = function(pp, ip, cp) {
+       var Yp = -1,
+         Dp = op,
+         Ap = pp.length,
+         Pp = !0,
+         Wp = [],
+         yp = Wp;
+ ... (14 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1292-L1293` → after: `L1075-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1075-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1075-L1112) · [Before (L1292-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1292-L1293)

```diff
-       get pageCount() {
-         return this.pages.length
+       return Wp
+     }
+   },
+   5810: pp => {
+     pp.exports = function(pp, ip) {
+       return pp.has(ip)
+     }
+   },
+   5340: (pp, ip, cp) => {
+     var Op = cp(5310),
+       op = cp(5345),
+       Ip = cp(5350),
+       Sp = cp(5555);
+     pp.exports = function(pp, ip) {
+       return Op(pp) ? pp : op(pp, ip) ? [pp] : Ip(Sp(pp))
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1295-L1297` → after: `L1114-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1114-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1114-L1122) · [Before (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1295-L1297)

```diff
-       dispose() {
-         for (const CC of this.pages) CC.dispose();
-         this.pages.length = 0
+       return 0
+     }
+   },
+   6043: (pp, ip, cp) => {
+     var Op = cp(6047);
+     pp.exports = function(pp, ip, cp) {
+       for (var op = -1, Ip = pp.criteria, Sp = ip.criteria, xp = Ip.length, Lp = cp.length; ++op < xp;) {
+         var Yp = Op(Ip[op], Sp[op]);
+         if (Yp) return op >= Lp ? Yp : Yp * ("desc" == cp[op] ? -1 : 1)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1300-L1306` → after: `L1126-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1126-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1126-L1139) · [Before (L1300-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1300-L1306)

```diff
-     const GC = /Direct3D11|D3D11/,
-       RC = new WeakMap;
- 
-     function AC(CC, zC, ZC, QC, wC) {
-       if (!(wC <= QC)) {
-         if (zC < 0 || zC + (wC - QC) > CC.size) throw new Error(`ThinInstanceArena: write of ${wC-QC} floats at ${zC} overruns a ${CC.size}-float slot`);
-         CC.page.write(CC.start + zC, ZC, QC, wC)
+   },
+   5419: (pp, ip, cp) => {
+     var Op = cp(5231)["__core-js_shared__"];
+     pp.exports = Op
+   },
+   6037: (pp, ip, cp) => {
+     var Op = cp(5660);
+     pp.exports = function(pp, ip) {
+       return function(cp, op) {
+         if (null == cp) return cp;
+         if (!Op(cp)) return pp(cp, op);
+         for (var Ip = cp.length, Sp = ip ? Ip : -1, xp = Object(cp);
+           (ip ? Sp-- : ++Sp < Ip) && !1 !== op(xp[Sp], Sp, xp););
+         return cp
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1309-L1355` → after: `L1142-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1142-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1142-L1150) · [Before (L1309-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1309-L1355)

```diff
-     class xC {
-       constructor(CC, zC) {
-         this.engine = CC, this.data = void 0, this.buffer = void 0, this.free = void 0, this.runs = [], this.sorted = [], this.data = new Float32Array(zC), this.free = [0, zC], this.buffer = new((0, FC.b)().ArenaBuffer)(CC, this.data, !1, 0, !1, !0)
-       }
-       take(CC) {
-         const zC = this.free;
-         for (let ZC = 0; ZC < zC.length; ZC += 2)
-           if (zC[ZC + 1] >= CC) {
-             const QC = zC[ZC];
-             return zC[ZC + 1] === CC ? zC.splice(ZC, 2) : (zC[ZC] += CC, zC[ZC + 1] -= CC), QC
-           } return -1
-       }
-       give(CC, zC) {
-         const ZC = this.free;
-         let QC = 0;
-         for (; QC < ZC.length && ZC[QC] < CC;) QC += 2;
- ... (31 more removed lines; see GitHub link above)
+   },
+   6035: pp => {
+     pp.exports = function(pp) {
+       return function(ip, cp, Op) {
+         for (var op = -1, Ip = Object(ip), Sp = Op(ip), xp = Sp.length; xp--;) {
+           var Lp = Sp[pp ? xp : ++op];
+           if (!1 === cp(Ip[Lp], Lp, Ip)) break
+         }
+         return ip
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1357-L1358` → after: `L1152-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1152-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1152-L1165) · [Before (L1357-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1357-L1358)

```diff
-       restore() {
-         this.runs.length = 0, this.buffer.restore()
+     }
+   },
+   6198: (pp, ip, cp) => {
+     var Op = cp(6200),
+       op = cp(6209),
+       Ip = cp(6214),
+       Sp = cp(5555);
+     pp.exports = function(pp) {
+       return function(ip) {
+         ip = Sp(ip);
+         var cp = op(ip) ? Ip(ip) : void 0,
+           xp = cp ? cp[0] : ip.charAt(0),
+           Lp = cp ? Op(cp, 1).join("") : ip.slice(1);
+         return xp[pp]() + Lp
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1360-L1361` → after: `L1167-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1167-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1167-L1183) · [Before (L1360-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1360-L1361)

```diff
-       dispose() {
-         this.buffer.dispose()
+     }
+   },
+   6482: (pp, ip, cp) => {
+     var Op = cp(5727),
+       op = cp(5660),
+       Ip = cp(5882);
+     pp.exports = function(pp) {
+       return function(ip, cp, Sp) {
+         var xp = Object(ip);
+         if (!op(ip)) {
+           var Lp = Op(cp, 3);
+           ip = Ip(ip), cp = function(pp) {
+             return Lp(xp[pp], pp, xp)
+           }
+         }
+         var Yp = pp(ip, cp, Sp);
+ ... (1 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1364-L1389` → after: `L1186-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1186-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1186-L1193) · [Before (L1364-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1364-L1389)

```diff
-     const JC = "matrix";
-     class IC {
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         let nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         this.callbacks = zC, this.initialCapacity = ZC, this.capacityIsConst = QC, this.strides = wC, this.flushQueue = bC, this.nextId = 0, this.pickable = void 0, this.arena = void 0, this.idToMetadata = {}, this.meshVariations = {}, this.bounds = void 0, this.tempBuffers = {}, … [truncated]
-         const fC = CC.WE(),
-           oC = IC.tempVector.set(Math.abs(fC.minimum.x), Math.abs(fC.minimum.y), Math.abs(fC.minimum.z));
-         if (oC.maximizeInPlaceFromFloats(Math.abs(fC.maximum.x), Math.abs(fC.maximum.y), Math.abs(fC.maximum.z)), this.bounds = {
-             sphere: {
-               radius: oC.length()
-             }
-           }, CC.Hg = !0, CC.tS = !1, CC.AzC = !0, CC.Xg = !0, CC.IK(!1), this.setPickable(!1), ZC < 1 || !Number.isInteger(ZC)) throw new Error(`Capacity must be a positive integer, not ${ZC}`);
-         for (const qC in this.strides) {
-           const CC = this.strides[qC];
-           if (CC < 1 || CC > 16 || !Number.isInteger(CC)) throw new Error(`Invalid stride for ${qC}, expected a positive integer <= 16, not ${CC}`);
-           this.tempBuffers[qC] = new Float32Array(CC)
- ... (10 more removed lines; see GitHub link above)
+   },
+   5647: (pp, ip, cp) => {
+     var Op = cp(5652),
+       op = cp(5655),
+       Ip = cp(5683);
+     pp.exports = function(pp) {
+       return function(ip, cp, Sp) {
+         return Sp && "number" != typeof Sp && op(ip, cp, Sp) && (cp = Sp = void 0), ip = Ip(ip), void 0 === cp ? (cp = ip, ip = 0) : cp = Ip(cp), Sp = void 0 === Sp ? ip < cp ? 1 : -1 : Ip(Sp), Op(ip, cp, Sp, pp)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1391-L1399` → after: `L1195-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1195-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1195-L1238) · [Before (L1391-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1391-L1399)

```diff
-       delete() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         for (const QC of zC) {
-           const CC = this.idToMetadata[QC];
-           if (void 0 === CC) throw new Error(`ThinInstanceMesh.remove: ${QC} not found`);
-           const {
-             meshVariation: zC
-           } = CC;
-           zC.unregisterThinInstance(QC), delete this.idToMetadata[QC]
+     }
+   },
+   6172: (pp, ip, cp) => {
+     var Op = cp(5964),
+       op = cp(6177),
+       Ip = cp(5833),
+       Sp = Op && 1 / Ip(new Op([, -0]))[1] == 1 / 0 ? function(pp) {
+         return new Op(pp)
+       } : op;
+     pp.exports = Sp
+   },
+   6084: (pp, ip, cp) => {
+     var Op = cp(5398),
+       op = function() {
+         try {
+           var pp = Op(Object, "defineProperty");
+ ... (28 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1401-L1405` → after: `L1240-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1240-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1240-L1249) · [Before (L1401-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1401-L1405)

```diff
-       }
-       clear() {
-         this.nextId = 0;
-         for (const CC in this.meshVariations) {
-           this.meshVariations[CC].clear()
+         if (wp) {
+           if (!op(ip, (function(pp, ip) {
+               if (!Ip(wp, ip) && (vp === pp || xp(vp, pp, cp, Sp, Lp))) return wp.push(ip)
+             }))) {
+             Up = !1;
+             break
+           }
+         } else if (vp !== tp && !xp(vp, tp, cp, Sp, Lp)) {
+           Up = !1;
+           break
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1412-L1417` → after: `L1252-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1252-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1252-L1291) · [Before (L1412-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1412-L1417)

```diff
-       count() {
-         let CC = 0;
-         for (const zC in this.meshVariations) {
-           CC += this.meshVariations[zC].numRegisteredThinInstances()
-         }
-         return CC
+       return Lp.delete(pp), Lp.delete(ip), Up
+     }
+   },
+   5818: (pp, ip, cp) => {
+     var Op = cp(5272),
+       op = cp(5822),
+       Ip = cp(5492),
+       Sp = cp(5784),
+       xp = cp(5826),
+       Lp = cp(5833),
+       Yp = Op ? Op.prototype : void 0,
+       Dp = Yp ? Yp.valueOf : void 0;
+     pp.exports = function(pp, ip, cp, Op, Yp, Ap, Pp) {
+       switch (cp) {
+         case "[object DataView]":
+           if (pp.byteLength != ip.byteLength || pp.byteOffset != ip.byteOffset) return !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1419-L1458` → after: `L1293-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1293-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1293-L1306) · [Before (L1419-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1419-L1458)

```diff
-       IK(CC, zC) {
-         if ("boolean" !== typeof zC) throw new Error(`ThinInstanceMesh.setEnabled: ${CC} given ${zC}, not a boolean`);
-         const ZC = this.idToMetadata[CC];
-         if (void 0 === ZC) throw new Error(`ThinInstanceMesh.setEnabled: ${CC} not found`);
-         const {
-           meshVariation: QC
-         } = ZC;
-         QC.IK(CC, zC)
-       }
-       configureMeshVariation(CC, zC) {
-         if (this.hasMeshVariationBeenConfigured(CC)) throw new Error(`Failed to configure mesh variation ${CC} since it is already configured`);
-         const ZC = this.meshVariations[IC.DEFAULT_MESH_VARIATION_NAME].mesh,
-           QC = ZC.clone(`${ZC.name}_${CC}`, null, !0);
-         QC.makeGeometryUnique(), QC.metadata = {}, QC.parent = null, QC.IK(!1), this.callbacks.pfC(QC), zC(QC), this.meshVariations[CC] = new iC(QC, this.initialCapacity, this.capacityIsConst, this.strides, this.flushQueue, this.arena)
-       }
-       setMeshVariation(CC, zC) {
- ... (24 more removed lines; see GitHub link above)
+       return !1
+     }
+   },
+   5840: (pp, ip, cp) => {
+     var Op = cp(5849),
+       op = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp, ip, cp, Ip, Sp, xp) {
+       var Lp = 1 & cp,
+         Yp = Op(pp),
+         Dp = Yp.length;
+       if (Dp != Op(ip).length && !Lp) return !1;
+       for (var Ap = Dp; Ap--;) {
+         var Pp = Yp[Ap];
+         if (!(Lp ? Pp in ip : op.call(ip, Pp))) return !1
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1460-L1463` → after: `L1308-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1308-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1308-L1319) · [Before (L1460-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1460-L1463)

```diff
-       countEnabled() {
-         let CC = 0;
-         for (const zC in this.meshVariations) {
-           CC += this.meshVariations[zC].numEnabled
+       var Wp = xp.get(pp),
+         yp = xp.get(ip);
+       if (Wp && yp) return Wp == ip && yp == pp;
+       var Up = !0;
+       xp.set(pp, ip), xp.set(ip, pp);
+       for (var wp = Lp; ++Ap < Dp;) {
+         var vp = pp[Pp = Yp[Ap]],
+           tp = ip[Pp];
+         if (Ip) var Hp = Lp ? Ip(tp, vp, Pp, ip, pp, xp) : Ip(vp, tp, Pp, pp, ip, xp);
+         if (!(void 0 === Hp ? vp === tp || Sp(vp, tp, cp, Ip, xp) : Hp)) {
+           Up = !1;
+           break
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1465` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1321) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1465)

```diff
-         return CC
+         wp || (wp = "constructor" == Pp)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1467-L1486` → after: `L1323-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1323-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1323-L1326) · [Before (L1467-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1467-L1486)

```diff
-       set(CC, zC, ZC, QC, wC, bC) {
-         const nC = this.idToMetadata[CC];
-         if (void 0 === nC) throw new Error(`ThinInstanceMesh.set: ${CC} not found`);
-         const fC = this.strides[zC];
-         vC(zC, fC, "number" !== typeof ZC ? ZC.length : arguments.length - 2);
-         const {
-           meshVariation: oC
-         } = nC;
-         oC.set(CC, zC, ZC, QC, wC, bC)
-       }
-       setMatrix(CC, zC) {
-         const ZC = this.idToMetadata[CC];
-         if (void 0 === ZC) throw new Error(`ThinInstanceMesh.setMatrix: ${CC} not found`);
-         ZC.meshVariation.setMatrix(CC, zC)
-       }
-       requeueVariations() {
- ... (4 more removed lines; see GitHub link above)
+       if (Up && !wp) {
+         var dp = pp.constructor,
+           ep = ip.constructor;
+         dp == ep || !("constructor" in pp) || !("constructor" in ip) || "function" == typeof dp && dp instanceof dp && "function" == typeof ep && ep instanceof ep || (Up = !1)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1488-L1503` → after: `L1328-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1328-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1328-L1357) · [Before (L1488-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1488-L1503)

```diff
-       getMesh(CC) {
-         const zC = this.idToMetadata[CC];
-         if (void 0 === zC) throw new Error(`ThinInstanceMesh.getMesh: ${CC} not found`);
-         return zC.meshVariation.mesh
-       }
-       pickModel(CC) {
-         var zC, ZC, QC, wC, bC;
-         const nC = this.idToMetadata[CC].meshVariation.mesh;
-         if ((0, fC.d)(nC)) return nC.parts.geometry;
-         const oC = null === (zC = nC.geometry) || void 0 === zC ? void 0 : zC.model;
-         if (!oC || !ArrayBuffer.isView(null === (ZC = (0, qC.j)(oC)) || void 0 === ZC ? void 0 : ZC.data)) return nC;
-         const FC = 1 === (null === (QC = nC.Zx) || void 0 === QC ? void 0 : QC.length) ? nC.Zx[0] : null;
-         return 0 === (null === FC || void 0 === FC ? void 0 : FC.indexStart) && FC.indexCount === (null === (wC = oC.indexData) || void 0 === wC ? void 0 : wC.length) && (null === (bC = FC.cg()) || void 0 === bC ? void 0 : bC.fillMode) <= 2 && nC.getWorldMatrix().isIdentity() &&  … [truncated]
-       }
-       getBoundingSphereRad() {
-         return this.bounds.sphere.radius
+       return xp.delete(pp), xp.delete(ip), Up
+     }
+   },
+   5235: (pp, ip, cp) => {
+     var Op = "object" == typeof cp.g && cp.g && cp.g.Object === Object && cp.g;
+     pp.exports = Op
+   },
+   5849: (pp, ip, cp) => {
+     var Op = cp(5856),
+       op = cp(5864),
+       Ip = cp(5882);
+     pp.exports = function(pp) {
+       return Op(pp, Ip, op)
+     }
+   },
+   5521: (pp, ip, cp) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1505-L1506` → after: `L1359-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1359-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1359-L1436) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1505-L1506)

```diff
-       getPickable() {
-         return this.pickable
+       return ip
+     }
+   },
+   5398: (pp, ip, cp) => {
+     var Op = cp(5403),
+       op = cp(5436);
+     pp.exports = function(pp, ip) {
+       var cp = op(pp, ip);
+       return Op(cp) ? cp : void 0
+     }
+   },
+   6436: (pp, ip, cp) => {
+     var Op = cp(5941)(Object.getPrototypeOf, Object);
+     pp.exports = Op
+   },
+   5277: (pp, ip, cp) => {
+ ... (62 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1508-L1509` → after: `L1438-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1438-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1438-L1487) · [Before (L1508-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1508-L1509)

```diff
-       setPickable(CC) {
-         this.pickable = CC
+       return ip
+     }), pp.exports = dp
+   },
+   5436: pp => {
+     pp.exports = function(pp, ip) {
+       return null == pp ? void 0 : pp[ip]
+     }
+   },
+   5998: (pp, ip, cp) => {
+     var Op = cp(5340),
+       op = cp(5715),
+       Ip = cp(5310),
+       Sp = cp(5674),
+       xp = cp(5669),
+       Lp = cp(5569);
+     pp.exports = function(pp, ip, cp) {
+ ... (34 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1512-L1532` → after: `L1491-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1491-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1491-L1618) · [Before (L1512-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1512-L1532)

```diff
-     IC.DEFAULT_MESH_VARIATION_NAME = "__DEFAULT__", IC.tempVector = new wC.Eg;
-     class iC {
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         var nC, fC, qC;
-         this.mesh = CC, this.capacityIsConst = ZC, this.strides = QC, this.flushQueue = wC, this.arena = bC, this.isEnabled = !1, this.batch = void 0, this.baseOffsets = {}, this.interleavedBuffer = null, this.i6 = void 0, this.matrixSlot = null, this.interleavedSlot = null, this … [truncated]
-         const FC = this.mesh.mg();
-         this.i6 = null !== (nC = null === (fC = (qC = FC).T6) || void 0 === fC ? void 0 : fC.call(qC, this.mesh, this.batch.kinds)) && void 0 !== nC ? nC : null;
-         const WC = this.i6 ? null : FC,
-           NC = null === WC || void 0 === WC ? void 0 : WC.Yg.add((() => {
-             this.batch.stale.slots.fill(1)
-           }));
-         this.mesh.Tm.addOnce((() => {
-           var CC, zC;
-           null === WC || void 0 === WC || WC.Yg.remove(null !== NC && void 0 !== NC ? NC : null), this.releaseSlots(), null === (CC = this.interleavedBuffer) || void 0 === CC || CC.dispose(), null === (zC = this.i6) || void 0 === zC || zC.release(), (0, oC.h)(this.batch)
-         })), this.baseOffsets[JC] = 0;
-         for (const {
- ... (5 more removed lines; see GitHub link above)
+   },
+   5460: (pp, ip, cp) => {
+     var Op = cp(5389),
+       op = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp) {
+       var ip = this.__data__;
+       return Op ? void 0 !== ip[pp] : op.call(ip, pp)
+     }
+   },
+   5463: (pp, ip, cp) => {
+     var Op = cp(5389);
+     pp.exports = function(pp, ip) {
+       var cp = this.__data__;
+       return this.size += this.has(pp) ? 0 : 1, cp[pp] = Op && void 0 === ip ? "__lodash_hash_undefined__" : ip, this
+     }
+   },
+ ... (112 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1534-L1535` → after: `L1620-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1620-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1620-L1661) · [Before (L1534-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1534-L1535)

```diff
-       get numEnabled() {
-         return this.batch.enabled
+     }
+   },
+   5518: (pp, ip, cp) => {
+     var Op = cp(5521);
+     pp.exports = function(pp) {
+       var ip = Op(this, pp).delete(pp);
+       return this.size -= ip ? 1 : 0, ip
+     }
+   },
+   5536: (pp, ip, cp) => {
+     var Op = cp(5521);
+     pp.exports = function(pp) {
+       return Op(this, pp).get(pp)
+     }
+   },
+   5542: (pp, ip, cp) => {
+ ... (26 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1537-L1554` → after: `L1663-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1663-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1663-L1706) · [Before (L1537-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1537-L1554)

```diff
-       createInterleavedBuffer() {
-         var CC;
-         const {
-           attributes: zC,
-           rowStride: ZC
-         } = this.batch;
-         if (zC && !this.i6) {
-           null === (CC = this.interleavedBuffer) || void 0 === CC || CC.dispose(), this.interleavedBuffer = new((0, FC.b)().gg)(this.mesh.mg(), zC, !this.capacityIsConst, ZC, !1, !0);
-           for (const {
-               name: CC,
-               offset: zC,
-               size: QC
-             }
-             of this.batch.kinds) {
-             const wC = this.interleavedBuffer.createVertexBuffer(CC, zC, QC, ZC, !0);
-             wC.hashCode += wC.byteOffset * 2 ** 24, this.babylon.setVerticesBuffer(wC)
- ... (2 more removed lines; see GitHub link above)
+     }
+   },
+   5354: (pp, ip, cp) => {
+     var Op = cp(5362);
+     pp.exports = function(pp) {
+       var ip = Op(pp, (function(pp) {
+           return 500 === cp.size && cp.clear(), pp
+         })),
+         cp = ip.cache;
+       return ip
+     }
+   },
+   5389: (pp, ip, cp) => {
+     var Op = cp(5398)(Object, "create");
+     pp.exports = Op
+   },
+ ... (28 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1556-L1705` → after: `L1708-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1708-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1708-L1719) · [Before (L1556-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1556-L1705)

```diff
-       get babylon() {
-         if ((0, fC.d)(this.mesh)) throw new Error(`${this.mesh.name}: a handle has no Babylon buffers`);
-         return this.mesh
-       }
-       arrayOf(CC) {
-         return CC === JC ? this.batch.matrices : this.batch.attributes
-       }
-       elementStart(CC, zC) {
-         return CC * (zC === JC ? this.strides[JC] : this.batch.rowStride) + this.baseOffsets[zC]
-       }
-       registerThinInstance(CC) {
-         if (void 0 !== this.idToIndex[CC]) throw new Error(`ThinInstanceMeshVariation.registerThinInstance: ${CC} already registered`);
-         this.batch.count >= this.batch.HW && this.resize(2 * this.batch.HW);
-         const zC = this.batch.count++;
-         this.idToIndex[CC] = zC, this.indexToId[zC] = CC, this.markIndexAsDirty(zC)
-       }
- ... (134 more removed lines; see GitHub link above)
+     }
+   },
+   6056: (pp, ip, cp) => {
+     var Op = cp(6058),
+       op = Math.max;
+     pp.exports = function(pp, ip, cp) {
+       return ip = op(void 0 === ip ? pp.length - 1 : ip, 0),
+         function() {
+           for (var Ip = arguments, Sp = -1, xp = op(Ip.length - ip, 0), Lp = Array(xp); ++Sp < xp;) Lp[Sp] = Ip[ip + Sp];
+           Sp = -1;
+           for (var Yp = Array(ip + 1); ++Sp < ip;) Yp[Sp] = Ip[Sp];
+           return Yp[ip] = cp(Lp), Op(pp, this, Yp)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1708-L1732` → after: `L1766-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1766-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1766-L1843) · [Before (L1708-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1708-L1732)

```diff
-       releaseSlots() {
-         this.matrixSlot && (this.arena.release(this.matrixSlot), this.matrixSlot = null), this.interleavedSlot && (this.arena.release(this.interleavedSlot), this.interleavedSlot = null)
-       }
-       switchBuffers() {
-         this.matrixSlot ? (this.releaseSlots(), this.babylon.E_(JC, this.batch.matrices, this.strides[JC], this.capacityIsConst), this.mesh.N_ = this.batch.enabled, this.createInterleavedBuffer()) : this.moveToArena()
-       }
-       swapThinInstanceIndices(CC, zC) {
-         if (CC === zC) return;
-         const ZC = this.indexToId[CC],
-           QC = this.indexToId[zC];
-         this.idToIndex[ZC] = zC, this.idToIndex[QC] = CC, this.indexToId[CC] = QC, this.indexToId[zC] = ZC, this.markIndexAsDirty(CC), this.markIndexAsDirty(zC);
-         const wC = this.batch.stale.slots;
-         wC[CC] = 1, wC[zC] = 1, this.batch.swapRows(CC, zC)
-       }
-       markIndexAsDirty(CC) {
-         this.batch.rg.mark(CC), this.enqueue()
- ... (9 more removed lines; see GitHub link above)
+     }
+   },
+   5745: (pp, ip, cp) => {
+     var Op = cp(5469);
+     pp.exports = function() {
+       this.__data__ = new Op, this.size = 0
+     }
+   },
+   5749: pp => {
+     pp.exports = function(pp) {
+       var ip = this.__data__,
+         cp = ip.delete(pp);
+       return this.size = ip.size, cp
+     }
+   },
+   5755: pp => {
+ ... (62 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1734-L1740` → after: `L1845-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1845-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1845-L1849) · [Before (L1734-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1734-L1740)

```diff
-           this.flush()
-         } catch (CC) {
-           throw this.enqueue(), CC
-         }
-       }
-       assertKindExists(CC) {
-         if (!(CC in this.baseOffsets)) throw new Error(`Buffer kind ${CC} not found in list: [${Object.keys(this.baseOffsets).join(", ")}]`)
+           return ip.call(pp)
+         } catch (cp) {}
+         try {
+           return pp + ""
+         } catch (cp) {}
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1743-L1745` → after: `L1853-L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1853-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1853-L1858) · [Before (L1743-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1743-L1745)

```diff
- 
-     function vC(CC, zC, ZC) {
-       if (ZC !== zC) throw new Error(`Value length ${ZC} does not match stride ${zC} for kind ${CC}`)
+   },
+   5248: pp => {
+     var ip = /\s/;
+     pp.exports = function(pp) {
+       for (var cp = pp.length; cp-- && ip.test(pp.charAt(cp)););
+       return cp
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1747-L1791` → after: `L1860-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1860-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1860-L1880) · [Before (L1747-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1747-L1791)

```diff
-     var eC = ZC(37441);
-     class hC {
-       constructor() {
-         this.count = 0, this.spheres = new Float64Array(256), this.ids = new Int32Array(64), this.flags = new Uint8Array(64), this.planes = new Float64Array(24), this.changed = []
-       }
-       add(CC) {
-         this.count === this.ids.length && this.grow();
-         const zC = this.count++;
-         return this.ids[zC] = CC, this.flags[zC] = 0, this.spheres.fill(0, 4 * zC, 4 * zC + 4), zC
-       }
-       remove(CC) {
-         const zC = --this.count;
-         return CC === zC ? -1 : (this.ids[CC] = this.ids[zC], this.flags[CC] = this.flags[zC], this.spheres.copyWithin(4 * CC, 4 * zC, 4 * zC + 4), this.ids[CC])
-       }
-       clear() {
-         this.count = 0
- ... (29 more removed lines; see GitHub link above)
+   },
+   6224: pp => {
+     var ip = "\\ud800-\\udfff",
+       cp = "[" + ip + "]",
+       Op = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
+       op = "\\ud83c[\\udffb-\\udfff]",
+       Ip = "[^" + ip + "]",
+       Sp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
+       xp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
+       Lp = "(?:" + Op + "|" + op + ")" + "?",
+       Yp = "[\\ufe0e\\ufe0f]?",
+       Dp = Yp + Lp + ("(?:\\u200d(?:" + [Ip, Sp, xp].join("|") + ")" + Yp + Lp + ")*"),
+       Ap = "(?:" + [Ip + Op + "?", Op, Sp, xp, cp].join("|") + ")",
+       Pp = RegExp(op + "(?=" + op + ")|" + Ap + Dp, "g");
+     pp.exports = function(pp) {
+       return pp.match(Pp) || []
+ ... (5 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1794-L2140` → after: `L1883-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1883-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1883-L1901) · [Before (L1794-L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L1794-L2140)

```diff
-       inFrustum(CC) {
-         return this.inPlanes(this.spheres, 4 * CC)
-       }
-       inPlanes(CC, zC) {
-         const ZC = CC[zC],
-           QC = CC[zC + 1],
-           wC = CC[zC + 2],
-           bC = -CC[zC + 3],
-           nC = this.planes;
-         for (let fC = 0; fC < 24; fC += 4)
-           if (nC[fC] * ZC + nC[fC + 1] * QC + nC[fC + 2] * wC + nC[fC + 3] < bC) return !1;
-         return !0
-       }
-       grow() {
-         const CC = 2 * this.ids.length,
-           zC = new Float64Array(4 * CC);
- ... (331 more removed lines; see GitHub link above)
+     }
+   },
+   5212: (pp, ip, cp) => {
+     var Op = cp(5214),
+       op = cp(5222),
+       Ip = cp(5238),
+       Sp = Math.max,
+       xp = Math.min;
+     pp.exports = function(pp, ip, cp) {
+       var Lp, Yp, Dp, Ap, Pp, Wp, yp = 0,
+         Up = !1,
+         wp = !1,
+         vp = !0;
+       if ("function" != typeof pp) throw new TypeError("Expected a function");
+ 
+       function tp(ip) {
+ ... (3 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2142-L2143` → after: `L1903-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1903-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1903-L1906) · [Before (L2142-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2142-L2143)

```diff
-       setRotationQuat(CC, zC) {
-         this.setNodeRotationQuat(CC, 0, zC)
+ 
+       function Hp(pp) {
+         var cp = pp - Wp;
+         return void 0 === Wp || cp >= ip || cp < 0 || wp && pp - yp >= Dp
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2145-L2146` → after: `L1908-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1908-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1908-L1915) · [Before (L2145-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2145-L2146)

```diff
-       setNodeRotationQuat(CC, zC, ZC) {
-         this.setNodeRotation(CC, zC, ZC.x, ZC.y, ZC.z, ZC.w)
+ 
+       function dp() {
+         var pp = op();
+         if (Hp(pp)) return ep(pp);
+         Pp = setTimeout(dp, function(pp) {
+           var cp = ip - (pp - Wp);
+           return wp ? xp(cp, Dp - (pp - yp)) : cp
+         }(pp))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2148-L2155` → after: `L1917-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1917-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1917-L1919) · [Before (L2148-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2148-L2155)

```diff
-       getScale(CC) {
-         return this.getNodeScale(CC, 0)
-       }
-       getNodeScale(CC, zC) {
-         return this.OZC(CC, zC).scale
-       }
-       setScale(CC, zC, ZC, QC) {
-         this.assertArgs(arguments, 4), this.setNodeScale(CC, 0, zC, ZC, QC)
+ 
+       function ep(pp) {
+         return Pp = void 0, vp && Lp ? tp(pp) : (Lp = Yp = void 0, Ap)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2157-L2207` → after: `L1921-L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1921-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1921-L1929) · [Before (L2157-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2157-L2207)

```diff
-       setNodeScale(CC, zC, ZC, QC, wC) {
-         this.assertArgs(arguments, 5);
-         const bC = this.getObjectData(CC),
-           nC = this.getObjectNode(bC, zC).scale;
-         nC.dnC(ZC, QC, wC) || (nC.set(ZC, QC, wC), 0 !== zC && this.updateNodeScaleGrowth(bC), this.setDirtyInternal(CC, bC, zC), 0 !== zC && bC.attachmentReach > 0 && this.isDeferrable(bC) && this.catchUp(CC, bC))
-       }
-       updateNodeScaleGrowth(CC) {
-         const zC = this.types[CC.type].typeNodes;
-         EC.length < zC.length && (EC = new Float64Array(zC.length));
-         const ZC = EC;
-         let QC = 1;
-         ZC[0] = 1;
-         for (let wC = 1; wC < zC.length; wC++) {
-           const {
-             x: bC,
-             y: nC,
- ... (35 more removed lines; see GitHub link above)
+ 
+       function jp() {
+         var pp = op(),
+           cp = Hp(pp);
+         if (Lp = arguments, Yp = this, Wp = pp, cp) {
+           if (void 0 === Pp) return function(pp) {
+             return yp = pp, Pp = setTimeout(dp, ip), Up ? tp(pp) : Ap
+           }(Wp);
+           if (wp) return clearTimeout(Pp), Pp = setTimeout(dp, ip), tp(Wp)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2209-L2294` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1931) · [Before (L2209-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2209-L2294)

```diff
-         return bC
-       }
-       set(CC, zC, ZC, QC, wC, bC) {
-         const nC = this.getObjectData(CC),
-           fC = this.types[nC.type].typeNodes;
-         if ("number" !== typeof ZC)
-           for (let oC = 0; oC < fC.length; oC++) null !== fC[oC].thinMeshIndex && this.setNode(CC, oC, zC, ZC);
-         else if (void 0 === QC)
-           for (let oC = 0; oC < fC.length; oC++) null !== fC[oC].thinMeshIndex && this.setNode(CC, oC, zC, ZC);
-         else if (void 0 === wC)
-           for (let oC = 0; oC < fC.length; oC++) null !== fC[oC].thinMeshIndex && this.setNode(CC, oC, zC, ZC, QC);
-         else if (void 0 === bC)
-           for (let oC = 0; oC < fC.length; oC++) null !== fC[oC].thinMeshIndex && this.setNode(CC, oC, zC, ZC, QC, wC);
-         else
-           for (let oC = 0; oC < fC.length; oC++) null !== fC[oC].thinMeshIndex && this.setNode(CC, oC, zC, ZC, QC, wC, bC)
-       }
- ... (70 more removed lines; see GitHub link above)
+         return void 0 === Pp && (Pp = setTimeout(dp, ip)), Ap
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2296-L2302` → after: `L1933-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1933-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L1933-L2292) · [Before (L2296-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2296-L2302)

```diff
-       setDirty(CC, zC) {
-         const ZC = this.getObjectData(CC);
-         this.getObjectNode(ZC, zC);
-         this.setDirtyInternal(CC, ZC, zC)
-       }
-       getRestRotation(CC, zC) {
-         return this.types[this.getType(CC)].typeNodes[zC].rotationQuat
+       return ip = Ip(ip) || 0, Op(cp) && (Up = !!cp.leading, Dp = (wp = "maxWait" in cp) ? Sp(Ip(cp.maxWait) || 0, ip) : Dp, vp = "trailing" in cp ? !!cp.trailing : vp), jp.cancel = function() {
+         void 0 !== Pp && clearTimeout(Pp), yp = 0, Lp = Wp = Yp = Pp = void 0
+       }, jp.flush = function() {
+         return void 0 === Pp ? Ap : ep(op())
+       }, jp
+     }
+   },
+   5492: pp => {
+     pp.exports = function(pp, ip) {
+       return pp === ip || pp !== pp && ip !== ip
+     }
+   },
+   6383: (pp, ip, cp) => {
+     var Op = cp(6391),
+       op = cp(6393),
+       Ip = cp(5727),
+ ... (344 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2304-L2305` → after: `L2294-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2294-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2294-L2333) · [Before (L2304-L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2304-L2305)

```diff
-       getNodeParent(CC, zC) {
-         return this.types[this.getType(CC)].typeNodes[zC].parent
+       if ("string" != typeof pp) return 0 === pp ? pp : +pp;
+       pp = Op(pp);
+       var cp = xp.test(pp);
+       return cp || Lp.test(pp) ? Yp(pp.slice(2), cp ? 2 : 8) : Sp.test(pp) ? NaN : +pp
+     }
+   },
+   5555: (pp, ip, cp) => {
+     var Op = cp(5557);
+     pp.exports = function(pp) {
+       return null == pp ? "" : Op(pp)
+     }
+   },
+   6123: (pp, ip, cp) => {
+     var Op = cp(5727),
+       op = cp(6130);
+     pp.exports = function(pp, ip) {
+ ... (24 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2307-L2308` → after: `L2335-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2335-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2335-L2346) · [Before (L2307-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2307-L2308)

```diff
-       hasNamedNode(CC, zC) {
-         return null !== this.getNamedNodeOrNull(CC, zC)
+     }
+ 
+     function Dp(pp) {
+       return function(ip, cp, Op) {
+         if (!ip || !cp || "object" !== typeof ip || "object" !== typeof cp) return pp(ip, cp, Op);
+         const {
+           cache: op
+         } = Op, Ip = op.get(ip), Sp = op.get(cp);
+         if (Ip && Sp) return Ip === cp && Sp === ip;
+         op.set(ip, cp), op.set(cp, ip);
+         const xp = pp(ip, cp, Op);
+         return op.delete(ip), op.delete(cp), xp
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2310-L2314` → after: `L2348-L2415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2348-L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2348-L2415) · [Before (L2310-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2310-L2314)

```diff
-       getNamedNode(CC, zC) {
-         const ZC = this.getNamedNodeOrNull(CC, zC);
-         if (null === ZC) {
-           const ZC = this.getType(CC);
-           throw new Error(`Type ${ZC} has no node named ${zC}`)
+     }
+ 
+     function Ap(pp) {
+       return Sp(pp).concat(xp(pp))
+     }
+     const Pp = Object.hasOwn || ((pp, ip) => Lp.call(pp, ip));
+ 
+     function Wp(pp, ip) {
+       return pp === ip || !pp && !ip && pp !== pp && ip !== ip
+     }
+     const {
+       getOwnPropertyDescriptor: yp,
+       keys: Up
+     } = Object;
+ 
+     function wp(pp, ip) {
+ ... (52 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2316-L2347` → after: `L2417-L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2417-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2417-L2418) · [Before (L2316-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2316-L2347)

```diff
-         return ZC
-       }
-       getNamedNodeOrNull(CC, zC) {
-         var ZC;
-         const QC = this.getType(CC),
-           wC = this.namedNodes[QC];
-         if (!wC) throw new Error(`Type ${QC} has no named nodes, cannot get named node ${zC}`);
-         return null !== (ZC = wC[zC]) && void 0 !== ZC ? ZC : null
-       }
-       getNodeNames(CC) {
-         const zC = this.getType(CC),
-           ZC = this.nodeNames[zC];
-         if (!ZC) throw new Error(`Type ${zC} has no named nodes`);
-         return ZC
-       }
-       getEntityId(CC) {
- ... (16 more removed lines; see GitHub link above)
+         if (!Ip) return !1;
+         Lp++
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2349-L2354` → after: `L2420-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2420-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2420-L2439) · [Before (L2349-L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2349-L2354)

```diff
-       setCullableForType(CC, zC) {
-         this.types[CC].cullable = zC;
-         for (const ZC in this.objectData) {
-           const QC = this.objectData[ZC];
-           QC.type === CC && (this.updateCullActive(QC), !zC && QC.cull && this.applyCullResult(Number(ZC), QC, !1))
-         }
+       return !0
+     }
+     const kp = Wp;
+ 
+     function mp(pp, ip, cp) {
+       const Op = Up(pp);
+       let op = Op.length;
+       if (Up(ip).length !== op) return !1;
+       for (; op-- > 0;)
+         if (!lp(pp, ip, cp, Op[op])) return !1;
+       return !0
+     }
+ 
+     function Rp(pp, ip, cp) {
+       const Op = Ap(pp);
+       let op, Ip, Sp, xp = Op.length;
+ ... (4 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2356-L2364` → after: `L2441-L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2441-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2441-L2470) · [Before (L2356-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2356-L2364)

```diff
-       attachThinObject(CC, zC, ZC) {
-         const QC = this.getObjectData(zC),
-           wC = this.getObjectNode(QC, ZC),
-           bC = this.getObjectData(CC);
-         null !== bC.parentThinObjectId && this.detachThinObjectInternal(CC, bC), wC.attachedThinObjectIds.push(CC), QC.indicesWithThinObjects.add(ZC), QC.attachmentsVersion++;
-         try {
-           this.refreshStaleWorld(QC, ZC), this.IK(CC, this.nodeDrawn(QC, wC))
-         } finally {
-           bC.parentThinObjectId = zC, bC.parentNodeIndex = ZC, this.deferredObjectIds.delete(CC), bC.nodes[0].worldMatrix = bC.tempMatrix, this.setDirtyInternal(CC, bC, 0)
+       return !0
+     }
+ 
+     function qp(pp, ip) {
+       return Wp(pp.valueOf(), ip.valueOf())
+     }
+ 
+     function Mp(pp, ip) {
+       return pp.source === ip.source && pp.flags === ip.flags
+     }
+ 
+     function Cp(pp, ip, cp) {
+       const Op = pp.size;
+       if (Op !== ip.size) return !1;
+       if (!Op) return !0;
+       const op = new Array(Op),
+ ... (14 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2366-L2374` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2472) · [Before (L2366-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2366-L2374)

```diff
-         this.updateChildEnabled(CC, 0, bC, wC.xZC), this.updateAttachmentReach(QC)
-       }
-       detachThinObject(CC) {
-         const zC = this.getObjectData(CC);
-         if (null === zC.parentThinObjectId) throw new Error(`Object ${CC} is not attached`);
-         this.detachThinObjectInternal(CC, zC)
-       }* iterateAttachedThinObjects(CC, zC) {
-         const ZC = this.OZC(CC, zC);
-         for (let QC = ZC.attachedThinObjectIds.length - 1; QC >= 0; QC--) yield ZC.attachedThinObjectIds[QC]
+         if (!Ip) return !1
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2376-L2382` → after: `L2474-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2474-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2474-L2557) · [Before (L2376-L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2376-L2382)

```diff
-       detachAllThinObjects(CC, zC) {
-         const ZC = this.getObjectData(CC),
-           QC = this.OZC(CC, zC);
-         try {
-           for (const CC of QC.attachedThinObjectIds) {
-             const zC = this.getAttachedObjectDataOrNull(CC);
-             null !== zC && this.removeThinObjectParent(CC, zC)
+       return !0
+     }
+ 
+     function Ep(pp, ip) {
+       let cp = pp.byteLength;
+       if (ip.byteLength !== cp || pp.byteOffset !== ip.byteOffset) return !1;
+       for (; cp-- > 0;)
+         if (pp[cp] !== ip[cp]) return !1;
+       return !0
+     }
+ 
+     function Xp(pp, ip) {
+       return pp.hostname === ip.hostname && pp.pathname === ip.pathname && pp.protocol === ip.protocol && pp.port === ip.port && pp.hash === ip.hash && pp.username === ip.username && pp.password === ip.password
+     }
+ 
+     function lp(pp, ip, cp, Op) {
+ ... (68 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2384-L2385` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2559) · [Before (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2384-L2385)

```diff
-         } finally {
-           ZC.indicesWithThinObjects.delete(zC), QC.attachedThinObjectIds.length = 0, this.updateAttachmentReach(ZC)
+           if (ip) return ip(pp, wp, vp)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2388-L2394` → after: `L2564-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2564-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2564-L2626) · [Before (L2388-L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2388-L2394)

```diff
-       disposeAllThinObjects(CC, zC) {
-         const ZC = this.getObjectData(CC),
-           QC = this.OZC(CC, zC);
-         try {
-           this.disposeAllThinObjectsInternal(QC)
-         } finally {
-           ZC.indicesWithThinObjects.delete(zC), QC.attachedThinObjectIds.length = 0, this.updateAttachmentReach(ZC)
+     }
+     const Np = Tp();
+     Tp({
+       strict: !0
+     }), Tp({
+       circular: !0
+     }), Tp({
+       circular: !0,
+       strict: !0
+     }), Tp({
+       createInternalComparator: () => Wp
+     }), Tp({
+       strict: !0,
+       createInternalComparator: () => Wp
+     }), Tp({
+       circular: !0,
+ ... (47 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2396-L2403` → after: `L2628-L2639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2628-L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2628-L2639) · [Before (L2396-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2396-L2403)

```diff
-       }
-       attachTransformNode(CC, zC, ZC) {
-         const QC = this.getObjectData(zC),
-           wC = this.getObjectNode(QC, ZC);
-         if (wC.attachedTransformNodes.push(CC), QC.attachmentsVersion++, this.refreshStaleWorld(QC, ZC), CC.IK(this.nodeDrawn(QC, wC)), wC.tempTransformNode) {
-           if ((0, fC.d)(CC) !== (0, fC.d)(wC.tempTransformNode)) throw new Error(`${CC.name} and ${wC.tempTransformNode.name} are not both handles`)
-         } else if ((0, fC.d)(CC)) wC.tempTransformNode = CC.carrier(`${CC.name}TransformNode`, wC.worldMatrix.m);
-         else {
+         return op
+       }(pp), Sp = Bp(Ip);
+       var xp;
+       return function(pp) {
+         let {
+           circular: ip,
+           comparator: cp,
+           createState: Op,
+           equals: op,
+           strict: Ip
+         } = pp;
+         if (Op) return function(pp, Sp) {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2405-L2448` → after: `L2641-L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2641-L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2641-L2649) · [Before (L2405-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2405-L2448)

```diff
-             sS: zC
-           } = this, ZC = !("rootNodes" in zC);
-           wC.tempTransformNode = new((0, FC.b)().TransformNode)(`${CC.name}TransformNode`, ZC ? CC.Km() : zC, !ZC), ZC || (wC.tempTransformNode.parent = zC.rootNodes[0]), wC.tempTransformNode.gH(), wC.tempTransformNode._worldMatrix = wC.worldMatrix, ZC && (wC.tempTransformNode.po … [truncated]
-         }
-         CC.parent = wC.tempTransformNode, this.updateTransformReach(QC, wC)
-       }
-       detachTransformNode(CC, zC, ZC) {
-         if (!this.tryDetachTransformNodeInternal(CC, zC, ZC)) throw new Error(`Transform node ${CC.name} not found in thin object ${zC} node ${ZC}`)
-       }
-       detachTransformNodeIfFound(CC, zC, ZC) {
-         this.tryDetachTransformNodeInternal(CC, zC, ZC)
-       }
-       VnC(CC) {
-         return this.getObjectData(CC).attachmentsVersion
-       }
-       CfC(CC) {
- ... (28 more removed lines; see GitHub link above)
+             cache: xp = (ip ? new WeakMap : void 0),
+             meta: Lp
+           } = Op();
+           return cp(pp, Sp, {
+             cache: xp,
+             equals: op,
+             meta: Lp,
+             strict: Ip
+           })
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2450-L2465` → after: `L2651-L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2651-L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2651-L2666) · [Before (L2450-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2450-L2465)

```diff
-         for (const nC in this.objectData) {
-           const wC = Number(nC),
-             bC = this.getObjectData(wC);
-           if (!bC.pickable) continue;
-           if (bC.cull && null === bC.parentThinObjectId) {
-             if (!this.inReach(bC, CC, zC, ZC)) continue;
-             if (!this.catchUp(wC, bC)) continue
-           }
-           const fC = this.types[bC.type].typeNodes;
-           for (let ZC = 0; ZC < fC.length; ZC++) {
-             const nC = bC.nodes[ZC];
-             if (nC.xZC && null !== nC.thinInstanceId) {
-               const bC = fC[ZC];
-               this.pickInstance(wC, bC.thinMeshIndex, nC.thinInstanceId, nC, CC, zC, QC)
-             }
-           }
+         if (ip) return function(pp, ip) {
+           return cp(pp, ip, {
+             cache: new WeakMap,
+             equals: op,
+             meta: void 0,
+             strict: Ip
+           })
+         };
+         const Sp = {
+           cache: void 0,
+           equals: op,
+           meta: void 0,
+           strict: Ip
+         };
+         return function(pp, ip) {
+           return cp(pp, ip, Sp)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2467-L2540` → after: `L2668-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2668-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2668-L2732) · [Before (L2467-L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2467-L2540)

```diff
-         if (-1 === QC.thinMeshIndex || -1 === QC.thinInstanceId) return null;
-         const wC = this.thinMeshes[QC.thinMeshIndex],
-           bC = this.getEntityId(QC.WH);
-         return {
-           result: {
-             distance: Math.sqrt(QC.sqrDistance),
-             pickedPoint: QC.position,
-             pickedMesh: wC.getMesh(QC.thinInstanceId)
-           },
-           eId: bC
-         }
-       }
-       defineType(CC, zC, ZC, QC, wC, bC, nC, fC) {
-         if (!CC) throw new Error(`Falsy type name: ${CC}`);
-         if (this.hasType(CC)) throw new Error(`Type ${CC} already defined`);
-         this.validateTypeMeshes(CC, zC);
- ... (58 more removed lines; see GitHub link above)
+       }({
+         circular: ip,
+         comparator: Sp,
+         createState: Op,
+         equals: cp ? cp(Sp) : (xp = Sp, function(pp, ip, cp, Op, op, Ip, Sp) {
+           return xp(pp, ip, Sp)
+         }),
+         strict: op
+       })
+     }
+ 
+     function fp(pp) {
+       var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         cp = -1;
+       requestAnimationFrame((function Op(op) {
+         cp < 0 && (cp = op), op - cp > ip ? (pp(op), cp = -1) : function(pp) {
+ ... (49 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2542-L2650` → after: `L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2734) · [Before (L2542-L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2542-L2650)

```diff
-           } else ZC++
-         }
-         if (1 !== ZC) throw new Error(`Type ${CC} has ${ZC} root nodes, expected 1`)
-       }
-       updateChildEnabled(CC, zC, ZC, QC) {
-         const wC = this.getObjectNode(ZC, zC),
-           bC = wC.enabled && QC;
-         if (wC.xZC === bC) return;
-         wC.xZC = bC, 0 === zC && this.updateCullActive(ZC), bC && wC.worldStale && this.setDirtyInternal(CC, ZC, zC);
-         const nC = this.types[ZC.type].typeNodes[zC];
-         if (ZC.visible && !ZC.cull && (null !== wC.thinInstanceId && this.thinMeshes[nC.thinMeshIndex].IK(wC.thinInstanceId, bC), this.updateAttachmentsEnabled(wC, bC)), nC.children)
-           for (let fC of nC.children) this.updateChildEnabled(CC, fC, ZC, bC)
-       }
-       cullObjects() {
-         if (0 !== this.dirtyCount) throw new Error("cullObjects called with dirty matrices - updateDirtyNodes must run first");
-         const CC = this.sS.frustumPlanes;
- ... (93 more removed lines; see GitHub link above)
+             "object" === bp(Op) && pp(Op), "function" === typeof Op && Op()
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2652-L2667` → after: `L2736-L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2736-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2736-L2748) · [Before (L2652-L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2652-L2667)

```diff
-           for (let QC = 0; QC < ZC; QC++) {
-             const zC = CC[QC],
-               ZC = this.objectData[zC];
-             if (this.isDeferrable(ZC)) {
-               this.deferredObjectIds.add(zC);
-               continue
-             }
-             const wC = ZC.parentThinObjectId;
-             if (null !== wC && this.objectData[wC].inDirtyBatch && (!ZC.nodes[0].xZC || !this.isDeferrable(this.objectData[wC]))) {
-               let {
-                 parentNodeIndex: CC
-               } = ZC;
-               if (!ZC.dirtyQueued) {
-                 const zC = this.objectData[wC],
-                   ZC = this.types[zC.type].typeNodes;
-                 for (; null !== CC && !zC.nodes[CC].dirtyQueued;) CC = ZC[CC].parent
+         };
+       return {
+         stop: function() {
+           ip = !0
+         },
+         start: function(pp) {
+           ip = !1, cp(pp)
+         },
+         subscribe: function(ip) {
+           return pp = ip,
+             function() {
+               pp = function() {
+                 return null
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2727-L2807` → after: `L2753-L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2753-L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2753-L2769) · [Before (L2727-L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2727-L2807)

```diff
-       refreshStaleWorld(CC, zC) {
-         const ZC = CC.nodes[zC],
-           QC = this.types[CC.type].typeNodes[zC];
-         let wC = ZC.worldStale;
-         if (null !== QC.parent ? wC = this.refreshStaleWorld(CC, QC.parent) || wC : null !== CC.parentThinObjectId && (wC = this.refreshStaleWorld(this.objectData[CC.parentThinObjectId], CC.parentNodeIndex) || wC), !wC) return !1;
-         const bC = this.worldParentNode(CC, QC);
-         return bC && eC.e.matMulToRef(bC.worldMatrix, ZC.matrix, ZC.worldMatrix), ZC.invWorldMatrixDirty = !0, !0
-       }
-       worldParentNode(CC, zC) {
-         return null !== zC.parent ? CC.nodes[zC.parent] : null === CC.parentThinObjectId ? null : this.objectData[CC.parentThinObjectId].nodes[CC.parentNodeIndex]
-       }
-       hasAttachmentsBelow(CC, zC, ZC) {
-         const QC = CC.nodes[ZC];
-         if (0 !== QC.attachedThinObjectIds.length || 0 !== QC.attachedTransformNodes.length) return !0;
-         const {
-           children: wC
- ... (65 more removed lines; see GitHub link above)
+     }
+ 
+     function Fp(pp) {
+       return Fp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Fp(pp)
+     }
+ 
+     function gp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+ ... (1 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2809-L2813` → after: `L2771-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2771-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2771-L2781) · [Before (L2809-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2809-L2813)

```diff
-       getGroupIndicesOrNull(CC, zC) {
-         const ZC = this.groups[CC.type];
-         if (!ZC) return null;
-         const QC = ZC[zC];
-         return QC || null
+       return cp
+     }
+ 
+     function Gp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? gp(Object(cp), !0).forEach((function(ip) {
+           rp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : gp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2815-L2817` → after: `L2783-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2783-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2783-L2806) · [Before (L2815-L2817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2815-L2817)

```diff
-       getGroupIndices(CC, zC) {
-         const ZC = this.getGroupIndicesOrNull(CC, zC);
-         if (!ZC) throw new Error(`Type ${CC.type} has no group ${zC}`);
+       return pp
+     }
+ 
+     function rp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" !== Fp(pp) || null === pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" !== Fp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" === Fp(ip) ? ip : String(ip)
+ ... (8 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2819-L2857` → after: `L2808-L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2808-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2808-L2831) · [Before (L2819-L2857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2819-L2857)

```diff
-       }
-       assertArgs(CC, zC) {
-         if (CC.length !== zC) throw new Error(`Expected ${zC} args, got ${CC.length}`)
-       }
-       getType(CC) {
-         if ("string" === typeof CC) {
-           this.getTypeNodes(CC);
-           return CC
-         }
-         return this.getObjectData(CC).type
-       }
-       deleteObject(CC, zC) {
-         const ZC = this.types[zC.type].typeNodes;
-         let QC = null;
-         if (null !== zC.parentThinObjectId) try {
-           this.detachThinObjectInternal(CC, zC)
- ... (23 more removed lines; see GitHub link above)
+       },
+       zp = function(pp, ip) {
+         return Object.keys(ip).reduce((function(cp, Op) {
+           return Gp(Gp({}, cp), {}, rp({}, Op, pp(Op, ip[Op])))
+         }), {})
+       },
+       sp = function(pp, ip, cp) {
+         return pp.map((function(pp) {
+           return "".concat((Op = pp, Op.replace(/([A-Z])/g, (function(pp) {
+             return "-".concat(pp.toLowerCase())
+           }))), " ").concat(ip, "ms ").concat(cp);
+           var Op
+         })).join(",")
+       };
+ 
+     function Kp(pp, ip) {
+ ... (8 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2859-L2860` → after: `L2833-L2837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2833-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2833-L2837) · [Before (L2859-L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2859-L2860)

```diff
-             var wC;
-             null === (wC = CC.tempTransformNode) || void 0 === wC || wC.dispose()
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2862-L2900` → after: `L2839-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2839-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2839-L2840) · [Before (L2862-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2862-L2900)

```diff
-             QC ??= nC
-           }
-           CC.tempTransformNode = null
-         }
-         const bC = this.cullSpheres.remove(zC.cullSlot);
-         if (-1 !== bC && (this.objectData[bC].cullSlot = zC.cullSlot), delete this.objectData[CC], this.deferredObjectIds.delete(CC), this.reachQueue.delete(zC), null !== QC) throw QC
-       }
-       detachThinObjectInternal(CC, zC) {
-         const ZC = this.objectData[zC.parentThinObjectId];
-         if (void 0 === ZC) console.warn(`Thin object ${CC} is attached to deleted object ${zC.parentThinObjectId}`);
-         else {
-           const QC = this.getObjectNode(ZC, zC.parentNodeIndex),
-             wC = QC.attachedThinObjectIds.indexOf(CC); - 1 !== wC && (QC.attachedThinObjectIds[wC] = QC.attachedThinObjectIds.at(-1), QC.attachedThinObjectIds.pop(), 0 === QC.attachedThinObjectIds.length && ZC.indicesWithThinObjects.delete(zC.parentNodeIndex))
-         }
-         this.removeThinObjectParent(CC, zC), this.updateChildEnabled(CC, 0, zC, !0), void 0 !== ZC && this.updateAttachmentReach(ZC)
-       }
- ... (23 more removed lines; see GitHub link above)
+             Yp = !0, op = pp
+           } finally {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2902-L2904` → after: `L2842-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2842-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2842-L2844) · [Before (L2902-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2902-L2904)

```diff
-               this.deleteObject(QC, CC)
-             } catch (ZC) {
-               zC ??= ZC
+               if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
+             } finally {
+               if (Yp) throw op
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2908-L2993` → after: `L2849-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2849-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2849-L2851) · [Before (L2908-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2908-L2993)

```diff
-         if (null !== zC) throw zC
-       }
-       detachAllTransformNodesInternal(CC) {
-         var zC;
-         CC.attachedTransformNodes.length = 0, null === (zC = CC.tempTransformNode) || void 0 === zC || zC.dispose(), CC.tempTransformNode = null
-       }
-       disposeAllTransformNodesInternal(CC) {
-         let zC = null;
-         for (const QC of CC.attachedTransformNodes) try {
-           QC.dispose()
-         } catch (ZC) {
-           zC ??= ZC
-         }
-         if (null !== zC) throw zC
-       }
-       setDirtyInternal(CC, zC, ZC) {
- ... (70 more removed lines; see GitHub link above)
+       }(pp, ip) || ii(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2996-L3000` → after: `L2854-L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2854-L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2854-L2861) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L2996-L3000)

```diff
-     function XC(CC, zC, ZC, QC) {
-       const wC = 0 !== QC.x ? CC / QC.x : 1,
-         bC = 0 !== QC.y ? zC / QC.y : 1,
-         nC = 0 !== QC.z ? ZC / QC.z : 1;
-       return Math.max(Math.abs(wC), Math.abs(bC), Math.abs(nC)) + Math.max(Math.abs(1 - wC), Math.abs(1 - bC), Math.abs(1 - nC))
+     function Vp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return ci(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || ii(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3004-L3047` → after: `L2865-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2865-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2865-L2870) · [Before (L3004-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3004-L3047)

```diff
-       let ZC = Math.hypot(CC[0], CC[1], CC[2]),
-         QC = Math.hypot(CC[4], CC[5], CC[6]),
-         wC = Math.hypot(CC[8], CC[9], CC[10]);
-       const bC = CC[0] * CC[4] + CC[1] * CC[5] + CC[2] * CC[6],
-         nC = CC[0] * CC[8] + CC[1] * CC[9] + CC[2] * CC[10],
-         fC = CC[4] * CC[8] + CC[5] * CC[9] + CC[6] * CC[10],
-         oC = 1e-6 * (ZC * ZC + QC * QC + wC * wC);
-       (Math.abs(bC) > oC || Math.abs(nC) > oC || Math.abs(fC) > oC) && (ZC = QC = wC = Math.sqrt(ZC * ZC + QC * QC + wC * wC)), zC.set(ZC, QC, wC)
-     }
-     lC.TEMP_RESULT_POS = new YC.r, lC.TEMP_MODEL_POINT = new YC.r, lC.TEMP_CANDIDATE_POS = new YC.r, lC.TEMP_SPHERE_SCALE = new YC.r, lC.TEMP_SPHERE_OFFSET = new YC.r, lC.TEMP_LOCAL_RAY = new KC.f(new YC.r, new YC.r, 1), lC.TEMP_REACH_LOCAL = new YC.b, lC.TEMP_REACH_WORLD = new Y … [truncated]
-     var uC = ZC(37450),
-       rC = ZC(37063),
-       sC = ZC(37175);
-     var TC = ZC(37310),
-       aC = ZC(37453),
-       tC = ZC(37456),
- ... (28 more removed lines; see GitHub link above)
+       if (pp) {
+         if ("string" === typeof pp) return ci(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? ci(pp, ip) : void 0
+       }
+     }
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3049-L3050` → after: `L2872-L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2872-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2872-L2875) · [Before (L3049-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3049-L3050)

```diff
-     function Qz() {
-       this.AfC = !1, this.eId = null, this.Wm = null, this[Fz] = !1, this[LC] = void 0, this[UC] = void 0, this[BC] = void 0, this[OC] = void 0, this[bC.l] = void 0, this[kC] = void 0, this[VC] = void 0, this[Cz] = void 0, this[zz] = void 0, this[Zz] = void 0
+     function ci(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3052-L3068` → after: `L2877-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2877-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2877-L2922) · [Before (L3052-L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3052-L3068)

```diff
-     class wz {
-       constructor(CC, zC, ZC) {
-         zC = Object.assign({}, yC, zC), this.MN = CC, this.RfC = !!zC.RfC, this.zS = !!zC.zS, this.eg = zC.WZC, this.hg = zC.NZC, this.xfC = 6, this.engine = null, this.sS = null, this.camera = null, this.hQC = null, this.dQC = null, this.JfC = null, this.IfC = null, this.CS = zC … [truncated]
-           var CC = document.createElement("div");
-           CC.id = "noa_fps", CC.style.position = "absolute", CC.style.top = "0", CC.style.right = "0", CC.style.zIndex = "0", CC.style.color = "white", CC.style.backgroundColor = "rgba(0,0,0,0.5)", CC.style.font = "14px monospace", CC.style.textAlign = "center", CC.style.minWidth … [truncated]
-           var zC = 1e3,
-             ZC = 0,
-             QC = 0,
-             wC = performance.now(),
-             bC = wC;
-           Sz = function() {
-             ZC++;
-             var nC = performance.now();
-             if (nC - bC > QC && (QC = nC - bC), bC = nC, !(nC - wC < zC)) {
-               var fC = Math.round(ZC / (nC - wC) * 1e3),
-                 oC = Math.round(1 / QC * 1e3);
- ... (1 more removed lines; see GitHub link above)
+     var Oi = 1e-4,
+       oi = function(pp, ip) {
+         return [0, 3 * pp, 3 * ip - 6 * pp, 3 * pp - 3 * ip + 1]
+       },
+       Ii = function(pp, ip) {
+         return pp.map((function(pp, cp) {
+           return pp * Math.pow(ip, cp)
+         })).reduce((function(pp, ip) {
+           return pp + ip
+         }))
+       },
+       Si = function(pp, ip) {
+         return function(cp) {
+           var Op = oi(pp, ip);
+           return Ii(Op, cp)
+         }
+ ... (30 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3070-L3110` → after: `L2924-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2924-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2924-L2941) · [Before (L3070-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3070-L3110)

```diff
-           }
-         }(), this.nH = new lC(this.sS, {
-           pfC: CC => {
-             this.iH(CC)
-           },
-           sQC: this.lQC.sQC
-         }), this.CS && this.CS.attach(this)
-       }
-       nS() {
-         return this.HfC
-       }
-       eQC(CC, zC) {
-         this.engine = this.CS?.mzC || this.lQC.gZC(CC, zC), this.CS || (CC.addEventListener("webglcontextlost", (zC => {
-           zC.preventDefault();
-           const ZC = function(CC, zC, ZC) {
-             const QC = {
- ... (25 more removed lines; see GitHub link above)
+         } [Op, Ip, op, Sp].every((function(pp) {
+           return "number" === typeof pp && pp >= 0 && pp <= 1
+         }));
+         var Yp, Dp, Ap = Si(Op, Ip),
+           Pp = Si(op, Sp),
+           Wp = (Yp = Op, Dp = Ip, function(pp) {
+             var ip = oi(Yp, Dp),
+               cp = [].concat(Vp(ip.map((function(pp, ip) {
+                 return pp * ip
+               })).slice(1)), [0]);
+             return Ii(cp, pp)
+           }),
+           yp = function(pp) {
+             for (var ip, cp = pp > 1 ? 1 : pp, Op = cp, op = 0; op < 8; ++op) {
+               var Ip = Ap(Op) - cp,
+                 Sp = Wp(Op);
+ ... (2 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3112-L3212` → after: `L2943-L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2943-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2943-L2977) · [Before (L3112-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3112-L3212)

```diff
-             CC.sS && (QC.OfC = {
-               kfC: CC.sS.meshes.length,
-               VfC: CC.sS.materials.length,
-               KnC: CC.sS.textures.length,
-               EZC: CC.EZC()
-             });
-             return QC
-           }(this, CC, this.HfC ? "WebGL2" : "WebGL1");
-           ZC.eventType = zC.type, ZC.statusMessage = zC.statusMessage || "No status message", console.error("WebGL context lost!", ZC)
-         })), CC.addEventListener("webglcontextrestored", (() => {
-           var CC;
-           console.warn("WebGL context restored."), CC = this.engine, setTimeout((() => {
-             const zC = CC;
-             !0 === zC._contextWasLost && zC._gl && !zC._gl.isContextLost() && (jC || (jC = !0, console.error("WebGL context restore failed part way (a restore observer threw): drawing again with what it rebuilt")), zC._contextWasLost = !1)
-           }), 0)
-         }))), this.HfC = null !== this.CS || !("fS" in this.engine) || this.engine.fS >= 2, this.engine.BZC = !1, this.EfC(), this.lQC.EQC(this, zC), (0, tC.o)(this, zC.HQC), this.lfC = 0, this.XfC = !1
- ... (85 more removed lines; see GitHub link above)
+             return Pp(Op)
+           };
+         return yp.isStepper = !1, yp
+       },
+       Li = function() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         var Op = ip[0];
+         if ("string" === typeof Op) switch (Op) {
+           case "ease":
+           case "ease-in-out":
+           case "ease-out":
+           case "ease-in":
+           case "linear":
+             return xi(Op);
+           case "spring":
+             return function() {
+ ... (19 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3215` → after: `L2980-L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2980-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2980-L2984) · [Before (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3215)

```diff
-       return !!(CC.parent || CC.AzC || CC.infiniteDistance || "__root__" === CC.name)
+       return Yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Yi(pp)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3219-L3226` → after: `L2988-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2988-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2988-L2994) · [Before (L3219-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3219-L3226)

```diff
-       (0, tC.p)(CC), CC.lQC.YQC(CC);
-       var zC = CC.MN.camera.oB(),
-         ZC = CC.MN.YN,
-         QC = Math.floor(zC[0] + ZC[0]),
-         wC = Math.floor(zC[1] + ZC[1]),
-         bC = Math.floor(zC[2] + ZC[2]),
-         nC = CC.MN.rG(QC, wC, bC);
-       Mz(CC, nC)
+       return function(pp) {
+         if (Array.isArray(pp)) return wi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || Ui(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3230-L3317` → after: `L2998-L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2998-L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L2998-L3003) · [Before (L3230-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3230-L3317)

```diff
-       var ZC = CC.MN.pR.cameraTint;
-       ZC && Array.isArray(ZC) && ZC.length >= 4 ? CC.XfC = !0 : CC.XfC && (CC.XfC = !1, CC.lfC = -1);
-       const QC = zC !== CC.lfC;
-       if (!CC.XfC && QC && 0 !== zC) {
-         const QC = CC.MN.qM.A4(zC, 0);
-         if (QC) {
-           const zC = CC.MN.qM.NS(QC),
-             wC = zC.color,
-             bC = zC.alpha;
-           wC && bC && bC < 1 && (ZC = [wC[0], wC[1], wC[2], bC])
-         }
-       }
-       CC.lfC = zC, (QC || CC.XfC) && (ZC ? (! function(CC, zC) {
-         const {
-           emissiveColor: ZC,
-           alpha: QC
- ... (72 more removed lines; see GitHub link above)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3320-L3321` → after: `L3008-L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3008-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3008-L3015) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3320-L3321)

```diff
-       function MC(CC, zC) {
-         console.warn(CC.name + " --- " + zC)
+     function Pi(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ai(Object(cp), !0).forEach((function(ip) {
+           Wi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ai(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3339` → after: `L3042-L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3042-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3042-L3069) · [Before (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3339)

```diff
-       return [Math.cos(zC) * Math.sin(CC), -Math.sin(zC), Math.cos(zC) * Math.cos(CC)]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
+           } catch (pp) {
+             Yp = !0, op = pp
+ ... (12 more added lines; see GitHub link above)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3342-L3350` → after: `L3072-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3072-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3072-L3076) · [Before (L3342-L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3342-L3350)

```diff
-     function wC(CC) {
-       const zC = CC[0],
-         ZC = CC[1],
-         QC = CC[2],
-         wC = Math.atan2(zC, QC),
-         bC = Math.sqrt(zC * zC + QC * QC);
-       return {
-         pg: wC,
-         yzC: Math.atan2(-ZC, bC)
+     function Ui(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return wi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? wi(pp, ip) : void 0
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3353-L3409` → after: `L3079-L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3079-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3079-L3100) · [Before (L3353-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3353-L3409)

```diff
-     ZC.d(zC, {
-       c: () => QC,
-       d: () => wC
-     })
-   },
-   38231: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => RC,
-       e: () => IC
-     });
-     var QC = ZC(4036),
-       wC = ZC.n(QC),
-       bC = ZC(2837),
-       nC = ZC(2818),
-       fC = ZC(38240),
-       oC = ZC(38249),
- ... (41 more removed lines; see GitHub link above)
+ 
+     function wi(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
+     var vi = function(pp, ip, cp) {
+         return pp + (ip - pp) * cp
+       },
+       ti = function(pp) {
+         return pp.from !== pp.to
+       },
+       Hi = function pp(ip, cp, Op) {
+         var op = zp((function(pp, cp) {
+           if (ti(cp)) {
+             var Op = yi(ip(cp.from, cp.to, cp.tw), 2),
+ ... (6 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3452` → after: `L3103-L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3103-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3103-L3179) · [Before (L3452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3452)

```diff
-         }), !1)
+         }), cp);
+         return Op < 1 ? zp((function(pp, ip) {
+           return ti(ip) ? Pi(Pi({}, ip), {}, {
+             tw: vi(ip.tw, op[pp].tw, Op),
+             from: vi(ip.from, op[pp].from, Op)
+           }) : ip
+         }), cp) : pp(ip, op, Op - 1)
+       };
+     const di = function(pp, ip, cp, Op, op) {
+       var Ip, Sp, xp, Lp, Yp = (Ip = pp, Sp = ip, [Object.keys(Ip), Object.keys(Sp)].reduce((function(pp, ip) {
+           return pp.filter((function(pp) {
+             return ip.includes(pp)
+           }))
+         }))),
+         Dp = Yp.reduce((function(cp, Op) {
+           return Pi(Pi({}, cp), {}, Wi({}, Op, [pp[Op], ip[Op]]))
+ ... (61 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3456-L3457` → after: `L3184-L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3184-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3184-L3198) · [Before (L3456-L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3456-L3457)

```diff
-     function MC(CC, zC, ZC, QC) {
-       return CC.find((CC => CC.i === zC && CC.j === ZC && CC.k === QC))
+     function ki(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return mi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return mi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return mi(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3460-L3461` → after: `L3201-L3204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3201-L3204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3201-L3204) · [Before (L3460-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3460-L3461)

```diff
-     function gC(CC, zC, ZC) {
-       for (var QC = 0; QC < CC.length; QC++) ZC(zC.i + CC[QC][0], zC.j + CC[QC][1], zC.k + CC[QC][2])
+     function mi(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3464-L3468` → after: `L3207-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3207-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3207-L3213) · [Before (L3464-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3464-L3468)

```diff
-     function SC(CC, zC, ZC, QC, wC) {
-       for (var bC = 0; bC < 3; bC++) {
-         var nC = 1 === bC ? 1 : 0,
-           fC = ZC[nC] - QC[nC] * wC;
-         CC.min[bC] = Math.ceil((zC[bC] - fC) / wC), CC.max[bC] = Math.floor((zC[bC] + fC) / wC)
+     function Ri(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3472-L3473` → after: `L3218-L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3218-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3218-L3227) · [Before (L3472-L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3472-L3473)

```diff
-     function pC(CC, zC, ZC, QC) {
-       return zC >= CC.min[0] && zC <= CC.max[0] && ZC >= CC.min[1] && ZC <= CC.max[1] && QC >= CC.min[2] && QC <= CC.max[2]
+     function qi(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ri(Object(cp), !0).forEach((function(ip) {
+           Mi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ri(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3477-L3624` → after: `L3231-L3236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3231-L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3231-L3236) · [Before (L3477-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3477-L3624)

```diff
-       CC.empty();
-       for (var QC = 0; QC <= zC[0]; QC++)
-         for (var wC = 0; wC <= QC; wC++)
-           for (var bC = 0; bC <= zC[1]; bC++) ZC(QC, bC, wC) && CC.add(QC, bC, wC)
-     }
-     var GC = {
-       Ig: 32,
-       gR: [2, 2],
-       RY: [3, 3],
-       UCC: !1,
-       VzC: !1,
-       JY: null
-     };
-     class RC extends(wC()) {
-       constructor(CC, zC) {
-         super(), zC = Object.assign({}, GC, zC), this.MN = CC, this.BCC = !1, this.KS = !1, this.bg = nC.e, this.VzC = !!zC.VzC, this.JY = zC.JY, this.UCC = !!zC.UCC, this.ozC = 50, this.qzC = 50, this.RoC = 3, this.AoC = 2, this.FzC = this.AoC / this.RoC, this.WzC = 3, this.WCC  … [truncated]
- ... (132 more removed lines; see GitHub link above)
+       return (ip = Ei(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3656-L3658` → after: `L3239-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3239-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3239-L3243) · [Before (L3656-L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3656-L3658)

```diff
-     function JC(CC, zC, ZC, QC) {
-       let [wC, bC, nC, fC, oC, qC] = QC;
-       return CC >= wC && zC >= bC && ZC >= nC && CC <= fC && zC <= oC && ZC <= qC
+     function Ci(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ei(Op.key), Op)
+       }
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3661-L3668` → after: `L3246-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3246-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3246-L3257) · [Before (L3661-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3661-L3668)

```diff
-     function IC(CC, zC, ZC, QC, wC, bC, nC, fC) {
-       if (!wC && 0 === fC.length) return !1;
-       if (bC.has(QC)) return !1;
-       for (const oC of nC)
-         if (JC(CC, zC, ZC, oC)) return !1;
-       for (const oC of fC)
-         if (JC(CC, zC, ZC, oC)) return !0;
-       return wC || !1
+     function Ei(pp) {
+       var ip = function(pp, ip) {
+         if ("object" !== ei(pp) || null === pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" !== ei(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" === ei(ip) ? ip : String(ip)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3671-L3679` → after: `L3260-L3263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3260-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3260-L3263) · [Before (L3671-L3679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3671-L3679)

```diff
-     function iC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
-       const WC = `${CC}|${zC}|${ZC}`;
-       if (wC.has(WC)) return FC;
-       if (bC.has(WC)) return !FC;
-       for (const NC of oC)
-         if (JC(CC, zC, ZC, NC)) return FC;
-       for (const NC of qC)
-         if (JC(CC, zC, ZC, NC)) return !FC;
-       return nC.has(QC) ? FC : (fC.has(QC), !FC)
+     function Xi(pp, ip) {
+       return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Xi(pp, ip)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3683-L3786` → after: `L3267-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3267-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3267-L3283) · [Before (L3683-L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3683-L3786)

```diff
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.MN.entities.yG(CC.MN.qE);
-       var [ZC, QC, wC] = zC;
-       return CC.kQC(Math.floor(ZC), Math.floor(QC), Math.floor(wC))
-     }
-     RC.prototype.KCC = function(CC, zC, ZC) {
-       return this.MN.pR.canChange ? iC(CC, zC, ZC, this.Wy(CC, zC, ZC), this.fZC, this.wZC, this.oZC, this.bZC, this.qZC, this.nZC, !1) : iC(CC, zC, ZC, this.Wy(CC, zC, ZC), this.wZC, this.fZC, this.bZC, this.oZC, this.nZC, this.qZC, !0)
-     }, RC.prototype.ZN = function() {
-       var CC = performance.now(),
-         zC = this.MN.entities.yG(this.MN.qE),
-         [ZC, QC, wC] = vC(this, zC),
-         bC = this.ioC;
-       if ((ZC !== bC[0] || QC !== bC[1] || wC !== bC[2]) && (this.emit("playerEnteredChunk", ZC, QC, wC), this.ioC = [ZC, QC, wC], this.voC = 0, this.LoC()), this.doC.size > 0 && function(CC, zC) {
-           var ZC = !1;
-           CC.doC.forEach(((QC, wC) => {
-             zC - QC >= 1e3 && (CC.doC.delete(wC), ZC = !0)
-           })), ZC && (CC.voC = 0)
- ... (88 more removed lines; see GitHub link above)
+       var ip = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
+         try {
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
+         } catch (pp) {
+           return !1
+         }
+       }();
+       return function() {
+         var cp, Op = Bi(pp);
+         if (ip) {
+           var op = Bi(this).constructor;
+           cp = Reflect.construct(Op, arguments, op)
+         } else cp = Op.apply(this, arguments);
+ ... (1 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3797-L3802` → after: `L3287-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3287-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3287-L3290) · [Before (L3797-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3797-L3802)

```diff
-     function dC(CC, zC, ZC, QC) {
-       var wC = CC.kS.Qv(zC, ZC, QC);
-       if (wC) {
-         var [bC, nC, fC] = wC;
-         bC === zC && nC === ZC && fC === QC || (CC.IzC.remove(bC, nC, fC), CC.izC.remove(bC, nC, fC), CC.eS.remove(bC, nC, fC), sC(CC, bC, nC, fC))
-       }
+     function Qi(pp, ip) {
+       if (ip && ("object" === ei(ip) || "function" === typeof ip)) return ip;
+       if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+       return Ji(pp)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3807-L3825` → after: `L3294-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3294-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3294-L3295) · [Before (L3807-L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3807-L3825)

```diff
-       var zC = CC.IzC;
-       if (zC.fg()) return !0;
-       var ZC = CC.izC.count(),
-         QC = CC.vzC.count();
-       if (ZC >= CC.ozC) return !0;
-       if (QC >= CC.qzC) return !0;
-       var [wC, bC, nC] = zC.pop();
-       return function(CC, zC, ZC, QC) {
-         var wC = CC.WCC,
-           bC = CC.kg.BoC(),
-           nC = CC.MN.fCC,
-           fC = [zC, ZC, QC, nC].join("|"),
-           oC = zC * wC,
-           qC = ZC * wC,
-           FC = QC * wC,
-           WC = CC.izC.Qv(zC, ZC, QC);
- ... (3 more removed lines; see GitHub link above)
+       if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return pp
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3829-L3832` → after: `L3299-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3299-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3299-L3301) · [Before (L3829-L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3829-L3832)

```diff
-       var zC = CC.eS;
-       if (zC.fg() && (zC = CC.vS), zC.fg()) return !0;
-       var [ZC, QC, wC] = zC.pop();
-       return sC(CC, ZC, QC, wC), zC.fg()
+       return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Bi(pp)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3835-L3847` → after: `L3318-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3318-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3318-L3603) · [Before (L3835-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3835-L3847)

```diff
-     function lC(CC, zC) {
-       var ZC = CC.hzC.Pg,
-         QC = ZC.length > 0 ? ZC[ZC.length - 1] : null,
-         wC = QC ? CC.PS.GS(QC[0], QC[1], QC[2]) : null;
-       if (CC.MN.JA.WS(!(wC && wC.Bg))) return !0;
-       var bC = CC.hzC;
-       if (bC.fg() && (bC = CC.ezC), bC.fg() && !zC && (bC = CC.vzC), bC.fg()) return !0;
-       var [nC, fC, oC] = bC.pop();
-       if (!CC.vS.includes(nC, fC, oC)) {
-         var qC = CC.PS.GS(nC, fC, oC);
-         qC && function(CC, zC) {
-           XC(CC, zC.i, zC.j, zC.k), zC.ZI(), Cz("mesh")
-         }(CC, qC)
+       function Sp(pp, ip) {
+         var cp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, Sp);
+         var Op = (cp = Ip.call(this, pp, ip)).props,
+           op = Op.isActive,
+           xp = Op.attributeName,
+           Lp = Op.from,
+           Yp = Op.to,
+           Dp = Op.steps,
+           Ap = Op.children,
+           Pp = Op.duration;
+         if (cp.handleStyleChange = cp.handleStyleChange.bind(Ji(cp)), cp.changeStyle = cp.changeStyle.bind(Ji(cp)), !op || Pp <= 0) return cp.state = {
+           style: {}
+         }, "function" === typeof Ap && (cp.state = {
+ ... (270 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3851-L3852` → after: `L3608-L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3608-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3608-L3615) · [Before (L3851-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3851-L3852)

```diff
-     function XC(CC, zC, ZC, QC) {
-       CC.vzC.remove(zC, ZC, QC), CC.ezC.remove(zC, ZC, QC), CC.hzC.remove(zC, ZC, QC)
+     function Ep() {
+       return Ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Ep.apply(this, arguments)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3855-L3864` → after: `L3618-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3618-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3618-L3624) · [Before (L3855-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3855-L3864)

```diff
-     function cC(CC, zC, ZC) {
-       if (!zC.SS && !zC.xJ) return !1;
-       if (CC.hzC.includes(zC.i, zC.j, zC.k)) return !1;
-       if (ZC) return CC.vzC.remove(zC.i, zC.j, zC.k), CC.ezC.remove(zC.i, zC.j, zC.k), CC.hzC.add(zC.i, zC.j, zC.k), !0;
-       if (CC.vzC.includes(zC.i, zC.j, zC.k)) return !1;
-       if (CC.ezC.includes(zC.i, zC.j, zC.k)) return !1;
-       var QC = 26 === zC.iJ ? CC.ezC : CC.vzC;
-       if (QC.add(zC.i, zC.j, zC.k), CC.eoC++, CC.eoC > 20) {
-         var [wC, bC, nC] = vC(CC);
-         CC.HoC.PoC(QC, UC, wC, bC, nC), CC.eoC = 0
+     function Xp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3866` → after: `L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3626) · [Before (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3866)

```diff
-       return !0
+       return cp
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3869-L3870` → after: `L3629-L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3629-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3629-L3638) · [Before (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3869-L3870)

```diff
-     function uC(CC, zC) {
-       return CC.kg.release(zC), !1
+     function lp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Xp(Object(cp), !0).forEach((function(ip) {
+           fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Xp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3885-L3901` → after: `L3641-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3641-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3641-L3645) · [Before (L3885-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3885-L3901)

```diff
-     function sC(CC, zC, ZC, QC) {
-       var wC = CC.PS.GS(zC, ZC, QC);
-       if (wC) {
-         var bC = wC.lN;
-         CC.emit("chunkBeingRemoved", wC.lg, wC.lN, wC.PJ), CC.MN.Vg.afC(wC), wC.dispose(), CC.kg.release(bC), Cz("dispose"), BC(CC, zC, ZC, QC, null)
-       }
-       CC.PS.yI(zC, ZC, QC), CC.kS.remove(zC, ZC, QC), CC.moC.size > 0 && CC.moC.delete(zC + "|" + ZC + "|" + QC), CC.vS.remove(zC, ZC, QC), XC(CC, zC, ZC, QC),
-         function(CC, zC, ZC, QC) {
-           var wC = zC + "|" + QC,
-             bC = CC.roC.get(wC);
-           if (void 0 === bC) return;
-           if (ZC < bC) return;
-           var nC = null;
-           CC.kS.Pg.forEach((function(CC) {
-             CC[0] === zC && CC[2] === QC && CC[1] !== ZC && (null === nC || CC[1] > nC) && (nC = CC[1])
-           })), null !== nC ? CC.roC.set(wC, nC) : CC.roC.delete(wC)
- ... (1 more removed lines; see GitHub link above)
+     function Qp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, bp(Op.key), Op)
+       }
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3905` → after: `L3649-L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3649-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3649-L3657) · [Before (L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3905)

```diff
-       return [this.loC(CC), this.loC(zC), this.loC(ZC)]
+       return ip = Np(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Mp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Bp() ? Reflect.construct(ip, cp || [], Np(pp).constructor) : ip.apply(pp, cp))
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3908-L3909` → after: `L3660-L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3660-L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3660-L3666) · [Before (L3908-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3908-L3909)

```diff
-     function aC(CC, zC, ZC) {
-       return [this.XoC(CC), this.XoC(zC), this.XoC(ZC)]
+     function Bp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Bp = function() {
+         return !!pp
+       })()
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3913` → after: `L3670-L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3670-L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3670-L3672) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3913)

```diff
-       return 0 | Math.floor(CC / this.WCC)
+       return Np = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Np(pp)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3916-L3919` → after: `L3675-L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3675-L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3675-L3678) · [Before (L3916-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3916-L3919)

```diff
-     function DC(CC) {
-       var zC = this.WCC,
-         ZC = CC % zC | 0;
-       return ZC < 0 && (ZC += zC), ZC
+     function Tp(pp, ip) {
+       return Tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Tp(pp, ip)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3922-L3923` → after: `L3681-L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3681-L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3681-L3687) · [Before (L3922-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3922-L3923)

```diff
-     function jC(CC) {
-       return CC >> this.coC
+     function fp(pp, ip, cp) {
+       return (ip = bp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3927-L3947` → after: `L3691-L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3691-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3691-L3701) · [Before (L3927-L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3927-L3947)

```diff
-       return CC & this.uoC
-     }
- 
-     function LC(CC, zC, ZC, QC, wC) {
-       let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       void 0 === ZC && ([ZC, QC, wC] = vC(CC)), zC.Dv(((CC, zC, bC) => UC(ZC - CC, QC - zC, wC - bC)), bC)
-     }
-     var UC = (CC, zC, ZC) => CC * CC + zC * zC + ZC * ZC;
- 
-     function BC(CC, zC, ZC, QC, wC) {
-       for (var bC = !wC || wC && !wC.Wg, nC = -1; nC <= 1; nC++)
-         for (var fC = -1; fC <= 1; fC++)
-           for (var oC = -1; oC <= 1; oC++)
-             if (0 !== (nC | fC | oC)) {
-               var qC = CC.PS.GS(zC + nC, ZC + fC, QC + oC);
-               if (qC) {
- ... (5 more removed lines; see GitHub link above)
+       var ip = function(pp, ip) {
+         if ("object" != Mp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Mp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Mp(ip) ? ip : ip + ""
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3949-L3955` → after: `L3703-L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3703-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3703-L3722) · [Before (L3949-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3949-L3955)

```diff
- 
-     function OC(CC, zC) {
-       var ZC = CC * CC,
-         QC = zC * zC;
-       return CC === zC ? (CC, zC, QC) => CC * CC + zC * zC + QC * QC <= ZC : CC > zC ? (CC, QC, wC) => !(Math.abs(QC) > zC) && CC * CC + QC * QC + wC * wC <= ZC : (CC, zC, wC) => {
-         var bC = CC * CC + wC * wC;
-         return !(bC > ZC) && bC + zC * zC <= QC
+     var hp = function(pp) {
+       function ip() {
+         var pp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return fp(pp = Jp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !0
+         }), fp(pp, "id", (0, jp.J)("recharts-area-")), fp(pp, "handleAnimationEnd", (function() {
+           var ip = pp.props.onAnimationEnd;
+           pp.setState({
+             isAnimationFinished: !0
+           }), Lp()(ip) && ip()
+         })), fp(pp, "handleAnimationStart", (function() {
+           var ip = pp.props.onAnimationStart;
+ ... (4 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L3957-L4012` → after: `L3724-L4108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L3724-L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L3724-L4108) · [Before (L3957-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L3957-L4012)

```diff
-     }
- 
-     function kC(CC, zC, ZC, QC) {
-       var wC = 0,
-         bC = 0,
-         nC = 0,
-         fC = 0,
-         oC = [];
-       ZC.forEach((zC => {
-         var ZC = CC.PS.GS(zC[0], zC[1], zC[2]);
-         ZC && (nC++, oC.push(ZC.BS), ZC.ng && wC++, ZC.Wg && bC++, 26 === ZC.iJ && fC++)
-       }));
-       var qC = ZC.length.toString().padEnd(8);
-       if (qC += ("exist: " + nC).padEnd(12), qC += ("full: " + wC).padEnd(12), qC += ("empty: " + bC).padEnd(12), qC += ("surr: " + fC).padEnd(12), QC) {
-         var FC = oC.reduce(((CC, zC) => CC + zC), 0),
-           WC = oC.reduce(((CC, zC) => Math.max(CC, zC)), 0),
- ... (40 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && Tp(pp, ip)
+       }(ip, pp), cp = ip, Op = [{
+         key: "renderDots",
+         value: function(pp, cp, Op) {
+           var Ip = this.props.isAnimationActive,
+             Sp = this.state.isAnimationFinished;
+ ... (369 more added lines; see GitHub link above)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4015-L4057` → after: `L4111-L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4111-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4111-L4161) · [Before (L4015-L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4015-L4057)

```diff
-     }, WC.removeItemClient = function(CC, zC, ZC, QC) {
-       if (QC && !(0, oC.e)().JR.EzC(CC.MN.qE).isAlive) return !1;
-       if (zC >= CC.playerInventory.numSlots && !CC.bQ && !CC.inCreative) return !1;
-       const fC = CC.getItemAtIdx(zC);
-       if (null !== fC && void 0 !== fC && fC.amount && fC.amount <= 0) return console.error(new Error(`Found item ${fC.name} with non-positive amount ${fC.amount}`).stack), !1;
-       let FC;
-       if (zC < CC.playerInventory.numSlots ? FC = CC.playerInventory.removeItem(zC, ZC) : CC.bQ ? FC = CC.bQ.removeItem(zC - CC.playerInventory.numSlots, ZC) : (console.assert(CC.inCreative, "Must be in creative to get here"), FC = !0), !FC) return !1;
-       const WC = (0, oC.c)().client.inventoryPrediction.record(qC.c.remove(zC, ZC, fC.name));
-       if (QC) {
-         var NC;
-         const {
-           MN: QC
-         } = CC, qC = null !== (NC = QC.ECC) && void 0 !== NC ? NC : QC.camera.yB(), FC = [qC[0], qC[1], qC[2]];
-         (0, bC.sendColyMessage)(nC.fh, {
-           rq: zC,
-           Tq: fC.typeObj.id,
- ... (27 more removed lines; see GitHub link above)
+     }))
+   },
+   6402: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Gp
+     });
+     var Op = cp(62),
+       op = cp(5203),
+       Ip = cp(6256),
+       Sp = cp(6322),
+       xp = cp.n(Sp),
+       Lp = cp(5575),
+       Yp = cp.n(Lp),
+       Dp = cp(6103),
+       Ap = cp(6332),
+       Pp = cp(6410),
+ ... (35 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4060-L4073` → after: `L4164-L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4164-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4164-L4173) · [Before (L4060-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4060-L4073)

```diff
-     }, WC.moveItemIntoIdxsClient = function(CC, zC, ZC, QC, wC) {
-       const fC = CC.moveItemIntoIdxs(zC, ZC, QC, wC),
-         {
-           actualMovedAmt: FC
-         } = fC;
-       if (0 !== FC) {
-         const CC = (0, oC.c)().client.inventoryPrediction.record(qC.c.moveIntoIdxs(zC, ZC, QC, FC));
-         (0, bC.sendColyMessage)(nC.ai, {
-           bF: zC,
-           nF: ZC,
-           fF: QC,
-           oF: FC,
-           bn: CC
-         })
+     }
+ 
+     function Rp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? mp(Object(cp), !0).forEach((function(ip) {
+           qp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : mp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4102` → after: `L4179-L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4179-L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4179-L4214) · [Before (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4102)

```diff
-       return new wC.Color3(CC / 255, zC / 255, ZC / 255)
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != jp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != jp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == jp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (20 more added lines; see GitHub link above)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4105-L4106` → after: `L4217-L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4217-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4217-L4238) · [Before (L4105-L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4105-L4106)

```diff
-     function fC(CC, zC, ZC, QC) {
-       return new wC.e(CC / 255, zC / 255, ZC / 255, QC)
+     function Cp(pp, ip) {
+       var cp = pp.x,
+         Op = pp.y,
+         op = Mp(pp, ep),
+         Ip = "".concat(cp),
+         Sp = parseInt(Ip, 10),
+         xp = "".concat(Op),
+         Lp = parseInt(xp, 10),
+         Yp = "".concat(ip.height || op.height),
+         Dp = parseInt(Yp, 10),
+         Ap = "".concat(ip.width || op.width),
+         Pp = parseInt(Ap, 10);
+       return Rp(Rp(Rp(Rp(Rp({}, ip), op), Sp ? {
+         x: Sp
+       } : {}), Lp ? {
+         y: Lp
+ ... (6 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4110` → after: `L4242-L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4242-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4242-L4246) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4110)

```diff
-       return nC(CC[0], CC[1], CC[2])
+       return Op.createElement(dp.d, kp({
+         shapeType: "rectangle",
+         propTransformer: Cp,
+         activeClassName: "recharts-active-bar"
+       }, pp))
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4114` → after: `L4251-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4251-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4251-L4255) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4114)

```diff
-       return fC(CC[0], CC[1], CC[2], CC[3])
+       return Qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Qp(pp)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4118-L4126` → after: `L4259-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4259-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4259-L4280) · [Before (L4118-L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4118-L4126)

```diff
-       if ((0, QC.H)(zC.mw) || (CC.direction1._x = zC.mw[0], CC.direction1._y = zC.mw[1], CC.direction1._z = zC.mw[2]), (0, QC.H)(zC.Hw) || (CC.direction2._x = zC.Hw[0], CC.direction2._y = zC.Hw[1], CC.direction2._z = zC.Hw[2]), (0, QC.H)(zC.Ew) || (CC.minSize = zC.Ew), (0, QC.H)( … [truncated]
-         var ZC;
-         const QC = zC.uw,
-           wC = null !== (ZC = CC.getColorGradients()) && void 0 !== ZC ? ZC : [];
-         if (wC.length === QC.length)
-           for (let CC = 0; CC < QC.length; CC++) wC[CC].gradient = QC[CC].timeFraction, wC[CC].color1 = qC(QC[CC].minColor), wC[CC].color2 = qC(QC[CC].maxColor);
-         else {
-           for (const zC of [...wC]) CC.removeColorGradient(zC.gradient);
-           for (const zC of QC) CC.addColorGradient(zC.timeFraction, qC(zC.minColor), qC(zC.maxColor))
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
+       }
+       return op
+     }
+ ... (6 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4129-L4131` → after: `L4294-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4294-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4294-L4304) · [Before (L4129-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4129-L4131)

```diff
-       if (!(0, QC.H)(zC.Xw)) {
-         const ZC = CC.isEmitting();
-         zC.Xw && !ZC ? CC.start() : !zC.Xw && ZC && CC.stop()
+       return cp
+     }
+ 
+     function Tp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
+           Fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4136-L4137` → after: `L4310-L4340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4310-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4310-L4340) · [Before (L4136-L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4136-L4137)

```diff
-       const ZC = CC.YN;
-       zC.worldOffset.x = -ZC[0], zC.worldOffset.y = -ZC[1], zC.worldOffset.z = -ZC[2]
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, gp(Op.key), Op)
+       }
+     }
+ 
+     function bp(pp, ip, cp) {
+       return ip = ap(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Qp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, hp() ? Reflect.construct(ip, cp || [], ap(pp).constructor) : ip.apply(pp, cp))
+ ... (15 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4141-L4142` → after: `L4344-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4344-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4344-L4346) · [Before (L4141-L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4141-L4142)

```diff
-       const ZC = CC.maxEmitBox.x - CC.minEmitBox.x;
-       CC.minEmitBox.x = zC[0], CC.minEmitBox.y = zC[1], CC.minEmitBox.z = zC[2], CC.maxEmitBox.x = zC[0] + ZC, CC.maxEmitBox.y = zC[1] + ZC, CC.maxEmitBox.z = zC[2] + ZC
+       return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, np(pp, ip)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4146` → after: `L4350-L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4350-L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4350-L4355) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4146)

```diff
-       CC.minEmitBox.x = zC[0], CC.minEmitBox.y = zC[1], CC.minEmitBox.z = zC[2], CC.maxEmitBox.x = ZC[0], CC.maxEmitBox.y = ZC[1], CC.maxEmitBox.z = ZC[2]
+       return (ip = gp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4162-L4163` → after: `L4358-L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4358-L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4358-L4369) · [Before (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4162-L4163)

```diff
-     function WC(CC, zC, ZC) {
-       return `${CC}|${zC}|${ZC}`
+     function gp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Qp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Qp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Qp(ip) ? ip : ip + ""
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4165-L4188` → after: `L4371-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4371-L4372) · [Before (L4165-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4165-L4188)

```diff
-     const NC = new class {
-       constructor() {
-         this.Sw = new Map
-       }
-       init() {
-         (0, oC.onGameResetOnce)((() => {
-           this.removeAll()
-         }))
-       }
-       has(CC, zC, ZC) {
-         if (0 === this.Sw.size) return !1;
-         const QC = this.Sw.get(WC(CC, zC, ZC));
-         return void 0 !== QC && null === QC.disposeAt
-       }
-       forEachCell(CC) {
-         for (const {
- ... (8 more removed lines; see GitHub link above)
+     var Gp = function(pp) {
+       function ip() {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4190-L4226` → after: `L4374-L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4374-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4374-L4390) · [Before (L4190-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4190-L4226)

```diff
-         0 !== this.Sw.size && !1 === (null === (QC = this.Sw.get(WC(CC, zC, ZC))) || void 0 === QC ? void 0 : QC.confirmed) && this.remove(CC, zC, ZC)
-       }
-       applyServerUpdate(CC) {
-         let {
-           Sw: zC,
-           wZ: ZC
-         } = CC;
-         for (const QC of ZC) this.remove(QC[0], QC[1], QC[2]);
-         for (const {
-             pw: QC,
-             Pw: wC,
-             Gw: bC,
-             Rw: nC
-           }
-           of zC) this.add(QC, wC, bC, nC, !0)
-       }
- ... (21 more removed lines; see GitHub link above)
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Fp(pp = bp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !1
+         }), Fp(pp, "id", (0, yp.J)("recharts-bar-")), Fp(pp, "handleAnimationEnd", (function() {
+           var ip = pp.props.onAnimationEnd;
+           pp.setState({
+             isAnimationFinished: !0
+           }), ip && ip()
+         })), Fp(pp, "handleAnimationStart", (function() {
+           var ip = pp.props.onAnimationStart;
+           pp.setState({
+             isAnimationFinished: !1
+           }), ip && ip()
+ ... (1 more added lines; see GitHub link above)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4228-L4241` → after: `L4392-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4392-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4392-L4429) · [Before (L4228-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4228-L4241)

```diff
-       add(CC, zC, ZC, wC, bC) {
-         const oC = (0, FC.e)(),
-           NC = Date.now(),
-           MC = {
-             startedAtMs: NC - (ZC - wC),
-             endsAtMs: NC + wC
-           },
-           gC = WC(CC[0], CC[1], CC[2]),
-           SC = this.Sw.get(gC);
-         if (SC) {
-           SC.landsAtMs = MC.endsAtMs, SC.confirmed = SC.confirmed || bC;
-           const CC = oC.JR.getState(SC.eId, "growingBlock"),
-             zC = (0, QC.u)(CC, MC, NC);
-           return CC.startedAtMs = zC.startedAtMs, void(CC.endsAtMs = zC.endsAtMs)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && np(pp, ip)
+       }(ip, pp), cp = ip, Sp = [{
+         key: "renderRectanglesStatically",
+         value: function(pp) {
+           var ip = this,
+             cp = this.props,
+ ... (22 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4243-L4329` → after: `L4431-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4431-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4431-L4487) · [Before (L4243-L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4243-L4329)

```diff
-         if (nC().zW(oC.JR.yG(oC.qE), CC) > 64) return;
-         const pC = FC.g.itemsClient[zC].getGrowingMesh(),
-           PC = {
-             position: pC.position.clone(),
-             rotation: pC.rotation.clone(),
-             sq: pC.sq.clone()
-           };
-         (0, qC.b)(PC, zC);
-         const GC = [.5 + PC.position.x, .5 + PC.position.y, .5 + PC.position.z];
-         pC.rotation.set(PC.rotation.x, PC.rotation.y, PC.rotation.z), (0, fC.p)(pC, 0, 0, 0);
-         const RC = oC.JR.add([CC[0], CC[1], CC[2]], 1, 1);
-         oC.JR.lH(RC, oC.JR.names.mesh, {
-           mesh: pC,
-           offset: GC
-         });
-         const AC = oC.qM.Xs(zC),
- ... (71 more removed lines; see GitHub link above)
+       }, {
+         key: "renderRectanglesWithAnimation",
+         value: function() {
+           var pp = this,
+             ip = this.props,
+             cp = ip.data,
+             op = ip.layout,
+             Sp = ip.isAnimationActive,
+             xp = ip.animationBegin,
+             Lp = ip.animationDuration,
+             Yp = ip.animationEasing,
+             Ap = ip.animationId,
+             Pp = this.state.prevData;
+           return Op.createElement(Ip.c, {
+             mW: xp,
+             duration: Lp,
+ ... (41 more added lines; see GitHub link above)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4331-L4347` → after: `L4489-L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4489-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4489-L4496) · [Before (L4331-L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4331-L4347)

```diff
-         return wC.push({
-           pos: WC,
-           block: NC
-         }), wC
-       },
-       eC = CC => (zC, ZC, QC) => {
-         const wC = [];
-         let bC = (0, oC.lb)(ZC);
-         bC = Math.round(bC / (Math.PI / 2)) * (Math.PI / 2);
-         const nC = (0, oC.wb)(bC);
-         PC().round(nC, nC);
-         const fC = PC().floor([], zC);
-         PC().add(fC, fC, nC), PC().add(fC, fC, nC), fC[1] -= 1;
-         const FC = [];
-         for (let CC = 0; CC < 3; CC++) {
-           const ZC = [zC[0] + nC[0], zC[1] + CC, zC[2] + nC[2]];
- ... (1 more removed lines; see GitHub link above)
+       }, {
+         key: "renderRectangles",
+         value: function() {
+           var pp = this.props,
+             ip = pp.data,
+             cp = pp.isAnimationActive,
+             Op = this.state.prevData;
+           return !(cp && ip && ip.length) || Op && xp()(Op, ip) ? this.renderRectanglesStatically(ip) : this.renderRectanglesWithAnimation()
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4349-L4448` → after: `L4498-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4498-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4498-L4547) · [Before (L4349-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4349-L4448)

```diff
-         const WC = qC.g[CC].id,
-           NC = nC[0] > 0 ? "|meta|rot4" : nC[0] < 0 ? "|meta|rot2" : nC[2] > 0 ? "|meta|rot3" : "",
-           MC = qC.g[`Maple Ladder${NC}`].id,
-           gC = function(CC) {
-             let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WC;
-             FC.some((zC => PC().equals(zC, CC))) || wC.push({
-               pos: CC,
-               block: zC
-             })
-           };
-         for (let CC = -1; CC <= 1; CC++)
-           for (let zC = -1; zC <= 1; zC++) gC([fC[0] + CC, fC[1], fC[2] + zC]);
-         for (let CC = 1; CC < 8; CC++) {
-           for (let zC = -1; zC <= 1; zC++) gC([fC[0] - 1, fC[1] + CC, fC[2] + zC]), gC([fC[0] + 1, fC[1] + CC, fC[2] + zC]), gC([fC[0] + zC, fC[1] + CC, fC[2] - 1]), gC([fC[0] + zC, fC[1] + CC, fC[2] + 1]);
-           gC([fC[0], fC[1] + CC, fC[2]], MC)
-         }
- ... (84 more removed lines; see GitHub link above)
+       }, {
+         key: "renderBackground",
+         value: function() {
+           var pp = this,
+             ip = this.props,
+             cp = ip.data,
+             op = ip.dataKey,
+             Ip = ip.activeIndex,
+             Sp = (0, Up.d)(this.props.background, !1);
+           return cp.map((function(ip, cp) {
+             ip.value;
+             var xp = ip.background,
+               Lp = Jp(ip, lp);
+             if (!xp) return null;
+             var Yp = Tp(Tp(Tp(Tp(Tp({}, Lp), {}, {
+               fill: "#eee"
+ ... (34 more added lines; see GitHub link above)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4450-L4520` → after: `L4549-L4551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4549-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4549-L4551) · [Before (L4450-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4450-L4520)

```diff
-               of WC) bC.TY(CC[0], CC[1], CC[2], qC.g[zC].id);
-             const NC = bC.SzC(QC.qE).getSelectedSlotIndex(),
-               MC = bC.client.inventoryPrediction.predict(dC.c.remove(NC, 1, CC));
-             return (0, GC.sendColyMessage)(RC.ph, {
-               Ln: oC,
-               Un: zC,
-               Fn: fC,
-               bn: MC
-             }), !1
-           }
-         }(ZC, QC, wC), CC
-       }), {})
-     };
-     var lC = ZC(38012),
-       XC = ZC(38035),
-       cC = ZC(38004),
- ... (55 more removed lines; see GitHub link above)
+             },
+             yp = {
+               clipPath: pp ? "url(#clipPath-".concat(ip, ")") : null
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4522-L4546` → after: `L4553-L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4553-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4553-L4563) · [Before (L4522-L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4522-L4546)

```diff
-             (0, SC.c)().TY(...CC, ZC);
-             const zC = this.bloxd.client.inventoryPrediction.predict(this.MN.pR.creative ? null : dC.c.replace(this.selectedSlot, this.Hx.name, "Bucket", {}));
-             return (0, GC.sendColyMessage)(RC.wi, {
-               AF: CC,
-               bn: zC
-             }), AC.e.play((0, xC.g)("bucketEmpty"), 1), {
-               tookAction: !0,
-               preventAttack: !0
-             }
-           }
-           return {
-             tookAction: !1,
-             preventAttack: !1
-           }
-         }, this.MN = (0, SC.e)(), this.bloxd = (0, SC.c)(), this.inven = this.MN.JR.SzC(this.MN.qE), this.selectedSlot = this.inven.getSelectedSlotIndex()
-       }
- ... (9 more removed lines; see GitHub link above)
+           return Op.createElement(Dp.b, yp, Yp.map((function(pp) {
+             return Op.cloneElement(pp, {
+               key: "error-bar-".concat(ip, "-").concat(pp.props.dataKey),
+               data: op,
+               xAxis: Ip,
+               yAxis: Sp,
+               layout: xp,
+               offset: Pp,
+               dataPointFormatter: Wp
+             })
+           })))
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4548-L4553` → after: `L4565-L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4565-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4565-L4611) · [Before (L4548-L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4548-L4553)

```diff
-       }
-       performGliderBoost() {
-         const CC = this.checkGliderFuel();
-         return CC || {
-           tookAction: !1,
-           preventAttack: !1
+       }, {
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             ip = pp.hide,
+             cp = pp.data,
+             Ip = pp.className,
+             Sp = pp.xAxis,
+             xp = pp.yAxis,
+             Lp = pp.left,
+             Ap = pp.top,
+             Pp = pp.width,
+             yp = pp.height,
+             Up = pp.isAnimationActive,
+             wp = pp.background,
+             vp = pp.id;
+ ... (31 more added lines; see GitHub link above)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4555-L5058` → after: `L4613-L4666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4613-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4613-L4666) · [Before (L4555-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L4555-L5058)

```diff
-       }
-       performAltAction() {
-         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         const zC = [this.checkInteractableEntity, this.checkInteractableBlocks, this.checkGliderFuel, this.checkThrowables, this.checkLuckyItems, this.checkMiscConsumables, this.checkSwapArmour, this.checkVehiclePlace, this.checkFluidAction, this.checkBowlHarvest, this.checkMobHa … [truncated]
-         if (CC)
-           for (const ZC of zC) {
-             const CC = ZC.call(this);
-             if (CC) return CC
-           }
-         return this.sendAltAction(RC.eg), {
-           tookAction: !1,
-           preventAttack: !1
-         }
-       }
-       pickActionBlock() {
-         let CC;
- ... (488 more removed lines; see GitHub link above)
+       }], Sp && fp(cp.prototype, Sp), Lp && fp(cp, Lp), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, Sp, Lp
+     }(Op.PureComponent);
+     Xp = Gp, Fp(Gp, "displayName", "Bar"), Fp(Gp, "defaultProps", {
+       xAxisId: 0,
+       yAxisId: 0,
+       legendType: "rect",
+       minPointSize: 0,
+       hide: !1,
+       data: [],
+       layout: "vertical",
+       activeBar: !1,
+       isAnimationActive: !wp.e.isSsr,
+       animationBegin: 0,
+ ... (38 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5060-L5094` → after: `L4668-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4668-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4668-L4689) · [Before (L5060-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5060-L5094)

```diff
-             if ("sr3ARLT" in nz && wC(), GC.butto) QC |= 5;
-             else {
-               function bC(...CC) {
-                 var zC;
-                 fz(CC[bz[0]] = bz[1], zC = function(...CC) {
-                   fz(CC[bz[0]] = bz[3], this.HW = CC[bz[1]], this.length = bz[1], this.map = {}, this.head = bz[4], this.tail = bz[4])
-                 }, zC.prototype.get = function(...CC) {
-                   var zC;
-                   return fz(CC[bz[0]] = bz[3], zC = this.map[CC[bz[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -bz[3]
-                 }, zC.prototype.put = function(...CC) {
-                   fz(CC[bz[0]] = bz[5], this.map[CC[bz[1]]] ? (this.remove(this.map[CC[bz[1]]]), this.insert(CC[bz[1]], CC[bz[3]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[bz[1]], CC[bz[3]])) : (this.insert(CC[bz[1]], CC[bz[3]]), this.length++))
-                 }, zC.prototype.remove = function(...CC) {
-                   fz(CC[bz[0]] = bz[3], CC[bz[3]] = CC[bz[1]].prev, CC[bz[9]] = CC[bz[1]].next), CC[bz[9]] && (CC[bz[9]].prev = CC[bz[3]]), CC[bz[3]] && (CC[bz[3]].next = CC[bz[9]]), this.head === CC[bz[1]] && (this.head = CC[bz[9]]), this.tail === CC[bz[1]] && (this.tail = CC[bz … [truncated]
-                 }, zC.prototype.insert = function(CC, zC) {
-                   var ZC = new List(CC, zC);
-                   fz(this.tail ? (this.tail.next = ZC, ZC.prev = this.tail, this.tail = ZC) : (this.tail = ZC, this.head = ZC), this.map[CC] = ZC)
- ... (19 more removed lines; see GitHub link above)
+           }(mp, Xp.defaultProps.minPointSize)(Op[1], ip);
+           if ("horizontal" === tp) {
+             var kp, Rp = [Sp.scale(Op[0]), Sp.scale(Op[1])],
+               Ep = Rp[0],
+               lp = Rp[1];
+             Ap = (0, vp.E)({
+               axis: Ip,
+               ticks: xp,
+               bandSize: op,
+               offset: wp.offset,
+               entry: pp,
+               index: ip
+             }), Pp = null !== (kp = null !== lp && void 0 !== lp ? lp : Ep) && void 0 !== kp ? kp : void 0, Wp = wp.size;
+             var Qp = Ep - lp;
+             if (Up = Number.isNaN(Qp) ? 0 : Qp, dp = {
+                 x: Ap,
+ ... (6 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5097-L5125` → after: `L4709-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4709-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4709-L4721) · [Before (L5097-L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5097-L5125)

```diff
-         else {
-           function fC(...CC) {
-             function zC(...CC) {
-               if (CC[bz[0]] = bz[3], !CC[bz[1]]) return -bz[3];
-               const ZC = zC(CC[bz[1]].left),
-                 QC = zC(CC[bz[1]].right),
-                 wC = Math.abs(ZC - QC);
-               if (ZC === 1 / 0 || QC === 1 / 0 || wC > bz[3]) return 1 / 0;
-               return Math.max(ZC, QC) + bz[3]
-             }
-             CC[bz[0]] = bz[1], window.__GLOBAL__HELPERS__ = {
-               buildCharacterMap: function(...CC) {
-                 CC[bz[0]] = bz[3];
-                 const zC = {};
-                 for (let ZC of CC[bz[1]].replace(/[^w]/g, "").toLowerCase()) zC[ZC] = zC[ZC] + bz[3] || bz[3];
-                 return zC
- ... (13 more removed lines; see GitHub link above)
+           return Tp(Tp(Tp({}, pp), {}, {
+             x: Ap,
+             y: Pp,
+             width: Wp,
+             height: Up,
+             value: Yp ? Op : Op[1],
+             payload: pp,
+             background: dp
+           }, Cp && Cp[ip] && Cp[ip].props), {}, {
+             tooltipPayload: [(0, vp.cb)(cp, pp)],
+             tooltipPosition: {
+               x: Ap + Wp / 2,
+               y: Pp + Up / 2
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5127-L5140` → after: `L4723-L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4723-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4723-L4729) · [Before (L5127-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5127-L5140)

```diff
-           }
-           "xeuyOhK" in nz && fC(), QC |= bz[3]
-         }
-         return QC
-       })
-     })()
-   },
-   37857: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC
-     });
-     let QC = function(CC) {
-       return CC[CC.HIT_ENTITY = 0] = "HIT_ENTITY", CC[CC.HIT_BLOCK = 1] = "HIT_BLOCK", CC[CC.HIT_NOTHING = 2] = "HIT_NOTHING", CC
-     }({})
+           })
+         }));
+       return Tp({
+         data: Ep,
+         layout: tp
+       }, Wp)
+     }))
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5142` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4731) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5142)

```diff
-   37852: (CC, zC, ZC) => {
+   6517: (pp, ip, cp) => {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5146` → after: `L4735-L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4735-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4735-L4736) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5146)

```diff
-     var QC = ZC(338),
+     var Op = cp(62),
+       op = cp(5405),
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5148-L5434` → after: `L4738-L4758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4738-L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4738-L4758) · [Before (L5148-L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5148-L5434)

```diff
-       bC = ZC(37857),
-       nC = ZC(2753),
-       fC = ZC(3611),
-       oC = ZC(37275),
-       qC = ZC(3677),
-       FC = ZC(184),
-       WC = ZC(37138),
-       NC = ZC(36961),
-       MC = ZC(37129),
-       gC = ZC(37864),
-       SC = ZC(37729);
-     const pC = new WC.Color3(.2, .65, 1),
-       PC = new WC.Color3(1, .15, .05);
-     let GC = 0;
-     class RC {
-       constructor(CC, zC) {
- ... (271 more removed lines; see GitHub link above)
+       Sp = cp(5326),
+       xp = cp.n(Sp),
+       Lp = cp(5203),
+       Yp = cp(5610),
+       Dp = cp(6103),
+       Ap = cp(6262),
+       Pp = cp(6352),
+       Wp = cp(5299),
+       yp = cp(5619),
+       Up = cp(5588),
+       wp = cp(6520),
+       vp = ["viewBox"],
+       tp = ["viewBox"],
+       Hp = ["ticks"];
+ 
+     function dp(pp) {
+ ... (5 more added lines; see GitHub link above)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5437-L5438` → after: `L4761-L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4761-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4761-L4768) · [Before (L5437-L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5437-L5438)

```diff
-     function mC(...CC) {
-       return CC[YC[13]] = YC[2], typeof IC !== YC[18] && IC ? (new IC).decode(new iC(CC[YC[1]])) : typeof vC !== YC[18] && vC ? vC.from(CC[YC[1]]).toString("utf-8") : KC(CC[YC[1]])
+     function ep() {
+       return ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, ep.apply(this, arguments)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5441-L5502` → after: `L4771-L4777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4771-L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4771-L4777) · [Before (L5441-L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5441-L5502)

```diff
-     function HC() {}
- 
-     function EC() {
-       EC = function() {}
-     }
-     EC(AC = {}, xC = ['7ADQ^(Zt8}zW1h89gO"$%J"x1<gpb', "p>Tx0yr7.59n4jdc?pO?C7~bp?$.#u8.wdru<IyoGpkG>E?#2F", '4uT(0yoxrHaADi="ds"$%N&Rch@(X0"cs%lSW=8Jhp/rji;cAk.nuxLY', 'W)J@8ixC%H}(t_SuD3NokH{bBv&58U?"^"eQn(b96p5q6==")h6O', "`?t@L=gbmzfC=Yz9=,K?E1cLg;{gmXE%;h;?ayF", "hO6@Y1]X@LR … [truncated]
-       EC(CC[YC[13]] = YC[1], CC[YC[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], CC[-YC[14]] = void 0, CC[YC[9]] = []);
-       try {
- ... (46 more removed lines; see GitHub link above)
+     function jp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5505-L5569` → after: `L4782-L4789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4782-L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4782-L4789) · [Before (L5505-L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5505-L5569)

```diff
-       function ZC(CC) {
-         return typeof AC[CC] === YC[18] ? AC[CC] = zC(xC[CC]) : AC[CC]
-       }
-       const QC = new Set(process.argv.slice(YC[45]));
-       if (!QC.has(ZC(YC[52]))) {
-         if (QC.size !== YC[2]) return YC[38];
-         if (!QC.has("-v")) return YC[38]
-       }
-       return await (async (zC, ZC) => {
-         function QC(...CC) {
-           for (EC(CC[YC[13]] = YC[2], CC[YC[5]] = '$ZicwD+HWVe4S[pq)yY]_nvx<|uO^(9fbhTPAs@7:8o{z5Ll,d=kB`R2m~&Ug?/j6GNCa"*%E0X#t!MI3KF>};Q.Jr1', CC[YC[0]] = "" + (CC[YC[1]] || ""), CC[-YC[40]] = CC[YC[0]].length, CC[YC[10]] = [], CC[YC[42]] = YC[1], CC[YC[43]] = YC[1], CC[YC[7]]  … [truncated]
-             if (CC[-YC[41]] = CC[YC[5]].indexOf(CC[YC[0]][CC[YC[39]]]), CC[-YC[41]] !== -YC[2])
-               if (CC[YC[7]] < YC[1]) CC[YC[7]] = CC[-YC[41]];
-               else {
-                 EC(CC[YC[7]] += CC[-YC[41]] * YC[27], CC[YC[42]] |= CC[YC[7]] << CC[YC[43]], CC[YC[43]] += (CC[YC[7]] & YC[29]) > YC[30] ? YC[31] : YC[32]);
-                 do {
- ... (49 more removed lines; see GitHub link above)
+     function kp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? jp(Object(cp), !0).forEach((function(ip) {
+           Xp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : jp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5571-L5603` → after: `L4791-L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4791-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4791-L4792) · [Before (L5571-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5571-L5603)

```diff
-     })(), (() => {
-       function CC(...CC) {
-         return CC[YC[13]] = YC[2], typeof AC[CC[YC[1]]] === YC[18] ? AC[CC[YC[1]]] = function(...CC) {
-           for (EC(CC[YC[13]] = YC[2], CC[-YC[49]] = 'PxsdYGpfambqW]1_}A@8$R!94Uu<KB+/C"e#?kTjZSi>^)F3&Ho`2r;=6DEygv5LzltwIXM[|.{J7N(*:nO,Vc~h%Q0', CC[YC[0]] = "" + (CC[YC[1]] || ""), CC[YC[4]] = CC[YC[0]].length, CC[YC[10]] = [], CC[YC[14]] = YC[1], CC[YC[20]] = YC[1], CC[-YC[50] … [truncated]
-             if (CC[YC[25]] = CC[-YC[49]].indexOf(CC[YC[0]][CC[YC[17]]]), CC[YC[25]] !== -YC[2])
-               if (CC[-YC[50]] < YC[1]) CC[-YC[50]] = CC[YC[25]];
-               else {
-                 EC(CC[-YC[50]] += CC[YC[25]] * YC[27], CC[YC[14]] |= CC[-YC[50]] << CC[YC[20]], CC[YC[20]] += (CC[-YC[50]] & YC[29]) > YC[30] ? YC[31] : YC[32]);
-                 do {
-                   EC(CC[YC[10]].push(CC[YC[14]] & YC[12]), CC[YC[14]] >>= YC[11], CC[YC[20]] -= YC[11])
-                 } while (CC[YC[20]] > YC[7]);
-                 CC[-YC[50]] = -YC[2]
-               } return CC[-YC[50]] > -YC[2] && CC[YC[10]].push((CC[YC[14]] | CC[-YC[50]] << CC[YC[20]]) & YC[12]), mC(CC[YC[10]])
-         }(xC[CC[YC[1]]]) : AC[CC[YC[1]]]
-       }
-       if ([][YC[13]] = YC[1], CC(116) + "q" in HC && function(...CC) {
- ... (17 more removed lines; see GitHub link above)
+       return pp
+     }
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5605-L5622` → after: `L4794-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4794-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4794-L4807) · [Before (L5605-L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5605-L5622)

```diff
-             function QC(...CC) {
-               return CC[YC[13]] = YC[2], typeof AC[CC[YC[1]]] === YC[18] ? AC[CC[YC[1]]] = ZC(xC[CC[YC[1]]]) : AC[CC[YC[1]]]
-             }
-             let wC = {
-               [CC(117) + QC(118)]: QC(119),
-               [QC(120) + "jj"]: QC(121) + "jk",
-               [QC(122) + QC(123)]: QC(124),
-               [QC(125) + QC(YC[39])]: QC(YC[54]),
-               [QC(YC[55])]: QC(129) + QC(130),
-               [QC(131) + QC(132)]: QC(133) + QC(134),
-               [QC(135) + QC(136) + "49"]: QC(137),
-               [QC(138)]: QC(139) + QC(YC[47]) + "4"
-             };
-             EC(zC = YC[44], (0, fC[QC(141)])(qC.Wi, wC))
-           }
-         }), 10030), (0, fC[CC(142) + CC(YC[6])])((() => {
- ... (2 more removed lines; see GitHub link above)
+     function mp(pp, ip) {
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5624-L5647` → after: `L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4809) · [Before (L5624-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5624-L5647)

```diff
-     })()
-   },
-   37998: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       B: () => GC,
-       F: () => PC,
-       I: () => MC,
-       K: () => pC,
-       O: () => oC,
-       b: () => NC,
-       f: () => WC,
-       j: () => FC,
-       n: () => SC,
-       r: () => fC,
-       v: () => qC,
-       x: () => RC
- ... (8 more removed lines; see GitHub link above)
+       return op
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5651` → after: `L4813-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4813-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4813-L4816) · [Before (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5651)

```diff
-       return "Iron Chest" === CC && zC
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, lp(Op.key), Op)
+       }
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5654-L5655` → after: `L4819-L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4819-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4819-L4828) · [Before (L5654-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5654-L5655)

```diff
-     function qC(CC) {
-       return !0 === (null === CC || void 0 === CC ? void 0 : CC.includes("Hang Glider"))
+     function qp(pp, ip, cp) {
+       return ip = Cp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === dp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Mp() ? Reflect.construct(ip, cp || [], Cp(pp).constructor) : ip.apply(pp, cp))
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5658-L5659` → after: `L4831-L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4831-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4831-L4837) · [Before (L5658-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5658-L5659)

```diff
-     function FC(CC, zC) {
-       return CC.physicsState.type === wC.r.GLIDER && CC.movementType === wC.o.GLIDING && qC(zC)
+     function Mp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Mp = function() {
+         return !!pp
+       })()
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5663` → after: `L4841-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4841-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4841-L4843) · [Before (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5663)

```diff
-       return CC.gliderFuelCooldownEnd - Date.now()
+       return Cp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Cp(pp)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5666-L5670` → after: `L4846-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4846-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4846-L4849) · [Before (L5666-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5666-L5670)

```diff
-     function NC(CC) {
-       var zC;
-       const ZC = CC.JR.gzC(CC.qE),
-         QC = CC.JR.yCC(CC.qE);
-       return CC.pR.canAltAction && void 0 !== ZC && void 0 !== QC && FC(QC, null === (zC = ZC.selectedItem) || void 0 === zC ? void 0 : zC.name) ? (0, bC.b)(ZC.inventory) : 0
+     function Ep(pp, ip) {
+       return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Ep(pp, ip)
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5674-L5702` → after: `L4853-L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4853-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4853-L4858) · [Before (L5674-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5674-L5702)

```diff
-       return ZC >= 3 ? null : "Empty Bottle" === CC && "Cow" === zC ? "Milk" : "Shears" === CC && "Sheep" === zC ? "Shear" : null
-     }
-     const gC = new Map(Object.entries(nC.e).map((CC => {
-       let [zC, ZC] = CC;
-       const {
-         tameItemName: QC,
-         likedFoods: wC,
-         neutralFoods: bC,
-         dislikedFoods: nC,
-         foodItemsWithEffects: fC,
-         isSaddleable: oC,
-         saddleItemName: qC
-       } = ZC, FC = (null !== fC && void 0 !== fC ? fC : []).map((CC => {
-         let {
-           itemName: zC
-         } = CC;
- ... (13 more removed lines; see GitHub link above)
+       return (ip = lp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5706-L5723` → after: `L4862-L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4862-L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L4862-L4872) · [Before (L5706-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5706-L5723)

```diff
-       var zC;
-       const ZC = null === (zC = gC.get(CC)) || void 0 === zC ? void 0 : zC.tame;
-       return void 0 === ZC ? void 0 : [...ZC][0]
-     }
- 
-     function PC(CC, zC) {
-       var ZC, QC;
-       return null !== (ZC = null === (QC = gC.get(CC)) || void 0 === QC ? void 0 : QC.tame.has(zC)) && void 0 !== ZC && ZC
-     }
- 
-     function GC(CC, zC) {
-       var ZC, QC;
-       return null !== (ZC = null === (QC = gC.get(CC)) || void 0 === QC ? void 0 : QC.liked.has(zC)) && void 0 !== ZC && ZC
-     }
- 
-     function RC(CC, zC) {
- ... (2 more removed lines; see GitHub link above)
+       var ip = function(pp, ip) {
+         if ("object" != dp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != dp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == dp(ip) ? ip : ip + ""
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5726` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5141) · [Before (L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5726)

```diff
-   37609: (CC, zC, ZC) => {
+   6532: (pp, ip, cp) => {
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5728-L5740` → after: `L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5143) · [Before (L5728-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5728-L5740)

```diff
-       e: () => Bz,
-       i: () => Oz,
-       k: () => pz,
-       m: () => Jz,
-       o: () => Pz,
-       r: () => Iz,
-       s: () => zZ,
-       w: () => az,
-       x: () => ZZ,
-       y: () => xz,
-       z: () => nZ,
-       A: () => Tz,
-       D: () => iz
+       e: () => Xp
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5742-L5752` → after: `L5145-L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5145-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5145-L5156) · [Before (L5742-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5742-L5752)

```diff
-     var QC = ZC(9194),
-       wC = ZC(37640);
-     const bC = QC.g.Water.id,
-       nC = QC.g.Ice.id,
-       fC = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0]
-       ];
+     var Op = cp(62),
+       op = cp(5405),
+       Ip = cp.n(op),
+       Sp = cp(5582),
+       xp = cp(5299),
+       Lp = cp(5588),
+       Yp = cp(6266),
+       Dp = cp(6520),
+       Ap = cp(6517),
+       Pp = cp(6470),
+       Wp = ["x1", "y1", "x2", "y2", "key"],
+       yp = ["offset"];
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5755-L5822` → after: `L5159-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5159-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5159-L5175) · [Before (L5755-L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5755-L5822)

```diff
-       var zC;
-       return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootId) === bC
-     }
-     var qC = ZC(37821),
-       FC = ZC(184),
-       WC = ZC(37827),
-       NC = ZC(37842),
-       MC = ZC(326),
-       gC = ZC(1169),
-       SC = ZC(36897),
-       pC = ZC(4386),
-       PC = ZC(4423),
-       GC = ZC(3137),
-       RC = ZC(37617),
-       AC = ZC(37679),
-       xC = ZC(37626),
- ... (52 more removed lines; see GitHub link above)
+       return Up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Up(pp)
+     }
+ 
+     function wp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
+ ... (1 more added lines; see GitHub link above)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5825-L5874` → after: `L5178-L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5178-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5178-L5187) · [Before (L5825-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5825-L5874)

```diff
-       var zC;
-       mC.o.bp("localBlockMined");
-       const ZC = (0, oz.c)(),
-         qC = ZC.rG(CC[0], CC[1], CC[2]);
-       xz(qC, !0);
-       const FC = ZC.getMetaInfo(qC).rootId,
-         WC = null === (zC = QC.g[FC].solid) || void 0 === zC || zC,
-         NC = XC.e.getUniqueColoursForParticleSystem(CC);
-       XC.m.emit(50, {
-         ...(0, Wz.c)(CC, QC.g[qC].qp, .05, .95),
-         minEmitPower: WC ? 15 : 0,
-         maxEmitPower: WC ? 60 : 0,
-         colorGradients: NC.map((CC => ({
-           color: CC
-         })))
-       });
- ... (34 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? wp(Object(cp), !0).forEach((function(ip) {
+           tp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : wp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5876` → after: `L5189-L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5189-L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5189-L5208) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5876)

```diff
-     function Rz() {}
+     function tp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Up(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Up(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Up(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (4 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5879` → after: `L5211-L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5211-L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5211-L5217) · [Before (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5879)

```diff
-       Az = function() {}
+       return Hp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Hp.apply(this, arguments)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5883-L5927` → after: `L5221-L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5221-L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5221-L5233) · [Before (L5883-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5883-L5927)

```diff
-       const ZC = (0, hC.g)((0, qC.c)(CC, zC));
-       KC.e.play(ZC, 1)
-     }
-     "ofIUjD" in Rz && function(...CC) {
-       Az(CC[Gz[0]] = Gz[2], CC[-Gz[10]] = function(...CC) {
-         for (Az(CC[Gz[0]] = Gz[1], CC[Gz[1]] = Gz[2], CC[Gz[5]] = {}, CC[Gz[6]] = Gz[2], CC[Gz[7]] = Gz[2], CC[Gz[9]] = Gz[2], CC[Gz[4]] = CC[Gz[2]].length), CC[Gz[3]] = Gz[2]; CC[Gz[3]] < CC[Gz[4]]; CC[Gz[3]]++) {
-           for (Az(CC[Gz[5]] = {}, CC[Gz[6]] = Gz[2], CC[Gz[7]] = Gz[1]), CC[Gz[8]] = CC[Gz[3]] + Gz[1]; CC[Gz[8]] < CC[Gz[4]]; CC[Gz[8]]++) CC[Gz[2]][CC[Gz[3]]].x !== CC[Gz[2]][CC[Gz[8]]].x || CC[Gz[2]][CC[Gz[3]]].y !== CC[Gz[2]][CC[Gz[8]]].y ? (CC[Gz[2]][CC[Gz[3]]].y === CC[Gz[2 … [truncated]
-           Az(CC[Gz[6]] += CC[Gz[7]], CC[Gz[1]] = Math.max(CC[Gz[1]], CC[Gz[6]]))
-         }
-         return CC[Gz[1]]
-       }, console.log(CC[-Gz[10]]))
-     }(), (() => {
-       let CC = Gz[2];
-       Pz = () => {
-         if ("zPeV59" + Gz[7] in Rz && function(...CC) {
-             Az(CC[Gz[0]] = Gz[2], CC[Gz[15]] = function(...zC) {
- ... (29 more removed lines; see GitHub link above)
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5962-L5968` → after: `L5260-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5260-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5260-L5281) · [Before (L5962-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5962-L5968)

```diff
-       var ZC, QC;
-       const wC = null === (ZC = CC.JR.getState(zC, "autoRotate")) || void 0 === ZC ? void 0 : ZC.heading,
-         bC = null === (QC = CC.JR.fzC(zC)) || void 0 === QC ? void 0 : QC.offset;
-       return void 0 !== wC && bC ? {
-         heading: wC,
-         yOffset: bC[1]
-       } : null
+       var cp;
+       if (Op.isValidElement(pp)) cp = Op.cloneElement(pp, ip);
+       else if (Ip()(pp)) cp = pp(ip);
+       else {
+         var op = ip.x1,
+           Sp = ip.y1,
+           xp = ip.x2,
+           Yp = ip.y2,
+           Dp = ip.key,
+           Ap = dp(ip, Wp),
+           Pp = (0, Lp.d)(Ap, !1),
+           Up = (Pp.offset, dp(Pp, yp));
+         cp = Op.createElement("line", Hp({}, Up, {
+           x1: op,
+           y1: Sp,
+           x2: xp,
+ ... (6 more added lines; see GitHub link above)
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L5971-L6009` → after: `L5284-L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5284-L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5284-L5304) · [Before (L5971-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L5971-L6009)

```diff
-     function iz(CC, zC, ZC, QC) {
-       var wC, bC;
-       const {
-         typeObj: nC,
-         attributes: fC,
-         size: oC
-       } = CC.JR.getState(zC, "itemState"), qC = (0, HC.c)() * oC, WC = nC.droppedMeshTypeScale * qC;
-       let NC = 0;
-       CC.JR.lH(zC, "hidingMeshManager", {
-         addMeshComponent: () => {
-           var QC;
-           const wC = ++NC;
-           nC.getDroppedThinObject(null === (QC = fC.customAttributes) || void 0 === QC ? void 0 : QC.enchantmentTier, (QC => {
-             var bC;
-             const fC = CC.Vg.nH;
-             if (wC !== NC) return void fC.delete(QC);
- ... (23 more removed lines; see GitHub link above)
+     function kp(pp) {
+       var ip = pp.x,
+         cp = pp.width,
+         op = pp.horizontal,
+         Ip = void 0 === op || op,
+         Sp = pp.horizontalPoints;
+       if (!Ip || !Sp || !Sp.length) return null;
+       var xp = Sp.map((function(Op, op) {
+         var Sp = vp(vp({}, pp), {}, {
+           x1: ip,
+           y1: Op,
+           x2: ip + cp,
+           y2: Op,
+           key: "line-".concat(op),
+           index: op
+         });
+ ... (5 more added lines; see GitHub link above)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6012-L6013` → after: `L5307-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5307-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5307-L5327) · [Before (L6012-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6012-L6013)

```diff
-     function vz(CC, zC) {
-       (0, oz.e)().zg && (CC.UH("aShaderPackItem", 4), CC.ZE.aShaderPackItem = Fz.Vector4.FromArray(zC))
+     function mp(pp) {
+       var ip = pp.y,
+         cp = pp.height,
+         op = pp.vertical,
+         Ip = void 0 === op || op,
+         Sp = pp.verticalPoints;
+       if (!Ip || !Sp || !Sp.length) return null;
+       var xp = Sp.map((function(Op, op) {
+         var Sp = vp(vp({}, pp), {}, {
+           x1: Op,
+           y1: ip,
+           x2: Op,
+           y2: ip + cp,
+           key: "line-".concat(op),
+           index: op
+         });
+ ... (5 more added lines; see GitHub link above)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6035-L6050` → after: `L5330-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5330-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5330-L5364) · [Before (L6035-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6035-L6050)

```diff
-     function dz(CC, zC, ZC, QC) {
-       const wC = (0, oz.e)();
-       ZC && (zC.sideOrientation = Cz.e.ClockWiseSideOrientation);
-       const bC = wC.Vg.nH,
-         nC = wC.zg ? {
-           aShaderPackItem: 4
-         } : null;
-       return bC.newObjectType(CC, zC, {
-         HW: 16,
-         capacityIsConst: !1,
-         strides: {
-           ...QC,
-           aOpacity: 1,
-           ...nC
-         }
-       }), bC.setPickableForType(CC, !1), wC.Vg.iH(zC), CC
+     function Rp(pp) {
+       var ip = pp.horizontalFill,
+         cp = pp.fillOpacity,
+         op = pp.x,
+         Ip = pp.y,
+         Sp = pp.width,
+         xp = pp.height,
+         Lp = pp.horizontalPoints,
+         Yp = pp.horizontal;
+       if (!(void 0 === Yp || Yp) || !ip || !ip.length) return null;
+       var Dp = Lp.map((function(pp) {
+         return Math.round(pp + Ip - Ip)
+       })).sort((function(pp, ip) {
+         return pp - ip
+       }));
+       Ip !== Dp[0] && Dp.unshift(0);
+ ... (19 more added lines; see GitHub link above)
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6058-L6067` → after: `L5367-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5367-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5367-L5402) · [Before (L6058-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6058-L6067)

```diff
-     function Hz(CC, zC, ZC, QC) {
-       let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       const bC = (0, Mz.l)(zC, ZC),
-         nC = QC ? {
-           texAtlasIndices: QC
-         } : {};
-       return wC && (nC.color = (0, BC.p)(bC.positions.length / 3, BC.e)), (0, zz.n)((0, oz.e)().Vg, CC, {
-         ...bC,
-         named: nC
-       })
+     function qp(pp) {
+       var ip = pp.vertical,
+         cp = void 0 === ip || ip,
+         op = pp.verticalFill,
+         Ip = pp.fillOpacity,
+         Sp = pp.x,
+         xp = pp.y,
+         Lp = pp.width,
+         Yp = pp.height,
+         Dp = pp.verticalPoints;
+       if (!cp || !op || !op.length) return null;
+       var Ap = Dp.map((function(pp) {
+         return Math.round(pp + Sp - Sp)
+       })).sort((function(pp, ip) {
+         return pp - ip
+       }));
+ ... (20 more added lines; see GitHub link above)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6069-L6072` → after: `L5404-L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5404-L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5404-L5443) · [Before (L6069-L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6069-L6072)

```diff
-     const Ez = [0, 1, 2, 3, 4, 5],
-       lz = Array.from({
-         length: 6
-       }, (() => new Fz.Vector4(0, 1 - AC.c, 1, AC.c)));
+     var Mp = function(pp, ip) {
+         var cp = pp.xAxis,
+           Op = pp.width,
+           op = pp.height,
+           Ip = pp.offset;
+         return (0, Yp.J)((0, Dp.c)(vp(vp(vp({}, Ap.e.defaultProps), cp), {}, {
+           ticks: (0, Yp.Z)(cp, !0),
+           viewBox: {
+             x: 0,
+             y: 0,
+             width: Op,
+             height: op
+           }
+         })), Ip.left, Ip.left + Ip.width, ip)
+       },
+       Cp = function(pp, ip) {
+ ... (24 more added lines; see GitHub link above)
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6075` → after: `L5446-L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5446-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5446-L5523) · [Before (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6075)

```diff
-       return !CC || "object" !== typeof CC || Array.isArray(CC) ? null : "animTextures" in CC ? CC : null
+       var ip, cp, op, Lp, Yp, Dp, Ap = (0, Pp.l)(),
+         Wp = (0, Pp.i)(),
+         yp = (0, Pp.p)(),
+         wp = vp(vp({}, pp), {}, {
+           stroke: null !== (ip = pp.stroke) && void 0 !== ip ? ip : Ep.stroke,
+           fill: null !== (cp = pp.fill) && void 0 !== cp ? cp : Ep.fill,
+           horizontal: null !== (op = pp.horizontal) && void 0 !== op ? op : Ep.horizontal,
+           horizontalFill: null !== (Lp = pp.horizontalFill) && void 0 !== Lp ? Lp : Ep.horizontalFill,
+           vertical: null !== (Yp = pp.vertical) && void 0 !== Yp ? Yp : Ep.vertical,
+           verticalFill: null !== (Dp = pp.verticalFill) && void 0 !== Dp ? Dp : Ep.verticalFill,
+           x: (0, xp.D)(pp.x) ? pp.x : yp.left,
+           y: (0, xp.D)(pp.y) ? pp.y : yp.top,
+           width: (0, xp.D)(pp.width) ? pp.width : yp.width,
+           height: (0, xp.D)(pp.height) ? pp.height : yp.height
+         }),
+         tp = wp.x,
+ ... (62 more added lines; see GitHub link above)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6077` → after: `L5525-L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5525-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5525-L5535) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6077)

```diff
-     const cz = new Map;
+     Xp.displayName = "CartesianGrid"
+   },
+   6332: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => dp
+     });
+     var Op = cp(62),
+       op = cp(6096),
+       Ip = cp(6103),
+       Sp = cp(5588),
+       xp = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6079-L6083` → after: `L5537-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5537-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5537-L5542) · [Before (L6079-L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6079-L6083)

```diff
-     function uz(CC, zC, ZC) {
-       const QC = `cuboidBlock|${ZC.name}|${zC.key}|${(0,OC.j)(CC)}`;
-       if ((0, oz.e)().Vg.nH.hasType(QC)) return QC;
-       const wC = Hz(QC, zC, lz, (0, Mz.q)(zC, Ez));
-       return wC.material = ZC, (0, rC.h)(wC), wC.IK(!1), wC.tS = !1, cz.set(QC, wC), dz(QC, wC, CC, mz)
+     function Lp(pp) {
+       return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Lp(pp)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6087-L6100` → after: `L5545-L5549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5545-L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5545-L5549) · [Before (L6087-L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6087-L6100)

```diff
-     function sz(CC) {
-       if (CC.Vg.CS || !(0, AC.k)()) return !0;
-       const zC = RC.d.getBlockAtlasMaterial(CC.Vg.Km(), !1, !1),
-         ZC = cz.get(uz(!1, Mz.d, zC));
-       return !(ZC && !(0, Zz.d)(ZC)) || function(CC) {
-         const zC = CC.material;
-         if (!zC || CC.GJ()) return !1;
-         const ZC = new((0, kC.b)().SubMesh)(0, 0, 0, 0, 0, CC, void 0, !1, !1),
-           QC = CC.forcedInstanceCount;
-         CC.forcedInstanceCount = 1;
-         try {
-           zC.isReadyForSubMesh(CC, ZC, !0)
-         } finally {
-           CC.forcedInstanceCount = QC
+     function Yp() {
+       return Yp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6102-L6103` → after: `L5551-L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5551-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5551-L5552) · [Before (L6102-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6102-L6103)

```diff
-         return !!ZC.effect
-       }(ZC)
+         return pp
+       }, Yp.apply(this, arguments)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6106-L6113` → after: `L5555-L5572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5555-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5555-L5572) · [Before (L6106-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6106-L6113)

```diff
-     function Tz(CC) {
-       ! function(CC, zC, ZC) {
-         CC.once("ZN", (() => {
-           const QC = CC.Vg.Km().onAfterRenderObservable;
-           let wC = zC;
-           const bC = QC.add((() => {
-             wC--;
-             let CC = !0;
+     function Dp(pp, ip) {
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
+           } catch (pp) {
+ ... (2 more added lines; see GitHub link above)
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6115` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5574) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6115)

```diff
-               CC = ZC()
+               if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6117` → after: `L5576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5576) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6117)

```diff
-               (CC || wC <= 0) && QC.remove(bC)
+               if (Yp) throw op
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6119-L6121` → after: `L5578-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5578-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5578-L5590) · [Before (L6119-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6119-L6121)

```diff
-           }))
-         }))
-       }(CC, rz, (() => sz(CC)))
+           }
+           return xp
+         }
+       }(pp, ip) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Ap(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ap(pp, ip)
+       }(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6124-L6125` → after: `L5593-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5593-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5593-L5642) · [Before (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6124-L6125)

```diff
-     function az(CC) {
-       return CC.endsWith("Armour")
+     function Ap(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
+ 
+     function Pp(pp, ip) {
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+ ... (34 more added lines; see GitHub link above)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6129` → after: `L5646-L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5646-L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5646-L5648) · [Before (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6129)

```diff
-       return Array.isArray(CC) ? Fz.Eg.FromArray(CC) : new Fz.Eg(CC, CC, CC)
+       return wp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, wp(pp)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6131-L6149` → after: `L5650-L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5650-L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5650-L5673) · [Before (L6131-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6131-L6149)

```diff
-     class Dz {
-       constructor(CC, zC) {
-         var ZC, QC, wC, bC, nC;
-         this.bakeInScaling = void 0, this.name = void 0, this.sS = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const fC = (0, oz.c)().qM.metadatas[CC];
-         for (const oC in fC) void 0 !== fC[oC] && (this[oC] = fC[oC]);
-         this.bakeInScaling = 1, this.name = CC, this.sS = zC, this.weight = null !== (ZC = fC.weight) && void 0 !== ZC ? ZC : 1, this.heldItemScale = null !== (QC = fC.heldItemScale) && void 0 !== QC ? QC : 1, this.stackable = null === (wC = fC.stackable) || void 0 === wC || wC,  … [truncated]
-           name: this.heldItemGlb.replaceAll("|", ""),
-           type: cC.g.ITEM
-         }, this.modelSource = GC.c.getModel(this.modelDefault.name, cC.g.ITEM), this.displayName = CC
-       }
-       getThinObject(CC, zC, ZC) {
-         if (!this._thinSourceReady()) {
-           if (this._sourceMeshLoadFailed) return;
-           return this._requestSourceMeshLoad(), void this._thinRequests.push({
-             variant: CC,
- ... (3 more removed lines; see GitHub link above)
+ 
+     function vp(pp, ip) {
+       return vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, vp(pp, ip)
+     }
+ 
+     function tp(pp, ip, cp) {
+       return (ip = Hp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6151-L6231` → after: `L5675-L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5675-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5675-L5683) · [Before (L6151-L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6151-L6231)

```diff
-         ZC(this._instantiateThinObject(CC, zC))
-       }
-       getDroppedThinObject(CC, zC) {
-         this.getThinObject(Yz, CC, zC)
-       }
-       _thinSourceReady() {
-         return !!this._sourceMesh
-       }
-       _thinSourceMesh(CC) {
-         return this._sourceMesh
-       }
-       _thinBaseKey(CC) {
-         return (0, OC.j)(CC.flippedWinding)
-       }
-       _defineThinType(CC) {
-         return function(CC, zC, ZC, QC, wC) {
- ... (65 more removed lines; see GitHub link above)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Lp(ip) ? ip : ip + ""
+     }
+     var dp = function(pp) {
+       function ip() {
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), yp(this, ip, arguments)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6233-L6268` → after: `L5685-L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5685-L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5685-L5768) · [Before (L6233-L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6233-L6268)

```diff
-       getGrowingMesh() {
-         return this.getMesh()
-       }
-       getMesh() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         if (this._sourceMesh) {
-           const ZC = (0, zz.p)((0, oz.e)().Vg, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return ZC.sq = tz(CC), this._attachNewMeshInstanceToParent(ZC, zC), ZC
-         } {
-           this._requestSourceMeshLoad();
-           const ZC = (0, zz.p)((0, oz.e)().Vg, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return ZC.sq = tz(CC), this._sourceMeshLoadFailed || this._meshParents.push({
-             parent: ZC,
-             onFullyLoaded: zC
-           }), ZC
- ... (20 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && vp(pp, ip)
+       }(ip, pp), cp = ip, (Lp = [{
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             ip = pp.offset,
+ ... (68 more added lines; see GitHub link above)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6270-L6277` → after: `L5770-L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5770-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5770-L5783) · [Before (L6270-L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6270-L6277)

```diff
-           }
-         };
-         return {
-           ...zC(this.modelSource),
-           fallback: () => {
-             const CC = this.modelDefault;
-             return CC && GC.c.getModelOverride(CC.name) ? zC(GC.c.getModel(CC.name, CC.type, !0)) : null
-           }
+             return Op.createElement(Ip.b, Yp({
+               className: "recharts-errorBar",
+               key: "bar-".concat(dp.map((function(pp) {
+                 return "".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
+               })))
+             }, tp), dp.map((function(pp) {
+               return Op.createElement("line", Yp({}, pp, {
+                 key: "line-".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
+               }))
+             })))
+           }));
+           return Op.createElement(Ip.b, {
+             className: "recharts-errorBars"
+           }, Hp)
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6280-L6368` → after: `L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5846) · [Before (L6280-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6280-L6368)

```diff
-       async loadModel(CC, zC) {
-         const {
-           source: ZC,
-           args: QC,
-           fallback: wC
-         } = this.modelGlbLoad(zC), bC = (await (0, lC.c)(ZC, CC, QC, wC)).meshes.filter((CC => CC.getTotalVertices() > 0));
-         bC.forEach((CC => {
-           CC.sideOrientation = null
-         }));
-         const nC = (0, zz.m)(bC, !zC, !1);
-         return nC.name = `${this.name}GlbModel`, nC.tS = !1, (0, BC.j)(nC, this.bakeInScaling), nC
-       }
-       _loadMeshFirstTime() {
-         var CC;
-         const zC = null === (CC = this._createOwnMaterial) || void 0 === CC ? void 0 : CC.bind(this);
-         this.loadModel(this.sS, !!zC).then((CC => {
- ... (73 more removed lines; see GitHub link above)
+       return op
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6370-L6409` → after: `L5848-L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5848-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5848-L5853) · [Before (L6370-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6370-L6409)

```diff
-     class Uz extends Lz {
-       constructor(CC, zC) {
-         super(CC, zC), this.cuboidShape = Mz.d, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const ZC = QC.g[CC];
-         this.harvestLevel = ZC.harvestLevel, this.transTex = !!ZC.transTex, this.texturePerSide = ZC.texturePerSide, this.unlitStandaloneMesh = ZC.unlitStandaloneMesh, this.textureInfo && (this.meshMaterial = this.getCubeBlockMeshMaterial(zC)), this.type = "CubeBlock"
-       }
-       usesBlockAtlasMaterial() {
-         const {
-           textureInfo: CC
-         } = this;
-         return !!CC && ("string" === typeof CC || "string" === typeof CC[0] || !!Xz(CC))
-       }
-       getCubeBlockMeshMaterial(CC) {
-         const {
-           name: zC,
-           textureInfo: ZC
- ... (24 more removed lines; see GitHub link above)
+ 
+     function Rp() {
+       return Rp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6412-L6549` → after: `L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5856) · [Before (L6412-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6412-L6549)

```diff
-       }
-       _thinSourceReady() {
-         return !0
-       }
-       shaderPackLocalFrame() {
-         return [1, 0, 0]
-       }
-       _thinSourceMesh(CC) {
-         return this._needsHeldBase(CC) ? (this._heldSourceMesh ??= this._makeSourceMesh({
-           vq: !0
-         }), this._heldSourceMesh) : (this._sourceMesh ??= this._makeSourceMesh(), this._sourceMesh)
-       }
-       _thinBaseKey(CC) {
-         const zC = super._thinBaseKey(CC);
-         return this._needsHeldBase(CC) ? `${zC}|held` : zC
-       }
- ... (122 more removed lines; see GitHub link above)
+       }, Rp.apply(this, arguments)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6552-L6553` → after: `L5859-L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5859-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5859-L5867) · [Before (L6552-L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6552-L6553)

```diff
-     function zZ() {
-       (0, HC.f)(), oz.g.itemsClient = ZZ, oz.g.blocksClient = QZ, oz.g.nonBlocksClient = wZ
+     function qp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6709-L6836` → after: `L5870-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5870-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5870-L5877) · [Before (L6709-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6709-L6836)

```diff
-     function nZ(CC, zC, ZC, wC) {
-       let bC;
-       if (CC in QC.g) {
-         var nC;
-         const wC = null === (nC = QC.g[CC].model) || void 0 === nC ? void 0 : nC.split("|")[0];
-         bC = QC.g[CC].model || QC.g[CC].twoDBlockItem ? bZ[wC] ? new bZ[wC](CC, ZC) : new kz(CC, ZC) : new Uz(CC, ZC), QZ[CC] = bC, QZ[zC] = bC
-       } else bC = bZ[wC] ? new bZ[wC](CC, ZC) : new Vz(CC, ZC), wZ[CC] = bC, wZ[zC] = bC;
-       ZZ[CC] = bC, ZZ[zC] = bC
-     }
-   },
-   37981: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => GC,
-       d: () => oC,
-       h: () => PC
-     });
- ... (112 more removed lines; see GitHub link above)
+     function Mp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? qp(Object(cp), !0).forEach((function(ip) {
+           Np(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6840-L6841` → after: `L5882-L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5882-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5882-L5896) · [Before (L6840-L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6840-L6841)

```diff
-     function qC(CC, zC) {
-       return CC.computeWorldMatrix(!0), zC.computeWorldMatrix(!0), CC.getWorldMatrix().multiply(zC.getWorldMatrix().clone().invert())
+     function Cp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return Ep(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Ep(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ep(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6845-L6848` → after: `L5900-L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5900-L5902) · [Before (L6845-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6845-L6848)

```diff
-       const ZC = new QC.Eg,
-         wC = new QC.Quaternion,
-         bC = new QC.Eg;
-       zC.decompose(bC, wC, ZC), CC.position = ZC, CC.rotationQuaternion = wC, CC.sq = bC
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6852-L6853` → after: `L5906-L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5906-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5906-L5909) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6852-L6853)

```diff
-       const ZC = CC.rotationQuaternion;
-       zC.position = CC.position.clone(), ZC ? zC.rotationQuaternion = new QC.Quaternion(ZC.x, ZC.y, ZC.z, ZC.w) : zC.rotation = CC.rotation.clone(), zC.sq = CC.sq.clone()
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Tp(Op.key), Op)
+       }
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6857` → after: `L5913-L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5913-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5913-L5930) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6857)

```diff
-       return (0, wC.d)(zC) ? (0, bC.p)(zC.Vg, CC) : new((0, nC.b)().TransformNode)(CC, ZC)
+       return ip = Jp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === kp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Qp() ? Reflect.construct(ip, cp || [], Jp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Qp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Qp = function() {
+ ... (2 more added lines; see GitHub link above)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6861` → after: `L5934-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5934-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5934-L5936) · [Before (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6861)

```diff
-       return (0, wC.d)(CC[0]) ? (0, bC.m)(CC, !1) : (0, fC.u)(CC)
+       return Jp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Jp(pp)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6865` → after: `L5940-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5940-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5940-L5942) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6865)

```diff
-       CC.parent = zC
+       return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Bp(pp, ip)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6868-L6869` → after: `L5945-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5945-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5945-L5951) · [Before (L6868-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6868-L6869)

```diff
-     function SC(CC) {
-       return ["Mesh", "LiteMesh"].includes(CC.getClassName()) && CC.getTotalVertices() > 0 ? CC : null
+     function Np(pp, ip, cp) {
+       return (ip = Tp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6873` → after: `L5955-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5955-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5955-L5965) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6873)

```diff
-       return [CC, ...CC.getChildMeshes(!1)].map(SC).filter((CC => null !== CC))
+       var ip = function(pp, ip) {
+         if ("object" != kp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != kp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == kp(ip) ? ip : ip + ""
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6875-L6884` → after: `L5967-L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L5967-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L5967-L6002) · [Before (L6875-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6875-L6884)

```diff
- 
-     function PC(CC, zC) {
-       const ZC = CC.meshes.find((CC => CC.name === GC));
-       if (!ZC) return null;
-       const QC = NC(GC, ZC, zC);
-       WC(ZC, QC);
-       for (const wC of ZC.getChildren()) gC(wC, QC);
-       return ZC.dispose(), {
-         root: QC,
-         meshes: pC(QC)
+     var fp = function(pp) {
+       function ip() {
+         var pp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Np(pp = lp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !0,
+           totalLength: 0
+         }), Np(pp, "generateSimpleStrokeDasharray", (function(pp, ip) {
+           return "".concat(ip, "px ").concat(pp - ip, "px")
+         })), Np(pp, "getStrokeDasharray", (function(cp, Op, op) {
+           var Ip = op.reduce((function(pp, ip) {
+             return pp + ip
+           }));
+ ... (20 more added lines; see GitHub link above)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6886-L6949` → after: `L6004-L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6004-L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6004-L6023) · [Before (L6886-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6886-L6949)

```diff
-     }
-     const GC = "__root__"
-   },
-   37748: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       B: () => iC,
-       e: () => JC,
-       i: () => mC,
-       m: () => hC,
-       n: () => HC,
-       p: () => uC,
-       q: () => eC,
-       u: () => lC,
-       y: () => XC,
-       z: () => dC
-     });
- ... (48 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && Bp(pp, ip)
+       }(ip, pp), cp = ip, Ip = [{
+         key: "componentDidMount",
+         value: function() {
+           if (this.props.isAnimationActive) {
+             var pp = this.getTotalLength();
+ ... (4 more added lines; see GitHub link above)
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6951-L6956` → after: `L6025-L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6025-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6025-L6033) · [Before (L6951-L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6951-L6956)

```diff
-         const QC = zC[0];
-         CC.addRampGradient(0, (0, NC.h)(QC));
-         for (let bC = 1; bC < zC.length; bC++) {
-           const ZC = zC[bC - 1],
-             QC = zC[bC];
-           CC.addRampGradient(bC / zC.length - 1e-4, (0, NC.h)(ZC)), CC.addRampGradient(bC / zC.length, (0, NC.h)(QC))
+       }, {
+         key: "componentDidUpdate",
+         value: function() {
+           if (this.props.isAnimationActive) {
+             var pp = this.getTotalLength();
+             pp !== this.state.totalLength && this.setState({
+               totalLength: pp
+             })
+           }
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6958-L6964` → after: `L6035-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6035-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6035-L6402) · [Before (L6958-L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6958-L6964)

```diff
-         const wC = zC[zC.length - 1];
-         CC.addRampGradient(1, (0, NC.h)(wC))
-       }
-       static getUniqueColoursForParticleSystem(CC) {
-         const zC = (0, WC.e)().rG(CC);
-         if (0 !== zC) return oC.c.getAverageColours((0, WC.c)().getMetaInfo(zC).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(CC)}`).stack)
+       }, {
+         key: "getTotalLength",
+         value: function() {
+           var pp = this.mainCurve;
+           try {
+             return pp && pp.getTotalLength && pp.getTotalLength() || 0
+           } catch (ip) {
+             return 0
+           }
+         }
+       }, {
+         key: "renderErrorBar",
+         value: function(pp, ip) {
+           if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
+           var cp = this.props,
+             op = cp.points,
+ ... (352 more added lines; see GitHub link above)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6967-L6970` → after: `L6405-L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6405-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6405-L6425) · [Before (L6967-L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6967-L6970)

```diff
-     const IC = (0, oC.d)("generic_2");
-     let iC;
-     const vC = (0, oC.d)("critical_hit");
-     let eC, hC, KC, YC;
+ 
+     function Hp(pp, ip, cp) {
+       return ip = ep(ip),
+         function(pp, ip) {
+           if (ip && ("object" === vp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, dp() ? Reflect.construct(ip, cp || [], ep(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function dp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+ ... (5 more added lines; see GitHub link above)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6973-L7075` → after: `L6428-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6428-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6428-L6430) · [Before (L6973-L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L6973-L7075)

```diff
-       const zC = CC.Vg.DH("sprintParticles", 50);
-       zC.texture = (0, MC.p)(CC.Vg.Km(), IC), zC.blendMode = QC.d.Standard, zC.addColorGradient(0, (0, NC.p)(213, 237, 255, 1), (0, NC.p)(109, 170, 238, 1)), zC.addColorGradient(.2, (0, NC.p)(213, 237, 255, 1), (0, NC.p)(109, 170, 238, 1)), zC.addColorGradient(1, (0, NC.p)(213, 2 … [truncated]
-       zC.minLifeTime = .2, zC.maxLifeTime = .4, zC.minEmitPower = 30, zC.maxEmitPower = 50, zC.emitRate = 5, zC.gravity = new gC.Eg(0, -100, 0), zC.minSize = .15, zC.maxSize = .3, zC.addVelocityGradient(0, .075, .15), zC.addVelocityGradient(1, .075, .15), (0, NC.t)(CC, zC), zC.cr … [truncated]
-       const ZC = CC.Vg.DH("Yb", 50);
-       ZC.texture = (0, MC.p)(CC.Vg.Km(), vC), ZC.blendMode = QC.d.Standard, ZC.addColorGradient(0, (0, NC.p)(255, 167, 0, 1), (0, NC.p)(255, 103, 0, 1)), ZC.addColorGradient(.2, (0, NC.p)(255, 167, 0, 1), (0, NC.p)(255, 103, 0, 1)), ZC.addColorGradient(1, (0, NC.p)(255, 167, 0, 0 … [truncated]
-       ZC.minLifeTime = .15, ZC.maxLifeTime = .3, ZC.minEmitPower = 30, ZC.maxEmitPower = 50, ZC.emitRate = 5, ZC.gravity = new gC.Eg(0, -100, 0), ZC.minSize = .15, ZC.maxSize = .3, ZC.addVelocityGradient(0, .075, .15), ZC.addVelocityGradient(1, .075, .15), (0, NC.t)(CC, ZC), ZC.c … [truncated]
-         texture: "square_particle",
-         minLifeTime: .15,
-         maxLifeTime: .3,
-         minEmitPower: 15,
-         maxEmitPower: 60,
-         minSize: .05,
-         maxSize: .1,
-         gravity: [0, -200, 0],
-         velocityGradients: [{
-           timeFraction: 0,
- ... (87 more removed lines; see GitHub link above)
+       return ep = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, ep(pp)
```
